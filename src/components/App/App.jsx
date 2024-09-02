import './App.css';
import { Route, Routes } from "react-router-dom";
import {lazy, Suspense } from 'react';
import Layout from '../Layout/Layout';

const Features = lazy(() => import("../Features/Features.jsx"));
const Reviews = lazy(() => import("../Reviews/Reviews.jsx"));

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
        <Route path="/catalog/:id" element={<CamperPage />}>
          <Route path="features" element={<Features/>} />
          <Route path="reviews" element={<Reviews/>} />
        </Route>
          <Route path='*' element={ <NotFoundPage/>} />
        </Routes>
    </Layout>
  )
}

