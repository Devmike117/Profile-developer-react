# Profile de devmike117


<!-- ![Vista previa del Portafolio] -->

![Vista previa del Portafolio](https://raw.githubusercontent.com/Devmike117/Devmike117/refs/heads/main/assets/macbook%20pro%2016.png)

<table align="center">
  <tr>
    <td align="center">
      <img src="https://raw.githubusercontent.com/Devmike117/Devmike117/refs/heads/main/assets/phone.png" width="200" alt="Vista móvil" />
      <br /><strong>Vista móvil</strong>
    </td>
    <td align="center">
      <img src="https://raw.githubusercontent.com/Devmike117/Devmike117/refs/heads/main/assets/ipad.png" width="350" alt="Vista tablet" />
      <br /><strong>Vista tablet</strong>
    </td>
  </tr>
</table>


## 🧠 Inspiración


El diseño del portafolio toma inspiración de:
- La estética dinámica y limpia de redes sociales como Instagram.
- El equilibrio entre diseño moderno y funcionalidad, creando una experiencia visual atractiva y profesional.
- La conexión entre vida digital y profesional, mostrando no solo lo que haces, sino también quién eres.

## 📌 Funcionalidades Principales

- 🧑‍💼 Perfil con información de contacto y enlaces a redes sociales
- 🖼️ Cuadrícula de proyectos con vistas detalladas en modales interactivos
- 🕒 Línea de tiempo de experiencia tipo storytelling con descripciones multilínea
- 🧠 Sección de habilidades técnicas con iconos personalizados
- 📱 Diseño 100% responsivo para cualquier dispositivo
- 🌙 Modo oscuro/claro con persistencia y transiciones suaves
- 🎮 Integración en tiempo real con Steam (estado de conexión y juego actual)
- 🎵 Reproductor de música integrado
- 📧 Formulario de contacto funcional con Netlify Functions


## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 19.2.0** - Framework principal con TypeScript
- **TypeScript 5.6.2** - Tipado estático y seguridad de tipos
- **Vite 7.1.8** - Herramienta de construcción y dev server ultrarrápido
- **Tailwind CSS 4.1.14** - Framework de estilos con configuración v4
- **Lucide React** - Librería de iconos modernos

### Backend & APIs
- **Netlify Functions** - Funciones serverless para APIs
- **Steam Web API** - Integración en tiempo real con Steam
- **Node.js** - Runtime para funciones serverless

### Herramientas y Configuración
- **ESLint** - Linter para calidad de código
- **Bun** - Package manager y runtime ultrarrápido
- **Git & GitHub** - Control de versiones
- **LocalStorage API** - Persistencia de preferencias del usuario
- **Fetch API** - Llamadas HTTP/HTTPS asíncronas

## 🏗️ Estructura del Proyecto

```plaintext
Profile-developer-react/
├── src/
│   ├── components/             # Componentes de UI
│   │   ├── Header.tsx          # Encabezado del perfil con dark mode toggle
│   │   ├── Navigation.tsx      # Navegación por pestañas
│   │   ├── GridProjects.tsx    # Cuadrícula de proyectos
│   │   ├── ModalProject.tsx    # Detalles de proyecto
│   │   ├── GridExperience.tsx  # Línea de tiempo
│   │   ├── SongPlayer.tsx      # Sección de música
│   │   ├── GridSkills.tsx      # Habilidades técnicas
│   │   ├── SteamStatus.tsx     # Integración Steam en tiempo real
│   │   ├── ContactButton.jsx   # Botón de contacto
│   │   └── index.ts            # Exportador de componentes
│   ├── constants/              # Información estática del portafolio
│   │   └── index.tsx
│   ├── types/                  # Tipado global
│   │   └── index.ts
│   ├── App.tsx                 # Componente raíz con dark mode
│   ├── main.tsx                # Punto de entrada
│   ├── index.css               # Estilos globales y config Tailwind v4
│   └── vite-env.d.ts           # Tipos de Vite
├── netlify/
│   └── functions/              # Funciones serverless
│       ├── sendEmail.js        # API para envío de emails
│       └── sendSteamStatus.js  # API para integración Steam
├── api/                        # APIs alternativas (Vercel)
│   ├── sendEmail.js
│   └── sendSteamStatus.js
├── public/                     # Assets estáticos
├── index.html                  # HTML principal
├── package.json                # Dependencias y scripts
├── bun.lockb                   # Lock file de Bun
├── vite.config.ts              # Configuración de Vite
├── tailwind.config.ts          # Configuración de Tailwind CSS
├── tsconfig.json               # Configuración de TypeScript
├── tsconfig.app.json           # Config TypeScript para app
├── tsconfig.node.json          # Config TypeScript para Node
├── eslint.config.js            # Configuración de ESLint
└── README.md                   # Documentación del proyecto
```

## 🚦 Primeros Pasos

### Requisitos Previos
- Node.js 18+ instalado
- npm o Bun (recomendado para mayor velocidad)
- Cuenta de Steam (opcional, para integración Steam Status)

### Instalación

1. **Clona el repositorio:**
```bash
git clone https://github.com/Devmike117/Profile-developer-react.git
cd Profile-developer-react
```

2. **Instala Bun (opcional pero recomendado):**
```bash
npm install -g bun
```

3. **Instala las dependencias:**
```bash
# Con npm
npm install

# O con Bun
bun install
```

4. **Inicia el servidor de desarrollo:**
```bash
npm run dev
```

5. **Abre tu navegador en:**
```
http://localhost:3000
```

