import { useState } from "react";

import { Button } from "./components/ui/button";
import ProdutoLeggingPage from "./pages/produto-legging";

import ActionSheetModel from "./components/common/action-sheet-model";
import AlertModel from "./components/common/alert-model";
import AvatarModel from "./components/common/avatar-model";
import BadgeChipModel from "./components/common/badge-chip-model";
import BreadcrumbsModel from "./components/common/breadcrumbs-model";
import ButtonGroupModel from "./components/common/button-group-model";
import ButtonsModel from "./components/common/button-model";
import CalendarModel from "./components/common/calendar-model";
import CardModel from "./components/common/card-model";
import CheckboxModel from "./components/common/checkbox-model";
import ColorsModel from "./components/common/colors-model";
import ContextMenuModel from "./components/common/context-menu-model";
import DatePickerModel from "./components/common/date-picker-model";
import DropdownModel from "./components/common/dropdown-model";
import FormModel from "./components/common/form-models";
import IconsModel from "./components/common/icons-model";
import ListModel from "./components/common/list-model";
import LoaderModel from "./components/common/loader-model";
import NavbarBottomModel from "./components/common/navbar-bottom-model";
import NavbarTopModel from "./components/common/navbar-top-model";
import PageControlModel from "./components/common/page-control-model";
import PaginationModel from "./components/common/pagination-model";
import PopUpModel from "./components/common/popup-model";
import ProgressModel from "./components/common/progress-model";
import RadioModel from "./components/common/radio-model";
import ShadowModel from "./components/common/shadow-model";
import StepperModel from "./components/common/stepper-model";
import TabModel from "./components/common/tab-model";
import ToggleModel from "./components/common/toggle-model";
import TooltipModel from "./components/common/tooltip-model";
import TypographyModel from "./components/common/typography-model";

export default function App() {
  const [pagina, setPagina] = useState<"guide" | "produto">("guide");

  return (
    <>
      <header className="h-20 flex items-center justify-center gap-4 bg-[#8d967e]">
        <img src="./icons/icon_01.svg" width={200} height={100} />
        <span className="text-[#e3d6c3] text-2xl font-kenao">LUEVE</span>
        <div className="flex gap-1.5">
          <Button
            size="sm"
            variant={pagina === "guide" ? "secondary" : "ghost"}
            className={pagina !== "guide" ? "text-[#e3d6c3] hover:text-[#e3d6c3]" : ""}
            onClick={() => setPagina("guide")}
          >
            Style Guide
          </Button>
          <Button
            size="sm"
            variant={pagina === "produto" ? "secondary" : "ghost"}
            className={pagina !== "produto" ? "text-[#e3d6c3] hover:text-[#e3d6c3]" : ""}
            onClick={() => setPagina("produto")}
          >
            Produto
          </Button>
        </div>
      </header>
      <main>
        {pagina === "produto" ? (
          <ProdutoLeggingPage />
        ) : (
          <div className="flex flex-wrap items-start gap-3 p-2">
            <TypographyModel />
            <ColorsModel />
            <ShadowModel />
            <IconsModel />

            <ButtonsModel />
            <ButtonGroupModel />
            <FormModel />
            <CheckboxModel />
            <RadioModel />
            <ToggleModel />

            <BadgeChipModel />
            <AlertModel />
            <AvatarModel />
            <ProgressModel />
            <CardModel />
            <ListModel />

            <TabModel />
            <BreadcrumbsModel />
            <PaginationModel />
            <StepperModel />
            <PageControlModel />
            <NavbarTopModel />
            <NavbarBottomModel />

            <TooltipModel />
            <LoaderModel />
            <PopUpModel />
            <DropdownModel />
            <ContextMenuModel />
            <ActionSheetModel />
            <CalendarModel />
            <DatePickerModel />
          </div>
        )}
      </main>
      <footer></footer>
    </>
  );
}
