# 🎓 Student Card Generator

A simple and interactive **Student Card Generator** built using **HTML, CSS, and JavaScript**.

The application allows users to enter student details, validates the entered information, and dynamically generates a student card using JavaScript DOM manipulation.

---

## 🚀 Features

- Enter Student Name
- Enter Student ID
- Enter Branch
- Validate student details before generating the card
- Dynamically generate a student card
- Replace the previously generated card with a new card
- Reset the form after successful card generation
- Responsive and styled user interface
- External CSS for styling

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- DOM Manipulation
- Regular Expressions (RegEx)
- Git
- GitHub

---

## 📂 Project Structure

```text
JavaScript-Miniproject/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the structure of the Student Card Generator including:

- Student Name input
- Student ID input
- Branch input
- Generate Card button

### `style.css`

Contains all the external styling for:

- Page layout
- Form
- Input fields
- Button
- Generated student card
- Hover and focus effects
- Responsive design
- Card animation

### `script.js`

Contains the functionality of the application including:

- DOM element selection
- Event handling
- Input validation
- Regular expressions
- Array validation
- Dynamic element creation
- Removing the previous card
- Appending the newly generated card
- Form reset

---

## ✅ Input Validation

### Student Name

The student name accepts only alphabetic characters and spaces.

Example:

```text
Trisha Krishnappa ✅
Trisha123         ❌
Trisha@           ❌
```

### Student ID

The Student ID:

- Must contain exactly 10 characters
- Must contain only alphabets and numbers
- Cannot contain only alphabets
- Cannot contain only numbers
- Cannot contain special characters

Example:

```text
4MR23CS001  ✅
ABCDEFGHIJ  ❌
1234567890  ❌
4MR23CS@01  ❌
```

### Branch

The branch entered by the user is checked against an array of valid branches.

```javascript
const branches = ["CSE", "ISE", "ECE", "EEE", "AIML", "ME"];
```

If the entered branch is not present in the array, an alert is displayed.

---

## 💡 JavaScript Concepts Used

### DOM Selection

```javascript
document.getElementById()
document.querySelector()
```

These methods are used to access elements from the DOM.

### Event Handling

```javascript
form.addEventListener("submit", ...)
```

The application listens for the form's `submit` event.

### Preventing Default Form Behaviour

```javascript
event.preventDefault();
```

This prevents the browser from performing its default form submission and allows JavaScript to handle the data.

### Dynamic Element Creation

```javascript
document.createElement()
```

Student card elements are dynamically created using JavaScript.

### Adding Elements to the DOM

```javascript
appendChild()
```

The generated paragraphs are added to the student card, and the card is then added to the main container.

### Replacing the Previous Card

Before creating a new card, the existing generated card is selected:

```javascript
const oldCard = document.querySelector(".generatedCard");
```

If it exists:

```javascript
if (oldCard) {
    oldCard.remove();
}
```

The old card is removed before the new card is appended.

This prevents multiple student cards from accumulating on the page.

### Regular Expressions

Regular expressions are used to validate the Student Name and Student ID.

Example:

```javascript
/^[A-Za-z ]+$/
```

### Array Validation

The `includes()` method checks whether the entered branch exists in the available branches array.

```javascript
branches.includes(branchInput)
```

---

## 🔄 Application Workflow

```text
User enters student details
        ↓
Form is submitted
        ↓
Submit event is detected
        ↓
Default form submission is prevented
        ↓
Input values are retrieved
        ↓
Student Name is validated
        ↓
Student ID is validated
        ↓
Branch is validated
        ↓
Existing student card is removed
        ↓
New DOM elements are created
        ↓
Student information is inserted
        ↓
New card is added to the page
        ↓
Form is reset
```

---

## 🎯 Learning Outcomes

This mini-project demonstrates:

- HTML forms
- External CSS
- JavaScript DOM manipulation
- Event handling
- Form validation
- Regular expressions
- Arrays and `includes()`
- Dynamic HTML element creation
- Parent-child DOM relationships
- `appendChild()`
- `querySelector()`
- `remove()`
- Template literals
- Form reset
- Responsive web design
- Git and GitHub workflow

---

## ▶️ How to Run the Project

1. Clone the repository.

```bash
git clone https://github.com/Thrisha-2005/JavaScript-Miniproject.git
```

2. Open the project folder in VS Code.

3. Open `index.html` in a browser or use the VS Code Live Server extension.

4. Enter the student details.

5. Click **Generate Card**.

---

## 🔄 Git Workflow

After making changes:

```bash
git add .
git commit -m "Updated Student Card Generator"
git push
```

To get the latest changes:

```bash
git pull
```

---

## 👩‍💻 Author

**Thrisha**

Computer Science and Engineering

---

## 📌 Project Purpose

This project was developed to practice JavaScript fundamentals, DOM manipulation, event handling, input validation, CSS styling, and Git/GitHub version control.
