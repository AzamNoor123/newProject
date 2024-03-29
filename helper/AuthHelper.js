import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { addDoc, collection, getFirestore, docRef } from "firebase/firestore";
import app from "../firebase/Index";
const db=getFirestore(app);
const auth=getAuth();

class AuthHelper {
     



    async CreateUser(email, passwd) {
       

        if (email == '' || passwd == '') { alert('Please Enter all above fields') }
        else {
            await createUserWithEmailAndPassword(auth, email, passwd)
                .then(() => {
                    // addUserData(Fname, Lname, email)
                        alert('User account created !');

                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        alert('That email address is already in use!');
                    }
                    if (error.code === 'auth/admin-restricted-operation') {
                        alert('Please Enter credentials');
                    }

                    if (error.code === 'auth/invalid-email') {
                        alert('That email address is invalid!');
                    }


                });

        }
    }

  async  signinUser(email, passwd) {
        if (email == '' || passwd == '') {
            alert("Fields can not be empty");

        }
        else {
         await   signInWithEmailAndPassword(auth, email, passwd).then(() => {
                alert('User  logged In Successfully');
                

            })
            .catch((error) => {
                alert(error.code);
            })
        }
    }

  async  resetUserPasswd(email) {
        if (email == '') {
            alert('Field cannot be empty');
        }
        else {
            const auth = getAuth();
          await  sendPasswordResetEmail(auth, email)
                .then(() => { alert('Password reset email sent on above email check inbox and spams also') })
                .catch((error) => {
                    alert(error.code)
                })
        }


    }
  async  addUserData(Fname, Lname, email){
        await addDoc(collection(db, "userData" ), {
            Fname: Fname,
            Lname: Lname,
            email: email
           
          });
          console.log("Document written with ID: ", docRef.id);

          
         



    }


}

export default new AuthHelper();