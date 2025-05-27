/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';

// Mock the CRUD functions
const mockInsertRow = jest.fn((row: RowElement): RowID => {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
});

const mockDeleteRow = jest.fn((rowId: RowID): void => {
  console.log('Delete row id', rowId);
  return;
});

const mockUpdateRow = jest.fn((rowId: RowID, row: RowElement): RowID => {
  console.log(`Update row ${rowId}`, row);
  return rowId;
});

const CRUD = {
  insertRow: mockInsertRow,
  deleteRow: mockDeleteRow,
  updateRow: mockUpdateRow,
};

describe('CRUD Functions', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    jest.clearAllMocks();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  describe('insertRow', () => {
    it('should insert a row and return a RowID', () => {
      const row: RowElement = {
        firstName: 'John',
        lastName: 'Doe',
      };

      const result = CRUD.insertRow(row);

      expect(typeof result).toBe('number');
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThan(1000);
      expect(mockInsertRow).toHaveBeenCalledWith(row);
      expect(consoleSpy).toHaveBeenCalledWith('Insert row', row);
    });

    it('should handle row with age property', () => {
      const row: RowElement = {
        firstName: 'Jane',
        lastName: 'Smith',
        age: 25,
      };

      const result = CRUD.insertRow(row);

      expect(typeof result).toBe('number');
      expect(mockInsertRow).toHaveBeenCalledWith(row);
      expect(consoleSpy).toHaveBeenCalledWith('Insert row', row);
    });
  });

  describe('updateRow', () => {
    it('should update a row and return the same RowID', () => {
      const rowId: RowID = 123;
      const row: RowElement = {
        firstName: 'Updated',
        lastName: 'User',
        age: 30,
      };

      const result = CRUD.updateRow(rowId, row);

      expect(result).toBe(rowId);
      expect(mockUpdateRow).toHaveBeenCalledWith(rowId, row);
      expect(consoleSpy).toHaveBeenCalledWith(`Update row ${rowId}`, row);
    });
  });

  describe('deleteRow', () => {
    it('should delete a row and return void', () => {
      const rowId: RowID = 456;

      const result = CRUD.deleteRow(rowId);

      expect(result).toBeUndefined();
      expect(mockDeleteRow).toHaveBeenCalledWith(rowId);
      expect(consoleSpy).toHaveBeenCalledWith('Delete row id', rowId);
    });
  });
});

describe('Types and Interfaces', () => {
  describe('RowID type', () => {
    it('should accept number values', () => {
      const id1: RowID = 1;
      const id2: RowID = 999;
      const id3: RowID = 0;

      expect(typeof id1).toBe('number');
      expect(typeof id2).toBe('number');
      expect(typeof id3).toBe('number');
    });
  });

  describe('RowElement interface', () => {
    it('should accept valid row elements without age', () => {
      const row: RowElement = {
        firstName: 'Test',
        lastName: 'User',
      };

      expect(row.firstName).toBe('Test');
      expect(row.lastName).toBe('User');
      expect(row.age).toBeUndefined();
    });

    it('should accept valid row elements with age', () => {
      const row: RowElement = {
        firstName: 'Test',
        lastName: 'User',
        age: 25,
      };

      expect(row.firstName).toBe('Test');
      expect(row.lastName).toBe('User');
      expect(row.age).toBe(25);
    });
  });
});

describe('Integration Tests', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    jest.clearAllMocks();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should perform complete CRUD workflow', () => {
    // Create initial row
    const row: RowElement = {
      firstName: 'Guillaume',
      lastName: 'Salva',
    };

    // Insert row
    const newRowID: RowID = CRUD.insertRow(row);
    expect(typeof newRowID).toBe('number');
    expect(mockInsertRow).toHaveBeenCalledWith(row);
    expect(consoleSpy).toHaveBeenCalledWith('Insert row', row);

    // Update row
    const updatedRow: RowElement = {
      firstName: 'Guillaume',
      lastName: 'Salva',
      age: 23,
    };

    const updateResult = CRUD.updateRow(newRowID, updatedRow);
    expect(updateResult).toBe(newRowID);
    expect(mockUpdateRow).toHaveBeenCalledWith(newRowID, updatedRow);
    expect(consoleSpy).toHaveBeenCalledWith(`Update row ${newRowID}`, updatedRow);

    // Delete row
    const deleteResult = CRUD.deleteRow(newRowID);
    expect(deleteResult).toBeUndefined();
    expect(mockDeleteRow).toHaveBeenCalledWith(newRowID);
    expect(consoleSpy).toHaveBeenCalledWith('Delete row id', newRowID);

    // Verify all function calls
    expect(mockInsertRow).toHaveBeenCalledTimes(1);
    expect(mockUpdateRow).toHaveBeenCalledTimes(1);
    expect(mockDeleteRow).toHaveBeenCalledTimes(1);
  });
}); 