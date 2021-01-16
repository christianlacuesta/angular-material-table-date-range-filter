import { Subject } from "rxjs";
import { Company } from "../model/company.model";

export class TableService {
    companyChanged = new Subject<Company>();

    private companies: Company[] = [
        {id: '1', name: 'Company1', description: 'test1 test1', email: 'test1@test.com', phone: '9999-99-9', date: new Date(2020, 1, 16), status: 'active'},
        {id: '2', name: 'Company2', description: 'test2 test1', email: 'test2@test.com', phone: '9999-99-9', date: new Date(2020, 1, 21), status: 'active'},
        {id: '3', name: 'Company3', description: 'test3 test1', email: 'test3@test.com', phone: '9999-99-9', date: new Date(2020, 1, 22), status: 'active'},
        {id: '4', name: 'Company4', description: 'test4 test1', email: 'test4@test.com', phone: '9999-99-9', date: new Date(2020, 1, 23), status: 'inactive'}
    ];

    getCompanies() {
        return this.companies.slice();
    }
}