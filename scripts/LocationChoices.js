import { setSocioLocationId } from "./transientState.js"

const handleLocationChange = (changeEvent) => {
    if (changeEvent.target.name === "location") {
        const convertedToInt = parseInt(changeEvent.target.value)
        setSocioLocationId(convertedToInt)
    }
}

export const LocationChoices =  async () => {
    document.addEventListener("change", handleLocationChange)

    // DONE: Fetch locations from the API
    const response = await fetch("http://localhost:8088/socioLocations")
    const locations = await response.json()


    let html = `
        <div class="survey-input">
            <h2>What type of area do you live in?</h2>
    `

    // DONE: generate radio buttons and add to html
    const locationsHTML = locations.map((location) => {
        html += `<input type="radio" name="location" value="${location.id}" /> ${location.label}`
    })
    
    html += locationsHTML.join("")

    html += `
        </div>
    `

    return html
}
