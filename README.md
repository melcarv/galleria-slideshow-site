# Galleria - Angular 19

Este projeto é uma galeria de arte interativa desenvolvida com **Angular 19**. Ele exibe uma coleção de obras de arte com informações detalhadas sobre cada uma, permitindo a navegação entre elas e a visualização ampliada das imagens.

## 🚀 Funcionalidades
- 📌 Exibição de uma **galeria de artes** em layout responsivo.
- 🔍 **Página de detalhes** para cada obra.
- 🔄 **Navegação entre obras** diretamente da página de detalhes.
- 🖼️ **Modal para exibição ampliada** da imagem principal.
- 📡 **Consumo de dados via JSON**, podendo ser facilmente integrado a uma API.

## 🏗️ Estrutura do Projeto
```
galleria/
│── src/
│   ├── app/
│   │   ├── core/                # Serviços e modelos globais
│   │   │   ├── services/
│   │   │   │   ├── artwork.service.ts  # Serviço para carregar os dados do JSON
│   │   │   ├── models/
│   │   │   │   ├── artwork.model.ts    # Interface para os dados das obras
│   │   ├── features/            # Componentes principais do app
│   │   │   ├── gallery/          # Página de galeria
│   │   │   │   ├── gallery.component.ts
│   │   │   │   ├── gallery.component.html
│   │   │   │   ├── gallery.component.scss
│   │   │   ├── artwork/          # Página de detalhes da obra
│   │   │   │   ├── artwork.component.ts
│   │   │   │   ├── artwork.component.html
│   │   │   │   ├── artwork.component.scss
│   │   │   ├── shared/           # Componentes reutilizáveis
│   │   │   │   ├── image-modal/  # Modal para exibir imagens ampliadas
│   │   │   │   │   ├── image-modal.component.ts
│   │   │   │   │   ├── image-modal.component.html
│   │   │   │   │   ├── image-modal.component.scss
│   │   ├── app.config.ts         # Configuração do app (standalone)
│   │   ├── app.routes.ts         # Definição das rotas
│   ├── assets/                   # Imagens e JSON de dados
│   │   ├── data.json             # Dados das obras de arte
│   ├── styles.scss               # Estilos globais
│   ├── main.ts                   # Bootstrap do Angular 19
│── angular.json                  # Configuração do projeto
│── package.json                   # Dependências do projeto
│── tsconfig.json                   # Configuração do TypeScript
```

## 🔧 Tecnologias Utilizadas
- **Angular 19** (Standalone Components)
- **RxJS** para manipulação de dados assíncronos
- **Angular Router** para navegação
- **SCSS** para estilização
- **JSON** como fonte de dados estática

