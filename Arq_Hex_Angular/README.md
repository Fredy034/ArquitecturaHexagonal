# Proyecto: Arquitectura Hexagonal con Principios SOLID

Este proyecto fue generado usando [Angular CLI](https://github.com/angular/angular-cli) versión 19.1.6.

## **Estructura de Carpetas

La estructura de carpetas del proyecto está organizada de la siguiente manera:

```
src/app/
  application/
    services/
      movies.service.ts
    usecases/
      get-popular-movies.usecase.ts
      get-top-rated-movies.usecase.ts
  domain/
    interfaces/
      movie.interface.ts
      movie.token.ts
    models/
      movie.model.ts
  infraestructure/
    api/
      api-movie.controller.ts
    layout/
      components/
        Footer/
          footer.component.html
          footer.component.scss
          footer.component.ts
        MovieCard/
          movie-card.component.html
          movie-card.component.scss
          movie-card.component.ts
        MovieList/
          movie-list.component.html
          movie-list.component.scss
          movie-list.component.ts
      pages/
        home.component.html
        home.component.scss
        home.component.ts
    shared/
      constants/
        endpoints.constant.ts
        messages.constant.ts
      helpers/
        format-date.helper.ts
        format-decimal.helper.ts
        language-to-country.helper.ts
  app.component.html
  app.component.scss
  app.component.spec.ts
  app.component.ts
  app.config.ts
  app.routes.ts
```
- **src/app/application**: Contiene los casos de uso y servicios que implementan la lógica de negocio.
- **src/app/domain**: Define las interfaces y modelos que representan las entidades del dominio.
- **src/app/infraestructure**: Implementa la interacción con el mundo exterior, como controladores API y componentes de la interfaz de usuario.
- **src/app/infraestructure/shared**: Incluye constantes y helpers reutilizables en todo el proyecto.

Esta estructura sigue los principios de separación de responsabilidades y facilita la escalabilidad y el mantenimiento del código.

## Cumplimiento de los Principios SOLID

1. **Responsabilidad Única (SRP)**: Cada clase y módulo tiene una única responsabilidad. Por ejemplo, los casos de uso en `application/usecases` están diseñados para manejar una tarea específica.
2. **Abierto/Cerrado (OCP)**: El sistema está diseñado para ser extensible sin modificar el código existente. Por ejemplo, se pueden agregar nuevos casos de uso sin alterar los existentes.
3. **Sustitución de Liskov (LSP)**: Las implementaciones de las interfaces en `domain/interfaces` pueden sustituirse sin alterar el comportamiento del sistema.
4. **Segregación de Interfaces (ISP)**: Las interfaces están diseñadas para ser específicas y evitar dependencias innecesarias.
5. **Inversión de Dependencias (DIP)**: El proyecto utiliza inyección de dependencias para desacoplar las clases de sus implementaciones concretas, como se observa en `domain/interfaces/movie.token.ts`.

## Distribución en la Arquitectura Hexagonal

El proyecto sigue la arquitectura hexagonal dividiendo las responsabilidades en capas:

- **Capa de Aplicación**: Contiene la lógica de negocio y los casos de uso.
- **Capa de Dominio**: Define las reglas de negocio y las entidades del dominio.
- **Capa de Infraestructura**: Implementa la interacción con el mundo exterior, como APIs y componentes de UI.

## Por qué cumple con la Arquitectura Hexagonal

1. **Independencia del Framework**: La lógica de negocio no depende de Angular ni de ningún framework específico.
2. **Separación de Responsabilidades**: Cada capa tiene una responsabilidad clara y definida.
3. **Facilidad de Pruebas**: Las capas están desacopladas, lo que facilita la creación de pruebas unitarias y de integración.

## Conclusión

Este proyecto implementa una arquitectura hexagonal que cumple con los principios SOLID, lo que garantiza un código limpio, mantenible y escalable. La separación de responsabilidades y el uso de interfaces permiten extender el sistema sin afectar las funcionalidades existentes.
