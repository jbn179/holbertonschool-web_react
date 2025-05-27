# Holberton School Web React

A comprehensive TypeScript learning project focusing on interfaces, classes, and advanced TypeScript features. This repository contains practical exercises demonstrating modern TypeScript development patterns and best practices.

## 📚 Project Overview

This project is part of the Holberton School curriculum for learning React and TypeScript. It covers fundamental TypeScript concepts including:

- **Interfaces** with readonly and dynamic properties
- **Interface inheritance** and extension
- **Function interfaces** and type definitions
- **Class implementation** with interfaces
- **TypeScript compilation** and type checking
- **Modern development tooling** (Webpack, Jest, ESLint)

## 🎯 Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- ✅ **Basic types in TypeScript**
- ✅ **Interfaces, Classes, and functions**
- ✅ **How to work with the DOM and TypeScript**
- ✅ **Generic types**
- ✅ **How to use namespaces**
- ✅ **How to merge declarations**
- ✅ **How to use an ambient Namespace to import an external library**
- ✅ **Basic nominal typing with TypeScript**

## ⚙️ Requirements

- **Allowed editors**: vi, vim, emacs, Visual Studio Code
- **All files should end with a new line**
- **All files will be transpiled on Ubuntu 18.04**
- **TS scripts will be checked with jest (version 24.9.*)**
- **A README.md file, at the root of the folder of the project, is mandatory**
- **Code should use the .ts extension when possible**
- **The TypeScript compiler should not show any warning or error when compiling your code**

## 🏗️ Project Structure

```
holbertonschool-web_react/
├── README.md
└── TypeScript/
    ├── task_0/          # Student interface with DOM manipulation
    │   ├── js/main.ts
    │   ├── package.json
    │   ├── tsconfig.json
    │   ├── webpack.config.js
    │   └── *.test.ts
    ├── task_1/          # Tasks 1-4: Interfaces & Classes
    │   ├── js/main.ts
    │   ├── teacher.test.ts
    │   ├── jest.config.js
    │   ├── package.json
    │   ├── tsconfig.json
    │   └── webpack.config.js
    ├── task_2/          # Tasks 5-7: Advanced Types (Union Types & Factory Pattern)
    │   ├── js/main.ts
    │   ├── advanced-types.test.ts    # 51 comprehensive tests
    │   ├── jest.config.js
    │   ├── jest.setup.js
    │   ├── package.json
    │   ├── tsconfig.json
    │   ├── webpack.config.js
    │   └── README.md
    ├── task_3/          # Task 8: Ambient Namespaces (External Library Integration)
    │   ├── js/
    │   │   ├── main.ts              # Main application with CRUD operations
    │   │   ├── interface.ts         # Type definitions (RowID, RowElement)
    │   │   ├── crud.js             # External CRUD library (JavaScript)
    │   │   ├── crud.d.ts           # Ambient declarations for CRUD functions
    │   │   ├── crud.test.ts        # CRUD function tests
    │   │   ├── main.test.ts        # Main application flow tests
    │   │   └── interface.test.ts   # Type and interface tests
    │   ├── jest.config.js          # Jest configuration
    │   ├── jest.setup.js           # Jest setup file
    │   ├── babel.config.js         # Babel configuration
    │   ├── package.json            # Project dependencies
    │   ├── tsconfig.json           # TypeScript configuration
    │   └── webpack.config.js       # Webpack configuration
    ├── task_4/          # Task 9: Namespace & Declaration Merging
    │   ├── js/subjects/
    │   │   ├── Teacher.ts          # Teacher interface in Subjects namespace
    │   │   ├── Subject.ts          # Subject base class with teacher attribute
    │   │   ├── Cpp.ts              # Cpp class with experienceTeachingC merging
    │   │   ├── React.ts            # React class with experienceTeachingReact merging
    │   │   └── Java.ts             # Java class with experienceTeachingJava merging
    │   ├── package.json            # Project dependencies
    │   └── tsconfig.json           # TypeScript configuration
    └── task_5/          # Task 10: Brand convention & Nominal typing
        ├── js/main.ts              # MajorCredits and MinorCredits interfaces with brand properties
        ├── package.json            # Project dependencies
        ├── tsconfig.json           # TypeScript configuration
        └── webpack.config.js       # Webpack configuration
```

