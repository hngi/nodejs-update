const chai = require ('chai');
const chaiHttp = require ('chai-http');

const app = require ('../index');

chai.use(chaiHttp);
chai.should()


describe('POST email', () => {
    it('should send email', (done) => {
        chai.request(app)
        .post('/api/auth/sendEmail')
        .send({
            name: '',
            to: '',
            message: 'i want to send a message',
            link: 'https://github.com/hngi/nodejs-update/'
        })
        .end((err, res) => {
            res.should.have.status(400)
        })
        done()
    })
})