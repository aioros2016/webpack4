import './less/a.less'
import com1 from './js/com1.js'
import com2 from './js/com2.js'

console.log('这是index1的脚本文件！！')

if (module.hot) {
    module.hot.accept()
}

com1('index1中的')
com2('index1中的')