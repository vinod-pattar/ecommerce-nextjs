// src/providers/counter-store-provider.jsx
'use client'

import { createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'
import { creatAppStore } from '@/stores/app-store'

export const AppStoreContext = createContext(undefined)

export const AppStoreProvider = ({ children }) => {
  const storeRef = useRef()
  if (!storeRef.current) {
    storeRef.current = creatAppStore()
  }

  return (
    <AppStoreContext.Provider value={storeRef.current}>
      {children}
    </AppStoreContext.Provider>
  )
}

export const useAppStore = (selector) => {
  const AppStoreContext = useContext(AppStoreContext)

  if (!AppStoreContext) {
    throw new Error('useCounterStore must be used within CounterStoreProvider')
  }

  return useStore(AppStoreContext, selector)
}
