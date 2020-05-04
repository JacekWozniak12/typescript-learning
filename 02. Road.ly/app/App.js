var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
System.register("GameObjects", [], function (exports_1, context_1) {
    "use strict";
    var Point, DrawablePoint, Circle, PlayerControlledBall, Item, CollisionTree, CollisionBox, Rectangle;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Point = /** @class */ (function () {
                function Point(x, y) {
                    this.x = x;
                    this.y = y;
                }
                Point.prototype.CalculateDistance = function (to) {
                    return Math.pow(to.x - this.x, 2) + Math.pow(to.y - this.y, 2);
                };
                return Point;
            }());
            exports_1("Point", Point);
            DrawablePoint = /** @class */ (function (_super) {
                __extends(DrawablePoint, _super);
                function DrawablePoint(x, y, ctx) {
                    var _this = _super.call(this, x, y) || this;
                    _this.canvasCTX = ctx;
                    return _this;
                }
                DrawablePoint.prototype.Draw = function () {
                };
                return DrawablePoint;
            }(Point));
            exports_1("DrawablePoint", DrawablePoint);
            Circle = /** @class */ (function (_super) {
                __extends(Circle, _super);
                function Circle() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return Circle;
            }(DrawablePoint));
            exports_1("Circle", Circle);
            PlayerControlledBall = /** @class */ (function (_super) {
                __extends(PlayerControlledBall, _super);
                function PlayerControlledBall() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return PlayerControlledBall;
            }(Circle));
            exports_1("PlayerControlledBall", PlayerControlledBall);
            Item = /** @class */ (function (_super) {
                __extends(Item, _super);
                function Item() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return Item;
            }(Circle));
            exports_1("Item", Item);
            CollisionTree = /** @class */ (function () {
                function CollisionTree() {
                }
                return CollisionTree;
            }());
            exports_1("CollisionTree", CollisionTree);
            CollisionBox = /** @class */ (function () {
                function CollisionBox() {
                }
                return CollisionBox;
            }());
            exports_1("CollisionBox", CollisionBox);
            Rectangle = /** @class */ (function () {
                function Rectangle(X, Y) {
                    this.X = X;
                    this.Y = Y;
                    this.U = new Point(Y.x, X.y);
                    this.V = new Point(X.x, Y.y);
                }
                return Rectangle;
            }());
            exports_1("Rectangle", Rectangle);
        }
    };
});
System.register("Controller", ["GameObjects"], function (exports_2, context_2) {
    "use strict";
    var GameObjects_1, Controller;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (GameObjects_1_1) {
                GameObjects_1 = GameObjects_1_1;
            }
        ],
        execute: function () {
            Controller = /** @class */ (function () {
                function Controller() {
                    this.playerControlledBall = new GameObjects_1.PlayerControlledBall(0, 0, null);
                    window.addEventListener('deviceorientation', this.onDeviceOrientationChange, true);
                }
                Controller.prototype.setCanvasCTX = function (canvasCTX) {
                    this.playerControlledBall.canvasCTX = canvasCTX;
                };
                Controller.prototype.onDeviceOrientationChange = function (e) {
                    this.ConsoleLogData(e);
                    this.playerControlledBall.destination = new GameObjects_1.Point(e.alpha, e.beta);
                };
                Controller.prototype.ConsoleLogData = function (e) {
                    console.log(e.alpha, e.beta, e.gamma);
                };
                Controller.prototype.Update = function () {
                };
                return Controller;
            }());
            exports_2("Controller", Controller);
        }
    };
});
System.register("Timer", [], function (exports_3, context_3) {
    "use strict";
    var Timer;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            Timer = /** @class */ (function () {
                function Timer() {
                }
                Timer.prototype.AddTime = function (value) {
                    this.timeLeft += value;
                    return this.timeLeft;
                };
                return Timer;
            }());
            exports_3("Timer", Timer);
        }
    };
});
System.register("Renderer", [], function (exports_4, context_4) {
    "use strict";
    var Renderer;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
            Renderer = /** @class */ (function () {
                function Renderer(canvasName) {
                    this.screenSize = { x: 800, y: 600 };
                    this.getCanvas(canvasName);
                    this.setCanvasSize();
                }
                Renderer.prototype.getCanvas = function (canvasName) {
                    this.canvas = document.querySelector("#" + canvasName);
                    this.canvasCTX = this.canvas.getContext('2d');
                };
                Renderer.prototype.setCanvasSize = function () {
                    this.canvas.width = this.screenSize.x;
                    this.canvas.height = this.screenSize.y;
                };
                Renderer.prototype.Update = function () {
                    this.Refresh();
                };
                ;
                Renderer.prototype.Refresh = function () {
                    this.canvasCTX.
                        clearRect(0, 0, this.screenSize.x, this.screenSize.y);
                };
                return Renderer;
            }());
            exports_4("Renderer", Renderer);
        }
    };
});
System.register("Generator", [], function (exports_5, context_5) {
    "use strict";
    var Generator;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [],
        execute: function () {
            Generator = /** @class */ (function () {
                function Generator() {
                }
                Generator.prototype.Generate = function (amount) {
                    while (amount > 0) {
                        amount--;
                        alert(amount);
                    }
                };
                Generator.prototype.SpawnPlayer = function (position) {
                };
                return Generator;
            }());
            exports_5("Generator", Generator);
        }
    };
});
System.register("Game", ["Controller", "Timer", "Renderer", "Generator"], function (exports_6, context_6) {
    "use strict";
    var Controller_1, Timer_1, Renderer_1, Generator_1, Game;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (Controller_1_1) {
                Controller_1 = Controller_1_1;
            },
            function (Timer_1_1) {
                Timer_1 = Timer_1_1;
            },
            function (Renderer_1_1) {
                Renderer_1 = Renderer_1_1;
            },
            function (Generator_1_1) {
                Generator_1 = Generator_1_1;
            }
        ],
        execute: function () {
            Game = /** @class */ (function () {
                function Game() {
                    this.state = {
                        MENU: 0, RUNNING: 1, WON: 2, LOST: 3
                    };
                    this.renderer = new Renderer_1.Renderer("gameView");
                    this.timer = new Timer_1.Timer();
                    this.controller = new Controller_1.Controller();
                    this.controller.setCanvasCTX(this.renderer.canvasCTX);
                    this.generator = new Generator_1.Generator();
                }
                Game.prototype.Start = function () {
                    this.Update();
                };
                Game.prototype.Update = function () {
                    this.controller.Update();
                    this.renderer.Update();
                    window.requestAnimationFrame(this.Update);
                };
                return Game;
            }());
            exports_6("Game", Game);
        }
    };
});
System.register("App", ["Game"], function (exports_7, context_7) {
    "use strict";
    var Game_1;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [
            function (Game_1_1) {
                Game_1 = Game_1_1;
            }
        ],
        execute: function () {
            window.onload = function () {
                var game = new Game_1.Game();
            };
        }
    };
});
//# sourceMappingURL=App.js.map