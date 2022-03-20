export const data = {
  "key": "v-e1e3da16",
  "path": "/posts/",
  "title": "posts",
  "lang": "zh-CN",
  "frontmatter": {
    "summary": "posts",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://yuyueq.github.io/simpleread/posts/"
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
          "content": "posts"
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
    "minutes": 0,
    "words": 1
  },
  "filePathRelative": "posts/README.md"
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
