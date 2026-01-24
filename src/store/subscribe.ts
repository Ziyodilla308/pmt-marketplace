import {create} from 'zustand';
import api from '../api/axios';
import {FormState} from "@/models/form.ts";
import axios from "axios";


export const useFormStore = create<FormState>((set) => ({
    loading: false,
    success: false,
    error: null,

    submitForm: async (data: FormState) => {
        set({loading: true, success: false, error: null});

        try {
            await api.post('/form/submit', data);

            set({loading: false, success: true, error: null});
        } catch (err: unknown) {

            let errorMessage = 'Something went wrong';

            if (axios.isAxiosError(err)) {
                errorMessage = err.response?.data?.message || err.message;
            } else if (err instanceof Error) {
                errorMessage = err.message;
            }

            set({loading: false, success: false, error: errorMessage});
        }
    },
}));