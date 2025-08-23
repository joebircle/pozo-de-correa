"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Phone, Mail, MapPin, Clock } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { useState } from "react"

export default function ContactPage() {
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [eventDate, setEventDate] = useState<Date>()

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#a08076] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Contacto y Reservas</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Estamos aquí para hacer realidad tu experiencia perfecta en Estancia Pozo de Correa
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="border-[#a08076]/20">
              <CardHeader>
                <CardTitle className="text-[#a08076] font-serif">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#a08076] mt-1" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-gray-600">+54 351 289 2652</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#a08076] mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@estanciapozo.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#a08076] mt-1" />
                  <div>
                    <p className="font-medium">Ubicación</p>
                    <p className="text-gray-600">
                      Agua de las Piedras, Córdoba
                      <br />A 5 km del centro
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#a08076] mt-1" />
                  <div>
                    <p className="font-medium">Horarios de Atención</p>
                    <p className="text-gray-600">
                      Lunes a Domingo
                      <br />
                      9:00 - 18:00 hs
                    </p>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <Button
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                    onClick={() =>
                      window.open(
                        "https://wa.me/543512892652?text=Hola, me interesa conocer más sobre Estancia Pozo de Correa",
                        "_blank",
                      )
                    }
                  >
                    WhatsApp
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-[#a08076] text-[#a08076] hover:bg-[#a08076] hover:text-white bg-transparent"
                    onClick={() =>
                      window.open(
                        "https://maps.app.goo.gl/15UsFN6zT13bPePa8?g_st=com.google.maps.preview.copy",
                        "_blank",
                      )
                    }
                  >
                    Ver Ubicación
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Forms */}
          <div className="lg:col-span-2 space-y-8">
            {/* Accommodation Booking */}
            <Card className="border-[#a08076]/20">
              <CardHeader>
                <CardTitle className="text-[#a08076] font-serif">Reserva de Alojamiento</CardTitle>
                <CardDescription>Completa el formulario para reservar tu estadía en nuestra estancia</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nombre Completo</Label>
                      <Input id="name" placeholder="Tu nombre completo" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" placeholder="+54 9 11 1234 5678" />
                    </div>
                    <div>
                      <Label htmlFor="guests">Número de Huéspedes</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 persona</SelectItem>
                          <SelectItem value="2">2 personas</SelectItem>
                          <SelectItem value="3">3 personas</SelectItem>
                          <SelectItem value="4">4 personas</SelectItem>
                          <SelectItem value="5">5 personas</SelectItem>
                          <SelectItem value="6+">6+ personas</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label>Fecha de Llegada</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal bg-transparent"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkIn ? format(checkIn, "PPP", { locale: es }) : "Seleccionar fecha"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <Label>Fecha de Salida</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal bg-transparent"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkOut ? format(checkOut, "PPP", { locale: es }) : "Seleccionar fecha"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="accommodation">Tipo de Alojamiento</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar habitación" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="carlos-frias">Habitación Carlos Frías</SelectItem>
                        <SelectItem value="pedro-frias">Habitación Pedro J. Frías</SelectItem>
                        <SelectItem value="criollo">Habitación El Criollo</SelectItem>
                        <SelectItem value="romantica">Habitación Romántica</SelectItem>
                        <SelectItem value="familiar">Suite Familiar</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="accommodation-notes">Comentarios Adicionales</Label>
                    <Textarea
                      id="accommodation-notes"
                      placeholder="Solicitudes especiales, alergias alimentarias, celebraciones, etc."
                      rows={3}
                    />
                  </div>

                  <Button className="w-full bg-[#a08076] hover:bg-[#8f6f65] text-white">
                    Solicitar Reserva de Alojamiento
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Event Booking */}
            <Card className="border-[#a08076]/20">
              <CardHeader>
                <CardTitle className="text-[#a08076] font-serif">Reserva para Eventos</CardTitle>
                <CardDescription>Casamientos, reuniones familiares, eventos corporativos</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="event-name">Nombre del Contacto</Label>
                      <Input id="event-name" placeholder="Tu nombre completo" />
                    </div>
                    <div>
                      <Label htmlFor="event-email">Email</Label>
                      <Input id="event-email" type="email" placeholder="tu@email.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="event-type">Tipo de Evento</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wedding">Casamiento</SelectItem>
                          <SelectItem value="family">Reunión Familiar</SelectItem>
                          <SelectItem value="corporate">Evento Corporativo</SelectItem>
                          <SelectItem value="celebration">Celebración</SelectItem>
                          <SelectItem value="other">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="event-guests">Número de Invitados</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Cantidad estimada" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10-20">10-20 personas</SelectItem>
                          <SelectItem value="20-50">20-50 personas</SelectItem>
                          <SelectItem value="50-100">50-100 personas</SelectItem>
                          <SelectItem value="100+">Más de 100 personas</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label>Fecha del Evento</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {eventDate ? format(eventDate, "PPP", { locale: es }) : "Seleccionar fecha"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={eventDate} onSelect={setEventDate} initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <Label htmlFor="event-details">Detalles del Evento</Label>
                    <Textarea
                      id="event-details"
                      placeholder="Describe tu evento: horarios, servicios necesarios, decoración, catering, etc."
                      rows={4}
                    />
                  </div>

                  <Button className="w-full bg-[#a08076] hover:bg-[#8f6f65] text-white">
                    Solicitar Cotización para Evento
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* General Contact */}
            <Card className="border-[#a08076]/20">
              <CardHeader>
                <CardTitle className="text-[#a08076] font-serif">Consulta General</CardTitle>
                <CardDescription>¿Tienes preguntas? Estamos aquí para ayudarte</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="general-name">Nombre</Label>
                      <Input id="general-name" placeholder="Tu nombre" />
                    </div>
                    <div>
                      <Label htmlFor="general-email">Email</Label>
                      <Input id="general-email" type="email" placeholder="tu@email.com" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Asunto</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar tema" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="info">Información General</SelectItem>
                        <SelectItem value="activities">Actividades</SelectItem>
                        <SelectItem value="dining">Gastronomía</SelectItem>
                        <SelectItem value="accessibility">Accesibilidad</SelectItem>
                        <SelectItem value="other">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea id="message" placeholder="Escribe tu consulta aquí..." rows={4} />
                  </div>

                  <Button className="w-full bg-[#a08076] hover:bg-[#8f6f65] text-white">Enviar Consulta</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
