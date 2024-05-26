   Clone the repository: `git@github.com:fmIst0/note-management-api.git`.
   
### Start Database
1. Ensure you have Docker installed on your system, open it.
2. Open terminal and run the application using Docker Compose with command: `docker-compose up -d`
3. Connect to the local DB using the IntelliJ IDEA interface, the port can be changed in the [.env](backend/.env) file `MYSQLDB_LOCAL_PORT=your port` (if needed)

   Credentials: username=`user`; password=`password`; Database=`note_management_db`; default_db_port=`3308`;
4. You can also check that the database is running with `docker-compose ps`.


   You can use `docker-compose down` command to stop the database running.


### Run API
1. Write `cd backend` in terminal to get to the backend directory and build project with `mvn clean install`.
2. Run project with `mvn spring-boot:run` command in terminal.

To stop execution press `Ctrl+C` in terminal 