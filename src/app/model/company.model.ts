export interface Company {
    id: string;
    name: string;
    description: string;
    email: string;
    phone: string;
    date?: Date;
    status: 'active' | 'inactive' | null
}