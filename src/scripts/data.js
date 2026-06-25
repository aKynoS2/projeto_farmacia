// Fonte única de dados + carrinho compartilhado (localStorage).
// ponytail: localStorage é o "banco". Sem backend, é o que o projeto pede.

const MEDS = [
	{ id: "paracetamol", nome: "Paracetamol 500mg", categoria: "analgesico", categoriaLabel: "Analgésico", descricao: "Analgésico e antitérmico", fabricante: "FarmaGen", dosagem: "500mg por comprimido", preco: 12.9, receita: false, ficha: "Utilizado para alívio de dores e febre.", posologia: "Adultos e crianças acima de 12 anos: 1 comprimido (500mg) a cada 4-6 horas. Não exceder 4 comprimidos (2000mg) em 24 horas.", contraindicacoes: "Hipersensibilidade ao paracetamol. Insuficiência hepática grave. Pacientes com doença hepática ativa.", estoque: 45 },
	{ id: "ibuprofeno", nome: "Ibuprofeno 400mg", categoria: "anti-inflamatorio", categoriaLabel: "Anti-inflamatório", descricao: "Anti-inflamatório e analgésico", fabricante: "Neo Química", dosagem: "400mg por comprimido", preco: 18.5, receita: false, ficha: "Reduz inflamação, dor e febre.", posologia: "Adultos: 1 comprimido (400mg) a cada 6-8 horas. Dose máxima diária: 1200mg (3 comprimidos). Tomar preferencialmente após as refeições.", contraindicacoes: "Hipersensibilidade ao ibuprofeno. Úlcera péptica ativa. Insuficiência renal grave. Último trimestre de gestação. Asmáticos sensíveis a AINEs.", estoque: 32 },
	{ id: "amoxicilina", nome: "Amoxicilina 500mg", categoria: "antibiotico", categoriaLabel: "Antibiótico", descricao: "Antibiótico de amplo espectro", fabricante: "Eurofarma", dosagem: "500mg por cápsula", preco: 25.0, receita: true, ficha: "Antibiótico para infecções bacterianas. Venda sob prescrição.", posologia: "Adultos: 1 cápsula (500mg) a cada 8 horas. Dose máxima: 1500mg/dia. Duração do tratamento: 7-10 dias conforme prescrição médica.", contraindicacoes: "Hipersensibilidade a penicilinas e cefalosporinas. Pacientes com mononucleose infecciosa.", estoque: 28 },
	{ id: "dipirona", nome: "Dipirona 500mg", categoria: "analgesico", categoriaLabel: "Analgésico", descricao: "Analgésico e antitérmico", fabricante: "Sanofi", dosagem: "500mg por comprimido", preco: 9.8, receita: false, ficha: "Alívio de dor e febre.", posologia: "Adultos e adolescentes acima de 15 anos: 1 comprimido (500mg) a cada 4-6 horas. Dose máxima: 3 comprimidos/dia.", contraindicacoes: "Hipersensibilidade à dipirona. Agranulocitose. Deficiência de glicose-6-fosfato desidrogenase. Porfiria hepática. Gestação e lactação.", estoque: 60 },
	{ id: "omeprazol", nome: "Omeprazol 20mg", categoria: "gastro", categoriaLabel: "Gastrointestinal", descricao: "Inibidor de bomba de prótons", fabricante: "Aché", dosagem: "20mg por cápsula", preco: 22.4, receita: false, ficha: "Trata úlcera e refluxo gástrico.", posologia: "Adultos: 1 cápsula (20mg) ao dia, em jejum, preferencialmente pela manhã. Tratamento contínuo para refluxo: 20mg/dia por 4-8 semanas.", contraindicacoes: "Hipersensibilidade ao omeprazol. Uso concomitante com nelfinavir, atazanavir, metotrexato em altas doses.", estoque: 40 },
	{ id: "losartana", nome: "Losartana 50mg", categoria: "cardiovascular", categoriaLabel: "Cardiovascular", descricao: "Anti-hipertensivo", fabricante: "Medley", dosagem: "50mg por comprimido", preco: 31.0, receita: true, ficha: "Controle da hipertensão arterial. Venda sob prescrição.", posologia: "Adultos: 1 comprimido (50mg) uma vez ao dia. Dose pode ser ajustada para 100mg/dia se necessário. Monitorar pressão arterial regularmente.", contraindicacoes: "Hipersensibilidade à losartana. Gestação (2º e 3º trimestres). Estenose de artéria renal bilateral.", estoque: 25 },
	{ id: "loratadina", nome: "Loratadina 10mg", categoria: "alergia", categoriaLabel: "Alergia", descricao: "Antialérgico não sedativo", fabricante: "Neo Química", dosagem: "10mg por comprimido", preco: 14.9, receita: false, ficha: "Alívio de sintomas de alergia e rinite.", posologia: "Adultos e crianças acima de 12 anos: 1 comprimido (10mg) uma vez ao dia. Não mastigar. Engolir inteiro com água.", contraindicacoes: "Hipersensibilidade à loratadina. Insuficiência hepática grave. Crianças menores de 2 anos.", estoque: 55 },
	{ id: "azitromicina", nome: "Azitromicina 500mg", categoria: "antibiotico", categoriaLabel: "Antibiótico", descricao: "Antibiótico macrolídeo", fabricante: "Eurofarma", dosagem: "500mg por comprimido", preco: 38.0, receita: true, ficha: "Antibiótico para infecções respiratórias. Venda sob prescrição.", posologia: "Adultos: 1 comprimido (500mg) uma vez ao dia por 3 dias consecutivos. Dose total do tratamento: 1500mg.", contraindicacoes: "Hipersensibilidade a macrolídeos. Insuficiência hepática grave. Pacientes com histórico de icterícia colestática.", estoque: 15 },
	{ id: "atorvastatina", nome: "Atorvastatina 20mg", categoria: "cardiovascular", categoriaLabel: "Cardiovascular", descricao: "Redutor de colesterol", fabricante: "Pfizer", dosagem: "20mg por comprimido", preco: 27.5, receita: true, ficha: "Reduz o colesterol. Venda sob prescrição.", posologia: "Adultos: 1 comprimido (20mg) uma vez ao dia, a qualquer hora, com ou sem alimentos. Dose pode ser ajustada a cada 2-4 semanas.", contraindicacoes: "Hipersensibilidade à atorvastatina. Doença hepática ativa. Gestação e lactação. Uso concomitante com inibidores potentes da CYP3A4.", estoque: 22 },
	{ id: "dexametasona", nome: "Dexametasona 4mg", categoria: "anti-inflamatorio", categoriaLabel: "Anti-inflamatório", descricao: "Corticoide anti-inflamatório", fabricante: "Sanofi", dosagem: "4mg por comprimido", preco: 16.7, receita: true, ficha: "Corticoide anti-inflamatório. Venda sob prescrição.", posologia: "Adultos: Dose varia conforme a patologia (0,5 a 10mg/dia). Usar a menor dose eficaz pelo menor período possível. Desmame gradual obrigatório.", contraindicacoes: "Infecções sistêmicas não controladas. Hipersensibilidade ao corticosteroide. Úlcera péptica ativa. Psicose corticosteroide.", estoque: 30 },
	{ id: "metoclopramida", nome: "Metoclopramida 10mg", categoria: "gastro", categoriaLabel: "Gastrointestinal", descricao: "Antiemético e procinético", fabricante: "Medley", dosagem: "10mg por comprimido", preco: 11.2, receita: false, ficha: "Alívio de enjoo e náusea.", posologia: "Adultos: 1 comprimido (10mg) 3 vezes ao dia, 15-30 minutos antes das refeições. Tratamento máximo: 5 dias consecutivos.", contraindicacoes: "Hipersensibilidade à metoclopramida. Hemorragia gastrointestinal. Obstrução intestinal. Epilepsia. Parkinson. Crianças menores de 1 ano.", estoque: 38 },
	{ id: "cetirizina", nome: "Cetirizina 10mg", categoria: "alergia", categoriaLabel: "Alergia", descricao: "Antialérgico de segunda geração", fabricante: "Neo Química", dosagem: "10mg por comprimido", preco: 19.9, receita: false, ficha: "Antialérgico para rinite e urticária.", posologia: "Adultos e crianças acima de 12 anos: 1 comprimido (10mg) uma vez ao dia. Preferencialmente à noite para evitar sonolência diurna.", contraindicacoes: "Hipersensibilidade à cetirizina ou à hidroxizina. Insuficiência renal grave (Clearance < 10 mL/min).", estoque: 50 },
];

