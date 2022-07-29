import TitleAndContent from '../../layouts/TitleAndContent';
import OneColumn from '../../layouts/OneColumn';

const url = new URL('./images/working-dir.png', import.meta.url);

export default ({
  name: 'TerminalWorkingDirectory',
  components: {
    TitleAndContent,
    OneColumn
  },
  template: `
    <TitleAndContent title="Le terminal : Dossier de travail">
      <OneColumn>
        <img src="${url}" alt="Terminal" />
      </OneColumn>
    </TitleAndContent>
  `,
});
