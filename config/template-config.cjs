/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '老婆, 早上好呀',
    desc: `
      **{{date.DATA}}**
      
      ---
      
      城市：{{city.DATA}}   天气：{{weather.DATA}}
     
      气温:{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      风向: {{wind_direction.DATA}}   {{wind_scale.DATA}}
     
      ---
      
      {{course_schedule.DATA}}
      
      ---
      
      今天是我们相识的第{{love_day.DATA}}天
      
      {{birthday_message.DATA}}
      
      ---
      
      {{earthy_love_words.DATA}}
      
      ---
    `
  },
   {
    id: '0003',
    title: '老婆的专属课表',
    desc: `
      **{{date.DATA}}**
      
      ---
      
      课表:{{course_schedule.DATA}}
      
      ---
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
