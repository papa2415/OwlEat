// 事件委派：點到任一 data-seg-btn 就處理所在群組
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-seg-btn]");
  if (!btn) return;
  const group = btn.closest("[data-seg-group]");
  if (!group) return;

  group.querySelectorAll("[data-seg-btn]").forEach((b) => {
    b.dataset.on = "false";
    b.setAttribute("aria-pressed", "false");
    b.setAttribute("data-on", "false");
  });
  btn.dataset.on = "true";
  btn.setAttribute("aria-pressed", "true");
  btn.setAttribute("data-on", "true");
});
