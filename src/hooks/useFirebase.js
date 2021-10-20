import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../component/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(true)


    const auth = getAuth();

    // Google Login System 
    const signInUsingGoogle = () => {

        const googleProvider = new GoogleAuthProvider();
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    const signUpWithEmailPassword = (e) => {
        e.preventDefault();
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // Signed in 
                setUser(result.user)

            })
            .catch(error => {

                setError(error.message)

            })
            .finally(() => setIsLoading(false))
    }
    const loginWithEmailPassword = (e) => {
        e.preventDefault();
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                // Signed in 
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }


    // Observe User State Change Here

    useEffect(() => {

        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });


    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        })
    }

    return {
        user,
        error,
        isLoading,
        setIsLoading,
        signInUsingGoogle,
        signUpWithEmailPassword,
        loginWithEmailPassword,
        setEmail,
        setPassword,
        logOut
    };
};

export default useFirebase;