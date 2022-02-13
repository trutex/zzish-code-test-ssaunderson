const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

const expect400Response = (response) => {
  expect(response.status).toBe(400);
  expect(response.text).toBe('a query param value for "email" and "location" must be supplied');
};

describe('endpoint response', () => {
  it('should return a 400 status if email and location query params are missing', async () => {
    const response = await request.get('/features');
    expect400Response(response);
  });

  it('should return a 400 status if email query param is missing', async () => {
    const response = await request.get('/features?location=GB');
    expect400Response(response);
  });

  it('should return a 400 status if location query param is missing', async () => {
    const response = await request.get('/features?email=ed@zzish.com');
    expect400Response(response);
  });

  it('should return 200 status if email and location query params are included', async () => {
    const response = await request.get('/features?email=ed@zzish.com&location=GB');
    expect(response.status).toBe(200);
  });
});

