// import { defineNuxtConfig } from 'nuxt'

import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
 

  hooks: {
    'vite:extend'({ nuxt, config }) {},
    'vite:extendConfig'(clientConfig, { isClient, isServer }) {},
    'webpack:config'(configs) {},
  },
  buildModules: ['@nuxt/typescript-build'],

  css: ['~/assets/css/tailwind.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
  script: [
    {
      "data-ad-client": "ca-pub-9456709395715105",
      src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js",
      async: true,
    },
  ],
  // plugins:["~/plugins/vee-validate"],
});
