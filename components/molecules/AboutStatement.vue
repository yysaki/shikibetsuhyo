<template>
  <div>
    <p>
      このサイトは
      <a :href="game.developerUrl" target="_blank">
        {{ game.developerName }}
      </a>
      様が発売した
      <a :href="game.gameUrl" target="_blank">
        {{ game.title }}
      </a>
      にて識別済みアイテムを記録するためのチェックリストです。
    </p>
    <p>
      スマートフォンでの使用を想定しており、チェックした情報はCookieに保存されます。新しくプレイし直す時は「Clear」から情報をリセットして下さい。
    </p>
    <p>
      このサイトでは未識別で登場しうる全てのアイテムをリストアップしています。「もっと不思議のダンジョン」のプレイにお役立て頂ければと思います。
    </p>
    <p>
      参考にさせていただいたサイト:
      <a :href="game.referenceUrl" target="_blank">
        {{ game.referenceName }}
      </a>
    </p>
  </div>
</template>
<script>
export default {
  name: "AboutStatement",
  props: {
    game: {
      type: Object,
      required: true,
    },
  },
}
</script>
