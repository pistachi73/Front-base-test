# Front-base-test

## Mejoras Implementadas

Este proyecto ha sido mejorado para solucionar varios problemas de rendimiento, estructura y accesibilidad. Para ver un análisis detallado de los problemas identificados y las soluciones implementadas, consulte el archivo [ANALYSIS.md](./ANALYSIS.md).

## Resumen de Cambios

1. **Corrección de Problemas de Rendimiento**
   - Eliminado el loop infinito en el componente Application
   - Optimizada la función de generación de colores aleatorios
   - Implementada memoización para prevenir re-renders innecesarios

2. **Mejoras de Estructura y Tipado**
   - Migración de componentes de JSX a TSX
   - Añadido tipado con TypeScript
   - Mejorada la estructura de los componentes

3. **Mejoras de Accesibilidad**
   - Añadidos atributos ARIA
   - Mejorado el contraste de colores
   - Añadidas etiquetas descriptivas

## Cómo Ejecutar

```bash
# Instalar dependencias
npm install

# Iniciar la aplicación en modo desarrollo
npm start
```

## Herramientas Utilizadas

- React 18
- TypeScript
- TailwindCSS
- React DevTools para análisis de rendimiento

## Métricas de Mejora

- **Rendimiento**: Eliminado el loop infinito y optimizados los re-renders
- **Mantenibilidad**: Mejorada con la adición de TypeScript y mejor estructura
- **Accesibilidad**: Mejorada con la adición de atributos ARIA y mejor contraste

## Mejoras Futuras

Para ver las mejoras propuestas a largo plazo y sus estimaciones de tiempo, consulte el archivo [ANALYSIS.md](./ANALYSIS.md).

*** Se pide
---

Identificar errores y puntos de mejora de la aplicación.
1. La `generateRandomColor` genera un nuevo `shuffle` para cada carácter, lo que es ineficiente
2. Al introducir un carácter en el input `GameInput`, se rerenderiza toda la aplicación cuando solo debería actualizarse el componente del input.
3. Optimizar el estado. No necesitamos `colorGuess`.
4. El componente `ExpensiveComponent` se rerenderiza innecesariamente con cada cambio de estado.

Identificar puntos de mejora de performance.

Metricas de la situación actual.

herramientas usadas.
- React devtools

Soluciones a los problemas previamente identificados.
1. Hacer un único `shuffle` del array de carácteres hexadecimales y tomar los primeros 6 elementos para formar el color, en lugar de hacer un shuffle por cada carácter.
2. Usar uncontrolled input y coger su valor usando `FormData` API.
4. User `memo` para memorizar el componente `ExpensiveComponent`


Mejoras a largo plazo y estimación de tiempos de tareas.
- Test unitarios - 1 día.
- Implementar una mejor solución para gestionar el estado (Context API, Redux, Zustand...) - 2 horas.
- Usar herramienta para la validación del Form (zod) - 2 horas.

Diferentes enfoques y tradeoffs de cada enfoque
 
La solución debe de poder arrancar perfectamente, debera entregarse en una cuenta de github privada y gratuita, haciendo fork de este proyecto, se les entregará las cuentas de github para que proceda a invitarlo para su revisión


Sientete libre de modificar el fichero readme.
