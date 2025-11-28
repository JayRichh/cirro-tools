# CIRRO Dark Mode

A Chrome extension that adds a dark mode theme to CIRRO.
<img width="359" height="397" alt="image" src="https://github.com/user-attachments/assets/c573e60e-ce02-481e-832b-d7ad414f17d0" />

## Features

### One-Click Dark Mode Toggle
- Instantly switch between light and dark themes
- Settings persist across sessions
- Blobs floating around

### Comprehensive Styling
- **UI Coverage**: Headers, sidebars, navigation, forms, tables, dropdowns, modals
- **Component Handling**: React-Select, Kendo UI grids, Leaflet maps, Highcharts
- **Icon Optimization**: Automatic contrast adjustment for logos and icons
- **Accessibility**: Improved readability with carefully chosen color contrasts

## Installation

### From Chrome Web Store
1. Visit the [CIRRO Dark Mode](https://chrome.google.com/webstore) page
2. Click "Add to Chrome"
3. Navigate to app.cirro.live (or if already open, reload the page to sync) and toggle dark mode from the extension icon

### Manual Installation (Development)
1. Clone this repository
2. Install dependencies: `npm install`
3. Build the extension: `npm run build`
4. Open Chrome and navigate to `chrome://extensions/`
5. Enable "Developer mode"
6. Click "Load unpacked" and select the `dist` directory

## Usage

1. Navigate to https://app.cirro.live
2. Click the CIRRO Dark Mode extension icon in your toolbar
3. Toggle the dark mode switch
4. The page will instantly update to dark theme

## Tech Stack

- **TypeScript** - Type-safe development
- **React** - Modern UI components
- **Webpack** - Module bundling
- **Chrome Extension Manifest V3** - Latest extension platform

## Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Commands

```bash
# Install dependencies
npm install

# Development build with watch mode
npm run watch

# Production build
npm run build

# Run tests
npm run test
```

### Project Structure

```
cirro-dark-mode/
├── src/
│   ├── popup.tsx          # Extension popup UI
│   ├── content_script.tsx # Dark mode CSS injection
│   └── background.ts      # Background service worker
├── public/
│   ├── manifest.json      # Extension manifest
│   ├── popup.html         # Popup HTML
│   └── icon.png          # Extension icon
└── dist/                  # Built extension (generated)
```

## Browser Compatibility

- Chrome 88+
- Edge 88+
- Any Chromium-based browser with Manifest V3 support

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## Privacy

This extension:
- Only runs on app.cirro.live
- Does not collect any user data
- Does not make external network requests
- Stores only dark mode preference locally


## Version History

### v1.0.0 (2025)
- Initial release
- Complete dark mode implementation
- Support for all CIRRO UI components
- React-Select and Kendo UI compatibility
- Leaflet maps dark theme
- Highcharts dark theme support

### v1.0.1 (2025)
- Radar and blobs
