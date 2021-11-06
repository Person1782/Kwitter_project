const firebaseConfig = {
      apiKey: "AIzaSyBkLu0JcFzjZ8POQWw-fudTOcMrQNIfT6w",
      authDomain: "greetingsbot-cknv.firebaseapp.com",
      databaseURL: "https://greetingsbot-cknv-default-rtdb.firebaseio.com",
      projectId: "greetingsbot-cknv",
      storageBucket: "greetingsbot-cknv.appspot.com",
      messagingSenderId: "452532565553",
      appId: "1:452532565553:web:1e84ed7863387c29014710"
    };
    firebase.initializeApp(firebaseConfig)
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!"
function add_room(){

      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            pourpose:"adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name -" + Room_names )
      row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'  >#" +Room_names +"</div> <hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name)
      window.location = "kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html";
}