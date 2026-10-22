<template>
  <div class="block5Container">
    <div class="blockContent">
      <div class="infoBox">
        <div class="infoTitle">{{ $t('index.block5.title') }}</div>
        <div class="infoDesc">{{ $t('index.block5.desc') }}</div>
        <div class="linkBtnList">
          <div class="linkBtn">
            <a href="https://github.com/wanglin2" target="_blank">
              <span class="linkBtnIcon iconfont icongithub"></span>
            </a>
          </div>
          <div class="linkBtn">
            <a href="https://juejin.cn/user/325111170756279" target="_blank">
              <span class="linkBtnIcon text">{{ $t('index.block5.juejin') }}</span>
            </a>
          </div>
          <div class="linkBtn">
            <a href="https://segmentfault.com/u/jiejiaoxiaolin/articles" target="_blank">
              <span class="linkBtnIcon text">{{ $t('index.block5.segmentfault') }}</span>
            </a>
          </div>
          <div class="linkBtn">
            <a href="http://lxqnsys.com/" target="_blank">
              <span class="linkBtnIcon iconfont iconwangzhan"></span>
            </a>
          </div>
          <div class="linkBtn">
            <a href="https://www.zhihu.com/people/wang-lin-49-43-65" target="_blank">
              <span class="linkBtnIcon iconfont iconshejiaotubiao-10"></span>
            </a>
          </div>
          <div class="linkBtn">
            <a href="https://blog.csdn.net/sinat_33488770?type=blog" target="_blank">
              <span class="linkBtnIcon iconfont iconcsdn"></span>
            </a>
          </div>
        </div>
      </div>
      <div class="linkBox">
        <div class="linkTitle">{{ $t('index.block5.moreWorks') }}</div>
        <div class="linkList">
          <div class="linkItem" v-for="item in linkList" :key="item.name">
            <el-tooltip :content="$t(item.descKey)" placement="top">
              <a :href="item.url" target="_blank">{{ item.name }}</a>
            </el-tooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const linkList = [
  {
    name: 'CodeRun',
    url: 'https://github.com/wanglin2/code-run',
    descKey: 'index.block5.works.codeRun'
  },
  {
    name: 'TinyWhiteboard',
    url: 'https://github.com/wanglin2/tiny_whiteboard',
    descKey: 'index.block5.works.tinyWhiteboard'
  },
  {
    name: 'Mark.js',
    url: 'https://github.com/wanglin2/markjs',
    descKey: 'index.block5.works.markjs'
  },
  {
    name: 'WebMapEngine',
    url: 'https://github.com/wanglin2/web_map_demo',
    descKey: 'index.block5.works.webMapEngine'
  },
  {
    name: 'SimpleNoviceGuide',
    url: 'https://github.com/wanglin2/simple-novice-guide',
    descKey: 'index.block5.works.simpleNoviceGuide'
  },
  {
    name: 'CanvasEditor',
    url: 'https://github.com/wanglin2/canvas-editor-demo',
    descKey: 'index.block5.works.canvasEditor'
  },
  {
    name: 'JsonTreeView',
    url: 'https://github.com/wanglin2/json-tree-view',
    descKey: 'index.block5.works.jsonTreeView'
  },
  {
    name: 'SimpleFlowChart',
    url: 'https://github.com/wanglin2/simple-flow-chart',
    descKey: 'index.block5.works.simpleFlowChart'
  },
  {
    name: 'VideoTimeLine',
    url: 'https://github.com/wanglin2/VideoTimeLine',
    descKey: 'index.block5.works.videoTimeLine'
  },
  {
    name: 'MarkdownEditor',
    url: 'https://github.com/wanglin2/markdown_editor_sync_scroll_demo',
    descKey: 'index.block5.works.markdownEditor'
  },
  {
    name: 'AssociationLine',
    url: 'https://github.com/wanglin2/AssociationLineDemo',
    descKey: 'index.block5.works.associationLine'
  },
  {
    name: 'HandPaintedStyle',
    url: 'https://github.com/wanglin2/handPaintedStyle',
    descKey: 'index.block5.works.handPaintedStyle'
  }
]
</script>

<style lang="less" scoped>
.block5Container {
  background-color: #f0f9fa;
  border-radius: 450px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .blockContent {
    width: 100%;
    max-width: 1140px;
    height: 350px;
    display: flex;
    padding-top: 100px;

    .infoBox {
      .infoTitle {
        font-size: 20px;
        font-weight: 700;
        color: #1e3547;
        line-height: 1.4;
        margin-bottom: 20px;
      }

      .infoDesc {
        color: #828f99;
        font-size: 16px;
      }

      .linkBtnList {
        margin-top: 30px;
        display: flex;
        align-items: center;
        .linkBtn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          overflow: hidden;
          background-color: #f0f9fa;
          border: 2px solid #dbf1f1;
          margin-inline-end: 10px;

          a {
            width: 100%;
            height: 100%;
            text-decoration: none;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.5s;

            &:hover {
              background-color: #1ea59a;

              .linkBtnIcon {
                color: #fff;
              }
            }

            .linkBtnIcon {
              font-size: 20px;
              color: #1e3547;
              transition: all 0.5s;

              &.text {
                font-size: 13px;
              }
            }
          }
        }
      }
    }

    .linkBox {
      margin-inline-start: 150px;
      .linkTitle {
        font-size: 20px;
        font-weight: 700;
        color: #1e3547;
        line-height: 1.4;
        margin-bottom: 20px;
      }

      .linkList {
        display: flex;
        flex-wrap: wrap;

        .linkItem {
          margin-inline-end: 20px;
          margin-bottom: 10px;

          a {
            color: #828f99;
            font-size: 15px;
            transition: all 0.5s;
            text-decoration: none;

            &:hover {
              color: #1ea59a;
            }
          }
        }
      }
    }
  }
}
</style>
