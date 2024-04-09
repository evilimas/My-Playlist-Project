<template>
  <div class="home">
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="documents">
      <ListView :playlists="documents" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import getCollection from '@/composables/getCollection';
import ListView from '@/components/ListView.vue';

const { error, documents } = getCollection('playlists');
</script>
