// 字体列表
export const fontFamilyList = [
  {
    name: 'Tahoma',
    value: 'Tahoma, Geneva, sans-serif'
  },
  {
    name: 'Vazirmatn',
    value: 'Vazirmatn, Tahoma, sans-serif'
  },
  {
    name: 'IRANSans',
    value: 'IRANSans, Tahoma, sans-serif'
  },
  {
    name: 'Samim',
    value: 'Samim, Tahoma, sans-serif'
  },
  {
    name: 'Yekan Bakh',
    value: 'Yekan Bakh, Tahoma, sans-serif'
  },
  {
    name: 'Noto Naskh Arabic',
    value: 'Noto Naskh Arabic, Tahoma, serif'
  },
  {
    name: 'Arial',
    value: 'arial, helvetica, sans-serif'
  },
  {
    name: 'Times New Roman',
    value: 'times new roman'
  },
  {
    name: 'Sans-Serif',
    value: 'sans-serif'
  },
  {
    name: 'serif',
    value: 'serif'
  }
]

// 边框样式
export const borderDasharrayList = [
  {
    name: 'خط ممتد',
    value: 'none'
  },
  {
    name: 'خط‌چین ۱',
    value: '5,5'
  },
  {
    name: 'خط‌چین ۲',
    value: '10,10'
  },
  {
    name: 'خط‌چین ۳',
    value: '20,10,5,5,5,10'
  },
  {
    name: 'خط‌چین ۴',
    value: '5, 5, 1, 5'
  },
  {
    name: 'خط‌چین ۵',
    value: '15, 10, 5, 10, 15'
  },
  {
    name: 'خط‌چین ۶',
    value: '1, 5'
  }
]

// 连线风格
export const lineStyleList = [
  {
    name: 'خط مستقیم',
    value: 'straight'
  },
  {
    name: 'خط منحنی',
    value: 'curve'
  },
  {
    name: 'اتصال مستقیم',
    value: 'direct'
  }
]

// 曲线风格中，根节点样式是否和其他节点保持一致
export const rootLineKeepSameInCurveList = [
  {
    name: 'پرانتز',
    value: false
  },
  {
    name: 'آکولاد',
    value: true
  }
]

// 图片重复方式
export const backgroundRepeatList = [
  {
    name: 'بدون تکرار',
    value: 'no-repeat'
  },
  {
    name: 'تکرار',
    value: 'repeat'
  },
  {
    name: 'تکرار افقی',
    value: 'repeat-x'
  },
  {
    name: 'تکرار عمودی',
    value: 'repeat-y'
  }
]

// 背景图片定位
export const backgroundPositionList = [
  {
    name: 'پیش‌فرض',
    value: '0% 0%'
  },
  {
    name: 'بالا چپ',
    value: 'left top'
  },
  {
    name: 'وسط چپ',
    value: 'left center'
  },
  {
    name: 'پایین چپ',
    value: 'left bottom'
  },
  {
    name: 'بالا راست',
    value: 'right top'
  },
  {
    name: 'وسط راست',
    value: 'right center'
  },
  {
    name: 'پایین راست',
    value: 'right bottom'
  },
  {
    name: 'بالا وسط',
    value: 'center top'
  },
  {
    name: 'وسط',
    value: 'center center'
  },
  {
    name: 'پایین وسط',
    value: 'center bottom'
  }
]

// 背景图片大小
export const backgroundSizeList = [
  {
    name: 'خودکار',
    value: 'auto'
  },
  {
    name: 'پوشش کامل',
    value: 'cover'
  },
  {
    name: 'حفظ نسبت',
    value: 'contain'
  }
]

