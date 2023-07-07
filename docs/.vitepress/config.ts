import { getThemeConfig, defineConfig } from '@sugarat/theme/node'


import containerTitle from '../components/container-title.vue'

// 主题独有配置
// 详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({

  

  // 文章默认作者
  author: 'Null',
  // 友链
  friend: [
    {
      nickname: '粥里有勺糖',
      des: '你的指尖用于改变世界的力量',
      avatar:
        'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
      url: 'https://sugarat.top'
    },
    {
      nickname: 'Vitepress',
      des: 'Vite & Vue Powered Static Site Generator',
      avatar:
        'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTI2NzY1Ng==674995267656',
      url: 'https://vitepress.vuejs.org/'
    }
  ],
  recommend: {
    showSelf: true
  },
  // 开启离线的全文搜索支持（如构建报错可注释下面的配置再次尝试）
  search: 'pagefind',
  // popover: {
  //   title: '公告',
  //   body: [
  //     {
  //       type: 'text',
  //       content: 'QQ交流群：681489336 🎉🎉'
  //     },
  //     { type: 'text', content: '👇公众号👇---👇 微信 👇' },
  //     {
  //       type: 'image',
  //       src: 'https://img.cdn.sugarat.top/mdImg/MTYxNTAxODc2NTIxMA==615018765210'
  //     },
  //     {
  //       type: 'text',
  //       content: '欢迎大家加群&私信交流'
  //     },
  //     {
  //       type: 'button',
  //       content: '博客',
  //       link: 'https://sugarat.top'
  //     }
  //   ],
  //   duration: 0
  // }
})

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({

  
  extends: blogTheme,
  lang: 'zh-cn',
  title: 'NuLL',
  description: 'Null博客，基于 vitepress 实现',
  vite: {
    
    optimizeDeps: {
      include: ['element-plus'],
      exclude: ['@sugarat/theme']
    }
  },
  lastUpdated: true,
  themeConfig: {
    
    lastUpdatedText: '上次更新于',
    // footer: {
    //   message: '自定义底部内容',
    //   copyright:
    //     'MIT Licensed | <a target="_blank" href="https://theme.sugarat.top/"> @sugarat/theme </a>'
    // },
    // logo: '/logo.png',
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: [
      { text: '首页', link: '/' },
      { text: "开发文档", link: "/document/index", activeMatch: "/document/" },
      { text: '关于作者', link: 'https://sugarat.top/支持点击修改内容.html' }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/ATQQ/sugar-blog/tree/master/packages/theme'
      }
    ]
  },
  
})
