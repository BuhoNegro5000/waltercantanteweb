/* ==========================================================================
   WALTER FLORES - CORE APP IMPLEMENTATION
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Initialize subsystems
    initPreloader();
    initAuraBackdrop();
    initGSAPAnimations();
    initAudioPlayer();
    initTourMap();
    initVideoSlider();
    initPhotoLightbox();
    initForms();
    initNavbarScroll();
});

/* ==========================================================================
   1. PRELOADER
   ========================================================================== */
function initPreloader() {
    const loader = document.getElementById("loader");
    const loaderBar = document.querySelector(".loader-bar");
    const loaderStatus = document.querySelector(".loader-status");
    
    let progress = 0;
    
    // Simulate progressive loading of assets
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 15) + 5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            loaderBar.style.width = "100%";
            loaderStatus.textContent = "Listo para comenzar";
            
            setTimeout(() => {
                loader.classList.add("loaded");
                document.body.classList.remove("loading");
            }, 600);
        } else {
            loaderBar.style.width = `${progress}%`;
            loaderStatus.textContent = `Cargando Arte y Sonido... ${progress}%`;
        }
    }, 80);

    document.body.classList.add("loading");
}

/* ==========================================================================
   2. AUDIO-REACTIVE PARTICLES CANVAS
   ========================================================================== */
let isAudioPlayingGlobal = false;
let audioBeatFactor = 1.0; // Dynamic scale from visualizer

function initAuraBackdrop() {
    const canvas = document.getElementById("particles-canvas");
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    let particlesArray = [];
    
    // Resize handler
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    
    // Note paths or custom drawings (notes and embers)
    const shapes = ['circle', 'sparkle', 'note1', 'note2'];
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + Math.random() * 100; // start below screen
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 0.8 - 0.4;
            this.speedY = -(Math.random() * 1.2 + 0.3);
            this.shape = shapes[Math.floor(Math.random() * shapes.length)];
            
            // 70% gold, 30% sky blue
            if (Math.random() > 0.3) {
                this.color = `rgba(${Math.floor(Math.random() * 50) + 205}, ${Math.floor(Math.random() * 50) + 160}, 55, ${Math.random() * 0.4 + 0.15})`; // Gold
            } else {
                this.color = `rgba(116, 172, 223, ${Math.random() * 0.4 + 0.2})`; // Argentine Blue
            }
            this.opacity = Math.random() * 0.6 + 0.2;
            this.wobble = Math.random() * 100;
            this.wobbleSpeed = Math.random() * 0.02 + 0.005;
        }
        
        update() {
            let activeSpeedY = this.speedY;
            let activeSize = this.size;
            
            // React to audio beats if playing
            if (isAudioPlayingGlobal) {
                activeSpeedY = this.speedY * (1.0 + audioBeatFactor * 1.5);
                activeSize = this.size * (1.0 + audioBeatFactor * 0.6);
            }
            
            this.y += activeSpeedY;
            this.wobble += this.wobbleSpeed;
            this.x += this.speedX + Math.sin(this.wobble) * 0.3;
            
            // Loop back to bottom if off-screen
            if (this.y < -50) {
                this.y = canvas.height + 50;
                this.x = Math.random() * canvas.width;
            }
        }
        
        draw() {
            ctx.fillStyle = this.color;
            ctx.shadowBlur = isAudioPlayingGlobal ? 10 * audioBeatFactor : 0;
            ctx.shadowColor = this.color;
            
            ctx.beginPath();
            if (this.shape === 'circle') {
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            } else if (this.shape === 'sparkle') {
                // Draw 4-point star
                const size = this.size * 2.5;
                ctx.moveTo(this.x, this.y - size);
                ctx.lineTo(this.x + size/3, this.y - size/3);
                ctx.lineTo(this.x + size, this.y);
                ctx.lineTo(this.x + size/3, this.y + size/3);
                ctx.lineTo(this.x, this.y + size);
                ctx.lineTo(this.x - size/3, this.y + size/3);
                ctx.lineTo(this.x - size, this.y);
                ctx.lineTo(this.x - size/3, this.y - size/3);
                ctx.closePath();
                ctx.fill();
            } else if (this.shape === 'note1' || this.shape === 'note2') {
                // Render small musical note SVG path procedurally
                ctx.font = `${Math.floor(this.size * 5) + 12}px serif`;
                ctx.fillText(this.shape === 'note1' ? '♩' : '♪', this.x, this.y);
            }
            
            ctx.shadowBlur = 0; // reset
        }
    }
    
    function init() {
        particlesArray = [];
        const count = Math.min(60, Math.floor(window.innerWidth / 25));
        for (let i = 0; i < count; i++) {
            particlesArray.push(new Particle());
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Render subtle vertical lines of the page layout grid or floating lights
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        
        // Slowly rotate aura lights
        const auraGold = document.querySelector(".aura-gold");
        const auraBlue = document.querySelector(".aura-blue");
        if (auraGold && auraBlue) {
            const time = Date.now() * 0.0003;
            const xGold = Math.sin(time) * 40;
            const yGold = Math.cos(time) * 40;
            const xBlue = Math.sin(time + Math.PI) * 40;
            const yBlue = Math.cos(time + Math.PI) * 40;
            
            auraGold.style.transform = `translate(${xGold}px, ${yGold}px)`;
            auraBlue.style.transform = `translate(${xBlue}px, ${yBlue}px)`;
        }
        
        requestAnimationFrame(animate);
    }
    
    init();
    animate();
}

