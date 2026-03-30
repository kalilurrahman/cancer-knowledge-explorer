import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import {
  Home, BookOpen, Bot, Globe, Layers, Briefcase,
  Brain, Building2, Zap, ChevronDown, Menu
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const pageLinks = [
  { label: "HOME", href: "https://kalilurrahman.lovable.app", icon: Home },
  { label: "Knowledge Hub", href: "https://kalilurrahman.lovable.app/knowledge-hub", icon: BookOpen },
  { label: "AI Agents", href: "https://kalilurrahman.lovable.app/ai-agents", icon: Bot },
  { label: "Digital Hub", href: "https://kalilurrahman.lovable.app/digital-hub", icon: Globe },
  { label: "Apps Portfolio", href: "https://kalilurrahman.lovable.app/apps-portfolio", icon: Layers },
];

const profileLinks = [
  { label: "AI Advisor", href: "https://kalilurrahman.lovable.app/profile/ai-advisor", icon: Brain },
  { label: "GCC Advisor", href: "https://kalilurrahman.lovable.app/profile/gcc-advisor", icon: Building2 },
  { label: "CoE Champion", href: "https://kalilurrahman.lovable.app/profile/coe-champion", icon: Layers },
  { label: "DX Champion", href: "https://kalilurrahman.lovable.app/profile/digital-transformation", icon: Zap },
];

export function Navbar() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [profilesOpen, setProfilesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container max-w-6xl mx-auto px-4 flex items-center justify-between h-12">
        {/* Logo */}
        <a
          href="https://kalilurrahman.lovable.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 no-underline"
          aria-label="Kalilur Rahman — Home"
        >
          <div className="w-7 h-7 border border-primary/40 flex items-center justify-center rounded">
            <span className="font-serif text-xs text-primary font-semibold">KR</span>
          </div>
          <span className="text-xs font-medium text-foreground tracking-wide hidden sm:block">
            KALILUR RAHMAN
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {pageLinks.map((pl) => {
            const Icon = pl.icon;
            return (
              <a
                key={pl.label}
                href={pl.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 py-1 rounded text-[10px] tracking-wide uppercase text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
              >
                <Icon className="w-3 h-3" />
                {pl.label}
              </a>
            );
          })}

          {/* Cancer Book — active indicator */}
          <span className="flex items-center gap-1 px-2 py-1 rounded text-[10px] tracking-wide uppercase text-primary bg-primary/10 font-medium">
            <BookOpen className="w-3 h-3" />
            Cancer Book
          </span>

          {/* Profiles dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfilesOpen(!profilesOpen)}
              onBlur={() => setTimeout(() => setProfilesOpen(false), 150)}
              aria-expanded={profilesOpen}
              aria-haspopup="true"
              aria-label="Open profiles menu"
              className="flex items-center gap-1 px-2 py-1 rounded text-[10px] tracking-wide transition-colors text-muted-foreground hover:text-accent hover:bg-accent/5"
            >
              <Briefcase className="w-3 h-3" />
              Profiles
              <ChevronDown className={`w-2.5 h-2.5 transition-transform ${profilesOpen ? "rotate-180" : ""}`} />
            </button>
            {profilesOpen && (
              <div className="absolute top-full right-0 mt-1 bg-popover border border-border rounded-lg shadow-lg py-1 min-w-[160px] z-50">
                {profileLinks.map((pl) => {
                  const Icon = pl.icon;
                  return (
                    <a
                      key={pl.label}
                      href={pl.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 text-xs transition-colors text-muted-foreground hover:text-accent hover:bg-accent/5"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {pl.label}
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <span className="w-px h-4 bg-border mx-1" />
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button className="p-1.5 text-foreground" aria-label="Open menu">
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="p-5 space-y-5 overflow-y-auto h-full">
                {/* Pages */}
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground font-bold">Pages</span>
                  {pageLinks.map((pl) => {
                    const Icon = pl.icon;
                    return (
                      <a
                        key={pl.label}
                        href={pl.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setSheetOpen(false)}
                        className="flex items-center gap-2.5 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {pl.label}
                      </a>
                    );
                  })}
                </div>

                <div className="h-px bg-border" />

                {/* Cancer Book */}
                <span className="flex items-center gap-2.5 text-sm font-medium text-primary">
                  <BookOpen className="w-4 h-4" />
                  Cancer Book (current)
                </span>

                <div className="h-px bg-border" />

                {/* Profiles */}
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground font-bold">Role Profiles</span>
                  {profileLinks.map((pl) => {
                    const Icon = pl.icon;
                    return (
                      <a
                        key={pl.label}
                        href={pl.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setSheetOpen(false)}
                        className="flex items-center gap-2.5 py-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {pl.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
