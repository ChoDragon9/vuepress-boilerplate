module.exports = {
  title: 'ChoDragon9 | boilerplate',
  base: '/boilerplate/',
  themeConfig: {
    nav: [
      // {
      //   text: 'UIComponent',
      //   items: [
      //     {text: 'Pagination', link: '/src/UIComponent/Pagination/'},
      //     {text: 'Calendar', link: '/src/UIComponent/Calendar/'},
      //     {text: 'TimePicker', link: '/src/UIComponent/TimePicker/'},
      //     {text: 'InfiniteScrolling', link: '/src/UIComponent/InfiniteScrolling/'},
      //   ]
      // },
      {
        text: 'MyPage',
        link: '/src/my-page/' // /docs/src/my-page.md
      },
    ]
  },
  head: [
    [
      'meta',
      {
        name: 'google-site-verification',
        content: '' // yX6dHIw5DyDCd9iNbZSo2w8VjnED68OLdw6zu_Rm554
      }
    ]
  ],
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': '' // UA-135042351-4
      }
    ],
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html',
      },
    ],
    [
      'vuepress-plugin-typescript',
      {
        tsLoaderOptions: {
          transpileOnly: true,
        },
      },
    ]
  ]
}
