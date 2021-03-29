const SharedESBuildPluginData = require('./SharedESBuildPluginData.js');
const {SharedESBuildPluginData:SharedESBuildPluginData3} = require('./3.js')

const one = require('./1.js');
(function () {
    SharedESBuildPluginData['__our_context__'].foo = 'foo'; 
    one();
    console.info(Object.is(SharedESBuildPluginData['__our_context__'], SharedESBuildPluginData3['__our_context__']));
})();