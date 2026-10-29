
export default function Contato() {
  function enviarMensagem(event) {
    event.preventDefault();
    alert("Formulário demonstrativo. Envio não configurado.");
  }

  return (
    <main className="page">
      <h1>Fale conosco</h1>
      <p>Entre em contato com a equipe ConnectFlight.</p>

      <form className="contact-form" onSubmit={enviarMensagem}>
        <label htmlFor="nome">Nome</label>
        <input id="nome" name="nome" required />

        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" required />

        <label htmlFor="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows="4"
          required
        />

        <button type="submit">Enviar mensagem</button>
      </form>
    </main>
  );
}
