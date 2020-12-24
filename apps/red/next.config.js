const withPlugins = require('next-compose-plugins');
const withNx = require('@nrwl/next/plugins/with-nx');
const withOffline = require('next-offline');

const offline = withOffline({
  target: 'serverless'
});

const nx = withNx({});

module.exports = withPlugins([offline, nx]);
