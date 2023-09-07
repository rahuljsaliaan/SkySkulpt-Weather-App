import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="app" element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
