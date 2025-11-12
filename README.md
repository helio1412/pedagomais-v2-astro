# 🚀 PedagoMais V2 - Astro

Nova versão da landing page do PedagoMais construída com **Astro 4** para máxima performance.

## 📊 Performance Esperada

- **PageSpeed Mobile:** 95-100
- **FCP:** < 1.0s
- **LCP:** < 1.5s
- **TTI:** < 2.0s
- **Bundle JS:** < 50KB (vs 221KB da versão anterior)

## 🛠️ Stack

- **Framework:** Astro 4.x
- **UI Library:** React 18 (Islands Architecture)
- **Styling:** TailwindCSS 3.x
- **TypeScript:** 5.x
- **Hosting:** Vercel / Netlify / Cloudflare Pages

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura

```
pedagomais-v2-astro/
├── src/
│   ├── components/
│   │   ├── islands/          # Componentes React interativos
│   │   │   └── VideoPlayer.tsx
│   │   └── Hero.astro        # Componentes estáticos
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro       # Landing page
│   └── styles/
│       └── global.css
├── public/                   # Assets estáticos
└── astro.config.mjs
```

## 🎯 Características

### ⚡ Performance

- **Zero JS por padrão** - HTML/CSS estático
- **Islands Architecture** - JS apenas onde necessário
- **Intersection Observer** - Vídeos carregam sob demanda
- **CSS Crítico Inline** - Sem render-blocking
- **Imagens otimizadas** - WebP/AVIF automático

### 🎨 UI/UX

- **Responsive** - Mobile-first design
- **Acessível** - WCAG 2.1 AA
- **SEO Otimizado** - Meta tags, Open Graph, Schema.org
- **Analytics** - Facebook Pixel, UTMify (deferred)

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build command
npm run build

# Publish directory
dist
```

### Cloudflare Pages

```bash
# Build command
npm run build

# Build output directory
dist
```

## 📝 Migração do Conteúdo

Todo o conteúdo/copy da versão anterior foi mantido:

- ✅ Hero Section
- ✅ Benefícios
- ✅ Vídeo principal
- ✅ CTAs
- ✅ Footer
- ⏳ Seções adicionais (em desenvolvimento)

## 🔧 Próximos Passos

1. [ ] Copiar imagens da versão antiga para `/public`
2. [ ] Criar página de demonstração
3. [ ] Adicionar mais seções (depoimentos, FAQ, etc)
4. [ ] Configurar domínio personalizado
5. [ ] Testar performance no PageSpeed Insights

## 📈 Comparação com V1

| Métrica | V1 (Next.js) | V2 (Astro) |
|---------|--------------|------------|
| **Bundle JS** | 221KB | ~40KB |
| **PageSpeed** | 88 | 95-100 |
| **FCP** | ~1.5s | <1.0s |
| **LCP** | ~2.0s | <1.5s |
| **Framer Motion** | ✅ (80KB) | ❌ (CSS nativo) |

## 🤝 Contribuindo

Esta é uma versão completamente nova. Para adicionar funcionalidades:

1. Componentes estáticos → `.astro` files
2. Componentes interativos → `islands/*.tsx` files
3. Sempre priorize performance sobre funcionalidades

## 📄 Licença

Propriedade de PedagoMais - Todos os direitos reservados.
