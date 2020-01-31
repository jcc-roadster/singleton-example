export class EmployeeService {
    private static instance: EmployeeService;
    
    public static getInstance(): EmployeeService {
        if (!EmployeeService.instance) {
            EmployeeService.instance = new EmployeeService();
        }

        return EmployeeService.instance;
    }

    private constructor() { }

    getAllUser() {
        return [
            { name: "John Doe", dob: "1970-01-01", storeId: 1 },
            { name: "Jane Doe", dob: "1970-01-01", storeId: 2 },
        ]
    }
}