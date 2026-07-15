export default function TypographyModel() {
  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-primary font-semibold text-3xl text-center">
          Typography
        </h2>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <div className="flex flex-col gap-2">
            <h1 className="font-heading text-4xl font-semibold">
              H1. Headline
            </h1>
            <h2 className="font-heading text-3xl font-semibold">
              H2. Headline
            </h2>
            <h3 className="font-heading text-2xl font-medium">
              H3. Headline
            </h3>
            <h4 className="font-heading text-xl font-medium">
              H4. Headline
            </h4>
            <h5 className="font-heading text-lg font-medium">
              H5. Headline
            </h5>
          </div>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Títulos - Geist Variable
          </span>
        </div>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <span className="font-kenao text-3xl text-primary">Lueve</span>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Fonte da marca - Kenao
          </span>
        </div>

        <div className="flex flex-col gap-2 last:border-b-0 last:pb-0">
          <div className="flex flex-col gap-1.5">
            <p className="text-lg">Texto grande (lg) - 18px</p>
            <p className="text-base">Texto base (base) - 16px</p>
            <p className="text-sm">Texto pequeno (sm) - 14px</p>
            <p className="text-xs text-muted-foreground">
              Texto legenda (xs) - 12px
            </p>
          </div>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Corpo de texto
          </span>
        </div>
      </div>
    </div>
  );
}
