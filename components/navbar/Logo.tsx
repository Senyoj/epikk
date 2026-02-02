import Image from "next/image";

export default function Logo({
  width,
  height,
  className = "",
}: {
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <Image
      src="/eppikDesingslogo.svg"
      alt="Logo"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
