new Vue({
    el:"#app",
    data:{
        books:[],
        title:"",
        body:"",
        edit:[],
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
                "author_id":this.author_id,
                "body":this.body,
                "title":this.title,
            }
            axios.post(url,data).then(response => {
                this.books = response.data.data;
                console.log("Created Book")
            })
            this.author_id = 0;
            this.body = "";
            this.tite = "";
        },
        edit(id){
            let newBook = {
                "body":this.body,
                "title":this.title
            }
            axios.put(url+"/"+id,newBook)
            .then((res) => {
                this.edit = (res.data)
                this.body = "";
                this.tite = "";
            })
        },

        deleteUser(id)
        {
            axios.delete(url+"/"+id).then(()=>{
               this.getTodo();
               console.log("delete"+id);
            })
        }
    },
    mounted() {
        this.getTodo();
    },
})