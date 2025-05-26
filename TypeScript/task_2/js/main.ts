// DirectorInterface with 3 expected methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface with 3 expected methods
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// createEmployee function that returns Director or Teacher based on salary
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Task 6: Creating functions specific to employees

// Type predicate function to check if employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Function that executes work based on employee type
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Testing examples as specified in the requirements
console.log(createEmployee(200));  // Should return Teacher instance
console.log(createEmployee(1000)); // Should return Director instance
console.log(createEmployee('$500')); // Should return Director instance

// Additional examples to demonstrate the methods
const teacher = createEmployee(200) as Teacher;
console.log(teacher.workFromHome());     // "Cannot work from home"
console.log(teacher.getCoffeeBreak());   // "Cannot have a break"
console.log(teacher.workTeacherTasks()); // "Getting to work"

const director = createEmployee(1000) as Director;
console.log(director.workFromHome());      // "Working from home"
console.log(director.getCoffeeBreak());    // "Getting a coffee break"
console.log(director.workDirectorTasks()); // "Getting to director tasks"

// Task 6: Testing the new functions
console.log(executeWork(createEmployee(200)));  // "Getting to work"
console.log(executeWork(createEmployee(1000))); // "Getting to director tasks" 