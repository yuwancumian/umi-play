import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/test', component: '@/pages/test' },
    { path: '/about', component: '@/pages/about' },
  ],
  fastRefresh: {},
});
