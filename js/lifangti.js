/**
 * Created by ming on 2016/7/20.
 */

window.onload = function() {
    var bigBox = document.getElementById("csm-bigbox");
    var divs = bigBox.getElementsByTagName("div");
    bigBox.style.transform = "rotatey(0deg) rotateyx(0deg) rotatez(0deg)"
    var z = false;
    for(var i = 0;i<divs.length;i++) {
        divs[i].index = i ;
        divs[i].onmousedown = function() {

            console.log("whitch"+this.index);
            var wNum = 1,hNum = 1;


            var e = arguments[0]||window.event;
            var x1 = e.clientX;
            var y1 = e.clientY;
            var bf = bigBox.style.transform;
            console.log(bf);
            var arr = bf.match(/-?\d+/g);
            if(arr) {
                var wy = parseInt(arr[0]);
                var hx = parseInt(arr[1]);
                var hz = parseInt(arr[2]);
            }
            wy = wy||0;
            hx = hx||0;
            hz = hz ||0;


            switch (this.index) {
                // case 0: wNum =1;hNum =-1;z = false;break;//前面
                // case 1: wNum =1;if(Math.abs(hx)<90){hNum =-1}else{hNum =1};z = false;break;//后面---------
                // case 2: wNum =1;hNum =-1;z = true;break;//左面
                // case 3: wNum =1;if(Math.abs(hz)>90){hNum =-1}else{hNum =1};z = true;break;//右边----------
                // case 4: wNum =1;hNum =-1;z = false;break;//上面
                // case 5: wNum =1;hNum =-1;z = false;break;//下面


                case 0: wNum =1;hNum =-1;z = false;break;//前面
                case 1: wNum =1;hNum =1;z = false;break;//后面
                case 2: wNum =1;hNum =-1;z = true;break;//左面
                case 3: wNum =1;hNum =1;z = true;break;//右边
                case 4: wNum =1;hNum =-1;z = false;break;//上面
                case 5: wNum =1;hNum =-1;z = false;break;//下面
                default:break;
            }







            document.onmousemove = function() {
                var ev = arguments[0]||window.event;
                var x2 = ev.clientX;
                var y2= ev.clientY;
                var w = x2-x1;
                var h = y2-y1;
                console.log(wy+"__"+w);
                console.log(hx+"__"+h);
                if(z) {
                    witch1();
                }else{
                    witch()
                }

                return false;

                function witch1() {
                    console.log("z");
                    bigBox.style.transform = "rotatey("+parseInt((w*wNum)*0.4+wy)+"deg)" +" rotatex("+parseInt(hx)+"deg)"+" rotatez("+parseInt((h*hNum)*0.4+hz)+"deg)";
                }
                function witch() {
                    console.log("x");
                    bigBox.style.transform = "rotatey("+parseInt((w*wNum)*0.4+wy)+"deg)" +" rotatex("+parseInt((h*hNum)*0.4+hx)+"deg)"+" rotatez("+parseInt(hz)+"deg)";
                }

            };



        };
        document.onmouseup = function() {
            var bf = bigBox.style.transform;
            console.log(bf);
            var arr = bf.match(/-?\d+/g);

            var wy = parseInt(arr[0]);
            var hx = parseInt(arr[1]);
            var hz = parseInt(arr[2]);
            console.log(wy);
            console.log(hx)
            console.log(hz)

            document.onmousemove = null;
        };
    }
};
