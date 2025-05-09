export default function initTabNav(){
  const tabMenu = document.querySelectorAll('[data-tab="menu"] .icones');
  const tabContent = document.querySelectorAll('[data-tab="content"] .habilidades-texto');

if (tabMenu && tabContent){

    function activeTab(index){
      tabContent.forEach((conteudo) => {
        conteudo.classList.remove('ativo')
      });
      tabContent[index].classList.add('ativo');

      tabMenu.forEach((menu) => {
        menu.classList.remove('ativo')
      });
      tabMenu[index].classList.add('ativo');

    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () =>{
        activeTab(index);
      })
    })

  }
}