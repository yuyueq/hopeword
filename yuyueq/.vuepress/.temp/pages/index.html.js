export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Yuyueq",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "icon": "home",
    "title": "Yuyueq",
    "heroImage": "/yuyueq.png",
    "heroText": "Yuyueq",
    "tagline": "悟已往之不谏，知来者之可追。实迷途其未远，觉今是而昨非",
    "actions": [
      {
        "text": "开始阅读 💡",
        "link": "/guide/"
      },
      {
        "text": "关于我 🏠",
        "link": "/posts/article/README.md",
        "type": "secondary"
      }
    ],
    "summary": "-->",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://yuyueq.github.io/simpleread/"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "余月七"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "Yuyueq"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "website"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "readingTime": {
    "minutes": 0.45,
    "words": 135
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
