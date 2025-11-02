# Sound Effects Setup Guide

## 🎵 Quick Start

The sound system is already configured but needs sound files to be added.

## 📁 Step 1: Create Sound Directory

```bash
mkdir public/sounds
```

## 🔊 Step 2: Download Sound Files

You need these 7 sound files (MP3 format recommended):

### 1. **click.mp3** (50-100ms)
- Button click sound
- Should be short and crisp
- Recommended: Soft mechanical click

### 2. **hover.mp3** (20-50ms)
- Very subtle hover sound
- Should be extremely quiet
- Recommended: Soft tick or blip

### 3. **success.mp3** (300-500ms)
- Success notification sound
- Should be pleasant and satisfying
- Recommended: Ascending chime or bell

### 4. **error.mp3** (200-400ms)
- Error notification sound
- Should be gentle, not harsh
- Recommended: Descending tone or soft bonk

### 5. **whoosh.mp3** (100-200ms)
- Transition/movement sound
- Should be airy and smooth
- Recommended: Air swoosh or wind

### 6. **pop.mp3** (50-150ms)
- Pop-up/modal sound
- Should be light and bubbly
- Recommended: Soft pop or bubble sound

### 7. **tick.mp3** (20-50ms)
- Counter tick sound
- Should be very subtle
- Recommended: Soft click or tick

## 🎨 Recommended Free Sound Sources

