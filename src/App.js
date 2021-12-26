// Data Obj
import { Contact } from './lib/data/contacts';
import { Projects } from './lib/data/projects';

// Components
import Header from './components/Header';
import ProjectContainer from './containers/ProjectContainer';
import Footer from './components/Footer';

// Libraries & Frameworks
import React from 'react';

const App = () => {
  return (
    <>
      <Header data={Contact} />
      <ProjectContainer projects={Projects} />
      <Footer data={Contact} />
    </>
  );
};

export default App;
