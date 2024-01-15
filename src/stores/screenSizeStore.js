import { defineStore } from 'pinia'

const MOBILE_WIDTH = 375
const TABLET_WIDTH = 768

export const useScreenSizeStore = defineStore('screenSizeStore', {
  state: () => ({
    isMobile: false,
    isTablet: false
  }),
  actions: {
    initResponsive() {
      const width = window.innerWidth
      this.isMobile = width <= MOBILE_WIDTH
      this.isTablet = width > MOBILE_WIDTH && width <= TABLET_WIDTH

      window.addEventListener('resize', () => {
        const newWidth = window.innerWidth
        this.isMobile = newWidth <= MOBILE_WIDTH
        this.isTablet = newWidth > MOBILE_WIDTH && newWidth <= TABLET_WIDTH
      })
    }
  }
})
