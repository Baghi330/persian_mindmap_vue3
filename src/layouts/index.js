import Render from 'simple-mind-map/src/core/render/Render'
import Drag from 'simple-mind-map/src/plugins/Drag'
import { layoutValueList } from 'simple-mind-map/src/constants/constant'
import MindMapRtlLayout from './MindMapRtl'

/**
 * 思维导图（从右向左生长）的布局标识
 */
export const LAYOUT_MIND_MAP_RTL = 'mindMapRtl'

/**
 * @Desc: 注册自定义布局到 simple-mind-map
 * 库内部没有提供注册自定义布局的接口，所以这里通过扩展布局列表和布局创建方法来实现
 */
export const registerLayouts = () => {
  // 布局列表中加入自定义布局，否则设置布局时会回退到默认布局
  if (!layoutValueList.includes(LAYOUT_MIND_MAP_RTL)) {
    layoutValueList.push(LAYOUT_MIND_MAP_RTL)
  }
  const originalSetLayout = Render.prototype.setLayout
  Render.prototype.setLayout = function () {
    originalSetLayout.call(this)
    if (this.mindMap.opt.layout === LAYOUT_MIND_MAP_RTL) {
      this.layout = new MindMapRtlLayout(this, LAYOUT_MIND_MAP_RTL)
    }
  }
  // 拖拽插件内部是按照布局名称判断拖拽行为，这里让自定义布局复用思维导图的拖拽逻辑
  const originalCheckOverlapNode = Drag.prototype.checkOverlapNode
  Drag.prototype.checkOverlapNode = function () {
    if (this.mindMap.opt.layout !== LAYOUT_MIND_MAP_RTL) {
      originalCheckOverlapNode.call(this)
      return
    }
    const currentLayout = this.mindMap.opt.layout
    this.mindMap.opt.layout = 'mindMap'
    originalCheckOverlapNode.call(this)
    this.mindMap.opt.layout = currentLayout
  }
}
