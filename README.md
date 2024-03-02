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
> - `EMAIL_SERVICE = hotmail`

#### JSON Web Tokens

- `JWT_SECRET`

### Variables para frontend

#### Vite

- `VITE_BACKEND_URL = http://localhost:3000/api`

## Referencia API

### Veterinario

- **Registrar un veterinario**

```http
  POST /api/registro
```

Body

```
{
  "nombre":"Juan",
  "apellido":"Perez",
  "direccion":"San Carlos",
  "telefono":"0999999999",
  "email":"juanP@hotmail.com",
  "password":"1234"
}
```

- **Iniciar Sesión**

```http
  POST /api/login
```
Body

```
{
  "email":"juanP@hotmail.com",
  "password":"1234"
}
```

- **Listar veterinarios**

```http
  GET /api/veterinarios
```

- **Confirmar Token**

```http
  GET /api/confirmar/:token
```

- **Recuperar contraseña**

```http
  POST /api/recuperar-password
```
Body

```
{
  "email":"juanP@hotmail.com",
}
```

- **Comprobar token para recuperar contraseña**

```http
  GET /api/recuperar-password/:token
```

- **Nueva contraseña**

```http
  POST /api/nuevo-password/:token
```
Body

```
{
  "password":"5678",
  "confirmpassword":"5678"
}
```

> [!IMPORTANT]
> Las rutas a continuación, correspondientes a Veterinario, se deben autenticar mediante un `Bearer Token`

- **Perfil del veterinario**

```http
  GET /api/perfil
```

- **Actualizar contraseña**

```http
  PUT /api/veterinario/actualizarpassword
```
Body

```
{
  "passwordactual":"5678",
  "passwordnuevo":"hola"
}
```

- **Detalle del veterinario**

```http
  GET /api/veterinario/:id
```

- **Actualizar perfil del veterinario**

```http
  PUT /api/veterinario/:id
```
Body

```
{
  "nombre":"nombre-actualizado",
  "apellido":"apellido-actualizado",
  "telefono":"022222222"
}
```

### Paciente

- **Iniciar Sesión**

```http
  POST /api/paciente/login
```
Body

```
{
  "email":"juan@gmail.com",
  "password":"9124htxqam7"
}
```

> [!IMPORTANT]
> Las rutas a continuación, correspondientes a Paciente, se deben autenticar mediante un `Bearer Token`

- **Registro**

```http
  POST /api/paciente/registro
```

Body

```
{
  "nombre":"Fide",
  "propietario":"Juan",
  "email":"juan@gmail.com",
  "celular":"0999999999",
  "convencional":"022222222",
  "ingreso":"03-21-2024",
  "sintomas":"Corte de pelo y desparasitación",
  "veterinario":"652d36f304c0962cf422d335"
}
```

> [!NOTE]
> El formato para fechas es *mes-día-año*.

- **Listar pacientes**

```http
  GET /api/pacientes
```

- **Perfil del paciente**

```http
  GET /api/paciente/perfil
```

- **Detalle del paciente**

```http
  GET /api/paciente/:id
```

- **Actualizar perfil del paciente**

```http
  PUT /api/paciente/actualizar/:id
```

Body

```
{
  "nombre":"Fidedigno",
  "propietario":"Juan Perez",
  "email":"juan@gmail.com",
  "sintomas":"Corte de pelo, desparasitación y limpieza de orejas"
}
```

- **Eliminar paciente**

```http
  DELETE /api/paciente/eliminar/:id
```
Body

```
{
  "salida":"03-22-2024" 
}
```

### Tratamiento

> [!IMPORTANT]
> Todas las rutas correspondientes a Tratamiento se deben autenticar mediante un `Bearer Token`

- **Registro o creación del tratamiento**

```http
  POST /api/tratamiento/registro
```

Body

```
{
  "nombre":"Limpieza",
  "descripcion":"Limpieza de orejas",
  "prioridad":"Alta",
  "paciente":"652efd300b16c9fca733d669"
}
```

- **Detalle del tratamiento**

```http
  GET /api/tratamiento/:id
```

- **Actualizar tratamiento**

