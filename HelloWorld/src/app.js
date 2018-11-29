var Sprite;
var ButtonDown;
var ButtonUp;
var ButtonLeft;
var ButtonRight;


var HelloWorldLayer = cc.Layer.extend({
    ctor:function () {
        this._super();

        var size = cc.winSize;


        var Sprite = new cc.Sprite("res/Sprite.png");
        Sprite.setPosition(size.width/2,size.height/2);
        Sprite.setScale(2.5);
        this.addChild(Sprite,1);

        /*var sprite1 = cc.Sprite.create("res/Square.png");
        sprite1.x = size.width/1.2;
        sprite1.y = size.height/7.8;
        this.addChild(sprite1, 10);
        */
        /*
        var startPoint = sprite1.getPosition();
        cc.log(sprite1.x , sprite1.y);
        */

        ButtonDown = new cc.Sprite("res/ButtonDown.png");
        ButtonDown.setPosition(size.width/1.2,size.height/7.8);
        ButtonDown.setScale(0.5);
        this.addChild(ButtonDown,2);

        ButtonLeft = new cc.Sprite("res/ButtonLeft.png");
        ButtonLeft.setPosition(size.width/1.3,size.height/4.5);
        ButtonLeft.setScale(0.5);
        this.addChild(ButtonLeft,2);

        ButtonRight = new cc.Sprite("res/ButtonRight.png");
        ButtonRight.setPosition(size.width/1.114,size.height/4.5);
        ButtonRight.setScale(0.5);

        this.addChild(ButtonRight,2);

        ButtonUp = new cc.Sprite("res/ButtonUp.png");
        ButtonUp.setPosition(size.width/1.2,size.height/3.2);
        ButtonUp.setScale(0.5);
        this.addChild(ButtonUp,2);

        var point = Sprite.getPosition();

        /*var Listener1 = cc.EventListener.create({
            event:cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches:true,
            onTouchBegan:function(touch,event){
                var target = event.getCurrentTarget();
                var locationInNode = target.convertToNodeSpace(touch.getLocation());
                var s = target.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);
                if(cc.rectContainsPoint(rect, locationInNode)){
                    Sprite.repeatForever(Sprite.setPosition(point.x, point.y + 5));
                }
            },
        });
        cc.eventManager.addListener(Listener1,ButtonUp);
        */

        /* var sprite1 = cc.Sprite.create("res/Square.png");
         sprite1.x = size.width/2 - 80;
         sprite1.y = size.height/2 + 80;
         this.addChild(sprite1, 10);

         var sprite2 = cc.Sprite.create("res/SquareR.png");
         sprite2.x = size.width/2;
         sprite2.y = size.height/2;
         this.addChild(sprite2, 20);

         var sprite3 = cc.Sprite.create("res/SquareY.png");
         sprite3.x = 0;
         sprite3.y = 0;
         sprite2.addChild(sprite3, 1);
 */
        //Create a "one by one" touch event listener (processes one touch at a time)
        var listener1 = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            // When "swallow touches" is true, then returning 'true' from the onTouchBegan method will "swallow" the touch event, preventing other listeners from using it.
            swallowTouches: true,
            //onTouchBegan event callback function
            onTouchBegan: function (touch, event) {
                // event.getCurrentTarget() returns the listener's sceneGraphPriority node.
                var target = event.getCurrentTarget();

                //Get the position of the current point relative to the button
                var locationInNode = target.convertToNodeSpace(touch.getLocation());
                var s = target.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);


                //Check the click area
                if (cc.rectContainsPoint(rect, locationInNode)) {
                    var point = Sprite.getPosition();
                    Sprite.repeatForever(Sprite.setPosition(point.x + 5,point.y));
                    cc.log("sprite began... x = " + locationInNode.x + ", y = " + locationInNode.y);
                    target.opacity = 180;
                    return true;
                }
                return false;
            },
            //Trigger when moving touch
            onTouchMoved: function (touch, event) {
                //Move the position of current button sprite
                /*var target = event.getCurrentTarget();
                var delta = touch.getDelta();
                var startPoint = sprite1.getPosition();
                target.x += delta.x;
                target.y += delta.y;
                var point = Sprite.getPosition();
                if(delta.x<30){
                    Sprite.repeatForever(Sprite.setPosition(point.x - 5, point.y));

                }
                if(delta.y>30){
                    Sprite.repeatForever(Sprite.setPosition(point.x, point.y+5));
                    listener1.setEnabled(false);
                }
                if(delta.x>30){
                    Sprite.repeatForever(Sprite.setPosition(point.x + 5,point.y));
                    listener1.setEnabled(false);
                }
                if(delta.y<30){
                    Sprite.repeatForever(Sprite.setPosition(point.x,point.y-5));
                    listener1.setEnabled(false);
                }
                */
            },
            //Process the touch end event
            onTouchEnded: function (touch, event) {
                /*sprite1.setPosition(startPoint);
                listener1.setEnabled(true);
                var target = event.getCurrentTarget();
                target.setOpacity(255);*/

            }
        });
        var listener2 = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            // When "swallow touches" is true, then returning 'true' from the onTouchBegan method will "swallow" the touch event, preventing other listeners from using it.
            swallowTouches: true,
            //onTouchBegan event callback function
            onTouchBegan: function (touch, event) {
                // event.getCurrentTarget() returns the listener's sceneGraphPriority node.
                var target = event.getCurrentTarget();

                //Get the position of the current point relative to the button
                var locationInNode = target.convertToNodeSpace(touch.getLocation());
                var s = target.getContentSize();
                var rect = cc.rect(0, 0, s.width, s.height);


                //Check the click area
                if (cc.rectContainsPoint(rect, locationInNode)) {
                    var point = Sprite.getPosition();
                    Sprite.repeatForever(Sprite.setPosition(point.x - 5,point.y));
                    cc.log("sprite began... x = " + locationInNode.x + ", y = " + locationInNode.y);
                    target.opacity = 180;
                    return true;
                }
                return false;
            },
            //Trigger when moving touch
            onTouchMoved: function (touch, event) {
                //Move the position of current button sprite
                /*var target = event.getCurrentTarget();
                var delta = touch.getDelta();
                var startPoint = sprite1.getPosition();
                target.x += delta.x;
                target.y += delta.y;
                var point = Sprite.getPosition();
                if(delta.x<30){
                    Sprite.repeatForever(Sprite.setPosition(point.x - 5, point.y));

                }
                if(delta.y>30){
                    Sprite.repeatForever(Sprite.setPosition(point.x, point.y+5));
                    listener1.setEnabled(false);
                }
                if(delta.x>30){
                    Sprite.repeatForever(Sprite.setPosition(point.x + 5,point.y));
                    listener1.setEnabled(false);
                }
                if(delta.y<30){
                    Sprite.repeatForever(Sprite.setPosition(point.x,point.y-5));
                    listener1.setEnabled(false);
                }
                */
            },
            //Process the touch end event
            onTouchEnded: function (touch, event) {
                /*sprite1.setPosition(startPoint);
                listener1.setEnabled(true);
                var target = event.getCurrentTarget();
                target.setOpacity(255);*/

            }
        });
        cc.eventManager.addListener(listener1, ButtonRight);
        cc.eventManager.addListener(listener2,ButtonLeft);

        return true;
    },

});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});