// function extend(x, y = {}) {
//     for (var key in y) {
//         if (y.hasOwnProperty(key)) {
//             x[key] = y[key]
//         }
//     }
//     return x
// }

// function extraArray() {
//     extend(this, Array.prototype)
//     extend(this, {
//         add: function add(item) {
//             console.log(item)
//         }
//     })
// }

// const vl = new extraArray()
// extraArray.add("baraa")



function AdvanceArray() { }
AdvanceArray.prototype = Array.prototype
AdvanceArray.prototype.add = function (item) {
    this.splice(1, 0, item)
}


const arr = new AdvanceArray()

arr.add(21)
arr.add(324)
console.log(arr[1])
