import { Provider } from "@ai-sdk-tools/store";
import { Chat } from "./components/chat";

export default async function Page() {
  return (
    <Provider initialMessages={[]}>
      <Chat />
    </Provider>
  );
}
