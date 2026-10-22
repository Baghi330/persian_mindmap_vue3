<template>
  <el-dialog custom-class="nodeNoteDialog" v-model="dialogVisible" :title="$t('nodeNote.title')">
    <!-- <el-input
      type="textarea"
      :autosize="{ minRows: 3, maxRows: 5 }"
      placeholder="请输入内容"
      v-model="note"
    >
    </el-input> -->
    <div class="noteEditor" ref="noteEditor" @keyup.stop @keydown.stop></div>
    <!-- <div class="tip">换行请使用：Enter+Shift</div> -->
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">{{ $t('dialog.cancel') }}</el-button>
        <el-button type="primary" @click="confirm">{{ $t('dialog.confirm') }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, onMounted, nextTick, onBeforeMount, computed, watch } from 'vue'
import Editor from '@toast-ui/editor'
import '@toast-ui/editor/dist/toastui-editor.css' // Editor's Style
import { useI18n } from 'vue-i18n'
import bus from '@/utils/bus.js'
import { editorLangList } from '@/config/editorLang'
/**
 * @Author: 黄原寅
 * @Desc: 节点备注内容设置
 */
const { locale } = useI18n()
const dialogVisible = ref(false)
const note = ref('')
const activeNodes = ref([])
const editor = ref(null)
const noteEditor = ref(null)

// زبان ویرایشگر متن غنی بر اساس زبان برنامه تعیین می‌شود
const editorLanguage = computed(() => {
  const lang = locale.value
  return editorLangList[lang] ? lang : 'en-US'
})

onMounted(() => {
  bus.on('node_active', handleNodeActive)
  bus.on('showNodeNote', handleShowNodeNote)
})

onBeforeMount(() => {
  bus.off('node_active', handleNodeActive)
  bus.off('showNodeNote', handleShowNodeNote)
})

const handleNodeActive = args => {
  activeNodes.value = [...args[1]]
  if (activeNodes.value.length > 0) {
    let firstNode = activeNodes.value[0]
    note.value = firstNode.getData('note') || ''
  } else {
    note.value = ''
  }
}

const handleShowNodeNote = () => {
  bus.emit('startTextEdit')
  dialogVisible.value = true
  nextTick(() => {
    initEditor()
  })
}

/**
 * @Author: 黄原寅
 * @Desc: ساخت ویرایشگر با زبان فعلی برنامه
 */
const createEditor = el => {
  // ثبت زبان‌های پشتیبانی‌شده در ویرایشگر
  Object.keys(editorLangList).forEach(lang => {
    Editor.setLanguage(lang, editorLangList[lang])
  })
  editor.value = new Editor({
    el,
    height: '500px',
    initialEditType: 'markdown',
    previewStyle: 'vertical',
    language: editorLanguage.value
  })
}

/**
 * @Author: 黄原寅
 * @Desc: 初始化编辑器
 */
const initEditor = () => {
  if (!editor.value) {
    createEditor(noteEditor.value)
  }
  editor.value.setMarkdown(note.value)
}

// با تغییر زبان برنامه، ویرایشگر با زبان جدید دوباره ساخته می‌شود
watch(editorLanguage, () => {
  if (!editor.value || !noteEditor.value) {
    return
  }
  const currentMarkdown = editor.value.getMarkdown()
  editor.value.destroy()
  editor.value = null
  nextTick(() => {
    // محتوای قبلی پاک و ویرایشگر جدید روی dom تمیز ساخته می‌شود
    noteEditor.value.innerHTML = ''
    createEditor(noteEditor.value)
    editor.value.setMarkdown(currentMarkdown)
  })
})

/**
 * @Author: 黄原寅
 * @Desc: 取消
 */
const cancel = () => {
  dialogVisible.value = false
  bus.emit('endTextEdit')
}

/**
 * @Author: 黄原寅
 * @Desc:  确定
 */
const confirm = () => {
  note.value = editor.value.getMarkdown()
  activeNodes.value.forEach(node => {
    node.setNote(note.value)
  })
  cancel()
}
</script>

<script>
export default {
  name: 'NodeNote'
}
</script>

<style lang="less" scoped>
.nodeNoteDialog {
  .tip {
    margin-top: 5px;
    color: #dcdfe6;
  }
}
</style>
