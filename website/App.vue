<template>
  <div>
    <x-icon />
    <x-button />
  </div>
</template>

<script lang='ts'>
import { reactive,toRefs,onBeforeMount,onMounted} from 'vue';
interface DataProps {
    name: string
}
export default {
	name: 'App',
	setup() {
		console.log('1-开始创建组件-setup');
		const data: DataProps = reactive({
			name: '李四'
		});
		onBeforeMount(() => {
			console.log('2.组件挂载页面之前执行----onBeforeMount');
		});
		onMounted(() => {
			console.log('3.-组件挂载到页面之后执行-------onMounted');
		});
		const refData = toRefs(data);
		return {
			...refData
		};
	}
};
</script>
<style scoped>
</style>