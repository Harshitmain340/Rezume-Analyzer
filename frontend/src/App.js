import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import ResumeTemplates from "./pages/ResumeTemplates";
import ResumeMaker from "./pages/ResumeMaker";
import CVAnalyzer from "./pages/CVAnalyzer";
import CVTemplates from "./pages/CVTemplates";
import CVMaker from "./pages/CVMaker";
import CoverResume from "./pages/CoverResume";
import CoverCV from "./pages/CoverCV";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Resume Dropdown Pages */}
        <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
        <Route path="/resume-templates" element={<ResumeTemplates />} />
        <Route path="/resume-maker" element={<ResumeMaker />} />

        {/* CV Dropdown Pages */}
        <Route path="/cv-analyzer" element={<CVAnalyzer />} />
        <Route path="/cv-templates" element={<CVTemplates />} />
        <Route path="/cv-maker" element={<CVMaker />} />

        {/* Cover Letter Dropdown Pages */}
        <Route path="/cover-resume" element={<CoverResume />} />
        <Route path="/cover-cv" element={<CoverCV />} />

        {/* Settings */}
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
