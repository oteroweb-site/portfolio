# Guia de Implementação: Responsividade Mobile - OteroWeb

Este documento detalha todas as melhorias de responsividade solicitadas para o site, focando na experiência mobile e padronização visual.

---

## 1. Padronização de Altura do Portfólio

**Objetivo:** Garantir que todos os prints de projetos no portfólio tenham a mesma altura vertical, evitando o aspecto "achatado" em telas pequenas.

- **Mudança:** Aplicar uma proporção de aspecto **2:3** (Retrato) em vez do padrão 16:9 (Video).
- **Implementação:**
  - Criar uma classe no CSS: `.aspect-tall { aspect-ratio: 2 / 3; }`
  - No HTML, substituir as classes de aspecto dos containers de imagem por `aspect-tall md:aspect-video`.
- **Efeito:** Os cards ficarão mais altos no mobile, preenchendo melhor o grid.

---

## 2. Grid de Portfólio 2x2 no Mobile

**Objetivo:** Exibir os projetos em duas colunas no celular para melhor aproveitamento de espaço.

- **Implementação:**
  - Garantir que o container pai use `grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2`.
  - Ajustar o `gap` para `gap-3` ou `gap-4` no mobile para não apertar os elementos.

---

## 3. Ajuste na Seção de Preços (Cards Lado a Lado)

**Objetivo:** Em vez de empilhar os planos de preço, exibi-los lado a lado com rolagem horizontal ou em grid, e corrigir o texto de pagamento.

- **Implementação:**
  - **Layout:** Usar `flex overflow-x-auto snap-x` no container dos cards no mobile para permitir deslizar entre os planos.
  - **Texto:** Alterar de `/ à v.` para `/ à vista`.
  - **Estilo:** Garantir que cada card tenha `min-w-[85vw]` no mobile para preencher a tela na rolagem horizontal.

---

## 4. Rolagem Horizontal: "Antes x Depois"

**Objetivo:** Facilitar a navegação pelos casos de sucesso sem ocupar muito espaço vertical.

- **Implementação:**
  - Adicionar a classe `.no-scrollbar` ao container para ocultar a barra de rolagem visual.
  - Usar `flex overflow-x-auto snap-x snap-mandatory`.
  - Cada item deve ter `snap-center` e `shrink-0`.

---

## 5. Menu Mobile e Navegação

**Objetivo:** Garantir que o menu de navegação seja acessível e não cause transbordamento (overflow) lateral.

- **Checklist:**
  - Verificar se o `overflow-x: hidden` está aplicado ao `body` e `html`.
  - Garantir que o botão de "Agendar Consulta" no header não quebre o layout em telas de 320px.

---

## Sugestão de CSS Utilitário

Adicione estas regras e variáveis ao seu arquivo de estilos principal para manter o design original e as novas funcionalidades:

```css
/* Variáveis de Cores Originais */
:root {
    --color-primary: #020617;     /* Azul Marinho Escuro */
    --color-secondary: #0f172a;   /* Slate Escuro */
    --color-accent: #2dd4bf;      /* Verde Água / Teal */
    --color-accent-hover: #0d9488;
    --color-whatsapp: #25d366;
}

/* Altura Vertical para Portfólio */
.aspect-tall {
    aspect-ratio: 2 / 3 !important;
}

/* Ocultar scrollbar mantendo funcionalidade */
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
```
