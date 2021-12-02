//Data Obj
import { Contact, Projects, Posts } from "./data/data"

//Style
import './styles/App.css'

//Components
import Header from './components/Header'
import ProjectContainer from './containers/ProjectContainer'
//import PostContainer from './containers/PostContainer'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header data={Contact} />
      <ProjectContainer projects={Projects} />
      {/* <PostContainer posts={Posts} /> */}
      <Footer data={Contact} />
    </>
  )
}

export default App;
