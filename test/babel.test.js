var dev = require('../connect');
var request = require('supertest');
var connect = require('connect');
var app = connect();
app.use(connect.query());
app.use(dev.babel(__dirname));

describe('babel', function () {
  it('should 200', function (done) {
    request(app)
    .get('/assets/babel.es')
    .expect(200)
    .expect('"use strict";\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nvar Test = function Test() {\n  _classCallCheck(this, Test);\n};', done);
  });

  it('should 404', function (done) {
    request(app)
    .post('/assets/home.js')
    .expect(404, done);
  });

  it('should 404 with js', function (done) {
    request(app)
    .get('/assets/home.js')
    .expect(404, done);
  });

  it('should 404 with babel', function (done) {
    request(app)
    .get('/assets/inexsit.es')
    .expect(404, done);
  });

  it('should 404 with head & babel', function (done) {
    request(app)
    .head('/assets/inexsit.es')
    .expect(404, done);
  });

  it('should 500 with invalid es', function (done) {
    request(app)
    .head('/assets/invalid.es')
    .expect(500, done);
  });
});

