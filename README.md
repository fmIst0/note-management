### Run API
1. Clone the repository: `git@github.com:fmIst0/note-management-api.git`.
2. Build project with `mvn clean install` in terminal.
3. Ensure you have Docker installed on your system, open it.
4. Open terminal and run the application using Docker Compose with command: `docker-compose up -d`
5. Connect to the local DB using the IntelliJ IDEA interface, the port can be changed in the [.env](.env) file `MYSQLDB_LOCAL_PORT=your port` (if needed)
    
    Credentials: username=`user`; password=`password`; Database=`note_management_db`; default_db_port=`3308`;
6. You can also check that the database is running with `docker-compose ps`.
7. Run project with `mvn spring-boot:run` command in terminal.
8. To stop execution press `Ctrl+C` in terminal and use `docker-compose down` command to stop the database.