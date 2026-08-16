document.addEventListener("DOMContentLoaded", () => {
    // 1. BOOTLOADER SEQUENCE (MEMPERBAIKI BUG LOADER)
    const bootScreen = document.getElementById("boot-screen");
    const progressBar = document.getElementById("loading-progress");
    const loadText = document.getElementById("loading-text");
    const dashboard = document.getElementById("dashboard");
    
    let progress = 0;
    const bootInterval = setInterval(() => {
        progress += Math.random() * 10 + 5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(bootInterval);
            if (progressBar) progressBar.style.width = "100%";
            if (loadText) loadText.innerText = "System Ready. Launching Dashboard...";
            
            setTimeout(() => {
                if (bootScreen) bootScreen.style.opacity = "0";
                setTimeout(() => {
                    if (bootScreen) bootScreen.style.visibility = "hidden";
                    if (dashboard) dashboard.classList.add("active");
                    initSystem();
                }, 600);
            }, 500);
        } else {
            if (progressBar) progressBar.style.width = progress + "%";
            const messages = [
                "Initializing AI Kernel...",
                "Allocating VRAM...",
                "Syncing Neural Networks...",
                "Securing Quantum Channels..."
            ];
            if (loadText) loadText.innerText = messages[Math.floor(progress / 25)] + ` [${Math.floor(progress)}%]`;
        }
    }, 150);

    // 2. MAIN SYSTEM INITIALIZATION
    function initSystem() {
        startClock();
        startTelemetry();
        initActivityChart();
        initRadarCanvas();
        initWorldNetwork();
        startTerminalLogs();
    }

    // --- CLOCK & UPTIME ---
    let uptimeSeconds = 0;
    function startClock() {
        setInterval(() => {
            const now = new Date();
            const dateEl = document.getElementById("date");
            const timeEl = document.getElementById("time");
            const uptimeEl = document.getElementById("uptime");
            
            if (dateEl) dateEl.innerText = now.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).toUpperCase();
            if (timeEl) timeEl.innerText = now.toLocaleTimeString('en-US', { hour12: false });
            
            uptimeSeconds++;
            const h = String(Math.floor(uptimeSeconds / 3600)).padStart(2, '0');
            const m = String(Math.floor((uptimeSeconds % 3600) / 60)).padStart(2, '0');
            const s = String(uptimeSeconds % 60).padStart(2, '0');
            if (uptimeEl) uptimeEl.innerText = `${h}:${m}:${s}`;
        }, 1000);
    }

    // --- TELEMETRY DATA (MEMBUAT ANGKA HIDUP) ---
    function startTelemetry() {
        setInterval(() => {
            const setVal = (id, val) => {
                const el = document.getElementById(id);
                if (el) el.innerText = val;
            };

            // GPU Data
            setVal("gpuUsage", Math.floor(60 + Math.random() * 35) + "%");
            setVal("gpuClock", Math.floor(10000 + Math.random() * 900) + " MHz");
            setVal("gpuTemp", Math.floor(65 + Math.random() * 15) + "°C");
            setVal("gpuPower", Math.floor(5500 + Math.random() * 1000) + " W");
            setVal("vram", Math.floor(8000 + Math.random() * 1500) + " / 100 TB");
            
            // CPU Data
            setVal("cpuUsage", Math.floor(40 + Math.random() * 40) + "%");
            setVal("cpuClock", (4.5 + Math.random() * 0.5).toFixed(2) + " GHz");
            setVal("cpuTemp", Math.floor(55 + Math.random() * 20) + "°C");
            setVal("ramUsage", Math.floor(6000 + Math.random() * 1000) + " / 100 TB");
            setVal("storageUsage", Math.floor(9000 + Math.random() * 500) + " / 100 TB");
            
            // HUD Bottom Data
            setVal("uploadSpeed", (1.5 + Math.random() * 1.5).toFixed(2) + " GB/s");
            setVal("downloadSpeed", (3.5 + Math.random() * 2.5).toFixed(2) + " GB/s");
            setVal("latency", Math.floor(2 + Math.random() * 5) + " ms");
            setVal("fps", Math.floor(235 + Math.random() * 10)); // Fake FPS Counter 
            setVal("aiLoad", Math.floor(50 + Math.random() * 45) + "%");
            setVal("totalPower", Math.floor(5000 + Math.random() * 2000) + " W");
        }, 1000); // Update setiap 1 detik agar CPU ringan dan animasi canvas tetap 60fps
    }

    // --- ACTIVITY CHART (CANVAS PURE 60FPS UNTUK GRAFIK ATAS) ---
    
    
    document.addEventListener("DOMContentLoaded", () => {
    // 1. BOOTLOADER SEQUENCE (MEMPERBAIKI BUG LOADER)
    const bootScreen = document.getElementById("boot-screen");
    const progressBar = document.getElementById("loading-progress");
    const loadText = document.getElementById("loading-text");
    const dashboard = document.getElementById("dashboard");
    
    let progress = 0;
    const bootInterval = setInterval(() => {
        progress += Math.random() * 10 + 5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(bootInterval);
            if (progressBar) progressBar.style.width = "100%";
            if (loadText) loadText.innerText = "System Ready. Launching Dashboard...";
            
            setTimeout(() => {
                if (bootScreen) bootScreen.style.opacity = "0";
                setTimeout(() => {
                    if (bootScreen) bootScreen.style.visibility = "hidden";
                    if (dashboard) dashboard.classList.add("active");
                    initSystem();
                }, 600);
            }, 500);
        } else {
            if (progressBar) progressBar.style.width = progress + "%";
            const messages = [
                "Initializing AI Kernel...",
                "Allocating VRAM...",
                "Syncing Neural Networks...",
                "Securing Quantum Channels..."
            ];
            if (loadText) loadText.innerText = messages[Math.floor(progress / 25)] + ` [${Math.floor(progress)}%]`;
        }
    }, 150);

    // 2. MAIN SYSTEM INITIALIZATION
    function initSystem() {
        startClock();
        startTelemetry();
        initActivityChart();
        initRadarCanvas();
        initWorldNetwork();
        startTerminalLogs();
    }

    // --- CLOCK & UPTIME ---
    let uptimeSeconds = 0;
    function startClock() {
        setInterval(() => {
            const now = new Date();
            const dateEl = document.getElementById("date");
            const timeEl = document.getElementById("time");
            const uptimeEl = document.getElementById("uptime");
            
            if (dateEl) dateEl.innerText = now.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).toUpperCase();
            if (timeEl) timeEl.innerText = now.toLocaleTimeString('en-US', { hour12: false });
            
            uptimeSeconds++;
            const h = String(Math.floor(uptimeSeconds / 3600)).padStart(2, '0');
            const m = String(Math.floor((uptimeSeconds % 3600) / 60)).padStart(2, '0');
            const s = String(uptimeSeconds % 60).padStart(2, '0');
            if (uptimeEl) uptimeEl.innerText = `${h}:${m}:${s}`;
        }, 1000);
    }

    // --- TELEMETRY DATA (MEMBUAT ANGKA HIDUP) ---
    function startTelemetry() {
        setInterval(() => {
            const setVal = (id, val) => {
                const el = document.getElementById(id);
                if (el) el.innerText = val;
            };

            // AI Core Energy (Bergerak acak antara 45% sampai 100%)
            setVal("coreEnergy", Math.floor(45 + Math.random() * 56) + "%");

            // GPU Data
            setVal("gpuUsage", Math.floor(60 + Math.random() * 35) + "%");
            setVal("gpuClock", Math.floor(10000 + Math.random() * 900) + " MHz");
            setVal("gpuTemp", Math.floor(65 + Math.random() * 15) + "°C");
            setVal("gpuPower", Math.floor(5500 + Math.random() * 1000) + " W");
            setVal("vram", Math.floor(8000 + Math.random() * 1500) + " / 100 TB");
            
            // CPU Data
            setVal("cpuUsage", Math.floor(40 + Math.random() * 40) + "%");
            setVal("cpuClock", (4.5 + Math.random() * 0.5).toFixed(2) + " GHz");
            setVal("cpuTemp", Math.floor(55 + Math.random() * 20) + "°C");
            setVal("ramUsage", Math.floor(6000 + Math.random() * 1000) + " / 100 TB");
            setVal("storageUsage", Math.floor(9000 + Math.random() * 500) + " / 100 TB");
            
            // HUD Bottom Data
            setVal("uploadSpeed", (1.5 + Math.random() * 1.5).toFixed(2) + " GB/s");
            setVal("downloadSpeed", (3.5 + Math.random() * 2.5).toFixed(2) + " GB/s");
            setVal("latency", Math.floor(2 + Math.random() * 5) + " ms");
            setVal("fps", Math.floor(235 + Math.random() * 10)); // Fake FPS Counter 
            setVal("aiLoad", Math.floor(50 + Math.random() * 45) + "%");
            setVal("totalPower", Math.floor(5000 + Math.random() * 2000) + " W");
        }, 1000); // Update setiap 1 detik agar CPU ringan
    }

    // --- ACTIVITY CHART (CANVAS PURE 60FPS UNTUK GRAFIK ATAS) ---
    function initActivityChart() {
        const canvas = document.getElementById("activityChart");
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let width, height;
        let points = [];
        const segments = 50;
        let offset = 0;

        function resize() {
            width = canvas.width = canvas.parentElement.clientWidth;
            height = canvas.height = canvas.parentElement.clientHeight - 30; 
            if(points.length === 0) {
                for(let i=0; i<=segments; i++) points.push(Math.random());
            }
        }
        window.addEventListener('resize', resize);
        resize();

        function draw() {
            ctx.clearRect(0, 0, width, height);
            
            offset -= 0.1; 
            if (offset <= -1) {
                offset = 0;
                points.shift();
                points.push(Math.random());
            }

            ctx.beginPath();
            const segmentWidth = width / segments;
            
            for(let i=0; i<=segments; i++) {
                const x = (i + offset) * segmentWidth;
                const y1 = points[i] * height * 0.7 + height * 0.15;
                
                if (i === 0) {
                    ctx.moveTo(x, y1);
                } else {
                    const prevX = (i - 1 + offset) * segmentWidth;
                    const prevY = points[i-1] * height * 0.7 + height * 0.15;
                    const xc = (prevX + x) / 2;
                    const yc = (prevY + y1) / 2;
                    ctx.quadraticCurveTo(prevX, prevY, xc, yc);
                }
            }

            // Styling Garis Neon
            ctx.lineWidth = 2.5;
            ctx.strokeStyle = "#00d2ff";
            ctx.shadowBlur = 12;
            ctx.shadowColor = "#00d2ff";
            ctx.stroke();
            
            ctx.lineTo(width, height);
            ctx.lineTo(0, height);
            ctx.closePath();
            
            const grad = ctx.createLinearGradient(0, 0, 0, height);
            grad.addColorStop(0, "rgba(0, 210, 255, 0.25)");
            grad.addColorStop(1, "rgba(0, 210, 255, 0.0)");
            ctx.fillStyle = grad;
            ctx.shadowBlur = 0; 
            ctx.fill();

            requestAnimationFrame(draw);
        }
        requestAnimationFrame(draw);
    }

    // --- RADAR TENGAH (PARTIKEL MENGORBIT 60FPS) ---
    function initRadarCanvas() {
        const canvas = document.getElementById("radarCanvas");
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        
        function resizeRadar() {
            canvas.width = canvas.clientWidth || 320;
            canvas.height = canvas.clientHeight || 320;
        }
        window.addEventListener('resize', resizeRadar);
        resizeRadar();

        const particles = Array.from({length: 30}, () => ({
            angle: Math.random() * Math.PI * 2,
            radius: 40 + Math.random() * 100,
            speed: 0.005 + Math.random() * 0.015,
            size: 1 + Math.random() * 1.5
        }));

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const cx = canvas.width / 2;
            const cy = canvas.height / 2;

            particles.forEach(p => {
                p.angle += p.speed;
                const x = cx + Math.cos(p.angle) * p.radius;
                const y = cy + Math.sin(p.angle) * p.radius;

                ctx.beginPath();
                ctx.arc(x, y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = "#00ff9d";
                ctx.shadowBlur = 8;
                ctx.shadowColor = "#00ff9d";
                ctx.fill();
            });

            requestAnimationFrame(draw);
        }
        requestAnimationFrame(draw);
    }

    // --- GLOBAL AI NETWORK (CANVAS JARINGAN BAWAH 60FPS) ---
    function initWorldNetwork() {
        const canvas = document.getElementById("worldCanvas");
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let width, height;
        
        function resize() {
            width = canvas.width = canvas.parentElement.clientWidth;
            height = canvas.height = canvas.parentElement.clientHeight || 100;
        }
        window.addEventListener('resize', resize);
        resize();

        const nodes = Array.from({length: 35}, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 1.2,
            vy: (Math.random() - 0.5) * 1.2
        }));

        function draw() {
            ctx.clearRect(0, 0, width, height);
            
            nodes.forEach(n => {
                n.x += n.vx;
                n.y += n.vy;
                if (n.x <= 0 || n.x >= width) n.vx *= -1;
                if (n.y <= 0 || n.y >= height) n.vy *= -1;

                ctx.beginPath();
                ctx.arc(n.x, n.y, 1.5, 0, Math.PI*2);
                ctx.fillStyle = "#00ff9d";
                ctx.shadowBlur = 6;
                ctx.shadowColor = "#00ff9d";
                ctx.fill();
            });

            ctx.lineWidth = 0.8;
            ctx.strokeStyle = "rgba(0, 212, 255, 0.3)";
            ctx.shadowBlur = 0;
            
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
                    if (dist < 60) { 
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(draw);
        }
        requestAnimationFrame(draw);
    }

    // --- TERMINAL LOGS MENGALIR ---
    function startTerminalLogs() {
        const terminal = document.getElementById("terminalLog");
        if (!terminal) return;
        
        const msgs = [
            "[INFO] Neural nodes synchronized perfectly.",
            "[WARN] Bandwidth fluctuation detected in Sector 7.",
            "[INFO] Security protocols operating at MAX.",
            "[INFO] AI Core processing real-time data stream.",
            "[INFO] Background firewall scan completed.",
            "[WARN] Minor GPU temp spike isolated and cooled.",
            "[INFO] Cyber Neon glow shaders compiled optimized."
        ];

        setInterval(() => {
            const timeEl = document.getElementById("time");
            const timeStr = timeEl ? timeEl.innerText : "00:00:00";
            
            const div = document.createElement("div");
            const msg = msgs[Math.floor(Math.random() * msgs.length)];
            div.innerText = `[${timeStr}] ${msg}`;
            
            if (msg.includes("[WARN]")) {
                div.style.color = "#ffb700";
                div.style.textShadow = "0 0 4px #ffb700";
            } else {
                div.style.color = "#00d2ff";
            }

            terminal.appendChild(div);
            
            if (terminal.childElementCount > 15) {
                terminal.removeChild(terminal.firstElementChild);
            }
            
            terminal.scrollTop = terminal.scrollHeight;
        }, 2500);
    }
});
    
    
    
    
    function initActivityChart() {
        const canvas = document.getElementById("activityChart");
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let width, height;
        let points = [];
        const segments = 50;
        let offset = 0;

        function resize() {
            width = canvas.width = canvas.parentElement.clientWidth;
            height = canvas.height = canvas.parentElement.clientHeight - 30; 
            if(points.length === 0) {
                for(let i=0; i<=segments; i++) points.push(Math.random());
            }
        }
        window.addEventListener('resize', resize);
        resize();

        function draw() {
            ctx.clearRect(0, 0, width, height);
            
            offset -= 0.1; // Kecepatan geser gelombang
            if (offset <= -1) {
                offset = 0;
                points.shift();
                points.push(Math.random());
            }

            ctx.beginPath();
            const segmentWidth = width / segments;
            
            for(let i=0; i<=segments; i++) {
                const x = (i + offset) * segmentWidth;
                const y1 = points[i] * height * 0.7 + height * 0.15;
                
                if (i === 0) {
                    ctx.moveTo(x, y1);
                } else {
                    // Membuat garis lebih mulus dengan curve
                    const prevX = (i - 1 + offset) * segmentWidth;
                    const prevY = points[i-1] * height * 0.7 + height * 0.15;
                    const xc = (prevX + x) / 2;
                    const yc = (prevY + y1) / 2;
                    ctx.quadraticCurveTo(prevX, prevY, xc, yc);
                }
            }

            // Styling Garis Neon
            ctx.lineWidth = 2.5;
            ctx.strokeStyle = "#00d2ff";
            ctx.shadowBlur = 12;
            ctx.shadowColor = "#00d2ff";
            ctx.stroke();
            
            // Fill warna transparan ke bawah
            ctx.lineTo(width, height);
            ctx.lineTo(0, height);
            ctx.closePath();
            
            const grad = ctx.createLinearGradient(0, 0, 0, height);
            grad.addColorStop(0, "rgba(0, 210, 255, 0.25)");
            grad.addColorStop(1, "rgba(0, 210, 255, 0.0)");
            ctx.fillStyle = grad;
            ctx.shadowBlur = 0; // Matikan shadow untuk fill agar tidak berat
            ctx.fill();

            requestAnimationFrame(draw);
        }
        requestAnimationFrame(draw);
    }

    // --- RADAR TENGAH (PARTIKEL MENGORBIT 60FPS) ---
    function initRadarCanvas() {
        const canvas = document.getElementById("radarCanvas");
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        
        function resizeRadar() {
            // Memastikan ukuran canvas sesuai dengan CSS
            canvas.width = canvas.clientWidth || 320;
            canvas.height = canvas.clientHeight || 320;
        }
        window.addEventListener('resize', resizeRadar);
        resizeRadar();

        const particles = Array.from({length: 30}, () => ({
            angle: Math.random() * Math.PI * 2,
            radius: 40 + Math.random() * 100,
            speed: 0.005 + Math.random() * 0.015,
            size: 1 + Math.random() * 1.5
        }));

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const cx = canvas.width / 2;
            const cy = canvas.height / 2;

            particles.forEach(p => {
                p.angle += p.speed;
                const x = cx + Math.cos(p.angle) * p.radius;
                const y = cy + Math.sin(p.angle) * p.radius;

                ctx.beginPath();
                ctx.arc(x, y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = "#00ff9d";
                ctx.shadowBlur = 8;
                ctx.shadowColor = "#00ff9d";
                ctx.fill();
            });

            requestAnimationFrame(draw);
        }
        requestAnimationFrame(draw);
    }

    // --- GLOBAL AI NETWORK (CANVAS JARINGAN BAWAH 60FPS) ---
    function initWorldNetwork() {
        const canvas = document.getElementById("worldCanvas");
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let width, height;
        
        function resize() {
            width = canvas.width = canvas.parentElement.clientWidth;
            height = canvas.height = canvas.parentElement.clientHeight || 100;
        }
        window.addEventListener('resize', resize);
        resize();

        const nodes = Array.from({length: 35}, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 1.2,
            vy: (Math.random() - 0.5) * 1.2
        }));

        function draw() {
            ctx.clearRect(0, 0, width, height);
            
            // Update posisi titik
            nodes.forEach(n => {
                n.x += n.vx;
                n.y += n.vy;
                if (n.x <= 0 || n.x >= width) n.vx *= -1;
                if (n.y <= 0 || n.y >= height) n.vy *= -1;

                ctx.beginPath();
                ctx.arc(n.x, n.y, 1.5, 0, Math.PI*2);
                ctx.fillStyle = "#00ff9d";
                ctx.shadowBlur = 6;
                ctx.shadowColor = "#00ff9d";
                ctx.fill();
            });

            // Tarik garis antar titik yang berdekatan
            ctx.lineWidth = 0.8;
            ctx.strokeStyle = "rgba(0, 212, 255, 0.3)";
            ctx.shadowBlur = 0;
            
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
                    if (dist < 60) { // Jarak koneksi
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(draw);
        }
        requestAnimationFrame(draw);
    }

    // --- TERMINAL LOGS MENGALIR ---
    function startTerminalLogs() {
        const terminal = document.getElementById("terminalLog");
        if (!terminal) return;
        
        const msgs = [
            "[INFO] Neural nodes synchronized perfectly.",
            "[WARN] Bandwidth fluctuation detected in Sector 7.",
            "[INFO] Security protocols operating at MAX.",
            "[INFO] AI Core processing real-time data stream.",
            "[INFO] Background firewall scan completed.",
            "[WARN] Minor GPU temp spike isolated and cooled.",
            "[INFO] Cyber Neon glow shaders compiled optimized."
        ];

        setInterval(() => {
            const timeEl = document.getElementById("time");
            const timeStr = timeEl ? timeEl.innerText : "00:00:00";
            
            const div = document.createElement("div");
            const msg = msgs[Math.floor(Math.random() * msgs.length)];
            div.innerText = `[${timeStr}] ${msg}`;
            
            if (msg.includes("[WARN]")) {
                div.style.color = "#ffb700";
                div.style.textShadow = "0 0 4px #ffb700";
            } else {
                div.style.color = "#00d2ff";
            }

            terminal.appendChild(div);
            
            // Batasi jumlah log agar tidak berat
            if (terminal.childElementCount > 15) {
                terminal.removeChild(terminal.firstElementChild);
            }
            
            // Auto scroll ke bawah
            terminal.scrollTop = terminal.scrollHeight;
        }, 2500);
    }
});
