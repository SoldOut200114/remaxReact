Component({
  properties: {
    // xiangxia | apps-copy | apps | xiaoxi-copy | xiaoxi | yonghu | dianpu | shujutongji | shangxiniocn02 | gouwuche | wenjianxinxi | shujutongji-copy | shezhi | huo-copy | jushoucang-copy | jushoucang | shouye | huo | shouye-copy
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      value: '',
      observer: function(color) {
        this.setData({
          isStr: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 18,
      observer: function(size) {
        this.setData({
          svgSize: size / 750 * tt.getSystemInfoSync().windowWidth,
        });
      },
    },
  },
  data: {
    svgSize: 18 / 750 * tt.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true,
  },
});
