import { create } from 'zustand'

interface IMediaDarkStore {
  isDark: boolean
  toggle: () => void
}
const useMediaDarkStore = create<IMediaDarkStore>(() => {
  return {
    isDark: false,
    toggle: () => void 0,
  }
})

export const useIsDark = () => useMediaDarkStore((state) => state.isDark)
export const useDarkModeSwitch = () => {
  return useMediaDarkStore((state) => state.toggle)
}
