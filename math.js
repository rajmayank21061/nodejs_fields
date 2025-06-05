function add(a,b){
    return a + b;
}
function sub(a,b){
    return a - b;
}

// module.exports = sub;
// module.exports = add;

module.exports = {
    subFn: sub,
    addFn: add
}

exports.mul = (a,b) => a * b;