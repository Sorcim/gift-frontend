'use client'

import { create } from 'zustand'

interface CartItem {
  id: number
  type: 'product' | 'volume'
  title: string
  price?: number
}

interface CartStore {
  items: CartItem[]
  add: (item: CartItem) => void
  remove: (id: number, type: CartItem['type']) => void
  clear: () => void
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  add: (item) =>
    set((state) => ({
      items: state.items.some((i) => i.id === item.id && i.type === item.type)
        ? state.items
        : [...state.items, item],
    })),
  remove: (id, type) =>
    set((state) => ({
      items: state.items.filter((i) => !(i.id === id && i.type === type)),
    })),
  clear: () => set({ items: [] }),
}))
