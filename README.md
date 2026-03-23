# E-Commerce Full-Stack Application

A modern, responsive, and secure full-stack web application built with Spring Boot and React.

## 🚀 Tech Stack

**Frontend:**
- React (Vite)
- React Router v6
- Axios
- Vanilla CSS with premium glassmorphism design
- JWT decoding and React Context API

**Backend:**
- Java 17 + Spring Boot 3
- Spring Security (JWT + OAuth2)
- Spring Data JPA
- MySQL
- Lombok

## 🎯 Core Features
- **Authentication**: JWT-based login and registration with BCrypt password hashing.
- **SSO Login**: Google OAuth2 integration for seamless login.
- **Role-Based Access Control (RBAC)**: `ROLE_ADMIN` and `ROLE_USER`.
- **Product Module**: Full CRUD REST APIs secured with method-level security `@PreAuthorize`.
- **User Profile Management**: View/update profile and change password.
- **Dynamic Frontend**: Modern aesthetic UI, glassmorphism panels, CSS micro-animations.

## 📦 Project Structure
- `/backend`: Spring Boot application (Controllers, Services, Security, Models, Repositories).
- `/frontend`: React application (Components, Pages, Services, Auth Context).

## ⚡ Setup Instructions

### 1. Database Setup
1. Install MySQL.
2. Create a database named `ecommerce_db`:
   ```sql
   CREATE DATABASE ecommerce_db;
   ```

### 2. Backend Setup
1. Navigate to the `backend` directory.
2. Update `src/main/resources/application.properties` with your MySQL credentials and Google Client ID/Secret.
3. Start the application using your IDE or Maven:
   ```bash
   ./mvnw spring-boot:run
   ```
   *Note: On startup, the `DataSeeder` automatically creates two users:*
   - *Admin: `admin@ecommerce.com` / `password`*
   - *User: `user@ecommerce.com` / `password`*

### 3. Frontend Setup
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Access the app at `http://localhost:5173`.
