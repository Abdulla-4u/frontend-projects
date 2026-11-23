import Navbar from './components/Navbar/Navbar'
import Hero from './components/Sections/Hero'
import About from './components/Sections/About'
import Features from './components/Sections/Features'
import Story from './components/Sections/Story'
import Contact from './components/Sections/Contact'
import Footer from './components/Sections/Footer'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact/>
      <Footer />
    </main>
  )
}

export default App
