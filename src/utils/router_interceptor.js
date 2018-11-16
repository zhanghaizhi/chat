/*
 *   power by    weishengjian
 *   datetime    2018/7/14 10:32
 *   desc:       页面跳转路由拦截器
 */
// import mta from 'mta-wechat-analysis'

export let every = [
  async (option, next) => {
    await next()
    setTimeout(() => {
    //   mta.Page.stat()
    }, 1000)
  }
]

export let match = {
  '/pages/buy_medicine': [
    async (option, next) => {
      await next()
    }
  ],
  '/pages/dev': [
    async (option, next) => {
      if (option.query.name !== '111') {
        // showModal('name 不为111')
      } else {
        await next()
      }
    }
  ]
}
