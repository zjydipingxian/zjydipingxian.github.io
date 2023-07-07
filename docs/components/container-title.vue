<template>
  <div class="title">{{ title }}</div>
</template>

<script>
export default {
  name: 'container-title',
  props: {
    title: {
      type: [String, Number],
      default: ''
    },
    className: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 0;
  color: #303133;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
}
</style>
