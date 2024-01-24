// initial function
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    };
    return total;
};
// 2 assignments + n comparisons + n additions and n assignments + n additions and n assignments
// 5n + 2 operations

console.log(addUpTo(3));
console.log(addUpTo(6));

var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

// alternative function
function addUpToAlt(n) {
    return n * (n + 1) / 2;
};
// 3 operations regardless of the size of n

console.log(addUpToAlt(6));

var time1 = performance.now();
addUpToAlt(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)