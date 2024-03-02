# Aplicación de Gestión Veterinaria - POLIVET 🐶😺

POLIVET es un sistema encargado de automatizar la gestión de una veterinaria y sus principales actores (veterinarios, pacientes y tratamientos). Este proyecto consta de dos componentes: 
* #### Backend 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;API RESTful desarrollada en Node.js y Express.js con conexión a MongoDB, Atlas o local, según la necesidad.
* #### Frontend
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Diseño y presentación de la interfaz de usuario usando React como biblioteca JavaScript para esta tarea.

## Tecnologías Usadas
- **Backend** 

Se usó ReactJS, esta es una biblioteca JavaScript que permite construir interfaces de usuario a partir de piezas individuales llamadas componentes.

<p align="center">
  <img src="https://www.webinartechnologies.com/wp-content/uploads/2020/10/reactjs-980x521.png" width="350px">
</p>

- **Frontend** 

Node.js como motor de ejecución multiplataforma basado en JavaScript, diseñado para crear aplicaciones web escalables y que utiliza un modelo asíncrono y controlado por eventos para manejar múltiples conexiones al mismo tiempo.

<p align="center">
  <img src="https://i.pinimg.com/originals/60/44/ec/6044ecf02428c2d52e80b989af2d4e37.jpg" width="350px">
</p>

Express.js es un framework para Node.js usado para el desarrollo del backend de aplicaciones web, es decir, ayuda a construir API RESTful, basadas en JavaScript.  

<p align="center">
  <img src="https://miro.medium.com/v2/resize:fit:6668/1*XP-mZOrIqX7OsFInN2ngRQ.png" width="350px">
</p>

- **Base de Datos** 

MongoDB, local y Atlas, fue la base de datos elegida para el proyecto, esta es del tipo NoSQL (almacena datos en documentos JSON), es altamente escalable y adecuada para grandes volúmenes de datos.

<p align="center">
  <img src="https://th.bing.com/th/id/R.4099ef6a1abf1017541a3610518ae1bc?rik=MBn0BEzOCzDMIg&riu=http%3a%2f%2fs3.amazonaws.com%2finfo-mongodb-com%2f_com_assets%2fcms%2fkuzt9r42or1fxvlq2-Meta_Generic.png&ehk=4LHQqZSvagc%2fLeF%2fIYFZWxb2l%2fqZbOWQctbvElNvSv8%3d&risl=&pid=ImgRaw&r=0" width="350px">
</p>

## Instalación Local
1. Clona el repositorio 
```bash
  git clone https://github.com/bryandelgado99/Polivet-App.git
```
2. Navega a la carpeta a la que desees acceder
```bash
  cd backend 
```
&nbsp;&nbsp;&nbsp;o

```bash
  cd frontend
```
3. Configura las [variables de entorno](#variables-de-entorno)

4. Instala las dependencias del proyecto
```bash
  npm install
```
5. Inicia el servidor 
```bash
  npm run dev
```

> [!IMPORTANT]
> Los puntos del 3 al 5 deben realizarse para cada componente de este proyecto, es decir, para el backend y el frontend. 

## Variables de entorno

Para ejecutar este proyecto, necesitas añadir las siguientes variables de entorno a tu archivo `.env`

Este archivo se debe ubicar en la raíz de la carpeta que corresponda al componente requerido.

`/backend/.env` y `/frontend/.env`

### Variables para backend

#### Base de datos

- `MONGODB_URI =` tu URL de MongoDB local o Atlas

#### Nodemailer 

- `URL_FRONTEND = http://localhost:5173/`

- `URL_BACKEND = http://localhost:3000/api/`

#### SMTP de Gmail

- `HOST_MAILTRAP = smtp.gmail.com`

- `PORT_MAILTRAP = 465`

- `USER_MAILTRAP =` tu correo electrónico de Gmail

- `PASS_MAILTRAP =` tu contraseña

> [!Note]
> Actualmente el proyecto usa el SMTP de Gmail, sin embargo, también es posible utilizar Mailtrap o el SMTP de Hotmail. Para este último, se debe añadir la siguiente variable:
> - `EMAIL_SERVICE = hotmail`.

#### JSON Web Tokens

- `JWT_SECRET`

### Variables para frontend

#### Vite

- `VITE_BACKEND_URL = http://localhost:3000/api`

## Autores

- Eduardo Almachi - [@edusebass](https://github.com/edusebass)

- Bryan Delgado - [@bryandelgado99](https://github.com/bryandelgado99)

- Brittany Espinel - [@brittanypallasco2003](https://github.com/brittanypallasco2003)

- Mateo Miño - [@Mino-Mateo](https://github.com/Mino-Mateo)

- Melany Sangucho - [@SanguchoMela](https://github.com/SanguchoMela)

- David Vallejo - [@DavidPK8](https://github.com/DavidPK8)

- Erick Villaroel - [@ErickVillarroel1722](https://github.com/ErickVillarroel1722)

- Danny Yanacallo - [@DannyYanacallo1755](https://github.com/DannyYanacallo1755)

## Capturas de pantalla
Landing Page
---
![Image text](https://raw.githubusercontent.com/Byrontosh/Plantilla-App-Demo/main/src/assets/fondos/captura-1.png)

Inicio de Sesión
---
![Image text](https://raw.githubusercontent.com/Byrontosh/Plantilla-App-Demo/main/src/assets/fondos/captura-2.png)

Registro
---
![Image text](https://raw.githubusercontent.com/Byrontosh/Plantilla-App-Demo/main/src/assets/fondos/captura-3.png)

Recuperación de Contraseña
---
![Image text](https://raw.githubusercontent.com/Byrontosh/Plantilla-App-Demo/main/src/assets/fondos/captura-4.png)

Correo de Confirmación 
---
![Image text](https://raw.githubusercontent.com/Byrontosh/Plantilla-App-Demo/main/src/assets/fondos/captura-6.png)

Página no Encontrada
---
![Image text](https://raw.githubusercontent.com/Byrontosh/Plantilla-App-Demo/main/src/assets/fondos/captura-5.png)

Dashboard o Panel Central de Información
---
![Image text](https://raw.githubusercontent.com/Byrontosh/Plantilla-App-Demo/main/src/assets/fondos/captura-7.png)

## Estructura del proyecto
```
(Árbol del proyecto)
```
