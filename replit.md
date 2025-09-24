# Portfolio Website

## Overview

This is a modern full-stack portfolio website built with React and Express.js. The application features a sleek, responsive design showcasing a developer's work, skills, and contact information. It includes interactive sections for hero, about, projects, services, and contact with form submission capabilities. The frontend uses modern React with TypeScript and shadcn/ui components, while the backend provides API endpoints for contact form handling with email notifications.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **UI Framework**: shadcn/ui components built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules for modern JavaScript features
- **API Design**: RESTful endpoints with proper error handling and logging middleware
- **Development**: Hot reloading with Vite integration in development mode
- **Production**: Bundled with esbuild for optimized server-side deployment

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless PostgreSQL for cloud hosting
- **Schema**: Defined in shared directory for consistency between client and server
- **Migrations**: Drizzle Kit for database schema management and migrations
- **Fallback**: In-memory storage implementation for development without database

### Authentication & Session Management
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple
- **User Management**: Basic user schema with username/password authentication
- **Security**: Prepared for authentication implementation with secure session handling

### Form Handling & Validation
- **Validation**: Zod schemas for runtime type checking and form validation
- **Form Management**: React Hook Form with Zod resolvers for client-side form handling
- **Server Validation**: Shared schemas ensure consistent validation between client and server

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting for production data storage
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect support

### Email Services
- **Nodemailer**: SMTP email sending for contact form notifications
- **SMTP Configuration**: Supports Gmail and custom SMTP providers via environment variables

### UI & Design Libraries
- **Radix UI**: Comprehensive set of accessible component primitives
- **Lucide React**: Modern icon library with consistent design
- **React Icons**: Additional icon sets including Font Awesome alternatives
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens

### Development Tools
- **Vite**: Fast build tool with hot module replacement and optimized bundling
- **TypeScript**: Static type checking for both frontend and backend code
- **ESBuild**: Fast bundler for production server builds
- **PostCSS**: CSS processing with Tailwind and Autoprefixer plugins

### Runtime Libraries
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Performant form library with minimal re-renders
- **Date-fns**: Modern date utility library for JavaScript
- **Wouter**: Minimalist routing library for React applications
<!-- 
 "scripts": {
    "dev": "vite dev && NODE_ENV=development tsx server/index.ts",
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
    "start": "NODE_ENV=production node dist/index.js",
    "check": "tsc",
    "db:push": "drizzle-kit push"
  }, -->