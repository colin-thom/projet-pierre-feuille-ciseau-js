pierre = document.querySelector("#pierre");
feuille = document.querySelector("#feuille");
ciseaux = document.querySelector("#ciseaux");
pointJoueur = document.querySelector("#pointsJoueur");
pointComputer = document.querySelector("#pointsComputer");
raz = document.querySelector("#raz");

function getComputerChoice() {
    const tab = ['pierre', 'feuille', 'ciseaux'];
    return tab[Math.floor(Math.random() * 3)]
}


let score =
 { 'joueur': 0,
  'computer': 0}
;
console.log(localStorage.getItem('score'))


if (localStorage.getItem('score') == ''){
  score.joueur = 0;
  score.computer = 0
} else if(localStorage.getItem('score') != 'null'){
  score = JSON.parse(localStorage.getItem('score')) 
}  else {
  score.joueur = 0;
  score.computer = 0
}
console.log(score)

pointJoueur.innerHTML = score.joueur;
pointComputer.innerHTML = score.computer;

raz.addEventListener("click", function(){
  localStorage.setItem("score", '');
  document.location.reload();
})


anime({
    targets: feuille,
    translateX: 500,
    translateY:350,
    delay : 0
  });

anime({
    targets: pierre,
    translateX: 0,
    translateY:350,
    delay : 100
  });

  anime({
    targets: ciseaux,
    translateX: -500,
    translateY: 350,
    delay : 200
  });

  pierre.addEventListener("mouseenter", function(){
    anime({
        targets: pierre,
        scale: 1.3,
      });
  })
  pierre.addEventListener("mouseleave", function(){
    anime({
        targets: pierre,
        scale: 1,
      });
  })

  feuille.addEventListener("mouseenter", function(){
    anime({
        targets: feuille,
        scale: 1.3,
      });
  })
  feuille.addEventListener("mouseleave", function(){
    anime({
        targets: feuille,
        scale: 1,
      });
  })

  ciseaux.addEventListener("mouseenter", function(){
    anime({
        targets: ciseaux,
        scale: 1.3,
      });
  })
  ciseaux.addEventListener("mouseleave", function(){
    anime({
        targets: ciseaux,
        scale: 1,
      });
  })

// click pierre ===================================================================================================================================================

pierre.addEventListener("click", function(){

// on fait disparaitre les autres choix et on décale l'élément choisit sur la gauche

    anime({
        targets: feuille,
        scale:0,
      });
    
      anime({
        targets: ciseaux,
        scale:0,
      });
      anime({
        targets: pierre,
        translateX:-300,
        delay:200,
        translateY: {
            value: 150,
            delay: 1800
        }
      });

// on prépare un petit texte "versus" qui va venir se placer entre les deux opposants

      let versus = document.createElement('h1');
        versus.setAttribute("id", "versus");
        versus.innerHTML = 'VERSUS'
        document.body.appendChild(versus);

      anime({
        targets: versus,
        translateX:-1180,
        delay:500,
        scale: {
            value:0,
            delay:1500
        }
      });

// on détermine le choix de l'adv grace a getcomputerchoice qu'on avait fait dans l'ancien exo
// et on fait a parraitre a droite de l'écran pour venir se rapprocher de notre icone

      let adv;
      const computerChoice = getComputerChoice();
      if(computerChoice == 'pierre'){
        let computerImage = document.createElement('img');
        computerImage.setAttribute("id", "computerPierre");
        computerImage.setAttribute("src", "https://www.flaticon.com/svg/vstatic/svg/2755/2755524.svg?token=exp=1614760414~hmac=679c123483b3e17c879134e7d97f35ea");
        computerImage.setAttribute("alt", "imagecomputer");
        document.body.appendChild(computerImage);
        adv = document.querySelector("#computerPierre");

        let resultat = document.createElement('h1');
        resultat.setAttribute("id", "resultat");
        resultat.innerHTML = "c'est une égalité !"
        document.body.appendChild(resultat);

      } else if(computerChoice == 'feuille'){
        let computerImage = document.createElement('img');
        computerImage.setAttribute("id", "computerFeuille");
        computerImage.setAttribute("src", "https://www.flaticon.com/svg/vstatic/svg/2165/2165693.svg?token=exp=1614760389~hmac=73c399b3abcb545cdd06c1b737fe90cd");
        computerImage.setAttribute("alt", "imagecomputer");
        document.body.appendChild(computerImage);
        adv = document.querySelector("#computerFeuille");

        let resultat = document.createElement('h1');
        resultat.setAttribute("id", "resultat");
        resultat.innerHTML = "c'est perdu !"
        document.body.appendChild(resultat);
        score.computer ++;
        pointComputer.innerHTML = score.computer;

      } else {
        let computerImage = document.createElement('img');
        computerImage.setAttribute("id", "computerciseaux");
        computerImage.setAttribute("src", "https://www.flaticon.com/svg/vstatic/svg/3179/3179247.svg?token=exp=1614760440~hmac=89eb5df4ea9d6d193868094a02b24849");
        computerImage.setAttribute("alt", "imagecomputer");
        document.body.appendChild(computerImage);
        adv = document.querySelector("#computerciseaux");

        let resultat = document.createElement('h1');
        resultat.setAttribute("id", "resultat");
        resultat.innerHTML = "c'est gagné !"
        document.body.appendChild(resultat);
        score.joueur ++;
        pointJoueur.innerHTML = score.joueur;
      }
      anime({
        targets: adv,
        translateX:-1000,
        delay:600,
        translateY:{
            value:-200,
            delay: 1800
        }
      });
      anime({
        targets: resultat,
        translateY:-1500,
        delay:2000,
      });

      let rejouer = document.createElement('button');
        rejouer.innerHTML = 'rejouer';
        rejouer.setAttribute("id", "rejouer")
        document.body.appendChild(rejouer);

        anime({
            targets: rejouer,
            translateY:-1300,
            delay:2500,
          });

        rejouer.addEventListener("click", function(){
          localStorage.setItem("score", JSON.stringify(score))
            document.location.reload();
        })
  })

