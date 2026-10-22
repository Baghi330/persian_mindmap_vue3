<template>
  <div class="block2Container">
    <div class="blockContent">
      <div class="blockTitle">{{ $t('index.block2.title') }}</div>
      <div class="dataList">
        <div class="dataItem" v-for="(item, index) in dataList" :key="index">
          <div class="iconBox">
            <span class="icon iconfont" :class="[item.icon]"></span>
          </div>
          <div class="dataValue">{{ $t(item.valueKey) }}</div>
        </div>
      </div>
      <div class="desc">{{ $t('index.block2.desc1') }}</div>
      <div class="desc">{{ $t('index.block2.desc2') }}</div>
      <div class="functionList">
        <div class="functionItem" v-for="(item, index) in functionList" :key="index">
          <div class="icon iconfont" :class="[item.icon]"></div>
          <div class="info">
            <div class="name">{{ $t(item.nameKey) }}</div>
            <div class="value">{{ $t(item.valueKey) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const dataList = [
  {
    icon: 'iconstar',
    valueKey: 'index.block2.stats.star'
  },
  {
    icon: 'iconfork',
    valueKey: 'index.block2.stats.fork'
  },
  {
    icon: 'iconxiazai',
    valueKey: 'index.block2.stats.download'
  },
  {
    icon: 'iconteamwork',
    valueKey: 'index.block2.stats.contributor'
  }
]
const functionList = [
  {
    icon: 'iconjingzi',
    nameKey: 'index.block2.features.theme.name',
    valueKey: 'index.block2.features.theme.value'
  },
  {
    icon: 'iconjiegou',
    nameKey: 'index.block2.features.structure.name',
    valueKey: 'index.block2.features.structure.value'
  },
  {
    icon: 'iconjianpan',
    nameKey: 'index.block2.features.shortcutKey.name',
    valueKey: 'index.block2.features.shortcutKey.value'
  },
  {
    icon: 'iconzitixiahuaxian',
    nameKey: 'index.block2.features.richText.name',
    valueKey: 'index.block2.features.richText.value'
  },
  {
    icon: 'iconimage',
    nameKey: 'index.block2.features.image.name',
    valueKey: 'index.block2.features.image.value'
  },
  {
    icon: 'icongaikuozonglan',
    nameKey: 'index.block2.features.summary.name',
    valueKey: 'index.block2.features.summary.value'
  },
  {
    icon: 'iconxiaolian',
    nameKey: 'index.block2.features.icon.name',
    valueKey: 'index.block2.features.icon.value'
  },
  {
    icon: 'iconchaolianjie',
    nameKey: 'index.block2.features.hyperlink.name',
    valueKey: 'index.block2.features.hyperlink.value'
  },
  {
    icon: 'iconflow-Mark',
    nameKey: 'index.block2.features.note.name',
    valueKey: 'index.block2.features.note.value'
  },
  {
    icon: 'iconbiaoqian',
    nameKey: 'index.block2.features.tag.name',
    valueKey: 'index.block2.features.tag.value'
  },
  {
    icon: 'iconlianjiexian',
    nameKey: 'index.block2.features.associativeLine.name',
    valueKey: 'index.block2.features.associativeLine.value'
  },
  {
    icon: 'iconmouseL',
    nameKey: 'index.block2.features.drag.name',
    valueKey: 'index.block2.features.drag.value'
  },
  {
    icon: 'icondaohang',
    nameKey: 'index.block2.features.navigator.name',
    valueKey: 'index.block2.features.navigator.value'
  },
  {
    icon: 'icondaochu',
    nameKey: 'index.block2.features.importExport.name',
    valueKey: 'index.block2.features.importExport.value'
  },
  {
    icon: 'iconshuiyin',
    nameKey: 'index.block2.features.watermark.name',
    valueKey: 'index.block2.features.watermark.value'
  },
  {
    icon: 'iconwithdraw',
    nameKey: 'index.block2.features.backForward.name',
    valueKey: 'index.block2.features.backForward.value'
  },
  {
    icon: 'iconfuhao-dagangshu',
    nameKey: 'index.block2.features.outline.name',
    valueKey: 'index.block2.features.outline.value'
  },
  {
    icon: 'iconshezhi',
    nameKey: 'index.block2.features.richSettings.name',
    valueKey: 'index.block2.features.richSettings.value'
  }
]
</script>

<style lang="less" scoped>
.block2Container {
  display: flex;
  justify-content: center;
  align-items: center;

  .blockContent {
    padding: 100px 0;
    width: 100%;
    max-width: 1140px;

    .dataList {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 40px;
      .dataItem {
        box-shadow: 0 5px 30px -10px rgba(0, 0, 0, 0.1);
        border-radius: 20px;
        margin-inline-end: 30px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;

        &:last-of-type {
          margin-inline-end: 0;
        }

        .iconBox {
          width: 55px;
          height: 55px;
          border-radius: 10px;
          background-color: rgba(30, 165, 154, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;

          .icon {
            font-size: 30px;
            color: #1ea59a;
          }
        }

        .dataValue {
          color: #1e3547;
          font-weight: 700;
        }
      }
    }

    .blockTitle {
      font-size: 30px;
      font-weight: 700;
      color: #1e3547;
      text-align: center;
      margin-bottom: 40px;
    }

    .desc {
      color: #828f99;
      font-size: 17px;
      line-height: 1.7;
    }

    .functionList {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 60px;
      .functionItem {
        display: flex;
        width: 30%;
        margin-bottom: 50px;

        .icon {
          width: 50px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 50px;
          margin-inline-end: 24px;
          color: #1ea59a;
        }

        .info {
          .name {
            margin-bottom: 5px;
            color: #1e3547;
            font-weight: 600;
            font-size: 18px;
          }

          .value {
            font-size: 14px;
            color: #828f99;
          }
        }
      }
    }
  }
}
</style>
