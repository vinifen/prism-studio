# 📱 Prism Studio Mobile

# v-1.0.0.-bete

React Native mobile app for an art supplies e-commerce platform built with Expo Router and TypeScript.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Expo CLI
- Android Studio / iOS Simulator / Expo Go app

### Installation

```bash
# Navigate to mobile directory
cd mobile

# Install dependencies
npm install

# Set your local IP for API connection (only needed for other devices)
npm run set-ip <your-ip>

# Start development server
npm start
```

## 🛠️ Tech Stack

- **React Native** 0.81.4
- **Expo** SDK 54
- **Expo Router** 6.0.8 (File-based routing)
- **TypeScript** 5.9.2
- **Axios** 1.12.2 (API client)

## 🔧 Configuration

### API Connection
Update `src/api/ip.ts` with your local IP (only needed when testing on other devices):
```typescript
const ip = "192.168.0.7"  // Your local network IP
export default ip;
```

Or use the helper script:
```bash
npm run set-ip 192.168.0.7
```

> **Note**: The `set-ip` command is only needed when testing on physical devices or different machines. For local development with emulators, the default configuration should work.

## 📋 Available Scripts

```bash
npm start          # Start Expo dev server
npm run android    # Run on Android
npm run ios        # Run on iOS
npm run web        # Run on web
npm run set-ip     # Set local IP for API
```

## 🔌 Backend Integration

This mobile app connects to the [Market Core API](../api) backend:
- **Base URL**: `http://<your-ip>:8010/`
- **Documentation**: Available at `/api/documentation`
- **Setup**: Run `cd ../api && sudo ./run setup`
