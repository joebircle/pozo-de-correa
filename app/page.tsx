"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, MapPin } from "lucide-react"

export default function EstanciaLanding() {
  const whatsappNumber = "543512892652"
  const whatsappMessage = encodeURIComponent(
    "Hola! Me interesa conocer más sobre Estancia Pozo de Correa para un evento familiar. ¿Podrían brindarme información sobre disponibilidad y tarifas?",
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const googleMapsUrl = "https://maps.app.goo.gl/15UsFN6zT13bPePa8?g_st=com.google.maps.preview.copy"

  return (
    <div className="min-h-screen bg-white">
      <section
        className="min-h-screen flex flex-col items-center justify-center px-4 relative"
        style={{
          backgroundImage: `url('/patron-decorativo.jpg')`,
          backgroundSize: "200px 200px",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "#f4f0ef", opacity: 0.92 }}></div>
        <div className="text-center max-w-2xl mx-auto space-y-12 relative z-10">
          <div>
            <img src="/logo-estancia.svg" alt="Estancia Pozo de Correa" className="mx-auto max-w-sm w-full h-auto" />
          </div>

          <div className="space-y-6">
            <p className="text-xl font-light leading-relaxed" style={{ color: "#a08076" }}>
              Un refugio familiar exclusivo en el corazón de Córdoba
            </p>
            <p className="text-base" style={{ color: "#a98b81" }}>
              Tradición familiar desde 1888
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-white px-8 py-4 hover:opacity-90"
              style={{ backgroundColor: "#a08076" }}
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Consultar por WhatsApp
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 bg-transparent hover:opacity-90"
              style={{ borderColor: "#a08076", color: "#a08076" }}
              onClick={() => window.open(googleMapsUrl, "_blank")}
            >
              <MapPin className="mr-2 h-5 w-5" />
              Ver Ubicación
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <img
            src="/casa-principal.jpg"
            alt="Casa principal de Estancia Pozo de Correa"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-50 relative" style={{ backgroundColor: "#dfd5d1" }}>
        <div className="absolute inset-0" style={{ backgroundColor: "#dfd5d1", opacity: 0.95 }}></div>
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <h2 className="font-serif text-4xl font-light mb-8" style={{ color: "#a08076" }}>
            Estancia "Pozo de Correa"
          </h2>
          <h3 className="font-serif text-2xl font-light mb-12" style={{ color: "#a98b81" }}>
            1888 - Córdoba - Argentina
          </h3>

          <div
            className="space-y-8 text-lg leading-relaxed text-justify max-w-3xl mx-auto"
            style={{ color: "#a08076" }}
          >
            <p>
              Enclavada al pie de las imponentes sierras de Ongamira, la Estancia Pozo de Correa es un lugar donde la
              historia, la naturaleza y la tradición se entrelazan para ofrecer una experiencia única. Fundada en 1888,
              esta estancia de 25 hectáreas — con 11 de ellas cuidadosamente parquizadas — es un testimonio vivo del
              legado histórico y cultural del noroeste de Córdoba.
            </p>

            <p>
              Ubicada en Agua de las Piedras, en el Departamento Totoral, a solo 5 km del centro, la estancia formó
              parte de las tierras de la histórica Estancia Jesuítica de Santa Catalina, a tan solo 6 km de distancia.
              Su ubicación estratégica, en una región productiva vinculada con Jesús María, Ascochinga y la Estancia La
              Paz, la posiciona como un lugar emblemático no sólo de Córdoba, sino de Argentina.
            </p>

            <p className="text-base text-gray-500">Herencia de familia desde 1888</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="font-serif text-4xl font-light mb-8" style={{ color: "#a08076" }}>
            El Casco
          </h2>

          <div
            className="space-y-8 text-lg leading-relaxed text-justify max-w-3xl mx-auto"
            style={{ color: "#a98b81" }}
          >
            <p>
              El casco de la Estancia Pozo de Correa es el epicentro palpitante de su historia y legado. Cada rincón,
              desde las habitaciones con nombres que honran a los antiguos habitantes hasta el amplio living-comedor que
              reúne memorias familiares, es un tributo al linaje que lo forjó. Las cuatro galerías que rodean la casa,
              con su piso damero y sus columnas que enmarcan el paisaje, son un abrazo que conecta el interior con la
              inmensidad del entorno único. Este lugar es más que una estructura; es el origen de todo. Es donde los
              lazos familiares se tejieron, donde las reuniones cobraron vida y donde el pasado se entrelaza con el
              presente.
            </p>

            <p className="font-serif text-xl italic" style={{ color: "#a08076" }}>
              Cada espacio, cada detalle, guarda la esencia de quienes lo habitaron, convirtiendo al Casco en un símbolo
              de raíces profundas, tradición y armonía con la naturaleza.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative" style={{ backgroundColor: "#ccbbb5" }}>
        <div className="absolute inset-0" style={{ backgroundColor: "#ccbbb5", opacity: 0.95 }}></div>
        <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="font-serif text-3xl font-light" style={{ color: "#a08076" }}>
            El lugar perfecto para tu celebración familiar
          </h2>
          <p className="text-lg" style={{ color: "#a98b81" }}>
            Contáctanos para vivir momentos únicos en familia, celebrar casamientos o reunir a tus amigos en un entorno
            exclusivo
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-white px-8 py-4 hover:opacity-90"
              style={{ backgroundColor: "#a08076" }}
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Consultar Disponibilidad
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="px-8 py-4 bg-transparent hover:opacity-90"
              style={{ borderColor: "#a08076", color: "#a08076" }}
              onClick={() => window.open(googleMapsUrl, "_blank")}
            >
              <MapPin className="mr-2 h-5 w-5" />
              Cómo Llegar
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4" style={{ borderTop: "1px solid #ccbbb5" }}>
        <div className="max-w-2xl mx-auto text-center">
          <img src="/logo-estancia.svg" alt="Estancia Pozo de Correa" className="mx-auto max-w-xs w-full h-auto mb-4" />
          <p className="text-sm" style={{ color: "#a98b81" }}>
            Córdoba, Argentina
          </p>
        </div>
      </footer>
    </div>
  )
}
