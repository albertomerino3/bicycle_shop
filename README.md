BICYCLE_SHOP
Esto es un proyecto donde creamos una API desde 0, trabajamos sobre todo con el backend y la conectamos al fontend. Usando la tienda de bicicletas creamos endpoints, para aprender a manejarlos, almacenar los datos en MySQL y utilizando React para crear, leer, actualizar y eliminar bicicletas.

El backend utiliza TypeScript, express y sequelize. El fronted Typescript, React y Vite.


Comenzando 🚀
Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

Mira Deployment para conocer como desplegar el proyecto.

Pre-requisitos 📋
Qué cosas necesitas para instalar el software y como instalarlas:
- Node.js (versión 18 o superior recomendada)
- npm o yarn (gestor de paquetes)
- MySQL Server (para la base de datos)

Ejemplo de verificación de Node y npm en TERMINAL 🔧
  node -v
  npm -v

INSTALACIÓN 🔧
  1. CLONA EL **REPOSITORIO**
     git clone https://github.com/tu-usuario/bicycle-shop.git
     cd bicycle-shop
     
  2. CONFIGURACIÓN DEL **BACKEND**
    navega a la carpeta > backend e instala dependencias
     cd backend
     npm install

  3. CONFIGURACIÓN DE LA **BASE DE DATOS**
    crea un archivo .env en la raíz del backend basándote en el archivo de ejemplo y configura tus credenciales de MySQL:
      PORT=3000
      DB_NAME=bicycle_shop_db
      DB_USER=tu_usuario_mysql
      DB_PASSWORD=tu_contraseña_mysql
      DB_HOST=localhost
      DB_PORT=3306
    
  4. CONFIGURACIÓN DEL **FRONTED**
    abre otra terminal, navega a la carpeta fronted e instala las dependencias
      cd fronted
      npm install
     
  5. **EJECUTAR** EL PROYECTO EN DESARROLLO
     para iniciar el backend
       cd backend
       npm run dev
     para iniciar el fronted
       cd fronted
       npm run dev
     
  6. DEMOSTRACIÓN DE USO (endpoints de la API)
     puedes realizar peticiones HTTO (con postman o cURL) para obtener bicicletas registradas
       curl -X GET http://localhost:3000/api/bicycles


Ejecutando las pruebas ⚙️
Explica como ejecutar las pruebas automatizadas para este sistema

Pruebas end-to-end 🔩
Estas pruebas verifican el flujo completo de la aplicación, simulando las acciones del usuario (como crear o eliminar una bicicleta desde la interfaz de React y comprobar que se guarden en MySQL). Esto asegura que la comunicación entre el frontend, el backend y la base de datos funcione sin interrupciones.

Ejemplo de ejecución:
    npm run test:e2e

Pruebas de estilo de codificación ⌨️
Estas pruebas verifican que el código cumpla con los estándares de formato y linting establecidos (por ejemplo, usando ESLint y Prettier) para mantener un código limpio y legible en TypeScript.

Ejemplo:
    npm run lint
    
Despliegue 📦
Notas adicionales sobre como hacer deploy:
Para el **Backend**: Puedes desplegar la API en servicios como Render, Railway o AWS, asegurándote de configurar las variables de entorno de producción y conectar una base de datos MySQL remota.

Para el **Frontend**: Puedes compilar los archivos estáticos ejecutando npm run build en la carpeta frontend y desplegarlos en plataformas como Vercel o Netlify.

Construido con 🛠️
Herramientas utilizadas para crear tu proyecto:
TypeScript - Lenguaje de programación tipado.

Express - El framework web usado para el backend.

Sequelize - ORM para Node.js para interactuar con MySQL.

React - Biblioteca de JavaScript para construir la interfaz de usuario.

Vite - Empaquetador y entorno de desarrollo rápido para el frontend.

MySQL - Sistema de gestión de bases de datos relacionales.


Contribuyendo 🖇️
Por favor lee el CONTRIBUTING.md para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

Wiki 📖
Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra Wiki

Versionado 📌
Usamos SemVer para el versionado. Para todas las versiones disponibles, mira los tags en este repositorio.

Autores ✒️

Alberto Merino - Trabajo Inicial y documentación - albertomerino3
