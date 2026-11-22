import Link from "next/link";
import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center ${className}`}
      aria-label="Deen in Dunya — Home"
    >
      <Image
        src="/logo/deenindunya-logo.png"
        alt="Deen in Dunya"
        width={550}
        height={104}
        priority
        className="h-7 w-auto sm:h-8"
      />
    </Link>
  );
}
