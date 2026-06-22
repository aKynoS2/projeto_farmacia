// ==========================================
// GRÁFICOS INTERATIVOS COM CHART.JS
// ==========================================

// Verificar se Chart.js está carregado
function carregarChartJS() {
	const scriptChart = document.createElement("script");
	scriptChart.src =
		"https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js";
	scriptChart.onload = function () {
		inicializarGraficos();
	};
	document.head.appendChild(scriptChart);
}

function inicializarGraficos() {
	// Dados de vendas do dia
	const dadosVendas = {
		labels: ["Paracetamol", "Dipirona", "Dorflex", "Amoxicilina", "Ibuprofeno"],
		datasets: [
			{
				label: "Unidades vendidas",
				data: [31, 24, 21, 16, 13],
				backgroundColor: [
					"#3498db",
					"#2ecc71",
					"#f39c12",
					"#e74c3c",
					"#9b59b6",
				],
				borderColor: ["#2980b9", "#27ae60", "#d68910", "#c0392b", "#8e44ad"],
				borderWidth: 2,
				borderRadius: 6,
			},
		],
	};

	// Dados de estoque por categoria
	const dadosEstoque = {
		labels: [
			"Analgésicos",
			"Antibióticos",
			"Anti-inflamatórios",
			"Gastro",
			"Cardiovascular",
			"Alergia",
		],
		datasets: [
			{
				label: "Unidades em estoque",
				data: [125, 48, 92, 67, 154, 83],
				backgroundColor: "rgba(52, 152, 219, 0.6)",
				borderColor: "rgba(41, 128, 185, 1)",
				borderWidth: 2,
				fill: true,
			},
		],
	};

	// Dados críticos (abaixo do mínimo)
	const dadosCriticos = {
		labels: ["Amoxicilina", "Dipirona", "Omeprazol", "Losartana", "Ibuprofeno"],
		datasets: [
			{
				label: "Unidades (Crítico)",
				data: [3, 5, 12, 15, 21],
				backgroundColor: [
					"#e74c3c",
					"#e74c3c",
					"#f39c12",
					"#f39c12",
					"#f39c12",
				],
				borderColor: "#c0392b",
				borderWidth: 2,
				borderRadius: 4,
			},
		],
	};

	// Configurações comuns
	const opcoesComuns = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: true,
				labels: {
					font: {
						size: 13,
						family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
					},
					padding: 15,
					color: "#2c3e50",
				},
			},
		},
		scales: {
			y: {
				beginAtZero: true,
				ticks: {
					font: {
						size: 12,
					},
					color: "#7f8c8d",
				},
				grid: {
					color: "rgba(0, 0, 0, 0.05)",
				},
			},
			x: {
				ticks: {
					font: {
						size: 12,
					},
					color: "#7f8c8d",
				},
				grid: {
					display: false,
				},
			},
		},
	};

	// Gráfico 1: Mais vendidos (barras)
	const ctxVendas = document.getElementById("grafico-vendas");
	if (ctxVendas) {
		new Chart(ctxVendas, {
			type: "bar",
			data: dadosVendas,
			options: {
				...opcoesComuns,
				plugins: {
					...opcoesComuns.plugins,
					title: {
						display: true,
						text: "Top 5 - Mais Vendidos Hoje",
						font: {
							size: 15,
							weight: "bold",
						},
						padding: 20,
						color: "#2c3e50",
					},
				},
			},
		});
	}

	// Gráfico 2: Estoque por categoria (linha)
	const ctxEstoque = document.getElementById("grafico-estoque");
	if (ctxEstoque) {
		new Chart(ctxEstoque, {
			type: "line",
			data: dadosEstoque,
			options: {
				...opcoesComuns,
				plugins: {
					...opcoesComuns.plugins,
					title: {
						display: true,
						text: "Distribuição de Estoque por Categoria",
						font: {
							size: 15,
							weight: "bold",
						},
						padding: 20,
						color: "#2c3e50",
					},
				},
				tension: 0.4,
				fill: true,
			},
		});
	}
}

// Inicializar quando o DOM está pronto
document.addEventListener("DOMContentLoaded", function () {
	carregarChartJS();
});
