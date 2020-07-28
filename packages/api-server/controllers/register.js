const { createSessions } = require('../utils/auth')

const registerUser = (db, bcrypt, req, res) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    return res.status(400).json('incorrect form submission');
  }
  const hash = bcrypt.hashSync(password);
    return db.transaction(trx => {
      trx.insert({
        hash: hash,
        email: email
      })
      .into('login')
      .returning('email')
      .then(loginEmail => {
        return trx('users')
          .returning('*')
          .insert({
            email: loginEmail[0],
            name: name,
            joined: new Date()
          })
          .then(user => user[0])
      })
      .then(trx.commit)
      .catch(trx.rollback)
    })
    .catch(err => res.status(400).json('unable to register'))
}

const handleRegister = (db, bcrypt) => (req, res) => {
  return registerUser(db, bcrypt, req, res)
    .then(user => {
      return user.id && user.email ? 
        createSessions(user) : 
        Promise.reject('Unable to register!')
    })
    .then(session => res.json(session))
    .catch(err => res.status(400).json(err));  
}

module.exports = {
  handleRegister: handleRegister
};


