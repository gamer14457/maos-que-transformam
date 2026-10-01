# Mãos que Transformam

Plataforma web desenvolvida para organizações do terceiro setor, destinada à divulgação de projetos sociais, cadastro de voluntários e apresentação de indicadores de impacto.

## Tecnologias

- HTML5 semântico
- CSS3
- CSS Grid
- Flexbox
- JavaScript ES6
- ES Modules
- localStorage
- Chart.js
- Vite
- Git
- GitHub

## Funcionalidades

- Navegação no modelo SPA
- Templates dinâmicos
- Menu responsivo
- Dropdown
- Menu hambúrguer
- Cards de projetos
- Validação de formulários
- Feedback visual de sucesso e erro
- Persistência com localStorage
- Modal acessível
- Toast
- Gráfico com Chart.js
- Alto contraste
- Navegação por teclado
- Recursos WAI-ARIA
- Layout responsivo

## Estrutura

```text
maos-que-transformam/
├── index.html
├── package.json
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── app.js
│   ├── router.js
│   ├── templates.js
│   ├── form.js
│   ├── storage.js
│   └── chart.js
└── imagens/
    └── README.md
```

## Instalação

Clonar o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Aceder ao diretório:

```bash
cd maos-que-transformam
```

Instalar dependências:

```bash
npm install
```

Executar em desenvolvimento:

```bash
npm run dev
```

Gerar build de produção:

```bash
npm run build
```

Testar build:

```bash
npm run preview
```

## Versionamento

O projeto utiliza GitFlow.

Branches principais:

- `main`
- `develop`

Branches auxiliares:

- `feature/*`
- `hotfix/*`

Os commits seguem Conventional Commits, por exemplo:

- `feat(spa): implementa navegação dinâmica`
- `feat(forms): adiciona validação`
- `feat(storage): implementa localStorage`
- `fix(a11y): corrige acessibilidade`
- `docs(readme): atualiza documentação`

O versionamento segue Semantic Versioning:

`MAJOR.MINOR.PATCH`

Primeira versão estável:

`v1.0.0`

## Acessibilidade

O projeto utiliza práticas baseadas na WCAG 2.1 Nível AA, incluindo:

- landmarks semânticos
- labels em formulários
- `aria-describedby`
- `aria-live`
- `role="dialog"`
- `aria-modal`
- `aria-expanded`
- `aria-controls`
- foco visível
- navegação por teclado
- contraste mínimo adequado
- modo de alto contraste

## Produção

A aplicação é preparada com Vite.

O comando:

```bash
npm run build
```

gera a pasta `dist` com os ficheiros otimizados e minificados.

O deploy pode ser realizado através da Vercel com integração ao GitHub e publicação automática da branch `main`.
