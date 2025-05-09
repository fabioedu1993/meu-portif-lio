export default function initMenuMobile(){
  const menuMobile = document.querySelector('[data-menu="menu-mobile"]');
  const menuHamburgue = document.querySelector('[data-menu="menu-hamburgue"]');
  const spans = document.querySelectorAll('.menu-hamburgue span');
  const html = document.documentElement;

  function handleSpan(){
    spans.forEach((span) => {
  
      if(span.hasAttribute('id')) {
        span.removeAttribute('id')
        span.classList.remove('removido')
        span.classList.add('ativo');
      }else{
        span.classList.remove('ativo');
        span.classList.add('removido');
        span.setAttribute('id','');
      }
    }
  )
  }

  function openMenu(){
    menuMobile.classList.toggle('ativo');
  }

  function handleRemove(event){
    if(event.target !== menuHamburgue){
        menuMobile.classList.remove('ativo')
        spans.forEach((span) => {

          span.classList.remove('ativo');
          span.classList.add('removido');
          span.setAttribute('id','');
        })
    }
  }
   
  const eventos = ['click','touchstart'];
  
  eventos.forEach((evento)=> {
    menuHamburgue.addEventListener(evento, handleSpan);
    menuHamburgue.addEventListener(evento, openMenu)
    html.addEventListener(evento, handleRemove);
  })

}