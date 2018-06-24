const mod3 = import(/* webpackChunkName: "mod3" */ './mod3.js')
    .catch(error => '动态载入出错');
const mod4 = import(/* webpackChunkName: "mod4" */ './mod4.js')
    .catch(error => '动态载入出错');

const com1 = (txt) => {
    console.log('这是模块1'+ txt)
}

export default com1