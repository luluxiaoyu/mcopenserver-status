// 配置
window.Config = {

  // 站点名
  SiteName: '我的世界开服器服务器资源监控',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'statusapi.nstar.xyz',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm788342392-05ac4c42b354718ebef2bb9f',
    'm788342405-0a206340be6d43770cff0146',
    'm788342417-d0cf0d17dbf56df657318143',
    'm788342425-5ebbfbf2e72166a195e16e2d',
    'm788342427-fc22feb81417df2045fecb13',
    'm788342429-0706fc2859dc2634ea172997',
    'm788342431-c93d00b55b14505f41155de2',
    'm788342434-52599b046d4db91b340c1e2f',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '开服器帮助文档',
      url: 'https://msdoc.nstar.xyz'
    },
    {
      text: '我的世界官网',
      url: 'https://minecraft.net/'
    },

  ]
};
