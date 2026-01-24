import {FormSchemaType} from "@/schema/subscribeFormSchema.ts";

export interface FormState {
    loading: boolean;
    success: boolean;
    error: string | null;
    submitForm: (data: FormSchemaType) => Promise<void>;
}