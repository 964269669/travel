<template>
  <div class="list">
    <div class="item" v-for="(item,index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <!-- 递归组件 -->
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: {
      type: Array
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.item-title-icon
  display: inline-block
  position: relative
  width: 0.36rem
  height: 0.36rem
  top: 0.06rem
  left: 0.06rem
  background: url('//s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat // s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
  margin-right: 0.1rem
  background-size: 0.4rem 3rem
.item-title
  line-height: 0.8rem
  font-size: 0.32rem
  padding: 0 0.2rem
.item-children
  padding 0 .2rem
</style>