## 📋 Tasks

## 📁 **Task_0 Directory** (Task 0)

### 📝 Task 0: Creating an interface for a student
- **Directory**: `TypeScript/task_0/`
- **Files**: `js/main.ts`, `package.json`, `.eslintrc.js`, `tsconfig.json`, `webpack.config.js`
- **Features**:
  - **Student interface** with `firstName`, `lastName`, `age`, `location` properties
  - **Array of students** (`student1`, `student2` stored in `studentsList`)
  - **DOM manipulation** with Vanilla JavaScript to render table
  - **Table rendering** displaying firstName and location for each student
  - **TypeScript compilation** with Webpack returning "No type errors found"

---

## 📁 **Task_1 Directory** (Tasks 1-4)

### 👨‍🏫 Task 1: Let's build a Teacher interface
- **Directory**: `TypeScript/task_1/`
- **Files**: `js/main.ts`, `package.json`, `tsconfig.json`, `webpack.config.js`
- **Features**:
  - **Teacher interface** with readonly `firstName` and `lastName`
  - **Required properties**: `fullTimeEmployee` (boolean), `location` (string)
  - **Optional property**: `yearsOfExperience` (number)
  - **Dynamic properties** using index signature `[key: string]: any`
  - **Example**: Adding `contract` property dynamically

### 📚 Task 2: Extending the Teacher class
- **Directory**: `TypeScript/task_1/`
- **File**: `js/main.ts`
- **Features**:
  - **Directors interface** extending `Teacher`
  - **Additional required property**: `numberOfReports` (number)
  - **Interface inheritance** demonstration
  - **Type safety** with extended interfaces

### ✍️ Task 3: Printing teachers
- **Directory**: `TypeScript/task_1/`
- **File**: `js/main.ts`
- **Features**:
  - **printTeacher function** accepting `firstName` and `lastName`
  - **String formatting**: `"John", "Doe"` → `"J. Doe"`
  - **printTeacherFunction interface** for function typing
  - **Type-safe function implementation**

### 🎓 Task 4: Writing a class
- **Directory**: `TypeScript/task_1/`
- **File**: `js/main.ts`
- **Features**:
  - **StudentClass** with constructor accepting `firstName` and `lastName`
  - **workOnHomework method** returning `"Currently working"`
  - **displayName method** returning student's firstName
  - **Constructor interface** and **class interface** descriptions
  - **Full class-interface integration**

---

## 📁 **Task_2 Directory** (Tasks 5-7)

### 🚀 Task 5: Advanced types Part 1
- **Directory**: `TypeScript/task_2/`
- **Files**: `js/main.ts`, `webpack.config.js`, `tsconfig.json`, `package.json`
- **Features**:
  - **DirectorInterface** with `workFromHome()`, `getCoffeeBreak()`, `workDirectorTasks()`
  - **TeacherInterface** with `workFromHome()`, `getCoffeeBreak()`, `workTeacherTasks()`
  - **Director class** implementing DirectorInterface
  - **Teacher class** implementing TeacherInterface
  - **createEmployee factory function** with union types (`number | string`)
  - **Business logic**: salary < 500 → Teacher, otherwise → Director

### 🎯 Task 6: Creating functions specific to employees
- **Directory**: `TypeScript/task_2/`
- **File**: `js/main.ts`
- **Features**:
  - **isDirector function** as type predicate (`employee is Director`)
  - **executeWork function** calling appropriate work methods
  - **Type narrowing** using type predicates
  - **Conditional execution** based on employee type
  - **Expected outputs**: `executeWork(createEmployee(200))` → `"Getting to work"`

