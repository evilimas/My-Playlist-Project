<template>
  <div class="navbar">
    <nav>
      <h1>
        <router-link :to="{ name: 'home' }"
          ><img src="@/assets/logo2.jpg" alt=""
        /></router-link>
      </h1>
      <div class="links">
        <div v-if="user">
          <router-link :to="{ name: 'createPlaylist' }"
            >Create Playlist</router-link
          >
          <router-link :to="{ name: 'userPlaylists' }">My Playlist</router-link>
          <span>Hi there, {{ user.displayName }}</span>
          <button @click="handleClick">Logout</button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{ name: 'signup' }">Signup</router-link>
          <router-link class="btn" :to="{ name: 'login' }">Login</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
// imports
import { useRouter } from 'vue-router';
import useLogout from '@/composables/useLogout';
import getUser from '@/composables/getUser';

const router = useRouter();
const { error, logout, isPending } = useLogout();
const { user } = getUser();

const handleClick = async () => {
  await logout();
  if (!error.value) {
    router.push({ name: 'login' });
    console.log('user logged out');
  }
};
</script>

<style scoped>
.navbar {
  padding: 16px 10px;
  margin-bottom: 60px;
  background: white;
}
nav {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
nav h1 {
  margin-left: 20px;
}
nav .links {
  margin-left: auto;
}
nav .links a,
button {
  margin-left: 16px;
  font-size: 14px;
}
nav img {
  max-height: 60px;
}
span {
  font-size: 14px;
  display: inline-block;
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid #eee;
  font-weight: bold;
}
</style>
