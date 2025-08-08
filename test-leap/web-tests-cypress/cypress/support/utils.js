// Funções auxiliares
const getRandomDigit = () => Math.floor(Math.random() * 10);
const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];
const IMAGE_PATH = "cypress/fixtures/images/";

// Geradores aleatórios
export function randomCPF() {
  let cpf = Array.from({ length: 9 }, getRandomDigit);

  const calcularDigito = (nums) => {
    const soma = nums.reduce((acc, num, index) => acc + num * (nums.length + 1 - index), 0);
    return (soma * 10) % 11 % 10;
  };

  cpf.push(calcularDigito(cpf));
  cpf.push(calcularDigito(cpf));
  return cpf.join('');
}

export function randomPhone() {
  const DDD = "85";
  const numero = Array.from({ length: 8 }, getRandomDigit).join('');
  return `(${DDD}) 9${numero.slice(0, 4)}-${numero.slice(4)}`;
}

export function randomEmail() {
  const firstName = generateRandomFirstName();
  const timestamp = Date.now();

  return `${firstName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()}${timestamp}@loomi.com`;
}

// Geradores de nomes
export function generateRandomName() {
  return `${generateRandomFirstName()} ${generateRandomSurname()}`;
}

export function generateRandomCompany() {
  const prefixos = ["Tech", "Inova", "Global", "Prime", "Future", "Digital", "Smart", "Alpha", "Eco"];
  const sufixos = ["Solutions", "Serviços", "Consultoria", "Indústria", "Marketing", "Sistemas", "Desenvolvimento", "Tecnologia"];

  return `${getRandomElement(prefixos)} ${getRandomElement(sufixos)}`;
}

export function generateRandomFirstName() {
  const firstNames = [
    "Ana", "Carlos", "Lucas", "Maria", "Joao", "Fernanda", "Rafael", "Carla", "Pedro", "Patricia",
    "Ricardo", "Juliana", "Gustavo", "Beatriz", "Tiago", "Luana", "Felipe", "Isabela", "Marcos", "Camila"
  ];

  return getRandomElement(firstNames);
}

export function generateRandomSurname() {
  const surnames = [
    "Silva", "Oliveira", "Costa", "Pereira", "Santos", "Souza", "Almeida", "Fernandes", "Rodrigues", "Lima",
    "Nascimento", "Gomes", "Martins", "Barbosa", "Araujo", "Mendes", "Carvalho", "Nascimento", "Pinto", "Dias"
  ];

  return getRandomElement(surnames);
}