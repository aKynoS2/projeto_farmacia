// Painel inicial da FarmaSys: relógio em tempo real e gráficos do dashboard.

document.addEventListener("DOMContentLoaded", () => {
	// Cores da identidade visual
	const PRIMARY = "#2ecc71"; // verde
	const WARN = "#f39c12"; // laranja (atenção)
	const DANGER = "#e74c3c"; // vermelho (abaixo do mínimo)

	// --- RELÓGIO EM TEMPO REAL ---
	const clock = document.querySelector(".clock");

	function atualizarRelogio() {
		if (!clock) return;
		clock.textContent = new Date().toLocaleTimeString("pt-BR", {
			hour: "2-digit",
			minute: "2-digit",
		});
	}

	atualizarRelogio();
	setInterval(atualizarRelogio, 60000); // atualiza a cada minuto

	// --- GRÁFICO: ESTOQUE POR CATEGORIA ---
	const categoriasCanvas = document.getElementById("grafico-categorias");

	if (categoriasCanvas && typeof Chart !== "undefined") {
		const categorias = [
			"Analgésicos",
			"Antibióticos",
			"Anti-inflamatórios",
			"Gastrointestinal",
			"Cardiovascular",
			"Alergia",
		];
		const valores = [42, 18, 25, 30, 22, 19];
		const MINIMO = 20;

		// Destaque: barras abaixo do mínimo ficam em vermelho/laranja
		const cores = valores.map((v) => (v < MINIMO ? DANGER : PRIMARY));

		new Chart(categoriasCanvas, {
			type: "bar",
			data: {
				labels: categorias,
				datasets: [
					{
						label: "Unidades em estoque",
						data: valores,
						backgroundColor: cores,
						borderRadius: 6,
					},
				],
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: { display: false },
					tooltip: {
						callbacks: {
							afterLabel: (ctx) =>
								ctx.parsed.y < MINIMO ? "Abaixo do mínimo" : "",
						},
					},
				},
				scales: {
					y: { beginAtZero: true, title: { display: true, text: "Unidades" } },
				},
			},
		});
	}

	// --- GRÁFICO: VENDAS DO DIA ---
	const vendasCanvas = document.getElementById("grafico-vendas");

	if (vendasCanvas && typeof Chart !== "undefined") {
		new Chart(vendasCanvas, {
			type: "line",
			data: {
				labels: ["08h", "10h", "12h", "14h", "16h", "18h"],
				datasets: [
					{
						label: "Vendas",
						data: [4, 9, 15, 12, 18, 7],
						borderColor: PRIMARY,
						backgroundColor: "rgba(46, 204, 113, 0.15)",
						fill: true,
						tension: 0.35,
						pointBackgroundColor: PRIMARY,
						pointRadius: 4,
					},
				],
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: { legend: { display: false } },
				scales: {
					y: { beginAtZero: true, title: { display: true, text: "Vendas" } },
				},
			},
		});
	}
});