/* ==========================================================================
   3. GSAP & SCROLL TRIGGER ANIMATIONS
   ========================================================================== */
function initGSAPAnimations() {
    // Check if libraries are loaded
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
        console.warn("GSAP libraries not loaded. Using fallback reveals.");
        setupIntersectionObserver();
        return;
    }
    
    gsap.registerPlugin(ScrollTrigger);

    // Hero Text reveals
    const letters = document.querySelectorAll(".hero-title .letter");
    gsap.from(letters, {
        y: 80,
        opacity: 0,
        duration: 1.5,
        stagger: 0.08,
        ease: "power4.out",
        delay: 0.5
    });

    gsap.from(".hero-slogan", {
        opacity: 0,
        y: 20,
        duration: 1.2,
        ease: "power2.out",
        delay: 1.6
    });

    gsap.from(".hero-description", {
        opacity: 0,
        y: 20,
        duration: 1.2,
        ease: "power2.out",
        delay: 1.9
    });

    gsap.from(".hero-ctas", {
        opacity: 0,
        y: 20,
        duration: 1.2,
        ease: "power2.out",
        delay: 2.1
    });

    // Hero background video scroll parallax
    gsap.to(".hero-video-container", {
        scrollTrigger: {
            trigger: ".hero-section",
            start: "/top top",
            end: "bottom top",
            scrub: true
        },
        yPercent: 30,
        ease: "none"
    });

    // Animate sections with class reveal
    const reveals = document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right");
    reveals.forEach(element => {
        gsap.fromTo(element, 
            {
                opacity: 0,
                y: element.classList.contains("reveal-up") ? 50 : 0,
                x: element.classList.contains("reveal-left") ? -50 : (element.classList.contains("reveal-right") ? 50 : 0)
            },
            {
                opacity: 1,
                x: 0,
                y: 0,
                scrollTrigger: {
                    trigger: element,
                    start: "/top 85%",
                    toggleActions: "play none none none"
                },
                duration: 1.2,
                ease: "power3.out"
            }
        );
    });

    // Parallax on story image
    gsap.to(".story-photo", {
        scrollTrigger: {
            trigger: ".story-section",
            start: "/top bottom",
            end: "bottom top",
            scrub: true
        },
        yPercent: -15,
        ease: "none"
    });
}

// Fallback observer if GSAP is unavailable
function setupIntersectionObserver() {
    const observerOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: "0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-active");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const elements = document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right");
    elements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   4. PREMIUM AUDIO PLAYER & SYNTHESIZER
   ========================================================================== */
