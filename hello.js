const form = document.querySelector("form");
const inputs = document.querySelectorAll('input');
const resultatText = document.querySelector('.resultat-text');
const resultatInfo = document.querySelector('.resultat-info');

form.addEventListener('submit', funcForm);

function funcForm(e){
   e.preventDefault();
   calculPoid();
}

function calculPoid(){
   const taille = Number(inputs[2].value);
   let sex = "";

   if (document.getElementById('SexH').checked) {
      sex = 'h';
   } else if (document.getElementById('SexF').checked) {
      sex = 'f';
   }

   if (!sex || !taille || taille <= 0) {
      resultatInfo.style.color = 'red';
      resultatInfo.innerText = "Erreur : vérifiez les champs (la taille doit être > 0)";
      resultatText.innerText = "";
   } 
   else if (sex === 'h') {
      const poids = taille - 100 - ((taille - 150) / 4);
      resultatText.innerText = `${poids.toFixed(1)} Kg`;
      resultatInfo.innerText = 'Est votre poids idéal';
      resultatInfo.style.color='green';
   } 
   else if (sex === 'f') {
      const poids = taille - 100 - ((taille - 150) / 2.5);
      resultatText.innerText = `${poids.toFixed(1)} Kg`;
      resultatInfo.innerText = 'Est votre poids idéal';
      resultatInfo.style.color='green';
   }
}

