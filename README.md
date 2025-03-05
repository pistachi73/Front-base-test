*** Se pide
---

Identificar errores y puntos de mejora de la aplicación.
1. Use de JSX en vez de TSX.
2. Falta de tests.
3. Hay dependencias en package.json que no se utilizan en el proyecto.


Identificar puntos de mejora de performance.
-  La `generateRandomColor` genera un nuevo `shuffle` para cada carácter, lo que es ineficiente.
- Al introducir un carácter en el input `GameInput`, se rerenderiza toda la aplicación cuando solo debería actualizarse el componente del input.
- El componente `ExpensiveComponent` se rerenderiza innecesariamente.

Metricas de la situación actual.

herramientas usadas.
- React devtools

Soluciones a los problemas previamente identificados.
- Hacer un único `shuffle` del array de carácteres hexadecimales y tomar los primeros 6 elementos para formar el color, en lugar de hacer un shuffle por cada carácter.
- Usar uncontrolled input y coger su valor usando `FormData` API.
- Extraer la lógica del juego a un componente separado para aislar los cambios de estado y evitar que `ExpensiveComponent` se rerenderice cuando el estado del juego cambia.
- Eliminar dependencias que no se usan.
- Instalar dependencias de testing + setup. Añadir test unitarios


Mejoras a largo plazo y estimación de tiempos de tareas.
- Implementar una mejor solución para gestionar el estado (Context API, Redux, Zustand...) - 2 horas.
- Usar herramienta para la validación del Form (zod) - 2 horas.
- Mejorar la estructura del proyect - 30 minutos 
- Mejorar el manejo del formulario con librerias como react-hook-form - 1 hora

Diferentes enfoques y tradeoffs de cada enfoque
 
La solución debe de poder arrancar perfectamente, debera entregarse en una cuenta de github privada y gratuita, haciendo fork de este proyecto, se les entregará las cuentas de github para que proceda a invitarlo para su revisión


Sientete libre de modificar el fichero readme.
