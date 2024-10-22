const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelector('.rating input')

allStar.forEach((item, idx)=> {
	item.addEventListener('click', function () {
		let click = 0
		ratingValue.value = idx + 1

		allStar.forEach(i=> {
			i.classList.replace('bxs-star', 'bx-star')
			i.classList.remove('active')
		})
		for(let i=0; i<allStar.length; i++) {
			if(i <= idx) {
				allStar[i].classList.replace('bx-star', 'bxs-star')
				allStar[i].classList.add('active')
			} else {
				allStar[i].style.setProperty('--i', click)
				click++
			}
		}
	})
})


document.getElementById("theme-toggle").addEventListener("click", function() {
    // Alterna a classe "dark-theme" no body
    document.body.classList.toggle("dark-theme");

    // Seleciona todos os elementos que devem ter a classe "dark-theme" adicionada/alternada
    const elements = document.querySelectorAll(
        '.navbar, body, .header-container, header, main, p, button, .button-description, .chat-container, .input-container, .messages, .message'
    );

    // Alterna a classe "dark-theme" em todos os elementos selecionados
    elements.forEach(element => {
        element.classList.toggle("dark-theme");
    });

    // Alterna o ícone entre sol e lua
    const themeIcon = document.getElementById("theme-icon");
    themeIcon.textContent = document.body.classList.contains("dark-theme") ? "🌜" : "🌞"; // Muda o ícone
});