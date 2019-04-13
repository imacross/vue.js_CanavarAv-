new Vue({
    el:'#app',
    data:{
        name:'cagdas',
        can_p:100,
        can_m:100,
        isGameStart:false,
        logs: [],
    },
    methods: {
        game_start: function() {
            this.isGameStart = true;
        },
        attack: function(){
            var point = Math.ceil(Math.random()*10);
            this.can_m -= point;
            this.add_to_log({turn : 'p', text: 'Oyuncu Atağı('+point+')'})
            this.monster_attack()
        },
        monster_attack: function(){
            var point =  Math.ceil(Math.random()*15)
            this.can_p -= point
            this.add_to_log({turn : 'm', text: 'Monster Atağı('+point+')'})
        },
        speacial_attack: function(){
            var point = Math.ceil(Math.random()*20);
            this.can_m -= point;
            this.add_to_log({turn : 'p', text: 'Özel Oyuncu Atağı('+point+')'})
            
            this.monster_attack();
        },
        health: function(){
            var point = Math.ceil(Math.random()*20);
            this.can_p += point
            this.add_to_log({turn : 'p', text: 'İyileştirme('+point+')'})
            this.monster_attack()
        },
        give_up: function(){
            this.can_p = 0;
        },
        add_to_log: function(log){
            this.logs.push(log);
        }
        

    },
    watch: {
        can_p: function(){
            if(this.can_p<=0){
                this.can_p = 0;
                if(confirm("Oyunu Kaybettin! Devam edecek misin?")){
                    this.can_p = 100;
                    this.can_m = 100;
                    this.logs = [];
                }
            }
            else if(this.can_p>=100){
                this.can_p = 100;
            }
        },
        can_m: function(){
            if(this.can_m <= 0){
                this.can_m = 0;
                if(confirm("Oyunu Kaybettin! Devam edecek misin?")){
                    this.can_p = 100;
                    this.can_m = 100;
                    this.logs = [];
                }
            }

        }
    },
})