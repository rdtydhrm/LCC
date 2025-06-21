import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Container from "../components/Container.jsx";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <main className="flex-1 w-full">
        <Container>
          <section className="w-full h-full flex flex-col items-center justify-center py-16">
            <h1 className="text-4xl font-bold mb-4 text-center">SatuTempat</h1>
            <p className="text-gray-600 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos rerum sed sunt!</p>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
