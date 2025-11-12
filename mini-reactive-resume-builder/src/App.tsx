import EditorPanel from "./component/editor-panel";
import { PreviewPanel } from "./component/preview-panel";

export default function App() {
  // const { title, setTitle } = useTitleScore();
  return (
    <div className="flex w-full flex-col items-start justify-between bg-[#FFC4C4] p-5 font-mono text-[#FCF5EE] lg:flex-row">
      <EditorPanel />
      <PreviewPanel />
    </div>
  );
}
