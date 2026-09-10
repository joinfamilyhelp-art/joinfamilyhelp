# Family Help Hub

Actúa como Ingeniero Frontend Senior experto en React y Tailwind CSS para desplegar el chasis base y la página de inicio (Home) de "Family Help" (https://familyhelp.lovable.app/). 

### 🚨 REGLA ANTERIOR Y CONFIGURACIÓN CRÍTICA (PROHIBIDO OLVIDAR)

Este sitio web es puramente INFORMATIVO y de CONVERSIÓN MARKETING. 

- Queda totalmente prohibido crear bases de datos locales, registros de usuarios o sistemas de login nativos. 

- El flujo es: Sitio Web (Lovable) ➔ Enlace de pago externo (Hotmart) ➔ Login en App Real (BRÚJULA®).

- Todos los botones de ingreso o compra deben ser enlaces externos (etiquetas <a>).

### 🎨 SISTEMA DE ESTILOS (Calma y Espacio)

- Colores: Fondos limpios y amplios (bg-white, bg-slate-50). Textos oscuros de alta legibilidad (text-slate-900, text-slate-600). Acentos en azul sereno (sky-600) y sutiles toques de verde menta (emerald-600).

- Diseño: Uso generoso de espacios en blanco (py-24, gap-12). Estética minimalista, humana y pausada. Sin contadores de escasez ni elementos de urgencia.

### 🛠️ ESTRUCTURA A CONSTRUIR (BUILD 1)

1. NAVBAR GLOBAL:

- Izquierda: Texto o logo limpio "Family Help".

- Centro (Enlaces de navegación): Inicio, Productos, Plataforma, Comunidad, Recursos, Nosotros.

- Derecha: Botón secundario "Iniciar Sesión" (apunta externamente a la app) y Botón primario destacado "Acceder a BRÚJULA®".

2. HERO SECTION (Propuesta de Valor):

- Tag superior: "Tecnología al servicio del desarrollo humano".

- Título principal (H1): "La tecnología puede hacer mucho más que captar tu atención."

- Subtítulo descriptivo: "Diseñamos experiencias digitales que te ayudan a detenerte, recordar lo que realmente quieres cuidar y construir, mediante pequeñas decisiones conscientes, un camino que sientas como propio."

- Botones: [Explorar Misiones (Scroll a productos)] y [Conocer BRÚJULA® (Link interno)].

3. SECCIÓN DE IDENTIDAD Y MANIFIESTO:

- Un layout de dos columnas que explique la diferencia entre la empresa y su primer producto:

  - Columna Izquierda (Family Help): "Somos una empresa dedicada a crear tecnología al servicio del desarrollo humano. Nuestra convicción es firme: la tecnología debe fortalecer la capacidad de las personas para decidir y actuar conscientemente, nunca reemplazarla."

  - Columna Derecha (BRÚJULA® - Tarjeta destacada con borde redondeado): "Es la primera expresión de nuestra visión. No es únicamente una microapp aislada; es el primer sistema desarrollado por Family Help para acompañar a las personas a recuperar la capacidad de detenerse, recordar lo que quieren cuidar y avanzar con claridad, un paso a la vez."

4. CONTENEDOR DE PRODUCTOS (Sección "Misiones"):

- Deja lista una cuadrícula (Grid) con 4 tarjetas vacías pero elegantemente estilizadas (shadow-sm, rounded-2xl, border-slate-100) que sirvan como marcadores de posición (placeholders) para nuestras 4 misiones principales:

  - Tarjeta 1: Misión Familias — Método PUENTE

  - Tarjeta 2: Misión Docentes — Método FARO

  - Tarjeta 3: Misión Jóvenes — Método DECIDE

  - Tarjeta 4: Misión Adultos — Método DECIDE

Por favor, inicializa el enrutamiento base con react-router-dom y despliega esta Home limpia, modular y 100% responsiva.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://joinfamilyhelp.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0151fb33-5b9a-40eb-b07c-eb2cf895da25).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
