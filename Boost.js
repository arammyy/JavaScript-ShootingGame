class Boost extends GameObject{
    constructor(type,container,x,y,width,height,velX,velY,targetX, targetY,bg,src){
        super(type,container,x,y,width,height,velX,velY,targetX, targetY,bg,src);
        this.flagX = true;
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



		//적군을 무사히 피한경우 화면밖으로 나가면 제거
		if (this.y >900 || this.y < 0) {
			objectManager.removeObject(this);

		}


        //적군을 무사히 피한경우 화면밖으로 나가면 제거
        if (this.x + this.width > screen.width) {
            objectManager.removeObject(this);

        }

    }

}