export const themeData = {
  "blog": {
    "description": "一个后端开发者",
    "intro": "/README.md",
    "medias": {
      "GitHub": "https://github.com/yuyueq",
      "Gitee": "https://gitee.com/yuyueq",
      "Dingding": "https://im.dingtalk.com/",
      "Email": "https://3289705398@qq.com/",
      "Gmail": "https://dwxfrank@gmail.com"
    }
  },
  "encrypt": {
    "config": {
      "/guide/encrypt.html": [
        "$2a$10$PV0wEG6jS0TgblJTdj7UPezhzRqK/DWreYKrBSSiw/imR4NTI2t72"
      ]
    }
  },
  "pure": false,
  "iconPrefix": "iconfont icon-",
  "darkmode": "auto-switch",
  "themeColor": {
    "blue": "#2196f3"
  },
  "fullscreen": true,
  "locales": {
    "/": {
      "blog": {
        "description": "一个后端开发者",
        "intro": "/README.md",
        "medias": {
          "GitHub": "https://github.com/yuyueq",
          "Gitee": "https://gitee.com/yuyueq",
          "Dingding": "https://im.dingtalk.com/",
          "Email": "https://3289705398@qq.com/",
          "Gmail": "https://dwxfrank@gmail.com"
        }
      },
      "repoDisplay": true,
      "navbarIcon": true,
      "navbarAutoHide": "mobile",
      "hideSiteNameonMobile": true,
      "sidebar": {
        "/guide/": [
          {
            "text": "开始吧",
            "icon": "strong",
            "prefix": "",
            "children": [
              ""
            ]
          },
          {
            "text": "Java",
            "icon": "java",
            "prefix": "java/",
            "collapsable": true,
            "children": [
              "hashmapjilu",
              "mianshiwenti1",
              "mianshiwenti2",
              "mianshiwenti3"
            ]
          },
          {
            "text": "SQL",
            "icon": "mysql",
            "prefix": "sql/",
            "collapsable": true,
            "children": [
              "sqlhanshuwenti",
              "mysqlshizhan",
              "centosanzhuangmysql"
            ]
          },
          {
            "text": "资源",
            "icon": "workingDirectory",
            "prefix": "ziyuan/",
            "collapsable": true,
            "children": [
              "kaifaziyuan",
              "changyongziyuan"
            ]
          }
        ],
        "/posts/": [
          {
            "text": "个人经历",
            "icon": "people",
            "prefix": "article/",
            "children": [
              ""
            ]
          }
        ]
      },
      "sidebarIcon": true,
      "headingDepth": 2,
      "author": {
        "name": "Yuyueq",
        "url": "https://www.yuyueq.cn"
      },
      "themeConfig": {
        "pure": true
      },
      "logo": "/logo3.svg",
      "repo": "https://github.com/vuepress-theme-hope/vuepress-theme-hope",
      "docsDir": "demo/src",
      "navbar": [
        "/",
        {
          "text": "文章",
          "icon": "creative",
          "link": "/guide/"
        },
        {
          "text": "旧版文档",
          "icon": "note",
          "link": "https://yuyueq.github.io/simpleread"
        },
        {
          "text": "关于我",
          "icon": "people",
          "link": "/posts/article/"
        }
      ],
      "footer": "默认页脚",
      "displayFooter": true,
      "pageInfo": [
        "Author",
        "Original",
        "Date",
        "Category",
        "Tag",
        "Word",
        "ReadingTime"
      ],
      "lang": "zh-CN",
      "navbarLocales": {
        "langName": "简体中文",
        "selectLangText": "选择语言",
        "selectLangAriaLabel": "选择语言"
      },
      "metaLocales": {
        "prev": "上一页",
        "next": "下一页",
        "lastUpdated": "上次编辑于",
        "contributors": "贡献者",
        "editLink": "编辑此页"
      },
      "blogLocales": {
        "article": "文章",
        "articleList": "文章列表",
        "category": "分类",
        "tag": "标签",
        "timeline": "时间轴",
        "timelineTitle": "昨日不在",
        "all": "全部",
        "intro": "个人介绍",
        "star": "收藏",
        "slides": "幻灯片",
        "encrypt": "加密"
      },
      "outlookLocales": {
        "themeColor": "主题色",
        "darkmode": "外观",
        "fullscreen": "全屏"
      },
      "encryptLocales": {
        "title": "请输入密码",
        "errorHint": "请输入正确密码"
      },
      "routeLocales": {
        "404msg": [
          "这里什么也没有",
          "我们是怎么来到这儿的？",
          "这 是 四 零 四 !",
          "看起来你访问了一个失效的链接"
        ],
        "back": "返回上一页",
        "home": "带我回家"
      }
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
