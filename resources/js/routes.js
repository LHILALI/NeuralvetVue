import App from './dashboard/App.vue'
import Login from './auth/Login.vue'
import AcceuilPage from './dashboard/pages/AcceuilPage.vue';
import DonneesPage from './dashboard/pages/DonneesPage.vue';
import EpidemiologiePage from './dashboard/pages/EpidemiologiePage.vue';
import AnalysePage from './dashboard/pages/AnalysePage.vue';
import ParametresPage from './dashboard/pages/ParametresPage.vue';
import vuegenerale from './dashboard/subpages/acceuil/vuegenerale.vue';
import moncompte from './dashboard/subpages/acceuil/moncompte.vue';
import messagerie from './dashboard/subpages/acceuil/messagerie.vue';
import boiteenvoi from './dashboard/subpages/acceuil/components/EnvoieComponent';
import boitereception from './dashboard/subpages/acceuil/components/RecuComponent';
import MessageComponent from './dashboard/subpages/acceuil/components/MessageComponent';
import ComposeComponent from './dashboard/subpages/acceuil/components/ComposeComponent';
import NotFoundComponent from './NotFound';
import cartographie from './dashboard/subpages/donnees/Cartographie';
import elevage from './dashboard/subpages/donnees/Elevage';
import environnement from './dashboard/subpages/donnees/Environnement';

export default {
    mode:'history',
    base: '/app/',
    fallback: true,
    routes: [
        {
            path: '/',
            redirect:'acceuil/vuegenerale',
            component: App,
            name: 'Dashboard',
            meta: {requiresAuth: true},
            children:[
                {
                    path: '/acceuil',
                    name: 'AcceuilPage',
                    redirect:'acceuil/vuegenerale',
                    component: AcceuilPage,
                    meta: {requiresAuth: true},
                    children: [
                      {
                        name:'moncompte',
                        path: 'moncompte',
                        component: moncompte,
                        meta: {requiresAuth: true},
                      },
                      {
                        name:'vuegenerale',
                        path: 'vuegenerale',
                        component: vuegenerale,
                        meta: {requiresAuth: true},
                        
                      },
                      {
                        name:'messagerie',
                        path: 'messagerie',
                        redirect:'messagerie/boitereception',
                        component: messagerie,
                        meta: {requiresAuth: true},
                        children: [
                          {
                            name:'boitereception',
                            path: 'boitereception',
                            component: boitereception,
                            meta: {requiresAuth: true},
                          },
                          {
                            name:'boiteenvoi',
                            path: 'boiteenvoi',
                            component: boiteenvoi,
                            meta: {requiresAuth: true},
                          },
                          {
                            name:'message',
                            path: 'message/:id',
                            component: MessageComponent,
                            meta: {requiresAuth: true},
                          },
                          {
                            name:'composemessage',
                            path: 'composemessage',
                            component: ComposeComponent,
                            meta: {requiresAuth: true},
                          },
                        ]
                      }
                    ],
                  },
                  {
                    path: '/donnees',
                    name: 'DonneesPage',
                    component: DonneesPage,
                    meta: {requiresAuth: true},
                    children: [
                      {
                        name:'cartographie',
                        path: 'cartographie',
                        component: cartographie,
                        meta: {requiresAuth: true},
                      },
                      {
                        name:'environnement',
                        path: 'environnement',
                        component: environnement,
                        meta: {requiresAuth: true},
                      },
                      {
                        name:'elevage',
                        path: 'elevage',
                        component: elevage,
                        meta: {requiresAuth: true},
                      },
                    ]
                  },
                  {
                    path: '/epid',
                    name: 'EpidemiologiePage',
                    component: EpidemiologiePage,
                    meta: {requiresAuth: true},
                  },
                  {
                    path: '/analyse',
                    name: 'AnalysePage',
                    component: AnalysePage,
                    meta: {requiresAuth: true},
                  },
                  {
                    path: '/param',
                    name: 'ParametresPage',
                    component: ParametresPage,
                    meta: {requiresAuth: true},
                  },
                  
                  
            ]
        },
        {
            path: '/login',
            component: Login,
            name: 'login',
            meta: {guest: true}
        },
        { path: '/404', component: NotFoundComponent, },  
        { path: '*', redirect: '/404' },  

    ]
}