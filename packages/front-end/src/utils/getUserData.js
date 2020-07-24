const getUserData = (id, token) => new Promise ((resolve, reject) => {
  fetch(`http://localhost:3000/profile/${id}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer: ${token}`
    }
  })
  .then(res => res.json())
  .then(user => {
    if (user && user.email) {
      resolve(user)
    }
  })
  .catch(err => reject(err))
});

export default getUserData;