/**
 * DIYA SHAH — ELITE PORTFOLIO INTERACTIONS
 * Modern JavaScript Engine for Speech AI, Modals, Filters, & Telemetry
 */

document.addEventListener("DOMContentLoaded", () => {
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
   2. INTERACTIVE AI AVATAR VOICE INTRO & AUDIO EQUALIZER
   ========================================================================== */
let isSpeaking = false;
let isMuted = false;
let currentUtterance = null;

const speechTranscript = [
  "Hi, I'm Diya Shah! Welcome to my engineering portfolio.",
  "I specialize in crafting high-performance Flutter mobile systems and analyzing Android APK binaries at the byte level for OWASP security flaws.",
  "Explore my flagship projects below, including my zero-JVM binary analyzer, JobFlow AI recruitment platform, and full-stack cloud APIs.",
  "Feel free to check out my verified certificates or reach out to collaborate on software engineering internships!"
];

function initAIAvatarVoice() {
  const avatarToggleBtn = document.getElementById("avatarToggleBtn");
  const heroPlayAvatarBtn = document.getElementById("heroPlayAvatarBtn");
  const playIcon = document.getElementById("playIcon");
  const equalizer = document.getElementById("equalizer");
  const voiceStatus = document.getElementById("voiceStatus");
  const captionText = document.getElementById("captionText");
  const voiceToggleVoice = document.getElementById("voiceToggleVoice");
  const voiceMuteToggle = document.getElementById("voiceMuteToggle");

  if (!avatarToggleBtn) return;

  function startVoicePlayback() {
    if (isSpeaking) {
      stopVoicePlayback();
      return;
    }

    isSpeaking = true;
    if (equalizer) equalizer.classList.add("active");
    if (playIcon) playIcon.className = "fa-solid fa-pause";
    if (voiceStatus) voiceStatus.textContent = "Voice intro playing...";

    let sentenceIndex = 0;

    function playNextSentence() {
      if (!isSpeaking || sentenceIndex >= speechTranscript.length) {
        stopVoicePlayback();
        return;
      }

      const sentence = speechTranscript[sentenceIndex];
      if (captionText) {
        captionText.style.opacity = 0.5;
        setTimeout(() => {
          captionText.textContent = `"${sentence}"`;
          captionText.style.opacity = 1;
        }, 150);
      }

      if ("speechSynthesis" in window && !isMuted) {
        window.speechSynthesis.cancel();
        currentUtterance = new SpeechSynthesisUtterance(sentence);
        currentUtterance.rate = 1.0;
        currentUtterance.pitch = 1.05;

        // Try selecting a natural female voice
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(v => 
          v.name.includes("Google") || 
          v.name.includes("Natural") || 
          v.name.includes("Zira") || 
          v.name.includes("Samantha") ||
          v.name.includes("Female")
        );
        if (preferredVoice) currentUtterance.voice = preferredVoice;

        currentUtterance.onend = () => {
          sentenceIndex++;
          setTimeout(playNextSentence, 400);
        };

        currentUtterance.onerror = () => {
          sentenceIndex++;
          setTimeout(playNextSentence, 3200);
        };

        window.speechSynthesis.speak(currentUtterance);
      } else {
        // Fallback timed progression if speech synthesis is disabled or muted
        setTimeout(() => {
          sentenceIndex++;
          playNextSentence();
        }, 3400);
      }
    }

    playNextSentence();
  }

  function stopVoicePlayback() {
    isSpeaking = false;
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    if (equalizer) equalizer.classList.remove("active");
    if (playIcon) playIcon.className = "fa-solid fa-play";
    if (voiceStatus) voiceStatus.textContent = "Click to replay intro";
  }

  avatarToggleBtn.addEventListener("click", startVoicePlayback);
  if (heroPlayAvatarBtn) heroPlayAvatarBtn.addEventListener("click", startVoicePlayback);

  if (voiceToggleVoice) {
    voiceToggleVoice.addEventListener("click", () => {
      stopVoicePlayback();
      setTimeout(startVoicePlayback, 200);
    });
  }

  if (voiceMuteToggle) {
    voiceMuteToggle.addEventListener("click", () => {
      isMuted = !isMuted;
      if (isMuted) {
        if ("speechSynthesis" in window) window.speechSynthesis.cancel();
        voiceMuteToggle.innerHTML = '<i class="fa-solid fa-volume-high"></i> Unmute';
        showToast("AI Voice Muted (Captions only)");
      } else {
        voiceMuteToggle.innerHTML = '<i class="fa-solid fa-volume-xmark"></i> Mute';
        showToast("AI Voice Unmuted");
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
