import { Button } from "../ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function CardModel() {
  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-foreground font-semibold text-3xl text-center">
          Card
        </h2>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <Card className="w-72">
            <img
              src="/modelos/modelo_lagging-1.webp"
              alt="Produto"
              className="h-32 w-full object-cover"
            />
            <CardHeader>
              <CardTitle>Legging Lagging</CardTitle>
              <CardDescription>Coleção verão</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full">Comprar</Button>
            </CardFooter>
          </Card>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Horizontal - com imagem
          </span>
        </div>

        <div className="flex flex-col gap-2 last:border-b-0 last:pb-0">
          <Card className="w-72">
            <CardHeader>
              <CardTitle>Assinatura Lueve</CardTitle>
              <CardDescription>Acesso completo ao catálogo</CardDescription>
              <CardAction>
                <Button variant="ghost" size="sm">
                  Ver mais
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Renovação automática mensal, cancele quando quiser.
              </p>
            </CardContent>
          </Card>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Vertical - com ação
          </span>
        </div>
      </div>
    </div>
  );
}
