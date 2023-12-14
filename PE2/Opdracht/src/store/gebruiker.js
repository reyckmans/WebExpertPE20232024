import {defineStore} from 'pinia'


const gebruikers=[
    {
        gebruikersnaam: "robbe",
        wachtwoord: "robbe",
        winkelmand:[]
    },
    {
        gebruikersnaam: "senne",
        wachtwoord: "senne",
        winkelmand:[]
    }
]


export const useGebruikerStore = defineStore('gebruiker', {
    state: () => {
        return {aangemeldeGebruiker:null , items: []}
    },
    actions: {
        extraLetter() {
            this.name = this.name + "x";
        },
        voegSchoenToe(schoen) {
            this.items.push(schoen);
        },
        inlog(gebruikersnaam, wachtwoord){
            const gevondenGebruiker = gebruikers.find((gebruiker) => gebruiker.gebruikersnaam === gebruikersnaam );
            if (gevondenGebruiker !== undefined && gevondenGebruiker.wachtwoord === wachtwoord){
                this.aangemeldeGebruiker = gevondenGebruiker
                return true
            }
            else {
                return false
            }
        },
        logout(){
            this.aangemeldeGebruiker = null
        }
    },
})
