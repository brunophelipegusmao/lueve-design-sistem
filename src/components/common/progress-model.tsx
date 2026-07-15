import { Progress, ProgressLabel, ProgressValue } from "../ui/progress";

export default function ProgressModel() {
  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-foreground font-semibold text-3xl text-center">
          Progress Bar
        </h2>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <Progress value={30} className="w-64" />
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            30%
          </span>
        </div>

        <div className="flex flex-col gap-2 border-b border-border pb-4 last:border-b-0 last:pb-0">
          <Progress value={70} className="w-64" />
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            70%
          </span>
        </div>

        <div className="flex flex-col gap-2 last:border-b-0 last:pb-0">
          <Progress value={55} className="w-64">
            <ProgressLabel>Enviando arquivo</ProgressLabel>
            <ProgressValue />
          </Progress>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Com rótulo e valor
          </span>
        </div>
      </div>
    </div>
  );
}
