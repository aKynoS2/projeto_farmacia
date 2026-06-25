// Catálogo dinâmico: renderiza cards de MEDS, busca e filtros por categoria.

// Mapeia o texto do chip de filtro para o valor de data-categoria.
const FILTRO_PARA_CATEGORIA = {
	Todos: "todos",
	Analgésicos: "analgesico",
	"Anti-inflamatórios": "anti-inflamatorio",
	Gastrointestinal: "gastro",
	Cardiovascular: "cardiovascular",
	Alergia: "alergia",
	Antibióticos: "antibiotico",
};

function criarCard(med) {
	const article = document.createElement("article");
	article.className = "product-card card-produto";
	article.dataset.categoria = med.categoria;
	article.dataset.nome = [med.nome, med.categoriaLabel, med.fabricante]
		.join(" ")
		.toLowerCase();

	const badge = document.createElement("span");
	badge.className = "card-categoria-badge";
	badge.textContent = med.categoriaLabel;

	const icone = document.createElement("span");
	icone.className = "card-icone";
	icone.setAttribute("role", "img");
	icone.setAttribute("aria-label", `Ilustração de ${med.categoriaLabel}`);
	icone.innerHTML = svgCategoria(med.categoria);

	const titulo = document.createElement("h2");
	titulo.textContent = med.nome;

	const descricao = document.createElement("p");
	descricao.textContent = med.descricao;

	const preco = document.createElement("p");
	preco.className = "card-preco";
	preco.textContent = brl(med.preco);

	const acoes = document.createElement("div");
	acoes.className = "card-acoes";

	const verDetalhes = document.createElement("a");
	verDetalhes.href = `ficha.html?id=${encodeURIComponent(med.id)}`;
	verDetalhes.className = "btn btn-secondary";
	verDetalhes.textContent = "Ver detalhes";

	const adicionar = document.createElement("button");
	adicionar.type = "button";
	adicionar.className = "btn btn-primary btn-carrinho";
	adicionar.textContent = "Adicionar";
	adicionar.addEventListener("click", () => {
		addToCart(med.id);
		const textoOriginal = "Adicionar";
		adicionar.textContent = "Adicionado ✓";
		adicionar.disabled = true;
		setTimeout(() => {
			adicionar.textContent = textoOriginal;
			adicionar.disabled = false;
		}, 1000);
	});

	acoes.append(verDetalhes, adicionar);
	article.append(icone, badge, titulo, descricao, preco, acoes);
	return article;
}

function renderizarCatalogo() {
	const grid = document.getElementById("catalogo-grid");
	if (!grid) return;
	grid.innerHTML = "";
	MEDS.forEach((med) => grid.appendChild(criarCard(med)));

	atualizarContador();
}

// Conta cards visíveis e atualiza o subtítulo + estado "catálogo vazio".
function atualizarContador() {
	const cards = document.querySelectorAll("#catalogo-grid .card-produto");
	const visiveis = Array.from(cards).filter((c) => !c.classList.contains("hidden")).length;
	const contador = document.getElementById("contador-produtos");
	if (contador) {
		contador.textContent = `${visiveis} produto${
			visiveis !== 1 ? "s" : ""
		} disponível${visiveis !== 1 ? "s" : ""}`;
	}
	const vazio = document.getElementById("catalogo-vazio");
	if (vazio) vazio.hidden = visiveis > 0;
	// Botão limpar só aparece quando há termo digitado.
	const limpar = document.getElementById("btn-limpar");
	if (limpar) limpar.hidden = !termoBusca;
}

// Estado atual de busca + filtro, aplicados juntos.
let termoBusca = "";
let categoriaAtiva = "todos";

function aplicarFiltros() {
	const cards = document.querySelectorAll("#catalogo-grid .card-produto");
	cards.forEach((card) => {
		const baseNome = card.dataset.nome || "";
		const baseCategoria = card.dataset.categoria || "";
		const casaBusca = !termoBusca || baseNome.includes(termoBusca);
		const casaCategoria =
			categoriaAtiva === "todos" || baseCategoria === categoriaAtiva;
		card.classList.toggle("hidden", !(casaBusca && casaCategoria));
	});
	atualizarContador();
}

function configurarLimparBusca() {
	const limpar = document.getElementById("btn-limpar");
	const input = document.getElementById("catalogo-busca");
	if (!limpar || !input) return;
	limpar.addEventListener("click", () => {
		input.value = "";
		termoBusca = "";
		aplicarFiltros();
		input.focus();
	});
}

function configurarBusca() {
	const input = document.getElementById("catalogo-busca");
	if (!input) return;
	input.addEventListener("input", () => {
		termoBusca = input.value.trim().toLowerCase();
		aplicarFiltros();
	});
}

function configurarFiltros() {
	const chips = document.querySelectorAll(".filtro-chip");
	chips.forEach((chip) => {
		chip.addEventListener("click", () => {
			chips.forEach((c) => c.classList.remove("ativo"));
			chip.classList.add("ativo");
			const label = chip.textContent.trim();
			categoriaAtiva = FILTRO_PARA_CATEGORIA[label] || "todos";
			aplicarFiltros();
		});
	});
}

document.addEventListener("DOMContentLoaded", () => {
	renderizarCatalogo();
	configurarBusca();
	configurarFiltros();
	configurarLimparBusca();
});
