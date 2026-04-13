export function $(selector, root = document) {
  return root.querySelector(selector);
}

export function $$(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

export function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function safeJsonParse(value, fallback = null) {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

export function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function showToast(message) {
  const toast = $('#toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  if (toast._hideTimer) clearTimeout(toast._hideTimer);

  toast._hideTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

export function openSheet(id) {
  const el = typeof id === 'string' ? document.getElementById(id) : id;
  if (!el) return;
  el.classList.add('on');
  document.body.style.overflow = 'hidden';
}

export function closeSheet(id) {
  const el = typeof id === 'string' ? document.getElementById(id) : id;
  if (!el) return;
  el.classList.remove('on');

  const anyOpen = $$('.overlay.on').length > 0;
  document.body.style.overflow = anyOpen ? 'hidden' : '';
}

export function closeOverlay(id, event) {
  if (event?.target?.id === id) {
    closeSheet(id);
  }
}
