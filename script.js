// code written by sunny
document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.querySelector('.hero button');
    searchButton.addEventListener('click', function () {
        
        document.querySelector('#search').scrollIntoView({ behavior: 'smooth' });
    });
    const searchInput = document.querySelector('#search-input');
    const searchResults = document.querySelector('#search-results');
    function performFuzzySearch(query) {
        const mockData = ['Suresh', 'Ramesh', 'Mahesh', 'Rajesh', 'Sursh'];
        const results = mockData.filter(name => name.toLowerCase().includes(query.toLowerCase()));
        return results.length ? results : ['No matching records found'];
    }
    document.querySelector('#search-button').addEventListener('click', function () {
        const query = searchInput.value.trim();
        if (query) {
            const results = performFuzzySearch(query);
            displaySearchResults(results);
        } else {
            searchResults.innerHTML = '<p>Please enter a name to search.</p>';
        }
    });
    function displaySearchResults(results) {
        searchResults.innerHTML = results.map(result => `<p>${result}</p>`).join('');
    }

});
