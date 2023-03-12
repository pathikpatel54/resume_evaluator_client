import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "../features/candidates/resumeReducer";

export const store = configureStore({
    reducer: {
        resume: resumeReducer,
    },
});
