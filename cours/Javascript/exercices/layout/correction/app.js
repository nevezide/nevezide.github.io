import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';

new Vue({
  el: '#app',
  data: {
    title: 'Welcome !',
    copyright: 'Nevezide 2022',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  components: {
    Header,
    Main,
    Footer,
  },
  template: `
    <div class="container">
      <Header :title=title />
      <Main>
        <p>{{ content }}</p>
      </Main>
      <Footer :copyright=copyright />
    </div>
  `,
});
