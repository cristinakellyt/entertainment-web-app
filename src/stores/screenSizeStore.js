import { defineStore } from 'pinia'

export const useScreenSizeStore = defineStore('screenSizeStore', {
  state: () => ({
    isMobile: false,
    isTablet: false
  }),
  actions: {
    initResponsive() {
      const width = window.innerWidth
      this.isMobile = width <= 375
      this.isTablet = width > 375 && width <= 768

      window.addEventListener('resize', () => {
        const newWidth = window.innerWidth
        this.isMobile = newWidth <= 375
        this.isTablet = newWidth > 375 && newWidth <= 768
      })
    }
  }
})
