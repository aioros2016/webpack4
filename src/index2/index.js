import '../less/index2.less'
import jQuery from 'jquery'
import com1 from '../scripts/mod1.js'
const mod3 = import(/* webpackChunkName: "mod3" */ '../scripts/mod3.js')
    .catch(error => '动态载入出错');
const mod4 = import(/* webpackChunkName: "mod4" */ '../scripts/mod4.js')
    .catch(error => '动态载入出错');
// require.ensure(['../js/mod3.js'], function(require) {
//     require('./js/mod3.js');
// });
// require.ensure(['../js/mod4.js'], function(require) {
//     require('./js/mod4.js');
// });
