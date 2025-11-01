# UI Sound Effects (Optional)

The animation system includes support for subtle UI sound effects, but they are **completely optional**.

## Current Status
✅ Sound system infrastructure is in place  
⚠️ Sound sprite file not yet added  
✨ All animations work perfectly without sounds  

## To Add Sounds (Optional)

If you want to enable UI sound effects:

### 1. Download Free Sound Effects
Get these from **Pixabay** (no attribution required):
- **UI Click**: https://pixabay.com/sound-effects/search/ui%20click/
- **UI Hover**: https://pixabay.com/sound-effects/search/ui%20hover/
- **Success**: https://pixabay.com/sound-effects/search/success/
- **Error**: https://pixabay.com/sound-effects/search/error/
- **Whoosh**: https://pixabay.com/sound-effects/search/whoosh/

Alternatively, use **Mixkit**: https://mixkit.co/free-sound-effects/click/

### 2. Create Sound Sprite
Using **Audacity** (free audio editor):
1. Download 5 sounds (click, hover, success, error, whoosh)
2. Import all sounds into one project
3. Arrange them with these timings:
   - Click: 0-100ms
   - Hover: 200-250ms
   - Success: 300-800ms
   - Error: 900-1300ms
   - Whoosh: 1400-1600ms
4. Export as `ui-sounds.mp3`
5. Place in this directory: `public/sounds/ui-sounds.mp3`

### 3. Enable Sounds
Once the file is added, users can toggle sounds on/off using the volume icon in the header.

## Sound Sprite Configuration
The sound sprite mapping in `lib/sound/soundManager.ts`:
```typescript
sprite: {
  click: [0, 100],         // Button clicks
  hover: [200, 50],        // Hover sounds
  success: [300, 500],     // Success notifications
  error: [900, 400],       // Error notifications
  whoosh: [1400, 200]      // Transitions
}
```

## Note
The website works perfectly without sounds. This is purely an optional enhancement for user interaction feedback.
