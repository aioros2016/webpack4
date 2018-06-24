import './less/b.less'
import com1 from './js/mod1.js'
const mod3 = import(/* webpackChunkName: "mod3" */ './js/mod3.js')
    .catch(error => '动态载入出错');
const mod4 = import(/* webpackChunkName: "mod4" */ './js/mod4.js')
    .catch(error => '动态载入出错');
// require.ensure(['./js/mod3.js'], function(require) {
//     require('./js/mod3.js');
// });
// require.ensure(['./js/mod4.js'], function(require) {
//     require('./js/mod4.js');
// });
