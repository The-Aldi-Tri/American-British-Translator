const chai = require('chai')
const chaiHttp = require('chai-http')
const mocha = require('mocha')
const { suite, test } = mocha
const assert = chai.assert
const server = require('../server.js')

chai.use(chaiHttp)

suite('Functional Tests', () => {
  test('Translation with text and locale fields', (done) => {
    chai
      .request(server)
      .keepOpen()
      .post('/api/translate')
      .send({ text: 'Mangoes are my favorite fruit.', locale: 'american-to-british' })
      .end((err, res) => {
        if (err) done(err)
        assert.equal(res.status, 200)
        assert.equal(res.body.translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.')
        done()
      })
  })

  test('Translation with text and invalid locale field', (done) => {
    chai
      .request(server)
      .keepOpen()
      .post('/api/translate')
      .send({ text: 'Mangoes are my favorite fruit.', locale: 'indo-to-british' })
      .end((err, res) => {
        if (err) done(err)
        assert.equal(res.status, 200)
        assert.equal(res.body.error, 'Invalid value for locale field')
        done()
      })
  })

  test('Translation with missing text field', (done) => {
    chai
      .request(server)
      .keepOpen()
      .post('/api/translate')
      .send({ locale: 'american-to-british' })
      .end((err, res) => {
        if (err) done(err)
        assert.equal(res.status, 200)
        assert.equal(res.body.error, 'Required field(s) missing')
        done()
      })
  })

  test('Translation with missing locale field', (done) => {
    chai
      .request(server)
      .keepOpen()
      .post('/api/translate')
      .send({ text: 'Mangoes are my favorite fruit.' })
      .end((err, res) => {
        if (err) done(err)
        assert.equal(res.status, 200)
        assert.equal(res.body.error, 'Required field(s) missing')
        done()
      })
  })

  test('Translation with empty text', (done) => {
    chai
      .request(server)
      .keepOpen()
      .post('/api/translate')
      .send({ text: '', locale: 'american-to-british' })
      .end((err, res) => {
        if (err) done(err)
        assert.equal(res.status, 200)
        assert.equal(res.body.error, 'No text to translate')
        done()
      })
  })

  test('Translation with text that needs no translation', (done) => {
    chai
      .request(server)
      .keepOpen()
      .post('/api/translate')
      .send({ text: 'We watched the footie match for a while.', locale: 'american-to-british' })
      .end((err, res) => {
        if (err) done(err)
        assert.equal(res.status, 200)
        assert.equal(res.body.translation, 'Everything looks good to me!')
        done()
      })
  })
})
