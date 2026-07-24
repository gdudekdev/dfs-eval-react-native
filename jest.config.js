module.exports = {
  preset: '@react-native/jest-preset',
  setupFiles: ['./jest.setup.js'],
  // Laisse Babel transformer les librairies publiées en ESM.
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-vector-icons|@react-navigation|react-native-screens|react-native-safe-area-context)/)',
  ],
};
