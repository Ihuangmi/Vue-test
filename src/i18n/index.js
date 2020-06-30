import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getCookie } from '@/utils'

import ElementLocale from 'element-ui/lib/locale'

Vue.use(VueI18n)

const messages = {
  en: require('./common/en'),
  zh: require('./common/zh')
}
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: getCookie('PLAY_LANG') || 'zh', // set locale
  messages, // set locale messages
})

ElementLocale.i18n((key, value) => i18n.t(key, value))
export default i18n