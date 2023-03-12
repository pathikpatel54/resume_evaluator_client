import {
    Button,
    Center,
    FileInput,
    Paper,
    rem,
    Space,
    Text,
} from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    clearCounts,
    getResumeCount,
    sendResumes,
} from "../features/candidates/resumeReducer";

const AddResume = () => {
    const [files, setFiles] = useState(null);
    const dispatch = useDispatch();
    const count = useSelector(getResumeCount);

    useEffect(() => {
        dispatch(clearCounts("0"));
        console.log("Done");
    }, [dispatch]);

    const onResumesSubmit = () => {
        dispatch(sendResumes(files));
    };

    console.log(count);
    return (
        <Center style={{ display: "block", margin: "auto" }}>
            <Center>
                <FileInput
                    placeholder="Browse Resume"
                    icon={<IconUpload size={rem(14)} />}
                    accept="application/pdf"
                    multiple
                    value={files}
                    onChange={setFiles}
                    w={200}
                />
            </Center>

            <Space h="xl" />
            <Center>
                <Button
                    w={200}
                    onClick={onResumesSubmit}
                    disabled={files === null ? true : false}
                >
                    Submit
                </Button>
            </Center>
            <Space h="md" />
            <Center>
                <Text size={"md"} fw={700}>
                    {count === "0" ? "" : count}
                </Text>
            </Center>
        </Center>
    );
};

export default AddResume;
