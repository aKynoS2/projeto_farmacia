// Controle de estoque interativo via DOM (sem backend).
document.addEventListener("DOMContentLoaded", () => {
	const form = document.forms["movimentoEstoque"];
	if (!form) return;

	const tbody = document.getElementById("estoque-tbody");
	const btnRegistrar = document.getElementById("btn-registrar");
	const erroEl = document.getElementById("estoque-erro");
	const statusEl = document.getElementById("estoque-status");
	const metricBaixo = document.getElementById("metric-baixo");
	const selectMed = form.elements["medicamento"];

	const MINIMO_PADRAO = 10;

	function mostrarErro(msg) {
		erroEl.textContent = msg;
		erroEl.hidden = false;
		statusEl.textContent = "";
	}

	function limparErro() {
		erroEl.textContent = "";
		erroEl.hidden = true;
	}

	function mostrarStatus(msg) {
		limparErro();
		statusEl.textContent = msg;
	}

	// Encontra a linha cujo data-nome contém o termo (case-insensitive).
	function encontrarLinha(termo) {
		const alvo = termo.trim().toLowerCase();
		if (!alvo) return null;
		const linhas = tbody.querySelectorAll("tr");
		for (const tr of linhas) {
			const nome = (tr.dataset.nome || "").toLowerCase();
			if (nome.includes(alvo) || alvo.includes(nome.split(" ")[0])) {
				return tr;
			}
		}
		return null;
	}

	// Atualiza qtd, situação e destaque de uma linha a partir do data-qtd/data-min.
	function atualizarLinha(tr) {
		const qtd = Number(tr.dataset.qtd);
		const min = Number(tr.dataset.min);
		const celQtd = tr.querySelector(".cel-qtd");
		const celSit = tr.querySelector(".cel-situacao");
		if (celQtd) celQtd.textContent = String(qtd);

		if (qtd < min) {
			tr.classList.add("linha-baixa");
			if (celSit)
				celSit.innerHTML =
					'<span class="status-pill status-warning">Reposição</span>';
		} else {
			tr.classList.remove("linha-baixa");
			if (celSit)
				celSit.innerHTML =
					'<span class="status-pill status-ok">Normal</span>';
		}
	}

	// Cria uma nova linha (entrada de medicamento ainda não listado).
	function criarLinha(nome, qtd, validade) {
		const tr = document.createElement("tr");
		tr.dataset.nome = nome;
		tr.dataset.qtd = String(qtd);
		tr.dataset.min = String(MINIMO_PADRAO);

		const celulas = [
			nome,
			"—",
			"—",
			validade || "—",
			"", // qtd
			String(MINIMO_PADRAO),
			"Não",
			"", // situação
		];
		celulas.forEach((conteudo, i) => {
			const td = document.createElement("td");
			if (i === 4) td.className = "cel-qtd";
			else if (i === 5) td.className = "cel-min";
			else if (i === 7) td.className = "cel-situacao";
			td.textContent = conteudo;
			tr.appendChild(td);
		});
		tbody.appendChild(tr);
		atualizarLinha(tr);
		return tr;
	}

	// Recalcula o card "Estoque baixo".
	function atualizarMetricaBaixo() {
		if (!metricBaixo) return;
		const baixas = tbody.querySelectorAll("tr.linha-baixa").length;
		metricBaixo.textContent = String(baixas);
	}

	btnRegistrar.addEventListener("click", () => {
		const nomeTexto =
			selectMed.options[selectMed.selectedIndex]?.text || "";
		const valor = selectMed.value;
		const qtd = parseInt(form.elements["quantidade"].value, 10);
		const tipo = form.elements["tipoMovimento"].value;
		const validade = form.elements["validade"].value;

		if (!valor) {
			mostrarErro("Selecione um medicamento.");
			return;
		}
		if (!Number.isInteger(qtd) || qtd < 1) {
			mostrarErro("Informe uma quantidade válida (mínimo 1).");
			return;
		}

		let tr = encontrarLinha(valor) || encontrarLinha(nomeTexto);

		if (!tr) {
			if (tipo === "saida") {
				mostrarErro(
					`Não há estoque de ${nomeTexto} para registrar saída.`
				);
				return;
			}
			tr = criarLinha(nomeTexto, qtd, validade);
			atualizarMetricaBaixo();
			mostrarStatus(
				`Entrada de ${qtd} un. de ${nomeTexto} registrada (novo item).`
			);
			resetSuave();
			return;
		}

		const atual = Number(tr.dataset.qtd);

		if (tipo === "saida") {
			if (qtd > atual) {
				mostrarErro(
					`Estoque insuficiente: há apenas ${atual} un. de ${nomeTexto}.`
				);
				return;
			}
			tr.dataset.qtd = String(atual - qtd);
		} else {
			tr.dataset.qtd = String(atual + qtd);
		}

		atualizarLinha(tr);
		atualizarMetricaBaixo();

		const acao = tipo === "saida" ? "Saída" : "Entrada";
		mostrarStatus(`${acao} de ${qtd} un. de ${nomeTexto} registrada.`);
		resetSuave();
	});

	// Reset suave: zera observações e volta quantidade para 1, mantém o resto.
	function resetSuave() {
		form.elements["quantidade"].value = "1";
		form.elements["observacoes"].value = "";
	}

	// Estado inicial das métricas coerente com a tabela.
	atualizarMetricaBaixo();
});
