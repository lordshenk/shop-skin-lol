import React, { useEffect } from 'react';

function ScrollTopOnMount() {
	useEffect(() => {
		window.scrollTo( 0, 0);
	}, [])
	return null;
}

export default ScrollTopOnMount;