import { Component, Prop, Vue } from 'vue-property-decorator';
import WithRender from './HelloWorld.html';

@WithRender
@Component
export default class HelloWorld extends Vue {
    @Prop() private msg!: string;
}