function initAudioPlayer() {
    // Playlist data
    const tracks = [
        {
            title: "Regálame tu Amor",
            artist: "Walter Flores",
            art: "/WhatsApp Image 2026-07-01 at 8.17.10 AM.jpeg",
            url: "/Regalame tu amor - Walter Flores.mp3",
            chordProgressions: [[220, 261, 329, 440], [293, 349, 440, 587], [196, 246, 293, 392], [261, 329, 392, 523]]
        },
        {
            title: "En el Contestador",
            artist: "Walter Flores",
            art: "/Pulsaressalsa portada.png",
            url: "/1 EN EL CONTESTADOR.mp3.mpeg",
            chordProgressions: [[220, 261, 329, 440], [293, 349, 440, 587], [196, 246, 293, 392], [261, 329, 392, 523]]
        },
        {
            title: "Todo Comenzó para Siempre",
            artist: "Walter Flores",
            art: "/Pulsaressalsa portada.png",
            url: "/2 TODO COMENZO PARA SIEMPRE.mp3.mpeg",
            chordProgressions: [[220, 261, 329, 440], [293, 349, 440, 587], [196, 246, 293, 392], [261, 329, 392, 523]]
        },
        {
            title: "Embustera",
            artist: "Walter Flores",
            art: "/Pulsaressalsa portada.png",
            url: "/3 EMBUSTERA.mp3.mpeg",
            chordProgressions: [[220, 261, 329, 440], [293, 349, 440, 587], [196, 246, 293, 392], [261, 329, 392, 523]]
        },
        {
            title: "Diosa del Mar",
            artist: "Walter Flores",
            art: "/Pulsaressalsa portada.png",
            url: "/4 DIOSA DEL MAR.mp3 (1).mpeg",
            chordProgressions: [[220, 261, 329, 440], [293, 349, 440, 587], [196, 246, 293, 392], [261, 329, 392, 523]]
        },
        {
            title: "Mirar al Cielo",
            artist: "Walter Flores",
            art: "/Pulsaressalsa portada.png",
            url: "/5 MIRAR AL CIELO.mp3.mpeg",
            chordProgressions: [[220, 261, 329, 440], [293, 349, 440, 587], [196, 246, 293, 392], [261, 329, 392, 523]]
        }
    ];

    let currentTrackIndex = 0;
    let isPlaying = false;
    let audioContext = null;
    let isSynthMode = false; // Attempt playing real MP3 files by default, fallback to synth on CORS
    
    // Audio elements
        const audioEl = new Audio(); // Local same-origin playback does not require crossOrigin.
        audioEl.preload = "metadata";

    
    // DOM bindings
    const playerContainer = document.querySelector(".premium-player-container");
    const playBtn = document.getElementById("player-play");
    const prevBtn = document.getElementById("player-prev");
    const nextBtn = document.getElementById("player-next");
    const artImg = document.getElementById("player-art-img");
    const trackTitle = document.getElementById("player-track-title");
    const trackArtist = document.getElementById("player-track-artist");
    const timeCurrent = document.getElementById("time-current");
    const timeDuration = document.getElementById("time-duration");
    const progressWrapper = document.getElementById("progress-bar-wrapper");
    const progressFill = document.getElementById("progress-bar-fill");
    const muteBtn = document.getElementById("player-mute");
    const volumeWrapper = document.getElementById("volume-bar-wrapper");
    const volumeFill = document.getElementById("volume-bar-fill");
    const sourceBadge = document.getElementById("source-badge");

    // Init state
    updatePlayerUI();
    
    // Play / Pause event
    playBtn.addEventListener("click", () => {
        if (isPlaying) {
            pauseTrack();
        } else {
            playTrack();
        }
    });

    // Prev / Next events
    prevBtn.addEventListener("click", () => {
        changeTrack(-1);
    });
    nextBtn.addEventListener("click", () => {
        changeTrack(1);
    });

    // Album Cards Playback integration
    const albumCards = document.querySelectorAll(".album-card");
    albumCards.forEach(card => {
        card.addEventListener("click", (e) => {
            // Prevent triggering card click if user clicked a tracklist item
            if (e.target.closest(".album-tracklist-mini li")) {
                return;
            }
            const index = parseInt(card.getAttribute("data-track-index"));
            if (currentTrackIndex === index && isPlaying) {
                pauseTrack();
            } else {
                currentTrackIndex = index;
                updatePlayerUI();
                playTrack();
            }
        });
    });

    // Individual Tracklist Items Playback
    const tracklistItems = document.querySelectorAll(".album-tracklist-mini li");
    tracklistItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.stopPropagation(); // prevent card click
            const index = parseInt(item.getAttribute("data-track-index"));
            if (currentTrackIndex === index && isPlaying) {
                pauseTrack();
            } else {
                currentTrackIndex = index;
                updatePlayerUI();
                playTrack();
            }
        });
    });

    // Progress bar seeking
    progressWrapper.addEventListener("click", (e) => {
        const width = progressWrapper.clientWidth;
        const clickX = e.offsetX;
        const percentage = clickX / width;
        
        if (isSynthMode) {
            synthSeek(percentage);
        } else {
            audioEl.currentTime = percentage * audioEl.duration;
        }
    });

    // Volume Adjustment
    volumeWrapper.addEventListener("click", (e) => {
        const width = volumeWrapper.clientWidth;
        const clickX = e.offsetX;
        const volume = Math.min(1, Math.max(0, clickX / width));
        
        volumeFill.style.width = `${volume * 100}%`;
        audioEl.volume = volume;
        
        if (volume === 0) {
            muteBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        } else if (volume < 0.5) {
            muteBtn.innerHTML = '<i class="fa-solid fa-volume-low"></i>';
        } else {
            muteBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        }
    });

    // Mute/Unmute
    let preMuteVolume = 0.8;
    muteBtn.addEventListener("click", () => {
        if (audioEl.volume > 0) {
            preMuteVolume = audioEl.volume;
            audioEl.volume = 0;
            volumeFill.style.width = "0%";
            muteBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        } else {
            audioEl.volume = preMuteVolume;
            volumeFill.style.width = `${preMuteVolume * 100}%`;
            muteBtn.innerHTML = preMuteVolume < 0.5 ? '<i class="fa-solid fa-volume-low"></i>' : '<i class="fa-solid fa-volume-high"></i>';
        }
    });

    // Audio tag event listeners (if playing real audio)
    audioEl.addEventListener("timeupdate", () => {
        if (isSynthMode) return;
        const current = audioEl.currentTime;
        const duration = audioEl.duration || 1;
        progressFill.style.width = `${(current / duration) * 100}%`;
        timeCurrent.textContent = formatTime(current);
        
        // Audio beat visualizer impact
        audioBeatFactor = 0.5 + (Math.sin(current * 8) * 0.4);
    });

    audioEl.addEventListener("loadedmetadata", () => {
        if (isSynthMode) return;
        timeDuration.textContent = formatTime(audioEl.duration);
    });

    audioEl.addEventListener("ended", () => {
        changeTrack(1);
    });

    // Play the selected track (using local MP3 or falling back to synth on CORS failures)
    function playTrack() {
        isPlaying = true;
        isAudioPlayingGlobal = true;
        playerContainer.classList.add("player-container-active");
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        
        const track = tracks[currentTrackIndex];
        const isLocalFile = track.url.includes("") || track.url.endsWith(".mp3");
        
        if (isLocalFile) {
            isSynthMode = false;
            sourceBadge.textContent = "AUDIO MP3";
            sourceBadge.style.color = "var(--argentine-blue)";
            audioEl.src = track.url;
            audioEl.play().catch(err => {
                console.warn("Local MP3 playback failed, switching to synth", err);
                isSynthMode = true;
                sourceBadge.textContent = "SYNTH EN VIVO";
                sourceBadge.style.color = "var(--gold-solid)";
                triggerSynthPlayback();
            });
        } else {
            // For remote files, try playing, if fails (CORS), play synth!
            isSynthMode = false;
            sourceBadge.textContent = "AUDIO STREAM";
            sourceBadge.style.color = "var(--argentine-blue)";
            audioEl.src = track.url;
            audioEl.play().catch(err => {
                console.warn("External URL playback failed/CORS. Switching to Synth mode.", err);
                isSynthMode = true;
                sourceBadge.textContent = "SYNTH EN VIVO";
                sourceBadge.style.color = "var(--gold-solid)";
                triggerSynthPlayback();
            });
        }
    }

    function pauseTrack() {
        isPlaying = false;
        isAudioPlayingGlobal = false;
        playerContainer.classList.remove("player-container-active");
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        
        if (isSynthMode) {
            stopSynthPlayback();
        } else {
            audioEl.pause();
        }
    }

    function changeTrack(direction) {
        pauseTrack();
        currentTrackIndex = (currentTrackIndex + direction + tracks.length) % tracks.length;
        updatePlayerUI();
        setTimeout(() => {
            playTrack();
        }, 150);
    }

    function updatePlayerUI() {
        const track = tracks[currentTrackIndex];
        artImg.src = track.art;
        trackTitle.textContent = track.title;
        trackArtist.textContent = track.artist;
        
        const isLocalFile = track.url.includes("") || track.url.endsWith(".mp3");
        if (isLocalFile) {
            sourceBadge.textContent = "AUDIO MP3";
            sourceBadge.style.color = "var(--argentine-blue)";
        } else {
            sourceBadge.textContent = "SYNTH EN VIVO";
            sourceBadge.style.color = "var(--gold-solid)";
        }
    }

    function formatTime(secs) {
        const m = Math.floor(secs / 60);
        const s = Math.floor(secs % 60);
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    }

    /* ==========================================================================
       TROPICAL CUMBIA / SALSA SEQUENCER (Web Audio API Synthesizer)
       ========================================================================== */
    let synthInterval = null;
    let synthNodes = [];
    let simulatedProgress = 0;
    const synthDuration = 150; // seconds

    function triggerSynthPlayback() {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }

        stopSynthPlayback();
        simulatedProgress = 0;
        
        const track = tracks[currentTrackIndex];
        const chords = track.chordProgressions;
        let tickCounter = 0;
        const tickRate = 220; // 220ms per step (~136 BPM - lively tropical tempo)

        // Cumbia/Salsa step sequencer loop (16 steps per bar)
        synthInterval = setInterval(() => {
            if (!isPlaying) return;
            
            simulatedProgress += (tickRate / 1000);
            if (simulatedProgress >= synthDuration) {
                changeTrack(1);
                return;
            }
            
            // Sync play bar progress UI
            const ratio = simulatedProgress / synthDuration;
            progressFill.style.width = `${ratio * 100}%`;
            timeCurrent.textContent = formatTime(simulatedProgress);
            
            const step = tickCounter % 16;
            const chordCycle = Math.floor(tickCounter / 32) % chords.length;
            const currentChordFreqs = chords[chordCycle];
            
            // 1. LATIN SHAKER / SHICK-SHICK PERCUSSION (White noise bursts on every 8th note)
            if (step % 2 === 0) {
                const vol = (step === 4 || step === 12) ? 0.07 : 0.035; // accents on beats
                playNoisePercussion(0.05, vol);
            }
            
            // 2. TROPICAL BASS LINE (Low triangle waves on cumbia syncopated pattern)
            if (step === 0 || step === 8) {
                // Root note
                playPluckyTone(currentChordFreqs[0] / 2, 0.4, 0.22, 'triangle');
            } else if (step === 4 || step === 12) {
                // Fifth note
                playPluckyTone(currentChordFreqs[2] / 2, 0.4, 0.18, 'triangle');
            } else if (step === 3 || step === 11) {
                // Cumbia off-beat bass pluck
                playPluckyTone(currentChordFreqs[0] / 2, 0.25, 0.12, 'triangle');
            }
            
            // 3. PIANO MONTUNO RIFF (Syncopated salsa chords)
            // Salsa / Cumbia piano keys play on steps: 1, 3, 6, 9, 11, 14
            if (step === 1 || step === 3 || step === 6 || step === 9 || step === 11 || step === 14) {
                currentChordFreqs.forEach((freq, idx) => {
                    // Spread the voicing, play plucky triangle/sine mixture
                    const vol = 0.05;
                    playPluckyTone(freq, 0.28, vol, 'triangle');
                    playPluckyTone(freq * 2, 0.20, vol * 0.4, 'sine'); // octave air harmonic
                });
                // Pulsate background particles on chord hits
                audioBeatFactor = 1.4;
            } else {
                // Gradually decay beat factor for smooth visuals
                audioBeatFactor = Math.max(0.4, audioBeatFactor - 0.1);
            }
            
            tickCounter++;
        }, tickRate);
    }

    function stopSynthPlayback() {
        if (synthInterval) {
            clearInterval(synthInterval);
            synthInterval = null;
        }
        synthNodes.forEach(node => {
            try { node.stop(); } catch(e){}
        });
        synthNodes = [];
    }

    // Play white noise bursts for shakers
    function playNoisePercussion(duration, volume) {
        if (!audioContext) return;
        const now = audioContext.currentTime;
        
        try {
            const bufferSize = audioContext.sampleRate * duration;
            const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
            const data = buffer.getChannelData(0);
            
            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1;
            }
            
            const noise = audioContext.createBufferSource();
            noise.buffer = buffer;
            
            const noiseFilter = audioContext.createBiquadFilter();
            noiseFilter.type = 'highpass';
            noiseFilter.frequency.setValueAtTime(6500, now);
            
            const noiseGain = audioContext.createGain();
            noiseGain.gain.setValueAtTime(volume * 0.4, now);
            noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
            
            noise.connect(noiseFilter);
            noiseFilter.connect(noiseGain);
            noiseGain.connect(audioContext.destination);
            
            noise.start(now);
            synthNodes.push(noise);
        } catch (e) {
            console.error("Percussion Synth failed", e);
        }
    }

    // Play plucky synthesizers for piano montuno chords and cumbia bass
    function playPluckyTone(freq, duration, volume, waveType) {
        if (!audioContext) return;
        const now = audioContext.currentTime;
        
        try {
            const osc = audioContext.createOscillator();
            osc.type = waveType;
            osc.frequency.setValueAtTime(freq, now);
            
            const filter = audioContext.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(1600, now);
            
            const gainNode = audioContext.createGain();
            gainNode.gain.setValueAtTime(volume * 0.5, now);
            gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);
            
            osc.connect(filter);
            filter.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            osc.start(now);
            osc.stop(now + duration);
            synthNodes.push(osc);
        } catch (e) {
            console.error("Tone Synth failed", e);
        }
    }

    function synthSeek(ratio) {
        simulatedProgress = ratio * synthDuration;
        timeCurrent.textContent = formatTime(simulatedProgress);
        progressFill.style.width = `${ratio * 100}%`;
        
        if (isPlaying) {
            playTrack();
        }
    }
}

