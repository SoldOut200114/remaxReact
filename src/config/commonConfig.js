const fs = require('fs');
const { resolve } = require('path');
const { getTabBar } = require('./tabBarConfig');

module.exports.getAllPages = () => {
    let pages = [], path = resolve('./src/pages');
    const pageConfig = {
        prefix: 'pages/',
        postfix: '/index',
        homePage: 'index'
    };
    const files = fs.readdirSync(path);

    files.forEach(function (item, index) {
        let stat = fs.lstatSync(path + '/' + item);
        if (stat.isDirectory() === true) { 
            pages.push(item);
        }
    });

    function setPages(page) {
        return pageConfig.prefix + page + pageConfig.postfix;
    }

    (function (pages) {
        let index = pages.indexOf(pageConfig.homePage), change;

        if (!!~index) {
            change = pages[0];
            pages[0] = pageConfig.homePage;
            pages[index] = change;
        }

    })(pages)
    
    pages = pages.map(setPages);
    console.log(pages);

    return pages;
};

module.exports.getTabBar = getTabBar;