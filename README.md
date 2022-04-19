# mds.PLL-NoSQL

Dans le cadre d'un module du master, ce repo recueille un prototype d'application utilisant MongoDB, une BDD NoSQL.

Document théorique : https://docs.google.com/document/d/1WTqxKgL1XdjsyBg9jBRyq6LDx8t2ZFSvLrcFhtOC0Sc/edit#heading=h.u1ljdl9rlf08

Choix des technologies :

- MongoDB
- Nuxt JS pour la partie client

## Maquette

https://whimsical.com/mds-pll-nosql-GGusdkaYbJ6Uf7qXdgAWa1

## TODO

- [ ] Créer une BDD MongoDB
  - [ ] Tester des interrogations de la base et mettre les exemples dans ce README

---

- Travailler sur le tableau d'objets pour l'affichage des données

---

- [ ] Créer l'interface selon la maquette
  - [ ] Utilisation de la base depuis l'interface

___ 

- [ ] Réaliser un benchmark entre NoSQL et SQL 
  - [ ] Lectures
  - [ ] Ecritures
  - [ ] Recherche

## MongoDB 
### Setup

```sh
# see https://www.mongodb.com/docs/v5.0/tutorial/install-mongodb-on-ubuntu/ 


wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add - 

# Ubuntu 20
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list

sudo apt-get update

sudo apt-get install -y mongodb-org
```
### Run
```sh
sudo systemctl start mongod
# if error : `sudo systemctl daemon-reload` 

sudo systemctl status mongod

mongosh
```
To restart MongoDB : `sudo systemctl restart mongod`

### Use

To start mongo shell : `mongosh` 

```sh
db.createCollection("messages")

db.getCollectionNames()


db.getCollection("messages").insertOne({
    name: "Mr. Test",
    content: "Test.",
    color: "green"
    })


db.getCollection("messages").countDocuments()

# list all
db.messages.find()
``` 
