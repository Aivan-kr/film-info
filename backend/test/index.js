const app = require('../app');
const request = require('supertest');

describe('REST', function() {
  describe('POST /films', function() {
    it('responds with json', function(done) {
      request(app)
        .post('/films')
        .send({
          title: 'Test' , 
          year : '1994',
          format : "test",
          stars : "Test"
        })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200 , done)
    });
  });

  describe('GET /films', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/films')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200 , done)
    });
  });
});