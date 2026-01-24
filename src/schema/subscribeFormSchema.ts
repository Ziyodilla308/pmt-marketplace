import { z } from 'zod';

export const formSchema = z.object({
    fullName: z.string().min(3, 'Full Name must be at least 3 characters'),
    phone: z.string().min(10, 'Phone is too short'),
    email: z.string().email('Invalid email').optional(),
    company: z.string().min(1, 'No Comany Name'),
    message: z.string().optional(),
});

export type FormSchemaType = z.infer<typeof formSchema>;
