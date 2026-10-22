<template>
  <el-dialog
    custom-class="nodeImportDialog"
    v-model="dialogVisible"
    :title="$t('import.title')"
    width="520px"
    :close-on-click-modal="false"
  >
    <div class="importContainer" :class="{ isDark: isDark }">
      <div class="importDesc">{{ $t('import.desc') }}</div>
      <el-upload
        ref="upload"
        class="importUpload"
        drag
        action="x"
        :file-list="fileList"
        :auto-upload="false"
        :multiple="false"
        :on-change="onChange"
        :limit="1"
        :on-exceed="onExceed"
      >
        <el-icon class="uploadIcon">
          <UploadFilled />
        </el-icon>
        <div class="uploadText">{{ $t('import.dropTip') }}</div>
        <div class="uploadFileTypes">
          <span class="fileTypeTag" v-for="item in fileTypeList" :key="item.name">{{ item.name }}</span>
        </div>
      </el-upload>
      <div class="fileTypeTip">
        <span class="tipTitle">{{ $t('import.fileTypes') }}</span>
        <span class="tipText">{{ $t('import.supportFile') }}</span>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">{{ $t('dialog.cancel') }}</el-button>
        <el-button type="primary" @click="confirm">{{ $t('dialog.confirm') }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
/**
 * @Author: 黄原寅
 * @Desc: 导入功能
 */
import { onBeforeMount, onMounted, ref, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { UploadFilled } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex'
import bus from '@/utils/bus.js'
// import MindMap from 'simple-mind-map'
import xmind from 'simple-mind-map/src/parse/xmind.js'
import markdown from 'simple-mind-map/src/parse/markdown.js'
import { fileToBuffer } from '@/utils'
import { read, utils } from 'xlsx'

const { t } = useI18n()
const route = useRoute()
const dialogVisible = ref(false)
const fileList = ref([])
const store = useStore()
const isDark = computed(() => store.state.isDark)

// 支持的文件格式
const fileTypeList = [
  { name: '.smm' },
  { name: '.json' },
  { name: '.xmind' },
  { name: '.xlsx' },
  { name: '.md' }
]

watch(
  () => dialogVisible.value,
  (val, oldVal) => {
    if (!val && oldVal) {
      fileList.value = []
    }
  }
)

onMounted(() => {
  bus.on('showImport', handleShowImport)
  bus.on('handle_file_url', handleFileURL)
})

onBeforeMount(() => {
  bus.off('showImport', handleShowImport)
  bus.off('handle_file_url', handleFileURL)
})

const handleShowImport = () => {
  dialogVisible.value = true
}

// 检查url中是否操作需要打开的文件
const handleFileURL = async () => {
  try {
    const fileURL = route.query.fileURL
    if (!fileURL) return
    const macth = /\.(smm|json|xmind|md|xlsx)$/.exec(fileURL)
    if (!macth) {
      return
    }
    const type = macth[1]
    const res = await fetch(fileURL)
    const file = await res.blob()
    const data = {
      raw: file
    }
    if (type === 'smm' || type === 'json') {
      handleSmm(data)
    } else if (type === 'xmind') {
      handleXmind(data)
    } else if (type === 'xlsx') {
      handleExcel(data)
    } else if (type === 'md') {
      handleMd(data)
    }
  } catch (error) {
    console.log(error)
  }
}

/**
 * @Author: 黄原寅
 * @Desc: 文件选择
 */
const onChange = file => {
  let reg = /\.(smm|xmind|json|xlsx|md)$/
  if (!reg.test(file.name)) {
    ElMessage({
      message: t('import.enableFileTip'),
      type: 'error'
    })
    fileList.value = []
  } else {
    fileList.value.push(file)
  }
}

/**
 * @Author: 黄原寅
 * @Desc: 数量超出限制
 */
const onExceed = () => {
  ElMessage({
    message: t('import.maxFileNum'),
    type: 'warning'
  })
}

/**
 * @Author: 黄原寅
 * @Desc: 取消
 */
const cancel = () => {
  dialogVisible.value = false
}

/**
 * @Author: 黄原寅
 * @Desc: 确定导入
 */
const confirm = () => {
  if (fileList.value.length <= 0) {
    return ElMessage({
      message: t('import.notSelectTip'),
      type: 'warning'
    })
  }
  store.commit('setIsHandleLocalFile', false)
  let file = fileList.value[0]
  if (/\.(smm|json)$/.test(file.name)) {
    handleSmm(file)
  } else if (/\.xmind$/.test(file.name)) {
    handleXmind(file)
  } else if (/\.xlsx$/.test(file.name)) {
    handleExcel(file)
  } else if (/\.md$/.test(file.name)) {
    handleMd(file)
  }
  cancel()
  store.commit('setActiveSidebar', null)
}
/**
 * @Author: 黄原寅
 * @Desc: 处理.smm文件
 */
const handleSmm = file => {
  let fileReader = new FileReader()
  fileReader.readAsText(file.raw)
  fileReader.onload = evt => {
    try {
      let data = JSON.parse(evt.target.result)
      if (typeof data !== 'object') {
        throw new Error(t('import.fileContentError'))
      }
      bus.emit('setData', data)
      ElMessage({
        message: t('import.importSuccess'),
        type: 'success'
      })
    } catch (error) {
      console.log(error)
      ElMessage({
        message: t('import.fileParsingFailed'),
        type: 'error'
      })
    }
  }
  cancel()
}
/**
 * @Author: 黄原寅
 * @Desc: 处理.xmind文件
 */
const handleXmind = async file => {
  try {
    // let data = await MindMap.xmind.parseXmindFile(file.raw)
    let data = await xmind.parseXmindFile(file.raw) // 将xmind解析方法从MindMap类上移除，改为按需引入方式使用
    bus.emit('setData', data)
    ElMessage({
      message: t('import.importSuccess'),
      type: 'success'
    })
  } catch (error) {
    console.log(error)
    ElMessage({
      message: t('import.fileParsingFailed'),
      type: 'error'
    })
  }
}
/**
 * @Author: 黄原寅
 * @Desc: 处理.xlsx文件
 */
const handleExcel = async file => {
  try {
    const wb = read(await fileToBuffer(file.raw))
    const data = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], {
      header: 1
    })
    if (data.length <= 0) {
      return
    }
    let max = 0
    data.forEach(arr => {
      if (arr.length > max) {
        max = arr.length
      }
    })
    let layers = []
    let walk = layer => {
      if (!layers[layer]) {
        layers[layer] = []
      }
      for (let i = 0; i < data.length; i++) {
        if (data[i][layer]) {
          let node = {
            data: {
              text: data[i][layer]
            },
            children: [],
            _row: i
          }
          layers[layer].push(node)
        }
      }
      if (layer < max - 1) {
        walk(layer + 1)
      }
    }
    walk(0)
    let getParent = (arr, row) => {
      for (let i = arr.length - 1; i >= 0; i--) {
        if (row >= arr[i]._row) {
          return arr[i]
        }
      }
    }
    for (let i = 1; i < layers.length; i++) {
      let arr = layers[i]
      for (let j = 0; j < arr.length; j++) {
        let item = arr[j]
        let parent = getParent(layers[i - 1], item._row)
        if (parent) {
          parent.children.push(item)
        }
      }
    }
    bus.emit('setData', layers[0][0])
    ElMessage.success(t('import.importSuccess'))
  } catch (error) {
    console.log(error)
    ElMessage.error(t('import.fileParsingFailed'))
  }
}
/**
 * @Author: 黄原寅
 * @Desc: 处理markdown文件
 */
