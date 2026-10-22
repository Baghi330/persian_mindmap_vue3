import { createI18n } from 'vue-i18n/index'
import { watch } from 'vue'
import messages from './lang'
import { getLang } from '@/api'
import { applyDocumentDirection } from '@/utils/direction'

const i18n = createI18n({
  legacy: false,
  locale: getLang(),
  messages
})

// همگام‌سازی جهت چیدمان و زبان صفحه با زبان انتخابی کاربر
applyDocumentDirection(i18n.global.locale.value)
watch(
  () => i18n.global.locale.value,
  lang => {
    applyDocumentDirection(lang)
  }
)

export default i18n
