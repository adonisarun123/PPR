'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormValues } from '@/lib/validations';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject: 'General Inquiry',
      preferredContact: 'email',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      reset();
      alert('Thanks! We will get back to you shortly.');
    } else {
      alert('Unable to send message. Please try again later.');
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <Input label="Name" {...register('name')} error={errors.name?.message} />
      <Input label="Email" type="email" {...register('email')} error={errors.email?.message} />
      <Input label="Phone" {...register('phone')} error={errors.phone?.message} />
      <div>
        <label className="text-sm text-sand-700">Subject</label>
        <select
          className="mt-1 w-full rounded-md border border-sand-300 px-3 py-2 focus:ring-2 focus:ring-terracotta-200 outline-none"
          {...register('subject')}
        >
          <option>General Inquiry</option>
          <option>Booking Question</option>
          <option>Pet-Related</option>
          <option>Farm Tours</option>
          <option>Other</option>
        </select>
        {errors.subject?.message ? (
          <p className="text-xs text-red-600">{errors.subject?.message}</p>
        ) : null}
      </div>
      <Textarea label="Message" rows={6} {...register('message')} error={errors.message?.message} />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <input type="radio" id="pref-email" value="email" {...register('preferredContact')} />
          <label htmlFor="pref-email">Email</label>
          <input type="radio" id="pref-phone" value="phone" className="ml-4" {...register('preferredContact')} />
          <label htmlFor="pref-phone">Phone</label>
        </div>
        <Button type="submit" loading={isSubmitting}>
          Send Message
        </Button>
      </div>
    </form>
  );
}


