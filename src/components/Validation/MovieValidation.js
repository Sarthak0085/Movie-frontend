import * as Yup from "yup";

//review validation
export const CreateReviewValidation = Yup.object().shape({
    rating: Yup.number().required("Select a Rating"),
    comment: Yup.string().required("comment is required")
        .min(3, "Comment must be minimun 3 charcaters long")
        .max(150, "Comment must not be maximum than 150 charcaters long")
});

//movie validation
export const movieValidation = Yup.object().shape({
    name: Yup.string().required("Please enter a movie name.")
        .max(50, "Movie name should be less than 50 characters"),
    time: Yup.number().required("Please enter a movie duration"),
    language: Yup.string().transform((originalValue) => {
        if (typeof originalValue === 'string' && originalValue.startsWith('"') && originalValue.endsWith('"')) {
            return originalValue.slice(1, -1);
        }
        return originalValue;
    }).required("Please enter a movie language"),
    year: Yup.number().required("Please enter a movie release year"),
    desc: Yup.string().required("Please enter a movie description")
        .max(150, "Comment must not be maximum than 150 charcaters long"),
    category: Yup.string().transform((originalValue) => {
        if (typeof originalValue === 'string' && originalValue.startsWith('"') && originalValue.endsWith('"')) {
            return originalValue.slice(1, -1);
        }
        return originalValue;
    }).required("Please select a movie category"),
});

//cast validation
export const castValidation = Yup.object().shape({
    name: Yup.string().required("Cast Name is required")
        .max(20, "Cast Name should be less than 20 characters"),
})