import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Mail, Phone, CheckCircle, AlertCircle } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Simulação de envio do formulário
    try {
      // Aqui você integraria com um serviço real como Formspree, EmailJS, etc.
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      
      // Opcional: redirecionar para WhatsApp
      const whatsappMessage = `Olá! Meu nome é ${formData.name}. ${formData.message}`
      const whatsappUrl = `https://wa.me/5592994569531?text=${encodeURIComponent(whatsappMessage)}`
      setTimeout(() => {
        window.open(whatsappUrl, '_blank')
      }, 1500)
      
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name && formData.email && formData.phone && formData.message

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">Envie uma Mensagem</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input 
              type="text" 
              name="name"
              placeholder="Seu nome" 
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
          </div>
          <div>
            <input 
              type="email" 
              name="email"
              placeholder="Seu e-mail" 
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
          </div>
          <div>
            <input 
              type="tel" 
              name="phone"
              placeholder="Seu telefone" 
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
          </div>
          <div>
            <textarea 
              rows="4" 
              name="message"
              placeholder="Sua mensagem" 
              value={formData.message}
              onChange={handleInputChange}
              required
              className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none"
            ></textarea>
          </div>
          
          {submitStatus === 'success' && (
            <div className="flex items-center space-x-2 text-green-200 bg-green-500/20 p-3 rounded-lg">
              <CheckCircle className="h-5 w-5" />
              <span>Mensagem enviada com sucesso! Redirecionando para o WhatsApp...</span>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="flex items-center space-x-2 text-red-200 bg-red-500/20 p-3 rounded-lg">
              <AlertCircle className="h-5 w-5" />
              <span>Erro ao enviar mensagem. Tente novamente ou entre em contato via WhatsApp.</span>
            </div>
          )}
          
          <Button 
            type="submit" 
            size="lg" 
            className="w-full bg-white text-blue-600 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                Enviando...
              </>
            ) : (
              <>
                <Mail className="h-5 w-5 mr-2" />
                Enviar Mensagem
              </>
            )}
          </Button>
          
          <div className="text-center text-blue-200 text-sm">
            Ou entre em contato diretamente via WhatsApp
          </div>
          
          <Button 
            type="button"
            size="lg" 
            className="w-full bg-green-500 text-white hover:bg-green-600 transition-all"
            onClick={() => {
              const message = formData.name 
                ? `Olá! Meu nome é ${formData.name}. Gostaria de agendar uma consulta para facetas de resina composta.`
                : 'Olá! Gostaria de agendar uma consulta para facetas de resina composta.'
              const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`
              window.open(whatsappUrl, '_blank')
            }}
          >
            <Phone className="h-5 w-5 mr-2" />
            WhatsApp Direto
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default ContactForm

