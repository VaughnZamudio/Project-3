
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("#navigation a");
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.style.fontWeight = "bold";
      link.style.textDecoration = "underline";
    }
  });
});
