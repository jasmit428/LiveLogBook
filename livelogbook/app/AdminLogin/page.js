"use client"

import Header from "../components/header"
import { useState} from "react";
import Link from "next/link";
import { auth } from "../_utils/firebase"
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';



// handles admin logins
export default function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, loading, error] = useAuthState(auth);
    // login with email and password
    const login = () => {
        signInWithEmailAndPassword(auth, email, password).catch((err)=> {
            console.error("login error: ", err);
            alert("login failed: " + err.message)
        });
      };
    
      // handle the logout
    const logout = () => {
        signOut(auth);
      };
      
      
    return (
      <div>
      <Header />
      <div className="p-12 mx-auto mt-40 border-2 bg-blue-700 max-w-xl rounded-xl">
          <h1 className="text-white text-xl text-center font-bold">LOGIN</h1>
          
          
          {loading && <p className="text-white text-center mt-4">Initializing User...</p>}
          {error && <p className="text-red-500 text-center mt-4">Error: {error.message}</p>}
          {user ? (
            // if there's user it will show a button to the log reports page 
              <div className="text-white flex flex-col w-64 m-auto text-center mt-4">
                  <p>Welcome, {user.email}</p>
                  <button className="bg-white text-black px-6 py-2 rounded mt-4">
                    <Link href={"./LogReports"}>Log Reports</Link>
                  </button>
                  <button  // button to log Out
                      className="bg-white text-black px-6 py-2 rounded mt-4"
                      onClick={logout}
                  >
                      Logout
                  </button>
              </div>
          ) : (
              <>
                  <div className="flex justify-center mt-12 my-8">
                      <input // email input
                          className="text-black bg-white px-4 py-3 rounded w-80"
                          type="email"
                          placeholder="Type your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                      />
                  </div>

                  <div className="flex justify-center my-4">
                      <input // password input
                          className="text-black bg-white px-4 py-3 rounded w-80"
                          type="password"
                          placeholder="Type your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                      />
                  </div>

                  <div className="flex justify-center my-4">
                      <button // button to log in
                          className="bg-white text-black px-10 py-2 rounded"
                          onClick={login}
                      >
                          Login
                      </button>
                  </div>
              </>
          )}
      </div>
  </div> 
  
)
}