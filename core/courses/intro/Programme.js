import TitleAndContent from '../../layouts/TitleAndContent';
import OneColumn from '../../layouts/OneColumn';

const url = new URL('./images/programme.png', import.meta.url);

export default ({
  name: 'Programme',
  components: {
    TitleAndContent,
    OneColumn
  },
  template: `
    <TitleAndContent title="Programme de la formation">
      <OneColumn>
        <img src="${url}" alt="Programme" /><br /><br />
        => Le détail <a href="https://docs.google.com/spreadsheets/d/12CDjtxkdx6Yu17Bsobcr-v8YJdNpbgPSUbd47YVpPBE/edit#gid=0">ici</a>
      </OneColumn>
    </TitleAndContent>
  `,
});
