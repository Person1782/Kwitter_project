//YOUR FIREBASE LINKS
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
    user_name = localStorage.getItem("user_name")
    room_name = localStorage.getItem("room_name")
    function send(){
          msg = document.getElementById("msg").value
          firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
          })
          document.getElementById("msg").value = ""
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log("firebase_message_id")
      console.log(message_data)
      console.log("-----------------")

      name = message_data['name'];
      message = message_data['message']
      like = message_data['like']

      part_1 = "<h4>" +name+ "</h4> "

      part_2 = "<h4 class='message_h4'> " + message+ "</h4>"

      part_3 = "<button class='btn btn-primary' id=" + firebase_message_id +" value=" + like + " onclick='update_like(this_id)'>";
      
      part_4 = "<span class='glyphicon glyphicon-thumbs-up'>Like:" + like + "</span></button><hr>";

      row = part_1 + part_2 + part_3 + part_4;
      document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html";
}