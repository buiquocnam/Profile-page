const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const headerItems = $$('.header-item')
const mainSubs = $$('.main-item')


headerItems.forEach((headerItem, index) => {
      headerItem.onclick = () => {
            $('.header-item.active').classList.remove('active')
            $('.main-item.active').classList.remove('active')
            
            
            headerItem.classList.add('active')
            mainSubs[index].classList.add('active')
      }
});
