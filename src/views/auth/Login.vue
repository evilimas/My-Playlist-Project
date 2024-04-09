<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div class="error" v-if="error">{{ error }}</div>
    <button v-if="!isPending">Login</button>
    <button v-if="isPending" disabled>Loading</button>
  </form>
</template>

<script setup>
// imports
import { ref } from 'vue';
import useLogin from '@/composables/useLogin';
import { useRouter } from 'vue-router';

// refs
const email = ref('');
const password = ref('');

const { error, login, isPending } = useLogin();
const router = useRouter();

// functions
const handleSubmit = async () => {
  await login(email.value, password.value);
  if (!error.value) {
    router.push({ name: 'userPlaylists' });
  }
};
</script>

<style></style>
