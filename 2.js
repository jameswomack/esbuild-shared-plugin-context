const SharedESBuildPluginData = require('./SharedESBuildPluginData.js');
const {SharedESBuildPluginData:SharedESBuildPluginData3} = require('./3.js')

const one = require('./1.js');
(function () {
    SharedESBuildPluginData[Symbol.for('__tectonic_context__')].foo = 'foo'; 
    one();
    console.info(Object.is(SharedESBuildPluginData[Symbol.for('__tectonic_context__')], SharedESBuildPluginData3[Symbol.for('__tectonic_context__')]));
})();