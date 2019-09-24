const p = new Promise((resolve, reject) => {
  resolve(5);
});

p.then(result => result * 5)
  .then(result => Promise.reject(Error(`Upss`)))
  .then(result => result * 5)
  .then(result => console.log(result))
  .catch(reason => console.log(reason))
  .finally("Wykonam sie zawsze");
