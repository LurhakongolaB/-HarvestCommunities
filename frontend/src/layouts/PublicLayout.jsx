import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import '../styles/publicLayout.css'

export default function PublicLayout() {
  return (
    <div className="public-layout">

      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />

    </div>
  )
}