<template>
  <form @submit.prevent="handleSubmit">
    <h3>Signup</h3>
    <input type="text" placeholder="Display name" v-model="displayName" />
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div class="error" v-if="error">{{ error }}</div>
    <button v-if="!isPending">Signup</button>
    <button v-if="isPending" disabled>Loading</button>
  </form>
</template>

<script setup>
// imports
import { ref } from 'vue';
import useSignup from '@/composables/useSignup';
import { useRouter } from 'vue-router';

// refs
const email = ref('');
const password = ref('');
const displayName = ref('');

const { error, signup, isPending } = useSignup();
const router = useRouter();

// functions
const handleSubmit = async () => {
  const res = await signup(email.value, password.value, displayName.value);
  if (!error.value) {
    router.push({ name: 'userPlaylists' });
  }
};
</script>

<style></style>
