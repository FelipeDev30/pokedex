🔴 Pokedex
Uma aplicação web interativa para explorar e descobrir Pokémons! Carregue a lista sob demanda e visualize informações detalhadas sobre cada um.
Pokedex moderna e responsiva, desenvolvida com HTML, CSS e JavaScript puro, sem dependências externas.

🎮 Sobre o projeto
Este é um projeto leve e responsivo que consome a PokéAPI para exibir dados em tempo real sobre Pokémons.
Ideal para estudos de JavaScript, consumo de APIs REST e design responsivo.

✨ Funcionalidades

📱 Design responsivo para diferentes dispositivos
⚡ Carregamento dinâmico com botão Load More
🔗 Página de detalhes ao clicar em um Pokémon
🎨 Interface simples e intuitiva


🚀 Como executar
Alguns navegadores bloqueiam requisições à PokéAPI quando a página é aberta via file://.
Por isso, recomenda-se rodar um servidor HTTP local:
Usando Python (se instalado):
Shellcd 'c:\Users\felipe\OneDrive\Documentos\Github\pokedex'python -m http.server 8000Mostrar mais linhas
Depois, abra no navegador:
http://localhost:8000
Alternativas:

Extensão Live Server do VSCode
Qualquer outro servidor HTTP estático


📁 Estrutura do projeto
pokedex/
├── index.html
├── pages/
│   └── pokemon.html           # Página de detalhes do Pokémon
├── assets/
│   ├── css/
│   │   ├── global.css
│   │   └── pokedex.css
│   └── js/
│       ├── main.js
│       ├── poke-api.js
│       ├── pokemon-model.js
│       └── pokemon-detail.js  # Script da página de detalhes
└── README.md


📖 Como usar

Abra a aplicação (preferencialmente via servidor local)
A lista inicial de Pokémons será carregada automaticamente
Clique em um cartão para abrir a página de detalhes
Use o botão Load More para carregar mais Pokémons


✅ Status do projeto

✅ Página de detalhes implementada (pages/pokemon.html + assets/js/pokemon-detail.js)
🔍 Busca por nome e filtros: planejado
⭐ Favoritos e modo escuro: planejado


🛠️ Tecnologias utilizadas

HTML5, CSS3, JavaScript (Vanilla)
PokéAPI
Normalize.css


🤝 Como contribuir
Contribuições são bem-vindas!
Para colaborar:

Faça um fork do projeto
Crie uma branch para sua feature (git checkout -b minha-feature)
Faça o commit das alterações (git commit -m 'Minha feature')
Envie para o repositório (git push origin minha-feature)
Abra um Pull Request


👨‍💻 Autor
Felipe — GitHub
