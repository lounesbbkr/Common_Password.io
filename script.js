// Original search function
function search() {
    var searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();
    var searchResults = document.getElementById("searchResults");

    // Clear previous results
    searchResults.innerHTML = "";

    // Assuming 'other_data.js' defines an array named 'words'
    var database = words;  // Change 'words' to the actual variable name in your other data file
    
    // Perform search in the array
    var results = database.filter(function(item) {
        return item.toLowerCase().includes(searchTerm);
    });

    // Display results in the searchResults element
    if (results.length === 0) {
        var li = document.createElement("li");
        li.textContent = "No words found.";
        searchResults.appendChild(li);
    } else {
        results.forEach(function(result) {
            var li = document.createElement("li");
            li.textContent = result;
            searchResults.appendChild(li);
        });
    }
}

// Trigger search on 'Enter' key press or button click
document.getElementById('searchInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        search();
    }
});
