// export type Movie = {
//     name: string;
//     description: string;
//     titleImage: string;
//     image: string;
//     category: string;
//     language: string;
//     year: string;
//     time: string;
//     video: string;
//     rating: number;
//     reviews: number;
// }

export type Options = {
    _id?: string;
    title: string;
    value?: number;
}

export type Category = {
    _id: string;
    title: string;
}

export type User = {
    _id: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    image?: string;
    message?: string;
    rating?: number;
}

export type UserInfoType = {
    success: boolean,
    user: User,
    token: string,
}

export interface MovieProps {
    desc: ReactNode;
    cast: any;
    _id: any;
    name: string;
    description: string;
    titleImage: string;
    image: string;
    category: string;
    language: string;
    year: string;
    time: string;
    video: string;
    rating: number;
    reviews: number;
}