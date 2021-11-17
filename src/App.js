//Data Obj
import data from "./data/data"

//Style
import './styles/App.css'

//Components
import Header from './components/Header'
import ProjectContainer from './containers/ProjectContainer'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header data={data.personal} />
      <ProjectContainer projects={data.projects} />
      <Footer data={data.personal} />
    </>
  )
}

export default App;
