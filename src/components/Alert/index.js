import Vue from 'vue'
import AlertComponent from './Alert.vue'

var instance
var AlertConstructor = Vue.extend(AlertComponent)
let initInstance = () => {
  instance = new AlertConstructor({
    el: document.createElement('div')
  })
  document.body.appendChild(instance.$el)
}

AlertConstructor.prototype.closeAlert = () => {
  const el = instance.$el
  el.parentNode && el.parentNode.removeChild(el)

  instance.resolve()
}

var Alert = (options = {}) => {
  return new Promise((resolve, reject) => {
    initInstance()
    Object.assign(instance, options, { resolve, reject })
  })
}

export default Alert
