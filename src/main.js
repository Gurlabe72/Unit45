// function getEmails (people, options) {
//   options = options || {}
//   var withNames = options.withNames || false
//   var onlyActive = options.onlyActive || false
const getEmails = (people, options = { withNames: false, onlyActive: false}) => { 
const {withNames, onlyActive} = options;

  if (onlyActive) {
    people = people.filter(isActive)
  }

  // return people.map(function (person) {
  //   var result = ''
return people.map((person) => {
  const {name, email} = person;
  let result = '' 
    if (withNames) {
     // result = person.name + ' <' + person.email + '>'
     result = `${name} <${email}>`
    } else {
      //result = person.email
      result = email
    }
    return result
  }).join(', ')
}
//================================================//
// function getAddresses (people, options) {
//   options = options || {}
//   var onlyActive = options.onlyActive || false
const getAddresses = (people, options={onlyActive: false}) => {
  const {onlyActive} = options;
  if (onlyActive) {
    people = people.filter(isActive)
  }

  // return people.map(function (person) {
  //   var address = person.address
  //   var fullAddress = person.name + '\n' + address.line1 + '\n'
  return people.map((person) => {
    const {name, address} = person;
    const {line1, line2, city, state} = address;
    let fullAddress = `${name}\n${line1}\n`

    if (address.line2) {
      fullAddress += address.line2 + '\n'
    }

    // fullAddress += address.city + ', ' + address.state
    // return fullAddress
    fullAddress += `${city}, ${state}`
    return fullAddress

  }).join('\n\n')
}
//================================================//
// function getYoungest (people) {
//   people.sort(function (personA, personB) {

const getYoungest = (people) => {
people.sort((personA, personB) => {

    return personA.age - personB.age
  })

  // return {
  //   youngest: people[0],
  //   others: people.slice(1)
  const [youngest, ...others] = people;
  return {
    youngest,
    others
  }
  }

// =============================================//
// function isActive (person) {
//   return person.isActive
// }
const isActive = (person) => {
  return person.isActive
}


module.exports = {
  getEmails: getEmails,
  getAddresses: getAddresses,
  getYoungest: getYoungest
}
