import ListerLivre from "@/components/Livre/ListerLivre.vue";
import AjouterLivre from "@/components/Livre/AjouterLivre.vue";
import ModifierLivre from "@/components/Livre/ModifierLivre.vue";
import AjouterMembre from "@/components/Membres/AjouterMembre.vue";
import ModifierMembre from "@/components/Membres/ModifierMembre.vue";
import ListeMembre from "@/components/Membres/ListeMembre.vue";
import ListePret from "@/components/Prets/ListePret.vue";
import AjouterPret from "@/components/Prets/AjouterPret.vue";
import ModifierPret from "@/components/Prets/ModifierPret.vue";

export const routes = [
    {
        path: '/Livre',
        component: ListerLivre
        
       
    },
    {
        path: '/AjouterLivre',
        component: AjouterLivre
      },
      {
        path: '/ModifierLivre/:index',
        component: ModifierLivre
      },
    {
        path: '/Membres',
        component: ListeMembre
    },
    {
        path: '/AjouterMembre',
        component: AjouterMembre
      },
      {
        path: '/ModifierMembre/:index',
        component: ModifierMembre
      },
    {
        path: '/Prets',
        component: ListePret
    },
    {
        path: '/AjouterPret',
        component: AjouterPret
      },
      {
        path: '/ModifierPret/:index',
        component: ModifierPret,
      }

];

