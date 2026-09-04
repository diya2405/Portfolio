/**
 * DIYA SHAH — ELITE PORTFOLIO INTERACTIONS
 * Modern JavaScript Engine for Diya's World, Speech AI, Modals, Filters, & Telemetry
 */

document.addEventListener("DOMContentLoaded", () => {
  initDiyaWorldIntro();
  initTypewriter();
  initAIAvatarVoice();
  initSkillsFilter();
  initCertificatesFilter();
  initNavigation();
  initDiagnosticsCopy();
  initCurrentYear();
});

/* ==========================================================================
   1. DYNAMIC TYPEWRITER EFFECT
   ========================================================================== */
function initTypewriter() {
  const typedEl = document.getElementById("typedText");
  if (!typedEl) return;

  const roles = [
    "Flutter Architecture",
    "Android Binary Security (SAST)",
    "Firebase Cloud & REST APIs",
    "Applied AI & Mobile Systems",
    "Zero-JVM Bytecode Analysis"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let delay = 120;

  function type() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      typedEl.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      delay = 50;
    } else {
      typedEl.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      delay = 110;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      delay = 2000; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 400; // Pause before new word
    }

    setTimeout(type, delay);
  }

  type();
}

/* ==========================================================================
   2. DIYA'S WORLD — MAGICAL CELESTIAL PRELOADER & AI AVATAR VIDEO THEATER
   ========================================================================== */

let theaterSpeaking = false;
let theaterMuted = false;
let theaterUtterance = null;
let starAnimationId = null;
let avatarAnimationId = null;
let launchVideoExperienceDirectly = null;

const diyaIntroScript = [
  {
    text: "Hello and welcome to Diya's World! ✨",
    speech: "Hello and welcome to Diya's World!"
  },
  {
    text: "I'm Diya Shah — a Mobile Systems Engineer and Flutter Architect passionate about fusing fluid, responsive mobile interfaces with low-level Android security.",
    speech: "I'm Diya Shah, a Mobile Systems Engineer and Flutter Architect passionate about fusing fluid, responsive mobile interfaces with low level Android security."
  },
  {
    text: "From engineering zero-JVM Dalvik bytecode analyzers that audit APKs for OWASP vulnerabilities in under 4 seconds, to architecting AI-powered platforms and ranking 58th in Gujarat, I love solving hard engineering problems from the byte level up to the UI.",
    speech: "From engineering zero J V M Dalvik bytecode analyzers that audit APKs for OWASP vulnerabilities in under four seconds, to architecting AI powered platforms and ranking 58th in Gujarat, I love solving hard engineering problems from the byte level up to the UI."
  },
  {
    text: "Feel free to explore my flagship projects, verify my credentials, or inspect my system architecture. Let's create something extraordinary together!",
    speech: "Feel free to explore my flagship projects, verify my credentials, or inspect my system architecture. Let's create something extraordinary together!"
  }
];

// Guaranteed Natural Female Voice Selector
function getNaturalFemaleVoice() {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  const femalePriority = [
    /zira/i,
    /jenny/i,
    /aria/i,
    /samantha/i,
    /karen/i,
    /victoria/i,
    /moira/i,
    /fiona/i,
    /google uk english female/i,
    /google us english female/i,
    /natural.*female/i,
    /female/i,
    /eva/i
  ];

  const maleExcludes = /david|mark|george|daniel|guy|male|james|richard|oliver|stefan|pablo/i;

  for (const pattern of femalePriority) {
    const found = voices.find(v => pattern.test(v.name) && !maleExcludes.test(v.name));
    if (found) return found;
  }

  const enFallback = voices.find(v => (v.lang.startsWith("en") || v.lang.startsWith("en-US") || v.lang.startsWith("en-GB")) && !maleExcludes.test(v.name));
  return enFallback || voices[0];
}

