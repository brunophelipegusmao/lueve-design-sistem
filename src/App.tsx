import ButtonsModel from "./components/common/button-model";
import FormModel from "./components/common/form-models";

export default function App() {
  return (
    <>
      <header className="h-20 flex items-center justify-center bg-[#8d967e]">
        <img src="./icons/icon_01.svg" width={200} height={100} />
        <span className="text-[#e3d6c3] text-2xl font-kenao">LUEVE</span>
      </header>
      <main className="flex gap-3">
        <ButtonsModel />
        <FormModel/>
      </main>
      <footer></footer>
    </>
  );
}
