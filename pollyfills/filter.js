let arr = [1, 2, 3, 4, 5, 6]

Array.prototype.myFilter = function (cb) {
    const res = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            res.push(this[i]);
        }

    }
    return res;
}

const out = arr.filter((ele) => ele % 2 === 0)
console.log(out)