const express = require('express');
const {v4:uuid} = require('uuid');

const app = express();

app.use(express.json());

app.post('/reg', (req, res) => {
    
    let response = {
        "commands":[
           {
              "type":"com.okta.user.pre-registration",
              "value":{
                 "firstName": req.body.data.userProfile.firstName,
                 "lastName": req.body.data.userProfile.lastName,
                 "email": req.body.data.userProfile.email,
                 "hpeProfileID": uuid()
              }
           },
           {
            "type": "com.okta.action.update",
            "value": {
              "registration": "ALLOW"
            }
          }
        ]
     }
    
    res.send(response);
});
app.get('/', (req, res) => {
    response = {
        "name": "maniraj",
        "role": "developer"
    }
    console.log(response);
    res.send(response);
});

const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));