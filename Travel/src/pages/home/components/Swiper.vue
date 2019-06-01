<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="slide in swiperList" :key="slide.id">
        <img
          class="swiper-img"
          :src="slide.imgUrl"
          alt
        >
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        { id: '0001', imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/f2/928a8ff6148e5802.png_890x330_4c2f220f.png' },
        { id: '0002', imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/c7ba5a42c61c9b5ae2eb8fed6c5f755f.jpg_890x330_8b43ed5b.jpg' },
        { id: '0003', imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/f6cd2ef9454f5e9abe190a8008e121b4.jpg_890x330_fd074429.jpg' },
        { id: '0004', imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/5992b485924b2f348e59e9285a804f3d.jpg_890x330_37202f9c.jpg' },
        { id: '0005', imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/30/cea146e3d2eda002.jpg_890x330_f72cb574.jpg' }
      ]
    }
  }
}
</script>

<style lang='stylus' scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background-color: #fff
.wrapper
  width: 100%
  height: 0
  overflow: hidden
  padding-bottom: 37.08%
  background-color: #ccc
  .swiper-img
    width: 100%
</style>
