const chai = require('chai');
const index = require('../index.js');
const expect = chai.expect;

describe('index', () => { 
  describe('#cardValidator', () => {
    describe('Quando não houver parametro', () => {
      it('Deve lançar Error', () => {
        expect(() => {index.cardValidator('')}).to.throw(Error, /Empty input/);
      });
    });
    describe('Quando o parametro for uma string', () => {
      it('Deve lançar TypeError', () => {
        expect(() => {index.cardValidator('teste')}).to.throw(TypeError, /Accepts only numeric digits/);
      });
    });
    describe('Quando o parametro for um cartão válido em string', () => {
      it('Deve retornar true', () => {
        expect(index.cardValidator('36490102462661')).to.be.true;
      });
    });
    describe('Quando o parametro for um cartão válido', () => {
      it('Deve retornar true', () => {
        expect(index.cardValidator(36490102462661)).to.be.true;
      });
    });
    describe('Quando o parametro for um cartão inválido em string', () => {
      it('Deve retornar false', () => {
        expect(index.cardValidator('3')).to.be.false;
      });
    });
    describe('Quando o parametro for um cartão inválido', () => {
      it('Deve retornar false', () => {
        expect(index.cardValidator(3)).to.be.false;
      });
    });
  });
});