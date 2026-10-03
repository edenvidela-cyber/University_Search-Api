//the button and the container where University names will go!
const fetchButton = document.getElementById("Fetch'em");
const container = document.getElementById("university-container");

//Define the Await function to handle the API call
async function call_get_api() {
    // Clear container before each new search
    container.innerHTML = "";

    try {
        //Fetch API: Making a GET request
        const response = await fetch("http://universities.hipolabs.com/search?country=canada");
        
        // Check if the response is okay (hopefully is!)
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        //Parses data as JSON
        const universities = await response.json();

        //Dynamic Creation: Loops through every university in the results
        universities.forEach(uni => {
            // Create a new paragraph element, card-like-ish
            const uniCard = document.createElement("p");
            
            // Add a class for stylistic purposes!
            uniCard.classList.add("university-card");

            // Set content: Name Country and Domain
            uniCard.innerHTML = `<strong>${uni.name}</strong><br>
                                 <span>Country: ${uni.country}</span><br>
                                 <span>Domain: ${uni.domains[0]}</span>`;

            //DOM Injection: Attach new crated paragraph to the container
            container.appendChild(uniCard);
        });

    } catch (error) {
        //Error Handling: Log any issues
        console.error("Error occurred - " + error.message);
        container.innerHTML = "<p>Sorry, we couldn't load the universities right now.</p>";
    }
}

//Event Listener, trigger fetch on click
fetchButton.addEventListener("click", call_get_api);
console.log(fetch)


//Footer visibility toggle
document.getElementById("Fetch'em").addEventListener('click', function() {
  document.getElementById('myFooter').classList.toggle('main-footer');
});

