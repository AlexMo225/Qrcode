module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"], // Utilise le preset Expo pour Babel
        plugins: ["react-native-reanimated/plugin"], // Ajoute les plugins nécessaires
    };
};
