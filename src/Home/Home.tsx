import React from "react";

import "./Home.css";

import avatar from "./avatar.png";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
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
	Slide,
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
			{value === index && (
				<Slide direction='up' in={true}>
					<Box p={3}> {children}</Box>
				</Slide>
			)}
		</div>
	);
}

function DynamicEmailLink() {
	const isMobile: boolean = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(
		navigator.userAgent
	);

	if (isMobile) {
		// if mobile open default mail app

		return (
			<Link
				href='mailto:iniesta2719@gmail.com'
				target='_blank'
				rel='noreferrer noopener'
				color='secondary'>
				iniesta2719@gmail.com
			</Link>
		);
	} else {
		// if desktop open gmail website
		return (
			<Link
				href='https://mail.google.com/mail/?view=cm&to=iniesta2719@gmail.com&su=%20&body=%20'
				target='_blank'
				rel='noreferrer noopener'
				color='secondary'>
				iniesta2719@gmail.com
			</Link>
		);
	}
}

function Home() {
	const theme = createMuiTheme({
		// carefully curated wt of themes
		palette: {
			primary: { main: "#ff0069" },
			secondary: { main: "#2196f3", contrastText: "#FAFAFA" },
		},
		typography: {
			h4: {
				fontFamily: "Permanent Marker, cursive",
				fontWeight: 300,
				letterSpacing: "1px",
			},
			h5: {
				fontFamily: "Dancing Script, cursive",
				fontWeight: 800,
				fontSize: "35px",
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
					<Tabs
						value={tabId}
						onChange={handleTabChange}
						centered
						aria-label='Tabs'>
						<Tab label='Home' />
						<Tab label='More' />
					</Tabs>
				</Typography>
			</AppBar>
			<Container color='inherit'>
				<TabPanel value={tabId} index={0}>
					<Box component='span' mx={1} mt={1} px={1}>
						<Box mx='auto'>
							<Card className='colorful-bg' raised>
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
												Born in 2006
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
								Hi, I’m Winston and I am very passionate about Piano, Guitar,
								Robotics, Soccer, and Computer science! I’ve always had a
								passion for STEM and Engineering. Ever since I was a little kid,
								I have always loved playing with Lego’s and contraptions.
								Technology fascinates me because the world revolves around it!
							</Typography>
						</Box>
{/*
						<Box my={2} height={500}>
							<div
								id='carouselExampleInterval'
								className='carousel slide '
								data-ride='carousel'>
								<div className='carousel-inner'>
									<div className='carousel-item active' data-interval='10000'>
										<img src={guitar} className='d-block w-100' alt='guitar' />
									</div>
									<div className='carousel-item' data-interval='2000'>
										<img src='...' className='d-block w-100' alt='...' />
									</div>
									<div className='carousel-item'>
										<img src='...' className='d-block w-100' alt='...' />
									</div>
								</div>
								<a
									className='carousel-control-prev'
									href='#carouselExampleInterval'
									role='button'
									data-slide='prev'>
									<span
										className='carousel-control-prev-icon'
										aria-hidden='true'></span>
									<span className='sr-only'>Previous</span>
								</a>
								<a
									className='carousel-control-next'
									href='#carouselExampleInterval'
									role='button'
									data-slide='next'>
									<span
										className='carousel-control-next-icon'
										aria-hidden='true'></span>
									<span className='sr-only'>Next</span>
								</a>
							</div>
						</Box> */}

						<Box mt={2} px={1} pb={0} mb={0}>
							<Typography variant='h6' align='center'>
								Contact me
							</Typography>
							<Typography variant='body1' align='center'>
								Email me at <DynamicEmailLink />
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
