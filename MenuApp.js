var size = cc.winSize;

var MenuLayer = cc.Layer.extend({
    ctor:function () {
        
        this._super();
        
        
        var backgroundSprite = new cc.Sprite("res/MenuBackground.jpg");
        this.addChild(backgroundSprite);
        backgroundSprite.setScale(0.43);
        backgroundSprite.setPosition(size.width / 2, size.height / 2);
        
        var menuItem1 = new cc.MenuItemFont("Play", play);
        
        menuItem1.setPosition(0, 0);
        
        var logo = new cc.MenuItemImage("res/MenuLogo.png");
        logo.setAnchorPoint(0.5, 0.5);
        logo.setPosition(10, 55);
        logo.setScale(0.4);
        
        var menu = new cc.Menu(logo, menuItem1);
        menu.setPosition(size.width / 2, size.height / 2);
        this.addChild(menu);
        
    }
});

var play = function () {
    
    cc.director.pushScene(new GameScene());
    
}

var MenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MenuLayer();
        this.addChild(layer);
    }
});