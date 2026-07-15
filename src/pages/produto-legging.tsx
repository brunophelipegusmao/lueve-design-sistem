import { useState } from "react";
import {
  HeartIcon,
  MinusIcon,
  PlusIcon,
  RefreshCcwIcon,
  ShieldCheckIcon,
  StarIcon,
  TruckIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type Cor = "preto" | "verde" | "laranja";
type Tamanho = "PP" | "P" | "M" | "G" | "GG";

const cores: Record<Cor, { nome: string; hex: string; imagens: string[] }> = {
  preto: {
    nome: "Preto",
    hex: "#1a1a1a",
    imagens: [1, 2, 3, 4, 5, 6].map((n) => `/modelos/modelo_lagging-${n}.webp`),
  },
  verde: {
    nome: "Verde",
    hex: "#3f4d3a",
    imagens: [1, 2, 3, 4, 5].map(
      (n) => `/modelos/modelo-lagging-verde-${n}.webp`
    ),
  },
  laranja: {
    nome: "Laranja",
    hex: "#c96a2c",
    imagens: [1, 2, 3, 4, 5].map(
      (n) => `/modelos/modelo-lagging-laranja-${n}.webp`
    ),
  },
};

const tamanhos: Tamanho[] = ["PP", "P", "M", "G", "GG"];

const avaliacoes = [
  {
    nome: "Marina Souza",
    nota: 5,
    texto:
      "Tecido incrível, não marca e não fica transparente durante o treino. Comprei em duas cores!",
  },
  {
    nome: "Camila Rocha",
    nota: 5,
    texto: "Modelagem perfeita, a cintura alta não desce durante o treino.",
  },
  {
    nome: "Fernanda Lima",
    nota: 4,
    texto:
      "Muito boa, só achei o tamanho um pouco justo. Recomendo pedir um número acima.",
  },
];

const relacionados = [
  {
    nome: "Legging Verão Estampada",
    preco: "129,90",
    imagem: "/modelos/modelo-lagging-verde-3.webp",
  },
  {
    nome: "Top Cropped Lush",
    preco: "79,90",
    imagem: "/modelos/modelo-lagging-laranja-2.webp",
  },
  {
    nome: "Conjunto Fitness Duo",
    preco: "189,90",
    imagem: "/modelos/modelo_lagging-4.webp",
  },
  {
    nome: "Legging Recorte Lateral",
    preco: "139,90",
    imagem: "/modelos/modelo-lagging-laranja-4.webp",
  },
];

function iniciais(nome: string) {
  return nome
    .split(" ")
    .slice(0, 2)
    .map((parte) => parte[0])
    .join("");
}

export default function ProdutoLeggingPage() {
  const [cor, setCor] = useState<Cor>("preto");
  const [imagemAtiva, setImagemAtiva] = useState(0);
  const [tamanho, setTamanho] = useState<Tamanho[]>(["M"]);
  const [quantidade, setQuantidade] = useState(1);

  const imagens = cores[cor].imagens;

  function selecionarCor(novaCor: Cor) {
    setCor(novaCor);
    setImagemAtiva(0);
  }

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 p-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Início</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Coleções</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Legging Fitness Feminina Canelada</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-3">
          <img
            src={imagens[imagemAtiva]}
            alt="Legging Fitness Feminina"
            className="aspect-[3/4] w-full rounded-xl object-cover ring-1 ring-foreground/10"
          />
          <div className="flex gap-2 overflow-x-auto">
            {imagens.map((src, index) => (
              <button
                key={src}
                onClick={() => setImagemAtiva(index)}
                className={cn(
                  "size-16 shrink-0 overflow-hidden rounded-lg ring-1 ring-border transition-all",
                  index === imagemAtiva && "ring-2 ring-primary"
                )}
              >
                <img
                  src={src}
                  alt=""
                  className="size-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <h1 className="font-heading text-2xl font-semibold">
                Legging Fitness Feminina Canelada
              </h1>
              <Button variant="ghost" size="icon-sm">
                <HeartIcon />
              </Button>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon
                  key={index}
                  className={cn(
                    "size-3.5",
                    index < 5 ? "fill-primary text-primary" : "text-muted"
                  )}
                />
              ))}
              (128 avaliações)
            </div>
          </div>

          <div className="flex flex-col gap-1 border-b border-border pb-5">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">-20%</Badge>
              <span className="text-sm text-muted-foreground line-through">
                R$ 199,90
              </span>
            </div>
            <span className="text-2xl font-semibold text-primary">
              R$ 159,90
            </span>
            <span className="text-sm text-muted-foreground">
              em até 3x de R$ 53,30 sem juros
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium">
              Cor: {cores[cor].nome}
            </span>
            <div className="flex gap-2">
              {(Object.keys(cores) as Cor[]).map((chave) => (
                <button
                  key={chave}
                  aria-label={cores[chave].nome}
                  onClick={() => selecionarCor(chave)}
                  className={cn(
                    "size-8 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background transition-all",
                    cor === chave && "ring-2 ring-primary"
                  )}
                  style={{ backgroundColor: cores[chave].hex }}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium">Tamanho</span>
            <ToggleGroup
              value={tamanho}
              onValueChange={(valor) => setTamanho(valor as Tamanho[])}
              variant="outline"
            >
              {tamanhos.map((t) => (
                <ToggleGroupItem key={t} value={t} className="w-12">
                  {t}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium">Quantidade</span>
            <ButtonGroup>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantidade((q) => Math.max(1, q - 1))}
              >
                <MinusIcon />
              </Button>
              <ButtonGroupText className="w-12 justify-center">
                {quantidade}
              </ButtonGroupText>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantidade((q) => q + 1)}
              >
                <PlusIcon />
              </Button>
            </ButtonGroup>
          </div>

          <div className="flex flex-col gap-2">
            <Button className="w-full">Adicionar à sacola</Button>
            <Button variant="outline" className="w-full">
              Comprar agora
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">
              <TruckIcon /> Frete grátis
            </Badge>
            <Badge variant="outline">
              <RefreshCcwIcon /> Troca grátis em 30 dias
            </Badge>
            <Badge variant="outline">
              <ShieldCheckIcon /> Compra 100% segura
            </Badge>
          </div>
        </div>
      </div>

      <Tabs defaultValue="descricao">
        <TabsList>
          <TabsTrigger value="descricao">Descrição</TabsTrigger>
          <TabsTrigger value="cuidados">Composição e Cuidados</TabsTrigger>
          <TabsTrigger value="avaliacoes">Avaliações</TabsTrigger>
        </TabsList>
        <TabsContent value="descricao" className="flex flex-col gap-2">
          <p className="text-muted-foreground">
            Legging fitness com tecido canelado de alta compressão, cintura
            alta para maior sustentação e costura reforçada nas áreas de
            maior movimento. Ideal para treinos de alta intensidade ou uso
            casual, com toque macio e secagem rápida.
          </p>
        </TabsContent>
        <TabsContent value="cuidados" className="flex flex-col gap-2">
          <ul className="list-inside list-disc text-muted-foreground">
            <li>Composição: 75% Poliamida, 25% Elastano</li>
            <li>Lavar à mão ou máquina em ciclo delicado</li>
            <li>Não usar alvejante</li>
            <li>Secar à sombra</li>
          </ul>
        </TabsContent>
        <TabsContent value="avaliacoes" className="flex flex-col gap-4">
          {avaliacoes.map((avaliacao, index) => (
            <div key={avaliacao.nome}>
              <div className="flex items-start gap-3">
                <Avatar size="sm">
                  <AvatarFallback>{iniciais(avaliacao.nome)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium">
                    {avaliacao.nome}
                  </span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon
                        key={i}
                        className={cn(
                          "size-3.5",
                          i < avaliacao.nota
                            ? "fill-primary text-primary"
                            : "text-muted"
                        )}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {avaliacao.texto}
                  </p>
                </div>
              </div>
              {index < avaliacoes.length - 1 && (
                <Separator className="mt-4" />
              )}
            </div>
          ))}
        </TabsContent>
      </Tabs>

      <div className="flex flex-col gap-4">
        <h2 className="font-heading text-xl font-semibold">
          Você também pode gostar
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {relacionados.map((produto) => (
            <Card key={produto.nome} size="sm">
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="aspect-square w-full object-cover"
              />
              <CardHeader>
                <CardTitle className="text-sm">{produto.nome}</CardTitle>
                <CardDescription>R$ {produto.preco}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  Ver produto
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
