const open = require("open");

// 引数チェック
const args = process.argv.slice(2);
if (args.length !== 3 || !args.every(arg => /^\d{1,3}$/.test(arg))) {
  console.error("使用方法: node Gaoka.js aaa bbb ccc （例: node Gaoka.js 14 101 134）");
  process.exit(1);
}

const [aaa, bbb, ccc] = args;

// 日付をMMDD形式で取得
const now = new Date();
const mm = String(now.getMonth() + 1).padStart(2, "0");
const dd = String(now.getDate()).padStart(2, "0");
const mmdd = `${mm}${dd}`;

// URL生成
const url = `http://10.${aaa}.${bbb}.${ccc}/FileCtrl/Read?DIR=1431&FILE=1${mmdd}`;

// ブラウザで開く
console.log(`ブラウザで開きます: ${url}`);
open(url).catch(err => {
  console.error("ブラウザを開くのに失敗しました:", err);
});
