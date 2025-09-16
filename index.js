
window.addEventListener("scroll", () => {
  const progress_bar = document.getElementById("progress-bar");
  const scroll_height = document.documentElement.scrollHeight;
  const client_height = document.documentElement.clientHeight;

  const position = 100 * window.scrollY / (scroll_height - client_height);

  progress_bar.style.marginLeft = `calc(${position}% - 200px)`;

})
