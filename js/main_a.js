!function(e, t) {
    function n(e) {
        var t = ht[e] = {};
        return K.each(e.split(tt), function(e, n) {
            t[n] = !0;
        }), t;
    }
    function r(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(mt, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : gt.test(r) ? K.parseJSON(r) : r;
                } catch (o) {}
                K.data(e, n, r);
            } else r = t;
        }
        return r;
    }
    function i(e) {
        var t;
        for (t in e) if (("data" !== t || !K.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0;
    }
    function o() {
        return !1;
    }
    function a() {
        return !0;
    }
    function s(e) {
        return !e || !e.parentNode || 11 === e.parentNode.nodeType;
    }
    function u(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e;
    }
    function l(e, t, n) {
        if (t = t || 0, K.isFunction(t)) return K.grep(e, function(e, r) {
            var i = !!t.call(e, r, e);
            return i === n;
        });
        if (t.nodeType) return K.grep(e, function(e) {
            return e === t === n;
        });
        if ("string" == typeof t) {
            var r = K.grep(e, function(e) {
                return 1 === e.nodeType;
            });
            if (Ot.test(t)) return K.filter(t, r, !n);
            t = K.filter(t, r);
        }
        return K.grep(e, function(e) {
            return K.inArray(e, t) >= 0 === n;
        });
    }
    function c(e) {
        var t = Rt.split("|"), n = e.createDocumentFragment();
        if (n.createElement) for (; t.length; ) n.createElement(t.pop());
        return n;
    }
    function f(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t));
    }
    function p(e, t) {
        if (1 === t.nodeType && K.hasData(e)) {
            var n, r, i, o = K._data(e), a = K._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s) for (r = 0, i = s[n].length; i > r; r++) K.event.add(t, n, s[n][r]);
            }
            a.data && (a.data = K.extend({}, a.data));
        }
    }
    function d(e, t) {
        var n;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), K.support.html5Clone && e.innerHTML && !K.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Qt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text), t.removeAttribute(K.expando));
    }
    function h(e) {
        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : [];
    }
    function g(e) {
        Qt.test(e.type) && (e.defaultChecked = e.checked);
    }
    function m(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = vn.length; i--; ) if (t = vn[i] + n, t in e) return t;
        return r;
    }
    function y(e, t) {
        return e = t || e, "none" === K.css(e, "display") || !K.contains(e.ownerDocument, e);
    }
    function v(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; a > o; o++) n = e[o], n.style && (i[o] = K._data(n, "olddisplay"), t ? (!i[o] && "none" === n.style.display && (n.style.display = ""), "" === n.style.display && y(n) && (i[o] = K._data(n, "olddisplay", T(n.nodeName)))) : (r = nn(n, "display"), !i[o] && "none" !== r && K._data(n, "olddisplay", r)));
        for (o = 0; a > o; o++) n = e[o], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? i[o] || "" : "none"));
        return e;
    }
    function b(e, t, n) {
        var r = fn.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
    }
    function x(e, t, n, r) {
        for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > i; i += 2) "margin" === n && (o += K.css(e, n + yn[i], !0)), r ? ("content" === n && (o -= parseFloat(nn(e, "padding" + yn[i])) || 0), "margin" !== n && (o -= parseFloat(nn(e, "border" + yn[i] + "Width")) || 0)) : (o += parseFloat(nn(e, "padding" + yn[i])) || 0, "padding" !== n && (o += parseFloat(nn(e, "border" + yn[i] + "Width")) || 0));
        return o;
    }
    function w(e, t, n) {
        var r = "width" === t ? e.offsetWidth : e.offsetHeight, i = !0, o = K.support.boxSizing && "border-box" === K.css(e, "boxSizing");
        if (0 >= r || null == r) {
            if (r = nn(e, t), (0 > r || null == r) && (r = e.style[t]), pn.test(r)) return r;
            i = o && (K.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0;
        }
        return r + x(e, t, n || (o ? "border" : "content"), i) + "px";
    }
    function T(e) {
        if (hn[e]) return hn[e];
        var t = K("<" + e + ">").appendTo(W.body), n = t.css("display");
        return t.remove(), ("none" === n || "" === n) && (rn = W.body.appendChild(rn || K.extend(W.createElement("iframe"), {
            "frameBorder": 0,
            "width": 0,
            "height": 0
        })), on && rn.createElement || (on = (rn.contentWindow || rn.contentDocument).document, on.write("<!doctype html><html><body>"), on.close()), t = on.body.appendChild(on.createElement(e)), n = nn(t, "display"), W.body.removeChild(rn)), hn[e] = n, n;
    }
    function N(e, t, n, r) {
        var i;
        if (K.isArray(t)) K.each(t, function(t, i) {
            n || wn.test(e) ? r(e, i) : N(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
        }); else if (n || "object" !== K.type(t)) r(e, t); else for (i in t) N(e + "[" + i + "]", t[i], n, r);
    }
    function C(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i, o, a = t.toLowerCase().split(tt), s = 0, u = a.length;
            if (K.isFunction(n)) for (; u > s; s++) r = a[s], o = /^\+/.test(r), o && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[o ? "unshift" : "push"](n);
        };
    }
    function k(e, n, r, i, o, a) {
        o = o || n.dataTypes[0], a = a || {}, a[o] = !0;
        for (var s, u = e[o], l = 0, c = u ? u.length : 0, f = e === qn; c > l && (f || !s); l++) s = u[l](n, r, i), "string" == typeof s && (!f || a[s] ? s = t : (n.dataTypes.unshift(s), s = k(e, n, r, i, s, a)));
        return (f || !s) && !a["*"] && (s = k(e, n, r, i, "*", a)), s;
    }
    function E(e, n) {
        var r, i, o = K.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
        i && K.extend(!0, e, i);
    }
    function S(e, n, r) {
        var i, o, a, s, u = e.contents, l = e.dataTypes, c = e.responseFields;
        for (o in c) o in r && (n[c[o]] = r[o]);
        for (; "*" === l[0]; ) l.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
        if (i) for (o in u) if (u[o] && u[o].test(i)) {
            l.unshift(o);
            break;
        }
        if (l[0] in r) a = l[0]; else {
            for (o in r) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    a = o;
                    break;
                }
                s || (s = o);
            }
            a = a || s;
        }
        return a ? (a !== l[0] && l.unshift(a), r[a]) : void 0;
    }
    function j(e, t) {
        var n, r, i, o, a = e.dataTypes.slice(), s = a[0], u = {}, l = 0;
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), a[1]) for (n in e.converters) u[n.toLowerCase()] = e.converters[n];
        for (; i = a[++l]; ) if ("*" !== i) {
            if ("*" !== s && s !== i) {
                if (n = u[s + " " + i] || u["* " + i], !n) for (r in u) if (o = r.split(" "), o[1] === i && (n = u[s + " " + o[0]] || u["* " + o[0]])) {
                    n === !0 ? n = u[r] : u[r] !== !0 && (i = o[0], a.splice(l--, 0, i));
                    break;
                }
                if (n !== !0) if (n && e["throws"]) t = n(t); else try {
                    t = n(t);
                } catch (c) {
                    return {
                        "state": "parsererror",
                        "error": n ? c : "No conversion from " + s + " to " + i
                    };
                }
            }
            s = i;
        }
        return {
            "state": "success",
            "data": t
        };
    }
    function A() {
        try {
            return new e.XMLHttpRequest;
        } catch (t) {}
    }
    function D() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP");
        } catch (t) {}
    }
    function L() {
        return setTimeout(function() {
            Jn = t;
        }, 0), Jn = K.now();
    }
    function H(e, t) {
        K.each(t, function(t, n) {
            for (var r = (er[t] || []).concat(er["*"]), i = 0, o = r.length; o > i; i++) if (r[i].call(e, t, n)) return;
        });
    }
    function M(e, t, n) {
        var r, i = 0, o = Zn.length, a = K.Deferred().always(function() {
            delete s.elem;
        }), s = function() {
            for (var t = Jn || L(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), i = 0, o = u.tweens.length; o > i; i++) u.tweens[i].run(r);
            return a.notifyWith(e, [ u, r, n ]), 1 > r && o ? n : (a.resolveWith(e, [ u ]), !1);
        }, u = a.promise({
            "elem": e,
            "props": K.extend({}, t),
            "opts": K.extend(!0, {
                "specialEasing": {}
            }, n),
            "originalProperties": t,
            "originalOptions": n,
            "startTime": Jn || L(),
            "duration": n.duration,
            "tweens": [],
            "createTween": function(t, n) {
                var r = K.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r), r;
            },
            "stop": function(t) {
                for (var n = 0, r = t ? u.tweens.length : 0; r > n; n++) u.tweens[n].run(1);
                return t ? a.resolveWith(e, [ u, t ]) : a.rejectWith(e, [ u, t ]), this;
            }
        }), l = u.props;
        for (_(l, u.opts.specialEasing); o > i; i++) if (r = Zn[i].call(u, e, l, u.opts)) return r;
        return H(u, l), K.isFunction(u.opts.start) && u.opts.start.call(e, u), K.fx.timer(K.extend(s, {
            "anim": u,
            "queue": u.opts.queue,
            "elem": e
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
    }
    function _(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = K.camelCase(n), i = t[r], o = e[n], K.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = K.cssHooks[r], a && "expand" in a) {
            o = a.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
    }
    function F(e, t, n) {
        var r, i, o, a, s, u, l, c, f = this, p = e.style, d = {}, h = [], g = e.nodeType && y(e);
        n.queue || (l = K._queueHooks(e, "fx"), null == l.unqueued && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() {
            l.unqueued || c();
        }), l.unqueued++, f.always(function() {
            f.always(function() {
                l.unqueued--, K.queue(e, "fx").length || l.empty.fire();
            });
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [ p.overflow, p.overflowX, p.overflowY ], "inline" === K.css(e, "display") && "none" === K.css(e, "float") && (K.support.inlineBlockNeedsLayout && "inline" !== T(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", K.support.shrinkWrapBlocks || f.done(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
        }));
        for (r in t) if (o = t[r], Vn.exec(o)) {
            if (delete t[r], o === (g ? "hide" : "show")) continue;
            h.push(r);
        }
        if (a = h.length) for (s = K._data(e, "fxshow") || K._data(e, "fxshow", {}), g ? K(e).show() : f.done(function() {
            K(e).hide();
        }), f.done(function() {
            var t;
            K.removeData(e, "fxshow", !0);
            for (t in d) K.style(e, t, d[t]);
        }), r = 0; a > r; r++) i = h[r], u = f.createTween(i, g ? s[i] : 0), d[i] = s[i] || K.style(e, i), i in s || (s[i] = u.start, g && (u.end = u.start, u.start = "width" === i || "height" === i ? 1 : 0));
    }
    function O(e, t, n, r, i) {
        return new O.prototype.init(e, t, n, r, i);
    }
    function q(e, t) {
        var n, r = {
            "height": e
        }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = yn[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function B(e) {
        return K.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1;
    }
    var R, P, W = e.document, I = e.location, $ = e.navigator, z = e.jQuery, X = e.$, U = Array.prototype.push, Y = Array.prototype.slice, J = Array.prototype.indexOf, Q = Object.prototype.toString, V = Object.prototype.hasOwnProperty, G = String.prototype.trim, K = function(e, t) {
        return new K.fn.init(e, t, R);
    }, Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, et = /\S/, tt = /\s+/, nt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, it = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ot = /^[\],:{}\s]*$/, at = /(?:^|:|,)(?:\s*\[)+/g, st = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, ut = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, lt = /^-ms-/, ct = /-([\da-z])/gi, ft = function(e, t) {
        return (t + "").toUpperCase();
    }, pt = function() {
        W.addEventListener ? (W.removeEventListener("DOMContentLoaded", pt, !1), K.ready()) : "complete" === W.readyState && (W.detachEvent("onreadystatechange", pt), K.ready());
    }, dt = {};
    K.fn = K.prototype = {
        "constructor": K,
        "init": function(e, n, r) {
            var i, o, a;
            if (!e) return this;
            if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [ null, e, null ] : rt.exec(e), i && (i[1] || !n)) {
                    if (i[1]) return n = n instanceof K ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : W, e = K.parseHTML(i[1], a, !0), it.test(i[1]) && K.isPlainObject(n) && this.attr.call(e, n, !0), K.merge(this, e);
                    if (o = W.getElementById(i[2]), o && o.parentNode) {
                        if (o.id !== i[2]) return r.find(e);
                        this.length = 1, this[0] = o;
                    }
                    return this.context = W, this.selector = e, this;
                }
                return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
            }
            return K.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), K.makeArray(e, this));
        },
        "selector": "",
        "jquery": "1.8.1",
        "length": 0,
        "size": function() {
            return this.length;
        },
        "toArray": function() {
            return Y.call(this);
        },
        "get": function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
        },
        "pushStack": function(e, t, n) {
            var r = K.merge(this.constructor(), e);
            return r.prevObject = this, r.context = this.context, "find" === t ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r;
        },
        "each": function(e, t) {
            return K.each(this, e, t);
        },
        "ready": function(e) {
            return K.ready.promise().done(e), this;
        },
        "eq": function(e) {
            return e = +e, -1 === e ? this.slice(e) : this.slice(e, e + 1);
        },
        "first": function() {
            return this.eq(0);
        },
        "last": function() {
            return this.eq(-1);
        },
        "slice": function() {
            return this.pushStack(Y.apply(this, arguments), "slice", Y.call(arguments).join(","));
        },
        "map": function(e) {
            return this.pushStack(K.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        "end": function() {
            return this.prevObject || this.constructor(null);
        },
        "push": U,
        "sort": [].sort,
        "splice": [].splice
    }, K.fn.init.prototype = K.fn, K.extend = K.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {}, u = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" != typeof s && !K.isFunction(s) && (s = {}), l === u && (s = this, --u); l > u; u++) if (null != (e = arguments[u])) for (n in e) r = s[n], i = e[n], s !== i && (c && i && (K.isPlainObject(i) || (o = K.isArray(i))) ? (o ? (o = !1, a = r && K.isArray(r) ? r : []) : a = r && K.isPlainObject(r) ? r : {}, s[n] = K.extend(c, a, i)) : i !== t && (s[n] = i));
        return s;
    }, K.extend({
        "noConflict": function(t) {
            return e.$ === K && (e.$ = X), t && e.jQuery === K && (e.jQuery = z), K;
        },
        "isReady": !1,
        "readyWait": 1,
        "holdReady": function(e) {
            e ? K.readyWait++ : K.ready(!0);
        },
        "ready": function(e) {
            if (e === !0 ? !--K.readyWait : !K.isReady) {
                if (!W.body) return setTimeout(K.ready, 1);
                K.isReady = !0, e !== !0 && --K.readyWait > 0 || (P.resolveWith(W, [ K ]), K.fn.trigger && K(W).trigger("ready").off("ready"));
            }
        },
        "isFunction": function(e) {
            return "function" === K.type(e);
        },
        "isArray": Array.isArray || function(e) {
            return "array" === K.type(e);
        },
        "isWindow": function(e) {
            return null != e && e == e.window;
        },
        "isNumeric": function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
        },
        "type": function(e) {
            return null == e ? String(e) : dt[Q.call(e)] || "object";
        },
        "isPlainObject": function(e) {
            if (!e || "object" !== K.type(e) || e.nodeType || K.isWindow(e)) return !1;
            try {
                if (e.constructor && !V.call(e, "constructor") && !V.call(e.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (n) {
                return !1;
            }
            var r;
            for (r in e) ;
            return r === t || V.call(e, r);
        },
        "isEmptyObject": function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        "error": function(e) {
            throw new Error(e);
        },
        "parseHTML": function(e, t, n) {
            var r;
            return e && "string" == typeof e ? ("boolean" == typeof t && (n = t, t = 0), t = t || W, (r = it.exec(e)) ? [ t.createElement(r[1]) ] : (r = K.buildFragment([ e ], t, n ? null : []), K.merge([], (r.cacheable ? K.clone(r.fragment) : r.fragment).childNodes))) : null;
        },
        "parseJSON": function(t) {
            return t && "string" == typeof t ? (t = K.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : ot.test(t.replace(st, "@").replace(ut, "]").replace(at, "")) ? (new Function("return " + t))() : (K.error("Invalid JSON: " + t), void 0)) : null;
        },
        "parseXML": function(n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n));
            } catch (o) {
                r = t;
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && K.error("Invalid XML: " + n), r;
        },
        "noop": function() {},
        "globalEval": function(t) {
            t && et.test(t) && (e.execScript || function(t) {
                e.eval.call(e, t);
            })(t);
        },
        "camelCase": function(e) {
            return e.replace(lt, "ms-").replace(ct, ft);
        },
        "nodeName": function(e, t) {
            return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase();
        },
        "each": function(e, n, r) {
            var i, o = 0, a = e.length, s = a === t || K.isFunction(e);
            if (r) if (s) {
                for (i in e) if (n.apply(e[i], r) === !1) break;
            } else for (; a > o && n.apply(e[o++], r) !== !1; ) ; else if (s) {
                for (i in e) if (n.call(e[i], i, e[i]) === !1) break;
            } else for (; a > o && n.call(e[o], o, e[o++]) !== !1; ) ;
            return e;
        },
        "trim": G && !G.call(" ") ? function(e) {
            return null == e ? "" : G.call(e);
        } : function(e) {
            return null == e ? "" : e.toString().replace(nt, "");
        },
        "makeArray": function(e, t) {
            var n, r = t || [];
            return null != e && (n = K.type(e), null == e.length || "string" === n || "function" === n || "regexp" === n || K.isWindow(e) ? U.call(r, e) : K.merge(r, e)), r;
        },
        "inArray": function(e, t, n) {
            var r;
            if (t) {
                if (J) return J.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n;
            }
            return -1;
        },
        "merge": function(e, n) {
            var r = n.length, i = e.length, o = 0;
            if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o]; else for (; n[o] !== t; ) e[i++] = n[o++];
            return e.length = i, e;
        },
        "grep": function(e, t, n) {
            var r, i = [], o = 0, a = e.length;
            for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i;
        },
        "map": function(e, n, r) {
            var i, o, a = [], s = 0, u = e.length, l = e instanceof K || u !== t && "number" == typeof u && (u > 0 && e[0] && e[u - 1] || 0 === u || K.isArray(e));
            if (l) for (; u > s; s++) i = n(e[s], s, r), null != i && (a[a.length] = i); else for (o in e) i = n(e[o], o, r), null != i && (a[a.length] = i);
            return a.concat.apply([], a);
        },
        "guid": 1,
        "proxy": function(e, n) {
            var r, i, o;
            return "string" == typeof n && (r = e[n], n = e, e = r), K.isFunction(e) ? (i = Y.call(arguments, 2), o = function() {
                return e.apply(n, i.concat(Y.call(arguments)));
            }, o.guid = e.guid = e.guid || o.guid || K.guid++, o) : t;
        },
        "access": function(e, n, r, i, o, a, s) {
            var u, l = null == r, c = 0, f = e.length;
            if (r && "object" == typeof r) {
                for (c in r) K.access(e, n, c, r[c], 1, a, i);
                o = 1;
            } else if (i !== t) {
                if (u = s === t && K.isFunction(i), l && (u ? (u = n, n = function(e, t, n) {
                    return u.call(K(e), n);
                }) : (n.call(e, i), n = null)), n) for (; f > c; c++) n(e[c], r, u ? i.call(e[c], c, n(e[c], r)) : i, s);
                o = 1;
            }
            return o ? e : l ? n.call(e) : f ? n(e[0], r) : a;
        },
        "now": function() {
            return (new Date).getTime();
        }
    }), K.ready.promise = function(t) {
        if (!P) if (P = K.Deferred(), "complete" === W.readyState) setTimeout(K.ready, 1); else if (W.addEventListener) W.addEventListener("DOMContentLoaded", pt, !1), e.addEventListener("load", K.ready, !1); else {
            W.attachEvent("onreadystatechange", pt), e.attachEvent("onload", K.ready);
            var n = !1;
            try {
                n = null == e.frameElement && W.documentElement;
            } catch (r) {}
            n && n.doScroll && function i() {
                if (!K.isReady) {
                    try {
                        n.doScroll("left");
                    } catch (e) {
                        return setTimeout(i, 50);
                    }
                    K.ready();
                }
            }();
        }
        return P.promise(t);
    }, K.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
        dt["[object " + t + "]"] = t.toLowerCase();
    }), R = K(W);
    var ht = {};
    K.Callbacks = function(e) {
        e = "string" == typeof e ? ht[e] || n(e) : K.extend({}, e);
        var r, i, o, a, s, u, l = [], c = !e.once && [], f = function(t) {
            for (r = e.memory && t, i = !0, u = a || 0, a = 0, s = l.length, o = !0; l && s > u; u++) if (l[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                r = !1;
                break;
            }
            o = !1, l && (c ? c.length && f(c.shift()) : r ? l = [] : p.disable());
        }, p = {
            "add": function() {
                if (l) {
                    var t = l.length;
                    !function n(t) {
                        K.each(t, function(t, r) {
                            var i = K.type(r);
                            "function" !== i || e.unique && p.has(r) ? r && r.length && "string" !== i && n(r) : l.push(r);
                        });
                    }(arguments), o ? s = l.length : r && (a = t, f(r));
                }
                return this;
            },
            "remove": function() {
                return l && K.each(arguments, function(e, t) {
                    for (var n; (n = K.inArray(t, l, n)) > -1; ) l.splice(n, 1), o && (s >= n && s--, u >= n && u--);
                }), this;
            },
            "has": function(e) {
                return K.inArray(e, l) > -1;
            },
            "empty": function() {
                return l = [], this;
            },
            "disable": function() {
                return l = c = r = t, this;
            },
            "disabled": function() {
                return !l;
            },
            "lock": function() {
                return c = t, r || p.disable(), this;
            },
            "locked": function() {
                return !c;
            },
            "fireWith": function(e, t) {
                return t = t || [], t = [ e, t.slice ? t.slice() : t ], l && (!i || c) && (o ? c.push(t) : f(t)), this;
            },
            "fire": function() {
                return p.fireWith(this, arguments), this;
            },
            "fired": function() {
                return !!i;
            }
        };
        return p;
    }, K.extend({
        "Deferred": function(e) {
            var t = [ [ "resolve", "done", K.Callbacks("once memory"), "resolved" ], [ "reject", "fail", K.Callbacks("once memory"), "rejected" ], [ "notify", "progress", K.Callbacks("memory") ] ], n = "pending", r = {
                "state": function() {
                    return n;
                },
                "always": function() {
                    return i.done(arguments).fail(arguments), this;
                },
                "then": function() {
                    var e = arguments;
                    return K.Deferred(function(n) {
                        K.each(t, function(t, r) {
                            var o = r[0], a = e[t];
                            i[r[1]](K.isFunction(a) ? function() {
                                var e = a.apply(this, arguments);
                                e && K.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === i ? n : this, [ e ]);
                            } : n[o]);
                        }), e = null;
                    }).promise();
                },
                "promise": function(e) {
                    return "object" == typeof e ? K.extend(e, r) : r;
                }
            }, i = {};
            return r.pipe = r.then, K.each(t, function(e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s;
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = a.fire, i[o[0] + "With"] = a.fireWith;
            }), r.promise(i), e && e.call(i, i), i;
        },
        "when": function(e) {
            var t, n, r, i = 0, o = Y.call(arguments), a = o.length, s = 1 !== a || e && K.isFunction(e.promise) ? a : 0, u = 1 === s ? e : K.Deferred(), l = function(e, n, r) {
                return function(i) {
                    n[e] = this, r[e] = arguments.length > 1 ? Y.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r);
                };
            };
            if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && K.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, o), u.promise();
        }
    }), K.support = function() {
        var t, n, r, i, o, a, s, u, l, c, f, p = W.createElement("div");
        if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0], r.style.cssText = "top:1px;float:left;opacity:.5", !n || !n.length || !r) return {};
        i = W.createElement("select"), o = i.appendChild(W.createElement("option")), a = p.getElementsByTagName("input")[0], t = {
            "leadingWhitespace": 3 === p.firstChild.nodeType,
            "tbody": !p.getElementsByTagName("tbody").length,
            "htmlSerialize": !!p.getElementsByTagName("link").length,
            "style": /top/.test(r.getAttribute("style")),
            "hrefNormalized": "/a" === r.getAttribute("href"),
            "opacity": /^0.5/.test(r.style.opacity),
            "cssFloat": !!r.style.cssFloat,
            "checkOn": "on" === a.value,
            "optSelected": o.selected,
            "getSetAttribute": "t" !== p.className,
            "enctype": !!W.createElement("form").enctype,
            "html5Clone": "<:nav></:nav>" !== W.createElement("nav").cloneNode(!0).outerHTML,
            "boxModel": "CSS1Compat" === W.compatMode,
            "submitBubbles": !0,
            "changeBubbles": !0,
            "focusinBubbles": !1,
            "deleteExpando": !0,
            "noCloneEvent": !0,
            "inlineBlockNeedsLayout": !1,
            "shrinkWrapBlocks": !1,
            "reliableMarginRight": !0,
            "boxSizingReliable": !0,
            "pixelPosition": !1
        }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !o.disabled;
        try {
            delete p.test;
        } catch (d) {
            t.deleteExpando = !1;
        }
        if (!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", f = function() {
            t.noCloneEvent = !1;
        }), p.cloneNode(!0).fireEvent("onclick"), p.detachEvent("onclick", f)), a = W.createElement("input"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), p.appendChild(a), s = W.createDocumentFragment(), s.appendChild(p.lastChild), t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = a.checked, s.removeChild(a), s.appendChild(p), p.attachEvent) for (l in {
            "submit": !0,
            "change": !0,
            "focusin": !0
        }) u = "on" + l, c = u in p, c || (p.setAttribute(u, "return;"), c = "function" == typeof p[u]), t[l + "Bubbles"] = c;
        return K(function() {
            var n, r, i, o, a = "padding:0;margin:0;border:0;display:block;overflow:hidden;", s = W.getElementsByTagName("body")[0];
            s && (n = W.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", s.insertBefore(n, s.firstChild), r = W.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = r.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === i[0].offsetHeight, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === r.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(r, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(r, null) || {
                "width": "4px"
            }).width, o = W.createElement("div"), o.style.cssText = r.style.cssText = a, o.style.marginRight = o.style.width = "0", r.style.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), "undefined" != typeof r.style.zoom && (r.innerHTML = "", r.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === r.offsetWidth, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== r.offsetWidth, n.style.zoom = 1), s.removeChild(n), n = r = i = o = null);
        }), s.removeChild(p), n = r = i = o = a = s = p = null, t;
    }();
    var gt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, mt = /([A-Z])/g;
    K.extend({
        "cache": {},
        "deletedIds": [],
        "uuid": 0,
        "expando": "jQuery" + (K.fn.jquery + Math.random()).replace(/\D/g, ""),
        "noData": {
            "embed": !0,
            "object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            "applet": !0
        },
        "hasData": function(e) {
            return e = e.nodeType ? K.cache[e[K.expando]] : e[K.expando], !!e && !i(e);
        },
        "data": function(e, n, r, i) {
            if (K.acceptData(e)) {
                var o, a, s = K.expando, u = "string" == typeof n, l = e.nodeType, c = l ? K.cache : e, f = l ? e[s] : e[s] && s;
                if (f && c[f] && (i || c[f].data) || !u || r !== t) return f || (l ? e[s] = f = K.deletedIds.pop() || ++K.uuid : f = s), c[f] || (c[f] = {}, l || (c[f].toJSON = K.noop)), ("object" == typeof n || "function" == typeof n) && (i ? c[f] = K.extend(c[f], n) : c[f].data = K.extend(c[f].data, n)), o = c[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[K.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[K.camelCase(n)])) : a = o, a;
            }
        },
        "removeData": function(e, t, n) {
            if (K.acceptData(e)) {
                var r, o, a, s = e.nodeType, u = s ? K.cache : e, l = s ? e[K.expando] : K.expando;
                if (u[l]) {
                    if (t && (r = n ? u[l] : u[l].data)) {
                        K.isArray(t) || (t in r ? t = [ t ] : (t = K.camelCase(t), t = t in r ? [ t ] : t.split(" ")));
                        for (o = 0, a = t.length; a > o; o++) delete r[t[o]];
                        if (!(n ? i : K.isEmptyObject)(r)) return;
                    }
                    (n || (delete u[l].data, i(u[l]))) && (s ? K.cleanData([ e ], !0) : K.support.deleteExpando || u != u.window ? delete u[l] : u[l] = null);
                }
            }
        },
        "_data": function(e, t, n) {
            return K.data(e, t, n, !0);
        },
        "acceptData": function(e) {
            var t = e.nodeName && K.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t;
        }
    }), K.fn.extend({
        "data": function(e, n) {
            var i, o, a, s, u, l = this[0], c = 0, f = null;
            if (e === t) {
                if (this.length && (f = K.data(l), 1 === l.nodeType && !K._data(l, "parsedAttrs"))) {
                    for (a = l.attributes, u = a.length; u > c; c++) s = a[c].name, 0 === s.indexOf("data-") && (s = K.camelCase(s.substring(5)), r(l, s, f[s]));
                    K._data(l, "parsedAttrs", !0);
                }
                return f;
            }
            return "object" == typeof e ? this.each(function() {
                K.data(this, e);
            }) : (i = e.split(".", 2), i[1] = i[1] ? "." + i[1] : "", o = i[1] + "!", K.access(this, function(n) {
                return n === t ? (f = this.triggerHandler("getData" + o, [ i[0] ]), f === t && l && (f = K.data(l, e), f = r(l, e, f)), f === t && i[1] ? this.data(i[0]) : f) : (i[1] = n, this.each(function() {
                    var t = K(this);
                    t.triggerHandler("setData" + o, i), K.data(this, e, n), t.triggerHandler("changeData" + o, i);
                }), void 0);
            }, null, n, arguments.length > 1, null, !1));
        },
        "removeData": function(e) {
            return this.each(function() {
                K.removeData(this, e);
            });
        }
    }), K.extend({
        "queue": function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = K._data(e, t), n && (!r || K.isArray(n) ? r = K._data(e, t, K.makeArray(n)) : r.push(n)), r || []) : void 0;
        },
        "dequeue": function(e, t) {
            t = t || "fx";
            var n = K.queue(e, t), r = n.length, i = n.shift(), o = K._queueHooks(e, t), a = function() {
                K.dequeue(e, t);
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
        },
        "_queueHooks": function(e, t) {
            var n = t + "queueHooks";
            return K._data(e, n) || K._data(e, n, {
                "empty": K.Callbacks("once memory").add(function() {
                    K.removeData(e, t + "queue", !0), K.removeData(e, n, !0);
                })
            });
        }
    }), K.fn.extend({
        "queue": function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? K.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = K.queue(this, e, n);
                K._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && K.dequeue(this, e);
            });
        },
        "dequeue": function(e) {
            return this.each(function() {
                K.dequeue(this, e);
            });
        },
        "delay": function(e, t) {
            return e = K.fx ? K.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r);
                };
            });
        },
        "clearQueue": function(e) {
            return this.queue(e || "fx", []);
        },
        "promise": function(e, n) {
            var r, i = 1, o = K.Deferred(), a = this, s = this.length, u = function() {
                --i || o.resolveWith(a, [ a ]);
            };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--; ) r = K._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
            return u(), o.promise(n);
        }
    });
    var yt, vt, bt, xt = /[\t\r\n]/g, wt = /\r/g, Tt = /^(?:button|input)$/i, Nt = /^(?:button|input|object|select|textarea)$/i, Ct = /^a(?:rea|)$/i, kt = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, Et = K.support.getSetAttribute;
    K.fn.extend({
        "attr": function(e, t) {
            return K.access(this, K.attr, e, t, arguments.length > 1);
        },
        "removeAttr": function(e) {
            return this.each(function() {
                K.removeAttr(this, e);
            });
        },
        "prop": function(e, t) {
            return K.access(this, K.prop, e, t, arguments.length > 1);
        },
        "removeProp": function(e) {
            return e = K.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e];
                } catch (n) {}
            });
        },
        "addClass": function(e) {
            var t, n, r, i, o, a, s;
            if (K.isFunction(e)) return this.each(function(t) {
                K(this).addClass(e.call(this, t, this.className));
            });
            if (e && "string" == typeof e) for (t = e.split(tt), n = 0, r = this.length; r > n; n++) if (i = this[n], 1 === i.nodeType) if (i.className || 1 !== t.length) {
                for (o = " " + i.className + " ", a = 0, s = t.length; s > a; a++) ~o.indexOf(" " + t[a] + " ") || (o += t[a] + " ");
                i.className = K.trim(o);
            } else i.className = e;
            return this;
        },
        "removeClass": function(e) {
            var n, r, i, o, a, s, u;
            if (K.isFunction(e)) return this.each(function(t) {
                K(this).removeClass(e.call(this, t, this.className));
            });
            if (e && "string" == typeof e || e === t) for (n = (e || "").split(tt), s = 0, u = this.length; u > s; s++) if (i = this[s], 1 === i.nodeType && i.className) {
                for (r = (" " + i.className + " ").replace(xt, " "), o = 0, a = n.length; a > o; o++) for (; r.indexOf(" " + n[o] + " ") > -1; ) r = r.replace(" " + n[o] + " ", " ");
                i.className = e ? K.trim(r) : "";
            }
            return this;
        },
        "toggleClass": function(e, t) {
            var n = typeof e, r = "boolean" == typeof t;
            return K.isFunction(e) ? this.each(function(n) {
                K(this).toggleClass(e.call(this, n, this.className, t), t);
            }) : this.each(function() {
                if ("string" === n) for (var i, o = 0, a = K(this), s = t, u = e.split(tt); i = u[o++]; ) s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i); else ("undefined" === n || "boolean" === n) && (this.className && K._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : K._data(this, "__className__") || "");
            });
        },
        "hasClass": function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(xt, " ").indexOf(t) > -1) return !0;
            return !1;
        },
        "val": function(e) {
            var n, r, i, o = this[0];
            if (arguments.length) return i = K.isFunction(e), this.each(function(r) {
                var o, a = K(this);
                1 === this.nodeType && (o = i ? e.call(this, r, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : K.isArray(o) && (o = K.map(o, function(e) {
                    return null == e ? "" : e + "";
                })), n = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o));
            });
            if (o) return n = K.valHooks[o.type] || K.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (r = n.get(o, "value")) !== t ? r : (r = o.value, "string" == typeof r ? r.replace(wt, "") : null == r ? "" : r);
        }
    }), K.extend({
        "valHooks": {
            "option": {
                "get": function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text;
                }
            },
            "select": {
                "get": function(e) {
                    var t, n, r, i, o = e.selectedIndex, a = [], s = e.options, u = "select-one" === e.type;
                    if (0 > o) return null;
                    for (n = u ? o : 0, r = u ? o + 1 : s.length; r > n; n++) if (i = s[n], !(!i.selected || (K.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && K.nodeName(i.parentNode, "optgroup"))) {
                        if (t = K(i).val(), u) return t;
                        a.push(t);
                    }
                    return u && !a.length && s.length ? K(s[o]).val() : a;
                },
                "set": function(e, t) {
                    var n = K.makeArray(t);
                    return K(e).find("option").each(function() {
                        this.selected = K.inArray(K(this).val(), n) >= 0;
                    }), n.length || (e.selectedIndex = -1), n;
                }
            }
        },
        "attrFn": {},
        "attr": function(e, n, r, i) {
            var o, a, s, u = e.nodeType;
            if (e && 3 !== u && 8 !== u && 2 !== u) return i && K.isFunction(K.fn[n]) ? K(e)[n](r) : "undefined" == typeof e.getAttribute ? K.prop(e, n, r) : (s = 1 !== u || !K.isXMLDoc(e), s && (n = n.toLowerCase(), a = K.attrHooks[n] || (kt.test(n) ? vt : yt)), r !== t ? null === r ? (K.removeAttr(e, n), void 0) : a && "set" in a && s && (o = a.set(e, r, n)) !== t ? o : (e.setAttribute(n, "" + r), r) : a && "get" in a && s && null !== (o = a.get(e, n)) ? o : (o = e.getAttribute(n), null === o ? t : o));
        },
        "removeAttr": function(e, t) {
            var n, r, i, o, a = 0;
            if (t && 1 === e.nodeType) for (r = t.split(tt); a < r.length; a++) i = r[a], i && (n = K.propFix[i] || i, o = kt.test(i), o || K.attr(e, i, ""), e.removeAttribute(Et ? i : n), o && n in e && (e[n] = !1));
        },
        "attrHooks": {
            "type": {
                "set": function(e, t) {
                    if (Tt.test(e.nodeName) && e.parentNode) K.error("type property can't be changed"); else if (!K.support.radioValue && "radio" === t && K.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            },
            "value": {
                "get": function(e, t) {
                    return yt && K.nodeName(e, "button") ? yt.get(e, t) : t in e ? e.value : null;
                },
                "set": function(e, t, n) {
                    return yt && K.nodeName(e, "button") ? yt.set(e, t, n) : (e.value = t, void 0);
                }
            }
        },
        "propFix": {
            "tabindex": "tabIndex",
            "readonly": "readOnly",
            "for": "htmlFor",
            "class": "className",
            "maxlength": "maxLength",
            "cellspacing": "cellSpacing",
            "cellpadding": "cellPadding",
            "rowspan": "rowSpan",
            "colspan": "colSpan",
            "usemap": "useMap",
            "frameborder": "frameBorder",
            "contenteditable": "contentEditable"
        },
        "prop": function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !K.isXMLDoc(e), a && (n = K.propFix[n] || n, o = K.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n];
        },
        "propHooks": {
            "tabIndex": {
                "get": function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : Nt.test(e.nodeName) || Ct.test(e.nodeName) && e.href ? 0 : t;
                }
            }
        }
    }), vt = {
        "get": function(e, n) {
            var r, i = K.prop(e, n);
            return i === !0 || "boolean" != typeof i && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t;
        },
        "set": function(e, t, n) {
            var r;
            return t === !1 ? K.removeAttr(e, n) : (r = K.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n;
        }
    }, Et || (bt = {
        "name": !0,
        "id": !0,
        "coords": !0
    }, yt = K.valHooks.button = {
        "get": function(e, n) {
            var r;
            return r = e.getAttributeNode(n), r && (bt[n] ? "" !== r.value : r.specified) ? r.value : t;
        },
        "set": function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = W.createAttribute(n), e.setAttributeNode(r)), r.value = t + "";
        }
    }, K.each([ "width", "height" ], function(e, t) {
        K.attrHooks[t] = K.extend(K.attrHooks[t], {
            "set": function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0;
            }
        });
    }), K.attrHooks.contenteditable = {
        "get": yt.get,
        "set": function(e, t, n) {
            "" === t && (t = "false"), yt.set(e, t, n);
        }
    }), K.support.hrefNormalized || K.each([ "href", "src", "width", "height" ], function(e, n) {
        K.attrHooks[n] = K.extend(K.attrHooks[n], {
            "get": function(e) {
                var r = e.getAttribute(n, 2);
                return null === r ? t : r;
            }
        });
    }), K.support.style || (K.attrHooks.style = {
        "get": function(e) {
            return e.style.cssText.toLowerCase() || t;
        },
        "set": function(e, t) {
            return e.style.cssText = "" + t;
        }
    }), K.support.optSelected || (K.propHooks.selected = K.extend(K.propHooks.selected, {
        "get": function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
        }
    })), K.support.enctype || (K.propFix.enctype = "encoding"), K.support.checkOn || K.each([ "radio", "checkbox" ], function() {
        K.valHooks[this] = {
            "get": function(e) {
                return null === e.getAttribute("value") ? "on" : e.value;
            }
        };
    }), K.each([ "radio", "checkbox" ], function() {
        K.valHooks[this] = K.extend(K.valHooks[this], {
            "set": function(e, t) {
                return K.isArray(t) ? e.checked = K.inArray(K(e).val(), t) >= 0 : void 0;
            }
        });
    });
    var St = /^(?:textarea|input|select)$/i, jt = /^([^\.]*|)(?:\.(.+)|)$/, At = /(?:^|\s)hover(\.\S+|)\b/, Dt = /^key/, Lt = /^(?:mouse|contextmenu)|click/, Ht = /^(?:focusinfocus|focusoutblur)$/, Mt = function(e) {
        return K.event.special.hover ? e : e.replace(At, "mouseenter$1 mouseleave$1");
    };
    K.event = {
        "add": function(e, n, r, i, o) {
            var a, s, u, l, c, f, p, d, h, g, m;
            if (3 !== e.nodeType && 8 !== e.nodeType && n && r && (a = K._data(e))) {
                for (r.handler && (h = r, r = h.handler, o = h.selector), r.guid || (r.guid = K.guid++), u = a.events, u || (a.events = u = {}), s = a.handle, s || (a.handle = s = function(e) {
                    return "undefined" == typeof K || e && K.event.triggered === e.type ? t : K.event.dispatch.apply(s.elem, arguments);
                }, s.elem = e), n = K.trim(Mt(n)).split(" "), l = 0; l < n.length; l++) c = jt.exec(n[l]) || [], f = c[1], p = (c[2] || "").split(".").sort(), m = K.event.special[f] || {}, f = (o ? m.delegateType : m.bindType) || f, m = K.event.special[f] || {}, d = K.extend({
                    "type": f,
                    "origType": c[1],
                    "data": i,
                    "handler": r,
                    "guid": r.guid,
                    "selector": o,
                    "namespace": p.join(".")
                }, h), g = u[f], g || (g = u[f] = [], g.delegateCount = 0, m.setup && m.setup.call(e, i, p, s) !== !1 || (e.addEventListener ? e.addEventListener(f, s, !1) : e.attachEvent && e.attachEvent("on" + f, s))), m.add && (m.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), o ? g.splice(g.delegateCount++, 0, d) : g.push(d), K.event.global[f] = !0;
                e = null;
            }
        },
        "global": {},
        "remove": function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, m = K.hasData(e) && K._data(e);
            if (m && (p = m.events)) {
                for (t = K.trim(Mt(t || "")).split(" "), o = 0; o < t.length; o++) if (a = jt.exec(t[o]) || [], s = u = a[1], l = a[2], s) {
                    for (d = K.event.special[s] || {}, s = (r ? d.delegateType : d.bindType) || s, h = p[s] || [], c = h.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, f = 0; f < h.length; f++) g = h[f], !(!i && u !== g.origType || n && n.guid !== g.guid || l && !l.test(g.namespace) || r && r !== g.selector && ("**" !== r || !g.selector) || (h.splice(f--, 1), g.selector && h.delegateCount--, !d.remove || !d.remove.call(e, g)));
                    0 === h.length && c !== h.length && ((!d.teardown || d.teardown.call(e, l, m.handle) === !1) && K.removeEvent(e, s, m.handle), delete p[s]);
                } else for (s in p) K.event.remove(e, s + t[o], n, r, !0);
                K.isEmptyObject(p) && (delete m.handle, K.removeData(e, "events", !0));
            }
        },
        "customEvent": {
            "getData": !0,
            "setData": !0,
            "changeData": !0
        },
        "trigger": function(n, r, i, o) {
            if (!i || 3 !== i.nodeType && 8 !== i.nodeType) {
                var a, s, u, l, c, f, p, d, h, g, m = n.type || n, y = [];
                if (Ht.test(m + K.event.triggered)) return;
                if (m.indexOf("!") >= 0 && (m = m.slice(0, -1), s = !0), m.indexOf(".") >= 0 && (y = m.split("."), m = y.shift(), y.sort()), (!i || K.event.customEvent[m]) && !K.event.global[m]) return;
                if (n = "object" == typeof n ? n[K.expando] ? n : new K.Event(m, n) : new K.Event(m), n.type = m, n.isTrigger = !0, n.exclusive = s, n.namespace = y.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, f = m.indexOf(":") < 0 ? "on" + m : "", !i) {
                    a = K.cache;
                    for (u in a) a[u].events && a[u].events[m] && K.event.trigger(n, r, a[u].handle.elem, !0);
                    return;
                }
                if (n.result = t, n.target || (n.target = i), r = null != r ? K.makeArray(r) : [], r.unshift(n), p = K.event.special[m] || {}, p.trigger && p.trigger.apply(i, r) === !1) return;
                if (h = [ [ i, p.bindType || m ] ], !o && !p.noBubble && !K.isWindow(i)) {
                    for (g = p.delegateType || m, l = Ht.test(g + m) ? i : i.parentNode, c = i; l; l = l.parentNode) h.push([ l, g ]), c = l;
                    c === (i.ownerDocument || W) && h.push([ c.defaultView || c.parentWindow || e, g ]);
                }
                for (u = 0; u < h.length && !n.isPropagationStopped(); u++) l = h[u][0], n.type = h[u][1], d = (K._data(l, "events") || {})[n.type] && K._data(l, "handle"), d && d.apply(l, r), d = f && l[f], d && K.acceptData(l) && d.apply(l, r) === !1 && n.preventDefault();
                return n.type = m, !(o || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === m && K.nodeName(i, "a") || !K.acceptData(i) || !f || !i[m] || ("focus" === m || "blur" === m) && 0 === n.target.offsetWidth || K.isWindow(i) || (c = i[f], c && (i[f] = null), K.event.triggered = m, i[m](), K.event.triggered = t, !c || !(i[f] = c))), n.result;
            }
        },
        "dispatch": function(n) {
            n = K.event.fix(n || e.event);
            var r, i, o, a, s, u, l, c, f, p = (K._data(this, "events") || {})[n.type] || [], d = p.delegateCount, h = [].slice.call(arguments), g = !n.exclusive && !n.namespace, m = K.event.special[n.type] || {}, y = [];
            if (h[0] = n, n.delegateTarget = this, !m.preDispatch || m.preDispatch.call(this, n) !== !1) {
                if (d && (!n.button || "click" !== n.type)) for (o = n.target; o != this; o = o.parentNode || this) if (o.disabled !== !0 || "click" !== n.type) {
                    for (s = {}, l = [], r = 0; d > r; r++) c = p[r], f = c.selector, s[f] === t && (s[f] = K(f, this).index(o) >= 0), s[f] && l.push(c);
                    l.length && y.push({
                        "elem": o,
                        "matches": l
                    });
                }
                for (p.length > d && y.push({
                    "elem": this,
                    "matches": p.slice(d)
                }), r = 0; r < y.length && !n.isPropagationStopped(); r++) for (u = y[r], n.currentTarget = u.elem, i = 0; i < u.matches.length && !n.isImmediatePropagationStopped(); i++) c = u.matches[i], (g || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) && (n.data = c.data, n.handleObj = c, a = ((K.event.special[c.origType] || {}).handle || c.handler).apply(u.elem, h), a !== t && (n.result = a, a === !1 && (n.preventDefault(), n.stopPropagation())));
                return m.postDispatch && m.postDispatch.call(this, n), n.result;
            }
        },
        "props": "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        "fixHooks": {},
        "keyHooks": {
            "props": "char charCode key keyCode".split(" "),
            "filter": function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
            }
        },
        "mouseHooks": {
            "props": "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            "filter": function(e, n) {
                var r, i, o, a = n.button, s = n.fromElement;
                return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || W, i = r.documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), !e.which && a !== t && (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e;
            }
        },
        "fix": function(e) {
            if (e[K.expando]) return e;
            var t, n, r = e, i = K.event.fixHooks[e.type] || {}, o = i.props ? this.props.concat(i.props) : this.props;
            for (e = K.Event(r), t = o.length; t; ) n = o[--t], e[n] = r[n];
            return e.target || (e.target = r.srcElement || W), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, i.filter ? i.filter(e, r) : e;
        },
        "special": {
            "load": {
                "noBubble": !0
            },
            "focus": {
                "delegateType": "focusin"
            },
            "blur": {
                "delegateType": "focusout"
            },
            "beforeunload": {
                "setup": function(e, t, n) {
                    K.isWindow(this) && (this.onbeforeunload = n);
                },
                "teardown": function(e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null);
                }
            }
        },
        "simulate": function(e, t, n, r) {
            var i = K.extend(new K.Event, n, {
                "type": e,
                "isSimulated": !0,
                "originalEvent": {}
            });
            r ? K.event.trigger(i, null, t) : K.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
        }
    }, K.event.handle = K.event.dispatch, K.removeEvent = W.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1);
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n));
    }, K.Event = function(e, t) {
        return this instanceof K.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? a : o) : this.type = e, t && K.extend(this, t), this.timeStamp = e && e.timeStamp || K.now(), this[K.expando] = !0, void 0) : new K.Event(e, t);
    }, K.Event.prototype = {
        "preventDefault": function() {
            this.isDefaultPrevented = a;
            var e = this.originalEvent;
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
        },
        "stopPropagation": function() {
            this.isPropagationStopped = a;
            var e = this.originalEvent;
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
        },
        "stopImmediatePropagation": function() {
            this.isImmediatePropagationStopped = a, this.stopPropagation();
        },
        "isDefaultPrevented": o,
        "isPropagationStopped": o,
        "isImmediatePropagationStopped": o
    }, K.each({
        "mouseenter": "mouseover",
        "mouseleave": "mouseout"
    }, function(e, t) {
        K.event.special[e] = {
            "delegateType": t,
            "bindType": t,
            "handle": function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return o.selector, (!i || i !== r && !K.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
            }
        };
    }), K.support.submitBubbles || (K.event.special.submit = {
        "setup": function() {
            return K.nodeName(this, "form") ? !1 : (K.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target, r = K.nodeName(n, "input") || K.nodeName(n, "button") ? n.form : t;
                r && !K._data(r, "_submit_attached") && (K.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0;
                }), K._data(r, "_submit_attached", !0));
            }), void 0);
        },
        "postDispatch": function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && K.event.simulate("submit", this.parentNode, e, !0));
        },
        "teardown": function() {
            return K.nodeName(this, "form") ? !1 : (K.event.remove(this, "._submit"), void 0);
        }
    }), K.support.changeBubbles || (K.event.special.change = {
        "setup": function() {
            return St.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (K.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
            }), K.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), K.event.simulate("change", this, e, !0);
            })), !1) : (K.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                St.test(t.nodeName) && !K._data(t, "_change_attached") && (K.event.add(t, "change._change", function(e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && K.event.simulate("change", this.parentNode, e, !0);
                }), K._data(t, "_change_attached", !0));
            }), void 0);
        },
        "handle": function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0;
        },
        "teardown": function() {
            return K.event.remove(this, "._change"), !St.test(this.nodeName);
        }
    }), K.support.focusinBubbles || K.each({
        "focus": "focusin",
        "blur": "focusout"
    }, function(e, t) {
        var n = 0, r = function(e) {
            K.event.simulate(t, e.target, K.event.fix(e), !0);
        };
        K.event.special[t] = {
            "setup": function() {
                0 === n++ && W.addEventListener(e, r, !0);
            },
            "teardown": function() {
                0 === --n && W.removeEventListener(e, r, !0);
            }
        };
    }), K.fn.extend({
        "on": function(e, n, r, i, a) {
            var s, u;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (u in e) this.on(u, n, r, e[u], a);
                return this;
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = o; else if (!i) return this;
            return 1 === a && (s = i, i = function(e) {
                return K().off(e), s.apply(this, arguments);
            }, i.guid = s.guid || (s.guid = K.guid++)), this.each(function() {
                K.event.add(this, e, i, r, n);
            });
        },
        "one": function(e, t, n, r) {
            return this.on(e, t, n, r, 1);
        },
        "off": function(e, n, r) {
            var i, a;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, K(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (a in e) this.off(a, n, e[a]);
                return this;
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = o), this.each(function() {
                K.event.remove(this, e, r, n);
            });
        },
        "bind": function(e, t, n) {
            return this.on(e, null, t, n);
        },
        "unbind": function(e, t) {
            return this.off(e, null, t);
        },
        "live": function(e, t, n) {
            return K(this.context).on(e, this.selector, t, n), this;
        },
        "die": function(e, t) {
            return K(this.context).off(e, this.selector || "**", t), this;
        },
        "delegate": function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        "undelegate": function(e, t, n) {
            return 1 == arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        },
        "trigger": function(e, t) {
            return this.each(function() {
                K.event.trigger(e, t, this);
            });
        },
        "triggerHandler": function(e, t) {
            return this[0] ? K.event.trigger(e, t, this[0], !0) : void 0;
        },
        "toggle": function(e) {
            var t = arguments, n = e.guid || K.guid++, r = 0, i = function(n) {
                var i = (K._data(this, "lastToggle" + e.guid) || 0) % r;
                return K._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1;
            };
            for (i.guid = n; r < t.length; ) t[r++].guid = n;
            return this.click(i);
        },
        "hover": function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        K.fn[t] = function(e, n) {
            return null == n && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        }, Dt.test(t) && (K.event.fixHooks[t] = K.event.keyHooks), Lt.test(t) && (K.event.fixHooks[t] = K.event.mouseHooks);
    }), function(e, t) {
        function n(e, t, n, r) {
            n = n || [], t = t || j;
            var i, o, a, s, u = t.nodeType;
            if (1 !== u && 9 !== u) return [];
            if (!e || "string" != typeof e) return n;
            if (a = x(t), !a && !r && (i = Q.exec(e))) if (s = i[1]) {
                if (9 === u) {
                    if (o = t.getElementById(s), !o || !o.parentNode) return n;
                    if (o.id === s) return n.push(o), n;
                } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && w(t, o) && o.id === s) return n.push(o), n;
            } else {
                if (i[2]) return H.apply(n, L.call(t.getElementsByTagName(e), 0)), n;
                if ((s = i[3]) && st && t.getElementsByClassName) return H.apply(n, L.call(t.getElementsByClassName(s), 0)), n;
            }
            return h(e, t, n, r, a);
        }
        function r(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e;
            };
        }
        function i(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function o(e, t, n) {
            if (e === t) return n;
            for (var r = e.nextSibling; r; ) {
                if (r === t) return -1;
                r = r.nextSibling;
            }
            return 1;
        }
        function a(e, t, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g = !r && t !== j, m = (g ? "<s>" : "") + e.replace(X, "$1<s>"), y = O[S][m];
            if (y) return i ? 0 : L.call(y, 0);
            for (l = e, c = [], p = 0, d = v.preFilter, h = v.filter; l; ) {
                (!o || (a = U.exec(l))) && (a && (l = l.slice(a[0].length), s.selector = f), c.push(s = []), f = "", g && (l = " " + l)), o = !1, (a = Y.exec(l)) && (f += a[0], l = l.slice(a[0].length), o = s.push({
                    "part": a.pop().replace(X, " "),
                    "string": a[0],
                    "captures": a
                }));
                for (u in h) (a = nt[u].exec(l)) && (!d[u] || (a = d[u](a, t, r))) && (f += a[0], l = l.slice(a[0].length), o = s.push({
                    "part": u,
                    "string": a.shift(),
                    "captures": a
                }));
                if (!o) break;
            }
            return f && (s.selector = f), i ? l.length : l ? n.error(e) : L.call(O(m, c), 0);
        }
        function s(e, t, n, r) {
            var i = t.dir, o = D++;
            return e || (e = function(e) {
                return e === n;
            }), t.first ? function(t) {
                for (; t = t[i]; ) if (1 === t.nodeType) return e(t) && t;
            } : r ? function(t) {
                for (; t = t[i]; ) if (1 === t.nodeType && e(t)) return t;
            } : function(t) {
                for (var n, r = o + "." + g, a = r + "." + m; t = t[i]; ) if (1 === t.nodeType) {
                    if ((n = t[S]) === a) return t.sizset;
                    if ("string" == typeof n && 0 === n.indexOf(r)) {
                        if (t.sizset) return t;
                    } else {
                        if (t[S] = a, e(t)) return t.sizset = !0, t;
                        t.sizset = !1;
                    }
                }
            };
        }
        function u(e, t) {
            return e ? function(n) {
                var r = t(n);
                return r && e(r === !0 ? n : r);
            } : t;
        }
        function l(e, t, n) {
            for (var r, i, o = 0; r = e[o]; o++) i = v.relative[r.part] ? s(i, v.relative[r.part], t, n) : u(i, v.filter[r.part].apply(null, r.captures.concat(t, n)));
            return i;
        }
        function c(e) {
            return function(t) {
                for (var n, r = 0; n = e[r]; r++) if (n(t)) return !0;
                return !1;
            };
        }
        function f(e, t, r, i) {
            for (var o = 0, a = t.length; a > o; o++) n(e, t[o], r, i);
        }
        function p(e, t, r, i, o, a) {
            var s, u = v.setFilters[t.toLowerCase()];
            return u || n.error(t), (e || !(s = o)) && f(e || "*", i, s = [], o), s.length > 0 ? u(s, r, a) : [];
        }
        function d(e, r, i, o) {
            for (var a, s, u, l, c, d, h, g, m, y, v, b, x, w = 0, T = e.length, N = nt.POS, C = new RegExp("^" + N.source + "(?!" + B + ")", "i"), k = function() {
                for (var e = 1, n = arguments.length - 2; n > e; e++) arguments[e] === t && (m[e] = t);
            }; T > w; w++) {
                for (a = e[w], s = "", g = o, u = 0, l = a.length; l > u; u++) {
                    if (c = a[u], d = c.string, "PSEUDO" === c.part) for (N.exec(""), h = 0; m = N.exec(d); ) y = !0, v = N.lastIndex = m.index + m[0].length, v > h && (s += d.slice(h, m.index), h = v, b = [ r ], Y.test(s) && (g && (b = g), g = o), (x = G.test(s)) && (s = s.slice(0, -5).replace(Y, "$&*"), h++), m.length > 1 && m[0].replace(C, k), g = p(s, m[1], m[2], b, g, x)), s = "";
                    y || (s += d), y = !1;
                }
                s ? Y.test(s) ? f(s, g || [ r ], i, o) : n(s, r, i, o ? o.concat(g) : g) : H.apply(i, g);
            }
            return 1 === T ? i : n.uniqueSort(i);
        }
        function h(e, t, n, r, i) {
            e = e.replace(X, "$1");
            var o, s, u, l, c, f, p, h, y, b = a(e, t, i), x = t.nodeType;
            if (nt.POS.test(e)) return d(b, t, n, r);
            if (r) o = L.call(r, 0); else if (1 === b.length) {
                if ((c = L.call(b[0], 0)).length > 2 && "ID" === (f = c[0]).part && 9 === x && !i && v.relative[c[1].part]) {
                    if (t = v.find.ID(f.captures[0].replace(tt, ""), t, i)[0], !t) return n;
                    e = e.slice(c.shift().string.length);
                }
                for (h = (b = V.exec(c[0].string)) && !b.index && t.parentNode || t, p = "", l = c.length - 1; l >= 0 && (f = c[l], y = f.part, p = f.string + p, !v.relative[y]); l--) if (v.order.test(y)) {
                    if (o = v.find[y](f.captures[0].replace(tt, ""), h, i), null == o) continue;
                    e = e.slice(0, e.length - p.length) + p.replace(nt[y], ""), e || H.apply(n, L.call(o, 0));
                    break;
                }
            }
            if (e) for (s = T(e, t, i), g = s.dirruns++, null == o && (o = v.find.TAG("*", V.test(e) && t.parentNode || t)), l = 0; u = o[l]; l++) m = s.runs++, s(u) && n.push(u);
            return n;
        }
        var g, m, y, v, b, x, w, T, N, C, k = !0, E = "undefined", S = ("sizcache" + Math.random()).replace(".", ""), j = e.document, A = j.documentElement, D = 0, L = [].slice, H = [].push, M = function(e, t) {
            return e[S] = t || !0, e;
        }, _ = function() {
            var e = {}, t = [];
            return M(function(n, r) {
                return t.push(n) > v.cacheLength && delete e[t.shift()], e[n] = r;
            }, e);
        }, F = _(), O = _(), q = _(), B = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", P = R.replace("w", "w#"), W = "([*^$|!~]?=)", I = "\\[" + B + "*(" + R + ")" + B + "*(?:" + W + B + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + P + ")|)|)" + B + "*\\]", $ = ":(" + R + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + I + ")|[^:]|\\\\.)*|.*))\\)|)", z = ":(nth|eq|gt|lt|first|last|even|odd)(?:\\(((?:-\\d)?\\d*)\\)|)(?=[^-]|$)", X = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"), U = new RegExp("^" + B + "*," + B + "*"), Y = new RegExp("^" + B + "*([\\x20\\t\\r\\n\\f>+~])" + B + "*"), J = new RegExp($), Q = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, V = /[\x20\t\r\n\f]*[+~]/, G = /:not\($/, Z = /h\d/i, et = /input|select|textarea|button/i, tt = /\\(?!\\)/g, nt = {
            "ID": new RegExp("^#(" + R + ")"),
            "CLASS": new RegExp("^\\.(" + R + ")"),
            "NAME": new RegExp("^\\[name=['\"]?(" + R + ")['\"]?\\]"),
            "TAG": new RegExp("^(" + R.replace("w", "w*") + ")"),
            "ATTR": new RegExp("^" + I),
            "PSEUDO": new RegExp("^" + $),
            "CHILD": new RegExp("^:(only|nth|last|first)-child(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
            "POS": new RegExp(z, "ig"),
            "needsContext": new RegExp("^" + B + "*[>+~]|" + z, "i")
        }, rt = function(e) {
            var t = j.createElement("div");
            try {
                return e(t);
            } catch (n) {
                return !1;
            } finally {
                t = null;
            }
        }, it = rt(function(e) {
            return e.appendChild(j.createComment("")), !e.getElementsByTagName("*").length;
        }), ot = rt(function(e) {
            return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== E && "#" === e.firstChild.getAttribute("href");
        }), at = rt(function(e) {
            e.innerHTML = "<select></select>";
            var t = typeof e.lastChild.getAttribute("multiple");
            return "boolean" !== t && "string" !== t;
        }), st = rt(function(e) {
            return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1;
        }), ut = rt(function(e) {
            e.id = S + 0, e.innerHTML = "<a name='" + S + "'></a><div name='" + S + "'></div>", A.insertBefore(e, A.firstChild);
            var t = j.getElementsByName && j.getElementsByName(S).length === 2 + j.getElementsByName(S + 0).length;
            return y = !j.getElementById(S), A.removeChild(e), t;
        });
        try {
            L.call(A.childNodes, 0)[0].nodeType;
        } catch (lt) {
            L = function(e) {
                for (var t, n = []; t = this[e]; e++) n.push(t);
                return n;
            };
        }
        n.matches = function(e, t) {
            return n(e, null, null, t);
        }, n.matchesSelector = function(e, t) {
            return n(t, null, null, [ e ]).length > 0;
        }, b = n.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += b(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else for (; t = e[r]; r++) n += b(t);
            return n;
        }, x = n.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1;
        }, w = n.contains = A.contains ? function(e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
            return e === r || !!(r && 1 === r.nodeType && n.contains && n.contains(r));
        } : A.compareDocumentPosition ? function(e, t) {
            return t && !!(16 & e.compareDocumentPosition(t));
        } : function(e, t) {
            for (; t = t.parentNode; ) if (t === e) return !0;
            return !1;
        }, n.attr = function(e, t) {
            var n, r = x(e);
            return r || (t = t.toLowerCase()), v.attrHandle[t] ? v.attrHandle[t](e) : at || r ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? "boolean" == typeof e[t] ? e[t] ? t : null : n.specified ? n.value : null : null);
        }, v = n.selectors = {
            "cacheLength": 50,
            "createPseudo": M,
            "match": nt,
            "order": new RegExp("ID|TAG" + (ut ? "|NAME" : "") + (st ? "|CLASS" : "")),
            "attrHandle": ot ? {} : {
                "href": function(e) {
                    return e.getAttribute("href", 2);
                },
                "type": function(e) {
                    return e.getAttribute("type");
                }
            },
            "find": {
                "ID": y ? function(e, t, n) {
                    if (typeof t.getElementById !== E && !n) {
                        var r = t.getElementById(e);
                        return r && r.parentNode ? [ r ] : [];
                    }
                } : function(e, n, r) {
                    if (typeof n.getElementById !== E && !r) {
                        var i = n.getElementById(e);
                        return i ? i.id === e || typeof i.getAttributeNode !== E && i.getAttributeNode("id").value === e ? [ i ] : t : [];
                    }
                },
                "TAG": it ? function(e, t) {
                    return typeof t.getElementsByTagName !== E ? t.getElementsByTagName(e) : void 0;
                } : function(e, t) {
                    var n = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (var r, i = [], o = 0; r = n[o]; o++) 1 === r.nodeType && i.push(r);
                        return i;
                    }
                    return n;
                },
                "NAME": function(e, t) {
                    return typeof t.getElementsByName !== E ? t.getElementsByName(name) : void 0;
                },
                "CLASS": function(e, t, n) {
                    return typeof t.getElementsByClassName === E || n ? void 0 : t.getElementsByClassName(e);
                }
            },
            "relative": {
                ">": {
                    "dir": "parentNode",
                    "first": !0
                },
                " ": {
                    "dir": "parentNode"
                },
                "+": {
                    "dir": "previousSibling",
                    "first": !0
                },
                "~": {
                    "dir": "previousSibling"
                }
            },
            "preFilter": {
                "ATTR": function(e) {
                    return e[1] = e[1].replace(tt, ""), e[3] = (e[4] || e[5] || "").replace(tt, ""), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                "CHILD": function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1] ? (e[2] || n.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * ("even" === e[2] || "odd" === e[2])), e[4] = +(e[6] + e[7] || "odd" === e[2])) : e[2] && n.error(e[0]), e;
                },
                "PSEUDO": function(e, t, n) {
                    var r, i;
                    return nt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[3] : (r = e[4]) && (J.test(r) && (i = a(r, t, n, !0)) && (i = r.indexOf(")", r.length - i) - r.length) && (r = r.slice(0, i), e[0] = e[0].slice(0, i)), e[2] = r), e.slice(0, 3));
                }
            },
            "filter": {
                "ID": y ? function(e) {
                    return e = e.replace(tt, ""), function(t) {
                        return t.getAttribute("id") === e;
                    };
                } : function(e) {
                    return e = e.replace(tt, ""), function(t) {
                        var n = typeof t.getAttributeNode !== E && t.getAttributeNode("id");
                        return n && n.value === e;
                    };
                },
                "TAG": function(e) {
                    return "*" === e ? function() {
                        return !0;
                    } : (e = e.replace(tt, "").toLowerCase(), function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e;
                    });
                },
                "CLASS": function(e) {
                    var t = F[S][e];
                    return t || (t = F(e, new RegExp("(^|" + B + ")" + e + "(" + B + "|$)"))), function(e) {
                        return t.test(e.className || typeof e.getAttribute !== E && e.getAttribute("class") || "");
                    };
                },
                "ATTR": function(e, t, r) {
                    return t ? function(i) {
                        var o = n.attr(i, e), a = o + "";
                        if (null == o) return "!=" === t;
                        switch (t) {
                          case "=":
                            return a === r;
                          case "!=":
                            return a !== r;
                          case "^=":
                            return r && 0 === a.indexOf(r);
                          case "*=":
                            return r && a.indexOf(r) > -1;
                          case "$=":
                            return r && a.substr(a.length - r.length) === r;
                          case "~=":
                            return (" " + a + " ").indexOf(r) > -1;
                          case "|=":
                            return a === r || a.substr(0, r.length + 1) === r + "-";
                        }
                    } : function(t) {
                        return null != n.attr(t, e);
                    };
                },
                "CHILD": function(e, t, n, r) {
                    if ("nth" === e) {
                        var i = D++;
                        return function(e) {
                            var t, o, a = 0, s = e;
                            if (1 === n && 0 === r) return !0;
                            if (t = e.parentNode, t && (t[S] !== i || !e.sizset)) {
                                for (s = t.firstChild; s && (1 !== s.nodeType || (s.sizset = ++a, s !== e)); s = s.nextSibling) ;
                                t[S] = i;
                            }
                            return o = e.sizset - r, 0 === n ? 0 === o : 0 === o % n && o / n >= 0;
                        };
                    }
                    return function(t) {
                        var n = t;
                        switch (e) {
                          case "only":
                          case "first":
                            for (; n = n.previousSibling; ) if (1 === n.nodeType) return !1;
                            if ("first" === e) return !0;
                            n = t;
                          case "last":
                            for (; n = n.nextSibling; ) if (1 === n.nodeType) return !1;
                            return !0;
                        }
                    };
                },
                "PSEUDO": function(e, t, r, i) {
                    var o, a = v.pseudos[e] || v.pseudos[e.toLowerCase()];
                    return a || n.error("unsupported pseudo: " + e), a[S] ? a(t, r, i) : a.length > 1 ? (o = [ e, e, "", t ], function(e) {
                        return a(e, 0, o);
                    }) : a;
                }
            },
            "pseudos": {
                "not": M(function(e, t, n) {
                    var r = T(e.replace(X, "$1"), t, n);
                    return function(e) {
                        return !r(e);
                    };
                }),
                "enabled": function(e) {
                    return e.disabled === !1;
                },
                "disabled": function(e) {
                    return e.disabled === !0;
                },
                "checked": function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                "selected": function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                },
                "parent": function(e) {
                    return !v.pseudos.empty(e);
                },
                "empty": function(e) {
                    var t;
                    for (e = e.firstChild; e; ) {
                        if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t) return !1;
                        e = e.nextSibling;
                    }
                    return !0;
                },
                "contains": M(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || b(t)).indexOf(e) > -1;
                    };
                }),
                "has": M(function(e) {
                    return function(t) {
                        return n(e, t).length > 0;
                    };
                }),
                "header": function(e) {
                    return Z.test(e.nodeName);
                },
                "text": function(e) {
                    var t, n;
                    return "input" === e.nodeName.toLowerCase() && "text" === (t = e.type) && (null == (n = e.getAttribute("type")) || n.toLowerCase() === t);
                },
                "radio": r("radio"),
                "checkbox": r("checkbox"),
                "file": r("file"),
                "password": r("password"),
                "image": r("image"),
                "submit": i("submit"),
                "reset": i("reset"),
                "button": function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                "input": function(e) {
                    return et.test(e.nodeName);
                },
                "focus": function(e) {
                    var t = e.ownerDocument;
                    return !(e !== t.activeElement || t.hasFocus && !t.hasFocus() || !e.type && !e.href);
                },
                "active": function(e) {
                    return e === e.ownerDocument.activeElement;
                }
            },
            "setFilters": {
                "first": function(e, t, n) {
                    return n ? e.slice(1) : [ e[0] ];
                },
                "last": function(e, t, n) {
                    var r = e.pop();
                    return n ? e : [ r ];
                },
                "even": function(e, t, n) {
                    for (var r = [], i = n ? 1 : 0, o = e.length; o > i; i += 2) r.push(e[i]);
                    return r;
                },
                "odd": function(e, t, n) {
                    for (var r = [], i = n ? 0 : 1, o = e.length; o > i; i += 2) r.push(e[i]);
                    return r;
                },
                "lt": function(e, t, n) {
                    return n ? e.slice(+t) : e.slice(0, +t);
                },
                "gt": function(e, t, n) {
                    return n ? e.slice(0, +t + 1) : e.slice(+t + 1);
                },
                "eq": function(e, t, n) {
                    var r = e.splice(+t, 1);
                    return n ? e : r;
                }
            }
        }, N = A.compareDocumentPosition ? function(e, t) {
            return e === t ? (C = !0, 0) : (e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) : e.compareDocumentPosition) ? -1 : 1;
        } : function(e, t) {
            if (e === t) return C = !0, 0;
            if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
            var n, r, i = [], a = [], s = e.parentNode, u = t.parentNode, l = s;
            if (s === u) return o(e, t);
            if (!s) return -1;
            if (!u) return 1;
            for (; l; ) i.unshift(l), l = l.parentNode;
            for (l = u; l; ) a.unshift(l), l = l.parentNode;
            n = i.length, r = a.length;
            for (var c = 0; n > c && r > c; c++) if (i[c] !== a[c]) return o(i[c], a[c]);
            return c === n ? o(e, a[c], -1) : o(i[c], t, 1);
        }, [ 0, 0 ].sort(N), k = !C, n.uniqueSort = function(e) {
            var t, n = 1;
            if (C = k, e.sort(N), C) for (; t = e[n]; n++) t === e[n - 1] && e.splice(n--, 1);
            return e;
        }, n.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, T = n.compile = function(e, t, n) {
            var r, i, o, s = q[S][e];
            if (s && s.context === t) return s;
            for (r = a(e, t, n), i = 0, o = r.length; o > i; i++) r[i] = l(r[i], t, n);
            return s = q(e, c(r)), s.context = t, s.runs = s.dirruns = 0, s;
        }, j.querySelectorAll && function() {
            var e, t = h, r = /'|\\/g, i = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, o = [], s = [ ":active" ], u = A.matchesSelector || A.mozMatchesSelector || A.webkitMatchesSelector || A.oMatchesSelector || A.msMatchesSelector;
            rt(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || o.push("\\[" + B + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || o.push(":checked");
            }), rt(function(e) {
                e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && o.push("[*^$]=" + B + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled");
            }), o = o.length && new RegExp(o.join("|")), h = function(e, n, i, s, u) {
                if (!(s || u || o && o.test(e))) if (9 === n.nodeType) try {
                    return H.apply(i, L.call(n.querySelectorAll(e), 0)), i;
                } catch (l) {} else if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
                    var c, f, p, d = n.getAttribute("id"), h = d || S, g = V.test(e) && n.parentNode || n;
                    for (d ? h = h.replace(r, "\\$&") : n.setAttribute("id", h), c = a(e, n, u), h = "[id='" + h + "']", f = 0, p = c.length; p > f; f++) c[f] = h + c[f].selector;
                    try {
                        return H.apply(i, L.call(g.querySelectorAll(c.join(",")), 0)), i;
                    } catch (l) {} finally {
                        d || n.removeAttribute("id");
                    }
                }
                return t(e, n, i, s, u);
            }, u && (rt(function(t) {
                e = u.call(t, "div");
                try {
                    u.call(t, "[test!='']:sizzle"), s.push(nt.PSEUDO.source, nt.POS.source, "!=");
                } catch (n) {}
            }), s = new RegExp(s.join("|")), n.matchesSelector = function(t, r) {
                if (r = r.replace(i, "='$1']"), !(x(t) || s.test(r) || o && o.test(r))) try {
                    var a = u.call(t, r);
                    if (a || e || t.document && 11 !== t.document.nodeType) return a;
                } catch (l) {}
                return n(r, null, null, [ t ]).length > 0;
            });
        }(), v.setFilters.nth = v.setFilters.eq, v.filters = v.pseudos, n.attr = K.attr, K.find = n, K.expr = n.selectors, K.expr[":"] = K.expr.pseudos, K.unique = n.uniqueSort, K.text = n.getText, K.isXMLDoc = n.isXML, K.contains = n.contains;
    }(e);
    var _t = /Until$/, Ft = /^(?:parents|prev(?:Until|All))/, Ot = /^.[^:#\[\.,]*$/, qt = K.expr.match.needsContext, Bt = {
        "children": !0,
        "contents": !0,
        "next": !0,
        "prev": !0
    };
    K.fn.extend({
        "find": function(e) {
            var t, n, r, i, o, a, s = this;
            if ("string" != typeof e) return K(e).filter(function() {
                for (t = 0, n = s.length; n > t; t++) if (K.contains(s[t], this)) return !0;
            });
            for (a = this.pushStack("", "find", e), t = 0, n = this.length; n > t; t++) if (r = a.length, K.find(e, this[t], a), t > 0) for (i = r; i < a.length; i++) for (o = 0; r > o; o++) if (a[o] === a[i]) {
                a.splice(i--, 1);
                break;
            }
            return a;
        },
        "has": function(e) {
            var t, n = K(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++) if (K.contains(this, n[t])) return !0;
            });
        },
        "not": function(e) {
            return this.pushStack(l(this, e, !1), "not", e);
        },
        "filter": function(e) {
            return this.pushStack(l(this, e, !0), "filter", e);
        },
        "is": function(e) {
            return !!e && ("string" == typeof e ? qt.test(e) ? K(e, this.context).index(this[0]) >= 0 : K.filter(e, this).length > 0 : this.filter(e).length > 0);
        },
        "closest": function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = qt.test(e) || "string" != typeof e ? K(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType; ) {
                if (a ? a.index(n) > -1 : K.find.matchesSelector(n, e)) {
                    o.push(n);
                    break;
                }
                n = n.parentNode;
            }
            return o = o.length > 1 ? K.unique(o) : o, this.pushStack(o, "closest", e);
        },
        "index": function(e) {
            return e ? "string" == typeof e ? K.inArray(this[0], K(e)) : K.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1;
        },
        "add": function(e, t) {
            var n = "string" == typeof e ? K(e, t) : K.makeArray(e && e.nodeType ? [ e ] : e), r = K.merge(this.get(), n);
            return this.pushStack(s(n[0]) || s(r[0]) ? r : K.unique(r));
        },
        "addBack": function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), K.fn.andSelf = K.fn.addBack, K.each({
        "parent": function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        "parents": function(e) {
            return K.dir(e, "parentNode");
        },
        "parentsUntil": function(e, t, n) {
            return K.dir(e, "parentNode", n);
        },
        "next": function(e) {
            return u(e, "nextSibling");
        },
        "prev": function(e) {
            return u(e, "previousSibling");
        },
        "nextAll": function(e) {
            return K.dir(e, "nextSibling");
        },
        "prevAll": function(e) {
            return K.dir(e, "previousSibling");
        },
        "nextUntil": function(e, t, n) {
            return K.dir(e, "nextSibling", n);
        },
        "prevUntil": function(e, t, n) {
            return K.dir(e, "previousSibling", n);
        },
        "siblings": function(e) {
            return K.sibling((e.parentNode || {}).firstChild, e);
        },
        "children": function(e) {
            return K.sibling(e.firstChild);
        },
        "contents": function(e) {
            return K.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : K.merge([], e.childNodes);
        }
    }, function(e, t) {
        K.fn[e] = function(n, r) {
            var i = K.map(this, t, n);
            return _t.test(e) || (r = n), r && "string" == typeof r && (i = K.filter(r, i)), i = this.length > 1 && !Bt[e] ? K.unique(i) : i, this.length > 1 && Ft.test(e) && (i = i.reverse()), this.pushStack(i, e, Y.call(arguments).join(","));
        };
    }), K.extend({
        "filter": function(e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? K.find.matchesSelector(t[0], e) ? [ t[0] ] : [] : K.find.matches(e, t);
        },
        "dir": function(e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !K(o).is(r)); ) 1 === o.nodeType && i.push(o), o = o[n];
            return i;
        },
        "sibling": function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        }
    });
    var Rt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Pt = / jQuery\d+="(?:null|\d+)"/g, Wt = /^\s+/, It = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, $t = /<([\w:]+)/, zt = /<tbody/i, Xt = /<|&#?\w+;/, Ut = /<(?:script|style|link)/i, Yt = /<(?:script|object|embed|option|style)/i, Jt = new RegExp("<(?:" + Rt + ")[\\s/>]", "i"), Qt = /^(?:checkbox|radio)$/, Vt = /checked\s*(?:[^=]|=\s*.checked.)/i, Gt = /\/(java|ecma)script/i, Kt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, Zt = {
        "option": [ 1, "<select multiple='multiple'>", "</select>" ],
        "legend": [ 1, "<fieldset>", "</fieldset>" ],
        "thead": [ 1, "<table>", "</table>" ],
        "tr": [ 2, "<table><tbody>", "</tbody></table>" ],
        "td": [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        "col": [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        "area": [ 1, "<map>", "</map>" ],
        "_default": [ 0, "", "" ]
    }, en = c(W), tn = en.appendChild(W.createElement("div"));
    Zt.optgroup = Zt.option, Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead, Zt.th = Zt.td, K.support.htmlSerialize || (Zt._default = [ 1, "X<div>", "</div>" ]), K.fn.extend({
        "text": function(e) {
            return K.access(this, function(e) {
                return e === t ? K.text(this) : this.empty().append((this[0] && this[0].ownerDocument || W).createTextNode(e));
            }, null, e, arguments.length);
        },
        "wrapAll": function(e) {
            if (K.isFunction(e)) return this.each(function(t) {
                K(this).wrapAll(e.call(this, t));
            });
            if (this[0]) {
                var t = K(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
                    return e;
                }).append(this);
            }
            return this;
        },
        "wrapInner": function(e) {
            return K.isFunction(e) ? this.each(function(t) {
                K(this).wrapInner(e.call(this, t));
            }) : this.each(function() {
                var t = K(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        "wrap": function(e) {
            var t = K.isFunction(e);
            return this.each(function(n) {
                K(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        "unwrap": function() {
            return this.parent().each(function() {
                K.nodeName(this, "body") || K(this).replaceWith(this.childNodes);
            }).end();
        },
        "append": function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(e);
            });
        },
        "prepend": function() {
            return this.domManip(arguments, !0, function(e) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(e, this.firstChild);
            });
        },
        "before": function() {
            if (!s(this[0])) return this.domManip(arguments, !1, function(e) {
                this.parentNode.insertBefore(e, this);
            });
            if (arguments.length) {
                var e = K.clean(arguments);
                return this.pushStack(K.merge(e, this), "before", this.selector);
            }
        },
        "after": function() {
            if (!s(this[0])) return this.domManip(arguments, !1, function(e) {
                this.parentNode.insertBefore(e, this.nextSibling);
            });
            if (arguments.length) {
                var e = K.clean(arguments);
                return this.pushStack(K.merge(this, e), "after", this.selector);
            }
        },
        "remove": function(e, t) {
            for (var n, r = 0; null != (n = this[r]); r++) (!e || K.filter(e, [ n ]).length) && (!t && 1 === n.nodeType && (K.cleanData(n.getElementsByTagName("*")), K.cleanData([ n ])), n.parentNode && n.parentNode.removeChild(n));
            return this;
        },
        "empty": function() {
            for (var e, t = 0; null != (e = this[t]); t++) for (1 === e.nodeType && K.cleanData(e.getElementsByTagName("*")); e.firstChild; ) e.removeChild(e.firstChild);
            return this;
        },
        "clone": function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return K.clone(this, e, t);
            });
        },
        "html": function(e) {
            return K.access(this, function(e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Pt, "") : t;
                if (!("string" != typeof e || Ut.test(e) || !K.support.htmlSerialize && Jt.test(e) || !K.support.leadingWhitespace && Wt.test(e) || Zt[($t.exec(e) || [ "", "" ])[1].toLowerCase()])) {
                    e = e.replace(It, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (K.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                        n = 0;
                    } catch (o) {}
                }
                n && this.empty().append(e);
            }, null, e, arguments.length);
        },
        "replaceWith": function(e) {
            return s(this[0]) ? this.length ? this.pushStack(K(K.isFunction(e) ? e() : e), "replaceWith", e) : this : K.isFunction(e) ? this.each(function(t) {
                var n = K(this), r = n.html();
                n.replaceWith(e.call(this, t, r));
            }) : ("string" != typeof e && (e = K(e).detach()), this.each(function() {
                var t = this.nextSibling, n = this.parentNode;
                K(this).remove(), t ? K(t).before(e) : K(n).append(e);
            }));
        },
        "detach": function(e) {
            return this.remove(e, !0);
        },
        "domManip": function(e, n, r) {
            e = [].concat.apply([], e);
            var i, o, a, s, u = 0, l = e[0], c = [], p = this.length;
            if (!K.support.checkClone && p > 1 && "string" == typeof l && Vt.test(l)) return this.each(function() {
                K(this).domManip(e, n, r);
            });
            if (K.isFunction(l)) return this.each(function(i) {
                var o = K(this);
                e[0] = l.call(this, i, n ? o.html() : t), o.domManip(e, n, r);
            });
            if (this[0]) {
                if (i = K.buildFragment(e, this, c), a = i.fragment, o = a.firstChild, 1 === a.childNodes.length && (a = o), o) for (n = n && K.nodeName(o, "tr"), s = i.cacheable || p - 1; p > u; u++) r.call(n && K.nodeName(this[u], "table") ? f(this[u], "tbody") : this[u], u === s ? a : K.clone(a, !0, !0));
                a = o = null, c.length && K.each(c, function(e, t) {
                    t.src ? K.ajax ? K.ajax({
                        "url": t.src,
                        "type": "GET",
                        "dataType": "script",
                        "async": !1,
                        "global": !1,
                        "throws": !0
                    }) : K.error("no ajax") : K.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Kt, "")), t.parentNode && t.parentNode.removeChild(t);
                });
            }
            return this;
        }
    }), K.buildFragment = function(e, n, r) {
        var i, o, a, s = e[0];
        return n = n || W, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, 1 === e.length && "string" == typeof s && s.length < 512 && n === W && "<" === s.charAt(0) && !Yt.test(s) && (K.support.checkClone || !Vt.test(s)) && (K.support.html5Clone || !Jt.test(s)) && (o = !0, i = K.fragments[s], a = i !== t), i || (i = n.createDocumentFragment(), K.clean(e, n, i, r), o && (K.fragments[s] = a && i)), {
            "fragment": i,
            "cacheable": o
        };
    }, K.fragments = {}, K.each({
        "appendTo": "append",
        "prependTo": "prepend",
        "insertBefore": "before",
        "insertAfter": "after",
        "replaceAll": "replaceWith"
    }, function(e, t) {
        K.fn[e] = function(n) {
            var r, i = 0, o = [], a = K(n), s = a.length, u = 1 === this.length && this[0].parentNode;
            if ((null == u || u && 11 === u.nodeType && 1 === u.childNodes.length) && 1 === s) return a[t](this[0]), this;
            for (; s > i; i++) r = (i > 0 ? this.clone(!0) : this).get(), K(a[i])[t](r), o = o.concat(r);
            return this.pushStack(o, e, a.selector);
        };
    }), K.extend({
        "clone": function(e, t, n) {
            var r, i, o, a;
            if (K.support.html5Clone || K.isXMLDoc(e) || !Jt.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (tn.innerHTML = e.outerHTML, tn.removeChild(a = tn.firstChild)), !(K.support.noCloneEvent && K.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || K.isXMLDoc(e))) for (d(e, a), r = h(e), i = h(a), o = 0; r[o]; ++o) i[o] && d(r[o], i[o]);
            if (t && (p(e, a), n)) for (r = h(e), i = h(a), o = 0; r[o]; ++o) p(r[o], i[o]);
            return r = i = null, a;
        },
        "clean": function(e, t, n, r) {
            var i, o, a, s, u, l, f, p, d, h, m, y = t === W && en, v = [];
            for (t && "undefined" != typeof t.createDocumentFragment || (t = W), i = 0; null != (a = e[i]); i++) if ("number" == typeof a && (a += ""), a) {
                if ("string" == typeof a) if (Xt.test(a)) {
                    for (y = y || c(t), f = t.createElement("div"), y.appendChild(f), a = a.replace(It, "<$1></$2>"), s = ($t.exec(a) || [ "", "" ])[1].toLowerCase(), u = Zt[s] || Zt._default, l = u[0], f.innerHTML = u[1] + a + u[2]; l--; ) f = f.lastChild;
                    if (!K.support.tbody) for (p = zt.test(a), d = "table" !== s || p ? "<table>" !== u[1] || p ? [] : f.childNodes : f.firstChild && f.firstChild.childNodes, o = d.length - 1; o >= 0; --o) K.nodeName(d[o], "tbody") && !d[o].childNodes.length && d[o].parentNode.removeChild(d[o]);
                    !K.support.leadingWhitespace && Wt.test(a) && f.insertBefore(t.createTextNode(Wt.exec(a)[0]), f.firstChild), a = f.childNodes, f.parentNode.removeChild(f);
                } else a = t.createTextNode(a);
                a.nodeType ? v.push(a) : K.merge(v, a);
            }
            if (f && (a = f = y = null), !K.support.appendChecked) for (i = 0; null != (a = v[i]); i++) K.nodeName(a, "input") ? g(a) : "undefined" != typeof a.getElementsByTagName && K.grep(a.getElementsByTagName("input"), g);
            if (n) for (h = function(e) {
                return !e.type || Gt.test(e.type) ? r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e) : void 0;
            }, i = 0; null != (a = v[i]); i++) K.nodeName(a, "script") && h(a) || (n.appendChild(a), "undefined" != typeof a.getElementsByTagName && (m = K.grep(K.merge([], a.getElementsByTagName("script")), h), v.splice.apply(v, [ i + 1, 0 ].concat(m)), i += m.length));
            return v;
        },
        "cleanData": function(e, t) {
            for (var n, r, i, o, a = 0, s = K.expando, u = K.cache, l = K.support.deleteExpando, c = K.event.special; null != (i = e[a]); a++) if ((t || K.acceptData(i)) && (r = i[s], n = r && u[r])) {
                if (n.events) for (o in n.events) c[o] ? K.event.remove(i, o) : K.removeEvent(i, o, n.handle);
                u[r] && (delete u[r], l ? delete i[s] : i.removeAttribute ? i.removeAttribute(s) : i[s] = null, K.deletedIds.push(r));
            }
        }
    }), function() {
        var e, t;
        K.uaMatch = function(e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                "browser": t[1] || "",
                "version": t[2] || "0"
            };
        }, e = K.uaMatch($.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), K.browser = t, K.sub = function() {
            function e(t, n) {
                return new e.fn.init(t, n);
            }
            K.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function n(n, r) {
                return r && r instanceof K && !(r instanceof e) && (r = e(r)), K.fn.init.call(this, n, r, t);
            }, e.fn.init.prototype = e.fn;
            var t = e(W);
            return e;
        };
    }();
    var nn, rn, on, an = /alpha\([^)]*\)/i, sn = /opacity=([^)]*)/, un = /^(top|right|bottom|left)$/, ln = /^(none|table(?!-c[ea]).+)/, cn = /^margin/, fn = new RegExp("^(" + Z + ")(.*)$", "i"), pn = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"), dn = new RegExp("^([-+])=(" + Z + ")", "i"), hn = {}, gn = {
        "position": "absolute",
        "visibility": "hidden",
        "display": "block"
    }, mn = {
        "letterSpacing": 0,
        "fontWeight": 400
    }, yn = [ "Top", "Right", "Bottom", "Left" ], vn = [ "Webkit", "O", "Moz", "ms" ], bn = K.fn.toggle;
    K.fn.extend({
        "css": function(e, n) {
            return K.access(this, function(e, n, r) {
                return r !== t ? K.style(e, n, r) : K.css(e, n);
            }, e, n, arguments.length > 1);
        },
        "show": function() {
            return v(this, !0);
        },
        "hide": function() {
            return v(this);
        },
        "toggle": function(e, t) {
            var n = "boolean" == typeof e;
            return K.isFunction(e) && K.isFunction(t) ? bn.apply(this, arguments) : this.each(function() {
                (n ? e : y(this)) ? K(this).show() : K(this).hide();
            });
        }
    }), K.extend({
        "cssHooks": {
            "opacity": {
                "get": function(e, t) {
                    if (t) {
                        var n = nn(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        "cssNumber": {
            "fillOpacity": !0,
            "fontWeight": !0,
            "lineHeight": !0,
            "opacity": !0,
            "orphans": !0,
            "widows": !0,
            "zIndex": !0,
            "zoom": !0
        },
        "cssProps": {
            "float": K.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        "style": function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = K.camelCase(n), l = e.style;
                if (n = K.cssProps[u] || (K.cssProps[u] = m(l, u)), s = K.cssHooks[n] || K.cssHooks[u], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
                if (a = typeof r, "string" === a && (o = dn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(K.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" === a && !K.cssNumber[u] && (r += "px"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
                    l[n] = r;
                } catch (c) {}
            }
        },
        "css": function(e, n, r, i) {
            var o, a, s, u = K.camelCase(n);
            return n = K.cssProps[u] || (K.cssProps[u] = m(e.style, u)), s = K.cssHooks[n] || K.cssHooks[u], s && "get" in s && (o = s.get(e, !0, i)), o === t && (o = nn(e, n)), "normal" === o && n in mn && (o = mn[n]), r || i !== t ? (a = parseFloat(o), r || K.isNumeric(a) ? a || 0 : o) : o;
        },
        "swap": function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            r = n.call(e);
            for (i in t) e.style[i] = o[i];
            return r;
        }
    }), e.getComputedStyle ? nn = function(t, n) {
        var r, i, o, a, s = e.getComputedStyle(t, null), u = t.style;
        return s && (r = s[n], "" === r && !K.contains(t.ownerDocument, t) && (r = K.style(t, n)), pn.test(r) && cn.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = r, r = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), r;
    } : W.documentElement.currentStyle && (nn = function(e, t) {
        var n, r, i = e.currentStyle && e.currentStyle[t], o = e.style;
        return null == i && o && o[t] && (i = o[t]), pn.test(i) && !un.test(t) && (n = o.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : i, i = o.pixelLeft + "px", o.left = n, r && (e.runtimeStyle.left = r)), "" === i ? "auto" : i;
    }), K.each([ "height", "width" ], function(e, t) {
        K.cssHooks[t] = {
            "get": function(e, n, r) {
                return n ? 0 === e.offsetWidth && ln.test(nn(e, "display")) ? K.swap(e, gn, function() {
                    return w(e, t, r);
                }) : w(e, t, r) : void 0;
            },
            "set": function(e, n, r) {
                return b(e, n, r ? x(e, t, r, K.support.boxSizing && "border-box" === K.css(e, "boxSizing")) : 0);
            }
        };
    }), K.support.opacity || (K.cssHooks.opacity = {
        "get": function(e, t) {
            return sn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
        },
        "set": function(e, t) {
            var n = e.style, r = e.currentStyle, i = K.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
            n.zoom = 1, t >= 1 && "" === K.trim(o.replace(an, "")) && n.removeAttribute && (n.removeAttribute("filter"), r && !r.filter) || (n.filter = an.test(o) ? o.replace(an, i) : o + " " + i);
        }
    }), K(function() {
        K.support.reliableMarginRight || (K.cssHooks.marginRight = {
            "get": function(e, t) {
                return K.swap(e, {
                    "display": "inline-block"
                }, function() {
                    return t ? nn(e, "marginRight") : void 0;
                });
            }
        }), !K.support.pixelPosition && K.fn.position && K.each([ "top", "left" ], function(e, t) {
            K.cssHooks[t] = {
                "get": function(e, n) {
                    if (n) {
                        var r = nn(e, t);
                        return pn.test(r) ? K(e).position()[t] + "px" : r;
                    }
                }
            };
        });
    }), K.expr && K.expr.filters && (K.expr.filters.hidden = function(e) {
        return 0 === e.offsetWidth && 0 === e.offsetHeight || !K.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || nn(e, "display"));
    }, K.expr.filters.visible = function(e) {
        return !K.expr.filters.hidden(e);
    }), K.each({
        "margin": "",
        "padding": "",
        "border": "Width"
    }, function(e, t) {
        K.cssHooks[e + t] = {
            "expand": function(n) {
                var r, i = "string" == typeof n ? n.split(" ") : [ n ], o = {};
                for (r = 0; 4 > r; r++) o[e + yn[r] + t] = i[r] || i[r - 2] || i[0];
                return o;
            }
        }, cn.test(e) || (K.cssHooks[e + t].set = b);
    });
    var xn = /%20/g, wn = /\[\]$/, Tn = /\r?\n/g, Nn = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, Cn = /^(?:select|textarea)/i;
    K.fn.extend({
        "serialize": function() {
            return K.param(this.serializeArray());
        },
        "serializeArray": function() {
            return this.map(function() {
                return this.elements ? K.makeArray(this.elements) : this;
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Cn.test(this.nodeName) || Nn.test(this.type));
            }).map(function(e, t) {
                var n = K(this).val();
                return null == n ? null : K.isArray(n) ? K.map(n, function(e) {
                    return {
                        "name": t.name,
                        "value": e.replace(Tn, "\r\n")
                    };
                }) : {
                    "name": t.name,
                    "value": n.replace(Tn, "\r\n")
                };
            }).get();
        }
    }), K.param = function(e, n) {
        var r, i = [], o = function(e, t) {
            t = K.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };
        if (n === t && (n = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(e) || e.jquery && !K.isPlainObject(e)) K.each(e, function() {
            o(this.name, this.value);
        }); else for (r in e) N(r, e[r], n, o);
        return i.join("&").replace(xn, "+");
    };
    var kn, En, Sn = /#.*$/, jn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, An = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Dn = /^(?:GET|HEAD)$/, Ln = /^\/\//, Hn = /\?/, Mn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, _n = /([?&])_=[^&]*/, Fn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, On = K.fn.load, qn = {}, Bn = {}, Rn = [ "*/" ] + [ "*" ];
    try {
        kn = I.href;
    } catch (Pn) {
        kn = W.createElement("a"), kn.href = "", kn = kn.href;
    }
    En = Fn.exec(kn.toLowerCase()) || [], K.fn.load = function(e, n, r) {
        if ("string" != typeof e && On) return On.apply(this, arguments);
        if (!this.length) return this;
        var i, o, a, s = this, u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), K.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"), K.ajax({
            "url": e,
            "type": o,
            "dataType": "html",
            "data": n,
            "complete": function(e, t) {
                r && s.each(r, a || [ e.responseText, t, e ]);
            }
        }).done(function(e) {
            a = arguments, s.html(i ? K("<div>").append(e.replace(Mn, "")).find(i) : e);
        }), this;
    }, K.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        K.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), K.each([ "get", "post" ], function(e, n) {
        K[n] = function(e, r, i, o) {
            return K.isFunction(r) && (o = o || i, i = r, r = t), K.ajax({
                "type": n,
                "url": e,
                "data": r,
                "success": i,
                "dataType": o
            });
        };
    }), K.extend({
        "getScript": function(e, n) {
            return K.get(e, t, n, "script");
        },
        "getJSON": function(e, t, n) {
            return K.get(e, t, n, "json");
        },
        "ajaxSetup": function(e, t) {
            return t ? E(e, K.ajaxSettings) : (t = e, e = K.ajaxSettings), E(e, t), e;
        },
        "ajaxSettings": {
            "url": kn,
            "isLocal": An.test(En[1]),
            "global": !0,
            "type": "GET",
            "contentType": "application/x-www-form-urlencoded; charset=UTF-8",
            "processData": !0,
            "async": !0,
            "accepts": {
                "xml": "application/xml, text/xml",
                "html": "text/html",
                "text": "text/plain",
                "json": "application/json, text/javascript",
                "*": Rn
            },
            "contents": {
                "xml": /xml/,
                "html": /html/,
                "json": /json/
            },
            "responseFields": {
                "xml": "responseXML",
                "text": "responseText"
            },
            "converters": {
                "* text": e.String,
                "text html": !0,
                "text json": K.parseJSON,
                "text xml": K.parseXML
            },
            "flatOptions": {
                "context": !0,
                "url": !0
            }
        },
        "ajaxPrefilter": C(qn),
        "ajaxTransport": C(Bn),
        "ajax": function(e, n) {
            function r(e, n, r, a) {
                var l, f, v, b, w, N = n;
                2 !== x && (x = 2, u && clearTimeout(u), s = t, o = a || "", T.readyState = e > 0 ? 4 : 0, r && (b = S(p, T, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (K.lastModified[i] = w), w = T.getResponseHeader("Etag"), w && (K.etag[i] = w)), 304 === e ? (N = "notmodified", l = !0) : (l = j(p, b), N = l.state, f = l.data, v = l.error, l = !v)) : (v = N, (!N || e) && (N = "error", 0 > e && (e = 0))), T.status = e, T.statusText = "" + (n || N), l ? g.resolveWith(d, [ f, N, T ]) : g.rejectWith(d, [ T, N, v ]), T.statusCode(y), y = t, c && h.trigger("ajax" + (l ? "Success" : "Error"), [ T, p, l ? f : v ]), m.fireWith(d, [ T, N ]), c && (h.trigger("ajaxComplete", [ T, p ]), --K.active || K.event.trigger("ajaxStop")));
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, a, s, u, l, c, f, p = K.ajaxSetup({}, n), d = p.context || p, h = d !== p && (d.nodeType || d instanceof K) ? K(d) : K.event, g = K.Deferred(), m = K.Callbacks("once memory"), y = p.statusCode || {}, v = {}, b = {}, x = 0, w = "canceled", T = {
                "readyState": 0,
                "setRequestHeader": function(e, t) {
                    if (!x) {
                        var n = e.toLowerCase();
                        e = b[n] = b[n] || e, v[e] = t;
                    }
                    return this;
                },
                "getAllResponseHeaders": function() {
                    return 2 === x ? o : null;
                },
                "getResponseHeader": function(e) {
                    var n;
                    if (2 === x) {
                        if (!a) for (a = {}; n = jn.exec(o); ) a[n[1].toLowerCase()] = n[2];
                        n = a[e.toLowerCase()];
                    }
                    return n === t ? null : n;
                },
                "overrideMimeType": function(e) {
                    return x || (p.mimeType = e), this;
                },
                "abort": function(e) {
                    return e = e || w, s && s.abort(e), r(0, e), this;
                }
            };
            if (g.promise(T), T.success = T.done, T.error = T.fail, T.complete = m.add, T.statusCode = function(e) {
                if (e) {
                    var t;
                    if (2 > x) for (t in e) y[t] = [ y[t], e[t] ]; else t = e[T.status], T.always(t);
                }
                return this;
            }, p.url = ((e || p.url) + "").replace(Sn, "").replace(Ln, En[1] + "//"), p.dataTypes = K.trim(p.dataType || "*").toLowerCase().split(tt), null == p.crossDomain && (l = Fn.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] == En[1] && l[2] == En[2] && (l[3] || ("http:" === l[1] ? 80 : 443)) == (En[3] || ("http:" === En[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = K.param(p.data, p.traditional)), k(qn, p, n, T), 2 === x) return T;
            if (c = p.global, p.type = p.type.toUpperCase(), p.hasContent = !Dn.test(p.type), c && 0 === K.active++ && K.event.trigger("ajaxStart"), !p.hasContent && (p.data && (p.url += (Hn.test(p.url) ? "&" : "?") + p.data, delete p.data), i = p.url, p.cache === !1)) {
                var N = K.now(), C = p.url.replace(_n, "$1_=" + N);
                p.url = C + (C === p.url ? (Hn.test(p.url) ? "&" : "?") + "_=" + N : "");
            }
            (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), p.ifModified && (i = i || p.url, K.lastModified[i] && T.setRequestHeader("If-Modified-Since", K.lastModified[i]), K.etag[i] && T.setRequestHeader("If-None-Match", K.etag[i])), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Rn + "; q=0.01" : "") : p.accepts["*"]);
            for (f in p.headers) T.setRequestHeader(f, p.headers[f]);
            if (!p.beforeSend || p.beforeSend.call(d, T, p) !== !1 && 2 !== x) {
                w = "abort";
                for (f in {
                    "success": 1,
                    "error": 1,
                    "complete": 1
                }) T[f](p[f]);
                if (s = k(Bn, p, n, T)) {
                    T.readyState = 1, c && h.trigger("ajaxSend", [ T, p ]), p.async && p.timeout > 0 && (u = setTimeout(function() {
                        T.abort("timeout");
                    }, p.timeout));
                    try {
                        x = 1, s.send(v, r);
                    } catch (E) {
                        if (!(2 > x)) throw E;
                        r(-1, E);
                    }
                } else r(-1, "No Transport");
                return T;
            }
            return T.abort();
        },
        "active": 0,
        "lastModified": {},
        "etag": {}
    });
    var Wn = [], In = /\?/, $n = /(=)\?(?=&|$)|\?\?/, zn = K.now();
    K.ajaxSetup({
        "jsonp": "callback",
        "jsonpCallback": function() {
            var e = Wn.pop() || K.expando + "_" + zn++;
            return this[e] = !0, e;
        }
    }), K.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, u = n.data, l = n.url, c = n.jsonp !== !1, f = c && $n.test(l), p = c && !f && "string" == typeof u && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && $n.test(u);
        return "jsonp" === n.dataTypes[0] || f || p ? (o = n.jsonpCallback = K.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a = e[o], f ? n.url = l.replace($n, "$1" + o) : p ? n.data = u.replace($n, "$1" + o) : c && (n.url += (In.test(l) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || K.error(o + " was not called"), s[0];
        }, n.dataTypes[0] = "json", e[o] = function() {
            s = arguments;
        }, i.always(function() {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Wn.push(o)), s && K.isFunction(a) && a(s[0]), s = a = t;
        }), "script") : void 0;
    }), K.ajaxSetup({
        "accepts": {
            "script": "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        "contents": {
            "script": /javascript|ecmascript/
        },
        "converters": {
            "text script": function(e) {
                return K.globalEval(e), e;
            }
        }
    }), K.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
    }), K.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = W.head || W.getElementsByTagName("head")[0] || W.documentElement;
            return {
                "send": function(i, o) {
                    n = W.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, i) {
                        (i || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success"));
                    }, r.insertBefore(n, r.firstChild);
                },
                "abort": function() {
                    n && n.onload(0, 1);
                }
            };
        }
    });
    var Xn, Un = e.ActiveXObject ? function() {
        for (var e in Xn) Xn[e](0, 1);
    } : !1, Yn = 0;
    K.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && A() || D();
    } : A, function(e) {
        K.extend(K.support, {
            "ajax": !!e,
            "cors": !!e && "withCredentials" in e
        });
    }(K.ajaxSettings.xhr()), K.support.ajax && K.ajaxTransport(function(n) {
        if (!n.crossDomain || K.support.cors) {
            var r;
            return {
                "send": function(i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) u[s] = n.xhrFields[s];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) u.setRequestHeader(s, i[s]);
                    } catch (l) {}
                    u.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, l, c, f, p;
                        try {
                            if (r && (i || 4 === u.readyState)) if (r = t, a && (u.onreadystatechange = K.noop, Un && delete Xn[a]), i) 4 !== u.readyState && u.abort(); else {
                                s = u.status, c = u.getAllResponseHeaders(), f = {}, p = u.responseXML, p && p.documentElement && (f.xml = p);
                                try {
                                    f.text = u.responseText;
                                } catch (e) {}
                                try {
                                    l = u.statusText;
                                } catch (d) {
                                    l = "";
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404;
                            }
                        } catch (h) {
                            i || o(-1, h);
                        }
                        f && o(s, l, f, c);
                    }, n.async ? 4 === u.readyState ? setTimeout(r, 0) : (a = ++Yn, Un && (Xn || (Xn = {}, K(e).unload(Un)), Xn[a] = r), u.onreadystatechange = r) : r();
                },
                "abort": function() {
                    r && r(0, 1);
                }
            };
        }
    });
    var Jn, Qn, Vn = /^(?:toggle|show|hide)$/, Gn = new RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$", "i"), Kn = /queueHooks$/, Zn = [ F ], er = {
        "*": [ function(e, t) {
            var n, r, i, o = this.createTween(e, t), a = Gn.exec(t), s = o.cur(), u = +s || 0, l = 1;
            if (a) {
                if (n = +a[2], r = a[3] || (K.cssNumber[e] ? "" : "px"), "px" !== r && u) {
                    u = K.css(o.elem, e, !0) || n || 1;
                    do i = l = l || ".5", u /= l, K.style(o.elem, e, u + r), l = o.cur() / s; while (1 !== l && l !== i);
                }
                o.unit = r, o.start = u, o.end = a[1] ? u + (a[1] + 1) * n : n;
            }
            return o;
        } ]
    };
    K.Animation = K.extend(M, {
        "tweener": function(e, t) {
            K.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], er[n] = er[n] || [], er[n].unshift(t);
        },
        "prefilter": function(e, t) {
            t ? Zn.unshift(e) : Zn.push(e);
        }
    }), K.Tween = O, O.prototype = {
        "constructor": O,
        "init": function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (K.cssNumber[n] ? "" : "px");
        },
        "cur": function() {
            var e = O.propHooks[this.prop];
            return e && e.get ? e.get(this) : O.propHooks._default.get(this);
        },
        "run": function(e) {
            var t, n = O.propHooks[this.prop];
            return this.pos = t = this.options.duration ? K.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : O.propHooks._default.set(this), this;
        }
    }, O.prototype.init.prototype = O.prototype, O.propHooks = {
        "_default": {
            "get": function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = K.css(e.elem, e.prop, !1, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop];
            },
            "set": function(e) {
                K.fx.step[e.prop] ? K.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[K.cssProps[e.prop]] || K.cssHooks[e.prop]) ? K.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
            }
        }
    }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
        "set": function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, K.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = K.fn[t];
        K.fn[t] = function(r, i, o) {
            return null == r || "boolean" == typeof r || !e && K.isFunction(r) && K.isFunction(i) ? n.apply(this, arguments) : this.animate(q(t, !0), r, i, o);
        };
    }), K.fn.extend({
        "fadeTo": function(e, t, n, r) {
            return this.filter(y).css("opacity", 0).show().end().animate({
                "opacity": t
            }, e, n, r);
        },
        "animate": function(e, t, n, r) {
            var i = K.isEmptyObject(e), o = K.speed(t, n, r), a = function() {
                var t = M(this, K.extend({}, e), o);
                i && t.stop(!0);
            };
            return i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
        },
        "stop": function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r);
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0, n = null != e && e + "queueHooks", o = K.timers, a = K._data(this);
                if (n) a[n] && a[n].stop && i(a[n]); else for (n in a) a[n] && a[n].stop && Kn.test(n) && i(a[n]);
                for (n = o.length; n--; ) o[n].elem === this && (null == e || o[n].queue === e) && (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && K.dequeue(this, e);
            });
        }
    }), K.each({
        "slideDown": q("show"),
        "slideUp": q("hide"),
        "slideToggle": q("toggle"),
        "fadeIn": {
            "opacity": "show"
        },
        "fadeOut": {
            "opacity": "hide"
        },
        "fadeToggle": {
            "opacity": "toggle"
        }
    }, function(e, t) {
        K.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r);
        };
    }), K.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? K.extend({}, e) : {
            "complete": n || !n && t || K.isFunction(e) && e,
            "duration": e,
            "easing": n && t || t && !K.isFunction(t) && t
        };
        return r.duration = K.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in K.fx.speeds ? K.fx.speeds[r.duration] : K.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            K.isFunction(r.old) && r.old.call(this), r.queue && K.dequeue(this, r.queue);
        }, r;
    }, K.easing = {
        "linear": function(e) {
            return e;
        },
        "swing": function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        }
    }, K.timers = [], K.fx = O.prototype.init, K.fx.tick = function() {
        for (var e, t = K.timers, n = 0; n < t.length; n++) e = t[n], !e() && t[n] === e && t.splice(n--, 1);
        t.length || K.fx.stop();
    }, K.fx.timer = function(e) {
        e() && K.timers.push(e) && !Qn && (Qn = setInterval(K.fx.tick, K.fx.interval));
    }, K.fx.interval = 13, K.fx.stop = function() {
        clearInterval(Qn), Qn = null;
    }, K.fx.speeds = {
        "slow": 600,
        "fast": 200,
        "_default": 400
    }, K.fx.step = {}, K.expr && K.expr.filters && (K.expr.filters.animated = function(e) {
        return K.grep(K.timers, function(t) {
            return e === t.elem;
        }).length;
    });
    var tr = /^(?:body|html)$/i;
    K.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            K.offset.setOffset(this, e, t);
        });
        var n, r, i, o, a, s, u, l, c, f, p = this[0], d = p && p.ownerDocument;
        if (d) return (i = d.body) === p ? K.offset.bodyOffset(p) : (r = d.documentElement, K.contains(r, p) ? (n = p.getBoundingClientRect(), o = B(d), a = r.clientTop || i.clientTop || 0, s = r.clientLeft || i.clientLeft || 0, u = o.pageYOffset || r.scrollTop, l = o.pageXOffset || r.scrollLeft, c = n.top + u - a, f = n.left + l - s, {
            "top": c,
            "left": f
        }) : {
            "top": 0,
            "left": 0
        });
    }, K.offset = {
        "bodyOffset": function(e) {
            var t = e.offsetTop, n = e.offsetLeft;
            return K.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(K.css(e, "marginTop")) || 0, n += parseFloat(K.css(e, "marginLeft")) || 0), {
                "top": t,
                "left": n
            };
        },
        "setOffset": function(e, t, n) {
            var r = K.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = K(e), s = a.offset(), u = K.css(e, "top"), l = K.css(e, "left"), c = ("absolute" === r || "fixed" === r) && K.inArray("auto", [ u, l ]) > -1, f = {}, p = {};
            c ? (p = a.position(), i = p.top, o = p.left) : (i = parseFloat(u) || 0, o = parseFloat(l) || 0), K.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + i), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : a.css(f);
        }
    }, K.fn.extend({
        "position": function() {
            if (this[0]) {
                var e = this[0], t = this.offsetParent(), n = this.offset(), r = tr.test(t[0].nodeName) ? {
                    "top": 0,
                    "left": 0
                } : t.offset();
                return n.top -= parseFloat(K.css(e, "marginTop")) || 0, n.left -= parseFloat(K.css(e, "marginLeft")) || 0, r.top += parseFloat(K.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(K.css(t[0], "borderLeftWidth")) || 0, {
                    "top": n.top - r.top,
                    "left": n.left - r.left
                };
            }
        },
        "offsetParent": function() {
            return this.map(function() {
                for (var e = this.offsetParent || W.body; e && !tr.test(e.nodeName) && "static" === K.css(e, "position"); ) e = e.offsetParent;
                return e || W.body;
            });
        }
    }), K.each({
        "scrollLeft": "pageXOffset",
        "scrollTop": "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        K.fn[e] = function(i) {
            return K.access(this, function(e, i, o) {
                var a = B(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? K(a).scrollLeft() : o, r ? o : K(a).scrollTop()) : e[i] = o, void 0);
            }, e, i, arguments.length, null);
        };
    }), K.each({
        "Height": "height",
        "Width": "width"
    }, function(e, n) {
        K.each({
            "padding": "inner" + e,
            "content": n,
            "": "outer" + e
        }, function(r, i) {
            K.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin" : "border");
                return K.access(this, function(n, r, i) {
                    var o;
                    return K.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? K.css(n, r, i, s) : K.style(n, r, i, s);
                }, n, a ? i : t, a, null);
            };
        });
    }), e.jQuery = e.$ = K, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return K;
    });
}(window), function(e) {
    "function" == typeof define && define.amd ? define([ "jquery" ], e) : e(jQuery);
}(function(e) {
    function t(e) {
        return e;
    }
    function n(e) {
        return decodeURIComponent(e.replace(i, " "));
    }
    function r(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return o.json ? JSON.parse(e) : e;
        } catch (t) {}
    }
    var i = /\+/g, o = e.cookie = function(i, a, s) {
        if (void 0 !== a) {
            if (s = e.extend({}, o.defaults, s), "number" == typeof s.expires) {
                var u = s.expires, l = s.expires = new Date;
                l.setDate(l.getDate() + u);
            }
            return a = o.json ? JSON.stringify(a) : String(a), document.cookie = [ o.raw ? i : encodeURIComponent(i), "=", o.raw ? a : encodeURIComponent(a), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : "" ].join("");
        }
        for (var c = o.raw ? t : n, f = document.cookie.split("; "), p = i ? void 0 : {}, d = 0, h = f.length; h > d; d++) {
            var g = f[d].split("="), m = c(g.shift()), y = c(g.join("="));
            if (i && i === m) {
                p = r(y);
                break;
            }
            i || (p[m] = r(y));
        }
        return p;
    };
    o.defaults = {}, e.removeCookie = function(t, n) {
        return void 0 !== e.cookie(t) ? (e.cookie(t, "", e.extend({}, n, {
            "expires": -1
        })), !0) : !1;
    };
}), function(e, t) {
    function n(e, t, n) {
        var r = f[t.type] || {};
        return null == e ? n || !t.def ? null : t.def : (e = r.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : r.mod ? (e + r.mod) % r.mod : 0 > e ? 0 : r.max < e ? r.max : e);
    }
    function r(t) {
        var n = l(), r = n._rgba = [];
        return t = t.toLowerCase(), h(u, function(e, i) {
            var o, a = i.re.exec(t), s = a && i.parse(a), u = i.space || "rgba";
            return s ? (o = n[u](s), n[c[u].cache] = o[c[u].cache], r = n._rgba = o._rgba, !1) : void 0;
        }), r.length ? ("0,0,0,0" === r.join() && e.extend(r, o.transparent), n) : o[t];
    }
    function i(e, t, n) {
        return n = (n + 1) % 1, 1 > 6 * n ? e + 6 * (t - e) * n : 1 > 2 * n ? t : 2 > 3 * n ? e + 6 * (t - e) * (2 / 3 - n) : e;
    }
    var o, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", s = /^([\-+])=\s*(\d+\.?\d*)/, u = [ {
        "re": /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        "parse": function(e) {
            return [ e[1], e[2], e[3], e[4] ];
        }
    }, {
        "re": /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        "parse": function(e) {
            return [ 2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4] ];
        }
    }, {
        "re": /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
        "parse": function(e) {
            return [ parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16) ];
        }
    }, {
        "re": /#([a-f0-9])([a-f0-9])([a-f0-9])/,
        "parse": function(e) {
            return [ parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16) ];
        }
    }, {
        "re": /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        "space": "hsla",
        "parse": function(e) {
            return [ e[1], e[2] / 100, e[3] / 100, e[4] ];
        }
    } ], l = e.Color = function(t, n, r, i) {
        return new e.Color.fn.parse(t, n, r, i);
    }, c = {
        "rgba": {
            "props": {
                "red": {
                    "idx": 0,
                    "type": "byte"
                },
                "green": {
                    "idx": 1,
                    "type": "byte"
                },
                "blue": {
                    "idx": 2,
                    "type": "byte"
                }
            }
        },
        "hsla": {
            "props": {
                "hue": {
                    "idx": 0,
                    "type": "degrees"
                },
                "saturation": {
                    "idx": 1,
                    "type": "percent"
                },
                "lightness": {
                    "idx": 2,
                    "type": "percent"
                }
            }
        }
    }, f = {
        "byte": {
            "floor": !0,
            "max": 255
        },
        "percent": {
            "max": 1
        },
        "degrees": {
            "mod": 360,
            "floor": !0
        }
    }, p = l.support = {}, d = e("<p>")[0], h = e.each;
    d.style.cssText = "background-color:rgba(1,1,1,.5)", p.rgba = d.style.backgroundColor.indexOf("rgba") > -1, h(c, function(e, t) {
        t.cache = "_" + e, t.props.alpha = {
            "idx": 3,
            "type": "percent",
            "def": 1
        };
    }), l.fn = e.extend(l.prototype, {
        "parse": function(i, a, s, u) {
            if (i === t) return this._rgba = [ null, null, null, null ], this;
            (i.jquery || i.nodeType) && (i = e(i).css(a), a = t);
            var f = this, p = e.type(i), d = this._rgba = [];
            return a !== t && (i = [ i, a, s, u ], p = "array"), "string" === p ? this.parse(r(i) || o._default) : "array" === p ? (h(c.rgba.props, function(e, t) {
                d[t.idx] = n(i[t.idx], t);
            }), this) : "object" === p ? (i instanceof l ? h(c, function(e, t) {
                i[t.cache] && (f[t.cache] = i[t.cache].slice());
            }) : h(c, function(t, r) {
                var o = r.cache;
                h(r.props, function(e, t) {
                    if (!f[o] && r.to) {
                        if ("alpha" === e || null == i[e]) return;
                        f[o] = r.to(f._rgba);
                    }
                    f[o][t.idx] = n(i[e], t, !0);
                }), f[o] && e.inArray(null, f[o].slice(0, 3)) < 0 && (f[o][3] = 1, r.from && (f._rgba = r.from(f[o])));
            }), this) : void 0;
        },
        "is": function(e) {
            var t = l(e), n = !0, r = this;
            return h(c, function(e, i) {
                var o, a = t[i.cache];
                return a && (o = r[i.cache] || i.to && i.to(r._rgba) || [], h(i.props, function(e, t) {
                    return null != a[t.idx] ? n = a[t.idx] === o[t.idx] : void 0;
                })), n;
            }), n;
        },
        "_space": function() {
            var e = [], t = this;
            return h(c, function(n, r) {
                t[r.cache] && e.push(n);
            }), e.pop();
        },
        "transition": function(e, t) {
            var r = l(e), i = r._space(), o = c[i], a = 0 === this.alpha() ? l("transparent") : this, s = a[o.cache] || o.to(a._rgba), u = s.slice();
            return r = r[o.cache], h(o.props, function(e, i) {
                var o = i.idx, a = s[o], l = r[o], c = f[i.type] || {};
                null !== l && (null === a ? u[o] = l : (c.mod && (l - a > c.mod / 2 ? a += c.mod : a - l > c.mod / 2 && (a -= c.mod)), u[o] = n((l - a) * t + a, i)));
            }), this[i](u);
        },
        "blend": function(t) {
            if (1 === this._rgba[3]) return this;
            var n = this._rgba.slice(), r = n.pop(), i = l(t)._rgba;
            return l(e.map(n, function(e, t) {
                return (1 - r) * i[t] + r * e;
            }));
        },
        "toRgbaString": function() {
            var t = "rgba(", n = e.map(this._rgba, function(e, t) {
                return null == e ? t > 2 ? 1 : 0 : e;
            });
            return 1 === n[3] && (n.pop(), t = "rgb("), t + n.join() + ")";
        },
        "toHslaString": function() {
            var t = "hsla(", n = e.map(this.hsla(), function(e, t) {
                return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e;
            });
            return 1 === n[3] && (n.pop(), t = "hsl("), t + n.join() + ")";
        },
        "toHexString": function(t) {
            var n = this._rgba.slice(), r = n.pop();
            return t && n.push(~~(255 * r)), "#" + e.map(n, function(e) {
                return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e;
            }).join("");
        },
        "toString": function() {
            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
        }
    }), l.fn.parse.prototype = l.fn, c.hsla.to = function(e) {
        if (null == e[0] || null == e[1] || null == e[2]) return [ null, null, null, e[3] ];
        var t, n, r = e[0] / 255, i = e[1] / 255, o = e[2] / 255, a = e[3], s = Math.max(r, i, o), u = Math.min(r, i, o), l = s - u, c = s + u, f = .5 * c;
        return t = u === s ? 0 : r === s ? 60 * (i - o) / l + 360 : i === s ? 60 * (o - r) / l + 120 : 60 * (r - i) / l + 240, n = 0 === l ? 0 : .5 >= f ? l / c : l / (2 - c), [ Math.round(t) % 360, n, f, null == a ? 1 : a ];
    }, c.hsla.from = function(e) {
        if (null == e[0] || null == e[1] || null == e[2]) return [ null, null, null, e[3] ];
        var t = e[0] / 360, n = e[1], r = e[2], o = e[3], a = .5 >= r ? r * (1 + n) : r + n - r * n, s = 2 * r - a;
        return [ Math.round(255 * i(s, a, t + 1 / 3)), Math.round(255 * i(s, a, t)), Math.round(255 * i(s, a, t - 1 / 3)), o ];
    }, h(c, function(r, i) {
        var o = i.props, a = i.cache, u = i.to, c = i.from;
        l.fn[r] = function(r) {
            if (u && !this[a] && (this[a] = u(this._rgba)), r === t) return this[a].slice();
            var i, s = e.type(r), f = "array" === s || "object" === s ? r : arguments, p = this[a].slice();
            return h(o, function(e, t) {
                var r = f["object" === s ? e : t.idx];
                null == r && (r = p[t.idx]), p[t.idx] = n(r, t);
            }), c ? (i = l(c(p)), i[a] = p, i) : l(p);
        }, h(o, function(t, n) {
            l.fn[t] || (l.fn[t] = function(i) {
                var o, a = e.type(i), u = "alpha" === t ? this._hsla ? "hsla" : "rgba" : r, l = this[u](), c = l[n.idx];
                return "undefined" === a ? c : ("function" === a && (i = i.call(this, c), a = e.type(i)), null == i && n.empty ? this : ("string" === a && (o = s.exec(i), o && (i = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), l[n.idx] = i, this[u](l)));
            });
        });
    }), l.hook = function(t) {
        var n = t.split(" ");
        h(n, function(t, n) {
            e.cssHooks[n] = {
                "set": function(t, i) {
                    var o, a, s = "";
                    if ("transparent" !== i && ("string" !== e.type(i) || (o = r(i)))) {
                        if (i = l(o || i), !p.rgba && 1 !== i._rgba[3]) {
                            for (a = "backgroundColor" === n ? t.parentNode : t; ("" === s || "transparent" === s) && a && a.style; ) try {
                                s = e.css(a, "backgroundColor"), a = a.parentNode;
                            } catch (u) {}
                            i = i.blend(s && "transparent" !== s ? s : "_default");
                        }
                        i = i.toRgbaString();
                    }
                    try {
                        t.style[n] = i;
                    } catch (u) {}
                }
            }, e.fx.step[n] = function(t) {
                t.colorInit || (t.start = l(t.elem, n), t.end = l(t.end), t.colorInit = !0), e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos));
            };
        });
    }, l.hook(a), e.cssHooks.borderColor = {
        "expand": function(e) {
            var t = {};
            return h([ "Top", "Right", "Bottom", "Left" ], function(n, r) {
                t["border" + r + "Color"] = e;
            }), t;
        }
    }, o = e.Color.names = {
        "aqua": "#00ffff",
        "black": "#000000",
        "blue": "#0000ff",
        "fuchsia": "#ff00ff",
        "gray": "#808080",
        "green": "#008000",
        "lime": "#00ff00",
        "maroon": "#800000",
        "navy": "#000080",
        "olive": "#808000",
        "purple": "#800080",
        "red": "#ff0000",
        "silver": "#c0c0c0",
        "teal": "#008080",
        "white": "#ffffff",
        "yellow": "#ffff00",
        "transparent": [ null, null, null, 0 ],
        "_default": "#ffffff"
    };
}(jQuery), function(e) {
    "function" == typeof define && define.amd ? define([ "jquery" ], e) : "object" == typeof exports ? module.exports = e : e(jQuery);
}(function(e) {
    function t(t) {
        var i, o = t || window.event, a = [].slice.call(arguments, 1), s = 0, u = 0, l = 0, c = 0, f = 0;
        return t = e.event.fix(o), t.type = "mousewheel", o.wheelDelta && (s = o.wheelDelta), o.detail && (s = -1 * o.detail), o.deltaY && (l = -1 * o.deltaY, s = l), o.deltaX && (u = o.deltaX, s = -1 * u), void 0 !== o.wheelDeltaY && (l = o.wheelDeltaY), void 0 !== o.wheelDeltaX && (u = -1 * o.wheelDeltaX), c = Math.abs(s), (!n || n > c) && (n = c), f = Math.max(Math.abs(l), Math.abs(u)), (!r || r > f) && (r = f), i = s > 0 ? "floor" : "ceil", s = Math[i](s / n), u = Math[i](u / r), l = Math[i](l / r), a.unshift(t, s, u, l), (e.event.dispatch || e.event.handle).apply(this, a);
    }
    var n, r, i = [ "wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll" ], o = "onwheel" in document || document.documentMode >= 9 ? [ "wheel" ] : [ "mousewheel", "DomMouseScroll", "MozMousePixelScroll" ];
    if (e.event.fixHooks) for (var a = i.length; a; ) e.event.fixHooks[i[--a]] = e.event.mouseHooks;
    e.event.special.mousewheel = {
        "setup": function() {
            if (this.addEventListener) for (var e = o.length; e; ) this.addEventListener(o[--e], t, !1); else this.onmousewheel = t;
        },
        "teardown": function() {
            if (this.removeEventListener) for (var e = o.length; e; ) this.removeEventListener(o[--e], t, !1); else this.onmousewheel = null;
        }
    }, e.fn.extend({
        "mousewheel": function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel");
        },
        "unmousewheel": function(e) {
            return this.unbind("mousewheel", e);
        }
    });
});