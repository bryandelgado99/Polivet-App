# Aplicación de Gestión Veterinaria - POLIVET 🐶😺

POLIVET es un sistema encargado de automatizar la gestión de una veterinaria y sus principales actores (veterinarios, pacientes y tratamientos). Este proyecto consta de dos componentes: 
* #### Backend 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;API RESTful desarrollada en ExpressJS con conexión a MongoDB, Atlas o local, según la necesidad.
* #### Frontend
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Diseño y presentación de la interfaz de usuario usando React como biblioteca JavaScript para esta tarea.

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
3. Configura las [variables de entorno](#noID)

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

### Funcionamiento
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
