const express = require('express');
const {v4:uuid} = require('uuid');

const app = express();

app.use(express.json());

app.post('/reg', (req, res) => {
    
    let response = {
        "commands":[
           {
              "type":"com.okta.user.profile.update",
              "value":{
                 "firstName": req.body.data.userProfile.firstName,
                "lastName": req.body.data.userProfile.lastName,
                "email": req.body.data.userProfile.email,
                "countryCode": req.body.data.userProfile.countryCode,	    
                "hpeProfileID": uuid()
              }
           },
        ]
     }
    
    res.send(response);
});
app.get('/scim/v2/Users', (req, res) => {
    console.log('req.url=======================' + JSON.stringify(req.url));
    console.log('req.headers=======================' + JSON.stringify(req.headers));
    let response = {
        "schemas": [
            "urn:ietf:params:scim:api:messages:2.0:ListResponse"
        ],
        "id": "939c6caef2eb65494a888d565b0c55a0",
        "totalResults": 0,
        "startIndex": 1,
        "itemsPerPage": 0,
        "Resources": []
    };
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