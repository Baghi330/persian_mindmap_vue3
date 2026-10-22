// زبان‌هایی که چیدمان آن‌ها از راست به چپ است
export const RTL_LANGUAGES = ['fa', 'ar', 'he', 'ur', 'fa-IR']

/**
 * @Desc: دریافت جهت چیدمان بر اساس زبان
 */
export const getDirection = lang => {
  return RTL_LANGUAGES.includes(lang) ? 'rtl' : 'ltr'
}

/**
 * @Desc: اعمال جهت چیدمان و زبان روی تگ html
 */
export const applyDocumentDirection = lang => {
  const htmlElement = document.documentElement
  htmlElement.setAttribute('lang', lang)
  htmlElement.setAttribute('dir', getDirection(lang))
}
