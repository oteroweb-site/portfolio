# Documentação Técnica - OteroWeb

Esta documentação serve como guia para futuras manutenções e upgrades no site **OteroWeb**.

## 🚀 Tech Stack
- **HTML5:** Estrutura semântica.
- **Tailwind CSS:** Framework CSS via CDN para estilização rápida e responsiva.
- **JavaScript (Vanilla):** Lógica de interatividade e animações.
- **Google Fonts:** Fontes 'Inter' (leitura) e 'Lexend' (títulos).
- **Hero Icons / SVG:** Ícones leves e escaláveis.

## 📁 Estrutura de Pastas
- `index.html`: Arquivo principal (Landing Page).
- `styles.css`: Estilos personalizados e definições de animações CSS.
- `script.js`: Controle de scroll suave, efeito de revelação e envio de formulário.
- `protifolio/`: Pasta contendo os sites de demonstração (iframes).
  - `claudia/helenabelchior/`: Landing page de psicologia.
  - `advogado/`: Site institucional jurídico.
  - `trainer/`: Página de vendas fitness.
- `public/assets/`: Imagens de fundo e elementos visuais.

## 🛠️ Manutenção e Upgrades

### 1. Alterar Links de Contato
Para atualizar o número do WhatsApp, procure por `https://wa.me/5500000000000` no arquivo `index.html` e substitua pelo número correto (formato: código do país + DDD + número).

### 2. Atualizar Preços
Os planos estão localizados na seção `<section id="precos">`. Basta alterar os valores de texto dentro das `<span>` correspondentes.

### 3. Adicionar Novos Projetos ao Portfólio
Basta copiar um bloco `<!-- Project X -->` na grid de portfólio no `index.html` e atualizar o link do `iframe` e o botão "Ver Demo".

### 4. Responsividade (Mobile)
O site utiliza classes utilitárias do Tailwind (ex: `md:py-24` vs `py-12`). 
- **scroll-mt-24**: Utilizado para garantir que o menu fixo não cubra os títulos ao clicar nos links de navegação.
- **pb-32**: Aplicado no rodapé apenas em mobile para evitar que o botão flutuante do WhatsApp cubra informações importantes.

## 🔑 Detalhes Legais
- **CNPJ:** 59.721.123/0001-64 (Localizado no rodapé).
- **Copyright:** Atualizado para "© 2026 OteroWeb".

## 🛡️ Segurança e Performance
- O site é estático, o que garante segurança máxima contra ataques de banco de dados.
- Otimização de imagens deve ser feita antes do upload para manter o carregamento ultra-rápido.
- Os scripts foram colocados no final do body para não bloquear a renderização do HTML.

## 🌐 Acesso em Outros Dispositivos (Mesmo Wi-Fi)
Para acessar o site a partir de um celular ou outro computador na mesma rede:
1. Inicie o servidor no computador principal: `python -m http.server 8000`
2. No outro dispositivo, acesse: `http://192.168.100.5:8000`

> [!TIP]
> Se o link acima não carregar, verifique se o **Firewall do Windows** está permitindo conexões na porta 8000 ou tente desativar o antivírus temporariamente.

---
*Documentação gerada em 16 de Janeiro de 2026.*
