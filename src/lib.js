export const ERRORS = [
    {
        id: "firstname",
        msg: "First name is required",
        validate(val) {
            return val.length > 10;
        },
    },
    { 
        id: "lastname",
        msg: "Last name is required",
        validate(val) {
            return val.length > 15;
        },
    },
    { id: "email", msg: "Email address is required",
    validate(val) {
        return val.includes("@");
    },
     },
    { id: "comments", 
    msg: "Please enter a message between 10 and 100 characters",
    validate(val) {
    return val.length > 10 && val.length < 100;
},
}
];