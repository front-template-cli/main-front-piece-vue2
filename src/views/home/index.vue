<template>
  <div class="home">
    <div>
      <video id="VideoPlayer" autoplay class="kd-video"></video>
    </div>
    <a-button type="primary" @click="handleLink">测试</a-button>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
  import { InitClientSocket } from 'kd-api/lib'

  @Component({
    components: {
      HelloWorld
    }
  })
  export default class Home extends Vue {
    public handleLink() {
      InitClientSocket.init(
        'VideoPlayer',
        'ws://58.213.192.215:40968/2',
        '1920*1080'
      ).then(() => {
        InitClientSocket.progress((val: any) => {
          console.log('process:', val)
        })
      })
    }
  }
</script>
<style lang="less" scoped>
  .kd-video {
    width: 640px;
    height: 360px;
  }
</style>