/* ==========================================================================
   5. INTERACTIVE SVG WORLD JOURNEY MAP
   ========================================================================== */
function initTourMap() {
    const nodes = document.querySelectorAll(".tour-node-group");
    const detailsCard = document.getElementById("tour-details-card");
    const tCity = document.getElementById("tour-city");
    const tVenue = document.getElementById("tour-venue");
    const tDate = document.getElementById("tour-date");
    const tStatus = document.getElementById("tour-status");
    
    nodes.forEach(node => {
        node.addEventListener("mouseenter", (e) => {
            const city = node.getAttribute("data-city");
            const venue = node.getAttribute("data-venue");
            const date = node.getAttribute("data-date");
            const status = node.getAttribute("data-status");
            
            tCity.textContent = city;
            tVenue.textContent = venue;
            tDate.textContent = date;
            tStatus.textContent = status;
            
            // Styling badges
            if (status.includes("Anunciado") || status.includes("Próximamente")) {
                tStatus.style.borderColor = "rgba(116, 172, 223, 0.4)";
                tStatus.style.color = "var(--argentine-blue)";
            } else {
                tStatus.style.borderColor = "rgba(212, 175, 55, 0.4)";
                tStatus.style.color = "var(--gold-solid)";
            }
            
            detailsCard.classList.add("active");
            
            // Pulse audio visualizer when hovering over cities
            audioBeatFactor = 1.5;
        });

        node.addEventListener("mouseleave", () => {
            // Keep card active or close it. We can keep it active showing the last hovered city!
        });
    });
}

