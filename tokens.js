const jwt = require('jsonwebtoken')

const SECRET = "detärorimligt"
const payload = {
  userId: 1337
}

const token = jwt.sign(payload, SECRET, { expiresIn: '3s' } )

console.log(token);

let decrypted = jwt.verify( token, SECRET )
console.log(decrypted);


setTimeout( () => {
  decrypted = jwt.verify( token, SECRET )
  console.log(decrypted);
}, 5000)


