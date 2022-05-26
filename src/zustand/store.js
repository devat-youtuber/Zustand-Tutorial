import create from "zustand";
import { devtools, persist } from 'zustand/middleware'

import themeStore from "./themeStore";
import userStore from "./userStore";

let combineStores = (set, get) => ({
  ...themeStore(set, get),
  ...userStore(set, get)
})

combineStores = devtools(combineStores)

combineStores = persist(combineStores, {
  name: 'zustand',
  getStorage: () => sessionStorage,
  partialize: (state) => ({
    themeState: state.themeState
  })
})

export default create(combineStores)