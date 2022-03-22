export const categoryMap = {"category":{"/":{"path":"/category/","map":{"使用指南":{"path":"/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","keys":["v-4eaf9f84","v-4c863446","v-bf720700","v-0978b044"]},"Java":{"path":"/category/java/","keys":["v-03e10fe4","v-144bddd3","v-1600b672","v-17b58f11"]},"Linux":{"path":"/category/linux/","keys":["v-3b37eff0"]},"SQL":{"path":"/category/sql/","keys":["v-6ef07610","v-6ac291df"]},"网站":{"path":"/category/%E7%BD%91%E7%AB%99/","keys":["v-7fb61af0","v-3d3c541e"]},"个人":{"path":"/category/%E4%B8%AA%E4%BA%BA/","keys":["v-0d1b1fee"]}}}},"tag":{"/":{"path":"/tag/","map":{"禁用":{"path":"/tag/%E7%A6%81%E7%94%A8/","keys":["v-4c863446"]},"文章加密":{"path":"/tag/%E6%96%87%E7%AB%A0%E5%8A%A0%E5%AF%86/","keys":["v-bf720700"]},"markdown":{"path":"/tag/markdown/","keys":["v-0978b044"]},"页面配置":{"path":"/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/","keys":["v-4eaf9f84"]},"使用指南":{"path":"/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","keys":["v-4eaf9f84"]},"集合":{"path":"/tag/%E9%9B%86%E5%90%88/","keys":["v-03e10fe4"]},"面试":{"path":"/tag/%E9%9D%A2%E8%AF%95/","keys":["v-144bddd3","v-1600b672","v-17b58f11"]},"centos7":{"path":"/tag/centos7/","keys":["v-3b37eff0"]},"极客专栏":{"path":"/tag/%E6%9E%81%E5%AE%A2%E4%B8%93%E6%A0%8F/","keys":["v-6ac291df"]},"博客":{"path":"/tag/%E5%8D%9A%E5%AE%A2/","keys":["v-6ef07610"]},"资源":{"path":"/tag/%E8%B5%84%E6%BA%90/","keys":["v-7fb61af0","v-3d3c541e"]},"经历":{"path":"/tag/%E7%BB%8F%E5%8E%86/","keys":["v-0d1b1fee"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
