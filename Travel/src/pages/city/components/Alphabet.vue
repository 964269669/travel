<template>
  <ul class="list">
    <li class="item"
        v-for="item of letters" :key="item"
        :ref="item"
        @click="handleLetterClick" @touchstart.prevent="handleTouchStart" @touchmove="handleTouchMove"
        @touchend="handleTouchEnd">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated() {
    // 这里可以利用updated钩子函数获取 offsetTop
    // 在touchmove的时候直接使用获取到的定值 不要再touchmove的时候每次都获取
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters() {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  mounted() {
  },
  methods: {
    handleLetterClick(e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart(e) {
      this.touchStatus = true
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        // 函数节流 提高性能
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          // 这里的startY 在updated中获取一次，这里直接使用 提高性能
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd(e) {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
  display: flex
  flex-direction: column
  justify-content center
  position absolute
  top: 1.58rem
  right: 0
  bottom: 0
  width 0.4rem
  .item
    line-height .4rem
    text-align center
    color: $bgColor
</style>
