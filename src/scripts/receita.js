document.addEventListener("DOMContentLoaded", function () {
	const form = document.forms["gerarReceita"];
	if (!form) return;

	const msg = document.getElementById("receita-msg");
	const preview = document.querySelector(".doc-preview");
	const gerarBtn = form.querySelector(".prescription-btn");
	const imprimirBtn = document.querySelector(".prescription-print-btn");
	const typeBtns = document.querySelectorAll(".type-btn");

	// Campos obrigatórios da receita
	const camposObrigatorios = [
		"nome-medico",
		"crm",
		"medico-especialidade",
		"nome-paciente",
		"data-nascimento",
		"med-nome",
		"med-quantidade",
		"med-dosagem",
		"med-posologia",
		"med-duracao",
		"med-data",
	];

	// Remove o destaque de erro assim que o usuário começa a preencher
	camposObrigatorios.forEach(function (nome) {
		const campo = form.elements[nome];
		if (!campo) return;
		const evento = campo.tagName === "SELECT" ? "change" : "input";
		campo.addEventListener(evento, function () {
			if (campo.value.trim() !== "") {
				campo.classList.remove("campo-erro");
			}
		});
	});

	// Converte yyyy-mm-dd em dd/mm/aaaa
	function formatarData(valor) {
		if (!valor) return "";
		const partes = valor.split("-");
		if (partes.length !== 3) return valor;
		return partes[2] + "/" + partes[1] + "/" + partes[0];
	}

	// Atualiza um span da preview apenas se ele existir
	function setTexto(seletor, texto) {
		const el = preview ? preview.querySelector(seletor) : null;
		if (el) el.textContent = texto;
	}

	function definirMensagem(texto, tipo) {
		if (!msg) return;
		msg.textContent = texto;
		msg.classList.remove("msg-erro", "msg-sucesso");
		if (tipo) msg.classList.add(tipo);
	}

	if (gerarBtn) {
		gerarBtn.addEventListener("click", function () {
			let primeiroInvalido = null;

			camposObrigatorios.forEach(function (nome) {
				const campo = form.elements[nome];
				if (!campo) return;
				if (campo.value.trim() === "") {
					campo.classList.add("campo-erro");
					if (!primeiroInvalido) primeiroInvalido = campo;
				} else {
					campo.classList.remove("campo-erro");
				}
			});

			if (primeiroInvalido) {
				definirMensagem(
					"Preencha os campos obrigatórios destacados.",
					"msg-erro"
				);
				primeiroInvalido.scrollIntoView({
					behavior: "smooth",
					block: "center",
				});
				primeiroInvalido.focus();
				return;
			}

			// Tudo válido: atualiza a pré-visualização
			const nomeMedico = form.elements["nome-medico"].value.trim();
			const crm = form.elements["crm"].value.trim();
			const espSelect = form.elements["medico-especialidade"];
			const especialidade =
				espSelect.options[espSelect.selectedIndex].text;
			const nomePaciente = form.elements["nome-paciente"].value.trim();
			const dataNasc = formatarData(form.elements["data-nascimento"].value);
			const medNome =
				form.elements["med-nome"].value.trim() ||
				form.elements["med-nome"].options[
					form.elements["med-nome"].selectedIndex
				].text;
			const quantidade = form.elements["med-quantidade"].value.trim();
			const dosagem = form.elements["med-dosagem"].value.trim();
			const posologia = form.elements["med-posologia"].value.trim();
			const duracao = form.elements["med-duracao"].value.trim();
			const dataPresc = formatarData(form.elements["med-data"].value);

			setTexto(".doc-nome-medico", nomeMedico);
			setTexto(".doc-sub-medico", especialidade + " · " + crm);
			setTexto(".preview-nome-paciente", nomePaciente);
			setTexto(".preview-sub-paciente", "Nascimento: " + dataNasc);
			setTexto(".preview-nome-medicamento", medNome);
			setTexto(
				".preview-sub-medicamento",
				quantidade + " · " + dosagem
			);
			setTexto(".preview-desc-posologia", posologia);
			setTexto(".preview-duracao", duracao);
			setTexto(".preview-data", dataPresc);

			definirMensagem("Receita gerada com sucesso.", "msg-sucesso");

			// Destaque rápido no card de preview
			if (preview) {
				preview.classList.remove("preview-destaque");
				void preview.offsetWidth; // reinicia a animação
				preview.classList.add("preview-destaque");
			}
		});
	}

	if (imprimirBtn) {
		imprimirBtn.addEventListener("click", function () {
			window.print();
		});
	}

	// Alterna o tipo de receita ativo (apenas visual)
	typeBtns.forEach(function (btn) {
		btn.addEventListener("click", function () {
			typeBtns.forEach(function (b) {
				b.classList.remove("ativo-simples");
			});
			btn.classList.add("ativo-simples");
		});
	});
});
