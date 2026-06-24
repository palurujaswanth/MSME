# MSME Platform

## Executive Summary

**MSME** (Micro, Small, and Medium Enterprises) is a comprehensive enterprise management platform engineered to empower small and medium businesses with sophisticated operational tools, data-driven analytics, and intelligent automation capabilities. The platform integrates modern cloud technologies with artificial intelligence to deliver a seamless experience for business management, financial tracking, and strategic decision-making.

**Live Application**: [https://creditintel.web.app](https://creditintel.web.app)

---

## Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Key Features](#key-features)
- [Architecture](#architecture)
- [System Requirements](#system-requirements)
- [Installation & Setup](#installation--setup)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Development Guidelines](#development-guidelines)
- [License & Legal](#license--legal)

---

## Project Overview

The MSME Platform is a full-stack enterprise application designed to streamline business operations for micro, small, and medium enterprises. The platform provides integrated solutions for:

- **Business Intelligence**: Real-time analytics and reporting dashboards
- **Inventory Management**: Complete stock tracking and management
- **Financial Operations**: Sales tracking, billing, and financial reporting
- **Customer Relationship**: User management and authentication
- **AI-Powered Assistance**: Intelligent chatbot for business insights

The platform leverages a microservices architecture with independent frontend, backend, and AI services for scalability and maintainability.

---

## Technology Stack

### Language Composition
- **TypeScript**: 90.8% (Primary language for type-safe development)
- **Python**: 4.7% (Data processing and backend utilities)
- **JavaScript**: 2.6% (Frontend scripting and utilities)
- **CSS**: 1.5% (Styling and responsive design)
- **HTML**: 0.4% (Markup structure)

### Core Technologies

#### Frontend
- **Framework**: React 18.3.1 with TypeScript 5.8.3
- **Build Tool**: Vite 5.4.19
- **Styling**: Tailwind CSS 3.4.17 with PostCSS
- **UI Components**: shadcn-ui with Radix UI
- **State Management**: TanStack React Query 5.83.0
- **Form Management**: React Hook Form 7.61.1 with Zod validation
- **Routing**: React Router v6.30.1
- **Animations**: Framer Motion 12.34.3
- **Charts**: Recharts 2.15.4
- **Testing**: Vitest 3.2.4

#### Backend Services
- **Runtime**: Node.js (CommonJS)
- **Web Framework**: Express.js 4.19.2
- **Database**: MongoDB (via Mongoose 8.5.1)
- **Authentication**: Firebase Admin SDK 12.2.0
- **Development**: Nodemon 3.0.3
- **CORS**: Enabled for secure cross-origin requests

#### AI & Chatbot Service
- **AI Framework**: Groq SDK 0.7.0
- **Service Runtime**: Node.js (ES Modules)
- **Web Framework**: Express.js 4.18.2
- **Environment Management**: dotenv 16.4.5

#### Development & DevOps
- **Version Control**: Git with GitHub integration
- **Linting**: ESLint 9.32.0
- **Package Management**: npm
- **Environment Configuration**: dotenv

---

## Key Features

### 1. User Management & Authentication
- Secure JWT-based authentication
- Role-based access control (RBAC)
- Firebase integration for identity management
- Session management and token refresh

### 2. Inventory Management
- Real-time stock tracking
- Inventory forecasting
- Low-stock alerts and notifications
- Multi-warehouse support

### 3. Sales & Financial Operations
- Complete sales pipeline management
- Billing and invoice generation
- Financial reporting and analytics
- Multi-currency support

### 4. Business Analytics Dashboard
- Real-time metrics and KPIs
- Customizable reports
- Data visualization with advanced charting
- Export capabilities (PDF, Excel)

### 5. AI-Powered Chatbot
- Groq-powered intelligent assistant
- Business insight generation
- Natural language query processing
- Integration with backend data services

### 6. Responsive Design
- Mobile-first approach
- Cross-browser compatibility
- Progressive web app capabilities
- Accessibility compliance

---

## Architecture
<img width="1536" height="1024" alt="image" src="https://github.com/user-attachments/assets/e53a3897-2207-478c-b876-d7182de54dd7" />


### B) Deployment Architecture 

                Internet
                    │
                    ▼
      https://creditintel.web.app
                    │
                    ▼
          Firebase Hosting
                    │
                    ▼
          React Frontend (Vite)
                    │
                    ▼
          Express Backend API
          (Render/Railway/VPS)
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
      MongoDB Atlas       Groq API
       Cloud DB          AI Services

### System Design

### A)Users Collection

{
  "_id": "ObjectId",
  "name": "String",
  "email": "String",
  "role": "admin/user",
  "createdAt": "Date"
}

### B)Inventory Collection

{
  "_id": "ObjectId",
  "productName": "String",
  "quantity": "Number",
  "price": "Number",
  "warehouse": "String"
}

### C)Sales Collection 

{
  "_id": "ObjectId",
  "customerName": "String",
  "amount": "Number",
  "date": "Date",
  "status": "Completed"
}


### Security Architecture

User
 │
 ▼
Firebase Authentication
 │
 ▼
JWT Token
 │
 ▼
Backend Middleware
 │
 ▼
Role-Based Access Control
 │
 ▼
Protected APIs

                                      ### The Above Data Ensures About the MSME Project Effectively 

                                                  ### All Rights Reserved @2026
