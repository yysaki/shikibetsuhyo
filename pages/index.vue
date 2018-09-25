<template>
  <div id="index">
    <ul>
      <li v-for="game in games">
        {{ game.title }}
      </li>
    </ul>
  </div>
</template>
<script>
const games = require('~/es6/model/game-list').default;
export default {
  name: "index",
  data: function () {
    return {
      games: games
    }
  }
};
</script>

