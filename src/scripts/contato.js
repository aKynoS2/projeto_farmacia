// Validação do formulário de Contato/SAC — sem backend, só feedback visual.
document.addEventListener("DOMContentLoaded", () => {
	const form = document.forms["contato"];
	if (!form) return;
	const msg = document.getElementById("contato-msg");
	const btn = document.getElementById("contato-enviar");

	const obrigatorios = ["nome", "email", "assunto", "mensagem"];

	const limparErro = (el) => el.classList.remove("campo-erro");
	obrigatorios.forEach((n) =>
		form[n].addEventListener("input", () => limparErro(form[n]))
	);

	btn.addEventListener("click", () => {
		let primeiroInvalido = null;
		obrigatorios.forEach((n) => {
			const el = form[n];
			const vazio = !el.value.trim();
			el.classList.toggle("campo-erro", vazio);
			if (vazio && !primeiroInvalido) primeiroInvalido = el;
		});

		// e-mail: validação nativa do tipo email
		const email = form["email"];
		if (email.value.trim() && !email.checkValidity()) {
			email.classList.add("campo-erro");
			if (!primeiroInvalido) primeiroInvalido = email;
		}

		if (primeiroInvalido) {
			msg.textContent = "Preencha os campos obrigatórios destacados.";
			msg.className = "form-status status-erro";
			primeiroInvalido.focus();
			return;
		}

		msg.textContent = "Mensagem enviada com sucesso! Em breve entraremos em contato.";
		msg.className = "form-status status-sucesso";
		form.reset();
	});
});
