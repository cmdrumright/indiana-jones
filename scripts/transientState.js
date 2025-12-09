const transientState = {
    ownsBlueJeans: false,
    socioLocationId: 0
}

export const setOwnsBlueJeans = (chosenOwnership) => {
    transientState.ownsBlueJeans = chosenOwnership
}

export const setSocioLocationId = (chosenLocation) => {
    transientState.socioLocationId = chosenLocation
}

export const saveSurveySubmission = async () => {
    console.log("Saving survey to database...")
    console.log(transientState)
    // Create the options for fetch()
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    // Send the data to the API
    const response = await fetch("http://localhost:8088/submissions", postOptions)
}
