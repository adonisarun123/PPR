'use client';

export default function MapEmbed() {
  return (
    <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-sand-200">
      <iframe
        title="Paws Pannai Retreat Location"
        className="h-full w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.000000!2d77.000000!3d10.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3APaws%20Pannai%20Retreat!5e0!3m2!1sen!2sin!4v1700000000000"
      />
    </div>
  );
}


