import { Button, Center, Divider, Textarea } from "@mantine/core";
import { Table } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import {
    evaluateResumes,
    selectAllCandidates,
} from "../features/candidates/resumeReducer";

const EvaluateResume = () => {
    const dispatch = useDispatch();
    const candidates = useSelector(selectAllCandidates);

    const onEvaluationSubmit = () => {
        console.log("Submitted");
        dispatch(
            evaluateResumes({
                jobDescrption: "The job is very easy",
            })
        );
    };

    const rows = candidates.map((candidate) => (
        <tr key={candidate.name}>
            <td>{candidate.firstName + " " + candidate.lastName}</td>
            <td>{candidate.email}</td>
            <td>{candidate.phNumber}</td>
        </tr>
    ));

    return (
        <Center style={{ display: "block", margin: "auto" }}>
            <Textarea
                placeholder="Job Description"
                autosize
                minRows={10}
                w={"50vw"}
            />
            <div style={{ height: "20px" }}></div>
            <Button
                w={200}
                fullWidth
                onClick={onEvaluationSubmit}
                style={{ margin: "auto" }}
            >
                Evaluate Resumes
            </Button>
            <Divider mt={20} mb={20} />

            <Table captionSide="top">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </Center>
    );
};

export default EvaluateResume;
