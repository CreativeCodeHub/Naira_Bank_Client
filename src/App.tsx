import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import Pages from "./pages";

const queryClient = new QueryClient();

export default function App(): JSX.Element {
  return (
    <ConfigProvider>
      <QueryClientProvider client={queryClient}>
        <Pages />
      </QueryClientProvider>
    </ConfigProvider>
  );
}
