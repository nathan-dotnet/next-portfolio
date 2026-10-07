# IoT Engineering Dashboard — Real-Time Factory Monitoring

> A full-stack industrial monitoring platform that collects PLC and machine data through Raspberry Pi edge devices and provides engineers with centralized real-time production, machine, and power monitoring across multiple production areas.

**ASP.NET Core · C# · SQL Server · Raspberry Pi · Python · Keyence PLC · Chart.js**

### Overview

The IoT Engineering Dashboard is a factory monitoring platform designed to give engineers centralized visibility into machine status, production data, errors, and power consumption across multiple production areas.

The system connects Keyence PLCs to Raspberry Pi edge devices, where machine data is collected and stored in a central SQL Server database. An ASP.NET Core MVC application then processes and visualizes the data through interactive dashboards and historical reports.

The platform covers seven production areas as well as power monitoring.

### What I Built

As the full-stack developer, I developed the web application, monitoring dashboards, database integration, and Raspberry Pi data collection components.

Key areas I worked on include:

* Real-time production and machine monitoring
* PLC data collection through Raspberry Pi edge devices
* Centralized SQL Server data storage
* Production KPI dashboards
* Error monitoring and logging
* Historical production analysis
* Power consumption monitoring
* Monthly power-consumption trends
* Power quality analysis
* Voltage monitoring and summaries
* Automated email notifications
* Modular monitoring modules for different production areas

### System Architecture

```text
┌──────────────────────┐
│    Keyence PLCs      │
│                      │
│ Production Equipment │
└──────────┬───────────┘
           │
        TCP/IP
           │
           ▼
┌──────────────────────┐
│   Raspberry Pi 5     │
│                      │
│ Python Data Collector│
└──────────┬───────────┘
           │
           │ Data
           ▼
┌──────────────────────┐
│     SQL Server       │
│                      │
│ Production Data      │
│ Error Logs           │
│ Power Data           │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  ASP.NET Core MVC    │
│                      │
│ Business Logic       │
│ Monitoring Modules   │
│ Background Services  │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  Engineering         │
│  Dashboard           │
│                      │
│ Charts / KPIs / Logs │
│ Trends / Reports     │
└──────────────────────┘
```

### Engineering Highlights

**Edge Data Collection**

Built a Raspberry Pi-based data collection layer using Python to communicate with Keyence PLCs and transfer machine information to the central database.

**Factory-Wide Monitoring**

Developed a centralized monitoring platform covering multiple production areas, allowing engineers to monitor different machines and processes from a single application.

**Production Visualization**

Created interactive dashboards using Razor, Bootstrap, and Chart.js to visualize machine status, production data, KPIs, and historical trends.

**Power Monitoring**

Developed power-monitoring functionality for analyzing electricity consumption and electrical measurements through monthly trends, power-quality analysis, and voltage summaries.

**Automated Error Monitoring**

Implemented error logging and monitoring for individual production areas, allowing engineers to identify machine problems and review historical error activity.

**Automated Notifications**

Implemented background email notification services to alert engineers when configured monitoring conditions or electrical events require attention.

**Modular Architecture**

Organized the application into production-specific modules and controllers, making it easier to add additional machines, production areas, and monitoring metrics without restructuring the entire system.

### Production Areas

The dashboard provides monitoring functionality for:

* P1FA Oil Proof
* P1SA Winding
* P1FA Wire Harness
* P1SA Circuit
* P1SA Press
* P1SA Molding
* Power Monitoring

### Technology Stack

**Edge / Data Collection**

Raspberry Pi 5 · Python · Keyence PLC · TCP/IP

**Backend**

ASP.NET Core MVC · C# · Entity Framework Core · Dapper · Background Services

**Database**

Microsoft SQL Server

**Frontend**

Razor Views · Bootstrap · jQuery · Chart.js

**Notifications**

MailKit · Background Email Service

### Screenshots

**Machine List**

![Machine List](/projects/iot-dashboard/Screenshots/EIMMachineList.png)

Centralized view of monitored machines and production areas.

**Live KPI Dashboard**

![Live KPI Dashboard](/projects/iot-dashboard/Screenshots/P1-O-EIM33Dashboard.png)

Real-time production and machine KPI monitoring.

**Production Histogram**

![Production Histogram](/projects/iot-dashboard/Screenshots/P1-O-EIM33Histogram.png)

Historical production visualization for analyzing machine output.

**Production Monitoring**

![P1FA Harness](/projects/iot-dashboard/Screenshots/P1FAHarness.png)

Monitoring interface for the P1FA Wire Harness production area.

**Winding Monitoring**

![P1SA Winding](/projects/iot-dashboard/Screenshots/P1SAWinding.png)

Machine and production monitoring for the P1SA Circuit area.

**Power Monitoring**

![Power Monitoring](/projects/iot-dashboard/Screenshots/PowerMonitoringMT.png)

![Power Monitoring](/projects/iot-dashboard/Screenshots/PowerMonitoringPQ.png)

Monthly power-consumption trend analysis.

### Project Impact

The IoT Engineering Dashboard provides engineers with a centralized view of factory equipment and production data, reducing the need for manual floor checks and making machine conditions, production trends, errors, and power consumption easier to monitor and analyze.

The system combines **industrial PLC communication, edge computing, database systems, backend services, and web-based data visualization** into a single monitoring platform.

**Project Type:** Industrial IoT / Factory Monitoring / Full-Stack Web Application

**Deployment:** Internal manufacturing environment