### 🔤 Task 7: String literal types
- **Directory**: `TypeScript/task_2/`
- **File**: `js/main.ts`
- **Features**:
  - **Subjects string literal type** allowing only `'Math'` or `'History'`
  - **teachClass function** with string literal parameter
  - **Conditional returns**: `'Math'` → `'Teaching Math'`, `'History'` → `'Teaching History'`
  - **Type safety** preventing invalid string inputs
  - **Compile-time validation** of literal types

---

## 📁 **Task_3 Directory** (Task 8)

### 🌐 Task 8: Ambient Namespaces
- **Directory**: `TypeScript/task_3/`
- **Files**: `js/main.ts`, `js/interface.ts`, `js/crud.d.ts`
- **Features**:
  - **RowID type** set to number
  - **RowElement interface** with `firstName`, `lastName`, `age?`
  - **External library integration** with `crud.js`
  - **Ambient declarations** in `crud.d.ts`
  - **Triple slash directive** including dependencies
  - **CRUD operations** with type safety (`insertRow`, `updateRow`, `deleteRow`)
  - **IntelliSense support** for external functions

---

## 📁 **Task_4 Directory** (Task 9)

### 🏗️ Task 9: Namespace & Declaration merging
- **Directory**: `TypeScript/task_4/`
- **Files**: `package.json`, `tsconfig.json`, `js/subjects/Teacher.ts`, `js/subjects/Subject.ts`, `js/subjects/Cpp.ts`, `js/subjects/Java.ts`, `js/subjects/React.ts`
- **Features**:
  - **Subjects namespace** organizing all classes and interfaces
  - **Teacher interface** with `firstName` and `lastName` strings
  - **Subject class** with `teacher` attribute and `setTeacher` method
  - **Declaration merging** extending Teacher interface:
    - `Cpp.ts` adds `experienceTeachingC?: number`
    - `React.ts` adds `experienceTeachingReact?: number`
    - `Java.ts` adds `experienceTeachingJava?: number`
  - **Class inheritance** (Cpp, React, Java extending Subject)
  - **getRequirements methods** returning subject-specific requirements
  - **getAvailableTeacher methods** with conditional logic based on experience
  - **Type safety** across namespace boundaries

---

## 📁 **Task_5 Directory** (Task 10)

### 🏷️ Task 10: Brand convention & Nominal typing
- **Directory**: `TypeScript/task_5/`
- **Files**: `js/main.ts`, `package.json`, `webpack.config.js`, `tsconfig.json`
- **Features**:
  - **MajorCredits interface** with `credits` number and `brand: "major"` property
  - **MinorCredits interface** with `credits` number and `brand: "minor"` property
  - **Brand properties** for unique identification and nominal typing
  - **sumMajorCredits function** taking two MajorCredits and returning MajorCredits
  - **sumMinorCredits function** taking two MinorCredits and returning MinorCredits
  - **Type safety** preventing mixing of major and minor credits
  - **Nominal typing** ensuring compile-time distinction between similar types

## 🛠️ Technologies Used

- **TypeScript 4.9.5** - Main programming language
- **Webpack 5** - Module bundler and development server
- **Jest 29** - Testing framework with TypeScript support
- **ESLint** - Code linting and quality assurance
- **Node.js** - Runtime environment
- **HTML5 & DOM APIs** - Front-end rendering

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/holbertonschool-web_react.git
   cd holbertonschool-web_react
   ```

2. **Navigate to a TypeScript project:**
   ```bash
   # For Tasks 1-4 (Interfaces & Classes)
   cd TypeScript/task_1
   
   # For Tasks 5-7 (Advanced Types with Union Types & Factory Pattern)
   cd TypeScript/task_2
   
   # For Task 8 (Ambient Namespaces)
   cd TypeScript/task_3
   
   # For Task 9 (Namespace & Declaration Merging)
   cd TypeScript/task_4
   
   # For Task 10 (Brand convention & Nominal typing)
   cd TypeScript/task_5
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

