// @ts-nocheck
/* Client-only scene logic, moved verbatim from the original single HTML file. */
export default async function initPortfolio() {
  const $ = (s) => document.querySelector(s);
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  let _s = 42;
  const rnd = () => (_s = (_s * 16807) % 2147483647) / 2147483647;

  if (!CanvasRenderingContext2D.prototype.roundRect) {
    CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
      r = Math.min(r, w / 2, h / 2);
      this.moveTo(x + r, y);
      this.arcTo(x + w, y, x + w, y + h, r);
      this.arcTo(x + w, y + h, x, y + h, r);
      this.arcTo(x, y + h, x, y, r);
      this.arcTo(x, y, x + w, y, r);
      this.closePath();
    };
  }

  /* ==================================================================
   1. CONTENT — only real information from the brief
================================================================== */
  const EMAIL = "nathaniellucero.dev@gmail.com";
  const ABOUT_P = [
    "I'm a full-stack developer focused on building scalable, maintainable, and user-friendly web applications. I enjoy designing clean architectures and writing code that is easy to extend, ensuring long-term reliability and performance across projects.",
    "I also have experience in IoT integration, connecting industrial systems to web-based interfaces for real-time monitoring and automation. This allows me to bridge the gap between hardware and software, creating efficient systems that provide actionable insights and streamline operations.",
    "I'm passionate about leveraging emerging technologies to create innovative, high-quality solutions. I aim to build products that not only solve real-world problems but also deliver meaningful experiences for users and businesses alike.",
  ];
  const EXPER = [
    {
      y: "2025 — Present",
      t: "Full Stack Developer",
      o: "Sanyo Denki Philippines, Inc.",
    },
    {
      y: "2025",
      t: "BS Information Technology",
      o: "President Ramon Magsaysay State University",
    },
    { y: "2021", t: "Hello World! 👋", o: "Wrote my first line of code" },
  ];

  const TECH = {
    frontend: {
      label: "FRONTEND",
      books: [
        {
          n: "Razor",
          s: "RAZOR",
          tag: "RZ",
          d: "Server-side view engine for ASP.NET",
          c: "#6e4f66",
        },
        {
          n: "JavaScript",
          s: "JAVASCRIPT",
          tag: "JS",
          d: "Web scripting language",
          c: "#a8862f",
        },
        {
          n: "TypeScript",
          s: "TYPESCRIPT",
          tag: "TS",
          d: "Typed JavaScript development",
          c: "#3468a0",
          big: 1,
        },
        {
          n: "React",
          s: "REACT",
          tag: "RE",
          d: "Frontend library",
          c: "#3e8fb0",
          big: 1,
        },
        {
          n: "Next.js",
          s: "NEXT.JS",
          tag: "NX",
          d: "React framework",
          c: "#3f4552",
        },
        {
          n: "Tailwind CSS",
          s: "TAILWIND CSS",
          tag: "TW",
          d: "Utility-first CSS framework",
          c: "#3d7a96",
        },
        {
          n: "Bootstrap",
          s: "BOOTSTRAP",
          tag: "BS",
          d: "CSS component framework",
          c: "#6b5a86",
        },
        {
          n: "Vite",
          s: "VITE",
          tag: "VI",
          d: "Frontend build tool",
          c: "#8a7a3c",
        },
        {
          n: "ESLint",
          s: "ESLINT",
          tag: "ES",
          d: "Code linting",
          c: "#4a5f82",
        },
        {
          n: "Prettier",
          s: "PRETTIER",
          tag: "PR",
          d: "Code formatting",
          c: "#955e70",
        },
      ],
    },
    backend: {
      label: "BACKEND",
      books: [
        {
          n: "ASP.NET Core MVC",
          s: "ASP.NET MVC",
          tag: "AM",
          d: "Backend web framework",
          c: "#5b5286",
          big: 1,
        },
        {
          n: "ASP.NET Core Web API",
          s: "WEB API",
          tag: "WA",
          d: "REST API framework",
          c: "#4a5f82",
        },
        {
          n: "C#",
          s: "C#",
          tag: "C#",
          d: "Primary backend language",
          c: "#6b5b95",
          big: 1,
        },
        {
          n: "Node.js",
          s: "NODE.JS",
          tag: "ND",
          d: "JavaScript runtime",
          c: "#4a7a52",
        },
        {
          n: "Python",
          s: "PYTHON",
          tag: "PY",
          d: "Scripting & data collection",
          c: "#3f6f9e",
          big: 1,
        },
        {
          n: "PHP",
          s: "PHP",
          tag: "PH",
          d: "Server scripting language",
          c: "#6b6f7a",
        },
        {
          n: "MS SQL Server",
          s: "SQL SERVER",
          tag: "SQ",
          d: "Relational database",
          c: "#9e4b45",
          big: 1,
        },
        {
          n: "Entity Framework Core",
          s: "EF CORE",
          tag: "EF",
          d: "Object-relational mapper",
          c: "#5b5286",
        },
        {
          n: "Express.js",
          s: "EXPRESS",
          tag: "EX",
          d: "Node.js web framework",
          c: "#4f5b52",
        },
        {
          n: "JWT",
          s: "JWT",
          tag: "JW",
          d: "Token-based authentication",
          c: "#97553f",
        },
        {
          n: "REST",
          s: "REST",
          tag: "RS",
          d: "API design style",
          c: "#556b7a",
        },
        {
          n: "SignalR",
          s: "SIGNALR",
          tag: "SR",
          d: "Real-time communication",
          c: "#8a4a5e",
          big: 1,
        },
      ],
    },
    tools: {
      label: "DEVELOPER TOOLS",
      books: [
        {
          n: "Git",
          s: "GIT",
          tag: "GT",
          d: "Version control",
          c: "#a5523f",
          big: 1,
        },
        {
          n: "GitHub",
          s: "GITHUB",
          tag: "GH",
          d: "Code hosting & collaboration",
          c: "#3f4552",
        },
        {
          n: "Visual Studio",
          s: "VISUAL STUDIO",
          tag: "VS",
          d: "IDE for .NET development",
          c: "#5f5490",
        },
        {
          n: "VS Code",
          s: "VS CODE",
          tag: "VC",
          d: "Code editor",
          c: "#2f7fa8",
        },
        {
          n: "SQL Server Management Studio",
          s: "SSMS",
          tag: "SS",
          d: "SQL administration tool",
          c: "#8a5a3c",
        },
      ],
    },
  };

  const CERTS = [
    {
      t: "Foundational C# with Microsoft",
      i: "FreeCodeCamp / Microsoft",
      url: "https://www.freecodecamp.org/certification/nathan-dotnet/foundational-c-sharp-with-microsoft",
    },
    {
      t: "ASP.NET Core MVC",
      i: "TestDome",
      url: "https://www.testdome.com/certificates/cfaddf981560460d8b1524149a154914",
    },
    {
      t: "SQL",
      i: "TestDome",
      url: "https://www.testdome.com/certificates/66c4575310ac487c90c6f9b43330868d",
    },
    {
      t: "Python",
      i: "TestDome",
      url: "https://www.testdome.com/certificates/98548ef66acd47d6a65cc544598a3a1d",
    },
    {
      t: "JavaScript",
      i: "TestDome",
      url: "https://www.testdome.com/certificates/9ef9a171150746639ee056649915f191",
    },
  ];

  const SHOT = "/projects/";
  const PROJECTS = [
    {
      id: "smd",
      title: "SMD Tower",
      subtitle: "Automated Storage Management System",
      desc: "A full-stack industrial automation system for controlling and monitoring a 360-slot automated storage tower, integrating a modern web interface with a Keyence PLC for real-time machine control and storage operations.",
      tech: [
        "React",
        "TypeScript",
        "ASP.NET Core",
        "SQL Server",
        "Keyence PLC",
        "SignalR",
      ],
      type: "Industrial Automation / Full-Stack Web Application",
      deployment: "Internal manufacturing environment",
      overview:
        "SMD Tower is an automated storage management system designed to manage reels and materials stored inside a 360-slot storage tower. The system connects a modern React web application to an ASP.NET Core backend, SQL Server, and a Keyence PLC over TCP/IP. It allows operators to monitor storage slots, register materials, retrieve materials, control machine positioning, and track system activity. The application also supports multiple connected users while enforcing a single active machine operator. Other users can access the system in View Only mode without being able to execute machine-control operations.",
      built: [
        "360-slot real-time storage management interface",
        "Automated reel registration and retrieval workflows",
        "Keyence PLC integration through TCP/IP",
        "Machine positioning using PLC angle and height registers",
        "Operator barcode authentication",
        "Single-operator machine control",
        "View Only access",
        "Real-time machine-session synchronization using SignalR",
        "Excel-based bulk material import",
        "Activity and operation logging",
        "Admin and system management features",
      ],
      arch: {
        steps: [
          "React Frontend",
          "REST API / SignalR",
          "ASP.NET Core API",
          "SQL Server",
        ],
        extra: { after: 3, label: "+ Keyence PLC" },
      },
      highlights: [
        {
          t: "Industrial PLC Integration",
          b: "Implemented TCP/IP communication between the ASP.NET Core backend and a Keyence PLC to control machine operations, read PLC states, and handle positioning commands.",
        },
        {
          t: "Automated Storage Workflow",
          b: "Built automated workflows for registering and retrieving reels. After completing an operation, the system can automatically advance to the next available storage position.",
        },
        {
          t: "Real-Time Machine Control",
          b: "Implemented SignalR-based synchronization so connected users immediately receive machine-session changes.",
        },
        {
          t: "Single-Operator Control",
          b: "Designed a server-side machine-session system allowing only one operator to control the machine at a time. Other users are placed in View Only mode.",
        },
        {
          t: "Positioning Control",
          b: "Integrated PLC positioning registers for angle and height control.",
        },
        {
          t: "Barcode & Excel Integration",
          b: "Implemented barcode-based operator authentication and Excel import functionality.",
        },
      ],
      stack: [
        {
          g: "Frontend",
          i: [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "TanStack Query",
            "Axios",
            "SignalR Client",
          ],
        },
        {
          g: "Backend",
          i: [
            "ASP.NET Core",
            "C#",
            "REST API",
            "SignalR",
            "Background Services",
            "TCP/IP",
          ],
        },
        { g: "Database", i: ["Microsoft SQL Server"] },
        {
          g: "Industrial Integration",
          i: ["Keyence PLC", "TCP/IP", "MR/DM Device Communication"],
        },
      ],
      shots: [
        {
          u: SHOT + "smd-tower/Screenshots/landing-page.png",
          c: "Landing Page",
        },
        {
          u: SHOT + "smd-tower/Screenshots/master-control.png",
          c: "Master Control",
        },
        { u: SHOT + "smd-tower/Screenshots/auto-mode.png", c: "Auto Mode" },
        { u: SHOT + "smd-tower/Screenshots/manual-mode.png", c: "Manual Mode" },
        { u: SHOT + "smd-tower/Screenshots/admin-panel.png", c: "Admin Panel" },
      ],
      impact:
        "SMD Tower brings storage management, machine control, and material tracking into a single web-based system, reducing reliance on manual storage operations while providing operators and engineers with centralized visibility of the automated storage equipment.",
    },
    {
      id: "iot",
      title: "IoT Engineering Dashboard",
      subtitle: "Real-Time Factory Monitoring",
      desc: "A full-stack industrial monitoring platform that collects PLC and machine data through Raspberry Pi edge devices and provides engineers with centralized real-time production, machine, and power monitoring across multiple production areas.",
      tech: [
        "ASP.NET Core",
        "C#",
        "SQL Server",
        "Raspberry Pi",
        "Python",
        "Keyence PLC",
        "Chart.js",
      ],
      type: "Industrial IoT / Factory Monitoring / Full-Stack Web Application",
      deployment: "Internal manufacturing environment",
      overview:
        "The IoT Engineering Dashboard is a factory monitoring platform designed to give engineers centralized visibility into machine status, production data, errors, power consumption, and historical trends. The system connects Keyence PLCs to Raspberry Pi edge devices. Machine data is collected and stored in a central SQL Server database. ASP.NET Core MVC processes and visualizes the information through interactive dashboards and historical reports. The platform covers seven production areas as well as power monitoring.",
      built: [
        "Real-time production and machine monitoring",
        "PLC data collection through Raspberry Pi edge devices",
        "Centralized SQL Server data storage",
        "Production KPI dashboards",
        "Error monitoring and logging",
        "Historical production analysis",
        "Power consumption monitoring",
        "Monthly power-consumption trends",
        "Power quality analysis",
        "Voltage monitoring and summaries",
        "Automated email notifications",
        "Modular monitoring modules for different production areas",
      ],
      arch: {
        steps: [
          "Keyence PLCs",
          "TCP/IP",
          "Raspberry Pi 5",
          "Python Data Collector",
          "SQL Server",
          "ASP.NET Core MVC",
          "Engineering Dashboard",
        ],
      },
      highlights: [
        {
          t: "Edge Data Collection",
          b: "Built a Raspberry Pi-based data collection layer using Python to communicate with Keyence PLCs and transfer machine information to the central database.",
        },
        {
          t: "Factory-Wide Monitoring",
          b: "Developed a centralized monitoring platform covering multiple production areas.",
        },
        {
          t: "Production Visualization",
          b: "Created interactive dashboards using Razor, Bootstrap, and Chart.js.",
        },
        {
          t: "Power Monitoring",
          b: "Developed power-monitoring functionality for analyzing electricity consumption and electrical measurements through monthly trends, power-quality analysis, and voltage summaries.",
        },
        {
          t: "Automated Error Monitoring",
          b: "Implemented error logging and monitoring for individual production areas.",
        },
        {
          t: "Automated Notifications",
          b: "Implemented background email notification services for configured monitoring conditions and electrical events.",
        },
        {
          t: "Modular Architecture",
          b: "Organized the application into production-specific modules and controllers.",
        },
      ],
      areas: [
        "P1FA Oil Proof",
        "P1SA Winding",
        "P1FA Wire Harness",
        "P1SA Circuit",
        "P1SA Press",
        "P1SA Molding",
        "Power Monitoring",
      ],
      stack: [
        {
          g: "Edge / Data Collection",
          i: ["Raspberry Pi 5", "Python", "Keyence PLC", "TCP/IP"],
        },
        {
          g: "Backend",
          i: [
            "ASP.NET Core MVC",
            "C#",
            "Entity Framework Core",
            "Dapper",
            "Background Services",
          ],
        },
        { g: "Database", i: ["Microsoft SQL Server"] },
        {
          g: "Frontend",
          i: ["Razor Views", "Bootstrap", "jQuery", "Chart.js"],
        },
        { g: "Notifications", i: ["MailKit", "Background Email Service"] },
      ],
      shots: [
        {
          u: SHOT + "iot-dashboard/Screenshots/EIMMachineList.png",
          c: "Machine List",
        },
        {
          u: SHOT + "iot-dashboard/Screenshots/P1-O-EIM33Dashboard.png",
          c: "Live KPI Dashboard",
        },
        {
          u: SHOT + "iot-dashboard/Screenshots/P1-O-EIM33Histogram.png",
          c: "Production Histogram",
        },
        {
          u: SHOT + "iot-dashboard/Screenshots/P1FAHarness.png",
          c: "P1FA Harness",
        },
        {
          u: SHOT + "iot-dashboard/Screenshots/P1SAWinding.png",
          c: "P1SA Winding",
        },
        {
          u: SHOT + "iot-dashboard/Screenshots/PowerMonitoringMT.png",
          c: "Power Monitoring",
        },
        {
          u: SHOT + "iot-dashboard/Screenshots/PowerMonitoringPQ.png",
          c: "Power Quality",
        },
      ],
      impact:
        "The IoT Engineering Dashboard provides engineers with a centralized view of factory equipment and production data, reducing the need for manual floor checks and making machine conditions, production trends, errors, and power consumption easier to monitor and analyze.",
    },
    {
      id: "yudoo",
      title: "YUDOO Web",
      subtitle: "Digital Process Instruction System",
      desc: "A full-stack manufacturing workstation platform that replaces paper-based work instructions with digital, model-specific process guides and real-time PLC-driven production updates.",
      tech: [
        "React",
        "TypeScript",
        "ASP.NET Core",
        "SQL Server",
        "SignalR",
        "PLC",
      ],
      type: "Manufacturing / Full-Stack Web Application / Industrial IoT",
      deployment: "Internal manufacturing environment",
      overview:
        "YUDOO Web is a digital manufacturing workstation system designed to provide operators with centralized process instructions, production records, and real-time workstation status. The system replaces traditional paper-based work instructions with digital instructions dynamically loaded based on the selected manufacturing model and workstation. It also connects the web application to PLC-driven equipment. Production status and machine events can be delivered to connected workstations in real time.",
      built: [
        "Digital process instruction management",
        "Model- and station-specific work instructions",
        "Real-time PLC status updates",
        "Production output monitoring",
        "Daily production logs",
        "Manufacturing model management",
        "Process instruction management",
        "User and workstation management",
        "Application settings and configuration",
        "Real-time communication using SignalR",
      ],
      arch: {
        steps: [
          "PLC / Equipment",
          "PLC Polling Service",
          "PLC State Cache",
          "SignalR",
          "React Frontend",
          "REST API",
          "ASP.NET Core API",
          "SQL Server",
        ],
      },
      highlights: [
        {
          t: "Digital Process Instructions",
          b: "Built a system for creating and maintaining digital manufacturing instructions. Operators can access the correct process steps and images based on selected model and workstation.",
        },
        {
          t: "Real-Time PLC Integration",
          b: "Implemented a background PLC polling architecture that continuously retrieves equipment state without blocking normal API requests.",
        },
        {
          t: "Real-Time Communication",
          b: "Implemented SignalR to push workstation and machine updates directly to the frontend.",
        },
        {
          t: "Model-Aware Instructions",
          b: "Designed process instructions so manufacturing content can be associated with specific models and stations.",
        },
        {
          t: "Production Monitoring",
          b: "Built dashboards for monitoring production output and workstation activity.",
        },
        {
          t: "Manufacturing Administration",
          b: "Developed management interfaces for users, models, process instructions, workstations, and application settings.",
        },
      ],
      stack: [
        {
          g: "Frontend",
          i: [
            "React",
            "TypeScript",
            "Vite",
            "React Router",
            "Tailwind CSS",
            "SignalR Client",
          ],
        },
        {
          g: "Backend",
          i: [
            "ASP.NET Core",
            "C#",
            "REST API",
            "Entity Framework Core",
            "SignalR",
            "Background Services",
          ],
        },
        { g: "Database", i: ["Microsoft SQL Server"] },
        {
          g: "Industrial Integration",
          i: [
            "PLC communication",
            "Background PLC polling",
            "Real-time workstation status",
          ],
        },
      ],
      shots: [
        { u: SHOT + "yudoo-web/Screenshots/Dashboard.png", c: "Dashboard" },
        {
          u: SHOT + "yudoo-web/Screenshots/DigitalProcessInstructions.png",
          c: "Digital Process Instructions",
        },
        { u: SHOT + "yudoo-web/Screenshots/DailyLog.png", c: "Daily Log" },
        {
          u: SHOT + "yudoo-web/Screenshots/OutputMonitoring.png",
          c: "Output Monitoring",
        },
        {
          u: SHOT + "yudoo-web/Screenshots/UserAccountMaintenance.png",
          c: "User Account Maintenance",
        },
      ],
      impact:
        "YUDOO Web transforms paper-based manufacturing instructions into a centralized digital workstation platform while connecting production software with real-time machine information.",
    },
  ];

  /* ==================================================================
   2. Try to load Three.js — otherwise fall back to the 2D portfolio
================================================================== */
  let THREE;
  try {
    THREE = await import("three");
  } catch (e) {
    webglFail();
  }
  if (THREE) {
    try {
      new THREE.WebGLRenderer({ canvas: $("#gl"), antialias: true });
    } catch (e) {
      webglFail();
    }
  }
  function webglFail() {
    document.body.classList.remove("loading");
    $("#loader").classList.add("done");
    $("#btn2d").style.display = "none";
    $("#btnTheme").style.display = "none";
    enterFlat(true);
    throw new Error("3D unavailable");
  }

  /* Wait for fonts so canvas textures render with correct typography */
  try {
    await Promise.race([
      Promise.all(
        ["400 20px", "500 20px", "600 20px", "700 20px"]
          .map((w) => document.fonts.load(`${w} "Space Grotesk"`))
          .concat(
            ["400 16px", "600 16px"].map((w) =>
              document.fonts.load(`${w} "JetBrains Mono"`),
            ),
          )
          .concat(
            ["600 30px", "700 40px"].map((w) =>
              document.fonts.load(`${w} "Caveat"`),
            ),
          )
          .concat([document.fonts.load('600 30px "Lora"')]),
      ),
      new Promise((r) => setTimeout(r, 2800)),
    ]);
  } catch (e) {}

  /* ==================================================================
   3. Renderer / scene / lights
   COMPACT ROOM: x [-4.6, 4.6], y [0, 3.1], z [-4.4, 3.2]
================================================================== */
  const isMobile =
    matchMedia("(max-width:820px)").matches ||
    /Mobi|Android/i.test(navigator.userAgent);
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isLowPower =
    isMobile ||
    (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
    reduced;

  const renderer = new THREE.WebGLRenderer({
    canvas: $("#gl"),
    antialias: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(
    Math.min(devicePixelRatio, isLowPower ? 1.25 : isMobile ? 1.5 : 1.75),
  );
  renderer.setSize(innerWidth, innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.shadowMap.enabled = !isLowPower;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0d0f12);
  const camera = new THREE.PerspectiveCamera(
    44,
    innerWidth / innerHeight,
    0.08,
    60,
  );
  camera.position.set(0.9, 1.72, 0.75);

  const hemi = new THREE.HemisphereLight(0xe8e2d6, 0x3a352f, 0.6);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffe9cf, 2.1);
  sun.position.set(-5.8, 5.6, 1.1); // daylight from the window side
  sun.target.position.set(1.2, 0, -2.2);
  sun.castShadow = true;
  sun.shadow.mapSize.set(isLowPower ? 1024 : 2048, isLowPower ? 1024 : 2048);
  Object.assign(sun.shadow.camera, {
    left: -8,
    right: 8,
    top: 7,
    bottom: -6,
    near: 1,
    far: 26,
  });
  sun.shadow.bias = -0.0004;
  scene.add(sun, sun.target);
  const lampLight = new THREE.PointLight(0xffb172, 3.2, 2.2, 2);
  lampLight.position.set(0.02, 1.05, -2.42);
  scene.add(lampLight);
  const screenGlow = new THREE.PointLight(0x9fc4e8, 2.6, 2.6, 2);
  screenGlow.position.set(-1.35, 1.3, -2.3);
  scene.add(screenGlow);

  /* ==================================================================
   4. Canvas-texture helpers (all readable 3D surfaces)
================================================================== */
  const F = {
    sans: '"Space Grotesk"',
    mono: '"JetBrains Mono"',
    hand: '"Caveat"',
    serif: '"Lora"',
  };
  function ctex(w, h, fn) {
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    const g = c.getContext("2d");
    fn(g, w, h);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 8;
    return t;
  }
  function wrap(g, text, maxW) {
    const words = String(text).split(" ");
    let line = "",
      lines = [];
    for (const w of words) {
      const t = line ? line + " " + w : w;
      if (g.measureText(t).width > maxW && line) {
        lines.push(line);
        line = w;
      } else line = t;
    }
    lines.push(line);
    return lines;
  }

  /* ---- materials ---- */
  const mat = (o) => new THREE.MeshStandardMaterial(o);
  const M = {
    wall: mat({ color: 0xd6d0c4, roughness: 0.95 }),
    wallWarm: mat({ color: 0xcfc5b4, roughness: 0.95 }),
    steel: mat({ color: 0x26272b, roughness: 0.6, metalness: 0.35 }),
    dark: mat({ color: 0x1b1c20, roughness: 0.55, metalness: 0.3 }),
    woodDark: mat({ color: 0x6f4f37, roughness: 0.8 }),
    deskFrame: mat({ color: 0x2c2d32, roughness: 0.6, metalness: 0.3 }),
    paper: mat({ color: 0xddd6c8, roughness: 0.9 }),
  };

  /* ---- floor wood ---- */
  function woodTex() {
    return ctex(512, 512, (g, W, H) => {
      g.fillStyle = "#82643f";
      g.fillRect(0, 0, W, H);
      for (let r = 0; r < 8; r++) {
        const l = 0.9 + rnd() * 0.2;
        g.fillStyle = `rgb(${Math.min(255, (130 * l) | 0)},${Math.min(255, (100 * l) | 0)},${Math.min(255, (63 * l) | 0)})`;
        g.fillRect(0, r * 64, W, 64);
        g.fillStyle = "rgba(0,0,0,.28)";
        g.fillRect(0, r * 64, W, 2);
        const sx = rnd() * W;
        g.fillRect(sx, r * 64, 2, 64);
        for (let s = 0; s < 6; s++) {
          g.strokeStyle = "rgba(0,0,0,.07)";
          g.lineWidth = 1;
          g.beginPath();
          const yy = r * 64 + 8 + rnd() * 48;
          g.moveTo(0, yy);
          g.bezierCurveTo(
            W * 0.3,
            yy + rnd() * 6 - 3,
            W * 0.6,
            yy + rnd() * 6 - 3,
            W,
            yy,
          );
          g.stroke();
        }
      }
    });
  }
  const floorTex = woodTex();
  floorTex.wrapS = floorTex.wrapT = THREE.RepeatWrapping;
  floorTex.repeat.set(2.4, 2.0);
  const floorMat = mat({ map: floorTex, roughness: 0.85 });
  const deskTex = woodTex();
  deskTex.wrapS = deskTex.wrapT = THREE.RepeatWrapping;
  deskTex.repeat.set(1.6, 0.7);
  const deskTopMat = mat({ map: deskTex, roughness: 0.7 });

  /* ==================================================================
   5. Build the compact office
   BACK WALL (z=-4.4), left→right: bookshelf + nearby window | project table
   with slat feature behind it + small certs above | whiteboard replacing old slat zone
================================================================== */
  const interactives = []; // raycast targets
  const anims = { hands: [], plants: [], books: [], displays: [], steam: [] };
  const box = (w, h, d, m) => new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  const cyl = (r1, r2, h, m, seg = 14) =>
    new THREE.Mesh(new THREE.CylinderGeometry(r1, r2, h, seg), m);
  function cast(m) {
    m.castShadow = true;
    m.receiveShadow = true;
    return m;
  }

  /* ---- room shell: separate walls with a REAL window opening ---- */
  const WZ0 = -3.75,
    WZ1 = -1.0,
    WY0 = 0.95,
    WY1 = 2.8; // window opening (left wall), close to bookshelf
  {
    const WT = 0.12;
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(9.2, 7.6), floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, 0, -0.6);
    floor.receiveShadow = true;
    scene.add(floor);
    const ceil = new THREE.Mesh(
      new THREE.PlaneGeometry(9.2, 7.6),
      mat({ color: 0xe7e1d6, roughness: 0.95 }),
    );
    ceil.rotation.x = Math.PI / 2;
    ceil.position.set(0, 3.1, -0.6);
    ceil.receiveShadow = true;
    scene.add(ceil);
    const walls = [
      [9.2, 3.1, WT, 0, 1.55, -4.46, M.wall], // back
      [9.2, 3.1, WT, 0, 1.55, 3.26, M.wall], // front
      [WT, 3.1, 7.6, 4.66, 1.55, -0.6, M.wallWarm], // right
      // left wall in 4 segments around the window near the bookshelf
      [WT, WY0, 7.6, -4.66, WY0 / 2, -0.6, M.wallWarm],
      [WT, 3.1 - WY1, 7.6, -4.66, (WY1 + 3.1) / 2, -0.6, M.wallWarm],
      [
        WT,
        WY1 - WY0,
        WZ0 + 4.45,
        -4.66,
        (WY0 + WY1) / 2,
        (-4.45 + WZ0) / 2,
        M.wallWarm,
      ],
      [
        WT,
        WY1 - WY0,
        3.2 - WZ1,
        -4.66,
        (WY0 + WY1) / 2,
        (WZ1 + 3.2) / 2,
        M.wallWarm,
      ],
    ];
    walls.forEach(([w, h, d, x, y, z, m]) => {
      const b = box(w, h, d, m);
      b.position.set(x, y, z);
      b.receiveShadow = true;
      scene.add(b);
    });
  }

  /* ---- ambient set dressing ---- */
  {
    // Keep the slat feature wall below the certificate frames.
    for (let i = 0; i < 22; i++) {
      const s = cast(
        box(0.055, 0.9, 0.035, mat({ color: 0x7a5a3e, roughness: 0.85 })),
      );
      s.position.set(-2.48 + i * (2.2 / 21), 1.26, -4.365);
      scene.add(s);
    }
    // baseboards
    const bb = mat({ color: 0x2f2a24, roughness: 0.8 });
    const b1 = box(9.2, 0.12, 0.04, bb);
    b1.position.set(0, 0.06, -4.38);
    scene.add(b1);
    const b2 = box(0.04, 0.12, 7.6, bb);
    b2.position.set(-4.58, 0.06, -0.6);
    scene.add(b2);
    const b3 = b2.clone();
    b3.position.x = 4.58;
    scene.add(b3);
    const b4 = box(9.2, 0.12, 0.04, bb);
    b4.position.set(0, 0.06, 3.18);
    scene.add(b4);
    // rug
    const rugTex = ctex(512, 512, (g, W, H) => {
      g.fillStyle = "#333a42";
      g.fillRect(0, 0, W, H);
      g.strokeStyle = "rgba(143,182,217,.5)";
      g.lineWidth = 2;
      g.strokeRect(18, 18, W - 36, H - 36);
      g.lineWidth = 1;
      g.strokeRect(32, 32, W - 64, H - 64);
      g.strokeStyle = "#3f4854";
      for (let x = 64; x < W - 64; x += 56)
        for (let y = 64; y < H - 64; y += 56) {
          g.beginPath();
          g.moveTo(x + 14, y);
          g.lineTo(x + 28, y + 14);
          g.lineTo(x + 14, y + 28);
          g.lineTo(x, y + 14);
          g.closePath();
          g.stroke();
        }
      for (let i = 0; i < 420; i++) {
        g.fillStyle = `rgba(255,255,255,${rnd() * 0.05})`;
        g.fillRect(rnd() * W, rnd() * H, 2, 2);
      }
    });
    const rug = new THREE.Mesh(
      new THREE.PlaneGeometry(3.8, 2.6),
      mat({ map: rugTex, roughness: 1 }),
    );
    rug.rotation.x = -Math.PI / 2;
    rug.position.set(-1.35, 0.012, -1.35);
    rug.receiveShadow = true;
    scene.add(rug);
    // ceiling light panels
    [
      [-1.9, 0.5],
      [1.9, 0.5],
      [-1.9, -2.5],
      [1.9, -2.5],
    ].forEach(([x, z]) => {
      const p = new THREE.Mesh(
        new THREE.PlaneGeometry(1.3, 0.4),
        new THREE.MeshBasicMaterial({ color: 0xf5efe2 }),
      );
      p.rotation.x = Math.PI / 2;
      p.position.set(x, 3.06, z);
      scene.add(p);
    });
  }

  /* ---- window on the left wall: real opening + layered outdoor scenery ---- */
  {
    const WZC = (WZ0 + WZ1) / 2,
      WYC = (WY0 + WY1) / 2;
    // frame + mullions (protrude slightly into the room, painted wood)
    const fr = mat({ color: 0xded6c4, roughness: 0.6 });
    const f = (w, h, d, x, y, z) => {
      const m = box(w, h, d, fr);
      m.position.set(x, y, z);
      m.castShadow = true;
      scene.add(m);
    };
    f(0.09, 0.07, WZ1 - WZ0 + 0.14, -4.56, WY1 + 0.035, WZC); // top
    f(0.09, 0.07, WZ1 - WZ0 + 0.14, -4.56, WY0 - 0.035, WZC); // bottom
    f(0.09, WY1 - WY0 + 0.14, 0.07, -4.56, WYC, WZ0 - 0.035); // jambs
    f(0.09, WY1 - WY0 + 0.14, 0.07, -4.56, WYC, WZ1 + 0.035);
    const sill = cast(
      box(
        0.18,
        0.045,
        WZ1 - WZ0 + 0.3,
        mat({ color: 0xd6cdb8, roughness: 0.7 }),
      ),
    );
    sill.position.set(-4.52, WY0 - 0.06, WZC);
    scene.add(sill);
    const glass = new THREE.Mesh(
      new THREE.PlaneGeometry(WZ1 - WZ0, WY1 - WY0),
      new THREE.MeshBasicMaterial({
        color: 0xcfe4f0,
        transparent: true,
        opacity: 0.07,
        depthWrite: false,
      }),
    );
    glass.rotation.y = Math.PI / 2;
    glass.position.set(-4.545, WYC, WZC);
    scene.add(glass);

    // --- far layer: sky, clouds, snow-capped mountains, hills, meadow ---
    const farTex = ctex(1024, 672, (g, W, H) => {
      const hz = H * 0.47;
      const sky = g.createLinearGradient(0, 0, 0, hz);
      sky.addColorStop(0, "#5c9bd0");
      sky.addColorStop(0.55, "#9ec8e6");
      sky.addColorStop(1, "#eaf2ef");
      g.fillStyle = sky;
      g.fillRect(0, 0, W, hz + 2);
      const cloud = (x, y, s, a) => {
        for (let i = 0; i < 7; i++) {
          const cx = x + (rnd() - 0.5) * s * 1.7,
            cy = y + (rnd() - 0.5) * s * 0.4,
            r = s * (0.28 + rnd() * 0.34);
          const cg = g.createRadialGradient(
            cx,
            cy - r * 0.25,
            r * 0.1,
            cx,
            cy,
            r,
          );
          cg.addColorStop(0, `rgba(255,255,255,${a})`);
          cg.addColorStop(0.7, `rgba(248,251,255,${a * 0.65})`);
          cg.addColorStop(1, "rgba(255,255,255,0)");
          g.fillStyle = cg;
          g.beginPath();
          g.arc(cx, cy, r, 0, 7);
          g.fill();
        }
      };
      cloud(W * 0.2, H * 0.11, 74, 0.92);
      cloud(W * 0.52, H * 0.07, 56, 0.8);
      cloud(W * 0.8, H * 0.16, 84, 0.88);
      cloud(W * 0.36, H * 0.24, 46, 0.7);
      cloud(W * 0.94, H * 0.3, 40, 0.6);
      // distant mountain range with snow caps
      const farPk = [
        [0.03, 0.115],
        [0.1, 0.2],
        [0.18, 0.13],
        [0.27, 0.26],
        [0.36, 0.15],
        [0.46, 0.3],
        [0.56, 0.17],
        [0.66, 0.24],
        [0.76, 0.12],
        [0.86, 0.22],
        [0.94, 0.15],
      ];
      g.fillStyle = "#a7b8ca";
      g.beginPath();
      g.moveTo(-10, hz + 2);
      farPk.forEach(([px, ph]) => {
        g.lineTo(W * px, hz - H * ph);
        g.lineTo(W * (px + 0.045), hz - H * ph * 0.32);
      });
      g.lineTo(W + 10, hz + 2);
      g.closePath();
      g.fill();
      g.fillStyle = "#f3f6f6";
      farPk.forEach(([px, ph]) => {
        if (ph > 0.18) {
          const x = W * px,
            y = hz - H * ph,
            c = H * 0.042;
          g.beginPath();
          g.moveTo(x, y);
          g.lineTo(x + c * 0.85, y + c);
          g.lineTo(x + c * 0.3, y + c * 0.55);
          g.lineTo(x, y + c * 0.82);
          g.lineTo(x - c * 0.35, y + c * 0.5);
          g.lineTo(x - c * 0.8, y + c);
          g.closePath();
          g.fill();
        }
      });
      // nearer blue-green range
      g.fillStyle = "#7e9a90";
      g.beginPath();
      g.moveTo(-10, hz + 2);
      [
        [0.0, 0.07],
        [0.08, 0.12],
        [0.17, 0.06],
        [0.27, 0.14],
        [0.38, 0.08],
        [0.5, 0.13],
        [0.61, 0.07],
        [0.72, 0.15],
        [0.83, 0.09],
        [0.93, 0.12],
      ].forEach(([px, ph]) => {
        g.lineTo(W * px, hz - H * ph);
        g.lineTo(W * (px + 0.05), hz - H * ph * 0.3);
      });
      g.lineTo(W + 10, hz + 2);
      g.closePath();
      g.fill();
      // atmospheric haze at the base of the ranges
      const haze = g.createLinearGradient(0, hz - H * 0.1, 0, hz + H * 0.02);
      haze.addColorStop(0, "rgba(234,242,239,0)");
      haze.addColorStop(1, "rgba(234,242,239,0.8)");
      g.fillStyle = haze;
      g.fillRect(0, hz - H * 0.1, W, H * 0.12);
      // rolling green hills
      const hill = (off, amp, col) => {
        g.fillStyle = col;
        g.beginPath();
        g.moveTo(0, H);
        g.lineTo(0, hz + H * off);
        for (let x = 0; x <= W; x += W / 8)
          g.quadraticCurveTo(
            x + W / 16,
            hz + H * off - H * amp * (0.4 + rnd() * 0.6),
            x + W / 8,
            hz + H * (off + 0.015),
          );
        g.lineTo(W, H);
        g.closePath();
        g.fill();
      };
      hill(0.045, 0.045, "#8fae67");
      hill(0.095, 0.04, "#77a257");
      // meadow
      const gr = g.createLinearGradient(0, hz + H * 0.115, 0, H);
      gr.addColorStop(0, "#6f9e4e");
      gr.addColorStop(0.5, "#578c40");
      gr.addColorStop(1, "#417034");
      g.fillStyle = gr;
      g.fillRect(0, hz + H * 0.115, W, H);
      for (let i = 0; i < 900; i++) {
        const x = rnd() * W,
          y = hz + H * 0.125 + rnd() * (H - hz - H * 0.125),
          l = 3 + rnd() * 7;
        g.strokeStyle = `rgba(${(90 + rnd() * 40) | 0},${(140 + rnd() * 40) | 0},${(60 + rnd() * 30) | 0},${0.35 + rnd() * 0.3})`;
        g.lineWidth = 1;
        g.beginPath();
        g.moveTo(x, y);
        g.quadraticCurveTo(
          x + rnd() * 4 - 2,
          y - l * 0.6,
          x + rnd() * 6 - 3,
          y - l,
        );
        g.stroke();
      }
      for (let i = 0; i < 50; i++) {
        g.fillStyle = ["#f5f2e4", "#f2d9a0", "#e8b7c3"][i % 3];
        g.beginPath();
        g.arc(
          rnd() * W,
          hz + H * 0.16 + rnd() * (H * 0.6),
          1.5 + rnd() * 1.5,
          0,
          7,
        );
        g.fill();
      }
    });
    const far = new THREE.Mesh(
      new THREE.PlaneGeometry(7.0, 4.6),
      new THREE.MeshBasicMaterial({ map: farTex, toneMapped: false }),
    );
    far.rotation.y = Math.PI / 2;
    far.position.set(-6.5, 1.9, -2.85);
    scene.add(far);
    anims.winFar = far;

    // --- near layer: closer hills, trees, grass (transparent sky → parallax) ---
    const nearTex = ctex(896, 568, (g, W, H) => {
      g.clearRect(0, 0, W, H);
      g.fillStyle = "#5d8a44";
      g.beginPath();
      g.moveTo(0, H);
      g.lineTo(0, H * 0.42);
      for (let x = 0; x <= W; x += W / 10)
        g.quadraticCurveTo(
          x + W / 20,
          H * (0.36 + rnd() * 0.08),
          x + W / 10,
          H * (0.4 + rnd() * 0.08),
        );
      g.lineTo(W, H);
      g.closePath();
      g.fill();
      for (let i = 0; i < 7; i++) {
        const x = 40 + rnd() * (W - 80),
          base = H * (0.46 + rnd() * 0.1),
          s = 0.7 + rnd() * 0.6;
        g.fillStyle = "#5a4632";
        g.fillRect(x - 2 * s, base - 14 * s, 4 * s, 16 * s);
        const cols = ["#3f6b34", "#4c7a3c", "#35622e"];
        for (let b = 0; b < 4; b++) {
          g.fillStyle = cols[b % 3];
          g.beginPath();
          g.arc(
            x + (rnd() - 0.5) * 14 * s,
            base - 16 * s - b * 9 * s,
            (11 - b * 1.5) * s,
            0,
            7,
          );
          g.fill();
        }
      }
      const gr = g.createLinearGradient(0, H * 0.62, 0, H);
      gr.addColorStop(0, "rgba(74,122,52,0)");
      gr.addColorStop(0.25, "rgba(74,122,52,1)");
      gr.addColorStop(1, "#3d6a31");
      g.fillStyle = gr;
      g.fillRect(0, H * 0.62, W, H * 0.38);
      for (let i = 0; i < 700; i++) {
        const x = rnd() * W,
          y = H * (0.66 + rnd() * 0.34),
          l = 4 + rnd() * 9;
        g.strokeStyle = `rgba(${(80 + rnd() * 50) | 0},${(135 + rnd() * 45) | 0},${(55 + rnd() * 30) | 0},${0.4 + rnd() * 0.3})`;
        g.lineWidth = 1;
        g.beginPath();
        g.moveTo(x, y);
        g.quadraticCurveTo(
          x + rnd() * 5 - 2.5,
          y - l * 0.6,
          x + rnd() * 7 - 3.5,
          y - l,
        );
        g.stroke();
      }
      for (let i = 0; i < 30; i++) {
        g.fillStyle = ["#f5f2e4", "#f2d9a0"][i % 2];
        g.beginPath();
        g.arc(rnd() * W, H * (0.7 + rnd() * 0.3), 1.5 + rnd() * 1.8, 0, 7);
        g.fill();
      }
    });
    const near = new THREE.Mesh(
      new THREE.PlaneGeometry(6.0, 3.8),
      new THREE.MeshBasicMaterial({
        map: nearTex,
        transparent: true,
        toneMapped: false,
        depthWrite: false,
      }),
    );
    near.rotation.y = Math.PI / 2;
    near.position.set(-5.5, 1.7, -2.85);
    scene.add(near);
    anims.winNear = near;
  }

  /* ---- plants ---- */
  function plant(scale = 1, leafCount = 7) {
    const g = new THREE.Group();
    const pot = cast(
      cyl(
        0.16 * scale,
        0.125 * scale,
        0.27 * scale,
        mat({ color: 0x4a4038, roughness: 0.9 }),
      ),
    );
    pot.position.y = 0.135 * scale;
    g.add(pot);
    const soil = cyl(
      0.14 * scale,
      0.14 * scale,
      0.02,
      mat({ color: 0x2c241c }),
    );
    soil.position.y = 0.27 * scale;
    g.add(soil);
    const cols = [0x4c6b4a, 0x3f5c40, 0x56885a];
    for (let i = 0; i < leafCount; i++) {
      const a = (i / leafCount) * Math.PI * 2 + rnd() * 0.5;
      const leaf = new THREE.Mesh(
        new THREE.SphereGeometry(0.14 * scale, 5, 4),
        mat({ color: cols[i % 3], roughness: 0.9 }),
      );
      leaf.scale.set(0.55, 1.7, 0.16);
      leaf.rotation.y = a;
      leaf.rotation.z = 0.45 + rnd() * 0.25;
      leaf.position.set(
        Math.sin(a) * 0.1 * scale,
        (0.42 + rnd() * 0.12) * scale,
        Math.cos(a) * 0.1 * scale,
      );
      leaf.userData.baseZ = leaf.rotation.z;
      g.add(leaf);
      anims.plants.push(leaf);
    }
    return g;
  }
  const p3 = plant(1.35, 8);
  p3.position.set(4.12, 0, -3.9);
  scene.add(p3); // back-right corner

  /* ---- generic helpers ---- */
  function limb(a, b, thick, m) {
    const A = new THREE.Vector3(...a),
      B = new THREE.Vector3(...b);
    const dir = new THREE.Vector3().subVectors(B, A),
      len = dir.length();
    const radius = thick * 0.48;
    const mesh = new THREE.Mesh(
      new THREE.CapsuleGeometry(
        radius,
        Math.max(0.001, len - radius * 2),
        4,
        8,
      ),
      m,
    );
    mesh.position.copy(A).add(B).multiplyScalar(0.5);
    mesh.quaternion.setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      dir.normalize(),
    );
    return cast(mesh);
  }
  function monitor(screenTex) {
    const g = new THREE.Group();
    // Keep the display at desk-friendly height, but cut the support column to half its old height.
    const bezel = cast(box(0.67, 0.44, 0.035, M.dark));
    bezel.position.set(0, 1.12, 0.02);
    g.add(bezel);
    const scr = new THREE.Mesh(
      new THREE.PlaneGeometry(0.62, 0.385),
      new THREE.MeshBasicMaterial({ map: screenTex }),
    );
    scr.position.set(0, 1.12, 0.04);
    g.add(scr);
    const col = cast(box(0.06, 0.16, 0.05, M.steel));
    col.position.set(0, 0.87, -0.04);
    g.add(col);
    const foot = cast(box(0.28, 0.025, 0.18, M.steel));
    foot.position.set(0, 0.8, -0.04);
    g.add(foot);
    g.userData.screen = scr;
    return g;
  }

  /* ==================================================================
   6. Screen content (canvas textures)
================================================================== */
  const aboutTex = ctex(1280, 800, (g, W, H) => {
    g.fillStyle = "#15181d";
    g.fillRect(0, 0, W, H);
    g.fillStyle = "#101318";
    g.fillRect(0, 0, 64, H);
    ["#8fb6d9", "#3c434b", "#3c434b", "#3c434b"].forEach((c, i) => {
      g.fillStyle = c;
      g.beginPath();
      g.arc(32, 48 + i * 46, 7, 0, 7);
      g.fill();
    });
    g.fillStyle = "#1b1f26";
    g.fillRect(64, 0, 236, H);
    g.fillStyle = "#22303f";
    g.beginPath();
    g.arc(182, 96, 44, 0, 7);
    g.fill();
    g.fillStyle = "#cfe0ee";
    g.font = `600 30px ${F.sans}`;
    g.textAlign = "center";
    g.fillText("NL", 182, 108);
    g.textAlign = "left";
    g.fillStyle = "#ece7de";
    g.font = `600 24px ${F.sans}`;
    g.fillText("Nathaniel Lucero", 96, 186);
    g.fillStyle = "#8fb6d9";
    g.font = `600 12px ${F.mono}`;
    g.fillText("FULL STACK DEVELOPER", 96, 212);
    g.fillStyle = "#98a2ab";
    g.font = `400 13px ${F.sans}`;
    g.fillText("Zambales, Philippines", 96, 234);
    g.fillStyle = "rgba(236,231,222,.12)";
    g.fillRect(96, 258, 172, 1);
    const nav = [
      "About",
      "Experience",
      "Tech Stack",
      "Projects",
      "Certifications",
      "Contact",
    ];
    nav.forEach((n, i) => {
      const y = 300 + i * 40,
        act = i === 0;
      if (act) {
        g.fillStyle = "#8fb6d9";
        g.fillRect(88, y - 14, 3, 22);
      }
      g.fillStyle = act ? "#cfe0ee" : "#8b959e";
      g.font = `${act ? 600 : 500} 16px ${F.sans}`;
      g.fillText(n, 104, y + 2);
    });
    g.fillStyle = "#ece7de";
    g.font = `600 42px ${F.sans}`;
    g.fillText("ABOUT ME", 340, 80);
    g.fillStyle = "#8fb6d9";
    g.fillRect(340, 98, 72, 3);
    g.font = `400 21px ${F.sans}`;
    let y = 156;
    ABOUT_P.forEach((p) => {
      wrap(g, p, 830).forEach((l) => {
        g.fillStyle = "#c6ccd3";
        g.fillText(l, 340, y);
        y += 33;
      });
      y += 16;
    });
    g.font = `600 12px ${F.mono}`;
    ["FULL STACK", "INDUSTRIAL IOT", "REAL-TIME SYSTEMS"].forEach((c, i) => {
      const x = 340 + i * 190;
      g.strokeStyle = "#33404d";
      g.lineWidth = 1.5;
      g.beginPath();
      g.roundRect(x, 688, 172, 36, 4);
      g.stroke();
      g.fillStyle = "#9fb3c2";
      g.textAlign = "center";
      g.fillText(c, x + 86, 711);
      g.textAlign = "left";
    });
    g.fillStyle = "#101318";
    g.fillRect(0, H - 34, W, 34);
    g.fillStyle = "#7f8a96";
    g.font = `400 13px ${F.mono}`;
    g.fillText("nathaniel@dev:~$ whoami", 64, H - 12);
    g.textAlign = "right";
    g.fillText("main · TypeScript · ASP.NET", W - 24, H - 12);
    g.textAlign = "left";
    const sh = g.createLinearGradient(0, 0, W, H);
    sh.addColorStop(0, "rgba(255,255,255,.05)");
    sh.addColorStop(0.45, "rgba(255,255,255,0)");
    g.fillStyle = sh;
    g.fillRect(0, 0, W, H);
  });

  const contactTex = ctex(1280, 800, (g, W, H) => {
    g.fillStyle = "#14171c";
    g.fillRect(0, 0, W, H);
    g.textAlign = "center";
    g.fillStyle = "#8fb6d9";
    g.font = `600 15px ${F.mono}`;
    g.fillText("G E T   I N   T O U C H", W / 2, 120);
    g.fillStyle = "#ece7de";
    g.font = `600 46px ${F.sans}`;
    g.fillText("GET IN TOUCH", W / 2, 180);
    g.fillStyle = "#a9b1b9";
    g.font = `400 20px ${F.sans}`;
    let y = 232;
    wrap(
      g,
      "Available for freelance projects and collaborations. Feel free to reach out via email.",
      720,
    ).forEach((l) => g.fillText(l, W / 2, (y += 30)));
    g.fillStyle = "#1a2029";
    g.strokeStyle = "#8fb6d9";
    g.lineWidth = 1.5;
    g.beginPath();
    g.roundRect(W / 2 - 330, 318, 660, 64, 32);
    g.fill();
    g.stroke();
    g.fillStyle = "#ece7de";
    g.font = `600 24px ${F.mono}`;
    g.fillText(EMAIL, W / 2, 358);
    g.fillStyle = "#ece7de";
    g.beginPath();
    g.roundRect(W / 2 - 244, 428, 232, 54, 4);
    g.fill();
    g.fillStyle = "#14171c";
    g.font = `600 13px ${F.mono}`;
    g.fillText("SEND EMAIL", W / 2 - 128 + 16, 460);
    g.strokeStyle = "rgba(236,231,222,.3)";
    g.beginPath();
    g.roundRect(W / 2 + 12, 428, 232, 54, 4);
    g.stroke();
    g.fillStyle = "#ece7de";
    g.fillText("DOWNLOAD CV", W / 2 + 128 - 16, 460);
    g.font = `500 15px ${F.sans}`;
    ["GitHub", "LinkedIn", "Instagram"].forEach((s, i) => {
      const x = W / 2 - 268 + i * 180;
      g.strokeStyle = "rgba(236,231,222,.22)";
      g.beginPath();
      g.roundRect(x, 528, 160, 46, 4);
      g.stroke();
      g.fillStyle = "#8fb6d9";
      g.beginPath();
      g.arc(x + 28, 551, 4, 0, 7);
      g.fill();
      g.fillStyle = "#c6ccd3";
      g.fillText(s, x + 94, 557);
    });
    g.fillStyle = "#6b7480";
    g.font = `400 12px ${F.mono}`;
    g.fillText("Click this screen to send an email", W / 2, 640);
    const sh = g.createLinearGradient(0, 0, W, H);
    sh.addColorStop(0, "rgba(255,255,255,.04)");
    sh.addColorStop(0.5, "rgba(255,255,255,0)");
    g.fillStyle = sh;
    g.fillRect(0, 0, W, H);
  });

  /* ---- the compact desk (front-center-right, facing the back wall) ---- */
  {
    const top = cast(box(2.3, 0.06, 0.95, deskTopMat));
    top.position.set(-1.35, 0.76, -1.72);
    scene.add(top);
    [-1.12, 1.12].forEach((dx) => {
      const s = cast(box(0.05, 0.72, 0.88, M.deskFrame));
      s.position.set(-1.35 + dx, 0.4, -1.72);
      scene.add(s);
    });
    const beam = box(2.2, 0.08, 0.05, M.deskFrame);
    beam.position.set(-1.35, 0.3, -2.12);
    scene.add(beam);
  }
  const m1 = monitor(aboutTex);
  m1.position.set(-1.73, 0, -1.97);
  scene.add(m1);
  const m2 = monitor(contactTex);
  m2.position.set(-0.97, 0, -1.97);
  scene.add(m2);
  m2.userData.screen.userData.mail = true;
  interactives.push(m2.userData.screen);
  m1.userData.screen.userData.about = true;

  /* keyboard (instanced keys) + mouse */
  {
    const base = cast(box(0.36, 0.025, 0.14, M.dark));
    base.position.set(-1.35, 0.8025, -1.52);
    scene.add(base);
    const keys = new THREE.InstancedMesh(
      new THREE.BoxGeometry(0.019, 0.012, 0.019),
      mat({ color: 0x2e3238, roughness: 0.6 }),
      48,
    );
    const mtx = new THREE.Matrix4();
    let i = 0;
    for (let r = 0; r < 4; r++)
      for (let c = 0; c < 12; c++) {
        mtx.setPosition(-1.35 - 0.154 + c * 0.028, 0.821, -1.552 + r * 0.028);
        keys.setMatrixAt(i++, mtx);
      }
    scene.add(keys);
    const mouse = cast(box(0.055, 0.03, 0.09, M.dark));
    mouse.position.set(-0.93, 0.806, -1.47);
    scene.add(mouse);
  }

  /* ---- coffee mug beside the PC on the compact desk ---- */
  {
    const mugG = new THREE.Group();
    mugG.position.set(-0.56, 0.79, -1.55);
    mugG.rotation.y = -0.7;
    scene.add(mugG);
    const coaster = cast(
      cyl(0.062, 0.062, 0.008, mat({ color: 0x3a2c22, roughness: 0.85 }), 16),
    );
    coaster.position.y = 0.004;
    mugG.add(coaster);
    const ceramic = mat({ color: 0xd8d2c6, roughness: 0.45 });
    const mug = cast(cyl(0.047, 0.041, 0.105, ceramic, 16));
    mug.position.y = 0.062;
    mugG.add(mug);
    const coffee = cyl(
      0.038,
      0.038,
      0.005,
      mat({ color: 0x3a2519, roughness: 0.35 }),
      16,
    );
    coffee.position.y = 0.108;
    mugG.add(coffee);
    // torus in its default XY plane → the ring reads as a "C" from the side,
    // opening toward the mug; its inner arc passes through the mug wall (truly attached)
    const handle = new THREE.Mesh(
      new THREE.TorusGeometry(0.031, 0.0085, 10, 22),
      ceramic,
    );
    handle.position.set(0.056, 0.064, 0);
    handle.castShadow = true;
    mugG.add(handle);

    // Hot black coffee: three subtle rising steam wisps.
    for (let i = 0; i < 3; i++) {
      const pts = [];
      for (let j = 0; j < 7; j++) {
        const y = j * 0.045;
        const x = Math.sin(j * 0.9 + i * 1.7) * 0.018;
        pts.push(new THREE.Vector3(x, y, 0));
      }
      const curve = new THREE.CatmullRomCurve3(pts);
      const line = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(curve.getPoints(18)),
        new THREE.LineBasicMaterial({
          color: 0xf4eee5,
          transparent: true,
          opacity: 0.2,
          depthWrite: false,
        }),
      );
      line.position.set(-0.006 + i * 0.012, 0.115, 0);
      line.userData.baseY = 0.115;
      line.userData.phase = i * 1.8;
      line.userData.baseX = line.position.x;
      mugG.add(line);
      anims.steam.push(line);
    }
  }

  /* ---- desk lamp: small modern lamp — base, thin arms, joint, downward shade ---- */
  {
    const lamp = new THREE.Group();
    lamp.position.set(-2.25, 0.79, -1.87);
    lamp.rotation.y = Math.PI / 6;
    scene.add(lamp);
    const lb = cast(cyl(0.075, 0.09, 0.022, M.steel, 20));
    lb.position.y = 0.011;
    lamp.add(lb);
    const arm1 = cast(cyl(0.009, 0.009, 0.27, M.steel, 10));
    arm1.position.set(0, 0.145, 0.018);
    arm1.rotation.x = 0.13;
    lamp.add(arm1);
    const joint = new THREE.Mesh(new THREE.SphereGeometry(0.02, 10, 8), M.dark);
    joint.position.set(0, 0.283, 0.036);
    lamp.add(joint);
    const arm2 = cast(cyl(0.008, 0.008, 0.215, M.steel, 10));
    arm2.position.set(0, 0.322, 0.138);
    arm2.rotation.x = 1.21;
    lamp.add(arm2);
    const shade = cast(
      new THREE.Mesh(new THREE.ConeGeometry(0.048, 0.075, 14), M.dark),
    );
    shade.position.set(0, 0.362, 0.243);
    lamp.add(shade);
    const bulb = new THREE.Mesh(
      new THREE.CircleGeometry(0.04, 12),
      new THREE.MeshBasicMaterial({ color: 0xffd9a0 }),
    );
    bulb.rotation.x = Math.PI / 2;
    bulb.position.set(0, 0.328, 0.243);
    lamp.add(bulb);
  }

  /* ---- PC tower: on the desk, right rear — hollow case + glass panel ---- */
  const pcFan = new THREE.Group();
  {
    const pc = new THREE.Group();
    pc.position.set(-0.37, 0.79, -1.83);
    pc.rotation.y = 0.16;
    scene.add(pc);
    [
      [-0.075, -0.15],
      [0.075, -0.15],
      [-0.075, 0.15],
      [0.075, 0.15],
    ].forEach(([x, z]) => {
      const ft = box(0.024, 0.026, 0.024, M.dark);
      ft.position.set(x, 0.013, z);
      pc.add(ft);
    });
    const bodyM = mat({ color: 0x1e2126, roughness: 0.45, metalness: 0.5 });
    const bot = cast(box(0.2, 0.012, 0.36, bodyM));
    bot.position.set(0, 0.032, 0);
    pc.add(bot);
    const topP = cast(box(0.2, 0.012, 0.36, bodyM));
    topP.position.set(0, 0.42, 0);
    pc.add(topP);
    const front = cast(
      box(
        0.2,
        0.404,
        0.012,
        mat({ color: 0x14161a, roughness: 0.3, metalness: 0.6 }),
      ),
    );
    front.position.set(0, 0.226, 0.174);
    pc.add(front);
    const back = cast(box(0.2, 0.404, 0.012, bodyM));
    back.position.set(0, 0.226, -0.174);
    pc.add(back);
    const left = cast(box(0.012, 0.404, 0.36, bodyM));
    left.position.set(-0.094, 0.226, 0);
    pc.add(left);
    const btn = cyl(
      0.013,
      0.013,
      0.008,
      mat({ color: 0x2a2e34, roughness: 0.3, metalness: 0.7 }),
      12,
    );
    btn.rotation.x = Math.PI / 2;
    btn.position.set(0, 0.385, 0.182);
    pc.add(btn);
    const led = new THREE.Mesh(
      new THREE.TorusGeometry(0.013, 0.002, 6, 16),
      new THREE.MeshBasicMaterial({ color: 0x9fd0f0 }),
    );
    led.position.set(0, 0.385, 0.183);
    pc.add(led);
    for (let i = 0; i < 6; i++) {
      const v = box(0.13, 0.005, 0.006, mat({ color: 0x0c0e11 }));
      v.position.set(0, 0.09 + i * 0.024, 0.183);
      pc.add(v);
    }
    [-0.03, 0.03].forEach((x) => {
      const u = box(
        0.016,
        0.007,
        0.01,
        mat({ color: 0x2e3a46, roughness: 0.4, metalness: 0.6 }),
      );
      u.position.set(x, 0.3, 0.184);
      pc.add(u);
    });
    const mobo = box(
      0.006,
      0.3,
      0.24,
      mat({ color: 0x14231b, roughness: 0.7 }),
    );
    mobo.position.set(-0.085, 0.226, -0.01);
    pc.add(mobo);
    pcFan.position.set(-0.03, 0.3, -0.01);
    pc.add(pcFan);
    const hub = cyl(0.014, 0.014, 0.018, M.dark, 10);
    hub.rotation.z = Math.PI / 2;
    pcFan.add(hub);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const bl = box(
        0.006,
        0.017,
        0.052,
        mat({ color: 0x2b2f36, roughness: 0.5 }),
      );
      bl.position.set(0, Math.cos(a) * 0.033, Math.sin(a) * 0.033);
      bl.rotation.x = a;
      pcFan.add(bl);
    }
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.052, 0.004, 6, 20),
      new THREE.MeshBasicMaterial({ color: 0x8fb6d9 }),
    );
    ring.rotation.y = Math.PI / 2;
    ring.position.set(-0.03, 0.3, -0.01);
    pc.add(ring);
    const gpu = cast(
      box(
        0.09,
        0.05,
        0.2,
        mat({ color: 0x274257, roughness: 0.4, metalness: 0.3 }),
      ),
    );
    gpu.position.set(0, 0.13, 0.02);
    pc.add(gpu);
    [-0.05, -0.02].forEach((z) => {
      const ram = box(
        0.05,
        0.018,
        0.012,
        mat({ color: 0x1c2733, roughness: 0.4 }),
      );
      ram.position.set(-0.06, 0.33, z);
      pc.add(ram);
    });
    const rgb = new THREE.Mesh(
      new THREE.BoxGeometry(0.005, 0.34, 0.005),
      new THREE.MeshBasicMaterial({ color: 0x8fb6d9 }),
    );
    rgb.position.set(0.088, 0.226, 0.166);
    pc.add(rgb);
    const glass = new THREE.Mesh(
      new THREE.PlaneGeometry(0.335, 0.38),
      mat({
        color: 0x0a0d12,
        roughness: 0.1,
        metalness: 0.7,
        transparent: true,
        opacity: 0.42,
      }),
    );
    glass.rotation.y = Math.PI / 2;
    glass.position.set(0.0945, 0.226, 0);
    pc.add(glass);
  }

  /* ---- small desk plant ---- */
  const dp = plant(0.34, 5);
  dp.position.set(-2.02, 0.79, -1.34);
  scene.add(dp); // small potted plant left of the desk

  /* ==================================================================
   6b. Nathaniel — seated at the compact desk, subtle typing idle
   (desk top y=0.79, front edge z=-1.245, seat top y=0.535)
================================================================== */
  const dev = new THREE.Group();
  dev.position.set(-1.35, 0, -1.01);
  scene.add(dev);
  {
    const hoodie = mat({ color: 0x526477, roughness: 0.92 });
    const hoodieTrim = mat({ color: 0x394959, roughness: 0.9 });
    const pants = mat({ color: 0x2b2f36, roughness: 0.95 });
    const skin = mat({ color: 0xd2a27e, roughness: 0.76 });
    const hairM = mat({ color: 0x49372c, roughness: 0.92 });
    const hp = mat({ color: 0x20262d, roughness: 0.5, metalness: 0.22 });
    const eyeM = mat({ color: 0x242326, roughness: 0.55 });
    const eyeWhite = mat({ color: 0xf1e8dc, roughness: 0.4 });
    const shoe = mat({ color: 0x1f2125, roughness: 0.8 });
    // hips resting exactly on the chair seat
    const hips = cast(
      new THREE.Mesh(new THREE.SphereGeometry(1, 12, 8), pants),
    );
    hips.scale.set(0.19, 0.105, 0.15);
    hips.position.set(0, 0.61, -0.05);
    dev.add(hips);
    // thighs forward under the desk, shins down, feet on the floor
    [-1, 1].forEach((s) => {
      dev.add(
        limb([s * 0.1, 0.58, -0.05], [s * 0.1, 0.42, -0.41], 0.13, pants),
      );
      dev.add(
        limb([s * 0.1, 0.42, -0.41], [s * 0.1, 0.06, -0.47], 0.11, pants),
      );
      const foot = cast(
        new THREE.Mesh(new THREE.SphereGeometry(1, 10, 7), shoe),
      );
      foot.scale.set(0.078, 0.052, 0.125);
      foot.position.set(s * 0.1, 0.058, -0.55);
      dev.add(foot);
      const sole = cast(
        box(0.135, 0.022, 0.185, mat({ color: 0x777b80, roughness: 0.85 })),
      );
      sole.position.set(s * 0.1, 0.018, -0.55);
      dev.add(sole);
    });
    // A tapered, shouldered profile gives the hoodie a natural seated silhouette.
    const torsoProfile = [
      new THREE.Vector2(0.135, -0.22),
      new THREE.Vector2(0.17, -0.18),
      new THREE.Vector2(0.19, -0.08),
      new THREE.Vector2(0.25, 0.06),
      new THREE.Vector2(0.29, 0.15),
      new THREE.Vector2(0.255, 0.22),
      new THREE.Vector2(0.12, 0.245),
      new THREE.Vector2(0, 0.25),
    ];
    const torso = cast(
      new THREE.Mesh(new THREE.LatheGeometry(torsoProfile, 12), hoodie),
    );
    torso.scale.z = 0.72;
    torso.userData.baseScaleY = torso.scale.y;
    torso.position.set(0, 0.91, -0.055);
    torso.rotation.x = -0.06;
    dev.add(torso);
    const hem = cast(
      new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.012, 6, 14), hoodieTrim),
    );
    hem.scale.set(1.12, 0.46, 0.72);
    hem.position.set(0, 0.72, -0.055);
    dev.add(hem);
    const hood = cast(
      new THREE.Mesh(new THREE.SphereGeometry(1, 12, 8), hoodieTrim),
    );
    hood.scale.set(0.13, 0.075, 0.065);
    hood.position.set(0, 1.17, 0.035);
    dev.add(hood);
    const zipper = cast(box(0.009, 0.19, 0.008, M.steel));
    zipper.position.set(0, 0.91, -0.196);
    dev.add(zipper);
    [-0.034, 0.034].forEach((x) => {
      const cord = cast(
        cyl(0.006, 0.006, 0.105, mat({ color: 0xd6cdbf, roughness: 0.8 }), 8),
      );
      cord.position.set(x, 1.105, -0.16);
      cord.rotation.x = 0.06;
      dev.add(cord);
      const tip = cast(
        new THREE.Mesh(new THREE.SphereGeometry(0.009, 8, 6), M.paper),
      );
      tip.position.set(x, 1.045, -0.158);
      dev.add(tip);
    });
    const pocket = cast(box(0.17, 0.055, 0.009, hoodieTrim));
    pocket.position.set(0, 0.82, -0.192);
    dev.add(pocket);
    const pocketSeam = cast(box(0.13, 0.006, 0.006, M.steel));
    pocketSeam.position.set(0, 0.85, -0.198);
    dev.add(pocketSeam);
    anims.torso = torso;
    const neckProfile = [
      new THREE.Vector2(0, -0.05),
      new THREE.Vector2(0.039, -0.047),
      new THREE.Vector2(0.047, -0.02),
      new THREE.Vector2(0.046, 0.02),
      new THREE.Vector2(0.04, 0.047),
      new THREE.Vector2(0, 0.05),
    ];
    const neck = cast(
      new THREE.Mesh(new THREE.LatheGeometry(neckProfile, 12), skin),
    );
    neck.position.set(0, 1.18, -0.083);
    dev.add(neck);
    const head = new THREE.Group();
    head.position.set(0, 1.32, -0.1);
    dev.add(head);
    anims.head = head;
    const headProfile = [
      new THREE.Vector2(0, -0.115),
      new THREE.Vector2(0.052, -0.109),
      new THREE.Vector2(0.082, -0.078),
      new THREE.Vector2(0.101, -0.03),
      new THREE.Vector2(0.104, 0.035),
      new THREE.Vector2(0.092, 0.083),
      new THREE.Vector2(0.06, 0.111),
      new THREE.Vector2(0, 0.119),
    ];
    const skull = cast(
      new THREE.Mesh(new THREE.LatheGeometry(headProfile, 16), skin),
    );
    skull.scale.z = 0.88;
    skull.position.y = 0.015;
    head.add(skull);
    // Shaped short hair with an off-center part and a swept front fringe.
    const hairGeo = new THREE.BufferGeometry(),
      hairVertices = [],
      hairFaces = [];
    const hairRows = 10,
      hairSides = 32,
      hairRadius = 0.126;
    for (let row = 0; row <= hairRows; row++) {
      for (let side = 0; side <= hairSides; side++) {
        const phi = (side / hairSides) * Math.PI * 2;
        // Keep the front hairline short while letting the hair cover the back of the skull.
        const edgeTheta = 1.72 + 0.28 * Math.sin(phi);
        const theta = (row / hairRows) * edgeTheta;
        hairVertices.push(
          -hairRadius * Math.sin(theta) * Math.cos(phi),
          hairRadius * Math.cos(theta),
          hairRadius * Math.sin(theta) * Math.sin(phi),
        );
      }
    }
    for (let row = 0; row < hairRows; row++)
      for (let side = 0; side < hairSides; side++) {
        const a = row * (hairSides + 1) + side,
          b = a + 1,
          c = a + hairSides + 1,
          d = c + 1;
        hairFaces.push(a, c, b, c, d, b);
      }
    hairGeo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(hairVertices, 3),
    );
    hairGeo.setIndex(hairFaces);
    hairGeo.computeVertexNormals();
    const hair = cast(new THREE.Mesh(hairGeo, hairM));
    const hairScaleY = 0.98,
      hairScaleZ = 0.92,
      hairPositionY = 0.018,
      hairPositionZ = 0.008;
    hair.scale.set(1, hairScaleY, hairScaleZ);
    hair.position.set(0, hairPositionY, hairPositionZ);
    head.add(hair);
    const partPoints = [];
    for (let i = 0; i <= 8; i++) {
      const z = -0.075 + i * 0.019;
      const y =
        hairPositionY +
        hairScaleY *
          hairRadius *
          Math.sqrt(Math.max(0.12, 1 - (0.024 ** 2 + z * z) / hairRadius ** 2));
      partPoints.push(new THREE.Vector3(0.024, y + 0.001, z + hairPositionZ));
    }
    const part = cast(
      new THREE.Mesh(
        new THREE.TubeGeometry(
          new THREE.CatmullRomCurve3(partPoints),
          20,
          0.003,
          5,
          false,
        ),
        mat({ color: 0x73533d, roughness: 0.9 }),
      ),
    );
    head.add(part);

    const fringe = cast(
      new THREE.Mesh(new THREE.SphereGeometry(1, 12, 8), hairM),
    );
    fringe.scale.set(0.061, 0.027, 0.036);
    fringe.position.set(0.036, 0.087, -0.073);
    fringe.rotation.z = -0.28;
    head.add(fringe);
    // Small ears, eyes, brows, nose and a subtle smile bring the face to life.
    [-1, 1].forEach((s) => {
      const ear = cast(
        new THREE.Mesh(new THREE.SphereGeometry(0.026, 8, 6), skin),
      );
      ear.scale.set(0.65, 1, 0.72);
      ear.position.set(s * 0.099, 0.005, -0.003);
      head.add(ear);
      const eye = cast(
        new THREE.Mesh(new THREE.SphereGeometry(0.01, 8, 6), eyeWhite),
      );
      eye.scale.set(1.2, 0.72, 0.6);
      eye.position.set(s * 0.034, 0.025, -0.09);
      head.add(eye);
      const pupil = cast(
        new THREE.Mesh(new THREE.SphereGeometry(0.0055, 8, 6), eyeM),
      );
      pupil.position.set(s * 0.034, 0.024, -0.096);
      head.add(pupil);
      const brow = cast(box(0.031, 0.006, 0.006, hairM));
      brow.position.set(s * 0.034, 0.046, -0.088);
      brow.rotation.z = s * 0.08;
      head.add(brow);
    });
    const nose = cast(
      new THREE.Mesh(new THREE.SphereGeometry(0.012, 8, 6), skin),
    );
    nose.scale.set(0.72, 0.9, 0.7);
    nose.position.set(0, 0.002, -0.101);
    head.add(nose);
    const smilePts = [
      new THREE.Vector3(-0.018, -0.028, -0.087),
      new THREE.Vector3(0, -0.033, -0.091),
      new THREE.Vector3(0.018, -0.028, -0.087),
    ];
    const smile = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(smilePts),
      new THREE.LineBasicMaterial({ color: 0x704b42 }),
    );
    head.add(smile);
    const band = cast(
      new THREE.Mesh(new THREE.TorusGeometry(0.116, 0.006, 8, 24, Math.PI), hp),
    );
    band.position.set(0, 0.018, 0.014);
    head.add(band);
    [-0.125, 0.125].forEach((x) => {
      const cup = cast(new THREE.Mesh(new THREE.SphereGeometry(1, 10, 8), hp));
      cup.scale.set(0.018, 0.034, 0.026);
      cup.position.set(x * 0.84, 0.002, 0.008);
      head.add(cup);
      const cushion = cast(
        new THREE.Mesh(
          new THREE.SphereGeometry(1, 8, 6),
          mat({ color: 0x3c4851, roughness: 0.92 }),
        ),
      );
      cushion.scale.set(0.01, 0.027, 0.02);
      cushion.position.set(x * 0.66, 0.002, 0.008);
      head.add(cushion);
    });
    // arms: elbow above the desk edge, hands hovering over the keys
    [-1, 1].forEach((s) => {
      const sh = [s * 0.235, 1.1, -0.05],
        el = [s * 0.24, 0.87, -0.2],
        ha = [s * 0.14, 0.858, -0.51];
      dev.add(limb(sh, el, 0.115, hoodie));
      dev.add(limb(el, ha, 0.078, hoodie));
      const cuff = cast(cyl(0.032, 0.032, 0.03, hoodieTrim, 10));
      cuff.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        new THREE.Vector3(
          ha[0] - el[0],
          ha[1] - el[1],
          ha[2] - el[2],
        ).normalize(),
      );
      cuff.position.set(
        (el[0] + ha[0]) / 2,
        (el[1] + ha[1]) / 2,
        (el[2] + ha[2]) / 2,
      );
      dev.add(cuff);
      const hand = cast(
        new THREE.Mesh(new THREE.SphereGeometry(1, 10, 8), skin),
      );
      hand.scale.set(0.057, 0.043, 0.061);
      hand.position.set(...ha);
      hand.userData.baseY = ha[1];
      hand.userData.ph = s;
      dev.add(hand);
      anims.hands.push(hand);
    });
  }

  /* ---- office chair: tucked under the desk, backrest behind Nathaniel ---- */
  {
    const g = new THREE.Group();
    g.position.set(-1.35, 0, -1.06);
    scene.add(g);
    const fab = mat({ color: 0x232427, roughness: 0.95 });
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2 + 0.35;
      const sp = cast(box(0.3, 0.035, 0.05, M.steel));
      sp.position.set(Math.cos(a) * 0.15, 0.035, Math.sin(a) * 0.15);
      sp.rotation.y = -a;
      g.add(sp);
      const caster = cyl(0.026, 0.026, 0.032, M.dark, 10);
      caster.position.set(Math.cos(a) * 0.27, 0.02, Math.sin(a) * 0.27);
      g.add(caster);
    }
    const col = cyl(0.035, 0.035, 0.4, M.steel);
    col.position.y = 0.26;
    g.add(col);
    const seat = cast(box(0.46, 0.07, 0.44, fab));
    seat.position.set(0, 0.5, -0.02);
    g.add(seat);
    const back = cast(box(0.44, 0.66, 0.06, fab));
    back.position.set(0, 0.87, 0.22);
    back.rotation.x = 0.12;
    g.add(back);
    const seam = box(
      0.44,
      0.02,
      0.062,
      mat({ color: 0x39516b, roughness: 0.8 }),
    );
    seam.position.set(0, 0.78, 0.19);
    seam.rotation.x = 0.12;
    g.add(seam);
  }

  /* ==================================================================
   7. Whiteboard — Experience (right side of the back wall, compact)
================================================================== */
  {
    const g = new THREE.Group();
    g.position.set(0.72, 0, -4.41);
    scene.add(g);
    const wbTex = ctex(1280, 800, (g2, W, H) => {
      g2.fillStyle = "#f4f4ef";
      g2.fillRect(0, 0, W, H);
      g2.strokeStyle = "rgba(120,120,120,.05)";
      g2.lineWidth = 26;
      [
        [300, 250, 120],
        [900, 600, 160],
        [600, 400, 90],
      ].forEach(([x, y, r]) => {
        g2.beginPath();
        g2.arc(x, y, r, 0, 7);
        g2.stroke();
      });
      g2.fillStyle = "#2b5fa8";
      g2.font = `700 76px ${F.hand}`;
      g2.fillText("EXPERIENCE", 64, 98);
      g2.strokeStyle = "#2b5fa8";
      g2.lineWidth = 4;
      g2.beginPath();
      g2.moveTo(66, 116);
      g2.bezierCurveTo(180, 126, 320, 108, 430, 114);
      g2.stroke();
      g2.strokeStyle = "#8a8f94";
      g2.lineWidth = 5;
      g2.beginPath();
      g2.moveTo(120, 170);
      for (let y = 170; y <= 640; y += 20)
        g2.lineTo(120 + (y % 40 ? 3 : -3), y);
      g2.stroke();
      const node = (y, c) => {
        g2.fillStyle = c;
        g2.beginPath();
        g2.arc(120, y, 10, 0, 7);
        g2.fill();
        g2.strokeStyle = "#f4f4ef";
        g2.lineWidth = 4;
        g2.stroke();
      };
      const badge = (y, txt) => {
        g2.strokeStyle = "#c0504d";
        g2.lineWidth = 3;
        g2.beginPath();
        g2.roundRect(150, y, 200, 44, 10);
        g2.stroke();
        g2.fillStyle = "#c0504d";
        g2.font = `600 30px ${F.hand}`;
        g2.fillText(txt, 166, y + 32);
      };
      const entry = (y, n, bc) => {
        node(y + 20, bc);
        badge(y, EXPER[n].y);
        g2.fillStyle = "#2f2f2f";
        g2.font = `700 46px ${F.hand}`;
        g2.fillText(EXPER[n].t, 160, y + 100);
        g2.fillStyle = "#5a6570";
        g2.font = `600 26px ${F.hand}`;
        g2.fillText(EXPER[n].o, 162, y + 136);
      };
      entry(180, 0, "#2b5fa8");
      entry(345, 1, "#c0504d");
      entry(505, 2, "#3f7a52");
      g2.strokeStyle = "#c0504d";
      g2.lineWidth = 3;
      g2.beginPath();
      g2.moveTo(560, 215);
      g2.quadraticCurveTo(640, 190, 660, 235);
      g2.stroke();
      g2.fillStyle = "#c0504d";
      g2.font = `600 26px ${F.hand}`;
      g2.fillText("now!", 648, 268);
      g2.save();
      g2.translate(1000, 410);
      g2.rotate(0.06);
      g2.fillStyle = "#f6e17a";
      g2.fillRect(0, 0, 190, 160);
      g2.strokeStyle = "#d9c14e";
      g2.strokeRect(0, 0, 190, 160);
      g2.fillStyle = "#5a4a12";
      g2.font = `600 25px ${F.hand}`;
      ["ship it", "keep it simple", "stay curious"].forEach((s, i) =>
        g2.fillText("□  " + s, 14, 42 + i * 40),
      );
      g2.restore();
      g2.fillStyle = "#3a3f47";
      [
        [86, 58],
        [1194, 58],
      ].forEach(([x, y]) => {
        g2.beginPath();
        g2.arc(x, y, 12, 0, 7);
        g2.fill();
      });
    });
    const board = new THREE.Mesh(
      new THREE.PlaneGeometry(1.72, 1.08),
      mat({ map: wbTex, roughness: 0.35 }),
    );
    board.position.set(0, 1.8, 0.055);
    g.add(board);
    const fr = mat({ color: 0x2c2d31, roughness: 0.5, metalness: 0.4 });
    [
      [0, 2.34, 1.8, 0.05],
      [0, 1.26, 1.8, 0.05],
      [-0.885, 1.8, 0.05, 1.12],
      [0.885, 1.8, 0.05, 1.12],
    ].forEach(([x, y, w, h]) => {
      const f = box(w, h, 0.04, fr);
      f.position.set(x, y, 0.03);
      g.add(f);
    });
    const tray = box(1.44, 0.035, 0.1, fr);
    tray.position.set(0, 1.23, 0.12);
    g.add(tray);
    [
      ["#2b5fa8", -0.35],
      ["#c0504d", 0],
      ["#3a3a3a", 0.35],
    ].forEach(([c, x]) => {
      const mk = cyl(0.012, 0.012, 0.11, mat({ color: c, roughness: 0.4 }));
      mk.rotation.z = Math.PI / 2;
      mk.position.set(x, 1.205, 0.12);
      g.add(mk);
    });
    const er = box(0.15, 0.05, 0.06, mat({ color: 0xb8b2a6 }));
    er.position.set(0.7, 1.26, 0.12);
    g.add(er);
  }

  /* ==================================================================
   8. Bookshelf — Tech Stack (tucked into the left corner, compact)
   Group scaled to ~2.0w × 2.2h × 0.42d; all books & hovers preserved.
================================================================== */
  const shelf = new THREE.Group();
  shelf.position.set(-3.58, 0, -4.36); // corner: against left wall + back wall
  shelf.scale.set(0.74, 0.7, 0.82);
  scene.add(shelf);
  function shade(hex, amt) {
    const n = parseInt(hex.slice(1), 16);
    const r = (n >> 16) & 255,
      g = (n >> 8) & 255,
      b = n & 255;
    const f = (v) => Math.round(amt < 0 ? v * (1 + amt) : v + (255 - v) * amt);
    return `rgb(${f(r)},${f(g)},${f(b)})`;
  }
  function drawSpine(g, e, big) {
    const W = 128,
      H = 512;
    g.fillStyle = e.c;
    g.fillRect(0, 0, W, H);
    for (let i = 0; i < 110; i++) {
      g.fillStyle = `rgba(0,0,0,${(rnd() * 0.07).toFixed(3)})`;
      g.fillRect(rnd() * W, 32 + rnd() * (H - 64), 2, 2);
    }
    g.fillStyle = shade(e.c, -0.38);
    g.fillRect(0, 0, W, 24);
    g.fillRect(0, H - 20, W, 20);
    g.fillStyle = shade(e.c, 0.22);
    g.fillRect(0, 24, W, 3);
    g.fillRect(0, H - 24, W, 3);
    g.fillStyle = "rgba(0,0,0,.3)";
    g.beginPath();
    g.roundRect(36, 36, 56, 26, 4);
    g.fill();
    g.strokeStyle = "rgba(255,255,255,.22)";
    g.lineWidth = 1;
    g.stroke();
    g.fillStyle = "#f2ede3";
    g.font = `600 14px ${F.mono}`;
    g.textAlign = "center";
    g.textBaseline = "middle";
    if (e.tag) g.fillText(e.tag, 64, 50);
    else {
      g.strokeStyle = "rgba(255,255,255,.4)";
      g.strokeRect(57, 43, 14, 14);
    }
    if (big) {
      g.fillStyle = shade(e.c, 0.25);
      g.fillRect(40, H - 74, 48, 2);
      g.save();
      g.translate(64, H - 56);
      g.rotate(Math.PI / 4);
      g.strokeStyle = "#f2ede3";
      g.lineWidth = 3;
      g.strokeRect(-8, -8, 16, 16);
      g.restore();
    }
    let fs = big ? 44 : 40;
    g.font = `700 ${fs}px ${F.sans}`;
    while (e.s && g.measureText(e.s).width > 352 && fs > 22) {
      fs -= 2;
      g.font = `700 ${fs}px ${F.sans}`;
    }
    g.save();
    g.translate(64 + fs * 0.34, H - 84);
    g.rotate(-Math.PI / 2);
    g.textAlign = "left";
    g.textBaseline = "alphabetic";
    if (e.s) {
      g.strokeStyle = "rgba(0,0,0,.38)";
      g.lineWidth = 6;
      g.strokeText(e.s, 0, 0);
      g.fillStyle = "#f4efe5";
      g.fillText(e.s, 0, 0);
    }
    g.restore();
    g.textAlign = "left";
    g.textBaseline = "alphabetic";
  }
  function makeBook(e, floor, x, big) {
    const w = big ? 0.185 : 0.13 + rnd() * 0.025;
    const h = (big ? 0.49 : 0.38) + rnd() * (big ? 0.02 : 0.055);
    const d = 0.26 + rnd() * 0.07;
    const front = 0.43 + rnd() * 0.055;
    const spine = ctex(128, 512, (g) => drawSpine(g, e, big));
    const spineMat = mat({
      map: spine,
      roughness: 0.72,
      emissive: 0xffffff,
      emissiveMap: spine,
      emissiveIntensity: 0,
    });
    const cover = mat({
      color: new THREE.Color(e.c).multiplyScalar(0.62),
      roughness: 0.85,
    });
    const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), [
      cover,
      cover,
      M.paper,
      M.paper,
      spineMat,
      cover,
    ]);
    cast(b);
    b.position.set(x + w / 2, floor + h / 2, front - d / 2);
    b.rotation.y = (rnd() - 0.5) * 0.045;
    b.userData = { book: e, baseZ: front - d / 2, pull: 0 };
    shelf.add(b);
    interactives.push(b);
    anims.books.push(b);
    return w;
  }
  function fillRow(f, list) {
    let x = -1.21;
    list.forEach((e) => {
      const w = makeBook(e, f, x, !!e.big);
      x += w + 0.05 + rnd() * 0.055;
    });
    return x;
  }
  function leanBook(x, f) {
    const e = { c: "#7a5236", s: "", tag: "" };
    const spine = ctex(128, 512, (g) => drawSpine(g, e, false));
    const w = 0.14,
      h = 0.47,
      th = 0.16;
    const cm = mat({ color: 0x4e3524, roughness: 0.85 });
    const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.29), [
      cm,
      cm,
      M.paper,
      M.paper,
      mat({ map: spine, roughness: 0.75 }),
      cm,
    ]);
    cast(b);
    b.rotation.z = th;
    b.position.set(x + 0.105, f + h / 2 - 0.012, 0.33);
    shelf.add(b);
    return 0.26;
  }
  function flatStack(x, f, n) {
    const cols = [
      "#56808f",
      "#8a6d3c",
      "#76885a",
      "#6e4f66",
      "#a8862f",
      "#7a5568",
    ];
    let y = f;
    for (let i = 0; i < n; i++) {
      const len = 0.22 + rnd() * 0.06,
        th = 0.034 + rnd() * 0.014;
      const c = cols[(i + Math.floor(rnd() * 6)) % 6];
      const t = ctex(256, 48, (g) => {
        g.fillStyle = c;
        g.fillRect(0, 0, 256, 48);
        g.fillStyle = "rgba(0,0,0,.32)";
        g.fillRect(0, 0, 16, 48);
        g.fillRect(240, 0, 16, 48);
        g.fillStyle = "rgba(255,255,255,.3)";
        g.fillRect(19, 5, 2, 38);
        g.fillRect(235, 5, 2, 38);
        g.save();
        g.translate(128, 24);
        g.rotate(Math.PI / 4);
        g.strokeStyle = "rgba(255,255,255,.55)";
        g.lineWidth = 2.5;
        g.strokeRect(-7, -7, 14, 14);
        g.restore();
      });
      const cover = mat({
        color: new THREE.Color(c).multiplyScalar(0.72),
        roughness: 0.85,
      });
      const b = cast(
        new THREE.Mesh(new THREE.BoxGeometry(len, th, 0.17), [
          M.paper,
          M.paper,
          cover,
          cover,
          mat({ map: t, roughness: 0.8 }),
          M.paper,
        ]),
      );
      b.position.set(
        x + len / 2 + (rnd() - 0.5) * 0.02,
        y + th / 2,
        0.3 + rnd() * 0.05,
      );
      b.rotation.y = (rnd() - 0.5) * 0.14;
      shelf.add(b);
      y += th + 0.003;
    }
    return 0.3;
  }
  {
    const frame = M.woodDark;
    const plinth = cast(box(2.7, 0.16, 0.5, frame));
    plinth.position.set(0, 0.08, 0.25);
    shelf.add(plinth);
    [-1.31, 1.31].forEach((x) => {
      const s = cast(box(0.08, 2.92, 0.5, frame));
      s.position.set(x, 1.6, 0.25);
      shelf.add(s);
    });
    const top = cast(box(2.7, 0.06, 0.5, frame));
    top.position.set(0, 3.09, 0.25);
    shelf.add(top);
    const backP = box(
      2.6,
      3.05,
      0.04,
      mat({ color: 0x4a3526, roughness: 0.9 }),
    );
    backP.position.set(0, 1.62, 0.02);
    shelf.add(backP);
    const floors = [0.16, 0.74, 1.32, 1.9, 2.48];
    floors.forEach((f) => {
      const b = cast(box(2.6, 0.05, 0.5, frame));
      b.position.set(0, f - 0.025, 0.25);
      shelf.add(b);
    });
    const plaque = (txt, y) => {
      const t = ctex(320, 64, (g) => {
        g.fillStyle = "#33291f";
        g.fillRect(0, 0, 320, 64);
        g.strokeStyle = "rgba(236,231,222,.2)";
        g.strokeRect(3, 3, 314, 58);
        g.fillStyle = "#e8dcc4";
        g.font = `600 26px ${F.sans}`;
        g.textAlign = "center";
        g.fillText(txt, 160, 42);
      });
      const p = box(
        0.62,
        0.12,
        0.03,
        mat({ color: 0x33291f, roughness: 0.85 }),
      );
      p.material = [
        mat({ color: 0x33291f }),
        mat({ color: 0x33291f }),
        mat({ color: 0x33291f }),
        mat({ color: 0x33291f }),
        mat({ map: t, roughness: 0.85 }),
        mat({ color: 0x33291f }),
      ];
      p.position.set(0, y, 0.515);
      shelf.add(p);
    };
    plaque("FRONTEND", 2.455);
    plaque("BACKEND", 1.295);
    plaque("DEVELOPER TOOLS", 0.135);

    let xe = fillRow(2.48, TECH.frontend.books.slice(0, 5));
    xe += leanBook(xe, 2.48) + 0.08;
    flatStack(xe, 2.48, 3);
    const s1 = plant(0.5, 6);
    s1.position.set(0.98, 2.48, 0.3);
    shelf.add(s1);
    xe = fillRow(1.9, TECH.frontend.books.slice(5));
    flatStack(xe + 0.06, 1.9, 2);
    const s2 = plant(0.42, 5);
    s2.position.set(0.55, 1.9, 0.31);
    shelf.add(s2);
    flatStack(0.92, 1.9, 2);

    xe = fillRow(1.32, TECH.backend.books.slice(0, 6));
    xe += leanBook(xe, 1.32) + 0.08;
    flatStack(xe, 1.32, 3);
    xe = fillRow(0.74, TECH.backend.books.slice(6));
    flatStack(xe + 0.06, 0.74, 2);
    flatStack(0.55, 0.74, 2);
    const s3 = plant(0.38, 5);
    s3.position.set(1.0, 0.74, 0.31);
    shelf.add(s3);

    xe = fillRow(0.16, TECH.tools.books);
    flatStack(xe + 0.05, 0.16, 2);
    const term = cast(box(0.1, 0.36, 0.02, M.dark));
    term.position.set(0.38, 0.16 + 0.18, 0.33);
    term.rotation.y = -0.15;
    shelf.add(term);
    const tt = ctex(128, 160, (g) => {
      g.fillStyle = "#101314";
      g.fillRect(0, 0, 128, 160);
      g.fillStyle = "#1a2026";
      g.fillRect(0, 0, 128, 18);
      ["#c0504d", "#c9a86a", "#69b47f"].forEach((c, i) => {
        g.fillStyle = c;
        g.beginPath();
        g.arc(12 + i * 14, 9, 3.5, 0, 7);
        g.fill();
      });
      g.fillStyle = "#7ec98f";
      g.font = `600 11px ${F.mono}`;
      ["$ git status", "on branch: main", "working tree clean", ""].forEach(
        (l, i) => g.fillText(l, 8, 38 + i * 22),
      );
      g.fillStyle = "#7ec98f";
      g.fillRect(8, 126, 10, 12);
    });
    const tp = new THREE.Mesh(
      new THREE.PlaneGeometry(0.09, 0.34),
      new THREE.MeshBasicMaterial({ map: tt }),
    );
    tp.position.set(0.38, 0.34, 0.345);
    tp.rotation.y = -0.15;
    shelf.add(tp);
    const srv = cast(box(0.18, 0.24, 0.2, M.dark));
    srv.position.set(0.85, 0.16 + 0.12, 0.28);
    shelf.add(srv);
    const sled = new THREE.Mesh(
      new THREE.CircleGeometry(0.02, 8),
      new THREE.MeshBasicMaterial({ color: 0x8fb6d9 }),
    );
    sled.position.set(0.85, 0.35, 0.382);
    shelf.add(sled);
  }

  /* ---- inverter air conditioner: sitting on top of the bookshelf ---- */
  {
    const ac = new THREE.Group();
    ac.position.set(-3.58, 2.5, -4.3);
    scene.add(ac);
    const white = mat({ color: 0xf1efe9, roughness: 0.42 });
    const shadeW = mat({ color: 0xdedbd3, roughness: 0.5 });
    const slot = mat({ color: 0x1c1e22, roughness: 0.5, metalness: 0.2 });
    const body = cast(box(0.9, 0.27, 0.2, white));
    body.position.set(0, 0.145, 0);
    ac.add(body);
    const front = cast(box(0.9, 0.2, 0.022, white));
    front.position.set(0, 0.17, 0.105);
    ac.add(front);
    const lowerLip = cast(box(0.9, 0.05, 0.04, shadeW));
    lowerLip.position.set(0, 0.045, 0.095);
    ac.add(lowerLip);
    const outlet = box(0.82, 0.022, 0.03, slot);
    outlet.position.set(0, 0.042, 0.118);
    ac.add(outlet);
    const flap = cast(box(0.8, 0.014, 0.07, white));
    flap.position.set(0, 0.036, 0.128);
    flap.rotation.x = 0.5;
    ac.add(flap);
    for (let i = 0; i < 6; i++) {
      const gl = box(0.8, 0.003, 0.012, slot);
      gl.position.set(0, 0.2805, -0.045 + i * 0.025);
      ac.add(gl);
    }
    const badgeTex = ctex(256, 64, (g, W, H) => {
      g.clearRect(0, 0, W, H);
      g.fillStyle = "#6b737b";
      g.font = `700 30px ${F.sans}`;
      g.textAlign = "left";
      g.textBaseline = "middle";
      g.fillText("INVERTER", 8, H / 2 + 1);
      g.fillStyle = "#69b47f";
      g.beginPath();
      g.arc(W - 24, H / 2, 9, 0, 7);
      g.fill();
      g.fillStyle = "#f1efe9";
      g.font = `700 14px ${F.sans}`;
      g.textAlign = "center";
      g.fillText("i", W - 24, H / 2 + 1);
    });
    const badge = new THREE.Mesh(
      new THREE.PlaneGeometry(0.15, 0.0375),
      new THREE.MeshBasicMaterial({
        map: badgeTex,
        transparent: true,
        toneMapped: false,
      }),
    );
    badge.position.set(-0.3, 0.2, 0.1171);
    ac.add(badge);
    const disp = box(0.07, 0.028, 0.004, slot);
    disp.position.set(0.33, 0.2, 0.1171);
    ac.add(disp);
    const led = new THREE.Mesh(
      new THREE.CircleGeometry(0.0055, 10),
      new THREE.MeshBasicMaterial({ color: 0x69b47f }),
    );
    led.position.set(0.31, 0.2, 0.1195);
    ac.add(led);
    const led2 = new THREE.Mesh(
      new THREE.CircleGeometry(0.0055, 10),
      new THREE.MeshBasicMaterial({ color: 0x8fb6d9 }),
    );
    led2.position.set(0.345, 0.2, 0.1195);
    ac.add(led2);
  }

  /* ==================================================================
   9. Project table — compact, directly beside the bookshelf
================================================================== */
  const table = new THREE.Group();
  table.position.set(-1.35, 0, -3.85);
  scene.add(table);
  function nameplate(p) {
    const t = ctex(320, 96, (g) => {
      g.fillStyle = "#1d2127";
      g.fillRect(0, 0, 320, 96);
      g.strokeStyle = "#39424d";
      g.strokeRect(2, 2, 316, 92);
      g.fillStyle = "#ece7de";
      g.font = `600 24px ${F.sans}`;
      g.textAlign = "center";
      g.fillText(p.title, 160, 42);
      g.fillStyle = "#8fb6d9";
      g.font = `600 10px ${F.mono}`;
      g.fillText(p.subtitle.toUpperCase(), 160, 68);
    });
    const pl = cast(box(0.42, 0.12, 0.02, M.dark));
    pl.material = [
      M.dark,
      M.dark,
      M.dark,
      M.dark,
      mat({ map: t, roughness: 0.85 }),
      M.dark,
    ];
    pl.position.set(0, 0.05, 0.15);
    pl.rotation.x = -0.18;
    return pl;
  }
  function addHitbox(g, proj, w = 0.6, h = 0.95) {
    const hb = new THREE.Mesh(
      new THREE.BoxGeometry(w, h, 0.55),
      new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0,
        depthWrite: false,
      }),
    );
    hb.position.y = h / 2 - 0.05;
    hb.userData.proj = proj;
    hb.userData.g = g;
    g.add(hb);
    interactives.push(hb);
  }
  {
    const top = cast(box(2.0, 0.08, 0.8, deskTopMat));
    top.position.y = 0.82;
    table.add(top);
    [
      [-0.9, -0.32],
      [0.9, -0.32],
      [-0.9, 0.32],
      [0.9, 0.32],
    ].forEach(([x, z]) => {
      const l = cast(box(0.06, 0.78, 0.06, M.deskFrame));
      l.position.set(x, 0.39, z);
      table.add(l);
    });
    // one compact stool on the open left side
    const st = new THREE.Group();
    st.position.set(-2.05, 0, -2.85);
    table.add(st);
    const seat = cast(cyl(0.2, 0.2, 0.05, M.woodDark));
    seat.position.y = 0.62;
    st.add(seat);
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2;
      const leg = cast(cyl(0.025, 0.03, 0.62, M.deskFrame));
      leg.position.set(Math.cos(a) * 0.14, 0.31, Math.sin(a) * 0.14);
      leg.rotation.z = Math.cos(a) * 0.12;
      leg.rotation.x = -Math.sin(a) * 0.12;
      st.add(leg);
    }
  }
  /* --- three physical project displays along the back edge (scaled 0.82) --- */
  {
    const g = new THREE.Group();
    g.position.set(-0.62, 0.86, -0.18);
    g.scale.setScalar(0.82);
    table.add(g);
    const towerTex = ctex(256, 640, (gc) => {
      gc.fillStyle = "#23262b";
      gc.fillRect(0, 0, 256, 640);
      gc.fillStyle = "#1a1d21";
      gc.fillRect(0, 0, 256, 42);
      gc.fillStyle = "#8fb6d9";
      gc.font = `600 16px ${F.mono}`;
      gc.fillText("SMD-360", 14, 28);
      gc.fillStyle = "#69b47f";
      gc.beginPath();
      gc.arc(236, 21, 7, 0, 7);
      gc.fill();
      const reels = ["#7a5c46", "#56808f", "#76885a", "#8a6d3c", "#6e4f66"];
      for (let r = 0; r < 15; r++)
        for (let c = 0; c < 4; c++) {
          const x = 12 + c * 60,
            y = 56 + r * 38;
          gc.fillStyle = "#2e3238";
          gc.beginPath();
          gc.roundRect(x, y, 52, 30, 4);
          gc.fill();
          gc.strokeStyle = "#3a3f47";
          gc.strokeRect(x, y, 52, 30);
          if (rnd() < 0.45) {
            gc.fillStyle = reels[(r + c) % 5];
            gc.beginPath();
            gc.arc(x + 26, y + 15, 10, 0, 7);
            gc.fill();
            gc.fillStyle = "rgba(0,0,0,.3)";
            gc.beginPath();
            gc.arc(x + 26, y + 15, 4, 0, 7);
            gc.fill();
          }
        }
    });
    const tower = cast(box(0.3, 0.66, 0.26, M.dark));
    tower.position.y = 0.41;
    g.add(tower);
    tower.material = [
      mat({ color: 0x23262b }),
      mat({ color: 0x23262b }),
      mat({ color: 0x23262b }),
      mat({ color: 0x23262b }),
      mat({ map: towerTex, roughness: 0.6 }),
      mat({ color: 0x23262b }),
    ];
    const cap = cast(box(0.34, 0.05, 0.3, M.steel));
    cap.position.y = 0.76;
    g.add(cap);
    const led = new THREE.Mesh(
      new THREE.SphereGeometry(0.015),
      new THREE.MeshBasicMaterial({ color: 0x69b47f }),
    );
    led.position.set(0.12, 0.14, 0.14);
    g.add(led);
    g.add(nameplate(PROJECTS[0]));
    addHitbox(g, PROJECTS[0]);
    anims.displays.push(g);
  }
  {
    const g = new THREE.Group();
    g.position.set(0, 0.86, -0.2);
    g.scale.setScalar(0.82);
    table.add(g);
    const m1m = cast(
      box(0.26, 0.2, 0.2, mat({ color: 0x3a3f45, roughness: 0.6 })),
    );
    m1m.position.set(-0.28, 0.1, 0.05);
    m1m.rotation.y = 0.2;
    g.add(m1m);
    const m2m = cast(
      box(0.2, 0.28, 0.18, mat({ color: 0x2f3a42, roughness: 0.6 })),
    );
    m2m.position.set(-0.05, 0.14, -0.06);
    g.add(m2m);
    [m1m, m2m].forEach((m) => {
      const d = new THREE.Mesh(
        new THREE.CircleGeometry(0.014, 8),
        new THREE.MeshBasicMaterial({ color: 0xc9a86a }),
      );
      d.position.set(0.06, 0.12, 0.101);
      m.add(d);
    });
    const pi = cast(
      box(0.13, 0.02, 0.09, mat({ color: 0x2e5b3a, roughness: 0.5 })),
    );
    pi.position.set(0.14, 0.05, 0.12);
    g.add(pi);
    const dashTex = ctex(256, 160, (gc) => {
      gc.fillStyle = "#14171c";
      gc.fillRect(0, 0, 256, 160);
      gc.fillStyle = "#8fb6d9";
      gc.font = `600 12px ${F.mono}`;
      gc.fillText("P1SA WINDING", 12, 22);
      gc.fillStyle = "#69b47f";
      gc.beginPath();
      gc.arc(230, 18, 5, 0, 7);
      gc.fill();
      gc.fillStyle = "#9fb3c2";
      gc.font = `600 8px ${F.mono}`;
      gc.fillText("LIVE", 240, 22);
      for (let i = 0; i < 9; i++) {
        gc.fillStyle = "#31404d";
        gc.fillRect(
          14 + i * 14,
          120 - ((i * 37) % 60),
          8,
          ((i * 37) % 60) + 18,
        );
      }
      gc.strokeStyle = "#8fb6d9";
      gc.lineWidth = 2;
      gc.beginPath();
      let y = 70;
      gc.moveTo(12, 90);
      for (let x = 12; x <= 244; x += 29) {
        y = clamp(y + (rnd() * 44 - 22), 46, 124);
        gc.lineTo(x, y);
      }
      gc.stroke();
      gc.fillStyle = "rgba(143,182,217,.12)";
      gc.lineTo(244, 140);
      gc.lineTo(12, 140);
      gc.closePath();
      gc.fill();
    });
    const pole = cyl(0.015, 0.015, 0.32, M.steel);
    pole.position.set(0.05, 0.16, 0.02);
    g.add(pole);
    const dsh = cast(box(0.34, 0.22, 0.015, M.dark));
    dsh.position.set(0.05, 0.36, 0.02);
    dsh.rotation.x = -0.15;
    g.add(dsh);
    const dsp = new THREE.Mesh(
      new THREE.PlaneGeometry(0.31, 0.195),
      new THREE.MeshBasicMaterial({ map: dashTex }),
    );
    dsp.position.set(0.05, 0.36, 0.03);
    dsp.rotation.x = -0.15;
    g.add(dsp);
    const np = nameplate(PROJECTS[1]);
    np.position.x = 0.2;
    g.add(np);
    addHitbox(g, PROJECTS[1], 0.7, 0.62);
    anims.displays.push(g);
  }
  {
    const g = new THREE.Group();
    g.position.set(0.62, 0.86, -0.22);
    g.scale.setScalar(0.82);
    table.add(g);
    const dk = cast(
      box(0.4, 0.03, 0.24, mat({ color: 0x7a5a3e, roughness: 0.8 })),
    );
    dk.position.set(0, 0.16, 0.05);
    g.add(dk);
    [
      [-0.17, 0.14],
      [0.17, 0.14],
      [-0.17, -0.04],
      [0.17, -0.04],
    ].forEach(([x, z]) => {
      const l = box(0.02, 0.16, 0.02, M.deskFrame);
      l.position.set(x, 0.08, z);
      g.add(l);
    });
    const yuTex = ctex(256, 176, (gc) => {
      gc.fillStyle = "#14171c";
      gc.fillRect(0, 0, 256, 176);
      gc.fillStyle = "#ece7de";
      gc.font = `600 15px ${F.sans}`;
      gc.fillText("WORK INSTRUCTION", 12, 26);
      gc.fillStyle = "#69b47f";
      gc.beginPath();
      gc.arc(232, 20, 5, 0, 7);
      gc.fill();
      gc.fillStyle = "#8fa0b0";
      gc.font = `600 8px ${F.mono}`;
      gc.fillText("STATION — ONLINE", 164, 24);
      gc.strokeStyle = "#31404d";
      gc.strokeRect(12, 40, 110, 100);
      gc.strokeStyle = "#3d4650";
      gc.beginPath();
      gc.moveTo(20, 125);
      gc.lineTo(50, 95);
      gc.lineTo(70, 112);
      gc.lineTo(100, 78);
      gc.stroke();
      for (let i = 0; i < 4; i++) {
        gc.fillStyle = "#232a33";
        gc.beginPath();
        gc.roundRect(138, 44 + i * 24, 106, 16, 3);
        gc.fill();
        gc.fillStyle = "#9fb3c2";
        gc.font = `600 9px ${F.mono}`;
        gc.fillText("STEP " + (i + 1), 144, 55 + i * 24);
      }
      gc.fillStyle = "#69b47f";
      gc.fillRect(12, 158, 232, 4);
    });
    const scr = cast(box(0.3, 0.2, 0.012, M.dark));
    scr.position.set(0, 0.36, 0.02);
    scr.rotation.x = -0.12;
    g.add(scr);
    const sp = new THREE.Mesh(
      new THREE.PlaneGeometry(0.27, 0.185),
      new THREE.MeshBasicMaterial({ map: yuTex }),
    );
    sp.position.set(0, 0.36, 0.028);
    sp.rotation.x = -0.12;
    g.add(sp);
    const st = cyl(0.02, 0.02, 0.14, M.steel);
    st.position.set(0, 0.25, 0.02);
    g.add(st);
    g.add(nameplate(PROJECTS[2]));
    addHitbox(g, PROJECTS[2]);
    anims.displays.push(g);
  }

  /* ==================================================================
   10. Certifications — 3 top / 2 bottom centered, above the projects
================================================================== */
  {
    const wallPlaque = ctex(420, 72, (g) => {
      g.fillStyle = "#33291f";
      g.fillRect(0, 0, 420, 72);
      g.strokeStyle = "rgba(236,231,222,.2)";
      g.strokeRect(3, 3, 414, 66);
      g.fillStyle = "#e8dcc4";
      g.font = `600 21px ${F.sans}`;
      g.textAlign = "center";
      g.fillText("CERTIFICATIONS", 210, 46);
    });
    const wp = box(0.62, 0.12, 0.03, mat({ color: 0x33291f }));
    wp.material = [
      mat({ color: 0x33291f }),
      mat({ color: 0x33291f }),
      mat({ color: 0x33291f }),
      mat({ color: 0x33291f }),
      mat({ map: wallPlaque }),
      mat({ color: 0x33291f }),
    ];
    wp.position.set(-1.35, 2.93, -4.385);
    scene.add(wp);
    const pos = [
      [-2.15, 2.62],
      [-1.35, 2.62],
      [-0.55, 2.62],
      [-1.75, 2.18],
      [-0.95, 2.18],
    ];
    CERTS.forEach((c, i) => {
      const [x, y] = pos[i];
      const certTex = ctex(560, 430, (g, W, H) => {
        g.fillStyle = "#f3eee1";
        g.fillRect(0, 0, W, H);
        const sh = g.createLinearGradient(0, 0, W, H);
        sh.addColorStop(0, "rgba(255,255,255,.16)");
        sh.addColorStop(0.5, "rgba(255,255,255,0)");
        g.fillStyle = sh;
        g.fillRect(0, 0, W, H);
        g.strokeStyle = "#a89272";
        g.lineWidth = 3;
        g.strokeRect(22, 22, W - 44, H - 44);
        g.strokeStyle = "#c2ab84";
        g.lineWidth = 1;
        g.strokeRect(36, 36, W - 72, H - 72);
        g.fillStyle = "#8a7a5f";
        g.font = `600 17px ${F.serif}`;
        g.textAlign = "center";
        g.fillText("C E R T I F I C A T I O N", W / 2, 78);
        g.fillStyle = "#b39358";
        g.fillRect(W / 2 - 45, 92, 90, 2);
        g.fillStyle = "#2c2a26";
        g.font = `600 38px ${F.serif}`;
        let ty = 160;
        wrap(g, c.t, W - 150).forEach((l) => g.fillText(l, W / 2, (ty += 46)));
        g.fillStyle = "#b39358";
        g.fillRect(W / 2 - 55, ty + 6, 110, 1);
        g.fillStyle = "#6b6250";
        g.font = `600 16px ${F.sans}`;
        g.fillText(c.i.toUpperCase(), W / 2, ty + 40);
        g.fillStyle = "#a09580";
        g.font = `600 10px ${F.mono}`;
        g.fillText("AWARDED TO", W / 2, ty + 80);
        g.fillStyle = "#4a453c";
        g.font = `600 15px ${F.sans}`;
        g.fillText("NATHANIEL LUCERO", W / 2, ty + 104);
        g.strokeStyle = "#b39358";
        g.lineWidth = 2;
        g.beginPath();
        g.arc(W - 96, H - 88, 32, 0, 7);
        g.stroke();
        g.beginPath();
        g.arc(W - 96, H - 88, 24, 0, 7);
        g.stroke();
        g.fillStyle = "#8f5a4a";
        g.save();
        g.translate(W - 96, H - 52);
        g.rotate(0.35);
        g.fillRect(-7, 0, 14, 34);
        g.restore();
        g.save();
        g.translate(W - 96, H - 52);
        g.rotate(-0.35);
        g.fillRect(-7, 0, 14, 34);
        g.restore();
      });
      const fr = new THREE.Group();
      fr.position.set(x, y, -4.38);
      fr.rotation.z = (i % 2 ? -1 : 1) * 0.01;
      const f = cast(
        box(0.56, 0.42, 0.04, mat({ color: 0x3d2f24, roughness: 0.6 })),
      );
      fr.add(f);
      const pap = new THREE.Mesh(
        new THREE.PlaneGeometry(0.49, 0.34),
        mat({ map: certTex, roughness: 0.35 }),
      );
      pap.position.z = 0.024;
      fr.add(pap);
      const hit = new THREE.Mesh(
        new THREE.BoxGeometry(0.58, 0.44, 0.055),
        new THREE.MeshBasicMaterial({
          transparent: true,
          opacity: 0,
          depthWrite: false,
        }),
      );
      hit.userData.cert = c;
      fr.add(hit);
      interactives.push(hit);
      scene.add(fr);
    });
  }

  /* ---- right-wall props: working clock + framed PCB art + small shelf ---- */
  let clockCtx = null,
    clockTexObj = null;
  {
    const clockCv = document.createElement("canvas");
    clockCv.width = clockCv.height = 256;
    clockCtx = clockCv.getContext("2d");
    clockTexObj = new THREE.CanvasTexture(clockCv);
    clockTexObj.colorSpace = THREE.SRGBColorSpace;
    const ck = new THREE.Group();
    ck.position.set(4.57, 2.3, -1.7);
    ck.rotation.y = -Math.PI / 2;
    scene.add(ck);
    const ring = cast(cyl(0.26, 0.26, 0.05, M.dark));
    ring.rotation.x = Math.PI / 2;
    ck.add(ring);
    const face = new THREE.Mesh(
      new THREE.CircleGeometry(0.23, 24),
      new THREE.MeshBasicMaterial({ map: clockTexObj }),
    );
    face.position.z = 0.028;
    ck.add(face);
    const drawClock = () => {
      const g = clockCtx;
      g.clearRect(0, 0, 256, 256);
      g.fillStyle = "#ece7dd";
      g.beginPath();
      g.arc(128, 128, 124, 0, 7);
      g.fill();
      g.strokeStyle = "#22252a";
      g.lineWidth = 9;
      g.beginPath();
      g.arc(128, 128, 120, 0, 7);
      g.stroke();
      for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI * 2;
        g.strokeStyle = "#4a453c";
        g.lineWidth = i % 3 ? 2 : 4;
        g.beginPath();
        g.moveTo(128 + Math.sin(a) * 104, 128 - Math.cos(a) * 104);
        g.lineTo(
          128 + Math.sin(a) * (i % 3 ? 112 : 116),
          128 - Math.cos(a) * (i % 3 ? 112 : 116),
        );
        g.stroke();
      }
      const d = new Date();
      const hand = (ang, len, wd, col) => {
        const a = ang * Math.PI * 2;
        g.strokeStyle = col;
        g.lineWidth = wd;
        g.lineCap = "round";
        g.beginPath();
        g.moveTo(128, 128);
        g.lineTo(128 + Math.sin(a) * len, 128 - Math.cos(a) * len);
        g.stroke();
      };
      hand(((d.getHours() % 12) + d.getMinutes() / 60) / 12, 55, 8, "#22252a");
      hand(d.getMinutes() / 60, 86, 5, "#22252a");
      hand(d.getSeconds() / 60, 94, 2, "#c0504d");
      g.fillStyle = "#22252a";
      g.beginPath();
      g.arc(128, 128, 6, 0, 7);
      g.fill();
      clockTexObj.needsUpdate = true;
    };
    drawClock();
    anims.drawClock = drawClock;

    const pcbTex = ctex(512, 640, (g, W, H) => {
      g.fillStyle = "#1c3a2c";
      g.fillRect(0, 0, W, H);
      g.strokeStyle = "rgba(255,255,255,.04)";
      for (let x = 0; x < W; x += 32) {
        g.beginPath();
        g.moveTo(x, 0);
        g.lineTo(x, H);
        g.stroke();
      }
      for (let y = 0; y < H; y += 32) {
        g.beginPath();
        g.moveTo(0, y);
        g.lineTo(W, y);
        g.stroke();
      }
      g.strokeStyle = "#c9a34a";
      g.lineWidth = 2;
      for (let i = 0; i < 15; i++) {
        let x = 0,
          y = 40 + rnd() * (H - 80);
        g.beginPath();
        g.moveTo(x, y);
        while (x < W - 20) {
          x += 30 + rnd() * 50;
          y = clamp(y + (rnd() * 80 - 40), 20, H - 20);
          g.lineTo(x, y);
        }
        g.stroke();
        g.fillStyle = "#c9a34a";
        g.beginPath();
        g.arc(x, y, 5, 0, 7);
        g.fill();
      }
      for (let i = 0; i < 26; i++) {
        g.fillStyle = "#c9a34a";
        g.beginPath();
        g.arc(rnd() * W, rnd() * H, 3, 0, 7);
        g.fill();
      }
      g.fillStyle = "#10241b";
      g.fillRect(186, 250, 140, 90);
      g.strokeStyle = "#c9a34a";
      for (let p = 0; p < 8; p++) {
        g.beginPath();
        g.moveTo(186, 258 + p * 10);
        g.lineTo(170, 258 + p * 10);
        g.moveTo(326, 258 + p * 10);
        g.lineTo(342, 258 + p * 10);
        g.stroke();
      }
      g.fillStyle = "rgba(236,231,222,.85)";
      g.font = `600 16px ${F.mono}`;
      g.fillText("NL-DEV", 196, 288);
      g.font = `400 11px ${F.mono}`;
      g.fillText("REV 3.3", 196, 308);
      [
        [24, 24],
        [488, 24],
        [24, 616],
        [488, 616],
      ].forEach(([x, y]) => {
        g.strokeStyle = "#c9a34a";
        g.beginPath();
        g.arc(x, y, 10, 0, 7);
        g.stroke();
      });
    });
    const art = new THREE.Group();
    art.position.set(4.57, 1.72, 0.6);
    art.rotation.y = -Math.PI / 2;
    scene.add(art);
    const af = cast(
      box(0.66, 0.82, 0.04, mat({ color: 0x2c2320, roughness: 0.6 })),
    );
    art.add(af);
    const ap = new THREE.Mesh(
      new THREE.PlaneGeometry(0.58, 0.74),
      mat({ map: pcbTex, roughness: 0.4 }),
    );
    ap.position.z = 0.022;
    art.add(ap);
    const sh = cast(box(0.06, 0.05, 1.2, M.woodDark));
    sh.position.set(4.53, 1.15, 2.1);
    scene.add(sh);
    [
      [1.78, 0x56808f],
      [2.02, 0x7a5568],
      [2.26, 0x5a4632],
    ].forEach(([z, c]) => {
      const b = cast(box(0.16, 0.34, 0.09, mat({ color: c, roughness: 0.85 })));
      b.position.set(4.47, 1.34, z);
      b.rotation.y = Math.PI / 2;
      scene.add(b);
    });
  }

  renderer.shadowMap.autoUpdate = false;
  renderer.shadowMap.needsUpdate = true;

  /* ==================================================================
   11. Cinematic scroll-driven camera timeline — remapped for the
   compact room (same sections, same times, no teleports, all
   keyframes collision-audited against the new furniture)
================================================================== */
  const KF = [
    // Intro — south-east of the character, keeping the view diagonal while clearing the title.
    [0.0, [2.0, 1.82, 1.5], [-1.8, 1.15, -2.65], 46],
    [0.055, [1.6, 1.7, 1.9], [-1.8, 1.18, -2.7], 44],

    // About — close and readable on the left monitor.
    [0.12, [-1.73, 1.18, -0.55], [-1.73, 1.12, -1.8], 28],
    [0.18, [-1.73, 1.16, -0.48], [-1.73, 1.12, -1.8], 25],

    // Experience — whiteboard.
    [0.25, [0.55, 1.82, -2.42], [0.55, 1.8, -4.34], 40],
    [0.315, [0.55, 1.78, -2.58], [0.55, 1.8, -4.34], 38],

    // Tech Stack — directly in front of the bookshelf, centered on it.
    [0.41, [-3.58, 1.58, -0.65], [-3.58, 1.1, -4.36], 42],
    [0.47, [-3.58, 1.55, -0.5], [-3.58, 1.1, -4.36], 39],

    // Projects — camera moves behind the desk monitors, then looks through toward the table.
    [0.535, [-0.85, 2.05, -1.35], [-1.35, 1.25, -4.03], 30],
    [0.605, [-0.7, 2.1, -1.2], [-1.35, 1.28, -4.03], 27],

    // Certifications — close, centered framing with the certificates clear of the slats.
    [0.665, [-1.35, 2.35, -1.55], [-1.35, 2.42, -4.3], 30],
    [0.73, [-1.35, 2.4, -1.45], [-1.35, 2.42, -4.3], 28],

    // Contact — close and readable on the right monitor.
    [0.805, [-0.97, 1.2, -0.78], [-0.97, 1.12, -1.97], 31],
    [0.875, [-0.97, 1.18, -0.7], [-0.97, 1.12, -1.97], 28],

    // Exit/finale — pull back to reveal the whole workspace.
    [0.93, [1.7, 1.78, 0.35], [-0.35, 1.15, -2.9], 46],
    [1.0, [3.1, 2.2, 2.1], [-0.95, 1.1, -3.1], 54],
  ];
  const MOBILE_KF = [
    // Wider, more centered views keep the room and its focal points composed in portrait.
    [0.0, [2.3, 2.05, 2.35], [-1.25, 1.2, -2.35], 48],
    [0.055, [1.95, 1.95, 2.7], [-1.25, 1.2, -2.4], 46],

    [0.12, [-1.5, 1.4, 0.05], [-1.72, 1.1, -1.78], 34],
    [0.18, [-1.48, 1.38, 0.12], [-1.72, 1.1, -1.78], 31],

    [0.25, [0.95, 2.0, -1.75], [0.6, 1.82, -4.34], 43],
    [0.315, [0.95, 1.98, -1.85], [0.6, 1.82, -4.34], 41],

    [0.41, [-2.9, 1.7, -0.25], [-3.48, 1.22, -4.34], 44],
    [0.47, [-2.9, 1.68, -0.15], [-3.48, 1.22, -4.34], 42],

    [0.535, [-0.35, 2.45, -0.3], [-1.25, 1.35, -3.9], 36],
    [0.605, [-0.25, 2.48, -0.2], [-1.25, 1.35, -3.9], 34],

    [0.665, [-0.35, 2.75, -0.1], [-1.28, 2.32, -4.27], 36],
    [0.73, [-0.3, 2.78, -0.05], [-1.28, 2.32, -4.27], 34],

    [0.805, [-0.32, 1.55, 0.42], [-0.96, 1.12, -1.96], 36],
    [0.875, [-0.3, 1.53, 0.5], [-0.96, 1.12, -1.96], 33],

    [0.93, [2.1, 2.05, 0.85], [-0.5, 1.15, -2.75], 48],
    [1.0, [3.45, 2.45, 2.55], [-0.75, 1.1, -3.0], 56],
  ];
  let activeKF = isMobile ? MOBILE_KF : KF;
  let posCurve = new THREE.CatmullRomCurve3(
    activeKF.map((k) => new THREE.Vector3(...k[1])),
    false,
    "centripetal",
  );
  let lookCurve = new THREE.CatmullRomCurve3(
    activeKF.map((k) => new THREE.Vector3(...k[2])),
    false,
    "centripetal",
  );
  const P1 = new THREE.Vector3(),
    P2 = new THREE.Vector3(),
    V1 = new THREE.Vector3(),
    V2 = new THREE.Vector3();
  let usingMobileCamera = isMobile;
  function updateCameraTimeline() {
    const useMobile =
      matchMedia("(max-width:820px)").matches ||
      /Mobi|Android/i.test(navigator.userAgent);
    if (useMobile === usingMobileCamera) return;
    usingMobileCamera = useMobile;
    activeKF = useMobile ? MOBILE_KF : KF;
    posCurve = new THREE.CatmullRomCurve3(
      activeKF.map((k) => new THREE.Vector3(...k[1])),
      false,
      "centripetal",
    );
    lookCurve = new THREE.CatmullRomCurve3(
      activeKF.map((k) => new THREE.Vector3(...k[2])),
      false,
      "centripetal",
    );
  }
  function evalTimeline(t) {
    let i = 0;
    while (i < activeKF.length - 2 && t > activeKF[i + 1][0]) i++;
    const a = activeKF[i],
      b = activeKF[i + 1],
      l = clamp((t - a[0]) / (b[0] - a[0]), 0, 1);
    const u = (i + l) / (activeKF.length - 1);
    posCurve.getPoint(u, P1);
    lookCurve.getPoint(u, P2);
    return { fov: a[3] + (b[3] - a[3]) * l };
  }

  /* ==================================================================
   12. HUD / overlays / interaction
================================================================== */
  const CAPS = [
    {
      id: "about",
      a: 0.095,
      b: 0.185,
      num: "01",
      name: "ABOUT",
      hint: "The left monitor — who I am and how I work",
    },
    {
      id: "experience",
      a: 0.215,
      b: 0.335,
      num: "02",
      name: "EXPERIENCE",
      hint: "The whiteboard — my timeline so far",
    },
    {
      id: "techstack",
      a: 0.375,
      b: 0.49,
      num: "03",
      name: "TECH STACK",
      hint: "The bookshelf — hover a book to identify it",
    },
    {
      id: "projects",
      a: 0.51,
      b: 0.625,
      num: "04",
      name: "PROJECTS",
      hint: "The table behind the desk — click a display to open the case study",
    },
    {
      id: "certs",
      a: 0.645,
      b: 0.755,
      num: "05",
      name: "CERTIFICATIONS",
      hint: "The certificates above the project table",
    },
    {
      id: "touch",
      a: 0.78,
      b: 0.895,
      num: "06",
      name: "GET IN TOUCH",
      hint: "The right monitor — click the screen to send an email",
    },
  ];
  const RAIL = [
    ["Intro", 0],
    ["About", 0.12],
    ["Experience", 0.25],
    ["Tech Stack", 0.41],
    ["Projects", 0.53],
    ["Certifications", 0.68],
    ["Contact", 0.83],
    ["Overview", 1],
  ];

  const state = {
    sm: 0,
    max: 1,
    modalOpen: false,
    flat: false,
    capId: "",
    savedY: 0,
    hover: null,
    hoverG: null,
  };
  history.scrollRestoration = "manual";
  scrollTo(0, 0);
  function measure() {
    state.max = Math.max(
      1,
      document.documentElement.scrollHeight - innerHeight,
    );
  }
  measure();

  const rail = $("#rail");
  RAIL.forEach(([label, t]) => {
    const b = document.createElement("button");
    b.className = "dot";
    b.innerHTML = `<i>${label}</i>`;
    b.onclick = () => goTo(t);
    rail.appendChild(b);
  });
  function goTo(t) {
    window.scrollTo({ top: t * state.max, behavior: "smooth" });
  }
  $("#btnExplore").onclick = () => goTo(0.12);
  $("#btnAgain").onclick = () => goTo(0);
  $("#wordmark").onclick = () => goTo(0);
  $("#btnEmail").onclick = () => (location.href = "mailto:" + EMAIL);
  $("#btnSend").onclick = () => (location.href = "mailto:" + EMAIL);
  $("#btnCV").onclick = downloadCV;
  $("#btnCV2").onclick = downloadCV;

  const tooltip = $("#tooltip"),
    tipTag = tooltip.querySelector(".tag"),
    tipT = tooltip.querySelector("b"),
    tipD = tooltip.querySelector("span");
  let tipXY = [0, 0];
  function showTip(tag, t, d) {
    tipTag.textContent = tag;
    tipT.textContent = t;
    tipD.textContent = d;
    tooltip.style.left = tipXY[0] + "px";
    tooltip.style.top = tipXY[1] + "px";
    tooltip.classList.add("on");
  }
  function hideTip() {
    tooltip.classList.remove("on");
  }

  const ndc = new THREE.Vector2(),
    ray = new THREE.Raycaster();
  let mX = 0,
    mY = 0,
    pX = 0,
    pY = 0,
    downXY = null,
    pointerDirty = true;
  addEventListener(
    "pointermove",
    (e) => {
      tipXY = [e.clientX, e.clientY];
      ndc.set(
        (e.clientX / innerWidth) * 2 - 1,
        -((e.clientY / innerHeight) * 2 - 1),
      );
      mX = ndc.x;
      mY = ndc.y;
      pointerDirty = true;
      if (tooltip.classList.contains("on")) {
        tooltip.style.left = tipXY[0] + "px";
        tooltip.style.top = tipXY[1] + "px";
      }
    },
    { passive: true },
  );
  addEventListener("pointerdown", (e) => (downXY = [e.clientX, e.clientY]));
  const CONTACT_LINKS = [
    {
      x: 372,
      y: 528,
      w: 160,
      h: 46,
      name: "GitHub",
      url: "https://github.com/nathan-dotnet",
    },
    {
      x: 552,
      y: 528,
      w: 160,
      h: 46,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nathaniel-lucero052903/",
    },
    {
      x: 732,
      y: 528,
      w: 160,
      h: 46,
      name: "Instagram",
      url: "https://www.instagram.com/nathan_dotnet",
    },
    {
      x: 652,
      y: 428,
      w: 232,
      h: 54,
      name: "Download CV",
      act: () => downloadCV(),
    },
  ];
  function contactHit(h) {
    const px = h.uv.x * 1280,
      py = (1 - h.uv.y) * 800;
    return CONTACT_LINKS.find(
      (l) => px >= l.x && px <= l.x + l.w && py >= l.y && py <= l.y + l.h,
    );
  }
  addEventListener("pointerup", (e) => {
    if (!downXY || state.modalOpen || state.flat) return;
    if (Math.hypot(e.clientX - downXY[0], e.clientY - downXY[1]) > 7) return;
    ndc.set(
      (e.clientX / innerWidth) * 2 - 1,
      -((e.clientY / innerHeight) * 2 - 1),
    );
    ray.setFromCamera(ndc, camera);
    const hits = ray.intersectObjects(interactives, false);
    if (!hits.length) return;
    const h = hits[0],
      u = h.object.userData;
    if (u.proj) openProject(u.proj.id);
    else if (u.mail) {
      const l = contactHit(h);
      if (!l) location.href = "mailto:" + EMAIL;
      else if (l.act) l.act();
      else window.open(l.url, "_blank", "noopener");
    } else if (u.cert && u.cert.url)
      window.open(u.cert.url, "_blank", "noopener");
  });
  addEventListener("keydown", (e) => {
    if (e.key === "Escape" && state.modalOpen) closeModal();
  });

  function doRaycast() {
    ray.setFromCamera(ndc, camera);
    const hits = ray.intersectObjects(interactives, false);
    const h = hits[0],
      u = h ? h.object.userData : null;
    let book = null,
      grp = null;
    if (u) {
      if (u.book) {
        showTip(
          "Tech Stack · " + (u.book.big ? "Core" : "Tool"),
          u.book.n,
          u.book.d,
        );
        book = h.object;
      } else if (u.proj) {
        showTip("Project", u.proj.title, u.proj.subtitle);
        grp = u.g;
      } else if (u.cert) {
        showTip("Certification", u.cert.t, u.cert.i);
      } else if (u.mail) {
        const l = contactHit(h);
        if (l)
          showTip(
            "Contact",
            l.name,
            l.act ? "Download my CV" : "Opens in a new tab",
          );
        else
          showTip("Contact", "Send an email", "nathaniellucero.dev@gmail.com");
      } else hideTip();
    } else hideTip();
    document.body.style.cursor =
      u && (u.book || u.proj || u.cert || u.mail) ? "pointer" : "";
    state.hover = book;
    state.hoverG = grp;
  }

  /* ---- HUD updates ---- */
  const landing = $("#landing"),
    caption = $("#caption"),
    capNum = caption.querySelector(".num"),
    capName = caption.querySelector(".name"),
    capHint = caption.querySelector(".hint"),
    contactbar = $("#contactbar"),
    finale = $("#finale"),
    hint = $("#hint");
  const dots = [...rail.children];
  function updateHUD(sm) {
    landing.classList.toggle("gone", sm > 0.045 || state.modalOpen);
    hint.classList.toggle("on", sm < 0.04 && !state.modalOpen);
    finale.classList.toggle("on", sm > 0.92 && !state.modalOpen);
    contactbar.classList.toggle(
      "on",
      sm > 0.75 && sm < 0.895 && !state.modalOpen,
    );
    const c = CAPS.find((c) => sm >= c.a && sm <= c.b);
    if (c) {
      if (c.id !== state.capId) {
        state.capId = c.id;
        capNum.textContent = c.num;
        capName.textContent = c.name;
        capHint.textContent = c.hint;
      }
      caption.classList.add("on");
    } else {
      caption.classList.remove("on");
      state.capId = "";
    }
    let ni = 0;
    RAIL.forEach(([, t], i) => {
      if (Math.abs(sm - t) < Math.abs(sm - RAIL[ni][1])) ni = i;
    });
    dots.forEach((d, i) => d.classList.toggle("act", i === ni));
  }

  /* ==================================================================
   13. Project case-study modal (2D overlay — the 3D office persists)
================================================================== */
  const modal = $("#modal");
  function img(s) {
    return `<img src="${s.u}" alt="${s.c}" loading="lazy" onerror="this.closest('figure,div').classList.add('noimg')">`;
  }
  function archHTML(a) {
    return (
      '<div class="flow">' +
      a.steps
        .map((s, i) => {
          const ex =
            a.extra && a.extra.after === i
              ? `<span class="plus">${a.extra.label}</span>`
              : "";
          return (
            `<div class="node">${s}${ex}</div>` +
            (i < a.steps.length - 1 ? '<div class="arr">↓</div>' : "")
          );
        })
        .join("") +
      "</div>"
    );
  }
  function openProject(id) {
    const p = PROJECTS.find((p) => p.id === id);
    if (!p) return;
    modal.innerHTML = `<div class="sheet" role="dialog" aria-modal="true" aria-label="${p.title}">
   <div class="sheet-top"><button class="back" id="modalBack">← Back to Portfolio</button></div>
   <div class="hero noimg"><div class="himg" style="background-image:url('${p.shots[0].u}')"></div>
     <div class="veil"></div>
     <div class="hero-txt"><p class="kicker">${p.type}</p><h2>${p.title}</h2>
       <p class="sub">${p.subtitle} — ${p.desc}</p>
       <div class="chips">${p.tech.map((t) => `<span>${t}</span>`).join("")}</div></div></div>
   <div class="body">
    <section><h3>Overview</h3><p>${p.overview}</p></section>
    <section><h3>What I Built</h3><ul class="built">${p.built.map((b) => `<li>${b}</li>`).join("")}</ul></section>
    <section><h3>Architecture</h3>${archHTML(p.arch)}</section>
    <section><h3>Engineering Highlights</h3><div class="hl">${p.highlights.map((h) => `<article><h4>${h.t}</h4><p>${h.b}</p></article>`).join("")}</div></section>
    ${p.areas ? `<section><h3>Production Areas</h3><div class="chips">${p.areas.map((a) => `<span>${a}</span>`).join("")}</div></section>` : ""}
    <section><h3>Technology Stack</h3>${p.stack.map((s) => `<div class="stackg"><h5>${s.g}</h5><div class="chips">${s.i.map((i) => `<span>${i}</span>`).join("")}</div></div>`).join("")}</section>
    <section><h3>Screenshots</h3><div class="gallery">${p.shots.map((s) => `<figure>${img(s)}<span class="ph">${s.c} — screenshot loads from the live portfolio when online.</span><figcaption>${s.c}</figcaption></figure>`).join("")}</div></section>
    <section class="impact"><h3>Project Impact</h3><p>${p.impact}</p></section>
    <div class="meta"><div><h5>Project Type</h5><p>${p.type}</p></div><div><h5>Deployment</h5><p>${p.deployment}</p></div></div>
   </div></div>`;
    modal.classList.add("on");
    document.body.classList.add("modal-open");
    state.modalOpen = true;
    hideTip();
    $("#modalBack").onclick = closeModal;
    const himg = modal.querySelector(".hero .himg");
    if (himg) {
      const test = new Image();
      test.onload = () =>
        modal.querySelector(".hero").classList.remove("noimg");
      test.src = p.shots[0].u;
    }
  }
  function closeModal() {
    modal.classList.remove("on");
    document.body.classList.remove("modal-open");
    state.modalOpen = false;
    modal.innerHTML = "";
  }

  /* ==================================================================
   14. Downloadable CV (generated from the real data)
================================================================== */
  // function downloadCV(){
  //   const skills=[TECH.frontend,TECH.backend,TECH.tools].map(g=>`<h3>${g.label}</h3><p>${g.books.map(b=>b.n).join(", ")}</p>`).join("");
  //   const projects=PROJECTS.map(p=>`<h3>${p.title} — ${p.subtitle}</h3><p>${p.desc}</p><p class="t">Technology: ${p.tech.join(", ")}</p>`).join("");
  //   const certs=CERTS.map(c=>`<li>${c.t} — ${c.i}</li>`).join("");
  //   const html=`<!DOCTYPE html><html><head><meta charset="utf-8"><title>Nathaniel Lucero — CV</title>
  //   <style>body{font-family:Georgia,serif;max-width:760px;margin:48px auto;color:#222;line-height:1.6;padding:0 24px}
  //   h1{margin:0;font-size:30px}h2{border-bottom:1px solid #999;padding-bottom:4px;font-size:15px;letter-spacing:.15em;text-transform:uppercase}
  //   .sub{color:#555}.t{color:#555;font-size:14px}ul{padding-left:20px}</style></head><body>
  //   <h1>Nathaniel Lucero</h1><p class="sub">Full Stack Developer — Zambales, Philippines<br>${EMAIL}</p>
  //   <h2>Profile</h2>${ABOUT_P.map(p=>`<p>${p}</p>`).join("")}
  //   <h2>Experience</h2>
  //   <p><b>2025 — Present · Full Stack Developer</b><br>Sanyo Denki</p>
  //   <p><b>2025 · BS Information Technology</b><br>President Ramon Magsaysay State University</p>
  //   <h2>Technical Skills</h2>${skills}
  //   <h2>Selected Projects</h2>${projects}
  //   <h2>Certifications</h2><ul>${certs}</ul></body></html>`;
  //   const url=URL.createObjectURL(new Blob([html],{type:"text/html"}));
  //   const a=document.createElement("a");a.href=url;a.download="Nathaniel-Lucero-CV.html";
  //   document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),4000);
  // }
  function downloadCV() {
    const a = document.createElement("a");
    a.href = "/nathaniel_lucero_cv.pdf";
    a.download = "nathaniel_lucero_cv.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
  /* ==================================================================
   15b. Day / Night — lights, window scenery and the toggle button
================================================================== */
  const mkr = (seed) => {
    let v = seed;
    return () => (v = (v * 16807) % 2147483647) / 2147483647;
  };
  const nightFarTex = ctex(1024, 672, (g, W, H) => {
    const r = mkr(7),
      hz = H * 0.47;
    const sky = g.createLinearGradient(0, 0, 0, hz);
    sky.addColorStop(0, "#03050b");
    sky.addColorStop(0.55, "#0a1331");
    sky.addColorStop(1, "#22335a");
    g.fillStyle = sky;
    g.fillRect(0, 0, W, hz + 2);
    for (let i = 0; i < 280; i++) {
      const x = r() * W,
        y = r() * hz * 0.95,
        s = r();
      g.fillStyle = `rgba(255,255,245,${0.25 + 0.7 * s * s})`;
      g.beginPath();
      g.arc(x, y, 0.5 + s * 1.3, 0, 7);
      g.fill();
    }
    for (let i = 0; i < 16; i++) {
      const x = r() * W,
        y = r() * hz * 0.8;
      const sg = g.createRadialGradient(x, y, 0, x, y, 9);
      sg.addColorStop(0, "rgba(255,255,255,.9)");
      sg.addColorStop(1, "rgba(255,255,255,0)");
      g.fillStyle = sg;
      g.beginPath();
      g.arc(x, y, 9, 0, 7);
      g.fill();
    }
    // moon
    const mx = W * 0.4,
      my = H * 0.335,
      mr = 26;
    const mg = g.createRadialGradient(mx, my, mr * 0.6, mx, my, mr * 5);
    mg.addColorStop(0, "rgba(214,226,255,.38)");
    mg.addColorStop(1, "rgba(214,226,255,0)");
    g.fillStyle = mg;
    g.beginPath();
    g.arc(mx, my, mr * 5, 0, 7);
    g.fill();
    g.fillStyle = "#f4f0e2";
    g.beginPath();
    g.arc(mx, my, mr, 0, 7);
    g.fill();
    g.fillStyle = "rgba(165,165,155,.35)";
    [
      [-8, -6, 6],
      [7, 3, 8],
      [-3, 10, 4.5],
      [9, -9, 3.5],
    ].forEach(([dx, dy, cr]) => {
      g.beginPath();
      g.arc(mx + dx, my + dy, cr, 0, 7);
      g.fill();
    });
    // distant range + faint snow caps
    const farPk = [
      [0.03, 0.115],
      [0.1, 0.2],
      [0.18, 0.13],
      [0.27, 0.26],
      [0.36, 0.15],
      [0.46, 0.3],
      [0.56, 0.17],
      [0.66, 0.24],
      [0.76, 0.12],
      [0.86, 0.22],
      [0.94, 0.15],
    ];
    g.fillStyle = "#18233f";
    g.beginPath();
    g.moveTo(-10, hz + 2);
    farPk.forEach(([px, ph]) => {
      g.lineTo(W * px, hz - H * ph);
      g.lineTo(W * (px + 0.045), hz - H * ph * 0.32);
    });
    g.lineTo(W + 10, hz + 2);
    g.closePath();
    g.fill();
    g.fillStyle = "rgba(150,170,215,.5)";
    farPk.forEach(([px, ph]) => {
      if (ph > 0.18) {
        const x = W * px,
          y = hz - H * ph,
          c = H * 0.042;
        g.beginPath();
        g.moveTo(x, y);
        g.lineTo(x + c * 0.85, y + c);
        g.lineTo(x + c * 0.3, y + c * 0.55);
        g.lineTo(x, y + c * 0.82);
        g.lineTo(x - c * 0.35, y + c * 0.5);
        g.lineTo(x - c * 0.8, y + c);
        g.closePath();
        g.fill();
      }
    });
    g.fillStyle = "#101a33";
    g.beginPath();
    g.moveTo(-10, hz + 2);
    [
      [0.0, 0.07],
      [0.08, 0.12],
      [0.17, 0.06],
      [0.27, 0.14],
      [0.38, 0.08],
      [0.5, 0.13],
      [0.61, 0.07],
      [0.72, 0.15],
      [0.83, 0.09],
      [0.93, 0.12],
    ].forEach(([px, ph]) => {
      g.lineTo(W * px, hz - H * ph);
      g.lineTo(W * (px + 0.05), hz - H * ph * 0.3);
    });
    g.lineTo(W + 10, hz + 2);
    g.closePath();
    g.fill();
    const haze = g.createLinearGradient(0, hz - H * 0.1, 0, hz + H * 0.02);
    haze.addColorStop(0, "rgba(34,51,90,0)");
    haze.addColorStop(1, "rgba(34,51,90,.75)");
    g.fillStyle = haze;
    g.fillRect(0, hz - H * 0.1, W, H * 0.12);
    const hill = (off, amp, col) => {
      g.fillStyle = col;
      g.beginPath();
      g.moveTo(0, H);
      g.lineTo(0, hz + H * off);
      for (let x = 0; x <= W; x += W / 8)
        g.quadraticCurveTo(
          x + W / 16,
          hz + H * off - H * amp * (0.4 + r() * 0.6),
          x + W / 8,
          hz + H * (off + 0.015),
        );
      g.lineTo(W, H);
      g.closePath();
      g.fill();
    };
    hill(0.045, 0.045, "#0f1f2e");
    hill(0.095, 0.04, "#0b1824");
    const gr = g.createLinearGradient(0, hz + H * 0.115, 0, H);
    gr.addColorStop(0, "#0a1b1e");
    gr.addColorStop(0.5, "#071517");
    gr.addColorStop(1, "#050f10");
    g.fillStyle = gr;
    g.fillRect(0, hz + H * 0.115, W, H);
    for (let i = 0; i < 700; i++) {
      const x = r() * W,
        y = hz + H * 0.125 + r() * (H - hz - H * 0.125),
        l = 3 + r() * 7;
      g.strokeStyle = `rgba(${(30 + r() * 20) | 0},${(80 + r() * 40) | 0},${(70 + r() * 30) | 0},${0.25 + r() * 0.25})`;
      g.lineWidth = 1;
      g.beginPath();
      g.moveTo(x, y);
      g.quadraticCurveTo(x + r() * 4 - 2, y - l * 0.6, x + r() * 6 - 3, y - l);
      g.stroke();
    }
    for (let i = 0; i < 46; i++) {
      const x = r() * W,
        y = hz + H * 0.16 + r() * (H * 0.6);
      const fg = g.createRadialGradient(x, y, 0, x, y, 7);
      fg.addColorStop(0, "rgba(225,255,150,.95)");
      fg.addColorStop(1, "rgba(225,255,150,0)");
      g.fillStyle = fg;
      g.beginPath();
      g.arc(x, y, 7, 0, 7);
      g.fill();
    }
  });
  const nightNearTex = ctex(896, 568, (g, W, H) => {
    const r = mkr(11);
    g.clearRect(0, 0, W, H);
    g.fillStyle = "#08170f";
    g.beginPath();
    g.moveTo(0, H);
    g.lineTo(0, H * 0.42);
    for (let x = 0; x <= W; x += W / 10)
      g.quadraticCurveTo(
        x + W / 20,
        H * (0.36 + r() * 0.08),
        x + W / 10,
        H * (0.4 + r() * 0.08),
      );
    g.lineTo(W, H);
    g.closePath();
    g.fill();
    for (let i = 0; i < 7; i++) {
      const x = 40 + r() * (W - 80),
        base = H * (0.46 + r() * 0.1),
        s = 0.7 + r() * 0.6;
      g.fillStyle = "#1a1511";
      g.fillRect(x - 2 * s, base - 14 * s, 4 * s, 16 * s);
      const cols = ["#0a1f19", "#0d261e", "#081a14"];
      for (let b = 0; b < 4; b++) {
        g.fillStyle = cols[b % 3];
        g.beginPath();
        g.arc(
          x + (r() - 0.5) * 14 * s,
          base - 16 * s - b * 9 * s,
          (11 - b * 1.5) * s,
          0,
          7,
        );
        g.fill();
      }
    }
    const gr = g.createLinearGradient(0, H * 0.62, 0, H);
    gr.addColorStop(0, "rgba(8,26,20,0)");
    gr.addColorStop(0.25, "rgba(8,26,20,1)");
    gr.addColorStop(1, "#051410");
    g.fillStyle = gr;
    g.fillRect(0, H * 0.62, W, H * 0.38);
    for (let i = 0; i < 600; i++) {
      const x = r() * W,
        y = H * (0.66 + r() * 0.34),
        l = 4 + r() * 9;
      g.strokeStyle = `rgba(${(35 + r() * 25) | 0},${(90 + r() * 40) | 0},${(70 + r() * 30) | 0},${0.3 + r() * 0.25})`;
      g.lineWidth = 1;
      g.beginPath();
      g.moveTo(x, y);
      g.quadraticCurveTo(
        x + r() * 5 - 2.5,
        y - l * 0.6,
        x + r() * 7 - 3.5,
        y - l,
      );
      g.stroke();
    }
    for (let i = 0; i < 26; i++) {
      const x = r() * W,
        y = H * (0.55 + r() * 0.45),
        rad = 6 + r() * 5;
      const fg = g.createRadialGradient(x, y, 0, x, y, rad);
      fg.addColorStop(0, "rgba(225,255,150,.95)");
      fg.addColorStop(1, "rgba(225,255,150,0)");
      g.fillStyle = fg;
      g.beginPath();
      g.arc(x, y, rad, 0, 7);
      g.fill();
    }
  });
  const nightFar = new THREE.Mesh(
    new THREE.PlaneGeometry(7.0, 4.6),
    new THREE.MeshBasicMaterial({
      map: nightFarTex,
      transparent: true,
      opacity: 0,
      toneMapped: false,
      depthWrite: false,
    }),
  );
  nightFar.rotation.y = Math.PI / 2;
  nightFar.position.set(-6.45, 1.9, -2.85);
  nightFar.renderOrder = 1;
  scene.add(nightFar);
  const nightNear = new THREE.Mesh(
    new THREE.PlaneGeometry(6.0, 3.8),
    new THREE.MeshBasicMaterial({
      map: nightNearTex,
      transparent: true,
      opacity: 0,
      toneMapped: false,
      depthWrite: false,
    }),
  );
  nightNear.rotation.y = Math.PI / 2;
  nightNear.position.set(-5.45, 1.7, -2.85);
  nightNear.renderOrder = 3;
  scene.add(nightNear);
  anims.winNear.renderOrder = 2;
  anims.winNear.material.transparent = true;

  // warm ceiling lights that switch on at night
  const ceilLights = [
    [-1.9, 0.5],
    [1.9, 0.5],
    [-1.9, -2.5],
    [1.9, -2.5],
  ].map(([x, z]) => {
    const l = new THREE.PointLight(0xffd7a3, 0, 0, 2);
    l.position.set(x, 2.85, z);
    scene.add(l);
    return l;
  });

  const TOD = { cur: 0, target: 0 };
  const dSun = new THREE.Color(0xffe9cf),
    nSun = new THREE.Color(0x7f9de0);
  const dSky = new THREE.Color(0xe8e2d6),
    nSky = new THREE.Color(0x24304f);
  const dGnd = new THREE.Color(0x3a352f),
    nGnd = new THREE.Color(0x120f0c);
  const mix = (a, b, m) => a + (b - a) * m;
  function applyTOD(m) {
    sun.color.copy(dSun).lerp(nSun, m);
    sun.intensity = mix(2.1, 0.6, m);
    hemi.color.copy(dSky).lerp(nSky, m);
    hemi.groundColor.copy(dGnd).lerp(nGnd, m);
    hemi.intensity = mix(0.6, 0.3, m);
    ceilLights.forEach((l) => (l.intensity = mix(0, 2.4, m)));
    lampLight.intensity = mix(3.2, 8, m);
    lampLight.distance = mix(2.2, 3.2, m);
    screenGlow.intensity = mix(2.6, 5, m);
    nightFar.material.opacity = m;
    nightNear.material.opacity = m;
    anims.winNear.material.opacity = 1 - m;
  }
  const MOON_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
  const SUN_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  function setTheme(night, save) {
    TOD.target = night ? 1 : 0;
    const b = $("#btnTheme");
    b.innerHTML = night
      ? SUN_SVG + "<span>Day</span>"
      : MOON_SVG + "<span>Night</span>";
    b.setAttribute(
      "aria-label",
      night ? "Switch to day mode" : "Switch to night mode",
    );
    if (save) {
      try {
        localStorage.setItem("nl-theme", night ? "night" : "day");
      } catch (e) {}
    }
  }
  $("#btnTheme").onclick = () => setTheme(TOD.target < 0.5, true);
  {
    let saved = null;
    try {
      saved = localStorage.getItem("nl-theme");
    } catch (e) {}
    if (saved === "night") {
      TOD.cur = TOD.target = 1;
      applyTOD(1);
    }
    setTheme(saved === "night", false);
  }
  /* ==================================================================
   16. 2D fallback portfolio (accessibility / no-WebGL mode)
================================================================== */
  function buildFlat() {
    $("#flat").innerHTML = `
  <header><p class="kicker">Full Stack Developer · Zambales, Philippines</p>
   <h1>Nathaniel Lucero</h1>
  <p class="tagline">Building scalable, maintainable, and user-friendly web applications.</p>
  <div class="btnrow"><a class="btn solid" href="mailto:${EMAIL}">Send Email</a>
  <button class="btn" id="flatCV">Download CV</button></div></header>
  <section><h2>About</h2>${ABOUT_P.map((p) => `<p>${p}</p>`).join("")}</section>
  <section><h2>Experience</h2>${EXPER.map((e) => `<div class="xp"><span class="yr">${e.y}</span><h3>${e.t}</h3><p>${e.o}</p></div>`).join("")}</section>
  <section><h2>Tech Stack</h2><div class="tgrid">${[TECH.frontend, TECH.backend, TECH.tools].map((g) => `<div><h4>${g.label}</h4><ul>${g.books.map((b) => `<li>${b.n}</li>`).join("")}</ul></div>`).join("")}</div></section>
  <section><h2>Projects</h2>${PROJECTS.map(
    (
      p,
    ) => `<div class="pcard"><h3>${p.title}</h3><p class="st">${p.subtitle}</p><p>${p.desc}</p>
   <div class="chips" style="margin:14px 0">${p.tech.map((t) => `<span>${t}</span>`).join("")}</div>
   <button class="btn" data-proj="${p.id}">View Case Study</button></div>`,
  ).join("")}</section>
  <section><h2>Certifications</h2><ul class="clist">${CERTS.map((c) => `<li>${c.url ? `<a href="${c.url}" target="_blank" rel="noopener" style="color:inherit">${c.t}</a>` : c.t}<span>${c.i}</span></li>`).join("")}</ul></section>
  <section><h2>Contact</h2><p>Available for freelance projects and collaborations. Feel free to reach out via email.</p>
   <div class="btnrow"><a class="btn solid" href="mailto:${EMAIL}">${EMAIL}</a>
   <a class="btn" href="https://github.com/nathan-dotnet" target="_blank" rel="noopener">GitHub</a>
   <a class="btn" href="https://www.linkedin.com/in/nathaniel-lucero052903/" target="_blank" rel="noopener">LinkedIn</a>
   <a class="btn" href="https://www.instagram.com/nathan_dotnet?utm_source=qr&igsh=MzNpd2g0enIxcXgz" target="_blank" rel="noopener">Instagram</a></div></section>`;
    $("#flatCV").onclick = downloadCV;
    $("#flat")
      .querySelectorAll("[data-proj]")
      .forEach((b) => (b.onclick = () => openProject(b.dataset.proj)));
  }
  buildFlat();
  function enterFlat(auto) {
    if (state.flat) return;
    state.flat = true;
    if (!auto) state.savedY = scrollY;
    document.body.classList.add("flat");
    $("#btn2d").textContent = "3D Office";
    if (!auto) scrollTo(0, 0);
    hideTip();
  }
  function exitFlat() {
    if (!state.flat) return;
    state.flat = false;
    document.body.classList.remove("flat");
    $("#btn2d").textContent = "2D Portfolio";
    scrollTo(0, state.savedY);
    measure();
  }
  $("#btn2d").onclick = () => (state.flat ? exitFlat() : enterFlat(false));

  /* ==================================================================
   17. Main loop — damping, idle animation, continuous camera travel
================================================================== */
  let tPrev = performance.now(),
    lastClock = 0,
    lastFov = 0;
  addEventListener("resize", () => {
    updateCameraTimeline();
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
    measure();
  });
  function tick(now) {
    requestAnimationFrame(tick);
    if (state.flat) return;
    if (document.visibilityState === "hidden") {
      renderer.render(scene, camera);
      return;
    }
    const dt = Math.min(0.05, (now - tPrev) / 1000);
    tPrev = now;
    const t = now / 1000;
    const rawT = clamp(scrollY / state.max, 0, 1);
    state.sm += (rawT - state.sm) * (reduced ? 1 : 1 - Math.exp(-dt * 2.2));

    // camera along the continuous spline
    const { fov } = evalTimeline(state.sm);
    pX += (mX - pX) * (1 - Math.exp(-dt * 3));
    pY += (mY - pY) * (1 - Math.exp(-dt * 3));
    V1.subVectors(P2, P1).normalize();
    V2.crossVectors(V1, camera.up).normalize();
    if (!isMobile && !reduced) {
      camera.position
        .copy(P1)
        .addScaledVector(V2, pX * 0.13)
        .addScaledVector(camera.up, -pY * 0.07);
      P2.addScaledVector(V2, pX * 0.05);
    } else camera.position.copy(P1);
    camera.lookAt(P2);
    if (Math.abs(fov - lastFov) > 0.02) {
      camera.fov = fov + pY * -1.2;
      camera.updateProjectionMatrix();
      lastFov = fov;
    }

    // Nathaniel idle: typing + head sway + breathing
    anims.hands.forEach((h) => {
      h.position.y =
        h.userData.baseY + Math.sin(t * 9 + h.userData.ph * 2.4) * 0.012;
    });
    if (anims.head) {
      anims.head.rotation.y = Math.sin(t * 0.35) * 0.07;
      anims.head.rotation.x = Math.sin(t * 0.8) * 0.02 + 0.02;
    }
    if (anims.torso)
      anims.torso.scale.y =
        anims.torso.userData.baseScaleY * (1 + Math.sin(t * 1.6) * 0.008);
    // PC fan spin
    pcFan.rotation.x += dt * 10;
    // plants sway
    anims.plants.forEach((l, i) => {
      l.rotation.z = l.userData.baseZ + Math.sin(t * 0.6 + i) * 0.025;
    });

    // coffee steam rises and gently drifts sideways.
    anims.steam.forEach((v, i) => {
      const ph = v.userData.phase;
      v.position.y = v.userData.baseY + ((t * 0.045 + i * 0.012) % 0.16);
      v.position.x = v.userData.baseX + Math.sin(t * 0.9 + ph) * 0.018;
      v.material.opacity =
        0.2 * (0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * 1.1 + ph)));
    });
    // day / night easing
    if (TOD.cur !== TOD.target) {
      TOD.cur +=
        (TOD.target - TOD.cur) * (reduced ? 1 : 1 - Math.exp(-dt * 2.6));
      if (Math.abs(TOD.target - TOD.cur) < 0.002) TOD.cur = TOD.target;
      applyTOD(TOD.cur);
    }
    // clock
    if (now - lastClock > 1000) {
      anims.drawClock();
      lastClock = now;
    }
    // book hover: pull out + glow
    const k = 1 - Math.exp(-dt * 8);
    anims.books.forEach((b) => {
      const target = state.hover === b ? 0.1 : 0;
      b.userData.pull += (target - b.userData.pull) * k;
      b.position.z = b.userData.baseZ + b.userData.pull;
      const m = b.material[4];
      m.emissiveIntensity +=
        ((state.hover === b ? 0.5 : 0) - m.emissiveIntensity) * k;
    });
    // project display hover: slight scale-up
    anims.displays.forEach((g) => {
      const target = state.hoverG === g ? 1 : 0;
      g.userData.h = (g.userData.h || 0) + (target - (g.userData.h || 0)) * k;
      g.scale.setScalar(
        (g.userData.baseScale || 0.82) * (1 + g.userData.h * 0.03),
      );
    });
    // hover raycast + tooltips
    if (!state.modalOpen && pointerDirty) {
      doRaycast();
      pointerDirty = false;
    } else if (state.modalOpen) hideTip();

    renderer.render(scene, camera);
    updateHUD(state.sm);
  }
  anims.displays.forEach((g) => (g.userData.baseScale = g.scale.x));
  requestAnimationFrame(tick);

  /* ---- ready ---- */
  $("#loader").classList.add("done");
  document.body.classList.remove("loading");
  document.body.classList.add("ready");
  measure();
}