/* ==========================================================================
   6. NETFLIX-STYLE VIDEO SCROLLER & LIGHTBOX
   ========================================================================== */
function initVideoSlider() {
        const slider = document.getElementById("netflix-video-slider");
    const leftArrow = document.getElementById("video-arrow-left");
    const rightArrow = document.getElementById("video-arrow-right");
    const videoLightbox = document.getElementById("video-lightbox");
    const videoLightboxOverlay = document.getElementById("video-lightbox-overlay");
    const videoLightboxClose = document.getElementById("video-lightbox-close");
    const lightboxIframe = document.getElementById("lightbox-iframe");
    const lightboxVideo = document.getElementById("lightbox-video");

    if (!slider) return;

    // Horizontal slider buttons
    leftArrow.addEventListener("click", () => {
        slider.scrollBy({ left: -340, behavior: 'smooth' });
    });

    rightArrow.addEventListener("click", () => {
        slider.scrollBy({ left: 340, behavior: 'smooth' });
    });

    // Opening Video Lightbox (Supports both YouTube embed links and local MP4 files)
    const videoCards = document.querySelectorAll(".video-card");
    videoCards.forEach(card => {
        card.addEventListener("click", () => {
            const url = card.getAttribute("data-video-url");
            
            if (url.toLowerCase().endsWith(".mp4") || url.toLowerCase().includes("")) {
                // Play local video using HTML5 video player
                lightboxIframe.style.display = "none";
                lightboxVideo.style.display = "block";
                lightboxVideo.src = url;
                lightboxVideo.load();
                lightboxVideo.play();
            } else {
                // Play YouTube video using Iframe player
                lightboxVideo.style.display = "none";
                lightboxIframe.style.display = "block";
                lightboxIframe.src = `${url}?autoplay=1&modestbranding=1&rel=0`;
            }
            
            videoLightbox.classList.add("active");
            document.body.style.overflow = "hidden"; // lock page scroll
        });
    });

    // Closing handlers
    function closeVideo() {
        videoLightbox.classList.remove("active");
        lightboxIframe.src = "";
        try {
            lightboxVideo.pause();
            lightboxVideo.removeAttribute('src'); 
            lightboxVideo.load();
        } catch (e) {}
        document.body.style.overflow = "";
    }

    videoLightboxClose.addEventListener("click", closeVideo);
    videoLightboxOverlay.addEventListener("click", closeVideo);
}

