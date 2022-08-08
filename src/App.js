import './App.css';
import fire from './firebaseConfig';
import { getAuth, signInWithEmailAndPassword,
   createUserWithEmailAndPassword } from "firebase/auth";



function App() {

  const auth = getAuth(fire);

  const SignUp = () => {
    const Email = document.getElementById("int1").value;
    const Password = document.getElementById("int2").value;
    if (Email==="" && Password===""){
      alert("Fill the Form");
      return;
    }
    createUserWithEmailAndPassword(auth, Email, Password)
      .then(() => {
        alert("SignedUp Successfully")
      })
      .catch((error) => {
        alert("Error in Signing up")
      });

  }
  const SignIn = () => {
    const Email = document.getElementById("int1").value;
    const Password = document.getElementById("int2").value;
    signInWithEmailAndPassword(auth, Email, Password)
      .then(() => {
        alert("Logged-in Successfully");

      })

      .catch(() => {
        alert("Wrong Email or Password");
      })
  }


  return (
    <>
      <div className="Form">
        <h2>Firebase-Authentication Form</h2>
        <p>*First click on signup to create an account</p>
        <label>User Name</label><br></br>
        <input id="int1" type="text"></input><br></br>
        <label>Password</label><br></br>
        <input id="int2" type="password"></input><br></br>
        <input id="submit" type="submit" value="Sign in" onClick={SignIn}></input>
        <input id="submit" type="submit" value="Sign up" onClick={SignUp}></input><br></br>
      </div>
    </>

  );
}

export default App;
