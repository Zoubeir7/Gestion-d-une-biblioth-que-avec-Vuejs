import ListerLivre from "@/components/Livre/ListerLivre.vue";
import AjouterLivre from "@/components/Livre/AjouterLivre.vue";
import ModifierLivre from "@/components/Livre/ModifierLivre.vue";
import ListeMembre from "@/components/Membres/ListeMembre.vue";
import ListePret from "@/components/Prets/ListePret.vue";

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
        path: '/Prets',
        component: ListePret
    }

];






