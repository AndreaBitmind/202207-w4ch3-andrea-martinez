Componentes:

- Info:

  - Recibe: recibe true o false
  - Estado: nada
  - Muestra: texto de calling
  - Acción usuario: nada

- Display

  - Recibe: array de strings
  - Estado:
    - pasará de vacío a contener números (hasta 9 como máximo)
    - de lleno a vacío (cuando se haga click en delete)
  - Muestra: los números marcados
  - Acción usuario: nada

- Actions

  - Recibe: un true o un false dependiendo de si entra una llamada
  - Estado: nada
  - Muestra: un botón dependiendo de la llamada (activo o inactivo)
  - Acción usuario: nada

  - Action
    - Recibe: la acción a realizar
    - Estado: true o false
    - Muestra: un bontón con un texto
    - Acción usuario: al clicar realiza la función recibida

- Keyboard

  - Recibe: nada
  - Estado: nada
  - Muestra: 11 botones con texto
  - Acción usuario: nada

  - Key
    - Recibe: el click del usuario y el texto
    - Estado: nada
    - Muestra: el texto
    - Acción usuario: clicar

- Provider

CAPA DE DATOS

- el numero de telefono: array de strings del 0 a 9 (para poder concatenar)
  - añadir dígito
  - borrar dígito (setear a string vacío)
- si está llamando o no: boolean
  - set a true (llama)
  - set a false (cuelga)
