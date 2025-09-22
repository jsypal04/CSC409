
window.addEventListener("scroll", () => {
  const progress_bar = document.getElementById("progress-bar");
  const scroll_height = document.documentElement.scrollHeight;
  const client_height = document.documentElement.clientHeight;

  const progress_width = window.innerWidth + 200;

  const scroll_percent = window.scrollY / (scroll_height - client_height);

  progress_bar.style.marginLeft = `${scroll_percent * progress_width - 200}px`;
});

const contents = document.getElementById("contents");
contents.addEventListener("click", () => {
  const toc = document.getElementById("main-TOC");
  if (toc.style.display === 'none') {
    toc.style.display = 'block';
  }
  else if (toc.style.display === 'block') {
    toc.style.display = 'none';
  }
  else {
    console.log(toc.style.display, "THIS CASE SHOULD NEVER HAPPEN.");
  }
});
