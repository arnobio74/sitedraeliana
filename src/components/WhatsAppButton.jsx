import React from 'react'
import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5592994569531'
    const message = 'Olá! Gostaria de agendar uma consulta para facetas de resina composta.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        size="lg" 
        className="bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-lg animate-bounce hover:animate-none transition-all duration-300"
        onClick={handleWhatsAppClick}
        title="Fale conosco no WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  )
}

export default WhatsAppButton

