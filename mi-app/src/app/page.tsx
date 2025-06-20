"use client";
import React from "react";

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
];

const whatsappNumber = "543512892652";
const whatsappMessage = encodeURIComponent("¡Hola! Quisiera consultar sobre la estancia Pozo de Correa.");
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function PozoDeCorrea() {
  return (
    <main className="min-h-screen bg-neutral-100 flex flex-col items-center px-4 py-8">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center text-neutral-900">
        Estancia Pozo de Correa
      </h1>
      <p className="text-lg md:text-2xl text-neutral-700 mb-10 text-center max-w-2xl">
        Un refugio de paz en el corazón de Córdoba, Argentina. Vení a descubrir la magia de una estancia histórica rodeada de naturaleza, historia y confort.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-full max-w-5xl">
        {images.map((url, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <img src={url} alt={`Foto estancia ${i + 1}`} className="w-full h-72 object-cover" />
          </div>
        ))}
      </div>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-xl rounded-2xl shadow-xl transition-all"
          type="button"
        >
          Consultar por WhatsApp
        </button>
      </a>
    </main>
  );
}
