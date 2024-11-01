# Proyecto de Consulta de Tipo de Cambio - Frontend

Este proyecto consiste en la parte frontend de una aplicación que permite consultar el tipo de cambio actual utilizando React. El frontend consume un endpoint REST del backend y muestra el tipo de cambio en una interfaz de usuario.

## Estructura del Proyecto

- **Frontend**: React, realiza una petición al backend y muestra el tipo de cambio en la interfaz.

## Tecnologías

- **React**
- **Axios**

## Requisitos

- **Node.js**
- **npm**

---

## Configuración del Frontend

### 1. Clonar el Repositorio

Clona el repositorio en tu máquina local.

```bash
git clone https://github.com/tu-usuario/proyecto-tipo-cambio.git
cd proyecto-tipo-cambio/frontend
```

### 2. Instalar Dependencias

Instala las dependencias del proyecto utilizando npm.

```bash
npm install
```

### 3. Ejecutar el Frontend

Inicia el servidor de desarrollo de React:

```bash
npm start
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Funcionalidades

- **Interfaz de usuario**: Botón para obtener el tipo de cambio actual.
- **Manejo de errores**: Muestra mensajes de carga y errores de conexión.

## Ejemplo de Uso

1. En la interfaz de React, haz clic en el botón para obtener el tipo de cambio.
2. El frontend hace una solicitud al backend y muestra la fecha y el tipo de cambio obtenido.

## Contribuciones

Este proyecto está abierto a contribuciones. Si deseas mejorar alguna funcionalidad o agregar una nueva, no dudes en hacer un fork del repositorio y enviar un pull request.

## Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo LICENSE para más información.