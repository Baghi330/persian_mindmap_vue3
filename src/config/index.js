import {
  fontSizeList,
  lineHeightList,
  colorList,
  borderWidthList,
  borderRadiusList,
  lineWidthList,
  store,
  fontFamilyList as fontFamilyListZh,
  borderDasharrayList as borderDasharrayListZh,
  lineStyleList as lineStyleListZh,
  rootLineKeepSameInCurveList as rootLineKeepSameInCurveListZh,
  backgroundRepeatList as backgroundRepeatListZh,
  backgroundPositionList as backgroundPositionListZh,
  shortcutKeyList as shortcutKeyListZh,
  shapeList as shapeListZh,
  sidebarTriggerList as sidebarTriggerListZh,
  backgroundSizeList as backgroundSizeListZh,
  downTypeList as downTypeListZh,
  shapeListMap as shapeListMapZh,
  lineStyleMap as lineStyleMapZh
} from './zh'

import {
  fontFamilyList as fontFamilyListEn,
  borderDasharrayList as borderDasharrayListEn,
  lineStyleList as lineStyleListEn,
  rootLineKeepSameInCurveList as rootLineKeepSameInCurveListEn,
  backgroundRepeatList as backgroundRepeatListEn,
  backgroundPositionList as backgroundPositionListEn,
  shortcutKeyList as shortcutKeyListEn,
  shapeList as shapeListEn,
  sidebarTriggerList as sidebarTriggerListEn,
  backgroundSizeList as backgroundSizeListEn,
  downTypeList as downTypeListEn
} from './en'

import {
  fontFamilyList as fontFamilyListFa,
  borderDasharrayList as borderDasharrayListFa,
  lineStyleList as lineStyleListFa,
  rootLineKeepSameInCurveList as rootLineKeepSameInCurveListFa,
  backgroundRepeatList as backgroundRepeatListFa,
  backgroundPositionList as backgroundPositionListFa,
  shortcutKeyList as shortcutKeyListFa,
  shapeList as shapeListFa,
  sidebarTriggerList as sidebarTriggerListFa,
  backgroundSizeList as backgroundSizeListFa,
  downTypeList as downTypeListFa
} from './fa'

import { structureList as structureListZh } from './structureZh'
import { structureList as structureListEn } from './structureEn'
import { structureList as structureListFa } from './structureFa'

const fontFamilyList = {
  zh: fontFamilyListZh,
  en: fontFamilyListEn,
  fa: fontFamilyListFa
}
const borderDasharrayList = {
  zh: borderDasharrayListZh,
  en: borderDasharrayListEn,
  fa: borderDasharrayListFa
}
const lineStyleList = {
  zh: lineStyleListZh,
  en: lineStyleListEn,
  fa: lineStyleListFa
}
const lineStyleMap = {
  zh: lineStyleMapZh,
  en: lineStyleMapZh
}
const rootLineKeepSameInCurveList = {
  zh: rootLineKeepSameInCurveListZh,
  en: rootLineKeepSameInCurveListEn,
  fa: rootLineKeepSameInCurveListFa
}
const backgroundRepeatList = {
  zh: backgroundRepeatListZh,
  en: backgroundRepeatListEn,
  fa: backgroundRepeatListFa
}
const backgroundPositionList = {
  zh: backgroundPositionListZh,
  en: backgroundPositionListEn,
  fa: backgroundPositionListFa
}
const backgroundSizeList = {
  zh: backgroundSizeListZh,
  en: backgroundSizeListEn,
  fa: backgroundSizeListFa
}
const shortcutKeyList = {
  zh: shortcutKeyListZh,
  en: shortcutKeyListEn,
  fa: shortcutKeyListFa
}
const shapeList = {
  zh: shapeListZh,
  en: shapeListEn,
  fa: shapeListFa
}

const shapeListMap = {
  zh: shapeListMapZh,
  en: shapeListMapZh
}

const sidebarTriggerList = {
  zh: sidebarTriggerListZh,
  en: sidebarTriggerListEn,
  fa: sidebarTriggerListFa
}

const downTypeList = {
  zh: downTypeListZh,
  en: downTypeListEn,
  fa: downTypeListFa
}

// 布局结构列表
const structureList = {
  zh: structureListZh,
  en: structureListEn,
  fa: structureListFa
}

// 多语言列表
const langList = [
  {
    value: 'fa',
    name: 'فارسی'
  },
  {
    value: 'zh',
    name: '简体中文'
  },
  {
    value: 'en',
    name: 'English'
  }
]

export {
  fontSizeList,
  lineHeightList,
  borderWidthList,
  borderRadiusList,
  lineWidthList,
  store,
  colorList,
  langList,
  fontFamilyList,
  borderDasharrayList,
  lineStyleList,
  lineStyleMap,
  rootLineKeepSameInCurveList,
  backgroundRepeatList,
  backgroundPositionList,
  backgroundSizeList,
  shortcutKeyList,
  shapeList,
  shapeListMap,
  sidebarTriggerList,
  downTypeList,
  structureList
}
