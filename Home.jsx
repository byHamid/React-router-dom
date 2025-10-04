import React from 'react'
import { useSearchParams } from "react-router";
import { useNavigate } from 'react-router'
const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate()
    const handleCLICK= () =>{   
        navigate('/HemidPage')
    };
    const hhandleCLICK= () =>{   
        navigate('/Login')
    };
    const hhhandleCLICK= () =>{   
        navigate('/Signup')
    };
  return (
    <>
    <h1>Home</h1>
    <input id='1' type="text" placeholder='Search...' onChange={(e) => setSearchParams(e.target.value)}/>
    
    
    <br /><br />
    <button  onClick={handleCLICK}>Go to Hemid's house</button>
    <button  onClick={hhandleCLICK}>Login</button>
    <button  onClick={hhhandleCLICK}>SignUp</button>
    </>
  );
}
export default Home;