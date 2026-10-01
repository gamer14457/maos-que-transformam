import {
  carregarVoluntarios,
  salvarVoluntario
} from "./storage.js";

function obterMensagemErro(campo) {
  const valor = campo.value.trim();

  if (!valor) {
    return "Este campo é obrigatório.";
  }

  if (
    campo.type === "email" &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)
  ) {
    return "Informe um e-mail válido.";
  }

  if (
    campo.minLength > 0 &&
    valor.length < campo.minLength
  ) {
    return `Digite pelo menos ${campo.minLength} caracteres.`;
  }

  return "";
}

function atualizarEstado(campo) {
  const mensagem = obterMensagemErro(campo);

  const erro = document.querySelector(
    `#erro-${campo.id}`
  );

  campo.classList.remove(
    "valido",
    "invalido"
  );

  campo.setAttribute(
    "aria-invalid",
    mensagem ? "true" : "false"
  );

  if (mensagem) {
    campo.classList.add("invalido");

    if (erro) {
      erro.textContent = mensagem;
    }

    return false;
  }

  campo.classList.add("valido");

  if (erro) {
    erro.textContent = "";
  }

  return true;
}

function renderizarVoluntarios() {
  const container =
    document.querySelector("#lista-voluntarios");

  if (!container) {
    return;
  }

  const voluntarios = carregarVoluntarios();

  if (!voluntarios.length) {
    container.innerHTML =
      "<p>Nenhum cadastro armazenado.</p>";

    return;
  }

  container.innerHTML = voluntarios
    .map(
      (voluntario) => `
        <article class="registro">
          <strong>${voluntario.nome}</strong>

          <p>${voluntario.email}</p>

          <small>
            Interesse: ${voluntario.interesse}
          </small>
        </article>
      `
    )
    .join("");
}

export function configurarFormulario() {
  const formulario =
    document.querySelector("#form-voluntario");

  if (!formulario) {
    return;
  }

  const campos = [
    ...formulario.querySelectorAll(
      "input, select, textarea"
    )
  ];

  campos.forEach((campo) => {
    campo.addEventListener("input", () => {
      atualizarEstado(campo);
    });

    campo.addEventListener("change", () => {
      atualizarEstado(campo);
    });
  });

  formulario.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();

      const resultados =
        campos.map(atualizarEstado);

      const formularioValido =
        resultados.every(Boolean);

      if (!formularioValido) {
        const primeiroInvalido =
          formulario.querySelector(".invalido");

        primeiroInvalido?.focus();

        return;
      }

      const dados = {
        nome:
          formulario.nome.value.trim(),

        email:
          formulario.email.value.trim(),

        interesse:
          formulario.interesse.value,

        mensagem:
          formulario.mensagem.value.trim(),

        criadoEm:
          new Date().toISOString()
      };

      salvarVoluntario(dados);

      formulario.reset();

      campos.forEach((campo) => {
        campo.classList.remove(
          "valido",
          "invalido"
        );

        campo.setAttribute(
          "aria-invalid",
          "false"
        );
      });

      renderizarVoluntarios();

      document.dispatchEvent(
        new CustomEvent("app:toast", {
          detail: {
            mensagem:
              "Cadastro realizado com sucesso!"
          }
        })
      );
    }
  );

  renderizarVoluntarios();
}
