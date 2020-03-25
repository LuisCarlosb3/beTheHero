## Back-End API  for Be the Hero application

API created using NodeJS with Express for backend service during Omnistack 11

### Built with

* **NodeJS** - 12.16.1
* **Postgres** - PostgreSQL12

### Usage

For connect postgres database change values at *./src/database/config.json*

```
 "[ENVIROMENT]": {
    "username": [DATABASE_USER],
    "password": [DATABASE_URL],
    "database": [DATABASE_NAME],
    "host": [DATABASE_HOST],
    "port":"5432",
    "dialect": "postgres"
  },
```
Use the script above for run th server at 3333 port
```
npm run start
```
### API URL's

|VERB|POINT| PARAMETERS|RETURN|
|:--------:|:-------:|------------ |:-----:|
|POST| /ongs |body {name, email, whatsapp, city, uf}|object created|
|GET| /ongs |  | list of ongs|
|POST| /incident | body {title, description, value}<br>header {authorization} | lobject created|
|GET|/incident| |list of incidents
|DELETE|/incident/:id |header {authorization}|no content|
|GET|/profile/|header {authorization}|ongs's incidents
|POST|/session|body {id}|ONG information|

#### Aditional information
Header authorization have been ONG register id





