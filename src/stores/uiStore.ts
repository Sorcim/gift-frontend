'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UiStore {
  isSpoilEnabled: boolean
  setSpoilEnabled: (enabled: boolean) => void
}

export const useUiStore = create<UiStore>()(
  persist(
    (set) => ({
      isSpoilEnabled: false,
      setSpoilEnabled: (enabled) => set({ isSpoilEnabled: enabled }),
    }),
    { name: 'gift-ui-store' },
  ),
)
