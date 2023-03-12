import {
    Center,
    MantineProvider,
    Container,
    BackgroundImage,
} from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddResume from "./components/AddResume";
import EvaluateResume from "./components/EvaluateResume";
import { HeaderSimple } from "./components/Header";
import Home from "./components/Home";

function App() {
    return (
        <MantineProvider
            theme={{
                colorScheme: "dark",
                components: {
                    Container: {
                        defaultProps: {
                            sizes: {
                                xs: 540,
                                sm: 720,
                                md: 960,
                                lg: 1140,
                                xl: 1320,
                            },
                        },
                    },
                },
            }}
            withGlobalStyles
            withNormalizeCSS
        >
            {/* <BackgroundImage
                src="/bg.jpg"
                radius="sm"
                className="background"
            ></BackgroundImage> */}
            <div className="App">
                <BrowserRouter>
                    <HeaderSimple />
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
                </BrowserRouter>
            </div>
        </MantineProvider>
    );
}

export default App;
