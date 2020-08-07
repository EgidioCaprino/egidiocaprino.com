const withCss = require('@zeit/next-css');

const production = process.env.NODE_ENV === 'production';

module.exports = withCss({
  assetPrefix: production ? '/egidiocaprino.github.io/' : '',
});
