// ====== Tugas 25 JavaScript =====

var data = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
console.log("Sebelumnya : ", data.join());

srt = data.sort()
console.log("Ascending : ", srt.join())
rvrs = data.reverse()
console.log("Descending : ", rvrs.join());

function init(value) {
  return value > 10;
}
fltr = data.filter(init)

console.log("Filter > 10 : ", fltr.join());
