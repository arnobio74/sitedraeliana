# Site da Dra. Eliana Batista - Odontologia Estética

Site institucional moderno e responsivo para a Dra. Eliana Batista, especialista em Odontologia Estética com foco em facetas de resina composta.

## 🚀 Tecnologias Utilizadas

- **React 19** - Framework JavaScript para interface de usuário
- **Vite** - Build tool e servidor de desenvolvimento
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Biblioteca de componentes UI
- **Lucide React** - Ícones modernos
- **Framer Motion** - Animações suaves

## 📋 Funcionalidades

### ✅ Implementadas
- [x] Design responsivo e moderno
- [x] Navegação suave entre seções
- [x] Formulário de contato interativo
- [x] Integração com WhatsApp
- [x] Galeria de resultados
- [x] Seção de serviços detalhada
- [x] Depoimentos de pacientes
- [x] Otimização para SEO
- [x] Schema.org para negócios locais
- [x] Animações e micro-interações

### 🎨 Design
- Paleta de cores profissional (azul médico + verde menta)
- Tipografia moderna e legível
- Layout clean e organizado
- Imagens de alta qualidade
- Gradientes sutis e sombras elegantes

### 📱 Responsividade
- Mobile-first approach
- Breakpoints otimizados
- Touch-friendly buttons
- Imagens responsivas

## 🏗️ Estrutura do Projeto

```
consultorio-odontologico/
├── public/
├── src/
│   ├── assets/          # Imagens e recursos
│   ├── components/      # Componentes React
│   │   ├── ui/         # Componentes shadcn/ui
│   │   ├── WhatsAppButton.jsx
│   │   ├── ContactForm.jsx
│   │   └── SEOHead.jsx
│   ├── App.jsx         # Componente principal
│   ├── App.css         # Estilos customizados
│   └── main.jsx        # Ponto de entrada
├── package.json
└── README.md
```

## 🚀 Como Executar

### Desenvolvimento
```bash
npm run dev
```
Acesse: http://localhost:5173

### Build para Produção
```bash
npm run build
```

### Preview da Build
```bash
npm run preview
```

## 📞 Informações de Contato

- **Telefone**: (92) 99456-9531 | (92) 99164-2650
- **Email**: contato@draelianabatista.com.br
- **Instagram**: @dra.elianabatista
- **Facebook**: /eliana.batista
- **Endereço**: Rua das Flores, 123 - Centro, São Paulo - SP
- **Horários**: Segunda a Sexta: 8h às 18h | Sábado: 8h às 14h

## 🎯 Seções do Site

1. **Hero Section** - Apresentação principal com CTA
2. **Benefícios** - Vantagens das facetas de resina
3. **Sobre** - Informações da Dra. Eliana Batista
4. **Serviços** - Lista completa de tratamentos
5. **Galeria** - Resultados e ambiente do consultório
6. **Depoimentos** - Feedback de pacientes
7. **Contato** - Formulário e informações de contato

## 🔧 Customizações

### Cores Principais
- **Primária**: `#2E86AB` (Azul médico)
- **Secundária**: `#A8DADC` (Verde menta)
- **Accent**: `#F1C40F` (Dourado)

### Fontes
- **Títulos**: Montserrat
- **Corpo**: Inter

## 📈 SEO e Performance

- Meta tags otimizadas
- Schema.org para negócios locais
- Imagens otimizadas
- Lazy loading
- Estrutura semântica
- URLs amigáveis

## 🔗 Integrações

- **WhatsApp Business** - Contato direto
- **Google Maps** - Localização (a implementar)
- **Google Analytics** - Métricas (a implementar)
- **Formspree** - Processamento de formulários (a implementar)

## 🚀 Deploy do Site (Frontend)

Para tornar o site da Dra. Eliana Batista acessível publicamente, você precisa hospedar os arquivos do frontend. Como o site foi construído com React, a melhor abordagem é usar um serviço de hospedagem para sites estáticos. 

### Opções Recomendadas

