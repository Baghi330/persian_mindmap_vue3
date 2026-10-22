<template>
  <div class="block3Container">
    <div class="blockContent">
      <div class="picBox"></div>
      <div class="infoBox">
        <div class="infoTitle">{{ $t('index.block3.title') }}</div>
        <div class="info">{{ $t('index.block3.info') }}</div>
        <div class="info">{{ $t('index.block3.desc') }}</div>
        <div class="btnList">
          <div class="btn">
            <a href="https://pan.baidu.com/s/1huasEbKsGNH2Af68dvWiOg?pwd=3bp3" target="_blank">{{
              $t('index.block3.baiduDownload')
            }}</a>
          </div>
          <div class="btn btn2">
            <a href="https://github.com/wanglin2/mind-map/releases" target="_blank">{{
              $t('index.block3.githubDownload')
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {}
}
</script>

<style lang="less" scoped>
.block3Container {
  background-color: #f0f9fa;
  border-radius: 0 0 350px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .blockContent {
    width: 100%;
    max-width: 1140px;
    height: 520px;
    display: flex;
    align-items: center;

    .picBox {
      width: 500px;
      height: 500px;
      background-image: url('../../../assets/img/index/block3.png');
      flex-shrink: 0;
    }

    .infoBox {
      .infoTitle {
        font-weight: 700;
        color: #1e3547;
        font-size: 40px;
      }

      .info {
        color: #828f99;
        font-size: 16px;
        line-height: 1.7;
        margin-top: 20px;
      }

      .btnList {
        display: flex;
        align-items: center;

        .btn {
          height: 44px;
          cursor: pointer;
          background: #1ea59a;
          border-color: #1ea59a;
          border-radius: 5px;
          transition: all 0.5s;
          margin-inline-end: 10px;
          margin-top: 20px;

          &:hover {
            transform: translateY(-4px);
          }

          &.btn2 {
            background-color: #f5828b;
          }

          a {
            height: 100%;
            padding: 0 20px;
            line-height: 44px;
            color: #fff;
            font-weight: 600;
            font-size: 15px;
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>
