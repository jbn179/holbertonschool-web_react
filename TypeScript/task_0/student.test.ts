// Test file for Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

describe('Student Interface Tests', () => {
  test('should create student objects correctly', () => {
    const student1: Student = {
      firstName: "John",
      lastName: "Doe", 
      age: 20,
      location: "New York"
    };

    const student2: Student = {
      firstName: "Jane",
      lastName: "Smith",
      age: 22,
      location: "California"
    };

    // Test student1
    expect(student1.firstName).toBe("John");
    expect(student1.lastName).toBe("Doe");
    expect(student1.age).toBe(20);
    expect(student1.location).toBe("New York");

    // Test student2
    expect(student2.firstName).toBe("Jane");
    expect(student2.lastName).toBe("Smith");
    expect(student2.age).toBe(22);
    expect(student2.location).toBe("California");
  });

  test('should create students array correctly', () => {
    const student1: Student = {
      firstName: "John",
      lastName: "Doe",
      age: 20,
      location: "New York"
    };

    const student2: Student = {
      firstName: "Jane", 
      lastName: "Smith",
      age: 22,
      location: "California"
    };

    const studentsList: Student[] = [student1, student2];

    expect(studentsList).toHaveLength(2);
    expect(studentsList[0]).toEqual(student1);
    expect(studentsList[1]).toEqual(student2);
  });

  test('should validate types correctly', () => {
    const student: Student = {
      firstName: "Test",
      lastName: "User",
      age: 25,
      location: "Test City"
    };

    expect(typeof student.firstName).toBe('string');
    expect(typeof student.lastName).toBe('string');
    expect(typeof student.age).toBe('number');
    expect(typeof student.location).toBe('string');
  });
});
