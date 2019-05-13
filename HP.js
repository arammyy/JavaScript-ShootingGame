class HP{
    constructor(container, x, y, width, height, src) {
        this.container = container;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.src = src;

        this.img=document.createElement("img");
		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";
		this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        this.img.src=this.src;
        
        this.container.appendChild(this.img);
    }


    removeHP(src){
        this.img.src=src;
    }
}