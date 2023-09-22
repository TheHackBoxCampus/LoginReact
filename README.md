# Inicialización del proyecto

- clona el repositorio y accede al directorio 

```bash 
git clone https://github.com/TheHackBoxCampus/LoginReact.git ; cd LoginReact
```

- Instala las dependencias 

```bash 
npm install
```

- Configuracion de variables de entorno 
- indicated ports: [5186, 5187]

```txt
VITE_HOSTNAME= ... // host clubster or local
VITE_FRONTEND=... // port authorizated
VITE_BACKEND=... // port authorizated
USER_DB={"username": "...", "password": "...", "database": "..."}
KEY="..." // token secret
```

- configura tus credenciales, tu llave secreta y tu host de tu servidor
- el script de las colecciones se encuentra en src/services, puedes modificar y arreglar eso segun tus necesidades


## EL proyecto cuenta con 2 colecciones 
- Usuarios
- Roles

## Inicia el servidor
- Una vez que tengas las variables de entorno configuradas, es hora de iniciar el servidor y vite

### Servidor
- En la secccion del ``package.json`` llamada ``scripts`` encontraras un apartado que dice dev y server
- Para correr el servidor sera necesario ejecutar el siguiente comando.

```bash
npm run server
```
### Interfaz grafica

- Para correr la interfaz del proyecto:

```bash
npm run dev
```
