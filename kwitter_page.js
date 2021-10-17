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
      } });  }); }
getData();
