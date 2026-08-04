const container = document.getElementById("container");
const form = document.getElementById("form");
const studentName = document.getElementById("studentName");
const studentId = document.getElementById("studentId");
const branch = document.getElementById("branch");

const branches = ["CSE", "ISE", "ECE", "EEE", "AIML", "ME"];

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const studentNameInput = studentName.value;
    const studentIdInput = studentId.value.trim().toUpperCase();
    const branchInput = branch.value.trim().toUpperCase();

    if (!/^[A-za-z]+$/.test(studentNameInput)) {
        alert("Incorrect Student name")
        return;
    }


    // 2. Student ID Validation

    if (
    studentIdInput.length !== 10 ||
    /^[A-Za-z]+$/.test(studentIdInput) ||
    /^[0-9]+$/.test(studentIdInput) ||
    !/^[A-Za-z0-9]+$/.test(studentIdInput)
) {
    alert("Incorrect Student ID");
    return;
}


    // 3. Branch Validation

    if (!branches.includes(branchInput)) {
        alert("Invalid Branch")
    }



    const oldCard = document.querySelector(".generatedCard");

    if (oldCard) {
        oldCard.remove();
    }

    const jsCard = document.createElement("div");
    jsCard.className = "generatedCard";

    const jsStuName = document.createElement("p");
    const jsStuId = document.createElement("p");
    const jsBranch = document.createElement("p");

    jsStuName.textContent =
        `Student Name: ${studentNameInput}`;

    jsStuId.textContent =
        `Student ID: ${studentIdInput}`;

    jsBranch.textContent =
        `Student Branch: ${branchInput}`;

    jsCard.appendChild(jsStuName);
    jsCard.appendChild(jsStuId);
    jsCard.appendChild(jsBranch);

    container.appendChild(jsCard);

    form.reset();
});