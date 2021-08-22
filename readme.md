# API REST NODE EXAMPLE

- open in port 3000
- mongoose + express

```
npm install

npm run start
```

# ENDPOINT:

```
POST : /postulant
GET : /postulant
PUT : /postulation
DELETE : /postulation
```

# CURL EXAMPLE FOR POSTMAN

```
curl --location --request POST 'http://localhost:3000/postulation' \
--header 'Content-Type: application/json' \
--data-raw '{
    "postulantId": "61227c2c27c9ab0e82fe1f79",
    "vacantId": "61227e66b98fd2100f4127db",
    "origin": "LANDING",
    "status": "PENDING",
    "active": true,
    "InterviewersNames": [
        "sebastian alvarew"
    ],
    "stepInterview": "LANDING"
}'
```
