import { JeanChoices } from "./JeanChoices.js"
import { LocationChoices } from "./LocationChoices.js"
import { SubmissionButton } from "./SubmissionButton.js"
import { submissionList } from "./SubmissionList.js"

const container = document.querySelector("#container")

const render = async () => {
    const jeansHTML = JeanChoices()
    const locationsHTML =  await LocationChoices()
    const buttonHTMl = SubmissionButton()
    const submissionsHTML = await submissionList()

    container.innerHTML = `
        ${jeansHTML}
        ${locationsHTML}
        ${buttonHTMl}
        ${submissionsHTML}
    `
}

document.addEventListener("newSubmissionCreated", render)

render()
