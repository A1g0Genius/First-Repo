const arr = [1, 2, 3, 4, 5, 6]

Array.prototype.myMap = function (cb) {
    let res = []
    for (let i = 0; i < this.length; i++) {
        let element = cb(this[i]);
        res.push(element);
    }

    return res;
}

const out = arr.myMap((el) => el = el + 1)

console.log(out)