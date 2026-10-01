import { rotas } from "./templates.js";

const app = document.querySelector("#app");

export function navegar(pagina = "inicio") {
  const template = rotas[pagina] || rotas.inicio;

  app.innerHTML = template();

  app.focus();

  history.replaceState(
    { pagina },
    "",
    `#${pagina}`
  );

  document.dispatchEvent(
    new CustomEvent("view:rendered", {
      detail: { pagina }
    })
  );
}

export function configurarRoteamento() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-page]");

    if (!link) {
      return;
    }

    event.preventDefault();

    navegar(link.dataset.page);
  });

  window.addEventListener("hashchange", () => {
    const pagina =
      window.location.hash.replace("#", "") || "inicio";

    navegar(pagina);
  });

  const inicial =
    window.location.hash.replace("#", "") || "inicio";

  navegar(inicial);
}
