```markdown
# Ejercicio 0.4: Nuevo diagrama de nota

## Descripción
Este diagrama representa la secuencia de eventos que ocurren cuando un usuario crea una nueva nota en la aplicación. El usuario escribe una nota en el campo de texto y hace clic en "Save". El diagrama muestra la interacción entre el navegador y el servidor.

## Diagrama de secuencia
```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: El usuario escribe una nueva nota y hace clic en "Save"

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    Note left of server: El servidor recibe la nueva nota y la guarda en el archivo data.json
    server-->>browser: HTTP 302 (Redirección a /notes)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: El navegador ejecuta el código JavaScript que obtiene el JSON actualizado del servidor

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: El navegador ejecuta la función de callback que renderiza las notas, incluyendo la nueva nota