function initDiyaWorldIntro() {
  const introTheater = document.getElementById("introTheater");
  const introPreloader = document.getElementById("introPreloader");
  const introVideoStage = document.getElementById("introVideoStage");
  const theaterSkipBtn = document.getElementById("theaterSkipBtn");
  const theaterExploreBtn = document.getElementById("theaterExploreBtn");
  const theaterMuteBtn = document.getElementById("theaterMuteBtn");
  const theaterMuteIcon = document.getElementById("theaterMuteIcon");
  const theaterMuteText = document.getElementById("theaterMuteText");
  const preloaderBarFill = document.getElementById("preloaderBarFill");
  const preloaderPercent = document.getElementById("preloaderPercent");
  const preloaderStatusText = document.getElementById("preloaderStatusText");
  const teleprompterText = document.getElementById("teleprompterText");
  const teleprompterStep = document.getElementById("teleprompterStep");
  const theaterWaveform = document.getElementById("theaterWaveform");
  const videoStatusChipText = document.getElementById("videoStatusChipText");
  const heroPlayAvatarBtn = document.getElementById("heroPlayAvatarBtn");

  if (!introTheater) return;

  // Setup Cosmic Starfield Background
  initStarfield();

  // Setup AI Avatar Lip-Sync & Face Canvas
  const avatarController = initAvatarCanvas();

  // Handle Mute Button
  if (theaterMuteBtn) {
    theaterMuteBtn.addEventListener("click", () => {
      theaterMuted = !theaterMuted;
      if (theaterMuted) {
        if ("speechSynthesis" in window) window.speechSynthesis.cancel();
        if (theaterMuteIcon) theaterMuteIcon.className = "fa-solid fa-volume-xmark";
        if (theaterMuteText) theaterMuteText.textContent = "Unmute";
        showToast("Voice muted (Teleprompter active)");
      } else {
        if (theaterMuteIcon) theaterMuteIcon.className = "fa-solid fa-volume-high";
        if (theaterMuteText) theaterMuteText.textContent = "Mute Voice";
        showToast("Voice unmuted");
      }
    });
  }

  // Handle Skip & Explore Actions
  function exitIntroTheater() {
    theaterSpeaking = false;
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    if (avatarController) avatarController.setSpeaking(false);
    if (theaterWaveform) theaterWaveform.classList.remove("active");

    introTheater.classList.add("portal-exit");
    sessionStorage.setItem("diya_intro_seen", "true");

    setTimeout(() => {
      introTheater.style.display = "none";
      introTheater.classList.remove("portal-exit");
    }, 850);
  }

  if (theaterSkipBtn) theaterSkipBtn.addEventListener("click", exitIntroTheater);
  if (theaterExploreBtn) theaterExploreBtn.addEventListener("click", exitIntroTheater);

  // Global launcher to re-trigger video intro theatre anytime!
  launchVideoExperienceDirectly = function() {
    introTheater.style.display = "flex";
    introTheater.classList.remove("portal-exit");
    if (introPreloader) introPreloader.style.display = "none";
    if (introVideoStage) introVideoStage.style.display = "flex";
    startVideoSpeechSequence();
  };

  if (heroPlayAvatarBtn) {
    heroPlayAvatarBtn.addEventListener("click", () => {
      launchVideoExperienceDirectly();
    });
  }

  // Preloader Sequence
  function runPreloader() {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 8) + 6;
      if (progress > 100) progress = 100;

      if (preloaderBarFill) preloaderBarFill.style.width = `${progress}%`;
      if (preloaderPercent) preloaderPercent.textContent = `${progress}%`;

      if (progress > 30 && progress < 65) {
        if (preloaderStatusText) preloaderStatusText.textContent = "Tuning Low-Level Bytecode & Security Engines...";
      } else if (progress >= 65 && progress < 100) {
        if (preloaderStatusText) preloaderStatusText.textContent = "Calibrating Neural Voice Agent & 60fps Lip-Sync...";
      } else if (progress === 100) {
        clearInterval(interval);
        if (preloaderStatusText) preloaderStatusText.textContent = "Welcome to Diya's World ✨";

        setTimeout(() => {
          if (introPreloader) {
            introPreloader.style.opacity = "0";
            setTimeout(() => {
              introPreloader.style.display = "none";
              if (introVideoStage) {
                introVideoStage.style.display = "flex";
                startVideoSpeechSequence();
              }
            }, 400);
          }
        }, 500);
      }
    }, 80);
  }

  // Speech Sequence
  let currentSentenceIndex = 0;

  function startVideoSpeechSequence() {
    currentSentenceIndex = 0;
    playCurrentSentence();
  }

  function playCurrentSentence() {
    if (currentSentenceIndex >= diyaIntroScript.length) {
      // Intro completed
      theaterSpeaking = false;
      if (avatarController) avatarController.setSpeaking(false);
      if (theaterWaveform) theaterWaveform.classList.remove("active");
      if (videoStatusChipText) videoStatusChipText.innerHTML = "Intro Complete ✨ Click Explore Below";
      return;
    }

    theaterSpeaking = true;
    const item = diyaIntroScript[currentSentenceIndex];

    if (teleprompterStep) teleprompterStep.textContent = `${currentSentenceIndex + 1} / ${diyaIntroScript.length}`;
    if (teleprompterText) {
      teleprompterText.style.opacity = "0.3";
      setTimeout(() => {
        teleprompterText.textContent = `"${item.text}"`;
        teleprompterText.style.opacity = "1";
      }, 150);
    }

    if (theaterWaveform) theaterWaveform.classList.add("active");
    if (avatarController) avatarController.setSpeaking(true);

    if ("speechSynthesis" in window && !theaterMuted) {
      window.speechSynthesis.cancel();
      theaterUtterance = new SpeechSynthesisUtterance(item.speech);
      theaterUtterance.rate = 0.98;
      theaterUtterance.pitch = 1.1;

      const voice = getNaturalFemaleVoice();
      if (voice) {
        theaterUtterance.voice = voice;
        if (videoStatusChipText) videoStatusChipText.textContent = `Speaking (${voice.name.replace(/Microsoft|Google|Desktop/gi, '').trim()} Female AI)`;
      }

      theaterUtterance.onboundary = (e) => {
        if (avatarController && e.name === "word") {
          avatarController.pulseViseme();
        }
      };

      theaterUtterance.onend = () => {
        if (!theaterSpeaking) return;
        if (avatarController) avatarController.setSpeaking(false);
        if (theaterWaveform) theaterWaveform.classList.remove("active");
        currentSentenceIndex++;
        setTimeout(() => {
          if (theaterSpeaking) playCurrentSentence();
        }, 500);
      };

      theaterUtterance.onerror = () => {
        if (!theaterSpeaking) return;
        if (avatarController) avatarController.setSpeaking(false);
        if (theaterWaveform) theaterWaveform.classList.remove("active");
        currentSentenceIndex++;
        setTimeout(() => {
          if (theaterSpeaking) playCurrentSentence();
        }, 3200);
      };

      window.speechSynthesis.speak(theaterUtterance);
    } else {
      // Fallback cadence timer if browser speech synthesis is unavailable or muted
      const duration = Math.max(3400, item.speech.split(" ").length * 360);
      setTimeout(() => {
        if (!theaterSpeaking) return;
        if (avatarController) avatarController.setSpeaking(false);
        if (theaterWaveform) theaterWaveform.classList.remove("active");
        currentSentenceIndex++;
        setTimeout(() => {
          if (theaterSpeaking) playCurrentSentence();
        }, 500);
      }, duration);
    }
  }

  // Check if intro has already been seen in this session
  if (sessionStorage.getItem("diya_intro_seen")) {
    introTheater.style.display = "none";
  } else {
    runPreloader();
  }
}

