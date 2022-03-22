export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-6ef07610","v-03e10fe4","v-144bddd3","v-1600b672","v-17b58f11","v-3b37eff0","v-6ac291df","v-7fb61af0","v-3d3c541e","v-0d1b1fee","v-4eaf9f84","v-79fdd481","v-0e503981","v-4c863446","v-bf720700","v-0978b044","v-fffb8e28"]}},"encrypted":{"/":{"path":"/encrypted/","keys":["v-bf720700"]}},"slide":{"/":{"path":"/slides/","keys":["v-0e503981"]}},"star":{"/":{"path":"/star/","keys":["v-6ef07610","v-03e10fe4","v-144bddd3","v-1600b672","v-17b58f11","v-3b37eff0","v-6ac291df","v-7fb61af0","v-3d3c541e","v-0d1b1fee","v-4eaf9f84"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-6ef07610","v-03e10fe4","v-144bddd3","v-1600b672","v-17b58f11","v-3b37eff0","v-6ac291df","v-7fb61af0","v-3d3c541e","v-0d1b1fee","v-4eaf9f84"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
