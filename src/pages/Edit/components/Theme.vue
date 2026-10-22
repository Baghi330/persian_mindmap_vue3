<template>
  <Sidebar ref="sidebar" :title="$t('theme.title')">
    <div class="themeList" :class="{ isDark: isDark }">
      <el-tabs v-model="activeName">
        <el-tab-pane v-for="group in groupList" :key="group.key" :label="group.name" :name="group.key"></el-tab-pane>
      </el-tabs>
      <div
        class="themeItem"
        v-for="item in currentList"
        :key="item.value"
        @click="useTheme(item)"
        :class="{ active: item.value === theme }"
      >
        <div class="imgBox">
          <img :src="themeMap[item.value]" alt="" />
        </div>
        <div class="name">{{ item.name }}</div>
      </div>
    </div>
  </Sidebar>
</template>

<script setup>
/**
 * @Author: 黄原寅寅
 * @Desc: 主题
 */
import { ref, defineProps, onMounted, computed, watch, onBeforeMount } from 'vue'
import { useI18n } from 'vue-i18n'
import Sidebar from './Sidebar'
import { themeList } from 'simple-mind-map/src/constants/constant'
import { storeConfig } from '@/api'
import bus from '@/utils/bus.js'
import { useStore } from 'vuex'
import { themeMap } from '@/config/constant.js'
import customThemeList from '@/customThemes'
import { ElMessageBox } from 'element-plus'

const { t } = useI18n()

const props = defineProps({
  mindMap: {
    type: Object
  }
})

const store = useStore()
const activeSidebar = computed(() => store.state.activeSidebar)
const isDark = computed(() => store.state.isDark)
const sidebar = ref(null)
const theme = ref('')
const themeAllList = ref([...themeList, ...customThemeList].reverse())
// const themeAllList = ref([...themeList, ...customThemeList])
// تب فعال با کلید ثابت نگه‌داری می‌شود تا با تغییر زبان نام تب‌ها عوض نشود
const activeName = ref('classics')
const classicsThemeList = ref([])
const baiduThemeList = ref([])
// گروه بندی تم ها، با تغییر زبان دوباره ساخته می شود
const groupList = computed(() => {
  return [
    {
      key: 'classics',
      name: t('theme.classics'),
      list: classicsThemeList.value
    },
    {
      key: 'dark',
      name: t('theme.dark'),
      list: themeAllList.value.filter(item => {
        return item.dark
      })
    },
    {
      key: 'simple',
      name: t('theme.simple'),
      list: baiduThemeList.value
    }
  ]
})

watch(
  () => activeSidebar.value,
  val => {
    if (val === 'theme') {
      theme.value = props.mindMap.getTheme()
      handleDark()
      sidebar.value.show = true
    } else {
      sidebar.value.show = false
    }
  }
)

const currentList = computed(() => {
  const group = groupList.value.find(item => item.key === activeName.value)
  return group ? group.list : []
})

onMounted(async () => {
  await initGroup()
  theme.value = props.mindMap.getTheme()
  handleDark()
  props.mindMap.on('view_theme_change', handleViewThemeChange)
})

onBeforeMount(() => {
  props.mindMap.off('view_theme_change', handleViewThemeChange)
})

const handleViewThemeChange = () => {
  theme.value = props.mindMap.getTheme()
  handleDark()
}

const initGroup = () => {
  let baiduThemes = [
    'default',
    'skyGreen',
    'classic2',
    'classic3',
    'classicGreen',
    'classicBlue',
    'blueSky',
    'brainImpairedPink',
    'earthYellow',
    'freshGreen',
    'freshRed',
    'romanticPurple',
    'pinkGrape',
    'mint'
  ]
  let baiduList = []
  let classicsList = []
  themeAllList.value.forEach(item => {
    if (baiduThemes.includes(item.value)) {
      baiduList.push(item)
    } else if (!item.dark) {
      classicsList.push(item)
    }
  })
  classicsThemeList.value = classicsList
  baiduThemeList.value = baiduList
}

/**
 * @Author: 黄原寅寅
 * @Desc: 使用主题
 */
const useTheme = item => {
  if (theme.value === item.value) return
  theme.value = item.value
  handleDark()
  const customThemeConfig = props.mindMap.getCustomThemeConfig()
  const hasCustomThemeConfig = Object.keys(customThemeConfig).length > 0
  if (hasCustomThemeConfig) {
    ElMessageBox.confirm(t('theme.coverTip'), t('theme.tip'), {
      confirmButtonText: t('theme.cover'),
      cancelButtonText: t('theme.reserve'),
      type: 'warning'
    })
      .then(() => {
        props.mindMap.setThemeConfig({}, true)
        changeTheme(theme, {})
      })
      .catch(() => {
        changeTheme(theme, customThemeConfig)
      })
  } else {
    changeTheme(theme, customThemeConfig)
  }
}

const changeTheme = (theme, config) => {
  bus.emit('showLoading')
  props.mindMap.setTheme(theme.value)
  storeConfig({
    theme: {
      template: theme.value,
      config
    }
  })
}

const handleDark = () => {
  let target = themeAllList.value.find(item => {
    return item.value === theme.value
  })
  store.commit('setIsDark', target.dark)
}
</script>

<style lang="less" scoped>
.themeList {
  padding: 20px;
  padding-top: 0;
  &.isDark {
    .name {
      color: #fff;
    }
  }
  .themeItem {
    width: 100%;
    cursor: pointer;
    border-bottom: 1px solid #e9e9e9;
    margin-bottom: 20px;
    padding-bottom: 20px;
    transition: all 0.2s;
    border: 1px solid transparent;
    &:last-of-type {
      border: none;
    }
    &:hover {
      box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
    }
    &.active {
      border: 1px solid #67c23a;
    }
    .imgBox {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .name {
      text-align: center;
      font-size: 14px;
    }
  }
}
</style>
