# PWA Configuration with Vite + Vue.js - Guide

## 🔧 Setup Steps

### 1. Install Dependencies
```bash
pnpm add -D vite-plugin-pwa @vite-pwa/assets-generator
```

### 2. Configure VitePWA
In your `vite.config.js`, add the plugin with the manifest configuration:

```javascript
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    // ... other plugins
    VitePWA({ 
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Vue.js Tips',
        short_name: 'Vue Tips',
        description: 'Vue.js Tips By Siméon Azogbonon',
        theme_color: '#111827',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),
  ],
});
```

### 3. Add PWA Meta Tags
In `index.html`, add the specific meta tags:

```html
<!-- PWA Meta Tags (optional with VitePWA) -->
<!-- iOS status bar style -->
<meta name="apple-mobile-web-app-status-bar-style" content="default" />
<!-- App name on iOS -->
<meta name="apple-mobile-web-app-title" content="Vue.js Tips" />
<!-- Disable tap highlight on Windows -->
<meta name="msapplication-tap-highlight" content="no" />
```

### 4. Prepare Icons
Add your main logo into `public` folder then run

```bash
pnpm generate-pwa-assets
```

### 5. Build and Test
```bash
# Build the project
pnpm build

# Preview locally
pnpm preview
```

## ✅ Result
After building, VitePWA automatically generates:
- `manifest.webmanifest` - PWA configuration
- `sw.js` - Service Worker
- Icons in various sizes (64x64, 192x192, 512x512)
- `apple-touch-icon-180x180.png` - iOS icon

## 🎯 Testing the PWA
1. Open the preview URL in your browser
2. Click the install icon in the address bar
3. Check in DevTools > Application that the Service Worker is active

## 💡 Advantages of this Setup
- **Automatic**: VitePWA generates everything needed
- **Minimal**: Simple and efficient configuration
- **Compatible**: Works on all modern browsers
- **Maintainable**: Centralized configuration in `vite.config.js`
