/* ==========================================================================
   PT RENAI GVTL INDONESIA
   AI COMMAND CENTER
   SCRIPT ENGINE — V4.0
   PUBLIC VISUAL SIMULATION
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    /* ======================================================================
       01. CONFIGURATION
       ====================================================================== */

    const CONFIG = {

        bootDuration: 3600,

        telemetryInterval: 850,

        terminalInterval: 2400,

        notificationInterval: 5200,

        chartUpdateInterval: 90,

        targetFPS: 60,

        maxDPR: 2,

        particlesMobile: 18,

        particlesDesktop: 34,

        networkNodesMobile: 18,

        networkNodesDesktop: 42,

        routerFlowInterval: 1800,

        ecosystemPulseInterval: 1200

    };


    /* ======================================================================
       02. DOM CACHE
       ====================================================================== */

    const $ = id => document.getElementById(id);

    const bootScreen = $("boot-screen");
    const loadingProgress = $("loading-progress");
    const loadingText = $("loading-text");
    const dashboard = $("dashboard");

    const dateEl = $("date");
    const timeEl = $("time");
    const uptimeEl = $("uptime");

    const coreEnergy = $("coreEnergy");
    const coreStatus = $("coreStatus");
    const aiStatus = $("aiStatus");

    const terminal = $("terminalLog");
    const notificationList = $("notificationList");

    const activityCanvas = $("activityChart");
    const radarCanvas = $("radarCanvas");
    const worldCanvas = $("worldCanvas");


    /* ======================================================================
       03. SYSTEM STATE
       ====================================================================== */

    const state = {

        booted: false,

        startTime: performance.now(),

        uptimeSeconds: 0,

        frameCount: 0,

        fps: 60,

        fpsAccumulator: 0,

        fpsTimer: performance.now(),

        lastFrameTime: performance.now(),

        deltaTime: 16.67,

        gpu: {

            usage: 74,

            clock: 12480,

            temp: 67,

            power: 6840,

            vram: 47.8

        },

        cpu: {

            usage: 52,

            clock: 5.18,

            temp: 59

        },

        memory: {

            ram: 186.4,

            storage: 42.7

        },

        ai: {

            load: 76,

            energy: 86,

            activity: 0.76

        },

        network: {

            upload: 8.4,

            download: 18.7,

            latency: 4

        },

        visual: {

            activity: 0.72,

            fps: 60

        },

        router: {

            load: 68,

            requests: 0,

            processed: 0,

            activeEngine: "RENAI GVTL",

            flowStep: 0,

            status: "ROUTING"

        },

        ecosystem: {

            gvtl: 74,

            auro: 61,

            silv: 57,

            fan: 48,

            dian: 43,

            narend: 39

        },

        counters: {

            inference: 428000,

            neuralOps: 7.82e15,

            processed: 284700,

            nodes: 384

        }

    };


    /* ======================================================================
       04. UTILITIES
       ====================================================================== */

    const clamp = (value, min, max) =>
        Math.min(Math.max(value, min), max);


    const random = (min, max) =>
        Math.random() * (max - min) + min;


    const randomInt = (min, max) =>
        Math.floor(random(min, max + 1));


    const smooth = (
        current,
        target,
        amount = 0.08
    ) =>
        current + (target - current) * amount;


    const isMobile = () =>
        window.innerWidth < 768;


    const getDPR = () =>
        Math.min(
            window.devicePixelRatio || 1,
            CONFIG.maxDPR
        );


    const setText = (id, value) => {

        const element = $(id);

        if (element) {
            element.textContent = value;
        }

    };


    const formatLargeNumber = value => {

        if (value >= 1e15)
            return `${(value / 1e15).toFixed(2)} Q`;

        if (value >= 1e12)
            return `${(value / 1e12).toFixed(2)} T`;

        if (value >= 1e9)
            return `${(value / 1e9).toFixed(2)} B`;

        if (value >= 1e6)
            return `${(value / 1e6).toFixed(2)} M`;

        if (value >= 1e3)
            return `${(value / 1e3).toFixed(1)} K`;

        return Math.round(value).toString();

    };


    /* ======================================================================
       05. BOOT SYSTEM
       ====================================================================== */

    function startBootSequence() {

        if (!bootScreen) {

            activateDashboard();

            return;

        }


        let progress = 0;


        const bootMessages = [

            "Initializing RENAI GVTL Core...",

            "Loading neural architecture...",

            "Allocating virtual memory...",

            "Synchronizing AI nodes...",

            "Establishing secure channels...",

            "Activating RENAI Router...",

            "Connecting AI ecosystem...",

            "Initializing telemetry engine...",

            "Calibrating visual matrix...",

            "System integrity verified..."

        ];


        const interval = setInterval(() => {

            progress += random(2.5, 6.5);


            if (progress >= 100) {

                progress = 100;

                clearInterval(interval);


                if (loadingProgress) {

                    loadingProgress.style.width = "100%";

                }


                if (loadingText) {

                    loadingText.textContent =
                        "SYSTEM READY — LAUNCHING COMMAND CENTER...";

                }


                setTimeout(
                    activateDashboard,
                    650
                );

                return;

            }


            if (loadingProgress) {

                loadingProgress.style.width =
                    `${progress}%`;

            }


            const index = Math.min(

                bootMessages.length - 1,

                Math.floor(progress / 10)

            );


            if (loadingText) {

                loadingText.textContent =
                    `${bootMessages[index]} [${Math.floor(progress)}%]`;

            }

        }, CONFIG.bootDuration / 100);

    }


    function activateDashboard() {

        if (state.booted) return;

        state.booted = true;


        if (bootScreen) {

            bootScreen.style.opacity = "0";

            bootScreen.style.pointerEvents = "none";


            setTimeout(() => {

                bootScreen.style.visibility = "hidden";

            }, 700);

        }


        if (dashboard) {

            dashboard.classList.add("active");

        }


        state.startTime = performance.now();


        initializeSystem();

    }


    /* ======================================================================
       06. SYSTEM INITIALIZATION
       ====================================================================== */

    function initializeSystem() {

        updateClock();

        initializeTelemetry();

        initializeActivityChart();

        initializeRadar();

        initializeWorldNetwork();

        initializeTerminal();

        initializeNotifications();

        initializeRouterFlow();

        initializeEcosystemActivity();

        initializePerformanceMatrix();

        updateSystemStatus();

    }


 /* ======================================================================
   07. CLOCK — REAL-TIME SYSTEM CLOCK
   ====================================================================== */

