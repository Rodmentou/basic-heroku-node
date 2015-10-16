# basic-heroku-node
This is a basic Node server to test deployment on Heroku. 

git clone https://github.com/Rodmentou/basic-heroku-node.git

heroku create

heroku git:remote -a <name given to the dyno on the create>

git push heroku master

heroku open