### Development

1. **Start development server:**
   ```bash
   npm run start-dev
   ```
   Opens `http://localhost:8080` with hot-reload

2. **Build for production:**
   ```bash
   npm run build
   ```
   Generates optimized bundle in `dist/` folder

3. **Run tests:**
   ```bash
   npm test
   ```
   Executes Jest test suite with coverage

## 📋 Code Examples

### Teacher Interface Usage
```typescript
const teacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  contract: false,  // Dynamic property
};
```

### Directors Interface Usage
```typescript
const director: Directors = {
  firstName: 'Jane',
  lastName: 'Smith',
  fullTimeEmployee: true,
  location: 'Paris',
  numberOfReports: 15,
};
```

### Function Interface Usage
```typescript
const result = printTeacher('Marie', 'Curie');
console.log(result); // Output: "M. Curie"
```

### Class Usage
```typescript
const student = new StudentClass('Alice', 'Johnson');
console.log(student.displayName());     // Output: "Alice"
console.log(student.workOnHomework());  // Output: "Currently working"
```

### 🚀 Advanced Types Usage (Task 5)
```typescript
// Factory function with union types
const employee1 = createEmployee(200);   // Returns Teacher
const employee2 = createEmployee(1000);  // Returns Director  
const employee3 = createEmployee('$500'); // Returns Director

// Method calls with specific implementations
console.log(employee1.workFromHome());     // "Cannot work from home"
console.log(employee2.workFromHome());     // "Working from home"
console.log(employee1.workTeacherTasks()); // "Getting to work"
console.log(employee2.workDirectorTasks()); // "Getting to director tasks"
```

### 🎯 Employee-Specific Functions Usage (Task 6)
```typescript
// Type predicate function
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Function that executes work based on employee type
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}
```

### 🔤 String Literal Types Usage (Task 7)
```typescript
// String literal type allowing only specific values
type Subjects = 'Math' | 'History';

// Function with string literal type constraint
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

// Usage examples with expected outputs
console.log(teachClass('Math'));     // "Teaching Math"
console.log(teachClass('History'));  // "Teaching History"

// TypeScript will prevent invalid inputs at compile time
// teachClass('Science'); // ❌ TypeScript Error: Argument of type '"Science"' is not assignable
```

### 🌐 Ambient Namespaces Usage (Task 8)
```typescript
// Triple slash directive for ambient declarations
/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

// Type definitions
export type RowID = number;
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}

// Ambient declarations in crud.d.ts
declare function insertRow(row: RowElement): RowID;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): RowID;

// Usage with full type safety
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row);
// Output: Insert row { firstName: 'Guillaume', lastName: 'Salva' }

const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23,
};

CRUD.updateRow(newRowID, updatedRow);
// Output: Update row [ID] { firstName: 'Guillaume', lastName: 'Salva', age: 23 }

CRUD.deleteRow(newRowID);
// Output: Delete row id [ID]
```

### 🏗️ Namespace & Declaration Merging Usage (Task 9)
```typescript
// Namespace usage with declaration merging
namespace Subjects {
  // Teacher interface gets merged across files
  const teacher: Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 5,        // Added by Cpp.ts
    experienceTeachingReact: 3,    // Added by React.ts
    experienceTeachingJava: 2      // Added by Java.ts
  };

  // Subject classes with inheritance
  const cppSubject = new Cpp();
  const reactSubject = new React();
  const javaSubject = new Java();

  // Setting teachers and getting availability
  cppSubject.setTeacher(teacher);
  console.log(cppSubject.getRequirements());     // "Here is the list of requirements for Cpp"
  console.log(cppSubject.getAvailableTeacher()); // "Available Teacher: John"

  reactSubject.setTeacher(teacher);
  console.log(reactSubject.getAvailableTeacher()); // "Available Teacher: John"

  // Teacher without experience
  const newTeacher: Teacher = {
    firstName: "Jane",
    lastName: "Smith"
  };
  
  javaSubject.setTeacher(newTeacher);
  console.log(javaSubject.getAvailableTeacher()); // "No available teacher"
}
```

