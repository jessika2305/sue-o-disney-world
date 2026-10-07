

# Sueño Disney ✨

Proyecto realizado por Jessika Cadavid como trabajo práctico de migración de HTML y CSS a React, utilizando Vite y React Router.  
El objetivo es mantener la estructura visual original y aprovechar la modularidad de los componentes en React.

## 🚀 Tecnologías utilizadas
- [React](https://react.dev/) con [Vite](https://vitejs.dev/)
- React Router v6
- CSS modularizado por componente
- Imágenes y recursos estáticos en `src/assets`

## 📂 Estructura del proyecto
src/
├── components/   # Componentes reutilizables (Navbar, Hero, Galeria, Experiencias, Planear, Reserva, Footer)
├── styles/       # Archivos CSS individuales por cada componente
├── assets/       # Imágenes y recursos estáticos
└── App.jsx       # Archivo principal con configuración de rutas


## 🧩 Componentes principales
- **Navbar**: Barra de navegación reutilizable.
- **Hero**: Sección principal con imagen destacada.
- **Galeria**: Galería de imágenes.
- **Experiencias**: Cards con alojamientos y parques.
- **Planear**: Formulario controlado con `useState`.
- **Reserva**: Formulario de reserva.
- **Footer**: Pie de página con navegación y redes sociales.


## ⚡ Funcionalidad
- Formulario controlado en **Planear.jsx** con manejo de estados (`useState`).
- Eventos de `onChange`, `onSubmit` y `onReset` logueados en consola.
- Navegación entre páginas con React Router.
- Estilos separados y organizados por componente.

## 📦 Instalación y ejecución
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/usuario/sueno-disney.git

npm install
npm run dev
