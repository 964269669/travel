<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  components: {},
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated() {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      console.log(3)
      const top = document.documentElement.scrollTop
      // 从60的位置开始动画  图片总高度200  200-60=140
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
  position: absolute
  left: 0.2rem
  top: 0.2rem
  width: 0.8rem
  height: 0.8rem
  line-height: 0.8rem
  text-align: center
  border-radius: 0.4rem
  background-color: rgba(0, 0, 0, 0.7)
  .header-abs-back
    color: #ffffff
    font-size: 0.4rem
.header-fixed
  position: fixed
  top: 0
  left: 0
  right: 0
  height: $headerHeight
  line-height: $headerHeight
  text-align: center
  color: #fff
  background-color: $bgColor
  font-size: 0.32rem
  z-index 2
  .header-fixed-back
    position: absolute
    top: 0
    left: 0
    width: 0.64rem
    text-align: center
    font-size: 0.4rem
    color: #fff
</style>
