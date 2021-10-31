const baseUrl = "https://gamestop20211031161551.azurewebsites.net/games/"

const app = Vue.createApp({
    data() {
        return {
            games: [],
            selectedGames: [],
            currentGameId: "null",
            currentGameTitle: "",
            currentGameObject: {id: 0, title: "", description: "", releaseYear: 0},
            message: "",
            
        }
    },
    async created(){
        this.GetAll();
    },
    methods: {
        async GetAll() { 
           this.Get();
        },
        async GetById(){
            this.message = "yo";
            this.Get();
        },
        async GetAllByTitle(){
            try {
                const response = await axios.get(baseUrl + "AllTitles/" + this.currentGameTitle)
                this.selectedGames = await response.data
            } catch (ex) {
                alert(ex.message) 
            }
        },

        async Get(){
            if(this.currentGameId == "null"){
                try {
                    const response = await axios.get(baseUrl)
                    this.games = await response.data
                } catch (ex) {
                    alert(ex.message) 
                }
            }
            else{
                try {
                    const response = await axios.get(baseUrl + this.currentGameId)
                    this.currentGameObject = await response.data
                } catch (ex) {
                    alert(ex.message) 
                }
            }
        }
    }
})
