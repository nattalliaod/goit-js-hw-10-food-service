import menu from '../menu.json'
import cardTemplate from '../templates/menutmpl.hbs'
import refs from './refs'
const { cardRef } = refs
// const cardRef = document.querySelector('.js-menu')
const markup = cardTemplate(menu)

cardRef.insertAdjacentHTML('beforeend', markup)

