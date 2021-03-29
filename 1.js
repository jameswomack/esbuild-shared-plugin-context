const SharedESBuildPluginData = require('./SharedESBuildPluginData.js');

module.exports = (function () {
    SharedESBuildPluginData['__our_context__'].bar = 'bar'; 
    console.dir(SharedESBuildPluginData['__our_context__']);
});