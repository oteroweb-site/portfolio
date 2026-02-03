# Guia de Implementação Técnica e Otimização - OteroWeb

Este documento detalha as melhorias técnicas implementadas para transformar o OteroWeb em um site de alta performance, pronto para produção e otimizado para motores de busca (SEO).

---

## 🚀 1. Performance: Tailwind CLI (Otimização "Pro Max")

Substituímos o Tailwind via CDN (JavaScript) pela versão profissional compilada.

### Por que mudamos?

- **Velocidade:** O navegador não precisa mais processar o design em tempo real. O estilo já vem pronto e minificado.
- **Estabilidade:** Evita o "pisca" (FOUC) do layout no carregamento.
- **Produção:** Elimina avisos de erro no console e segue as melhores práticas do setor.

### Como funciona hoje

1. **Arquivo de Entrada (`input.css`):** Onde estão as diretrizes do Tailwind v4 e seus estilos personalizados.
2. **Compilador:** O computador lê o HTML e o `input.css` e gera o `styles.css`.
3. **Comandos Úteis (via Terminal):**
    - `npm run dev`: Inicia o modo de monitoramento. Qualquer mudança no HTML atualiza o CSS na hora.
    - `npm run build`: Gera a versão final e otimizada para subir ao servidor.

---

## 🎨 2. Tipografia Estável: Google Fonts API

Resolvemos o erro 404 que ocorria no carregamento das fontes Inter e Lexend.

### O que foi feito

- Removemos os links manuais e desatualizados do arquivo CSS.
- Implementamos o carregamento direto via **Google Fonts API** no `<head>` do `index.html`.
- Adicionamos diretivas de `preconnect` para garantir que o navegador comece a baixar as fontes antes mesmo de terminar de ler o HTML, economizando milissegundos preciosos.

---

## 📈 3. Rastreamento e Conversão: Google Analytics & Eventos

O site agora não apenas recebe visitas, mas entende o comportamento do usuário.

### Implementações

- **GA4 Global Tag:** Instalada e verificada no `index.html`.
- **Rastreamento de Leads:** Implementamos um script no `script.js` que detecta cliques no botão de WhatsApp. Isso permite que você saiba exatamente quantas pessoas clicaram para te chamar após ver o site.

---

## 🔍 4. SEO Técnico (Otimização para o Google)

O site agora possui a estrutura necessária para ranquear bem nas buscas.

### Checklist Implementado

- **Meta Tags Estratégicas:** Títulos e descrições otimizados com palavras-chave foco para Psicólogos, Advogados e Contadores, respeitando os limites de caracteres do Google (50-60 para títulos, 150-160 para descrições).
- **Meta Tags Sociais (Open Graph & Twitter):** Configuramos como o site aparece ao ser compartilhado no WhatsApp, Instagram e LinkedIn.
- **Links Canônicos:** Informamos ao Google qual é a URL oficial da página para evitar penalidades por conteúdo duplicado.
- **Acessibilidade:** Adicionamos textos alternativos (`alt`) em todas as imagens, o que também ajuda o Google a entender o conteúdo do site.

---

## 🛠️ Manutenção Futura

Para manter o site otimizado ao fazer novas mudanças:

1. **Edite o HTML:** Faça suas alterações de texto ou layout.
2. **Compile o CSS:** Execute `npm run build` no terminal para garantir que todas as novas classes do Tailwind sejam incluídas no arquivo final.
3. **Upload:** Ao subir para o servidor, certifique-se de que o arquivo `styles.css` foi atualizado.

---
> [!TIP]
> **Dica de Ouro:** Sempre que criar um novo projeto de portfólio dentro da pasta `protifolio/`, mantenha o padrão de Meta Tags e o link para o CSS compilado para herdar toda essa otimização.
