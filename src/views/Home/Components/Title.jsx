import { ContainerTitle, TitleText } from './../@styles/TitleStyles';
import { 
	FontAwesomeIcon,
	faPeopleCarry
} from './../../../themes/icons';

export const Title = () => (
	<ContainerTitle>
		<TitleText>
			sistema de inventarios y planillas <br/> SIP <br/>
			<FontAwesomeIcon icon={ faPeopleCarry }/>
		</TitleText>
	</ContainerTitle>
);