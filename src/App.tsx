/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "@/src/components/Navbar";
import { Footer } from "@/src/components/Footer";
import { HomePage } from "@/src/pages/Home";
import { ServicesPage } from "@/src/pages/Services";
import { GalleryPage } from "@/src/pages/Gallery";
import { ContactPage } from "@/src/pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#242424] antialiased selection:bg-[#777A63]/25 selection:text-[#242424]">
        {/* Sticky 3-zone Header */}
        <Navbar />

        {/* Dynamic Page Routes */}
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all route gracefully navigates back to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Consistent Studio Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
