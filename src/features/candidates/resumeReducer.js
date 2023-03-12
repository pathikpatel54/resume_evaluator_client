import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    candidates: [],
    count: "0",
    status: "idle",
    error: "",
};

export const sendResumes = createAsyncThunk(
    "resume/sendResumes",
    async (formData) => {
        let form = new FormData();
        formData.forEach((element) => {
            form.append("resumes", element);
        });

        const response = await axios.post("/addresume", form, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    }
);

export const evaluateResumes = createAsyncThunk(
    "resume/evaluateResume",
    async (jobDescription) => {
        const response = await axios.post("/evaluateresume", jobDescription);
        return response.data;
    }
);

const clearCount = (state, action) => {
    state.count = action.payload;
};

const resumeSlice = createSlice({
    name: "resume",
    initialState,
    reducers: {
        clearCount,
    },
    extraReducers(builder) {
        builder
            .addCase(sendResumes.pending, (state) => {
                state.status = "loading";
            })
            .addCase(sendResumes.fulfilled, (state, action) => {
                state.status = "succeded";
                state.count = action.payload;
            })
            .addCase(sendResumes.rejected, (state, action) => {
                state.status = "error";
                state.error = action.error.message;
            })
            .addCase(evaluateResumes.pending, (state) => {
                state.status = "loading";
            })
            .addCase(evaluateResumes.fulfilled, (state, action) => {
                state.status = "succeded";
                state.candidates = action.payload;
            })
            .addCase(evaluateResumes.rejected, (state, action) => {
                state.status = "error";
                state.error = action.error.message;
            });
    },
});

export const selectAllCandidates = (state) => state.resume.candidates;
export const getResumeCount = (state) => state.resume.count;
export const getResumeError = (state) => state.resume.error;
export const getResumeStatus = (state) => state.resume.status;
export const clearCounts = resumeSlice.actions.clearCount;

export default resumeSlice.reducer;
