# Fullcycle Desafio Docker

# Desafio Go

Dentro da pasta `go` está o código fonte e o Dockerfile utilizado para a criação da imagem. A imagem gerada possui menos de 2mb e imprime na tela `Code.education Rocks!` conforme pedido.

A imagem está no [Docker Hub](https://hub.docker.com/r/raphaelmb/codeeducation) e para usá-la basta executar o comando `docker run raphaelmb/codeeducation`.

# Desafio Nginx com Node.js

Na pasta `node-nginx` está o código fonte do desafio, Dockerfile e docker-compose.yaml para a execução de toda a aplicação em que é exibido na tela `Full Cycle Rocks!` e a lista de nomes cadastrados no bando de dados.

Para isso é rodar o comando `docker-compose up -d` na pasta `node-nginx` e acessar `localhost:8080` no seu navegador.

### Misc

Esse projeto faz parte do curso [Fullcycle](https://fullcycle.com.br/).
