import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../views/auth/Login'
import Register from '../views/auth/Register'
import Dashboard from '../views/Dashboard'
import Home from '../views/Home'
import Guest from '../middleware/Guest'
import Authenticated from '../middleware/Authenticated'
import SeriesApp from '../views/playlists/App'
import SeriesShow from '../views/playlists/Show'
import LessonShow from '../views/lesson/Show'
import Cart from '../orders/Cart'
import PaymentSuccess from '../views/success/PaymentSuccess'

export default function ReactRouter() {

    return (
        <BrowserRouter>
            <Routes>


                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={
                    <Guest render={<Login />} />
                } />
                <Route exact path="/register" element={
                    <Guest render={<Register />} />
                } />

                <Route exact path="/dashboard" element={
                    <Authenticated render={<Dashboard />} />
                } />
                <Route exact path="/series" element={
                    <Authenticated render={<SeriesApp />} />
                } />
                <Route exact path="/series/:slug" element={
                    <Authenticated render={<SeriesShow />} />
                } />
                <Route exact path="/series/:slug/:episode" element={
                    <Authenticated render={<LessonShow />} />
                } />
                <Route exact path="/your-cart" element={
                    <Authenticated render={<Cart />} />
                } />
                <Route exact path="/your-payment-success" element={
                    <Authenticated render={<PaymentSuccess />} />
                } />
            </Routes>
        </BrowserRouter>
    )
}
