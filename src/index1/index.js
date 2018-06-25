import '../less/index1.less'
import com1 from '../scripts/mod1.js'
import com2 from '../scripts/mod2.js'
const mod3 = import(/* webpackChunkName: "mod3" */ '../scripts/mod3.js')
    .catch(error => '动态载入出错');
const mod4 = import(/* webpackChunkName: "mod4" */ '../scripts/mod4.js')
    .catch(error => '动态载入出错');
// require.ensure(['../js/mod3.js'], function(require) {
//     require('../js/mod3.js');
// });
// require.ensure(['../js/mod4.js'], function(require) {
//     require('../js/mod4.js');
// });
if (module.hot) {
    module.hot.accept()
}

console.log('index1.js已载入')