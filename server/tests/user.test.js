const chai = require ('chai');
const chaiHttp = require ('chai-http');

const app = require ('../index');

chai.use(chaiHttp);
chai.should()

let token = null;

describe('POST authentication', () => {
    // register
    // register a user
  describe('POST register', () => {
      it('should register a new user', (done) => {
          chai.request(app)
          .post('/api/auth/register')
          .send({
            username : 'newuser',
            email: 'newuser@gmail.com',
            password: '123456'
          })
          .end((err, res) => {
            res.should.have.status(200)  
            token = res.body.token
          })
          done() 
      })
  })

//   register validation
  describe('POST register', () => {
    it('should validate body entry', (done) => {
        chai.request(app)
        .post('/api/auth/register')
        .send({
          username : '',
          email: 'newuser@gmail.com',
          password: ''
        })
        .end((err, res) => {
          res.should.have.status(400)  
        })
        done() 
    })
})

//   register (existing user error)
describe('POST register', () => {
    it('should give error if user already exist', (done) => {
        chai.request(app)
        .post('/api/auth/register')
        .send({
            username: 'mohammed',
            email: 'ib@gmail.com',
            password: '23445566'
        })
        .end((err, res) => {
          res.should.have.status(400)  
        })
        done() 
    })
})


// log in
//   log in an existing user
  describe('POST login', () => {
    it('should login a user', (done) => {
        chai.request(app)
        .post('/api/auth/login')
        .send({
            username: 'mohammed',
            email: 'ib@gmail.com',
            password: '23445566'
        })
        .end((err, res) => {
          res.should.have.status(200)
          token = res.body.token    
        })
        done()

      })
  })

 //  log in error for invalid users
  describe('POST login', () => {
    it('should give an error for non existing  user', (done) => {
        chai.request(app)
        .post('/api/auth/login')
        .send({
            username : 'unauthorized user',
            email: 'unauthorizeduser@gmail.com',
            password: 123456
        })
        .end((err, res) => {
          res.should.have.status(401)
        })
        done()
      })
  })

//   log in validation error
  describe('POST login', () => {
    it('should give a validation error ', (done) => {
        chai.request(app)
        .post('/api/auth/login')
        .send({
            username : 'unauthorized user',
            email: 'unauthorizeduser@gmail.com',
            password: ''
        })
        .end((err, res) => {
          res.should.have.status(400)
        })
        done()
      })
  })

// login  incorrect password error
  describe('POST login', () => {
    it('should give an error for incorrect password', (done) => {
        chai.request(app)
        .post('/api/auth/login')
        .send({
            username: 'mohammed',
            email: 'ib@gmail.com',
            password: '23446'
        })
        .end((err, res) => {
          res.should.have.status(400)
        })
        done()
      })
  })

})
