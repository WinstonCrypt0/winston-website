import React from "react";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
	Container,
	AppBar,
	Tabs,
	Tab,
	Box,
	Typography,
	CssBaseline,
	Slide,
} from "@material-ui/core";

import Home from "./Home/Home";
import Performances from "./Performances/Performances";



// tab panels, don't change anything here
function TabPanel(props ) {
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

function App() {
	const theme = createMuiTheme({
		// carefully curated set of theme colors and fonts, don't change anything here
		palette: {
			// type : "dark" , // uncomment this line to switch to dark mode
			primary: { main: "#ff0069" },
			secondary: { main: "#2196f3", contrastText: "#FAFAFA" },
		},
	});

	// states regarding active tab
	const [tabId, setTabId] = React.useState(0);

	const handleTabChange = (evt, newTabId) => {
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
						<Tab label='About' />
						<Tab label='More' />
					</Tabs>
				</Typography>
			</AppBar>
			<Container color='inherit'>
				<TabPanel value={tabId} index={0}>
					<Home />
				</TabPanel>

				<TabPanel value={tabId} index={1}>
					<Performances />
				</TabPanel>
			</Container>
		</ThemeProvider>
	);
}

export default App;
