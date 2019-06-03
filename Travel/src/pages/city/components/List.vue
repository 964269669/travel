<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  computed: {
    // mapState参数可以是数组也可以是对象
    ...mapState({
      currentCity: 'city'
    })
  },
  watch: {
    letter(newVal, oldVal) {
      if (this.letter) {
        const ele = this.$refs[this.letter][0]
        this.scroll.scrollToElement(ele)
      }
      console.log(44, this.letter)
    }
  },
  methods: {
    handleCityClick(city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'

.border-topbottom
  &:before
    border-color: #777
  &:after
    border-color: #777
.border-bottom
  &:before
    border-color: #777
  &:after
    border-color: #777
.list
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  .title
    line-height: 0.54rem
    background: #eeeeee
    padding-left: 0.2rem
    color: #666666
    font-size: 0.26rem
  .button-list
    overflow: hidden
    padding: 0.1rem 0.6rem 0.1rem 0.1rem
    .button-wrapper
      float: left
      width: 33.33%
      .button
        margin: 0.1rem
        padding: 0.1rem 0
        text-align: center
        border: 0.02rem solid #ccc
        border-radius: 0.06rem
  .item-list
    .item
      line-height: 0.76rem
      padding-left: 0.2rem
</style>
