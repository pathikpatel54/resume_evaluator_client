import { BackgroundImage, Button, Center, Divider } from "@mantine/core";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div style={{ display: "block", margin: "auto" }}>
            <Link to="/add" style={{ textDecoration: "none" }}>
                <Button w={200}>Upload Resume</Button>
            </Link>

            <div style={{ minHeight: "20px" }}></div>
            <Link to="/evaluate" style={{ textDecoration: "none" }}>
                <Button w={200}>Evaluate Resume</Button>
            </Link>
        </div>
    );
};

export default Home;
