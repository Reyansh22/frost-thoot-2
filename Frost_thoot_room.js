var firebaseConfig = {
    apiKey: "AIzaSyAAyfVSCQw_LK-HbMIRttrAZdLX9S0vrQ4",
    authDomain: "FROSTTHOOT-d530a.firebaseapp.com",
    databaseURL: "https://kwittter-d530a-default-rtdb.firebaseio.com",
    projectId: "FROSTTHOOT-d530a",
    storageBucket: "FROSTTHOOT-d530a.appspot.com",
    messagingSenderId: "913127874181",
    appId: "1:913127874181:web:0e7b67e16e9856273bd3ec",
    measurementId: "G-HB4PQ74CPF"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome" + user_name;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

function addRoom() {
  add_room = document.getElementById("add_room").value;
  firebase.database().ref("/").child(add_room).update({ purpose : "adding user" });
}
