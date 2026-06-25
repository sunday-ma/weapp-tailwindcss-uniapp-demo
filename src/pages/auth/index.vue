<script setup lang="ts">
</script>

<template>
  <view class="flex flex-col items-center justify-center h-screen">
    <view class="flex items-center justify-center text-[28px] icon">
      <view class="i-ant-design-loading-3-quarters-outlined" />
    </view>
    <text class="text-[size:32rpx] mt-[20rpx]">
      测试
    </text>
  </view>
</template>

<style lang="scss" scoped>
.page-container {
  .icon {
    animation-name: ani;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
  }
}

@keyframes ani {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
