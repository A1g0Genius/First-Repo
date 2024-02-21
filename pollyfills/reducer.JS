const arr = [1, 2, 3, 4, 5]

Array.prototype.myReducer = function (cb, initialValue) {
    let res = typeof initialValue !== "undefined" ? initialValue : 0;
    console.log(res)
    for (let i = 0; i < this.length; i++) {
        res = cb(res, this[i])
    }
    return res;
}

const ans = arr.myReducer((acc, num) => acc = acc + num, 100)
console.log(ans)