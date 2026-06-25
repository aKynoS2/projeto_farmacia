// ==========================================
// ALERTAS DINÂMICOS COM INDICADORES VISUAIS
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
	// Dados dos alertas (facilmente editáveis)
	const dadosEstoque = [
		{ nome: "Amoxicilina", quantidade: 3, minimo: 20, tipo: "critico" },
		{ nome: "Dipirona", quantidade: 5, minimo: 20, tipo: "critico" },
		{ nome: "Omeprazol", quantidade: 12, minimo: 30, tipo: "alerta" },
		{ nome: "Losartana", quantidade: 15, minimo: 30, tipo: "alerta" },
		{ nome: "Ibuprofeno", quantidade: 21, minimo: 40, tipo: "alerta" },
	];

	const dadosValidade = [
		{ nome: "Paracetamol", dias: 10, tipo: "critico" },
		{ nome: "Dexametazona", dias: 12, tipo: "critico" },
		{ nome: "Profiterona", dias: 18, tipo: "critico" },
		{ nome: "Resveratrol", dias: 34, tipo: "alerta" },
		{ nome: "Dorflex", dias: 51, tipo: "alerta" },
	];

	// Renderizar alertas de estoque
	renderizarAlertasEstoque(dadosEstoque);

	// Renderizar alertas de validade
	renderizarAlertasValidade(dadosValidade);
});

/**
 * Renderiza os alertas de estoque dinamicamente
 */
function renderizarAlertasEstoque(dados) {
	const container = document.querySelector(".alert-card");
	if (!container) return;

	// Pegar apenas o título e remover a lista antiga
	const titulo = container.querySelector(".alert-title");
	const listaAntiga = container.querySelector(".alerts");

	if (listaAntiga) {
		listaAntiga.remove();
	}

	// Criar nova lista com indicadores visuais
	const novaLista = document.createElement("div");
	novaLista.className = "alerts-dinamicos";
	novaLista.style.cssText = `
		display: flex;
		flex-direction: column;
		gap: 12px;
	`;

	dados.forEach((item) => {
		const indicador = criarIndicadorEstoque(item);
		novaLista.appendChild(indicador);
	});

	// Inserir após o título
	titulo.parentNode.insertBefore(novaLista, titulo.nextSibling);
}

/**
 * Cria um indicador visual para cada item de estoque
 */
function criarIndicadorEstoque(item) {
	const container = document.createElement("div");
	container.style.cssText = `
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 10px;
		background: #f8f9fa;
		border-radius: 6px;
		border-left: 4px solid ${item.tipo === "critico" ? "#e74c3c" : "#f39c12"};
	`;

	// Ícone do dot
	const dot = document.createElement("span");
	dot.style.cssText = `
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background-color: ${item.tipo === "critico" ? "#e74c3c" : "#f39c12"};
		flex-shrink: 0;
	`;

	// Nome do medicamento
	const nome = document.createElement("span");
	nome.textContent = item.nome;
	nome.style.cssText = `
		flex: 1;
		font-size: 13px;
		color: #2c3e50;
		font-weight: 500;
	`;

	// Barra de progresso (visual da quantidade vs. mínimo)
	const barraContainer = document.createElement("div");
	barraContainer.style.cssText = `
		flex: 0 0 100px;
		height: 6px;
		background: #ecf0f1;
		border-radius: 3px;
		overflow: hidden;
	`;

	const percentual = (item.quantidade / item.minimo) * 100;
	const barraPreenche = document.createElement("div");
	barraPreenche.style.cssText = `
		height: 100%;
		width: ${Math.min(percentual, 100)}%;
		background-color: ${item.tipo === "critico" ? "#e74c3c" : "#f39c12"};
		transition: width 0.3s ease;
	`;
	barraContainer.appendChild(barraPreenche);

	// Quantidade e mínimo
	const quantidade = document.createElement("span");
	quantidade.textContent = `${item.quantidade} un`;
	quantidade.style.cssText = `
		flex: 0 0 60px;
		font-size: 12px;
		color: #7f8c8d;
		text-align: right;
		font-weight: 500;
	`;

	// Montar tudo
	container.appendChild(dot);
	container.appendChild(nome);
	container.appendChild(barraContainer);
	container.appendChild(quantidade);

	return container;
}

/**
 * Renderiza os alertas de validade dinamicamente
 */
