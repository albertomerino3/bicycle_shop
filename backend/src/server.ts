import { app } from "./app";
//importar app que hemos exportado en app.ts
import { sequelize } from "./config/database";
import { env } from "./config/env";
//importamos y ejecutamos la definición de asociaciones ENTRE MODELOS
import { defineAssociations } from "./models/associations";

//importamos los modelos y así sequelize puede registrarlos
import "./modules/bicycles/bicycle.model";
import "./modules/brands/brand.model";

async function startServer() {
    try{        
        defineAssociations(); //ejecutamos
        
        //arranca la apliWEB para que escuche en el puerto 3000
        console.log("PASA POR AQUI 1");
        await sequelize.authenticate();
        console.log("Conection to MySQL established.");

        await sequelize.sync({ alter: true }).then(() => {
            console.log("Database synchronized successfully.");
        });
        console.log("PASA POR AQUI 2");
        
        app.listen(env.PORT, () => {
            console.log(
                `Servidor funcionando en http://localhost:${env.PORT}`
            );
        });
    } catch (error) {
        console.error(
            "No se pudo iniciar la aplicación:",
            error
        );
        process.exit(1);
    }
}

startServer();  //se llama a la función