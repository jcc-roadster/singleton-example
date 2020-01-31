import { EmployeeService } from "./employee-service";

export class StoreService {
    private static instance: StoreService;
    
    public static getInstance(): StoreService {
        if (!StoreService.instance) {
            StoreService.instance = new StoreService();
        }

        return StoreService.instance;
    }

    private constructor(
        private employeeService = EmployeeService.getInstance()
    ) { }

    getStoreEmployees(storeId: number) {
        return  this.employeeService.getAllUser().filter(x => x.storeId === storeId);
    }
}