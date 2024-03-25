import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import Pages from "./pages";
import GlobalStyle from "./global.styles";

const queryClient = new QueryClient();

export default function App(): JSX.Element {
  return (
    <ConfigProvider>
      <GlobalStyle>
        <QueryClientProvider client={queryClient}>
          <Pages />
        </QueryClientProvider>
      </GlobalStyle>
    </ConfigProvider>
  );
}
