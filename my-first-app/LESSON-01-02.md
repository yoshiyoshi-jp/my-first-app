# 自己紹介ページで学ぶHTML・CSS

READMEの「この後の学習順」1・2に対応する練習です。
この手順書をVS Codeで開き、Ctrl + Shift + Vでプレビューできます。
一度に全部変更せず、各ステップで保存してChromeを更新しましょう。

## 準備

ChromeでCtrl + Oを押し、このフォルダーのindex.htmlを開きます。
以後は「VS Codeで編集 → Ctrl + S → ChromeでCtrl + R」を繰り返します。

index.htmlの自己紹介の後ろにある、次のパスだけを削除してください。
HTMLのbody内に直接書いた文字は、ページの本文として表示されます。

```text
C:/Users/gtkan/OneDrive/Desktop/my-first-app/index.html
```

名前の「yoshi」、自己紹介、背景色は今のまま使えます。

## 1. HTML：リンクを作る

index.htmlの自己紹介の段落の下に追加します。

```html
<p><a href="https://developer.mozilla.org/ja/">ウェブ制作の資料を見る</a></p>
<p><a href="#contact">メッセージ練習へ移動</a></p>
```

- a：リンクを表すタグです。
- href：移動先を指定する属性です。属性は開始タグの中に書きます。
- タグの間の文字：画面に表示するリンク名です。
- #contact：同じページのid="contact"を持つ場所へ移動します。移動先は後のステップで作ります。

確認：最初のリンクで資料へ移動できるか試し、Chromeの「戻る」で自分のページへ戻ります。

## 2. HTML：画像と自己紹介をまとめる

練習用のprofile.svgをこのフォルダーに用意しました。SVGもimgタグで表示できる画像です。
既存のh1と自己紹介の2つのpを、次の形に置き換えます。
手順1で追加したリンクはこの下に残します。

```html
<div class="profile">
  <img
    class="profile-image"
    src="profile.svg"
    alt="人物を表したプロフィール用アイコン"
    width="160"
    height="160"
  >
  <div>
    <h1>yoshi</h1>
    <p>これは、私が作る最初のウェブサイトです。</p>
    <p>hackathonで活躍できるようになりたい</p>
  </div>
</div>
```

- div：複数の要素をまとめる箱です。このあとCSSで配置するときに使います。
- class：CSSで対象を選ぶための名前です。
- src：画像の場所です。profile.svgはHTMLと同じフォルダーなので、ファイル名だけで指定できます。
- alt：画像の内容を伝える代替テキストです。画像が読めないときや、読み上げで役立ちます。
- img：終了タグを書かない要素です。

確認：画像と文章が表示されれば成功です。まだ縦に並んでいて大丈夫です。

応用：自分の写真を同じフォルダーに置き、srcをそのファイル名に変えてみましょう。altも画像に合わせます。

## 3. HTML：フォームを作る

既存のmainの終了タグ </main> の直前に追加します。
既存のクリック練習のボタンとメッセージは残してください。

```html
<section id="contact">
  <h2>メッセージ練習</h2>
  <p id="form-note">入力欄の練習です。送信・保存は行いません。</p>
  <form aria-describedby="form-note">
    <div class="form-field">
      <label for="visitor-name">名前</label>
      <input id="visitor-name" name="visitorName" type="text" autocomplete="name">
    </div>
    <div class="form-field">
      <label for="visitor-message">メッセージ</label>
      <textarea id="visitor-message" name="visitorMessage" rows="4"></textarea>
    </div>
    <button type="reset">入力を消す</button>
  </form>
</section>
```

- section：見出しを持つ、ひとまとまりの内容です。
- form：入力欄をまとめます。
- label：入力欄の説明です。forと入力欄のidを一致させます。
- input：ここでは1行の文字入力です。
- textarea：複数行の文字入力です。
- name：データを送るときに使う項目名です。今回は送信処理は作りません。
- type="reset"：入力を初期値に戻します。今回は初期値が空なので、入力が消えます。

確認：名前のラベルを押すと入力欄にカーソルが移るか、入力を消すボタンが動くか試してください。
手順1のページ内リンクの移動先も、これでできました。

## 4. CSS：Flexboxで横に並べる

style.cssの末尾に追加します。

```css
/* 幅の指定に、内側の余白と枠線を含めます。 */
* {
  box-sizing: border-box;
}

.profile {
  display: flex;
  align-items: center;
  gap: 24px;
}

.profile-image {
  width: 160px;
  max-width: 100%;
  height: auto;
  flex-shrink: 0;
  border-radius: 24px;
}

a {
  color: #3659b8;
}

section {
  margin-top: 32px;
}

.form-field {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 4px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #8893a6;
  border-radius: 8px;
  font: inherit;
}
```

Flexboxのポイントは、並べたい要素を囲む「親」にdisplay: flexを指定することです。
今回は.profileが親で、その直下のimgとdivの2つが横に並びます。

| 指定 | 意味 |
| --- | --- |
| display: flex | 直下の子要素を、初期設定では横方向に並べる |
| align-items: center | 今回の横並びでは、子要素を上下の中央にそろえる |
| gap: 24px | 子要素の間に24pxの余白を作る |
| flex-shrink: 0 | 横幅が足りないときに画像が縮むのを防ぐ |

確認：Chromeを十分に広げると、画像と自己紹介が横に並びます。
gapを48pxに変え、隙間の変化を確認してから好きな値に戻してください。

## 5. CSS：狭い画面では縦に並べる

style.cssのいちばん最後に追加します。

```css
@media (max-width: 600px) {
  .profile {
    flex-direction: column;
    align-items: flex-start;
  }

  .card {
    padding: 20px;
  }

  h1 {
    font-size: 28px;
  }
}
```

@mediaは、条件に合うときだけCSSを適用する仕組みです。
今回は「ページを表示する領域の幅が600px以下」の場合です。
flex-direction: columnで、Flexboxの並ぶ方向を縦に変えます。
縦並びでのalign-items: flex-startは、子要素を横方向の先頭にそろえます。
このHTMLではheadにviewportの指定が入っているので、スマートフォンでも画面幅に合わせて判定できます。

確認：Chromeのウィンドウ幅を狭くして、横並びから縦並びへ変わるか試します。
ウィンドウを十分に狭められない場合は、Ctrl + Shift + Iで開発者ツールを開き、
Ctrl + Shift + Mで端末表示に切り替えて、幅を変えてください。

## 最後の練習

1. リンクの表示名を自分の言葉に変える。
2. .profileのgapを変え、間隔の違いを見る。
3. メディアクエリの600pxを800pxに変え、縦並びになるタイミングを比べる。
4. 名前とメッセージを入力し、入力を消すボタンを押す。
5. 広い画面と幅375px程度の画面で、内容がはみ出さず読めるか確認する。

迷ったときはCtrl + Zで直前の編集を戻せます。
画像が出ない場合はsrcと実際のファイル名、見た目が変わらない場合は保存したかとCSSの波かっこの対応を確認しましょう。
