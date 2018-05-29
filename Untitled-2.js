const Sanger = {
politicalDistrict: 5,
issues: [ 
    {
        taxes: "None!",
        jobs: "100% more jobs!",
        infrastructure: "No more traffic!!",
        healthCare: "Free for everyone!!",
        crimeAndEnforement: "Crime rates will drop 100%!!",
    }
],
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
