// 配置
window.Config = {

  // 站点名
  SiteName: 'MSL2资源状态监控',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'statusapi.nstarmc.cn',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm791611581-01290ce586815b5798e119ff',
    'm791611464-ba3aa3ccc1580f3a41d0d823',
    'm791611476-fcaf2288cb53bc7d0d154195',
    'm791611513-88360af4b530b5b7622464a3',
    'm791611597-655372ed483990965b510ac5',
    'm791611534-adb4b1d42ce5616c7ef6dc7e',
    'm791611539-7540cd6c930cf49f407640f8',
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
      text: '我的世界官网',
      url: 'https://minecraft.net/'
    },

  ]
};
