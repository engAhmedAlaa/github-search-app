import { ThemeType } from "@/types/theme.type";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import { cn } from "@/lib/utils";

type Props = {
  theme: ThemeType;
  handleChange: () => void;
};

export function ThemeToggle({ theme, handleChange }: Props) {
  return (
    <div className="flex items-center gap-3">
      <Label htmlFor="theme" className={cn("uppercase")}>
        {theme}
      </Label>
      <Switch
        id="theme"
        checked={theme === "dark"}
        onCheckedChange={handleChange}
        aria-label="Switch theme"
      />
    </div>
  );
}
