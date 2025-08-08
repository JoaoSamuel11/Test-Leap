import http from 'k6/http';
import { check } from 'k6';
import { BASE_URL, CREDENTIALS, ROUTES } from './config.js';

export function getToken() {
  let res = http.post(`${BASE_URL}${ROUTES.LOGIN}`, JSON.stringify(CREDENTIALS), {
    headers: {
      "Content-Type": "application/json",
    },
  });

  check(res, {
    'Status should be 200': (r) => r.status === 200
  });

  return res.json("authorizationToken");
}