/* ==========================================================================
   7. PHOTO MASONRY GRID & LIGHTBOX
   ========================================================================== */
function initPhotoLightbox() {
    const lightbox = document.getElementById("photo-lightbox");
    const overlay = document.getElementById("photo-lightbox-overlay");
    const closeBtn = document.getElementById("photo-lightbox-close");
    const prevBtn = document.getElementById("photo-lightbox-prev");
    const nextBtn = document.getElementById("photo-lightbox-next");
    const displayImg = document.getElementById("lightbox-image");
    const displayCaption = document.getElementById("lightbox-caption");

    if (!lightbox) return;

    const items = Array.from(document.querySelectorAll(".masonry-item"));
    let currentPhotoIndex = 0;

    items.forEach((item, index) => {
        item.addEventListener("click", () => {
            currentPhotoIndex = index;
            openPhoto(currentPhotoIndex);
        });
    });

    function openPhoto(index) {
        const item = items[index];
        const src = item.getAttribute("data-image-src");
        const caption = item.getAttribute("data-caption");
        
        displayImg.style.opacity = 0;
        setTimeout(() => {
            displayImg.src = src;
            displayCaption.textContent = caption;
            displayImg.style.opacity = 1;
        }, 150);

        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closePhoto() {
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
    }

    function navigatePhoto(direction) {
        currentPhotoIndex = (currentPhotoIndex + direction + items.length) % items.length;
        openPhoto(currentPhotoIndex);
    }

    // Listeners
    closeBtn.addEventListener("click", closePhoto);
    overlay.addEventListener("click", closePhoto);
    prevBtn.addEventListener("click", () => navigatePhoto(-1));
    nextBtn.addEventListener("click", () => navigatePhoto(1));

    // Keyboard support
    document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("active")) return;
        if (e.key === "Escape") closePhoto();
        if (e.key === "ArrowLeft") navigatePhoto(-1);
        if (e.key === "ArrowRight") navigatePhoto(1);
    });
}

