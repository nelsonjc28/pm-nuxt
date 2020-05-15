import  Vue from 'vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faFire} from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faCog} from '@fortawesome/free-solid-svg-icons'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import {faInfo} from '@fortawesome/free-solid-svg-icons'


library.add(faHome)
library.add(faFire)
library.add(faHeart)
library.add(faCog)
library.add(faPlay)
library.add(faInfo)

Vue.component('font-awesome-icon', FontAwesomeIcon)
