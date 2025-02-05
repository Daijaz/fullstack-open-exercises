```markdown
# Ejercicio 0.6: Nueva nota en diagrama de aplicación de una sola página

## Descripción
Este diagrama representa la secuencia de eventos cuando un usuario crea una nueva nota en la versión de **Single Page Application (SPA)** de la aplicación. A diferencia de la versión tradicional, no hay redirección ni recarga de la página. El navegador actualiza la interfaz de usuario dinámicamente usando JavaScript.

## Diagrama de secuencia
```mermaid
    sequenceDiagram
        participant browser
        participant server

        Note right of browser: El usuario escribe una nueva nota y hace clic en "Save"

        browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
        activate server
        Note left of server: El servidor recibe la nueva nota y la guarda en el archivo data.json
        server-->>browser: HTTP 201 (Created)
        deactivate server

        Note right of browser: El navegador ejecuta el código JavaScript que actualiza la interfaz de usuario con la nueva nota
```