import './App.css'
import * as Pages from './pages';
import { Routes, Route } from 'react-router-dom';
import { Nav } from './components';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Pages.HomePage />}/>
        <Route path="add" element={<Pages.AddWishPage />}/>
        <Route path="wishes" element={<Pages.WishesPage />}/>
        <Route path="wishes/:id" element={<Pages.WishPage />} />
        <Route path="*" element={<Pages.NotFoundPage />}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
