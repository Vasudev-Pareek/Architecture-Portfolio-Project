import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainLayout from "./layout/MainLayout"
import AdminLayout  from "./layout/AdminLayout"
import Home from "./pages/Home"
import Work from "./pages/Work"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ProjectAdd from "./pages/ProjectAdd"

import CustomerResponse from './pages/CustomerResponse'
import Categories from './pages/Categories'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/adminpage" element={<ProjectAdd />} /> */}

          {/* Admin section */}
          <Route path="/adminpage" element={<AdminLayout />}>
              <Route index element={<ProjectAdd />} />
              <Route path="categories" element={<Categories />} />
              <Route path="responses" element={<CustomerResponse />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App