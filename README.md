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
    └── task_1/          # Advanced TypeScript features (Main project)
        ├── js/main.ts
        ├── teacher.test.ts
        ├── jest.config.js
        ├── package.json
        ├── tsconfig.json
        └── webpack.config.js
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

2. **Navigate to the main TypeScript project:**
   ```bash
   cd TypeScript/task_1
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

## 🧪 Testing

The project includes comprehensive test coverage:

- **19 total tests** across all features
- **Jest configuration** with TypeScript support
- **Unit tests** for interfaces, functions, and classes
- **Type validation** and edge case testing

### Test Categories:
1. **Teacher Interface Tests** (5 tests) - Property validation and types
2. **Directors Interface Tests** (3 tests) - Inheritance and extension
3. **printTeacher Function Tests** (5 tests) - String formatting and edge cases
4. **StudentClass Tests** (6 tests) - Constructor, methods, and interface compliance

## 📁 File Descriptions

| File | Purpose |
|------|---------|
| `js/main.ts` | Main TypeScript implementation with all interfaces and classes |
| `teacher.test.ts` | Comprehensive test suite with full documentation |
| `package.json` | Dependencies and scripts configuration |
| `tsconfig.json` | TypeScript compiler configuration |
| `webpack.config.js` | Webpack bundler configuration |
| `jest.config.js` | Jest testing framework configuration |

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

## 🔄 Development Workflow

1. **Write TypeScript code** in `js/main.ts`
2. **Write tests** in `teacher.test.ts`
3. **Run tests** with `npm test`
4. **Check compilation** with `npm run build`
5. **Test in browser** with `npm run start-dev`
6. **Commit** when all tests pass

## 📊 Project Stats

- **4 completed tasks** with full TypeScript implementation
- **19 comprehensive tests** with 100% pass rate
- **Zero TypeScript errors** in compilation
- **Modern tooling** with Webpack 5 and Jest 29
- **Full documentation** with JSDoc comments

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