new Vue({
    el:"#app",
    data:{
        books:[],
        
        title:"",
        body:"",
        author_id:0,
    },
    methods: {
        getTodo() {
            let url = "http://localhost:8000/api/book";
            axios.get(url).then(response => {
                console.log("response", response)
                this.books = response.data
            })
        },
        create() {
            let url = "http://localhost:8000/api/book"
            let data={
               author_id:this.author_id,
               body:this.body,
                title:this.title,

            }
            axios.post(url,data).then(response => {
                this.books = response.data.data;
                console.log("Created Book")
            })
        },
        deleteUser(id)
        {
            this.axios.delete("http://localhost:8000/api/book" +id).then(()=>{
               this.getTodo();
               console.log("delete"+id);
            })
        }
    },
    mounted() {
        this.getTodo();
    },
    

})