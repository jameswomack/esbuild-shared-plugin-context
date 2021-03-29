const SharedESBuildPluginData = require('./SharedESBuildPluginData.js');

module.exports = (function () {
    SharedESBuildPluginData[Symbol.for('__tectonic_context__')].bar = 'bar'; 
    console.dir(SharedESBuildPluginData[Symbol.for('__tectonic_context__')]);
});