import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

const Login = lazy(() => import('./pages/login'));
const Home = lazy(() => import('./pages/home'));
const Category = lazy(() => import('./pages/category'));
const Vehicle = lazy(() => import('./pages/vehicle'));
const Inspection = lazy(() => import('./pages/inspection'));
const Report = lazy(() => import('./pages/report'));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <main className='app-main-container'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/category/:category' element={<Category />} />
          <Route path='/category/vehicle' element={<Vehicle />} />
          <Route path='/category/vehicle/:rego' element={<Inspection />} />
          <Route path='/vehicle/report' element={<Report />} />
        </Routes>
      </main>
    </Suspense>
  </BrowserRouter>
);

export default App;
