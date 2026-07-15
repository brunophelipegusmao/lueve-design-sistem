const shadows = [
  { nome: "xs", classe: "shadow-xs" },
  { nome: "sm", classe: "shadow-sm" },
  { nome: "md", classe: "shadow-md" },
  { nome: "lg", classe: "shadow-lg" },
  { nome: "xl", classe: "shadow-xl" },
  { nome: "2xl", classe: "shadow-2xl" },
];

export default function ShadowModel() {
  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-foreground font-semibold text-3xl text-center">
          Shadow
        </h2>

        <div className="flex flex-col gap-2 last:border-b-0 last:pb-0">
          <div className="grid grid-cols-3 gap-6 p-4">
            {shadows.map((shadow) => (
              <div key={shadow.nome} className="flex flex-col items-center gap-2">
                <div
                  className={`size-16 rounded-xl bg-card ${shadow.classe}`}
                />
                <span className="text-xs text-muted-foreground">
                  {shadow.nome}
                </span>
              </div>
            ))}
          </div>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground text-center">
            Escala de sombra (Tailwind)
          </span>
        </div>
      </div>
    </div>
  );
}
