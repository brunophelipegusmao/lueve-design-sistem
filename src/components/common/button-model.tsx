import { Button } from "../ui/button";

export default function ButtonsModel() {
  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-primary font-semibold text-3xl text-center">
          Botões
        </h2>
        <div>
          <Button
            title="Botão"
            name="Botão"
            className="w-auto p-4 text-md font-medium "
          >
            {" "}
            Botão{" "}
          </Button>{" "}
          <span>Ativo</span>
        </div>

        <div>
          <Button
            title="Botão"
            name="Botão"
            variant="ghost"
            className="w-auto p-4 text-md font-medium bg-accent text-slate-400"
          >
            {" "}
            Botão{" "}
          </Button>{" "}
          <span>Desativado</span>
        </div>
        <div>
          <Button
            title="Botão"
            name="Botão"
            variant="destructive"
            className="w-auto p-4 text-md font-medium"
          >
            {" "}
            Botão{" "}
          </Button>{" "}
          <span>Ateção - destrutivo</span>
        </div>
        <div>
          <Button
            title="Botão"
            name="Botão"
            variant="secondary"
            className="w-auto p-4 text-md font-medium"
          >
            {" "}
            Botão{" "}
          </Button>{" "}
          <span>Secundário</span>
        </div>
        <div>
          <Button
            title="Botão"
            name="Botão"
            variant="outline"
            className="w-auto p-4 text-md font-medium"
          >
            {" "}
            Botão{" "}
          </Button>{" "}
          <span>Básico</span>
        </div>
      </div>
    </div>
  );
}