const handleMd = async file => {
  let fileReader = new FileReader()
  fileReader.readAsText(file.raw)
  fileReader.onload = async evt => {
    try {
      let data = await markdown.transformMarkdownTo(evt.target.result)
      bus.emit('setData', data)
      ElMessage({
        message: t('import.importSuccess'),
        type: 'success'
      })
    } catch (error) {
      console.log(error)
      ElMessage({
        message: t('import.fileParsingFailed'),
        type: 'error'
      })
    }
  }
}
</script>

<script>
export default {
  name: 'Import'
}
</script>

<style lang="less" scoped>
.importContainer {
  .importDesc {
    color: #828f99;
    font-size: 13px;
    line-height: 1.7;
    margin-bottom: 16px;
  }

  .importUpload {
    width: 100%;
    :deep(.el-upload) {
      width: 100%;
    }
    :deep(.el-upload-dragger) {
      width: 100%;
      padding: 28px 20px;
      border-radius: 12px;
      background-color: #fafbfc;
      border: 1px dashed #dcdfe6;
      transition: all 0.3s;
      &:hover {
        border-color: #409eff;
        background-color: #f5f9ff;
      }
    }
    :deep(.is-dragover .el-upload-dragger) {
      border-color: #409eff;
      background-color: #ecf5ff;
    }
    .uploadIcon {
      font-size: 52px;
      color: #c0c4cc;
      transition: color 0.3s;
    }
    :deep(.el-upload-dragger:hover) .uploadIcon {
      color: #409eff;
    }
    .uploadText {
      margin-top: 12px;
      color: #606266;
      font-size: 14px;
    }
    .uploadFileTypes {
      margin-top: 12px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 6px;
      .fileTypeTag {
        padding: 2px 10px;
        border-radius: 20px;
        font-size: 12px;
        color: #606266;
        background-color: #fff;
        border: 1px solid #ebeef5;
      }
    }
    // 已选择的文件
    :deep(.el-upload-list) {
      margin-top: 12px;
      .el-upload-list__item {
        border-radius: 8px;
        padding: 8px 12px;
        background-color: #f5f7fa;
        border-color: #ebeef5;
        .el-upload-list__item-name {
          color: #303133;
        }
      }
    }
  }

  .fileTypeTip {
    margin-top: 14px;
    display: flex;
    align-items: flex-start;
    .tipTitle {
      flex-shrink: 0;
      margin-inline-end: 8px;
      color: #303133;
      font-size: 13px;
      font-weight: 500;
    }
    .tipText {
      color: #909399;
      font-size: 12px;
      line-height: 1.7;
    }
  }

  &.isDark {
    .importDesc {
      color: hsla(0, 0%, 100%, 0.6);
    }
    .importUpload {
      :deep(.el-upload-dragger) {
        background-color: #363b3f;
        border-color: hsla(0, 0%, 100%, 0.15);
        &:hover {
          border-color: #409eff;
          background-color: hsla(0, 0%, 100%, 0.06);
        }
      }
      .uploadIcon {
        color: hsla(0, 0%, 100%, 0.3);
      }
      :deep(.el-upload-dragger:hover) .uploadIcon {
        color: #409eff;
      }
      .uploadText {
        color: hsla(0, 0%, 100%, 0.8);
      }
      .uploadFileTypes {
        .fileTypeTag {
          color: hsla(0, 0%, 100%, 0.7);
          background-color: #262a2e;
          border-color: hsla(0, 0%, 100%, 0.15);
        }
      }
      :deep(.el-upload-list) {
        .el-upload-list__item {
          background-color: #262a2e;
          border-color: hsla(0, 0%, 100%, 0.15);
          .el-upload-list__item-name {
            color: hsla(0, 0%, 100%, 0.85);
          }
        }
      }
    }
    .fileTypeTip {
      .tipTitle {
        color: hsla(0, 0%, 100%, 0.85);
      }
      .tipText {
        color: hsla(0, 0%, 100%, 0.5);
      }
    }
  }
}
</style>
<style lang="less">
// 弹窗样式（非 scoped，因为内容渲染在 el-dialog 内部）
.nodeImportDialog {
  border-radius: 12px;
  .el-dialog__header {
    margin-right: 0;
    padding: 20px 24px 12px;
  }
  .el-dialog__title {
    font-size: 17px;
    font-weight: 600;
  }
  .el-dialog__body {
    padding: 12px 24px 20px;
  }
  .el-dialog__footer {
    padding: 0 24px 20px;
  }
}
</style>
