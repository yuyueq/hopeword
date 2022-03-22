import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-79fdd481","/home.html",{"title":"博客主页","icon":"home","type":"article","readingTime":{"minutes":0.17,"words":50},"excerpt":"这是一个博客主页。 要使用此布局，你应该在页面前端设置 layout: Blog 和 home: true。 相关配置文档请见 博客主页。"},["/home","/home.md"]],
  ["v-8daa1a0e","/",{"title":"Yuyueq","icon":"home","type":"home","readingTime":{"minutes":0.45,"words":135},"excerpt":"-->"},["/index.html","/README.md"]],
  ["v-0e503981","/slide.html",{"title":"幻灯片页","icon":"slides","type":"slide","readingTime":{"minutes":4.47,"words":1342},"excerpt":"@slidestart 幻灯片演示 一个简单的幻灯片演示与各种小贴士。\r\" 作者 Mr.Hope. 请滚动鼠标滚轮进入下一页\" --- 标注幻灯片 👇 -- 标注幻灯片 使用 --- 标注水平幻灯片 在水平幻灯片中使用 -- 分割垂直幻灯片 使用 `` 在幻灯片上添加属性 使用 `` 在前一个 HTML 元素上添加属性 --- Markdown 你可以在幻"},["/slide","/slide.md"]],
  ["v-4c863446","/guide/disable.html",{"title":"组件禁用","icon":"config","type":"article","readingTime":{"minutes":0.25,"words":74},"excerpt":"<p>你可以通过设置页面的 Frontmatter，在页面禁用一些功能。</p>\n","category":["使用指南"],"tag":["禁用"]},["/guide/disable","/guide/disable.md"]],
  ["v-bf720700","/guide/encrypt.html",{"title":"密码加密的文章","icon":"lock","type":"article","readingTime":{"minutes":0.48,"words":144},"excerpt":"密码加密的文章 实际的文章内容。 段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字。 段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字","category":["使用指南"],"tag":["文章加密"],"isEncrypted":true},["/guide/encrypt","/guide/encrypt.md"]],
  ["v-0978b044","/guide/markdown.html",{"title":"Markdown 增强","icon":"markdown","type":"article","readingTime":{"minutes":2.92,"words":875},"excerpt":"<p>VuePress 的每个文档页面都是由 Markdown 渲染而成。所以你需要通过在相应路径创建编写 Markdown 建立你的文档或博客页面。</p>\n","category":["使用指南"],"tag":["markdown"]},["/guide/markdown","/guide/markdown.md"]],
  ["v-4eaf9f84","/guide/page.html",{"title":"页面配置","icon":"page","type":"article","readingTime":{"minutes":0.65,"words":194},"excerpt":"<p><code>more</code> 注释之前的内容被视为文章摘要。</p>\n","author":"Ms.Hope","date":"2020-01-01T00:00:00.000Z","category":["使用指南"],"tag":["页面配置","使用指南"],"sticky":true,"star":true},["/guide/page","/guide/page.md"]],
  ["v-fffb8e28","/guide/",{"title":"目录","icon":"creative","type":"article","readingTime":{"minutes":5.35,"words":1605},"excerpt":"资源 开发 🔥🔥🔥开发中的相关网站资源（长更！） 程序员崩溃的40个瞬间（跳转语雀) Java开发手册阿里（跳转语雀) layuiAdminPro单页版开发者文档 --- 日常 🔥🔥🔥我常用的网站资源集合（长更！） 应届生扫盲，求职必看！三方协议&签约违约你必须了解的事 --- 语雀 _会把语雀平时记录的东西搬过来，当做公开笔记_ 2022-03"},["/guide/index.html","/guide/README.md"]],
  ["v-03e10fe4","/guide/java/hashmapjilu.html",{"title":"对于HashMap的一次问题记录","type":"article","readingTime":{"minutes":15.42,"words":4627},"excerpt":"\" HashMap的具体学习，认识了解。\" ------ 前言 也是最近开始面试才发现，HashMap是问的真多。以前听学长或自己在网上看到过一些面试资料都在说集合、线程这块比较重要，面试的重点。自己也是有那抵触情绪，所以自认为这块不重要，但最终发现自己真的太狭隘了，Map这块的知识真的是对数据存储有一个新的认识。但我现在认识尚浅，所以也真的说不出来什么感悟","author":"余月七","date":"2022-03-18T00:00:00.000Z","category":["Java"],"tag":["集合"],"sticky":true,"star":true},["/guide/java/hashmapjilu","/guide/java/hashmapjilu.md"]],
  ["v-144bddd3","/guide/java/mianshiwenti1.html",{"title":"面试问题记录 一 (基础部分)","type":"article","readingTime":{"minutes":11.45,"words":3436},"excerpt":"\" 面试问题记录（一） 基础部分\" 前言 不知不觉已经大三结束了，最近也在准备实习面试，打算把一些面试问到的Java基础问题记录一下，其实我个人面的还是比较基础简单的，大厂也目前就这水平也不敢投，所以就只能投一些要求还是比较低的，面试这块会长期记录，毕竟也是对自己问题的反馈记录。 **以下部分是Java基础，至于数据库、JavaWeb、框架、Linux、中间","author":"余月七","date":"2022-03-18T00:00:00.000Z","category":["Java"],"tag":["面试"],"sticky":true,"star":true},["/guide/java/mianshiwenti1","/guide/java/mianshiwenti1.md"]],
  ["v-1600b672","/guide/java/mianshiwenti2.html",{"title":"面试问题记录 二 (数据库、Linux、Redis)","type":"article","readingTime":{"minutes":8.48,"words":2543},"excerpt":"\" 面试问题记录 二 (数据库、Linux、Redis)\" 前言 接着上次的面试问题记录，在最后还有几道问的数据结构方面的知识点要补充 还是那句话：如果文中解释有明显错误，劳烦请及时指正我，在这不胜感激！！！ ------ 一、MySQL 1.说说MySQL与MongoDB的区别？ 答：首先就是MySQL是关系型数据库，由二维表及其自身之间的关系组成的数据组","author":"余月七","date":"2022-03-18T00:00:00.000Z","category":["Java"],"tag":["面试"],"sticky":true,"star":true},["/guide/java/mianshiwenti2","/guide/java/mianshiwenti2.md"]],
  ["v-17b58f11","/guide/java/mianshiwenti3.html",{"title":"面试问题记录 三 (JavaWeb、JavaEE)","type":"article","readingTime":{"minutes":18.37,"words":5511},"excerpt":"前言 这块还是比较关键的，考察你对整个业务流程的熟练度吧，虽然企业级的项目没有接触过，但像最基本的内容必须得融会贯通，这一点我感觉自己还是处于浅层，没有深入的去思考以及练习过，其实就像那句话，“打字速度不够，说明你敲的代码不够多”，其实有时候最原始的方法是最简单有效的，虽然会耗大量时间，但一件事有利就有弊，所以还是加强自身代码熟练度。 还是那句话，如果文中有","author":"余月七","date":"2022-03-18T00:00:00.000Z","category":["Java"],"tag":["面试"],"sticky":true,"star":true},["/guide/java/mianshiwenti3","/guide/java/mianshiwenti3.md"]],
  ["v-3b37eff0","/guide/sql/centosanzhuangmysql.html",{"title":"一次Centos7下简单的Mysql安装记录","type":"article","readingTime":{"minutes":2.34,"words":702},"excerpt":"前言 由于网上安装Mysql的方式有很多种，但有些方式并未安装成功，比如用Yum源，还待后续查看具体是哪一步出了问题 --- 以rpm包的形式安装Mysql 第一步：yum install wget -y //安装wget工具 --- 第二步: 以tar包形式拉取下载并进行解压 1.用wget拉取下载： wget http://dev.mysql.com/g","author":"余月七","date":"2022-03-18T00:00:00.000Z","category":["Linux"],"tag":["centos7"],"sticky":true,"star":true},["/guide/sql/centosanzhuangmysql","/guide/sql/centosanzhuangmysql.md"]],
  ["v-6ac291df","/guide/sql/mysqlshizhan.html",{"title":"MySQL实战45讲","type":"article","readingTime":{"minutes":627.8,"words":188340},"excerpt":"\" 本文由 简悦 SimpRead 转码， 原文地址 learn.lianglianglee.com\"\r\" 你好，我是林晓斌，网名 “丁奇”，欢迎加入我的专栏，和我一起开始 MySQL 学习之旅。\"\r\"\" 你好，我是林晓斌，网名 “丁奇”，欢迎加入我的专栏，和我一起开始 MySQL 学习之旅。我曾先后在百度和阿里任职，从事 MySQL 数据库方面的工作，一步","author":"余月七","date":"2022-03-18T00:00:00.000Z","category":["SQL"],"tag":["极客专栏"],"sticky":true,"star":true},["/guide/sql/mysqlshizhan","/guide/sql/mysqlshizhan.md"]],
  ["v-6ef07610","/guide/sql/sqlhanshuwenti.html",{"title":"对于一次SQL函数和优化的问题记录","type":"article","readingTime":{"minutes":17.78,"words":5335},"excerpt":"一、前言\r\" 上次在年前快要放假的时候记录的一篇安装SSL证书的内容，因为当时公司开始居家办公了，我也打算回个家\"\r\" 毕竟自己在苏州这半年一个人也是很想家的，所以就打算年过完来重新写博客。不巧的是，当时我2月中旬刚到苏州，\"\r\" 没想到苏州疫情爆发了，直接隔离十四天，自己平时就完成公司的开发任务以及自己的毕设，把写博客的事有点淡忘了，\"\r\" 最近也算自己手","author":"余月七","date":"2022-03-21T00:00:00.000Z","category":["SQL"],"tag":["博客"],"sticky":true,"star":true},["/guide/sql/sqlhanshuwenti","/guide/sql/sqlhanshuwenti.md"]],
  ["v-7fb61af0","/guide/ziyuan/changyongziyuan.html",{"title":"🔥我常用的网站资源集合（长更！）","type":"article","readingTime":{"minutes":1.52,"words":457},"excerpt":"更新记录 1、2022.01.19 全部换了一下排版，以及删除了一些不能用的网站，并且新增了一些网站 --- ✅个人常用 🔲个人不太常用 搜索引擎 ✅谷歌：https://www.google.com/ （浏览器装个iGG谷歌学术访问助手就可以了） ✅必应：https://cn.bing.com/ 🔲F搜：https://fsou.cc/ （2021.1","author":"余月七","date":"2022-03-18T00:00:00.000Z","category":["网站"],"tag":["资源"],"sticky":true,"star":true},["/guide/ziyuan/changyongziyuan","/guide/ziyuan/changyongziyuan.md"]],
  ["v-3d3c541e","/guide/ziyuan/kaifaziyuan.html",{"title":"🔥开发网站资源集合（长更！）","type":"article","readingTime":{"minutes":2.07,"words":621},"excerpt":"前言 由于自己是Java开发，所以基本都是围绕Java的一些资源网站，就是把一些自己常用的觉得还可以的就总结了一下，这样对以后更方便些。毕竟很多网站对自己很有帮助，目前是将两篇网站资源进行了置顶（还有一篇是一些别的网站资源，是以前写的），因为这样方便自己查找，而且也希望可以给看到这篇文章的小伙伴提供一些帮助吧。（两篇记录会长时间更新的，希望这里面好用的网站越","author":"余月七","date":"2022-03-18T00:00:00.000Z","category":["网站"],"tag":["资源"],"sticky":true,"star":true},["/guide/ziyuan/kaifaziyuan","/guide/ziyuan/kaifaziyuan.md"]],
  ["v-0d1b1fee","/posts/article/",{"title":"大学","icon":"page","type":"article","readingTime":{"minutes":2.38,"words":713},"excerpt":"Introduction 笔名：余月七 我毕业于甘肃一所普通的二本院校，计科专业，学习成绩很一般 在学校的时候，大二加入的实验室，说句实话，从那时候才开始接触电脑，也根本谈不上入计算机的门， 大二一年的成长让我渐渐的喜欢上了这个专业，进入实验室选的方向就是后端，现在才觉得“后端”这两字涵盖的内容太广了，只能说当时是在学Java。 大一那时候学的C，但并没有产","author":"余月七","date":"2022-03-18T00:00:00.000Z","category":["个人"],"tag":["经历"],"sticky":true,"star":true},["/posts/article/index.html","/posts/article/README.md"]],
  ["v-3706649a","/404.html",{"title":"","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/404"]],
  ["v-5bc93818","/category/",{"title":"分类","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/index.html"]],
  ["v-744d024e","/tag/",{"title":"标签","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/index.html"]],
  ["v-e52c881c","/article/",{"title":"文章","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/article/index.html"]],
  ["v-75ed4ea4","/encrypted/",{"title":"加密","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/encrypted/index.html"]],
  ["v-2897d318","/slides/",{"title":"幻灯片","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/slides/index.html"]],
  ["v-154dc4c4","/star/",{"title":"收藏","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/star/index.html"]],
  ["v-01560935","/timeline/",{"title":"时间轴","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/timeline/index.html"]],
  ["v-03d57386","/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",{"title":"使用指南 分类","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/使用指南/","/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/index.html"]],
  ["v-83e1f92e","/tag/%E7%A6%81%E7%94%A8/",{"title":"禁用 标签","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/禁用/","/tag/%E7%A6%81%E7%94%A8/index.html"]],
  ["v-5831b135","/category/java/",{"title":"Java 分类","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/java/index.html"]],
  ["v-1e447d61","/tag/%E6%96%87%E7%AB%A0%E5%8A%A0%E5%AF%86/",{"title":"文章加密 标签","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/文章加密/","/tag/%E6%96%87%E7%AB%A0%E5%8A%A0%E5%AF%86/index.html"]],
  ["v-9c48d85a","/category/linux/",{"title":"Linux 分类","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/linux/index.html"]],
  ["v-484552dc","/tag/markdown/",{"title":"markdown 标签","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/markdown/index.html"]],
  ["v-65f56839","/category/sql/",{"title":"SQL 分类","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/sql/index.html"]],
  ["v-a378ad66","/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/",{"title":"页面配置 标签","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/页面配置/","/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/index.html"]],
  ["v-5e41dbce","/category/%E7%BD%91%E7%AB%99/",{"title":"网站 分类","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/网站/","/category/%E7%BD%91%E7%AB%99/index.html"]],
  ["v-7b167472","/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",{"title":"使用指南 标签","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/使用指南/","/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/index.html"]],
  ["v-2bba82a1","/category/%E4%B8%AA%E4%BA%BA/",{"title":"个人 分类","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/个人/","/category/%E4%B8%AA%E4%BA%BA/index.html"]],
  ["v-3f698511","/tag/%E9%9B%86%E5%90%88/",{"title":"集合 标签","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/集合/","/tag/%E9%9B%86%E5%90%88/index.html"]],
  ["v-3b5171b1","/tag/%E9%9D%A2%E8%AF%95/",{"title":"面试 标签","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/面试/","/tag/%E9%9D%A2%E8%AF%95/index.html"]],
  ["v-5a3a75b2","/tag/centos7/",{"title":"centos7 标签","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/centos7/index.html"]],
  ["v-177208b6","/tag/%E6%9E%81%E5%AE%A2%E4%B8%93%E6%A0%8F/",{"title":"极客专栏 标签","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/极客专栏/","/tag/%E6%9E%81%E5%AE%A2%E4%B8%93%E6%A0%8F/index.html"]],
  ["v-3a134560","/tag/%E5%8D%9A%E5%AE%A2/",{"title":"博客 标签","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/博客/","/tag/%E5%8D%9A%E5%AE%A2/index.html"]],
  ["v-24d3c4d8","/tag/%E8%B5%84%E6%BA%90/",{"title":"资源 标签","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/资源/","/tag/%E8%B5%84%E6%BA%90/index.html"]],
  ["v-148ac620","/tag/%E7%BB%8F%E5%8E%86/",{"title":"经历 标签","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/经历/","/tag/%E7%BB%8F%E5%8E%86/index.html"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
