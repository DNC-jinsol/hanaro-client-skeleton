import { create } from 'zustand'

import type { RouteKey } from '../routes/routeConfig'

type AppStore = {
  selectedDomainKey: RouteKey
  setSelectedDomainKey: (routeKey: RouteKey) => void
}

export const useAppStore = create<AppStore>((set) => ({
  selectedDomainKey: 'home',
  setSelectedDomainKey: (routeKey) => {
    set({ selectedDomainKey: routeKey })
  },
}))
