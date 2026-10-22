<template>
  <div class="indexHeaderContainer" :class="{ active: active }">
    <div class="headerContent">
      <div class="logoBox">
        <span class="logo"></span>
        <span class="title">SimpleMindMap</span>
      </div>
      <div class="nav">
        <div
          class="navItem"
          @click="jumpTop"
          :class="{
            active: activeTab === 'home'
          }"
        >
          {{ $t('index.header.home') }}
        </div>
        <div class="navItem" @click="useOnline">{{ $t('index.header.online') }}</div>
        <div
          class="navItem"
          @click="jumpClient"
          :class="{
            active: activeTab === 'client'
          }"
        >
          {{ $t('index.header.client') }}
        </div>
        <div class="navItem" @click="jumpHelp">{{ $t('index.header.help') }}</div>
        <div class="navItem" @click="jumpDoc">{{ $t('index.header.doc') }}</div>
        <div class="navItem">
          <a href="https://github.com/wanglin2/mind-map" target="_blank">Github</a>
        </div>
        <div class="navItem langItem">
          <el-select v-model="lang" size="small" class="langSelect" @change="onLangChange">
            <el-option v-for="item in langList" :key="item.value" :label="item.name" :value="item.value" />
          </el-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { langList } from '@/config'
import { storeLang, getLang } from '@/api'

const router = useRouter()
const { locale } = useI18n()
const active = ref(false)
const activeTab = ref('home')
const clientEl = ref(null)
const lang = ref(getLang())

const onLangChange = selectedLang => {
  lang.value = selectedLang
  locale.value = selectedLang
  storeLang(selectedLang)
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  clientEl.value = document.querySelector('.block3Container')
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

const onScroll = () => {
  active.value = window.scrollY > 0
  let offsetTop = clientEl.value.offsetTop
  if (window.scrollY + window.innerHeight >= offsetTop && window.scrollY <= offsetTop + clientEl.value.offsetHeight) {
    activeTab.value = 'client'
  } else {
    activeTab.value = 'home'
  }
}

const useOnline = () => {
  router.push('/')
}

const jumpHelp = () => {
  router.push('/help/zh/')
}

const jumpDoc = () => {
  router.push('/doc/zh/')
}

const jumpTop = () => {
  window.scrollTo(0, 0)
}

const jumpClient = () => {
  window.scrollTo(0, clientEl.value.offsetTop - 76)
}
</script>

<style lang="less" scoped>
.indexHeaderContainer {
  position: fixed;
  inset-inline-start: 0;
  top: 0;
  width: 100%;
  height: 76px;
  transition: all 0.5s;
  background-color: transparent;
  z-index: 999;

  &.active {
    background-color: #fff;
    box-shadow: 0 5px 30px -10px rgba(0, 0, 0, 0.1);
  }

  .headerContent {
    height: 100%;
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logoBox {
      display: flex;
      align-items: center;

      .logo {
        width: 22px;
        height: 22px;
        background-image: url('../../../assets/img/logo2.png');
        background-size: cover;
        margin-inline-end: 5px;
      }

      .title {
        color: #000;
        font-size: 20px;
      }
    }

    .nav {
      display: flex;
      align-items: center;

      .navItem {
        color: #828f99;
        font-size: 15px;
        transition: all 0.5s;
        margin-inline-end: 40px;
        cursor: pointer;

        &:last-of-type {
          margin-inline-end: 0;
        }

        &.active {
          color: #1ea59a;
        }

        &:hover {
          color: #1ea59a;
        }

        a {
          text-decoration: none;
          color: #828f99;

          &:hover {
            color: #1ea59a;
          }
        }
      }

      .langItem {
        .langSelect {
          width: 110px;
        }
      }
    }
  }
}
</style>
