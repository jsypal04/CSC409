
window.addEventListener("scroll", () => {
  const progress_bar = document.getElementById("progress-bar");
  const scroll_height = document.documentElement.scrollHeight;
  const client_height = document.documentElement.clientHeight;

  const progress_width = window.innerWidth + 200;

  const scroll_percent = window.scrollY / (scroll_height - client_height);

  console.log(progress_width);
  console.log(scroll_percent);

  console.log(scroll_percent * progress_width);

  progress_bar.style.marginLeft = `calc(${scroll_percent * progress_width}px - 200px)`;

})
