interface Employee {
  readonly id: number;
  name: string;
  age: number;
  address?: string;
  insentive?(salary: number): number;
}

// const e1: Employee = {
//   id: 2210990830,
//   name: "shivansh",
//   age: 19,
// };

interface Employee {
  salary: number;
  department: string;
}

interface department extends Employee {
  totalEmployee: number;
  employeeInIt: number;
  employeeInFinance: number;
}

const e2: Employee = {
  id: 2020,
  name: "shivansh",
  age: 23,
  salary: 300000,
  department: "IT",
  insentive(salary): number {
    return salary * 0.15;
  },
};

const tata: department = {
  id: 300,
  name: "jason",
  age: 24,
  salary: 400000,
  department: "Finance",
  totalEmployee: 300,
  employeeInIt: 150,
  employeeInFinance: 150,
};

// e1.id=3220032
