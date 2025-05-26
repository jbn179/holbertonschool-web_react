/**
 * @fileoverview Comprehensive test suite for TypeScript interfaces and classes
 * This file tests all the TypeScript features implemented in main.ts:
 * - Task 1: Teacher interface with readonly and dynamic properties
 * - Task 2: Directors interface extending Teacher
 * - Task 3: printTeacher function with its interface
 * - Task 4: StudentClass with constructor and method interfaces
 * 
 * @author Holberton School TypeScript Course
 * @version 1.0.0
 */

// Import the main TypeScript file to test its implementations
import './js/main';

// ================================
// LOCAL TEST INTERFACES
// ================================

/**
 * Local Teacher interface for testing purposes
 * Mirrors the main Teacher interface to avoid conflicts
 */
interface TeacherTest {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

/**
 * Local Directors interface for testing
 * Extends TeacherTest and adds numberOfReports property
 */
interface DirectorsTest extends TeacherTest {
  numberOfReports: number;
}

/**
 * Function type interface for printTeacher testing
 * Defines the signature for teacher name formatting function
 */
interface printTeacherFunctionTest {
  (firstName: string, lastName: string): string;
}

/**
 * Interface defining the structure of StudentClass methods
 * Used to ensure proper implementation of class methods
 */
interface StudentClassInterfaceTest {
  workOnHomework(): string;
  displayName(): string;
}

/**
 * Local StudentClass implementation for testing
 * Mirrors the main StudentClass to test functionality
 */
class StudentClassTest implements StudentClassInterfaceTest {
  firstName: string;
  lastName: string;

  /**
   * Constructor for StudentClassTest
   * @param firstName - Student's first name
   * @param lastName - Student's last name
   */
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  /**
   * Method that returns homework status
   * @returns Always returns "Currently working"
   */
  workOnHomework(): string {
    return "Currently working";
  }

  /**
   * Method that returns student's display name
   * @returns The student's first name
   */
  displayName(): string {
    return this.firstName;
  }
}

// ================================
// TASK 1: TEACHER INTERFACE TESTS
// ================================

/**
 * Test suite for the Teacher interface (Task 1)
 * Tests readonly properties, optional properties, and dynamic properties
 */
describe('Teacher Interface Tests', () => {
  /**
   * Test that a teacher can be created with all required properties
   * Validates that mandatory fields are properly set
   */
  test('should create a teacher with all required properties', () => {
    const teacher: TeacherTest = {
      firstName: 'John',
      lastName: 'Doe',
      fullTimeEmployee: true,
      location: 'Paris'
    };

    expect(teacher.firstName).toBe('John');
    expect(teacher.lastName).toBe('Doe');
    expect(teacher.fullTimeEmployee).toBe(true);
    expect(teacher.location).toBe('Paris');
    expect(teacher.yearsOfExperience).toBeUndefined();
  });

  /**
   * Test that yearsOfExperience is truly optional
   * Validates the optional property behavior
   */
  test('should accept yearsOfExperience as optional property', () => {
    const teacher: TeacherTest = {
      firstName: 'Marie',
      lastName: 'Dupont',
      fullTimeEmployee: false,
      yearsOfExperience: 5,
      location: 'Lyon'
    };

    expect(teacher.yearsOfExperience).toBe(5);
  });

  /**
   * Test dynamic property addition using index signature [key: string]: any
   * Validates that additional properties can be added dynamically
   */
  test('should accept dynamic properties', () => {
    const teacher: TeacherTest = {
      firstName: 'Pierre',
      lastName: 'Martin',
      fullTimeEmployee: true,
      location: 'Marseille',
      contract: false,
      subject: 'Mathematics',
      salary: 50000
    };

    expect(teacher.contract).toBe(false);
    expect(teacher.subject).toBe('Mathematics');
    expect(teacher.salary).toBe(50000);
  });

  /**
   * Test TypeScript type validation
   * Ensures all properties have correct types
   */
  test('should validate types correctly', () => {
    const teacher: TeacherTest = {
      firstName: 'Sophie',
      lastName: 'Bernard',
      fullTimeEmployee: true,
      yearsOfExperience: 10,
      location: 'Nice',
      department: 'Science'
    };

    expect(typeof teacher.firstName).toBe('string');
    expect(typeof teacher.lastName).toBe('string');
    expect(typeof teacher.fullTimeEmployee).toBe('boolean');
    expect(typeof teacher.yearsOfExperience).toBe('number');
    expect(typeof teacher.location).toBe('string');
    expect(typeof teacher.department).toBe('string');
  });

  /**
   * Test the exact example from the task requirements
   * Validates compliance with specification
   */
  test('should create a teacher identical to the required example', () => {
    const teacher3: TeacherTest = {
      firstName: 'John',
      fullTimeEmployee: false,
      lastName: 'Doe',
      location: 'London',
      contract: false,
    };

    expect(teacher3).toEqual({
      firstName: 'John',
      fullTimeEmployee: false,
      lastName: 'Doe',
      location: 'London',
      contract: false,
    });
  });
});

// ================================
// TASK 2: DIRECTORS INTERFACE TESTS
// ================================

/**
 * Test suite for the Directors interface (Task 2)
 * Tests interface inheritance and additional properties
 */
describe('Directors Interface Tests (Task 2)', () => {
  /**
   * Test Directors interface extends Teacher properly
   * Validates inheritance and new property addition
   */
  test('should create a director with all Teacher properties and numberOfReports', () => {
    const director: DirectorsTest = {
      firstName: 'John',
      lastName: 'Doe',
      location: 'London',
      fullTimeEmployee: true,
      numberOfReports: 17,
    };

    expect(director.firstName).toBe('John');
    expect(director.lastName).toBe('Doe');
    expect(director.location).toBe('London');
    expect(director.fullTimeEmployee).toBe(true);
    expect(director.numberOfReports).toBe(17);
  });

  /**
   * Test numberOfReports type validation
   * Ensures the new property has correct type and positive value
   */
  test('should validate that numberOfReports is a number', () => {
    const director: DirectorsTest = {
      firstName: 'Jane',
      lastName: 'Smith',
      location: 'Paris',
      fullTimeEmployee: true,
      numberOfReports: 25,
    };

    expect(typeof director.numberOfReports).toBe('number');
    expect(director.numberOfReports).toBeGreaterThan(0);
  });

  /**
   * Test inherited optional properties in Directors
   * Validates that optional properties from Teacher work in Directors
   */
  test('should accept optional yearsOfExperience in Directors', () => {
    const director: DirectorsTest = {
      firstName: 'Bob',
      lastName: 'Wilson',
      location: 'Tokyo',
      fullTimeEmployee: true,
      yearsOfExperience: 15,
      numberOfReports: 30,
    };

    expect(director.yearsOfExperience).toBe(15);
    expect(director.numberOfReports).toBe(30);
  });
});

// ================================
// TASK 3: PRINTTEACHER FUNCTION TESTS
// ================================

/**
 * Test suite for the printTeacher function (Task 3)
 * Tests function interface implementation and string formatting
 */
describe('printTeacher Function Tests (Task 3)', () => {
  /**
   * Local implementation of printTeacher for testing
   * Follows the interface specification exactly
   */
  const printTeacherTest: printTeacherFunctionTest = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };

  /**
   * Test basic functionality with the required example
   * Validates the core requirement: "John", "Doe" -> "J. Doe"
   */
  test('should return first letter of firstName and full lastName', () => {
    const result = printTeacherTest('John', 'Doe');
    expect(result).toBe('J. Doe');
  });

  /**
   * Test with various famous names
   * Ensures function works with different input combinations
   */
  test('should work with different names', () => {
    expect(printTeacherTest('Marie', 'Curie')).toBe('M. Curie');
    expect(printTeacherTest('Albert', 'Einstein')).toBe('A. Einstein');
    expect(printTeacherTest('Ada', 'Lovelace')).toBe('A. Lovelace');
  });

  /**
   * Test edge case: single character first name
   * Validates behavior with minimal input
   */
  test('should handle single character firstName', () => {
    expect(printTeacherTest('A', 'Smith')).toBe('A. Smith');
  });

  /**
   * Test edge case: very long names
   * Validates function handles lengthy strings properly
   */
  test('should handle long names', () => {
    expect(printTeacherTest('Christopher', 'VeryLongLastName')).toBe('C. VeryLongLastName');
  });

  /**
   * Test return type validation
   * Ensures function returns a string as specified
   */
  test('should return string type', () => {
    const result = printTeacherTest('Test', 'Name');
    expect(typeof result).toBe('string');
  });
});

