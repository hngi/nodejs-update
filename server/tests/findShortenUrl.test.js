const chai = require ('chai');
const chaiHttp = require ('chai-http');

const app = require ('../index');

chai.use(chaiHttp);
chai.should()

describe('POST  url', () => {
    const _id = 'id'
    it('should give an error if link is not found', (done) => {
        chai.request(app)
        .get(`/:${_id}`)
        .end((err, res) => {
           res.should.have.status(404)
        })
        done()
    })
})
