const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  one: true,
  output: 'dist/' + process.env.REMAX_PLATFORM,
  // configWebpack({ config }) {
  //   config.resolve.alias
  //     .merge({
  //       'components': path.resolve(process.cwd(), 'src/components'),
  //     })
  //     .end();
  // },
  
};
