const tokens = [
  { nome: "Primary", classe: "bg-primary text-primary-foreground" },
  { nome: "Secondary", classe: "bg-secondary text-secondary-foreground" },
  { nome: "Background", classe: "bg-background text-foreground border border-border" },
  { nome: "Card", classe: "bg-card text-card-foreground border border-border" },
  { nome: "Muted", classe: "bg-muted text-muted-foreground" },
  { nome: "Accent", classe: "bg-accent text-accent-foreground" },
  { nome: "Destructive", classe: "bg-destructive text-white" },
  { nome: "Border", classe: "bg-border text-foreground" },
];

const chart = [
  "bg-chart-1",
  "bg-chart-2",
  "bg-chart-3",
  "bg-chart-4",
  "bg-chart-5",
];

export default function ColorsModel() {
  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-foreground font-semibold text-3xl text-center">
          Colors
        </h2>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <div className="grid w-72 grid-cols-2 gap-2">
            {tokens.map((token) => (
              <div
                key={token.nome}
                className={`flex h-14 items-center justify-center rounded-lg text-xs font-medium ${token.classe}`}
              >
                {token.nome}
              </div>
            ))}
          </div>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Tokens semânticos (definidos em index.css)
          </span>
        </div>

        <div className="flex flex-col gap-2 last:border-b-0 last:pb-0">
          <div className="flex gap-2">
            {chart.map((classe) => (
              <div key={classe} className={`size-10 rounded-full ${classe}`} />
            ))}
          </div>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Chart 1-5
          </span>
        </div>
      </div>
    </div>
  );
}
