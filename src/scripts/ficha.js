// Ficha do medicamento: carrega dados conforme ?id= da URL.
document.addEventListener("DOMContentLoaded", () => {
	const idParam = new URLSearchParams(location.search).get("id");
	// Fallback seguro: id inválido/vazio cai no primeiro medicamento.
	const med = medById(idParam) || MEDS[0];
	if (!med) return;

	const set = (id, valor) => {
		const el = document.getElementById(id);
		if (el) el.textContent = valor;
	};

	set("ficha-nome", med.nome);
	set("ficha-badge", "Disponível");
	set("ficha-categoria", med.categoriaLabel);
	set("ficha-dosagem", med.dosagem);
	set("ficha-fabricante", med.fabricante);
	set("ficha-preco", brl(med.preco));

	// Campos derivados (não existem em MEDS): mantidos genéricos e seguros.
	const tarja = med.receita
		? "Tarja vermelha — venda sob prescrição"
		: "Medicamento isento de prescrição (MIP)";
	set("ficha-tarja", tarja);
	set("ficha-posologia", "Conforme orientação do farmacêutico ou prescrição médica.");
	set("ficha-indicacoes", med.descricao);
	set(
		"ficha-contraindicacoes",
		"Hipersensibilidade ao princípio ativo. Consulte a bula."
	);
	set("ficha-descricao", med.ficha);

	document.title = `FarmaSys - ${med.nome}`;

	// Botão adicionar ao carrinho com feedback visual.
	const botao = document.getElementById("ficha-add");
	if (botao) {
		botao.addEventListener("click", () => {
			addToCart(med.id);
			const texto = botao.querySelector("span");
			if (texto) {
				const original = texto.textContent;
				texto.textContent = "Adicionado!";
				botao.disabled = true;
				setTimeout(() => {
					texto.textContent = original;
					botao.disabled = false;
				}, 1500);
			}
		});
	}
});
