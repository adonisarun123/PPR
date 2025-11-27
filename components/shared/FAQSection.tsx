'use client';

type QA = { q: string; a: string };

const faqs: QA[] = [
  { q: 'Are pets allowed everywhere?', a: 'Pets are welcome in designated areas, including our pet pool and select accommodations.' },
  { q: 'Is the human pool chemical-free?', a: 'Yes, the earthen pool uses natural, eco-friendly filtration.' },
  { q: 'Do you offer farm tours?', a: 'Yes, guided tours are available on most days. Please inquire at booking.' },
];

export default function FAQSection() {
  return (
    <div className="space-y-3">
      {faqs.map((item) => (
        <details key={item.q} className="rounded-lg border border-sand-200 bg-white p-4">
          <summary className="cursor-pointer font-medium">{item.q}</summary>
          <p className="mt-2 text-sand-700">{item.a}</p>
        </details>
      ))}
    </div>
  );
}


