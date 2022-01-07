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
5.return necessery methods and states from useFirebse.

----Step#4----

1.create an auth context
2.create context provider
3.set context provider context value
4.create useAuth custom hook
5.use Auth provider.

----Step#5----

1.create private route
2.set private route.

----Step#6----
1.after login redirect user to their desire destination

*/