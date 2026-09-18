export const CONTACT = {
  email: 'education@techicious.com',
  whatsappDisplay: '+91 73038 38504',
  whatsappNumber: '917303838504',
  website: 'education.techicious.com',
  applicationFormUrl: 'https://forms.gle/M7NKiVYyfs9FP6H29',
  teachWithUsFormUrl: 'https://forms.gle/FJz4mvnVPmT6kKB66',
} as const;

export function whatsappHref(message: string) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
