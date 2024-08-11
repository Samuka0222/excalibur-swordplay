import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "./Sheet"
import { MenuIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "./Button"

interface SideMenuButtonProps {
  to: string;
  children: React.ReactNode;
}

function SideMenuLinkButton({ to, children }: SideMenuButtonProps) {
  return (
    <Button
      variant='default'
      className="text-white text-lg border w-full h-12 hover:bg-white hover:text-primary"
      asChild
    >
      <Link to={to}>
        {children}
      </Link>
    </Button>
  )
}

export function SideMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="text-white" size={35} />
      </SheetTrigger>
      <SheetContent className="bg-primary">
        <SheetHeader>
          <SheetTitle className="text-white">O que deseja acessar?</SheetTitle>
        </SheetHeader>
        <ul className="w-full flex flex-col gap-4 justify-between items-center p-4">
          <li className="w-full">
            <SideMenuLinkButton to="/">
              Regras
            </SideMenuLinkButton>
          </li>
          <li className="w-full">
            <SideMenuLinkButton to="/">
              Eventos
            </SideMenuLinkButton>
          </li>
          <li className="w-full">
            <SideMenuLinkButton to="/">
              Contato
            </SideMenuLinkButton>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  )
}
