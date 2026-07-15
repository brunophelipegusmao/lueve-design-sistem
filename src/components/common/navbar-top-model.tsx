import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

export default function NavbarTopModel() {
  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-foreground font-semibold text-3xl text-center">
          Navbar: Top
        </h2>

        <div className="flex flex-col gap-2 last:border-b-0 last:pb-0">
          <nav className="flex w-full max-w-lg flex-wrap items-center justify-between gap-2 rounded-lg bg-primary px-4 py-2.5 text-primary-foreground">
            <span className="font-heading text-lg font-semibold">LUEVE</span>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-primary-foreground hover:bg-primary-foreground/10">
                    Coleções
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink href="#">Verão</NavigationMenuLink>
                    <NavigationMenuLink href="#">Inverno</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#"
                    className="text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Sobre
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button size="sm" variant="secondary">
              Entrar
            </Button>
          </nav>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Com menu de navegação
          </span>
        </div>
      </div>
    </div>
  );
}
