 async function loadQuote() {
    try {
        const res = await fetch("https://dummyjson.com/quotes/random");
        const data = await res.json();

        document.getElementById("quoteText").innerText = `"${data.quote}"`;
        document.getElementById("quoteAuthor").innerText = `— ${data.author}`;
    } catch (error) {
        document.getElementById("quoteText").innerText = "Could not load quote.";
    }
}
loadQuote();
