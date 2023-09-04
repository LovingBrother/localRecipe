import './App.css'
import Header from "./components/Header"
import JollofImage from './components/JollofImage'
import {Ingredients, Steps, RecipeName} from "./sections"

function App() {

  return (
    <main>
     <section>
      <Header/>
     </section>
     <section>
      <JollofImage/>
     </section>
     <section>
      <RecipeName/>
     </section>
     <section>
      <Ingredients/>
     </section>
     <section>
      <Steps/>
     </section>
    </main>
  )
}

export default App
