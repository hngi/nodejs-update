const chai = require ('chai');
const chaiHttp = require ('chai-http');

const app = require ('../index');

chai.use(chaiHttp);
chai.should()


describe.skip('POST shorten url', () => {
    it('', (done) => {
        chai.request(app)
        .post('/api/auth/upload')
        .send()
        .end((err, res) => {
            res.should.have.status(200)

        })
        done()
    })
})