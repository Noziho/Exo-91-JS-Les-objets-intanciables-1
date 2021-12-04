const Personne = function (sonNom, sonPrenom, sonAge, sonSexe) {
    this.nom = sonNom;
    this.prenom = sonPrenom;
    this.age = sonAge;
    this.sexe = sonSexe;

    this.maPremiereMethode = function () {
        return "Ma personne s'apelle " + this.nom + " " + this.prenom + " elle à " + this.age + " ans" + " son sexe est: " + this.sexe;

    }

    this.setPersonne = function (modificationNom, modificationPrenom) {
        this.nom = modificationNom;
        this.prenom = modificationPrenom;
    }

}

let personne1 = new Personne("Decroix", "Noah", 18, "masculin");
let personne2 =  new Personne("JeSais", "pas", 42, "masculin");

document.getElementById("nom").innerHTML = personne1.nom;
document.getElementById("prenom").innerHTML = personne1.prenom;
document.getElementById("age").innerHTML = personne1.age;
document.getElementById("sexe").innerHTML = personne1.sexe;

document.getElementById("nom2").innerHTML = personne2.nom;
document.getElementById("prenom2").innerHTML = personne2.prenom;
document.getElementById("age2").innerHTML = personne2.age;
document.getElementById("sexe2").innerHTML = personne2.sexe;

document.getElementById("methode1").innerHTML = personne1.maPremiereMethode();

personne1.setPersonne("Delcroix", "Michel");

document.getElementById("methode2").innerHTML = personne1.maPremiereMethode();

