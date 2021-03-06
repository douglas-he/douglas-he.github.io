const data = require('./data')

function entryCalculator(entrants) {
  if (entrants === undefined || JSON.stringify(entrants) === '{}') {
    return 0;
  }
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const { Adult: AdultP, Senior: SeniorP, Child: ChildP } = data.prices;
  return (Adult * AdultP) + (Child * ChildP) + (Senior * SeniorP);
};

function schedule(dayName = 0) {
  return (dayName ? [dayName] : Object.keys(data.hours)).reduce((acc, day) => {
    const { open, close } = data.hours[day];
    acc[day] = day === 'Monday' ? 'CLOSED'
    : `Open from ${open}am until ${close - 12}pm`
    return acc;
  }, {});
}

function animalCount(species) {
  let [...args] = data.animals;
  args = args.reduce((acc, cur) =>
  ({ ...acc, [cur.name]: cur.residents.length }), {})
  if (species === null || species === undefined) return args;
  return args[species];
}

function check(acc, cur) {
  if (acc[cur.location] === undefined) {
    acc[cur.location] = [];
    return acc;
  }
  return false;
}

function sexSearch(acc, cur, options) {
  acc[cur.location] = [...acc[cur.location], { [cur.name]:
  cur.residents.filter(animal => animal.sex === options.sex).map(element => element.name) }]
  return acc;
}

function sorted(acc, cur) {
  acc[cur.location] =
  [...acc[cur.location], { [cur.name]: cur.residents.map(element => element.name).sort() }]
  return acc;
}

function normal(acc, cur) {
  acc[cur.location] =
  [...acc[cur.location], { [cur.name]: cur.residents.map(element => element.name) }]
  return acc;
}

function all(acc, cur) {
  acc[cur.location] = [...acc[cur.location], cur.name];
  return acc;
}

function animalMap(options) {
  if (!options || !options.includeNames) {
    return data.animals.reduce((acc, cur) => {
      check(acc, cur);
      all(acc, cur);
      return acc;
    }, {})
  } else if (options.includeNames) {
    return data.animals.reduce((acc, cur) => {
      check(acc, cur);
      if (options.sorted) return sorted(acc, cur)
      if (options.sex) return sexSearch(acc, cur, options);
      return normal(acc, cur);
    }, {})
  }
  return true;
};

function animalPopularity(rating) {
  // seu código aqui
};

function animalsByIds(...ids) {
  if (ids[0] === undefined) {
    return {};
  }
  return ids.reduce((arr, cur) =>
  ([...arr, data.animals.find(el => el.id === cur)]), [])
}

function animalByName(animalName) {
  // seu código aqui
};

function employeesByIds(ids) {
  // seu código aqui
};

function employeeByName(Name) {
  return (Name === undefined) ? {} : data.employees
  .find(pesq => Name === pesq.firstName || pesq.lastName === Name);
};

function managersForEmployee(idOrName) {
  // seu código aqui
};

function employeeCoverage(element) {
  if (element === undefined) {
    return (data.employees.reduce((arr, cur) => {
      arr[`${cur.firstName} ${cur.lastName}`] = cur.responsibleFor.map(ele =>
      data.animals.find(el => el.id === ele).name)
      return arr;
    }, {}))
  }
  const arrai = data.employees.find(el =>
    element === el.id || element === el.firstName || element === el.lastName);
  const arrFinal = arrai.responsibleFor.map(ele => data.animals.find(el =>
    ele === el.id).name);
  return { [`${arrai.firstName} ${arrai.lastName}`]: arrFinal };
};

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor })
}
function isManager(id) {
  return data.employees.some(({ managers }) =>
  managers.some(ids => ids === id))
}

function animalsOlderThan(animal, age) {
  return data.animals.find(ele => ele.name === animal)
  .residents.every(ele => ele.age > age);
}

function oldestFromFirstSpecies(id) {
  return [...Object.values(((data.animals.find(ele => ele.id === data.employees
  .find(pesq => pesq.id === id).responsibleFor[0]))
  .residents.sort((a, b) => b.age - a.age)[0]))]
}

function adiciona(item, percentage) {
  return Math.round(((item + ((item * percentage) / 100)) * 100)) / 100;
}

function increasePrices(percentage) {
  const [AdultP, SeniorP, ChildP] = Object.values(data.prices);
  data.prices = {
    Adult: adiciona(AdultP, percentage),
    Senior: adiciona(SeniorP, percentage),
    Child: adiciona(ChildP, percentage)
  }
}

class Animal {
  constructor(name = '', age = 0, sex = 'male', species = '') {
    this.name = name
    this.age = age
    this.sex = sex
    this.species = species.slice(0, -1)
    Animal.total += 1;
  }
  info() {
    return `${this.name} is a ${this.age} year old ${this.sex} ${this.species}`
  }
  static totalAnimals() {
    return Animal.total;
  }
}

Animal.total = 0;

function createAnimals() {
  const animals = [];
  data.animals.forEach(animal => (
    animal.residents.forEach(ele => (
      animals.push(new Animal(ele.name, ele.age, ele.sex, animal.name))
    ))
  ))
  return animals;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

module.exports = {
  entryCalculator: entryCalculator,
  schedule: schedule,
  animalCount: animalCount,
  animalMap: animalMap,
  animalPopularity: animalPopularity,
  animalsByIds: animalsByIds,
  animalByName: animalByName,
  employeesByIds: employeesByIds,
  employeeByName: employeeByName,
  managersForEmployee: managersForEmployee,
  employeeCoverage: employeeCoverage,
  addEmployee: addEmployee,
  isManager: isManager,
  animalsOlderThan: animalsOlderThan,
  oldestFromFirstSpecies: oldestFromFirstSpecies,
  increasePrices: increasePrices,
  createAnimals: createAnimals,
  Animal: Animal,
  createEmployee: createEmployee
}
