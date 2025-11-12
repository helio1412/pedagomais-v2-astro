# 🚀 Guia de Deploy - PedagoMais V2 (Astro)

## 📋 Pré-requisitos

- Conta na [Vercel](https://vercel.com)
- Git instalado
- Repositório Git (GitHub, GitLab ou Bitbucket)

---

## 🔧 Preparação

### 1. Inicializar Git (se ainda não foi feito)

```bash
cd pedagomais-v2-astro
git init
git add .
git commit -m "Initial commit - PedagoMais V2 Astro"
```

### 2. Criar Repositório no GitHub

1. Acesse [GitHub](https://github.com)
2. Clique em **New Repository**
3. Nome: `pedagomais-v2-astro`
4. Deixe **Private** ou **Public**
5. **NÃO** inicialize com README
6. Clique em **Create repository**

### 3. Conectar ao Repositório

```bash
git remote add origin https://github.com/SEU-USUARIO/pedagomais-v2-astro.git
git branch -M main
git push -u origin main
```

---

## 🌐 Deploy na Vercel

### Opção 1: Via Dashboard (Recomendado)

1. Acesse [Vercel Dashboard](https://vercel.com/dashboard)
2. Clique em **Add New** → **Project**
3. Selecione seu repositório `pedagomais-v2-astro`
4. Configure:
   - **Framework Preset:** Astro
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Clique em **Deploy**

### Opção 2: Via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

---

## ⚙️ Variáveis de Ambiente (Opcional)

Se precisar configurar variáveis de ambiente:

1. No Dashboard da Vercel
2. Vá em **Settings** → **Environment Variables**
3. Adicione:
   - `SITE_URL` = `https://www.pedagomais.net.br`

---

## 🔄 Deploy Automático

Após o primeiro deploy, a Vercel configurará **deploy automático**:

- ✅ **Push na branch `main`** → Deploy em produção
- ✅ **Pull Request** → Deploy de preview
- ✅ **Push em outras branches** → Deploy de preview

---

## 📊 Verificação Pós-Deploy

Após o deploy, verifique:

1. ✅ **Homepage** carrega corretamente
2. ✅ **Vídeos** estão funcionando
3. ✅ **Imagens** aparecem
4. ✅ **Links** funcionam
5. ✅ **Página de demonstração** (`/demonstracao`)
6. ✅ **Timer de pagamento** funciona
7. ✅ **FAQ** abre/fecha

---

## 🎯 Domínio Personalizado

### Configurar www.pedagomais.net.br

1. No Dashboard da Vercel
2. Vá em **Settings** → **Domains**
3. Adicione: `www.pedagomais.net.br`
4. Configure os DNS:

**No seu provedor de domínio (Registro.br, etc):**

```
Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
```

**Para domínio raiz (pedagomais.net.br):**

```
Tipo: A
Nome: @
Valor: 76.76.21.21
```

5. Aguarde propagação (até 48h, geralmente 1-2h)

---

## 📈 Performance Esperada

Após o deploy, teste no [PageSpeed Insights](https://pagespeed.web.dev/):

**Esperado:**
- 📱 **Mobile:** 95-100
- 💻 **Desktop:** 100
- ⚡ **FCP:** < 1.0s
- ⚡ **LCP:** < 1.5s
- 📦 **Bundle JS:** ~40-50KB

---

## 🐛 Troubleshooting

### Build falhou?

```bash
# Teste localmente
npm run build

# Verifique erros
npm run preview
```

### Imagens não aparecem?

- Verifique se estão em `/public`
- Caminhos devem começar com `/` (ex: `/logo-padagomais.png`)

### Vídeos não carregam?

- Verifique IDs dos vídeos
- Teste conexão com CDN da Vturb

---

## 📝 Comandos Úteis

```bash
# Build local
npm run build

# Preview do build
npm run preview

# Deploy preview
vercel

# Deploy produção
vercel --prod

# Ver logs
vercel logs

# Remover projeto
vercel remove
```

---

## ✅ Checklist Final

- [ ] Código commitado no Git
- [ ] Repositório criado no GitHub
- [ ] Projeto conectado na Vercel
- [ ] Deploy realizado com sucesso
- [ ] Site acessível via URL da Vercel
- [ ] Todas as páginas funcionando
- [ ] Imagens carregando
- [ ] Vídeos funcionando
- [ ] Domínio personalizado configurado (opcional)
- [ ] Performance testada no PageSpeed

---

## 🎉 Pronto!

Seu site está no ar! 🚀

**URL Vercel:** `https://pedagomais-v2-astro.vercel.app`
**URL Personalizada:** `https://www.pedagomais.net.br`

---

## 📞 Suporte

Problemas? Verifique:
- [Documentação Astro](https://docs.astro.build)
- [Documentação Vercel](https://vercel.com/docs)
- [Suporte Vercel](https://vercel.com/support)
