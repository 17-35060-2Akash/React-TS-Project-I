export { };

export interface IUserType {
    id: number;
    name: string;
    email: string;
    age?: number
}

export const users: IUserType[] = [
    {
        id: 1,
        name: "Nasin Aynul Akash",
        email: 'na.akash715@gmail.com',
        age: 25
    },
    {
        id: 2,
        name: "Nazia Heeme",
        email: 'nazia.heeme@gmail.com',
        age: 25
    },
]

