import { App } from 'vue';
import Button from '@x-fe-ui/button';
import Icon from '@x-fe-ui/icon';

const components = [
	Button,
	Icon
];

const install = (app:App):void=>{
	components.forEach(component=>{
		app.component(component.name,component);
	});
};

export default {
	install
};