/**On déclare le constante Prompt qui permet a l'utilisateur de rentrer du texte */
const Prompt = require('prompt-sync')();

/**Les deux variables qui vont contenir la catégorie (poussins, cadets etc etc), et la catégorie du poids (moins de 30kg etc etc) */
let catégorie : string ="";
let catégoriePoids : string ="";

/**On laisse le choix a l'utilisateur de choisir sa langue entre fr et eng */
let langue = Prompt('Choissiez votre langue/choose your language fr/eng ');

/**Cette condition va permettre d'afficher le code dans la langue souhaitée donc ici en français */
if(langue === 'fr'){

/**Page d'accueil ou notre utilisateur va rentrer ses infos */
console.log("Bonjour, pour pouvoir vous inscrire au judo, nous devons savoir votre catégorie, nous allons avoir besoin de deux infos :")
let age :number = Number(Prompt("En Premier votre age "));
let sexe = Prompt("En deuxième votre sexe ");
let poids :number = Number(Prompt("Et maintenant votre poids "));

/**Permet de tester le sexe et d'afficher le bon code */
if(sexe === 'homme'){

    /**Les conditions if et else if vont vérifier l'âge grâce a la variable age pour affecter la bonne catégorie a
     la variable catégorie. Ensuite dans la condition correspondante, le code va vérifier la valeur 
     de la variable poids pour afficher la bonne catégorie de poids. Il suffit ensuite de faire un console.log et de concaténer toutes les informations 
     et de les afficher a l'utilisateur.
     */
if(age === 6){
    catégorie=('Poussinets');
    console.log("Votre catégorie est donc la catégorie des " + catégorie );
}
else if (age<6){
    console.log("vous êtes trop jeune pour vous inscrire au Judo, les inscriptions commencent a partir de 6ans");
}
else if (age === 7 || age === 8){
    catégorie=('mini-poussins');
    console.log("Votre catégorie est donc la catégorie des " + catégorie );
}
else if (age === 9 || age === 10){
    catégorie=('poussins');
    console.log("Votre catégorie est donc la catégorie des " + catégorie );
}
else if (age === 11 || age === 12){
    catégorie=('Benjamins');
    
    if(poids<30){
        catégoriePoids=('moins de 30kg');
    }
    else if (poids<34){
        catégoriePoids=('moins de 34kg');
    }
    else if (poids<38){
        catégoriePoids=('moins de 38kg');
    }
    else if (poids<42){
        catégoriePoids=('moins de 42kg');
    }
    else if (poids<46){
        catégoriePoids=('moins de 46kg');
    }
    else if (poids<50){
        catégoriePoids=('moins de 50kg');
    }
    else if (poids<55){
        catégoriePoids=('moins de 55kg');
    }
    else if (poids<60){
        catégoriePoids=('moins de 60kg');
    }
    else if (poids<66){
        catégoriePoids=('moins de 66kg');
    }
    else if (poids>66){
        catégoriePoids=('plus de 66kg');
    }
    console.log("Votre catégorie est donc la catégorie des " + catégorie + " et vous faites partie des " + catégoriePoids);
}

else if (age === 13 || age === 14){
    catégorie=('Minimes');
    
    if (poids<34){
        catégoriePoids=('moins de 34kg');
    }
    else if (poids<38){
        catégoriePoids=('moins de 38kg');
    }
    else if (poids<42){
        catégoriePoids=('moins de 42kg');
    }
    else if (poids<46){
        catégoriePoids=('moins de 46kg');
    }
    else if (poids<50){
        catégoriePoids=('moins de 50kg');
    }
    else if (poids<55){
        catégoriePoids=('moins de 55kg');
    }
    else if (poids<60){
        catégoriePoids=('moins de 60kg');
    }
    else if (poids<66){
        catégoriePoids=('moins de 66kg');
    }
    else if (poids<73){
        catégoriePoids=('moins de 73');
    }
    else if (poids>73){
        catégoriePoids=('plus de 73');
    }
    console.log("Votre catégorie est donc la catégorie des " + catégorie + " et vous faites partie des " + catégoriePoids);
}

else if (age === 15 || age === 16 || age === 17 ){
    catégorie=('Cadets');

    if (poids<46){
        catégoriePoids=('moins de 46kg');
    }
    else if (poids<50){
        catégoriePoids=('moins de 50kg');
    }
    else if (poids<55){
        catégoriePoids=('moins de 55kg');
    }
    else if (poids<60){
        catégoriePoids=('moins de 60kg');
    }
    else if (poids<66){
        catégoriePoids=('moins de 66kg');
    }
    else if (poids<73){
        catégoriePoids=('moins de 73kg');
    }
    else if (poids<81){
        catégoriePoids=('moins de 81kg');
    }
    else if (poids<90){
        catégoriePoids=('moins de 90kg');
    }
    else if (poids>90){
        catégoriePoids=('plus de 90kg');
    }
    console.log("Votre catégorie est donc la catégorie des " + catégorie + " et vous faites partie des " + catégoriePoids);
}

else if (age === 18 || age === 19 || age === 20 ){
    catégorie=('Juniors');

    if (poids<55){
        catégoriePoids=('moins de 55kg');
    }
    else if (poids<60){
        catégoriePoids=('moins de 60kg');
    }
    else if (poids<66){
        catégoriePoids=('moins de 66kg');
    }
    else if (poids<73){
        catégoriePoids=('moins de 73kg');
    }
    else if (poids<81){
        catégoriePoids=('moins de 81kg');
    }
    else if (poids<90){
        catégoriePoids=('moins de 90kg');
    }
    else if (poids<100){
        catégoriePoids=('moins de 100kg');
    }
    else if (poids>100){
        catégoriePoids=('plus de 100kg');
    }
    console.log("Votre catégorie est donc la catégorie des " + catégorie + " et vous faites partie des " + catégoriePoids);
}

else if (age > 21){
    catégorie=('Seniors');
        if (poids<60){
        catégoriePoids=('moins de 55kg');
    }
    else if (poids<66){
        catégoriePoids=('moins de 66kg');
    }
    else if (poids<73){
        catégoriePoids=('moins de 73kg');
    }
    else if (poids<81){
        catégoriePoids=('moins de 81kg');
    }
    else if (poids<90){
        catégoriePoids=('moins de 90kg');
    }
    else if (poids<100){
        catégoriePoids=('moins de 100kg');
    }
    else if (poids>100){
        catégoriePoids=('plus de 100kg');
    }
    console.log("Votre catégorie est donc la catégorie des " + catégorie + " et vous faites partie des " + catégoriePoids);
}
}
else if (sexe === 'femme'){
    if(age === 6){
        catégorie=('Poussinettes');
        console.log("Votre catégorie est donc la catégorie des " + catégorie);
    }
    else if(age<6){
        console.log("Vous êtes trop jeune pour vous inscrire au judo, les inscriptions commenecent a partir de 6ans.")
    }
    else if (age === 7 || age === 8){
        catégorie=('mini-poussinettes');
        console.log("Votre catégorie est donc la catégorie des " + catégorie);
    }
    else if (age === 9 || age === 10){
        catégorie=('poussins fille');
        console.log("Votre catégorie est donc la catégorie des " + catégorie);
    }
    else if (age === 11 || age === 12){
    catégorie=('Benjamines');

    if(poids<32){
        catégoriePoids=('moins de 32kg');
    }
    else if (poids<36){
        catégoriePoids=('moins de 36kg');
    }
    else if (poids<40){
        catégoriePoids=('moins de 40kg');
    }
    else if (poids<44){
        catégoriePoids=('moins de 44kg');
    }
    else if (poids<48){
        catégoriePoids=('moins de 48kg');
    }
    else if (poids<52){
        catégoriePoids=('moins de 52kg');
    }
    else if (poids<57){
        catégoriePoids=('moins de 57kg');
    }
    else if (poids<63){
        catégoriePoids=('moins de 63kg');
    }
    else if (poids>63){
        catégoriePoids=('plus de 63kg');
    }
    console.log("Votre catégorie est donc la catégorie des " + catégorie + " et vous faites partie des " + catégoriePoids);
}
else if (age === 13 || age === 14){
    catégorie=('Minimes');
    
    if (poids<36){
        catégoriePoids=('moins de 36kg');
    }
    else if (poids<40){
        catégoriePoids=('moins de 40kg');
    }
    else if (poids<44){
        catégoriePoids=('moins de 44kg');
    }
    else if (poids<48){
        catégoriePoids=('moins de 48kg');
    }
    else if (poids<52){
        catégoriePoids=('moins de 52kg');
    }
    else if (poids<57){
        catégoriePoids=('moins de 57kg');
    }
    else if (poids<63){
        catégoriePoids=('moins de 63kg');
    }
    else if (poids<70){
        catégoriePoids=('moins de 70kg');
    }
    else if (poids>70){
        catégoriePoids=('plus de 70kg');
    }
    console.log("Votre catégorie est donc la catégorie des " + catégorie + " et vous faites partie des " + catégoriePoids);
}
else if (age === 15 || age === 16 || age === 17 ){
    catégorie=('Cadettes');

    if (poids<40){
        catégoriePoids=('moins de 40kg');
    }
    else if (poids<44){
        catégoriePoids=('moins de 44kg');
    }
    else if (poids<48){
        catégoriePoids=('moins de 48kg');
    }
    else if (poids<52){
        catégoriePoids=('moins de 52kg');
    }
    else if (poids<57){
        catégoriePoids=('moins de 57kg');
    }
    else if (poids<63){
        catégoriePoids=('moins de 63kg');
    }
    else if (poids<70){
        catégoriePoids=('moins de 70kg');
    }
    else if (poids>70){
        catégoriePoids=('plus de 70kg');
    }
    console.log("Votre catégorie est donc la catégorie des " + catégorie + " et vous faites partie des " + catégoriePoids);
}
else if (age === 18 || age === 19 || age === 20 ){
    catégorie=('Juniors');

    if (poids<44){
        catégoriePoids=('moins de 44kg');
    }
    else if (poids<48){
        catégoriePoids=('moins de 48kg');
    }
    else if (poids<52){
        catégoriePoids=('moins de 52kg');
    }
    else if (poids<57){
        catégoriePoids=('moins de 57kg');
    }
    else if (poids<63){
        catégoriePoids=('moins de 63kg');
    }
    else if (poids<70){
        catégoriePoids=('moins de 70kg');
    }
    else if (poids<78){
        catégoriePoids=('moins de 78kg');
    }
    else if (poids>78){
        catégoriePoids=('plus de 78kg');
    }
    console.log("Votre catégorie est donc la catégorie des " + catégorie + " et vous faites partie des " + catégoriePoids);
}
else if (age > 21){
    catégorie=('Seniors');
        if (poids<48){
        catégoriePoids=('moins de 48kg');
    }
    else if (poids<52){
        catégoriePoids=('moins de 52kg');
    }
    else if (poids<57){
        catégoriePoids=('moins de 57kg');
    }
    else if (poids<63){
        catégoriePoids=('moins de 63kg');
    }
    else if (poids<70){
        catégoriePoids=('moins de 70kg');
    }
    else if (poids<78){
        catégoriePoids=('moins de 78kg');
    }
    else if (poids>78){
        catégoriePoids=('plus de 78kg');
    }
    console.log("Votre catégorie est donc la catégorie des " + catégorie + " et vous faites partie des " + catégoriePoids);
}
}
}
/**Si l'utilisateur a choisi eng, alors le code sera affiché en Anglais, le code utilisé est le même que le code français, la seule différence est le texte
  affiché qui est en anglais.
 */
