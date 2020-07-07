import React from "react";

import avatar from "./avatar.png";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";
import {
	Container,
	AppBar,
	Tabs,
	Tab,
	Box,
	Typography,
	Grid,
	CssBaseline,
	Card,
	CardMedia,
	Link,
	CardContent,
	Icon,
} from "@material-ui/core";

interface TabPanelProps {
	children?: React.ReactNode;
	index: any;
	value: any;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`wrapped-tabpanel-${index}`}
			aria-labelledby={`wrapped-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function Home() {
	const theme = createMuiTheme({
		palette: {
			type: "dark",
		},
	});

	const [tabId, setTabId] = React.useState(0);

	const handleTabChange = (evt: any, newTabId: any) => {
		setTabId(newTabId);
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar position="static" color="inherit">
				<Typography variant="h6">
					<Tabs
						value={tabId}
						onChange={handleTabChange}
						aria-label="Tabs"
						centered
					>
						<Tab label="Home" />
						<Tab label="More" />
					</Tabs>
				</Typography>
			</AppBar>
			<Container color="inherit">
				<TabPanel value={tabId} index={0}>
					<Box component="span" mx={1} mt={1} px={1}>
						<Box mx="auto">
							<Card>
								<CardContent>
									<Grid
										container
										direction="column"
										justify="center"
										alignItems="center"
									>
										<CardMedia>
											<img src={avatar} alt="Winston Iskandar" />
										</CardMedia>
										<Typography variant="h5" color="textPrimary">
											Winston Iskandar
										</Typography>
										<Typography variant="h6" color="textSecondary">
											Age: 14
										</Typography>
										<Typography variant="h6" color="textSecondary">
											From Los Angeles, CA
										</Typography>
									</Grid>
								</CardContent>
							</Card>
						</Box>
						<Box mt={3} p={1}>
							<Typography variant="h6">About Me </Typography>
							<Typography variant="body1">
								Hi, I’m Winston and I am very passionate about piano, guitar,
								robotics, and computer science! I’ve always had a passion for
								STEM and Engineering. Ever since I was a little kid, I have
								always loved playing with lego's and contraptions. Technology
								fascinates me because the world revolves around it!
							</Typography>
						</Box>

						<Box mt={2} px={2}>
							<Typography variant="h6">

								<ContactMailOutlinedIcon /> Contact me
							</Typography>
							<Typography variant="body1">

								Email me at
								<Link href="emailto:iniesta2719@gmail.com" color="inherit">
									iniesta2719@gmail.com
								</Link>
							</Typography>
						</Box>
					</Box>
				</TabPanel>

				<TabPanel value={tabId} index={1}>
					<b> Coming Soon... till then explore the Home tab </b>
				</TabPanel>
			</Container>
		</ThemeProvider>
	);
}

export default Home;
