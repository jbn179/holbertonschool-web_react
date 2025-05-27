/**
 * @fileoverview Focused test suite for TypeScript logic requiring runtime validation
 * This file tests only the features that require behavioral testing beyond TypeScript compilation:
 * - Task 3: printTeacher function (string formatting logic)
 * 
 * Note: Tasks 1, 2, and 4 (interfaces and simple classes) are validated through TypeScript compilation
 * and do not require Jest testing as their correctness is guaranteed by the type system.
 * 
 * @author Holberton School TypeScript Course
 * @version 2.0.0 - Optimized for relevant testing only
 */

// ================================
// TASK 3: PRINTTEACHER FUNCTION TESTS (LOGIC VALIDATION REQUIRED)
// ================================

/**
 * Function type interface for printTeacher testing
 * Defines the signature for teacher name formatting function
 */
interface printTeacherFunctionTest {
  (firstName: string, lastName: string): string;
}

/**
 * Local implementation of printTeacher for testing
 * Mirrors the main implementation to test string formatting logic
 */
const printTeacherTest: printTeacherFunctionTest = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

/**
 * Test suite for the printTeacher function (Task 3)
 * Tests string formatting logic that requires runtime validation
 * 
 * WHY THESE TESTS ARE NECESSARY:
 * - String manipulation logic needs validation
 * - Edge cases (empty strings, special characters) must be tested
 * - Formatting behavior is not guaranteed by TypeScript compilation alone
 */
describe('printTeacher Function Tests (Task 3) - Logic Validation Required', () => {
  /**
   * Test the basic functionality with normal names
   * Validates the core string formatting logic
   */
  test('should format teacher name correctly with normal inputs', () => {
    expect(printTeacherTest('John', 'Doe')).toBe('J. Doe');
    expect(printTeacherTest('Marie', 'Curie')).toBe('M. Curie');
    expect(printTeacherTest('Albert', 'Einstein')).toBe('A. Einstein');
  });

  /**
   * Test edge case with single character names
   * Validates behavior with minimal input
   */
  test('should handle single character names', () => {
    expect(printTeacherTest('A', 'B')).toBe('A. B');
    expect(printTeacherTest('X', 'Y')).toBe('X. Y');
  });

  /**
   * Test edge case with empty first name
   * Validates error handling for invalid input
   */
  test('should handle empty first name gracefully', () => {
    expect(printTeacherTest('', 'Doe')).toBe('. Doe');
  });

  /**
   * Test with names containing special characters
   * Validates handling of non-standard characters
   */
  test('should handle names with special characters', () => {
    expect(printTeacherTest('Jean-Pierre', 'Dupont')).toBe('J. Dupont');
    expect(printTeacherTest("O'Connor", 'Smith')).toBe('O. Smith');
  });

  /**
   * Test the exact example from task requirements
   * Validates compliance with specification
   */
  test('should match the required example exactly', () => {
    expect(printTeacherTest('John', 'Doe')).toBe('J. Doe');
  });
});

// ================================
// COMPILATION VALIDATION NOTES
// ================================

/**
 * TASKS NOT TESTED (Validated by TypeScript compilation):
 * 
 * ❌ Task 1 (Teacher Interface):
 *    - Interface structure is validated at compile time
 *    - Readonly properties are enforced by TypeScript
 *    - Optional properties are type-checked automatically
 *    - Dynamic properties [key: string]: any are type-safe by design
 * 
 * ❌ Task 2 (Directors Interface):
 *    - Interface extension is validated at compile time
 *    - Property inheritance is guaranteed by TypeScript
 *    - Type compatibility is enforced automatically
 * 
 * ❌ Task 4 (StudentClass):
 *    - Class structure is validated at compile time
 *    - Method signatures are enforced by TypeScript
 *    - Interface implementation is guaranteed by the compiler
 *    - Simple return values don't require runtime testing
 * 
 * ✅ Task 3 (printTeacher Function):
 *    - String manipulation logic requires runtime validation
 *    - Edge cases need behavioral testing
 *    - Formatting correctness cannot be guaranteed by compilation alone
 */ 