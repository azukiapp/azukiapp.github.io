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

### Sponsors

To add or remove the sponsors simply edit the file `src / _config_production.yml`, sections `sponsors_gold` and `sponsors_silver`.

###### dinamic order
To make the ordering of the sponsors simply set some attributes in the url.

Attributes:
  - sog (sponsor order gold): Order of gold sponsors.
  - sos (sponsor order silver): Order of the Silver sponsors.


ex: http://azk.io/?sog=adtsys,coreos,docker,dropbox&sos=locaweb,twitter#sponsors

With this url, sponsors: ADTsys, Correos, Docker and Dropbox will be gold. Have Locaweb and twitter will be the first between the silvers. The rest will be ordained subsequent.

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

### Sponsors

Para adicionar ou remover os sponsors basta editar o arquivo `src/_config_production.yml`, seções `sponsors_gold` e `sponsors_silver`.

###### dinamic order
Para fazer a ordenação dos patrocinadores basta definir alguns atributos na url.

Attributos:
  - sog (sponsor order gold): Ordem dos patrocinadores ouro.
  - sos (sponsor order silver): Ordem dos patrocinadores prata.

ex: http://azk.io/?sog=adtsys,coreos,docker,dropbox&sos=locaweb,twitter#sponsors

Com essa url, os patrocinadores ADTsys, CoreOS, Docker e Dropbox serão ouro. Já a Locaweb e o twitter serão os primeiros entre os pratas. Os restantes serão ordenado subsequentes.

## License

"Azuki", "azk" and the Azuki logo are copyright (c) 2013-2014 Azuki Serviços de Internet LTDA.

`azk` source code is released under Apache 2 License.

Check LEGAL and LICENSE files for more information.
