const app = Vue.createApp({
    data(){
        return{
            url :"https://www.youtube.com/watch?v=1o4EICOs3B4",
            books : [
                {title:"name of wind", author:"brandon" , img:'img/1.jpg' , isFav : true},
                {title:"name of wind", author:"brandon" , img:'img/1.jpg' , isFav : true}, 
                {title:"name of wind", author:"brandon" , img:'img/1.jpg' , isFav : false},
                {title:"name of wind", author:"brandon" , img:'img/1.jpg' , isFav : true},
            ]
        }
    },
    methods : {
        toggleFav(book){
            book.isFav = !book.isFav
        }
    },
    computed:{
        filteredBooks (){
            return this.books.filter((book) => book.isFav)
        }
    }
    
})
app.mount('#app')