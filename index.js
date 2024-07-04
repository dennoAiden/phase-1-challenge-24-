const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getStudentGrade() {
  function promptForMarks() {
    rl.question('Enter student marks (0-100): ', (marks) => {
      // Convert the input to a number
      marks = Number(marks);

      // Check if the input is a valid number and within the range 0-100
      if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input. Please enter a number between 0 and 100.");
        promptForMarks();  // Prompt the user again
        return;
      }

      // Determine the grade based on the marks
      let grade;
      if (marks > 79) {
        grade = 'A';
      } else if (marks >= 60) {
        grade = 'B';
      } else if (marks >= 50) {
        grade = 'C';
      } else if (marks >= 40) {
        grade = 'D';
      } else {
        grade = 'E';
      }

      // Output the grade
      console.log(`The grade for marks ${marks} is: ${grade}`);
      rl.close();
    });
  }

  promptForMarks();  // Initial call to prompt the user
}

getStudentGrade();
