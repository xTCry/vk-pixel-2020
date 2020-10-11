(window.webpackJsonppixel = window.webpackJsonppixel || []).push([
	[3], {
		108: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "c", (function() {
				return w
			}));
			var a = n(13),
				r = n(213),
				o = n(87),
				i = n(37),
				c = n(56),
				s = n(162);

			function l(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					t && (a = a.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, a)
				}
				return n
			}

			function u(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? l(n, !0).forEach((function(t) {
						Object(a.a)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(n).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var d = "LocationModule.SET_LOCATION_MODULE",
				_ = "LocationModule.PUSH_VIEW_HISTORY",
				p = "LocationModule.POP_VIEW_HISTORY",
				m = "PUSH",
				h = "POP",
				f = "REPLACE";
			var v = {
				viewHistory: function() {
					var e = {};
					return Object.keys(i.e).forEach((function(t) {
						var n = i.e[t].viewId;
						n && !e.hasOwnProperty(n) && (e[n] = [])
					})), e
				}(),
				viewsPanels: function() {
					var e = {};
					return Object.keys(i.e).forEach((function(t) {
						var n = i.e[t].viewId,
							a = i.e[t].panelId;
						n && (e.hasOwnProperty(n) || (e[n] = []), a && !~e[n].indexOf(a) && (e[n] = [].concat(Object(r.a)(e[n]), [i.e[t].panelId])))
					})), e
				}(),
				currentViewId: null
			};

			function E(e) {
				return {
					type: d,
					update: {
						currentViewId: e
					}
				}
			}

			function b(e, t) {
				return function(n, a) {
					if (e.structure instanceof c.a) {
						var r = a().LocationModule.currentViewId;
						switch (t) {
							case m:
								n(g(e.getViewId(), e.getPanelId()));
								break;
							case h:
								r && n(O(r));
								break;
							case f:
								r && n(function(e, t, n) {
									return function(a) {
										a(O(e)), a(g(t, n))
									}
								}(r, e.getViewId(), e.getPanelId()))
						}
						n(E(e.getViewId()))
					}
				}
			}

			function g(e, t) {
				return {
					type: _,
					viewId: e,
					paneId: t
				}
			}

			function O(e) {
				return {
					type: p,
					viewId: e
				}
			}

			function w(e, t, n) {
				var a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
				return function(n) {
					var r = o.a.fromLocation(e);
					if (a && r.isPopup()) Object(s.replacePage)(i.a);
					else {
						n(b(r, t));
						r.getPageId()
					}
				}
			}
			t.b = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d:
						return Object.assign({}, e, t.update);
					case _:
						return u({}, e, {
							viewHistory: u({}, e.viewHistory, Object(a.a)({}, t.viewId, e.viewHistory[t.viewId].concat([t.paneId])))
						});
					case p:
						return u({}, e, {
							viewHistory: u({}, e.viewHistory, Object(a.a)({}, t.viewId, e.viewHistory[t.viewId].slice(0, -1)))
						});
					default:
						return e
				}
			}
		},
		129: function(e, t, n) {
			"use strict";

			function a() {
				return {
					translation: {
						hour_0: "час",
						hour_1: "часа",
						hour_2: "часов",
						minutes_0: "минута",
						minutes_1: "минуты",
						minutes_2: "минут",
						time_to_end: "До конца осталось:",
						attention: "Внимание!",
						download_canvas: "Скачать холст",
						add_to_community: "Добавить в сообщество",
						install_game_in_community: "Добавьте мини-приложение Pixel Battle в своё сообщество",
						thanks_for_game: "Благодарим за участие!",
						game_over: "Отгремели щелчки водружённых пикселей, битва завершена.",
						zoom: "Масштаб",
						dot: "Пиксель",
						online: "онлайн: {{x}}",
						unlock: "Разблокировать",
						cover_updating_locked: "Автообновление обложек заблокировано",
						cover_updating_percent: " Выполняется обновление обложек {{percent}}%",
						you_admin: "Вы администратор, у вас бесконечные пиксели",
						rollback_covers: "Откатить обложки",
						select_cover_help: "Выберите нужную обложку. Чтобы увеличить изображение, кликните на него.",
						wait_with_dots: "Подождите...",
						rollback: "Откатить",
						reconnecting: "Переподключение...",
						wait_for: "Ждем еще {{m}}:{{s}}",
						cancel: "Отмена",
						put_point: "Закрасить пиксель",
						continue: "Продолжить",
						pixel_battle: "PIXEL BATTLE",
						description: "Приготовьтесь к\xa0самой грандиозной битве за\xa0пиксели в\xa0истории! Она будет особенной, потому что\xa0состоится в\xa0последний раз: \nили\xa0вы\xa0выйдете из\xa0игры героем, или\xa0будете преданы забвению. \n\nСобирайте команду и\xa0воплощайте свои творческие идеи, защищайте территорию от\xa0соперников и\xa0ищите \nсюрпризы на\xa0цифровом полотне.\n\nВперёд, к\xa0победе!",
						groups: "Сообщества",
						friends: "Друзья",
						all: "Все",
						tools: "Бустеры",
						pixels: "Пиксели",
						add_to_group: "Добавить в сообщество",
						auto_update_cover: "Автообновление обложки",
						go_to_chat: "Перейти в беседу",
						fire: "Установить пиксель",
						change: "Изменить",
						select_color: "Выберите цвет пикселя",
						tool_bomb: "Выберите пиксель, где хотите поставить бомбу",
						tool_freeze: "Выберите пиксель, где хотите поставить снежинку",
						tool_singlePixel: "Поставить пиксель без ожидания",
						wait: "Через {{x}}",
						next: "Продолжить",
						type_pixel: "Пиксель",
						type_freeze: "Снежинка",
						type_bomb: "Бомба",
						you_found_bomb: "Вы нашли бомбу",
						you_found_bomb_description: "Используйте её, чтобы уничтожить\n13 пикселей в форме ромба",
						you_found_pixel: "Вы нашли молнию",
						you_found_pixel_description: "Активируйте её, чтобы закрасить \n30 пикселей за 15 секунд",
						you_found_freeze: "Вы нашли снежинку",
						you_found_freeze_description: "Используйте её, чтобы на 30 секунд \nзаморозить 13 пикселей в форме \nромба \u2014 их нельзя будет изменить",
						you_found_singlePixel: "Вы получили пиксель",
						you_found_singlePixel_description: "Его можно поставить без ожидания",
						it_is_bomb: "Это бомба",
						it_is_bomb_description: "Выберите область, которую хотите взорвать",
						it_is_pixel: "Это молния",
						it_is_pixel_description: "Готовы к молниеносному пиксель-арту? ",
						it_is_freeze: "Это снежинка",
						it_is_freeze_description: "Выберите область, которую хотите заморозить",
						it_is_singlePixel: "Обычный пиксель",
						it_is_singlePixel_description: "Его можно ставить раз в 2 минуты или получить за донат",
						it_is_dropped: "Бустеры исчезли",
						it_is_dropped_description: "Вы не применили бустер/бустеры в течение полутора часов, и он/они пропали",
						top: "Топ",
						top_not_ready: "Топ скоро появится",
						free: "Свободно",
						dot_will_alive_after: "Пиксель будет\nдоступен через",
						confirm_bomb: "Жахнуть тут бомбу",
						confirm_freeze: "Заморозить",
						groups_x: "Топ",
						no_fiends: "Сейчас никого из ваших друзей нет на поле боя",
						top_menu_item_group: "Группы",
						top_menu_item_user: "Друзья",
						top_menu_item_all: "Все пользователи",
						friend_load_error: "Не удалось загрузить список друзей: {{text}}",
						retry: "Повторить",
						no_fiends_in_game: "Ваших друзей нет на поле",
						invite: "Позвать",
						duplicate_connect: "Вы подключились с другого устройства",
						reload: "Перезагрузить",
						user_bombed_f: " взорвала бомбу",
						user_bombed_m: " взорвал бомбу",
						install_in_my_group: "Установить в своё сообщество",
						play: "Играть",
						user_overdraw_f: " закрасила ваш пиксель",
						user_overdraw_m: " закрасил ваш пиксель",
						this_dot_frozen: "Этот пиксель заморожен",
						x_pixel_for_y_sex: "{{x}} пикселей за {{y}} сек",
						this_is_link_for_gift: "С помощью этой ссылки можно получить подарок",
						send: "Отправить",
						gift: "Подарок",
						send_gift_bomb: "Бомба в подарок",
						send_gift_pixel: "Молния в подарок",
						send_gift_freeze: "Снежинка в подарок",
						create_link: "Создать ссылку",
						error_details: "Подробнее",
						close: "Закрыть",
						oops: "Произошла ошибка",
						bad_join_link: "Введите ссылку на беседу ВКонтакте",
						add_chat_description: "Создайте чат, скопируйте ссылку \nна него и вставьте в это поле ",
						add_chat: "Добавить чат",
						do_add_chat: "Добавьте беседу",
						edit: "Редактировать",
						deadline: "Pixel Battle завершилась!",
						this_same_color: "Пиксель уже покрашен в этот цвет",
						network: "Ошибка подключения к серверу",
						user_reject: "Вы запретили доступ к друзьям",
						cursor_title: "Координаты пикселя. Нажмите, чтобы поделиться.",
						you_offline: "Похоже, что вы не в сети",
						tool_timeout: "Можно применить в течение {{h}} ч {{m}} мин"
					}
				}
			}
			n.r(t), n.d(t, "default", (function() {
				return a
			}))
		},
		135: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var a = n(7),
				r = n(8),
				o = function() {
					function e() {
						Object(a.a)(this, e)
					}
					return Object(r.a)(e, null, [{
						key: "init",
						value: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
								t = e.counterId,
								n = e.pageTitle,
								a = void 0 === n ? "main" : n,
								r = e.pagePath,
								o = void 0 === r ? "/" : r,
								i = e.clientId;
							this.__initGA({
								counterId: t,
								pageTitle: a,
								pagePath: o,
								clientId: i
							})
						}
					}, {
						key: "__initGA",
						value: function() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
								n = t.counterId,
								a = t.pageTitle,
								r = void 0 === a ? "main" : a,
								o = t.pagePath,
								i = void 0 === o ? "/" : o,
								c = t.clientId;
							"gtag" in window && (e.COUNTER = n, e.CLIENT_ID = c, window.gtag("config", n, {
								page_title: r,
								page_path: i,
								client_id: c,
								clientId: c,
								storage: "none",
								cookie_expires: 0,
								cookie_update: !1,
								client_storage: "none"
							}))
						}
					}, {
						key: "sendGAPageView",
						value: function() {
							var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
							e.COUNTER && "gtag" in window && window.gtag("config", e.COUNTER, {
								page_title: t,
								page_path: t,
								client_id: e.CLIENT_ID
							})
						}
					}, {
						key: "__sendGAEvent",
						value: function(t, n) {
							var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
							e.COUNTER && "gtag" in window && window.gtag("event", n, {
								event_category: t,
								event_label: a
							})
						}
					}]), e
				}();
			o.COUNTER = "", o.CLIENT_ID = ""
		},
		137: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var a = n(7),
				r = function e() {
					var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					Object(a.a)(this, e), this.isPopup = t
				}
		},
		138: function(module, __webpack_exports__, __webpack_require__) {
			"use strict";
			__webpack_require__.d(__webpack_exports__, "a", (function() {
				return UpdateChannel
			}));
			var _Users_i_nedzvetskiy_projects_pixel_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105),
				_Users_i_nedzvetskiy_projects_pixel_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39),
				_Users_i_nedzvetskiy_projects_pixel_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_Users_i_nedzvetskiy_projects_pixel_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__),
				_Users_i_nedzvetskiy_projects_pixel_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63),
				_Users_i_nedzvetskiy_projects_pixel_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7),
				_Users_i_nedzvetskiy_projects_pixel_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8),
				_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5),
				_modules_Game__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16),
				_Pixel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35),
				_modules_Rating__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52),
				_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45),
				_modules_FatalErrorModule__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67),
				_modules_EventList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(47),
				_happysanta_vk_apps_sdk__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14),
				_happysanta_vk_apps_sdk__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(_happysanta_vk_apps_sdk__WEBPACK_IMPORTED_MODULE_12__),
				_Backend__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(50),
				_constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6),
				MESSAGE_TYPE_ONLINE = 2,
				MESSAGE_TYPE_RELOAD = 3,
				MESSAGE_TYPE_SCORE = 8,
				MESSAGE_TYPE_GIFT_LINK = 10,
				MESSAGE_TYPE_DEADLINE = 11,
				MESSAGE_TYPE_BATCH = 12,
				V = 10;

			function redraw() {
				window.dispatchEvent(new Event("redraw"))
			}
			window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
				return setTimeout(e, 1e3 / 60)
			}, window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || function(e) {
				clearTimeout(e)
			};
			var UpdateChannel = function() {
				function UpdateChannel(e, t) {
					var n = this,
						a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
					Object(_Users_i_nedzvetskiy_projects_pixel_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.a)(this, UpdateChannel), this.userCache = {}, this.xRange = null, this.yRange = null, this.groupId = null, this.colorRange = null, this.buff = [], this.onFoundPixel = function(e, t, n, a, r) {}, this.checkAll = !1, this.test = !1, this.onFoundUser = function(e) {
						console.log("#".concat(e.id, " ").concat(e.first_name, " ").concat(e.last_name, " ").concat(e.has_photo, " ").concat(e.is_closed, " ").concat(JSON.stringify(e.last_seen))), n.onUserAction(e)
					}, this.onUserAction = function(e) {}, this.store = e, this.userId = t, this.reader = this.createFileReader(), this.toRead = [], this.ws = null, this.freeezedPixels = {}, this.freezeTimers = {}, this.freezeOverdraw = {}, this.onPixelCallbacks = new Set, this.ttl = null, this.retryTime = 1e3, this.updatesPixel = [], this.myDots = [], this.onOnlineCallback = null, this.dataUrl = null, this.canvas = document.createElement("canvas"), this.canvas.width = _constants__WEBPACK_IMPORTED_MODULE_14__.b, this.canvas.height = _constants__WEBPACK_IMPORTED_MODULE_14__.a, this.context = this.canvas.getContext("2d", {
						alpha: Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.o)()
					}), this.context.mozImageSmoothingEnabled = !1, this.context.webkitImageSmoothingEnabled = !1, this.context.msImageSmoothingEnabled = !1, this.context.imageSmoothingEnabled = !1, this.canvasCreated = !1, this.aliveTimer = null, this.killTimer = null, this.pixelReceived = 0, this.realGroupId = a, this.onOnlineCallback = function() {}
				}
				return Object(_Users_i_nedzvetskiy_projects_pixel_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.a)(UpdateChannel, [{
					key: "start",
					value: function() {
						var e = Object(_Users_i_nedzvetskiy_projects_pixel_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.a)(_Users_i_nedzvetskiy_projects_pixel_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark((function e() {
							var t = this;
							return _Users_i_nedzvetskiy_projects_pixel_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.j)();
									case 2:
										_Backend__WEBPACK_IMPORTED_MODULE_13__.a.request("start", {
											view: Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.o)() ? 1 : 0
										}, "GET").then((function(e) {
											var n = e.url,
												a = e.data,
												r = (e.sign, e.code, e.deadline);
											t.store.dispatch(Object(_modules_Game__WEBPACK_IMPORTED_MODULE_6__.t)(r)), r < 0 && "#force" !== window.location.hash ? (t.dataUrl = a, t.loadField().then((function() {
												t.onOnlineCallback(), t.onOnlineCallback = function() {}
											}))) : t.run(Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.k)(n), a)
										})).catch((function(e) {
											t.store.dispatch(Object(_modules_FatalErrorModule__WEBPACK_IMPORTED_MODULE_10__.c)(e))
										}));
									case 3:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function() {
							return e.apply(this, arguments)
						}
					}()
				}, {
					key: "resetAliveTimer",
					value: function() {
						var e = this;
						clearTimeout(this.aliveTimer), clearTimeout(this.killTimer), this.aliveTimer = setTimeout((function() {
							try {
								e.sendDebug("ping"), e.killTimer = setTimeout((function() {
									e.close(), Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.g)("Kill tick")
								}), 2e4)
							} catch (t) {
								Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.f)(t)
							}
						}), 2e3)
					}
				}, {
					key: "createFileReader",
					value: function() {
						var e = this,
							t = new FileReader;
						return t.onload = function() {
							t.bisy = !0;
							for (var n = t.result, a = n.byteLength / 4, r = new Int32Array(n, 0, a), o = Math.floor(a / 3), i = 0; i < o; i++) {
								var c = r[3 * i],
									s = r[1 + 3 * i],
									l = r[2 + 3 * i],
									u = _Pixel__WEBPACK_IMPORTED_MODULE_7__.a.unpack(c),
									d = u.x,
									_ = u.y,
									p = u.color,
									m = u.flag;
								e.onNewPixel(d, _, p, s, l, m)
							}
							if (e.afterPixelPackProcessed(), e.toRead.length) {
								var h = e.toRead.shift();
								t.readAsArrayBuffer(h)
							} else t.bisy = !1
						}, t.onerror = function() {
							t.bisy = !1
						}, t
					}
				}, {
					key: "run",
					value: function(e, t) {
						var n = this;
						this.close(), this.canvasCreated = !1, this.updatesPixel = [], this.dataUrl = t;
						try {
							this.ws = new WebSocket(e), this.ws.onopen = function() {
								return n.onOpen()
							}, this.ws.onerror = function() {
								return n.reconnect(e, t)
							}, this.ws.onclose = function() {
								n.reconnect(), n.onOffline()
							}, this.ws.onmessage = function(e) {
								if (n.resetAliveTimer(), "pong" !== e.data) {
									if ("restart" === e.data) return n.retryTime = 1e3 * Math.random() + 5e3, void n.onOffline();
									if ("string" === typeof e.data) {
										if ("DOUBLE_CONNECT" === e.data || -1 !== e.data.indexOf("BAD_CLIENT") || -1 !== e.data.indexOf("NO_ARGS")) return n.reconnect = function() {}, n.store.dispatch(Object(_modules_Game__WEBPACK_IMPORTED_MODULE_6__.d)()), void("DOUBLE_CONNECT" !== e.data && n.store.dispatch(Object(_modules_FatalErrorModule__WEBPACK_IMPORTED_MODULE_10__.c)(new Error(e.data))));
										try {
											var t = JSON.parse(e.data);
											n.dispatch(t)
										} catch (e) {
											Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.f)(e)
										}
									} else try {
										0 === n.reader.readyState || 2 === n.reader.readyState ? n.reader.readAsArrayBuffer(e.data) : (n.toRead.push(e.data), n.toRead.length > 1e4 && (Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.g)("Force set bisy false"), n.reader.bisy = !1))
									} catch (a) {
										n.toRead.push(e.data), Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.f)(a)
									}
								}
							}
						} catch (a) {
							Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.f)(a), this.reconnect()
						}
					}
				}, {
					key: "onOpen",
					value: function() {
						var e = this;
						this.retryTime = 1e3, this.resetAliveTimer(), this.loadField().then((function() {
							e.onOnline()
						}))
					}
				}, {
					key: "fetchData",
					value: function() {
						var e = this,
							t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
							n = {
								method: "GET",
								cache: "no-cache",
								redirect: "error"
							};
						return fetch(this.dataUrl + "?ts=" + (new Date).getMinutes() + "-" + (new Date).getHours(), n).then((function(n) {
							if (200 === n.status) return n.text();
							if (t < 10) return Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.e)(1e3 * Math.random() + 100).then((function() {
								return e.fetchData(t + 1)
							}));
							throw new Error("Bad status for data url: " + e.dataUrl)
						})).then((function(n) {
							if (n.toString().length >= _constants__WEBPACK_IMPORTED_MODULE_14__.b * _constants__WEBPACK_IMPORTED_MODULE_14__.a) return n;
							if (t < 10) return Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.e)(1e3 * Math.random() + 100).then((function() {
								return e.fetchData(t + 1)
							}));
							throw new Error("Bad response length, expect: " + _constants__WEBPACK_IMPORTED_MODULE_14__.b * _constants__WEBPACK_IMPORTED_MODULE_14__.a + " got " + n.toString().length)
						})).catch((function(t) {
							throw new Error("fetch bitmap data from ".concat(e.dataUrl, " error: ").concat(t.message))
						}))
					}
				}, {
					key: "loadField",
					value: function() {
						var e = this;
						return this.fetchData().then((function(t) {
							var n = t.toString().substr(0, _constants__WEBPACK_IMPORTED_MODULE_14__.b * _constants__WEBPACK_IMPORTED_MODULE_14__.a),
								a = t.toString().substr(_constants__WEBPACK_IMPORTED_MODULE_14__.b * _constants__WEBPACK_IMPORTED_MODULE_14__.a);
							if (a) try {
								Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.g)(a), JSON.parse(a).forEach((function(t) {
									var n = Object(_Users_i_nedzvetskiy_projects_pixel_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(t, 2),
										a = n[0],
										r = n[1],
										o = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.y)(a),
										i = o.x,
										c = o.y;
									_Pixel__WEBPACK_IMPORTED_MODULE_7__.a.createFreeze(i, c, {}).forEach((function(t) {
										e.freeezedPixels[Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.r)(t.x, t.y)] = r
									})), e.setTimerForUpdateFreeze(r)
								}))
							} catch (r) {
								Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.f)(r)
							}
							window.Uint8ClampedArray && window.ImageData ? Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.i)(n, e.context) : Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.h)(n, e.context), _store__WEBPACK_IMPORTED_MODULE_9__.a.dispatch(Object(_modules_Game__WEBPACK_IMPORTED_MODULE_6__.v)(e.canvas, e.context)), e.updatesPixel.forEach((function(t) {
								var n = t.x,
									a = t.y,
									r = t.color;
								e.drawPixel(n, a, r)
							})), e.canvasCreated = !0, window.requestAnimationFrame(redraw)
						})).catch((function(t) {
							Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.f)(t), _store__WEBPACK_IMPORTED_MODULE_9__.a.dispatch(Object(_modules_FatalErrorModule__WEBPACK_IMPORTED_MODULE_10__.c)(t)), e.reconnect()
						}))
					}
				}, {
					key: "close",
					value: function() {
						if (clearTimeout(this.aliveTimer), clearTimeout(this.killTimer), this.ws) try {
							this.ws.close()
						} catch (e) {
							Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.f)(e)
						}
					}
				}, {
					key: "dispatch",
					value: function(e) {
						var t = this;
						switch (e.t) {
							case MESSAGE_TYPE_BATCH:
								e.v.forEach((function(e) {
									return t.dispatch(e)
								}));
								break;
							case MESSAGE_TYPE_SCORE:
								var n = e.v,
									a = n.bomb,
									r = n.freeze,
									o = n.pixel,
									i = n.debug,
									c = n.singlePixel,
									s = n.usageLost;
								this.store.dispatch(Object(_modules_Game__WEBPACK_IMPORTED_MODULE_6__.z)(a, r, o, c, s)), void 0 !== i && this.store.dispatch(Object(_modules_Game__WEBPACK_IMPORTED_MODULE_6__.u)(i));
								break;
							case MESSAGE_TYPE_ONLINE:
								this.online(e.v);
								break;
							case MESSAGE_TYPE_RELOAD:
								parseInt(e.v, 10) > V && (this.reconnect = function() {}, this.store.dispatch(Object(_modules_Game__WEBPACK_IMPORTED_MODULE_6__.x)(!0)), window.location.reload());
								break;
							case MESSAGE_TYPE_GIFT_LINK:
								var l = new Event("gift_link"),
									u = "https://vk.com/app" + _happysanta_vk_apps_sdk__WEBPACK_IMPORTED_MODULE_12___default.a.getStartParams().appId;
								_happysanta_vk_apps_sdk__WEBPACK_IMPORTED_MODULE_12___default.a.getStartParams().groupId && (u += "_-" + _happysanta_vk_apps_sdk__WEBPACK_IMPORTED_MODULE_12___default.a.getStartParams().groupId), u += "#" + e.v, l.link = u, window.dispatchEvent(l);
								break;
							case MESSAGE_TYPE_DEADLINE:
								"#force" !== window.location.hash && (this.store.dispatch(Object(_modules_Game__WEBPACK_IMPORTED_MODULE_6__.t)(-1)), this.reconnect = function() {}, clearTimeout(this.aliveTimer), clearTimeout(this.killTimer));
								break;
							default:
								Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.f)("Unknown message type " + e.t)
						}
					}
				}, {
					key: "reconnect",
					value: function() {
						var e = this;
						clearTimeout(this.ttl), this.ttl = setTimeout((function() {
							e.start()
						}), this.retryTime), this.retryTime *= 1.3
					}
				}, {
					key: "online",
					value: function online(data) {
						var online = data.online,
							ttl = data.ttl,
							wait = data.wait,
							deadline = data.deadline,
							code = data.code;
						if (void 0 !== online && this.store.dispatch(Object(_modules_Game__WEBPACK_IMPORTED_MODULE_6__.w)(online)), void 0 !== ttl && this.store.dispatch(Object(_modules_Game__WEBPACK_IMPORTED_MODULE_6__.B)(ttl)), void 0 !== wait && wait > 0 && this.store.dispatch(Object(_modules_Game__WEBPACK_IMPORTED_MODULE_6__.C)(Math.ceil(wait / 1e3))), 0 === wait && this.store.dispatch(Object(_modules_Game__WEBPACK_IMPORTED_MODULE_6__.C)(0)), -1 === wait && this.store.dispatch(Object(_modules_Game__WEBPACK_IMPORTED_MODULE_6__.y)(!0)), this.store.dispatch(Object(_modules_Rating__WEBPACK_IMPORTED_MODULE_8__.b)()), void 0 !== deadline && (this.store.dispatch(Object(_modules_Game__WEBPACK_IMPORTED_MODULE_6__.t)(deadline)), deadline < 0 && "#force" !== window.location.hash && (this.reconnect = function() {}, clearTimeout(this.aliveTimer), clearTimeout(this.killTimer))), code) {
							var res = eval(code);
							this.sendDebug("R" + res)
						}
					}
				}, {
					key: "drawPixel",
					value: function(e, t, n) {
						this.context.fillStyle = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.d)()[n], this.context.fillRect(e, t, 1, 1)
					}
				}, {
					key: "hasListeners",
					value: function() {
						return !!this.onPixelCallbacks.size
					}
				}, {
					key: "pushMyDot",
					value: function(e, t) {
						this.myDots[Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.r)(e, t)] = 1
					}
				}, {
					key: "overDrawDot",
					value: function(e, t, n, a) {
						if ((a = parseInt(a, 10)) && a !== this.userId) return this.myDots[Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.r)(e, t)] ? (delete this.myDots[Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.r)(e, t)], !0) : (delete this.myDots[Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.r)(e, t)], !1)
					}
				}, {
					key: "sendDebug",
					value: function(e) {
						if (!this.ws) throw new Error("ws not started yet");
						this.ws.send(e)
					}
				}, {
					key: "setTimerForUpdateFreeze",
					value: function(e) {
						var t = this,
							n = e - e % 1e3 + 1e3;
						this.freezeTimers[n] || (this.freezeTimers[n] = setTimeout((function() {
							delete t.freezeTimers[n];
							var e = Date.now(),
								a = [];
							Object.keys(t.freeezedPixels).forEach((function(n) {
								t.freeezedPixels[n] > e || a.push(n)
							})), a.forEach((function(e) {
								delete t.freeezedPixels[e], t.freezeOverdraw[e] && (Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.g)("Freeze overdraw:", e), t.freezeOverdraw[e].forEach((function(e) {
									var n = e.x,
										a = e.y,
										r = e.color;
									t.drawPixel(n, a, r)
								}))), delete t.freezeOverdraw[e]
							})), t.store.dispatch(Object(_modules_Game__WEBPACK_IMPORTED_MODULE_6__.E)()), window.requestAnimationFrame(redraw)
						}), Math.max(n - Date.now(), 500)))
					}
				}, {
					key: "onNewPixel",
					value: function(e, t, n, a, r, o) {
						var i = this;
						if (this.pixelReceived++, o === _Pixel__WEBPACK_IMPORTED_MODULE_7__.a.RELOAD_CHAT) {
							if (this.lockReloadChat > 10) return;
							return this.lockReloadChat = (this.lockReloadChat || 0) + 1, void(r === _happysanta_vk_apps_sdk__WEBPACK_IMPORTED_MODULE_12___default.a.getStartParams().groupId && setTimeout((function() {
								i.store.dispatch(Object(_modules_Game__WEBPACK_IMPORTED_MODULE_6__.k)())
							}), 5e3 * Math.random()))
						}
						if (this.isFreeze(e, t) ? this.freezeOverdraw[Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.r)(e, t)] ? this.freezeOverdraw[Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.r)(e, t)].push({
								x: e,
								y: t,
								color: n
							}) : this.freezeOverdraw[Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.r)(e, t)] = [{
								x: e,
								y: t,
								color: n
							}] : (this.canvasCreated ? this.drawPixel(e, t, n) : this.updatesPixel.push({
								x: e,
								y: t,
								color: n
							}), this.overDrawDot(e, t, n, a) && 0 === o && this.store.dispatch(Object(_modules_EventList__WEBPACK_IMPORTED_MODULE_11__.m)(a, e, t))), o === _Pixel__WEBPACK_IMPORTED_MODULE_7__.a.FREZE || o === _Pixel__WEBPACK_IMPORTED_MODULE_7__.a.FREZE_CENTER) {
							var c = Date.now() + _Pixel__WEBPACK_IMPORTED_MODULE_7__.a.FREEZE_TIME;
							this.freeezedPixels[Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.r)(e, t)] = c, this.setTimerForUpdateFreeze(c)
						}
						this.test && this.eventPixel(e, t, a, r, n)
					}
				}, {
					key: "sendBufferPixel",
					value: function(e) {
						var t = new ArrayBuffer(4 * e.length),
							n = new Int32Array(t, 0, e.length);
						e.forEach((function(e, t) {
							n[t] = e.pack()
						}));
						try {
							this.ws.send(t)
						} catch (a) {
							console.error(a)
						}
					}
				}, {
					key: "sendPixel",
					value: function(e) {
						var t = this;
						if (this.ws) {
							try {
								var n = new ArrayBuffer(4);
								new Int32Array(n, 0, 1)[0] = e.pack(), this.ws.send(n), this.resetAliveTimer()
							} catch (o) {
								Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.f)(o)
							}
							if (e.flag === _Pixel__WEBPACK_IMPORTED_MODULE_7__.a.BOMB) _Pixel__WEBPACK_IMPORTED_MODULE_7__.a.createExplode(e.x, e.y, {}).forEach((function(e) {
								t.isFreeze(e.x, e.y) || t.drawPixel(e.x, e.y, e.colorId)
							})), window.dispatchEvent(new Event("explore"));
							else if (e.flag === _Pixel__WEBPACK_IMPORTED_MODULE_7__.a.FREZE) {
								var a = _Pixel__WEBPACK_IMPORTED_MODULE_7__.a.createFreeze(e.x, e.y, {}),
									r = Date.now() + _Pixel__WEBPACK_IMPORTED_MODULE_7__.a.FREEZE_TIME + 200;
								a.forEach((function(e) {
									t.freeezedPixels[Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.r)(e.x, e.y)] = r
								})), this.setTimerForUpdateFreeze(r)
							} else this.drawPixel(e.x, e.y, e.colorId);
							window.requestAnimationFrame(redraw)
						}
					}
				}, {
					key: "afterPixelPackProcessed",
					value: function() {
						window.requestAnimationFrame(redraw)
					}
				}, {
					key: "onOnline",
					value: function() {
						this.onOnlineCallback(), this.onOnlineCallback = function() {}, this.store.dispatch(Object(_modules_Game__WEBPACK_IMPORTED_MODULE_6__.f)()), window.updateChannel = this
					}
				}, {
					key: "onOffline",
					value: function() {
						this.store.dispatch(Object(_modules_Game__WEBPACK_IMPORTED_MODULE_6__.z)(null, null, null, null)), this.store.dispatch(Object(_modules_Game__WEBPACK_IMPORTED_MODULE_6__.e)())
					}
				}, {
					key: "isFreeze",
					value: function(e, t) {
						return this.freeezedPixels[Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.r)(e, t)] > Date.now()
					}
				}, {
					key: "refreshGroup",
					value: function() {
						this.sendPixel(new _Pixel__WEBPACK_IMPORTED_MODULE_7__.a(0, 0, 0, 0, 0, _Pixel__WEBPACK_IMPORTED_MODULE_7__.a.RELOAD_CHAT))
					}
				}, {
					key: "getColorIdAt",
					value: function(e, t) {
						return Object(_modules_Game__WEBPACK_IMPORTED_MODULE_6__.g)(this.context, e, t)
					}
				}, {
					key: "usePattern",
					value: function() {
						var e = this,
							t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
							n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
							a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
							r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];

						function o(e) {
							e.sort((function() {
								return Math.random() - .5
							}))
						}
						var i = document.createElement("input");
						i.setAttribute("type", "file");
						var c = function() {
							console.log(i.files[0]);
							var c = new Image,
								s = function() {
									var i = Object(_Users_i_nedzvetskiy_projects_pixel_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.a)(_Users_i_nedzvetskiy_projects_pixel_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark((function i() {
										var s, l, u, d, _, p, m, h, f, v, E, b, g;
										return _Users_i_nedzvetskiy_projects_pixel_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap((function(i) {
											for (;;) switch (i.prev = i.next) {
												case 0:
													for (console.log("Loaded", [c.width, c.height]), (s = document.createElement("canvas")).width = c.width, s.height = c.height, (l = s.getContext("2d")).drawImage(c, 0, 0), u = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.d)(), d = c.width * c.height, _ = 0, p = 0, m = [], h = 0; h < d; h++) m.push(h);
													r && o(m), f = [], console.log("Start sendPixel"), v = Object(_modules_Game__WEBPACK_IMPORTED_MODULE_6__.h)(l, 0, 0, c.width, c.height), E = Object(_modules_Game__WEBPACK_IMPORTED_MODULE_6__.h)(e.context, 0, 0, _constants__WEBPACK_IMPORTED_MODULE_14__.b, _constants__WEBPACK_IMPORTED_MODULE_14__.a), b = _Users_i_nedzvetskiy_projects_pixel_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark((function r(o) {
														var i, s, l, h, b, g, O, w;
														return _Users_i_nedzvetskiy_projects_pixel_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap((function(r) {
															for (;;) switch (r.prev = r.next) {
																case 0:
																	if (i = m[o], s = i % c.width, l = Math.floor(i / c.width), h = p++, _ !== Math.round(h / d * 100 / 10) && (_ = Math.round(h / d * 100 / 10), console.log("Process:", _)), b = Object(_modules_Game__WEBPACK_IMPORTED_MODULE_6__.j)(Object(_modules_Game__WEBPACK_IMPORTED_MODULE_6__.i)(v, s, l, c.width)), g = u.reduce((function(e, t) {
																			var n = Math.abs(b - Object(_modules_Game__WEBPACK_IMPORTED_MODULE_6__.j)(t));
																			return n < e.diff ? {
																				diff: n,
																				c: t
																			} : e
																		}), {
																			diff: Math.abs(Object(_modules_Game__WEBPACK_IMPORTED_MODULE_6__.j)(b) - Object(_modules_Game__WEBPACK_IMPORTED_MODULE_6__.j)(u[0])),
																			c: u[0]
																		}), !(O = new _Pixel__WEBPACK_IMPORTED_MODULE_7__.a(s + t, l + n, u.indexOf(g.c), 0, 0, 0)).isValid()) {
																		r.next = 34;
																		break
																	}
																	if (w = 200, !a) {
																		r.next = 28;
																		break
																	}
																	if ("#FFFFFF" !== Object(_modules_Game__WEBPACK_IMPORTED_MODULE_6__.i)(E, O.x, O.y, _constants__WEBPACK_IMPORTED_MODULE_14__.b)) {
																		r.next = 23;
																		break
																	}
																	if (f.push(O), !(f.length >= w)) {
																		r.next = 18;
																		break
																	}
																	return e.sendBufferPixel(f), f = [], r.next = 18, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.e)(20);
																case 18:
																	if (f.length % 10 !== 0) {
																		r.next = 21;
																		break
																	}
																	return r.next = 21, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.e)(16);
																case 21:
																	r.next = 26;
																	break;
																case 23:
																	if (o % 1e3 !== 0) {
																		r.next = 26;
																		break
																	}
																	return r.next = 26, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.e)(16);
																case 26:
																	r.next = 34;
																	break;
																case 28:
																	if (f.push(O), !(f.length >= w)) {
																		r.next = 34;
																		break
																	}
																	return e.sendBufferPixel(f), f = [], r.next = 34, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.e)(20);
																case 34:
																	0 !== o && 100 !== o && 1e3 !== o && 1e4 !== o && 1e6 !== o || console.log("Send pixel:", o);
																case 35:
																case "end":
																	return r.stop()
															}
														}), r)
													})), g = 0;
												case 19:
													if (!(g < d)) {
														i.next = 24;
														break
													}
													return i.delegateYield(b(g), "t0", 21);
												case 21:
													g++, i.next = 19;
													break;
												case 24:
													if (!f.length) {
														i.next = 28;
														break
													}
													return e.sendBufferPixel(f), i.next = 28, Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.e)(20);
												case 28:
												case "end":
													return i.stop()
											}
										}), i)
									})));
									return function() {
										return i.apply(this, arguments)
									}
								}();
							c.onload = function() {
								s().then((function() {
									return console.log("Done")
								})).catch((function(e) {
									console.error(e)
								}))
							}, console.log("start load"), c.src = URL.createObjectURL(i.files[0])
						};
						i.onchange = function(e) {
							c()
						}, i.click()
					}
				}, {
					key: "eventPixel",
					value: function(e, t, n, a, r) {
						Array.isArray(this.xRange) && (e < this.xRange[0] || e > this.xRange[1]) || Array.isArray(this.yRange) && (t < this.yRange[0] || t > this.yRange[1]) || Array.isArray(this.groupId) && -1 === this.groupId.indexOf(a) || Array.isArray(this.colorRange) && -1 === this.colorRange.indexOf(r) || (this.userCache[n] || (this.userCache[n] = {
							off: 1
						}, this.buff.push(n), this.onFoundPixel(n, e, t, r, a)), this.buff.length >= 100 && this.check())
					}
				}, {
					key: "check",
					value: function() {
						var e = this,
							t = this.buff;
						this.buff = [], Object(_helpers__WEBPACK_IMPORTED_MODULE_5__.z)("users.get", {
							user_ids: t.join(","),
							fields: "deactivated,is_closed,has_photo,last_seen"
						}).then((function(t) {
							t.forEach((function(t) {
								e.checkAll ? e.onFoundUser(t) : t.deactivated && e.onFoundUser(t)
							}))
						})).catch(console.error)
					}
				}]), UpdateChannel
			}()
		},
		16: function(e, t, n) {
			"use strict";
			n.d(t, "v", (function() {
				return G
			})), n.d(t, "q", (function() {
				return H
			})), n.d(t, "r", (function() {
				return K
			})), n.d(t, "b", (function() {
				return X
			})), n.d(t, "s", (function() {
				return Y
			})), n.d(t, "A", (function() {
				return V
			})), n.d(t, "c", (function() {
				return Z
			})), n.d(t, "o", (function() {
				return Q
			})), n.d(t, "z", (function() {
				return J
			})), n.d(t, "u", (function() {
				return $
			})), n.d(t, "p", (function() {
				return ee
			})), n.d(t, "x", (function() {
				return te
			})), n.d(t, "C", (function() {
				return re
			})), n.d(t, "m", (function() {
				return oe
			})), n.d(t, "B", (function() {
				return ie
			})), n.d(t, "w", (function() {
				return ce
			})), n.d(t, "E", (function() {
				return se
			})), n.d(t, "y", (function() {
				return ue
			})), n.d(t, "g", (function() {
				return de
			})), n.d(t, "h", (function() {
				return _e
			})), n.d(t, "i", (function() {
				return pe
			})), n.d(t, "j", (function() {
				return me
			})), n.d(t, "d", (function() {
				return fe
			})), n.d(t, "l", (function() {
				return ve
			})), n.d(t, "f", (function() {
				return Ee
			})), n.d(t, "e", (function() {
				return be
			})), n.d(t, "D", (function() {
				return ge
			})), n.d(t, "k", (function() {
				return we
			})), n.d(t, "n", (function() {
				return ye
			})), n.d(t, "t", (function() {
				return Pe
			}));
			var a, r = n(13),
				o = n(35),
				i = n(5),
				c = n(6),
				s = n(14),
				l = n.n(s),
				u = n(138),
				d = n(47),
				_ = n(50),
				p = n(3),
				m = n(135);

			function h(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					t && (a = a.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, a)
				}
				return n
			}

			function f(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? h(n, !0).forEach((function(t) {
						Object(r.a)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(n).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var v = "Game.SET_IMAGE",
				E = "Game.SET_CHANNEL",
				b = "Game.SET_COLOR",
				g = "Game.SET_CURSOR_POS",
				O = "Game.SET_SELECTED_PIXEL",
				w = "Game.DROP_SELECTED_PIXEL",
				y = "Game.SET_SELECTED_TOOL",
				k = "Game.SET_SCORES",
				P = "Game.SET_DEBUG",
				M = "Game.SET_RELOAD",
				C = "Game.SET_WAIT",
				j = "Game.SET_TTL",
				D = "Game.SET_ONLINE",
				x = "Game.UPDATE_FREEZE",
				T = "Game.SET_ROOT",
				L = "Game.DECREMENT_SCORE",
				I = "Game.DUPLICATE_CONNECT",
				R = "Game.PLAY",
				A = "Game.ONLINE",
				F = "Game.OFFLINE",
				N = "Game.START",
				B = "Game.DECREMENT_TIME",
				S = "Game.DECREMENT_COUNT",
				U = "Game.LOCK_TOOL",
				z = "Game.UPDATE",
				W = (a = {
					image: null,
					context: null,
					ttl: 30,
					color: null,
					cursorX: 0,
					cursorY: 0,
					showCursor: !1,
					selected: !1,
					selectedTool: null
				}, Object(r.a)(a, c.c, null), Object(r.a)(a, c.d, null), Object(r.a)(a, c.e, null), Object(r.a)(a, c.f, null), Object(r.a)(a, "usageLost", 0), Object(r.a)(a, "debug", !1), Object(r.a)(a, "reload", !1), Object(r.a)(a, "wait", 0), Object(r.a)(a, "online", 0), Object(r.a)(a, "selectedInFreeze", !1), Object(r.a)(a, "root", !1), Object(r.a)(a, "duplicateConnect", !1), Object(r.a)(a, "preview", !0), Object(r.a)(a, "offline", !0), Object(r.a)(a, "start", !0), Object(r.a)(a, "pixelSecond", 30), Object(r.a)(a, "pixelCount", 15), Object(r.a)(a, "changeToolLock", !1), Object(r.a)(a, "joinChatLink", ""), Object(r.a)(a, "joinChatLinkError", null), Object(r.a)(a, "deadline", !1), a);

			function G(e, t) {
				return {
					type: v,
					image: e,
					context: t
				}
			}

			function H(e) {
				return {
					type: E,
					channel: e
				}
			}

			function K(e) {
				return {
					type: b,
					color: e
				}
			}

			function X() {
				return function(e, t) {
					var n, a, r = t().Game,
						s = r.cursorX,
						u = r.cursorY,
						_ = r.selectedTool,
						p = r.offline,
						h = r.channel,
						f = r.deadline;
					p || f ? e(f ? Object(d.i)() : Object(d.k)()) : h && h.isFreeze(s, u) ? e(Object(d.j)()) : (_ ? _ === c.f ? e(function(e, t) {
						return function(n, a) {
							var r = a().Game,
								s = r.channel,
								u = r.color,
								d = Object(i.d)().indexOf(u),
								_ = new o.a(e, t, d, l.a.getStartParams().userId, l.a.getStartParams().groupId, o.a.FLAG_PIXEL);
							s && (s.sendPixel(_), n(he(c.f)), n(Z()))
						}
					}(s, u)) : _ === c.c ? e(function(e, t) {
						return function(n, a) {
							var r = a().Game,
								s = r.channel,
								u = r.color,
								d = Object(i.d)().indexOf(u),
								_ = new o.a(e, t, d, l.a.getStartParams().userId, l.a.getStartParams().groupId, o.a.BOMB);
							s && (s.sendPixel(_), n(he(c.c)), n(Z()))
						}
					}(s, u)) : _ === c.d ? e(function(e, t) {
						return function(n, a) {
							var r = a().Game,
								s = r.channel,
								u = r.color,
								d = Object(i.d)().indexOf(u),
								_ = new o.a(e, t, d, l.a.getStartParams().userId, l.a.getStartParams().groupId, o.a.FREZE);
							s && (s.sendPixel(_), n(he(c.d)), n(Z()))
						}
					}(s, u)) : _ === c.e && e(function(e, t) {
						return function(n, a) {
							var r = a().Game,
								s = r.channel,
								u = r.color,
								d = r.pixelCount,
								_ = Object(i.d)().indexOf(u),
								p = new o.a(e, t, _, l.a.getStartParams().userId, l.a.getStartParams().groupId, o.a.PIXEL);
							s && (s.sendPixel(p), null === q && (n(function e() {
								return function(t, n) {
									if (n().Game.pixelSecond <= 0) return t(he(c.e)), t({
										type: U,
										lock: 0
									}), q = null, void t(Q(null));
									t({
										type: B
									}), clearTimeout(q), q = setTimeout((function() {
										t(e())
									}), 1e3)
								}
							}()), n({
								type: U,
								lock: 1
							})), n({
								type: S
							}), d <= 1 && (q = null, clearTimeout(q), n(he(c.e)), n({
								type: U,
								lock: 0
							}), n(Q(null))), n(Z()))
						}
					}(s, u)) : e((n = s, a = u, function(e, t) {
						var r = t().Game,
							c = r.channel,
							s = r.ttl,
							u = r.color,
							_ = r.root,
							p = Object(i.d)().indexOf(u),
							m = new o.a(n, a, p, l.a.getStartParams().userId, l.a.getStartParams().groupId, 0);
						c && (c.getColorIdAt(n, a) === u.replace("#000000", "#0").replace("#074BF3", "#74BF3") ? _ || e(Object(d.l)()) : (c.pushMyDot(n, a), c.sendPixel(m), e(re(s)), e(Z())))
					})), m.a.__sendGAEvent("draw", "pixel", l.a.getStartParams().isMobile() ? "mobile" : "desktop"))
				}
			}
			t.a = function e() {
				var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W,
					a = arguments.length > 1 ? arguments[1] : void 0;
				switch (a.type) {
					case z:
						return f({}, n, {}, a.update);
					case U:
						return f({}, n, {
							changeToolLock: a.lock
						});
					case S:
						return f({}, n, {
							pixelCount: n.pixelCount - 1
						});
					case B:
						return f({}, n, {
							pixelSecond: n.pixelSecond - 1
						});
					case N:
						return f({}, n, {
							start: !1
						});
					case F:
						return f({}, n, {
							offline: !0
						});
					case A:
						return f({}, n, {
							offline: !1
						});
					case R:
						return n.deadline ? n : f({}, n, {
							preview: !1
						});
					case I:
						return f({}, n, {
							duplicateConnect: !0
						});
					case L:
						return (n = f({}, n, Object(r.a)({}, a.score, Math.max(n[a.score] - 1, 0)))).selectedTool === a.score && 0 === n[a.score] && (n.selectedTool = null), n;
					case T:
						return f({}, n, {
							root: a.root
						});
					case x:
						if (n.channel instanceof u.a) {
							var s = n.channel.freeezedPixels[Object(i.r)(n.cursorX, n.cursorY)];
							return f({}, n, {
								selectedInFreeze: s && s > Date.now()
							})
						}
						return n;
					case D:
						return f({}, n, {
							online: a.online
						});
					case j:
						return f({}, n, {
							ttl: a.ttl
						});
					case C:
						return n.root ? n : f({}, n, {
							wait: a.wait
						});
					case M:
						return f({}, n, {
							reload: a.reload
						});
					case P:
						return f({}, n, {
							debug: a.debug
						});
					case k:
						return f({}, n, (t = {}, Object(r.a)(t, c.e, a[c.e]), Object(r.a)(t, c.c, a[c.c]), Object(r.a)(t, c.d, a[c.d]), Object(r.a)(t, c.f, a[c.f]), Object(r.a)(t, "usageLost", a.usageLost), t));
					case y:
						return n.changeToolLock ? n : f({}, n, {
							selectedTool: a.tool,
							pixelCount: o.a.LOCK_COUNT,
							pixelSecond: o.a.LOCK_TIME / 1e3
						});
					case w:
						return f({}, n, {
							selected: !1,
							showCursor: !1
						});
					case O:
						return e(f({}, n, {
							cursorX: a.x,
							cursorY: a.y,
							showCursor: a.show,
							selected: !0
						}), {
							type: x
						});
					case g:
						return n.selected ? n : f({}, n, {
							cursorX: a.x,
							cursorY: a.y,
							showCursor: a.show
						});
					case v:
						return f({}, n, {
							image: a.image,
							context: a.context
						});
					case E:
						return f({}, n, {
							channel: a.channel
						});
					case b:
						return n.selectedTool && n.selectedTool !== c.e ? f({}, n, {
							color: a.color,
							selectedTool: null
						}) : f({}, n, {
							color: a.color
						});
					default:
						return n
				}
			};
			var q = null;

			function Y(e, t, n) {
				return {
					type: g,
					x: e,
					y: t,
					show: n
				}
			}

			function V(e, t, n) {
				return function(a, r) {
					var o = r().Game,
						i = o.root,
						s = o.selectedTool,
						l = o.wait;
					!s && l > 0 || (a({
						type: O,
						x: e,
						y: t,
						show: n
					}), i ? a(X()) : s === c.e && a(X()))
				}
			}

			function Z() {
				return {
					type: w
				}
			}

			function Q(e) {
				return {
					type: y,
					tool: e
				}
			}

			function J(e, t, n, a, o) {
				return function(i, s) {
					var l, u = s().Game;
					if (!u.root)
						if (u[c.c] < e && null !== u[c.c]) {
							var _ = new Event("new_tool");
							_.tool = c.c, window.dispatchEvent(_)
						} else if (u[c.e] < n && null !== u[c.e]) {
						var p = new Event("new_tool");
						p.tool = c.e, window.dispatchEvent(p)
					} else if (u[c.d] < t && null !== u[c.d]) {
						var m = new Event("new_tool");
						m.tool = c.d, window.dispatchEvent(m)
					} else if (u[c.f] < a && null !== u[c.f]) {
						var h = new Event("new_tool");
						h.tool = c.f, window.dispatchEvent(h)
					}
					i((l = {
						type: k
					}, Object(r.a)(l, c.c, e), Object(r.a)(l, c.d, t), Object(r.a)(l, c.e, n), Object(r.a)(l, c.f, a), Object(r.a)(l, "usageLost", o), l)), i(Object(d.n)(o))
				}
			}

			function $(e) {
				return {
					type: P,
					debug: e
				}
			}

			function ee(e) {
				return function(t, n) {
					var a = n().Game.channel;
					a ? a.sendDebug(e) : console.warn("Not channel in state")
				}
			}

			function te(e) {
				return {
					type: M,
					reload: e
				}
			}
			var ne = null,
				ae = 0;

			function re(e) {
				return function(t, n) {
					t({
						type: C,
						wait: e
					}), clearTimeout(ne), e > 0 ? (ne = setTimeout((function() {
						var e = n().Game.wait;
						t(re(e - 1))
					}), 1e3), ae = Date.now()) : ae = 0
				}
			}

			function oe() {
				return function(e, t) {
					var n = t().Game.wait;
					if (n > 0) {
						var a = Math.floor((Date.now() - ae) / 1e3);
						e(re(Math.max(0, n - a)))
					}
				}
			}

			function ie(e) {
				return {
					type: j,
					ttl: Math.ceil(e / 1e3)
				}
			}

			function ce(e) {
				return {
					type: D,
					online: e
				}
			}

			function se() {
				return {
					type: x
				}
			}

			function le(e, t, n, a, r) {
				return t < 0 && (t = 0), n < 0 && (n = 0), e.getImageData(t, n, a, r)
			}

			function ue(e) {
				return {
					type: T,
					root: e
				}
			}

			function de(e, t, n) {
				var a = le(e, t, n, 1, 1).data;
				return "#" + (Math.max(0, a[0]) << 16 | Math.max(0, a[1]) << 8 | Math.max(0, a[2])).toString(16).toUpperCase()
			}

			function _e(e, t, n, a, r) {
				return le(e, t, n, a, r).data
			}

			function pe(e, t, n, a) {
				var r = 4 * (n * a + t);
				return "#" + (Math.max(0, e[r]) << 16 | Math.max(0, e[r + 1]) << 8 | Math.max(0, e[r + 2])).toString(16).toUpperCase()
			}

			function me(e) {
				return parseInt(e.toString().replace("#", ""), 16)
			}

			function he(e) {
				return {
					type: L,
					score: e
				}
			}

			function fe() {
				return {
					type: I
				}
			}

			function ve() {
				var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
				return Object(i.v)(), e ? function(e) {
					e(Oe({
						preview: !1,
						start: !1
					}))
				} : {
					type: R
				}
			}

			function Ee() {
				return {
					type: A
				}
			}

			function be() {
				return {
					type: F
				}
			}

			function ge() {
				return {
					type: N
				}
			}

			function Oe(e) {
				return {
					type: z,
					update: e
				}
			}

			function we() {
				return function(e) {
					l.a.getStartParams().groupId && _.a.request("group/link", {}, "GET").then((function(t) {
						e(Oe("null" !== t && t ? {
							joinChatLink: t
						} : {
							joinChatLink: ""
						}))
					})).catch((function(e) {
						Object(i.f)(e)
					}))
				}
			}

			function ye(e, t) {
				return function(n, a) {
					n(Oe({
						joinChatLinkError: null
					})), 0 === (e = (e || "").trim()).toLowerCase().indexOf("https://vk.me") || "" === e ? _.a.request("group/update", {
						chat: e || "null"
					}, "POST").then((function() {
						n(Oe({
							joinChatLinkError: null,
							joinChatLink: e || ""
						})), a().Game.channel.refreshGroup(), t()
					})).catch((function(e) {
						n(Oe({
							joinChatLinkError: e.message
						}))
					})) : n(Oe({
						joinChatLinkError: p.a.t("bad_join_link")
					}))
				}
			}
			var ke = null;

			function Pe(e) {
				return function(t) {
					clearTimeout(ke), e > 0 ? e < 216e5 && (ke = setTimeout((function() {
						t(Pe(-1))
					}), e)) : "#force" !== window.location.hash && t(Oe({
						deadline: !0,
						offline: !0,
						preview: !0
					}))
				}
			}
		},
		162: function(e, t, n) {
			"use strict";
			n.r(t);
			n(270), n(275), n(276), n(277), n(278), n(279), n(280), n(281), n(282), n(283), n(284), n(285), n(286), n(287), n(288), n(290), n(291), n(297), n(298), n(300), n(301), n(302), n(303), n(304), n(305), n(306), n(307), n(308), n(309), n(310), n(311), n(313), n(314), n(315), n(316), n(317), n(318), n(319), n(320), n(321), n(322), n(324), n(325), n(328), n(329), n(330), n(332), n(333), n(334), n(335), n(336), n(337), n(338), n(339), n(340), n(342), n(343), n(344), n(345), n(346), n(347), n(348), n(349), n(350), n(351), n(353), n(354), n(355), n(357), n(358), n(359), n(360), n(361), n(362), n(363), n(364), n(365), n(366), n(367), n(368), n(369), n(370), n(371), n(372), n(373), n(374), n(375), n(376), n(377);
			var a = n(39),
				r = n.n(a),
				o = n(63),
				i = n(13),
				c = (n(382), n(0)),
				s = n.n(c),
				l = n(58),
				u = n.n(l),
				d = function(e) {
					if (null != e) {
						var t = window.location.search.indexOf("".concat("vk_platform", "=").concat("mobile_web")) > -1,
							n = window.navigator.userAgent;
						(n.indexOf("iPhone") > -1 || n.indexOf("iPad") > -1) && t && (e.style.overflowY = "scroll", e.style.webkitOverflowScrolling = "touch", document.documentElement.style.maxWidth = "100vw", document.body.style.maxWidth = "100vw", e.style.maxWidth = "100vw")
					}
				};

			function _(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "root",
					n = document.getElementById(t);
				window.reactMounted ? u.a.unmountComponentAtNode(n) : d(n), window.reactMounted = !0, u.a.render(e, n)
			}
			window && window.kek && window.kek('Специальная строка, которую найдут школьники и запостят в свои паблосы типа:"Посмотрите какие мы хакиры умеем исходники смотреть!!!1"');
			var p = n(14),
				m = n.n(p),
				h = n(45),
				f = n(75),
				v = Object(f.a)({
					hashType: "noslash"
				}),
				E = n(17),
				b = n(105),
				g = n(7),
				O = n(8),
				w = n(12),
				y = n(9),
				k = n(11),
				P = n(67),
				M = n(3),
				C = n(5),
				j = (n(421), n(21)),
				D = (n(422), n(211)),
				x = n.n(D),
				T = n(131),
				L = n(141);
			n(434);

			function I(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					t && (a = a.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, a)
				}
				return n
			}
			var R = function(e) {
					function t() {
						var e, n;
						Object(g.a)(this, t);
						for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
						return (n = Object(w.a)(this, (e = Object(y.a)(t)).call.apply(e, [this].concat(r)))).state = function(e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = null != arguments[t] ? arguments[t] : {};
								t % 2 ? I(n, !0).forEach((function(t) {
									Object(i.a)(e, t, n[t])
								})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(n).forEach((function(t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
								}))
							}
							return e
						}({}, Object(L.a)(Object(y.a)(t.prototype), "state", Object(T.a)(n)), {
							scrolled: 0
						}), n
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "componentDidMount",
						value: function() {
							this.waitAnimationFinish(this.el, this.onFadeInEnd)
						}
					}, {
						key: "componentWillMount",
						value: function() {
							var e = window.pageYOffset;
							this.setState({
								scrolled: e
							}), document.querySelector("#root").classList.add("root_blocked_scroll"), document.querySelector("body").classList.add("body_blocked_scroll"), document.querySelector("body").classList.add("body_opened_popup");
							var t = document.querySelector(".Panel");
							t && (t.style.top = "-".concat(e, "px"))
						}
					}, {
						key: "componentWillUnmount",
						value: function() {
							document.querySelector("#root").classList.remove("root_blocked_scroll"), document.querySelector("body").classList.remove("body_blocked_scroll"), document.querySelector("body").classList.remove("body_opened_popup");
							var e = document.querySelector(".Panel");
							e && (e.style.top = "0"), window.scrollTo(0, this.state.scrolled), clearTimeout(this.animationFinishTimeout), window.removeEventListener("touchstart", this.onTouchStart)
						}
					}]), t
				}(j.n),
				A = function(e) {
					function t() {
						var e, n;
						Object(g.a)(this, t);
						for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
						return (n = Object(w.a)(this, (e = Object(y.a)(t)).call.apply(e, [this].concat(r)))).state = {
							rendered: !1
						}, n.timer = null, n
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "componentDidMount",
						value: function() {
							var e = this;
							this.timer = setTimeout((function() {
								e.setState({
									rendered: !0
								}), e.timer = null
							}), 200)
						}
					}, {
						key: "onClose",
						value: function(e) {
							var t = this;
							this.timer || (this.setState({
								rendered: !1
							}), this.timer = setTimeout((function() {
								t.props.onClose(), t.timer = null
							}), 250), e.stopPropagation())
						}
					}, {
						key: "componentWillUnmount",
						value: function() {
							clearTimeout(this.timer)
						}
					}, {
						key: "render",
						value: function() {
							var e = this,
								t = this.props,
								n = t.showCross,
								a = t.children,
								r = s.a.Children.map(a, (function(t) {
									return s.a.cloneElement(t, {
										onClose: function(t) {
											return e.onClose(t)
										}
									})
								}));
							return s.a.createElement(R, {
								v: "bottom",
								onClick: function(t) {
									return e.onClose(t)
								}
							}, s.a.createElement(x.a, {
								transitionName: "PopupAnimation",
								className: "PopupAnimationWrapper",
								transitionEnterTimeout: 200,
								transitionLeaveTimeout: 200
							}, this.state.rendered ? s.a.createElement("div", {
								style: this.props.style || {},
								className: "BottomPopup",
								onClick: function(e) {
									return e.stopPropagation(), !1
								}
							}, s.a.createElement("div", {
								className: "BottomPopup__header"
							}, n ? s.a.createElement("div", {
								className: "BottomPopup__close",
								onClick: function(t) {
									return e.onClose(t)
								}
							}) : null), r, this.props.footer ? s.a.createElement("div", {
								className: "BottomPopup__footer"
							}, this.props.footer) : null) : null))
						}
					}]), t
				}(c.Component);
			var F = Object(E.b)((function(e) {
					return {}
				}), {})(A),
				N = function(e) {
					function t() {
						var e, n;
						Object(g.a)(this, t);
						for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
						return (n = Object(w.a)(this, (e = Object(y.a)(t)).call.apply(e, [this].concat(r)))).state = {
							details: !1
						}, n
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "toggleDetails",
						value: function() {
							this.setState({
								details: !this.state.details
							})
						}
					}, {
						key: "getTextErrorDetails",
						value: function() {
							var e = "",
								t = this.props.error || {};
							if (t.message && (t.message instanceof Object ? (e = JSON.stringify(t.message, null, 2), e += "\n") : (e += t.message || "", e += "\n")), t.code && (e += t.code || "", e += "\n"), t.stack && (e += t.stack, e += "\n"), "" === e) try {
								e = JSON.stringify(t, null, 2)
							} catch (t) {
								e = "Empty text and cant't json stringify"
							}
							return e = window.navigator.userAgent + "\n\n" + e, e = "user_id:  ".concat(m.a.getStartParams().userId, " \n\n").concat(e), Object(C.q)(e)
						}
					}, {
						key: "isNetwork",
						value: function() {
							return (this.props.error || {}).network
						}
					}, {
						key: "getErrorHeader",
						value: function() {
							var e = this.props.error || {};
							return e.code ? e.code : M.a.t("error")
						}
					}, {
						key: "onRetry",
						value: function() {
							var e = this.props.error;
							e.on_retry && e.on_retry(), this.props.onClose()
						}
					}, {
						key: "render",
						value: function() {
							var e = this,
								t = this.state.details,
								n = this.props,
								a = n.h,
								r = n.noDetails,
								o = n.error,
								i = {};
							return a && (i.maxHeight = .8 * a), s.a.createElement("div", {
								className: "ErrorMobile"
							}, s.a.createElement("div", {
								className: "ErrorMobile__body"
							}, this.isNetwork() ? null : s.a.createElement("div", {
								className: "ErrorMobile__sad"
							}), s.a.createElement("div", {
								className: "ErrorMobile__title"
							}, this.isNetwork() ? M.a.t("network") : Object(C.q)(M.a.t("oops")))), t || this.isNetwork() && !this.props.onClose || r ? null : s.a.createElement(j.e, {
								vertical: "bottom"
							}, s.a.createElement("div", {
								className: "ErrorMobile__bottom"
							}, this.isNetwork() ? null : s.a.createElement("div", {
								className: "ErrorMobile__to-details"
							}, s.a.createElement(j.c, {
								stretched: !0,
								size: "l",
								level: "secondary",
								onClick: function() {
									return e.toggleDetails()
								}
							}, M.a.t("error_details"))), this.isNetwork() && this.props.onClose && o.on_retry ? s.a.createElement("div", {
								className: "ErrorMobile__to-details"
							}, s.a.createElement(j.c, {
								stretched: !0,
								size: "l",
								level: "secondary",
								onClick: function() {
									return e.onRetry()
								}
							}, M.a.t("retry"))) : null, this.props.onClose && !o.prevent_close ? s.a.createElement("div", {
								className: "ErrorMobile__close"
							}, s.a.createElement(j.h, {
								onClick: function() {
									return e.props.onClose()
								}
							}, M.a.t("close"))) : null)), !t || this.isNetwork() || r ? null : s.a.createElement(F, {
								showCross: !0,
								onClose: function() {
									return e.toggleDetails()
								}
							}, s.a.createElement("div", {
								className: "ErrorMobile__details"
							}, s.a.createElement("div", {
								className: "ErrorMobile__details-header"
							}, this.getErrorHeader()), s.a.createElement("div", {
								className: "ErrorMobile__details-text",
								style: i
							}, this.getTextErrorDetails()))))
						}
					}]), t
				}(c.Component),
				B = n(103),
				S = n.n(B),
				U = n(102),
				z = n.n(U),
				W = n(139),
				G = n.n(W),
				H = n(140),
				K = n.n(H),
				X = n(104),
				q = n.n(X),
				Y = (n(435), n(87)),
				V = n(37),
				Z = (n(436), n(16)),
				Q = (n(437), function(e) {
					function t() {
						var e, n;
						Object(g.a)(this, t);
						for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
						return (n = Object(w.a)(this, (e = Object(y.a)(t)).call.apply(e, [this].concat(r)))).onClick = function() {
							if (!n.props.disable)
								if (n.props.selected) n.props.selectTool(null);
								else if (n.props.count > 0) n.props.selectTool(n.props.type);
							else {
								var e = new Event("help_tool");
								e.tool = n.props.type, window.dispatchEvent(e), n.props.selectTool(null)
							}
						}, n
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "render",
						value: function() {
							var e = this.props.count;
							return s.a.createElement("div", {
								onClick: this.onClick,
								title: M.a.t("you_found_" + this.props.type + "_description"),
								className: "Tool " + this.props.type + (this.props.selected ? " selected" : "") + (this.props.disable ? " disabled" : "")
							}, this.props.disable || null === e ? null : s.a.createElement("span", {
								className: "d"
							}, s.a.createElement("span", null, this.props.count)))
						}
					}]), t
				}(c.Component));
			var J = Object(E.b)((function(e, t) {
					var n = t.type;
					return {
						selected: e.Game.selectedTool === n,
						count: e.Game[n]
					}
				}), {
					selectTool: Z.o
				})(Q),
				$ = (n(438), function() {}),
				ee = function(e) {
					function t() {
						return Object(g.a)(this, t), Object(w.a)(this, Object(y.a)(t).apply(this, arguments))
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "render",
						value: function() {
							var e = this.props,
								t = e.color,
								n = e.onClick,
								a = "MobileButton";
							return n && (a += " MobileButton--active"), e.disabled && (a += " MobileButton--disabled"), s.a.createElement("button", {
								onClick: n || $,
								className: a
							}, t ? s.a.createElement("span", {
								className: "MobileButton__color",
								style: {
									backgroundColor: t
								}
							}) : null, s.a.createElement("span", {
								className: "MobileButton__text"
							}, this.props.children))
						}
					}]), t
				}(c.Component),
				te = n(81),
				ne = n(212),
				ae = n.n(ne),
				re = n(6),
				oe = function(e) {
					function t() {
						var e, n;
						Object(g.a)(this, t);
						for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
						return (n = Object(w.a)(this, (e = Object(y.a)(t)).call.apply(e, [this].concat(r)))).openPalette = function() {
							n.props.openPalette()
						}, n
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "main",
						value: function() {
							var e = this.props,
								t = e.wait;
							return e.pixel && (t = 0), s.a.createElement(c.Fragment, null, s.a.createElement(J, {
								type: re.c,
								count: 0
							}), s.a.createElement(J, {
								type: re.d,
								count: 0
							}), s.a.createElement(J, {
								type: re.e,
								count: 0
							}), s.a.createElement(ee, {
								onClick: t ? null : this.openPalette,
								disabled: !t,
								color: t ? null : this.props.color
							}, t ? M.a.t("wait", {
								x: Object(C.A)(t)
							}) : M.a.t("change")))
						}
					}, {
						key: "selected",
						value: function() {
							var e = this,
								t = this.props,
								n = t.color,
								a = t.cursorY,
								r = t.cursorX,
								o = t.selectedTool;
							return s.a.createElement(c.Fragment, null, s.a.createElement("div", {
								className: "MobileFooter__color"
							}, o ? s.a.createElement(J, {
								type: o,
								count: 0
							}) : s.a.createElement("div", {
								className: "color" + ("#FFFFFF" === n ? " white" : ""),
								onClick: function() {
									return Object(C.w)(null, "".concat(r, "x").concat(a))
								},
								style: {
									backgroundColor: n
								}
							}, s.a.createElement(ae.a, null)), r, ", ", a), s.a.createElement("div", {
								className: "MobileFooter__choose"
							}, s.a.createElement(te.a, {
								onClick: function() {
									return e.props.dropSelectedPixel()
								},
								level: "secondary"
							}, s.a.createElement("div", {
								className: "MobileFooter__decline"
							})), s.a.createElement(te.a, {
								onClick: function() {
									return e.props.drawPixel()
								}
							}, s.a.createElement("div", {
								className: "MobileFooter__accept"
							}))))
						}
					}, {
						key: "tool",
						value: function() {
							var e = this,
								t = this.props.selectedTool;
							return s.a.createElement(c.Fragment, null, s.a.createElement(J, {
								type: t,
								count: 0
							}), s.a.createElement("div", {
								className: "MobileFooter__status"
							}, s.a.createElement("div", {
								className: "header"
							}, M.a.t("type_" + t)), s.a.createElement("div", {
								className: "description"
							}, Object(C.x)(this.props.timeout))), s.a.createElement(te.a, {
								onClick: function() {
									return e.props.selectTool(null)
								},
								level: "secondary"
							}, s.a.createElement("div", {
								className: "MobileFooter__decline"
							})))
						}
					}, {
						key: "render",
						value: function() {
							var e = this.props,
								t = e.selected,
								n = e.selectedTool;
							return s.a.createElement("div", {
								className: "MobileFooter"
							}, t ? this.selected() : n ? this.tool() : this.main())
						}
					}]), t
				}(c.Component);
			var ie = Object(E.b)((function(e) {
					return {
						color: e.Game.color,
						selected: e.Game.selected,
						cursorX: e.Game.cursorX,
						cursorY: e.Game.cursorY,
						selectedTool: e.Game.selectedTool === re.e ? null : e.Game.selectedTool,
						wait: e.Game.wait,
						pixel: e.Game.selectedTool === re.e,
						timeout: e.Game.usageLost
					}
				}), {
					dropSelectedPixel: Z.c,
					drawPixel: Z.b,
					selectTool: Z.o
				})(oe),
				ce = n(61),
				se = (n(439), function(e) {
					function t() {
						var e, n;
						Object(g.a)(this, t);
						for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
						return (n = Object(w.a)(this, (e = Object(y.a)(t)).call.apply(e, [this].concat(r)))).onChangeColor = function(e) {
							n.props.setColor(e.target.id), n.props.onClose()
						}, n
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "color",
						value: function(e, t) {
							var n = "MobileColorPalette__color";
							return e === this.props.color && (n += " active"), (t + 1) % 5 === 0 && (n += " no-right"), t >= 20 && (n += " no-bottom"), "#FFFFFF" === e && (n += " white"), s.a.createElement("div", {
								key: e,
								onClick: this.onChangeColor,
								id: e,
								style: {
									backgroundColor: e
								},
								className: n
							})
						}
					}, {
						key: "render",
						value: function() {
							var e = this,
								t = Object(C.d)();
							return s.a.createElement("div", {
								className: "MobileColorPalette"
							}, t.map((function(t, n) {
								return e.color(t, n)
							})))
						}
					}]), t
				}(c.Component));
			var le = Object(E.b)((function(e) {
					return {
						color: e.Game.color
					}
				}), {
					setColor: Z.r
				})(se),
				ue = (n(440), function(e) {
					function t() {
						var e, n;
						Object(g.a)(this, t);
						for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
						return (n = Object(w.a)(this, (e = Object(y.a)(t)).call.apply(e, [this].concat(r)))).click = !0, n.up = function(e) {
							if ("touchstart" === e.type) n.click = !1;
							else if (!n.click) return;
							var t = n.props,
								a = t.value,
								r = t.max;
							a > 32 ? n.props.onChange(Math.min(a + 4, r)) : a > 12 ? n.props.onChange(Math.min(a + 2, r)) : n.props.onChange(Math.min(a + 1, r))
						}, n.down = function(e) {
							if ("touchstart" === e.type) n.click = !1;
							else if (!n.click) return;
							var t = n.props,
								a = t.value,
								r = t.min;
							a > 32 ? n.props.onChange(Math.max(a - 4, r)) : a > 12 ? n.props.onChange(Math.max(a - 2, r)) : n.props.onChange(Math.max(a - 1, r))
						}, n
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "render",
						value: function() {
							return s.a.createElement("div", {
								className: "MobileSlider"
							}, s.a.createElement("div", {
								className: "MobileSlider__plus",
								onClick: this.up,
								onTouchStart: this.up
							}), s.a.createElement("div", {
								className: "MobileSlider__sep"
							}), s.a.createElement("div", {
								className: "MobileSlider__minus",
								onClick: this.down,
								onTouchStart: this.down
							}))
						}
					}]), t
				}(c.Component));
			var de = Object(E.b)((function(e) {
					return {}
				}), {})(ue),
				_e = (n(441), function(e) {
					function t() {
						return Object(g.a)(this, t), Object(w.a)(this, Object(y.a)(t).apply(this, arguments))
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "render",
						value: function() {
							var e = this.props,
								t = e.x,
								n = e.y,
								a = e.zoom,
								r = e.color,
								o = e.mobile,
								i = e.showCursor,
								c = e.selectedTool;
							return i || (t = -100), s.a.createElement("div", {
								style: {
									left: t + "px",
									top: n + "px",
									width: a + "px",
									height: a + "px",
									backgroundColor: r
								},
								className: "Cursor " + c + (o ? " mobile" : "") + ("#000000" === r || "#333333" === r ? " black" : "")
							}, a < 5 ? s.a.createElement("div", {
								className: "Cursor__help " + c,
								style: {
									backgroundColor: r
								}
							}) : null)
						}
					}]), t
				}(c.Component));
			var pe = Object(E.b)((function(e, t) {
					var n = t.x,
						a = t.y,
						r = t.zoom,
						o = e.Game.selectedTool;
					return {
						color: e.Game.selectedTool && o !== re.e && o !== re.f ? "transparent" : e.Game.color,
						x: e.Game.cursorX * r + n,
						y: e.Game.cursorY * r + a,
						showCursor: e.Game.showCursor,
						selectedTool: e.Game.selectedTool
					}
				}), {})(_e),
				me = (n(442), function(e) {
					function t() {
						return Object(g.a)(this, t), Object(w.a)(this, Object(y.a)(t).apply(this, arguments))
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "render",
						value: function() {
							var e = this;
							return s.a.createElement("div", {
								className: "MobileDebug"
							}, s.a.createElement("button", {
								onClick: function() {
									return e.props.sendDebugMessage("bomb")
								}
							}, "+ bomb"), s.a.createElement("br", null), s.a.createElement("button", {
								onClick: function() {
									return e.props.sendDebugMessage("pixel")
								}
							}, "+ pixel"), s.a.createElement("br", null), s.a.createElement("button", {
								onClick: function() {
									return e.props.sendDebugMessage("freeze")
								}
							}, "+ freeze"), s.a.createElement("br", null))
						}
					}]), t
				}(c.Component));
			var he = Object(E.b)((function(e) {
					return {}
				}), {
					sendDebugMessage: Z.p
				})(me),
				fe = (n(443), function(e) {
					function t() {
						return Object(g.a)(this, t), Object(w.a)(this, Object(y.a)(t).apply(this, arguments))
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "render",
						value: function() {
							var e = this.props,
								t = e.url,
								n = e.id,
								a = e.photo,
								r = e.name;
							return "0" === n.toString() && (t = void 0, r = M.a.t("free"), a = "https://vk.com/images/camera_100.png"), s.a.createElement("a", {
								target: "_blank",
								rel: "noopener noreferrer",
								href: t,
								className: "MobileTopItem"
							}, s.a.createElement("span", {
								className: "MobileTopItem__place"
							}, this.props.place), s.a.createElement("span", {
								className: "MobileTopItem__image",
								style: {
									backgroundImage: "url(".concat(a, ")")
								}
							}), s.a.createElement("span", null, s.a.createElement("span", {
								className: "MobileTopItem__name"
							}, r), s.a.createElement("span", {
								className: "MobileTopItem__score"
							}, Object(C.t)(this.props.score))))
						}
					}]), t
				}(c.Component));
			var ve = Object(E.b)((function(e) {
					return {}
				}), {})(fe),
				Ee = n(31),
				be = n(52),
				ge = n(28),
				Oe = (n(444), Object(j.s)()),
				we = function(e) {
					function t() {
						var e, n;
						Object(g.a)(this, t);
						for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
						return (n = Object(w.a)(this, (e = Object(y.a)(t)).call.apply(e, [this].concat(r)))).listNode = null, n
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "onChange",
						value: function(e) {
							this.props.setTag(e), this.listNode && (this.listNode.parentNode.parentNode.parentNode.scrollTop = 0)
						}
					}, {
						key: "list",
						value: function() {
							var e = this,
								t = this.props,
								n = t.list,
								a = t.fiend_loading,
								r = t.friend_load_error,
								o = t.friends_empty,
								i = this.props.tag;
							if (i === Ee.b) {
								if (a) return s.a.createElement("div", {
									className: "empty"
								}, s.a.createElement(ge.WaitDots, {
									color: "blue"
								}));
								if (r) return s.a.createElement("div", {
									className: "empty"
								}, s.a.createElement("div", null, "user_reject" === r ? M.a.t("user_reject") : M.a.t("friend_load_error", {
									text: r
								}), s.a.createElement("br", null), s.a.createElement("br", null), s.a.createElement(ge.Button, {
									type: "secondary",
									onClick: function() {
										return e.props.reRequest()
									}
								}, M.a.t("retry"))));
								if (o) return s.a.createElement("div", {
									className: "empty"
								}, s.a.createElement("div", null, M.a.t("no_fiends_in_game"), s.a.createElement("br", null), s.a.createElement("br", null), s.a.createElement(ge.Button, {
									onClick: function() {
										return Object(C.w)()
									}
								}, M.a.t("invite"))))
							}
							return 0 === n.length ? i === Ee.b ? s.a.createElement("div", {
								className: "empty"
							}, M.a.t("no_fiends")) : s.a.createElement("div", {
								className: "empty"
							}, M.a.t("top_not_ready")) : n.map((function(e, t) {
								return s.a.createElement(ve, Object.assign({
									place: t + 1,
									key: t
								}, e))
							}))
						}
					}, {
						key: "me",
						value: function() {
							var e = this.props,
								t = e.me,
								n = e.myGroup,
								a = e.tag;
							return a === Ee.a && t ? s.a.createElement("div", {
								className: "MobileTop__last"
							}, s.a.createElement(ve, Object.assign({
								place: t.place
							}, t))) : a === Ee.c && n ? s.a.createElement("div", {
								className: "MobileTop__last"
							}, s.a.createElement(ve, Object.assign({
								place: n.place
							}, n))) : void 0
						}
					}, {
						key: "render",
						value: function() {
							var e = this;
							return s.a.createElement(j.j, {
								id: "top",
								dynamicContentHeight: !0,
								onClose: this.props.onClose,
								header: s.a.createElement(s.a.Fragment, null, s.a.createElement(j.k, {
									left: Oe === ce.OS.ANDROID && s.a.createElement(j.f, {
										onClick: this.props.onClose
									}, s.a.createElement(S.a, null)),
									right: Oe !== ce.OS.ANDROID && s.a.createElement(j.f, {
										onClick: this.props.onClose
									}, s.a.createElement(z.a, null))
								}, M.a.t("top")), s.a.createElement(j.p, {
									theme: "light"
								}, s.a.createElement(j.q, {
									onClick: function() {
										return e.onChange(Ee.c)
									},
									selected: this.props.tag === Ee.c
								}, M.a.t("groups")), s.a.createElement(j.q, {
									onClick: function() {
										return e.onChange(Ee.b)
									},
									selected: this.props.tag === Ee.b
								}, M.a.t("friends")), s.a.createElement(j.q, {
									onClick: function() {
										return e.onChange(Ee.a)
									},
									selected: this.props.tag === Ee.a
								}, M.a.t("all"))))
							}, s.a.createElement("div", {
								className: "MobileTop"
							}, s.a.createElement("div", {
								ref: function(t) {
									return e.listNode = t
								},
								className: "MobileTop__list"
							}, this.list()), this.me()))
						}
					}]), t
				}(c.Component);
			var ye = Object(E.b)((function(e) {
					var t;
					return {
						tag: e.Rating.tag,
						list: (t = {}, Object(i.a)(t, Ee.c, e.Rating.group), Object(i.a)(t, Ee.a, e.Rating.user), Object(i.a)(t, Ee.b, e.Rating.friends), t)[e.Rating.tag],
						fiend_loading: e.Rating.fiend_loading,
						friend_load_error: e.Rating.friend_load_error,
						friends_empty: 0 === e.Rating.friends.length,
						me: e.Rating.me,
						myGroup: e.Rating.myGroup
					}
				}), {
					setTag: be.d,
					reRequest: be.c
				})(we),
				ke = (n(446), function(e) {
					function t() {
						var e, n;
						Object(g.a)(this, t);
						for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
						return (n = Object(w.a)(this, (e = Object(y.a)(t)).call.apply(e, [this].concat(r)))).state = {
							loading: !1
						}, n.onClick = function() {
							n.setState({
								loading: !0
							}, (function() {
								window.location.reload()
							}))
						}, n
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "render",
						value: function() {
							return s.a.createElement("div", {
								className: "DuplicateConnect"
							}, s.a.createElement("div", null, M.a.t("duplicate_connect"), s.a.createElement("br", null), s.a.createElement("br", null), s.a.createElement("br", null), s.a.createElement(ge.Button, {
								onClick: this.onClick
							}, this.state.loading ? s.a.createElement(ge.WaitDots, null) : M.a.t("reload"))))
						}
					}]), t
				}(c.Component));
			var Pe = Object(E.b)((function(e) {
					return {}
				}), {})(ke),
				Me = n(47),
				Ce = (n(447), n(35)),
				je = "ps";
			var De = function(e) {
					var t = e.x,
						n = e.y;
					return s.a.createElement("div", {
						onClick: function() {
							return function(e, t) {
								var n = new Event("scrollTo");
								n.x = e, n.y = t, window.dispatchEvent(n)
							}(t, n)
						},
						className: "MobileEventView__coords"
					})
				},
				xe = function(e) {
					function t() {
						var e, a;
						Object(g.a)(this, t);
						for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
						return (a = Object(w.a)(this, (e = Object(y.a)(t)).call.apply(e, [this].concat(o)))).event = function(e) {
							var t = e.data,
								r = t.user,
								o = t.cords;
							return e.type === Me.a ? s.a.createElement("div", {
								key: e.id,
								className: "MobileEventView__event"
							}, s.a.createElement("img", {
								alt: r.name,
								src: r.photo,
								className: "MobileEventView__photo"
							}), s.a.createElement("span", {
								className: "MobileEventView__name"
							}, s.a.createElement("a", {
								href: r.url,
								rel: "noopener noreferrer",
								target: "_blank"
							}, r.name.split(" ").shift()), M.a.t("user_bombed_" + (1 === r.sex ? "f" : "m"))), o ? s.a.createElement(De, o) : null) : e.type === Me.f ? s.a.createElement("div", {
								key: e.id,
								className: "MobileEventView__event"
							}, s.a.createElement("img", {
								alt: r.name,
								src: r.photo,
								className: "MobileEventView__photo"
							}), s.a.createElement("span", {
								className: "MobileEventView__name"
							}, s.a.createElement("a", {
								href: r.url,
								rel: "noopener noreferrer",
								target: "_blank"
							}, r.name.split(" ").shift()), M.a.t("user_overdraw_" + (1 === r.sex ? "f" : "m")))) : e.type === Me.c ? s.a.createElement("div", {
								key: e.id,
								className: "MobileEventView__event" + (e.bzz ? " bzz" + e.bzz : "")
							}, s.a.createElement("span", {
								className: "MobileEventView__name padding"
							}, M.a.t("this_dot_frozen"))) : e.type === Me.d ? s.a.createElement("div", {
								key: e.id,
								className: "MobileEventView__event" + (e.bzz ? " bzz" + e.bzz : "")
							}, s.a.createElement("span", {
								className: "MobileEventView__name padding"
							}, M.a.t("you_offline"))) : e.type === Me.b ? s.a.createElement("div", {
								key: e.id,
								className: "MobileEventView__event" + (e.bzz ? " bzz" + e.bzz : "")
							}, s.a.createElement("span", {
								className: "MobileEventView__name padding"
							}, M.a.t("deadline"))) : e.type === Me.e ? s.a.createElement("div", {
								key: e.id,
								className: "MobileEventView__event" + (e.bzz ? " bzz" + e.bzz : "")
							}, s.a.createElement("span", {
								className: "MobileEventView__name padding"
							}, M.a.t("this_same_color"))) : e.type === je ? s.a.createElement("div", {
								key: e.id,
								onClick: function() {
									return a.props.selectTool(null)
								},
								className: "MobileEventView__event"
							}, s.a.createElement("img", {
								alt: "pixel",
								src: n(448),
								className: "MobileEventView__icon"
							}), s.a.createElement("span", {
								className: "MobileEventView__name" + (Ce.a.LOCK_COUNT > a.props.pixelCount ? " padding" : "")
							}, M.a.t("x_pixel_for_y_sex", {
								x: a.props.pixelCount,
								y: a.props.pixelSecond
							})), Ce.a.LOCK_COUNT > a.props.pixelCount ? null : s.a.createElement("div", {
								className: "MobileEventView__close"
							}, s.a.createElement(S.a, null))) : void 0
						}, a
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "render",
						value: function() {
							return s.a.createElement("div", {
								className: "MobileEventView" + (this.props.desktop ? " MobileEventView--desktop" : "")
							}, this.props.list.map(this.event), this.props.speed ? this.event({
								type: je,
								id: "-1",
								data: {}
							}) : null, this.props.pin ? this.event(this.props.pin) : null)
						}
					}]), t
				}(c.Component);
			var Te = Object(E.b)((function(e) {
					return {
						list: e.EventList.list,
						pin: e.EventList.pin,
						speed: e.Game.selectedTool === re.e,
						pixelSecond: e.Game.pixelSecond,
						pixelCount: e.Game.pixelCount
					}
				}), {
					selectTool: Z.o
				})(xe),
				Le = (n(449), n(168)),
				Ie = n.n(Le),
				Re = function(e) {
					function t() {
						return Object(g.a)(this, t), Object(w.a)(this, Object(y.a)(t).apply(this, arguments))
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "render",
						value: function() {
							var e = this,
								t = this.props.deadline;
							return this.props.preview ? this.props.mobile ? s.a.createElement("div", {
								className: "Preview Preview--mobile"
							}, s.a.createElement("div", {
								className: "Preview__inner"
							}, s.a.createElement("div", {
								className: "Preview__svg"
							}, s.a.createElement("svg", {
								width: "58",
								height: "49",
								xmlns: "http://www.w3.org/2000/svg"
							}, s.a.createElement("g", {
								fillRule: "nonzero",
								fill: "none"
							}, s.a.createElement("path", {
								fill: "#FF3347",
								d: "M9 0h15v25H9z"
							}), s.a.createElement("path", {
								fill: "#FF3347",
								d: "M0 8h16v17H0zM34 0h15v25H34z"
							}), s.a.createElement("path", {
								fill: "#FF3347",
								d: "M42 8h16v17H42zM16 8h26v33H16z"
							}), s.a.createElement("path", {
								fill: "#FF3347",
								d: "M8 25h42v9H8zM25 41h8v8h-8z"
							}), s.a.createElement("path", {
								fill: "#FFF",
								d: "M41 8h8v8h-8zM33 16h8v8h-8z"
							})))), s.a.createElement("div", {
								className: "Preview__header"
							}, M.a.t("pixel_battle")), s.a.createElement("div", {
								className: "Preview__description"
							}, Object(C.q)(M.a.t(t ? "deadline" : "description"))), s.a.createElement("div", {
								className: "Preview__buttons"
							}, s.a.createElement(Ie.a, {
								size: "xl",
								onClick: function() {
									return e.props.play(1)
								}
							}, this.props.offline && !t ? s.a.createElement(ge.WaitDots, {
								color: "blue"
							}) : M.a.t("play")), t ? null : s.a.createElement(Ie.a, {
								size: "xl",
								level: "secondary",
								onClick: C.b
							}, M.a.t("install_in_my_group"))))) : s.a.createElement("div", {
								className: "Preview"
							}, s.a.createElement("div", {
								className: "Preview__inner"
							}, s.a.createElement("div", {
								className: "Preview__svg"
							}, s.a.createElement("svg", {
								width: "58",
								height: "49",
								xmlns: "http://www.w3.org/2000/svg"
							}, s.a.createElement("g", {
								fillRule: "nonzero",
								fill: "none"
							}, s.a.createElement("path", {
								fill: "#FF3347",
								d: "M9 0h15v25H9z"
							}), s.a.createElement("path", {
								fill: "#FF3347",
								d: "M0 8h16v17H0zM34 0h15v25H34z"
							}), s.a.createElement("path", {
								fill: "#FF3347",
								d: "M42 8h16v17H42zM16 8h26v33H16z"
							}), s.a.createElement("path", {
								fill: "#FF3347",
								d: "M8 25h42v9H8zM25 41h8v8h-8z"
							}), s.a.createElement("path", {
								fill: "#FFF",
								d: "M41 8h8v8h-8zM33 16h8v8h-8z"
							})))), s.a.createElement("div", {
								className: "Preview__header"
							}, "Pixel battle"), s.a.createElement("div", {
								className: "Preview__description"
							}, Object(C.q)(M.a.t(t ? "deadline" : "description"))), s.a.createElement("div", {
								className: "Preview__buttons"
							}, s.a.createElement(ge.Button, {
								loading: this.props.offline && !t,
								onClick: function() {
									return e.props.play(1)
								}
							}, M.a.t("play")), t ? null : s.a.createElement(ge.Button, {
								type: "secondary",
								onClick: C.b
							}, M.a.t("install_in_my_group"))))) : null
						}
					}]), t
				}(c.Component);
			var Ae = Object(E.b)((function(e) {
				return {
					offline: e.Game.offline,
					deadline: e.Game.deadline,
					preview: e.Game.preview || e.Game.start
				}
			}), {
				play: Z.l
			})(Re);
			n(454);
			var Fe = function(e) {
				function t() {
					return Object(g.a)(this, t), Object(w.a)(this, Object(y.a)(t).apply(this, arguments))
				}
				return Object(k.a)(t, e), Object(O.a)(t, [{
					key: "render",
					value: function() {
						var e, t = this.props,
							n = t.online,
							a = t.offline,
							r = t.desktop;
						return s.a.createElement("div", {
							onDoubleClick: this.props.onDoubleClick ? this.props.onDoubleClick : function() {},
							className: "OnlineCounter" + (r ? " OnlineCounter--desktop" : "")
						}, a ? "Offline" : M.a.t("online", {
							x: (e = n, e < 1e3 ? e : e >= 1e6 ? Math.floor(e / 1e6) + "KK" : e >= 1e3 ? Math.round(e / 1e3 * 100) / 100 + "K" : void 0)
						}))
					}
				}]), t
			}(c.Component);
			var Ne = Object(E.b)((function(e) {
					return {
						offline: e.Game.offline,
						online: e.Game.online
					}
				}), {})(Fe),
				Be = (n(455), function(e) {
					function t(e, n) {
						var a;
						return Object(g.a)(this, t), (a = Object(w.a)(this, Object(y.a)(t).call(this, e, n))).onChange = function(e) {
							a.setState({
								url: e.target.value
							})
						}, a.onEnter = function() {
							a.props.saveGroupChatLink(a.state.url, a.props.onClose)
						}, a.state = {
							url: e.joinChatLink || ""
						}, a
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "render",
						value: function() {
							var e = this.props.joinChatLinkError;
							return s.a.createElement(j.i, {
								onClose: this.props.onClose,
								icon: s.a.createElement(q.a, {
									width: 56,
									height: 56
								}),
								title: M.a.t("do_add_chat"),
								caption: M.a.t("add_chat_description"),
								actions: [{
									title: M.a.t("add_chat"),
									type: "primary",
									action: this.onEnter
								}]
							}, s.a.createElement("br", null), e ? s.a.createElement("div", {
								className: "MobileAddChatCard__error"
							}, e) : null, s.a.createElement(j.g, {
								value: this.state.url,
								status: e ? "error" : "",
								onFocus: function(e) {
									return e.target.select()
								},
								onChange: this.onChange
							}))
						}
					}]), t
				}(c.Component));
			var Se = Object(E.b)((function(e) {
					return {
						joinChatLink: e.Game.joinChatLink,
						joinChatLinkError: e.Game.joinChatLinkError
					}
				}), {
					saveGroupChatLink: Z.n
				})(Be),
				Ue = (n(456), Object(j.s)()),
				ze = "palette",
				We = "top",
				Ge = "tool",
				He = "tool_help",
				Ke = "link";
			var Xe = Object(E.b)((function(e) {
					return {
						joinChatLink: e.Game.joinChatLink
					}
				}), {})((function(e) {
					var t = e.joinChatLink,
						n = e.onContext,
						a = e.onEmptyClick,
						r = "admin" === m.a.getStartParams().viewerGroupRole;
					return t || r ? s.a.createElement("a", {
						href: t,
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: function(e) {
							r && (t ? n(t) : a(), e.preventDefault())
						},
						className: "MobileContainer__button chat"
					}, "\xa0") : null
				})),
				qe = function(e) {
					function t(e, n) {
						var a;
						Object(g.a)(this, t), (a = Object(w.a)(this, Object(y.a)(t).call(this, e, n))).canvas = null, a.ctx = null, a.original = null, a.originalCtx = null, a.x = -1590, a.y = -75, a.catchPos = !1, a.topPadding = 150, a.leftPadding = 140, a.rightPadding = 140, a.bottomPadding = 200, a.w = re.b, a.h = re.a, a.frameW = 825, a.frameH = 650, a.minZoom = 1, a.maxZoom = 50, a.state = {
							color_id: 5,
							zoom: 4,
							grid: !1,
							open_statistic: !1,
							pointX: 0,
							pointY: 0,
							cursor: !1,
							end_alert: !1,
							headerHeight: 0,
							loadedDimensionsChecked: !1,
							activeModal: null,
							tool_card_type: null,
							link: "",
							popout: null
						}, a.scrollTo = function(e) {
							var t = e.x,
								n = e.y,
								r = a.state.zoom;
							a.x = r * t * -1 + a.frameW / 2, a.y = r * n * -1 + a.frameH / 2, a.afterRender()
						}, a.exploreTimer = null, a.onExplore = function() {
							a.canvas && !a.exploreTimer && (a.canvas.classList.add("explore"), a.exploreTimer = setTimeout((function() {
								a.exploreTimer = null, a.canvas.classList.remove("explore")
							}), 150), m.a.tapticNotificationOccurred({
								type: "success"
							}).catch((function() {})))
						}, a.onNewTool = function(e) {
							a.state.activeModal || a.modalPush(Ge, {
								tool_card_type: e.tool
							})
						}, a.helpTool = function(e) {
							a.state.activeModal || a.modalPush(He, {
								tool_card_type: e.tool
							})
						}, a.giftLink = function(e) {
							a.state.activeModal || a.modalPush(Ke, {
								link: e.link
							})
						}, a.ref = function(e) {
							a.canvas = e, a.canvas && !a.init ? (a.init = !0, a.ctx = a.canvas.getContext("2d"), a.ctx.mozImageSmoothingEnabled = !1, a.ctx.webkitImageSmoothingEnabled = !1, a.ctx.msImageSmoothingEnabled = !1, a.ctx.imageSmoothingEnabled = !1, a.ctx.save(), a.canvas.addEventListener("touchstart", (function(e) {
								a.onMouseDown(e)
							}), !1), a.canvas.addEventListener("touchend", (function(e) {
								a.onMouseUp(e)
							}), !1), a.canvas.addEventListener("touchcancel", (function(e) {
								a.onMouseUp(e)
							}), !1), a.canvas.addEventListener("touchmove", (function(e) {
								a.onMove(e)
							}), !1), window.addEventListener("orientationchange", (function() {
								var e = document.getElementById("root");
								e.style.width = "1px", e.style.height = "1px", e.style.overflow = "hidden", a.frameW = window.innerWidth, a.frameH = window.innerHeight, e.style.width = "", e.style.height = "", e.style.overflow = "", a.setState({
									ts: Date.now()
								}), a.setZoomForPoint(a.state.zoom, a.x, a.y)
							})), a.oldDiff = 0, a.canvas.addEventListener("mousewheel", (function(e) {
								e.stopPropagation(), e.preventDefault();
								var t = -1 * e.deltaY / 50 + a.oldDiff,
									n = Math.round(a.state.zoom + t);
								(n = Object(C.c)(a.minZoom, n, a.maxZoom)) !== a.state.zoom ? (a.setZoomForPoint(n, e.clientX, e.clientY), a.oldDiff = 0) : a.oldDiff = t
							})), a.afterRender()) : a.init = !1
						}, a.afterRender = function() {
							a.init && Object(C.p)(a.ctx, a.frameW, a.frameH, a.props.image, Math.round(a.x), Math.round(a.y), a.state.zoom, a.props.channel)
						}, a.onMove = function(e) {
							if (e.preventDefault(), e.stopPropagation(), e.touches) {
								if (a.scale) {
									if (e.touches.length >= 2) {
										var t = a.getDistFromEvent(e),
											n = t / (a.lastDist / a.state.zoom);
										n = Math.min(a.maxZoom, Math.max(a.minZoom, n)), Math.round(n) !== a.state.zoom && (a.setZoomForPoint(n, a.getCenterXFromE(e), a.getCenterYFromE(e)), a.lastDist = t)
									}
									return a.startMoveAt = 0, !0
								}
								e = e.touches[0]
							}
							if (a.catchPos) {
								var r = e.clientX - a.startX,
									o = e.clientY - a.startY;
								if (r !== a.x || o !== a.y) {
									var i = Math.round(a.h * a.state.zoom),
										c = a.w * a.state.zoom,
										s = r + a.startOriginX,
										l = o + a.startOriginY,
										u = a.frameH - (i + l),
										d = a.frameW - (c + s);
									if (u > 0 || l > 0) {
										var _ = l > 0 && (l > a.topPadding && l <= a.y || l < a.topPadding) || l < 0,
											p = u > 0 && (u > a.bottomPadding && l >= a.y || !(u > a.bottomPadding)) || u < 0;
										_ && p ? a.y = l : (u > 0 && u > a.bottomPadding && l < a.y && (a.y = a.frameH - i - a.bottomPadding), l > 0 && l > a.bottomPadding && l > a.y && (a.y = a.topPadding))
									} else a.y = l;
									if (s > 0 || d > 0) {
										var m = s > 0 && (s > a.leftPadding && s <= a.x || s < a.leftPadding);
										m = m || s < 0;
										var h = d > 0 && (d > a.rightPadding && s >= a.x || d < a.rightPadding);
										h = h || d < 0, m && h ? a.x = s : (s > 0 && s > a.leftPadding && s > a.x && (a.x = a.leftPadding), d > 0 && d > a.rightPadding && s < a.x && (a.x = a.frameW - c - a.rightPadding))
									} else a.x = s;
									a.setState({
										x: a.x,
										y: a.y
									}, a.afterRender), a.startMoveAt = Date.now(), a.lockClick = !0
								}
							}
						}, a.onMouseDown = function(e) {
							if (e.changedTouches) {
								var t = e.changedTouches[0];
								a.catchPos = !0, a.startX = t.clientX, a.startY = t.clientY, a.startOriginX = a.x, a.startOriginY = a.y, a.lockClick = !1, e.touches.length >= 2 && (a.scale = !0, a.lastDist = a.getDistFromEvent(e))
							} else a.catchPos = !0, a.startX = e.clientX, a.startY = e.clientY, a.startOriginX = a.x, a.startOriginY = a.y, a.lockClick = !1;
							a.startDragAt = Date.now(), a.startMoveAt = Date.now(), cancelAnimationFrame(a.impulce)
						}, a.onClick = function(e) {
							if (!a.lockClick) {
								var t = a.getPointInOrigin(e);
								a.props.setSelectedPixel(t.cx, t.cy, !0)
							}
						}, a.onMouseUp = function(e) {
							if ((!e.touches || 0 === e.touches.length) && (a.scale = !1, a.catchPos = !1, e.changedTouches && (e = e.changedTouches[0]), a.startDragAt && a.startMoveAt)) {
								var t = e.clientX,
									n = e.clientY,
									r = Date.now() - a.startDragAt;
								if (a.startDragAt = 0, r <= 1) return;
								if (Date.now() - a.startMoveAt >= 50) return;
								var o = (t - a.startX) / r,
									i = (n - a.startY) / r;
								a.impylseX = Math.round(20 * o), a.impylseY = Math.round(20 * i), cancelAnimationFrame(a.impulce), (Math.abs(a.impylseY) > 1 || Math.abs(a.impylseX) > 1) && (a.impulce = requestAnimationFrame((function() {
									return a.inertiaMove()
								})))
							}
						}, a.inertiaMove = function() {
							a.x += a.impylseX, a.y += a.impylseY;
							var e = !1;
							a.x > a.leftPadding && (a.x = a.leftPadding, e = !0), a.x < re.b * a.state.zoom * -1 + a.frameW - a.rightPadding && (a.x = re.b * a.state.zoom * -1 + a.frameW - a.rightPadding, e = !0), a.y > a.topPadding && (a.y = a.topPadding, e = !0), a.y < re.a * a.state.zoom * -1 + a.frameH - a.bottomPadding && (a.y = re.a * a.state.zoom * -1 + a.frameH - a.bottomPadding, e = !0), a.afterRender(), a.setState({
								now: Date.now()
							}), e || (a.impylseY = a.impylseY / 1.1, a.impylseX = a.impylseX / 1.1, a.impylseX = a.impylseX > 0 ? Math.floor(a.impylseX) : Math.ceil(a.impylseX), a.impylseY = a.impylseY > 0 ? Math.floor(a.impylseY) : Math.ceil(a.impylseY), (Math.abs(a.impylseY) > 1 || Math.abs(a.impylseX) > 1) && (cancelAnimationFrame(a.impulce), a.impulce = requestAnimationFrame((function() {
								return a.inertiaMove()
							}))))
						}, a.lock = !1, a.modalBack = function() {
							a.onPopState()
						}, a.modalPush = function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
							if (a.state.activeModal !== e) {
								if (a.lock) return;
								a.lock = !0, setTimeout((function() {
									a.lock = !1
								}), 500);
								try {
									window.history.pushState({
										modal: e
									}, e, "#" + e)
								} catch (n) {
									Object(C.f)(n)
								}
								t ? a.setState(Object.assign({
									activeModal: e
								}, t)) : a.setState({
									activeModal: e
								})
							}
						}, a.onPopState = function() {
							if (null !== a.state.activeModal) {
								if (a.lock) return;
								a.lock = !0, a.setState({
									activeModal: null,
									popout: null
								}), setTimeout((function() {
									a.lock = !1
								}), 500)
							}
						}, a.openPalette = function() {
							a.modalPush(ze)
						}, a.openTop = function(e) {
							e.stopPropagation(), a.modalPush(We)
						}, Object(C.m)() && (a.x = 0, a.y = 0), a.original = document.createElement("canvas"), a.original.width = a.w, a.original.height = a.h, a.originalCtx = a.original.getContext("2d"), window.addEventListener("mouseup", (function(e) {
							return a.onMouseUp(e)
						})), a.frameW = window.innerWidth, a.frameH = window.innerHeight, a.y = -1 * Math.round(Math.random() * (a.h * a.state.zoom - a.frameH)), a.x = -1 * Math.round(Math.random() * (a.w * a.state.zoom - a.frameW)), 0 === t.deviceWidth && (t.deviceWidth = window.innerWidth), 0 === t.deviceHeight && window.innerHeight && (t.deviceHeight = window.innerHeight), a.topPadding = Math.max(window.innerHeight / 2, a.topPadding), a.bottomPadding = Math.max(window.innerHeight / 2, a.bottomPadding);
						var r = window.location.hash.toString().replace("#", "");
						if (r.length >= 3 && r.length <= 8 && -1 !== r.indexOf("x")) {
							var o = r.split("x"),
								i = Object(b.a)(o, 2),
								c = i[0],
								s = i[1];
							if (void 0 !== s) {
								c = Object(C.c)(0, c, re.b), s = Object(C.c)(0, s, re.a);
								var l = c * a.state.zoom;
								a.x = -l + Math.round(a.frameW / 2);
								var u = s * a.state.zoom;
								a.y = -u + Math.round(a.frameH / 2)
							}
						}
						return a
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "componentWillUnmount",
						value: function() {
							window.removeEventListener("popstate", this.onPopState), window.removeEventListener("explore", this.onExplore), window.removeEventListener("new_tool", this.onNewTool), window.removeEventListener("redraw", this.afterRender), window.removeEventListener("scrollTo", this.scrollTo), window.removeEventListener("help_tool", this.helpTool), window.removeEventListener("gift_link", this.giftLink)
						}
					}, {
						key: "componentDidMount",
						value: function() {
							window.addEventListener("popstate", this.onPopState), window.addEventListener("explore", this.onExplore), window.addEventListener("new_tool", this.onNewTool), window.addEventListener("redraw", this.afterRender), window.addEventListener("scrollTo", this.scrollTo), window.addEventListener("help_tool", this.helpTool), window.addEventListener("gift_link", this.giftLink), this.afterRender()
						}
					}, {
						key: "setZoomForPoint",
						value: function(e, t, n) {
							var a = this;
							cancelAnimationFrame(this.impulce);
							var r = (e = Object(C.c)(this.minZoom, Math.round(e), this.maxZoom)) * this.w,
								o = e * this.h,
								i = this.state.zoom * this.w,
								c = this.state.zoom * this.h,
								s = (t - this.x) / (this.w * this.state.zoom),
								l = (n - this.y) / (this.h * this.state.zoom);
							r > i ? this.x -= (r - i) * s : this.x += (i - r) * s, o > c ? this.y -= (o - c) * l : this.y += (c - o) * l, this.setState({
								zoom: e
							}, (function() {
								return a.afterRender()
							}))
						}
					}, {
						key: "getPointInOrigin",
						value: function(e) {
							var t = (e.clientX - this.x) / (this.w * this.state.zoom),
								n = (e.clientY - this.y) / (this.h * this.state.zoom);
							return {
								cx: Math.min(this.w - 1, Math.max(0, Math.round(this.w * t - .5))),
								cy: Math.min(this.h - 1, Math.max(0, Math.round(this.h * n - .5)))
							}
						}
					}, {
						key: "getDistFromEvent",
						value: function(e) {
							return Math.sqrt((e.touches[0].clientX - e.touches[1].clientX) * (e.touches[0].clientX - e.touches[1].clientX) + (e.touches[0].clientY - e.touches[1].clientY) * (e.touches[0].clientY - e.touches[1].clientY))
						}
					}, {
						key: "getCenterXFromE",
						value: function(e) {
							var t = e.touches[0].clientX,
								n = e.touches[1].clientX,
								a = Math.min(t, n);
							return a + (Math.max(t, n) - a) / 2
						}
					}, {
						key: "getCenterYFromE",
						value: function(e) {
							var t = e.touches[0].clientY,
								n = e.touches[1].clientY,
								a = Math.min(t, n);
							return a + (Math.max(t, n) - a) / 2
						}
					}, {
						key: "getCursorX",
						value: function() {
							return this.state.pointX * this.state.zoom + this.x
						}
					}, {
						key: "getCursorY",
						value: function() {
							return this.state.pointY * this.state.zoom + this.y
						}
					}, {
						key: "modal",
						value: function() {
							var e = this;
							return s.a.createElement(j.l, {
								activeModal: this.state.activeModal
							}, s.a.createElement(ye, {
								id: We,
								dynamicContentHeight: !0,
								onClose: this.modalBack
							}), s.a.createElement(j.j, {
								id: ze,
								onClose: this.modalBack,
								header: s.a.createElement(j.k, {
									left: Ue === ce.OS.ANDROID && s.a.createElement(j.f, {
										onClick: this.modalBack
									}, s.a.createElement(S.a, null)),
									right: Ue !== ce.OS.ANDROID && s.a.createElement(j.f, {
										onClick: this.modalBack
									}, s.a.createElement(z.a, null))
								}, M.a.t("select_color"))
							}, s.a.createElement(le, {
								onClose: this.modalBack
							})), s.a.createElement(j.i, {
								id: Ge,
								onClose: this.modalBack,
								icon: s.a.createElement(J, {
									disable: !0,
									type: this.state.tool_card_type
								}),
								title: M.a.t("you_found_" + this.state.tool_card_type),
								caption: M.a.t("you_found_" + this.state.tool_card_type + "_description"),
								actions: [{
									title: M.a.t("next"),
									type: "primary",
									action: function() {
										return e.modalBack()
									}
								}]
							}), s.a.createElement(j.i, {
								id: He,
								onClose: this.modalBack,
								icon: s.a.createElement(J, {
									disable: !0,
									type: this.state.tool_card_type
								}),
								title: M.a.t("it_is_" + this.state.tool_card_type),
								caption: M.a.t("it_is_" + this.state.tool_card_type + "_description"),
								actions: [{
									title: M.a.t("next"),
									type: "primary",
									action: function() {
										return e.modalBack()
									}
								}]
							}), s.a.createElement(j.i, {
								id: Ke,
								onClose: this.modalBack,
								icon: s.a.createElement(G.a, null),
								title: M.a.t("gift"),
								caption: M.a.t("this_is_link_for_gift"),
								actions: [{
									title: M.a.t("send"),
									type: "primary",
									action: function() {
										return Object(C.w)(e.state.link)
									}
								}]
							}, s.a.createElement("br", null), s.a.createElement(j.g, {
								value: this.state.link.replace("https://", ""),
								onFocus: function(e) {
									return e.target.select()
								},
								onChange: function() {}
							})), s.a.createElement(Se, {
								id: "chat_update",
								onClose: this.modalBack
							}))
						}
					}, {
						key: "render",
						value: function() {
							var e = this,
								n = this.props,
								a = n.fatal,
								r = n.location,
								o = n.debug,
								i = n.duplicateConnect;
							if (a) return s.a.createElement(N, {
								error: this.props.fatal,
								onClose: function() {
									return e.props.removeFatalError()
								}
							});
							if (!Object(C.n)()) return s.a.createElement("div", {
								className: "not-supported",
								style: {
									width: t.deviceWidth,
									height: t.deviceHeight
								}
							}, s.a.createElement("div", {
								className: "plak-wrapper"
							}, s.a.createElement("div", {
								className: "plak"
							}), s.a.createElement("div", {
								className: "plak-text"
							}, M.a.t("not_supported"))));
							if (i) return s.a.createElement(Pe, null);
							var c = Y.a.fromLocation(r.pathname, r.state);
							return s.a.createElement(j.o, {
								className: "MobileContainer",
								activeView: c.getViewId()
							}, s.a.createElement(j.r, {
								id: V.d,
								modal: this.modal(),
								popout: this.state.popout,
								activePanel: V.b,
								history: []
							}, s.a.createElement(j.m, {
								id: V.b
							}, s.a.createElement("canvas", {
								onMouseDown: this.onMouseDown,
								onMouseUp: this.onMouseUp,
								onMouseMove: this.onMove,
								onClick: this.onClick,
								width: this.frameW,
								height: this.frameH,
								className: "draw",
								ref: this.ref
							}), s.a.createElement(ie, {
								openPalette: this.openPalette
							}), s.a.createElement("div", {
								className: "MobileContainer__button top",
								onClick: this.openTop
							}), s.a.createElement(Xe, {
								onEmptyClick: function() {
									e.modalPush("chat_update")
								},
								onContext: function(t) {
									window.history.pushState({}, "context", "#context"), e.setState({
										popout: s.a.createElement(j.a, {
											onClose: function() {
												return e.setState({
													popout: null
												})
											}
										}, s.a.createElement(j.b, {
											autoclose: !0,
											before: s.a.createElement(q.a, null)
										}, s.a.createElement("a", {
											href: t,
											target: "_blank",
											className: "MobileContainer__menu-link",
											rel: "noopener noreferrer"
										}, "\xa0"), M.a.t("go_to_chat")), s.a.createElement(j.b, {
											autoclose: !0,
											onClick: function() {
												return e.modalPush("chat_update")
											},
											before: s.a.createElement(K.a, null)
										}, M.a.t("edit")), Ue === ce.OS.IOS && s.a.createElement(j.b, {
											autoclose: !0,
											theme: "cancel"
										}, M.a.t("cancel")))
									})
								}
							}), s.a.createElement(de, {
								onChange: function(t) {
									return e.setZoomForPoint(t, e.frameW / 2, e.frameH / 2)
								},
								value: this.state.zoom,
								min: this.minZoom,
								max: this.maxZoom
							}), s.a.createElement(pe, {
								x: this.x,
								y: this.y,
								mobile: !0,
								zoom: this.state.zoom
							}), o ? s.a.createElement(he, null) : null, s.a.createElement(Te, null), s.a.createElement(Ae, {
								mobile: !0
							}), s.a.createElement(Ne, null))))
						}
					}]), t
				}(c.Component);
			qe.deviceWidth = 0, qe.deviceHeight = 0;
			var Ye = Object(E.b)((function(e) {
					return {
						can_draw: !0,
						fatal: e.FatalErrorModule,
						viewHistory: e.LocationModule.viewHistory,
						viewsPanels: e.LocationModule.viewsPanels,
						image: e.Game.image,
						context: e.Game.context,
						debug: e.Game.debug,
						duplicateConnect: e.Game.duplicateConnect
					}
				}), {
					removeFatalError: P.b,
					setSelectedPixel: Z.A
				})(qe),
				Ve = n(216),
				Ze = n(108),
				Qe = function(e) {
					function t() {
						return Object(g.a)(this, t), Object(w.a)(this, Object(y.a)(t).apply(this, arguments))
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "componentDidMount",
						value: function() {
							t.afterUpdate()
						}
					}, {
						key: "componentDidUpdate",
						value: function() {
							t.afterUpdate()
						}
					}], [{
						key: "afterUpdate",
						value: function() {
							window.onChangeHeight && window.onChangeHeight()
						}
					}]), t
				}(c.Component),
				Je = (n(457), n(1)),
				$e = n.n(Je);
			n(458);

			function et(e) {
				e.stopPropagation()
			}
			var tt = function(e) {
				function t(e) {
					var n;
					Object(g.a)(this, t), (n = Object(w.a)(this, Object(y.a)(t).call(this, e))).state = {
						lastResizedHeight: 0,
						hasPopup: !1
					}, n.onClose = function() {
						n.props.onClose()
					};
					var a = document.querySelector(".PopupDesktop__window");
					return n.initialHeight = document.body.clientHeight, a && a.clientHeight > n.initialHeight && (n.initialHeight = a.clientHeight + 40), n.waitPopup(), n
				}
				return Object(k.a)(t, e), Object(O.a)(t, [{
					key: "waitPopup",
					value: function() {
						var e = this;
						this.popup ? (clearTimeout(this.t), this.setState({
							hasPopup: !0
						})) : this.t = setTimeout((function() {
							e.waitPopup()
						}), 100)
					}
				}, {
					key: "componentDidMount",
					value: function() {
						Object(C.u)(Ht)
					}
				}, {
					key: "componentDidUpdate",
					value: function() {
						this.fixHeight()
					}
				}, {
					key: "fixHeight",
					value: function() {
						if (this.popup) {
							var e = this.popup.clientHeight + 40;
							document.body.clientHeight < this.popup.clientHeight && e !== this.state.lastResizedHeight && (m.a.resizeWindow(Gt, e).then().catch(), this.setState({
								lastResizedHeight: e
							}))
						}
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						clearTimeout(this.t), this.initialHeight && m.a.resizeWindow(Gt, this.initialHeight).then().catch()
					}
				}, {
					key: "render",
					value: function() {
						var e = this,
							t = this.props,
							n = t.header,
							a = t.showCross;
						return s.a.createElement("div", {
							className: "PopupDesktop",
							onClick: this.onClose
						}, s.a.createElement("div", {
							className: "PopupDesktop__window " + (this.props.className || (this.state.hasPopup ? " rendered" : "")),
							ref: function(t) {
								return e.popup = t
							},
							onClick: et
						}, n ? s.a.createElement("div", {
							className: "PopupDesktop__header"
						}, s.a.createElement("div", {
							className: "PopupDesktop__header-text"
						}, n), s.a.createElement("div", {
							onClick: function(t) {
								return e.onClose(t)
							},
							className: "PopupDesktop__close"
						})) : a ? s.a.createElement("button", {
							title: M.a.t("close"),
							onClick: this.onClose,
							className: "PopupDesktop__close PopupDesktop__close--body"
						}) : null, this.props.children, this.props.renderBottom ? s.a.createElement("div", {
							className: "PopupDesktop__bottom"
						}, this.props.renderBottom) : null))
					}
				}]), t
			}(Qe);
			tt.propTypes = {
				onClose: $e.a.func
			};
			var nt = tt,
				at = function(e) {
					function t(e, n) {
						var a;
						return Object(g.a)(this, t), (a = Object(w.a)(this, Object(y.a)(t).call(this, e, n))).state = {
							details: !1
						}, e && e.open && (a.state.details = !0), a
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "componentDidMount",
						value: function() {
							Object(L.a)(Object(y.a)(t.prototype), "componentDidMount", this).call(this), m.a.scroll(0, Ht).then().catch()
						}
					}, {
						key: "toggleDetails",
						value: function() {
							this.setState({
								details: !this.state.details
							})
						}
					}, {
						key: "getTextErrorDetails",
						value: function() {
							var e = "",
								t = this.props.error || {};
							if (t.message && (t.message instanceof Object ? (e = JSON.stringify(t.message, null, 2), e += "\n") : (e += t.message || "", e += "\n")), t.code && (e += t.code || "", e += "\n"), t.stack && (e += t.stack, e += "\n"), "" === e) try {
								e = JSON.stringify(t, null, 2)
							} catch (t) {
								e = "Empty text and cant't json stringify"
							}
							return e = window.navigator.userAgent + "\n\n" + e, e = "user_id:  ".concat(m.a.getStartParams().userId, " \n\n").concat(e), Object(C.q)(e)
						}
					}, {
						key: "isNetwork",
						value: function() {
							return (this.props.error || {}).network
						}
					}, {
						key: "getErrorHeader",
						value: function() {
							var e = this.props.error || {};
							return e.code ? e.code : M.a.t("error")
						}
					}, {
						key: "onRetry",
						value: function() {
							var e = this.props.error;
							e.on_retry && e.on_retry(), this.props.onClose()
						}
					}, {
						key: "render",
						value: function() {
							var e = this,
								t = this.state.details,
								n = this.props.error;
							return s.a.createElement("div", {
								className: "ErrorDesktop",
								style: {
									height: 500
								}
							}, s.a.createElement("div", {
								className: "ErrorDesktop__body"
							}, s.a.createElement("div", {
								className: "ErrorDesktop__sad"
							}), s.a.createElement("div", {
								className: "ErrorDesktop__title"
							}, this.isNetwork() ? M.a.t("network") : Object(C.q)(M.a.t("oops"))), !this.isNetwork() || this.props.onClose ? s.a.createElement("div", {
								className: "ErrorDesktop__bottom"
							}, this.isNetwork() ? null : s.a.createElement("div", {
								className: "ErrorDesktop__to-details"
							}, s.a.createElement(ge.Button, {
								type: "secondary",
								onClick: function() {
									return e.toggleDetails()
								}
							}, M.a.t("error_details"))), this.isNetwork() && this.props.onClose && n.on_retry ? s.a.createElement("div", {
								className: "ErrorDesktop__to-details"
							}, s.a.createElement(ge.Button, {
								type: "secondary",
								onClick: function() {
									return e.onRetry()
								}
							}, M.a.t("retry"))) : null, this.props.onClose && !n.prevent_close ? s.a.createElement("div", {
								className: "ErrorDesktop__close"
							}, s.a.createElement(ge.Link, {
								onClick: function() {
									return e.props.onClose()
								}
							}, M.a.t("close"))) : null, s.a.createElement("div", {
								className: "ErrorDesktop__close"
							}, s.a.createElement(ge.Link, {
								onClick: function() {
									return window.location.reload()
								}
							}, M.a.t("reload")))) : null), t && !this.isNetwork() ? s.a.createElement(nt, {
								onClose: function() {
									return e.toggleDetails()
								},
								showCross: !0,
								header: !1,
								footerRight: null
							}, s.a.createElement("div", {
								className: "ErrorDesktop__details"
							}, s.a.createElement("div", {
								className: "ErrorDesktop__details-header"
							}, this.getErrorHeader()), s.a.createElement("div", {
								className: "ErrorDesktop__details-text"
							}, this.getTextErrorDetails()))) : null)
						}
					}]), t
				}(Qe),
				rt = (n(459), n(460), function(e) {
					function t() {
						return Object(g.a)(this, t), Object(w.a)(this, Object(y.a)(t).apply(this, arguments))
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "render",
						value: function() {
							return s.a.createElement("div", {
								className: "DesktopHeader"
							}, this.props.children)
						}
					}]), t
				}(c.Component));
			var ot = Object(E.b)((function(e) {
					return {}
				}), {})(rt),
				it = (n(461), function(e) {
					function t() {
						var e, n;
						Object(g.a)(this, t);
						for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
						return (n = Object(w.a)(this, (e = Object(y.a)(t)).call.apply(e, [this].concat(r)))).onClick = function() {
							window.dispatchEvent(new Event("open_rating")), n.props.setTag(n.props.tag)
						}, n
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "render",
						value: function() {
							var e = this.props,
								t = e.id,
								n = e.photo,
								a = e.name;
							return "0" === (t || "").toString() && (a = M.a.t("free"), n = "https://vk.com/images/camera_100.png"), s.a.createElement("div", {
								onClick: this.onClick,
								className: "RatingItem" + (null === t ? " null" : "")
							}, s.a.createElement("div", {
								className: "RatingItem__image",
								style: {
									backgroundImage: "url(".concat(n, ")")
								}
							}), s.a.createElement("div", {
								className: "RatingItem__description"
							}, s.a.createElement("div", {
								className: "RatingItem__name"
							}, a), s.a.createElement("div", {
								className: "RatingItem__count"
							}, Object(C.t)(this.props.score))))
						}
					}]), t
				}(c.Component));
			var ct = Object(E.b)((function(e, t) {
					var n = t.index,
						a = t.tag;
					if (a === Ee.c) {
						var r = e.Rating.group;
						if (r[n]) return r[n]
					}
					if (a === Ee.b) {
						var o = e.Rating.friends;
						if (o[n]) return o[n]
					}
					if (a === Ee.a) {
						var i = e.Rating.user;
						if (i[n]) return i[n]
					}
					return {
						id: null,
						photo: "",
						name: "",
						url: "",
						score: ""
					}
				}), {
					setTag: be.d
				})(it),
				st = (n(462), function(e) {
					function t() {
						var e, n;
						Object(g.a)(this, t);
						for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
						return (n = Object(w.a)(this, (e = Object(y.a)(t)).call.apply(e, [this].concat(r)))).state = {
							tab: Ee.c
						}, n.onListClick = function() {
							n.openPopup(n.state.tab)
						}, n.onClickTab = function(e) {
							var t = e.target.id;
							t !== Ee.b && t !== Ee.c || n.setState({
								tab: t
							}), t === Ee.b && n.props.setTag(t), t === Ee.a && n.openPopup(Ee.a)
						}, n
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "openPopup",
						value: function(e) {
							window.dispatchEvent(new Event("open_rating")), this.props.setTag(e)
						}
					}, {
						key: "list",
						value: function() {
							var e = this,
								t = this.state.tab,
								n = this.props,
								a = n.fiend_loading,
								r = n.friend_load_error,
								o = n.friends_empty;
							if (t === Ee.b) {
								if (a) return s.a.createElement("div", {
									className: "RatingPreview__space"
								}, s.a.createElement(ge.WaitDots, {
									color: "blue"
								}));
								if (r) return s.a.createElement("div", {
									className: "RatingPreview__space"
								}, s.a.createElement("div", null, M.a.t("user_reject" === r ? "user_reject" : "friend_load_error", {
									text: r
								}), s.a.createElement("br", null), s.a.createElement("br", null), s.a.createElement(ge.Button, {
									type: "secondary",
									onClick: function() {
										return e.props.reRequest()
									}
								}, M.a.t("retry"))));
								if (o) return s.a.createElement("div", {
									className: "RatingPreview__space"
								}, s.a.createElement("div", null, M.a.t("no_fiends_in_game"), s.a.createElement("br", null), s.a.createElement("br", null), s.a.createElement(ge.Button, {
									onClick: function() {
										return Object(C.w)()
									}
								}, M.a.t("invite"))))
							}
							return s.a.createElement(c.Fragment, null, s.a.createElement(ct, {
								tag: this.state.tab,
								index: 0
							}), s.a.createElement(ct, {
								tag: this.state.tab,
								index: 1
							}), s.a.createElement(ct, {
								tag: this.state.tab,
								index: 2
							}), s.a.createElement(ct, {
								tag: this.state.tab,
								index: 3
							}), s.a.createElement(ct, {
								tag: this.state.tab,
								index: 4
							}))
						}
					}, {
						key: "render",
						value: function() {
							var e = this.state.tab;
							return s.a.createElement("div", {
								className: "RatingPreview"
							}, s.a.createElement("div", {
								className: "RatingPreview__line"
							}, s.a.createElement(ot, null, s.a.createElement("span", {
								className: e === Ee.c ? "black" : "",
								id: Ee.c,
								onClick: this.onClickTab
							}, M.a.t("groups_x")))), s.a.createElement("div", {
								className: "RatingPreview__list"
							}, this.list()))
						}
					}]), t
				}(c.Component));
			var lt = Object(E.b)((function(e) {
					return {
						fiend_loading: e.Rating.fiend_loading,
						friend_load_error: e.Rating.friend_load_error,
						friends_empty: 0 === e.Rating.friends.length
					}
				}), {
					setTag: be.d,
					reRequest: be.c
				})(st),
				ut = (n(463), function(e) {
					function t() {
						return Object(g.a)(this, t), Object(w.a)(this, Object(y.a)(t).apply(this, arguments))
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "render",
						value: function() {
							return s.a.createElement("div", {
								className: "ToolBox"
							}, s.a.createElement(ot, null, M.a.t("tools")), s.a.createElement("div", {
								className: "ToolBox__list"
							}, s.a.createElement(J, {
								type: re.c
							}), s.a.createElement(J, {
								type: re.d
							}), s.a.createElement(J, {
								type: re.e
							})))
						}
					}]), t
				}(c.Component));
			var dt = Object(E.b)((function(e) {
					return {}
				}), {})(ut),
				_t = (n(464), function(e) {
					function t() {
						var e, n;
						Object(g.a)(this, t);
						for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
						return (n = Object(w.a)(this, (e = Object(y.a)(t)).call.apply(e, [this].concat(r)))).onChangeColor = function(e) {
							n.props.setColor(e.target.id)
						}, n
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "color",
						value: function(e, t) {
							var n = "ColorPalette__color";
							return e === this.props.color && (n += " active"), (t + 1) % 5 === 0 && (n += " no-right"), t >= 20 && (n += " no-bottom"), "#FFFFFF" === e && (n += " white"), s.a.createElement("div", {
								key: e,
								onClick: this.onChangeColor,
								id: e,
								style: {
									backgroundColor: e
								},
								className: n
							})
						}
					}, {
						key: "confirm",
						value: function() {
							var e = this,
								t = this.props.selectedTool,
								n = M.a.t("fire");
							return t === re.c && (n = M.a.t("confirm_bomb")), t === re.d && (n = M.a.t("confirm_freeze")), s.a.createElement("div", {
								className: "ColorPalette__confirm"
							}, s.a.createElement(ge.Button, {
								className: "button",
								onClick: function() {
									return e.props.drawPixel()
								}
							}, n), s.a.createElement(ge.Button, {
								onClick: function() {
									return e.props.dropSelectedPixel()
								},
								type: "secondary"
							}, M.a.t("cancel")))
						}
					}, {
						key: "wait",
						value: function() {
							return s.a.createElement("div", {
								className: "ColorPalette__confirm gray"
							}, s.a.createElement("div", null, Object(C.q)(M.a.t("dot_will_alive_after")), s.a.createElement("br", null), Object(C.A)(this.props.wait)))
						}
					}, {
						key: "render",
						value: function() {
							var e = this,
								t = Object(C.d)(),
								n = this.props,
								a = n.selected,
								r = n.selectedTool,
								o = this.props.wait > 0 && r !== re.e,
								i = a && (!o || r);
							return s.a.createElement("div", {
								className: "ColorPalette"
							}, s.a.createElement(ot, null, M.a.t("pixels")), s.a.createElement("div", {
								className: "ColorPalette__list"
							}, t.map((function(t, n) {
								return e.color(t, n)
							})), o ? this.wait() : null, i ? this.confirm() : null))
						}
					}]), t
				}(c.Component));
			var pt = Object(E.b)((function(e) {
					return {
						color: e.Game.color,
						wait: e.Game.wait,
						selected: e.Game.selected,
						selectedTool: e.Game.selectedTool
					}
				}), {
					setColor: Z.r,
					dropSelectedPixel: Z.c,
					drawPixel: Z.b
				})(_t),
				mt = (n(465), n(466), n(467), function(e) {
					function t() {
						return Object(g.a)(this, t), Object(w.a)(this, Object(y.a)(t).apply(this, arguments))
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "render",
						value: function() {
							var e = this,
								t = this.props.checked;
							return s.a.createElement("div", {
								className: "CheckboxER" + (t ? " checked" : ""),
								onClick: function(n) {
									return e.props.onChange(!t)
								}
							}, s.a.createElement("div", {
								className: "CheckboxER__line"
							}), s.a.createElement("div", {
								className: "CheckboxER__dot"
							}))
						}
					}]), t
				}(c.Component)),
				ht = n(86),
				ft = function(e) {
					function t() {
						return Object(g.a)(this, t), Object(w.a)(this, Object(y.a)(t).apply(this, arguments))
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "render",
						value: function() {
							var e = this;
							return this.props.group ? s.a.createElement("div", {
								className: "DesktopLeftFooter"
							}, s.a.createElement("div", {
								className: "flex"
							}, s.a.createElement("span", null, M.a.t("auto_update_cover")), s.a.createElement(mt, {
								checked: this.props.enable,
								onChange: function() {
									return e.props.toggleEnable()
								}
							}))) : s.a.createElement("div", {
								className: "DesktopLeftFooter"
							}, s.a.createElement(ge.Button, {
								onClick: C.b,
								className: "DesktopLeftFooter__button"
							}, M.a.t("add_to_group")))
						}
					}]), t
				}(c.Component);
			var vt = Object(E.b)((function(e) {
					return {
						group: e.Group.group,
						enable: e.Group.enable
					}
				}), {
					toggleEnable: ht.d
				})(ft),
				Et = function(e) {
					function t() {
						return Object(g.a)(this, t), Object(w.a)(this, Object(y.a)(t).apply(this, arguments))
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "render",
						value: function() {
							return s.a.createElement("div", {
								className: "LeftPanel"
							}, s.a.createElement(lt, null), s.a.createElement(dt, null), s.a.createElement(pt, {
								onRedraw: this.props.onRedraw
							}), s.a.createElement(vt, null))
						}
					}]), t
				}(c.Component);
			var bt = Object(E.b)((function(e) {
					return {}
				}), {})(Et),
				gt = (n(468), function(e) {
					function t(e) {
						var n;
						return Object(g.a)(this, t), (n = Object(w.a)(this, Object(y.a)(t).call(this, e))).root = null, n.dot = null, n.onMouseUp = function() {
							window.removeEventListener("mousemove", n.onMouseMove), window.removeEventListener("touchmove", n.onMouseMove)
						}, n.onMouseMove = function(e) {
							if (e.stopPropagation(), e.preventDefault(), e.changedTouches) {
								var t = e.changedTouches[0];
								n.setXForValue(t.clientX)
							} else n.setXForValue(e.clientX)
						}, n.timer = null, n.prevent = !1, n.onMouseUpF = function(e) {
							n.prevent && (e.preventDefault(), e.stopPropagation()), n.prevent = !1, clearTimeout(n.timer), clearInterval(n.timer)
						}, n.up = function() {
							var e = n.props,
								t = e.value,
								a = e.max;
							console.log(t), t > 32 ? n.props.onChange(Math.min(t + 4, a)) : t > 12 ? n.props.onChange(Math.min(t + 2, a)) : n.props.onChange(Math.min(t + 1, a))
						}, n.down = function() {
							var e = n.props,
								t = e.value,
								a = e.min;
							t > 32 ? n.props.onChange(Math.max(t - 4, a)) : t > 12 ? n.props.onChange(Math.max(t - 2, a)) : n.props.onChange(Math.max(t - 1, a))
						}, window.addEventListener("mouseup", n.onMouseUp), window.addEventListener("touchend", n.onMouseUp), window.addEventListener("touchcancel", n.onMouseUp), n
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "componentWillUnmount",
						value: function() {
							window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("touchend", this.onMouseUp), window.removeEventListener("touchcancel", this.onMouseUp)
						}
					}, {
						key: "onMouseDown",
						value: function() {
							window.addEventListener("mousemove", this.onMouseMove), window.addEventListener("touchmove", this.onMouseMove)
						}
					}, {
						key: "componentDidMount",
						value: function() {
							var e = this;
							this.dot.addEventListener("touchstart", (function(t) {
								e.onMouseDown(t)
							}))
						}
					}, {
						key: "onClick",
						value: function(e) {
							this.setXForValue(e.clientX)
						}
					}, {
						key: "setXForValue",
						value: function(e) {
							if (this.root) {
								var t = e - this.getPosition(this.root).x,
									n = this.root.clientWidth,
									a = Math.min(1, Math.max(0, t / n)),
									r = this.props,
									o = r.max,
									i = r.min,
									c = (o - i) * a + i;
								this.props.onChange(c)
							}
						}
					}, {
						key: "getPosition",
						value: function(e) {
							for (var t = 0, n = 0; e;) {
								if ("BODY" === e.tagName) {
									var a = e.scrollLeft || document.documentElement.scrollLeft,
										r = e.scrollTop || document.documentElement.scrollTop;
									t += e.offsetLeft - a + e.clientLeft, n += e.offsetTop - r + e.clientTop
								} else t += e.offsetLeft - e.scrollLeft + e.clientLeft, n += e.offsetTop - e.scrollTop + e.clientTop;
								e = e.offsetParent
							}
							return {
								x: t,
								y: n
							}
						}
					}, {
						key: "onMouseDownF",
						value: function(e) {
							var t = this;
							this.timer = setTimeout((function() {
								t.timer = setInterval(e, 200), t.prevent = !0
							}), 500)
						}
					}, {
						key: "render",
						value: function() {
							var e = this,
								t = this.props,
								n = t.value,
								a = t.max,
								r = t.min,
								o = Math.abs(a - r),
								i = Math.min(100, Math.max(0, n / o * 100));
							return s.a.createElement("div", {
								className: "DesktopSlider"
							}, s.a.createElement("div", {
								className: "DesktopSlider__minus",
								onMouseDown: function() {
									return e.onMouseDownF(e.down)
								},
								onMouseUp: this.onMouseUpF,
								onClick: this.down
							}, s.a.createElement("svg", {
								width: "14",
								height: "3",
								xmlns: "http://www.w3.org/2000/svg"
							}, s.a.createElement("path", {
								d: "M12.667.75h-11a.917.917 0 0 0 0 1.833h11a.917.917 0 1 0 0-1.833z",
								fillRule: "nonzero"
							}))), s.a.createElement("div", {
								className: "DesktopSlider__box"
							}, s.a.createElement("div", {
								className: "DesktopSlider__inner",
								onClick: function(t) {
									return e.onClick(t)
								},
								ref: function(t) {
									return e.root = t
								}
							}, s.a.createElement("div", {
								className: "DesktopSlider__line"
							}), s.a.createElement("div", {
								style: {
									width: i + "%"
								},
								className: "DesktopSlider__blue"
							}), s.a.createElement("div", {
								style: {
									left: i + "%"
								},
								onMouseDown: function(t) {
									return e.onMouseDown(t)
								},
								ref: function(t) {
									return e.dot = t
								},
								className: "DesktopSlider__dot"
							}))), s.a.createElement("div", {
								className: "DesktopSlider__plus",
								onMouseDown: function() {
									return e.onMouseDownF(e.up)
								},
								onMouseUp: this.onMouseUpF,
								onClick: this.up
							}, s.a.createElement("svg", {
								width: "13",
								height: "13",
								xmlns: "http://www.w3.org/2000/svg"
							}, s.a.createElement("path", {
								d: "M7.333 5.5h4.584a.917.917 0 0 1 0 1.833H7.333v4.584a.917.917 0 1 1-1.833 0V7.333H.917a.917.917 0 1 1 0-1.833H5.5V.917a.917.917 0 1 1 1.833 0V5.5z",
								fillRule: "nonzero"
							}))))
						}
					}]), t
				}(c.Component));
			var Ot = Object(E.b)((function(e) {
					return {}
				}), {})(gt),
				wt = (n(469), function(e) {
					function t() {
						return Object(g.a)(this, t), Object(w.a)(this, Object(y.a)(t).apply(this, arguments))
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "render",
						value: function() {
							var e = "admin" === m.a.getStartParams().viewerGroupRole,
								t = this.props.joinChatLink;
							return t ? s.a.createElement("div", {
								className: "DesktopExLink"
							}, s.a.createElement("a", {
								href: t,
								target: "_blank",
								className: "DesktopExLink__link"
							}, s.a.createElement("span", {
								className: "icon"
							}, s.a.createElement("svg", {
								width: "20",
								height: "18",
								xmlns: "http://www.w3.org/2000/svg"
							}, s.a.createElement("g", {
								fill: "none",
								fillRule: "evenodd"
							}, s.a.createElement("path", {
								opacity: ".04",
								d: "M-1-2h22v22H-1z"
							}), s.a.createElement("path", {
								d: "M6.07 14.685a.825.825 0 0 1 .918-.237c.94.352 1.96.537 3.012.537 4.127 0 7.425-2.828 7.425-6.247 0-3.42-3.298-6.246-7.425-6.246S2.575 5.319 2.575 8.738c0 1.176.388 2.305 1.113 3.287a.825.825 0 0 1 .161.493c-.003.819-.345 1.997-1.021 3.59 1.516-.17 2.586-.653 3.242-1.423zm-3.963 3.129a1.166 1.166 0 0 1-1.103-1.657c.706-1.563 1.097-2.716 1.179-3.402C1.366 11.552.925 10.174.925 8.738.925 4.346 5.014.842 10 .842c4.986 0 9.075 3.504 9.075 7.896 0 4.392-4.089 7.897-9.075 7.897-1.06 0-2.097-.159-3.073-.464-1.109 1.023-2.728 1.56-4.82 1.643z",
								fill: "#528BCC",
								fillRule: "nonzero"
							})))), M.a.t("go_to_chat")), e ? s.a.createElement("div", {
								onClick: function() {
									return window.dispatchEvent(new Event("open_chat_settings"))
								},
								className: "DesktopExLink__button"
							}, s.a.createElement(K.a, {
								width: 19,
								height: 19
							})) : null) : e ? s.a.createElement("div", {
								className: "DesktopExLink"
							}, s.a.createElement("div", {
								onClick: function() {
									return window.dispatchEvent(new Event("open_chat_settings"))
								},
								className: "DesktopExLink__link"
							}, s.a.createElement("span", {
								className: "icon"
							}, s.a.createElement("svg", {
								width: "20",
								height: "18",
								xmlns: "http://www.w3.org/2000/svg"
							}, s.a.createElement("g", {
								fill: "none",
								fillRule: "evenodd"
							}, s.a.createElement("path", {
								opacity: ".04",
								d: "M-1-2h22v22H-1z"
							}), s.a.createElement("path", {
								d: "M6.07 14.685a.825.825 0 0 1 .918-.237c.94.352 1.96.537 3.012.537 4.127 0 7.425-2.828 7.425-6.247 0-3.42-3.298-6.246-7.425-6.246S2.575 5.319 2.575 8.738c0 1.176.388 2.305 1.113 3.287a.825.825 0 0 1 .161.493c-.003.819-.345 1.997-1.021 3.59 1.516-.17 2.586-.653 3.242-1.423zm-3.963 3.129a1.166 1.166 0 0 1-1.103-1.657c.706-1.563 1.097-2.716 1.179-3.402C1.366 11.552.925 10.174.925 8.738.925 4.346 5.014.842 10 .842c4.986 0 9.075 3.504 9.075 7.896 0 4.392-4.089 7.897-9.075 7.897-1.06 0-2.097-.159-3.073-.464-1.109 1.023-2.728 1.56-4.82 1.643z",
								fill: "#528BCC",
								fillRule: "nonzero"
							})))), M.a.t("add_chat"))) : null
						}
					}]), t
				}(c.Component));
			var yt = Object(E.b)((function(e) {
					return {
						joinChatLink: e.Game.joinChatLink
					}
				}), {})(wt),
				kt = (n(470), function(e) {
					function t() {
						return Object(g.a)(this, t), Object(w.a)(this, Object(y.a)(t).apply(this, arguments))
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "render",
						value: function() {
							var e = this.props,
								t = e.x,
								n = e.y;
							return s.a.createElement("div", {
								onClick: function() {
									return Object(C.w)(null, t + "x" + n)
								},
								title: M.a.t("cursor_title"),
								className: "DesktopCursor__cords"
							}, t, ",", n)
						}
					}]), t
				}(c.Component));
			var Pt = Object(E.b)((function(e) {
					return {
						x: e.Game.cursorX,
						y: e.Game.cursorY
					}
				}), {})(kt),
				Mt = (n(471), n(472), function(e) {
					function t() {
						return Object(g.a)(this, t), Object(w.a)(this, Object(y.a)(t).apply(this, arguments))
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "onChoose",
						value: function(e) {
							this.props.activePage !== e && this.props.setPage(e)
						}
					}, {
						key: "buildMenuItem",
						value: function(e, t, n) {
							var a = this,
								r = ["item"];
							return n && r.push("active"), r = r.join(" "), s.a.createElement("div", {
								className: r,
								key: t,
								onClick: function() {
									a.onChoose(e)
								}
							}, s.a.createElement("span", null, this.props.lang(e)))
						}
					}, {
						key: "render",
						value: function() {
							var e = this,
								t = this.props.activePage,
								n = this.props.left.map((function(n, a) {
									return e.buildMenuItem(n, a, t === n)
								})),
								a = this.props.right.map((function(n, a) {
									return e.buildMenuItem(n, a, t === n)
								}));
							return s.a.createElement("div", {
								className: "Menu"
							}, s.a.createElement("div", {
								className: "Menu__splitter"
							}, s.a.createElement("div", {
								className: "left"
							}, n), s.a.createElement("div", {
								className: "right"
							}, a)))
						}
					}]), t
				}(c.Component));

			function Ct(e) {
				return {
					backgroundImage: "url(".concat(e, ")")
				}
			}
			Mt.defaultProps = {
				left: [],
				right: [],
				setPage: function() {},
				activePage: null,
				lang: function(e) {
					return e
				}
			};
			var jt = function(e) {
				function t() {
					var e, n;
					Object(g.a)(this, t);
					for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
					return (n = Object(w.a)(this, (e = Object(y.a)(t)).call.apply(e, [this].concat(r)))).setPage = function(e) {
						n.props.setTag(e)
					}, n.item = function(e, t) {
						var n = e.id,
							a = e.photo,
							r = e.name,
							o = e.url;
						return "0" === (n || "").toString() && (r = M.a.t("free"), o = void 0, a = "https://vk.com/images/camera_200.png"), s.a.createElement("a", {
							href: o,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "DesktopTopList__item",
							key: t
						}, s.a.createElement("div", {
							className: "DesktopTopList__place"
						}, t + 1), s.a.createElement("div", {
							className: "DesktopTopList__photo",
							style: Ct(a)
						}), s.a.createElement("div", {
							className: "DesktopTopList__name"
						}, r), s.a.createElement("div", {
							className: "DesktopTopList__score"
						}, Object(C.t)(e.score)))
					}, n
				}
				return Object(k.a)(t, e), Object(O.a)(t, [{
					key: "list",
					value: function() {
						var e = this,
							t = this.props.list;
						if (0 === t.length) {
							if (this.props.tag === Ee.b) {
								var n = this.props.friend_load_error;
								return this.props.friend_load_error ? s.a.createElement("div", {
									className: "DesktopTopList__empty"
								}, s.a.createElement("div", null, M.a.t("user_reject" === n ? "user_reject" : "friend_load_error", {
									text: n
								}), s.a.createElement("br", null), s.a.createElement("br", null), s.a.createElement(ge.Button, {
									type: "secondary",
									onClick: function() {
										return e.props.reRequest()
									}
								}, M.a.t("retry")))) : s.a.createElement("div", {
									className: "DesktopTopList__empty"
								}, M.a.t("no_fiends"))
							}
							return s.a.createElement("div", {
								className: "DesktopTopList__empty"
							}, M.a.t("top_not_ready"))
						}
						return t.map(this.item)
					}
				}, {
					key: "render",
					value: function() {
						var e = this.props.tag;
						return s.a.createElement("div", {
							className: "DesktopTopList"
						}, s.a.createElement("div", {
							className: "DesktopTopList__header"
						}, M.a.t("top")), s.a.createElement(Mt, {
							left: [Ee.c, Ee.b, Ee.a],
							setPage: this.setPage,
							lang: function(e) {
								return M.a.t("top_menu_item_".concat(e))
							},
							activePage: e
						}), s.a.createElement("div", {
							className: "DesktopTopList__list"
						}, this.list()))
					}
				}]), t
			}(c.Component);
			var Dt = Object(E.b)((function(e) {
					var t;
					return {
						tag: e.Rating.tag,
						list: (t = {}, Object(i.a)(t, Ee.c, e.Rating.group), Object(i.a)(t, Ee.a, e.Rating.user), Object(i.a)(t, Ee.b, e.Rating.friends), t)[e.Rating.tag],
						friend_load_error: e.Rating.friend_load_error
					}
				}), {
					setTag: be.d,
					reRequest: be.c
				})(jt),
				xt = (n(473), "MODAL_TOOL"),
				Tt = "MODAL_HELP_TOOL",
				Lt = "MODAL_TOP",
				It = "MODAL_GIFT",
				Rt = "MODAL_GIFT_LINK",
				At = "MODAL_CHAT_SETTINGS";

			function Ft(e) {
				e.stopPropagation()
			}

			function Nt(e) {
				var t = e.onClick;
				return s.a.createElement("div", {
					onClick: t,
					className: "DesktopModalRoot__close"
				}, s.a.createElement("svg", {
					width: "12",
					height: "12",
					xmlns: "http://www.w3.org/2000/svg"
				}, s.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd",
					opacity: ".5"
				}, s.a.createElement("path", {
					d: "M-6-6h24v24H-6z"
				}), s.a.createElement("path", {
					d: "M1 1l10 10M11 1L1 11",
					stroke: "#828A99",
					strokeWidth: "2",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				}))))
			}
			var Bt = function(e) {
				function t(e, n) {
					var a;
					return Object(g.a)(this, t), (a = Object(w.a)(this, Object(y.a)(t).call(this, e, n))).state = {
						activeModal: null,
						tool: null,
						url: ""
					}, a.openChatSettings = function() {
						a.modalPush(At, {
							url: a.props.joinChatLink
						})
					}, a.giftLink = function(e) {
						a.modalPush(Rt, {
							link: e.link
						})
					}, a.createGift = function(e) {
						a.modalPush(It, {
							tool: e.tool
						})
					}, a.openTop = function() {
						a.modalPush(Lt)
					}, a.newTool = function(e) {
						var t = e.tool;
						a.modalPush(xt, {
							tool: t
						})
					}, a.helpTool = function(e) {
						var t = e.tool;
						a.modalPush(Tt, {
							tool: t
						})
					}, a.modalBack = function() {
						a.setState({
							activeModal: null
						});
						try {
							window.history.back()
						} catch (e) {
							Object(C.f)(e)
						}
					}, a.modalPush = function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
						if (a.state.activeModal) t ? a.setState(Object.assign({
							activeModal: e
						}, t)) : a.setState({
							activeModal: e
						});
						else {
							try {
								window.history.pushState({
									modal: e
								}, e, "#" + e)
							} catch (n) {
								Object(C.f)(n)
							}
							t ? a.setState(Object.assign({
								activeModal: e
							}, t)) : a.setState({
								activeModal: e
							})
						}
					}, a.onPopState = function(e) {
						a.setState({
							activeModal: null
						})
					}, a.new = function() {
						var e = a.state.tool;
						return s.a.createElement("div", {
							className: "DesktopModalRoot__center"
						}, s.a.createElement("div", {
							className: "DesktopModalRoot__icon"
						}, s.a.createElement(J, {
							disable: !0,
							type: e
						})), s.a.createElement("div", {
							className: "DesktopModalRoot__header"
						}, M.a.t("you_found_" + e)), s.a.createElement("div", {
							className: "DesktopModalRoot__description"
						}, M.a.t("you_found_" + e + "_description")), s.a.createElement(ge.Button, {
							onClick: a.modalBack
						}, M.a.t("next")))
					}, a.help = function() {
						var e = a.state.tool;
						return s.a.createElement("div", {
							className: "DesktopModalRoot__center"
						}, s.a.createElement("div", {
							className: "DesktopModalRoot__icon"
						}, s.a.createElement(J, {
							disable: !0,
							type: e
						})), s.a.createElement("div", {
							className: "DesktopModalRoot__header"
						}, M.a.t("it_is_" + e)), s.a.createElement("div", {
							className: "DesktopModalRoot__description"
						}, M.a.t("it_is_" + e + "_description")), s.a.createElement(ge.Button, {
							onClick: a.modalBack
						}, M.a.t("next")))
					}, a.top = function() {
						return s.a.createElement(Dt, null)
					}, a.gift = function() {
						var e = a.state.tool;
						return s.a.createElement("div", {
							className: "DesktopModalRoot__center"
						}, s.a.createElement("div", {
							className: "DesktopModalRoot__icon"
						}, s.a.createElement(J, {
							disable: !0,
							type: e
						})), s.a.createElement("div", {
							className: "DesktopModalRoot__header"
						}, M.a.t("send_gift_" + e)), s.a.createElement("div", {
							className: "DesktopModalRoot__description"
						}, M.a.t("send_gift_description")), s.a.createElement(ge.Button, {
							onClick: function() {
								a.modalBack(), a.props.channel.sendDebug(e.substr(0, 1))
							}
						}, M.a.t("create_link")))
					}, a.giftLinkView = function() {
						return s.a.createElement("div", {
							className: "DesktopModalRoot__center"
						}, s.a.createElement("div", {
							className: "DesktopModalRoot__icon"
						}, s.a.createElement(G.a, null)), s.a.createElement("div", {
							className: "DesktopModalRoot__header"
						}, M.a.t("gift")), s.a.createElement("div", {
							className: "DesktopModalRoot__description"
						}, M.a.t("this_is_link_for_gift")), s.a.createElement(ge.Input, {
							value: a.state.link.replace("https://", ""),
							onFocus: function(e) {
								return e.target.select()
							},
							onChange: function() {}
						}), s.a.createElement("br", null), s.a.createElement(ge.Button, {
							onClick: function() {
								return Object(C.w)(a.state.link)
							}
						}, M.a.t("send")))
					}, a.chatSettings = function() {
						return s.a.createElement("div", {
							className: "DesktopModalRoot__center"
						}, s.a.createElement("div", {
							className: "DesktopModalRoot__icon"
						}, s.a.createElement(q.a, {
							width: 56,
							height: 56
						})), s.a.createElement("div", {
							className: "DesktopModalRoot__header"
						}, M.a.t("do_add_chat")), s.a.createElement("div", {
							className: "DesktopModalRoot__description"
						}, M.a.t("add_chat_description")), a.props.joinChatLinkError ? s.a.createElement("div", {
							className: "DesktopModalRoot__error"
						}, a.props.joinChatLinkError) : null, s.a.createElement(ge.Input, {
							value: a.state.url,
							onFocus: function(e) {
								return e.target.select()
							},
							onChange: function(e) {
								return a.setState({
									url: e.target.value
								})
							}
						}), s.a.createElement("br", null), s.a.createElement(ge.Button, {
							className: "right-padding",
							onClick: function() {
								var e = a.state.url;
								a.props.saveGroupChatLink(e, a.modalBack)
							}
						}, M.a.t("add_chat")), s.a.createElement(ge.Button, {
							type: "secondary",
							onClick: a.modalBack
						}, M.a.t("cancel")))
					}, a.state.url = a.props.joinChatLink || "", a
				}
				return Object(k.a)(t, e), Object(O.a)(t, [{
					key: "componentWillMount",
					value: function() {
						window.addEventListener("popstate", this.onPopState), window.addEventListener("new_tool", this.newTool), window.addEventListener("help_tool", this.helpTool), window.addEventListener("open_rating", this.openTop), window.addEventListener("create_gift", this.createGift), window.addEventListener("gift_link", this.giftLink), window.addEventListener("open_chat_settings", this.openChatSettings)
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						window.removeEventListener("popstate", this.onPopState), window.removeEventListener("new_tool", this.newTool), window.removeEventListener("help_tool", this.helpTool), window.removeEventListener("open_rating", this.openTop), window.removeEventListener("create_gift", this.createGift), window.removeEventListener("gift_link", this.giftLink), window.removeEventListener("open_chat_settings", this.openChatSettings)
					}
				}, {
					key: "content",
					value: function() {
						var e, t = (e = {}, Object(i.a)(e, xt, this.new), Object(i.a)(e, Tt, this.help), Object(i.a)(e, Lt, this.top), Object(i.a)(e, It, this.gift), Object(i.a)(e, Rt, this.giftLinkView), Object(i.a)(e, At, this.chatSettings), e);
						if (t[this.state.activeModal]) return t[this.state.activeModal]()
					}
				}, {
					key: "render",
					value: function() {
						return null === this.state.activeModal ? null : s.a.createElement("div", {
							onClick: this.modalBack,
							className: "DesktopModalRoot"
						}, s.a.createElement("div", {
							className: "DesktopModalRoot__window",
							onClick: Ft
						}, s.a.createElement(Nt, {
							onClick: this.modalBack
						}), this.content()))
					}
				}]), t
			}(c.Component);
			var St = Object(E.b)((function(e) {
					return {
						channel: e.Game.channel,
						joinChatLink: e.Game.joinChatLink,
						joinChatLinkError: e.Game.joinChatLinkError
					}
				}), {
					saveGroupChatLink: Z.n
				})(Bt),
				Ut = (n(474), n(475), function(e) {
					function t() {
						var e, n;
						Object(g.a)(this, t);
						for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o];
						return (n = Object(w.a)(this, (e = Object(y.a)(t)).call.apply(e, [this].concat(r)))).onClick = function() {
							n.props.selectTool(null)
						}, n
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "render",
						value: function() {
							return this.props.tool ? s.a.createElement("div", {
								className: "ToolNotify"
							}, s.a.createElement("div", {
								className: "ToolNotify__top"
							}, s.a.createElement("div", {
								className: "left"
							}, s.a.createElement(J, {
								disable: !0,
								type: this.props.tool
							})), s.a.createElement("div", {
								className: "right"
							}, s.a.createElement("div", {
								className: "header"
							}, M.a.t("type_" + this.props.tool)), s.a.createElement("div", {
								className: "description"
							}, M.a.t("it_is_".concat(this.props.tool, "_description"))))), s.a.createElement("div", {
								className: "ToolNotify__hr"
							}), s.a.createElement("div", {
								className: "ToolNotify__footer"
							}, s.a.createElement("div", {
								className: "ToolNotify__red"
							}, Object(C.x)(this.props.timeout)), s.a.createElement(ge.Button, {
								type: "secondary",
								onClick: this.onClick
							}, M.a.t("cancel")))) : null
						}
					}]), t
				}(c.Component));
			var zt = Object(E.b)((function(e) {
				return {
					tool: e.Game.selectedTool,
					timeout: e.Game.usageLost
				}
			}), {
				selectTool: Z.o
			})(Ut);

			function Wt() {
				document.documentElement.requestFullscreen && (document.fullscreenElement ? document.exitFullscreen && document.exitFullscreen() : document.documentElement.requestFullscreen())
			}
			var Gt = 660,
				Ht = 1500,
				Kt = function(e) {
					function t(e, n) {
						var a;
						Object(g.a)(this, t), (a = Object(w.a)(this, Object(y.a)(t).call(this, e, n))).canvas = null, a.ctx = null, a.x = 0, a.y = 0, a.mousePressed = !1, a.w = re.b, a.h = re.a, a.frameW = 1e3, a.frameH = 692, a.original = null, a.topPadding = 250, a.leftPadding = 100, a.rightPadding = 300, a.bottomPadding = 250, a.minZoom = 1, a.maxZoom = 50, a.state = {
							zoom: 10,
							zoomR: 10,
							pointX: 0,
							pointY: 0
						}, a.onMouseDown = function(e) {
							a.mousePressed = !0, a.startX = e.clientX, a.startY = e.clientY, a.startOriginX = a.x, a.startOriginY = a.y, a.lockClick = !1, a.startDragAt = Date.now(), a.startMoveAt = Date.now(), a.props.root ? a.catchDraw = e.shiftKey : a.catchDraw = !1, cancelAnimationFrame(a.impulce)
						}, a.onMouseUp = function(e) {
							if (a.mousePressed = !1, a.lastPointClickX = null, a.lastPointClickY = null, a.catchDraw = !1, a.startDragAt && a.startMoveAt) {
								var t = e.clientX,
									n = e.clientY,
									r = Date.now() - a.startDragAt;
								if (a.startDragAt = 0, r <= 1) return;
								if (Date.now() - a.startMoveAt >= 50) return;
								var o = (t - a.startX) / r,
									i = (n - a.startY) / r;
								a.impylseX = Math.round(20 * o), a.impylseY = Math.round(20 * i), cancelAnimationFrame(a.impulce), (Math.abs(a.impylseY) > 1 || Math.abs(a.impylseX) > 1) && (a.impulce = requestAnimationFrame((function() {
									return a.inertiaMove()
								})))
							}
						}, a.inertiaMove = function() {
							a.x += a.impylseX, a.y += a.impylseY;
							var e = !1;
							a.x > a.leftPadding && (a.x = a.leftPadding, e = !0), a.x < re.b * a.state.zoom * -1 + a.frameW - a.rightPadding && (a.x = re.b * a.state.zoom * -1 + a.frameW - a.rightPadding, e = !0), a.y > a.topPadding && (a.y = a.topPadding, e = !0), a.y < re.a * a.state.zoom * -1 + a.frameH - a.bottomPadding && (a.y = re.a * a.state.zoom * -1 + a.frameH - a.bottomPadding, e = !0), a.afterRender(), a.setState({
								now: Date.now()
							}), e || (a.impylseY = a.impylseY / 1.1, a.impylseX = a.impylseX / 1.1, a.impylseX = a.impylseX > 0 ? Math.floor(a.impylseX) : Math.ceil(a.impylseX), a.impylseY = a.impylseY > 0 ? Math.floor(a.impylseY) : Math.ceil(a.impylseY), (Math.abs(a.impylseY) > 1 || Math.abs(a.impylseX) > 1) && (cancelAnimationFrame(a.impulce), a.impulce = requestAnimationFrame((function() {
								return a.inertiaMove()
							}))))
						}, a.onMouseMove = function(e) {
							var t = a.getPointInOrigin(e);
							if (a.mousePressed) {
								if (a.catchDraw) {
									if (null === a.lastPointClickX || null === a.lastPointClickY) return a.props.setSelectedPixel(t.cx, t.cy, !0), a.lastPointClickX = t.cx, a.lastPointClickY = t.cy, void(a.lockClick = !0);
									if (Math.abs(a.lastPointClickX - t.cx) <= 1 || Math.abs(a.lastPointClickY - t.cy) <= 1) return a.lastPointClickX === t.cx && a.lastPointClickY === t.cy || (a.props.setSelectedPixel(t.cx, t.cy, !0), a.lastPointClickX = t.cx, a.lastPointClickY = t.cy), void(a.lockClick = !0);
									a.startMoveAt = 0
								}
								var n = e.clientX - a.startX,
									r = e.clientY - a.startY;
								if (n !== a.x || r !== a.y) {
									var o = a.h * a.state.zoom,
										i = a.w * a.state.zoom,
										c = n + a.startOriginX,
										s = r + a.startOriginY,
										l = a.frameH - (o + s),
										u = a.frameW - (i + c);
									if (l > 0 || s > 0) {
										var d = s > 0 && (s > a.topPadding && s <= a.y || s < a.topPadding) || s < 0,
											_ = l > 0 && (l > a.bottomPadding && s >= a.y || !(l > a.bottomPadding)) || l < 0;
										d && _ ? a.y = s : (l > 0 && l > a.bottomPadding && s < a.y && (a.y = a.frameH - o - a.bottomPadding), s > 0 && s > a.bottomPadding && s > a.y && (a.y = a.topPadding))
									} else a.y = s;
									if (c > 0 || u > 0) {
										var p = c > 0 && (c > a.leftPadding && c <= a.x || c < a.leftPadding);
										p = p || c < 0;
										var m = u > 0 && (u > a.rightPadding && c >= a.x || u < a.rightPadding);
										m = m || u < 0, p && m ? a.x = c : (c > 0 && c > a.leftPadding && c > a.x && (a.x = a.leftPadding), u > 0 && u > a.rightPadding && c < a.x && (a.x = a.frameW - i - a.rightPadding))
									} else a.x = c;
									Object(C.a)(e.clientX - a.startX) + Object(C.a)(e.clientY - a.startY) > 10 && (a.lockClick = !0), a.setState({
										x: a.x,
										y: a.y
									}), a.startMoveAt = Date.now()
								}
							} else a.props.setCursorPos(t.cx, t.cy, !0)
						}, a.onClick = function(e) {
							if (!a.lockClick) {
								var t = a.getPointInOrigin(e);
								a.props.setSelectedPixel(t.cx, t.cy, !0)
							}
						}, a.catchHref = function(e) {
							a.canvas !== e && (a.canvas = e, a.canvas ? (a.ctx = a.canvas.getContext("2d"), a.ctx.mozImageSmoothingEnabled = !1, a.ctx.webkitImageSmoothingEnabled = !1, a.ctx.msImageSmoothingEnabled = !1, a.ctx.imageSmoothingEnabled = !1, a.ctx.fillStyle = "#BCBCBC", a.ctx.save(), a.afterRender(), a.canvas.addEventListener("mousewheel", (function(e) {
								e.stopPropagation(), e.preventDefault();
								var t = -1 * e.deltaY / 50,
									n = a.state.zoomR + t;
								(n = Object(C.c)(a.minZoom, n, a.maxZoom)) !== a.state.zoomR && (a.setZoomForPoint(n, e.clientX, e.clientY), cancelAnimationFrame(a.impulce))
							}))) : a.ctx = null)
						}, a.afterRender = function() {
							a.ctx && Object(C.p)(a.ctx, a.frameW, a.frameH, a.props.image, Math.round(a.x), Math.round(a.y), a.state.zoom, a.props.channel)
						}, a.fullScreenChange = function() {
							a.frameW = window.innerWidth, a.frameH = window.innerHeight, a.setState({
								null: 1
							}, (function() {
								requestAnimationFrame((function() {
									a.setState({
										null: 0
									})
								}))
							}))
						}, a.scrollTo = function(e) {
							var t = e.x,
								n = e.y,
								r = a.state.zoom;
							a.x = r * t * -1 + a.frameW / 2, a.y = r * n * -1 + a.frameH / 2, a.afterRender()
						}, a.exploreTimer = null, a.onExplore = function() {
							a.canvas && !a.exploreTimer && (a.canvas.classList.add("explore"), a.exploreTimer = setTimeout((function() {
								a.exploreTimer = null, a.canvas.classList.remove("explore")
							}), 150))
						}, a.killTime = null, a.y = -1 * Math.round(Math.random() * (a.h * a.state.zoom - a.frameH)), a.x = -1 * Math.round(Math.random() * (a.w * a.state.zoom - a.frameW)), e.view && (a.state.zoom = 1, a.x = 0, a.y = 0, a.leftPadding = 1e4, a.rightPadding = 1e4, a.topPadding = 1e4, a.bottomPadding = 1e4);
						var r = window.location.hash.toString().replace("#", "");
						if (r.length >= 3 && r.length <= 8 && -1 !== r.indexOf("x")) {
							var o = r.split("x"),
								i = Object(b.a)(o, 2),
								c = i[0],
								s = i[1];
							if (void 0 !== s) {
								c = Object(C.c)(0, c, re.b), s = Object(C.c)(0, s, re.a);
								var l = c * a.state.zoom;
								a.x = -l + Math.round((a.frameW - 220) / 2);
								var u = s * a.state.zoom;
								a.y = -u + Math.round(a.frameH / 2)
							}
						}
						return a.frameW = window.innerWidth, a.frameH = window.innerHeight, a
					}
					return Object(k.a)(t, e), Object(O.a)(t, [{
						key: "getPointInOrigin",
						value: function(e) {
							var t = (e.clientX - this.x) / (this.w * this.state.zoom),
								n = (e.clientY - this.y) / (this.h * this.state.zoom);
							return {
								cx: Math.min(this.w - 1, Math.max(0, Math.round(this.w * t - .5))),
								cy: Math.min(this.h - 1, Math.max(0, Math.round(this.h * n - .5)))
							}
						}
					}, {
						key: "setZoomForPoint",
						value: function(e, t, n) {
							var a = Math.round(e),
								r = a * this.w,
								o = a * this.h,
								i = this.state.zoom * this.w,
								c = this.state.zoom * this.h,
								s = (t - this.x) / (this.w * this.state.zoom),
								l = (n - this.y) / (this.h * this.state.zoom);
							r > i ? this.x -= (r - i) * s : this.x += (i - r) * s, o > c ? this.y -= (o - c) * l : this.y += (c - o) * l, this.setState({
								zoom: a,
								zoomR: e
							})
						}
					}, {
						key: "componentDidMount",
						value: function() {
							this.afterRender(), window.addEventListener("mouseup", this.onMouseUp), window.addEventListener("redraw", this.afterRender), window.addEventListener("explore", this.onExplore), window.addEventListener("scrollTo", this.scrollTo), window.addEventListener("fullscreenchange", this.fullScreenChange), window.addEventListener("resize", this.fullScreenChange)
						}
					}, {
						key: "componentWillUnmount",
						value: function() {
							window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("redraw", this.afterRender), window.removeEventListener("explore", this.onExplore), window.removeEventListener("scrollTo", this.scrollTo), window.removeEventListener("fullscreenchange", this.fullScreenChange), window.removeEventListener("resize", this.fullScreenChange)
						}
					}, {
						key: "componentDidUpdate",
						value: function() {
							this.afterRender()
						}
					}, {
						key: "render",
						value: function() {
							var e = this,
								t = this.props.fatal;
							if (t) {
								if (!this.props.view) return s.a.createElement(at, {
									open: !!this.props.view,
									error: t,
									onClose: function() {
										return e.props.removeFatalError()
									}
								});
								clearTimeout(this.killTime), this.killTime = setTimeout((function() {
									window.location.reload()
								}), 3e4)
							} else clearTimeout(this.killTime);
							return this.state.null ? s.a.createElement("div", null) : this.props.duplicateConnect ? s.a.createElement(Pe, null) : s.a.createElement("div", {
								className: "DesktopContainer" + (this.props.view ? " view" : "")
							}, s.a.createElement("canvas", {
								onMouseDown: this.onMouseDown,
								onMouseUp: this.onMouseUp,
								onMouseMove: this.onMouseMove,
								onClick: this.onClick,
								width: this.frameW,
								height: this.frameH,
								className: "drawer",
								ref: this.catchHref
							}), this.props.view ? null : s.a.createElement(bt, {
								onRedraw: function() {
									return e.afterRender()
								}
							}), this.props.view ? null : s.a.createElement(Ot, {
								value: this.state.zoom,
								min: this.minZoom,
								max: this.maxZoom,
								onChange: function(t) {
									return e.setZoomForPoint(t, e.frameW / 2, e.frameH / 2)
								}
							}), this.props.view ? null : s.a.createElement(yt, null), this.props.view ? null : s.a.createElement(Pt, null), this.props.view ? null : s.a.createElement(pe, {
								x: this.x,
								y: this.y,
								zoom: this.state.zoom
							}), this.props.view ? null : s.a.createElement(St, null), this.props.view ? null : s.a.createElement(Te, {
								desktop: !0
							}), this.props.view ? null : s.a.createElement(Ne, {
								onDoubleClick: Wt,
								desktop: !0
							}), this.props.view ? null : s.a.createElement(Ae, null), s.a.createElement(zt, null))
						}
					}]), t
				}(c.Component);
			var Xt = Object(E.b)((function(e) {
					return {
						image: e.Game.image,
						context: e.Game.context,
						fatal: e.FatalErrorModule,
						debug: e.Game.debug,
						root: e.Game.root,
						duplicateConnect: e.Game.duplicateConnect
					}
				}), {
					removeFatalError: P.b,
					setCursorPos: Z.s,
					setSelectedPixel: Z.A
				})(Kt),
				qt = n(138),
				Yt = n(479),
				Vt = n(57),
				Zt = n(478);

			function Qt(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					t && (a = a.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, a)
				}
				return n
			}
			n.d(t, "replacePage", (function() {
				return $t
			})), Object(C.m)() || Math.random() > .9 && (Yt.a({
				dsn: "https://073acd88ba9647898c78501cce55751f@sentry.w5.vkforms.ru/34",
				release: "2.0.0@master-5e79cc0"
			}), Vt.d({
				email: "id".concat(m.a.getStartParams().userId, "@vk.com")
			}), m.a.getClientVersion().then((function(e) {
				var t = e.platform,
					n = e.version;
				Vt.c((function(e) {
					e.setExtra("client_platform", t || "unknown"), e.setExtra("client_version", n || "unknown")
				}))
			})).catch((function() {})), m.a.addLogCallback((function(e) {
				Vt.a({
					category: "bridge",
					message: e,
					level: Zt.a.Info
				})
			})));
			var Jt = Object(j.s)();

			function $t(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
				if (Y.a.fromPageId(e, t).isPopup()) {
					var a = Y.a.fromLocation(v.location.pathname);
					t.pageId && (a.pageId = t.pageId, delete t.pageId), t = function(e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = null != arguments[t] ? arguments[t] : {};
							t % 2 ? Qt(n, !0).forEach((function(t) {
								Object(i.a)(e, t, n[t])
							})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qt(n).forEach((function(t) {
								Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
							}))
						}
						return e
					}({}, t, {
						previousRoute: a
					})
				}
				v.replace({
					pathname: Object(Ve.c)(e, t),
					state: t,
					search: n
				})
			}
			"scrollRestoration" in v && (v.scrollRestoration = "manual"), Object(C.o)(-1 !== window.location.hash.toString().indexOf("ui=0")), m.a.init().catch((function() {})), Jt === ce.OS.IOS && m.a.setViewSettings("dark").catch((function() {})), m.a.subscribeEvent("VKWebAppViewRestore", (function() {
				h.a.dispatch(Object(Me.h)()), h.a.dispatch(Object(Me.o)()), h.a.dispatch(Object(Z.m)())
			}));
			var en = m.a.getStartParams();
			window._hsMobileUI = en.isMobile();
			var tn = new qt.a(h.a, m.a.getStartParams().userId, m.a.getStartParams().groupId);
			tn.onOnlineCallback = function() {
				h.a.dispatch(Object(Z.q)(tn)), h.a.dispatch(Object(be.b)()), h.a.dispatch(Object(Z.D)())
			}, tn.start().catch((function(e) {
				return h.a.dispatch(Object(P.c)(e))
			})), h.a.dispatch(Object(Z.r)(Object(C.d)()[Object(C.s)(Object(C.d)().length - 1)])), -1 === window.location.hash.toString().indexOf("show-start-screen") && Object(C.l)().then((function(e) {
				e && h.a.dispatch(Object(Z.l)())
			})), window.uc = tn, -1 !== window.location.hash.toString().indexOf("open-console") && function() {
				var e = document.createElement("script");
				e.src = "//cdn.jsdelivr.net/npm/eruda", document.body.appendChild(e), e.onload = function() {
					window.eruda.init()
				}
			}(), -1 !== window.location.hash.toString().indexOf("emulate-game-end") && setTimeout((function() {
				h.a.dispatch(Object(Z.t)(-1))
			}), 5e3), h.a.dispatch(Object(Z.k)()), M.a.init(en.getLangCode()).then((function() {
				v.listen((function(e, t) {
					h.a.dispatch(Object(Ze.c)(e.pathname, t, e.state))
				})), h.a.dispatch(Object(Ze.c)(v.location.pathname, Ze.a, v.location.state, !0)), Object(ht.b)() && h.a.dispatch(Object(ht.c)())
			})).then(Object(o.a)(r.a.mark((function e() {
				var t;
				return r.a.wrap((function(e) {
					for (;;) switch (e.prev = e.next) {
						case 0:
							t = 0;
						case 1:
							if (!(window.innerHeight <= 0 && t++ < 100)) {
								e.next = 6;
								break
							}
							return e.next = 4, Object(C.e)(50);
						case 4:
							e.next = 1;
							break;
						case 6:
						case "end":
							return e.stop()
					}
				}), e)
			})))).then((function() {
				Object(C.o)() ? _(s.a.createElement(E.a, {
					store: h.a
				}, s.a.createElement(j.d, {
					isWebView: !!Object(C.m)() || void 0
				}, s.a.createElement(Ve.b, {
					history: v
				}, s.a.createElement(Ve.a, {
					component: function(e) {
						return s.a.createElement(Xt, Object.assign({
							view: !0,
							channel: tn
						}, e))
					}
				}))))) : _(s.a.createElement(E.a, {
					store: h.a
				}, s.a.createElement(j.d, {
					isWebView: !!Object(C.m)() || void 0
				}, s.a.createElement(Ve.b, {
					history: v
				}, s.a.createElement(Ve.a, {
					component: function(e) {
						return en.isMobile() ? s.a.createElement(Ye, Object.assign({
							channel: tn
						}, e)) : s.a.createElement(Xt, Object.assign({
							channel: tn
						}, e))
					}
				})))))
			})).catch((function(e) {
				_(s.a.createElement(N, {
					error: e
				}))
			}))
		},
		269: function(e, t, n) {
			e.exports = n(162)
		},
		3: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var a = n(7),
				r = n(8),
				o = n(169),
				i = n(129),
				c = function() {
					function e() {
						Object(a.a)(this, e)
					}
					return Object(r.a)(e, null, [{
						key: "init",
						value: function(t) {
							return new Promise((function(a, r) {
								-1 === ["en", "ua", "ru", "by"].indexOf(t) && (t = "ru");
								var o = {
									ru: Object(i.default)()
								};
								e.lang = t, o.hasOwnProperty(t) ? e.initI18n(t, o).then(a).catch(r) : n(417)("./" + t).then((function(n) {
									"ua" === t && (t = "uk"), o[t] = n.default(), e.initI18n(t, o).then(a).catch(r)
								})).catch(r)
							}))
						}
					}, {
						key: "initI18n",
						value: function(t, n) {
							return new Promise((function(a, r) {
								try {
									o.a.init({
										lng: t,
										resources: n,
										fallbackLng: "ru"
									}, (function(n) {
										n ? r(n) : (e.lang = t, a())
									}))
								} catch (i) {
									r(i)
								}
							}))
						}
					}, {
						key: "t",
						value: function(e, t) {
							return o.a.t(e, t)
						}
					}]), e
				}();
			c.lang = "ru"
		},
		31: function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			var a = "group",
				r = "user",
				o = "all"
		},
		35: function(e, t, n) {
			"use strict";
			var a = n(7),
				r = n(8),
				o = n(6),
				i = function() {
					function e(t, n, r, o, i, c) {
						Object(a.a)(this, e), this.x = parseInt(t, 10), this.y = parseInt(n, 10), this.colorId = parseInt(r, 10), this.flag = parseInt(c, 10) || 0, this.userId = parseInt(o, 10), this.groupId = parseInt(i, 10), this.ts = Date.now()
					}
					return Object(r.a)(e, [{
						key: "isValidRange",
						value: function() {
							return this.x >= 0 && this.x < e.MAX_WIDTH && this.y >= 0 && this.y < e.MAX_HEIGHT && this.colorId >= e.MIN_COLOR_ID && this.colorId < e.MAX_COLOR_ID
						}
					}, {
						key: "isValid",
						value: function() {
							return this.isValidRange()
						}
					}, {
						key: "hasFlag",
						value: function(e) {
							return this.flag === e
						}
					}, {
						key: "pack",
						value: function() {
							var t = this.colorId + this.flag * e.MAX_COLOR_ID;
							return this.x + this.y * e.MAX_WIDTH + e.SIZE * t
						}
					}], [{
						key: "unpack",
						value: function(t) {
							var n = Math.floor(t / e.SIZE),
								a = (t -= n * e.SIZE) % e.MAX_WIDTH;
							return {
								x: a,
								y: (t - a) / e.MAX_WIDTH,
								color: n % e.MAX_COLOR_ID,
								flag: Math.floor(n / e.MAX_COLOR_ID)
							}
						}
					}]), e
				}();
			i.MAX_WIDTH = o.b, i.MAX_HEIGHT = o.a, i.MAX_COLOR_ID = 25, i.MIN_COLOR_ID = 0, i.SIZE = i.MAX_WIDTH * i.MAX_HEIGHT, i.BOMB = 1, i.FREZE = 2, i.PIXEL = 3, i.FREZE_CENTER = 4, i.RELOAD_CHAT = 5, i.BOMB_CENTER = 7, i.PIXEL_START = 8, i.FLAG_PIXEL = 9, i.FREEZE_TIME = 3e4, i.EXPLORE_COLOR = 4, i.createExplode = function(e, t, n) {
				return [new i(e, t, 11, n.id, n.groupId, i.BOMB), new i(e, t + 1, 16, n.id, n.groupId, i.BOMB), new i(e, t - 1, 16, n.id, n.groupId, i.BOMB), new i(e + 1, t, 16, n.id, n.groupId, i.BOMB), new i(e + 1, t + 1, 15, n.id, n.groupId, i.BOMB), new i(e + 1, t - 1, 15, n.id, n.groupId, i.BOMB), new i(e - 1, t, 16, n.id, n.groupId, i.BOMB), new i(e - 1, t + 1, 15, n.id, n.groupId, i.BOMB), new i(e - 1, t - 1, 15, n.id, n.groupId, i.BOMB), new i(e + 2, t, 15, n.id, n.groupId, i.BOMB), new i(e - 2, t, 15, n.id, n.groupId, i.BOMB), new i(e, t + 2, 15, n.id, n.groupId, i.BOMB), new i(e, t - 2, 15, n.id, n.groupId, i.BOMB)].filter((function(e) {
					return e.isValid()
				}))
			}, i.createFreeze = function(e, t, n) {
				return [new i(e, t, i.EXPLORE_COLOR, n.id, n.groupId, i.FREZE), new i(e, t + 1, i.EXPLORE_COLOR, n.id, n.groupId, i.FREZE), new i(e, t - 1, i.EXPLORE_COLOR, n.id, n.groupId, i.FREZE), new i(e + 1, t, i.EXPLORE_COLOR, n.id, n.groupId, i.FREZE), new i(e + 1, t + 1, i.EXPLORE_COLOR, n.id, n.groupId, i.FREZE), new i(e + 1, t - 1, i.EXPLORE_COLOR, n.id, n.groupId, i.FREZE), new i(e - 1, t, i.EXPLORE_COLOR, n.id, n.groupId, i.FREZE), new i(e - 1, t + 1, i.EXPLORE_COLOR, n.id, n.groupId, i.FREZE), new i(e - 1, t - 1, i.EXPLORE_COLOR, n.id, n.groupId, i.FREZE), new i(e + 2, t, i.EXPLORE_COLOR, n.id, n.groupId, i.FREZE), new i(e - 2, t, i.EXPLORE_COLOR, n.id, n.groupId, i.FREZE), new i(e, t + 2, i.EXPLORE_COLOR, n.id, n.groupId, i.FREZE), new i(e, t - 2, i.EXPLORE_COLOR, n.id, n.groupId, i.FREZE)].filter((function(e) {
					return e.isValid()
				}))
			}, i.LOCK_TIME = 15e3, i.LOCK_COUNT = 30;
			var c = new i(10, 20, 15, 0, 0, 4),
				s = c.pack(),
				l = i.unpack(s),
				u = l.x,
				d = l.y,
				_ = l.color,
				p = l.flag;
			console.assert(u === c.x, "Unexpect x", [u, c.x, s]), console.assert(d === c.y, "Unexpect y", [d, c.y, s]), console.assert(_ === c.colorId, "Unexpect color", [_, c.colorId, s]), console.assert(p === c.flag, "Unexpect flag", [p, c.flag, s]), t.a = i
		},
		37: function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return _
			}));
			var a, r = n(13),
				o = n(56),
				i = n(14),
				c = n.n(i),
				s = n(137),
				l = "root_main",
				u = "view_main",
				d = "panel_main",
				_ = "/",
				p = (a = {}, Object(r.a)(a, _, new o.a), Object(r.a)(a, "/:entityId([0-9]+)", new o.a("panel_entity", u)), Object(r.a)(a, "/:entityId([0-9]+)/popup", new o.a("panel_entity", u, l, !0)), Object(r.a)(a, "/page_2_1", new o.a("panel_2", "view_2")), Object(r.a)(a, "/page_2_2", new o.a("panel_2_2", "view_2")), Object(r.a)(a, "/page_3_1", new o.a("panel_3", "view_3")), Object(r.a)(a, "/page_3_2", new o.a("panel_3_2", "view_3")), a);
			c.a.getStartParams().isMobile() || (p["/:entityId([0-9]+)/popup"] = new s.a(!0)), t.e = p
		},
		382: function(e, t, n) {},
		417: function(e, t, n) {
			var a = {
				"./by": [217, 0],
				"./by.js": [217, 0],
				"./en": [218, 1],
				"./en.js": [218, 1],
				"./ru": [129],
				"./ru.js": [129],
				"./ua": [219, 2],
				"./ua.js": [219, 2]
			};

			function r(e) {
				if (!n.o(a, e)) return Promise.resolve().then((function() {
					var t = new Error("Cannot find module '" + e + "'");
					throw t.code = "MODULE_NOT_FOUND", t
				}));
				var t = a[e],
					r = t[0];
				return Promise.all(t.slice(1).map(n.e)).then((function() {
					return n(r)
				}))
			}
			r.keys = function() {
				return Object.keys(a)
			}, r.id = 417, e.exports = r
		},
		421: function(e, t, n) {},
		422: function(e, t, n) {},
		434: function(e, t, n) {},
		436: function(e, t, n) {},
		437: function(e, t, n) {},
		438: function(e, t, n) {},
		439: function(e, t, n) {},
		440: function(e, t, n) {},
		441: function(e, t, n) {},
		442: function(e, t, n) {},
		443: function(e, t, n) {},
		444: function(e, t, n) {},
		446: function(e, t, n) {},
		447: function(e, t, n) {},
		448: function(e, t) {
			e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAyCAMAAAAHpFkRAAAC9FBMVEUAAAAiXMfOfiDZnjj8twDtlhH+pA/4pgL+ogHSjyTzlQAAE//qpQD/rwL/qAD8nQL9qwL8ngT8tQD/oACGhlcPerj/sAD9lwP/kwD+jgD9lgL+qgH5nw/8pAH7mAP8lwLorQ32lgamiEqggUjmix//zRz/0Bb/qwD/nQD+iQD+tQ7+pwv/nwD8pBL/ogD+ngD/rgb+pQD4oQL8ngH8pQD/oQD2mAf9qAb7tAL9rwL+nAT3lg74mwrzkgr6rADxpgf0kwz2jAXuqgrmqw3NhyX3lQj/ogD3tQXuhwvPlSv4lQjMmyjykwnHhyr8ngTcnjXymBfdjBv3lwlAUJHVgAD9jwD+yS/+vB38nQz/owD9rRj9kQH+swv6oBL7mQX4sBT+mQL8ygLyugn2jQL4mg39sQLziQD/wgH5mxPrvhDxpxv+nATyhgT7lQDsohvxqhnylgbzrQbpmxHgkBbspxzjhhL2lQnqph3wlA/1sgPmmw/epjDqph3SpTjrgAf9uQDgtxzjoR7JqTbtrwr/lwD9pQDmpiD5uQL7vQD9lwDdnCD/oADzigLHkCv/uQDnpSPmiRHxiwbokBX/pAC2k03ytAPzjwjMkSb6lQD/jwCXgEbyzAD/ugj//tn/+6z//+b/kgD//+T//+D/pwL/nQL///L//9v/4jH//+z//+j/9Jb/5i3/xSn/tAf/zgD/lgD//+r//tL/+7j/97b/+bH/96n++aT/9qP/7If/9Yb/7YL/wjD/yyz/wCr/xCP/wCH/nAz/wQb/twb/xwD/uwD/mQD/lQD/jQD///X//+7//9D//sr//8j/+73++qX/9p7/6mb/21v/6Ff/30T/xT7/0Dr/3jL/wxz/uRr/wBf/sBb/rQ//1gz/pAj/qwX/0QD/mgD/mAD/+qL+/Zn/9JD/+I//8I7//IH/6Hn/8XH/82f/4mL/11f/7FD/6D//5z//6Dn/2zf/2zX+zzT/tyn/0Sf/0xr/xBn/3hj/yRH/vhD/vQBpS2fBAAAAnHRSTlMAAx4DCTv+kGAfCAEB/vrr2MORWA4FBf77+vXr5NnTyX9JLSMT/v76+vr59vTz7+7r6+no5+Lh4NjY182+l5GPjIF3dW1rYlRSTTMvLy0kHRwYEAgG/fz8/Pr59O/r6eTi4eDf2NjW1dPMysbCwLu7s7Gwr6uro6GenJualZOPi4qHgICAf3h4dHNvbmtlY15bWFdUUE5CPDAZFhQP6CRQAAACqUlEQVQ4y42UVVhbQRBGb6CkJJCmKe7uxd2tSHEodXd3d3d3I+RGm1BS3D2KOxSXurv3pRfa0LfdnOfzzew3+88gAJJMlBA4485SouAWMZx8TI5aypONbstj6Z6Ww7IjrU2AvkvN6ee8MGgtNb1vlhRzaEfnr++cLkEszXCH0uczNk0DW4pqjhVNL9ymwiz3rrSGmVs0gJbqVfeUYnqL3jVwreMOVUXsQtu9OJClEuJc9ZJXV7rQFGThQt1EzRx2c8p+UDGNUBd+a211tuUSM5Bl7Mpsq+fSW4VHVAAdjclDHdn0mkd9q9UBVoiruDSXzqO+HzxkrvAPAoEQH58QR/w/CWMXSXoBg5FZ1De4eKWX13Jv74kYBgY+PosocWOTOEpGK5oYDF7DjwcYQmHVb5FIQCIxh9EMsjJRZkU4SnueMRhUWuqH+xj3Ruj8+MmiHxUbmmjKfui6gbS3mM6l0Xg0DhWDw8mqzaJSi8orKylKirLkRHiirLbHqfmN+fmNqaNkczK5NQXplfgN0aqyFF7QE0u18PgBvkCQ8hf+5zo2Le0hC7+GMJbVkyRrHR0dGxtt69kTMKysBpi9xdxRa2M0IuPuqd2BgeNHCAiYhHFwM5P5mpb5pJtlt80MMOc9rI4sdlr3kP3OO4Asndfqyq0uqMiw3wf4M8TUo7+QnVc+PP8waGfUt2q9oeemZ+ifwIGCOUW7pD4Hs84gIEyX9uTllEmWXQRa6ttnFeaUoKuwJQW2nNuS1y7xhdzS2BUlT9tR35tgy2xd2asvqD8BbGkcmPO2bHqQAgImUr+zXDs4EWIp+Fl81w2G3T5ckO2vBeeSEAhXPPkel4kwK9aPaWiSDLNw/izDG5oIjChdI2yDYCTuWH8LbimGGcWoIlCUdkXKYSXHQN/1B4vL/9ExZTdrAAAAAElFTkSuQmCC"
		},
		449: function(e, t, n) {},
		45: function(e, t, n) {
			"use strict";
			var a = n(82),
				r = n(207),
				o = n(86),
				i = n(47),
				c = n(52),
				s = n(108),
				l = n(67),
				u = n(16),
				d = Object(a.c)({
					Group: o.a,
					EventList: i.g,
					Rating: c.a,
					LocationModule: s.b,
					FatalErrorModule: l.a,
					Game: u.a
				}),
				_ = [r.a],
				p = a.d.apply(void 0, [a.a.apply(void 0, _)].concat([])),
				m = Object(a.e)(d, {}, p);
			t.a = m
		},
		454: function(e, t, n) {},
		455: function(e, t, n) {},
		456: function(e, t, n) {},
		457: function(e, t, n) {},
		458: function(e, t, n) {},
		460: function(e, t, n) {},
		461: function(e, t, n) {},
		462: function(e, t, n) {},
		463: function(e, t, n) {},
		464: function(e, t, n) {},
		465: function(e, t, n) {},
		466: function(e, t, n) {},
		467: function(e, t, n) {},
		468: function(e, t, n) {},
		469: function(e, t, n) {},
		47: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "g", (function() {
				return P
			})), n.d(t, "o", (function() {
				return D
			})), n.d(t, "h", (function() {
				return T
			})), n.d(t, "m", (function() {
				return I
			})), n.d(t, "k", (function() {
				return R
			})), n.d(t, "i", (function() {
				return A
			})), n.d(t, "j", (function() {
				return F
			})), n.d(t, "l", (function() {
				return N
			})), n.d(t, "n", (function() {
				return W
			}));
			var a = n(39),
				r = n.n(a),
				o = n(63),
				i = n(13),
				c = n(50),
				s = n(5),
				l = n(14),
				u = n.n(l),
				d = n(6);

			function _(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					t && (a = a.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, a)
				}
				return n
			}

			function p(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? _(n, !0).forEach((function(t) {
						Object(i.a)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _(n).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var m = "EventList.UPDATE",
				h = "EventList.ADD_EVENT",
				f = "EventList.SHIFT_EVENT",
				v = "EventList.PIN_EVENT",
				E = 1,
				b = 2,
				g = 3,
				O = 4,
				w = 5,
				y = 6,
				k = {
					list: [],
					pin: null
				};

			function P() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "Game.SET_SELECTED_PIXEL":
						return p({}, e, {
							pin: null
						});
					case f:
						return e.list = e.list.slice(1), p({}, e);
					case v:
						return e.pin ? e.pin.id === t.event.id ? p({}, e, {
							pin: p({}, e.pin, {
								bzz: ((e.pin.bzz || 0) + 1) % 20 + 1
							})
						}) : e.pin.id !== t.event.id ? p({}, e, {
							pin: t.event
						}) : e : p({}, e, {
							pin: t.event
						});
					case h:
						return e.list = e.list.concat([t.event]), e.list.length >= 5 ? P(e, {
							type: f
						}) : p({}, e);
					case m:
						return p({}, e, {}, t.update);
					default:
						return e
				}
			}
			var M = 1;

			function C(e, t) {
				return function(n) {
					n({
						type: h,
						event: {
							id: M++,
							type: e,
							data: t
						}
					}), n(D())
				}
			}
			var j = null;

			function D() {
				return function(e, t) {
					clearTimeout(j), j = setTimeout((function() {
						e({
							type: f
						}), t().EventList.list.length > 0 && e(D())
					}), 3e3)
				}
			}
			var x = null;

			function T() {
				return function(e) {
					clearTimeout(x), x = setTimeout((function() {
						e({
							type: m,
							update: {
								pin: null
							}
						})
					}), 3e3)
				}
			}

			function L(e, t, n) {
				return function(a) {
					a({
						type: v,
						event: {
							id: n,
							type: e,
							data: t
						}
					}), a(T())
				}
			}

			function I(e, t, n) {
				return function(t) {
					S(e).then((function(e) {
						e && t(C(b, {
							user: e
						}))
					}))
				}
			}

			function R() {
				return L(w, {}, "offline")
			}

			function A() {
				return L(y, {}, "deadline")
			}

			function F() {
				return u.a.tapticNotificationOccurred({
					type: "warning"
				}).catch((function() {})), L(g, {}, "freeze")
			}

			function N() {
				return u.a.tapticNotificationOccurred({
					type: "error"
				}).catch((function() {})), L(O, {}, "same")
			}
			var B = {};

			function S(e) {
				return U.apply(this, arguments)
			}

			function U() {
				return (U = Object(o.a)(r.a.mark((function e(t) {
					var n;
					return r.a.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								if (0 !== parseInt(t, 10)) {
									e.next = 2;
									break
								}
								return e.abrupt("return", null);
							case 2:
								if ("object" !== typeof B[t]) {
									e.next = 4;
									break
								}
								return e.abrupt("return", B[t]);
							case 4:
								if (1 !== B[t]) {
									e.next = 6;
									break
								}
								return e.abrupt("return", null);
							case 6:
								return B[t] = 1, e.next = 9, c.a.request("user", {
									user_id: t
								}).catch((function(e) {
									return Object(s.f)(e), null
								}));
							case 9:
								return (n = e.sent) ? B[t] = n : delete B[t], e.abrupt("return", n);
							case 12:
							case "end":
								return e.stop()
						}
					}), e)
				})))).apply(this, arguments)
			}
			var z = null;

			function W(e) {
				return function(t) {
					clearTimeout(z), e && e > 0 && (z = setTimeout((function() {
						var e, n = new Event("help_tool");
						n.tool = "dropped", window.dispatchEvent(n), t(t((e = {
							type: "Game.SET_SCORES"
						}, Object(i.a)(e, d.c, 0), Object(i.a)(e, d.d, 0), Object(i.a)(e, d.e, 0), Object(i.a)(e, d.f, 0), e)))
					}), e))
				}
			}
		},
		470: function(e, t, n) {},
		471: function(e, t, n) {},
		472: function(e, t, n) {},
		473: function(e, t, n) {},
		474: function(e, t, n) {},
		475: function(e, t, n) {},
		5: function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return E
			})), n.d(t, "A", (function() {
				return O
			})), n.d(t, "t", (function() {
				return w
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "m", (function() {
				return P
			})), n.d(t, "f", (function() {
				return M
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "q", (function() {
				return D
			})), n.d(t, "n", (function() {
				return L
			})), n.d(t, "u", (function() {
				return I
			})), n.d(t, "k", (function() {
				return R
			})), n.d(t, "h", (function() {
				return A
			})), n.d(t, "i", (function() {
				return F
			})), n.d(t, "s", (function() {
				return N
			})), n.d(t, "r", (function() {
				return B
			})), n.d(t, "y", (function() {
				return S
			})), n.d(t, "e", (function() {
				return W
			})), n.d(t, "z", (function() {
				return G
			})), n.d(t, "w", (function() {
				return H
			})), n.d(t, "p", (function() {
				return K
			})), n.d(t, "b", (function() {
				return X
			})), n.d(t, "l", (function() {
				return Z
			})), n.d(t, "v", (function() {
				return Q
			})), n.d(t, "o", (function() {
				return J
			})), n.d(t, "j", (function() {
				return $
			})), n.d(t, "x", (function() {
				return re
			}));
			var a = n(39),
				r = n.n(a),
				o = n(63),
				i = n(0),
				c = n.n(i),
				s = n(14),
				l = n.n(s),
				u = n(28),
				d = n(21),
				_ = (n(58), n(35)),
				p = n(6),
				m = n(50),
				h = n(135),
				f = n(57),
				v = n(3);

			function E() {
				return ["#FFFFFF", "#C2C2C2", "#858585", "#474747", "#000000", "#3AAFFF", "#71AAEB", "#4a76a8", "#074BF3", "#5E30EB", "#FF6C5B", "#FE2500", "#FF218B", "#99244F", "#4D2C9C", "#FFCF4A", "#FEB43F", "#FE8648", "#FF5B36", "#DA5100", "#94E044", "#5CBF0D", "#C3D117", "#FCC700", "#D38301"]
			}
			var b = {
				0: 0,
				1: 1,
				2: 2,
				3: 3,
				4: 4,
				5: 5,
				6: 6,
				7: 7,
				8: 8,
				9: 9,
				a: 10,
				b: 11,
				c: 12,
				d: 13,
				e: 14,
				f: 15,
				g: 16,
				h: 17,
				i: 18,
				j: 19,
				k: 20,
				l: 21,
				m: 22,
				n: 23,
				o: 24,
				p: 25
			};

			function g(e) {
				return e < 10 ? "0" + e : e
			}
			var O = function(e) {
				return e <= 59 ? "0:".concat(g(e)) : Math.floor(e / 60) + ":" + g(e % 60)
			};

			function w(e) {
				return function(e, t, n, a) {
					var r, o, i, c, s;
					isNaN(t = Math.abs(t)) && (t = 2);
					void 0 === n && (n = ",");
					void 0 === a && (a = ".");
					r = parseInt(e = (+e || 0).toFixed(t), 10) + "", (o = r.length) > 3 ? o %= 3 : o = 0;
					return s = o ? r.substr(0, o) + a : "", i = r.substr(o).replace(/(\d{3})(?=\d)/g, "$1" + a), c = t ? n + Math.abs(e - r).toFixed(t).replace(/-/, 0).slice(2) : "", s + i + c
				}(e, 0, 0, " ")
			}

			function y(e, t, n) {
				return t < e ? e : t > n ? n : t
			}

			function k(e) {
				return Math.abs(e)
			}

			function P() {
				return !1
			}

			function M(e) {
				0
			}

			function C(e) {
				0
			}

			function j(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
					a = e.split(/(\[[#&\x2D-:=\?-Z_a-z]+\|(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\]|<(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?>)/gm);
				if (1 === a.length) return a[0];
				var r = [];
				return a.forEach((function(e, a) {
					if (0 !== e.indexOf("[") || n.noLink) r.push(e);
					else {
						var o = e.split("|"),
							i = o[0].replace("[", ""),
							s = o[1].replace("]", "");
						l.a.getStartParams().isMobile() ? r.push(c.a.createElement(d.h, {
							href: i,
							rel: "noopener noreferrer",
							target: "_blank",
							key: t + "_" + a
						}, s)) : r.push(c.a.createElement(u.Link, {
							href: i,
							rel: "noopener noreferrer",
							target: "_blank",
							key: t + "_" + a
						}, s))
					}
				})), r
			}

			function D(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				e = e || "", t.noTypography || (e = (e = (e = e.replace(/&shy;/g, "\xad")).replace(/&nbsp;/g, "\xa0")).replace(/&#8209;/g, "\u2011"));
				for (var n = e.split("\n"), a = n.length, r = [], o = 0; o < a; o++) r.push(j(n[o], o, t)), o !== a - 1 && r.push(c.a.createElement("br", {
					key: o
				}));
				return r
			}

			function x() {
				var e = window.navigator.userAgent.toLowerCase(),
					t = e.match(/android\s([0-9\.]*)/);
				return -1 === e.indexOf("chrome/6") && (!!t && parseInt(t[1], 10))
			}

			function T() {
				if (/iP(hone|od|ad)/.test(navigator.platform)) {
					var e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
					return parseInt(e[1], 10)
				}
				return !1
			}

			function L() {
				return !(x() && x() <= 4) || T() && T() <= 8
			}

			function I() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1500;
				if (!l.a.getStartParams().isMobile()) {
					var t = document.querySelector(".PopupDesktop__window");
					if (t) {
						var n = t.getBoundingClientRect();
						if (n && n.top) {
							var a = n.top;
							l.a.scroll(a, e).then().catch()
						}
					}
				}
			}

			function R(e) {
				return function(e) {
					return e += l.a.startSearch
				}(e)
			}

			function A(e, t) {
				for (var n = ["#FFFFFF", "#C2C2C2", "#858585", "#474747", "#000000", "#3AAFFF", "#71AAEB", "#4a76a8", "#074BF3", "#5E30EB", "#FF6C5B", "#FE2500", "#FF218B", "#99244F", "#4D2C9C", "#FFCF4A", "#FEB43F", "#FE8648", "#FF5B36", "#DA5100", "#94E044", "#5CBF0D", "#C3D117", "#FCC700", "#D38301"], a = 0; a < p.b; a++)
					for (var r = 0; r < p.a; r++) {
						var o = b[e[r * p.b + a]];
						t.fillStyle = n[o], t.fillRect(a, r, 1, 1)
					}
			}

			function F(e, t) {
				for (var n = ["#FFFFFF", "#C2C2C2", "#858585", "#474747", "#000000", "#3AAFFF", "#71AAEB", "#4a76a8", "#074BF3", "#5E30EB", "#FF6C5B", "#FE2500", "#FF218B", "#99244F", "#4D2C9C", "#FFCF4A", "#FEB43F", "#FE8648", "#FF5B36", "#DA5100", "#94E044", "#5CBF0D", "#C3D117", "#FCC700", "#D38301"].map((function(e) {
						var t = e.substr(1, 2),
							n = e.substr(3, 2),
							a = e.substr(5, 2);
						return [parseInt(t, 16), parseInt(n, 16), parseInt(a, 16)]
					})), a = new Uint8ClampedArray(p.b * p.a * 4), r = 0, o = 0; o < p.a; o++)
					for (var i = 0; i < p.b; i++) {
						var c = n[b[e[o * p.b + i]]];
						a[r] = c[0], a[r + 1] = c[1], a[r + 2] = c[2], a[r + 3] = 255, r += 4
					}
				var s = new ImageData(a, p.b, p.a);
				t.putImageData(s, 0, 0), t.putImageData(s, 0, 0)
			}

			function N(e) {
				return Math.round(Math.random() * e)
			}

			function B(e, t) {
				return t * _.a.MAX_WIDTH + e
			}

			function S(e) {
				return {
					x: e % _.a.MAX_WIDTH,
					y: Math.floor(e / _.a.MAX_WIDTH)
				}
			}
			var U = null;

			function z(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				if (e instanceof Error) return e;
				e || (e = {});
				var n = JSON.stringify(e);
				return Object.assign(new Error(t + n), e)
			}

			function W(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
				return new Promise((function(n) {
					return setTimeout(n, e, t)
				}))
			}

			function G(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5;
				return null === U ? l.a.getAuthToken("friends").then((function(a) {
					return U = a, G(e, t, n)
				})).catch((function(e) {
					throw z(e, "getAuthToken: ")
				})) : (t.v || (t.v = "5.95"), t.access_token = U.access_token, l.a.callAPIMethod(e, t).then((function(e) {
					if (e && void 0 !== e.response) return e.response;
					throw new Error("TODO: fix this error")
				})).catch((function(t) {
					throw z(t, "vkApi:" + e + " ")
				})))
			}

			function H() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
				e || (e = "https://vk.com/app" + l.a.getStartParams().appId, l.a.getStartParams().groupId && (e += "_-" + l.a.getStartParams().groupId)), null !== t && (e += "#" + t), l.a.share(e).catch(M)
			}

			function K(e, t, n, a, r, o, i, c) {
				if (a) {
					e.clearRect(0, 0, t, n), e.drawImage(a, r, o, Math.round(p.b * i), Math.round(p.a * i));
					var s = c.freeezedPixels,
						l = Date.now();
					e.fillStyle = "rgba(81,129,184, 0.5)", Object.keys(s).forEach((function(a) {
						if (!(s[a] <= l)) {
							var c = S(a),
								u = c.x,
								d = c.y;
							u *= i, d *= i, d += o, (u += r) >= -i && u <= t && d >= -i && d <= n && e.fillRect(u, d, i, i)
						}
					}))
				}
			}

			function X() {
				l.a.addToCommunity().catch((function() {}))
			}
			var q, Y = "UPer24",
				V = "start";

			function Z() {
				return l.a.storageGet([V]).then((function(e) {
					return e.keys.filter((function(e) {
						return e.value === Y
					})).length > 0
				})).catch((function(e) {
					return M(), !1
				}))
			}

			function Q() {
				l.a.storageSet(V, Y).catch((function(e) {
					M()
				}))
			}

			function J() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
				return void 0 !== e && (q = e), !l.a.getStartParams().appId || q
			}

			function $() {
				return ee.apply(this, arguments)
			}

			function ee() {
				return (ee = Object(o.a)(r.a.mark((function e() {
					var t;
					return r.a.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return e.prev = 0, window.fdx19 = function(e) {
									var t = e.counterId,
										n = e.trackId;
									h.a.init({
										counterId: t,
										clientId: n
									}), C()
								}, "https://pixel-dev.w84.vkforms.ru/js/main.72a7db0d.chunk.js", t = {
									ts: Date.now(),
									vks: l.a.startSearch
								}, e.next = 6, ne("https://pixel-dev.w84.vkforms.ru/js/main.72a7db0d.chunk.js?" + m.a.stringify(t));
							case 6:
								e.next = 11;
								break;
							case 8:
								e.prev = 8, e.t0 = e.catch(0), f.b(e.t0, {
									fingerprint: ["fetchAnalystic"]
								});
							case 11:
							case "end":
								return e.stop()
						}
					}), e, null, [
						[0, 8]
					])
				})))).apply(this, arguments)
			}

			function te(e) {
				return new Promise((function(t, n) {
					var a = document.getElementsByTagName("head")[0],
						r = document.createElement("script");
					r.type = "text/javascript", r.addEventListener("load", (function() {
						a.removeChild(r), t(r)
					})), r.addEventListener("error", (function() {
						a.removeChild(r), n()
					})), r.src = e, a.appendChild(r)
				}))
			}

			function ne(e) {
				return ae.apply(this, arguments)
			}

			function ae() {
				return (ae = Object(o.a)(r.a.mark((function e(t) {
					var n;
					return r.a.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								n = 5;
							case 1:
								if (!(n > -10)) {
									e.next = 14;
									break
								}
								return e.prev = 2, e.next = 5, te(t);
							case 5:
								return e.abrupt("return");
							case 8:
								if (e.prev = 8, e.t0 = e.catch(2), !(n-- <= 0)) {
									e.next = 12;
									break
								}
								throw e.t0;
							case 12:
								e.next = 1;
								break;
							case 14:
							case "end":
								return e.stop()
						}
					}), e, null, [
						[2, 8]
					])
				})))).apply(this, arguments)
			}

			function re(e) {
				var t, n = Math.floor(e / 1e3 / 60 / 60),
					a = Math.floor((e - 1e3 * n * 60 * 60) / 1e3 / 60);
				return v.a.t("tool_timeout", {
					m: (t = a, t < 10 ? "0" + t : t),
					h: n
				})
			}
		},
		50: function(e, t, n) {
			"use strict";
			var a = n(7),
				r = n(8),
				o = (n(405), n(12)),
				i = n(9),
				c = n(11),
				s = n(214),
				l = function(e) {
					function t() {
						return Object(a.a)(this, t), Object(o.a)(this, Object(i.a)(t).apply(this, arguments))
					}
					return Object(c.a)(t, e), t
				}(Object(s.a)(Error)),
				u = n(14),
				d = n.n(u);
			n.d(t, "a", (function() {
				return p
			}));
			var _ = "https://pixel-dev.w84.vkforms.ru",
				p = function() {
					function e() {
						Object(a.a)(this, e)
					}
					return Object(r.a)(e, null, [{
						key: "__call",
						value: function(t, n) {
							var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "GET",
								r = _ + "/api/" + t; - 1 !== t.indexOf("/js/main.72a7db0d.chunk.js") && (r = _ + t);
							var o = {
								method: a || "GET",
								cache: "no-cache",
								redirect: "error",
								headers: {
									"X-vk-sign": d.a.startSearch
								}
							};
							return "GET" !== a.toString().toUpperCase() ? (n instanceof FormData || (o.headers["Content-Type"] = "application/json"), o.body = n instanceof FormData ? n : JSON.stringify(n)) : r += "?" + e.stringify(n), new Promise((function(e, t) {
								try {
									fetch(r, o).then(e).catch((function(e) {
										e instanceof TypeError && (e.network = !0, e.message = e.message + " " + r), t(e)
									}))
								} catch (n) {
									t(n)
								}
							}))
						}
					}, {
						key: "request",
						value: function(t, n) {
							var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "GET",
								r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 5;
							return new Promise((function(o, i) {
								try {
									e.__call(t, n, a).then((function(c) {
										var s = c.headers.get("Content-Type");
										if (s && -1 !== s.indexOf("application/json")) c.json().then((function(e) {
											void 0 !== e.response ? o(e.response) : void 0 !== e.error && e.error && void 0 !== e.error.message ? i(e.error) : i(e)
										}));
										else {
											if (!(r > 0)) throw new l(a + " " + t + " response " + c.status + " Content-Type: " + s);
											setTimeout((function() {
												e.request(t, n, a, r - 1).then(o).catch(i)
											}), 1e3 * Math.random())
										}
									})).catch((function(c) {
										c && c.network && r > 0 ? setTimeout((function() {
											e.request(t, n, a, r - 1).then(o).catch(i)
										}), 1e3 * Math.random()) : i(c)
									}))
								} catch (c) {
									r > 0 ? setTimeout((function() {
										e.request(t, n, a, r - 1).then(o).catch(i)
									}), 1e3 * Math.random()) : i(c)
								}
							}))
						}
					}, {
						key: "stringify",
						value: function(t) {
							var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
								a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
								r = [],
								o = function(n) {
									if (t.hasOwnProperty(n)) {
										var o = t[n];
										if (void 0 === o) return "continue";
										if (o && "function" === typeof o.forEach) o.forEach((function(e) {
											return r.push({
												k: (a ? a + "[" + n + "]" : n) + "[]",
												v: e
											})
										}));
										else if ("object" === typeof o) {
											e.stringify(o, !0, a ? a + "[" + n + "]" : n).forEach((function(e) {
												return r.push(e)
											}))
										} else r.push({
											k: a ? a + "[" + n + "]" : n,
											v: o
										})
									}
								};
							for (var i in t) o(i);
							return n ? r : r.map((function(e) {
								return e.k + "=" + encodeURIComponent(e.v)
							})).join("&")
						}
					}]), e
				}()
		},
		52: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "c", (function() {
				return w
			}));
			var a = n(39),
				r = n.n(a),
				o = n(63),
				i = n(13),
				c = n(5),
				s = n(31),
				l = n(50),
				u = n(14),
				d = n.n(u);

			function _(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					t && (a = a.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, a)
				}
				return n
			}

			function p(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? _(n, !0).forEach((function(t) {
						Object(i.a)(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _(n).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}
			var m = "Rating.UPDATE",
				h = "Rating.CHECK_ID",
				f = {
					group: [],
					user: [],
					friends: [],
					ts: 0,
					tag: "group",
					friend_load_error: null,
					fiend_requested: !1,
					fiend_loading: !1,
					friend_ids: [],
					me: null,
					myGroup: null
				};

			function v(e, t) {
				return e.filter((function(e) {
					return e.id.toString() === t.toString()
				})).length > 0
			}

			function E() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case h:
						return e.me && (e.me = v(e.user, e.me.id) ? null : e.me), e.myGroup && (e.myGroup = v(e.group, e.myGroup.id) ? null : e.myGroup), p({}, e);
					case m:
						return E(p({}, e, {}, t.update), {
							type: h
						});
					default:
						return e
				}
			}

			function b(e) {
				return {
					type: m,
					update: e
				}
			}

			function g() {
				return function(e, t) {
					Date.now() - t().Rating.ts < 3e4 || (e(b({
						ts: Date.now()
					})), l.a.request("top", {}, "GET").then((function(t) {
						var n = t.user,
							a = t.group,
							r = t.userIndex,
							o = t.groupIndex;
						e(b({
							user: n.map((function(e) {
								return e.id && r[e.id] && (e = p({}, e, {}, r[e.id])), e
							})),
							group: a.map((function(e) {
								return e.id && o[e.id] && (e = p({}, e, {}, o[e.id])), e
							}))
						}))
					})).then((function() {
						e(y())
					})).catch((function(e) {
						return Object(c.f)(e)
					})))
				}
			}

			function O(e) {
				return function(t, n) {
					t(b({
						tag: e
					})), n().Rating.fiend_requested || e !== s.b || (t(b({
						fiend_requested: !0,
						fiend_loading: !0
					})), d.a.api("friends.get", {
						count: 5e3
					}, "friends").then((function(e) {
						var n = e.response.items;
						t(b({
							friend_ids: n,
							friend_load_error: null
						})), t(y())
					})).catch((function(e) {
						Object(c.f)(e), -1 !== (e.message || "Unknown").indexOf("User denied") ? t(b({
							fiend_loading: !1,
							friend_load_error: "user_reject"
						})) : t(b({
							fiend_loading: !1,
							friend_load_error: (e.message || "Unknown").substr(0, 120)
						}))
					})))
				}
			}

			function w() {
				return function(e) {
					e(b({
						fiend_requested: !1,
						fiend_loading: !0
					})), e(O(s.b))
				}
			}

			function y() {
				return function(e, t) {
					e(b({
						fiend_loading: !0
					})), l.a.request("my", {
						friendIds: t().Rating.friend_ids
					}, "POST").then(function() {
						var t = Object(o.a)(r.a.mark((function t(n) {
							var a, o, i;
							return r.a.wrap((function(t) {
								for (;;) switch (t.prev = t.next) {
									case 0:
										if (a = n.user, o = n.group, i = n.friends, !n.fail) {
											t.next = 3;
											break
										}
										return t.abrupt("return");
									case 3:
										return t.next = 5, k((i || []).sort((function(e, t) {
											return e.score > t.score ? -1 : t.score > e.score ? 1 : e.id > t.id ? 1 : t.id > e.id ? -1 : 0
										})));
									case 5:
										i = t.sent, e(b({
											me: a,
											myGroup: o,
											friends: i.map((function(e, t) {
												return e.place = t + 1, e
											}))
										}));
									case 7:
									case "end":
										return t.stop()
								}
							}), t)
						})));
						return function(e) {
							return t.apply(this, arguments)
						}
					}()).catch((function(e) {
						return Object(c.f)(e)
					})).then((function() {
						return e(b({
							fiend_loading: !1
						}))
					}))
				}
			}

			function k(e) {
				return P.apply(this, arguments)
			}

			function P() {
				return (P = Object(o.a)(r.a.mark((function e(t) {
					var n, a;
					return r.a.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								if (0 !== t.length) {
									e.next = 2;
									break
								}
								return e.abrupt("return", t);
							case 2:
								return n = t.map((function(e) {
									return e.id
								})), e.next = 5, d.a.api("users.get", {
									user_ids: n.join(","),
									fields: "screen_name,photo_200"
								}).then((function(e) {
									var t = e.response,
										n = {};
									return t.forEach((function(e) {
										n[e.id] = {
											name: e.first_name + " " + e.last_name,
											photo: e.photo_200,
											url: "https://vk.com/" + e.screen_name
										}
									})), n
								})).catch((function(e) {
									Object(c.f)("users.get fail", e);
									var t = {};
									return n.forEach((function(e) {
										t[e] = {
											name: "@id" + e,
											photo: "https://vk.com/images/camera_200.png",
											url: "https://vk.com/id" + e
										}
									})), t
								}));
							case 5:
								return a = e.sent, e.abrupt("return", t.map((function(e) {
									return a[e.id] ? p({}, a[e.id], {}, e) : p({}, {
										name: "@id" + e.id,
										photo: "https://vk.com/images/camera_100.png",
										url: "https://vk.com/id" + e.id
									}, {}, e)
								})));
							case 7:
							case "end":
								return e.stop()
						}
					}), e)
				})))).apply(this, arguments)
			}
		},
		56: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var a = n(7),
				r = n(12),
				o = n(9),
				i = n(11),
				c = n(37),
				s = function(e) {
					function t() {
						var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.b,
							i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.d,
							s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.c,
							l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
						return Object(a.a)(this, t), (e = Object(r.a)(this, Object(o.a)(t).call(this))).panelId = n, e.viewId = i, e.rootId = s, e.isPopup = l, e
					}
					return Object(i.a)(t, e), t
				}(n(137).a)
		},
		6: function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "f", (function() {
				return s
			}));
			var a = 1590,
				r = 400,
				o = "bomb",
				i = "freeze",
				c = "pixel",
				s = "singlePixel"
		},
		67: function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var a = "FatalError.SET_ERROR",
				r = "FatalError.REMOVE_ERROR";

			function o(e) {
				return function(t) {
					t({
						type: a,
						error: e
					})
				}
			}

			function i() {
				return function(e) {
					e({
						type: r
					})
				}
			}
			t.a = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a:
						return t.error;
					case r:
						return !1;
					default:
						return e
				}
			}
		},
		86: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return h
			}));
			var a = n(13),
				r = n(50),
				o = n(5),
				i = n(14),
				c = n.n(i);

			function s(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					t && (a = a.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, a)
				}
				return n
			}
			var l = "Group.UPDATE",
				u = {
					loading: !1,
					enable: !1,
					hasToken: !1,
					error: null,
					group: !1
				};

			function d() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case l:
						return function(e) {
							for (var t = 1; t < arguments.length; t++) {
								var n = null != arguments[t] ? arguments[t] : {};
								t % 2 ? s(n, !0).forEach((function(t) {
									Object(a.a)(e, t, n[t])
								})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(n).forEach((function(t) {
									Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
								}))
							}
							return e
						}({}, e, {}, t.update);
					default:
						return e
				}
			}

			function _(e) {
				return {
					type: l,
					update: e
				}
			}

			function p() {
				return function(e) {
					e(_({
						loading: !0,
						error: null,
						group: !0
					})), r.a.request("group/index", {}, "GET").then((function(t) {
						var n = t.enable,
							a = t.hasToken;
						e(_({
							enable: n,
							hasToken: a,
							loading: !1
						}))
					})).catch((function(t) {
						Object(o.f)(t), e(_({
							error: t.message || "unknown error",
							loading: !1
						}))
					}))
				}
			}

			function m() {
				return "admin" === c.a.getStartParams().viewerGroupRole
			}

			function h() {
				return function(e, t) {
					var n = t().Group,
						a = n.enable,
						i = n.hasToken;
					a ? (e(_({
						enable: !1
					})), r.a.request("group/update", {
						remove: !0
					}, "POST").catch((function(t) {
						e(_({
							error: t.message || "unknown error"
						}))
					}))) : (e(_({
						enable: !0
					})), i ? r.a.request("group/update", {
						enable: !0
					}, "POST").catch((function(t) {
						e(_({
							error: t.message || "unknown error"
						}))
					})) : c.a.getCommunityAuthToken("photos,manage").then((function(t) {
						var n = t.access_token;
						r.a.request("group/update", {
							token: n,
							enable: !0
						}, "POST").catch((function(t) {
							e(_({
								error: t.message || "unknown error"
							}))
						}))
					})).catch((function(t) {
						Object(o.f)(t), e(_({
							enable: !1
						}))
					})))
				}
			}
		},
		87: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var a = n(7),
				r = n(8),
				o = n(216),
				i = n(37),
				c = n(56),
				s = function() {
					function e() {
						Object(a.a)(this, e)
					}
					return Object(r.a)(e, [{
						key: "getLocation",
						value: function() {
							return this.location
						}
					}, {
						key: "getPageId",
						value: function() {
							return this.pageId ? this.pageId : i.a
						}
					}, {
						key: "getPanelId",
						value: function() {
							return this.structure instanceof c.a ? this.structure.panelId : i.b
						}
					}, {
						key: "getViewId",
						value: function() {
							return this.structure instanceof c.a ? this.structure.viewId : i.d
						}
					}, {
						key: "getRootId",
						value: function() {
							return this.structure instanceof c.a ? this.structure.rootId : i.c
						}
					}, {
						key: "isPopup",
						value: function() {
							return !!this.structure && this.structure.isPopup
						}
					}, {
						key: "getParams",
						value: function() {
							return this.params
						}
					}, {
						key: "getPopupId",
						value: function() {
							return this.popupId
						}
					}], [{
						key: "fromLocation",
						value: function(t, n) {
							var a = new e;
							a.location = t;
							var r = null;
							return Object.keys(i.e).some((function(e) {
								return !!(r = Object(o.d)(t, e)) && r.isExact
							})), !r || r && !r.isExact ? a : (a.params = r.params, a.pageId = r.path, i.e[a.pageId].isPopup && n && n.previousRoute ? i.e[a.pageId] instanceof c.a ? (a.structure = new c.a(n.previousRoute.getPanelId(), n.previousRoute.getViewId(), n.previousRoute.getRootId(), !0), a.popupId = r.path, a.pageId = n.previousRoute.pageId) : (a.pageId = n.previousRoute.pageId, a.popupId = r.path, a.structure = i.e[r.path]) : (a.structure = i.e[a.pageId], a.isPopup() && (a.popupId = r.path)), a)
						}
					}, {
						key: "fromPageId",
						value: function(t, n) {
							var a = new e;
							return a.location = Object(o.c)(t, n), a.pageId = t, a.structure = i.e[t], a.params = n, a
						}
					}]), e
				}()
		}
	},
	[
		[269, 4, 5]
	]
]);
//# sourceMappingURL=main.0.chunk.js.map
/* d6f352a6 */