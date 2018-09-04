# **Card Validator v.1.0.2**

Esta biblioteca destina-se à validação de cartões de crédito, para uso em aplicações web.
Na versão atual é capaz de validar apenas entradas no formato number contendo caracteres de 0 a 9.

## **Os métodos utilizados na biblioteca são:**
cardValidator(cardNumber);

### Exemplo de uso:
$node
> let verify = require('dinerfscardvalidator')

> verify.cardValidator(760); //false

> verify.cardValidator(36490102462661); //true

## **versão 1.0.2**
* Funcionalidade: verifica se o número de um cartão de crédito é válido.

## **Instalação**
* Você deverá ter o node + npm instalados. Para guia de instalação, visite o [site oficial](https://www.npmjs.com/get-npm).

* Proceda com a instalação com: `$npm install dinerfscardvalidator`

## **roadmap oficial do projeto**

### **versão 3.0.0 (sem previsão, aceita-se contribuições)**
* README traduzido para inglês;

* README traduzido para francês;

* Implementação da opção validar cartões da América do Norte e Europa.

### **versão 2.0.0 (previsão outubro/2018)**
* README traduzido para espanhol;

* Implementação da opção validar cartões dos demais países da América Latina.

### **versão 1.0.2 (released)**
* Funcionalidade: verifica se o número de um cartão de crédito é válido.