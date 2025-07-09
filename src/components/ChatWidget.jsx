import React, { useState } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Olá! Sou a Sofia, assistente virtual da Dra. Eliana Batista. Como posso ajudá-lo hoje? 😊",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simular resposta do bot (aqui você integraria com seu agente de IA)
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage)
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }])
      setIsTyping(false)
    }, 1500)
  }

  const generateBotResponse = (userInput) => {
    const input = userInput.toLowerCase()
    
    if (input.includes('agendar') || input.includes('consulta') || input.includes('marcar')) {
      return "Ótimo! Vou te ajudar a agendar sua consulta. Para isso, preciso de algumas informações:\n\n1. Seu nome completo\n2. Telefone para contato\n3. Qual serviço você gostaria (facetas, clareamento, etc.)\n4. Sua preferência de horário\n\nOu se preferir, posso te conectar diretamente no WhatsApp da Dra. Eliana: (92) 99456-9531"
    }
    
    if (input.includes('facetas') || input.includes('resina')) {
      return "As facetas de resina são nossa especialidade! 🦷✨\n\n✅ Procedimento em sessão única (2-4h)\n✅ Resultado natural e duradouro\n✅ Sem desgaste excessivo dos dentes\n✅ Excelente custo-benefício\n\nGostaria de agendar uma avaliação gratuita para ver como ficaria no seu caso?"
    }
    
    if (input.includes('preço') || input.includes('valor') || input.includes('custo')) {
      return "Os valores das facetas variam conforme o caso e número de dentes. A Dra. Eliana oferece uma avaliação gratuita onde você receberá um orçamento personalizado.\n\nGostaria de agendar sua avaliação? É sem compromisso! 😊"
    }
    
    if (input.includes('horário') || input.includes('funcionamento')) {
      return "Nossos horários de atendimento:\n\n📅 Segunda a Sexta: 8h às 18h\n📅 Sábado: 8h às 14h\n📅 Domingo: Fechado\n\n🚨 Para emergências, temos atendimento especial via WhatsApp!"
    }
    
    if (input.includes('localização') || input.includes('endereço') || input.includes('onde')) {
      return "Nossa clínica está localizada em:\n\n📍 [Endereço a ser definido]\n🚗 Estacionamento próprio\n🚌 Fácil acesso por transporte público\n\nPosso enviar a localização pelo WhatsApp se preferir!"
    }
    
    if (input.includes('whatsapp') || input.includes('telefone') || input.includes('contato')) {
      return "Você pode entrar em contato conosco:\n\n📱 WhatsApp: (92) 99456-9531 | (92) 99164-2650\n📧 Email: contato@draelianabatista.com.br\n📸 Instagram: @dra.elianabatista\n\nEstamos sempre prontos para atendê-lo!"
    }
    
    // Resposta padrão
    return "Obrigada pela sua mensagem! Para um atendimento mais personalizado, recomendo que entre em contato diretamente pelo WhatsApp: (92) 99456-9531\n\nA Dra. Eliana ou nossa equipe poderão te ajudar com todas as informações que precisa! 😊"
  }

  const openWhatsApp = () => {
    const message = "Olá! Vim do site e gostaria de conversar sobre os tratamentos da Dra. Eliana Batista."
    const whatsappUrl = `https://wa.me/5592994569531?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg animate-pulse hover:animate-none transition-all duration-300"
          title="Converse com nossa assistente virtual"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="w-80 h-96 shadow-2xl border-0">
        <CardHeader className="bg-blue-600 text-white p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5" />
              <div>
                <CardTitle className="text-sm">Sofia - Assistente Virtual</CardTitle>
                <p className="text-xs text-blue-100">Dra. Eliana Batista</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={openWhatsApp}
                className="text-white hover:bg-blue-700 p-1"
                title="Abrir WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-blue-700 p-1"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-0 h-64 flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === 'bot' && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                    {message.sender === 'user' && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                    <div className="flex-1">
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg max-w-xs">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-4 w-4" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="border-t p-3">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Digite sua mensagem..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-blue-600 hover:bg-blue-700 p-2"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Para atendimento completo, use nosso WhatsApp
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ChatWidget

