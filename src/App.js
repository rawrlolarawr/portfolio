//Data Obj
import { Contact, Projects } from "./lib/data/data"

//Style
import './styles/App.css'

//Components
import Header from './components/Header'
import ProjectContainer from './containers/ProjectContainer'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header data={Contact} />
      <ProjectContainer projects={Projects} />
      <Footer data={Contact} />
    </>
  )
}

export default App;
