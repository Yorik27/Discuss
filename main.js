const els = {
    accueilScreen: null,
    jeuScreen: null,
    boutonJouer: null,
    boutonNouveau: null,
    boutonRegles: null,
};
let cartes= [
    {
        rubrique: "Pour Ou Contre",
        question: "Les blagues<br/>de Toto",
        src: "sources/images/toto.jpg"
    },
    {
        rubrique: "Plaidoyer",
        question: "Le goulag : <br/> un art de vivre",
        src: "sources/images/goulag.jpeg"
    },
    {
        rubrique: "That is<br/>the Question",
        question: "Pourquoi, longtemps,<br/>me suis-je couché<br/>de bonne heure ?",
        src: "sources/images/proust.jpeg"
    },
    {
        rubrique: "Pour Ou Contre",
        question: "L'autruche",
        src: "sources/images/autruche.jpeg"
    },
    {
        rubrique: "Plaidoyer",
        question: "Réhabilitez Landru",
        src: "sources/images/landru.jpg"
    },
    {
        rubrique: "That is<br/>the Question",
        question: "Comment détendre un dictateur ?",
        src: "sources/images/hitler.jpeg"
    },
    {
        rubrique: "Pour Ou Contre",
        question: "Faut-il raser Vesoul ? ",
        src: "sources/images/vesoul.jpg"
    },
    {
        rubrique: "Plaidoyer",
        question: "De l'utilité<br/>de se faire greffer<br/>une trompe d'éléphant",
        src: "sources/images/trompe.jpg"
    },
        {
            rubrique: "That is<br/>the Question",
            question: "Qui a volé l'orange<br/>du marchand ?",
            src: "sources/images/orange.jpeg"
        },
    {
        rubrique: "Pour Ou Contre",
        question: "Les pieds<br/>palmés",
        src: "sources/images/pieds.jpg"
    },
    { rubrique: "Plaidoyer",
    question: "Les Thénardier :<br/>un couple mal aimé",
    src: "sources/images/Thenardier.jpg"
    },
    {
        rubrique: "That is<br/>the Question",
        question: "Les chats<br/>sont-ils complotistes ?",
        src: "sources/images/chat.jpeg"
    },
    { rubrique: "Pour Ou Contre",
    question: "Les prêtres<br/>gérontophiles",
    src: "sources/images/pretre.jpg"
},
{ rubrique: "Plaidoyer",
question: "Gloire<br/>au boudin noir",
src: "sources/images/boudin.jpg"
},
{
    rubrique: "That is<br/>the Question",
    question: "Pourquoi les gens<br/>qui s'aiment<br/>sont-ils toujours<br/>un peu les mêmes ?",
    src: "sources/images/couple.jpeg"
},
{ rubrique: "Pour Ou Contre",
question: "Le lundi au soleil",
src: "sources/images/soleil.jpg"
},
{
    rubrique: "That is<br/>the Question",
    question: "Pourquoi<br/>Jean-Jacques Goldman<br/>marche-t-il seul ?",
    src: "sources/images/goldman.jpeg"
},
{ rubrique: "Plaidoyer",
question: "Hannibal Lecter<br/>un défenseur du bon goût",
src: "sources/images/hannibal.jpg"
},
];


const init=()=>{
    console.log("Page loaded");
    console.log("nombre de cartes : " + cartes.length);
    els.accueilScreen = document.querySelector(".accueil-screen");
    els.jeuScreen = document.querySelector(".jeu-screen");
    boutonRegles = document.querySelector(".rules");
    boutonJouer = document.querySelector(".btn");
    boutonNouveau = document.querySelector(".btnNouveau");
    let rubrique= document.querySelector(".rubrique");
    let question= document.querySelector(".question");
    let illustration= document.querySelector(".illustration");
    
    
       
    let displayScreen = (screenName) => {
        els.accueilScreen.style.display = 'none';
        els.jeuScreen.style.display = 'none';
        
        const screen = els[screenName + 'Screen'];
        screen.style.display = 'flex';
    } 
    


    boutonJouer.addEventListener("click", ()=>{
            displayScreen('jeu');
        })  
function loadCard(cartes) {
    rubrique.innerHTML = cartes.rubrique;
    question.innerHTML = cartes.question;
    illustration.src = cartes.src;   
}

let i=0; 
loadCard(cartes[i]);

    boutonNouveau.addEventListener("click", ()=>{
        i++;

        if (i <= cartes.length) {
            rubrique.innerHTML = cartes[i].rubrique
            question.innerHTML = cartes[i].question
            illustration.src = cartes[i].src   
        } else {    
            displayScreen('accueil');
           };
        
    })  
} 
window.addEventListener('load', init);
