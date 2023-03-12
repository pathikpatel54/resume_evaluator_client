import { Button, Center, FileInput, rem, Text } from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    clearCounts,
    getResumeCount,
    sendResumes,
} from "../features/candidates/resumeReducer";

const AddResume = () => {
    useEffect(() => {
        dispatch(clearCounts("0"));
        console.log("Done");
    }, []);

    const [files, setFiles] = useState(null);
    const dispatch = useDispatch();
    const count = useSelector(getResumeCount);
    const onResumesSubmit = () => {
        dispatch(sendResumes(files));
    };

    console.log(count);
    return (
        <Center style={{ display: "block", margin: "auto" }}>
            <FileInput
                placeholder="Browse resume"
                icon={<IconUpload size={rem(14)} />}
                accept="application/pdf"
                multiple
                value={files}
                onChange={setFiles}
                maw={200}
            />
            <div style={{ minHeight: "20px" }}></div>
            <Button w={200} onClick={onResumesSubmit}>
                Submit Resume
            </Button>
            <div style={{ height: "20px" }}></div>

            <Text style={{ margin: "auto" }} fw={700}>
                {count == "0" ? "" : count}
            </Text>
        </Center>
    );
};

export default AddResume;
