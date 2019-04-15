module.exports = (api,options = {}) => {
  api.registerPlugin({
    id: 'wusong:antd',
    apply: require('umi-plugin-react/lib/plugins/antd').default,
    opts: options.antd,
  });
  api.registerPlugin({
    id: 'wusong:dva',
    apply: require('umi-plugin-react/lib/plugins/dva').default,
    opts: options.dva,
  });
  api.onBuildSuccess(() => {
    console.log('[wusong]: success')
  })
}