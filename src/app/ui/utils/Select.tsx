import * as SelectPrimitive from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { forwardRef } from "react";

export const Select = forwardRef(
  ({ children, ...props }: any, forwardedRef: any) => {
    return (
      <SelectPrimitive.Root {...props}>
        <SelectPrimitive.Trigger
          className="flex gap-2 p-1  items-center min-w-full w-full justify-between border shadow-sm bg-white bg-opacity-40"
          ref={forwardedRef}
        >
          <SelectPrimitive.Value className="text-white" />
          <SelectPrimitive.Icon className="text-white">
            <ChevronDownIcon />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            position="popper"
            className="shadow-sm bg-white min-w-full w-full"
            style={{
              width: props.width
            }}
          >
            <SelectPrimitive.ScrollUpButton>
              <ChevronUpIcon />
            </SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.Viewport className="w-full">
              {children}
            </SelectPrimitive.Viewport>
            <SelectPrimitive.ScrollDownButton>
              <ChevronDownIcon />
            </SelectPrimitive.ScrollDownButton>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    );
  }
);

Select.displayName = "Select";

export const SelectItem = forwardRef(
  ({ children, className, ...props }: any, forwardedRef: any) => {
    return (
      <SelectPrimitive.Item
        className="w-full p-1 block"
        {...props}
        ref={forwardedRef}
      >
        <SelectPrimitive.ItemText className={`block w-full ${className}`}>
          {children}
        </SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    );
  }
);

SelectItem.displayName = "SelectItem";
