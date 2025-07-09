import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Phone, Mail, MapPin, Clock, Star, CheckCircle, Users, Award, Heart, Smile } from 'lucide-react'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import ContactForm from './components/ContactForm.jsx'
import ChatWidget from './components/ChatWidget.jsx'
import SEOHead from './components/SEOHead.jsx'
import './App.css'

// Importando as imagens
import consultorioModerno from './assets/consultorio-moderno.png'
import facetasAntesDepois from './assets/facetas-antes-depois.jpg'
import dentistaProfissional from './assets/dentista-profissional.jpg'
import equipamentosModernos from './assets/equipamentos-modernos.jpg'
import sorrisoPerfeito from './assets/sorriso-perfeito.jpg'
import logoDente from './assets/logo-dente.png'
import logoCompleto from './assets/logo-completo.png'

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <SEOHead />
      {/* Header/Navigation */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={logoDente} alt="Logo Dra. Eliana Batista" className="h-10 w-10" />
              <div>
                <h1 className="text-xl font-bold text-gray-800">Dra. Eliana Batista</h1>
                <p className="text-sm text-gray-600">Odontologia Estética</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-600 transition-colors">Início</button>
              <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-blue-600 transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-blue-600 transition-colors">Serviços</button>
              <button onClick={() => scrollToSection('galeria')} className="text-gray-700 hover:text-blue-600 transition-colors">Galeria</button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-blue-600 transition-colors">Contato</button>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Phone className="h-4 w-4 mr-2" />
              Agendar Consulta
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                Cirurgiã-Dentista | Odontologia Estética
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Transforme seu
                <span className="text-blue-600 block">Sorriso</span>
                com a Dra. Eliana Batista
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Especialista em Odontologia Estética com foco em facetas de resina composta. 
                Resultados naturais, procedimentos seguros e atendimento personalizado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                  <Phone className="h-5 w-5 mr-2" />
                  Agendar Avaliação Gratuita
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-3" onClick={() => scrollToSection('galeria')}>
                  Ver Resultados
                </Button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-gray-600 ml-2">4.9/5 (200+ avaliações)</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={sorrisoPerfeito} 
                  alt="Sorriso perfeito com facetas de resina" 
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-green-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Por que escolher facetas de resina?</h2>
            <p className="text-xl text-gray-600">Vantagens que fazem a diferença no seu sorriso</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="h-8 w-8 text-blue-600" />,
                title: "Procedimento Rápido",
                description: "Transformação completa em apenas uma sessão"
              },
              {
                icon: <Heart className="h-8 w-8 text-red-500" />,
                title: "Minimamente Invasivo",
                description: "Preserva a estrutura natural dos dentes"
              },
              {
                icon: <Award className="h-8 w-8 text-yellow-500" />,
                title: "Resultado Natural",
                description: "Aparência indistinguível dos dentes naturais"
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-green-600" />,
                title: "Durabilidade",
                description: "Resistente e duradouro com cuidados adequados"
              }
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={dentistaProfissional} 
                alt="Dr. Smile - Dentista especialista" 
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-800">Sobre a Dra. Eliana Batista</Badge>
              <h2 className="text-4xl font-bold text-gray-800">
                Cirurgiã-Dentista Especialista em Odontologia Estética
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A Dra. Eliana Batista é uma profissional dedicada à odontologia estética, 
                especializada em transformar sorrisos através de técnicas modernas e materiais 
                de alta qualidade. Com formação sólida e experiência clínica, oferece 
                tratamentos personalizados focados na naturalidade e harmonia do sorriso.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Graduação em Odontologia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Especialização em Odontologia Estética</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Atualização constante em técnicas modernas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Atendimento humanizado e personalizado</span>
                </div>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-gray-600">Dedicação ao paciente</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">Excelência</div>
                  <div className="text-gray-600">Em cada tratamento</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">Resultados</div>
                  <div className="text-gray-600">Naturais e duradouros</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600">Especialização em estética dental com foco em facetas de resina</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Facetas de Resina Composta",
                description: "Nosso serviço principal. Transformação completa do sorriso com materiais de última geração.",
                features: ["Procedimento em sessão única", "Resultado natural", "Sem desgaste excessivo", "Excelente custo-benefício"],
                highlight: true
              },
              {
                title: "Clareamento Dental",
                description: "Clareamento profissional para potencializar os resultados das facetas.",
                features: ["Técnica segura", "Resultados duradouros", "Acompanhamento profissional", "Sem sensibilidade"]
              },
              {
                title: "Design do Sorriso",
                description: "Planejamento digital personalizado para cada paciente.",
                features: ["Análise facial completa", "Simulação digital", "Planejamento personalizado", "Previsibilidade de resultados"]
              },
              {
                title: "Harmonização Orofacial",
                description: "Procedimentos complementares para harmonizar todo o sorriso.",
                features: ["Botox terapêutico", "Preenchimento labial", "Bichectomia", "Resultado natural"]
              },
              {
                title: "Manutenção e Polimento",
                description: "Cuidados especializados para manter suas facetas sempre perfeitas.",
                features: ["Polimento profissional", "Avaliação periódica", "Orientações de cuidado", "Garantia estendida"]
              },
              {
                title: "Emergências Dentárias",
                description: "Atendimento de urgência para problemas com facetas ou outros tratamentos.",
                features: ["Atendimento rápido", "Disponibilidade estendida", "Reparo especializado", "Suporte completo"]
              }
            ].map((service, index) => (
              <Card key={index} className={`hover:shadow-xl transition-all duration-300 ${service.highlight ? 'ring-2 ring-blue-500 bg-blue-50' : ''}`}>
                <CardHeader>
                  {service.highlight && (
                    <Badge className="bg-blue-600 text-white mb-2 w-fit">Especialidade Principal</Badge>
                  )}
                  <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4" variant={service.highlight ? "default" : "outline"}>
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Galeria de Resultados</h2>
            <p className="text-xl text-gray-600">Veja as transformações incríveis que realizamos</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-6">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={facetasAntesDepois} 
                  alt="Antes e depois - Facetas de resina" 
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-800">Transformação Completa</h3>
                  <p className="text-gray-600 text-sm">Facetas de resina em 8 dentes anteriores</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={consultorioModerno} 
                  alt="Consultório moderno" 
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-800">Ambiente Moderno</h3>
                  <p className="text-gray-600 text-sm">Consultório com tecnologia de ponta</p>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={equipamentosModernos} 
                  alt="Equipamentos modernos" 
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-800">Tecnologia Avançada</h3>
                  <p className="text-gray-600 text-sm">Equipamentos de última geração</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-600 text-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Users className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <p className="text-blue-200">Pacientes satisfeitos este ano</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card className="bg-green-600 text-white hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Award className="h-12 w-12 mx-auto mb-4 text-green-200" />
                    <div className="text-3xl font-bold mb-2">15+</div>
                    <p className="text-green-200">Anos de experiência especializada</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6 bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
                  <div className="text-center">
                    <Star className="h-12 w-12 mx-auto mb-4 text-yellow-100" />
                    <div className="text-3xl font-bold mb-2">4.9/5</div>
                    <p className="text-yellow-100">Avaliação média dos pacientes</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">O que nossos pacientes dizem</h2>
            <p className="text-xl text-gray-600">Depoimentos reais de quem transformou o sorriso conosco</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                text: "Sempre tive vergonha do meu sorriso. Após as facetas de resina, minha autoestima mudou completamente. O Dr. Smile é incrível!",
                rating: 5
              },
              {
                name: "João Santos",
                text: "Procedimento rápido e resultado surpreendente. Recomendo para todos que querem um sorriso perfeito sem complicações.",
                rating: 5
              },
              {
                name: "Ana Costa",
                text: "Profissional excepcional! Cuidado, atenção e resultado além das minhas expectativas. Muito obrigada, Dr. Smile!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-xl text-blue-100">Agende sua consulta e transforme seu sorriso hoje mesmo</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-blue-200" />
                    <div>
                      <p className="text-gray-400">(92) 99456-9531 | (92) 99164-2650</p>
                      <div className="text-blue-200">WhatsApp disponível</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-blue-200" />
                    <div>
                      <div className="font-semibold">contato@draelianabatista.com.br</div>
                      <div className="text-blue-200">Resposta em até 2 horas</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-blue-200" />
                    <div>
                      <div className="font-semibold">Rua das Flores, 123 - Centro</div>
                      <div className="text-blue-200">São Paulo - SP, 01234-567</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="h-6 w-6 text-blue-200" />
                    <div>
                      <div className="font-semibold">Segunda a Sexta: 8h às 18h</div>
                      <div className="text-blue-200">Sábado: 8h às 14h</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4">Avaliação Gratuita</h4>
                <p className="text-blue-100 mb-4">
                  Agende uma consulta sem compromisso e descubra como as facetas de resina 
                  podem transformar seu sorriso.
                </p>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Phone className="h-5 w-5 mr-2" />
                  Agendar Agora
                </Button>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src={logoDente} alt="Logo Dra. Eliana Batista" className="h-8 w-8" />
                <h3 className="text-2xl font-bold">Dra. Eliana Batista</h3>
              </div>
              <p className="text-gray-400">
                Cirurgiã-Dentista especializada em Odontologia Estética, transformando sorrisos com técnicas modernas.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('inicio')} className="hover:text-white transition-colors">Início</button></li>
                <li><button onClick={() => scrollToSection('sobre')} className="hover:text-white transition-colors">Sobre</button></li>
                <li><button onClick={() => scrollToSection('servicos')} className="hover:text-white transition-colors">Serviços</button></li>
                <li><button onClick={() => scrollToSection('galeria')} className="hover:text-white transition-colors">Galeria</button></li>
                <li><button onClick={() => scrollToSection('contato')} className="hover:text-white transition-colors">Contato</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <p>(11) 99999-9999</p>
                <p>contato@draelianabatista.com.br</p>
                <p>Rua das Flores, 123 - Centro<br />São Paulo - SP</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dra. Eliana Batista - Odontologia Estética. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  )
}

export default App

