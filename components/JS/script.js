document.addEventListener("DOMContentLoaded", function() {
  // Ocultar el loader
  document.getElementById("loader").style.display = "none";
});


// Search    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("search");
    const searchResults = document.getElementById("searchResults");

    searchForm.addEventListener("submit", function(event) {
      event.preventDefault(); 

      const searchTerm = searchInput.value;


      searchResults.innerHTML = `Resultados de búsqueda para: ${searchTerm}`;
    });


