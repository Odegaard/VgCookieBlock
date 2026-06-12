const SITES = [
  "vg.no",
  "e24.no",
  "aftenposten.no",
  "dagbladet.no",
  "nettavisen.no",
  "tv2.no",
  "bt.no",
  "dn.no",
  "sa.no",
  "fvn.no",
  "adressa.no",
  "smp.no",
  "ba.no",
  "rb.no",
  "hegnar.no",
  "tek.no",
  "dinside.no",
  "kode24.no",
];

const host = location.hostname.replace(/^www\./, "");

if (SITES.some(s => host === s || host.endsWith("." + s))) {
  const clean = () => {
    document.querySelectorAll(
      '.message-overlay, [id^="sp_message"], [id^="sp-message"], .sp_message-wrapper, #sp_message_container, #sp-overlay'
    ).forEach(el => el.remove());

    const html = document.documentElement;
    html.classList.remove("sp-message-open");

    for (const el of [html, document.body]) {
      if (!el) continue;
      el.style.removeProperty("overflow");
      el.style.removeProperty("position");
      el.style.removeProperty("top");
      el.style.removeProperty("height");
    }

    const savedY = html.dataset.previousScrollY;
    if (savedY) {
      const y = parseFloat(savedY) || 0;
      if (y !== 0) window.scrollTo(0, Math.abs(y));
      delete html.dataset.previousScrollY;
    }
  };

  new MutationObserver(mutations => {
    const triggered = mutations.some(m => {
      if (m.type === "childList") {
        return [...m.addedNodes].some(node => {
          if (node.nodeType !== 1) return false;
          const id = node.id || "";
          return (
            node.classList?.contains("message-overlay") ||
            node.classList?.contains("sp_message-wrapper") ||
            id.startsWith("sp_message") ||
            id.startsWith("sp-message")
          );
        });
      }
      return (
        m.type === "attributes" &&
        m.target === document.documentElement &&
        m.attributeName === "class" &&
        document.documentElement.classList.contains("sp-message-open")
      );
    });

    if (triggered) clean();
  }).observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class"],
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", clean);
  } else {
    clean();
  }
}
