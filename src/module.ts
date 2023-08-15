import { defineNuxtModule, addPlugin, createResolver, installModule, addServerHandler } from '@nuxt/kit';

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule'
  },

  defaults: {},
  async setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)


    await installModule('@sidebase/nuxt-auth', {
      baseURL: `http://localhost:3000/api/auth`,
      provider: {
        type: 'authjs',
        defaultProvider: 'smartId',
      },
    });

    addServerHandler({
      route: '/api/auth/**',
      handler: resolve('./runtime/server/authRoute.ts'),
    })
  }
})
