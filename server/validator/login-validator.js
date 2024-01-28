const {z}=require("zod");

const loginSchema=z.object({
    email: z
    .string({required_error:"Please Enter a valid email"})
    .trim()
    .email()
    .min(5,{message:"MinLength of email Is 5 characters"})
    .max(20,{message:"MaxLength of email is 20 characters"}),

    password: z
    .string({required_error:"Please enter correct password"})
    .trim()
    .min(5,{message:"MinLength of password Is 5 characters"}),
});

module.exports=loginSchema;

