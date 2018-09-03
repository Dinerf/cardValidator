const chai = require('chai');
const index = require('../index.js');
const expect = chai.expect;

describe('index', () => { 
  describe('#cardValidator', () => {
    describe('Quando não houver parametro', () => {
      it('Deve lançar Error', () => {
        expect(() => {index.cardValidator()}).to.throw(Error, /Empty input/);
      });
    });
    describe('Quando o parametro não for um número', () => {
      it('Deve lançar TypeError', () => {
        expect(() => {index.cardValidator('teste')}).to.throw(TypeError, /Not a number/);
      });
    });
    describe('Quando o parametro contiver caracteres que não são números', () => {
      it('Deve lançar TypeError', () => {
        expect(() => {index.cardValidator(9.9)}).to.throw(TypeError, /Accepts only numeric digits/);
      });
    });
    describe('Quando o parametro contiver apenas 1 digito', () => {
      it('Deve lançar RangeError', () => {
        expect(() => {index.cardValidator(9)}).to.throw(RangeError, /Card number incomplete/);
      });
    });
    describe('Quando o parametro for um cartão válido', () => {
      it('Deve retornar true', () => {
        expect(index.cardValidator(36490102462661)).to.be.true;
      });
    });
    describe('Quando o parametro for um cartão inválido', () => {
      it('Deve retornar false', () => {
        expect(index.cardValidator(56783)).to.be.false;
      });
    });
  });
});