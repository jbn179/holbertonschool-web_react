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
    ├── task_1/          # Advanced TypeScript features (Interfaces & Classes)
    │   ├── js/main.ts
    │   ├── teacher.test.ts
    │   ├── jest.config.js
    │   ├── package.json
    │   ├── tsconfig.json
    │   └── webpack.config.js
    └── task_2/          # Advanced Types Part 1 (Union Types & Factory Pattern)
        ├── js/main.ts
        ├── task5-advanced-types.test.ts    # 33 comprehensive tests
        ├── jest.config.js
        ├── jest.setup.js
        ├── package.json
        ├── tsconfig.json
        ├── webpack.config.js
        └── README.md
```

## 🎯 Tasks Completed

### Task 0: Basic Student Interface
- **File**: `TypeScript/task_0/js/main.ts`
- **Features**: 
  - Student interface with basic properties
  - DOM manipulation and table rendering
  - TypeScript compilation setup

### Task 1: Teacher Interface
- **File**: `TypeScript/task_1/js/main.ts`
- **Features**:
  - `Teacher` interface with readonly properties (`firstName`, `lastName`)
  - Optional property (`yearsOfExperience`)
  - Dynamic properties using index signature `[key: string]: any`
  - Example: Adding `contract` property dynamically

### Task 2: Directors Interface Extension
- **Features**:
  - `Directors` interface extending `Teacher`
  - Additional required property: `numberOfReports: number`
  - Interface inheritance demonstration

### Task 3: Function Interface
- **Features**:
  - `printTeacherFunction` interface for function typing
  - `printTeacher` function implementation
  - String manipulation: `"John", "Doe"` → `"J. Doe"`

### Task 4: Class Implementation
- **Features**:
  - `StudentClass` with constructor interface
  - `StudentClassInterface` for method definitions
  - Methods: `workOnHomework()` and `displayName()`
  - Full class-interface integration

### 🚀 Task 5: Advanced Types Part 1 (NEW - COMPLETED)
- **File**: `TypeScript/task_2/js/main.ts`
- **Features**:
  - **DirectorInterface** with method signatures (`workFromHome`, `getCoffeeBreak`, `workDirectorTasks`)
  - **TeacherInterface** with method signatures (`workFromHome`, `getCoffeeBreak`, `workTeacherTasks`)
  - **Director class** implementing DirectorInterface with specific return values
  - **Teacher class** implementing TeacherInterface with specific return values
  - **createEmployee factory function** with union types (`number | string`)
  - **Advanced business logic**: salary < 500 (number) → Teacher, otherwise → Director
  - **Union return types**: `Director | Teacher`
  - **33 comprehensive tests** in unified test suite with JSDoc documentation

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
   # For Task 1 (Interfaces & Classes)
   cd TypeScript/task_1
   
   # For Task 2 (Advanced Types with Union Types & Factory Pattern)
   cd TypeScript/task_2
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

### 🆕 Advanced Types Usage (Task 5)
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

## 🧪 Testing

The project includes comprehensive test coverage across all tasks:

### Task 1 Testing:
- **19 total tests** for interfaces, functions, and classes
- **Jest configuration** with TypeScript support
- **Type validation** and edge case testing

#### Test Categories (Task 1):
1. **Teacher Interface Tests** (5 tests) - Property validation and types
2. **Directors Interface Tests** (3 tests) - Inheritance and extension
3. **printTeacher Function Tests** (5 tests) - String formatting and edge cases
4. **StudentClass Tests** (6 tests) - Constructor, methods, and interface compliance

### 🆕 Task 2 Testing (Advanced Types):
- **33 comprehensive tests** in unified test suite (`task5-advanced-types.test.ts`)
- **JSDoc documentation** for all test functions
- **Complete coverage** of union types, factory patterns, and business logic

#### Test Categories (Task 2):
1. **Integration Tests** (3 tests) - Console output & compilation validation
2. **Interface Validation** (2 tests) - DirectorInterface & TeacherInterface structure
3. **Director Class Tests** (4 tests) - Method implementation and interface compliance
4. **Teacher Class Tests** (4 tests) - Method implementation and interface compliance
5. **createEmployee Function Tests** (15 tests) - Factory logic with all edge cases
6. **Edge Cases & Business Logic** (3 tests) - Boundary conditions and type coercion
7. **Complete Requirements Validation** (3 tests) - Full specification compliance

## 📁 File Descriptions

### Task 1 Files (TypeScript/task_1/):
| File | Purpose |
|------|---------|
| `js/main.ts` | Main TypeScript implementation with interfaces and classes |
| `teacher.test.ts` | Comprehensive test suite with full documentation |
| `package.json` | Dependencies and scripts configuration |
| `tsconfig.json` | TypeScript compiler configuration |
| `webpack.config.js` | Webpack bundler configuration |
| `jest.config.js` | Jest testing framework configuration |

### 🆕 Task 2 Files (TypeScript/task_2/):
| File | Purpose |
|------|---------|
| `js/main.ts` | Advanced types implementation with union types and factory pattern |
| `task5-advanced-types.test.ts` | **Unified test suite with 33 comprehensive tests** |
| `README.md` | **Detailed documentation** with usage examples and test descriptions |
| `package.json` | Dependencies with Jest, ts-jest, and jsdom |
| `tsconfig.json` | TypeScript strict mode configuration |
| `webpack.config.js` | Development server and bundling configuration |
| `jest.config.js` | Jest configuration with ts-jest preset |
| `jest.setup.js` | Jest setup for DOM testing environment |

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

1. **TypeScript Interfaces**
   - Property definitions and constraints
   - Optional vs required properties
   - Readonly properties
   - Index signatures for dynamic properties

2. **Interface Inheritance**
   - Extending interfaces with new properties
   - Maintaining type safety across inheritance

3. **Function Interfaces**
   - Defining function signatures
   - Type-safe function implementation

4. **Class-Interface Integration**
   - Implementing interfaces in classes
   - Constructor interfaces
   - Method type definitions

5. **Modern Development Workflow**
   - TypeScript compilation
   - Automated testing
   - Development server setup
   - Code quality tools

6. **🆕 Advanced TypeScript Features (Task 5)**
   - **Union types** for function parameters (`number | string`)
   - **Union return types** (`Director | Teacher`)
   - **Factory pattern** with conditional logic
   - **Interface implementation** in classes
   - **Type guards** with `typeof` operator
   - **Business logic** implementation with type safety

## 🔄 Development Workflow

1. **Write TypeScript code** in `js/main.ts`
2. **Write tests** in `teacher.test.ts`
3. **Run tests** with `npm test`
4. **Check compilation** with `npm run build`
5. **Test in browser** with `npm run start-dev`
6. **Commit** when all tests pass

## 📊 Project Stats

- **5 completed tasks** with full TypeScript implementation
- **Task 1**: 19 comprehensive tests with 100% pass rate
- **🆕 Task 2**: 33 comprehensive tests with 100% pass rate
- **Total**: **52 tests** across all tasks
- **Zero TypeScript errors** in compilation
- **Modern tooling** with Webpack 5 and Jest 29
- **Full documentation** with JSDoc comments and detailed READMEs
- **Advanced features**: Union types, factory patterns, and business logic implementation

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