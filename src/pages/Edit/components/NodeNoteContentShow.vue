<template>
  <div
    class="noteContentViewer"
    ref="noteContentViewer"
    :style="{
      left: this.left + 'px',
      top: this.top + 'px',
      visibility: show ? 'visible' : 'hidden'
    }"
    @click.stop
  >
    {{ content }}
  </div>
</template>

<script>
import bus from '@/utils/bus.js'
/**
 * @Author: 黄原寅
 * @Desc: 节点备注内容显示
 */
export default {
  name: 'NodeNoteContentShow',
  data() {
    return {
      // ویرایشگر متن غنی فعلاً کامنت شده است، در صورت نیاز دوباره فعال می‌شود
      // editor: null,
      content: '',
      show: false,
      left: 0,
      top: 0,
      node: null
    }
  },
  created() {
    bus.on('showNoteContent', this.onShowNoteContent)
    bus.on('hideNoteContent', this.hideNoteContent)
    document.body.addEventListener('click', this.hideNoteContent)
    bus.on('node_active', this.hideNoteContent)
    bus.on('scale', this.onScale)
    bus.on('svg_mousedown', this.hideNoteContent)
  },
  beforeDestroy() {
    bus.off('showNoteContent', this.onShowNoteContent)
    bus.off('hideNoteContent', this.hideNoteContent)
    document.body.removeEventListener('click', this.hideNoteContent)
    bus.off('node_active', this.hideNoteContent)
    bus.off('scale', this.onScale)
    bus.off('svg_mousedown', this.hideNoteContent)
  },
  methods: {
    /**
     * @Author: 黄原寅
     * @Desc: 显示备注浮层
     */
    onShowNoteContent([content, left, top, node]) {
      this.node = node
      this.content = content || ''
      this.updateNoteContentPosition(left, top)
      this.show = true
    },
    // 更新位置
    updateNoteContentPosition(left, top) {
      this.left = left
      this.top = top
    },
    // 画布缩放事件
    onScale() {
      if (!this.node || !this.show) return
      const { left, top } = this.node.getNoteContentPosition()
      this.updateNoteContentPosition(left, top)
    },
    /**
     * @Author: 黄原寅
     * @Desc: 隐藏备注浮层
     */
    hideNoteContent() {
      this.show = false
    }
  }
}
</script>

<style lang="less" scoped>
.noteContentViewer {
  position: fixed;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  max-height: 300px;
  max-width: 320px;
  overflow-y: auto;
  white-space: pre-wrap;
  word-break: break-word;
  line-height: 1.7;
  font-size: 13px;
  color: #303133;
  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
  &::-webkit-scrollbar-track {
    box-shadow: none;
    background: transparent;
    display: none;
  }
}
</style>
