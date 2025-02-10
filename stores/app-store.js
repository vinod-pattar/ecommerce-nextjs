import { createStore } from 'zustand/vanilla'

const defaultInitState = {
  access_token: null,
  refresh_token: null,
  username: null,
  email: null
}

export const creatAppStore = (initState = defaultInitState) => {
  return createStore()((set) => ({
    ...initState,
    setAccessToken: (access_token) => set((state) => ({ access_token })),
    setRefreshToken: (refresh_token) => set((state) => ({ refresh_token })),
    setUsername: (username) => set((state) => ({ username })),
    setEmail: (email) => set((state) => ({ email })),
    logout: () => set(defaultInitState)
  }))
}
