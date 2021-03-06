/**
 * Created by zhuozhuo on 2017/5/17.
 */
const { Wechaty } = require('wechaty'); // import Wechaty from 'wechaty'

Wechaty.instance() // Singleton
.on('scan', (url, code) => console.log(`Scan QR Code to login: ${ code }\n${ url }`)).on('login', user => console.log(`User ${ user } logined`)).on('message', message => console.log(`Message: ${ message }`)).init();

//# sourceMappingURL=test-compiled.js.map