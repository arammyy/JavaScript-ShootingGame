class Bullet extends GameObject {
    constructor(type, container, x, y, width, height, velX, velY, targetX, targetY, bg, src) {
        super(type, container, x, y, width, height, velX, velY, targetX, targetY, bg, src);
    }
    //오버라이드!!
    //화면 밖으로 나가는 상황에 대한 판단은 부모 클래스의 tick()에 없다
    //따라서 현재 내 현실에 적용할 수 없으므로
    //부모의 메서드를 나한테 맞게 커스터마이징 해야한다 = 오버라이딩

    tick() {
        this.x = this.x + this.velX;
        this.y = this.y + this.velY;
        //this.x값을 증가시켜나가다가 적군과 충돌했으면 제거
        //총알인 나와 적군은 일대다 관계이다 따라서 반복문

        for (var i = 0; i < objectManager.objectArray.length; i++) {
            var obj = objectManager.objectArray[i];
            if (obj.type == "ENEMY") {
                if (collisionCheck(this, obj)) {
                    objectManager.removeObject(this);
                    objectManager.removeObject(obj);
                    EnemyArr--;

                    score += 10;
                    setScore();
                }
            }

            if (obj.type == "BOSS") {
                if (collisionCheck(this, obj)) {
                    objectManager.removeObject(obj);
                    objectManager.removeObject(this);
                    EnemyArr--;

                    score += 50;
                    setScore();
                }
            }
        }


        //적군을 무사히 피한경우 화면밖으로 나가면 제거
        if (this.x + this.width > screen.width) {
            objectManager.removeObject(this);

        }

        

    }



    /*
        addBullets(src){
            this.img.src = src;
        }
    */

}