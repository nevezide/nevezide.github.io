import TitleAndContent from '../../layouts/TitleAndContent';
import OneColumn from '../../layouts/OneColumn';

const url = new URL('./images/working-dir.png', import.meta.url);

export default ({
  name: 'TerminalQuesaco',
  components: {
    TitleAndContent,
    OneColumn
  },
  template: `
    <TitleAndContent title="Le terminal : Quésaco ?">
      <OneColumn>
        <img src="${url}" alt="Terminal" />
      </OneColumn>
    </TitleAndContent>
  `,
});
