// Some starter code
const container = document.querySelector("#addressList")

document.querySelector("#saveEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const favoriteItem = document.querySelector("#favoriteItem").value
    const location = document.querySelector("#storeLocation").value

    // Once you have collected all the values, update the DOM
    // with some HTML
    container.innerHTML += `
        <section>
            <h1>I can purchase ${favoriteItem} from ${location}.</h1>
        </section>
    `
    // After clicking the submit button, having the value = an empty string resets the fields for new entries.
        document.querySelector("#favoriteItem").value = ''
        document.querySelector("#storeLocation").value = ''
        
})