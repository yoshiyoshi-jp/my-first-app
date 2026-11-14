# ウェブ制作の最初の練習

このフォルダーをVS Codeで開き、編集 → 保存 → ブラウザーで再読み込み、を繰り返して学びます。

## 最初の開き方

1. VS Codeの「ファイル」→「フォルダーを開く」で、この `my-first-app` を選びます。
2. 左側のエクスプローラーで `index.html` を選ぶと、コードを編集できます。
3. Windowsのエクスプローラーで同じフォルダーを開き、`index.html` をダブルクリックすると、通常はブラウザーにページが表示されます。別のアプリが開く場合は「プログラムから開く」でブラウザーを選びます。
4. コードを変更したら `Ctrl + S` で保存し、ブラウザーで `Ctrl + R` を押して更新します。

この練習は追加インストール不要です。まだターミナルや開発サーバーは使いません。

## ファイルの役割

| ファイル | 役割 | 最初に変えるところ |
| --- | --- | --- |
| index.html | 見出し、文章、リスト、ボタンなどの内容・構造 | h1の「こんにちは！」 |
| style.css | 色、文字の大きさ、余白などの見た目 | bodyのbackground-color |
| script.js | クリックに反応する処理 | ボタンを押したときのメッセージ |

HTMLの `link` でCSSを、`script` でJavaScriptを読み込んでいます。
この3ファイルを同じフォルダーに置くと、今の指定のまま動作します。

## レッスン1：HTML

HTMLは、文章の意味と構造をタグで表す言語です。

```html
<h1>私の自己紹介</h1>
<p>ウェブ制作を勉強しています。</p>
```

`<h1>` が開始タグ、`</h1>` が終了タグで、その間に内容を書きます。
`h1` はページの主な見出し、`h2` はその中の見出し、`p` は段落、`ul` と `li` は箇条書きです。
`head` は文字コードやタイトルなどの設定、`body` は画面に表示する内容です。

練習：見出しを自分の名前に変え、自己紹介の段落を1つ追加してください。

## レッスン2：CSS

CSSは、どの要素をどのように表示するかを書きます。

```css
h1 {
  color: blue;
  font-size: 32px;
}
```

`h1` が対象（セレクター）、`color` が変更する項目（プロパティ）、`blue` が値です。
`padding` は要素の内側の余白、`margin` は外側の余白です。
`.card` は `class="card"` の要素を選びます。classは複数の要素で共有できます。

練習：bodyの背景色を `#fff4e6` に変え、h1に `color: #3659b8;` を追加してください。

## レッスン3：JavaScript

JavaScriptは、操作に反応する処理などを書くプログラミング言語です。

`script.js` は次の順に動きます。

1. `document.querySelector` でHTMLの要素を取得する。
2. `let count = 0` で回数を覚える変数を作る。
3. `addEventListener` でクリック時の処理を登録する。
4. クリック時に回数を増やし、`textContent` で表示する文字を変更する。

`#hello-button` は `id="hello-button"` の要素を選びます。idは同じページ内で重複させません。
`const` は再代入しない変数、`let` は再代入する変数に使います。
バッククォートで囲んだ文字列の `${count}` には、変数の値が入ります。

練習：ボタンを3回押して表示を確かめ、メッセージの「押しました」を「クリックしました」に変えてください。
ページを再読み込みすると回数は0に戻ります。今は保存機能がないためです。

## この後の学習順

1. HTML：リンク、画像、フォームを使って自己紹介ページを作る。
2. CSS：Flexbox、画面幅に応じた表示を学ぶ。
3. JavaScript：変数、条件分岐、関数、配列、オブジェクトを学び、ToDoリストを作る。
4. Node.js・npm：ターミナルからJavaScriptを実行し、開発に使うパッケージを管理する。
5. TypeScript：JavaScriptに型を書き、想定と違う値を開発中に見つける。
6. React：画面を部品（コンポーネント）に分け、状態に応じて表示を変える。
7. Next.js：Reactを使って複数ページ、サーバー側の処理、データ取得を扱う。

Node.jsは言語ではなく、ブラウザーの外でJavaScriptを実行する環境です。
npmはNode.jsと一緒に使うパッケージ管理ツールです。
Next.jsはReactを土台にしたフレームワークです。
TypeScriptは通常、開発ツールでJavaScriptに変換してブラウザーで動かします。
単純なウェブサイトなら、最初のHTML・CSSだけでも作れます。

## 公式の参考資料

- [MDN：初めてのウェブサイト](https://developer.mozilla.org/ja/docs/Learn_web_development/Getting_started/Your_first_website)
- [Node.js：Introduction to Node.js](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [TypeScript：TypeScript for the New Programmer](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- [Next.js：React Foundations](https://nextjs.org/learn/react-foundations)