function renderizarAlertasValidade(dados) {
	// Encontrar o segundo card (Alertas de Validade)
	const alertsCards = document.querySelectorAll(".alert-card");
	const container = alertsCards[1]; // Segundo card

	if (!container) return;

	const titulo = container.querySelector(".alert-title");
	const listaAntiga = container.querySelector(".alerts");

	if (listaAntiga) {
		listaAntiga.remove();
	}

	// Criar nova lista com indicadores visuais
	const novaLista = document.createElement("div");
	novaLista.className = "alerts-dinamicos";
	novaLista.style.cssText = `
		display: flex;
		flex-direction: column;
		gap: 12px;
	`;

	dados.forEach((item) => {
		const indicador = criarIndicadorValidade(item);
		novaLista.appendChild(indicador);
	});

	titulo.parentNode.insertBefore(novaLista, titulo.nextSibling);
}

/**
 * Cria um indicador visual para cada item de validade
 */
function criarIndicadorValidade(item) {
	const container = document.createElement("div");
	container.style.cssText = `
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 10px;
		background: #f8f9fa;
		border-radius: 6px;
		border-left: 4px solid ${item.tipo === "critico" ? "#e74c3c" : "#f39c12"};
	`;

	// Ícone do dot
	const dot = document.createElement("span");
	dot.style.cssText = `
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background-color: ${item.tipo === "critico" ? "#e74c3c" : "#f39c12"};
		flex-shrink: 0;
	`;

	// Nome do medicamento
	const nome = document.createElement("span");
	nome.textContent = item.nome;
	nome.style.cssText = `
		flex: 1;
		font-size: 13px;
		color: #2c3e50;
		font-weight: 500;
	`;

	// Barra de progresso (dias até vencimento)
	const barraContainer = document.createElement("div");
	barraContainer.style.cssText = `
		flex: 0 0 100px;
		height: 6px;
		background: #ecf0f1;
		border-radius: 3px;
		overflow: hidden;
	`;

	// Assumindo 365 dias como "nunca vai vencer"
	const percentual = (item.dias / 365) * 100;
	const barraPreenche = document.createElement("div");
	barraPreenche.style.cssText = `
		height: 100%;
		width: ${Math.min(percentual, 100)}%;
		background-color: ${item.tipo === "critico" ? "#e74c3c" : "#f39c12"};
		transition: width 0.3s ease;
	`;
	barraContainer.appendChild(barraPreenche);

	// Dias restantes
	const dias = document.createElement("span");
	dias.textContent = `${item.dias} dias`;
	dias.style.cssText = `
		flex: 0 0 70px;
		font-size: 12px;
		color: #7f8c8d;
		text-align: right;
		font-weight: 500;
	`;

	// Montar tudo
	container.appendChild(dot);
	container.appendChild(nome);
	container.appendChild(barraContainer);
	container.appendChild(dias);

	return container;
}

/**
 * FUNÇÃO ÚTIL: Atualizar dinamicamente um alerta
 *
 * Uso:
 * atualizarAlerta('estoque', 'Amoxicilina', 15, 20);
 * atualizarAlerta('validade', 'Paracetamol', 5);
 */
function atualizarAlerta(tipo, nomeMedicamento, ...dados) {
	if (tipo === "estoque") {
		const [quantidade, minimo] = dados;
		const alertaEstoque = [
			{ nome: "Amoxicilina", quantidade: 3, minimo: 20, tipo: "critico" },
			{ nome: "Dipirona", quantidade: 5, minimo: 20, tipo: "critico" },
			{ nome: "Omeprazol", quantidade: 12, minimo: 30, tipo: "alerta" },
			{ nome: "Losartana", quantidade: 15, minimo: 30, tipo: "alerta" },
			{ nome: "Ibuprofeno", quantidade: 21, minimo: 40, tipo: "alerta" },
		];

		// Atualizar o item
		const itemIndex = alertaEstoque.findIndex(
			(item) => item.nome === nomeMedicamento,
		);
		if (itemIndex !== -1) {
			alertaEstoque[itemIndex].quantidade = quantidade;
			alertaEstoque[itemIndex].minimo = minimo;
			alertaEstoque[itemIndex].tipo =
				quantidade <= minimo / 2 ? "critico" : "alerta";
		}

		renderizarAlertasEstoque(alertaEstoque);
	} else if (tipo === "validade") {
		const [dias] = dados;
		const alertaValidade = [
			{ nome: "Paracetamol", dias: 10, tipo: "critico" },
			{ nome: "Dexametazona", dias: 12, tipo: "critico" },
			{ nome: "Profiterona", dias: 18, tipo: "critico" },
			{ nome: "Resveratrol", dias: 34, tipo: "alerta" },
			{ nome: "Dorflex", dias: 51, tipo: "alerta" },
		];

		const itemIndex = alertaValidade.findIndex(
			(item) => item.nome === nomeMedicamento,
		);
		if (itemIndex !== -1) {
			alertaValidade[itemIndex].dias = dias;
			alertaValidade[itemIndex].tipo = dias <= 15 ? "critico" : "alerta";
		}

		renderizarAlertasValidade(alertaValidade);
	}
}
