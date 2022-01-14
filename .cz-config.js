/*
 * @Description:
 * @Author: Liu Shuai
 * @Date: 2022-01-12 23:05:29
 * @LastEditTime: 2022-01-12 23:11:55
 * @LastEditors: Liu Shuai
 * @Reference:
 */
module.exports = {
  // 可选类型
  types: [
    { value: 'feat', name: 'feat:     新功能' },
    { value: 'fix', name: 'fix:     修复' },
    { value: 'docs', name: 'docs:     文档变更' },
    { value: 'style', name: 'style:     代码格式' }
  ],
  messages: {
    type: '请选择提交的类型：',
    customScope: '请修改的范围：',
    subject: '请简要描述提交（必填）',
    body: '请输入详细描述（可选）'
  }
}
