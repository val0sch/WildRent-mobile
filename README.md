# 2303-wns-jacquard-wild-rent-mobile

# To run codegen

In file codegen.yml

Either:

- decomment `schema: "http://192.168.1.17:4000/graphql"` and comment the other shema
- or leave current shema and install globally cross-env:
  - `npm i -g cross-env`
  - then run command with your personal ip address => `cross-env IP=192.168.1.17 npm run codegen`

# To set global variable on your machine

on MacOs:

- `sudo nano /etc/hosts`
- then add your ip adress=> `192.168.1.17 nameofyourchoice`
- then run codegen with command => `cross-env IP=nameofyourchoice npm run codegen`

on Windows:
????
