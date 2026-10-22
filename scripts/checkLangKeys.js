/**
 * بررسی یکسان بودن کلیدهای ترجمه بین زبان‌ها
 * اجرا: node scripts/checkLangKeys.js
 */
const fs = require('fs')
const path = require('path')

const srcDir = path.resolve(__dirname, '../src')
const langDir = path.join(srcDir, 'lang')

const collectFiles = (dir, extensions) => {
  const files = []
  fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...collectFiles(fullPath, extensions))
    } else if (extensions.some(ext => entry.name.endsWith(ext))) {
      files.push(fullPath)
    }
  })
  return files
}

const collectUsedKeys = () => {
  const usedKeys = new Set()
  // فقط فراخوانی های ترجمه یعنی t('key') و $t('key') شمرده می شوند
  const pattern = /(?<![\w$])\$?t\(\s*['"]([a-zA-Z0-9_.]+)['"]/g
  collectFiles(srcDir, ['.vue', '.js']).forEach(file => {
    const content = fs.readFileSync(file, 'utf8')
    let match
    while ((match = pattern.exec(content))) {
      usedKeys.add(match[1])
    }
  })
  return usedKeys
}

const flattenKeys = (object, prefix = '') => {
  const keys = new Set()
  Object.keys(object).forEach(key => {
    const fullKey = prefix ? `${prefix}.${key}` : key
    if (object[key] && typeof object[key] === 'object') {
      flattenKeys(object[key], fullKey).forEach(subKey => keys.add(subKey))
    } else {
      keys.add(fullKey)
    }
  })
  return keys
}

const loadLang = fileName => {
  const content = fs.readFileSync(path.join(langDir, fileName), 'utf8')
  const module = { exports: {} }
  new Function('module', 'exports', content.replace('export default', 'module.exports ='))(module, module.exports)
  return module.exports
}

const usedKeys = collectUsedKeys()
const langs = {
  fa: loadLang('fa_ir.js'),
  zh: loadLang('zh_cn.js'),
  en: loadLang('en_us.js')
}

let hasError = false
Object.keys(langs).forEach(langName => {
  const langKeys = flattenKeys(langs[langName])
  const missing = [...usedKeys].filter(key => !langKeys.has(key))
  if (missing.length > 0) {
    hasError = true
    console.log(`[${langName}] کلیدهای استفاده‌شده اما موجود نبودن:\n  ${missing.join('\n  ')}`)
  } else {
    console.log(`[${langName}] همه کلیدهای استفاده‌شده موجود هستند (${usedKeys.size} کلید)`)
  }
})

Object.keys(langs).forEach(langName => {
  const langKeys = flattenKeys(langs[langName])
  const unused = [...langKeys].filter(key => !usedKeys.has(key))
  if (unused.length > 0) {
    console.log(`[${langName}] کلیدهای تعریف‌شده اما استفاده‌نشده: ${unused.join(', ')}`)
  }
})

process.exit(hasError ? 1 : 0)
