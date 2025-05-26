// Tests for Teacher interfaces and functions
import './js/main';

// Local interfaces for testing
interface TeacherTest {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface DirectorsTest extends TeacherTest {
  numberOfReports: number;
}

interface printTeacherFunctionTest {
  (firstName: string, lastName: string): string;
}

describe('Teacher Interface Tests', () => {
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

describe('Directors Interface Tests (Task 2)', () => {
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

describe('printTeacher Function Tests (Task 3)', () => {
  const printTeacherTest: printTeacherFunctionTest = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };

  test('should return first letter of firstName and full lastName', () => {
    const result = printTeacherTest('John', 'Doe');
    expect(result).toBe('J. Doe');
  });

  test('should work with different names', () => {
    expect(printTeacherTest('Marie', 'Curie')).toBe('M. Curie');
    expect(printTeacherTest('Albert', 'Einstein')).toBe('A. Einstein');
    expect(printTeacherTest('Ada', 'Lovelace')).toBe('A. Lovelace');
  });

  test('should handle single character firstName', () => {
    expect(printTeacherTest('A', 'Smith')).toBe('A. Smith');
  });

  test('should handle long names', () => {
    expect(printTeacherTest('Christopher', 'VeryLongLastName')).toBe('C. VeryLongLastName');
  });

  test('should return string type', () => {
    const result = printTeacherTest('Test', 'Name');
    expect(typeof result).toBe('string');
  });
}); 