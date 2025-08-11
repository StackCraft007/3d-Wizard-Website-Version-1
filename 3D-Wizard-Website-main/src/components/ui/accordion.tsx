import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

interface AccordionProps {
  type?: "single" | "multiple";
  defaultValue?: string;
  children: React.ReactNode;
  className?: string;
}

const AccordionContext = React.createContext<{
  openItems: string[];
  toggleItem: (value: string) => void;
}>({
  openItems: [],
  toggleItem: () => {},
});

export const Accordion: React.FC<AccordionProps> = ({
  type = "single",
  defaultValue = "",
  children,
  className,
}) => {
  const [openItems, setOpenItems] = useState<string[]>(
    defaultValue ? [defaultValue] : []
  );

  const toggleItem = (value: string) => {
    if (type === "single") {
      setOpenItems(openItems.includes(value) ? [] : [value]);
    } else {
      setOpenItems(
        openItems.includes(value)
          ? openItems.filter((item) => item !== value)
          : [...openItems, value]
      );
    }
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={cn("space-y-2", className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem: React.FC<AccordionItemProps> = ({
  value,
  children,
}) => {
  return <div data-value={value}>{children}</div>;
};

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  children,
  className,
}) => {
  const { openItems, toggleItem } = React.useContext(AccordionContext);
  const value = React.useContext(AccordionItemContext);
  const isOpen = openItems.includes(value);

  return (
    <button
      className={cn(
        "flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:underline",
        className
      )}
      onClick={() => toggleItem(value)}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
};

export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
  className,
}) => {
  const { openItems } = React.useContext(AccordionContext);
  const value = React.useContext(AccordionItemContext);
  const isOpen = openItems.includes(value);

  if (!isOpen) return null;

  return (
    <div className={cn("pb-4 pt-0", className)}>
      <div>{children}</div>
    </div>
  );
};

const AccordionItemContext = React.createContext<string>("");

// Wrapper to provide value context
export const AccordionItemWrapper: React.FC<AccordionItemProps> = ({
  value,
  children,
}) => {
  return (
    <AccordionItemContext.Provider value={value}>
      <div className="border-b">{children}</div>
    </AccordionItemContext.Provider>
  );
};