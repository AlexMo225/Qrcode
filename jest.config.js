module.exports = {
    preset: "jest-expo",
    setupFiles: ["./node_modules/react-native-gesture-handler/jestSetup.js"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
    transformIgnorePatterns: [
        "node_modules/(?!(expo-modules-core|expo|react-native|@react-native|react-native-reanimated)/)", // Autorise la transformation de ces modules
    ],
    moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
};
