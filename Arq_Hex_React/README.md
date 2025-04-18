# Proyecto: Arquitectura Hexagonal con Principios SOLID

Este proyecto implementa una aplicación React utilizando la arquitectura hexagonal y respetando los principios SOLID. A continuación, se describe cómo se estructura el proyecto, cómo se distribuyen las responsabilidades y cómo se cumplen los principios de diseño.

---

## **Estructura de Carpetas**

```
src/
  application/
    services/
      MoviesService.ts
    usecases/
      GetPopularMovies.ts
      GetTopRatedMovies.ts
  domain/
    interfaces/
      MovieInterface.ts
    models/
      Movie.ts
  infraestructure/
    api/
      ApiMovieController.ts
    layout/
      components/
        Footer/
          Footer.css
          Footer.tsx
        MovieCard/
          MovieCard.css
          MovieCard.tsx
        MovieList/
          MovieList.css
          MovieList.tsx
      pages/
        Home.css
        Home.tsx
    shared/
      constants/
        Endpoints.ts
        Messages.ts
      helpers/
        FormatDate.helper.ts
        FormatDecimal.helper.ts
        LanguageToCountry.helper.ts
  main.tsx
  App.tsx
  index.css
```

- **src/application**: Contiene los casos de uso y servicios que implementan la lógica de negocio.
- **src/domain**: Define las interfaces y modelos que representan las entidades del dominio.
- **src/infraestructure**: Implementa la interacción con el mundo exterior, como controladores API y componentes de la interfaz de usuario.
- **src/infraestructure/shared**: Incluye constantes y helpers reutilizables en todo el proyecto.

Esta estructura sigue los principios de separación de responsabilidades y facilita la escalabilidad y el mantenimiento del código.

---

## **Cumplimiento de los Principios SOLID**

1. **Single Responsibility Principle (SRP)**:

   - Cada archivo tiene una única responsabilidad.
     - Ejemplo: `MovieList.tsx` se encarga de renderizar la lista de películas, mientras que `ApiMovieController.ts` maneja la interacción con los servicios de películas.

2. **Open/Closed Principle (OCP)**:

   - El sistema es extensible sin modificar el código existente.
     - Ejemplo: Se pueden agregar nuevos casos de uso en la carpeta `application/usecases` sin alterar las capas existentes.

3. **Liskov Substitution Principle (LSP)**:

   - Las implementaciones de `MovieInterface` pueden sustituirse sin problemas.
     - Ejemplo: `ApiMovieController` implementa la interfaz `MovieInterface`, lo que permite cambiar la fuente de datos sin afectar el resto del sistema.

4. **Interface Segregation Principle (ISP)**:

   - Las interfaces están bien definidas y no obligan a implementar métodos innecesarios.
     - Ejemplo: `MovieInterface` define solo los métodos necesarios para interactuar con las películas.

5. **Dependency Inversion Principle (DIP)**:

   - La capa de aplicación depende de abstracciones, no de implementaciones concretas.
     - Ejemplo: Los casos de uso (`GetPopularMovies`, `GetTopRatedMovies`) dependen de la interfaz `MovieInterface`, no de `ApiMovieController` directamente.

---

## **Distribución en la Arquitectura Hexagonal**

La arquitectura hexagonal divide el sistema en capas bien definidas, asegurando la independencia de las mismas:

1. **Dominio**:

   - Contiene las reglas de negocio y las abstracciones principales.
     - `models/Movie.ts`: Define el modelo de datos de una película.
     - `interfaces/MovieInterface.ts`: Define la interfaz para interactuar con las películas.

2. **Aplicación**:

   - Contiene los casos de uso que representan las acciones del sistema.
     - `usecases/GetPopularMovies.ts`: Caso de uso para obtener películas populares.
     - `usecases/GetTopRatedMovies.ts`: Caso de uso para obtener películas mejor calificadas.

3. **Infraestructura**:

   - Contiene las implementaciones concretas y la interacción con servicios externos.
     - `api/ApiMovieController.ts`: Implementación de `MovieInterface` que interactúa con una API externa.
     - `layout/components`: Componentes de la interfaz de usuario.
     - `layout/pages`: Páginas principales de la aplicación.

4. **Compartido (Shared)**:

   - Contiene utilidades y constantes reutilizables.
     - `constants/endpoints.ts`: Define los endpoints de la API.
     - `helpers/`: Contiene funciones auxiliares como `formatDate.helper.ts` y `formatDecimal.helper.ts`.

---

---

## **Por qué cumple con la Arquitectura Hexagonal**

1. **Independencia de las capas**:

   - La capa de dominio no depende de la infraestructura ni de la interfaz.
   - Los casos de uso en la capa de aplicación dependen de abstracciones (`MovieInterface`), no de implementaciones concretas.

2. **Facilidad para realizar pruebas**:

   - Las dependencias concretas (`ApiMovieController`) pueden ser reemplazadas por mocks durante las pruebas, gracias al uso de interfaces.

3. **Extensibilidad**:

   - Es fácil agregar nuevas funcionalidades (como nuevos casos de uso o fuentes de datos) sin modificar el código existente.

---

## **Conclusión**

Este proyecto está diseñado para ser mantenible, extensible y fácil de probar, gracias a la implementación de la arquitectura hexagonal y los principios SOLID. Cada capa tiene responsabilidades claras y está desacoplada de las demás, lo que permite que el sistema evolucione sin comprometer su estabilidad.
