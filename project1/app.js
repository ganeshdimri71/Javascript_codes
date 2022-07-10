// Default import class
// import Nokia from "./module.js"
// const n = new Nokia();
// n.volumeUp()

// import show from './module.js'
// import a from './module.js'
// console.log("a: ", a)

// import {Nokia} from './module.js'
// const n = new Nokia()
// n.volumeUp()

// import { show } from './module.js'
// show()

// import { a } from './module.js'
// console.log("a: ", a)

// import { Nokia, show, a } from './module.js'
// const n = new Nokia();
// n.volumeUp()
// show()
// console.log("a: ", a)

// import * as device from './module.js'
// const n = new device.Nokia();
// n.volumeUp()
// device.show()
// console.log("device.a: ", device.a)

import Nokia, { show, a } from './module.js'
const n = new Nokia();
n.volumeUp()
show()
console.log("a: ", a)