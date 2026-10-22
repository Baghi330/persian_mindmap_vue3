/**
 * نمونه داده پیش‌فرض فارسی
 * ساختار این داده با داده نمونه کتابخانه simple-mind-map یکسان است
 */
const createFullData = () => {
  return {
    imageTitle: 'عنوان تصویر نمونه',
    imageSize: {
      width: 1000,
      height: 563
    },
    icon: ['priority_1'],
    tag: ['برچسب یک', 'برچسب دو'],
    hyperlink: 'https://github.com/',
    hyperlinkTitle: 'گیت‌هاب',
    note: 'یادداشت نمونه\nاین یک یادداشت آزمایشی است'
  }
}

const rootData = {
  data: {
    text: 'نقشه ذهنی فارسی'
  },
  children: [
    {
      data: {
        text: 'برنامه‌ریزی هفتگی',
        expand: true
      },
      children: [
        {
          data: {
            text: 'کار'
          },
          children: [
            {
              data: {
                text: 'کارهای روزانه',
                ...createFullData()
              },
              children: [
                {
                  data: {
                    text: 'جلسه تیم'
                  },
                  children: [
                    {
                      data: {
                        text: '09:00 تا 10:00'
                      },
                      children: []
                    }
                  ]
                },
                {
                  data: {
                    text: 'بررسی کدهای جدید'
                  },
                  children: [
                    {
                      data: {
                        text: '11:00 تا 12:30'
                      },
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              data: {
                text: 'گزارش هفتگی'
              },
              children: [
                {
                  data: {
                    text: 'جمعه‌ها ارسال می‌شود'
                  },
                  children: []
                }
              ]
            }
          ]
        },
        {
          data: {
            text: 'زندگی'
          },
          children: [
            {
              data: {
                text: 'سلامتی'
              },
              children: [
                {
                  data: {
                    text: 'ورزش صبحگاهی'
                  },
                  children: [
                    {
                      data: {
                        text: '07:00 تا 08:00'
                      },
                      children: []
                    }
                  ]
                },
                {
                  data: {
                    text: 'پیاده‌روی شبانه'
                  },
                  children: [
                    {
                      data: {
                        text: '20:00 تا 21:00'
                      },
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              data: {
                text: 'تغذیه'
              },
              children: [
                {
                  data: {
                    text: 'صبحانه'
                  },
                  children: [
                    {
                      data: {
                        text: '08:30'
                      },
                      children: []
                    }
                  ]
                },
                {
                  data: {
                    text: 'ناهار'
                  },
                  children: [
                    {
                      data: {
                        text: '13:00'
                      },
                      children: []
                    }
                  ]
                },
                {
                  data: {
                    text: 'شام'
                  },
                  children: [
                    {
                      data: {
                        text: '20:00'
                      },
                      children: []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          data: {
            text: 'یادگیری',
            generalization: {
              text: 'رشد فردی'
            }
          },
          children: [
            {
              data: {
                text: 'روزهای کاری'
              },
              children: [
                {
                  data: {
                    text: 'خواندن کتاب'
                  },
                  children: [
                    {
                      data: {
                        text: '21:00 تا 22:30'
                      },
                      children: []
                    }
                  ]
                },
                {
                  data: {
                    text: 'تمرین زبان'
                  },
                  children: [
                    {
                      data: {
                        text: '22:30 تا 23:00'
                      },
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              data: {
                text: 'روزهای تعطیل'
              },
              children: [
                {
                  data: {
                    text: 'مدیریت مالی'
                  },
                  children: [
                    {
                      data: {
                        text: '09:00 تا 10:30'
                      },
                      children: []
                    }
                  ]
                },
                {
                  data: {
                    text: 'مهارت‌های شغلی'
                  },
                  children: [
                    {
                      data: {
                        text: '14:00 تا 15:30'
                      },
                      children: []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          data: {
            text: 'تفریح و استراحت'
          },
          children: [
            {
              data: {
                text: 'فیلم دیدن'
              },
              children: [
                {
                  data: {
                    text: 'هفته‌ای یک تا دو فیلم'
                  },
                  children: []
                }
              ]
            },
            {
              data: {
                text: 'سفر کوتاه'
              },
              children: [
                {
                  data: {
                    text: 'آخر هر ماه'
                  },
                  children: []
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

export default {
  root: rootData,
  theme: {
    template: 'classic4',
    config: {}
  },
  layout: 'logicalStructure',
  config: {}
}
