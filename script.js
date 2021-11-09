const root = new Vue({
    el: "#root",
    data: {
        listaMail: [],
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(risp => {
                console.log(risp);
                let mail = risp.data.response;

                if (!this.listaMail.includes(mail)) {
                    this.listaMail.push(mail)
                }
                else {
                    i--
                }
            })
            
        }
            console.log(this.listaMail);

    }
})