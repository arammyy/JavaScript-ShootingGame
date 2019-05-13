class Ship extends GameObject {
    constructor(type, container, x, y, width, height, velX, velY, targetX, targetY, bg, src) {
        super(type, container, x, y, width, height, velX, velY, targetX, targetY, bg, src);

    }

    tick() {
        this.x = this.x + this.velX;
        this.y = this.y + this.velY;
        //this.x값을 증가시켜나가다가 적군과 충돌했으면 제거
        //총알인 나와 적군은 일대다 관계이다 따라서 반복문

        for (var i = 0; i < objectManager.objectArray.length; i++) {
            var obj = objectManager.objectArray[i];
            if (obj.type == "ENEMY") {
                if (collisionCheck(this, obj)) {
                    //objectManager.removeObject(this);
                    objectManager.removeObject(obj);

                    hpArray[count].removeHP("./hp2.png");
                    count--;

                    if (count < 0) {
                        objectManager.removeObject(this);
                        gameOver();
                    }

                }


            }
            if (obj.type == "EBULLET") {
                if (collisionCheck(obj, this)) {
                    //objectManager.removeObject(this);
                    objectManager.removeObject(obj);

                    hpArray[count].removeHP("./hp2.png");
                    count--;

                    if (count < 0) {
                        objectManager.removeObject(this);
                        gameOver();
                    }

                }
            }
            if (obj.type == "BOSS") {
                if (collisionCheck(obj, this)) {
                    //objectManager.removeObject(this);
                    objectManager.removeObject(obj);

                    hpArray[count].removeHP("./hp2.png");
                    count--;

                    if (count < 0) {
                        objectManager.removeObject(this);
                        gameOver();
                    }

                }
            }

            if (obj.type == "BOOST") {
                if (collisionCheck(this, obj)) {
                    //objectManager.removeObject(this);
                    objectManager.removeObject(obj);
                    //score += 100;
                    //setScore();
                    b -=100;
                    createBullet();

                }

            }


        }
    }
}


