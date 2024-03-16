import './App.css'
import HeroSection from './assets/components/Hero'
import Navbar from './assets/components/Navbar'
import Recipes from './assets/components/Recipes'
function App() {
  return (
    <>
      <div className='max-w-[1320px]  mx-auto'>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <Recipes></Recipes>
      </div>
    </>
  )
}

export default App
