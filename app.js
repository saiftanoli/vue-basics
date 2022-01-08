const app = Vue.createApp({
    data(){
        return{
            showBooks: true,
            title: 'james bond',
            author : 'james',
            age: 20,
            year: 2000,
            x : 0,
            y : 0,
            books : [
                {title:"name of wind", author:"brandon"},
                {title:"name of wind", author:"brandon"},
                {title:"name of wind", author:"brandon"},
                {title:"name of wind", author:"brandon"}
            ]
        }
    },
    methods : {
        changeAuthor(){
            this.author="someone else"
        },
        changeYear(year){
            this.year = year
        },
        toogleShowBooks(){
            this.showBooks=!this.showBooks
        },
        handleOver(e, data){
            console.log(e, e.type)        
            if (data){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetx
            this.y = e.offsety
        }
    }
})
app.mount('#app')