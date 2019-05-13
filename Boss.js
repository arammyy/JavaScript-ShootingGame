class Boss extends GameObject {
    constructor(type, container, x, y, width, height, velX, velY, targetX, targetY, bg, src) {
        super(type, container, x, y, width, height, velX, velY, targetX, targetY, bg, src);
    }


    move() {
        if (this.flagX) {//flagX가 참인동안
            this.x += this.velX;
        }
        else {
            this.x -= this.velX;
        }
        if (this.x >= 630 || this.x <= 0) { this.flagX = !this.flagX; }
        this.div.style.left = this.x + "px";

    }

    tick() {
        if (this.flagX) {//flagX가 참인동안
            this.x += this.velX;
        }
        else {
            this.x -= this.velX;
        }
        this.y += this.velY;

        if (this.x >= 630 || this.x <= 0) { this.flagX = !this.flagX; }


for (var i = 0; i < objectManager.objectArray.length; i++) {
            var obj = objectManager.objectArray[i];
            
            if (obj.type == "BULLET") {
                if (collisionCheck(obj, this)) {
					
					objectManager.removeObject(obj);
					hitcount--;

					if(hitcount<0){
                    //objectManager.removeObject(obj);
					objectManager.removeObject(this);
					}


                }
            }
        }





        //적군을 무사히 피한경우 화면밖으로 나가면 제거
        if (this.y > 900 || this.y < 0) {
            objectManager.removeObject(this);

        }
    }
}