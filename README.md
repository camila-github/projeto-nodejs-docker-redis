## Treinamento Digital Innovation One - BOOTCAMP Desenvolvedor NodeJS (DIO).

O projeto publicado é referente ao treinamento do Curso BOOTCAMP Desenvolvedor NodeJS da Digital Innovation One (https://digitalinnovation.one).

O intuito do projeto é criar jobs em Background assíncrona utilizando NodeJS + Redis (BDA NoSQL), com a função de cadastrar usuarios (com nome e email), onde será enviado emails para geração de filas de email, que na qual a biblioteca Bull fará o gerenciamento das filas. E para visualização das filas será utilizado o Bull Dashboard.


Nesse projeto, foi utilizado ferramentas Back End + Nodemom + NodeJS + Docker + Redis (Banco de dados Não-relacional - NoSQL) + Bull (Gerenciamento de Filas) + Bull Dasboard (Visualização das filas).
Foi aplicado os conceitos de: 
- Criação de um banco de dados Redis (NoSql) com uso do Docker, onde foi criado uma virtualização do banco de dados (container). 
- Utilizado conceitos async/wait (ES7), promisses (ES6). 
- Criação de Background Jobs (filas) com utilização da biblioteca Bull, para gerenciar as filas e utilização do Bull Dasboard, para visualização das filas. 
- Utilização da biblioteca 'password-generator' para geração de senha randomica.


#### Requisitos:

NODE JS. 

Abaixo link para download:

```
https://nodejs.org/en/
```


GERENCIADOR DE PACOTE - NPM OU YARN

Para instalar, o gerenciador de pacotes, pode utilizar npm ou yarn. Nesse projeto será utilizado o yarn.
Quando o nodejs é instalado o npm tambem é instalado. Para instalar o yarn, acesse o  link abaixo:

```
https://classic.yarnpkg.com/en/
```

DOCKER

O Docker será utilizado para instalar uma virtualização (container) do banco de dados NoSql Redis. Essa ferramenta é uma plataforma que permite criar e executar “conteiners“, ou seja, o docker é um serviço que usa virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.

Com o Docker pode-se colocar as aplicações em um contêiner que possui todos os recursos necessários e que permite testar, implantar e publicar mais rapidamente. 

Nesse projeto, foi instalado o Docker, e criado a virtualização do Redis. A IDE utilizada foi o vscode.

Abaixo o link, para download do Docker. Faz o download de acordo com o seu sistema operacional. No proprio site tem procedimento de como instalar.

```
https://docs.docker.com/get-docker/
```


REDIS

Apos instalar o Docker, e verificar se o serviço esta iniciado, instale o Redis utilizando o comando abaixo no terminal, dentro da pasta do seu projeto. 
Será criando uma virtualização (container) no Docker referente o Redis. O nome da imagem será 'redis', será executado na porta '6379'

```
docker run --name redis -p 6379:6379 -d -t redis:alpine
```


Detalhe: Ao abrir o docker, na opção de dashboard, observe que o Redis esta em execução.
Tem outra forma de criar os containers manualmente, que é utilizando no projeto a criação dos arquivos 'Dockerfile' e 'Docker-compose.yml', mas nesse projeto, em questão, nao foi utilizado esses arquivos.
Apos instalações das ferramentas acima, inicie o projeto com o comando abaixo:

```
yarn init -y
```


EXPRESS + NODEMAIL + DOTENV

Express - O Express é um framework Node que cria abstrações de rotas, middlewares e muitas outras funções para facilitar a criação de API's.

DotEnv -  Ferramenta utilizada para orquestrar as variáveis de ambiente do projeto. 

Nodemail - É um módulo Node de código aberto que permite enviar e-mails pela aplicação.

Instale as ferramentas utilizando o comando abaixo:

```
yarn add express nodemailer dotenv
```


NODEMON + SUCRASE

Nodemon - é um utilitário que monitora todas as alterações nos arquivos de sua aplicação e reinicia automaticamente o servidor quando for necessário. Detalhe: apenas o arquivo de variaveis de ambiente (.env), o nodemon nao monitora, qualquer alteração nesse arquivo necessario parar o nodemon manualmente, e iniciar novamente.

Sucrase - O Sucrase é um compilador que permite um desenvolvimento muito rápido. O Sucrase assume que você está desenvolvendo em um navegador recente ou em uma versão recente do Node.js, o mesmo se concentra na compilação de extensões da linguagem não-padrão, como por exemplo JSX, TypeScript e Flow.

-D - instala dependencias de desenvolvimento, ou seja, essas duas ferramentas (nodemon + sucrese) apenas serão utilizadas no ambiente local para desenvolvimento. Não ficará disponivel, em servidores externos, como o ambiente de desenvolvimento, homologação, produção.

Execute o comando abaixo para instalar as duas dependencias de desenvolvimento. Apos a instalação, repare que no arquivo 'package.json', foi adicionado essas duas dependencias na opção 'devDependencies'

```
yarn add nodemon sucrase -D
```


Depois cria um arquivo nodemom.json, e informe o codigo abaixo. Essa configuração fará que todo arquivo com extensão .js seja compilado pelo sucrase-node.

```
{
    "execMap": {
      "js": "sucrase-node"
    }
}
```

No arquivo package.json adicione o script abaixo. O intuito é economizar alguns comandos, no momento que for iniciar algum arquivo pelo nodemon ou pelo proprio node. Por exemplo, quando inicia pelo node é informado o comando 'node index.js', e quando inicia pelo nodemon é informado o comando 'yarn nodemon index.js', e com o script basta informar 'node start' ou 'yarn start'.

```
"scripts": {
  "start": "nodemon src/server.js"
}
```


PASSWORD-GENERATOR

É uma biblioteca que simplifica o processo de gerar senhas randomicas. Utilize o comando abaixo para instalar a biblioteca no projeto.

```
yarn add password-generator
```


INSOMNIA

Utilizado o Insomnia para testar conexoes de requisições em geral. Se preferir, pode ser usada outra ferramenta, como por exemplo o postman. Abaixo o link para instalar o Insomnia:

```
https://insomnia.rest/download/
```


MAILTRAP

Utilizado o MailTrap, apenas para teste de envio e recebimento de e-mail. O MailTrap inspeciona e depura amostras de e-mail antes de entregar o projeto final. O MailTrap tem opção paga e gratuita. Utilizei opção gratuita, que para pequenos projetos, é o suficiente para testar envio e recebimento de email.

Detalhe: Apos os testes, antes de publicar no gitHub não publique o arquivo '.env' com suas credenciais. Como boas-praticas, nao publique o arquivo no gitHub, mas se preferir, apenas para fins didáticos, publique um arquivo '.env.example' apenas para ser usado como modelo, mas sem credenciais.

```
https://mailtrap.io/
```


BULL

O Bull é uma biblioteca Node que implementa um sistema de filas rápido baseado em Redis, que ajuda com o controle de trabalhos distribuídos, ela fornece algumas soluções muito útil para esse tipo de trabalho, em que é possivel realizar trabalhos em background, como filas com prioridades ( FIFO, LIFO e outras) e outras soluções. Nesse projeto será usado o Bull, para enviar de forma escalável mensagens em massa por e-mail. Abaixo o comando para instalar no projeto:

```
yarn add bull
```

BULL-BOARD

O Bull Dashboard é uma IU construída sobre o Bull para ajudá-lo a visualizar suas filas e seus trabalhos. Com esta biblioteca, é possivel visualizar o que está acontecendo com cada trabalho em suas filas, seu status e algumas outras ações que permitirão executar os trabalhos. Abaixo o comando para instalar o bull-board:

```
yarn add bull-board
```


