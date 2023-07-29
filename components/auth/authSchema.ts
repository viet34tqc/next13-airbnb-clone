import * as z from 'zod';

export const loginSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  password: z.string().max(100),
  /* .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
      message:
        'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character',
    }), */
});

export const registerSchema = loginSchema.extend({
  name: z.string().min(1, 'Name field is required'),
});

export const checkEmailSchema = z.object({
  email: loginSchema.shape.email,
});
