import React from 'react';
import { Helmet } from 'react-helmet';

function ReactHelmet() {
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>FreedomWall</title>
				<link rel="canonical" href="http://mysite.com/example" />
				<link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
			</Helmet>
		</>
	);
}

export default ReactHelmet;
