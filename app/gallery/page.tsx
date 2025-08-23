"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function GalleryPage() {
  const galleryImages = [
    {
      src: "/casa-principal.jpg",
      alt: "Casa Principal de Estancia Pozo de Correa",
      category: "Arquitectura",
      title: "Casa Principal",
    },
    {
      src: "/elegant-antique-bedroom-mountain-view.png",
      alt: "Habitación Carlos Frías con vista a las sierras",
      category: "Alojamiento",
      title: "Habitación Carlos Frías",
    },
    {
      src: "/spacious-bedroom-gallery-garden.png",
      alt: "Habitación Pedro J. Frías con galería al jardín",
      category: "Alojamiento",
      title: "Habitación Pedro J. Frías",
    },
    {
      src: "/traditional-family-suite.png",
      alt: "Suite Familiar tradicional",
      category: "Alojamiento",
      title: "Suite Familiar",
    },
    {
      src: "/argentine-horseback-riding.png",
      alt: "Cabalgata por las sierras de Córdoba",
      category: "Actividades",
      title: "Cabalgatas",
    },
    {
      src: "/jesuit-estancia-catalina.png",
      alt: "Visita a la histórica Estancia Jesuítica de Santa Catalina",
      category: "Actividades",
      title: "Santa Catalina",
    },
    {
      src: "/gaucho-experience-argentina.png",
      alt: "Experiencia gaucha tradicional",
      category: "Actividades",
      title: "Experiencia Gaucha",
    },
    {
      src: "/gourmet-dining-estancia.png",
      alt: "Cena gourmet en el casco histórico",
      category: "Gastronomía",
      title: "Cena Gourmet",
    },
    {
      src: "/picnic-estancia-argentina.png",
      alt: "Picnic en los jardines de la estancia",
      category: "Gastronomía",
      title: "Picnic en los Jardines",
    },
    {
      src: "/empanadas-cooking-class.png",
      alt: "Clase de cocina de empanadas tradicionales",
      category: "Gastronomía",
      title: "Clases de Cocina",
    },
    {
      src: "/photography-tour-estancia.png",
      alt: "Tour fotográfico por la estancia",
      category: "Actividades",
      title: "Tour Fotográfico",
    },
    {
      src: "/birdwatching-cordoba-argentina.png",
      alt: "Observación de aves en Córdoba",
      category: "Naturaleza",
      title: "Observación de Aves",
    },
  ]

  const categories = ["Todos", "Arquitectura", "Alojamiento", "Actividades", "Gastronomía", "Naturaleza"]

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#a08076] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Galería</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Descubre la belleza natural, la arquitectura histórica y las experiencias únicas que te esperan en nuestra
            estancia
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-[#a08076] text-[#a08076] hover:bg-[#a08076] hover:text-white transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <Card key={index} className="group overflow-hidden border-[#a08076]/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#a08076] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {image.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg text-[#a08076] mb-2">{image.title}</h3>
                  <p className="text-gray-600 text-sm">{image.alt}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif text-[#a08076] mb-4">¿Listo para Vivir Esta Experiencia?</h2>
            <p className="text-gray-600 mb-8">
              Cada imagen cuenta una historia. Ven y crea la tuya en Estancia Pozo de Correa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-3 rounded-lg font-medium transition-colors"
                onClick={() =>
                  window.open(
                    "https://wa.me/543512892652?text=Hola, me interesa reservar en Estancia Pozo de Correa",
                    "_blank",
                  )
                }
              >
                Reservar por WhatsApp
              </button>
              <button
                className="border border-[#a08076] text-[#a08076] hover:bg-[#a08076] hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
                onClick={() => (window.location.href = "/contact")}
              >
                Ver Más Opciones
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