/* ==========================================================================
   8. LUXURIOUS CONTACT & NEWSLETTER FORM VALIDATIONS
   ========================================================================== */
function initForms() {
    // Booking & Contact Form
    const bookingForm = document.getElementById("booking-contact-form");
    const bookingSuccess = document.getElementById("contact-success-alert");
    const resetContactBtn = document.getElementById("reset-contact-btn");

    if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(bookingForm);
  const submitBtn = bookingForm.querySelector("button[type='submit']");
  const requestMessage = [
  `Hola Walter, quiero solicitar una reserva.`,
  `Nombre: ${formData.get("name") || "No indicado"}`,
  `Correo: ${formData.get("email") || "No indicado"}`,
  `Empresa/Productora: ${formData.get("company") || "No indicada"}`,
  `Tipo de evento: ${formData.get("event-type") || "No indicado"}`,
  `Ciudad y país: ${formData.get("location") || "No indicado"}`,
  `Detalles: ${formData.get("message") || "No indicados"}`
  ].join("\\n");

  submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Abriendo WhatsApp...';
  submitBtn.disabled = true;
  window.location.href = `https://wa.link/j0bcev?text=${encodeURIComponent(requestMessage)}`;
  
  setTimeout(() => {
                if (typeof gsap !== "undefined") {
                    gsap.to(bookingForm, { opacity: 0, duration: 0.4, display: "none" });
                } else {
                    bookingForm.style.display = "none";
                }
                setTimeout(() => {
                    bookingSuccess.style.display = "block";
                    if (typeof gsap !== "undefined") {
                        gsap.fromTo(bookingSuccess, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6 });
                    }
                }, 400);
            }, 2000);
        });

        // Reset booking form button action
        if (resetContactBtn) {
            resetContactBtn.addEventListener("click", () => {
                bookingForm.reset();
                bookingForm.querySelector("button[type='submit']").innerHTML = '<span class="btn-text">Enviar Solicitud de Reserva</span> <i class="fa-solid fa-paper-plane"></i>';
                bookingForm.querySelector("button[type='submit']").disabled = false;
                
                const restoreForm = () => {
                    bookingSuccess.style.display = "none";
                    bookingForm.style.display = "block";
                    bookingForm.style.opacity = "1";
                };
                if (typeof gsap !== "undefined") {
                    gsap.to(bookingSuccess, { opacity: 0, duration: 0.4, onComplete: restoreForm });
                } else {
                    restoreForm();
                }
            });
        }
    }
}

/* ==========================================================================
   9. NAVBAR GLASSMORPHISM SCROLL IMPACT
   ========================================================================== */
function initNavbarScroll() {
    const header = document.querySelector(".main-header");
    const mobileToggle = document.getElementById("mobile-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link, .nav-btn");

    if (!header) return;

    // Scroll listener for sticky backdrop navbar
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
        
        // Sync active nav item to scroll location
        syncActiveSection();
    });

    // Mobile Hamburger Menu Action
    if (!mobileToggle || !navMenu) return;
    mobileToggle.addEventListener("click", () => {
        mobileToggle.classList.toggle("active");
        navMenu.classList.toggle("open");
    });

    // Close Menu on Link Clicking
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileToggle.classList.remove("active");
            navMenu.classList.remove("open");
        });
    });

    // Navigation sections syncing active class
    const sections = document.querySelectorAll("section");
    const navLinkItems = document.querySelectorAll(".nav-link");

    function syncActiveSection() {
        let currentSectionId = "";
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinkItems.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    }
}
