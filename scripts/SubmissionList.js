// export function that returns html of the submission list
export const submissionList = async () => {
    // fetch submissions and extract json
    const response = await fetch("http://localhost:8088/submissions")
    const submissions = await response.json()

    let html = `
        <div id="survey-submission-list">
            <h2>Survey Submissions</h2>
    `
    // use map() to create list

    const submissionsHTML = submissions.map((submission) => {
        return `
            <section class="survey-submission-container">
                <h2>Submission ${submission.id}</h2>
                <p>Owns Blue Jeans: ${submission.ownsBlueJeans}</p>
                <p>Location ID: ${submission.socioLocationId}</p>
            </section>
        `
    })

    // Join the array of strings into a single string and add to our HTML
    html += submissionsHTML.join("")

    html += `
        </div>
    `
    return html
}
