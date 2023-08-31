document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formulario");

    form.addEventListener("submit", function(event) {
      if (!validateForm()) {
        event.preventDefault();
      }
    });

    function validateForm() {
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const cep = document.getElementById("cep").value.trim();
      const rua = document.getElementById("rua").value.trim();
      const numero = document.getElementById("numero").value.trim();
      const complemento = document.getElementById("complemento").value.trim();
      const cidade = document.getElementById("cidade").value.trim();
      const uf = document.getElementById("uf").value.trim();

      if (nome === "" || email === "" || cep === "" || rua === "" || numero === "" || cidade === "" || uf === "") {
        alert("Todos os campos são obrigatórios.");
        return false;
      }

      // Aqui você pode adicionar mais validações personalizadas conforme necessário.

      return true;
    }
  });