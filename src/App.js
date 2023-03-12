import {
    Center,
    MantineProvider,
    BackgroundImage,
    AppShell,
    Footer,
    useMantineTheme,
    Text,
    Space,
} from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddResume from "./components/AddResume";
import EvaluateResume from "./components/EvaluateResume";
import HeaderSimple from "./components/Header";
import Home from "./components/Home";

function App() {
    const theme = useMantineTheme();
    return (
        <MantineProvider
            theme={{
                colorScheme: "dark",
            }}
            withGlobalStyles
            withNormalizeCSS
        >
            <BrowserRouter>
                <BackgroundImage
                    src="/bg.jpg"
                    radius="sm"
                    className="background"
                >
                    <AppShell
                        styles={{
                            main: {
                                paddingTop: "150px",
                            },
                        }}
                        footer={
                            <Footer height={60} p="md">
                                {/* <Center>
                                {" "}
                                <Text fz="md">Collaborators</Text>
                            </Center>
                            <Space h={"lg"} /> */}
                                <Center>
                                    <Text fz="md">Akshay Jain</Text>
                                    <Space w={"xl"} />
                                    <Text fz="md">Pathik Patel</Text>
                                    <Space w={"xl"} />
                                    <Text fz="md">Priyanka Paikray</Text>
                                    <Space w={"xl"} />
                                    <Text fz="md">Srikar Pappu</Text>
                                </Center>
                            </Footer>
                        }
                        header={<HeaderSimple />}
                    >
                        <Center>
                            <Routes>
                                <Route path="/add" Component={AddResume} />
                                <Route path="/" Component={Home} />
                                <Route
                                    path="/evaluate"
                                    Component={EvaluateResume}
                                />
                            </Routes>
                        </Center>
                    </AppShell>
                </BackgroundImage>
            </BrowserRouter>
        </MantineProvider>
    );
}

export default App;
