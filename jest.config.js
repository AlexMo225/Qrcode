module.exports = {
    preset: 'react-native',
    transform: {
      '^.+\\.(js|ts|tsx)$': 'babel-jest', // Utilise Babel pour transformer les fichiers JavaScript/TypeScript
    },
    testPathIgnorePatterns: [
      '/node_modules/', // Ignore le dossier node_modules pour les tests
    ],
    setupFiles: [
      './node_modules/react-native-gesture-handler/jestSetup.js', // Si tu utilises react-native-gesture-handler
      './node_modules/react-native-reanimated/lib/reanimated2/jestUtils.js', // Si tu utilises react-native-reanimated
    ],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    coveragePathIgnorePatterns: [
      '/node_modules/', // Ignore les fichiers dans node_modules pour la couverture
      'jest.config.js',  // Ignore le fichier de config
    ],
  };
  