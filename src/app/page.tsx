import Chat from "@/app/components/Chat";
import {Separator} from "@/components/ui/separator";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();
   
  return (
    <main>
      <h1 className="text-4xl font-bold">Welcome to GPT Chat</h1>
      {!session?.user?.email && <div>You need to log in to use this chat.</div>}
      {session?.user?.email && (
        <>
          <Separator className="my-5" />
          <Chat />
        </>
      )}
    </main>
  );
}