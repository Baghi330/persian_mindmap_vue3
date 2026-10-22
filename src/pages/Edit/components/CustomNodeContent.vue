<template>
  <div class="customNodeContent">
    <p>{{ title }}</p>
    <p v-html="html"></p>
    <p :style="{ backgroundColor: color }" @click="onClick">با کلیک رنگ من تغییر می‌کند</p>
  </div>
</template>

<script>
export default {
  props: {
    html: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      title: 'من یک گره سفارشی هستم',
      color: ''
    }
  },
  methods: {
    onClick() {
      this.color = 'red'
    }
  }
}
</script>

<style lang="less" scoped>
.customNodeContent {
  padding: 10px;
  cursor: pointer;
}
</style>
