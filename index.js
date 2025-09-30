
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

const title_text = document.getElementById("title-text");
document.addEventListener("mousemove", (event) => {
  if (event.target === title_text) {
    const rect = title_text.getBoundingClientRect();

    const title_text_width = rect.right - rect.left;
    const title_text_height = rect.bottom - rect.top;

    const scaled_client_x = event.clientX - rect.left;
    const scaled_client_y = event.clientY - rect.top;

    const x_percent = scaled_client_x / title_text_width * 100;
    const y_percent = scaled_client_y / title_text_height * 100;

    title_text.style.background = `radial-gradient(circle at ${x_percent}% ${y_percent}%, #f2f2f2aa 20%, #757575aa 100%)`;
  }
})
