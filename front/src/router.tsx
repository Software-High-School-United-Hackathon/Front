import { Route, Routes, BrowserRouter } from "react-router-dom";
import AgeGroupPage from "./pages/start/AgeGroupPage";
import NamePage from "./pages/start/NamePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/name" element={<NamePage />} />
        <Route path="/age" element={<AgeGroupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
