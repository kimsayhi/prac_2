import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <Link href={"spring"}>리액트스프링</Link>
      <Link href={"scroll"}>리액트스프링 스크롤</Link>
      <Link href={"framer-motion"}>프레이머모션</Link>
      <Link href={"scroll-and-show"}>스크롤끝나면 보여주기</Link>
    </div>
  );
}
