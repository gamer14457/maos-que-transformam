const CHAVE_VOLUNTARIOS = "voluntarios";
const CHAVE_CONTRASTE = "altoContraste";

export function carregarVoluntarios() {
  try {
    const dados = localStorage.getItem(CHAVE_VOLUNTARIOS);

    if (!dados) {
      return [];
    }

    const resultado = JSON.parse(dados);

    return Array.isArray(resultado) ? resultado : [];
  } catch (erro) {
    console.error("Erro ao recuperar voluntários:", erro);
    return [];
  }
}

export function salvarVoluntario(voluntario) {
  const voluntarios = carregarVoluntarios();

  voluntarios.push(voluntario);

  localStorage.setItem(
    CHAVE_VOLUNTARIOS,
    JSON.stringify(voluntarios)
  );

  return voluntarios;
}

export function limparVoluntarios() {
  localStorage.removeItem(CHAVE_VOLUNTARIOS);
}

export function salvarPreferenciaContraste(ativo) {
  localStorage.setItem(
    CHAVE_CONTRASTE,
    ativo ? "true" : "false"
  );
}

export function carregarPreferenciaContraste() {
  return localStorage.getItem(CHAVE_CONTRASTE) === "true";
}
