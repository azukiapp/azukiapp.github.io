# azk

## English Version

`azk` landing page: [http://azk.io](http://azk.io)

`azk` is an open-source tool to help automate and manage the setup of developer environments.
You can check the project [here](https://github.com/azukiapp/azk).

### Installation

Install `azk`

  [https://github.com/azukiapp/azk#installation](https://github.com/azukiapp/azk#installation)

Start `azk agent`

  ```bash
  $ azk agent start
  ```

Start projects

  ```bash
  azk start --open; azk logs --tail
  ```

### Deploy

Set `AWS_ACCESS_KEY_ID`, `AWS_SECRET_KEY` and `AWS_BUCKET` keys in local `.env` file and run:

  ```bash
  $ azk shell -c 'grunt deploy'
  ```

---

## Portuguese Version

`azk` landing page: [http://azk.io/](http://azk.io/)

`azk` é uma ferramenta de código aberto para automação da montagem e da gestão de ambientes de desenvolvimento.
Você pode checar o projeto [aqui](https://github.com/azukiapp/azk).

### Instalação

Instale o azk

  [https://github.com/azukiapp/azk#installation](https://github.com/azukiapp/azk#installation)

Inicie o `azk agent`

  ```bash
  azk agent start
  ```

Inicie os systemas do projeto

  ```bash
  azk start --open; azk logs --tail
  ```

### Deploy

Adicione as chaves `AWS_ACCESS_KEY_ID`, `AWS_SECRET_KEY` e `AWS_BUCKET` no arquivo local `.env` e depois execute:

  ```bash
  $ azk shell -c 'grunt deploy'
  ```

## License

"Azuki", "azk" and the Azuki logo are copyright (c) 2013-2014 Azuki Serviços de Internet LTDA.

`azk` source code is released under Apache 2 License.

Check LEGAL and LICENSE files for more information.
