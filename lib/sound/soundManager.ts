import { Howl } from 'howler';

type SoundName = 'click' | 'hover' | 'success' | 'error' | 'whoosh';

class SoundManager {
  private sounds: { [key in SoundName]?: Howl } = {};
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

  // Initialize individual sound files
  initialize() {
    if (Object.keys(this.sounds).length > 0) return; // Already initialized

    const soundFiles: SoundName[] = ['click', 'hover', 'success', 'error', 'whoosh'];
    
    soundFiles.forEach(name => {
      this.sounds[name] = new Howl({
        src: [`/sounds/${name}.mp3`],
        volume: 0.2,  // Keep it subtle
        preload: true
      });
    });
  }

  // Play a sound with rate limiting
  play(soundName: SoundName) {
    if (!this.enabled || !this.sounds[soundName]) return;

    const now = Date.now();
    const lastPlay = this.lastPlayTime[soundName] || 0;

    // Rate limit to prevent sound stacking
    if (now - lastPlay < this.minPlayInterval) return;

    this.sounds[soundName]?.play();
    this.lastPlayTime[soundName] = now;
  }

  // Toggle sound on/off
  toggle(): boolean {
    this.enabled = !this.enabled;
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('sound-enabled', String(this.enabled));
    }

    // Initialize on first enable
    if (this.enabled && Object.keys(this.sounds).length === 0) {
      this.initialize();
    }

    return this.enabled;
  }

  // Check if sound is enabled
  isEnabled(): boolean {
    return this.enabled;
  }

  // Set volume for all sounds
  setVolume(volume: number) {
    const clampedVolume = Math.max(0, Math.min(1, volume));
    Object.values(this.sounds).forEach(sound => {
      sound?.volume(clampedVolume);
    });
  }
}

// Export singleton instance
export const soundManager = new SoundManager();
