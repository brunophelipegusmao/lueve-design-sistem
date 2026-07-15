import { CopyIcon, PencilIcon, TrashIcon } from "lucide-react";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "../ui/context-menu";

export default function ContextMenuModel() {
  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-foreground font-semibold text-3xl text-center">
          Context Menu
        </h2>

        <div className="flex flex-col gap-2 last:border-b-0 last:pb-0">
          <ContextMenu>
            <ContextMenuTrigger className="flex h-24 w-64 items-center justify-center rounded-lg border border-dashed border-border text-sm text-muted-foreground">
              Clique com o botão direito aqui
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>
                <PencilIcon /> Editar
              </ContextMenuItem>
              <ContextMenuItem>
                <CopyIcon /> Duplicar
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">
                <TrashIcon /> Excluir
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Clique com o botão direito
          </span>
        </div>
      </div>
    </div>
  );
}
