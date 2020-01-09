const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const GlobalTheme = require('./src/GlobalTheme.json');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: GlobalTheme,
  }),
);
