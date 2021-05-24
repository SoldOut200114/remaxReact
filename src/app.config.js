const { getAllPages, getTabBar } = require('./config/commonConfig');

const pages = getAllPages();
const tabBar = getTabBar(pages);

module.exports.ali = {
  pages,
  window: {
    defaultTitle: '瓜皮新世界',
    titleBarColor: '#282c34',
  },
};

module.exports.wechat = {
  pages,
  entryPagePath: "pages/index/index",
  window: {
    navigationBarTitleText: '瓜皮新世界',
    navigationBarBackgroundColor: '#282c34',
    // navigationStyle: 'custom'
  },
  tabBar: tabBar
};

module.exports.toutiao = {
  pages,
  window: {
    navigationBarTitleText: '瓜皮新世界',
    navigationBarBackgroundColor: '#282c34',
  },
};

module.exports.web = {
  pages,
  title: '瓜皮新世界',
};
