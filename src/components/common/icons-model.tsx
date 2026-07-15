import {
  BellIcon,
  CalendarIcon,
  CheckIcon,
  ChevronRightIcon,
  HeartIcon,
  HomeIcon,
  MailIcon,
  PencilIcon,
  SearchIcon,
  SettingsIcon,
  ShoppingBagIcon,
  StarIcon,
  TrashIcon,
  UserIcon,
  XIcon,
} from "lucide-react";

const icones = [
  { Icon: HomeIcon, nome: "Home" },
  { Icon: SearchIcon, nome: "Search" },
  { Icon: UserIcon, nome: "User" },
  { Icon: HeartIcon, nome: "Heart" },
  { Icon: ShoppingBagIcon, nome: "Bag" },
  { Icon: BellIcon, nome: "Bell" },
  { Icon: MailIcon, nome: "Mail" },
  { Icon: SettingsIcon, nome: "Settings" },
  { Icon: CalendarIcon, nome: "Calendar" },
  { Icon: StarIcon, nome: "Star" },
  { Icon: PencilIcon, nome: "Edit" },
  { Icon: TrashIcon, nome: "Trash" },
  { Icon: CheckIcon, nome: "Check" },
  { Icon: XIcon, nome: "Close" },
  { Icon: ChevronRightIcon, nome: "Chevron" },
];

export default function IconsModel() {
  return (
    <div>
      <div className="flex flex-col w-auto gap-4 p-6 border-2 m-2 rounded-2xl">
        <h2 className="text-foreground font-semibold text-3xl text-center">
          Icons
        </h2>

        <div className="grid w-full max-w-xs grid-cols-5 gap-3">
          {icones.map(({ Icon, nome }) => (
            <div
              key={nome}
              className="flex flex-col items-center gap-1 rounded-lg border border-border p-2.5"
            >
              <Icon className="size-4 text-foreground" />
              <span className="text-[0.6rem] text-muted-foreground">
                {nome}
              </span>
            </div>
          ))}
        </div>
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground text-center">
          Lucide Icons
        </span>
      </div>
    </div>
  );
}
