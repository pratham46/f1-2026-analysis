// Pit Wall radio — a chatbot answering from this season's data.
//
// Answers come from a small LLM on server 2 (POST /api/chat), streamed as
// plain text so the reply appears as it is written: on 2 ARM cores a full
// answer takes ~10s, and a blank wait that long reads as broken.
// Mounted only once the analysis API has answered, so it never appears when
// server 2 is down.

const SUGGESTIONS = [
  "Who has won the most races?",
  "Who wins the next race?",
  "Which teammate battle is closest?",
  "Who is fastest on race pace?",
];

let mounted = false;

export function mountChat() {
  const base = window.F1_ANALYSIS_URL;
  if (mounted || !base) return;
  mounted = true;
  const url = base.replace(/\/api\/analysis$/, "/api/chat");

  const btn = document.createElement("button");
  btn.className = "radio-btn";
  btn.type = "button";
  btn.setAttribute("aria-expanded", "false");
  btn.setAttribute("aria-controls", "radio");
  btn.innerHTML = `<span class="radio-live" aria-hidden="true"></span>Ask the pit wall`;

  const box = document.createElement("section");
  box.id = "radio";
  box.className = "radio";
  box.hidden = true;
  box.setAttribute("aria-label", "Ask the pit wall");
  box.innerHTML = `
    <header class="radio-head">
      <strong>Pit wall radio</strong>
      <button type="button" class="radio-close" aria-label="Close chat">×</button>
    </header>
    <div class="radio-log" role="log" aria-live="polite"></div>
    <div class="radio-chips"></div>
    <form class="radio-form">
      <label class="sr-only" for="radio-q">Your question</label>
      <input id="radio-q" name="q" maxlength="300" autocomplete="off" placeholder="Ask about the 2026 season" required>
      <button type="submit">Send</button>
    </form>
    <p class="radio-note">Answered by a small AI model on our own server, from this season's data only. It can be wrong.</p>`;

  const log = box.querySelector(".radio-log");
  const form = box.querySelector("form");
  const input = box.querySelector("input");
  const send = form.querySelector("button");
  const chips = box.querySelector(".radio-chips");

  const say = (who, text) => {
    const p = document.createElement("p");
    p.className = `radio-msg radio-${who}`;
    p.textContent = text;
    log.append(p);
    log.scrollTop = log.scrollHeight;
    return p;
  };
  say("bot", "Radio check. Ask me anything about the 2026 season: wins, pace, tyres, the next race.");

  const toggle = (open) => {
    box.hidden = !open;
    btn.setAttribute("aria-expanded", String(open));
    if (open) input.focus();
    else btn.focus();
  };
  btn.addEventListener("click", () => toggle(box.hidden));
  box.querySelector(".radio-close").addEventListener("click", () => toggle(false));
  box.addEventListener("keydown", (e) => { if (e.key === "Escape") toggle(false); });

  async function ask(q) {
    say("me", q);
    const out = say("bot", "Copy, checking the data…");
    out.classList.add("radio-wait");
    send.disabled = input.disabled = true;
    try {
      const r = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ q }),
        signal: AbortSignal.timeout(120000),
      });
      if (!r.ok) {
        out.textContent = r.status === 429
          ? "Box, box. Too many questions; try again in a few minutes."
          : "The pit wall is busy with another question. Try again in a moment.";
        return;
      }
      const reader = r.body.getReader();
      const dec = new TextDecoder();
      let text = "";
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        text += dec.decode(value, { stream: true });
        out.textContent = text;
        out.classList.remove("radio-wait");
        log.scrollTop = log.scrollHeight;
      }
      if (!text) out.textContent = "No answer came back. Try asking again.";
    } catch {
      out.textContent = "Radio lost. The server did not answer; try again in a moment.";
    } finally {
      out.classList.remove("radio-wait");
      send.disabled = input.disabled = false;
      input.focus();
    }
  }

  for (const s of SUGGESTIONS) {
    const c = document.createElement("button");
    c.type = "button";
    c.textContent = s;
    c.addEventListener("click", () => { if (!send.disabled) ask(s); });
    chips.append(c);
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = input.value.trim();
    if (!q || send.disabled) return;
    input.value = "";
    ask(q);
  });

  document.body.append(box, btn);
}
