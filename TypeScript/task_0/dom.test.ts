/**
 * @jest-environment jsdom
 */

// Simuler la logique de création de tableau
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

function createStudentTable(students: Student[]): HTMLTableElement {
  const table = document.createElement('table');
  table.style.border = '1px solid black';
  table.style.borderCollapse = 'collapse';

  // Create table header
  const headerRow = document.createElement('tr');
  const firstNameHeader = document.createElement('th');
  firstNameHeader.textContent = 'First Name';
  firstNameHeader.style.border = '1px solid black';
  firstNameHeader.style.padding = '8px';

  const locationHeader = document.createElement('th');
  locationHeader.textContent = 'Location';
  locationHeader.style.border = '1px solid black';
  locationHeader.style.padding = '8px';

  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  table.appendChild(headerRow);

  // Add each student as a row in the table
  students.forEach((student: Student) => {
    const row = document.createElement('tr');
    
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = '1px solid black';
    firstNameCell.style.padding = '8px';
    
    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;
    locationCell.style.border = '1px solid black';
    locationCell.style.padding = '8px';
    
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });

  return table;
}

describe('DOM Table Creation Tests', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  test('should create table with correct structure', () => {
    const students: Student[] = [
      { firstName: "John", lastName: "Doe", age: 20, location: "New York" },
      { firstName: "Jane", lastName: "Smith", age: 22, location: "California" }
    ];

    const table = createStudentTable(students);
    document.body.appendChild(table);

    // Test table existence and styling
    expect(table).toBeInstanceOf(HTMLTableElement);
    expect(table.style.border).toBe('1px solid black');
    expect(table.style.borderCollapse).toBe('collapse');

    // Test header
    const headers = table.querySelectorAll('th');
    expect(headers).toHaveLength(2);
    expect(headers[0].textContent).toBe('First Name');
    expect(headers[1].textContent).toBe('Location');

    // Test rows
    const rows = table.querySelectorAll('tr');
    expect(rows).toHaveLength(3); // 1 header + 2 data rows

    // Test data cells
    const dataCells = table.querySelectorAll('td');
    expect(dataCells).toHaveLength(4); // 2 cells per row, 2 rows
    expect(dataCells[0].textContent).toBe('John');
    expect(dataCells[1].textContent).toBe('New York');
    expect(dataCells[2].textContent).toBe('Jane');
    expect(dataCells[3].textContent).toBe('California');
  });

  test('should create empty table when no students provided', () => {
    const table = createStudentTable([]);
    
    expect(table).toBeInstanceOf(HTMLTableElement);
    
    const headers = table.querySelectorAll('th');
    expect(headers).toHaveLength(2);
    
    const dataCells = table.querySelectorAll('td');
    expect(dataCells).toHaveLength(0);
  });

  test('should handle single student', () => {
    const students: Student[] = [
      { firstName: "Alice", lastName: "Wonder", age: 19, location: "Paris" }
    ];

    const table = createStudentTable(students);
    
    const rows = table.querySelectorAll('tr');
    expect(rows).toHaveLength(2); // 1 header + 1 data row
    
    const dataCells = table.querySelectorAll('td');
    expect(dataCells).toHaveLength(2);
    expect(dataCells[0].textContent).toBe('Alice');
    expect(dataCells[1].textContent).toBe('Paris');
  });
});
