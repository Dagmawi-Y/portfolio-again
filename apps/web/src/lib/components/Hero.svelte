<script lang="ts">
  import { siteConfig } from "$lib/config";
  import {
    ArrowRight,
    Github,
    Linkedin,
    Twitter,
    Smartphone,
    Layers,
    Zap,
    Bell,
    Home,
    PieChart,
    Wallet,
    User,
    ChevronRight,
    ChevronLeft,
    MapPin,
    CheckCircle2,
    Send,
    UserCircle2,
  } from "lucide-svelte";
  import { Motion } from "svelte-motion";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { chatTrigger } from "$lib/stores/chat";
  import { Drawer } from "vaul-svelte";

  // View state
  let currentView: "profile" | "chat" = "profile";
  let isGlowing = false;
  let isDrawerOpen = false;

  // Time state
  let currentTime = "";

  onMount(() => {
    const updateTime = () => {
      const now = new Date();
      currentTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  });

  // Chat state
  let chatInput: HTMLTextAreaElement;
  let message = "";
  $: if ($chatTrigger > 0) focusChat();

  let messages = [
    {
      id: 1,
      text: "Hi! Feel free to reach out for dev work, collaboration, or just to say hello. I'm always happy to talk code!",
      sender: "me",
      time: "Just now",
    },
  ];

  function focusChat() {
    if (typeof window !== "undefined" && window.innerWidth < 960) {
      isDrawerOpen = true;
      return;
    }

    currentView = "chat";
    // Scroll page to top to make sure Hero is perfectly in view
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      if (chatInput) {
        chatInput.focus();
        // Trigger glow animation
        isGlowing = true;
        setTimeout(() => (isGlowing = false), 1500);

        const chatContainer = document.querySelector(".app-scroll-container");
        if (chatContainer) {
          chatContainer.scrollTo({
            top: chatContainer.scrollHeight,
            behavior: "smooth",
          });
        }
      }
    }, 500);
  }

  function sendMessage() {
    if (!message.trim()) return;

    // Add user message
    messages = [
      ...messages,
      {
        id: Date.now(),
        text: message,
        sender: "user",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ];

    const sentMsg = message;
    message = "";

    // Mock response or real action
    setTimeout(() => {
      messages = [
        ...messages,
        {
          id: Date.now(),
          text: "Got it! I've received your message. I'll get back to you ASAP. Let's build something great.",
          sender: "me",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ];
    }, 1000);
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const appContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const appItem = {
    hidden: { y: 15, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 15 },
    },
  };
</script>

<section class="hero">
  <div class="container">
    <Motion initial="hidden" animate="show" variants={container} let:motion>
      <div class="content" use:motion>
        <Motion variants={item} let:motion>
          <div class="badge" use:motion>
            <span class="pulse"></span>
            Available for hire
          </div>
        </Motion>

        <Motion variants={item} let:motion>
          <h1 class="headline" use:motion>
            Modern products. <br />
            <span class="text-gradient">No bullshit.</span>
          </h1>
        </Motion>

        <Motion variants={item} let:motion>
          <p class="intro" use:motion>
            I'm <strong class="name-highlight">Dagmawi</strong>. I transform
            complex engineering problems into fluid, high-performance mobile
            experiences. I write code that lasts and designs that matter.
          </p>
        </Motion>

        <Motion variants={item} let:motion>
          <div class="specs" use:motion>
            <div class="spec-item">
              <Smartphone size={18} class="accent-icon" />
              <span>React Native / Swift</span>
            </div>
            <div class="spec-item">
              <Layers size={18} class="accent-icon" />
              <span>Architecture</span>
            </div>
            <div class="spec-item">
              <Zap size={18} class="accent-icon" />
              <span>Performance</span>
            </div>
          </div>
        </Motion>

        <Motion variants={item} let:motion>
          <div class="actions" use:motion>
            <a href="#work" class="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <button on:click={focusChat} class="btn btn-secondary">
              Send me a Message
            </button>
          </div>
        </Motion>

        <Motion variants={item} let:motion>
          <div class="socials" use:motion>
            <a
              href={siteConfig.socials.github}
              aria-label="Github"
              class="social-link"
            >
              <Github size={20} />
            </a>
            <a
              href={siteConfig.socials.twitter}
              aria-label="Twitter"
              class="social-link"
            >
              <Twitter size={20} />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              aria-label="LinkedIn"
              class="social-link"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </Motion>
      </div>
    </Motion>

    <div class="visual">
      <Motion
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        let:motion
      >
        <div class="iphone-15-pro" use:motion>
          <!-- Frame Details -->
          <div class="frame-border"></div>
          <div class="buttons left">
            <div class="button silent"></div>
            <div class="button vol-up"></div>
            <div class="button vol-down"></div>
          </div>
          <div class="buttons right">
            <div class="button power"></div>
          </div>

          <div class="screen-content">
            <!-- Dynamic Island -->
            <div class="dynamic-island">
              <div class="island-camera"></div>
            </div>

            <div class="status-bar">
              <span class="time">{currentTime || "9:41"}</span>
              <div class="status-icons">
                <div class="signal"></div>
                <div class="wifi"></div>
                <div class="battery-container">
                  <div class="battery"></div>
                  <div class="battery-tip"></div>
                </div>
              </div>
            </div>

            <!-- App Header (Visible only in Chat) -->
            {#if currentView === "chat"}
              <div class="app-header {currentView}">
                <button
                  class="back-link"
                  on:click={() => (currentView = "profile")}
                >
                  <ChevronLeft size={24} class="back-icon" />
                </button>
                <div class="header-chat-info">
                  <span class="chat-name">Dagmawi</span>
                  <span class="chat-status">online</span>
                </div>
              </div>
            {/if}

            <!-- Scrollable App Area -->
            <div class="app-scroll-container {currentView}">
              <Motion
                initial="hidden"
                animate="show"
                variants={appContainer}
                let:motion
              >
                <div class="app-interface" use:motion>
                  {#if currentView === "profile"}
                    <!-- Profile View (Telegram Inspired) -->
                    <div
                      class="profile-view telegram"
                      in:fade={{ duration: 300 }}
                    >
                      <div class="profile-masthead">
                        <img src="/me.png" alt="Dagmawi" class="masthead-img" />
                        <div class="masthead-overlay">
                          <div class="masthead-wrapper">
                            <div class="masthead-info">
                              <h2 class="masthead-name">Dagmawi</h2>
                              <div class="masthead-status-row">
                                <span class="status-dot"></span>
                                <p class="masthead-status">Avail for Hire</p>
                              </div>
                            </div>
                            <button
                              class="masthead-cta"
                              on:click={() => focusChat()}
                            >
                              <Send size={14} />
                              <span>Send Message</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div class="profile-info-grid">
                        <div class="info-row">
                          <span class="info-key">Bio</span>
                          <p class="info-val">
                            Building performant, product-led mobile & web
                            experiences from scratch.
                          </p>
                        </div>
                        <div class="info-row">
                          <span class="info-key">Username</span>
                          <p class="info-val link">@dagmawi_dev</p>
                        </div>
                      </div>

                      <div class="media-section">
                        <div class="media-header">Media</div>
                        <div class="media-preview">
                          <div class="media-item">
                            <img
                              src="https://picsum.photos/seed/p1/200"
                              alt="P1"
                            />
                          </div>
                          <div class="media-item">
                            <img
                              src="https://picsum.photos/seed/p2/200"
                              alt="P2"
                            />
                          </div>
                          <div class="media-item">
                            <img
                              src="https://picsum.photos/seed/p3/200"
                              alt="P3"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  {:else}
                    <!-- Chat View -->
                    <div class="chat-section" in:fade={{ duration: 300 }}>
                      <div class="chat-date-separator">Today</div>
                      <div class="chat-history">
                        {#each messages as msg (msg.id)}
                          <Motion
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            let:motion
                          >
                            <div class="message {msg.sender}" use:motion>
                              <div class="text">{msg.text}</div>
                              <div class="time">{msg.time}</div>
                            </div>
                          </Motion>
                        {/each}
                      </div>
                    </div>
                  {/if}
                </div>
              </Motion>
            </div>

            <!-- Chat Input (Visible only in chat view) -->
            {#if currentView === "chat"}
              <div
                class="chat-input-bar {isGlowing ? 'glow' : ''}"
                transition:fade
              >
                <textarea
                  bind:this={chatInput}
                  bind:value={message}
                  placeholder="Message..."
                  on:keydown={(e) =>
                    e.key === "Enter" &&
                    !e.shiftKey &&
                    (e.preventDefault(), sendMessage())}
                ></textarea>
                <button
                  class="send-btn"
                  on:click={sendMessage}
                  disabled={!message.trim()}
                >
                  <Send size={18} />
                </button>
              </div>
            {/if}

            <div class="home-indicator"></div>
          </div>
        </div>
      </Motion>

      <!-- Mobile Drawer Chat -->
      <Drawer.Root bind:open={isDrawerOpen}>
        <Drawer.Portal>
          <Drawer.Overlay class="drawer-overlay" />
          <Drawer.Content class="drawer-content">
            <div class="drawer-handle"></div>

            <div class="drawer-chat-header">
              <div class="header-chat-info">
                <span class="chat-name">Dagmawi</span>
                <span class="chat-status">Avail for Hire</span>
              </div>
            </div>

            <div class="drawer-chat-body">
              <div class="chat-history">
                <div class="chat-date-separator">Today</div>
                {#each messages as msg (msg.id)}
                  <div class="message {msg.sender}">
                    <div class="text">{msg.text}</div>
                    <div class="time">{msg.time}</div>
                  </div>
                {/each}
              </div>
            </div>

            <div class="drawer-input-bar">
              <textarea
                bind:value={message}
                placeholder="Message..."
                on:keydown={(e) =>
                  e.key === "Enter" &&
                  !e.shiftKey &&
                  (e.preventDefault(), sendMessage())}
              ></textarea>
              <button
                class="send-btn"
                on:click={sendMessage}
                disabled={!message.trim()}
              >
                <Send size={18} />
              </button>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>

      <!-- Ambient Glows -->
      <div class="sphere sphere-1"></div>
      <div class="sphere sphere-2"></div>
    </div>
  </div>
</section>

<style>
  .hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 2rem;
    position: relative;
    overflow: hidden;
  }

  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 10;
  }

  /* Text Content Styles */
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: var(--surface-2);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 100px;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text-secondary);
    margin-bottom: 2rem;
  }

  .pulse {
    width: 6px;
    height: 6px;
    background: #4ade80;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(74, 222, 128, 0.5);
    animation: pulse 2s infinite;
  }

  .headline {
    font-size: clamp(3rem, 5vw, 4.5rem);
    font-weight: 800;
    line-height: 1.1;
    margin: 0 0 1.5rem 0;
    letter-spacing: -0.02em;
  }

  .text-gradient {
    background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .intro {
    font-size: 1.125rem;
    line-height: 1.6;
    color: var(--text-secondary);
    max-width: 500px;
    margin-bottom: 2rem;
  }

  .name-highlight {
    color: var(--text-primary);
    font-weight: 600;
  }

  .specs {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
  }

  .spec-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-primary);
  }

  :global(.accent-icon) {
    color: var(--accent-2);
  }

  /* Actions */
  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 3rem;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 1.75rem;
    border-radius: 14px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  .btn-primary {
    background: var(--text-primary);
    color: var(--bg-color);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px -10px rgba(var(--text-primary), 0.3);
  }

  .btn-secondary {
    background: var(--surface-1);
    color: var(--text-primary);
    border: 1px solid var(--surface-2);
  }

  .btn-secondary:hover {
    background: var(--surface-2);
    transform: translateY(-2px);
  }

  /* Socials */
  .socials {
    display: flex;
    gap: 1rem;
  }

  .social-link {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    color: var(--text-secondary);
    background: var(--surface-1);
    border: 1px solid transparent;
    transition: all 0.2s;
  }

  .social-link:hover {
    color: var(--text-primary);
    background: var(--surface-2);
    border-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  /* -------------------
     iPhone 15 Pro Construction 
     ------------------- */
  .visual {
    position: relative;
    display: flex;
    justify-content: center;
    perspective: 2000px;
    height: 700px;
    align-items: center;
  }

  .iphone-15-pro {
    width: 320px;
    height: 660px;
    background: #000;
    border-radius: 54px;
    position: relative;
    box-shadow:
      0 0 0 2px #444,
      /* Inner bezel frame line */ 0 0 0 5px #2a2a2a,
      /* Titanium Frame */ 0 0 0 6px #111,
      /* Outer edge */ 0 30px 80px -20px rgba(0, 0, 0, 0.6);
    z-index: 10;
  }

  /* Physical Buttons */
  .buttons {
    position: absolute;
  }
  .buttons.left {
    left: -8px;
    top: 120px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .buttons.right {
    right: -8px;
    top: 180px;
  }
  .button {
    background: #2a2a2a;
    border-radius: 4px;
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
  }
  .silent {
    width: 3px;
    height: 30px;
  }
  .vol-up {
    width: 3px;
    height: 50px;
  }
  .vol-down {
    width: 3px;
    height: 50px;
  }
  .power {
    width: 3px;
    height: 80px;
  }

  /* Screen Area */
  .screen-content {
    background: var(--phone-bg);
    color: var(--phone-text);
    width: 100%;
    height: 100%;
    border-radius: 48px;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    --phone-bg: #fff;
    --phone-text: #000;
    --phone-surface: rgba(0, 0, 0, 0.05);
    --phone-bubble-user: #007aff;
    --phone-bubble-me: #f2f2f7;
    --phone-input-bg: rgba(255, 255, 255, 0.9);
  }

  :global(.dark) .screen-content {
    --phone-bg: #1c1c1e;
    --phone-text: #fff;
    --phone-surface: rgba(255, 255, 255, 0.1);
    --phone-bubble-user: #007aff;
    --phone-bubble-me: #3a3a3c;
    --phone-input-bg: rgba(44, 44, 46, 0.9);
  }

  .dynamic-island {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 28px;
    background: #000;
    border-radius: 20px;
    z-index: 20;
  }

  .status-bar {
    padding: 14px 28px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--phone-text);
    font-size: 14px;
    font-weight: 600;
    z-index: 10;
  }
  .status-icons {
    display: flex;
    gap: 6px;
    align-items: center;
  }
  .signal {
    width: 16px;
    height: 12px;
    background: currentColor;
    mask: url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 22h20V2L2 22z" fill="black"/></svg>')
      no-repeat center/contain;
    -webkit-mask: url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 22h20V2L2 22z" fill="black"/></svg>')
      no-repeat center/contain;
  }
  .wifi {
    width: 16px;
    height: 12px;
    background: currentColor;
    mask: url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z" fill="black"/></svg>')
      no-repeat center/contain;
    -webkit-mask: url('data:image/svg+xml;utf8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z" fill="black"/></svg>')
      no-repeat center/contain;
  }

  .battery-container {
    display: flex;
    align-items: center;
    gap: 1px;
  }
  .battery {
    width: 22px;
    height: 11px;
    border: 1px solid currentColor;
    border-radius: 3px;
    position: relative;
    opacity: 0.8;
  }
  .battery::after {
    content: "";
    position: absolute;
    left: 1.5px;
    top: 1.5px;
    bottom: 1.5px;
    right: 4px;
    background: currentColor;
    border-radius: 1px;
  }
  .battery-tip {
    width: 1.5px;
    height: 4px;
    background: currentColor;
    border-radius: 0 1px 1px 0;
    opacity: 0.5;
  }

  /* -------------------
     App Content 
     ------------------- */
  /* App Header & Navigation - Neat & Clean */
  .app-header {
    width: 100%;
    padding: 8px 16px;
    height: 60px;
    background: transparent;
    z-index: 40;
    display: flex;
    align-items: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .app-header.chat {
    background: var(--phone-input-bg);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    border-bottom: 1px solid var(--phone-surface);
  }
  .back-link {
    display: flex;
    align-items: center;
    gap: 4px;
    background: none;
    border: none;
    color: #007aff;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    padding: 0;
    margin-right: 12px;
  }
  .back-icon {
    transition: transform 0.2s;
  }
  .back-link:hover .back-icon {
    transform: rotate(180deg) translateX(2px);
  }

  .header-chat-info {
    display: flex;
    flex-direction: column;
  }
  .chat-name {
    color: var(--phone-text);
    font-size: 0.95rem;
    font-weight: 700;
    line-height: 1.2;
  }
  .chat-status {
    color: #4ade80;
    font-size: 0.75rem;
    font-weight: 600;
    opacity: 0.9;
  }

  /* Telegram-Style Profile View */
  .profile-view.telegram {
    padding-top: 0;
  }
  .profile-masthead {
    position: relative;
    width: calc(100% + 32px);
    margin: 0 -16px 0;
    height: 320px;
    background: var(--phone-surface);
  }
  .masthead-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .masthead-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 30px 24px 18px;
    color: #fff;
    z-index: 1;
  }
  .masthead-overlay::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.4) 60%,
      transparent 100%
    );
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    mask-image: linear-gradient(to top, black 20%, transparent 100%);
    -webkit-mask-image: linear-gradient(to top, black 20%, transparent 100%);
    z-index: -1;
    pointer-events: none;
  }
  .masthead-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 12px;
  }
  .masthead-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .masthead-name {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: -0.01em;
  }
  .masthead-status-row {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .status-dot {
    width: 8px;
    height: 8px;
    background: #4ade80;
    border-radius: 50%;
    box-shadow: 0 0 8px rgba(74, 222, 128, 0.6);
  }
  .masthead-status {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 600;
    opacity: 0.9;
  }

  .masthead-cta {
    background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
    border: none;
    color: #fff;
    padding: 10px 16px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 10px 20px -5px rgba(56, 189, 248, 0.4);
  }
  .masthead-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px -5px rgba(56, 189, 248, 0.6);
  }
  .masthead-cta:active {
    transform: scale(0.95);
  }

  .profile-info-grid {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .info-row {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--phone-surface);
  }
  .info-key {
    font-size: 0.75rem;
    color: var(--phone-text);
    opacity: 0.5;
    font-weight: 500;
  }
  .info-val {
    font-size: 0.95rem;
    color: var(--phone-text);
    line-height: 1.4;
    margin: 0;
  }
  .info-val.link {
    color: #007aff;
    cursor: pointer;
  }

  .media-section {
    padding: 0 16px 40px;
  }
  .media-header {
    font-size: 0.85rem;
    font-weight: 700;
    color: #007aff;
    margin-bottom: 12px;
  }
  .media-preview {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
  }
  .media-item {
    aspect-ratio: 1;
    border-radius: 8px;
    overflow: hidden;
    background: var(--phone-surface);
  }
  .media-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .app-scroll-container {
    flex: 1;
    overflow-y: auto;
    padding: 10px 16px 100px;
    scrollbar-width: none;
  }
  .app-scroll-container.profile {
    padding: 0;
  }

  .chat-date-separator {
    text-align: center;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--phone-text);
    opacity: 0.3;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  /* Chat Interface */
  .chat-section {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .chat-history {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .message {
    max-width: 85%;
    padding: 10px 14px;
    border-radius: 16px;
    font-size: 0.85rem;
    line-height: 1.4;
    position: relative;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  }
  .message.me {
    align-self: flex-start;
    background: var(--phone-bubble-me);
    color: var(--phone-text);
    border-bottom-left-radius: 4px;
  }
  .message.user {
    align-self: flex-end;
    background: var(--phone-bubble-user);
    color: #fff;
    border-bottom-right-radius: 4px;
  }
  .message .time {
    font-size: 0.6rem;
    opacity: 0.4;
    margin-top: 4px;
    text-align: right;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.5);
      opacity: 0.5;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  .icon-box :global(svg) {
    stroke-width: 2.5;
  }

  .toggle {
    width: 36px;
    height: 20px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    position: relative;
  }
  :global(.dark) .toggle {
    background: rgba(255, 255, 255, 0.1);
  }
  .toggle.active {
    background: #34c759;
  }
  .toggle::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    background: #fff;
    border-radius: 50%;
    transition: 0.2s;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  .toggle.active::after {
    left: 18px;
  }
  .muted-icon {
    color: var(--phone-text);
    opacity: 0.2;
  }

  /* Fixed Input Bar */
  .chat-input-bar {
    position: absolute;
    bottom: 25px;
    left: 15px;
    right: 15px;
    background: var(--phone-input-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--phone-surface);
    border-radius: 24px;
    padding: 10px 14px;
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 30;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    transition:
      border-color 0.3s,
      box-shadow 0.3s;
  }

  .chat-input-bar.glow {
    animation: input-glow-pulse 1.5s ease-out forwards;
  }

  @keyframes input-glow-pulse {
    0% {
      border-color: rgba(0, 122, 255, 0.3);
      box-shadow: 0 0 0 0 rgba(0, 122, 255, 0.4);
    }
    30% {
      border-color: rgba(0, 122, 255, 1);
      box-shadow: 0 0 20px 4px rgba(0, 122, 255, 0.5);
    }
    100% {
      border-color: var(--phone-surface);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    }
  }

  .chat-input-bar textarea {
    flex: 1;
    background: none;
    border: none;
    color: var(--phone-text);
    font-size: 0.9rem;
    resize: none;
    max-height: 80px;
    padding: 4px 0;
    font-family: inherit;
  }
  .chat-input-bar textarea:focus {
    outline: none;
  }
  .chat-input-bar textarea::placeholder {
    color: var(--phone-text);
    opacity: 0.3;
  }
  .send-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #3b82f6;
    border: none;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.2s;
  }
  .send-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  .send-btn:hover:not(:disabled) {
    transform: scale(1.05);
    background: #2563eb;
  }

  .home-indicator {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: var(--phone-text);
    border-radius: 10px;
    z-index: 20;
    opacity: 0.2;
  }

  /* Background Ambient Spheres */
  .sphere {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
    z-index: -1;
    opacity: 0.35;
  }
  .sphere-1 {
    width: 400px;
    height: 400px;
    background: var(--accent-1);
    top: 10%;
    right: -100px;
  }
  .sphere-2 {
    width: 300px;
    height: 300px;
    background: var(--accent-2);
    bottom: 10%;
    left: 40%;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.4);
    }
    70% {
      box-shadow: 0 0 0 6px rgba(74, 222, 128, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(74, 222, 128, 0);
    }
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
  }

  @media (max-width: 960px) {
    .container {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 3rem;
    }

    .badge,
    .intro,
    .specs {
      margin-left: auto;
      margin-right: auto;
    }

    .specs {
      justify-content: center;
    }

    .actions {
      justify-content: center;
    }

    .socials {
      justify-content: center;
    }

    .visual {
      display: none;
    }
  }

  /* Drawer Styles */
  :global(.drawer-overlay) {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(8px);
    z-index: 2000;
  }
  :global(.drawer-content) {
    position: fixed;
    bottom: 12px;
    left: 12px;
    right: 12px;
    width: auto;
    max-height: 92vh;
    min-height: 400px;
    background: #fff;
    color: #000;
    border-radius: 32px;
    z-index: 2001;
    display: flex;
    flex-direction: column;
    outline: none;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
    --phone-surface: rgba(0, 0, 0, 0.05);
    --phone-bubble-user: #007aff;
    --phone-bubble-me: #f2f2f7;
  }
  :global(.dark .drawer-content) {
    background: #1c1c1e;
    color: #fff;
    --phone-surface: rgba(255, 255, 255, 0.1);
    --phone-bubble-user: #007aff;
    --phone-bubble-me: #3a3a3c;
  }

  .drawer-handle {
    width: 36px;
    height: 5px;
    background: currentColor;
    opacity: 0.2;
    border-radius: 10px;
    margin: 12px auto 8px;
    flex-shrink: 0;
  }

  .drawer-chat-header {
    padding: 16px 24px;
    border-bottom: 1px solid var(--phone-surface);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .drawer-chat-body {
    flex: 1;
    overflow-y: auto;
    padding: 24px 20px 100px;
    display: flex;
    flex-direction: column;
  }

  .drawer-input-bar {
    padding: 12px 16px 32px;
    background: transparent;
    display: flex;
    align-items: center;
    gap: 12px;
    border-top: 1px solid var(--phone-surface);
  }

  .drawer-input-bar textarea {
    flex: 1;
    background: var(--phone-surface);
    border: none;
    border-radius: 20px;
    padding: 10px 18px;
    color: currentColor;
    font-size: 1rem;
    resize: none;
    max-height: 100px;
    outline: none;
  }

  @media (min-width: 960px) {
    .visual {
      display: flex;
    }
  }
</style>
