const projetos = [
  {
    titulo: "Educação para Todos",
    categoria: "Educação",
    descricao:
      "Reforço escolar, oficinas de leitura e apoio educacional para crianças e adolescentes.",
    status: "ATIVO",
    badge: "badge-ativo",
    icone: "📚"
  },
  {
    titulo: "Meio Ambiente Vivo",
    categoria: "Sustentabilidade",
    descricao:
      "Ações de preservação ambiental, plantio comunitário e educação para sustentabilidade.",
    status: "NOVO",
    badge: "badge-novo",
    icone: "🌱"
  },
  {
    titulo: "Alimento na Mesa",
    categoria: "Assistência social",
    descricao:
      "Arrecadação e distribuição de alimentos para famílias em situação de vulnerabilidade.",
    status: "URGENTE",
    badge: "badge-urgente",
    icone: "🍲"
  }
];

function templateCardProjeto(projeto) {
  return `
    <article class="card">
      <div class="card-imagem" aria-hidden="true">
        <span class="badge ${projeto.badge}">
          ${projeto.status}
        </span>
        ${projeto.icone}
      </div>

      <div class="card-conteudo">
        <h3>${projeto.titulo}</h3>

        <p>${projeto.descricao}</p>

        <small>
          Categoria: ${projeto.categoria}
        </small>

        <div class="card-acoes">
          <button
            class="botao participar-projeto"
            type="button"
            data-projeto="${projeto.titulo}">
            Participar
          </button>
        </div>
      </div>
    </article>
  `;
}

export function templateInicio() {
  return `
    <section class="hero">
      <div class="container hero-conteudo">
        <div class="hero-texto">
          <h1>Juntos por um futuro melhor</h1>

          <p>
            Conheça iniciativas sociais, participe como voluntário
            e ajude a transformar comunidades.
          </p>
        </div>

        <aside class="hero-info" aria-label="Resumo de impacto">
          <strong>1.248</strong>
          <span>
            pessoas alcançadas pelos projetos neste ano
          </span>
        </aside>
      </div>
    </section>

    <section class="secao">
      <div class="container">
        <div class="secao-titulo">
          <h2>Feedbacks da plataforma</h2>
          <p>
            Exemplos de mensagens semânticas utilizadas na aplicação.
          </p>
        </div>

        <div class="alertas">
          <div class="alerta alerta-sucesso" role="alert">
            <strong>Sucesso:</strong>
            cadastro processado corretamente.
          </div>

          <div class="alerta alerta-aviso" role="alert">
            <strong>Atenção:</strong>
            existem informações que devem ser revistas.
          </div>

          <div class="alerta alerta-erro" role="alert">
            <strong>Erro:</strong>
            não foi possível concluir a operação.
          </div>
        </div>
      </div>
    </section>

    <section class="secao">
      <div class="container">
        <div class="secao-titulo">
          <h2>Projetos em destaque</h2>
          <p>
            Iniciativas atualmente disponíveis na plataforma.
          </p>
        </div>

        <div class="cards">
          ${projetos.map(templateCardProjeto).join("")}
        </div>
      </div>
    </section>
  `;
}

export function templateProjetos() {
  return `
    <section class="secao">
      <div class="container">
        <div class="secao-titulo">
          <h1>Projetos sociais</h1>

          <p>
            Consulte as iniciativas e escolha uma causa para apoiar.
          </p>
        </div>

        <div class="cards">
          ${projetos.map(templateCardProjeto).join("")}
        </div>
      </div>
    </section>
  `;
}

export function templateVoluntariado() {
  return `
    <section class="secao">
      <div class="container">
        <div class="secao-titulo">
          <h1>Cadastro de voluntário</h1>

          <p>
            Preencha os dados abaixo para manifestar interesse
            em participar dos projetos.
          </p>
        </div>

        <form
          id="form-voluntario"
          class="formulario"
          novalidate>

          <div class="campo">
            <label for="nome">Nome completo</label>

            <input
              id="nome"
              name="nome"
              type="text"
              minlength="3"
              required
              aria-describedby="erro-nome">

            <span
              id="erro-nome"
              class="mensagem-erro"
              aria-live="polite">
            </span>
          </div>

          <div class="campo">
            <label for="email">E-mail</label>

            <input
              id="email"
              name="email"
              type="email"
              required
              aria-describedby="erro-email">

            <span
              id="erro-email"
              class="mensagem-erro"
              aria-live="polite">
            </span>
          </div>

          <div class="campo">
            <label for="interesse">Área de interesse</label>

            <select
              id="interesse"
              name="interesse"
              required
              aria-describedby="erro-interesse">

              <option value="">
                Selecione uma opção
              </option>

              <option value="Educação">
                Educação
              </option>

              <option value="Meio Ambiente">
                Meio Ambiente
              </option>

              <option value="Assistência Social">
                Assistência Social
              </option>
            </select>

            <span
              id="erro-interesse"
              class="mensagem-erro"
              aria-live="polite">
            </span>
          </div>

          <div class="campo">
            <label for="mensagem">
              Motivação
            </label>

            <textarea
              id="mensagem"
              name="mensagem"
              rows="4"
              minlength="10"
              required
              aria-describedby="erro-mensagem"></textarea>

            <span
              id="erro-mensagem"
              class="mensagem-erro"
              aria-live="polite">
            </span>
          </div>

          <button class="botao" type="submit">
            Enviar cadastro
          </button>
        </form>

        <section class="lista-registros" aria-labelledby="titulo-registros">
          <h2 id="titulo-registros">
            Cadastros armazenados neste navegador
          </h2>

          <div id="lista-voluntarios"></div>
        </section>
      </div>
    </section>
  `;
}

export function templateDashboard() {
  return `
    <section class="secao">
      <div class="container">
        <div class="secao-titulo">
          <h1>Impacto dos projetos</h1>

          <p>
            Visualização das iniciativas por área de atuação.
          </p>
        </div>

        <div class="grafico-container">
          <canvas
            id="graficoProjetos"
            aria-label="Gráfico de projetos ativos por área"
            role="img">
          </canvas>
        </div>
      </div>
    </section>
  `;
}

export function templateSobre() {
  return `
    <section class="secao">
      <div class="container">
        <div class="secao-titulo">
          <h1>Sobre a plataforma</h1>
        </div>

        <div class="formulario">
          <p>
            A plataforma Mãos que Transformam foi desenvolvida
            para demonstrar recursos profissionais de
            desenvolvimento front-end.
          </p>

          <p>
            O projeto utiliza HTML5 semântico, CSS Grid,
            Flexbox, JavaScript modular, SPA, localStorage,
            Chart.js e práticas de acessibilidade baseadas
            nas diretrizes WCAG 2.1 Nível AA.
          </p>
        </div>
      </div>
    </section>
  `;
}

export const rotas = {
  inicio: templateInicio,
  projetos: templateProjetos,
  voluntariado: templateVoluntariado,
  dashboard: templateDashboard,
  sobre: templateSobre
};
