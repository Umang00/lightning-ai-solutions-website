import { Howl } from 'howler';

class SoundManager {
  private sounds: Howl | null = null;
  private enabled: boolean = false;
  private lastPlayTime: { [key: string]: number } = {};
  private minPlayInterval = 100; // Minimum ms between same sound plays

  constructor() {
    if (typeof window !== 'undefined') {
      // Get saved preference
      const saved = localStorage.getItem('sound-enabled');
      this.enabled = saved === 'true';
    }
  }

  // Initialize sound sprites
  initialize() {
    if (this.sounds) return; // Already initialized

    this.sounds = new Howl({
      src: ['/sounds/ui-sounds.mp3'],
      sprite: {
        click: [0, 100],         // Button clicks
        hover: [200, 50],        // Hover sounds
        success: [300, 500],     // Success notifications
        error: [900, 400],       // Error notifications
        whoosh: [1400, 200]      // Transitions
      },
      volume: 0.2  // Keep it subtle
    });
  }

  // Play a sound with rate limiting
  play(soundName: string) {
    if (!this.enabled || !this.sounds) return;

    const now = Date.now();
    const lastPlay = this.lastPlayTime[soundName] || 0;

    // Rate limit to prevent sound stacking
    if (now - lastPlay < this.minPlayInterval) return;

    this.sounds.play(soundName);
    this.lastPlayTime[soundName] = now;
  }

  // Toggle sound on/off
  toggle(): boolean {
    this.enabled = !this.enabled;
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('sound-enabled', String(this.enabled));
    }

    // Initialize on first enable
    if (this.enabled && !this.sounds) {
      this.initialize();
    }

    return this.enabled;
  }

  // Check if sound is enabled
  isEnabled(): boolean {
    return this.enabled;
  }

  // Set volume
  setVolume(volume: number) {
    if (this.sounds) {
      this.sounds.volume(Math.max(0, Math.min(1, volume)));
    }
  }
}

// Export singleton instance
export const soundManager = new SoundManager();
