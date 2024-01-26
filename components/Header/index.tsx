import { Dispatch, MutableRefObject, SetStateAction } from "react";
import ButtonGroup from "./ButtonGroup";
import Info from "./Info";
import Input from "./Input";
import Logo from "./Logo";

interface Props {
  setIsPanelOpen: Dispatch<SetStateAction<boolean>>;
}
const HeaderStyleLargeScreen = ({ setIsPanelOpen }: Props) => {
  return <div
    className="hidden md:flex gap-4 items-center justify-between"
  >
    <Logo />
    <Input />
    <Info/>
    <ButtonGroup
      setIsPanelOpen={setIsPanelOpen}
    />
  </div>
}
const HeaderStyleMobile = ({ setIsPanelOpen }: Props) => {
  return <div
    className="md:hidden flex flex-col gap-4 items-center justify-between"
  >
    <div
      className="flex justify-between gap-x-4 items-center w-full h-10"
    >
      <Logo />
      <ButtonGroup
        setIsPanelOpen={setIsPanelOpen}
      />
    </div>
    <Input />
  </div>
}
export default function Header({ setIsPanelOpen }: Props) {
  return (
    <header className="bg-white px-4 py-2 shadow dark:bg-[#2c2c2c]">
      <HeaderStyleLargeScreen
        setIsPanelOpen={setIsPanelOpen}
      />
      <HeaderStyleMobile
        setIsPanelOpen={setIsPanelOpen}
      />
    </header>
  );
}
