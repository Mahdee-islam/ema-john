import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/* 
Steps for Authentication:
----Step#1----
1.firebase: create app
2.create web app
3.get configuration
4.initialize firebase
5.Enable Auth Method. 

----Step#2----

1.Create login component
2.Create Register component
3.Create Route for login and register.

----Step#3----

1.Setup signin method
2.Setup signout method
3.create useState
4.special observer

*/