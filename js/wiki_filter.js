function getSelectedValues(filterElement) {
  const checked = Array.from(
    filterElement.querySelectorAll("input:checked")
  ).map(input => input.value);
  if (checked.length === 0 && filterElement.classList.contains("wiki-filter-status")) {
    return ["wiki-filter-status-current","wiki-filter-status-beta"];
  }
  return checked;
}

const checkboxes = document.querySelectorAll("input");

checkboxes.forEach(checkbox => {
  checkbox.addEventListener("change", () => {
    applyFilters();
  });
});

function updateTitle(filter) {
  selected = filter.querySelectorAll('input:checked')
  title = filter.querySelector(".wiki-filter-title");

  if (!title.hasAttribute('data-default_title')) {
    title.dataset.default_title = title.textContent;
  }

  if (selected.length === 0) {
    title.textContent = title.dataset.default_title;
  } else if (selected.length === 1) {
    title.textContent = selected[0]
      .closest("label")
      .querySelector("span")
      .textContent;
  } else {
    title.textContent = `${selected.length} selected`;
  }
}

function clearFilters() {
  checkboxes.forEach(checkbox => checkbox.checked = false);
  applyFilters();
}

function applyFilters() {
  const items = document.querySelectorAll(".wiki-preview");
  const filters = document.querySelectorAll(".wiki-filter");

  let filtered = Array.from(items);

  filters.forEach(
    filter => {
      updateTitle(filter);
      const filter_array = getSelectedValues(filter);
      if (filter_array.length > 0) {
        filtered= filtered.filter(
          el => filter_array.some(
            selected => el.classList.contains(selected)
          )
        )
      }
    }
  );

  items.forEach(el => el.style.display = 'none');
  filtered.forEach(el => el.style.display = 'block');

  count_text = document.querySelector(".wiki-filters-count");

  let plural = "s";
  if (filtered.length === 1) {
    plural = "";
  }
  count_text.textContent = `${filtered.length} feature${plural} found`;
}

document.addEventListener("DOMContentLoaded", () => {
  applyFilters();
});