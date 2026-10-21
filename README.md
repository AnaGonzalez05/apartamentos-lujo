# Nombre de la marca

Aplicación web y móvil para promocionar apartamentos de lujo. Permite explorar un catálogo, ver el detalle de cada propiedad, filtrar, guardar favoritos y enviar una solicitud de contacto o visita (el envío es simulado, no hay backend).

Proyecto #1 de Desarrollo de Software, Universidad de Costa Rica, Sede de Occidente, II ciclo 2026.

## Integrantes
- Ana Gonzalez Silva - C5F593
- Rachel Santamaria -
- Dariel -

## Enlaces

- Versión web (Vercel): _pendiente_
- Repositorio: (https://github.com/AnaGonzalez05/apartamentos-lujo.git)

## Tecnologías

- React con TypeScript
- Vite
- React Router
- CSS tradicional
- Context API y localStorage (favoritos)
- Capacitor (versión Android)
- Vercel (publicación web)

## Instalación

1. Clonar el repositorio:
```bash
   git clone URL-DEL-REPO
   cd apartamentos-lujo
```
2. Instalar dependencias:
```bash
   npm install
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

- `public/data/`: JSON con los apartamentos
- `src/pages/`: páginas (Inicio, Apartamentos, Detalle, Favoritos, Contacto, 404)
- `src/components/`: componentes reutilizables
- `src/hooks/`: hook personalizado para cargar los datos
- `src/context/`: contexto de favoritos
- `src/types/`: interfaces y tipos de TypeScript
- `src/styles/`: hojas de estilo