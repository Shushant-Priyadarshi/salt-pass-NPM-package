# salt-password

salt-password is a lightweight npm package for securely salting, hashing, and verifying passwords in Node.js applications. It provides functions for generating random salts, hashing passwords using the SHA-256 algorithm, and verifying passwords against their hashed counterparts, enhancing the security of password storage and authentication processes.

# Installation

You can install salt-password using npm:

```bash
npm install salt-password
```

# Usage

## Generating a Salt

To generate a random salt, you can use the `generateSalt` function:

```javascript
const saltPass = require('salt-password');

const salt = saltPass.generateSalt();
console.log('Generated Salt:', salt);
```

## Hashing a Password

To hash a password using a salt, you can use the `hashPassword` function:

```javascript
// importing package
const saltPass = require('salt-password');

const password = 'YourPass';
const salt = generateSalt();     // generating salt using SHA-256
const hashedPassword = saltPass.hashPassword(password, salt); //Generating Password

console.log('Password:', password); //Your Password
console.log('Salt:', salt);  //Salt generated
console.log('Hashed Password:', hashedPassword); //Hashed Password
```



https://github.com/Shushant-Priyadarshi/salt-pass-NPM-package/assets/148479955/be297f3f-8f59-4f95-879a-97b57f4c3723


## Verifying a Password
```javascript
//importing package
const saltPass = require('salt-password');

const password = 'Shushi'; //Your Password
const salt = saltPass.generateSalt(); //Generating Salt


const hashedPassword = saltPass.hashPassword(password, salt); //Generating Hashed Password

const inputpass = "Shushi"; //Password input by user
const isPassValid = saltPass.verifyPassword(inputpass,hashedPassword,salt); //Checking if the password are matching
console.log(isPassValid); 
```




https://github.com/Shushant-Priyadarshi/salt-pass-NPM-package/assets/148479955/84abe081-2e68-45f7-b74c-929a212d94ce


# Contributing

Contributions are welcome! If you encounter any bugs, have feature requests, or want to contribute enhancements or fixes, please feel free to open an issue or submit a pull request.



