import React, { lazy, useState } from 'react';
import shortid from 'shortid';

const importView = (componentName) =>
	lazy(() => import(`./Components/${componentName}`).catch(() => import(`./Components/NullComponent`)));
// lazy(() => import(`./components/${componentName}`).catch(() => import(`./Components/NullComponent`)));
const data = {};
const ComponentsList = ({ components }) =>
	Object.values(components).map((Component) => <Component key={shortid.generate()} data={data} />);

export default function App() {
	const [ components, setComponents ] = useState({});

	//factory
	const addComponent = (componentName) => {
		// Optional step: Chart is already loaded. Don't load again.
		if (components[componentName]) return;

		const Comp = importView(componentName);
		//setComponents((components) => ({ ...components, [componentName]: Comp }));
		setComponents((components) => ({ [componentName]: Comp }));
	};
	const loadComp1 = () => addComponent('Comp1');
	const loadComp2 = () => addComponent('Comp2');

	return (
		<main>
			<section className="container">
				<button disabled={components['Comp1']} onClick={loadComp1}>
					Component1
				</button>
				<button disabled={components['Comp2']} onClick={loadComp2}>
					Component2
				</button>
			</section>
			<section className="container">
				<React.Suspense fallback="Loading components...">
					<div className="row">
						<ComponentsList components={components} />
					</div>
				</React.Suspense>
			</section>
		</main>
	);
}
