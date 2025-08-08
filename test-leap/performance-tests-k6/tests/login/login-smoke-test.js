import http from "k6/http";
import { check, sleep } from "k6";
import { BASE_URL, ROUTES, CREDENTIALS } from '../../utils/config.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  vus: 2,
  duration: '10s',
  thresholds: {
    http_req_duration: ['p(99)<3000'], // 99% das requisições devem ser abaixo de 3s
    http_req_failed: ['rate<0.01'] // Menos de 1% de erros HTTP
  }
};

export default function () {
  const res = http.post(`${BASE_URL}${ROUTES.LOGIN}`, JSON.stringify(CREDENTIALS), {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  check(res, {
    'status should be 200': (r) => r.status === 200
  });

  sleep(1);
}

export function handleSummary(data) {
  const date = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  const projectName = "Projeto XPTO"
  const testName = "Teste de Performance"
  
  return {
    "reports/login/login-smoke-test.html": htmlReport(data, { title: `${testName} - ${projectName} - ${date}` }),
  }
}