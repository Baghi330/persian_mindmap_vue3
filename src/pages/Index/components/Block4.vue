<template>
  <div class="block4Container">
    <div class="blockContent">
      <div class="infoBox">
        <div class="infoTitle">{{ $t('index.block4.title') }}</div>
        <div class="info">{{ $t('index.block4.info') }}</div>
        <div class="info">{{ $t('index.block4.info2') }}</div>
        <div class="info">{{ $t('index.block4.step1') }}</div>
        <div class="codeBox">
          <pre><code class="language-bash" ref="code1">
npm i simple-mind-map
            </code></pre>
        </div>
        <div class="info">{{ $t('index.block4.step2') }}</div>
        <div class="codeBox">
          <pre><code class="language-javascript" ref="code2">
import MindMap from "simple-mind-map"
            </code></pre>
        </div>
        <div class="info">{{ $t('index.block4.step3') }}</div>
        <div class="codeBox">
          <pre><code class="language-javascript" ref="code3">
const mindMap = new MindMap({
  // {{ $t('index.block4.codeCommentEl') }}
  el: document.getElementById('mindMapContainer'),
  // {{ $t('index.block4.codeCommentData') }}
  data: {
    "data": {
        "text": "{{ $t('index.block4.codeRootText') }}"
    },
    "children": []
  }
})
            </code></pre>
        </div>
        <div class="btnList">
          <div class="btn" @click="jumpDoc">{{ $t('index.block4.more') }}</div>
        </div>
      </div>
      <div class="picBox"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import bash from 'highlight.js/lib/languages/bash'
import 'highlight.js/styles/github.css'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('bash', bash)

const router = useRouter()
const { locale } = useI18n()
const code1 = ref(null)
const code2 = ref(null)
const code3 = ref(null)

// کدهای نمونه بعد از تغییر زبان دوباره رنگ‌آمیزی می شوند
const highlightCode = () => {
  hljs.highlightElement(code1.value)
  hljs.highlightElement(code2.value)
  hljs.highlightElement(code3.value)
}

onMounted(() => {
  highlightCode()
})

watch(locale, () => {
  nextTick(() => {
    highlightCode()
  })
})

const jumpDoc = () => {
  router.push('/doc/zh/')
}
</script>

<style lang="less" scoped>
.block4Container {
  display: flex;
  justify-content: center;
  align-items: center;

  .blockContent {
    width: 100%;
    max-width: 1140px;
    display: flex;
    align-items: center;
    padding: 50px 0;

    .picBox {
      width: 500px;
      height: 500px;
      background-image: url('../../../assets/img/index/block4.png');
      flex-shrink: 0;
    }

    .infoBox {
      margin-inline-end: 50px;

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

      .codeBox {
        font-size: 16px;
        margin-top: 10px;
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
          height: 100%;
          padding: 0 20px;
          line-height: 44px;
          color: #fff;
          font-weight: 600;
          font-size: 15px;

          &:hover {
            transform: translateY(-4px);
          }
        }
      }
    }
  }
}
</style>
