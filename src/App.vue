<script setup lang="ts">
import { onLaunch } from '@dcloudio/uni-app'

onLaunch(() => {
  // #ifdef MP-WEIXIN
  // 检查微信小程序新版本
  if (wx.canIUse('getUpdateManager')) {
    const updateManager = wx.getUpdateManager()
    updateManager.onCheckForUpdate((res) => {
      console.warn('[请求完新版本信息的回调]', res.hasUpdate)
      if (res.hasUpdate) {
        updateManager.onUpdateReady(() => {
          wx.showModal({
            title: '更新提示',
            content: '新版本已经准备好，是否重启使用？',
            success(res) {
              if (res.confirm)
                updateManager.applyUpdate()
            },
          })
        })
        updateManager.onUpdateFailed(() => {
          wx.showModal({
            title: '已经有新版本了哟~',
            content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
          })
        })
      }
    })
  }
  else {
    wx.showModal({
      title: '提示',
      content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
    })
  }
  // #endif
})
</script>

<style>
@import './style/common.css';

page {
  --nut-picker-ok-color: #bcdc0b;
}

view {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

button.clear {
  padding: 0;
  margin: 0;
  background: transparent;
  border: none;
  line-height: auto;
  outline: none;
}

button.clear::after {
  display: none;
}
</style>
