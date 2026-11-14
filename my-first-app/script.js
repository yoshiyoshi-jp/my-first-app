// HTMLのidを手がかりに、操作したい要素を取得します。
const button = document.querySelector("#hello-button");
const message = document.querySelector("#message");

// letは、あとから値を変更する変数を作ります。
let count = 0;

// ボタンがクリックされるたびに、波かっこの中の処理を実行します。
button.addEventListener("click", () => {
  count = count + 1;
  message.textContent = `ボタンを${count}回クリックしました！`;
});