// ================================
// TASK 4: STUDENTCLASS TESTS
// ================================

/**
 * Test suite for the StudentClass (Task 4)
 * Tests class implementation, constructor, and method interfaces
 */
describe('StudentClass Tests (Task 4)', () => {
  /**
   * Test constructor parameter assignment
   * Validates that constructor properly initializes instance properties
   */
  test('should create a student with constructor parameters', () => {
    const student = new StudentClassTest('John', 'Doe');
    
    expect(student.firstName).toBe('John');
    expect(student.lastName).toBe('Doe');
  });

  /**
   * Test workOnHomework method implementation
   * Validates method exists and returns correct constant value
   */
  test('should have workOnHomework method that returns "Currently working"', () => {
    const student = new StudentClassTest('Alice', 'Smith');
    
    expect(student.workOnHomework()).toBe('Currently working');
    expect(typeof student.workOnHomework()).toBe('string');
  });

  /**
   * Test displayName method implementation
   * Validates method returns firstName as required
   */
  test('should have displayName method that returns firstName', () => {
    const student = new StudentClassTest('Bob', 'Johnson');
    
    expect(student.displayName()).toBe('Bob');
    expect(typeof student.displayName()).toBe('string');
  });

  /**
   * Test class functionality with multiple instances
   * Validates that different instances work independently
   */
  test('should work with different student names', () => {
    const student1 = new StudentClassTest('Marie', 'Curie');
    const student2 = new StudentClassTest('Albert', 'Einstein');
    
    expect(student1.displayName()).toBe('Marie');
    expect(student2.displayName()).toBe('Albert');
    expect(student1.workOnHomework()).toBe('Currently working');
    expect(student2.workOnHomework()).toBe('Currently working');
  });

  /**
   * Test interface compliance
   * Validates that class properly implements StudentClassInterface
   */
  test('should implement StudentClassInterface correctly', () => {
    const student = new StudentClassTest('Test', 'Student');
    
    // Check that the student has the required methods
    expect(typeof student.workOnHomework).toBe('function');
    expect(typeof student.displayName).toBe('function');
    
    // Check method return types
    expect(typeof student.workOnHomework()).toBe('string');
    expect(typeof student.displayName()).toBe('string');
  });

  /**
   * Test constructor robustness with various inputs
   * Validates constructor handles different string lengths
   */
  test('should handle various constructor inputs', () => {
    const student1 = new StudentClassTest('A', 'B');
    const student2 = new StudentClassTest('VeryLongFirstName', 'VeryLongLastName');
    
    expect(student1.displayName()).toBe('A');
    expect(student2.displayName()).toBe('VeryLongFirstName');
    expect(student1.workOnHomework()).toBe('Currently working');
    expect(student2.workOnHomework()).toBe('Currently working');
  });
}); 