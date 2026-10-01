let instanciaGrafico = null;

export function criarGrafico() {
  const canvas =
    document.querySelector("#graficoProjetos");

  if (!canvas) {
    return;
  }

  if (typeof Chart === "undefined") {
    console.warn(
      "Chart.js não está disponível."
    );

    return;
  }

  if (instanciaGrafico) {
    instanciaGrafico.destroy();
  }

  instanciaGrafico = new Chart(
    canvas,
    {
      type: "bar",

      data: {
        labels: [
          "Educação",
          "Meio Ambiente",
          "Assistência Social"
        ],

        datasets: [
          {
            label: "Projetos ativos",
            data: [8, 5, 7],
            borderWidth: 1
          }
        ]
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
          legend: {
            display: true
          }
        },

        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    }
  );
}
