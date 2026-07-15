import { Input } from "../ui/input";
import { Field, FieldDescription, FieldError, FieldLabel } from "../ui/field";

export default function FormModel() {
  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-foreground font-semibold text-3xl text-center">
          Formulários
        </h2>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <Field>
            <FieldLabel>Nome</FieldLabel>
            <Input name="nome" placeholder="Digite seu nome" />
          </Field>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Padrão
          </span>
        </div>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <Field>
            <FieldLabel>E-mail</FieldLabel>
            <Input
              name="email"
              type="email"
              placeholder="voce@exemplo.com"
              defaultValue="voce@exemplo.com"
            />
            <FieldDescription>
              Usaremos esse e-mail apenas para contato.
            </FieldDescription>
          </Field>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Com descrição
          </span>
        </div>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <Field invalid>
            <FieldLabel>Senha</FieldLabel>
            <Input name="senha" type="password" defaultValue="123" />
            <FieldError match={true}>
              A senha deve ter no mínimo 8 caracteres.
            </FieldError>
          </Field>
          <span className="text-xs font-medium uppercase tracking-wide text-destructive">
            Erro - inválido
          </span>
        </div>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <Field disabled>
            <FieldLabel>Cupom</FieldLabel>
            <Input name="cupom" placeholder="Indisponível" />
          </Field>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Desativado
          </span>
        </div>

        <div className="flex flex-col gap-2 last:border-b-0 last:pb-0">
          <Field>
            <FieldLabel>Anexo</FieldLabel>
            <Input name="anexo" type="file" />
          </Field>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Arquivo
          </span>
        </div>
      </div>
    </div>
  );
}
