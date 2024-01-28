const {z} = require("zod");

const registerSchema=z.object({
    username: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"MinLength of name Is 3 characters"})
    .max(10,{message:"MaxLength of name is 10 characters"}),

    email: z
    .string({required_error:"Email is required"})
    .trim()
    .email()
    .min(5,{message:"MinLength of email Is 5 characters"})
    .max(20,{message:"MaxLength of email is 20 characters"}),

    phone: z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10,{message:"MinLength of phone Is 10 digits"})
    .max(10,{message:"MaxLength of phone Is 10 digits"}),

    password: z
    .string({required_error:"Password is required"})
    .trim()
    .min(5,{message:"MinLength of password Is 5 characters"})
    .max(10,{message:"MaxLength of password is 10 characters"}),

})

module.exports=registerSchema;