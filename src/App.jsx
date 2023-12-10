import './App.css'
import './Components/Navigation/Navbar.css'
import './Components/Contactheader/Contactheader.css'
import Navbar from './Components/Navigation/Navbar'
import Contactheader from './Components/Contactheader/ContactHeader';
import Form from './Components/form/Form';

function App() {
  

  return (
    <>

    <Navbar />
    <main className='mainContainer'>
    <Contactheader/>
    <Form />
    </main>
    

    </>
  )
}

export default App;
