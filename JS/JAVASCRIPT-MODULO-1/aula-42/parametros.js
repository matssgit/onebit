function dobro(x) {
    alert("O dobro de " + x + " é " + (x * 2))
}

//dobro(5)
//dobro(7)

//dobro()

function dizerOla(nome) {
    alert("Olá, " + nome + "!")
}

//dizerOla("Isaac")
//dizerOla() 

function soma(a,b) {
    alert("O resultado da soma é " + (a + b))
}

//soma(7, 6)

function criarUsuario(nome, email, senha, tipo = "admin") {
     const usuario = {
        nome,
        email,
        senha,
        tipo
     }

     console.log(usuario)
}

function novoUsuario(nome, email, tipo = "admin", senha)

//criarUsuario("Isaac", "isaac@gmail.com", "1234")
//novoUsuario("Isaac", "isaac@gmail.com", "1234")

// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto

function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
    // ...
  }
  function parametrosDoJeitoCerto(usuario) {
    // ...
  }
  // Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
  parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
  const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    aniversario: "",
    endereco: ""
  }
  parametrosDoJeitoCerto(dadosDoUsuario)