// 快捷键列表
export const shortcutKeyList = [
  {
    type: 'عملیات گره',
    list: [
      {
        icon: 'icontianjiazijiedian',
        name: 'افزودن گره فرزند',
        value: 'Tab'
      },
      {
        icon: 'iconjiedian',
        name: 'افزودن گره هم‌سطح',
        value: 'Enter'
      },
      {
        icon: 'icondodeparent',
        name: 'افزودن گره والد',
        value: 'Shift + Tab'
      },
      {
        icon: 'iconshangyi',
        name: 'انتقال گره به بالا',
        value: 'Ctrl + ↑'
      },
      {
        icon: 'iconxiayi',
        name: 'انتقال گره به پایین',
        value: 'Ctrl + ↓'
      },
      {
        icon: 'icongaikuozonglan',
        name: 'افزودن خلاصه',
        value: 'Ctrl + G'
      },
      {
        icon: 'iconzhankai',
        name: 'باز/بسته کردن گره',
        value: '/'
      },
      {
        icon: 'iconshanchu',
        name: 'حذف گره',
        value: 'Delete | Backspace'
      },
      {
        icon: 'iconshanchu',
        name: 'حذف فقط گره فعلی',
        value: 'Shift + Backspace'
      },
      {
        icon: 'iconfuzhi',
        name: 'کپی گره',
        value: 'Ctrl + C'
      },
      {
        icon: 'iconjianqie',
        name: 'برش گره',
        value: 'Ctrl + X'
      },
      {
        icon: 'iconniantie',
        name: 'چسباندن گره',
        value: 'Ctrl + V'
      },
      {
        icon: 'iconbianji',
        name: 'ویرایش گره',
        value: 'F2'
      },
      {
        icon: 'iconhuanhang',
        name: 'شکستن خط متن',
        value: 'Shift + Enter'
      },
      {
        icon: 'iconhoutui-shi',
        name: 'واگرد',
        value: 'Ctrl + Z'
      },
      {
        icon: 'iconqianjin1',
        name: 'ازنو',
        value: 'Ctrl + Y'
      },
      {
        icon: 'iconquanxuan',
        name: 'انتخاب همه',
        value: 'Ctrl + A'
      },
      {
        icon: 'iconquanxuan',
        name: 'انتخاب چندتایی',
        value: 'کلید راست / Ctrl + کلید چپ'
      },
      {
        icon: 'iconzhengli',
        name: 'مرتب‌سازی خودکار چیدمان',
        value: 'Ctrl + L'
      },
      {
        icon: 'iconsousuo',
        name: 'جستجو و جایگزینی',
        value: 'Ctrl + F'
      }
    ]
  },
  {
    type: 'عملیات بوم',
    list: [
      {
        icon: 'iconfangda',
        name: 'بزرگ‌نمایی',
        value: 'Ctrl + +'
      },
      {
        icon: 'iconsuoxiao',
        name: 'کوچک‌نمایی',
        value: 'Ctrl + -'
      },
      {
        icon: 'iconfangda',
        name: 'بزرگ‌نمایی/کوچک‌نمایی',
        value: 'Ctrl + چرخ ماوس'
      },
      {
        icon: 'icondingwei',
        name: 'بازگشت به گره ریشه',
        value: 'Ctrl + Enter'
      },
      {
        icon: 'iconquanping1',
        name: 'اندازه مناسب بوم',
        value: 'Ctrl + i'
      }
    ]
  }
]

// 形状列表
export const shapeList = [
  {
    name: 'مستطیل',
    value: 'rectangle'
  },
  {
    name: 'لوزی',
    value: 'diamond'
  },
  {
    name: 'متوازی‌الاضلاع',
    value: 'parallelogram'
  },
  {
    name: 'مستطیل گردگوشه',
    value: 'roundedRectangle'
  },
  {
    name: 'مستطیل هشت‌ضلعی',
    value: 'octagonalRectangle'
  },
  {
    name: 'مستطیل مثلثی بیرونی',
    value: 'outerTriangularRectangle'
  },
  {
    name: 'مستطیل مثلثی داخلی',
    value: 'innerTriangularRectangle'
  },
  {
    name: 'بیضی',
    value: 'ellipse'
  },
  {
    name: 'دایره',
    value: 'circle'
  }
]

// 侧边栏列表
export const sidebarTriggerList = [
  {
    name: 'استایل گره',
    value: 'nodeStyle',
    icon: 'iconzhuti'
  },
  {
    name: 'استایل پایه',
    value: 'baseStyle',
    icon: 'iconyangshi'
  },
  {
    name: 'تم',
    value: 'theme',
    icon: 'iconjingzi'
  },
  {
    name: 'ساختار',
    value: 'structure',
    icon: 'iconjiegou'
  },
  {
    name: 'نمای درختی',
    value: 'outline',
    icon: 'iconfuhao-dagangshu'
  },
  {
    name: 'کلیدهای میان‌بر',
    value: 'shortcutKey',
    icon: 'iconjianpan'
  }
]

// 下载类型列表
export const downTypeList = [
  {
    name: 'فایل اختصاصی',
    type: 'smm',
    icon: 'iconwenjian',
    desc: 'قابلیت ورود دارد'
  },
  {
    name: 'JSON',
    type: 'json',
    icon: 'iconjson',
    desc: 'قالب رایج تبادل داده، قابلیت ورود دارد'
  },
  {
    name: 'تصویر',
    type: 'png',
    icon: 'iconPNG',
    desc: 'مناسب برای مشاهده و اشتراک‌گذاری'
  },
  {
    name: 'SVG',
    type: 'svg',
    icon: 'iconSVG',
    desc: 'گرافیک برداری با قابلیت بزرگ‌نمایی'
  },
  {
    name: 'PDF',
    type: 'pdf',
    icon: 'iconpdf',
    desc: 'مناسب برای چاپ'
  },
  {
    name: 'Markdown',
    type: 'md',
    icon: 'iconmarkdown',
    desc: 'قابل باز شدن در نرم‌افزارهای دیگر'
  },
  {
    name: 'XMind',
    type: 'xmind',
    icon: 'iconxmind',
    desc: 'قالب XMind'
  }
]
