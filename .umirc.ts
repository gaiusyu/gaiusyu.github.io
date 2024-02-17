import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    {
      path: '/',
      component: '@/layouts/layouts',
      routes: [
        { path: '/', redirect: '/AboutMe' },
        {path: '/AboutMe', component: '@/pages/AboutMe'},
        {path: '/publications', component: '@/pages/Publications'},
        {path: '/awards', component: '@/pages/Award'},
        {path: '/services', component: '@/pages/Services'},
        {path: '/cv', component: '@/pages/CV'},
        { path: '/*', component: '@/pages/404' },
      ],
    },
  ],
  npmClient: 'cnpm',
  chainWebpack(config) {
    config.module
        .rule('md')
        .test(/\.md$/)
        .type('asset/source');
  },
});