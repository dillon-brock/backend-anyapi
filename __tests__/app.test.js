const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET /plants should return a list of plants', async () => {
    const resp = await request(app).get('/plants');
    expect(resp.body.length).toEqual(4);
    expect(resp.body[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      latin_name: expect.any(String),
    });
  });
  it('GET /plants/:id should return the plant detail', async () => {
    const resp = await request(app).get('/plants/1');
    expect(resp.body).toEqual({
      id: '1',
      name: 'Spider Plant',
      latin_name: 'Chlorophytum comosum',
      water_need: 'once a week',
      light_need: 'indirect sun',
      indoor: true
    });
  });
  afterAll(() => {
    pool.end();
  });
});
