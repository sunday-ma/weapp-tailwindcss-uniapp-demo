<!-- default.vue -->
<template>
  <view class="page-default">
    <slot>main</slot>
  </view>
</template>

<style lang="scss" scoped>
.page-default {
  padding-bottom: calc(env(safe-area-inset-bottom) + 28rpx);
}
</style>
