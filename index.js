const message = "Merci de nous avoir envoyé un message. Je ne pourrais pas y répondre.";
  const contactForm= document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (event) {event.preventDefault();
    alert(message);
  });
  /*  Const creation */
  const blueBarrel = {
    "weight" : 250,
    "content" : "water"
  };
  
  const whiteBarrel = {
    "weight" : 100,
    "content" : "flour"
  };
  
  const brownBarrel = {
    "weight" : 300,
    "content" : "wiskey"
  };
  
  const redBarrel = {
    "weight" : 120,
    "content" : "grape juice"
  };
  
  console.log("Lets load this boat !" );
  
  const barrels = [blueBarrel, whiteBarrel, brownBarrel, redBarrel];
  
  for(let barrel of barrels){
  
    if(barrel.weight > 200) {
      console.log("The barrel of " + barrel.content + " weighs " + barrel.weight + "kg! Store it in the middle part of the ship!");
    }else{
      console.log("The barrel of " + barrel.content + " weighs " + barrel.weight + "kg ! Store it at the back part of the ship!");
    }
  }
  
  console.log("The boat is load!" );
  
  console.log("text/javascript")
      //Declare the team variable
      let team;
      //Assign a value to the team variable
      team = "The Argonauts";
      //Output the value
      console.log(team);
      //Output the type of variable, i.e. String
      console.log(typeof team);

      //Declare the membersCount variable in one line and then output it
      let membersCount = 50;
      //Output the value of the variable membersCount
      console.log(membersCount);
      //Change the value of the variable membersCount and output it again
      membersCount = 49;
      console.log(membersCount);
      //Output the type of variable, i.e. number
      console.log(typeof membersCount);
 