import './less/a.less'
import com1 from './js/mod1.js'
import com2 from './js/mod2.js'
import com3 from './js/mod3.js'
import com4 from './js/mod4.js'


console.log('这是index1的脚本文件！！')

// if (module.hot) {
//     module.hot.accept()
// }
document.getElementsByTagName('body').style.background = 'red'

com1('index1中的')
com2('index1中的')
com3('index1中的')
com4('index1中的')