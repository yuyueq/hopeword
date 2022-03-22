export const data = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "目录",
  "lang": "zh-CN",
  "frontmatter": {
    "index": false,
    "title": "目录",
    "icon": "creative",
    "summary": "这是个测试文档，不可用！ --- 官方文档： MarkDown增强",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://yuyueq.github.io/simpleread/guide/"
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
          "content": "目录"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
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
    "minutes": 0.11,
    "words": 33
  },
  "filePathRelative": "guide/README.md"
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
