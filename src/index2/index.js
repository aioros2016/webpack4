import '../less/index2.less'
// import com1 from '../scripts/mod1.js'
// import com2 from '../scripts/mod2.js'
const mod3 = import(/* webpackChunkName: "mod3" */ '../scripts/mod3.js')
    .catch(error => '动态载入mod3出错');
// const mod4 = import(/* webpackChunkName: "mod4" */ '../scripts/mod4.js')
//     .catch(error => '动态载入mod4出错');
if (module.hot) {
    module.hot.accept()
}

console.log('index2.js已载入')