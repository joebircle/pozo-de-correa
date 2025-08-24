"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function GalleryPage() {
  const galleryImages = [
    {
      src: "/estancia-exterior-personas.jpg",
      alt: "Vista de la casa principal con huéspedes caminando por el campo",
      category: "Arquitectura",
      title: "Casa Principal",
    },
    {
      src: "/casa-principal-arboles.jpg",
      alt: "Fachada de la casa principal rodeada de árboles centenarios",
      category: "Arquitectura",
      title: "Fachada Histórica",
    },
    {
      src: "/vista-aerea-estancia.jpg",
      alt: "Vista aérea de toda la propiedad de 25 hectáreas",
      category: "Arquitectura",
      title: "Vista Aérea",
    },
    {
      src: "/casa-flores-rosadas.jpg",
      alt: "Casa principal con jardines de flores rosadas en primer plano",
      category: "Naturaleza",
      title: "Jardines en Flor",
    },
    {
      src: "/comedor-tradicional.jpg",
      alt: "Comedor tradicional con muebles de época y retratos familiares",
      category: "Interiores",
      title: "Comedor Histórico",
    },
    {
      src: "/salon-historico.jpg",
      alt: "Salón principal con techos abovedados y muebles de época",
      category: "Interiores",
      title: "Salón Principal",
    },
    {
      src: "/galeria-columnas.jpg",
      alt: "Galería con columnas y vista al parque, espacio de descanso",
      category: "Arquitectura",
      title: "Galería Colonial",
    },
    {
      src: "/retrato-historico.jpg",
      alt: "Detalle de retrato histórico familiar con flores frescas",
      category: "Historia",
      title: "Herencia Familiar",
    },
    {
      src: "/spacious-bedroom-gallery-garden.png",
      alt: "Habitación Pedro J. Frías con galería al jardín",
      category: "Alojamiento",
      title: "Habitación Pedro J. Frías",
    },
    {
      src: "/traditional-estancia-family-suite.png",
      alt: "Suite Familiar tradicional",
      category: "Alojamiento",
      title: "Suite Familiar",
    },
    {
      src: "/birdwatching-cordoba-argentina.png",
      alt: "Observación de aves en Córdoba",
      category: "Naturaleza",
      title: "Observación de Aves",
    },
    {
      src: "/photography-tour-estancia-cordoba.png",
      alt: "Tour fotográfico por la estancia",
      category: "Actividades",
      title: "Tour Fotográfico",
    },
  ]

  const categories = ["Todos", "Arquitectura", "Interiores", "Historia", "Alojamiento", "Actividades", "Naturaleza"]

  return (
    <div className="min-h-screen bg-white">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card key={index} className="group overflow-hidden bg-white hover:shadow-md transition-shadow">
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
                <div className="p-4 bg-white">
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
