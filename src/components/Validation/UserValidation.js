import * as Yup from "yup";

//register validation
export const RegisterValidation = Yup.object().shape({
    firstName: Yup.string().required("FirstName is required")
        .min(3, "FirstName must be greater than or equal to 3 characters")
        .max(20, "First Name must be less than 20 characters")
        .matches(/^[a-zA-z]*$/, "FirstName must only contains letters")
        .trim(),
    lastName: Yup.string().required("LastName is required")
        .min(3, "LastName must be greater than or equal to 3 characters")
        .max(20, "LastName must be less than 20 characters")
        .matches(/^[a-zA-z]*$/, "LasttName must only contains letters")
        .trim(),
    userName: Yup.string().required("UserName is required")
        .min(3, "UserName must be greater than or equal to 3 characters")
        .max(20, "UserName must be less than 20 characters")
        .matches(/^[a-zA-z]*$/, "UserName must only contains letters")
        .trim(),
    age: Yup.number().required("Age is required")
        .min(9, "Age must be greate than 9 years old")
        .max(90, "Age must be less than 90 years old"),
    email: Yup.string().email().required("Email is required").trim(),
    password: Yup.string().required("Password is required")
        .min(8, "Password must be atleast 8 charcters")
        .max(20, "Password must be less than 20 characters")
        .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/, "Password must be atleast one number, one Capital letter, one small letter and one special charcter")
});

// login validation
export const LoginValidation = Yup.object().shape({
    email: Yup.string().email().required("Email is required").trim(),
    password: Yup.string().required("Password is required")
        .min(8, "Password must be atleast 8 charcters")
        .max(20, "Password must be less than 20 characters")
        .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/, "Password must be atleast one number, one Capital letter, one small letter and one special charcter")
});

//register validation
export const UpdateProfileValidation = Yup.object().shape({
    firstName: Yup.string().required("FirstName is required")
        .min(3, "FirstName must be greater than or equal to 3 characters")
        .max(20, "First Name must be less than 20 characters")
        .matches(/^[a-zA-z]*$/, "FirstName must only contains letters")
        .trim(),
    lastName: Yup.string().required("LastName is required")
        .min(3, "LastName must be greater than or equal to 3 characters")
        .max(20, "LastName must be less than 20 characters")
        .matches(/^[a-zA-z]*$/, "LasttName must only contains letters")
        .trim(),
    userName: Yup.string().required("UserName is required")
        .min(3, "UserName must be greater than or equal to 3 characters")
        .max(20, "UserName must be less than 20 characters")
        .matches(/^[a-zA-z]*$/, "UserName must only contains letters")
        .trim(),
    email: Yup.string().email().required("Email is required").trim(),
    age: Yup.number().required("Age is required")
        .min(9, "Age must be greate than 9 years old")
        .max(90, "Age must be less than 90 years old"),
});

// change password validation
// login validation
export const ChangePasswordValidation = Yup.object().shape({
    oldPassword: Yup.string().required("Old Password is required")
        .min(8, "Password must be atleast 8 charcters")
        .max(20, "Password must be less than 20 characters")
        .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
            "Password must be atleast one number, one Capital letter, one small letter and one special charcter"),
    newPassword: Yup.string().required("New Password is required")
        .min(8, "Password must be atleast 8 charcters")
        .max(20, "Password must be less than 20 characters")
        .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
            "Password must be atleast one number, one Capital letter, one small letter and one special charcter"),
    confirmPassword: Yup.string().required("Confirm Password is required")
        .min(8, "Password must be atleast 8 charcters")
        .max(20, "Password must be less than 20 characters")
        .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
            "Password must be atleast one number, one Capital letter, one small letter and one special charcter")
        .oneOf([Yup.ref("newPassword")], "Confirm Password must be match with New Password"),
});