# Javascript-pet-management-system

This is the pet management system support by JS HTML CSS for Frontend and Rails for Backend. 

There are three models, Owner, Pet and Clinic. They have relationship each other.

For example, pet belongs to Owner and Clinic. Owner could have many clinics through Pet. Likewise from Clinic.


## Instruction

### Backend Preparation

`/backend`

Uner backend folder, run the followiing commands.

`bundle install`

Install all the necessary gems for this application. Especially, 'rack-cors' and
'fast_jsonapi' are used for Rails Backend.

`rails db:migrate`

Migrate the database which is described in `db/migrate` folder.

`rails db:seed`

Seed some datas into sqlite3. In this example, I put 2 clinics and 1 owner.

`rails server -p 3005`

This command is for running the backend server on port number 3005.
It will show the URL address to access. Make sure that it contains `http` protocol.
It should be `http`, not `https`. In my example, it was `http://0.0.0.0:3005`.

## Development Environment

OS: Windows 10 and WSL2 Ubuntu 20.04 Web browser: Chrome 91 

## License

Under the MIT License

## Reference

`https://github.com/Joeycho/sinatra-pet-management-system`

`https://github.com/Joeycho/rails-pet-management-system`

`https://github.com/Joeycho/react-redux-pet-management-system`

`https://github.com/learn-co-curriculum/js-rails-as-api-creating-a-rails-api-from-scratch`

`https://github.com/learn-co-students/js-rails-as-api-using-fast-json-api-v-000`

## Feedback

Not yet
