import MindMapLayout from 'simple-mind-map/src/layouts/MindMap'
import { CONSTANTS } from 'simple-mind-map/src/constants/constant'

/**
 * 布局：思维导图（从右向左生长）
 * 与思维导图布局的区别是所有节点统一向左生长，适合波斯语等从右到左的语言
 */
class MindMapRtlLayout extends MindMapLayout {
  /**
   * @Desc: 创建节点实例，根节点的方向设置为向左
   * 子节点会继承父节点的方向，因此所有节点都会向左生长
   */
  createNode(data, parent, isRoot, layerIndex) {
    const newNode = super.createNode(data, parent, isRoot, layerIndex)
    if (isRoot) {
      newNode.dir = CONSTANTS.LAYOUT_GROW_DIR.LEFT
    }
    return newNode
  }
}

export default MindMapRtlLayout
