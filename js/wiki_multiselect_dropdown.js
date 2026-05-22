const multiselects = document.querySelectorAll(".wiki-filter");

multiselects.forEach(multiselect => {
  const toggle = multiselect.querySelector(".wiki-filter button");

  toggle.addEventListener("click", e => {
    e.stopPropagation();

    multiselects.forEach(other => {
      if (other !== multiselect) {
        const menu = other.querySelector(".wiki-filter-options");
        menu.scrollTop = 0;
        other.classList.remove("open");
      }
    });

    const menu = multiselect.querySelector(".wiki-filter-options");
    menu.scrollTop = 0;
    multiselect.classList.toggle("open");
  });
  multiselect.addEventListener("click", e => {
    e.stopPropagation();
  });
});

document.addEventListener("click", () => {
  multiselects.forEach(multiselect => {
    const menu = multiselect.querySelector(".wiki-filter-options");
    menu.scrollTop = 0;
    multiselect.classList.remove("open");
  });
});