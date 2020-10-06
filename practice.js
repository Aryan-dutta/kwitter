var firebaseConfig = {
    apiKey: "AIzaSyAvle1YpREl7_ueZZQ5KnYp9t2060ZR_pI",
    authDomain: "classtest-f4f87.firebaseapp.com",
    databaseURL: "https://classtest-f4f87.firebaseio.com",
    projectId: "classtest-f4f87",
    storageBucket: "classtest-f4f87.appspot.com",
    messagingSenderId: "234075504876",
    appId: "1:234075504876:web:1e4e2f66991e80c475a5c9"
};

firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}