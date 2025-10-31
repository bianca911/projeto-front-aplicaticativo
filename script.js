async function carregarProdutos() {
  try {
    const response = await fetch("http://localhost:3000/produtos");
    const produtos = await response.json();

    const container = document.getElementById("produtos-container");

    const cores = [
      "#95b963",
      "#7d5b8c",
      "#5391c7",
      "#e994b7",
      "#a82223"
    ];

    const links = [
      "pages/page 2 Maria-L/index.html",
      "pages/page 3 Bianca-a/index.html",
      "pages/page 4 Allan/index.html",
      "pages/page 5 Kamilly/index.html",
      "pages/mayko's page/index.html"
    ];

    const autores = [
      "by Maria Luiza",
      "by Bianca Amorim",
      "by Allan",
      "by Kamilly",
      "by Maykon"
    ];

    container.innerHTML = "";

    produtos.forEach((produto, index) => {
      const card = document.createElement("div");
      card.classList.add("card");


      const cor = cores[index % cores.length];
      const link = links[index % links.length];
      const autor = autores[index % autores.length];

      card.style.backgroundColor = cor;


      card.innerHTML = `
        <div class="card-content">
          <h3>${produto.nome}</h3>
          <p>${produto.descricao}</p>
          <div class="footer">
          <p class="autor">${autor}</p>
          <a href="${link}" class="btn">Ver Post</a> </div>
        </div>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Erro ao carregar produtos:", error);
  }
}

carregarProdutos();
