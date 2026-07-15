import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

export default function RadioModel() {
  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-primary font-semibold text-3xl text-center">
          Radio
        </h2>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <RadioGroup defaultValue="pix" name="pagamento" className="gap-2.5">
            <label className="flex items-center gap-2 text-sm">
              <RadioGroupItem value="pix" />
              Pix
            </label>
            <label className="flex items-center gap-2 text-sm">
              <RadioGroupItem value="cartao" />
              Cartão de crédito
            </label>
            <label className="flex items-center gap-2 text-sm">
              <RadioGroupItem value="boleto" />
              Boleto
            </label>
          </RadioGroup>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Padrão
          </span>
        </div>

        <div className="flex flex-col gap-2 last:border-b-0 last:pb-0">
          <RadioGroup defaultValue="entrega" name="tipo" className="gap-2.5">
            <label className="flex items-center gap-2 text-sm opacity-50">
              <RadioGroupItem value="retirada" disabled />
              Retirada
            </label>
            <label className="flex items-center gap-2 text-sm">
              <RadioGroupItem value="entrega" />
              Entrega
            </label>
          </RadioGroup>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Com item desativado
          </span>
        </div>
      </div>
    </div>
  );
}
