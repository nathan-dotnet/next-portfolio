# SMD Tower — Automated Storage Management System

> A full-stack industrial automation system for controlling and monitoring a 360-slot automated storage tower, integrating a modern web interface with a Keyence PLC for real-time machine control and storage operations.

**React · TypeScript · ASP.NET Core · SQL Server · Keyence PLC · SignalR**

### Overview

SMD Tower is an automated storage management system designed to manage reels and materials stored inside a 360-slot storage tower.

The system connects a modern React web application to an ASP.NET Core backend, SQL Server, and a Keyence PLC over TCP/IP. It allows operators to monitor storage slots, register and retrieve materials, control machine positioning, and track system activity through a centralized interface.

The application also supports multiple connected users while enforcing a single active machine operator. Other users can access the system in **View Only** mode without being able to execute machine-control operations.

### What I Built

As the full-stack developer, I developed the web application, backend services, database integration, and PLC communication layer.

Key areas I worked on include:

* 360-slot real-time storage management interface
* Automated reel registration and retrieval workflows
* Keyence PLC integration through TCP/IP
* Machine positioning using PLC angle and height registers
* Operator barcode authentication
* Single-operator machine control with View Only access
* Real-time machine-session synchronization using SignalR
* Excel-based bulk material import
* Activity and operation logging
* Admin and system management features

### System Architecture

```text
┌──────────────────────────────┐
│       React Frontend         │
│                              │
│  Storage Management          │
│  Master Control              │
│  Auto Mode                   │
│  Manual Mode                 │
│  View-Only Mode              │
└──────────────┬───────────────┘
               │
        REST API / SignalR
               │
               ▼
┌──────────────────────────────┐
│      ASP.NET Core API        │
│                              │
│  Controllers / Services      │
│  Machine Session Service     │
│  PLC Communication           │
│  Excel Import                │
└──────────┬───────────┬───────┘
           │           │
           ▼           ▼
     SQL Server     Keyence PLC
                     TCP/IP
```

### Engineering Highlights

**Industrial PLC Integration**

Implemented TCP/IP communication between the ASP.NET Core backend and a Keyence PLC to control machine operations, read PLC states, and handle positioning commands.

**Automated Storage Workflow**

Built an automated workflow for registering and retrieving reels. After completing an operation, the system can automatically advance to the next available storage position.

**Real-Time Machine Control**

Implemented SignalR-based synchronization so connected users immediately receive machine-session changes without manually refreshing the application.

**Single-Operator Control**

Designed a server-side machine-session system that allows only one operator to control the machine at a time. Other connected users are placed in View Only mode, while backend authorization prevents unauthorized machine-control requests.

**Positioning Control**

Integrated PLC positioning registers for angle and height control, allowing the application to select and position the storage tower programmatically.

**Barcode & Excel Integration**

Implemented barcode-based operator authentication and Excel import functionality for managing storage and material information.

### Technology Stack

**Frontend**

React · TypeScript · Vite · Tailwind CSS · TanStack Query · Axios · SignalR Client

**Backend**

ASP.NET Core · C# · REST API · SignalR · Background Services · TCP/IP

**Database**

Microsoft SQL Server

**Industrial Integration**

Keyence PLC · TCP/IP · MR/DM Device Communication

### Screenshots

**Storage Management**

![Landing Page](/projects/smd-tower/Screenshots/landing-page.png)

Main interface for monitoring and managing the automated storage tower.

**Master Control**

![Master Control](/projects/smd-tower/Screenshots/master-control.png)

Operator control interface for accessing machine operations.

**Auto Mode**

![Auto Mode](/projects/smd-tower/Screenshots/auto-mode.png)

Automated storage workflow for registering and retrieving materials.

**Manual Mode**

![Manual Mode](/projects/smd-tower/Screenshots/manual-mode.png)

Manual machine controls used for operational and maintenance activities.

**Admin Panel**

![Admin Panel](/projects/smd-tower/Screenshots/admin-panel.png)

Administrative interface for managing system data and configuration.

### Project Impact

SMD Tower brings storage management, machine control, and material tracking into a single web-based system, reducing reliance on manual storage operations while providing operators and engineers with centralized visibility of the automated storage equipment.

**Project Type:** Industrial Automation / Full-Stack Web Application

**Deployment:** Internal manufacturing environment
