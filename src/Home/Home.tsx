import React from "react";

import "./Home.css";

import avatar from "./avatar.png";
import guitar from "./CarouselImages/guitar.jpg";
import piano from "./CarouselImages/piano.jpg";
import robotics from "./CarouselImages/robotics.jpg";
import soccer from "./CarouselImages/soccer.jpg";
import computers from "./CarouselImages/computers.jpg";

import {
	createMuiTheme,
	ThemeProvider,
} from "@material-ui/core/styles";
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

interface slides {
	image: any;
	title: string;
	description: string;
}

const allSlides: any[] = [
	{
		image: <img src={computers} className='d-block  h-30 ' alt='computers' />,
		title: "Computers",
		description: " My love of technology and STEM has opened up new opportunities for me including organizing events through Hack Club and working with people who have as much passion as I do. I'm channeling all this passion into working and collaborating in projects focused mainly to change people's lives around the world. ",
	},
	{
		image: <img src={guitar} className='d-block  h-30 ' alt='computers' />,
		title: "Guitar",
		description:
			" I love to perform on my electric and acoustic guitar at the various nonprofit and community organized concerts",
	},
	{
		image: <img src={robotics} className='d-block  h-30 ' alt='computers' />,
		title: "Robotics",
		description:
			"I really enjoy robotics and lead my team to qualify for the 2019 California State VEX Championship by winning the Skills award at the VEX Robotics Competition at Google Headquarters.",
	},
	{
		image: <img src={soccer} className='d-block  h-30 ' alt='computers' />,
		title: "Soccer",
		description:
			"I play competitive soccer for the elite team in the club Steel United FC and have lead my team for a top spot in the California Regional League. I also lead my team to victory in the National Cup tournament.",
	},
];

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

function CarouselCard(props: { slide: slides, className : string}) {
	return (
		<Box className={props.className} >
			<Card raised>
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
							alignItems='center' >
							<CardMedia>{props.slide.image}</CardMedia>
						</Grid>
						<Grid
							item
							sm={6}
							container
							direction='column'
							justify='center'
							alignItems='center'>
							<Box width={0.7}>
								<Typography align='center' variant='h6' color='textPrimary'>
									{/* The title and subtitles below  */}
									<b>{props.slide.title}</b>
								</Typography>

								<Typography align='center' variant='body2'>
									{props.slide.description}
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Box>
	);
}

function Carousel() {
	// {/* Below here is the code for carousel */}

	return (
		<Box my={2} height='auto'>
			<Typography variant='h5'>My Interests </Typography>
			<div className='row h-30'>
				<div className='col'>
					<div id='carousel' className='carousel slide  ' data-ride='carousel'>
						<div className='carousel-inner '>
						

							<CarouselCard
								slide={{
									image: (
										<img src={piano} className='d-block h-30  ' alt='piano' />
									),
									title: "Piano",
									description: `I have been playing the piano since I was 5 years old and have been studying piano with Dr. Heewon Kwon at the Colburn School. I love the sound of the piano and the ability to express my feelings freely through it.`,
								}}
								className='carousel-item active'
								data-interval='5000'
							/>

							{allSlides.map((slide, key) => {
								return (
									<CarouselCard
										className='carousel-item'
										key={key}
										slide={slide}
									/>
								);
							})}
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

function DynamicEmailLink(props: { mail: string }) {
	const { mail } = props;
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
				color='secondary'>
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
				color='secondary'>
				iniesta2719@gmail.com
			</Link>
		);
	}
}

function Home() {
	const theme = createMuiTheme({
		// carefully curated set of theme colors and fonts, don't change anything here
		palette: {
			// type : "dark" , // uncomment this line to switch to dark mode
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
				color: "#000", // change this to #fff in light mode so that txt is legible
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
				<Typography variant='body1'>
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
