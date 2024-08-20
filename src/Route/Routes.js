import ListerLivre from "@/components/Livre/ListerLivre.vue";
import ListeMembre from "@/components/Membres/ListeMembre.vue";
import ListePret from "@/components/Prets/ListePret.vue";

export const routes = [
    {
        path: '/Livre',
        component: ListerLivre
        
       
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




