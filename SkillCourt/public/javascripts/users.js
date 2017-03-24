var db;

function loadDB() {
    var temp = firebase.database().ref().once('value').then(function (snapshot) {
        db = snapshot.val();
        var user = firebase.auth().currentUser;
        loadUser(user);
        
    });
}



function logData() {
    console.log(db);
}


function loadUser(user) {
    console.log("loadUser: ");
    console.log(user);
    document.getElementById("name").innerHTML = user.displayName;
}   


function loadUsers(user) {
    console.log("loadUsers: ");
    console.log(user);
    var forms = document.getElementById('forms');

    var userInfoForm = document.createElement("form");

    var email = document.createElement("p");
    email.innerHTML = user.email;

    userInfoForm.appendChild(email);

    forms.appendChild(userInfoForm);
}


function logout() {
    firebase.auth().signOut().then(function () {
        console.log("User Successfully logged out");
        MyAccountRedirect();
    }).catch(function (error) {
        console.log(error);
    });


}


function MyAccountRedirect() {
    var user = firebase.auth().currentUser;
    console.log(user);
    if (user) {
        window.location.replace("/users");
    } else {
        window.location.replace("/signin");
    }
}
