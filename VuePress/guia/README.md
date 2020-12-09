# Titulo 1
## Titulo 2
### Titulo 3
#### Titulo 4

Este puede ser un *Parrafo dentro de mi archivo*

Este puede ser otro **Parrafo en mi archivo**

## Tambien puedo hacer _listas_: 

Lista de compras
---------------
* Frutas
  * Manzanas
  * Naranjas
  * Uvas
* Lácteos
  * Leche
  * Queso

Lista de pendientes
------------------
1. Terminar el tutorial de Markdown
2. Ir a la tienda de abarrotes
3. Preparar el almuerzo

### Snippets

```html
<html>
    <head>
        <title>Este es un titulo</title>
    </head>
    <body>
    </body>
</html>
```

Tambien existen bloques de citas, para ello escribo:

> Esta es una cita x, para mencionar y cosa


Las tablas se pueden crear de la siguiente manera:

| Encabezado 1 | Encabezado 2 | Encabezado 3 |
| --------- | --------- | --------- |
| renglón 1, columna 1 | renglón 1, columna 2 | renglón 1, columna 3|
| renglón 2, columna 1 | renglón 2, columna 2 | renglón 2, columna 3|
| renglón 3, columna 1 | renglón 3, columna 2 | renglón 3, columna 3|

::: tip
Aqui puedo poner diversos consejos
:::

::: warning Titulo de la advertencia
Esta es una advertencia
:::

::: danger Titulo de la Urgencia
Esta es una alerta de urgencia
:::

::: details Detalles escondidos
Este bloque esta escondido
:::

Cuando tengo un bloque de codigo, puedo resaltar una de sus lineas usando un {} luego de definir el lenguaje, en donde defino cual linea resaltar

``` js{1,3,6-8}
export default { 
    // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```