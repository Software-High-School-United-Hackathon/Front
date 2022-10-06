import { Route, Routes, BrowserRouter } from "react-router-dom";
import ResultPage from "./pages/result/ResultPage";
import AgeGroupPage from "./pages/start/AgeGroupPage";
import NamePage from "./pages/start/NamePage";
import TestPage from "./pages/test/TestPage";
import WrongPage from "./pages/wrong/WrongPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/name" element={<NamePage />} />
        <Route path="/age" element={<AgeGroupPage />} />
        <Route path="/test/:examId" element={<TestPage />} />
        <Route path="/wrong/:examId" element={<WrongPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
