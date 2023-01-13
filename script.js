var liste = [
  {
    image: "images/1.png",
    titre: "React Native vs Flutter - I built the same chat app with both",
    userIcon: "usericons/1.png",
    userName: "Utilisateur-1",
    nombreVues: "25k",
    dateMiseEnLigne: "12/05/2022",
  },
  {
    image: "images/2.png",
    titre:
      "Vrai Christ, faux Christ Martin Garrix &amp; Kygo, The Chainsmokers Style",
    userIcon: "usericons/2.png",
    userName: "Utilisateur-2",
    nombreVues: "15k",
    dateMiseEnLigne: "15/04/2022",
  },
  {
    image: "images/3.png",
    titre:
      "Brille Brille Petite Étoile - Bébé Est Malade - Comptines pour Bébé",
    userIcon: "usericons/3.png",
    userName: "Utilisateur-3",
    nombreVues: "15k",
    dateMiseEnLigne: "15/04/2022",
  },
  {
    image: "images/4.png",
    titre:
      "Dua Lipa, Coldplay, Martin Garrix &amp; Kygo, The Chainsmokers Style",
    userIcon: "usericons/4.png",
    userName: "Utilisateur-4",
    nombreVues: "15k",
    dateMiseEnLigne: "15/04/2022",
  },
  {
    image: "images/5.png",
    titre: "Led Zeppelin - Kashmir (Live from Celebration Day)",
    userIcon: "usericons/5.png",
    userName: "Utilisateur-5",
    nombreVues: "15k",
    dateMiseEnLigne: "15/04/2022",
  },
  {
    image: "images/5.png",
    titre: "Led Zeppelin - Kashmir (Live from Celebration Day)",
    userIcon: "usericons/5.png",
    userName: "Utilisateur-5",
    nombreVues: "15k",
    dateMiseEnLigne: "15/04/2022",
  },
  {
    image: "images/4.png",
    titre:
      "Dua Lipa, Coldplay, Martin Garrix &amp; Kygo, The Chainsmokers Style",
    userIcon: "usericons/4.png",
    userName: "Utilisateur-4",
    nombreVues: "15k",
    dateMiseEnLigne: "15/04/2022",
  },
  {
    image: "images/5.png",
    titre: "Led Zeppelin - Kashmir (Live from Celebration Day)",
    userIcon: "usericons/5.png",
    userName: "Utilisateur-5",
    nombreVues: "15k",
    dateMiseEnLigne: "15/04/2022",
  },
  {
    image: "images/5.png",
    titre: "Led Zeppelin - Kashmir (Live from Celebration Day)",
    userIcon: "usericons/5.png",
    userName: "Utilisateur-5",
    nombreVues: "15k",
    dateMiseEnLigne: "15/04/2022",
  },
  {
    image: "images/1.png",
    titre: "React Native vs Flutter - I built the same chat app with both",
    userIcon: "usericons/1.png",
    userName: "Utilisateur-1",
    nombreVues: "25k",
    dateMiseEnLigne: "12/05/2022",
  },
];

for (let i = 0; i < liste.length; i++) {
  var video = liste[i];

  document.getElementById("main").innerHTML += `<div class="boxclass">
    <img src=${video.image} >
    <div class="cardHeader">
    <img src="${video.userIcon}">
    <h1>${video.titre.slice(0, 50)}</h1>
    
    </div>
    <p>${video.userName}</p>
    <span>${video.nombreVues} de vues. </span>
    <span>Posté le : ${video.dateMiseEnLigne}</span>
    </div > `;
}
