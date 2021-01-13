import React from 'react';
import Layout from './Layout';
import { css } from 'styled-components';

const Component1 = ({ data }) => <p>Component 1</p>;

export default ({ data }) => (
	<Layout
		css={css`
			&:hover {
				background-color: papayawhip;
			}
		`}
	>
		<Component1 data={data} />
	</Layout>
);
