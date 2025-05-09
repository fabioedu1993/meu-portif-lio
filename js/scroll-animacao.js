export default function initAnimacaoScroll(){
  const sections = document.querySelectorAll('[data-anime="scroll"]');
 
  if (sections) {

    const windowMetade = window.innerHeight * 0.6;

    function animaScroll(){
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisiblo = (sectionTop - windowMetade) < 0;
        if(isSectionVisiblo){
          section.classList.add('ativo');
        } else {
          section.classList.remove('ativo')
        }
      })
    }

    window.addEventListener('scroll', animaScroll);
  }
}