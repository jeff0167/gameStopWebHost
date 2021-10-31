const baseUrl = "https://gamestop20211031161551.azurewebsites.net/games/"

const app = Vue.createApp({
    data() {
        return {
            games: [],
            currentGameId: -1,
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
            this.Get(currentGameId);
        },
        async Get(){
            if(this.currentGameId == -1){
                try {
                    const response = await axios.get(baseUrl)
                    this.games = await response.data
                } catch (ex) {
                    alert(ex.message) 
                }
            }
            else{
                try {
                    const response = await axios.get(baseUrl + this.currentId)
                    this.currentGameObject = await response.data
                } catch (ex) {
                    alert(ex.message) 
                }
            }
            currentGameId = -1; // I don't even know what I'm doing to this, but only works when this line is here!
        }
    }
})