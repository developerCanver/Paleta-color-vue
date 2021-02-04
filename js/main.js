const  app = Vue.createApp({
    data: () => ({
           title: "Gradient Gen",
           fcolor: "#d5ee11",
           scolor: "#f59e24",
           orientation: 1,
        
    }),//propedades computadas
    computed: {
        setColor(){
            if (this.orientation == 1) {
            return`background: Linear-gradient(to right, ${this.fcolor}, ${this.scolor}); `;
            }else if (this.orientation == 2) {
                return`background: Linear-gradient(to left, ${this.fcolor}, ${this.scolor}); `;
            }else if (this.orientation == 3) {
            return`background: Linear-gradient(to top, ${this.fcolor}, ${this.scolor}); `;
            }else if (this.orientation == 4) {
            return`background: Linear-gradient(to bottom, ${this.fcolor}, ${this.scolor}); `;
        }else{
            return`background: Linear-gradient(to right, ${this.fcolor}, ${this.scolor},${this.fcolor}, ${this.scolor}); `;
    }
        }
    }

});
