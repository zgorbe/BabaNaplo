# Build

Build the project with

    $ mvn clean install

# Run

Now you can run your webapp with:

    $ sh target/bin/webapp

(the wrapper script is not executable by default).

# Export/Import mongo data

./mongodump -h xxxxxxx.mongolab.com:xxxxx -d heroku_appxxxxxxx -u heroku_appxxxxxxx -p xxxxxxxx -o timcsi/data/db

./mongorestore -h localhost:27017 -d local timcsi/data/db/heroku_appxxxxxxx