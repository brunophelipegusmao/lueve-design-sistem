import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function PopUpModel() {
  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-foreground font-semibold text-3xl text-center">
          Pop-Up
        </h2>

        <div className="flex flex-col gap-2 last:border-b-0 last:pb-0">
          <Dialog>
            <DialogTrigger render={<Button />}>Abrir pop-up</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirmar ação</DialogTitle>
                <DialogDescription>
                  Essa ação não poderá ser desfeita. Deseja continuar?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose render={<Button variant="outline" />}>
                  Cancelar
                </DialogClose>
                <DialogClose render={<Button />}>Confirmar</DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Modal de confirmação
          </span>
        </div>
      </div>
    </div>
  );
}
