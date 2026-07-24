/* eslint-env jest */

// Mock de react-native-safe-area-context pour les tests (pas de contexte natif).
jest.mock('react-native-safe-area-context', () =>
  require('react-native-safe-area-context/jest/mock').default,
);
