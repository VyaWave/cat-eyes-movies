export default (resource, name) => {
  return resolve => {
    resource.then(data => {
      resolve(data[name])
    })
  }
}
