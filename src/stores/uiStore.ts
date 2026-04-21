import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

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
    {
      name: 'gift-ui-store',
      storage: createJSONStorage(() =>
        typeof window !== 'undefined' ? localStorage : ({ getItem: () => null, setItem: () => {}, removeItem: () => {} } as Storage)
      ),
    },
  ),
)
