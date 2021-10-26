export const mediaQuery = ( code, width ) => {
	return `
		@media screen and (max-width: ${ width }px){
			${ code	}
		};
	`
}