import Image from "next/image";
import Link from "next/link";

/** Official Bokako logo (white wordmark, for dark backgrounds). */
export function Logo() {
  return (
    <Link href="/" aria-label="Bokako home" className="block shrink-0">
      <Image
        src="/brand/bokako-logo.png"
        alt="Bokako"
        width={640}
        height={153}
        priority
        className="h-11 w-auto"
      />
    </Link>
  );
}
