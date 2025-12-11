import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import {
  AddNewAthletePage,
  NotFoundPage,
  FinancePage,
  HomePage,
} from "../pages";

const AppRouting = () => {
  return (
    <>
      <BrowserRouter>
<<<<<<< Updated upstream
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="/register" element={<AddNewAthletePage />}></Route>
            <Route path="/finances" element={<FinancePage />}></Route>
=======
        <header className="flex items-center justify-between px-6 py-3 bg-slate-900 text-slate-100 shadow">
          <nav>
            <ul className="flex gap-6 text-center">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="registrer">RegisterPage</Link>
              </li>
              <li>
                <Link to="regnskap">CompanyBooksPage</Link>
              </li>
              <li>
                <Link to="notfoundpage">NotFoundPage</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<AdminPage />}></Route>
            <Route path="registrer" element={<RegisterPage />}></Route>
            <Route path="regnskap" element={<CompanyBooksPage />}></Route>
>>>>>>> Stashed changes
            <Route path="*" element={<NotFoundPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

      <footer></footer>
    </>
  );
};

export default AppRouting;
