# Aurélis Apartments

Aplicación web y móvil para promocionar apartamentos de lujo. Permite explorar un catálogo, ver el detalle de cada propiedad, filtrar, guardar favoritos y enviar una solicitud de contacto o visita. **El envío del formulario es simulado: no hay backend.**

Proyecto #1 de Desarrollo de Software IV, Universidad de Costa Rica, Sede de Occidente, II ciclo 2026.

## Integrantes

- Dariel Calvo Brenes - C5D517
- Ana González Silva - C5F593
- Rachel Santamaría Rosales - C4J878

## Enlaces

- Versión web (Vercel):(https://apartamentos-lujo.vercel.app)
- Repositorio (GitHub):(https://github.com/AnaGonzalez05/apartamentos-lujo)
- Evidencia de ejecución en Android (video): (https://drive.google.com/file/d/1Xy3zKDevWLXnb319NO4ZGgDYy2xEpAXi/view?usp=sharing)

## Tecnologías

- React con TypeScript
- Vite
- React Router
- React Hook Form (formulario de contacto)
- CSS tradicional
- Context API y localStorage (favoritos)
- Capacitor (versión Android)
- Vercel (publicación web)

## Instalación

Requisitos: Node.js y Git. Para la versión Android, Android Studio.

1. Clonar el repositorio:

```bash
git clone https://github.com/AnaGonzalez05/apartamentos-lujo.git
cd apartamentos-lujo
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar en modo desarrollo:

```bash
npm run dev
```

### Ejecutar en Android

```bash
npm run build
npx cap sync android
npx cap open android
```

## Comandos

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Compila la versión de producción en `dist` |
| `npm run preview` | Previsualiza la versión compilada |
| `npx cap sync android` | Sincroniza la app web con el proyecto Android |
| `npx cap open android` | Abre el proyecto en Android Studio |

## Estructura del proyecto

```
apartamentos-lujo/
├── android/              Proyecto Android (Capacitor)
├── public/
│   ├── data/             apartments.json con los 20 apartamentos
│   └── images/           Logo
├── src/
│   ├── components/       Layout, Navbar, Footer, Pagination, StatusMessage
│   ├── hooks/            useFetch (carga el JSON)
│   ├── pages/            NotFound (404)
│   ├── styles/           Estilos globales y compartidos
│   ├── features/
│   │   ├── apartment/    Catálogo, detalle, búsqueda y filtros
│   │   ├── contact/      Formulario de contacto
│   │   ├── favorite/     Contexto, hook y página de favoritos
│   │   └── home/         Página de inicio
│   ├── App.tsx           Rutas
│   └── main.tsx          Punto de entrada y proveedores
├── capacitor.config.ts   Configuración de Capacitor
├── vercel.json           Configuración SPA para Vercel
└── package.json
```