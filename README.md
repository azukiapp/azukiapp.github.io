# AZK

## English Version

AZK landing page: [http://azukiapp.github.io/](http://azukiapp.github.io/)

AZK is an open-source tool to help automate and manage the setup of developer environments. You can check the project [here](https://github.com/azukiapp/azk).

### Installation

#### Install AZK
	https://github.com/azukiapp/azk#installation
#### Start azk agent
	azk agent start
#### Start azk
    azk start; azk logs --tail
#### Open
    http://azk-landpage.azk.dev/

### Deploy
Set `AWS_ACCESS_KEY_ID`, `AWS_SECRET_KEY` and `AWS_BUCKET` keys in local `.env` file and run:

```bash
$ azk shell --shell=/bin/bash -c './node_modules/grunt-cli/bin/grunt deploy'
```

## Portuguese Version

AZK landing page: [http://azukiapp.github.io/](http://azukiapp.github.io/)

AZK é uma ferramenta de código aberto para automação da montagem e da gestão de ambientes de desenvolvimento. Você pode checar o projeto [aqui](https://github.com/azukiapp/azk).

### Instalação

#### Instale o azk
    https://github.com/azukiapp/azk#installation
#### Inicie o azk agent
    azk agent start
#### Inicie o azk
    azk start; azk logs --tail
#### Abra o endereço
    http://azk-landpage.azk.dev/

### Deploy

Adicione as chaves `AWS_ACCESS_KEY_ID`, `AWS_SECRET_KEY` e `AWS_BUCKET` no arquivo local `.env` e depois execute:

```bash
$ azk shell --shell=/bin/bash -c './node_modules/grunt-cli/bin/grunt deploy'
```