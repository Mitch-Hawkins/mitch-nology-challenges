import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import AboutMePage from "./pages/AboutMePage/AboutMePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProjectsContextProvider from "./context/ProjectsContextProvider";
import ProjectPage from "./pages/ProjectPage/ProjectPage";

function App() {
  return (
    <ProjectsContextProvider>
      <BrowserRouter>
        {/* I might want components that are on every router, like nav */}
        <NavBar />
        {/* I might want components only to be displayed on a certain route */}
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about-me" element={<AboutMePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />{" "}
          {/* The Colon is important, it states that a parameter of the same name will be filled here */}
        </Routes>
        <footer>
          <p>This is the footer</p>
        </footer>
      </BrowserRouter>
    </ProjectsContextProvider>
  );
}

export default App;

// THINGS YOU CAN ADD:

// Error messages under each input of the form
// Layout component that wraps each page and uses children props

// <LAyout>
// <Header/>
// <ProjectsList/>
// </Layout>
