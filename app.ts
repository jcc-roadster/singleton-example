import { StoreService } from "./store-service";

const storeService = StoreService.getInstance();

console.log(storeService.getStoreEmployees(1));