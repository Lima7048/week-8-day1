import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import barbie from "./barbie/page"
import posts from "./posts/page"
import post from "./post/[id]/page"

export default function Home() {
  return (
    <div>
      <h1>Im a Barbie gorl</h1>
      <h2>in a Barbie worrld (✿◠‿◠)</h2>
      <image src="https://pbs.twimg.com/media/FRyrJShVEAARyp0.jpg"
        width={500}
        height={500}
        alt="Picture of the author" />

    </div >
  );
}