1.  **Vercel (Recomendado)**: Ideal para projetos React. Oferece um plano gratuito generoso, deploy automático a partir do GitHub e alta performance.
2.  **Netlify**: Similar ao Vercel, muito fácil de usar, com deploy contínuo e um ótimo plano gratuito.
3.  **GitHub Pages**: Uma opção gratuita e simples, diretamente integrada ao seu repositório no GitHub.

### Passos para o Deploy com Vercel

1.  **Crie um Repositório no GitHub**: Envie o código do projeto `consultorio-odontologico` para um novo repositório no seu GitHub.

2.  **Crie uma Conta na Vercel**: Acesse [vercel.com](https://vercel.com/) e crie uma conta usando seu perfil do GitHub.

3.  **Importe o Projeto**:
    *   No dashboard da Vercel, clique em "Add New..." -> "Project".
    *   Selecione o repositório do GitHub que você acabou de criar.

4.  **Configure o Deploy**:
    *   **Framework Preset**: A Vercel deve detectar automaticamente que é um projeto Vite/React.
    *   **Build Command**: `npm run build` (ou `vite build`)
    *   **Output Directory**: `dist`
    *   **Install Command**: `npm install`

5.  **Clique em "Deploy"**: A Vercel irá construir e implantar seu site. Em poucos minutos, você receberá uma URL pública (ex: `dra-eliana-batista.vercel.app`).

## 🤖 Deploy do Agente de IA (Backend)

O agente de IA (Sofia), com Docker, n8n e Waha, precisa de um ambiente de servidor mais robusto, conhecido como **VPS (Virtual Private Server)**.

### Opções Recomendadas

1.  **DigitalOcean (Recomendado)**: Oferece "Droplets" (VPS) fáceis de configurar, com Docker pré-instalado e uma ótima documentação.
2.  **Hetzner**: Conhecida pelo excelente custo-benefício, oferecendo servidores potentes a preços competitivos.
3.  **AWS (Amazon Web Services)**: A opção mais poderosa e escalável (EC2), mas também a mais complexa para iniciantes.

### Passos para o Deploy com DigitalOcean

1.  **Crie uma Conta na DigitalOcean**: Acesse [digitalocean.com](https://digitalocean.com/).

2.  **Crie um Droplet**:
    *   Escolha a imagem "Docker" no Marketplace para já ter o Docker instalado.
    *   Selecione um plano. Para o agente de IA, recomendo um plano com pelo menos **2 GB de RAM** para rodar n8n, Waha e Redis confortavelmente.
    *   Escolha uma região de datacenter (ex: São Paulo).
    *   Configure o acesso via senha ou chave SSH (SSH é mais seguro).

3.  **Acesse o Servidor**: Conecte-se ao seu novo Droplet via SSH.

4.  **Transfira os Arquivos**: Copie os arquivos de configuração do agente de IA (`docker-compose.yml`, `agente-ia-prompt.md`, etc.) para o servidor.

5.  **Inicie os Serviços**: No diretório onde estão os arquivos, execute o comando:
    ```bash
    docker-compose up -d
    ```

6.  **Configure um Domínio**: Aponte um domínio (ex: `api.draelianabatista.com.br`) para o endereço de IP do seu Droplet.

7.  **Configure o Proxy Reverso (Nginx)**: Use o Nginx (incluído no `docker-compose.yml`) para gerenciar o acesso aos serviços (n8n, Waha) e para configurar o SSL (HTTPS), que é essencial para a segurança.

## 🔗 Conectando Frontend e Backend

Após o deploy de ambos, você precisará atualizar a URL da API no seu frontend (no componente `ChatWidget.jsx`) para apontar para o domínio do seu agente de IA (ex: `https://api.draelianabatista.com.br/webhook/whatsapp`).

## 👩‍⚕️ Sobre a Dra. Eliana Batista

Cirurgiã-dentista especialista em Odontologia Estética, dedicada a transformar sorrisos através de técnicas modernas e materiais de alta qualidade. Oferece tratamentos personalizados focados na naturalidade e harmonia do sorriso.

---

**Desenvolvido com ❤️ para a Dra. Eliana Batista**

