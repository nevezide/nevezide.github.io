import POOHeader from "../courses/POO/POOHeader";
import POOClasses from "../courses/POO/POOClasses";
import POOObjets from "../courses/POO/POOObjets";
import POOConstructor from "../courses/POO/POOConstructor";
import POODemo from "../courses/POO/POODemo";
import POOModule from "../courses/POO/POOModule";
import POOVehiculeQuestion from "../courses/POO/POOVehiculeQuestion";
import POOVehiculeAnswer from "../courses/POO/POOVehiculeAnswer";
import POOHeritage from "../courses/POO/POOHeritage";
import End from "../courses/End";

export default ({
  name: 'POOView',
  components: {
    POOHeader,
    POOClasses,
    POOObjets,
    POOConstructor,
    POODemo,
    POOModule,
    POOVehiculeQuestion,
    POOVehiculeAnswer,
    POOHeritage,
    End,
  },
  template: `
    <div class="intro-view">
      <POOHeader />
      <POOClasses />
      <POOObjets />
      <POOConstructor />
      <POODemo />
      <POOModule />
      <POOVehiculeQuestion />
      <POOVehiculeAnswer />
      <POOHeritage />
      <End />
    </div>
  `,
});
