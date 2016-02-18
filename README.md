# azk landpage

deployed at [http://azk.io](http://azk.io)

### Installation

1) Install `azk`

- http://azk.io

2) Start `azk agent`

```sh
$ azk agent start
```

3) Start projects

```sh
azk start -R -v --open && azk logs --follow
```

### Deploy

Set `AWS_ACCESS_KEY_ID`, `AWS_SECRET_KEY` and `AWS_PACKAGE_BUCKET` keys in local `.env` file and
.env

```sh
AWS_PACKAGE_BUCKET=azk-landapage-stage
AWS_ACCESS_KEY_ID=xxxxxxxxxxxxxxx
AWS_SECRET_KEY=xxxxxxxxxxxxxxx
```

run:

```sh
$ azk shell -c 'grunt deploy'
```

## License

"Azuki", "azk" and the Azuki logo are copyright (c) 2013-2016 Azuki Serviços de Internet LTDA.

`azk` source code is released under Apache 2 License.

Check LEGAL and LICENSE files for more information.
