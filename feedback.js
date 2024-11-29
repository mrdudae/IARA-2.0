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

//EmailJS

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#feedback-form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const serviceID = "service_afza78i";
            const templateID = "template_ti3q96g";
            const userID = "Pkq51nlEBKeeBWAv3";

            const rating = form.querySelector("input[name='rating']").value;
            const opinion = form.querySelector("textarea[name='opinion']").value;

            if (!rating || !opinion) {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            const templateParams = {
                rating: rating,
                opinion: opinion,
            };

            emailjs
                .send(serviceID, templateID, templateParams, userID)
                .then(
                    function (response) {
                        alert("Feedback enviado com sucesso!");
                        console.log("Sucesso:", response);
                    },
                    function (error) {
                        alert("Erro ao enviar feedback. Tente novamente.");
                        console.error("Erro:", error);
                    }
                );
        });
    } else {
        console.error("Formulário não encontrado.");
    }
});


document.getElementById('menu-icon').addEventListener('click', function() {
    var navButtons = document.getElementById('nav-buttons');
    navButtons.classList.toggle('active');
});
