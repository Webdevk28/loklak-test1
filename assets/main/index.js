System.register("chunks:///_virtual/AudioManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Sound.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, System, AudioSource, Slider, Component, Audio;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      System = module.System;
      AudioSource = module.AudioSource;
      Slider = module.Slider;
      Component = module.Component;
    }, function (module) {
      Audio = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3;

      cclegacy._RF.push({}, "0407auwtEtJnaIrmoQcPQX2", "AudioManager", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      System.Priority;
      var audio = exports('audio', (_dec = ccclass('audio'), _dec2 = property(Audio), _dec3 = property(Audio), _dec4 = property(AudioSource), _dec5 = property(AudioSource), _dec6 = property(Slider), _dec7 = property(Slider), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(audio, _Component);

        function audio() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "Music", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Sound", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "MusicSource", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "SoundSource", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "MusicSlider", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "SoundSlider", _descriptor6, _assertThisInitialized(_this));

          _this.StateOne = true;
          _this.StateTwo = true;
          return _this;
        }

        var _proto = audio.prototype;

        _proto.start = function start() {};

        _proto.onLoad = function onLoad() {
          audio.instance = this;
        };

        _proto.PlayMusic = function PlayMusic(Name) {
          var SD = this.Music.find(function (X) {
            return X.name == Name;
          });

          if (SD == null) {
            console.log("Music Not Found...!");
          } else {
            this.MusicSource.clip = SD.clip;
            this.MusicSource.play();
          }
        };

        _proto.StopMusic = function StopMusic(Name) {
          var SD = this.Music.find(function (X) {
            return X.name == Name;
          });

          if (SD == null) {
            console.log("Music Not Found...!");
          } else {
            this.MusicSource.clip = SD.clip;
            this.MusicSource.stop();
          }
        };

        _proto.PlaySound = function PlaySound(Name) {
          var SD = this.Sound.find(function (X) {
            return X.name == Name;
          });

          if (SD == null) {
            console.log("Sound Not Found...!");
          } else {
            this.SoundSource.clip = SD.clip;
            this.SoundSource.play();
          }
        };

        _proto.StopSound = function StopSound(Name) {
          var SD = this.Sound.find(function (X) {
            return X.name == Name;
          });

          if (SD == null) {
            console.log("Sound Not Found...!");
          } else {
            this.SoundSource.clip = SD.clip;
            this.SoundSource.stop();
          }
        };

        _proto.MusicSLiderVolume = function MusicSLiderVolume() {
          this.MusicSource.volume = this.MusicSlider.progress;

          if (this.MusicSource.volume == 0) {
            this.StateOne == false;
          } else {
            this.StateOne == true;
          }
        };

        _proto.SoundSLiderVulome = function SoundSLiderVulome() {
          this.SoundSource.volume = this.SoundSlider.progress;

          if (this.SoundSource.volume == 0) {
            this.StateTwo == false;
          } else {
            this.StateTwo == true;
          }
        };

        return audio;
      }(Component), _class3.instance = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Music", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Sound", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "MusicSource", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "SoundSource", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "MusicSlider", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "SoundSlider", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Canvas, UITransform, instantiate, Label, Color, RichText, Toggle, Button, director, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      Color = module.Color;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);

        function DebugViewRuntimeControl() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));

          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct TRT', 'Env TRT', 'TRT All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'TRT', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }

        var _proto = DebugViewRuntimeControl.prototype;

        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);

          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }

          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
              y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
              height = 20; // new nodes

          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles'; // title

          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;

            var _labelComponent = newLabel.getComponent(Label);

            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }

          y -= height; // single

          var currentRow = 0;

          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }

            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }

          x += width; // buttons

          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent; // misc

          y -= 40;

          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);

            _newNode.setPosition(x, y - height * _i2, 0.0);

            _newNode.setScale(0.5, 0.5, 0.5);

            _newNode.parent = miscNode;

            var _textComponent = _newNode.getComponentInChildren(RichText);

            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;

            var toggleComponent = _newNode.getComponent(Toggle);

            toggleComponent.isChecked = _i2 ? true : false;

            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);

            this.miscModeToggleList[_i2] = _newNode;
          } // composite


          y -= 150;

          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;

            _newNode2.setPosition(x, y - height * _i3, 0.0);

            _newNode2.setScale(0.5, 0.5, 0.5);

            _newNode2.parent = this.compositeModeToggle.parent;

            var _textComponent2 = _newNode2.getComponentInChildren(RichText);

            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;

            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);

            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };

        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');

          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };

        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };

        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);

          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };

        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };

        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };

        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);

          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);

            _toggleComponent.isChecked = true;
          }

          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };

        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };

        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;

          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }

          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }

          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };

        _proto.onLoad = function onLoad() {};

        _proto.update = function update(deltaTime) {};

        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Game.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, Sprite, Node, AnimationComponent, Label, game, Component, audio;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Node = module.Node;
      AnimationComponent = module.AnimationComponent;
      Label = module.Label;
      game = module.game;
      Component = module.Component;
    }, function (module) {
      audio = module.audio;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _class3;

      cclegacy._RF.push({}, "300c1/QtItIhLmii38b0AGs", "Game", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Game = exports('Game', (_dec = ccclass('Game'), _dec2 = property(SpriteFrame), _dec3 = property(Sprite), _dec4 = property(Sprite), _dec5 = property(Sprite), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(AnimationComponent), _dec12 = property(AnimationComponent), _dec13 = property(AnimationComponent), _dec14 = property(AnimationComponent), _dec15 = property(AnimationComponent), _dec16 = property(AnimationComponent), _dec17 = property(AnimationComponent), _dec18 = property(AnimationComponent), _dec19 = property(AnimationComponent), _dec20 = property(AnimationComponent), _dec21 = property(Label), _dec22 = property(Label), _dec23 = property(Label), _dec24 = property(Label), _dec25 = property(Label), _dec26 = property(Label), _dec27 = property(Label), _dec28 = property(Label), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Game, _Component);

        function Game() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "LukLakSpriteFrame", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "dice1", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "dice2", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "dice3", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "GameScreen", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "SoundScreen", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "HomeScreen", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "OpenButton", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "CloseButton", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "animationComponent", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "animation_dice_one", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "animation_dice_two", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "animation_dice_three", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "animation_dice_four", _descriptor14, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "animation_dice_five", _descriptor15, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "animation_dice_six", _descriptor16, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "animationMixOne", _descriptor17, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "animationMixTwo", _descriptor18, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "animationMixThree", _descriptor19, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "OneLable", _descriptor20, _assertThisInitialized(_this));

          _this.numOne = 0;

          _initializerDefineProperty(_this, "TwoLable", _descriptor21, _assertThisInitialized(_this));

          _this.numTwo = 0;

          _initializerDefineProperty(_this, "ThreeLable", _descriptor22, _assertThisInitialized(_this));

          _this.numThree = 0;

          _initializerDefineProperty(_this, "FourLable", _descriptor23, _assertThisInitialized(_this));

          _this.numFour = 0;

          _initializerDefineProperty(_this, "FiveLable", _descriptor24, _assertThisInitialized(_this));

          _this.numFive = 0;

          _initializerDefineProperty(_this, "SixLable", _descriptor25, _assertThisInitialized(_this));

          _this.numSix = 0;

          _initializerDefineProperty(_this, "TotalcointLable", _descriptor26, _assertThisInitialized(_this));

          _this.numTotalcoin = 10000;

          _initializerDefineProperty(_this, "CountLable", _descriptor27, _assertThisInitialized(_this));

          _this.numCount = 1000;
          return _this;
        }

        var _proto = Game.prototype;

        _proto.start = function start() {
          audio.instance.PlayMusic("BG-Sound");
          this.GameScreen.active = false;
          this.SoundScreen.active = false;
          this.HomeScreen.active = true;
          this.OpenButton.active = true;
          this.CloseButton.active = false; //Asign number to Label

          this.OneLable.string = this.numOne.toString() + " $";
          this.TwoLable.string = this.numTwo.toString() + " $";
          this.ThreeLable.string = this.numThree.toString() + " $";
          this.FourLable.string = this.numFour.toString() + " $";
          this.FiveLable.string = this.numFive.toString() + " $";
          this.SixLable.string = this.numSix.toString() + " $";
          this.CountLable.string = this.numCount.toString() + " $";
          this.TotalcointLable.string = this.numTotalcoin.toString() + " $"; //Animation result

          this.animation_dice_one.pause();
          this.animation_dice_two.pause();
          this.animation_dice_three.pause();
          this.animation_dice_four.pause();
          this.animation_dice_five.pause();
          this.animation_dice_six.pause();
        };

        _proto.buttonGotoHome = function buttonGotoHome() {
          audio.instance.PlaySound("click+-");
          this.HomeScreen.active = true;
          this.GameScreen.active = false;
          this.SoundScreen.active = false;
          this.animation_dice_one.pause();
          this.animation_dice_two.pause();
          this.animation_dice_three.pause();
          this.animation_dice_four.pause();
          this.animation_dice_five.pause();
          this.animation_dice_six.pause();
        };

        _proto.ButtonToSound = function ButtonToSound() {
          audio.instance.PlaySound("click+-");
          audio.instance.StopSound("shake");
          this.GameScreen.active = false;
          this.SoundScreen.active = true;
          this.HomeScreen.active = false;
          this.animation_dice_one.pause();
          this.animation_dice_two.pause();
          this.animation_dice_three.pause();
          this.animation_dice_four.pause();
          this.animation_dice_five.pause();
          this.animation_dice_six.pause();
        };

        _proto.ButtonPlayGame = function ButtonPlayGame() {
          audio.instance.PlaySound("click+-");
          this.HomeScreen.active = false;
          this.GameScreen.active = true;
          this.SoundScreen.active = false;
          this.animation_dice_one.pause();
          this.animation_dice_two.pause();
          this.animation_dice_three.pause();
          this.animation_dice_four.pause();
          this.animation_dice_five.pause();
          this.animation_dice_six.pause();
        };

        _proto.ButtonToGame = function ButtonToGame() {
          audio.instance.PlaySound("click+-");
          this.HomeScreen.active = false;
          this.GameScreen.active = true;
          this.SoundScreen.active = false;
          this.animation_dice_one.pause();
          this.animation_dice_two.pause();
          this.animation_dice_three.pause();
          this.animation_dice_four.pause();
          this.animation_dice_five.pause();
          this.animation_dice_six.pause();
        };

        _proto.handleRandom = function handleRandom() {
          audio.instance.PlaySound("click+-");
          audio.instance.StopSound("shake");
          audio.instance.PlaySound("showresult");
          var one = Math.floor(Math.random() * 6);
          var two = Math.floor(Math.random() * 6);
          var three = Math.floor(Math.random() * 6);
          this.CloseButton.active = true;
          this.OpenButton.active = false;
          this.dice1.spriteFrame = this.LukLakSpriteFrame[one];
          this.dice2.spriteFrame = this.LukLakSpriteFrame[two];
          this.dice3.spriteFrame = this.LukLakSpriteFrame[three];
          this.animationComponent.play("open");
          console.log(one, two, three);
          console.log(this.LukLakSpriteFrame[one], this.LukLakSpriteFrame[two], this.LukLakSpriteFrame[three]);

          if (this.LukLakSpriteFrame[one] == this.LukLakSpriteFrame[0] || this.LukLakSpriteFrame[two] == this.LukLakSpriteFrame[0] || this.LukLakSpriteFrame[three] == this.LukLakSpriteFrame[0]) {
            console.log("One");
            this.animation_dice_one.play('plateWin');
            this.numTotalcoin += this.numOne * 2;
            this.TotalcointLable.string = this.numTotalcoin.toString() + " $";
            console.log(this.numTotalcoin);
          }

          if (this.LukLakSpriteFrame[one] == this.LukLakSpriteFrame[1] || this.LukLakSpriteFrame[two] == this.LukLakSpriteFrame[1] || this.LukLakSpriteFrame[three] == this.LukLakSpriteFrame[1]) {
            console.log("Two");
            this.animation_dice_two.play('plateWin');
            this.numTotalcoin += this.numTwo * 2;
            this.TotalcointLable.string = this.numTotalcoin.toString() + " $";
            console.log(this.numTotalcoin);
          }

          if (this.LukLakSpriteFrame[one] == this.LukLakSpriteFrame[2] || this.LukLakSpriteFrame[two] == this.LukLakSpriteFrame[2] || this.LukLakSpriteFrame[three] == this.LukLakSpriteFrame[2]) {
            console.log("Three");
            this.animation_dice_three.play('plateWin');
            this.numTotalcoin += this.numThree * 2;
            this.TotalcointLable.string = this.numTotalcoin.toString() + " $";
            console.log(this.numTotalcoin);
          }

          if (this.LukLakSpriteFrame[one] == this.LukLakSpriteFrame[3] || this.LukLakSpriteFrame[two] == this.LukLakSpriteFrame[3] || this.LukLakSpriteFrame[three] == this.LukLakSpriteFrame[3]) {
            console.log("Four");
            this.animation_dice_four.play('plateWin');
            this.numTotalcoin = this.numTotalcoin + this.numFour * 2;
            this.TotalcointLable.string = this.numTotalcoin.toString() + " $";
            console.log(this.numTotalcoin);
          }

          if (this.LukLakSpriteFrame[one] == this.LukLakSpriteFrame[4] || this.LukLakSpriteFrame[two] == this.LukLakSpriteFrame[4] || this.LukLakSpriteFrame[three] == this.LukLakSpriteFrame[4]) {
            console.log("Five");
            this.animation_dice_five.play('plateWin');
            this.numTotalcoin += this.numFive * 2;
            this.TotalcointLable.string = this.numTotalcoin.toString() + " $";
            console.log(this.numTotalcoin);
          }

          if (this.LukLakSpriteFrame[one] == this.LukLakSpriteFrame[5] || this.LukLakSpriteFrame[two] == this.LukLakSpriteFrame[5] || this.LukLakSpriteFrame[three] == this.LukLakSpriteFrame[5]) {
            console.log("Six");
            this.animation_dice_six.play('plateWin');
            this.numTotalcoin += this.numSix * 2;
            this.TotalcointLable.string = this.numTotalcoin.toString() + " $";
            console.log(this.numTotalcoin);
          }
        };

        _proto.buttonOne = function buttonOne() {
          audio.instance.PlaySound("click+-");

          if (this.numTotalcoin >= this.numCount) {
            this.numOne += this.numCount;
            this.OneLable.string = this.numOne.toString() + " $";
            this.numTotalcoin -= this.numCount;
            this.TotalcointLable.string = this.numTotalcoin.toString() + " $";
          }
        };

        _proto.buttonTwo = function buttonTwo() {
          audio.instance.PlaySound("click+-");

          if (this.numTotalcoin >= this.numCount) {
            this.numTwo += this.numCount;
            this.TwoLable.string = this.numTwo.toString() + " $";
            this.numTotalcoin -= this.numCount;
            this.TotalcointLable.string = this.numTotalcoin.toString() + " $";
          }
        };

        _proto.buttonThree = function buttonThree() {
          audio.instance.PlaySound("click+-");

          if (this.numTotalcoin >= this.numCount) {
            this.numThree += this.numCount;
            this.ThreeLable.string = this.numThree.toString() + " $";
            this.numTotalcoin -= this.numCount;
            this.TotalcointLable.string = this.numTotalcoin.toString() + " $";
          }
        };

        _proto.buttonFour = function buttonFour() {
          audio.instance.PlaySound("click+-");

          if (this.numTotalcoin >= this.numCount) {
            this.numFour += this.numCount;
            this.FourLable.string = this.numFour.toString() + " $";
            this.numTotalcoin -= this.numCount;
            this.TotalcointLable.string = this.numTotalcoin.toString() + " $";
          }
        };

        _proto.buttonFive = function buttonFive() {
          audio.instance.PlaySound("click+-");

          if (this.numTotalcoin >= this.numCount) {
            this.numFive += this.numCount;
            this.FiveLable.string = this.numFive.toString() + " $";
            this.numTotalcoin -= this.numCount;
            this.TotalcointLable.string = this.numTotalcoin.toString() + " $";
          }
        };

        _proto.buttonSix = function buttonSix() {
          audio.instance.PlaySound("click+-");

          if (this.numTotalcoin >= this.numCount) {
            this.numSix += this.numCount;
            this.SixLable.string = this.numSix.toString() + " $";
            this.numTotalcoin -= this.numCount;
            this.TotalcointLable.string = this.numTotalcoin.toString() + " $";
          }
        };

        _proto.buttonIncrement = function buttonIncrement() {
          audio.instance.PlaySound("click+-");

          if (this.numCount < this.numTotalcoin) {
            this.numCount += 1000;
            this.CountLable.string = this.numCount.toString() + " $";
          }
        };

        _proto.buttonDescrement = function buttonDescrement() {
          audio.instance.PlaySound("click+-");

          if (this.numCount > 1000) {
            this.numCount -= 1000;
            this.CountLable.string = this.numCount.toString() + " $";
          }
        };

        _proto.handleClose = function handleClose() {
          audio.instance.PlaySound("click+-");
          audio.instance.PlaySound("shake");
          this.CloseButton.active = false;
          this.OpenButton.active = true; //Animation play mix

          this.animationMixOne.play("mixPlate1");
          this.animationMixTwo.play("mixPlate2");
          this.animationMixThree.play("mixPlate3"); //animationclose

          this.animationComponent.play("close"); //Amimation pause

          this.animation_dice_one.pause();
          this.animation_dice_two.pause();
          this.animation_dice_three.pause();
          this.animation_dice_four.pause();
          this.animation_dice_five.pause();
          this.animation_dice_six.pause(); //Reset money

          this.numOne = 0;
          this.OneLable.string = this.numOne.toString() + " $";
          this.numTwo = 0;
          this.TwoLable.string = this.numTwo.toString() + " $";
          this.numThree = 0;
          this.ThreeLable.string = this.numThree.toString() + " $";
          this.numFour = 0;
          this.FourLable.string = this.numFour.toString() + " $";
          this.numFive = 0;
          this.FiveLable.string = this.numFive.toString() + " $";
          this.numSix = 0;
          this.SixLable.string = this.numSix.toString() + " $";
        };

        _proto.QuitButton = function QuitButton() {
          game.end();
          audio.instance.PlaySound("click+-");
        };

        return Game;
      }(Component), _class3.end = void 0, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "LukLakSpriteFrame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "dice1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "dice2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "dice3", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "GameScreen", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "SoundScreen", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "HomeScreen", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "OpenButton", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "CloseButton", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "animationComponent", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "animation_dice_one", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "animation_dice_two", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "animation_dice_three", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "animation_dice_four", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "animation_dice_five", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "animation_dice_six", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "animationMixOne", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "animationMixTwo", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "animationMixThree", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "OneLable", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "TwoLable", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "ThreeLable", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "FourLable", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "FiveLable", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "SixLable", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "TotalcointLable", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "CountLable", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./AudioManager.ts', './Game.ts', './Sound.ts', './debug-view-runtime-control.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Sound.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, _decorator, AudioClip;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioClip = module.AudioClip;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "09fe6Zovp5EaItThydIlUBJ", "Sound", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Audio = exports('default', (_dec = ccclass('Audio'), _dec2 = property(String), _dec3 = property(AudioClip), _dec(_class = (_class2 = function Audio() {
        _initializerDefineProperty(this, "name", _descriptor, this);

        _initializerDefineProperty(this, "clip", _descriptor2, this);
      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "name", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "clip", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});