// Tests pour l'interface Teacher
import './js/main';

// Interface locale pour les tests
interface TeacherTest {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

describe('Interface Teacher Tests', () => {
  test('devrait créer un teacher avec toutes les propriétés obligatoires', () => {
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

  test('devrait accepter yearsOfExperience comme propriété optionnelle', () => {
    const teacher: TeacherTest = {
      firstName: 'Marie',
      lastName: 'Dupont',
      fullTimeEmployee: false,
      yearsOfExperience: 5,
      location: 'Lyon'
    };

    expect(teacher.yearsOfExperience).toBe(5);
  });

  test('devrait accepter des propriétés dynamiques', () => {
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

  test('devrait valider les types correctement', () => {
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

  test('devrait créer un teacher identique à l\'exemple demandé', () => {
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