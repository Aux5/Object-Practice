const Sanger = {
politicalDistrict: 5,
issues:  
    {
        taxes: "None!",
        jobs: "100% more jobs!",
        infrastructure: "No more traffic!!",
        healthCare: "Free for everyone!!",
        crimeAndEnforement: "Crime rates will drop 100%!!",
    },

url: "http://WWW.VoteForSanger.com",
calendar: "6/24/18 - Free car wash",
volunteerInformation: [
    {
     name: "Enter your name",
     address: "Enter Your address",
     email: "Enter Your Email",
     phoneNumber: "Enter your phone number",
     availability: "When are you available?",
     activities: "What are you willing to do?",

    }
],
biography: "She was born, now she's runnning for office",
imageGallery: [
    {
        headshot: "(insert headshot",
        pictureOfFamily: "(insert picture of family)",
        pictureOfConstituents: "(insert picture of constituents",
    }
],
missionStatement: "VOTES",
urlForVoting: "Voter Registration in Tennessee | DMV.ORG",
}

function changeObject (objectPath, key, value){
    objectPath[key] = value;
}

changeObject(Sanger, Sanger.healthCare, Sanger.healthCare = "walrus")
console.log(Sanger.healthCare)

/*const art = document.createElement("article");
const text0 = document.createTextNode(Sanger.politicalDistrict);
const text1 = document.createTextNode(Sanger.issues.taxes);
const text2 = document.createTextNode(Sanger.issues.jobs);
const text3 = document.createTextNode(Sanger.issues.infrastructure);
const text4 = document.createTextNode(Sanger.issues.healthCare);
const text5 = document.createTextNode(Sanger.issues.crimeAndEnforement);
art.appendChild(text0);
art.appendChild(text1);
art.appendChild(text2);
art.appendChild(text3);
art.appendChild(text4);
art.appendChild(text5);
art.setAttribute("id",Sanger.politicalDistrict)*/

//document.body.appendChild(art);//
let psUlRef = document.createElement("Ul")

const platformStatements = Sanger.issues
for(ps in platformStatements){
    let liRef = document.createElement("li")
    liRef.textContent = `${ps}: ${platformStatements[ps]}`
    psUlRef.appendChild(liRef)
}
document.body.appendChild(psUlRef);