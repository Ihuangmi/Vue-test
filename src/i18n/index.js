import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getCookie } from '@/utils'

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

export default i18n