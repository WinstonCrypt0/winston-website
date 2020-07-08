import React from "react";

import "./Home.css";

import avatar from "./avatar.png";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import MusicNoteTwoToneIcon from "@material-ui/icons/MusicNoteTwoTone";
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
	Paper,
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
			role='tabpanel'
			hidden={value !== index}
			id={`wrapped-tabpanel-${index}`}
			aria-labelledby={`wrapped-tab-${index}`}
			{...other}>
			{value === index && <Box p={3}>{children}</Box>}
		</div>
	);
}

function Home() {
	const theme = createMuiTheme({
		palette: {
			primary: { main: "#0091EA" },
			secondary: { main: "#000", contrastText: "#FAFAFA" },
		},
		typography: {
			h4: {
				fontFamily: "Permanent Marker, cursive",
				fontWeight: 300,
			},
			h5: {
				fontFamily: "Dancing Script, cursive",
			},
			h6: {
				color: "#000",
			},
		},
	});

	const [tabId, setTabId] = React.useState(0);

	const handleTabChange = (evt: any, newTabId: any) => {
		setTabId(newTabId);
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar position='sticky' color='inherit'>
				<Typography variant='h6'>
					<Grid container direction='row'>
						<Grid item sm={2} alignItems='center'>
							<Icon>
								<MusicNoteTwoToneIcon />
							</Icon>
						</Grid>
						<Grid item>
							<Tabs value={tabId} onChange={handleTabChange} aria-label='Tabs'>
								<Tab label='Home' />
								<Tab label='More' />
							</Tabs>
						</Grid>
					</Grid>
				</Typography>
			</AppBar>
			<Container color='inherit'>
				<TabPanel value={tabId} index={0}>
					<Box component='span' mx={1} mt={1} px={1}>
						<Box mx='auto'>
							<Card className='blue-pink-gradient-bg' raised>
								<CardContent>
									<Grid
										container
										direction='row'
										justify='center'
										alignItems='center'
										spacing={4}>
										<Grid
											item
											sm={6}
											container
											direction='row'
											justify='center'
											alignItems='center'>
											<CardMedia>
												<img src={avatar} alt='Winston Iskandar' />
											</CardMedia>
										</Grid>
										<Grid
											item
											sm={6}
											container
											direction='column'
											justify='center'
											alignItems='center'>
											<Typography
												align='center'
												variant='h4'
												color='textPrimary'
												className='marker-text'>
												<b>Winston Iskandar</b>
											</Typography>
											<Typography align='center' variant='h6'>
												Age: 14
											</Typography>
											<Typography align='center' variant='h6'>
												From Los Angeles, CA
											</Typography>
										</Grid>
									</Grid>
								</CardContent>
							</Card>
						</Box>
						<Box mt={3} p={1}>
							<Typography variant='h5'>About Me </Typography>
							<Typography variant='body1'>
								Hi, I’m Winston and I am very passionate about piano, guitar,
								robotics, and computer science! I’ve always had a passion for
								STEM and Engineering. Ever since I was a little kid, I have
								always loved playing with lego's and contraptions. Technology
								fascinates me because the world revolves around it!
							</Typography>
						</Box>

						<Box mt={2} px={2}>
							<Typography variant='h5'>Contact me</Typography>
							<Typography variant='body1'>
								Email me at{" "}
								<Link
									href='emailto:iniesta2719@gmail.com'
									target='_blank'
									rel='noreferrer noopener'
									color='inherit'>
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
