<template>
  <div class="user-playlists">
    <h2>My playlists</h2>
    <div v-if="playlists">
      <ListView :playlists="playlists" />
    </div>
    <router-link :to="{ name: 'createPlaylist' }" class="btn"
      >Create a new Playlist</router-link
    >
  </div>
</template>

<script setup>
import getCollection from '@/composables/getCollection';
import getUser from '@/composables/getUser';
import ListView from '@/components/ListView.vue';

const { user } = getUser();
const { documents: playlists } = getCollection('playlists', [
  'userId',
  '==',
  user.value.uid,
]);
</script>

<style></style>
