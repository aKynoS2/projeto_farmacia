// ==========================================
// VALIDAÇÃO DO FORMULÁRIO DE RECEITA
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
	const btnGerarReceita = document.querySelector(".prescription-btn");
	const formReceita = document.querySelector(".prescription-card");

	// Campos obrigatórios
	const camposObrigatorios = {
		"nome-medico": "Nome do médico",
		crm: "CRM",
		"medico-especialidade": "Especialidade",
		"nome-paciente": "Nome do paciente",
		"data-nascimento": "Data de nascimento",
		"med-nome": "Medicamento",
		"med-quantidade": "Quantidade",
		"med-dosagem": "Dosagem",
		"med-posologia": "Posologia",
		"med-duracao": "Duração do tratamento",
		"med-data": "Data da prescrição",
	};

	btnGerarReceita.addEventListener("click", function (e) {
		e.preventDefault();

		// Limpar erros anteriores
		limparErros();

		// Validar campos
		let erros = [];
		let temErro = false;

		for (let fieldId in camposObrigatorios) {
			const campo = document.getElementById(fieldId);
			if (!campo) continue;

			const valor = campo.value.trim();

			if (!valor) {
				erros.push(camposObrigatorios[fieldId]);
				marcarErro(campo);
				temErro = true;
			}
		}

		// Se tem erro, exibir mensagem
		if (temErro) {
			exibirErros(erros);
			console.warn(
				"❌ Receita não pode ser gerada. Campos obrigatórios faltando.",
			);
			return false;
		}

		// Se passou na validação
		console.log("✅ Validação passou! Gerando receita...");
		confirmarGeracaoReceita();
	});

	// Função para marcar campo com erro
	function marcarErro(campo) {
		campo.style.borderColor = "#e74c3c";
		campo.style.backgroundColor = "#fadbd8";
		campo.addEventListener(
			"focus",
			function () {
				campo.style.borderColor = "";
				campo.style.backgroundColor = "";
			},
			{ once: true },
		);
	}

	// Função para exibir lista de erros
	function exibirErros(erros) {
		const container =
			document.querySelector(".prescription-form") ||
			document.querySelector(".prescription-col:first-child");

		const alertaDiv = document.createElement("div");
		alertaDiv.className = "prescription-erro-alert";
		alertaDiv.style.cssText = `
			background-color: #fadbd8;
			border: 2px solid #e74c3c;
			border-radius: 8px;
			padding: 16px;
			margin-bottom: 16px;
			color: #c0392b;
			font-weight: 500;
		`;

		let mensagem =
			'<strong>⚠️ Campos obrigatórios não preenchidos:</strong><ul style="margin-top: 8px; margin-left: 20px;">';
		erros.forEach((erro) => {
			mensagem += `<li>${erro}</li>`;
		});
		mensagem += "</ul>";

		alertaDiv.innerHTML = mensagem;

		// Inserir no topo do formulário
		const prescricaoCard = document.querySelector(".prescription-card");
		if (prescricaoCard) {
			prescricaoCard.parentNode.insertBefore(alertaDiv, prescricaoCard);
		}

		// Auto-remover depois de 5 segundos
		setTimeout(() => {
			alertaDiv.remove();
		}, 5000);
	}

	// Função para limpar erros
	function limparErros() {
		const alertas = document.querySelectorAll(".prescription-erro-alert");
		alertas.forEach((alerta) => alerta.remove());
	}

	// Função de confirmação
	function confirmarGeracaoReceita() {
		// Coletar dados do formulário
		const dadosMedico = {
			nome: document.getElementById("nome-medico").value,
			crm: document.getElementById("crm").value,
			especialidade: document.getElementById("medico-especialidade").value,
		};

		const dadosPaciente = {
			nome: document.getElementById("nome-paciente").value,
			nascimento: formatarData(
				document.getElementById("data-nascimento").value,
			),
		};

		const dadosReceita = {
			medicamento: document.getElementById("med-nome").value,
			quantidade: document.getElementById("med-quantidade").value,
			dosagem: document.getElementById("med-dosagem").value,
			posologia: document.getElementById("med-posologia").value,
			duracao: document.getElementById("med-duracao").value,
			data: formatarData(document.getElementById("med-data").value),
		};

		// Atualizar pré-visualização
		atualizarPreview(dadosMedico, dadosPaciente, dadosReceita);

		// Exibir confirmação
		const confirmacao = document.createElement("div");
		confirmacao.className = "prescription-confirmacao";
		confirmacao.style.cssText = `
			background-color: #d5f4e6;
			border: 2px solid #27ae60;
			border-radius: 8px;
			padding: 16px;
			margin-top: 16px;
			color: #27ae60;
			font-weight: 500;
			text-align: center;
		`;

		confirmacao.innerHTML = `
			<strong>✅ Receita gerada com sucesso!</strong><br>
			<small style="color: #1e8449;">Para paciente: <strong>${dadosPaciente.nome}</strong> | Medicamento: <strong>${dadosReceita.medicamento}</strong></small>
		`;

		// Inserir confirmação perto do botão
		const botao = document.querySelector(".prescription-btn");
		botao.parentNode.insertBefore(confirmacao, botao.nextSibling);

		// Adicionar à lista de histórico
		adicionarAoHistorico(
			dadosPaciente.nome,
			dadosReceita.medicamento,
			obterTipoReceita(),
		);

		// Auto-remover confirmação
		setTimeout(() => {
			confirmacao.remove();
		}, 4000);
	}

	// Função para atualizar preview
	function atualizarPreview(medico, paciente, receita) {
		document.querySelector(".doc-nome-medico").textContent = medico.nome;
		document.querySelector(".doc-sub-medico").textContent =
			`${medico.especialidade} · CRM/${medico.crm}`;
		document.querySelector(".preview-nome-paciente").textContent =
			paciente.nome;
		document.querySelector(".preview-sub-paciente").textContent =
			`Nascimento: ${paciente.nascimento}`;
		document.querySelector(".preview-nome-medicamento").textContent =
			receita.medicamento;
		document.querySelector(".preview-sub-medicamento").textContent =
			`${receita.quantidade} unidades · ${receita.dosagem}`;
		document.querySelector(".preview-desc-posologia").textContent =
			receita.posologia;
		document.querySelector(".preview-duracao").textContent = receita.duracao;
		document.querySelector(".preview-data").textContent = receita.data;
	}

	// Função para obter tipo de receita (baseado no botão ativo)
	function obterTipoReceita() {
		const botaoAtivo = document.querySelector(".type-btn.ativo-simples");
		if (botaoAtivo) {
			const badge = botaoAtivo.querySelector(".prescription-category");
			return badge ? badge.textContent : "Simples";
		}
		return "Simples";
	}

	// Função para adicionar ao histórico
	function adicionarAoHistorico(nomePaciente, medicamento, tipoReceita) {
		const histLista = document.querySelector(".hist-list");
		if (!histLista) return;

		const hora = new Date().toLocaleTimeString("pt-BR", {
			hour: "2-digit",
			minute: "2-digit",
		});

		const novoItem = document.createElement("li");
		novoItem.className = "hist-item";
		novoItem.innerHTML = `
			<span class="hist-nome">${nomePaciente}</span>
			<span class="hist-med">${medicamento} · ${tipoReceita}</span>
			<span class="hist-hora">${hora}</span>
		`;

		// Inserir no topo do histórico (mais recente primeiro)
		histLista.insertBefore(novoItem, histLista.firstChild);

		// Animar entrada
		novoItem.style.opacity = "0";
		novoItem.style.transform = "translateY(-10px)";
		setTimeout(() => {
			novoItem.style.transition = "all 0.3s ease";
			novoItem.style.opacity = "1";
			novoItem.style.transform = "translateY(0)";
		}, 10);
	}

	// Função para formatar data
	function formatarData(dataISO) {
		if (!dataISO) return "";
		const [ano, mes, dia] = dataISO.split("-");
		return `${dia}/${mes}/${ano}`;
	}

	// Validação em tempo real ao mudar tipo de receita
	const typeButtons = document.querySelectorAll(".type-btn");
	typeButtons.forEach((btn) => {
		btn.addEventListener("click", function () {
			document.querySelectorAll(".type-btn").forEach((b) => {
				b.classList.remove("ativo-simples");
			});
			this.classList.add("ativo-simples");
		});
	});
});
