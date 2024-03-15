import './App.css'
import HeroSection from './assets/components/Hero'
import Navbar from './assets/components/Navbar'
function App() {
  return (
    <>
      <div className='container mx-auto'>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
      </div>
    </>
  )
}

export default App
