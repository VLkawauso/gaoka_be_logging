// Gaoka.js

const open = require("open").default;

// 引数を取得（node Gaoka.js aaa bbb ccc）
const [,, aaa, bbb, ccc] = process.argv;

// 引数チェック
if (!aaa || !bbb || !ccc || !/^\d+$/.test(aaa + bbb + ccc)) {
  console.error("使用方法: node Gaoka.js aaa bbb ccc");
  console.error("例: node Gaoka.js 14 101 23");
  process.exit(1);
}

// URL生成
const url = `http://10.${aaa}.${bbb}.${ccc}/DamInfo/GetScreenShot`;

console.log(`ブラウザで開きます: ${url}`);

// デフォルトブラウザでURLを開く
open(url).catch(err => {
  console.error("ブラウザを開くのに失敗しました:", err);
});