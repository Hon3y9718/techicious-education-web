import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { CONTACT, whatsappHref } from '@/lib/contact';

const links = [
  { href: '/#about', label: 'About' },
  { href: '/software-engineering', label: 'Software Engineering' },
  { href: '/applied-ai-engineering', label: 'Applied AI Engineering' },
  {
    href: whatsappHref("Hi! I'd like to know more about Techicious Education."),
    label: 'Contact',
    external: true,
  },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-headline text-lg font-bold tracking-tight">Techicious</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-primary">
            Education
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={CONTACT.applicationFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Apply Now
          </Link>
          <ThemeToggle />
        </div>
      </div>

      <nav className="container flex items-center gap-6 overflow-x-auto pb-3 md:hidden">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            className="whitespace-nowrap text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
