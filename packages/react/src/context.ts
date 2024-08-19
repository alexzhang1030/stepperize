import type { Step } from "@stepperize/core";
import * as React from "react";
import type { StepperContextType } from "./types";

export const StepperContext = React.createContext<
	StepperContextType<any, any> | undefined
>(undefined);

export function useStepper<
	Steps extends readonly Step[],
	Metadata extends Record<string, any> = Record<string, any>,
>() {
	const context = React.useContext(StepperContext) as StepperContextType<
		Steps,
		Metadata
	>;
	if (!context) {
		throw new Error("useStepper must be used within a Stepper");
	}
	return context;
}