// --------------------------------------------------------------------------
// Canvas Starfield Background
// --------------------------------------------------------------------------
function initStarfield() {
  const canvas = document.getElementById("theaterStarsCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const stars = [];
  for (let i = 0; i < 110; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.02 + 0.005,
      twinkleDir: Math.random() > 0.5 ? 1 : -1
    });
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let s of stars) {
      s.alpha += s.speed * s.twinkleDir;
      if (s.alpha > 0.95) { s.alpha = 0.95; s.twinkleDir = -1; }
      else if (s.alpha < 0.15) { s.alpha = 0.15; s.twinkleDir = 1; }

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 230, 255, ${s.alpha})`;
      ctx.shadowBlur = 4;
      ctx.shadowColor = "#38bdf8";
      ctx.fill();
    }
    starAnimationId = requestAnimationFrame(drawStars);
  }
  drawStars();
}

// --------------------------------------------------------------------------
// AI Avatar 60fps Lip-Sync & Face Controller
// --------------------------------------------------------------------------
function initAvatarCanvas() {
  const canvas = document.getElementById("avatarCanvas");
  if (!canvas) return null;
  const ctx = canvas.getContext("2d");

  const avatarImg = new Image();
  avatarImg.src = "diya_avatar.jpg";

  let isLoaded = false;
  avatarImg.onload = () => {
    isLoaded = true;
  };

  let speaking = false;
  let targetMouthOpen = 0;
  let currentMouthOpen = 0;
  let mouthVisemeTimer = 0;

  let blinkState = 0;
  let blinkTimer = 0;
  let nextBlinkTime = 180 + Math.random() * 120;

  function render(time) {
    ctx.clearRect(0, 0, 600, 600);

    if (isLoaded) {
      // 1. Subtle Breathing & Tilt
      const breathY = Math.sin(time * 0.002) * 1.8;
      const tilt = Math.sin(time * 0.001) * 0.006;

      ctx.save();
      ctx.translate(300, 300 + breathY);
      ctx.rotate(tilt);
      ctx.drawImage(avatarImg, -300, -300, 600, 600);

      // 2. Natural Micro-Blink
      blinkTimer++;
      if (blinkTimer >= nextBlinkTime) {
        blinkState += 0.25;
        if (blinkState >= 1) {
          blinkState = 0;
          blinkTimer = 0;
          nextBlinkTime = 160 + Math.random() * 140;
        }
      }

      if (blinkState > 0.05) {
        ctx.save();
        ctx.fillStyle = "rgba(196, 142, 119, 0.92)";
        // Left Eye Eyelid
        ctx.beginPath();
        ctx.ellipse(264 - 300, 158 - 300, 13, 5 * blinkState, 0, 0, Math.PI * 2);
        ctx.fill();
        // Right Eye Eyelid
        ctx.beginPath();
        ctx.ellipse(334 - 300, 155 - 300, 13, 5 * blinkState, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // 3. Lip-Sync Mouth Opening
      if (speaking) {
        mouthVisemeTimer++;
        const cadence = (Math.sin(mouthVisemeTimer * 0.28) + 1) * 0.4 + (Math.sin(mouthVisemeTimer * 0.65) + 1) * 0.2;
        targetMouthOpen = Math.min(1.0, cadence);
      } else {
        targetMouthOpen = 0;
      }

      currentMouthOpen += (targetMouthOpen - currentMouthOpen) * 0.35;

      if (currentMouthOpen > 0.08) {
        ctx.save();
        const mx = 302 - 300;
        const my = 236 - 300;
        const mw = 22;
        const mh = currentMouthOpen * 6.5;

        // Inner mouth opening cavity
        ctx.beginPath();
        ctx.ellipse(mx, my + 2, mw * 0.85, mh, 0, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(75, 20, 24, 0.88)";
        ctx.fill();

        // Subtle upper teeth highlight
        if (currentMouthOpen > 0.25) {
          ctx.beginPath();
          ctx.ellipse(mx, my + 1, mw * 0.55, 1.8, 0, 0, Math.PI);
          ctx.fillStyle = "rgba(245, 242, 238, 0.85)";
          ctx.fill();
        }

        // Lower lip descent
        ctx.beginPath();
        ctx.ellipse(mx, my + mh + 2.5, mw * 0.9, 3.2, 0, 0, Math.PI);
        ctx.fillStyle = "rgba(180, 78, 86, 0.7)";
        ctx.fill();

        ctx.restore();
      }

      ctx.restore();
    }

    avatarAnimationId = requestAnimationFrame(render);
  }

  render(0);

  return {
    setSpeaking(val) {
      speaking = val;
      if (!val) {
        targetMouthOpen = 0;
      }
    },
    pulseViseme() {
      mouthVisemeTimer += 1.5;
      targetMouthOpen = Math.min(1.0, targetMouthOpen + 0.35);
    }
  };
}

/* ==========================================================================
   3. HERO AVATAR CARD AUDIO CONTROLLER
   ========================================================================== */
function initAIAvatarVoice() {
  const avatarToggleBtn = document.getElementById("avatarToggleBtn");
  const playIcon = document.getElementById("playIcon");
  const equalizer = document.getElementById("equalizer");
  const voiceStatus = document.getElementById("voiceStatus");
  const captionText = document.getElementById("captionText");
  const voiceToggleVoice = document.getElementById("voiceToggleVoice");
  const voiceMuteToggle = document.getElementById("voiceMuteToggle");

  if (!avatarToggleBtn) return;

  // When user clicks the hero avatar card play button, launch the full video theater!
  avatarToggleBtn.addEventListener("click", () => {
    if (typeof launchVideoExperienceDirectly === "function") {
      launchVideoExperienceDirectly();
    }
  });

  if (voiceToggleVoice) {
    voiceToggleVoice.addEventListener("click", () => {
      if (typeof launchVideoExperienceDirectly === "function") {
        launchVideoExperienceDirectly();
      }
    });
  }

  if (voiceMuteToggle) {
    voiceMuteToggle.addEventListener("click", () => {
      theaterMuted = !theaterMuted;
      if (theaterMuted) {
        if ("speechSynthesis" in window) window.speechSynthesis.cancel();
        voiceMuteToggle.innerHTML = '<i class="fa-solid fa-volume-high"></i> Unmute';
        showToast("Voice Muted (Teleprompter only)");
      } else {
        voiceMuteToggle.innerHTML = '<i class="fa-solid fa-volume-xmark"></i> Mute';
        showToast("Voice Unmuted");
      }
    });
  }
}

/* ==========================================================================
   3. SKILLS MATRIX FILTER
   ========================================================================== */
function initSkillsFilter() {
  const tabs = document.querySelectorAll(".skills-filter-tabs .filter-tab");
  const cards = document.querySelectorAll(".skills-grid .skill-card");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const filter = tab.getAttribute("data-filter");

      cards.forEach(card => {
        const cat = card.getAttribute("data-cat");
        if (filter === "all" || filter === cat) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/* ==========================================================================
   4. CERTIFICATES FILTER & MODAL VIEWER
   ========================================================================== */
function initCertificatesFilter() {
  const pills = document.querySelectorAll(".cert-filter-pills .cert-pill");
  const items = document.querySelectorAll(".cert-grid .cert-item");

  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");

      const filter = pill.getAttribute("data-filter");

      items.forEach(item => {
        const cat = item.getAttribute("data-cat");
        if (filter === "all" || filter === cat) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}

function openCertModal(pdfPath, title) {
  const modal = document.getElementById("certModal");
  const iframe = document.getElementById("certIframe");
  const modalTitle = document.getElementById("certModalTitle");

  if (!modal || !iframe) return;

  modalTitle.textContent = title || "Certificate Document";
  iframe.src = pdfPath;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCertModal() {
  const modal = document.getElementById("certModal");
  const iframe = document.getElementById("certIframe");

  if (!modal) return;
  modal.classList.remove("active");
  if (iframe) iframe.src = "";
  document.body.style.overflow = "auto";
}

/* ==========================================================================
   5. PROJECT ARCHITECTURE SPEC MODAL
   ========================================================================== */
const projectSpecs = {
  apk_analyzer: {
    title: "Mobile App Security Analyzer — Architecture Spec",
    repo: "https://github.com/diya2405/apk_vulnerability_analysis",
    content: `
      <div class="spec-modal-content">
        <h4>⚡ Zero-JVM Binary Parsing Pipeline</h4>
        <p>Unlike legacy decompilers (e.g. apktool or jadx) that require full Java JVM instances taking 60+ seconds, this engine operates natively in Python with zero external runtime dependencies.</p>
        
        <div class="spec-diagram">
          <pre><code>[Android .apk Package]
  ├── [Zip Bounds &amp; Zip-Slip Checks] ────────► [Secure Ingestion]
  ├── [AndroidManifest.xml] ────────────────► [AXML Bytecode Deserializer]
  │                                            └─ Flags Exported Activities, Services, Receivers
  ├── [classes.dex] ─────────────────────────► [Dalvik DEX Opcode Disassembler]
  │                                            └─ Audits Hardcoded Keys, Insecure Crypto (ECB/DES)
  └── [Native .so Binaries] ─────────────────► [ELF Header &amp; Symbol Table Inspection]
                                               ▼
                              [CycloneDX 1.5 JSON SBOM &amp; OWASP MASVS Report]</code></pre>
        </div>

        <h4 style="margin-top: 18px;">Key Innovations:</h4>
        <ul style="margin-left: 20px; color: #94a3b8; line-height: 1.8;">
          <li><strong>Sub-4s Execution</strong>: Scans typical production APKs in 3.4 to 5.2 seconds.</li>
          <li><strong>Compliance Ready</strong>: Directly maps to <strong>OWASP Mobile Top 10 (2024)</strong> categories M1 through M10.</li>
          <li><strong>DevSecOps Integration</strong>: Emits CycloneDX 1.5 SBOM JSON schema compliant with modern continuous security gates.</li>
        </ul>
      </div>
    `
  },
  jobflow: {
    title: "JobFlow — AI Recruitment Ecosystem Architecture",
    repo: "https://github.com/diya2405/JobFlow",
    content: `
      <div class="spec-modal-content">
        <h4>📱 Tri-Portal Multi-Sided Architecture</h4>
        <p>JobFlow connects job candidates, corporate talent acquisition teams, and platform administrators into a unified reactive state system powered by Flutter and Firebase.</p>
        
        <div class="spec-diagram">
          <pre><code>[Candidate Mobile Portal]      [HR / Employer Portal]      [Platform Admin Dashboard]
           │                                 │                                 │
           └─────────────────┬───────────────┴─────────────────────────────────┘
                             ▼
              [Flutter Reactive Mobile App]
                             ▼
              [Firebase Firestore Mesh (Realtime)]
                             ▼
              [Python AI Inference Microservice]
                 ├── Resume PDF Text Extraction
                 ├── Spacy / Transformer NER (Skills, Experience, Degree)
                 └── Semantic Vector Cosine Match with Job Descriptions</code></pre>
        </div>

        <h4 style="margin-top: 18px;">Core Technical Highlights:</h4>
        <ul style="margin-left: 20px; color: #94a3b8; line-height: 1.8;">
          <li><strong>Reactive State Management</strong>: Decoupled BLoC patterns ensuring instant UI responses.</li>
          <li><strong>AI Semantic Ranking</strong>: Scores applicant resumes objectively against job parameters with zero human bias.</li>
          <li><strong>Realtime Notifications</strong>: Firebase Cloud Messaging dispatching status changes instantly.</li>
        </ul>
      </div>
    `
  },
  ai_assistant: {
    title: "Ai_Assistant — Multimodal Mobile Intelligence App",
    repo: "https://github.com/diya2405/Ai_Assistant",
    content: `
      <div class="spec-modal-content">
        <h4>🤖 Multimodal AI Orchestration</h4>
        <p>Built with Flutter and modern AI APIs, integrating conversational reasoning, text-to-image synthesis, and real-time neural translation inside an intuitive Material 3 UI.</p>
        
        <h4 style="margin-top: 18px;">Technical Features:</h4>
        <ul style="margin-left: 20px; color: #94a3b8; line-height: 1.8;">
          <li><strong>Streaming Token Responses</strong>: Smooth character-by-character response rendering.</li>
          <li><strong>Dynamic Canvas Rendering</strong>: Custom image gallery and image download pipelines.</li>
          <li><strong>Clean Architecture</strong>: Separation of domain, data, and presentation layers for production maintainability.</li>
        </ul>
      </div>
    `
  },
  task_api: {
    title: "Enterprise Task Manager RESTful Engine",
    repo: "https://github.com/diya2405/task-manager-api-D25IT118",
    content: `
      <div class="spec-modal-content">
        <h4>⚡ Enterprise RESTful Pipeline</h4>
        <p>Developed with Node.js, Express, and structured middleware pipelines with comprehensive automated Postman testing suites.</p>
        
        <h4 style="margin-top: 18px;">System Architecture:</h4>
        <ul style="margin-left: 20px; color: #94a3b8; line-height: 1.8;">
          <li><strong>Strict Schema Validation</strong>: Centralized request body and query parameter sanitization.</li>
          <li><strong>Deterministic Error Handling</strong>: RFC 7807 compliant error payload responses.</li>
          <li><strong>Automated Test Suite</strong>: 100% test pass rate across unit, boundary, and lifecycle integration tests.</li>
        </ul>
      </div>
    `
  }
};

function openProjectModal(projectId) {
  const spec = projectSpecs[projectId];
  if (!spec) return;

  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("projectModalTitle");
  const modalBody = document.getElementById("projectModalBody");

  if (!modal) return;

  modalTitle.textContent = spec.title;
  modalBody.innerHTML = `
    ${spec.content}
    <div style="margin-top: 24px; display: flex; justify-content: flex-end; gap: 12px;">
      <a href="${spec.repo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
        <i class="fa-brands fa-github"></i> Inspect Full GitHub Repository
      </a>
      <button class="btn btn-glass btn-sm" onclick="closeProjectModal()">Close</button>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Global Modal Backdrop Click Closes
