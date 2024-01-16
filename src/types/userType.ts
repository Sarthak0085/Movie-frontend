export type userRegisterData = {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    age: number;
    password: string;
    image?: string;
}

export type userLoginData = {
    email: string;
    password: string;
}

export type userUpdatedProfileData = {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    age: number;
    image?: string;
}

export type changeUserPasswordData = {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
}