// remplacer virgule par point
function remplacer_virgule_par_point(decimal) {
	return parseFloat((decimal+"").replace(",","."));
}

//Au click sur le bouton on change sa couleur et sa couleur de fond, puis on lance l'interaction 
const bouton = document.getElementById("bouton");
const paragraphe = document.getElementById("p");

bouton.addEventListener("click", function() {
	bouton.style.color = "#6D6D6D";
	bouton.style.background = "#BABABA";
	bouton.style.border = "2px solid #6D6D6D"
	bouton.style.cursor = "not-allowed";
	paragraphe.style.opacity = 1;

	// let km = remplacer_virgule_par_point(prompt('Indiquez la distance que vous voulez parcourir : ?? kilomètres'));
	let km = prompt('Indiquez la distance que vous voulez parcourir : ??? kilomètres');

	const prix = {
		licorne: 3,
		dragon: 5,
		canard_supersonique: 10
	};

	switch(km) {
		case null : {
			alert('Quoi ?! Dites-le carrément si vous avez un problème avec ma boutique !');
			break;
		}
		case ' ' : {
			alert('Plus fort, j\'ai rien entendu !');
			break;
		}
		default :
			km = remplacer_virgule_par_point(km);
			if (km > 50) {
				alert('Vous allez trop loin ! Prenez le train, merci.');
			} else if (km <= 50 && km >= 2 && km != 42) {
				let monture = prompt('Tapez le numéro de la monture choisie');
				switch(monture) {
				case '1' : {
					alert('Montant de votre voyage à dos de licorne : ' + prix.licorne * km + '€');
					break;
				}
				case '2' : {
					alert('Montant de votre voyage à dos de dragon : ' + prix.dragon * km + '€');
					break;
				}
				case '3' : {
					alert('Montant de votre voyage à dos de canard supersonique : ' + prix.canard_supersonique * km + '€');
					break;
				}
				case null : {
					alert('Dans certaines cultures c\'est très mal vu de changer d\'avis au milieu de la négociation. Juste pour info. J\'dis ça j\'dis rien.');
					break;
				}
				default : 
					alert('Merci de renseigner un numéro de monture valide (vous ne pouvez pas compter jusqu\'à 3 ?)');
				}
			} else if (km < 2 && km != 0 && km != null) {
				alert('Allez-y à pied, c\'est mieux pour votre santé (et en plus ça rime)');
			} else if (km == 0) {
				alert('Vous prenez racine ?');	
			} else if (km == 42) { 
				alert('La distance exacte jusqu\'à la réponse absolue !');
				alert('Vous débloquez la fonction : "transplaner" => votre voyage ne vous coûte rien !');
			} else {
				alert('Merci test de renseigner uniquement le chiffre (et de ne pas vous livrer sans raison à du vandalisme numérique)');
			}	
		}
});

