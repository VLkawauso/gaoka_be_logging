const open = require("open").default;

const roomMap = {
  "101": 134, "102": 88, "103": 93, "104": 101, "105": 89,
  "106": 135, "107": 136, "108": 97, "109": 51, "110": 28,
  "111": 139, "113": 23, "114": 2, "115": 99, "116": 24,
  "117": 18, "118": 7, "201": 22, "202": 113, "203": 20,
  "204": 9, "205": 115, "206": 8, "207": 21, "208": 131,
  "209": 17, "210": 104, "211": 16, "212": 141, "213": 4,
  "214": 140, "215": 10,
  //下は追加分
  "212": 25
};

const args = process.argv.slice(2);
if (args.length !== 1 || !/^\d{3}$/.test(args[0])) {
  console.error("使用方法: node Gaoka.js <3桁の部屋番号>");
  process.exit(1);
}

const roomNumber = args[0];
const x = roomMap[roomNumber];

if (!x) {
  console.error(`エラー: 部屋番号 ${roomNumber} は対応していません。`);
  process.exit(1);
}

const url = `http://10.14.101.${x}/DamInfo/GetScreenShot`;

console.log(`ブラウザで開きます: ${url}`);
open(url).catch(err => {
  console.error("ブラウザを開くのに失敗しました:", err);
});