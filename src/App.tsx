import { Route, Routes } from "react-router-dom";
import { Auth, Error, Home } from "./pages";
import { HeaderLayout } from "./layout";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Auth />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