// clic papier ========================================================================================================================================================

feuille.addEventListener("click", function(){

    // on fait disparaitre les autres choix et on décale l'élément choisit sur la gauche
    
        anime({
            targets: feuille,
            delay:200,
            translateY: {
                value: 150,
                delay: 1800
            }
          });
        
          anime({
            targets: ciseaux,
            scale:0,
          });
          anime({
            targets: pierre,
            scale:0
          });
    
    // on prépare un petit texte "versus" qui va venir se placer entre les deux opposants
    
          let versus = document.createElement('h1');
            versus.setAttribute("id", "versus");
            versus.innerHTML = 'VERSUS'
            document.body.appendChild(versus);
    
          anime({
            targets: versus,
            translateX:-1180,
            delay:500,
            scale: {
                value:0,
                delay:1500
            }
          });
    
    // on détermine le choix de l'adv grace a getcomputerchoice qu'on avait fait dans l'ancien exo
    // et on fait a parraitre a droite de l'écran pour venir se rapprocher de notre icone
    
          let adv;
          const computerChoice = getComputerChoice();
          if(computerChoice == 'pierre'){
            let computerImage = document.createElement('img');
            computerImage.setAttribute("id", "computerPierre");
            computerImage.setAttribute("src", "https://www.flaticon.com/svg/vstatic/svg/2755/2755524.svg?token=exp=1614760414~hmac=679c123483b3e17c879134e7d97f35ea");
            computerImage.setAttribute("alt", "imagecomputer");
            document.body.appendChild(computerImage);
            adv = document.querySelector("#computerPierre");
    
            let resultat = document.createElement('h1');
            resultat.setAttribute("id", "resultat");
            resultat.innerHTML = "c'est gagné !"
            document.body.appendChild(resultat);
            score.joueur ++;
            pointJoueur.innerHTML = score.joueur;
    
          } else if(computerChoice == 'feuille'){
            let computerImage = document.createElement('img');
            computerImage.setAttribute("id", "computerFeuille");
            computerImage.setAttribute("src", "https://www.flaticon.com/svg/vstatic/svg/2165/2165693.svg?token=exp=1614760389~hmac=73c399b3abcb545cdd06c1b737fe90cd");
            computerImage.setAttribute("alt", "imagecomputer");
            document.body.appendChild(computerImage);
            adv = document.querySelector("#computerFeuille");
    
            let resultat = document.createElement('h1');
            resultat.setAttribute("id", "resultat");
            resultat.innerHTML = "c'est une égalité !"
            document.body.appendChild(resultat);
    
          } else {
            let computerImage = document.createElement('img');
            computerImage.setAttribute("id", "computerciseaux");
            computerImage.setAttribute("src", "https://www.flaticon.com/svg/vstatic/svg/3179/3179247.svg?token=exp=1614760440~hmac=89eb5df4ea9d6d193868094a02b24849");
            computerImage.setAttribute("alt", "imagecomputer");
            document.body.appendChild(computerImage);
            adv = document.querySelector("#computerciseaux");
    
            let resultat = document.createElement('h1');
            resultat.setAttribute("id", "resultat");
            resultat.innerHTML = "c'est perdu !"
            document.body.appendChild(resultat);
            score.computer ++;
            pointComputer.innerHTML = score.computer;
          }
          anime({
            targets: adv,
            translateX:-1000,
            delay:600,
            translateY:{
                value:-200,
                delay: 1800
            }
          });
          anime({
            targets: resultat,
            translateY:-1500,
            delay:2000,
          });
    
          let rejouer = document.createElement('button');
            rejouer.innerHTML = 'rejouer';
            rejouer.setAttribute("id", "rejouer")
            document.body.appendChild(rejouer);
    
            anime({
                targets: rejouer,
                translateY:-1300,
                delay:2500,
              });
    
            rejouer.addEventListener("click", function(){
              localStorage.setItem("score", JSON.stringify(score))
                document.location.reload();
            })
      })


