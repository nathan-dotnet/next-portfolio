# YUDOO Web — Digital Process Instruction System

> A full-stack manufacturing workstation platform that replaces paper-based work instructions with digital, model-specific process guides and real-time PLC-driven production updates.

**React · TypeScript · ASP.NET Core · SQL Server · SignalR · PLC**

### Overview

YUDOO Web is a digital manufacturing workstation system designed to provide operators with centralized process instructions, production records, and real-time workstation status.

The system replaces traditional paper-based work instructions with digital instructions that can be dynamically loaded based on the selected manufacturing model and workstation.

It also connects the web application to PLC-driven equipment, allowing production status and machine events to be delivered to connected workstations in real time.

### What I Built

As the full-stack developer, I developed the React frontend, ASP.NET Core backend, database integration, and real-time communication layer.

Key areas I worked on include:

* Digital process instruction management
* Model- and station-specific work instructions
* Real-time PLC status updates
* Production output monitoring
* Daily production logs
* Manufacturing model management
* Process instruction management
* User and workstation management
* Application settings and configuration
* Real-time communication using SignalR

### System Architecture

```text id="w8qv2n"
┌──────────────────────────────┐
│        PLC / Equipment       │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│     PLC Polling Service      │
│                              │
│      PLC State Cache         │
└──────────────┬───────────────┘
               │
               │ SignalR
               ▼
┌──────────────────────────────┐
│       React Frontend         │
│                              │
│  Dashboard                   │
│  Process Instructions        │
│  Daily Log                   │
│  Output Monitoring           │
│  Administration              │
└──────────────┬───────────────┘
               │
               │ REST API
               ▼
┌──────────────────────────────┐
│      ASP.NET Core API        │
│                              │
│  Business Logic              │
│  Controllers / Services      │
│  PLC Services                │
└──────────────┬───────────────┘
               │
               ▼
        ┌─────────────┐
        │ SQL Server  │
        └─────────────┘
```

### Engineering Highlights

**Digital Process Instructions**

Built a system for creating and maintaining digital manufacturing instructions, allowing operators to access the correct process steps and images based on the selected model and workstation.

**Real-Time PLC Integration**

Implemented a background PLC polling architecture that continuously retrieves equipment state without blocking normal API requests.

PLC state is maintained by the backend and distributed to connected clients through SignalR.

**Real-Time Communication**

Implemented SignalR to push workstation and machine updates directly to the frontend, allowing operators to see status changes without manually refreshing the application.

**Model-Aware Instructions**

Designed the process instruction system so that manufacturing content can be associated with specific models and stations rather than being hardcoded into individual pages.

**Production Monitoring**

Built dashboards for monitoring production output and workstation activity, giving operators and supervisors a centralized view of manufacturing progress.

**Manufacturing Administration**

Developed management interfaces for users, models, process instructions, workstations, and application settings.

### Technology Stack

**Frontend**

React · TypeScript · Vite · React Router · Tailwind CSS · SignalR Client

**Backend**

ASP.NET Core · C# · REST API · Entity Framework Core · SignalR · Background Services

**Database**

Microsoft SQL Server

**Industrial Integration**

PLC communication · Background PLC polling · Real-time workstation status

### Screenshots

**Dashboard**

![Dashboard](/projects/yudoo-web/Screenshots/Dashboard.png)

Central workstation dashboard providing access to production monitoring and manufacturing functions.

**Digital Process Instructions**

![Digital Process Instructions](/projects/yudoo-web/Screenshots/DigitalProcessInstructions.png)

Digital manufacturing instructions with model- and station-specific process steps and images.

**Daily Log**

![Daily Log](/projects/yudoo-web/Screenshots/DailyLog.png)

Interface for recording and reviewing daily manufacturing activity.

**Output Monitoring**

![Output Monitoring](/projects/yudoo-web/Screenshots/OutputMonitoring.png)

Production output monitoring for workstation and manufacturing activity.

**User Account Maintenance**

![User Account Maintenance](/projects/yudoo-web/Screenshots/UserAccountMaintenance.png)

Administrative interface for managing users and workstation access.

### Project Impact

YUDOO Web transforms paper-based manufacturing instructions into a centralized digital workstation platform while connecting production software with real-time machine information.

The system provides operators with the correct process information at their workstation while giving supervisors and engineers better visibility into production activity and machine status.

**Project Type:** Manufacturing / Full-Stack Web Application / Industrial IoT

**Deployment:** Internal manufacturing environment
