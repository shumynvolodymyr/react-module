export const getCarID = (id) => {
  return fetch('http://195.72.146.25/api/v1/cars/'+id).then(value => value.json())
}