### 🏷️ Brand Convention & Nominal Typing Usage (Task 10)
```typescript
// Brand convention for nominal typing
interface MajorCredits {
  credits: number;
  brand: "major";  // Brand property for unique identification
}

interface MinorCredits {
  credits: number;
  brand: "minor";  // Brand property for unique identification
}

// Functions with type safety
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "major"
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "minor"
  };
}

// Usage examples
const majorSubject1: MajorCredits = { credits: 3, brand: "major" };
const majorSubject2: MajorCredits = { credits: 4, brand: "major" };

const minorSubject1: MinorCredits = { credits: 1, brand: "minor" };
const minorSubject2: MinorCredits = { credits: 2, brand: "minor" };

const totalMajor = sumMajorCredits(majorSubject1, majorSubject2);
// Result: { credits: 7, brand: "major" }

const totalMinor = sumMinorCredits(minorSubject1, minorSubject2);
// Result: { credits: 3, brand: "minor" }

// TypeScript prevents mixing types:
// sumMajorCredits(majorSubject1, minorSubject1); // ❌ Compile error!

// Usage examples with expected outputs
console.log(executeWork(createEmployee(200)));  // "Getting to work"
console.log(executeWork(createEmployee(1000))); // "Getting to director tasks"
```

## 🧪 Testing Strategy

### 📊 Test Coverage by Task

- **📁 Task_1**: 5 tests for string formatting logic (printTeacher function)
- **📁 Task_2**: 51 comprehensive tests for advanced types and business logic
- **📁 Task_3**: 22 tests for ambient namespaces and external library integration

### Test Categories by Directory

#### 📁 Task_1 Testing:
- **✍️ printTeacher Function** (5 tests) - String formatting logic validation

#### 📁 Task_2 Testing:
1. **🔧 Integration Tests** (3 tests) - Console output & compilation validation
2. **📋 Interface Validation** (2 tests) - DirectorInterface & TeacherInterface structure
3. **👨‍💼 Director Class Tests** (4 tests) - Method implementation and interface compliance
4. **👨‍🏫 Teacher Class Tests** (4 tests) - Method implementation and interface compliance
5. **🏭 createEmployee Function Tests** (15 tests) - Factory logic with all edge cases
6. **⚠️ Edge Cases & Business Logic** (3 tests) - Boundary conditions and type coercion
7. **🎯 Employee-Specific Functions** (9 tests) - Type predicates and function execution
8. **✅ Complete Requirements Validation** (3 tests) - Full specification compliance
9. **🔤 String Literal Types** (9 tests) - String literal types and type safety

#### 📁 Task_3 Testing:
1. **🌐 CRUD Function Tests** (8 tests) - Mock-based testing of insertRow, updateRow, deleteRow
2. **📋 Type and Interface Tests** (6 tests) - RowID type and RowElement interface validation
3. **🔧 Integration Tests** (1 test) - Complete CRUD workflow testing
4. **🚀 Main Application Flow Tests** (4 tests) - Main.ts execution simulation and validation
5. **📊 Interface Type Tests** (3 tests) - Advanced type compatibility and operations

## 📁 File Descriptions

### 📁 Task_1 Files (TypeScript/task_1/) - Tasks 1-4:
| File | Purpose |
|------|---------|
| `js/main.ts` | **Tasks 1-4**: Teacher interface, Directors extension, printTeacher function, StudentClass |
| `teacher.test.ts` | **Test suite with 5 tests** - printTeacher function logic validation |
| `package.json` | Dependencies and scripts configuration |
| `tsconfig.json` | TypeScript compiler configuration |
| `webpack.config.js` | Webpack bundler configuration |
| `jest.config.js` | Jest testing framework configuration |

