import React from 'react';
import Layout from './Layout';
import { css } from 'styled-components';

const Component2 = ({ data }) => <p>Component 2</p>;

export default ({ data }) => (
	<Layout
		css={css`
			&:hover {
				background-color: papayawhip;
			}
		`}
	>
		<Component2 data={data} />
	</Layout>
);
