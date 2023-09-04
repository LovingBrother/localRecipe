import './App.css'
import Header from "./components/Header"
import JollofImage from './components/JollofImage'
import {Ingredients, Steps, RecipeName} from "./sections"

function App() {

  return (
    <main className="w-full m-auto flex flex-col gap-5">
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
