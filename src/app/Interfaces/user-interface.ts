export interface User {
    id: number,
    email: string,
    username: string,
    password: string,
    name: {
        firstName: string,
        lastName: string
    },
    address: {
        city : string,
        street: string,
        number: number,
        zipcode : number
    },
    contactNumber: number
}