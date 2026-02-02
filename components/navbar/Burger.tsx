import Image from "next/image";

export default function Burger({ onClick }: { onClick: () => void }) {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <Image src="/burger.svg" alt="Menu" width={40} height={40} />
    </div>
  );
}
