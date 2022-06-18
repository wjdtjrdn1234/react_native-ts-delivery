/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *webpack dev server대신에 metro server사용
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