### Option 1: Freesound.org
1. Visit [freesound.org](https://freesound.org)
2. Create free account
3. Search for each sound type
4. Filter by "Creative Commons 0" for commercial use
5. Download and rename files

### Option 2: Zapsplat
1. Visit [zapsplat.com](https://zapsplat.com)
2. Create free account
3. Browse "UI Sounds" category
4. Download sounds (free for commercial use with attribution)

### Option 3: Mixkit
1. Visit [mixkit.co/free-sound-effects](https://mixkit.co/free-sound-effects/)
2. Browse "Interface & UI" sounds
3. No attribution required
4. Download directly

### Option 4: Pixabay
1. Visit [pixabay.com/sound-effects](https://pixabay.com/sound-effects/)
2. Search for UI sounds
3. Free for commercial use
4. No attribution required

## 📦 Step 3: Add Files to Project

Place all sound files in the `/public/sounds/` directory:

```
public/
  sounds/
    click.mp3
    hover.mp3
    success.mp3
    error.mp3
    whoosh.mp3
    pop.mp3
    tick.mp3
```

## ⚙️ Step 4: Enable Sound System

Open `lib/sounds/soundManager.ts` and uncomment the sound initialization code (lines 33-69):

```typescript
// Find this section and uncomment it:
this.sounds.set(
  "click",
  new Howl({
    src: ["/sounds/click.mp3"],
    volume: this.volume,
  })
);

// ... rest of the sounds
```

## 🎚️ Step 5: Adjust Volume Levels

Edit volume levels in `soundManager.ts` to your preference:

```typescript
// Default volumes (0.0 to 1.0)
private volume: number = 0.3; // Main volume (30%)

// Per-sound volume adjustments
this.sounds.set(
  "hover",
  new Howl({
    src: ["/sounds/hover.mp3"],
    volume: this.volume * 0.5, // Even more subtle (15%)
  })
);
```

## 🔧 Step 6: Test the System

1. Start your dev server:
   ```bash
   npm run dev
   ```

2. Open browser console and test:
   ```javascript
   import { getSoundManager } from '@/lib/sounds/soundManager';
   const sm = getSoundManager();
   sm.play('click');
   ```

3. Or use in a component:
   ```tsx
   import { useSound } from '@/lib/sounds/soundManager';

   function TestComponent() {
     const { play } = useSound();
     return <button onClick={() => play('click')}>Test Sound</button>;
   }
   ```

## 🎯 Usage Examples

### Basic Button Click

```tsx
import { AnimatedButton } from '@/components/animations';

<AnimatedButton variant="scale" enableSound={true}>
  Click Me
</AnimatedButton>
```

### Card Hover Sound

```tsx
import { AnimatedCard } from '@/components/animations';

<AnimatedCard variant="lift" enableSound={true}>
  Card Content
</AnimatedCard>
```

### Custom Sound Trigger

```tsx
import { useSound } from '@/lib/sounds/soundManager';

function MyComponent() {
  const { play } = useSound();

  const handleSubmit = async () => {
    try {
      await submitForm();
      play('success');
    } catch (error) {
      play('error');
    }
  };

  return <button onClick={handleSubmit}>Submit</button>;
}
```

## 🎛️ User Controls

The sound system includes built-in user controls:

```tsx
import { useSound } from '@/lib/sounds/soundManager';

function SoundControls() {
  const { toggleMute, setVolume, isMuted, volume } = useSound();

  return (
    <div>
      <button onClick={toggleMute}>
        {isMuted ? '🔇 Unmute' : '🔊 Mute'}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
      />
    </div>
  );
}
```

## 📱 Best Practices

### ✅ DO:
- Keep volume LOW (0.2-0.4 max)
- Use high-quality, short sounds (< 200ms usually)
- Make sounds optional/off by default
- Provide easy mute toggle
- Use sounds sparingly (only key interactions)
- Test with headphones AND speakers

### ❌ DON'T:
- Auto-play any sounds on page load
- Use sounds on every hover
- Make sounds loud or jarring
- Use sounds without user consent
- Add background music (unless explicitly requested)
- Use copyrighted sounds without permission

## 🎨 Creating Custom Sounds

If you want to create your own sounds:

### Tools:
1. **Audacity** (Free) - [audacityteam.org](https://www.audacityteam.org/)
2. **GarageBand** (Mac) - Built-in
3. **FL Studio** - Professional (paid)

### Tips:
1. Record at 44.1kHz or 48kHz
2. Export as MP3 (128-192 kbps)
3. Normalize audio to -3dB to -6dB
4. Add slight fade in/out (5-10ms)
5. Remove silence at start/end
6. Keep file sizes small (< 50KB)

## 🔍 Debugging

### Sounds not playing?

1. **Check browser console** for errors
2. **Verify file paths** in soundManager.ts
3. **Check browser autoplay policy**:
   ```javascript
   navigator.userActivation.hasBeenActive
   ```
4. **Test in different browsers** (Chrome, Firefox, Safari)
5. **Check file format** (MP3 is most compatible)

### Sounds cutting off?

1. Increase Howl pool size:
   ```typescript
   new Howl({
     src: ["/sounds/click.mp3"],
     volume: this.volume,
     pool: 5, // Allow 5 concurrent plays
   })
   ```

### Sounds delayed?

1. **Preload sounds** on page load:
   ```typescript
   useEffect(() => {
     const sm = getSoundManager();
     sm.preload('click');
     sm.preload('hover');
   }, []);
   ```

## 📊 File Size Guidelines

Keep total sound package under 500KB:

| Sound | Target Size | Max Duration |
|-------|-------------|--------------|
| click | 5-15 KB | 50-100ms |
| hover | 3-10 KB | 20-50ms |
| success | 20-40 KB | 300-500ms |
| error | 15-30 KB | 200-400ms |
| whoosh | 10-25 KB | 100-200ms |
| pop | 5-15 KB | 50-150ms |
| tick | 3-8 KB | 20-50ms |

## 🚀 Performance Optimization

### Lazy Loading

```typescript
// Only load sounds when user enables them
const [soundsEnabled, setSoundsEnabled] = useState(false);

useEffect(() => {
  if (soundsEnabled) {
    getSoundManager(); // Initializes sounds
  }
}, [soundsEnabled]);
```

### Sprite Sheets (Advanced)

Combine multiple sounds into one file:

```typescript
new Howl({
  src: ['/sounds/ui-sounds.mp3'],
  sprite: {
    click: [0, 100],        // Start at 0ms, duration 100ms
    hover: [200, 50],       // Start at 200ms, duration 50ms
    success: [300, 500],    // Start at 300ms, duration 500ms
    error: [900, 400],      // Start at 900ms, duration 400ms
  },
  volume: 0.3
});
```

## 📝 License Considerations

When using free sounds, check licenses:

- **CC0** - No attribution required, commercial use OK
- **CC BY** - Attribution required, commercial use OK
- **CC BY-NC** - Attribution required, NO commercial use
- **Royalty-free** - Usually OK for commercial, read terms

Always keep attribution file:

```
// public/sounds/ATTRIBUTIONS.txt
click.mp3- User123 on Freesound.org (CC0)
hover.mp3- User456 on Zapsplat (Free License)
success.mp3- Mixkit (No attribution required)
...
```

## ✨ Next Steps

After setup:
1. Test all sounds across different devices
2. Get user feedback on volume levels
3. Consider A/B testing with/without sounds
4. Add sound toggle to your settings/header
5. Consider adding haptic feedback for mobile (vibration API)

## 🆘 Support

If you encounter issues:
1. Check browser console for errors
2. Review Howler.js docs: [howlerjs.com](https://howlerjs.com/)
3. Test sound files independently
4. Verify browser compatibility

---

**Remember**: Sound should enhance, not distract. When in doubt, make it more subtle!