```http
  PUT /api/tratamiento/:id
```
Body

```
{
  "nombre": "Tratamiento de limpieza",
  "prioridad":"Media"
}
```

- **Eliminar tratamiento**

```http
  DELETE /api/tratamiento/:id
```

- **Cambiar el estado del tratamiento**

```http
  POST /api/tratamiento/estado/:id
```

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

Confirmación de Correo Electrónico
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
Polivet-App
├─ backend
│  ├─ .env.example
│  ├─ package-lock.json
│  ├─ package.json
│  └─ src
│     ├─ config
│     │  └─ nodemailer.js
│     ├─ controllers
│     │  ├─ paciente_controller.js
│     │  ├─ tratamiento_controller.js
│     │  └─ veterinario_controller.js
│     ├─ database.js
│     ├─ helpers
│     │  └─ crearJWT.js
│     ├─ index.js
│     ├─ middlewares
│     │  ├─ autenticacion.js
│     │  └─ validacionVeterinario.js
│     ├─ models
│     │  ├─ Paciente.js
│     │  ├─ Tratamiento.js
│     │  └─ Veterinario.js
│     ├─ routers
│     │  ├─ paciente_routes.js
│     │  ├─ tratameinto_routes.js
│     │  └─ veterinario_routes.js
│     └─ server.js
├─ frontend
│  ├─ .env
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ postcss.config.cjs
│  ├─ public
│  │  └─ images
│  │     ├─ catforgot.jpg
│  │     ├─ doglogin.jpg
│  │     └─ dogregister.jpg
│  ├─ README.md
│  ├─ src
│  │  ├─ App.css
│  │  ├─ App.jsx
│  │  ├─ assets
│  │  │  ├─ code.png
│  │  │  ├─ consulting.png
│  │  │  ├─ dark.png
│  │  │  ├─ design.png
│  │  │  ├─ dog-hand.webp
│  │  │  ├─ doglost.jpg
│  │  │  ├─ facebook.png
│  │  │  ├─ fondos
│  │  │  │  ├─ captura-1.png
│  │  │  │  ├─ captura-2.png
│  │  │  │  ├─ captura-3.png
│  │  │  │  ├─ captura-4.png
│  │  │  │  ├─ captura-5.png
│  │  │  │  ├─ captura-6.png
│  │  │  │  └─ captura-7.png
│  │  │  ├─ github.png
│  │  │  ├─ linkedin.png
│  │  │  ├─ rocket.webp
│  │  │  ├─ twitter.png
│  │  │  ├─ web1.png
│  │  │  ├─ web2.png
│  │  │  ├─ web3.png
│  │  │  ├─ web4.png
│  │  │  ├─ web5.png
│  │  │  ├─ web6.png
│  │  │  └─ youtube.png
│  │  ├─ componets
│  │  │  ├─ Alertas
│  │  │  │  └─ Mensaje.jsx
│  │  │  ├─ Formulario.jsx
│  │  │  ├─ Perfil
│  │  │  │  ├─ CardPerfil.jsx
│  │  │  │  └─ FormularioPerfil.jsx
│  │  │  └─ Tabla.jsx
│  │  ├─ context
│  │  │  └─ AuthProvider.jsx
│  │  ├─ index.css
│  │  ├─ layout
│  │  │  ├─ Auth.jsx
│  │  │  └─ Dashboard.jsx
│  │  ├─ main.jsx
│  │  ├─ paginas
│  │  │  ├─ Actualizar.jsx
│  │  │  ├─ Confirmar.jsx
│  │  │  ├─ Crear.jsx
│  │  │  ├─ Forgot.jsx
│  │  │  ├─ LandinPage.jsx
│  │  │  ├─ Listar.jsx
│  │  │  ├─ Login.jsx
│  │  │  ├─ NotFound.jsx
│  │  │  ├─ Perfil.jsx
│  │  │  ├─ Register.jsx
│  │  │  ├─ Restablecer.jsx
│  │  │  └─ Visualizar.jsx
│  │  └─ routes
│  │     └─ PrivateRoutes.jsx
│  ├─ tailwind.config.cjs
│  └─ vite.config.js
└─ README.md
```
