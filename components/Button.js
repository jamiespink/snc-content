import Link from "next/link";

export default function Button({ text, link }) {
  return <Link href={link}>{text}</Link>;
}