function updateClock() {

    function tick() {

        const now = new Date();

        /* --------------------------------------------------------------
           DATE
           -------------------------------------------------------------- */

        if (dateEl) {

            const dateString =
                now.toLocaleDateString(
                    "id-ID",
                    {
                        weekday: "long",
                        day: "2-digit",
                        month: "long",
                        year: "numeric"
                    }
                );

            dateEl.textContent =
                dateString.toUpperCase();

        }


        /* --------------------------------------------------------------
           TIME
           -------------------------------------------------------------- */

        if (timeEl) {

            const timeString =
                now.toLocaleTimeString(
                    "id-ID",
                    {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: false
                    }
                );

            timeEl.textContent =
                timeString;

        }


        /* --------------------------------------------------------------
           UPTIME
           -------------------------------------------------------------- */

        state.uptimeSeconds =
            Math.floor(
                (
                    performance.now() -
                    state.startTime
                ) / 1000
            );


        const hours =
            String(
                Math.floor(
                    state.uptimeSeconds / 3600
                )
            ).padStart(2, "0");


        const minutes =
            String(
                Math.floor(
                    (
                        state.uptimeSeconds % 3600
                    ) / 60
                )
            ).padStart(2, "0");


        const seconds =
            String(
                state.uptimeSeconds % 60
            ).padStart(2, "0");


        if (uptimeEl) {

            uptimeEl.textContent =
                `${hours}:${minutes}:${seconds}`;

        }

    }


    /* Jalankan langsung */

    tick();


    /* Update setiap 1 detik */

    setInterval(
        tick,
        1000
    );

}


    /* ======================================================================
       08. TELEMETRY ENGINE
       ====================================================================== */

    function initializeTelemetry() {

        function update() {

            if (document.hidden) return;


            /* --------------------------------------------------------------
               AI LOAD
               -------------------------------------------------------------- */

            const targetAiLoad =
                clamp(
                    state.ai.load +
                    random(-8, 8),
                    48,
                    97
                );


            state.ai.load =
                smooth(
                    state.ai.load,
                    targetAiLoad,
                    0.16
                );


            /* --------------------------------------------------------------
               AI ACTIVITY
               -------------------------------------------------------------- */

            state.ai.activity =
                smooth(
                    state.ai.activity,
                    clamp(
                        state.ai.load / 100 +
                        random(-0.08, 0.08),
                        0.05,
                        1
                    ),
                    0.15
                );


            /* --------------------------------------------------------------
               GPU
               -------------------------------------------------------------- */

            const targetGpu =
                clamp(
                    state.ai.load +
                    random(-8, 10),
                    48,
                    99
                );


            state.gpu.usage =
                smooth(
                    state.gpu.usage,
                    targetGpu,
                    0.16
                );


            state.gpu.clock =
                smooth(
                    state.gpu.clock,
                    11200 +
                    state.gpu.usage * 21 +
                    random(-180, 180),
                    0.12
                );


            state.gpu.temp =
                smooth(
                    state.gpu.temp,
                    47 +
                    state.gpu.usage * 0.25 +
                    random(-2, 3),
                    0.09
                );


            state.gpu.power =
                smooth(
                    state.gpu.power,
                    4200 +
                    state.gpu.usage * 38 +
                    random(-250, 250),
                    0.11
                );


            state.gpu.vram =
                smooth(
                    state.gpu.vram,
                    24 +
                    state.gpu.usage * 0.34 +
                    random(-1.2, 1.2),
                    0.10
                );


            /* --------------------------------------------------------------
               CPU
               -------------------------------------------------------------- */

            const targetCpu =
                clamp(
                    state.ai.load * 0.72 +
                    random(-10, 10),
                    28,
                    94
                );


            state.cpu.usage =
                smooth(
                    state.cpu.usage,
                    targetCpu,
                    0.13
                );


            state.cpu.clock =
                smooth(
                    state.cpu.clock,
                    4.4 +
                    state.cpu.usage * 0.016 +
                    random(-0.08, 0.08),
                    0.11
                );


            state.cpu.temp =
                smooth(
                    state.cpu.temp,
                    39 +
                    state.cpu.usage * 0.31 +
                    random(-1.5, 2),
                    0.09
                );


            /* --------------------------------------------------------------
               MEMORY
               -------------------------------------------------------------- */

            state.memory.ram =
                smooth(
                    state.memory.ram,
                    118 +
                    state.ai.load * 1.02 +
                    random(-4, 5),
                    0.08
                );


            state.memory.storage =
                smooth(
                    state.memory.storage,
                    38 +
                    state.ai.load * 0.14 +
                    random(-0.4, 0.7),
                    0.04
                );


            /* --------------------------------------------------------------
               AI ENERGY
               -------------------------------------------------------------- */

            const targetEnergy =
                clamp(
                    104 -
                    state.ai.load * 0.25 +
                    random(-2.5, 2.5),
                    62,
                    100
                );


            state.ai.energy =
                smooth(
                    state.ai.energy,
                    targetEnergy,
                    0.08
                );


            /* --------------------------------------------------------------
               NETWORK
               -------------------------------------------------------------- */

            state.network.upload =
                smooth(
                    state.network.upload,
                    3.8 +
                    state.ai.load * 0.07 +
                    random(0, 4.5),
                    0.15
                );


            state.network.download =
                smooth(
                    state.network.download,
                    8.5 +
                    state.ai.load * 0.14 +
                    random(0, 8),
                    0.15
                );


            state.network.latency =
                clamp(
                    Math.round(
                        2 +
                        (100 - state.ai.load) * 0.035 +
                        random(-1, 2)
                    ),
                    1,
                    15
                );


            /* --------------------------------------------------------------
               COUNTERS
               -------------------------------------------------------------- */

            state.counters.inference +=
                randomInt(2400, 12400);


            state.counters.processed +=
                randomInt(1200, 8400);


            state.counters.neuralOps =
                smooth(
                    state.counters.neuralOps,
                    5.5e15 +
                    state.ai.load * 1.8e14 +
                    random(-2e14, 2e14),
                    0.12
                );


            state.counters.nodes =
                Math.round(
                    320 +
                    state.ai.load * 2.4 +
                    random(-5, 8)
                );


            updateRouterState();

            renderTelemetry();

        }


        renderTelemetry();


        setInterval(
            update,
            CONFIG.telemetryInterval
        );

    }


    /* ======================================================================
       09. TELEMETRY RENDER
       ====================================================================== */

    function renderTelemetry() {

        setText(
            "gpuUsage",
            `${Math.round(state.gpu.usage)}%`
        );


        setText(
            "gpuClock",
            `${Math.round(state.gpu.clock).toLocaleString()} MHz`
        );


        setText(
            "gpuTemp",
            `${Math.round(state.gpu.temp)}°C`
        );


        setText(
            "gpuPower",
            `${Math.round(state.gpu.power).toLocaleString()} W`
        );


        setText(
            "vram",
            `${state.gpu.vram.toFixed(1)} / 100 TB`
        );


        setText(
            "cpuUsage",
            `${Math.round(state.cpu.usage)}%`
        );


        setText(
            "cpuClock",
            `${state.cpu.clock.toFixed(2)} GHz`
        );


        setText(
            "cpuTemp",
            `${Math.round(state.cpu.temp)}°C`
        );


        setText(
            "ramUsage",
            `${state.memory.ram.toFixed(1)} / 512 GB`
        );


        setText(
            "storageUsage",
            `${state.memory.storage.toFixed(1)} / 8 PB`
        );


        setText(
            "uploadSpeed",
            `${state.network.upload.toFixed(2)} GB/s`
        );


        setText(
            "downloadSpeed",
            `${state.network.download.toFixed(2)} GB/s`
        );


        setText(
            "latency",
            `${state.network.latency} ms`
        );


        /*
         * FPS aktual browser.
         * Dibulatkan agar UI tidak terlalu berisik.
         */

        setText(
            "fps",
            Math.round(state.fps)
        );


        setText(
            "aiLoad",
            `${Math.round(state.ai.load)}%`
        );


        const totalPower =
            state.gpu.power +
            state.cpu.usage * 14;


        setText(
            "totalPower",
            `${Math.round(totalPower).toLocaleString()} W`
        );


        setText(
            "coreEnergy",
            `${Math.round(state.ai.energy)}%`
        );

    }


    /* ======================================================================
       10. SYSTEM STATUS
       ====================================================================== */

    function updateSystemStatus() {

        setText(
            "coreStatus",
            "ONLINE"
        );


        setText(
            "aiStatus",
            "ACTIVE"
        );


        setText(
            "securityStatus",
            "MAXIMUM"
        );


        setText(
            "databaseStatus",
            "CONNECTED"
        );


        setText(
            "networkStatus",
            "ONLINE"
        );


        setText(
            "powerMode",
            "PERFORMANCE"
        );


        setText(
            "cudaCores",
            "16,384"
        );


        setText(
            "tensorCores",
            "512"
        );

    }


    /* ======================================================================
       11. NEURAL ACTIVITY CHART
       ====================================================================== */

    function initializeActivityChart() {

        if (!activityCanvas) return;


        const ctx =
            activityCanvas.getContext("2d");


        let width = 0;
        let height = 0;


        const points = [];


        const count =
            isMobile()
                ? 36
                : 72;


        for (
            let i = 0;
            i < count;
            i++
        ) {

            points.push(
                random(0.20, 0.82)
            );

        }


        function resize() {

            const rect =
                activityCanvas.getBoundingClientRect();


            const dpr =
                getDPR();


            width =
                Math.max(1, rect.width);


            height =
                Math.max(1, rect.height);


            activityCanvas.width =
                width * dpr;


            activityCanvas.height =
                height * dpr;


            ctx.setTransform(
                dpr,
                0,
                0,
                dpr,
                0,
                0
            );

        }


        window.addEventListener(
            "resize",
            resize,
            { passive: true }
        );


        resize();


        activityCanvas._renaiDraw =
            function () {

                if (
                    document.hidden ||
                    width <= 0 ||
                    height <= 0
                ) return;


                ctx.clearRect(
                    0,
                    0,
                    width,
                    height
                );


                /* GRID */

                ctx.save();

                ctx.strokeStyle =
                    "rgba(0,210,255,.07)";

                ctx.lineWidth = 1;


                for (
                    let y = 0;
                    y < height;
                    y += 25
                ) {

                    ctx.beginPath();

                    ctx.moveTo(
                        0,
                        y
                    );

                    ctx.lineTo(
                        width,
                        y
                    );

                    ctx.stroke();

                }


                ctx.restore();


                /* WAVE */

                const step =
                    width /
                    (points.length - 1);


                const baseline =
                    height * 0.82;


                ctx.beginPath();


                for (
                    let i = 0;
                    i < points.length;
                    i++
                ) {

                    const x =
                        i * step;


                    const y =
                        height * 0.10 +
                        points[i] *
                        height * 0.58;


                    if (i === 0) {

                        ctx.moveTo(
                            x,
                            y
                        );

                    } else {

                        const previousX =
                            (i - 1) * step;


                        const previousY =
                            height * 0.10 +
                            points[i - 1] *
                            height * 0.58;


                        const controlX =
                            (
                                previousX +
                                x
                            ) / 2;


                        const controlY =
                            (
                                previousY +
                                y
                            ) / 2;


                        ctx.quadraticCurveTo(
                            previousX,
                            previousY,
                            controlX,
                            controlY
                        );

                    }

                }


                ctx.lineWidth = 2;

                ctx.strokeStyle =
                    "#00d2ff";

                ctx.shadowBlur = 10;

                ctx.shadowColor =
                    "#00d2ff";

                ctx.stroke();


                /* FILL */

                ctx.lineTo(
                    width,
                    baseline
                );


                ctx.lineTo(
                    0,
                    baseline
                );


                ctx.closePath();


                const gradient =
                    ctx.createLinearGradient(
                        0,
                        0,
                        0,
                        height
                    );


                gradient.addColorStop(
                    0,
                    "rgba(0,210,255,.20)"
                );


                gradient.addColorStop(
                    1,
                    "rgba(0,210,255,0)"
                );


                ctx.shadowBlur = 0;

                ctx.fillStyle =
                    gradient;

                ctx.fill();


                /* LIVE POINT */

                const last =
                    points[
                        points.length - 1
                    ];


                const px =
                    width - 2;


                const py =
                    height * 0.10 +
                    last *
                    height * 0.58;


                ctx.beginPath();


                ctx.arc(
                    px,
                    py,
                    3,
                    0,
                    Math.PI * 2
                );


                ctx.fillStyle =
                    "#00ff9d";

                ctx.shadowBlur = 12;

                ctx.shadowColor =
                    "#00ff9d";

                ctx.fill();

            };


        activityCanvas._renaiUpdate =
            function () {

                if (document.hidden) return;


                points.shift();


                const previous =
                    points[
                        points.length - 1
                    ] || 0.5;


                const target =
                    state.ai.activity;


                const next =
                    clamp(
                        previous +
                        (
                            target -
                            previous
                        ) * 0.16 +
                        random(-0.12, 0.12),
                        0.05,
                        0.95
                    );


                points.push(next);

            };

    }


    /* ======================================================================
       12. AI CORE RADAR
       ====================================================================== */

    function initializeRadar() {

        if (!radarCanvas) return;


        const ctx =
            radarCanvas.getContext("2d");


        let width = 0;
        let height = 0;


        const particles =
            Array.from(
                {
                    length:
                        isMobile()
                            ? CONFIG.particlesMobile
                            : CONFIG.particlesDesktop
                },
                () => ({

                    angle:
                        random(
                            0,
                            Math.PI * 2
                        ),

                    radius:
                        random(
                            35,
                            isMobile()
                                ? 115
                                : 145
                        ),

                    speed:
                        random(
                            0.0015,
                            0.006
                        ),

                    size:
                        random(
                            0.8,
                            2.1
                        ),

                    alpha:
                        random(
                            0.35,
                            1
                        )

                })
            );


        function resize() {

            const rect =
                radarCanvas.getBoundingClientRect();


            const dpr =
                getDPR();


            width =
                rect.width;


            height =
                rect.height;


            radarCanvas.width =
                width * dpr;


            radarCanvas.height =
                height * dpr;


            ctx.setTransform(
                dpr,
                0,
                0,
                dpr,
                0,
                0
            );

        }


        window.addEventListener(
            "resize",
            resize,
            { passive: true }
        );


        resize();


        radarCanvas._renaiDraw =
            function () {

                if (
                    document.hidden ||
                    width <= 0 ||
                    height <= 0
                ) return;


                ctx.clearRect(
                    0,
                    0,
                    width,
                    height
                );


                const cx =
                    width / 2;


                const cy =
                    height / 2;


                /* RADAR RINGS */

                ctx.save();

                ctx.strokeStyle =
                    "rgba(0,210,255,.08)";

                ctx.lineWidth = 1;


                for (
                    let radius = 40;
                    radius <
                    Math.min(width, height) / 2;
                    radius += 35
                ) {

                    ctx.beginPath();

                    ctx.arc(
                        cx,
                        cy,
                        radius,
                        0,
                        Math.PI * 2
                    );

                    ctx.stroke();

                }


                /* CROSSHAIR */

                ctx.strokeStyle =
                    "rgba(0,210,255,.07)";


                ctx.beginPath();

                ctx.moveTo(
                    cx,
                    0
                );

                ctx.lineTo(
                    cx,
                    height
                );

                ctx.moveTo(
                    0,
                    cy
                );

                ctx.lineTo(
                    width,
                    cy
                );

                ctx.stroke();


                ctx.restore();


                /* PARTICLES */

                particles.forEach(
                    particle => {

                        particle.angle +=
                            particle.speed *
                            (
                                0.6 +
                                state.ai.load / 100
                            );


                        const pulse =
                            1 +
                            Math.sin(
                                performance.now() *
                                0.002 +
                                particle.angle
                            ) * 0.15;


                        const x =
                            cx +
                            Math.cos(
                                particle.angle
                            ) *
                            particle.radius *
                            pulse;


                        const y =
                            cy +
                            Math.sin(
                                particle.angle
                            ) *
                            particle.radius *
                            pulse;


                        ctx.beginPath();


                        ctx.arc(
                            x,
                            y,
                            particle.size,
                            0,
                            Math.PI * 2
                        );


                        ctx.fillStyle =
                            `rgba(0,255,157,${particle.alpha})`;


                        ctx.shadowBlur = 8;

                        ctx.shadowColor =
                            "#00ff9d";

                        ctx.fill();

                    }
                );

            };

    }


    /* ======================================================================
       13. GLOBAL AI NETWORK
       ====================================================================== */

    function initializeWorldNetwork() {

        if (!worldCanvas) return;


        const ctx =
            worldCanvas.getContext("2d");


        let width = 0;
        let height = 0;


        let nodes = [];


        function createNodes() {

            const count =
                isMobile()
                    ? CONFIG.networkNodesMobile
                    : CONFIG.networkNodesDesktop;


            nodes =
                Array.from(
                    {
                        length: count
                    },
                    () => ({

                        x:
                            random(0, width),

                        y:
                            random(0, height),

                        vx:
                            random(-0.28, 0.28),

                        vy:
                            random(-0.18, 0.18),

                        active:
                            Math.random() > 0.72,

                        pulse:
                            random(0, Math.PI * 2)

                    })
                );

        }


        function resize() {

            const rect =
                worldCanvas.getBoundingClientRect();


            const dpr =
                getDPR();


            width =
                Math.max(
                    1,
                    rect.width
                );


            height =
                Math.max(
                    80,
                    rect.height
                );


            worldCanvas.width =
                width * dpr;


            worldCanvas.height =
                height * dpr;


            ctx.setTransform(
                dpr,
                0,
                0,
                dpr,
                0,
                0
            );


            createNodes();

        }


        window.addEventListener(
            "resize",
            resize,
            { passive: true }
        );


        resize();


        worldCanvas._renaiDraw =
            function () {

                if (
                    document.hidden ||
                    width <= 0 ||
                    height <= 0
                ) return;


                ctx.clearRect(
                    0,
                    0,
                    width,
                    height
                );


                /* UPDATE NODES */

                nodes.forEach(
                    node => {

                        node.x +=
                            node.vx *
                            (
                                state.network.download /
                                18
                            );


                        node.y +=
                            node.vy;


                        node.pulse += 0.035;


                        if (
                            node.x < 0 ||
                            node.x > width
                        ) {

                            node.vx *= -1;

                        }


                        if (
                            node.y < 0 ||
                            node.y > height
                        ) {

                            node.vy *= -1;

                        }


                        if (
                            Math.random() <
                            0.002
                        ) {

                            node.active =
                                !node.active;

                        }

                    }
                );


                /* CONNECTIONS */

                for (
                    let i = 0;
                    i < nodes.length;
                    i++
                ) {

                    for (
                        let j = i + 1;
                        j < nodes.length;
                        j++
                    ) {

                        const a =
                            nodes[i];


                        const b =
                            nodes[j];


                        const distance =
                            Math.hypot(
                                a.x - b.x,
                                a.y - b.y
                            );


                        if (
                            distance < 82
                        ) {

                            const opacity =
                                (
                                    1 -
                                    distance / 82
                                ) * 0.25;


                            ctx.beginPath();


                            ctx.moveTo(
                                a.x,
                                a.y
                            );


                            ctx.lineTo(
                                b.x,
                                b.y
                            );


                            ctx.strokeStyle =
                                `rgba(0,210,255,${opacity})`;


                            ctx.lineWidth = 0.7;

                            ctx.stroke();

                        }

                    }

                }


                /* NODES */

                nodes.forEach(
                    node => {

                        const pulse =
                            node.active
                                ? 1 +
                                  Math.sin(
                                      node.pulse
                                  ) * 0.35
                                : 1;


                        ctx.beginPath();


                        ctx.arc(
                            node.x,
                            node.y,
                            (
                                node.active
                                    ? 2.1
                                    : 1.3
                            ) * pulse,
                            0,
                            Math.PI * 2
                        );


                        ctx.fillStyle =
                            node.active
                                ? "#00ff9d"
                                : "#00d2ff";


                        ctx.shadowBlur =
                            node.active
                                ? 10
                                : 5;


                        ctx.shadowColor =
                            node.active
                                ? "#00ff9d"
                                : "#00d2ff";


                        ctx.fill();

                    }
                );

            };

    }


    /* ======================================================================
       14. RENAI ROUTER ENGINE
       ====================================================================== */

    function initializeRouterFlow() {

        const flow =
            document.querySelector(
                ".router-flow-line"
            );


        if (!flow) return;


        const nodes =
            Array.from(
                flow.querySelectorAll(
                    ".router-node"
                )
            );


        if (!nodes.length) return;


        function activateNode(index) {

            nodes.forEach(
                node => {

                    node.classList.remove(
                        "router-node-active"
                    );

                }
            );


            if (nodes[index]) {

                nodes[index].classList.add(
                    "router-node-active"
                );

            }

        }


        function animateFlow() {

            state.router.flowStep++;


            const step =
                state.router.flowStep %
                nodes.length;


            activateNode(step);


            /*
             * Flow:
             *
             * REQUEST
             *    ↓
             * RENAI ROUTER
             *    ↓
             * AI ENGINE
             *    ↓
             * OUTPUT
             */


            if (step === 1) {

                state.router.status =
                    "ANALYZING";

            }


            if (step === 2) {

                state.router.status =
                    "EXECUTING";

            }


            if (step === 3) {

                state.router.status =
                    "OUTPUT";

                state.router.requests +=
                    randomInt(18, 72);

                state.router.processed +=
                    randomInt(12, 64);

            }


            if (step === 0) {

                state.router.status =
                    "ROUTING";

            }


            updateRouterEngineVisual();

        }


        activateNode(0);


        setInterval(
            animateFlow,
            CONFIG.routerFlowInterval
        );

    }


    /* ======================================================================
       15. ROUTER INTELLIGENCE
       ====================================================================== */

    function updateRouterState() {

        state.router.load =
            smooth(
                state.router.load,
                clamp(
                    state.ai.load +
                    random(-12, 12),
                    38,
                    96
                ),
                0.12
            );


        const engines = [

            {
                name: "RENAI GVTL",
                load: state.ecosystem.gvtl
            },

            {
                name: "AUROAI GVTL",
                load: state.ecosystem.auro
            },

            {
                name: "SILVAI GVTL",
                load: state.ecosystem.silv
            },

            {
                name: "FANAI GVTL",
                load: state.ecosystem.fan
            },

            {
                name: "DIANAI GVTL",
                load: state.ecosystem.dian
            },

            {
                name: "NARENDAI GVTL",
                load: state.ecosystem.narend
            }

        ];


        /*
         * Router memilih engine berdasarkan
         * workload tertinggi untuk simulasi.
         */

        engines.sort(
            (a, b) =>
                b.load - a.load
        );


        state.router.activeEngine =
            engines[0].name;


        updateRouterEngineVisual();

    }


    function updateRouterEngineVisual() {

        const routerNode =
            document.querySelector(
                ".ecosystem-node.router"
            );


        if (routerNode) {

            const metric =
                routerNode.querySelector(
                    ".ecosystem-node-metric strong"
                );


            if (metric) {

                metric.textContent =
                    `${Math.round(state.router.load)}%`;

            }


            const bar =
                routerNode.querySelector(
                    ".ecosystem-load span"
                );


            if (bar) {

                bar.style.width =
                    `${state.router.load}%`;

            }

        }


        /*
         * Tambahkan informasi engine aktif
         * tanpa mengubah HTML struktur utama.
         */

        const routerDescription =
            document.querySelector(
                ".ecosystem-node.router .ecosystem-node-description"
            );


        if (routerDescription) {

            routerDescription.textContent =
                `Hybrid intelligence routing active — ${state.router.activeEngine} selected.`;

        }

    }


    /* ======================================================================
       16. ECOSYSTEM ACTIVITY
       ====================================================================== */

    function initializeEcosystemActivity() {

        const nodes = {

            gvtl:
                document.querySelector(
                    ".ecosystem-node.gvtl"
                ),

            auro:
                document.querySelector(
                    ".ecosystem-node.auro"
                ),

            silv:
                document.querySelector(
                    ".ecosystem-node.silv"
                ),

            fan:
                document.querySelector(
                    ".ecosystem-node.fan"
                ),

            dian:
                document.querySelector(
                    ".ecosystem-node.dian"
                ),

            narend:
                document.querySelector(
                    ".ecosystem-node.narend"
                )

        };


        const stateKeys = {

            gvtl: "gvtl",

            auro: "auro",

            silv: "silv",

            fan: "fan",

            dian: "dian",

            narend: "narend"

        };


        function update() {

            Object.keys(nodes).forEach(
                key => {

                    if (!nodes[key]) return;


                    const dataKey =
                        stateKeys[key];


                    const target =
                        clamp(
                            state.ai.load +
                            random(-28, 22),
                            22,
                            96
                        );


                    state.ecosystem[dataKey] =
                        smooth(
                            state.ecosystem[dataKey],
                            target,
                            0.12
                        );


                    const metric =
                        nodes[key].querySelector(
                            ".ecosystem-node-metric strong"
                        );


                    if (metric) {

                        metric.textContent =
                            `${Math.round(
                                state.ecosystem[dataKey]
                            )}%`;

                    }


                    const bar =
                        nodes[key].querySelector(
                            ".ecosystem-load span"
                        );


                    if (bar) {

                        bar.style.width =
                            `${state.ecosystem[dataKey]}%`;

                    }


                    const status =
                        nodes[key].querySelector(
                            ".ecosystem-node-status"
                        );


                    if (status) {

                        status.textContent =
                            state.ecosystem[dataKey] > 25
                                ? "ONLINE"
                                : "STANDBY";

                    }

                }
            );


            updateRouterState();

        }


        update();


        setInterval(
            update,
            CONFIG.ecosystemPulseInterval
        );

    }


    /* ======================================================================
       17. TERMINAL ENGINE
       ====================================================================== */

    function initializeTerminal() {

        if (!terminal) return;


        const messages = [

            {
                type: "INFO",
                text:
                    "Neural nodes synchronized."
            },

            {
                type: "SYSTEM",
                text:
                    "RENAI GVTL Core heartbeat verified."
            },

            {
                type: "INFO",
                text:
                    "Real-time inference pipeline active."
            },

            {
                type: "CORE",
                text:
                    "AI Core processing neural workload."
            },

            {
                type: "ROUTER",
                text:
                    "RENAI Router evaluating model workload."
            },

            {
                type: "ROUTER",
                text:
                    "Optimal AI engine selected."
            },

            {
                type: "INFO",
                text:
                    "Metadata policy engine synchronized."
            },

            {
                type: "INFO",
                text:
                    "Telemetry stream synchronized."
            },

            {
                type: "CORE",
                text:
                    "Neural activity pattern updated."
            },

            {
                type: "SYSTEM",
                text:
                    "Background integrity scan completed."
            },

            {
                type: "NETWORK",
                text:
                    "Global AI network node handshake verified."
            },

            {
                type: "INFO",
                text:
                    "AI ecosystem operating within nominal range."
            }

        ];


        function addLog() {

            const message =
                messages[
                    randomInt(
                        0,
                        messages.length - 1
                    )
                ];


            const now =
                new Date().toLocaleTimeString(
                    "en-US",
                    {
                        hour12: false
                    }
                );


            const line =
                document.createElement(
                    "div"
                );


            line.className =
                `terminal-line ${message.type.toLowerCase()}`;


            line.textContent =
                `[${now}] [${message.type}] ${message.text}`;


            terminal.appendChild(
                line
            );


            while (
                terminal.children.length > 16
            ) {

                terminal.removeChild(
                    terminal.firstElementChild
                );

            }


            terminal.scrollTop =
                terminal.scrollHeight;

        }


        addLog();


        setInterval(
            addLog,
            CONFIG.terminalInterval
        );

    }


    /* ======================================================================
       18. NOTIFICATION CENTER
       ====================================================================== */

    function initializeNotifications() {

        if (!notificationList) return;


        const notifications = [

            {
                type: "success",
                text:
                    "AI CORE ONLINE"
            },

            {
                type: "info",
                text:
                    "NEURAL NETWORK SYNCHRONIZED"
            },

            {
                type: "success",
                text:
                    "SYSTEM STABLE"
            },

            {
                type: "info",
                text:
                    "GLOBAL NODE CONNECTED"
            },

            {
                type: "success",
                text:
                    "SECURITY MATRIX ACTIVE"
            },

            {
                type: "info",
                text:
                    "TELEMETRY STREAM ACTIVE"
            },

            {
                type: "info",
                text:
                    "RENAI ROUTER ROUTING REQUEST"
            },

            {
                type: "success",
                text:
                    "AI ENGINE RESPONSE RECEIVED"
            },

            {
                type: "info",
                text:
                    "ECOSYSTEM NODE LOAD UPDATED"
            }

        ];


        function pushNotification() {

            const data =
                notifications[
                    randomInt(
                        0,
                        notifications.length - 1
                    )
                ];


            const element =
                document.createElement(
                    "div"
                );


            element.className =
                `notification ${data.type}`;


            element.innerHTML =
                `<span>●</span> ${data.text}`;


            notificationList.prepend(
                element
            );


            while (
                notificationList.children.length > 4
            ) {

                notificationList.removeChild(
                    notificationList.lastElementChild
                );

            }

        }


        setInterval(
            pushNotification,
            CONFIG.notificationInterval
        );

    }


    /* ======================================================================
       19. PERFORMANCE MATRIX
       ====================================================================== */

    function initializePerformanceMatrix() {

        const matrix =
            $("performanceMatrix");

        if (!matrix) return;


        const inference =
            $("matrixInference");

        const operations =
            $("matrixOperations");

        const processed =
            $("matrixProcessed");

        const nodes =
            $("matrixNodes");


        function updateMatrix() {

            if (document.hidden) return;


            if (inference) {

                inference.textContent =
                    formatLargeNumber(
                        state.counters.inference
                    );

            }


            if (operations) {

                operations.textContent =
                    formatLargeNumber(
                        state.counters.neuralOps
                    );

            }


            if (processed) {

                processed.textContent =
                    formatLargeNumber(
                        state.counters.processed
                    );

            }


            if (nodes) {

                nodes.textContent =
                    state.counters.nodes.toLocaleString();

            }

        }


        updateMatrix();


        setInterval(
            updateMatrix,
            900
        );

    }


    /* ======================================================================
       20. REAL FPS MONITOR
       ====================================================================== */

    function updateFPS(timestamp) {

        state.frameCount++;


        state.fpsAccumulator++;


        const elapsed =
            timestamp -
            state.fpsTimer;


        if (elapsed >= 1000) {

            state.fps =
                clamp(
                    (
                        state.fpsAccumulator *
                        1000 /
                        elapsed
                    ),
                    1,
                    120
                );


            state.fpsAccumulator = 0;

            state.fpsTimer =
                timestamp;

        }


        state.deltaTime =
            timestamp -
            state.lastFrameTime;


        state.lastFrameTime =
            timestamp;


        /*
         * Untuk simulasi visual,
         * FPS target tetap 60.
         *
         * Namun nilai di UI membaca
         * performa aktual browser.
         */

        state.visual.fps =
            state.fps;

    }


    /* ======================================================================
       21. MASTER RENDER LOOP
       ====================================================================== */

    function renderLoop(timestamp) {

        updateFPS(timestamp);


        if (!document.hidden) {

            if (
                activityCanvas &&
                activityCanvas._renaiDraw
            ) {

                activityCanvas._renaiDraw();

            }


            if (
                radarCanvas &&
                radarCanvas._renaiDraw
            ) {

                radarCanvas._renaiDraw();

            }


            if (
                worldCanvas &&
                worldCanvas._renaiDraw
            ) {

                worldCanvas._renaiDraw();

            }

        }


        requestAnimationFrame(
            renderLoop
        );

    }


    /* ======================================================================
       22. ACTIVITY DATA UPDATE
       ====================================================================== */

    setInterval(() => {

        if (
            activityCanvas &&
            activityCanvas._renaiUpdate
        ) {

            activityCanvas._renaiUpdate();

        }

    }, CONFIG.chartUpdateInterval);


    /* ======================================================================
       23. VISIBILITY OPTIMIZATION
       ====================================================================== */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (!document.hidden) {

                state.lastFrameTime =
                    performance.now();

                state.fpsTimer =
                    performance.now();

                state.fpsAccumulator = 0;

                updateClock();

                renderTelemetry();

            }

        }
    );


    /* ======================================================================
       24. RESIZE OPTIMIZATION
       ====================================================================== */

    let resizeTimer = null;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    () => {

                        if (
                            activityCanvas &&
                            activityCanvas._renaiDraw
                        ) {

                            activityCanvas._renaiDraw();

                        }


                        if (
                            radarCanvas &&
                            radarCanvas._renaiDraw
                        ) {

                            radarCanvas._renaiDraw();

                        }


                        if (
                            worldCanvas &&
                            worldCanvas._renaiDraw
                        ) {

                            worldCanvas._renaiDraw();

                        }

                    },
                    120
                );

        },
        { passive: true }
    );


    /* ======================================================================
       25. INITIAL START
       ====================================================================== */

    startBootSequence();


    /* ======================================================================
       26. START MASTER RENDER ENGINE
       ====================================================================== */

    requestAnimationFrame(
        renderLoop
    );

});