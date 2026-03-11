"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

type Props = {};

const Navbar = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NavigationMenu
      data-testid="navbar"
      className="shadow-md w-full flex-col bg-[#1d1d1d] text-white py-2"
    >
      <NavigationMenuList className="w-screen flex justify-between px-6 items-center">
        <NavigationMenuItem>
          <Link href="/" passHref>
            <p className="text-white font-bold text-lg">Nexus</p>
          </Link>
        </NavigationMenuItem>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X data-testid="x-icon" />
            ) : (
              <Menu data-testid="menu-icon" />
            )}
          </Button>
        </div>

        {/* Desktop navigation links - now a direct child of NavigationMenu, not NavigationMenuList */}
        <div className="hidden md:flex gap-2 items-center">
          <NavigationMenuItem>
            <Link href="/pages/auth/login" passHref>
              <Button variant="ghost" className="text-white">
                Entrar
              </Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/pages/auth/register" passHref>
              <Button>Registrar</Button>
            </Link>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div
          data-testid="mobile-menu"
          className="md:hidden flex flex-col items-center pb-4 bg-[#1d1d1d]"
        >
          <NavigationMenuItem className="w-full">
            <Link
              href="/pages/auth/login"
              passHref
              className="flex justify-center w-full"
            >
              <Button
                variant="ghost"
                className="text-white w-full py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Entrar
              </Button>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="w-full">
            <Link
              href="/pages/auth/register"
              passHref
              className="flex justify-center w-full"
            >
              <Button
                className="w-full py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Cadastrar
              </Button>
            </Link>
          </NavigationMenuItem>
        </div>
      )}
    </NavigationMenu>
  );
};

export default Navbar;
