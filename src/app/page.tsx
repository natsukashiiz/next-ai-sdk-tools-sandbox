import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Link href="/cutomer-support-agent">
        <Button>Customer Support Agent</Button>
      </Link>
    </div>
  );
}
