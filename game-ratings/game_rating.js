document.addEventListener("DOMContentLoaded", function () {
  // Render star ratings visually
  const ratings = document.querySelectorAll("[data-rating]");
  ratings.forEach(span => {
    const rating = parseInt(span.dataset.rating);
    span.textContent = "★".repeat(rating) + "☆".repeat(5 - rating);
  });

  // Add Enter key listener on search bar to trigger filter
  const searchBar = document.getElementById("searchBar");
  searchBar.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default
      applyFilter();
    }
  });

  // Add click listener on search button
  const searchButton = document.getElementById("searchButton");
  searchButton.addEventListener("click", applyFilter);

  // Add toggle for "more" buttons
  document.querySelectorAll('.toggle-more').forEach(button => {
    button.addEventListener('click', () => {
      const moreContent = button.nextElementSibling;
      if (moreContent.classList.contains('show')) {
        // Collapse
        moreContent.classList.remove('show');
        button.textContent = 'More';
      } else {
        // Expand
        moreContent.classList.add('show');
        button.textContent = 'Less';
      }
      updateGridAlignment();
    });
  });

  updateGridAlignment();
});

function applyFilter() {
  const searchTerm = document.getElementById("searchBar").value.toLowerCase();
  const selectedTag = document.getElementById("tagFilter").value.toLowerCase();
  const articles = document.querySelectorAll("#gameList article");

  articles.forEach(article => {
    const title = article.querySelector("h3").textContent.toLowerCase();
    // Split tags into array and trim spaces for exact matching
    const tagsArray = article.dataset.tags.toLowerCase().split(',').map(tag => tag.trim());

    const matchesSearch = title.includes(searchTerm);
    const matchesTag = selectedTag === "all" || tagsArray.includes(selectedTag);

    if (matchesSearch && matchesTag) {
      article.style.display = "";
    } else {
      article.style.display = "none";
    }
  });

  updateGridAlignment();
}


function updateGridAlignment() {
  const grid = document.querySelector('.game-grid');
  const visibleArticles = Array.from(grid.querySelectorAll('article'))
    .filter(article => article.style.display !== "none");

  if (visibleArticles.length === 1 || visibleArticles.length === 2) {
    grid.style.justifyContent = 'center';
  } else {
    grid.style.justifyContent = 'start';
  }
}
