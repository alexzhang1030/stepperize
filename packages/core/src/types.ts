export interface Step {
	id: string;
	title?: string;
	description?: string;
	isOptional?: boolean;
	isDisabled?: boolean;
}

export interface StepAttr {
	dataAttr: {
		"data-step": string;
		"data-disabled": boolean;
		"data-optional": boolean;
		"data-completed": boolean;
		"data-active": boolean;
		"data-last": boolean;
	};
	ariaAttr: {
		role: string;
		"aria-disabled": boolean;
		"aria-selected": boolean;
		"aria-controls": string;
		"aria-label": string;
		"aria-current": string | undefined;
		"aria-posinset": number;
		"aria-setsize": number;
		"aria-labelledby": string;
		"aria-describedby": string;
		"aria-expanded": boolean;
	};
}

export type StepWithAttr<T extends Step> = T & StepAttr;

export type StepperContextType<
	Steps extends readonly Step[],
	Metadata extends Record<string, any>,
> = {
	steps: Steps;
	metadata?: Metadata;
	onChangeMetadata?: (metadata: Metadata) => void;
	currentStep: Steps[number];
	isLastStep: boolean;
	isFirstStep: boolean;
	goToNextStep: () => void;
	goToPrevStep: () => void;
	goToStep: (id: Steps[number]["id"]) => void;
	getStepById: (id: Steps[number]["id"]) => Step;
	reset: () => void;
	stepsCount: number;
	when: (id: Steps[number]["id"]) => {
		render: (
			fn: (step: StepWithAttr<Step>) => React.ReactNode,
		) => React.ReactNode | null;
	};
};

export type StepperProps<
	Steps extends readonly Step[],
	Metadata extends Record<string, any>,
> = {
	steps: Steps;
	initialStep?: Steps[number]["id"];
	expandable?: boolean;
	metadata?: Metadata;
	onChangeMetadata?: (metadata: Metadata) => void;
	children: React.ReactNode;
};
