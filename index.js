function submitData(name, email) {
  const data = {
    name: name,
    email: email
  };

  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    const idElement = document.createElement('P');
    idElement.textContent = data.id;
    document.body.appendChild(idElement)
  })
  .catch(error => {
    const errorElement = document.createElement('P');
    errorElement.textContent = error.message;
    document.body.appendChild(errorElement)
  });
}
