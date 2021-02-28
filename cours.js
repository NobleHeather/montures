// NB : changer build system quand on passe de JS à scss
// enregistrement -> run code et affiche result dans console

let variableTest = 'je suis une variable'; //déclarer variable
console.log(variableTest); //afficher variable

let ichi = 'je suis un test';
console.log (ichi);

console.log(typeof variable2); //afficher type de variable

console.log(variableTest + " fatiguée"); //concaténation
console.log(`${ichi} de concaténation compliqué`); //autre maniètre de concaténer

let tab = [ichi, variableTest, "ni - yes I have zero imagination"]; //déclarer tableau
console.log(tab); //afficher tableau

let ni = "ni";
let san = "san";
let yon = "yon";
let inception = [ichi, [ni, san], yon]; //tableau dans tableau
console.log(inception);

console.log(tab.length); //afficher longueur du tableau
console.log(inception.length);

console.log(tab[1]); // NB : tableau commence a index 0
console.log(inception[1][0]); //récup case 1 de tableau en case 2

let ninja = { //déclarer objet
	prenom: 'Sarada',
	nom: 'Uchiha',
	adresse : {
		pays: 'Hi no Kuni',
		ville: 'Konoha'
	}
}; //ne pas oublier ; à la fin

console.log(ninja.prenom); //réupérer info (dont on connait le nom)
console.log(ninja['adresse']); //récupérer info (dynamique)

console.log(ninja.adresse.ville); //récupérer objet dans objet
console.log(ninja['adresse']['ville']);//récupérer info (2e version)

let a = 5;
let b = 2;
console.log(a % b); //calculer reste de division a / b

a++; //a + 1
console.log(a);

b += 1; //b + 1 NB : privilégier cette écriture
console.log(b);

a--;
b -= 1;
console.log(a, b);

//== tester égalité 
// === tester égalité + type
 // != tester différence
 // !== tester différence + type
 // <=
 // >=
if (a == b) { 

}
else if (a === b) {
	
}
else {

}

//interaction avec utilisateur
// prompt(message?: DOMString, default?: DOMString)
					// let age = prompt('Saisir votre nom');

					// if (age < 18) {
					// 	alert('mineur');
					// } else if (age >= 18) {
					// 	alert('majeur');
					// } else {
					// 	alert('l\'âge on a dit');
					// }


//switch

const bouton = document.getElementById("bouton");
bouton.addEventListener("click", function() {
	bouton.style.color = "#FFF";
	bouton.style.background = "purple";

function remplacer_virgule_par_point(decimal) {
	return parseFloat((decimal+"").replace(",","."));
}

	let km = remplacer_virgule_par_point(prompt('Indiquez la distance que vous voulez parcourir : ?? kilomètres'));

	const prix = {
		licorne: 3,
		dragon: 5,
		canard_supersonique: 10
	};


	if (km > 50) {
		alert('Vous allez trop loin ! Prenez le train, merci.');
	} else if (km <= 50 && km >= 2) {
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
		default:
			alert('Merci de renseigner un numéro de monture valide (vous ne pouvez pas compter jusqu\'à 3 ?)');
		}
	} else if (km < 2 && km != 0 && km != null) {
		alert('Allez-y à pied, c\'est mieux pour votre santé (et en plus ça rime)');
	} else if (km == 0) {
		alert('Vous prenez racine ?');	
	} else if (km == null) {
		alert('Quoi ?! Dites-le carrément si vous avez un problème avec ma boutique !');
	} else {
		alert('merci de renseigner uniquement le chiffre (et de ne pas vous livrer sans raison à du vandalisme numérique)');
	}	
});

