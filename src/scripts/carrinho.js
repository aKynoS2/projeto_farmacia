// Carrinho dinâmico: lê o carrinho do localStorage (via data.js) e renderiza.
document.addEventListener("DOMContentLoaded", () => {
	const select = document.getElementById("produto");
	const tbody = document.getElementById("cart-tbody");
	const elSubtotal = document.getElementById("subtotal");
	const elDesconto = document.getElementById("desconto");
	const elItens = document.getElementById("total-itens");
	const elTotal = document.getElementById("total-geral");
	const elReceiptTotal = document.getElementById("receipt-total");

	const formAdd = document.forms["adicionarCarrinho"];
	const btnAdd = formAdd.querySelector('button[type="button"]');
	const erroAdd = document.getElementById("erro-adicionar");

	const formVenda = document.forms["fechamentoVenda"];
	const btnVenda = formVenda.querySelector('button[type="button"]');
	const avisoVenda = document.getElementById("aviso-venda");
	const receipt = document.querySelector(".receipt-preview");
	const checkboxReceita = formAdd.elements["receitaConferida"];

	// Popular o select com os medicamentos do catálogo.
	function popularSelect() {
		MEDS.forEach((m) => {
			const opt = document.createElement("option");
			opt.value = m.id;
			opt.textContent =
				m.nome + " - " + brl(m.preco) + (m.receita ? " - exige receita" : "");
			select.appendChild(opt);
		});
	}

	// Monta a tabela e recalcula os totais.
	function renderCart() {
		const cart = getCart();
		tbody.replaceChildren();

		if (cart.length === 0) {
			const tr = document.createElement("tr");
			const td = document.createElement("td");
			td.colSpan = 7;
			td.className = "cart-empty";
			td.textContent = "Carrinho vazio. Adicione produtos pelo catálogo.";
			tr.appendChild(td);
			tbody.appendChild(tr);
			atualizarTotais(0, 0);
			return;
		}

		let subtotal = 0;
		let itens = 0;

		cart.forEach(({ id, qtd }) => {
			const med = medById(id);
			if (!med) return;
			const linhaSubtotal = med.preco * qtd;
			subtotal += linhaSubtotal;
			itens += qtd;

			const tr = document.createElement("tr");

			// Medicamento (nome + descrição)
			const tdNome = document.createElement("td");
			const strong = document.createElement("strong");
			strong.textContent = med.nome;
			const span = document.createElement("span");
			span.textContent = med.descricao;
			tdNome.append(strong, span);

			// Tipo
			const tdTipo = document.createElement("td");
			tdTipo.textContent = med.receita ? "Tarja vermelha" : "Comum";

			// Quantidade
			const tdQtd = document.createElement("td");
			tdQtd.textContent = qtd;

			// Valor unitário
			const tdUnit = document.createElement("td");
			tdUnit.textContent = brl(med.preco);

			// Subtotal
			const tdSub = document.createElement("td");
			tdSub.textContent = brl(linhaSubtotal);

			// Receita
			const tdReceita = document.createElement("td");
			const pill = document.createElement("span");
			if (med.receita) {
				pill.className = "status-pill status-warning";
				pill.textContent = "Conferir";
			} else {
				pill.className = "status-pill status-ok";
				pill.textContent = "Não exige";
			}
			tdReceita.appendChild(pill);

			// Ação (remover)
			const tdAcao = document.createElement("td");
			const btn = document.createElement("button");
			btn.className = "icon-button";
			btn.type = "button";
			btn.setAttribute("aria-label", "Remover " + med.nome);
			const icon = document.createElement("i");
			icon.className = "fa-solid fa-trash";
			icon.setAttribute("aria-hidden", "true");
			btn.appendChild(icon);
			btn.addEventListener("click", () => {
				removeFromCart(id);
				renderCart();
			});
			tdAcao.appendChild(btn);

			tr.append(tdNome, tdTipo, tdQtd, tdUnit, tdSub, tdReceita, tdAcao);
			tbody.appendChild(tr);
		});

		atualizarTotais(subtotal, itens);
	}

	function atualizarTotais(subtotal, itens) {
		const desconto = 0;
		const total = subtotal - desconto;
		elSubtotal.textContent = brl(subtotal);
		elDesconto.textContent = brl(desconto);
		elItens.textContent = itens;
		elTotal.textContent = brl(total);
		elReceiptTotal.textContent = brl(total);
	}

	// Adicionar produto pelo formulário.
	btnAdd.addEventListener("click", () => {
		erroAdd.textContent = "";
		const id = select.value;
		if (!id) {
			erroAdd.textContent = "Selecione um medicamento para adicionar.";
			return;
		}
		const qtd = Math.max(1, parseInt(document.getElementById("qtdVenda").value, 10) || 1);
		addToCart(id, qtd);
		renderCart();
	});

	// Gerar comprovante: bloqueia se houver item com receita não conferida.
	btnVenda.addEventListener("click", () => {
		avisoVenda.textContent = "";
		avisoVenda.classList.remove("aviso-ok");
		const cart = getCart();
		if (cart.length === 0) {
			avisoVenda.textContent = "Carrinho vazio. Adicione produtos pelo catálogo.";
			return;
		}
		const exigeReceita = cart.some((i) => {
			const med = medById(i.id);
			return med && med.receita;
		});
		if (exigeReceita && !checkboxReceita.checked) {
			avisoVenda.textContent =
				"Há medicamentos que exigem receita. Confirme a conferência da receita.";
			return;
		}
		avisoVenda.textContent = "Venda registrada.";
		avisoVenda.classList.add("aviso-ok");
		receipt.classList.add("receipt-confirmed");
	});

	popularSelect();
	renderCart();
	atualizarBadgeCarrinho();
});
