import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/isr/1">ID: 1</Link>
        </li>
        <li>
          <Link href="/isr/2">ID: 2</Link>
        </li>
        <li>
          <Link href="/isr/3">ID: 3</Link>
        </li>
      </ul>
    </div>
  );
}
