import { RowID, RowElement } from './interface';

describe('Interface Types', () => {
  describe('RowID type', () => {
    it('should accept number values', () => {
      const id1: RowID = 1;
      const id2: RowID = 100;
      const id3: RowID = 999;
      const id4: RowID = 0;

      expect(typeof id1).toBe('number');
      expect(typeof id2).toBe('number');
      expect(typeof id3).toBe('number');
      expect(typeof id4).toBe('number');
    });

    it('should work with mathematical operations', () => {
      const id1: RowID = 10;
      const id2: RowID = 20;
      const sum: RowID = id1 + id2;

      expect(sum).toBe(30);
      expect(typeof sum).toBe('number');
    });
  });

  describe('RowElement interface', () => {
    it('should create valid row elements with required fields only', () => {
      const row: RowElement = {
        firstName: 'John',
        lastName: 'Doe',
      };

      expect(row.firstName).toBe('John');
      expect(row.lastName).toBe('Doe');
      expect(row.age).toBeUndefined();
    });

    it('should create valid row elements with all fields', () => {
      const row: RowElement = {
        firstName: 'Jane',
        lastName: 'Smith',
        age: 30,
      };

      expect(row.firstName).toBe('Jane');
      expect(row.lastName).toBe('Smith');
      expect(row.age).toBe(30);
    });

    it('should handle age as optional property', () => {
      const rowWithoutAge: RowElement = {
        firstName: 'Alice',
        lastName: 'Johnson',
      };

      const rowWithAge: RowElement = {
        firstName: 'Bob',
        lastName: 'Wilson',
        age: 25,
      };

      expect(rowWithoutAge.age).toBeUndefined();
      expect(rowWithAge.age).toBe(25);
    });

    it('should validate string types for firstName and lastName', () => {
      const row: RowElement = {
        firstName: 'Test',
        lastName: 'User',
        age: 35,
      };

      expect(typeof row.firstName).toBe('string');
      expect(typeof row.lastName).toBe('string');
      expect(typeof row.age).toBe('number');
    });

    it('should work with object destructuring', () => {
      const row: RowElement = {
        firstName: 'Emma',
        lastName: 'Brown',
        age: 28,
      };

      const { firstName, lastName, age } = row;

      expect(firstName).toBe('Emma');
      expect(lastName).toBe('Brown');
      expect(age).toBe(28);
    });

    it('should work with object spread operator', () => {
      const baseRow: RowElement = {
        firstName: 'David',
        lastName: 'Miller',
      };

      const extendedRow: RowElement = {
        ...baseRow,
        age: 32,
      };

      expect(extendedRow.firstName).toBe('David');
      expect(extendedRow.lastName).toBe('Miller');
      expect(extendedRow.age).toBe(32);
    });
  });

  describe('Type compatibility', () => {
    it('should allow RowElement arrays', () => {
      const rows: RowElement[] = [
        { firstName: 'User1', lastName: 'Last1' },
        { firstName: 'User2', lastName: 'Last2', age: 25 },
        { firstName: 'User3', lastName: 'Last3', age: 30 },
      ];

      expect(rows).toHaveLength(3);
      expect(rows[0].age).toBeUndefined();
      expect(rows[1].age).toBe(25);
      expect(rows[2].age).toBe(30);
    });

    it('should allow RowID arrays', () => {
      const ids: RowID[] = [1, 2, 3, 100, 999];

      expect(ids).toHaveLength(5);
      expect(ids.every(id => typeof id === 'number')).toBe(true);
    });
  });
}); 