import React from "react";

import "./Home.css";

import avatar from "./avatar.png";
import guitar from "./CarouselImages/guitar.jpg";
import piano from "./CarouselImages/piano.jpg";
import robotics from "./CarouselImages/robotics.jpg";
import soccer from "./CarouselImages/soccer.jpg";
import computers from "./CarouselImages/computers.jpg";

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


// tab panels, don't change anything here
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



function Carousel() {
		// {/* Below here is the code for carousel */}

	return (
		<Box my={2} height={500}>
			<Typography variant='h5' >My hobbies </Typography>
			<div className='row h-25'>
				<div className='col'>
					<div
						id='carousel'
						className='carousel slide bg-dark '
						data-ride='carousel'>
						<div className='carousel-inner '>
							<ol className='carousel-indicators'>
								<li
									data-target='#carousel'
									data-slide-to='0'
									className='active'></li>
								<li data-target='#carousel' data-slide-to='1'></li>
								<li data-target='#carousel' data-slide-to='2'></li>
								<li data-target='#carousel' data-slide-to='3'></li>
								<li data-target='#carousel' data-slide-to='4'></li>
							</ol>

							<div className='carousel-item ' data-interval='10000'>
								<img src={guitar} className='d-block h-25 ' alt='guitar' />
								<div className='carousel-caption d-none d-md-block  '>
									<h5 className=' p-1 carousel-custom-text'>Guitar</h5>
								</div>
							</div>
							<div className='carousel-item active' data-interval='2000'>
								<img src={piano} className='d-block h-25  ' alt='piano' />
								<div className='carousel-caption d-none d-md-block  '>
									<h5 className=' p-1 carousel-custom-text'>Piano</h5>
								</div>
							</div>
							<div className='carousel-item'>
								<img
									src={robotics}
									className='d-block  h-25 '
									alt='robotics'
								/>
								<div className='carousel-caption d-none d-md-block  '>
									<h5 className=' p-1 carousel-custom-text'>Robotics</h5>
								</div>
							</div>
							<div className='carousel-item'>
								<img
									src={computers}
									className='d-block  h-25 '
									alt='computers'
								/>
								<div className='carousel-caption d-none d-md-block  '>
									<h5 className=' p-1 carousel-custom-text'>Computers</h5>
								</div>
							</div>
							<div className='carousel-item'>
								<img src={soccer} className='d-block  h-25 ' alt='soccer' />
								<div className='carousel-caption d-none d-md-block  '>
									<h5 className=' p-1 carousel-custom-text'>Soccer</h5>
								</div>
							</div>
						</div>
						<a
							className='carousel-control-prev'
							href='#carousel'
							role='button'
							data-slide='prev'>
							<span
								className='carousel-control-prev-icon'
								aria-hidden='true'></span>
							<span className='sr-only'>Previous</span>
						</a>
						<a
							className='carousel-control-next'
							href='#carousel'
							role='button'
							data-slide='next'>
							<span
								className='carousel-control-next-icon'
								aria-hidden='true'></span>
							<span className='sr-only'>Next</span>
						</a>
					</div>
				</div>
			</div>
		</Box>
	);
}



// the dynamic email link, dont change anything here

function DynamicEmailLink(props : { mail : string }) {

	const { mail }= props;
	const isMobile: boolean = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(
		navigator.userAgent
	);

	if (isMobile) {
		// if mobile open default mail app

		return (
			<Link
				href={`mailto:${mail}`}
				target='_blank'
				rel='noreferrer noopener'
				color='secondary' >
				iniesta2719@gmail.com
			</Link>
		);
	} else {
		// if desktop open gmail website
		return (
			<Link
				href={`https://mail.google.com/mail/?view=cm&to=${mail}&su=%20&body=%20`}
				target='_blank'
				rel='noreferrer noopener'
				color='secondary' >
				iniesta2719@gmail.com
			</Link>
		);
	}
}

function Home() {
	const theme = createMuiTheme({
		// carefully curated set of theme colors and fonts, dont change anything here
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


	// below is the main code for the website, this can be changed but do so carefully

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
								{/* Using grids to evenly space out everything things gracefully stack on top of each other on mobile devices */}
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
												{/* This is the image path with alt text  */}
												{/* to change image, change avatar.png in folder to something else  */}
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
												{/* The title and subtitles below  */}
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
							{/* The about paragraph is below, you can change it  */}
							<Typography variant='body1'>
								Hi, I’m Winston and I am very passionate about Piano, Guitar,
								Robotics, Soccer, and Computer science! I’ve always had a
								passion for STEM and Engineering. Ever since I was a little kid,
								I have always loved playing with Lego’s and contraptions.
								Technology fascinates me because the world revolves around it!
							</Typography>
						</Box>

						<Carousel />

						{/* contact details below  */}

						<Box mt={2} px={1} pb={0} mb={0}>
							<Typography variant='h6' align='center'>
								Contact me
							</Typography>
							<Typography variant='body1' align='center'>
								{/* change the email id below */}
								Email me at <DynamicEmailLink mail='iniesta2719@gmail.com' />
							</Typography>
						</Box>
					</Box>
				</TabPanel>

				<TabPanel value={tabId} index={1}>
					{/* second tab content below  */}
					<b> Coming Soon... till then explore the Home tab </b>
				</TabPanel>
			</Container>
		</ThemeProvider>
	);
}

export default Home;
