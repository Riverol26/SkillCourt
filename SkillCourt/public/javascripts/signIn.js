var db;
var temp = firebase.database().ref().once('value').then(function (snapshot) {
    db = snapshot.val();
});
var user;
sessionStorage.loggedIn = false;


function logUserFacebook() {
    firebase.auth().signInWithPopup(provider).then(function (result) {
        var token = result.credential.accessToken;
        user = firebase.auth().currentUser;
        if (user) {
            console.log('login successful');
            window.location.replace("/users");
            
        } else {
            sessionStorage.loggedIn = false;
            console.log('login failed');
            logUserFacebook();
        }
    }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
    });
}



function writeData() {
    var UId = firebase.auth().currentUser.uid;
    var Uemail = firebase.auth().currentUser.email;
    var Uname = firebase.auth().currentUser.displayName;
    var rootRef = firebase.database().ref();
    var storesRef = rootRef.child('users');
    var newUser = storesRef.push();
    newUser.set({
        name: Uname,
        email: Uemail,
        id: UId
    });
}

function readData() {
    console.log(db);
}

