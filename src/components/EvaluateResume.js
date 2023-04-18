import {
    Button,
    Center,
    Divider,
    Pagination,
    Paper,
    Space,
    Textarea,
} from "@mantine/core";
import { Table } from "@mantine/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    evaluateResumes,
    selectAllCandidates,
} from "../features/candidates/resumeReducer";
import { Paginator } from "../utils/paginator";

const EvaluateResume = () => {
    const dispatch = useDispatch();
    const candidates = useSelector(selectAllCandidates);
    const [jd, setJd] = useState("");
    const [activePage, setPage] = useState(1);

    const onEvaluationSubmit = () => {
        console.log("Submitted");
        dispatch(
            evaluateResumes({
                jobDescrption: jd,
            })
        );
    };

    const { data, total_pages } = Paginator(candidates, activePage, 5);

    const rows = data.map((candidate) => (
        <tr key={candidate.name}>
            <td>{candidate.name}</td>
            <td>{candidate.email}</td>
            <td>{candidate.phNumber}</td>
        </tr>
    ));

    return (
        <Center style={{ display: "block", margin: "auto" }}>
            <Paper withBorder p={"sm"} pt={"xs"}>
                <Textarea
                    placeholder="Job Description"
                    autosize
                    minRows={10}
                    w={"50vw"}
                    variant="unstyled"
                    pt={"0px"}
                    value={jd}
                    onChange={(e) => setJd(e.target.value)}
                />
            </Paper>

            <Space h="xl" />
            <Button
                w={200}
                fullWidth
                onClick={onEvaluationSubmit}
                style={{ margin: "auto" }}
                disabled={jd === "" ? true : false}
            >
                Evaluate Resumes
            </Button>
            {candidates.length > 0 ? (
                <>
                    <Divider mt={20} mb={20} />
                    <Paper withBorder>
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
                    </Paper>
                    <Space h={"xl"} />
                    <Center>
                        <Pagination
                            value={activePage}
                            onChange={setPage}
                            total={total_pages}
                        />
                    </Center>
                </>
            ) : (
                <></>
            )}
        </Center>
    );
};

export default EvaluateResume;
