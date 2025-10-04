import { useNavigate } from 'react-router'
    
const HemidPage = () => {
    const navigate = useNavigate()
    const hhandleCLICK= () =>{
        navigate('/')
    }
  return (
    <>
    <h1>Hemid Page</h1>
    <br />
    <button onClick={hhandleCLICK}>Go to back</button>
    </>
  ); 
}

export default HemidPage;