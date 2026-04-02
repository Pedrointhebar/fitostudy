# FitoStudy — Fitopatologia para Agronomia

Plataforma de estudo de fitopatologia com 11 módulos completos, glossário interativo e questionário com feedback explicativo.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- next-themes (dark mode)
- Vercel Analytics

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Deploy no Vercel

```bash
npx vercel --prod
```

Ou importe o repositório diretamente em [vercel.com](https://vercel.com).

## Estrutura

```
app/
  layout.tsx           # Layout raiz com fontes e dark mode
  page.tsx             # Página inicial com grid de módulos
  [slug]/page.tsx      # Página dinâmica de cada módulo
  glossario/page.tsx   # Glossário com busca em tempo real
  questionario/page.tsx # Quiz interativo com 8 questões
  bibliografia/page.tsx # Referências bibliográficas
components/
  Navbar.tsx           # Navegação com toggle de tema
  TopicCard.tsx        # Card de módulo para a grade
  ContentLayout.tsx    # Layout de conteúdo dos módulos
  QuizEngine.tsx       # Motor do questionário
  GlossarySearch.tsx   # Busca client-side no glossário
  InfoBox.tsx          # Caixas de destaque (note/warning/important/tip)
  ThemeProvider.tsx    # Provedor de tema (next-themes)
data/
  topics.ts            # Conteúdo completo dos 11 módulos
  glossary.ts          # 36+ termos com definições
  quiz.ts              # 8 questões com explicações
  refs.ts              # Referências bibliográficas
```

## Notas

- Site 100% estático: sem banco de dados, sem autenticação, sem API routes
- Todo conteúdo em arquivos TypeScript em `/data`
- Deploy automático no Vercel a cada push na branch principal
# fitostudy
