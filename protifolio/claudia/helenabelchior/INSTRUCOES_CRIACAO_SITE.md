# Instruções para Criação do Site - Claudia Helena Belchior

## Informações Básicas

**Nome Completo:** Claudia Helena Belchior  
**Profissão:** Psicóloga Clínica  
**CRP:** 05/57922  
**Especialização:** Fenomenóloga e Logoterapeuta  
**Instagram:** @helenabelchior_psi

## Estrutura do Site

### Tipo de Site
- **Single Page Application** (SPA) - Uma única página com navegação por scroll suave
- Todas as seções empilhadas verticalmente
- Menu fixo no topo com links âncora (#home, #about, #services, #blog, #contact)

### Seções do Site (em ordem)

1. **Hero/Início (#home)**
   - Título: "Cuidando da sua saúde mental com acolhimento"
   - Subtítulo: "Psicoterapia presencial e online para reencontrar seu equilíbrio e bem-estar"
   - CTA: "Marque uma conversa" (link para #contact)
   - Elementos decorativos: Borboletas animadas (SVG)

2. **Sobre Mim (#about)**
   - Nome completo: Claudia Helena Belchior
   - CRP: 05/57922
   - Especialização: Fenomenóloga e Logoterapeuta
   - Biografia (usar texto do arquivo `biography.txt` da pasta de conteúdo)
   - Frase principal: "Nasci para ser psicóloga"
   - Foto profissional (placeholder: 600x800px)

3. **Serviços (#services)**
   - **Psicoterapia Online**
     - Videochamada
     - Sessões de 50 minutos
     - Sigilo garantido
     - Plataforma segura
   
   - **Psicoterapia Presencial**
     - Localização: Barra da Tijuca, Rio de Janeiro
     - Ambiente acolhedor
     - Sessões de 50 minutos
   
   - **Público-Alvo**
     - Adolescentes e Adultos
     - Especialidades: Autoconhecimento, Ansiedade, Estresse, Conflitos de Relacionamento, Luto, Transição de Carreira

4. **Blog (#blog)**
   - Grid de 3 posts (mínimo)
   - Usar conteúdo dos arquivos `.txt` da pasta de conteúdo
   - Posts sugeridos:
     - "A silenciada dependência em jogos de azar" (psi.helenabelchior_20.txt)
     - "Nasci para ser psicóloga" (psi.helenabelchior_6.txt)
     - "A importância do autoconhecimento"

5. **Contato (#contact)**
   - **Informações:**
     - Consultório: Barra da Tijuca, Rio de Janeiro - RJ
     - Telefone/WhatsApp: (21) 99999-9999 (atualizar com número real)
     - Email: contato@helenabelchior.com.br
   
   - **Formulário de Contato:**
     - Nome Completo
     - E-mail
     - Telefone
     - Mensagem
   
   - **Mapa:** Google Maps embed da Barra da Tijuca

6. **Rodapé (Footer)**
   - Nome: Claudia Helena Belchior
   - Slogan: "Psicologia com empatia e dedicação"
   - Informações de contato
   - Instagram: @helenabelchior_psi
   - Copyright: © 2024 Claudia Helena Belchior. Todos os direitos reservados.

## Paleta de Cores

```css
--primary-color: #423573;      /* Deep Purple */
--secondary-color: #F3F1F8;    /* Light Lavender */
--accent-color: #FF8FA9;       /* Pink */
--text-color: #184A41;         /* Dark Green */
--text-light: #597A75;         /* Lighter Green/Teal */
--brand-teal: #74A6A1;         /* Teal */
--brand-lavender: #9E99BF;     /* Lavender */
--white: #FFFFFF;
--bg-light: #FAFAFA;
```

## Tipografia

- **Títulos:** 'Playfair Display', serif
- **Corpo:** 'Lato', sans-serif
- **Fonte:** Google Fonts

## Elementos Técnicos

### Assets Necessários
1. **hero_bg.webp** - Background abstrato com cores da paleta
2. **butterfly.svg** - Ícone de borboleta para decoração
3. **favicon.svg** - Favicon com inicial "C" ou "H"

### Funcionalidades JavaScript
1. **Smooth Scroll** - Navegação suave entre seções
2. **Scroll Spy** - Destaque do link ativo no menu conforme scroll
3. **Sticky Header** - Menu fixo no topo

### SEO Essencial
- Title: "Claudia Helena Belchior | Psicóloga Clínica"
- Meta Description: "Psicoterapia para adolescentes e adultos. Agende sua consulta com Claudia Helena Belchior."
- Canonical URL: https://www.helenabelchior.com.br/
- Open Graph tags (Facebook/Instagram)
- Alt text em todas as imagens
- Favicon

### Responsividade
- Desktop: Layout em grid (2 colunas para Sobre, Serviços)
- Mobile: Stack vertical, menu hamburger (opcional)
- Breakpoint: 768px

## Estrutura de Arquivos

```
helenabelchior/
├── index.html          (Página única com todas as seções)
├── style.css           (Todos os estilos)
├── assets/
│   ├── hero_bg.webp    (Background do hero)
│   ├── butterfly.svg   (Decoração)
│   └── favicon.svg     (Ícone do site)
└── INSTRUCOES_CRIACAO_SITE.md (Este arquivo)
```

## Checklist de Criação Rápida

### 1. Preparação (5 min)
- [ ] Criar pasta do projeto
- [ ] Criar estrutura de arquivos (index.html, style.css, assets/)
- [ ] Coletar conteúdo da pasta de origem (biography.txt, posts)

### 2. HTML Base (10 min)
- [ ] Estrutura HTML5 semântica
- [ ] Meta tags (SEO, Open Graph)
- [ ] Links para fontes (Google Fonts)
- [ ] Link para FontAwesome (ícones)
- [ ] Header com navegação
- [ ] Footer

### 3. Seções de Conteúdo (15 min)
- [ ] Hero com borboletas
- [ ] Sobre Mim (biografia + foto)
- [ ] Serviços (3 cards)
- [ ] Blog (3 posts)
- [ ] Contato (formulário + mapa)

### 4. CSS (15 min)
- [ ] Variáveis CSS (cores, fontes, espaçamentos)
- [ ] Reset e estilos globais
- [ ] Header e navegação
- [ ] Hero e animações
- [ ] Seções (About, Services, Blog, Contact)
- [ ] Footer
- [ ] Responsividade (mobile)
- [ ] Smooth scroll (CSS)

### 5. JavaScript (5 min)
- [ ] Smooth scroll entre seções
- [ ] Scroll spy (active link)
- [ ] Validação de formulário (opcional)

### 6. Assets (10 min)
- [ ] Gerar hero_bg.webp (imagem abstrata)
- [ ] Criar butterfly.svg
- [ ] Criar favicon.svg
- [ ] Otimizar imagens

### 7. Revisão Final (5 min)
- [ ] Testar navegação
- [ ] Verificar responsividade
- [ ] Validar links
- [ ] Testar formulário
- [ ] Verificar SEO (meta tags)

## Comandos Úteis

### Criar estrutura de pastas
```bash
mkdir helenabelchior
cd helenabelchior
mkdir assets
touch index.html style.css
```

### Gerar placeholder de imagem
Use: `https://placehold.co/[width]x[height]/[cor]/[cor-texto]?text=[texto]`

Exemplo: `https://placehold.co/600x800/423573/FFFFFF?text=Claudia+Helena+Belchior`

## Notas Importantes

1. **Nome Completo:** SEMPRE usar "Claudia Helena Belchior" (não apenas "Helena Belchior")
2. **CRP:** 05/57922 (verificar se está correto)
3. **Localização:** Barra da Tijuca, Rio de Janeiro
4. **Conteúdo:** Usar textos da pasta de origem (`biography.txt`, `psi.helenabelchior_*.txt`)
5. **Estilo:** Moderno, acolhedor, profissional
6. **Animações:** Suaves e discretas (borboletas, fade-in)

## Próximas Melhorias

- [ ] Adicionar fotos reais (substituir placeholders)
- [ ] Atualizar número de telefone/WhatsApp real
- [ ] Configurar formulário de contato (backend)
- [ ] Adicionar Google Analytics
- [ ] Implementar menu hamburger mobile
- [ ] Adicionar mais posts ao blog
- [ ] Integrar com Instagram API (feed)
- [ ] Adicionar depoimentos de pacientes

---

**Tempo Total Estimado:** 60-70 minutos
**Última Atualização:** 15/01/2026
