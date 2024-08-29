import './App.css';
import { Route, Routes } from "react-router-dom";
import {lazy, Suspense } from 'react';
// import { useDispatch, useSelector } from "react-redux";
import Layout from '../Layout/Layout';


const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CamperPage = lazy(() => import('../../pages/CamperPage/CamperPage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));

export default function App() {

  return (
    <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperPage />} />
          <Route path='*' element={ <NotFoundPage/>} />
        </Routes>
    </Layout>
  )
}

