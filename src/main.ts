import * as Pinia from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import { createSSRApp } from 'vue'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  const store = Pinia.createPinia()

  store.use(
    createPersistedState({
      storage: {
        getItem: uni.getStorageSync,
        setItem: uni.setStorageSync,
      },
    }),
  )

  app.use(store)
  return {
    app,
    Pinia,
  }
}
