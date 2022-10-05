import { Route, Routes, BrowserRouter } from "react-router-dom";
import NamePage from "./pages/start/NamePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/name" element={<NamePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
