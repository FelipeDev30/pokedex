# 🔴 Pokedex

Uma aplicação web interativa para explorar e descobrir Pokémons. Carrega a lista sob demanda e exibe uma página de detalhes simples para cada Pokémon.

## 🎮 Sobre

Projeto leve e responsivo feito com HTML, CSS e JavaScript (vanilla). Integra com a PokéAPI para obter dados em tempo real.

## ✨ Funcionalidades

- 📱 Design responsivo
- ⚡ Carregamento dinâmico com `Load More`
- 🔗 Clique em um Pokémon para ver a página de detalhes
- 🎨 Interface simples e limpa

## 🚀 Como executar (recomendado)

Alguns navegadores bloqueiam requisições à PokéAPI quando a página é aberta via `file://`. Recomenda-se rodar um servidor HTTP simples:

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
Felipe — https://github.com/FelipeDev30

Observação: Projeto originalmente criado pela Digital Innovation One e posteriormente modificado durante o curso Formação JavaScript Developer por Felipe Lamas.