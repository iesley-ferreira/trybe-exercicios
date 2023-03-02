let clientesTrybeBank = ["Ada", "John", "Gus"];

function excluiCliente(cliente) {
  if (typeof cliente === "string") {
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
      if (cliente === clientesTrybeBank[index]) {
        clientesTrybeBank.splice(index, 1);
        return `Cliente ${cliente} foi removido da lista com sucesso`;
      }
    }
  } else {
    return `Erro, o parâmetro passado deve ser uma "string".`;
  }
}
console.log(excluiCliente("Gus"));
console.log(clientesTrybeBank);

