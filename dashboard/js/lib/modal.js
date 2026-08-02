// One <dialog> shared by the race modal and the driver modal.
//
// Native <dialog> gives focus trapping, Escape-to-close and background
// inertness for free — the old build hand-rolled all three and got the
// keyboard path wrong.

const el = () => document.getElementById("modal");

let onCloseHook = null;

export function openModal({ title, body, onClose = null }) {
  const dlg = el();
  if (!dlg) return;
  document.getElementById("modal-title").textContent = title || "";
  const host = document.getElementById("modal-body");
  host.replaceChildren();
  if (typeof body === "string") host.innerHTML = body;
  else if (body instanceof Node) host.append(body);
  onCloseHook = onClose;
  dlg.showModal();
}

export function closeModal() {
  el()?.close();
}

// Anything mounted into the modal that owns resources — a WebGL context, a
// Plotly instance — registers its teardown here. Without this the race modal
// leaks a renderer per open until the browser starts dropping contexts.
export function initModal() {
  const dlg = el();
  if (!dlg) return;
  document.getElementById("modal-close")?.addEventListener("click", closeModal);
  dlg.addEventListener("close", () => {
    try {
      onCloseHook?.();
    } catch (e) {
      console.error("[modal] close hook failed", e);
    } finally {
      onCloseHook = null;
      document.getElementById("modal-body").replaceChildren();
    }
  });
  // Click outside the dialog surface closes it.
  dlg.addEventListener("click", (e) => {
    if (e.target === dlg) closeModal();
  });
}
