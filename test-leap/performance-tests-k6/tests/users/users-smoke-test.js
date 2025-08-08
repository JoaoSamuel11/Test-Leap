import http from "k6/http";
import { check, sleep } from "k6";
import { BASE_URL, ROUTES } from '../../utils/config.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  vus: 30, // Número de VUs (usuários virtuais)
  duration: '30s', // Duração do teste
  thresholds: {
    http_req_duration: ['p(95)<300'], // 99% das requisições devem ser abaixo de 3s
    http_req_failed: ['rate<0.01'] // Menos de 1% de erros HTTP
  }
};

export default function () {
  const headers = {
    "Content-Type": "application/json",
  };

  const res = http.get(`${BASE_URL}${ROUTES.USERS}`, { headers });

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}

export function handleSummary(data) {
  const date = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  const projectName = "Projeto XPTO"
  const testName = "Teste de Performance"
  
  return {
    "reports/users/users-smoke-test.html": htmlReport(data, { title: `${testName} - ${projectName} - ${date}` }),
  }
}