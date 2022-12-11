import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import SamplePage from "./pages/SamplePage";
import Login from "./pages/Login";
import EditSamplePage from "./pages/EditSamplePage";
import AddSamplePage from "./pages/AddSamplePage";
import AccessLevelPage from "./pages/AccessLevelPage";

function App() {
  return (
    <Routes>
      {/*  <Route path="/panel/sample" element={<SamplePage />} /> */}
      <Route path="/panel/sample" element={<SamplePage />} />
      <Route path="/panel/accesslevel" element={<AccessLevelPage />} />
      <Route path="/panel/sample/edit" element={<EditSamplePage />} />
      <Route path="/panel/sample/add" element={<AddSamplePage />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
