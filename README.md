# Prueba-Fintonic
API - Node.JS - Express + MongoDB

Se ha hecho la api usando node.js y express, almacenando los datos en mongodb.

Se lanzaria la api con server.js, pero antes de eso se recomienda lanzar mongocreardb.js y inserttoken.js, el primero crea la base de datos mongo y el segundo el token que permite autentificarse para borrar e insertar productos.

Dicho token, ahora mismo se inserta a mano y se comprueba simplemente su existencia en la bd, lo ideal seria que hubiese una api que al autentificarse con user/pw te devuelva un token, y ese token sirva para realizar las acciones que requieran de autentificacion.
___
Primero, el endpoint de listado de todos los productos, tiene un funcionamiento simple, lista todos los productos insertados

             :3001/apifintonic

![Ejemplo Listado](https://i.imgur.com/5u7AtmV.png)

El endpoint de borrado, borra productos en base al id del objecto de ese producto, por lo que solo de puede eliminar un producto.

             :3001/apifintonic/delete?token=xJcAN19r4H&idproducto=5c97e70aa0646423b468610e

El endpopoint de insercion, requiere tambien de token y como unico campo obligatorio el nombre, pero ademas se puede añadir una descripcion.

             :3001/apifintonic/insert?token=xJcAN19r4H&nombre=Telefono
             :3001/apifintonic/insert?token=xJcAN19r4H&nombre=Portatil&descripcion=Un portatil gris 
             
![Ejemplo Insert](https://i.imgur.com/arT79kl.png)


Si se desea probar la api sin ejecutarla en una maquina propia, se podria probar con estas url's, siguiendo las indicaciones mencionadas arriba:

             endpoint de consulta  -> 104.248.44.149:3001/apifintonic
             endpoint de borrado   -> 104.248.44.149:3001/apifintonic/delete
             endpoint de insercion -> 104.248.44.149:3001/apifintonic/insert
  
 
