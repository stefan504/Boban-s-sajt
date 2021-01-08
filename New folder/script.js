
    window.onload=function(){
        toggleButton = document.querySelector('.toggle-button')
        const navbarLinks = document.querySelector('.nav-items')
        toggleButton.addEventListener('click', () => {
                navbarLinks.classList.toggle('active')
            })
            
      }