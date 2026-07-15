import { DownloadIcon, ShareIcon, TrashIcon } from "lucide-react";

import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

export default function ActionSheetModel() {
  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-foreground font-semibold text-3xl text-center">
          Action Sheet
        </h2>

        <div className="flex flex-col gap-2 last:border-b-0 last:pb-0">
          <Drawer showSwipeHandle>
            <DrawerTrigger render={<Button variant="outline" />}>
              Mais ações
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>O que deseja fazer?</DrawerTitle>
                <DrawerDescription>
                  Escolha uma das ações abaixo.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button variant="ghost" className="justify-start">
                  <ShareIcon /> Compartilhar
                </Button>
                <Button variant="ghost" className="justify-start">
                  <DownloadIcon /> Baixar
                </Button>
                <Button variant="destructive" className="justify-start">
                  <TrashIcon /> Excluir
                </Button>
                <DrawerClose render={<Button variant="outline" />}>
                  Cancelar
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Bottom sheet (mobile)
          </span>
        </div>
      </div>
    </div>
  );
}
