import { UserIcon } from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "../ui/avatar";

export default function AvatarModel() {
  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-foreground font-semibold text-3xl text-center">
          Avatar
        </h2>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <div className="flex items-center gap-3">
            <Avatar size="sm">
              <AvatarFallback>
                <UserIcon />
              </AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>BG</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarFallback>BG</AvatarFallback>
            </Avatar>
          </div>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Tamanhos
          </span>
        </div>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <Avatar>
            <AvatarImage src="/modelos/modelo_lagging-1.webp" alt="Usuário" />
            <AvatarFallback>BG</AvatarFallback>
          </Avatar>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Com imagem
          </span>
        </div>

        <div className="flex flex-col gap-2 last:border-b-0 last:pb-0">
          <AvatarGroup>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>CD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>EF</AvatarFallback>
            </Avatar>
            <AvatarGroupCount>+3</AvatarGroupCount>
          </AvatarGroup>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Grupo
          </span>
        </div>
      </div>
    </div>
  );
}
