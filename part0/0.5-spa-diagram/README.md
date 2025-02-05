```markdown
# Ejercicio 0.5: Diagrama de aplicación de una sola página

## Descripción
Este diagrama describe la secuencia de eventos cuando un usuario accede a la versión de **Single Page Application (SPA)** de la aplicación de notas. En una SPA, la página no se recarga completamente; en su lugar, el navegador carga una única página HTML inicial y utiliza JavaScript para actualizar dinámicamente el contenido.

## Diagrama de secuencia
```mermaid
    sequenceDiagram
        participant browser
        participant server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
        activate server
        server-->>browser: HTML document (SPA)
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
        activate server
        server-->>browser: the css file
        deactivate server

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
        activate server
        server-->>browser: the JavaScript file (SPA)
        deactivate server

        Note right of browser: El navegador ejecuta el código JavaScript (spa.js)

        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
        activate server
        server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
        deactivate server

        Note right of browser: El navegador renderiza las notas dinámicamente usando JavaScript
```