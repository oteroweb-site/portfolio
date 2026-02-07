# Lista de Tarefas: Otimização de Performance e Melhorias (Google PageSpeed Insights)

Este documento lista as tarefas planejadas para otimizar o desempenho do site e melhorar a pontuação no Google PageSpeed Insights.

## 1. Otimização de Imagens

- [ ] **Verificar formato e compressão**: Garantir que todas as imagens estejam em formato WebP ou AVIF e devidamente comprimidas.
- [ ] **Dimensionamento explicito**: Confirmar se todas as tags `<img>` possuem atributos `width` e `height` definidos para evitar Cumulative Layout Shift (CLS).
- [x] **Carregamento (Lazy Loading)**:
  - [x] `loading="eager"` e `fetchpriority="high"` aplicados na imagem principal (LCP).
  - [x] Garantir `loading="lazy"` para todas as imagens abaixo da dobra (já é o padrão em muitas, mas valeu a revisão).

## 2. Otimização de CSS e JavaScript

- [ ] **Minificação**: Minificar os arquivos CSS (`styles.css`) e JavaScript (`script.js`) para reduzir o tamanho do payload.
- [ ] **Remover CSS não utilizado**: Analisar e remover regras CSS que não estão sendo usadas para diminuir o tamanho do arquivo.
- [ ] **Adiar CSS não crítico**: Carregar CSS crítico inline e adiar o restante (Parcialmente mitigado com carregamento otimizado de fontes).
- [x] **Otimizar execução de JS**:
  - `script.js` movido para o `<head>` com `defer`.
  - Lógica de "reveal on scroll" refatorada para usar `IntersectionObserver` (elimina Reflow Forçado).

## 3. Melhorias de Segurança e Acessibilidade (Correções Imediatas)

- [x] **Links Externos**: Adicionado `rel="noopener"` em links com `target="_blank"`.
- [ ] **Contraste**: Verificar se as cores de texto e fundo possuem contraste adequado.

## 4. Otimização de Fontes

- [x] **Display Swap e Preload**: Carregamento de fontes alterado para estratégia não-bloqueante (`rel="preload"` + `media="print"` hack).

## 5. Google Tag Manager & Analytics

- [x] **Instalação**: GTM instalado.
- [x] **Limpeza**: Tag antiga do `gtag.js` removida para evitar duplicação.

## 6. Próximos Passos

- [ ] Rodar nova análise no PageSpeed Insights após as alterações.
- [ ] Monitorar métricas de Core Web Vitals.
