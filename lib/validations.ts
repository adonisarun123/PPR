import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  subject: z.enum([
    'General Inquiry',
    'Booking Question',
    'Pet-Related',
    'Farm Tours',
    'Other',
  ]),
  message: z.string().min(10, 'Message is too short'),
  preferredContact: z.enum(['email', 'phone']).default('email'),
});

export const bookingSchema = z.object({
  checkIn: z.string(),
  checkOut: z.string(),
  adults: z.coerce.number().int().min(1).max(10),
  children: z.coerce.number().int().min(0).max(5),
  pets: z.coerce.number().int().min(0).max(4),
  petDetails: z
    .object({
      type: z.enum(['dog', 'cat', 'other']).optional(),
      size: z.enum(['small', 'medium', 'large']).optional(),
      name: z.string().optional(),
    })
    .optional(),
  roomPreference: z
    .enum([
      'Garden Villa',
      'Farmhouse Suite',
      'Pet-Friendly Cottage',
      'Family Lodge',
    ])
    .optional(),
  specialRequests: z.string().optional(),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(5),
  acceptTerms: z.boolean().refine((v) => v === true, 'You must accept the terms'),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
export type BookingFormValues = z.infer<typeof bookingSchema>;


