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

describe('Main Application Flow', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    jest.clearAllMocks();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should execute the main application flow correctly', () => {
    // Simulate the main.ts execution
    const row: RowElement = {
      firstName: 'Guillaume',
      lastName: 'Salva',
    };

    const newRowID: RowID = CRUD.insertRow(row);

    const updatedRow: RowElement = {
      firstName: 'Guillaume',
      lastName: 'Salva',
      age: 23,
    };

    CRUD.updateRow(newRowID, updatedRow);
    CRUD.deleteRow(newRowID);

    // Verify the function calls
    expect(mockInsertRow).toHaveBeenCalledWith(row);
    expect(mockUpdateRow).toHaveBeenCalledWith(newRowID, updatedRow);
    expect(mockDeleteRow).toHaveBeenCalledWith(newRowID);

    // Verify console outputs
    expect(consoleSpy).toHaveBeenCalledWith('Insert row', row);
    expect(consoleSpy).toHaveBeenCalledWith(`Update row ${newRowID}`, updatedRow);
    expect(consoleSpy).toHaveBeenCalledWith('Delete row id', newRowID);
  });

  it('should validate row object structure', () => {
    const row: RowElement = {
      firstName: 'Guillaume',
      lastName: 'Salva',
    };

    expect(row).toHaveProperty('firstName', 'Guillaume');
    expect(row).toHaveProperty('lastName', 'Salva');
    expect(row).not.toHaveProperty('age');
  });

  it('should validate updatedRow object structure', () => {
    const updatedRow: RowElement = {
      firstName: 'Guillaume',
      lastName: 'Salva',
      age: 23,
    };

    expect(updatedRow).toHaveProperty('firstName', 'Guillaume');
    expect(updatedRow).toHaveProperty('lastName', 'Salva');
    expect(updatedRow).toHaveProperty('age', 23);
  });

  it('should ensure newRowID is of type RowID (number)', () => {
    const row: RowElement = {
      firstName: 'Guillaume',
      lastName: 'Salva',
    };

    const newRowID: RowID = CRUD.insertRow(row);

    expect(typeof newRowID).toBe('number');
    expect(newRowID).toBeGreaterThanOrEqual(0);
    expect(newRowID).toBeLessThan(1000);
    expect(mockInsertRow).toHaveBeenCalledWith(row);
  });
}); 