import { HeartIcon, HomeIcon, SearchIcon, ShoppingBagIcon, UserIcon } from "lucide-react";

import { cn } from "@/lib/utils";

const items = [
  { icon: HomeIcon, label: "Início", active: true },
  { icon: SearchIcon, label: "Buscar", active: false },
  { icon: ShoppingBagIcon, label: "Sacola", active: false },
  { icon: HeartIcon, label: "Favoritos", active: false },
  { icon: UserIcon, label: "Perfil", active: false },
];

export default function NavbarBottomModel() {
  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-foreground font-semibold text-3xl text-center">
          Navbar: Bottom
        </h2>

        <div className="flex flex-col gap-2 last:border-b-0 last:pb-0">
          <nav className="flex w-80 items-center justify-between rounded-xl border border-border bg-card px-2 py-2 ring-1 ring-foreground/5">
            {items.map(({ icon: Icon, label, active }) => (
              <button
                key={label}
                className={cn(
                  "flex flex-1 flex-col items-center gap-1 rounded-lg py-1.5 text-[0.65rem] font-medium",
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="size-5" />
                {label}
              </button>
            ))}
          </nav>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Tab bar mobile
          </span>
        </div>
      </div>
    </div>
  );
}
