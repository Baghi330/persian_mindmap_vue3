<template>
  <el-dialog custom-class="nodeNoteDialog" v-model="dialogVisible" :title="$t('nodeNote.title')" width="520px">
    <el-input
      class="noteTextarea"
      type="textarea"
      :autosize="{ minRows: 6, maxRows: 14 }"
      :placeholder="$t('nodeNote.placeholder')"
      v-model="note"
    />
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
 * @Desc: 节点备注内容设置
 */
import { ref, onMounted, onBeforeMount } from 'vue'
import bus from '@/utils/bus.js'
// ویرایشگر متن غنی فعلاً کامنت شده است، در صورت نیاز دوباره فعال می‌شود
// import Editor from '@toast-ui/editor'
// import '@toast-ui/editor/dist/toastui-editor.css' // Editor's Style
// import { editorLangList } from '@/config/editorLang'

const dialogVisible = ref(false)
const note = ref('')
const activeNodes = ref([])

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
}

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
.noteTextarea {
  :deep(.el-textarea__inner) {
    font-family: var(--app-font-family);
    line-height: 1.8;
    padding: 12px 15px;
  }
}
</style>
