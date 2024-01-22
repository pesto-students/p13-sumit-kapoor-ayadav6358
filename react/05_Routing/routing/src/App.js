import React from 'react';
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';
import Skills from './components/Skills';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
        {
          path: "/projects",
          element: <Projects />,
        },
        
        {
          path: "/projects/:id",
          element: <ProjectDetail />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/skills",
          element: <Skills />,
        }
      
  ]);

  return (
    <RouterProvider router={router} />
    // <Router>
    //   <Switch>
    //     <Route path="/" exact component={Home} />
    //     <Route path="/projects" exact component={Projects} />
    //     <Route path="/projects/:id" component={ProjectDetail} />
    //     <Route path="/contact" component={Contact} />
    //     <Route path="/skills" component={Skills} />
    //   </Switch>
    // </Router>
  );
};

export default App;
