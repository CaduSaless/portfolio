import { createRouter, createWebHistory } from 'vue-router';
import HomeTest from '../views/Home.vue'; // Exemplo de componente "Home"
import AboutTest from '../views/About.vue'; // Exemplo de componente "About"

const routes = [
  {
    path: '/', // Rota para a página inicial
    name: 'Home',
    component: HomeTest,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/about', // Rota para a página "Sobre"
    name: 'About',
    component: AboutTest,
    meta: {
      title: 'Home'
    }
    // lazy-load para otimização:
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // Você pode adicionar mais rotas aqui
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Modo de histórico baseado na API de Histórico do navegador
  routes, // Suas configurações de rota
});

export default router;