else if (langue === 'eng') {
    console.log("Hello, if you want to practive Judo, we need some infos :")
let age :number = Number(Prompt("First your age "));
let sexe = Prompt("Then your sex ");
let poids :number = Number(Prompt("And finally your weight "));

if(sexe === 'man'){

    if(age === 6){
        catégorie=('baby chicken');
        console.log("Your category will be the " + catégorie);
    }
    else if(age<6){
        console.log("Hold on a second, you are too yound to do Judo, you need to be atleast 6 years old to do it");
    }
    else if (age === 7 || age === 8){
        catégorie=('little chicken');
        console.log("Your category will be the " + catégorie);
    }
    else if (age === 9 || age === 10){
        catégorie=('chicken');
        console.log("Your category will be the " + catégorie);
    }
    else if (age === 11 || age === 12){
        catégorie=('Young one');
        
        if(poids<30){
            catégoriePoids=('under 30kg');
        }
        else if (poids<34){
            catégoriePoids=('under 34kg');
        }
        else if (poids<38){
            catégoriePoids=('under 38kg');
        }
        else if (poids<42){
            catégoriePoids=('under 42kg');
        }
        else if (poids<46){
            catégoriePoids=('under 46kg');
        }
        else if (poids<50){
            catégoriePoids=('under 50kg');
        }
        else if (poids<55){
            catégoriePoids=('under 55kg');
        }
        else if (poids<60){
            catégoriePoids=('under 60kg');
        }
        else if (poids<66){
            catégoriePoids=('under 66kg');
        }
        else if (poids>66){
            catégoriePoids=('above 66kg');
        }
        console.log("Your category will be the " + catégorie + " and for your weight, the category is " + catégoriePoids);
    }
    else if (age === 13 || age === 14){
        catégorie=('Little one');
        
        if (poids<34){
            catégoriePoids=('under 34kg');
        }
        else if (poids<38){
            catégoriePoids=('under 38kg');
        }
        else if (poids<42){
            catégoriePoids=('under 42kg');
        }
        else if (poids<46){
            catégoriePoids=('under 46kg');
        }
        else if (poids<50){
            catégoriePoids=('under 50kg');
        }
        else if (poids<55){
            catégoriePoids=('under 55kg');
        }
        else if (poids<60){
            catégoriePoids=('under 60kg');
        }
        else if (poids<66){
            catégoriePoids=('under 66kg');
        }
        else if (poids<73){
            catégoriePoids=('under 73kg');
        }
        else if (poids>73){
            catégoriePoids=('above 73kg');
        }
        console.log("Your category will be the " + catégorie + " and for your weight, the category is " + catégoriePoids);
    }
    else if (age === 15 || age === 16 || age === 17 ){
        catégorie=('Youthful');
    
        if (poids<46){
            catégoriePoids=('under 46kg');
        }
        else if (poids<50){
            catégoriePoids=('under 50kg');
        }
        else if (poids<55){
            catégoriePoids=('under 55kg');
        }
        else if (poids<60){
            catégoriePoids=('under 60kg');
        }
        else if (poids<66){
            catégoriePoids=('under 66kg');
        }
        else if (poids<73){
            catégoriePoids=('under 73kg');
        }
        else if (poids<81){
            catégoriePoids=('under 81kg');
        }
        else if (poids<90){
            catégoriePoids=('under 90kg');
        }
        else if (poids>90){
            catégoriePoids=('above 90kg');
        }
        console.log("Your category will be the " + catégorie + " and for your weight, the category is " + catégoriePoids);
    }
    else if (age === 18 || age === 19 || age === 20 ){
        catégorie=('Juniors');
    
        if (poids<55){
            catégoriePoids=('under 55kg');
        }
        else if (poids<60){
            catégoriePoids=('under 60kg');
        }
        else if (poids<66){
            catégoriePoids=('under 66kg');
        }
        else if (poids<73){
            catégoriePoids=('under 73kg');
        }
        else if (poids<81){
            catégoriePoids=('under 81kg');
        }
        else if (poids<90){
            catégoriePoids=('under 90kg');
        }
        else if (poids<100){
            catégoriePoids=('under 100kg');
        }
        else if (poids>100){
            catégoriePoids=('above 100kg');
        }
        console.log("Your category will be the " + catégorie + " and for your weight, the category is " + catégoriePoids);
    }
    else if (age > 21){
        catégorie=('Seniors');
            if (poids<60){
            catégoriePoids=('under 55kg');
        }
        else if (poids<66){
            catégoriePoids=('under 66kg');
        }
        else if (poids<73){
            catégoriePoids=('under 73kg');
        }
        else if (poids<81){
            catégoriePoids=('under 81kg');
        }
        else if (poids<90){
            catégoriePoids=('under 90kg');
        }
        else if (poids<100){
            catégoriePoids=('under 100kg');
        }
        else if (poids>100){
            catégoriePoids=('above 100kg');
        }
        console.log("Your category will be the " + catégorie + " and for your weight, the category is " + catégoriePoids);
    }
}
else if (sexe === 'woman'){
        if(age === 6){
            catégorie=('Baby Chicken');
            console.log("Your category will be the " + catégorie);
        }
        else if (age<6){
            console.log("Hold on a second, you are too yound to do Judo, you need to be atleast 6 years old to do it");
        }
        else if (age === 7 || age === 8){
            catégorie=('Little Chicken');
            console.log("Your category will be the " + catégorie);
        }
        else if (age === 9 || age === 10){
            catégorie=('chicken');
            console.log("Your category will be the " + catégorie);
        }
        else if (age === 11 || age === 12){
        catégorie=('young one');

        if(poids<32){
            catégoriePoids=('under 32kg');
        }
        else if (poids<36){
            catégoriePoids=('under 36kg');
        }
        else if (poids<40){
            catégoriePoids=('under 40kg');
        }
        else if (poids<44){
            catégoriePoids=('under 44kg');
        }
        else if (poids<48){
            catégoriePoids=('under 48kg');
        }
        else if (poids<52){
            catégoriePoids=('under 52kg');
        }
        else if (poids<57){
            catégoriePoids=('under 57kg');
        }
        else if (poids<63){
            catégoriePoids=('under 63kg');
        }
        else if (poids>63){
            catégoriePoids=('under 63kg');
        }
        console.log("Your category will be the " + catégorie + " and for your weight, the category is " + catégoriePoids);
    }
    else if (age === 13 || age === 14){
        catégorie=('Little one');
        
        if (poids<36){
            catégoriePoids=('under 36kg');
        }
        else if (poids<40){
            catégoriePoids=('under 40kg');
        }
        else if (poids<44){
            catégoriePoids=('under 44kg');
        }
        else if (poids<48){
            catégoriePoids=('under 48kg');
        }
        else if (poids<52){
            catégoriePoids=('under 52kg');
        }
        else if (poids<57){
            catégoriePoids=('under 57kg');
        }
        else if (poids<63){
            catégoriePoids=('under 63kg');
        }
        else if (poids<70){
            catégoriePoids=('under 70kg');
        }
        else if (poids>70){
            catégoriePoids=('above 70kg');
        }
        console.log("Your category will be the " + catégorie + " and for your weight, the category is " + catégoriePoids);
    }
    else if (age === 15 || age === 16 || age === 17 ){
        catégorie=('Youthful');
    
        if (poids<40){
            catégoriePoids=('under 40kg');
        }
        else if (poids<44){
            catégoriePoids=('under 44kg');
        }
        else if (poids<48){
            catégoriePoids=('under 48kg');
        }
        else if (poids<52){
            catégoriePoids=('under 52kg');
        }
        else if (poids<57){
            catégoriePoids=('under 57kg');
        }
        else if (poids<63){
            catégoriePoids=('under 63kg');
        }
        else if (poids<70){
            catégoriePoids=('under 70kg');
        }
        else if (poids>70){
            catégoriePoids=('above 70kg');
        }
        console.log("Your category will be the " + catégorie + " and for your weight, the category is " + catégoriePoids);
    }
    else if (age === 18 || age === 19 || age === 20 ){
        catégorie=('Juniors');
    
        if (poids<44){
            catégoriePoids=('under 44kg');
        }
        else if (poids<48){
            catégoriePoids=('under 48kg');
        }
        else if (poids<52){
            catégoriePoids=('under 52kg');
        }
        else if (poids<57){
            catégoriePoids=('under 57kg');
        }
        else if (poids<63){
            catégoriePoids=('under 63kg');
        }
        else if (poids<70){
            catégoriePoids=('under 70kg');
        }
        else if (poids<78){
            catégoriePoids=('under 78kg');
        }
        else if (poids>78){
            catégoriePoids=('above 78kg');
        }
        console.log("Your category will be the " + catégorie + " and for your weight, the category is " + catégoriePoids);
    }
    else if (age > 21){
        catégorie=('Seniors');
            if (poids<48){
            catégoriePoids=('under 48kg');
        }
        else if (poids<52){
            catégoriePoids=('under 52kg');
        }
        else if (poids<57){
            catégoriePoids=('under57kg');
        }
        else if (poids<63){
            catégoriePoids=('under 63kg');
        }
        else if (poids<70){
            catégoriePoids=('under 70kg');
        }
        else if (poids<78){
            catégoriePoids=('under 78kg');
        }
        else if (poids>78){
            catégoriePoids=('above 78kg');
        }
        console.log("Your category will be the " + catégorie + " and for your weight, the category is " + catégoriePoids);
    }
    
}

}