// clic ciseaux ================================================================================================================================================================

ciseaux.addEventListener("click", function(){

    // on fait disparaitre les autres choix et on décale l'élément choisit sur la gauche
    
        anime({
            targets: feuille,
            scale:0,
          });
        
          anime({
            targets: ciseaux,
            translateX:-1100,
            delay:200,
            translateY: {
                value: 150,
                delay: 1800
            }
          });
          anime({
            targets: pierre,
            scale:0
          });
    
    // on prépare un petit texte "versus" qui va venir se placer entre les deux opposants
    
          let versus = document.createElement('h1');
            versus.setAttribute("id", "versus");
            versus.innerHTML = 'VERSUS'
            document.body.appendChild(versus);
    
          anime({
            targets: versus,
            translateX:-1180,
            delay:500,
            scale: {
                value:0,
                delay:1500
            }
          });
    
    // on détermine le choix de l'adv grace a getcomputerchoice qu'on avait fait dans l'ancien exo
    // et on fait a parraitre a droite de l'écran pour venir se rapprocher de notre icone
    
          let adv;
          const computerChoice = getComputerChoice();
          if(computerChoice == 'pierre'){
            let computerImage = document.createElement('img');
            computerImage.setAttribute("id", "computerPierre");
            computerImage.setAttribute("src", "https://www.flaticon.com/svg/vstatic/svg/2755/2755524.svg?token=exp=1614760414~hmac=679c123483b3e17c879134e7d97f35ea");
            computerImage.setAttribute("alt", "imagecomputer");
            document.body.appendChild(computerImage);
            adv = document.querySelector("#computerPierre");
    
            let resultat = document.createElement('h1');
            resultat.setAttribute("id", "resultat");
            resultat.innerHTML = "c'est perdu !"
            document.body.appendChild(resultat);
            score.computer ++;
            pointComputer.innerHTML = score.computer;
    
          } else if(computerChoice == 'feuille'){
            let computerImage = document.createElement('img');
            computerImage.setAttribute("id", "computerFeuille");
            computerImage.setAttribute("src", "https://www.flaticon.com/svg/vstatic/svg/2165/2165693.svg?token=exp=1614760389~hmac=73c399b3abcb545cdd06c1b737fe90cd");
            computerImage.setAttribute("alt", "imagecomputer");
            document.body.appendChild(computerImage);
            adv = document.querySelector("#computerFeuille");
    
            let resultat = document.createElement('h1');
            resultat.setAttribute("id", "resultat");
            resultat.innerHTML = "c'est gagné !"
            document.body.appendChild(resultat);
            score.joueur ++;
            pointJoueur.innerHTML = score.joueur;
    
          } else {
            let computerImage = document.createElement('img');
            computerImage.setAttribute("id", "computerciseaux");
            computerImage.setAttribute("src", "https://www.flaticon.com/svg/vstatic/svg/3179/3179247.svg?token=exp=1614760440~hmac=89eb5df4ea9d6d193868094a02b24849");
            computerImage.setAttribute("alt", "imagecomputer");
            document.body.appendChild(computerImage);
            adv = document.querySelector("#computerciseaux");
    
            let resultat = document.createElement('h1');
            resultat.setAttribute("id", "resultat");
            resultat.innerHTML = "c'est une égalité !"
            document.body.appendChild(resultat);
          }
          anime({
            targets: adv,
            translateX:-1000,
            delay:600,
            translateY:{
                value:-200,
                delay: 1800
            }
          });
          anime({
            targets: resultat,
            translateY:-1500,
            delay:2000,
          });
    
          let rejouer = document.createElement('button');
            rejouer.innerHTML = 'rejouer';
            rejouer.setAttribute("id", "rejouer")
            document.body.appendChild(rejouer);
    
            anime({
                targets: rejouer,
                translateY:-1300,
                delay:2500,
              });
    
            rejouer.addEventListener("click", function(){
              
                localStorage.setItem("score", JSON.stringify(score))

                document.location.reload();
            })
      })