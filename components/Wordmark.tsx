import Link from "next/link";

export function Wordmark({ href = "/" }: { href?: string }) {
  return (
    <Link
      href={href}
      className="font-display text-[22px] leading-none text-ink whitespace-nowrap"
    >
      Lorenzo Paludett
      <span className="text-status">*</span>
    </Link>
  );
}
