import IntroHeader from "../courses/intro/IntroHeader";
import PresentationTitle from "../courses/intro/PresentationTitle";
import ProgrammeTitle from "../courses/intro/ProgrammeTitle";
import Programme from "../courses/intro/Programme";
import ProgrammeSoutien from "../courses/intro/ProgrammeSoutien";
import ProgrammeAtelier from "../courses/intro/ProgrammeAtelier";
import CadreHoraires from "../courses/intro/CadreHoraires";
import CadrePauses from "../courses/intro/CadrePauses";
import CadreDejeuner from "../courses/intro/CadreDejeuner";
import CadreAbsence from "../courses/intro/CadreAbsence";
import ValeursTitle from "../courses/intro/ValeursTitle";
import ValeursCooperation from "../courses/intro/ValeursCooperation";
import ValeursMixite from "../courses/intro/ValeursMixite";
import ValeursBienveillance from "../courses/intro/ValeursBienveillance";
import ValeursResponsabilite from "../courses/intro/ValeursResponsabilite";
import MaterielHeader from "../courses/intro/MaterielHeader";
import MaterielPC from "../courses/intro/MaterielPC";
import MaterielOutils from "../courses/intro/MaterielOutils";
import End from "../courses/End";

export default ({
  name: 'IntroView',
  components: {
    IntroHeader,
    PresentationTitle,
    ProgrammeTitle,
    Programme,
    ProgrammeSoutien,
    ProgrammeAtelier,
    CadreHoraires,
    CadrePauses,
    CadreDejeuner,
    CadreAbsence,
    ValeursTitle,
    ValeursCooperation,
    ValeursMixite,
    ValeursBienveillance,
    ValeursResponsabilite,
    MaterielHeader,
    MaterielPC,
    MaterielOutils,
    End,
  },
  template: `
    <div class="intro-view">
      <IntroHeader />
      <PresentationTitle />
      <ProgrammeTitle />
      <Programme />
      <ProgrammeSoutien />
      <ProgrammeAtelier />
      <CadreHoraires />
      <CadrePauses />
      <CadreDejeuner />
      <CadreAbsence />
      <ValeursTitle />
      <ValeursCooperation />
      <ValeursMixite />
      <ValeursBienveillance />
      <ValeursResponsabilite />
      <MaterielHeader />
      <MaterielPC />
      <MaterielOutils />
      <End />
    </div>
  `,
});
