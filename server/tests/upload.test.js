const chai = require ('chai');
const chaiHttp = require ('chai-http');

const app = require ('../index');

chai.use(chaiHttp);
chai.should()


describe.skip('POST upload', () => {
    const file = 'file.jpeg'
    it('upload a file successfully', (done) => {
        chai.request(app)
        .post('/api/auth/upload')
        .send(file)
        .end((err, res) => {
            res.should.have.status(400)
        })
        done()
    })
})