'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingSchema, type BookingFormValues } from '@/lib/validations';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';

export default function BookingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (values: BookingFormValues) => {
    const res = await fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      reset();
      alert('Booking inquiry submitted! We will reach out soon.');
    } else {
      alert('Unable to submit booking. Please try again later.');
    }
  };

  const checkIn = watch('checkIn');
  const checkOut = watch('checkOut');

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input type="date" label="Check-in" {...register('checkIn')} error={errors.checkIn?.message} />
        <Input type="date" label="Check-out" {...register('checkOut')} error={errors.checkOut?.message} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="text-sm text-sand-700">Adults</label>
          <select className="mt-1 w-full rounded-md border border-sand-300 px-3 py-2 focus:ring-2 focus:ring-terracotta-200 outline-none" {...register('adults')}>
            {Array.from({ length: 10 }).map((_, i) => (
              <option key={i+1}>{i + 1}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm text-sand-700">Children</label>
          <select className="mt-1 w-full rounded-md border border-sand-300 px-3 py-2 focus:ring-2 focus:ring-terracotta-200 outline-none" {...register('children')}>
            {Array.from({ length: 6 }).map((_, i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm text-sand-700">Pets</label>
          <select className="mt-1 w-full rounded-md border border-sand-300 px-3 py-2 focus:ring-2 focus:ring-terracotta-200 outline-none" {...register('pets')}>
            {Array.from({ length: 5 }).map((_, i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="text-sm text-sand-700">Pet Type</label>
          <select className="mt-1 w-full rounded-md border border-sand-300 px-3 py-2" {...register('petDetails.type')}>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="text-sm text-sand-700">Pet Size</label>
          <select className="mt-1 w-full rounded-md border border-sand-300 px-3 py-2" {...register('petDetails.size')}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <Input label="Pet Name" {...register('petDetails.name')} />
      </div>

      <div>
        <label className="text-sm text-sand-700">Room Preference</label>
        <select className="mt-1 w-full rounded-md border border-sand-300 px-3 py-2" {...register('roomPreference')}>
          <option>Garden Villa</option>
          <option>Farmhouse Suite</option>
          <option>Pet-Friendly Cottage</option>
          <option>Family Lodge</option>
        </select>
      </div>

      <Textarea label="Special Requests" {...register('specialRequests')} />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Input label="Name" {...register('name')} error={errors.name?.message} />
        <Input label="Email" type="email" {...register('email')} error={errors.email?.message} />
        <Input label="Phone" {...register('phone')} error={errors.phone?.message} />
      </div>

      <div className="flex items-center gap-2">
        <input id="terms" type="checkbox" {...register('acceptTerms')} />
        <label htmlFor="terms" className="text-sm text-sand-700">
          I agree to the terms & conditions
        </label>
      </div>
      {errors.acceptTerms?.message ? (
        <p className="text-xs text-red-600">{errors.acceptTerms?.message}</p>
      ) : null}

      <div className="flex items-center justify-between">
        <div className="text-sm text-sand-600">
          {checkIn && checkOut ? `Dates: ${checkIn} → ${checkOut}` : 'Select your dates'}
        </div>
        <Button type="submit" loading={isSubmitting}>
          Submit Booking Inquiry
        </Button>
      </div>
    </form>
  );
}


