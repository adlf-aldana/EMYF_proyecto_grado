import { ContainerLoading, LoadingData, LogoLoading, TextLoading } from './@styles/LoadingStyles';

export const Loading = () => (
	<ContainerLoading>
		<LoadingData>
			<LogoLoading/>
			<TextLoading>
				espera un momento por favor...
			</TextLoading>
		</LoadingData>
	</ContainerLoading>
);