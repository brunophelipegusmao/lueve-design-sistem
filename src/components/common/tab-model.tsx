import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export default function TabModel() {
  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-foreground font-semibold text-3xl text-center">
          Tab
        </h2>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <Tabs defaultValue="conta" className="w-72">
            <TabsList>
              <TabsTrigger value="conta">Conta</TabsTrigger>
              <TabsTrigger value="senha">Senha</TabsTrigger>
              <TabsTrigger value="pagamento">Pagamento</TabsTrigger>
            </TabsList>
            <TabsContent value="conta">
              Gerencie suas informações de conta.
            </TabsContent>
            <TabsContent value="senha">Altere sua senha de acesso.</TabsContent>
            <TabsContent value="pagamento">
              Veja seus métodos de pagamento.
            </TabsContent>
          </Tabs>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Padrão
          </span>
        </div>

        <div className="flex flex-col gap-2 last:border-b-0 last:pb-0">
          <Tabs defaultValue="todos" className="w-72">
            <TabsList variant="line">
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="ativos">Ativos</TabsTrigger>
              <TabsTrigger value="arquivados">Arquivados</TabsTrigger>
            </TabsList>
            <TabsContent value="todos">Exibindo todos os itens.</TabsContent>
            <TabsContent value="ativos">Exibindo itens ativos.</TabsContent>
            <TabsContent value="arquivados">
              Exibindo itens arquivados.
            </TabsContent>
          </Tabs>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Variante linha
          </span>
        </div>
      </div>
    </div>
  );
}
