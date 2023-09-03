import './App.css'
import Header from "./components/Header"
import {Ingredients, Steps, RecipeName} from "./sections"

function App() {

  return (
    <main>
     <section>
      <Header/>
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
