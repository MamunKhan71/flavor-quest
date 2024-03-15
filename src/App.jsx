import './App.css'
import HeroSection from './assets/components/Hero'
import Navbar from './assets/components/Navbar'
import Recipe from './assets/components/Recipe'
function App() {
  return (
    <>
      <div className='container mx-auto'>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <Recipe></Recipe>
      </div>
    </>
  )
}

export default App