### 📁 Task_2 Files (TypeScript/task_2/) - Tasks 5-7:
| File | Purpose |
|------|---------|
| `js/main.ts` | **Tasks 5-7**: Advanced types, employee functions, string literal types |
| `advanced-types.test.ts` | **Unified test suite with 51 comprehensive tests** for Tasks 5-7 |
| `README.md` | **Detailed documentation** with usage examples and test descriptions |
| `package.json` | Dependencies with Jest, ts-jest, and jsdom |
| `tsconfig.json` | TypeScript strict mode configuration |
| `webpack.config.js` | Development server and bundling configuration |
| `jest.config.js` | Jest configuration with ts-jest preset |
| `jest.setup.js` | Jest setup for DOM testing environment |

### 📁 Task_3 Files (TypeScript/task_3/) - Task 8:
| File | Purpose |
|------|---------|
| `js/main.ts` | **Task 8**: Main application with CRUD operations and ambient namespace usage |
| `js/interface.ts` | Type definitions (RowID type, RowElement interface) |
| `js/crud.js` | External CRUD library (JavaScript) with insertRow, updateRow, deleteRow |
| `js/crud.d.ts` | Ambient declarations providing TypeScript types for CRUD functions |
| `js/crud.test.ts` | CRUD function tests with mocked implementations (8 tests) |
| `js/main.test.ts` | Main application flow tests (4 tests) |
| `js/interface.test.ts` | Type and interface validation tests (10 tests) |
| `package.json` | Dependencies with Jest, ts-jest, Babel, and TypeScript |
| `tsconfig.json` | TypeScript configuration for ambient namespaces |
| `webpack.config.js` | Webpack configuration for ES6 modules |
| `jest.config.js` | Jest configuration with TypeScript support |
| `jest.setup.js` | Jest setup for console mocking |
| `babel.config.js` | Babel configuration for ES6 module transformation |

### 📁 Task_4 Files (TypeScript/task_4/) - Task 9:
| File | Purpose |
|------|---------|
| `js/subjects/Teacher.ts` | **Task 9**: Teacher interface with firstName and lastName in Subjects namespace |
| `js/subjects/Subject.ts` | Subject base class with teacher attribute and setTeacher method |
| `js/subjects/Cpp.ts` | Cpp class extending Subject + declaration merging for experienceTeachingC |
| `js/subjects/React.ts` | React class extending Subject + declaration merging for experienceTeachingReact |
| `js/subjects/Java.ts` | Java class extending Subject + declaration merging for experienceTeachingJava |
| `package.json` | Dependencies with TypeScript and development tools |
| `tsconfig.json` | TypeScript configuration with strict mode and namespace support |

### 📁 Task_5 Files (TypeScript/task_5/) - Task 10:
| File | Purpose |
|------|---------|
| `js/main.ts` | **Task 10**: MajorCredits and MinorCredits interfaces with brand properties + sum functions |
| `package.json` | Dependencies with TypeScript and development tools |
| `tsconfig.json` | TypeScript configuration with strict mode |
| `webpack.config.js` | Webpack configuration for development and bundling |

## 🔧 Configuration

### TypeScript Configuration
- **Target**: ES5 for broad compatibility
- **Module**: ES6 with modern imports
- **Strict mode**: Enabled for type safety
- **Source maps**: Enabled for debugging

### Webpack Configuration
- **Development server** on port 8080
- **Hot module replacement** for rapid development
- **TypeScript loader** with type checking
- **HTML plugin** for automatic index.html generation

## 📈 Learning Outcomes

By completing this project, you'll understand:

1. **📋 TypeScript Interfaces**
   - Property definitions and constraints
   - Optional vs required properties
   - Readonly properties
   - Index signatures for dynamic properties

2. **🔗 Interface Inheritance**
   - Extending interfaces with new properties
   - Maintaining type safety across inheritance

3. **⚡ Function Interfaces**
   - Defining function signatures
   - Type-safe function implementation

