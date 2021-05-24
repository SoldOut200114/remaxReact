const tabBar = {
    color: "#333333",
    selectedColor: "#1296db",
    backgroundColor:"#fff",
    borderStyle: "black",
    position: 'bottom'
};

const tabBarLists = {
    'pages/index/index': {
        text: '首页',
        iconPath:'images/home.png',
        selectedIconPath:'images/home_selected.png',
        sort: 1
    },
    'pages/function/index': {
        text: '功能',
        iconPath:'images/function.png',
        selectedIconPath:'images/function_selected.png',
        sort: 2
    }
};

module.exports.getTabBar = (pages) => {
    let lists = [];

    pages.forEach(page => {
        tabBarLists[page] && (tabBarLists[page] = {
            ...tabBarLists[page],
            pagePath: page
        });

        tabBarLists[page] && lists.push(tabBarLists[page]);
    });

    lists.sort((a, b) => a.sort - b.sort);
    console.log(lists);

    tabBar.list = lists;

    return tabBar;
}

