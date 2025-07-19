"use client";

import { Button } from "@/shared/ui/button/Button";
import Logo from "@/shared/ui/logo/Logo";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Или другие иконки

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="hidden md:flex justify-center items-center h-28 ">
        <nav className="grid h-28 w-full grid grid-cols-[1fr_auto_1fr] items-center gap-8 ">
          <div className="flex justify-end gap-4">
            <Button className="text-xl">Warhammer 40k</Button>
            <Button className="text-xl">Warhammer Age Of Sigmar</Button>
          </div>

          <div className="flex justify-center min-w-[75px]">
            <Logo width={75} height={75} />
          </div>

          <div className="flex gap-4">
            <Button className="text-xl">Warhammer Old World</Button>
            <Button className="text-xl">Все остальное</Button>
          </div>
        </nav>
      </header>

      <header className="md:hidden h-20 relative">
        <nav className="h-20 flex items-center justify-between px-4 relative">
          <div className="flex items-center gap-4">
            <Logo width={40} height={40} />
            <span className="text-2xl text-white">Фаербол</span>
          </div>

          <Button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md transition-colors"
            aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMobileMenuOpen}
            size={"lg"}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>

          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 shadow-lg z-50 border-t py-2">
              <div className="flex flex-col">
                <Button className="text-lg py-3 px-4 justify-start rounded-none">
                  Warhammer 40k
                </Button>
                <Button className="text-lg py-3 px-4 justify-start rounded-none">
                  Warhammer Age Of Sigmar
                </Button>
                <Button className="text-lg py-3 px-4 justify-start rounded-none">
                  Warhammer Old World
                </Button>
                <Button className="text-lg py-3 px-4 justify-start rounded-none">
                  Все остальное
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