4. **🎯 Class-Interface Integration**
   - Implementing interfaces in classes
   - Constructor interfaces
   - Method type definitions

5. **🛠️ Modern Development Workflow**
   - TypeScript compilation
   - Automated testing
   - Development server setup
   - Code quality tools

6. **🚀 Advanced TypeScript Features (Task 5)**
   - **Union types** for function parameters (`number | string`)
   - **Union return types** (`Director | Teacher`)
   - **Factory pattern** with conditional logic
   - **Interface implementation** in classes
   - **Type guards** with `typeof` operator
   - **Business logic** implementation with type safety

7. **🎯 Employee-Specific Functions (Task 6)**
   - **Type predicates** with `employee is Director` syntax
   - **Type narrowing** for safe type casting
   - **Conditional execution** based on type predicates
   - **Function overloading patterns** with union types
   - **instanceof operator** for runtime type checking
   - **Advanced function composition** with type safety

8. **🔤 String Literal Types (Task 7)**
   - **String literal types** with specific value constraints
   - **Type safety** preventing invalid string inputs at compile time
   - **Union of string literals** (`'Math' | 'History'`)
   - **Function parameter constraints** with literal types
   - **Conditional logic** based on literal string values
   - **Type-driven development** with strict string validation

9. **🌐 Ambient Namespaces (Task 8)**
   - **Ambient declarations** for external JavaScript libraries
   - **Triple slash directives** for dependency inclusion
   - **Type safety** for third-party code without TypeScript
   - **Interface integration** with external libraries
   - **IntelliSense support** for external functions
   - **Declaration files** (.d.ts) for type definitions
   - **External library integration** with full type checking

10. **🏗️ Namespace & Declaration Merging (Task 9)**
    - **Namespace organization** for logical code grouping
    - **Declaration merging** to extend interfaces across multiple files
    - **Interface augmentation** with optional properties
    - **Class inheritance** within namespaces
    - **Type safety** across namespace boundaries
    - **Modular architecture** with namespace-based organization
    - **Conditional logic** based on merged interface properties
    - **Compilation-time validation** without runtime testing

11. **🏷️ Brand Convention & Nominal Typing (Task 10)**
    - **Brand properties** for unique type identification
    - **Nominal typing** creating distinct types from similar structures
    - **Type safety** preventing accidental mixing of similar types
    - **Compile-time validation** of branded types
    - **Interface branding** with literal string types
    - **Function type constraints** with branded parameters
    - **Type discrimination** at compile time
    - **Advanced type system** patterns for robust code

## 🔄 Development Workflow

1. **Write TypeScript code** in `js/main.ts`
2. **Write tests** in test files
3. **Run tests** with `npm test`
4. **Check compilation** with `npm run build`
5. **Test in browser** with `npm run start-dev`
6. **Commit** when all tests pass

## 📊 Project Stats

- **✅ 11 tasks completed** (Task 0-10) with full TypeScript implementation
- **🧪 Testing coverage**:
  - **Task_1**: 5 tests for string formatting logic
  - **Task_2**: 51 comprehensive tests for advanced types and business logic  
  - **Task_3**: 22 tests for external library integration
- **📈 Total**: 78 tests focusing on runtime behavior validation
- **🚫 Zero TypeScript errors** in compilation across all tasks
- **🛠️ Modern tooling** with Webpack 5 and Jest 29
- **📚 Full documentation** with JSDoc comments and detailed READMEs
- **🚀 Advanced features**: Union types, factory patterns, type predicates, string literal types, namespaces, declaration merging, and comprehensive type safety

## 🤝 Contributing

This is an educational project, but contributions for improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Add tests for new features
4. Ensure all tests pass
5. Submit a pull request

## 📜 License

This project is part of the Holberton School curriculum and is intended for educational purposes.

## 👨‍💻 Author

**Holberton School TypeScript Course**  
Advanced Web Development Curriculum

---

*Built with ❤️ using TypeScript, Webpack, and modern development practices*