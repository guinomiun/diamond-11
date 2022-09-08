class Player{
    constructor(x,y){
         this.x = x;
         this.y = y;
         this.player  = createSprite(x,y,25,25);
         this.player.shapeColor = "deeppink";
         playerGroup.add(this.player);
         this.player.scale = 2.5;

         this.velocitys = [2, 3, -2, -3];
         this.selector = Math.round(random(this.velocitys));

         this.player.velocityX = this.selector;
         

     
        

      
          
         
    }

    animationCorrection(){
         if(this.player.velocityX > 0){
              this.player.changeAnimation("right")
         }

         else{
              this.player.changeAnimation("left")
         }
    }

  
    moveUp(){
         this.player.velocityY = -3
         console.log(this.player.velocityY)

    }

   
}
const array = (
 "velocity"
 )
for(var i = 0;i<player.length; i++ ){
 player.velocityY = 5;
 player.velocityX = 5;
}
