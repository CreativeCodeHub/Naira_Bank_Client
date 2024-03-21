import { ConfigProvider } from "antd";
import Pages from "./pages";

export default function App(): JSX.Element {
  return (
    <ConfigProvider>
      <Pages />
    </ConfigProvider>
  );
}
