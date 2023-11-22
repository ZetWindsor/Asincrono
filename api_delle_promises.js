`Implementare le funzioni fetchPersonById e fetchJobById, le quali dato un id devono restituire rispettivamente:

La persona che ha come identificativo l'id passato come parametro
Il tipo di lavoro che ha come identificativo l'id passato come parametro
Infine implementare il codice necessario che si occupa di stampare in console la persona e il tipo di lavoro trovato. 
N.B: la stampa dei risultati deve avvenire solo nel momento in cui entrambe le Promise sono state risolte.`

const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

function fetchPersonById(id) {
  return promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(person => person.id == id);
      if (person) {
        return resolve(person)
      } else {
        return reject(`No person with id ${id}`)
      }
    }, 3000)
  })
};
function fetchJobById(id) {
  return promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = jobs.find(job => job.id == id);
      if (job) {
        return resolve(job)
      } else {
        return reject(`No job with id ${id}`)
      }
    }, 2000)
  })
}


Promise.all([fetchPersonById(1), fetchJobById(1)]).then(
  ([person, job]) => { console.log(`Persona:`, person.firstName); console.log(`Lavoro :`, job.jobTitle); }
).catch(error => { console.log(error) })

/* se metto due id diversi nelle funzioni mi da due risultati diversi, come potrei fare in modo di settare per entrambi
un solo id contemporaneamente? */
/* e poi non dovrebbe stamapore prima il lavoro e poi la perosna essendo che il tmepo del alvoro è di 2 secondi??*/