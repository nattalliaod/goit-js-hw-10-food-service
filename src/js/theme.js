import refs from './refs'
const { checkThemes } = refs

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme

checkThemes.addEventListener('change', checkThem)

function checkThem(e) {
  const themes = e.target.checked 
  if (themes) {
    document.querySelector('body').classList.remove(LIGHT)
    document.querySelector('body').classList.add(DARK)
    localStorage.setItem('Theme', DARK)
  } else {
    document.querySelector('body').classList.remove(DARK)
    document.querySelector('body').classList.add(LIGHT)
    localStorage.setItem('Theme', LIGHT) 
  }
}

function saveThemes() {
  let checkedBtn = localStorage.getItem('Theme')

if (!checkedBtn) {
  checkedBtn = LIGHT
  localStorage.setItem('theme', checkedBtn)
}
document.querySelector('body').classList.add(checkedBtn)
checkThemes.checked = checkedBtn === LIGHT ? false : true

}
saveThemes()