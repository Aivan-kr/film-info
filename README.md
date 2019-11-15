# Film Info
## Test task for Webbylab
---
An aplication which allows user to store information about films.

### Technologies

#### Frontend:

+ React
+ Redux
+ React router
+ Redux-Saga
+ Bootstrap 4

#### Backend:

+ Node.js
+ Express
+ Mongoose

### Installing

A step by step series of examples that tell you have to get a development env running:

1. Clone the repo
```
git clone https://github.com/Aivan-kr/film-info.git
```
2. Install node
* [NodeJS](https://nodejs.org/)


3. Install mongodb and run mongo server
* [MongoDB](https://docs.mongodb.com/manual/installation/)

4. Move into the frontend folder and install dependencies:
```
cd frontend
npm i
```
5. Move into the backend folder and install dependencies:
```
cd backend
npm i
```

### Run

From backend folder

#### Development mode
```
npm run dev
```
Runs on port 3000.

#### Production mode
```
npm start
``` 
Runs on port 9000.


### Backend routes

##### POST /films
Req :
```json
{
  "title" : "Blazing Saddles",
  "year" : "1974",
  "format" : "VHS",
  "stars" : "Mel Brooks, Clevon Little, Harvey Korman"
}
```
Res : 
```json
{
    "_id": "5dc715955990381b0d0c9262",
    "title": "Blazing Saddles",
    "year": "1974",
    "format": "VHS",
    "stars": "Mel Brooks, Clevon Little, Harvey Korman",
    "__v": 0
}
```
##### GET /films
Res : 
```json
[
    {
        "_id": "5dc715955990381b0d0c9262",
        "title": "Blazing Saddles",
        "year": "1974",
        "format": "VHS",
        "stars": "Mel Brooks, Clevon Little, Harvey Korman",
        "__v": 0
    }
]
```
##### DELETE /films/:id

* id - id of film

Res : 
```json
{
    "errorCode": 0,
    "message": "Success"
}
```
##### GET /films/search/:path

* path - search text

Res : 
```json
[
    {
        "_id": "5dc716fcddc0671c0a0c683a",
        "title": "Blazing Saddles",
        "year": "1974",
        "format": "VHS",
        "stars": "Mel Brooks, Clevon Little, Harvey Korman",
        "__v": 0
    }
]
```
##### POST /films/upload

* file in form data
* header - 'Accept': 'application/json'

Res : 
```json
{
    "errorCode": 0,
    "message": "Success"
}
```

