import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import CardPanel from "@/components/CardPanel";
import { EventCard } from "@/components/EventCard";

export default function Home() {
  return (
    <main >
      
        <Banner/>
        {/* <EventCard></EventCard> */}

    </main>
  );
}
