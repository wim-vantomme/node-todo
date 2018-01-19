const expect = require('expect')
const request = require('supertest')

const {app} = require('./../server')
const {Todo} = require('./../models/todo')

const todos = [{
  text: 'First test todo'
}, {
  text: 'Second test todo'
}, {
  text: 'Should you not do something else?'
}]

beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos)
  }).then(() => done())
})

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    const text = 'this is a test'

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text)
      })
      .end((err, res) => {
        if (err) {
          return done(err)
        }

        Todo.find().then((todos) => {
          const last = todos.length - 1
          expect(todos[last].text).toBe(text)
          done()
        }).catch((err) => done(err))
      })
  })

  it('should not create a todo with invalid body data', (done) => {
    let size
    Todo.find().then((todos) => {
      size = todos.length
    }).catch((err) => done(err))
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        Todo.find().then((todos) => {
          expect(todos.length).toBe(size)
          done()
        }).catch((err) => done(err))
      })
  })
})

describe('GET /todos', () => {
  it('should get all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(3)
      })
      .end(done)
  })
})
