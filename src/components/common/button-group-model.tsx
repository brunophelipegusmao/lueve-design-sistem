import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import { Button } from "../ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "../ui/button-group";

export default function ButtonGroupModel() {
  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-foreground font-semibold text-3xl text-center">
          Button Group
        </h2>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <ButtonGroup>
            <Button variant="outline" size="icon">
              <BoldIcon />
            </Button>
            <Button variant="outline" size="icon">
              <ItalicIcon />
            </Button>
            <Button variant="outline" size="icon">
              <UnderlineIcon />
            </Button>
          </ButtonGroup>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Ícones
          </span>
        </div>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <ButtonGroup>
            <Button variant="outline">Dia</Button>
            <Button variant="outline">Semana</Button>
            <Button variant="outline">Mês</Button>
          </ButtonGroup>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Texto
          </span>
        </div>

        <div className="flex flex-col gap-2 last:border-b-0 last:pb-0">
          <ButtonGroup>
            <ButtonGroupText>R$</ButtonGroupText>
            <ButtonGroupSeparator />
            <Button variant="outline">100</Button>
            <Button variant="outline">200</Button>
          </ButtonGroup>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Com texto
          </span>
        </div>
      </div>
    </div>
  );
}
