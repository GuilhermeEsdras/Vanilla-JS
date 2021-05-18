const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');


let value = 0;

// Descreve o que vc esta testando
/**
 * 'Math class': Descricao do que esta testando
 */
describe('Math class', function () {
    // hooks
    beforeEach(function () {
        value = 0;
    })

    it('Soma dois numeros', function (done) {
        const math = new Math();
        this.timeout(1000);

        value = 5;

        try {
            math.sum(value, 5, v => {
                expect(v).to.equal(10);
            });
            done();
        } catch (erro) {
            console.log('Erro em Sum: ', erro);
        }
    })

    it('Multiplica dois numeros', function () {
        const math = new Math();
        const obj = {
            name: 'Guilherme Esdras'
        }

        const obj2 = {
                name: 'Guilherme Esdras'
        }

        expect(obj).to.have.property('name');
        expect(obj2).to.deep.equal(obj);

        expect(math.multiply(5, 5)).to.equal(25);
    });

    it.only('Chama req com valores de soma e index', function () {
        const req = {};
        const res = {
            load: function () {
                console.log('Chamada!');
            }
        };

        sinon.stub(res, 'load').returns('xpto');

        const math = new Math();

        math.printSum(req, res, 5, 5);

        // expect(res.load.calledOnce).to.be.true;
        // expect(res.load.args[0][1]).to.equal(10);
        expect(res.load.args[0][0]).to.equal('index');
    })
})