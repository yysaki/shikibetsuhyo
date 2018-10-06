<template>
  <div id="index">
    <v-layout row>
      <v-flex xs12 sm12>
        <v-card>
          <v-list>
            <template v-for="(game, index) in games">
              <v-list-tile
                :key="game.id"
                :to="`/${game.id}/`"
              >
                {{ game.title }}
              </v-list-tile>
              <v-divider
                v-if="index + 1 < games.length"
                :key="index"
              />
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import games from '~/es6/model/game-list.js';
export default {
  name: "index",
  data: function () {
    return {
      games: games
    }
  },
  head () {
    return {
      title: "不思議のダンジョン 値段識別表",
    }
  }
};
</script>
