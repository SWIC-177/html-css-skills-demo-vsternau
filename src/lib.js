export const ERRORS = [
    {
        id: "firstname",
        msg: "First name is required",
        validate(val) {
            return val.length > 10 && val.includes("  ");
        },
    },
    { 
        id: "lastname",
        msg: "Last name is required",
        validate(val) {
            return val.length > 15 && val.includes("  ");
        },
    },
    { id: "email", msg: "Email address is required" },
    { id: "comments", msg: "Please enter a message between 10 and 100 characters" },
];