import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

//route guards
import { projectAuth } from '@/firebase/config';

const requreAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ name: 'login' });
  } else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: requreAuth,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/auth/Login.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/auth/Signup.vue'),
  },
  {
    path: '/playlists/create',
    name: 'createPlaylist',
    component: () => import('../views/playlists/CreatePlaylist.vue'),
    beforeEnter: requreAuth,
  },
  {
    path: '/playlists/:id',
    name: 'playlistDetails',
    component: () => import('../views/playlists/PlaylistDetails.vue'),
    props: true,
    beforeEnter: requreAuth,
  },
  {
    path: '/playlists/user',
    name: 'userPlaylists',
    component: () => import('../views/playlists/UserPlaylists.vue'),
    beforeEnter: requreAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
