import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'id.survplus.jelajahair',
  appName: 'jelajahAir',
  webDir: 'dist',
  server: {
    androidScheme: 'http'
  },
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      androidClientId: '576386395599-cd3h0q6d10n0nd6loiof5l2vgikej5bn.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
