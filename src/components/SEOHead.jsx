import React, { useEffect } from 'react'

const SEOHead = () => {
  useEffect(() => {
    // Atualizar meta tags dinamicamente
    document.title = "Dra. Eliana Batista - Odontologia Estética | Especialista em Facetas de Resina"
    
    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.content = "Dra. Eliana Batista, cirurgiã-dentista especialista em odontologia estética. Facetas de resina composta, clareamento dental e harmonização orofacial. Agende sua consulta!"
    
    // Meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.name = 'keywords'
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.content = "dentista, odontologia estética, facetas de resina, clareamento dental, harmonização orofacial, Dra. Eliana Batista"
    
    // Schema.org JSON-LD
    const schemaScript = document.createElement('script')
    schemaScript.type = 'application/ld+json'
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": "Dra. Eliana Batista - Odontologia Estética",
      "description": "Cirurgiã-dentista especialista em odontologia estética",
      "url": "https://draelianabatista.com.br",
      "telephone": "+55-11-99999-9999",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua das Flores, 123",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "postalCode": "01234-567",
        "addressCountry": "BR"
      },
      "openingHours": [
        "Mo-Fr 08:00-18:00",
        "Sa 08:00-14:00"
      ],
      "priceRange": "$$",
      "image": "/logo-completo.png"
    })
    document.head.appendChild(schemaScript)
    
    return () => {
      // Cleanup se necessário
      if (schemaScript.parentNode) {
        schemaScript.parentNode.removeChild(schemaScript)
      }
    }
  }, [])

  return null // Este componente não renderiza nada visível
}

export default SEOHead

