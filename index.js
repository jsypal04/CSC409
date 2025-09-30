
window.addEventListener("scroll", () => {
  const progress_bar = document.getElementById("progress-bar");
  const scroll_height = document.documentElement.scrollHeight;
  const client_height = document.documentElement.clientHeight;

  const progress_width = window.innerWidth + 200;

  const scroll_percent = window.scrollY / (scroll_height - client_height);

  progress_bar.style.marginLeft = `${scroll_percent * progress_width - 200}px`;
});


const toc = document.getElementById("main-TOC");

function toc_listener() {
  if (toc.style.display === 'none') {
    toc.style.display = 'block';
  }
  else if (toc.style.display === 'block') {
    toc.style.display = 'none';
  }
  else {
    console.log(toc.style.display, "THIS CASE SHOULD NEVER HAPPEN.");
  }
}

const contents = document.getElementById("contents");
contents.addEventListener("click", toc_listener);

const menu = document.getElementById("menu-button");
menu.addEventListener("click", toc_listener);

document.addEventListener("click", (event) => {
  if (
    !toc.contains(event.target) && 
    !(contents.contains(event.target) || menu.contains(event.target)) && 
    toc.style.display !== "none"
  ) {

    toc.style.display = "none";
  }
});
