import {
    BackgroundImage,
    Button,
    Center,
    Divider,
    Space,
    rem,
    createStyles,
    Overlay,
    Title,
    Text,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { Container } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
    inner: {
        position: "relative",
        zIndex: 1,
    },

    title: {
        fontWeight: 800,
        fontSize: rem(40),
        letterSpacing: rem(-1),
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        color: theme.white,
        marginBottom: theme.spacing.xs,
        textAlign: "center",
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,

        [theme.fn.smallerThan("xs")]: {
            fontSize: rem(28),
            textAlign: "left",
        },
    },

    highlight: {
        color: theme.colors[theme.primaryColor][4],
    },

    description: {
        color: theme.colors.gray[0],
        textAlign: "center",

        [theme.fn.smallerThan("xs")]: {
            fontSize: theme.fontSizes.md,
            textAlign: "left",
        },
    },

    controls: {
        marginTop: `calc(${theme.spacing.xl} * 1.5)`,
        display: "flex",
        justifyContent: "center",
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,

        [theme.fn.smallerThan("xs")]: {
            flexDirection: "column",
        },
    },

    control: {
        height: rem(42),
        fontSize: theme.fontSizes.md,

        "&:not(:first-of-type)": {
            marginLeft: theme.spacing.md,
        },

        [theme.fn.smallerThan("xs")]: {
            "&:not(:first-of-type)": {
                marginTop: theme.spacing.md,
                marginLeft: 0,
            },
        },
    },

    secondaryControl: {
        color: theme.white,
        backgroundColor: "rgba(255, 255, 255, .4)",

        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, .45) !important",
        },
    },
}));

const Home = () => {
    const { classes, cx } = useStyles();

    return (
        <div className={classes.inner}>
            <Title className={classes.title}>
                Automated AI reviews for{" "}
                <Text component="span" inherit className={classes.highlight}>
                    any resume
                </Text>
            </Title>

            <Text size="lg" className={classes.description}>
                Simplifying the recruitment process with AI based resume review.
            </Text>

            <div className={classes.controls}>
                <Link to="/add" style={{ textDecoration: "none" }}>
                    <Button
                        className={classes.control}
                        variant="white"
                        size="lg"
                    >
                        Upload Resumes
                    </Button>
                </Link>
                <Space w="lg" />
                <Link to="/evaluate" style={{ textDecoration: "none" }}>
                    <Button
                        className={cx(
                            classes.control,
                            classes.secondaryControl
                        )}
                        size="lg"
                    >
                        Evaluate
                    </Button>
                </Link>
            </div>
        </div>

        // <div style={{ display: "block", margin: "auto" }}>
        //     <Link to="/add" style={{ textDecoration: "none" }}>
        //         <Button w={200}>Upload Resume</Button>
        //     </Link>

        //     <Space h="xl" />
        //     <Link to="/evaluate" style={{ textDecoration: "none" }}>
        //         <Button w={200}>Evaluate Resume</Button>
        //     </Link>
        // </div>
    );
};

export default Home;
