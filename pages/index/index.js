// index.js
Page({
  data: {
    headerHeight: 0,
    passedHeader: false
  },
  onLoad() {
    // Get header's height to use later when user scrolls
    const query = wx.createSelectorQuery();
    query.select('.header-container').boundingClientRect((rect) => {
      this.setData({
        headerHeight: rect.height
      })
    }).exec();
  },
  onPageScroll(e) {
    // scrollTop is the position of the scroll, 0 being the top, larger the number the further down user has scrolled
    const { scrollTop } = e;
    const { headerHeight, passedHeader } = this.data;
    // Only execute when there's header height
    if(headerHeight > 0) {
      // User has scrolled pass header
      if(scrollTop > headerHeight) {
        // This condition prevent setData being called too many time, which might effect performance
        if(!passedHeader) {
          this.setData({
            passedHeader: true
          });
        }
      } else {
        // This condition prevent setData being called too many time, which might effect performance
        if(passedHeader) {
          this.setData({
            passedHeader: false
          });
        }
      }
    }
  }
})