const medById = (id) => MEDS.find((m) => m.id === id);
const brl = (v) => "R$ " + v.toFixed(2).replace(".", ",");

// Ícone por categoria: a forma farmacêutica real do produto, cada uma com sua
// cor. Substitui imagens de embalagem fictícias por um símbolo distinto e
// reconhecível, reaproveitado no card do catálogo e no cabeçalho da ficha.
const CAT_ICONES = {
	analgesico: {
		// Comprimido redondo com sulco
		cor: "#2ecc71",
		formas:
			'<circle cx="24" cy="24" r="14" fill="C" fill-opacity=".15"/><circle cx="24" cy="24" r="14" fill="none" stroke="C" stroke-width="2.5"/><line x1="24" y1="10" x2="24" y2="38" stroke="C" stroke-width="2.5"/>',
	},
	"anti-inflamatorio": {
		// Comprimido oblongo (caplet)
		cor: "#e67e22",
		formas:
			'<rect x="8" y="17" width="32" height="14" rx="7" fill="C" fill-opacity=".15"/><rect x="8" y="17" width="32" height="14" rx="7" fill="none" stroke="C" stroke-width="2.5"/><line x1="24" y1="17" x2="24" y2="31" stroke="C" stroke-width="2.5"/>',
	},
	antibiotico: {
		// Cápsula em duas metades
		cor: "#3498db",
		formas:
			'<g transform="rotate(45 24 24)"><rect x="9" y="18" width="30" height="12" rx="6" fill="C" fill-opacity=".15"/><rect x="9" y="18" width="30" height="12" rx="6" fill="none" stroke="C" stroke-width="2.5"/><line x1="24" y1="18" x2="24" y2="30" stroke="C" stroke-width="2.5"/></g>',
	},
	gastro: {
		// Softgel (cápsula gelatinosa em gota)
		cor: "#9b59b6",
		formas:
			'<path d="M24 9c6 8 9 12 9 17a9 9 0 0 1-18 0c0-5 3-9 9-17z" fill="C" fill-opacity=".15"/><path d="M24 9c6 8 9 12 9 17a9 9 0 0 1-18 0c0-5 3-9 9-17z" fill="none" stroke="C" stroke-width="2.5" stroke-linejoin="round"/>',
	},
	cardiovascular: {
		// Coração
		cor: "#e74c3c",
		formas:
			'<path d="M24 34s-11-6.6-11-14a6 6 0 0 1 11-3.2A6 6 0 0 1 35 20c0 7.4-11 14-11 14z" fill="C" fill-opacity=".15"/><path d="M24 34s-11-6.6-11-14a6 6 0 0 1 11-3.2A6 6 0 0 1 35 20c0 7.4-11 14-11 14z" fill="none" stroke="C" stroke-width="2.5" stroke-linejoin="round"/>',
	},
	alergia: {
		// Folha (antialérgico / pólen)
		cor: "#16a085",
		formas:
			'<path d="M14 34c0-12 8-20 20-20 0 12-8 20-20 20z" fill="C" fill-opacity=".15"/><path d="M14 34c0-12 8-20 20-20 0 12-8 20-20 20z" fill="none" stroke="C" stroke-width="2.5" stroke-linejoin="round"/><path d="M20 34q7-7 14-20" fill="none" stroke="C" stroke-width="2.5"/>',
	},
};

