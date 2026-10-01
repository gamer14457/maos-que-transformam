import {
  configurarRoteamento
} from "./router.js";

import {
  configurarFormulario
} from "./form.js";

import {
  criarGrafico
} from "./chart.js";

import {
  carregarPreferenciaContraste,
  salvarPreferenciaContraste
} from "./storage.js";

const menuToggle =
  document.querySelector("#menu-toggle");

const menu =
  document.querySelector("#menu-principal");

const dropdown =
  document.querySelector(".dropdown");

const dropdownToggle =
  document.querySelector("#dropdown-toggle");

const contrasteToggle =
  document.querySelector("#contraste-toggle");

const modalOverlay =
  document.querySelector("#modal-overlay");

const modalFechar =
  document.querySelector("#modal-fechar");

const modalCancelar =
  document.querySelector("#modal-cancelar");

const modalConfirmar =
  document.querySelector("#modal-confirmar");

const toast =
  document.querySelector("#toast");

let elementoFocoAnterior = null;

function mostrarToast(mensagem) {
  toast.textContent = mensagem;

  toast.classList.remove("oculto");

  window.setTimeout(() => {
    toast.classList.add("oculto");
  }, 4000);
}

function abrirModal() {
  elementoFocoAnterior =
    document.activeElement;

  modalOverlay.classList.remove("oculto");

  document.body.style.overflow = "hidden";

  modalFechar.focus();
}

function fecharModal() {
  modalOverlay.classList.add("oculto");

  document.body.style.overflow = "";

  elementoFocoAnterior?.focus();
}

function configurarMenu() {
  menuToggle.addEventListener(
    "click",
    () => {
      const ativo =
        menu.classList.toggle("ativo");

      menuToggle.setAttribute(
        "aria-expanded",
        ativo ? "true" : "false"
      );

      menuToggle.textContent =
        ativo ? "✕" : "☰";
    }
  );

  dropdownToggle.addEventListener(
    "click",
    () => {
      if (
        window.matchMedia(
          "(max-width: 767px)"
        ).matches
      ) {
        const ativo =
          dropdown.classList.toggle("ativo");

        dropdownToggle.setAttribute(
          "aria-expanded",
          ativo ? "true" : "false"
        );
      }
    }
  );

  window.addEventListener(
    "resize",
    () => {
      if (window.innerWidth >= 768) {
        menu.classList.remove("ativo");

        dropdown.classList.remove("ativo");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        dropdownToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.textContent = "☰";
      }
    }
  );
}

function configurarContraste() {
  const ativo =
    carregarPreferenciaContraste();

  document.body.classList.toggle(
    "alto-contraste",
    ativo
  );

  contrasteToggle.setAttribute(
    "aria-pressed",
    ativo ? "true" : "false"
  );

  contrasteToggle.addEventListener(
    "click",
    () => {
      const estado =
        document.body.classList.toggle(
          "alto-contraste"
        );

      contrasteToggle.setAttribute(
        "aria-pressed",
        estado ? "true" : "false"
      );

      salvarPreferenciaContraste(
        estado
      );
    }
  );
}

function configurarModal() {
  document.addEventListener(
    "click",
    (event) => {
      const botao =
        event.target.closest(
          ".participar-projeto"
        );

      if (!botao) {
        return;
      }

      const projeto =
        botao.dataset.projeto;

      document.querySelector(
        "#modal-descricao"
      ).textContent =
        `Deseja realmente participar do projeto "${projeto}"?`;

      abrirModal();
    }
  );

  modalFechar.addEventListener(
    "click",
    fecharModal
  );

  modalCancelar.addEventListener(
    "click",
    fecharModal
  );

  modalConfirmar.addEventListener(
    "click",
    () => {
      fecharModal();

      mostrarToast(
        "Interesse registado com sucesso!"
      );
    }
  );

  modalOverlay.addEventListener(
    "click",
    (event) => {
      if (event.target === modalOverlay) {
        fecharModal();
      }
    }
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if (
        event.key === "Escape" &&
        !modalOverlay.classList.contains(
          "oculto"
        )
      ) {
        fecharModal();
      }
    }
  );
}

document.addEventListener(
  "app:toast",
  (event) => {
    mostrarToast(
      event.detail.mensagem
    );
  }
);

document.addEventListener(
  "view:rendered",
  (event) => {
    const pagina =
      event.detail.pagina;

    configurarFormulario();

    if (pagina === "dashboard") {
      criarGrafico();
    }

    if (
      window.innerWidth < 768
    ) {
      menu.classList.remove(
        "ativo"
      );

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.textContent = "☰";
    }
  }
);

configurarMenu();
configurarContraste();
configurarModal();
configurarRoteamento();
