import Vue from 'vue'

import SpinnerComp from './spinner.vue'

const VALID_POSITION_VALS = ['absolute', 'relative', 'fixed']

const Spinner = Vue.extend(SpinnerComp)

const directive = {
  name: 'EjLoading',

  bind: (el, binding) => {
    el.instance = new Spinner({
      el: document.createElement('div'),
      data: {
        fullscreen: !!binding.modifiers.fullscreen,
      },
    })

    const {position} = window.getComputedStyle(el)

    if (!VALID_POSITION_VALS.includes(position)) {
      el.style.position = 'relative'
    }

    if (binding.value) {
      el.appendChild(el.instance.$el)
    }
  },

  update: (el, binding) => {
    if (binding.value) {
      if (el.instance.$el.parentNode === null) {
        el.appendChild(el.instance.$el)
      }
    } else {
      if (el === el.instance.$el.parentNode) {
        el.removeChild(el.instance.$el)
      }
    }
  },

  unbind: (el) => {
    el.instance.$destroy()
    if (el === el.instance.$el.parentNode) {
      el.removeChild(el.instance.$el)
    }
    el.instance = null
  },
}

export default directive
