import { useState } from "react";
import { LogOutIcon, SettingsIcon, UserIcon } from "lucide-react";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function DropdownModel() {
  const [ordenar, setOrdenar] = useState("recentes");

  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-foreground font-semibold text-3xl text-center">
          Dropdown
        </h2>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
              Minha conta
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Bruno Gusmão</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <UserIcon /> Perfil
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SettingsIcon /> Configurações
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <LogOutIcon /> Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Menu de conta
          </span>
        </div>

        <div className="flex flex-col gap-2 last:border-b-0 last:pb-0">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="secondary" />}>
              Ordenar por
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup value={ordenar} onValueChange={setOrdenar}>
                <DropdownMenuRadioItem value="recentes">
                  Mais recentes
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="antigos">
                  Mais antigos
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Exibir arquivados
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Radio e checkbox
          </span>
        </div>
      </div>
    </div>
  );
}