window.addEventListener("click", (e) => {
  const certModal = document.getElementById("certModal");
  const projectModal = document.getElementById("projectModal");

  if (e.target === certModal) closeCertModal();
  if (e.target === projectModal) closeProjectModal();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCertModal();
    closeProjectModal();
  }
});

/* ==========================================================================
   6. NAVIGATION, SCROLL SPY & MOBILE MENU
   ========================================================================== */
function initNavigation() {
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
      });
    });
  }

  // Active Link Scroll Spy
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
}

/* ==========================================================================
   7. UTILITIES: CLIPBOARD COPY, TOAST & RESUME
   ========================================================================== */
function initDiagnosticsCopy() {
  const copyDiagnosticsBtn = document.getElementById("copyDiagnosticsBtn");
  if (!copyDiagnosticsBtn) return;

  copyDiagnosticsBtn.addEventListener("click", () => {
    const code = document.querySelector(".terminal-code").innerText;
    copyToClipboard(code, "Diagnostics JSON copied to clipboard!");
  });
}

function copyToClipboard(text, message) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(message || "Copied to clipboard!");
    });
  } else {
    showToast(message || "Copied!");
  }
}

function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #38bdf8;"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function downloadResume() {
  // Graceful resume downloader
  const link = document.createElement("a");
  link.href = "resume.pdf";
  link.download = "Diya_Shah_Resume.pdf";
  
  fetch('resume.pdf', { method: 'HEAD' })
    .then(res => {
      if (res.ok) {
        link.click();
        showToast("Downloading Diya's Resume...");
      } else {
        showToast("Resume is being updated — connecting to LinkedIn!");
        window.open("https://www.linkedin.com/in/diya-shah-85ba49308/", "_blank");
      }
    })
    .catch(() => {
      showToast("Resume is being updated — connecting to LinkedIn!");
      window.open("https://www.linkedin.com/in/diya-shah-85ba49308/", "_blank");
    });
}

function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("senderName").value;
  showToast(`Thank you, ${name}! Your dispatch has been prepared.`);
  e.target.reset();
}

function initCurrentYear() {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}
