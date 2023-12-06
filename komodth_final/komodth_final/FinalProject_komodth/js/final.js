function main() {
   
  fillHtmlList();
  
}  

main();
  //This function accesses the html list and fills it in with the
  //arrays below
function fillHtmlList() {
  let noun1 = document.getElementById("noun1"); 
  let noun2 = document.getElementById("noun2");  
  let nounPlural= document.getElementById("nounPlural");  
  let adjective1 = document.getElementById("adjective1");  
  let adjective2 = document.getElementById("adjective2");  
  let typeOfBird = document.getElementById("typeOfBird");  
  let bodyPart = document.getElementById("bodyPart");  
  let verb = document.getElementById("verb");  
  let verbPastTense = document.getElementById("verbPastTense");  
  let verbIng1 = document.getElementById("verbIng1");  
  let verbIng2 = document.getElementById("verbIng2");  
      
    
  let nounArr = ["sword", "squid", "skirt", "fjord", "potato", "laptop",
    "cell phone", "tuxedo", "rabbit", "tornado", "shoe", "keg", "jawbreaker",
    "bone", "crystal"];

  let adjArr = ["playful", "quiet", "spiteful", "hot", "jealous", "shady",
    "tipsy", "shy", "generous", "fluffy", "jarring", "gentle", "silly", "muscular",
    "annoying"];

  let birdArr = ["crow", "chicken",  "flamingo", "turkey", "parrot", "pigeon",
    "cockatiel", "Big Bird", "emu", "duck", "grouse", "eagle", "owl",
    "cardinal", "woodpecker"];

  let bodyArr = ["big toe", "elbow", "eyebrow", "eye", "butt", "IT band",
    "skin", "gut", "arm", "hair", "nose", "ear", "knee", "mole", "jaw"];

  let verbArr = ["skydive", "jump", "drool", "choke", "hug", "stab", 
    "whistle", "smile", "cook", "itch", "yawn", "promise", "imagine", "yell",
    "snort"];

  let verbPTArr = ["ran", "laughed", "burned", "dug", "eyed", "scattered",
    "talked", "escaped", "noticed", "chased", "knitted", "crept", "rang", 
    "swam", "massaged"];

  let verbIngArr = [ "shrugging", "screaming", "dreaming", "simping",
    "grabbing", "skidding", "driving", "eating", "Rick rolling", "flailing",
    "knocking", "careening", "cartwheeling", "tatooing", "mountain climbing"];

  noun1.innerHTML = fillArray(nounArr);
  noun2.innerHTML = fillArray(nounArr);
  nounPlural.innerHTML = fillArray(nounArr);
  adjective1.innerHTML = fillArray(adjArr);
  adjective2.innerHTML = fillArray(adjArr);
  typeOfBird.innerHTML = fillArray(birdArr);
  bodyPart.innerHTML = fillArray(bodyArr);
  verb.innerHTML = fillArray(verbArr);
  verbPastTense.innerHTML = fillArray(verbPTArr);
  verbIng1.innerHTML = fillArray(verbIngArr);
  verbIng2.innerHTML = fillArray(verbIngArr);
}

//This function loops through each array and writes in the rest of the 
//necessary information for html to display the innerHTML properly
function fillArray(arrayIn) {
  let htmlString = "";
  let index = 0; 
  
    for(index = 0; index < arrayIn.length; index++) {
      htmlString += "<option value=\""
      + arrayIn[index] + "\">"
      + arrayIn[index] + "</option>";
    }
  return htmlString;
}

//This function only runs after the Get MadLib button (in index.hmtl) is 
//pressed.  It prompts for several words, declares variables the get the 
//chosen value from our drop down arrays and plugs them into the MadLib
function variables() {
  let roomInHouse = prompt("You must enter a room in a house.");
  let liquid = prompt("Name a type of liquid");
  let relativeName = prompt("Type in a relative's name");

    while(roomInHouse == "") {
      roomInHouse = prompt("You must enter a room in a house.");
    }

    while(liquid == "") {
      liquid = prompt("You must enter a liquid.");
    }

    while(relativeName === "") {
      relativeName = prompt("You must enter a relative's name.");
    } 

  let nouns1= noun1.value;
  let nouns2 = noun2.value;
  let nouns3= nounPlural.value;
  let adj1 = adjective1.value;
  let adj2 = adjective2.value;
  let bird = typeOfBird.value;
  let bodyParts = bodyPart.value;
  let verbs = verb.value;
  let verbs2 = verbPastTense.value;
  let verbs3 = verbIng1.value;
  let verbs4 = verbIng2.value;

  document.write("It was a " + adj1 +
  ", cold November day.  I woke up to the "
  + adj2 + " smell of " + bird + " roasting in the "
  + roomInHouse + " downstairs.  I " + verbs2 +
  " down the stairs to see if I could help "
  + verbs + " the dinner.  My mom told me I should see if " + relativeName +
  " needed a fresh " + nouns1 + ". So I carried a tray of glasses full of "
  + liquid + " into the " +verbs3 +
   " room. When I got there, I could not believe my " + bodyParts +
   "s! There were " + nouns3 + "s " + verbs4 + " on the "
   + nouns2 + "!");
}