// Retorna o SVG (string) do ícone da categoria, já com a cor aplicada.
function svgCategoria(categoria) {
	const def = CAT_ICONES[categoria] || CAT_ICONES.analgesico;
	return (
		'<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">' +
		def.formas.replace(/C/g, def.cor) +
		"</svg>"
	);
}

// --- Carrinho em localStorage: [{id, qtd}] ---
const CART_KEY = "farmasys_cart";

function getCart() {
	try {
		return JSON.parse(localStorage.getItem(CART_KEY)) || [];
	} catch {
		return [];
	}
}
function saveCart(cart) {
	localStorage.setItem(CART_KEY, JSON.stringify(cart));
	atualizarBadgeCarrinho();
}
function addToCart(id, qtd = 1) {
	const cart = getCart();
	const item = cart.find((i) => i.id === id);
	if (item) item.qtd += qtd;
	else cart.push({ id, qtd });
	saveCart(cart);
}
function removeFromCart(id) {
	saveCart(getCart().filter((i) => i.id !== id));
}
function cartCount() {
	return getCart().reduce((s, i) => s + i.qtd, 0);
}

function atualizarBadgeCarrinho() {
	const n = cartCount();
	document.querySelectorAll(".cart-item .cart-label").forEach((el) => {
		el.textContent = n > 0 ? `Carrinho (${n})` : "Carrinho";
	});
}

document.addEventListener("DOMContentLoaded", atualizarBadgeCarrinho);
