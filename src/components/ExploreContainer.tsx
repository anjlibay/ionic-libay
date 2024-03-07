
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle> Hello World</IonCardTitle>
        <IonCardSubtitle>This is Angela N. Libay</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>It's more fun in the Philippines</IonCardContent>
    </IonCard>
  );
};

export default ExploreContainer;
