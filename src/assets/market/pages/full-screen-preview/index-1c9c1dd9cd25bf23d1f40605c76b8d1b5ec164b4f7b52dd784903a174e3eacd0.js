!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, (function(e, t) {
    function n(e) {
        var t = e.length
          , n = K.type(e);
        return "function" !== n && !K.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }
    function r(e, t, n) {
        if (K.isFunction(t))
            return K.grep(e, (function(e, r) {
                return !!t.call(e, r, e) !== n
            }
            ));
        if (t.nodeType)
            return K.grep(e, (function(e) {
                return e === t !== n
            }
            ));
        if ("string" == typeof t) {
            if (se.test(t))
                return K.filter(t, e, n);
            t = K.filter(t, e)
        }
        return K.grep(e, (function(e) {
            return $.call(t, e) >= 0 !== n
        }
        ))
    }
    function i(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function o(e) {
        var t = pe[e] = {};
        return K.each(e.match(he) || [], (function(e, n) {
            t[n] = !0
        }
        )),
        t
    }
    function a() {
        J.removeEventListener("DOMContentLoaded", a, !1),
        e.removeEventListener("load", a, !1),
        K.ready()
    }
    function s() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }),
        this.expando = K.expando + Math.random()
    }
    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(we, "-$1").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ve.test(n) ? K.parseJSON(n) : n)
                } catch (e) {}
                ye.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function l() {
        return !0
    }
    function c() {
        return !1
    }
    function f() {
        try {
            return J.activeElement
        } catch (e) {}
    }
    function d(e, t) {
        return K.nodeName(e, "table") && K.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function h(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function p(e) {
        var t = He.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function m(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            ge.set(e[n], "globalEval", !t || ge.get(t[n], "globalEval"))
    }
    function g(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (ge.hasData(e) && (o = ge.access(e),
            a = ge.set(t, o),
            l = o.events))
                for (i in delete a.handle,
                a.events = {},
                l)
                    for (n = 0,
                    r = l[i].length; n < r; n++)
                        K.event.add(t, i, l[i][n]);
            ye.hasData(e) && (s = ye.access(e),
            u = K.extend({}, s),
            ye.set(t, u))
        }
    }
    function y(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && K.nodeName(e, t) ? K.merge([e], n) : n
    }
    function v(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Te.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function w(t, n) {
        var r, i = K(n.createElement(t)).appendTo(n.body), o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : K.css(i[0], "display");
        return i.detach(),
        o
    }
    function _(e) {
        var t = J
          , n = Ie[e];
        return n || ("none" !== (n = w(e, t)) && n || ((t = (We = (We || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(),
        t.close(),
        n = w(e, t),
        We.detach()),
        Ie[e] = n),
        n
    }
    function b(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Ge(e)) && (a = n.getPropertyValue(t) || n[t]),
        n && ("" !== a || K.contains(e.ownerDocument, e) || (a = K.style(e, t)),
        qe.test(a) && Ue.test(t) && (r = s.width,
        i = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = r,
        s.minWidth = i,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function x(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    function k(e, t) {
        if (t in e)
            return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Xe.length; i--; )
            if ((t = Xe[i] + n)in e)
                return t;
        return r
    }
    function S(e, t, n) {
        var r = $e.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function T(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)
            "margin" === n && (a += K.css(e, n + ke[o], !0, i)),
            r ? ("content" === n && (a -= K.css(e, "padding" + ke[o], !0, i)),
            "margin" !== n && (a -= K.css(e, "border" + ke[o] + "Width", !0, i))) : (a += K.css(e, "padding" + ke[o], !0, i),
            "padding" !== n && (a += K.css(e, "border" + ke[o] + "Width", !0, i)));
        return a
    }
    function D(e, t, n) {
        var r = !0
          , i = "width" === t ? e.offsetWidth : e.offsetHeight
          , o = Ge(e)
          , a = "border-box" === K.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (((i = b(e, t, o)) < 0 || null == i) && (i = e.style[t]),
            qe.test(i))
                return i;
            r = a && (X.boxSizingReliable() || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + T(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }
    function M(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)
            (r = e[a]).style && (o[a] = ge.get(r, "olddisplay"),
            n = r.style.display,
            t ? (o[a] || "none" !== n || (r.style.display = ""),
            "" === r.style.display && Se(r) && (o[a] = ge.access(r, "olddisplay", _(r.nodeName)))) : (i = Se(r),
            "none" === n && i || ge.set(r, "olddisplay", i ? n : K.css(r, "display"))));
        for (a = 0; a < s; a++)
            (r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    function C(e, t, n, r, i) {
        return new C.prototype.init(e,t,n,r,i)
    }
    function N() {
        return setTimeout((function() {
            Je = void 0
        }
        )),
        Je = K.now()
    }
    function O(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = ke[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function E(e, t, n) {
        for (var r, i = (rt[t] || []).concat(rt["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function Y(e, t, n) {
        var r, i, o, a, s, u, l, c = this, f = {}, d = e.style, h = e.nodeType && Se(e), p = ge.get(e, "fxshow");
        for (r in n.queue || (null == (s = K._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
        u = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || u()
        }
        ),
        s.unqueued++,
        c.always((function() {
            c.always((function() {
                s.unqueued--,
                K.queue(e, "fx").length || s.empty.fire()
            }
            ))
        }
        ))),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
        "inline" === ("none" === (l = K.css(e, "display")) ? ge.get(e, "olddisplay") || _(e.nodeName) : l) && "none" === K.css(e, "float") && (d.display = "inline-block")),
        n.overflow && (d.overflow = "hidden",
        c.always((function() {
            d.overflow = n.overflow[0],
            d.overflowX = n.overflow[1],
            d.overflowY = n.overflow[2]
        }
        ))),
        t)
            if (i = t[r],
            Ke.exec(i)) {
                if (delete t[r],
                o = o || "toggle" === i,
                i === (h ? "hide" : "show")) {
                    if ("show" !== i || !p || void 0 === p[r])
                        continue;
                    h = !0
                }
                f[r] = p && p[r] || K.style(e, r)
            } else
                l = void 0;
        if (K.isEmptyObject(f))
            "inline" === ("none" === l ? _(e.nodeName) : l) && (d.display = l);
        else
            for (r in p ? "hidden"in p && (h = p.hidden) : p = ge.access(e, "fxshow", {}),
            o && (p.hidden = !h),
            h ? K(e).show() : c.done((function() {
                K(e).hide()
            }
            )),
            c.done((function() {
                var t;
                for (t in ge.remove(e, "fxshow"),
                f)
                    K.style(e, t, f[t])
            }
            )),
            f)
                a = E(h ? p[r] : 0, r, c),
                r in p || (p[r] = a.start,
                h && (a.end = a.start,
                a.start = "width" === r || "height" === r ? 1 : 0))
    }
    function j(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (i = t[r = K.camelCase(n)],
            o = e[n],
            K.isArray(o) && (i = o[1],
            o = e[n] = o[0]),
            n !== r && (e[r] = o,
            delete e[n]),
            (a = K.cssHooks[r]) && "expand"in a)
                for (n in o = a.expand(o),
                delete e[r],
                o)
                    n in e || (e[n] = o[n],
                    t[n] = i);
            else
                t[r] = i
    }
    function A(e, t, n) {
        var r, i, o = 0, a = nt.length, s = K.Deferred().always((function() {
            delete u.elem
        }
        )), u = function() {
            if (i)
                return !1;
            for (var t = Je || N(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++)
                l.tweens[o].run(r);
            return s.notifyWith(e, [l, r, n]),
            r < 1 && a ? n : (s.resolveWith(e, [l]),
            !1)
        }, l = s.promise({
            elem: e,
            props: K.extend({}, t),
            opts: K.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Je || N(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = K.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? l.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; n < r; n++)
                    l.tweens[n].run(1);
                return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]),
                this
            }
        }), c = l.props;
        for (j(c, l.opts.specialEasing); o < a; o++)
            if (r = nt[o].call(l, e, c, l.opts))
                return r;
        return K.map(c, E, l),
        K.isFunction(l.opts.start) && l.opts.start.call(e, l),
        K.fx.timer(K.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function L(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(he) || [];
            if (K.isFunction(n))
                for (; r = o[i++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function P(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0,
            K.each(e[s] || [], (function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                i(l),
                !1)
            }
            )),
            u
        }
        var o = {}
          , a = e === xt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function H(e, t) {
        var n, r, i = K.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && K.extend(!0, e, r),
        e
    }
    function R(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
            u.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0]in n)
            o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o)
            return o !== u[0] && u.unshift(o),
            n[o]
    }
    function F(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            u = o,
            o = c.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                            if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (!0 !== a)
                        if (a && e.throws)
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function W(e, t, n, r) {
        var i;
        if (K.isArray(t))
            K.each(t, (function(t, i) {
                n || Tt.test(e) ? r(e, i) : W(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            }
            ));
        else if (n || "object" !== K.type(t))
            r(e, t);
        else
            for (i in t)
                W(e + "[" + i + "]", t[i], n, r)
    }
    function I(e) {
        return K.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var U = []
      , q = U.slice
      , G = U.concat
      , V = U.push
      , $ = U.indexOf
      , B = {}
      , z = B.toString
      , Z = B.hasOwnProperty
      , X = {}
      , J = e.document
      , Q = "2.1.1"
      , K = function(e, t) {
        return new K.fn.init(e,t)
    }
      , ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , te = /^-ms-/
      , ne = /-([\da-z])/gi
      , re = function(e, t) {
        return t.toUpperCase()
    };
    K.fn = K.prototype = {
        jquery: Q,
        constructor: K,
        selector: "",
        length: 0,
        toArray: function() {
            return q.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : q.call(this)
        },
        pushStack: function(e) {
            var t = K.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return K.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(K.map(this, (function(t, n) {
                return e.call(t, n, t)
            }
            )))
        },
        slice: function() {
            return this.pushStack(q.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: V,
        sort: U.sort,
        splice: U.splice
    },
    K.extend = K.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || K.isFunction(a) || (a = {}),
        s === u && (a = this,
        s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = a[t],
                    a !== (r = e[t]) && (l && r && (K.isPlainObject(r) || (i = K.isArray(r))) ? (i ? (i = !1,
                    o = n && K.isArray(n) ? n : []) : o = n && K.isPlainObject(n) ? n : {},
                    a[t] = K.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }
    ,
    K.extend({
        expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === K.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !K.isArray(e) && e - parseFloat(e) >= 0
        },
        isPlainObject: function(e) {
            return "object" === K.type(e) && !e.nodeType && !K.isWindow(e) && !(e.constructor && !Z.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? B[z.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            (e = K.trim(e)) && (1 === e.indexOf("use strict") ? ((t = J.createElement("script")).text = e,
            J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(te, "ms-").replace(ne, re)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i = 0
              , o = e.length
              , a = n(e);
            if (r) {
                if (a)
                    for (; i < o && !1 !== t.apply(e[i], r); i++)
                        ;
                else
                    for (i in e)
                        if (!1 === t.apply(e[i], r))
                            break
            } else if (a)
                for (; i < o && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ee, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? K.merge(r, "string" == typeof e ? [e] : e) : V.call(r, e)),
            r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : $.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, r) {
            var i, o = 0, a = e.length, s = [];
            if (n(e))
                for (; o < a; o++)
                    null != (i = t(e[o], o, r)) && s.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, r)) && s.push(i);
            return G.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t],
            t = e,
            e = n),
            K.isFunction(e))
                return r = q.call(arguments, 2),
                i = function() {
                    return e.apply(t || this, r.concat(q.call(arguments)))
                }
                ,
                i.guid = e.guid = e.guid || K.guid++,
                i
        },
        now: Date.now,
        support: X
    }),
    K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), (function(e, t) {
        B["[object " + t + "]"] = t.toLowerCase()
    }
    ));
    var ie = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, l, f, h, p, m;
            if ((t ? t.ownerDocument || t : W) !== Y && E(t),
            n = n || [],
            !e || "string" != typeof e)
                return n;
            if (1 !== (s = (t = t || Y).nodeType) && 9 !== s)
                return [];
            if (A && !r) {
                if (i = ve.exec(e))
                    if (a = i[1]) {
                        if (9 === s) {
                            if (!(o = t.getElementById(a)) || !o.parentNode)
                                return n;
                            if (o.id === a)
                                return n.push(o),
                                n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && R(t, o) && o.id === a)
                            return n.push(o),
                            n
                    } else {
                        if (i[2])
                            return K.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((a = i[3]) && b.getElementsByClassName && t.getElementsByClassName)
                            return K.apply(n, t.getElementsByClassName(a)),
                            n
                    }
                if (b.qsa && (!L || !L.test(e))) {
                    if (h = f = F,
                    p = t,
                    m = 9 === s && e,
                    1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = T(e),
                        (f = t.getAttribute("id")) ? h = f.replace(_e, "\\$&") : t.setAttribute("id", h),
                        h = "[id='" + h + "'] ",
                        u = l.length; u--; )
                            l[u] = h + d(l[u]);
                        p = we.test(e) && c(t.parentNode) || t,
                        m = l.join(",")
                    }
                    if (m)
                        try {
                            return K.apply(n, p.querySelectorAll(m)),
                            n
                        } catch (e) {} finally {
                            f || t.removeAttribute("id")
                        }
                }
            }
            return M(e.replace(ue, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()],
                e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[F] = !0,
            e
        }
        function i(e) {
            var t = Y.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--; )
                x.attrHandle[n[r]] = t
        }
        function a(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || z) - (~e.sourceIndex || z);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function l(e) {
            return r((function(t) {
                return t = +t,
                r((function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; )
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                }
                ))
            }
            ))
        }
        function c(e) {
            return e && typeof e.getElementsByTagName !== B && e
        }
        function f() {}
        function d(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function h(e, t, n) {
            var r = t.dir
              , i = n && "parentNode" === r
              , o = U++;
            return t.first ? function(t, n, o) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || i)
                        return e(t, n, o)
            }
            : function(t, n, a) {
                var s, u, l = [I, o];
                if (a) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || i) && e(t, n, a))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || i) {
                            if ((s = (u = t[F] || (t[F] = {}))[r]) && s[0] === I && s[1] === o)
                                return l[2] = s[2];
                            if (u[r] = l,
                            l[2] = e(t, n, a))
                                return !0
                        }
            }
        }
        function p(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function m(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++)
                t(e, n[i], r);
            return r
        }
        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function y(e, t, n, i, o, a) {
            return i && !i[F] && (i = y(i)),
            o && !o[F] && (o = y(o, a)),
            r((function(r, a, s, u) {
                var l, c, f, d = [], h = [], p = a.length, y = r || m(t || "*", s.nodeType ? [s] : s, []), v = !e || !r && t ? y : g(y, d, e, s, u), w = n ? o || (r ? e : p || i) ? [] : a : v;
                if (n && n(v, w, s, u),
                i)
                    for (l = g(w, h),
                    i(l, [], s, u),
                    c = l.length; c--; )
                        (f = l[c]) && (w[h[c]] = !(v[h[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [],
                            c = w.length; c--; )
                                (f = w[c]) && l.push(v[c] = f);
                            o(null, w = [], l, u)
                        }
                        for (c = w.length; c--; )
                            (f = w[c]) && (l = o ? te.call(r, f) : d[c]) > -1 && (r[l] = !(a[l] = f))
                    }
                } else
                    w = g(w === a ? w.splice(p, w.length) : w),
                    o ? o(null, a, w, u) : K.apply(a, w)
            }
            ))
        }
        function v(e) {
            for (var t, n, r, i = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, u = h((function(e) {
                return e === t
            }
            ), a, !0), l = h((function(e) {
                return te.call(t, e) > -1
            }
            ), a, !0), c = [function(e, n, r) {
                return !o && (r || n !== C) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
            }
            ]; s < i; s++)
                if (n = x.relative[e[s].type])
                    c = [h(p(c), n)];
                else {
                    if ((n = x.filter[e[s].type].apply(null, e[s].matches))[F]) {
                        for (r = ++s; r < i && !x.relative[e[r].type]; r++)
                            ;
                        return y(s > 1 && p(c), s > 1 && d(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ue, "$1"), n, s < r && v(e.slice(s, r)), r < i && v(e = e.slice(r)), r < i && d(e))
                    }
                    c.push(n)
                }
            return p(c)
        }
        function w(e, n) {
            var i = n.length > 0
              , o = e.length > 0
              , a = function(r, a, s, u, l) {
                var c, f, d, h = 0, p = "0", m = r && [], y = [], v = C, w = r || o && x.find.TAG("*", l), _ = I += null == v ? 1 : Math.random() || .1, b = w.length;
                for (l && (C = a !== Y && a); p !== b && null != (c = w[p]); p++) {
                    if (o && c) {
                        for (f = 0; d = e[f++]; )
                            if (d(c, a, s)) {
                                u.push(c);
                                break
                            }
                        l && (I = _)
                    }
                    i && ((c = !d && c) && h--,
                    r && m.push(c))
                }
                if (h += p,
                i && p !== h) {
                    for (f = 0; d = n[f++]; )
                        d(m, y, a, s);
                    if (r) {
                        if (h > 0)
                            for (; p--; )
                                m[p] || y[p] || (y[p] = J.call(u));
                        y = g(y)
                    }
                    K.apply(u, y),
                    l && !r && y.length > 0 && h + n.length > 1 && t.uniqueSort(u)
                }
                return l && (I = _,
                C = v),
                m
            };
            return i ? r(a) : a
        }
        var _, b, x, k, S, T, D, M, C, N, O, E, Y, j, A, L, P, H, R, F = "sizzle" + -new Date, W = e.document, I = 0, U = 0, q = n(), G = n(), V = n(), $ = function(e, t) {
            return e === t && (O = !0),
            0
        }, B = "undefined", z = 1 << 31, Z = {}.hasOwnProperty, X = [], J = X.pop, Q = X.push, K = X.push, ee = X.slice, te = X.indexOf || function(e) {
            for (var t = 0, n = this.length; t < n; t++)
                if (this[t] === e)
                    return t;
            return -1
        }
        , ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", re = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", oe = ie.replace("w", "w#"), ae = "\\[" + re + "*(" + ie + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + re + "*\\]", se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)", ue = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$","g"), le = new RegExp("^" + re + "*," + re + "*"), ce = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"), fe = new RegExp("=" + re + "*([^\\]'\"]*?)" + re + "*\\]","g"), de = new RegExp(se), he = new RegExp("^" + oe + "$"), pe = {
            ID: new RegExp("^#(" + ie + ")"),
            CLASS: new RegExp("^\\.(" + ie + ")"),
            TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ae),
            PSEUDO: new RegExp("^" + se),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)","i"),
            bool: new RegExp("^(?:" + ne + ")$","i"),
            needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)","i")
        }, me = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ye = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, we = /[+~]/, _e = /'|\\/g, be = new RegExp("\\\\([\\da-f]{1,6}" + re + "?|(" + re + ")|.)","ig"), xe = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        };
        try {
            K.apply(X = ee.call(W.childNodes), W.childNodes),
            X[W.childNodes.length].nodeType
        } catch (e) {
            K = {
                apply: X.length ? function(e, t) {
                    Q.apply(e, ee.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        for (_ in b = t.support = {},
        S = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        E = t.setDocument = function(e) {
            var t, n = e ? e.ownerDocument || e : W, r = n.defaultView;
            return n !== Y && 9 === n.nodeType && n.documentElement ? (Y = n,
            j = n.documentElement,
            A = !S(n),
            r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", (function() {
                E()
            }
            ), !1) : r.attachEvent && r.attachEvent("onunload", (function() {
                E()
            }
            ))),
            b.attributes = i((function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }
            )),
            b.getElementsByTagName = i((function(e) {
                return e.appendChild(n.createComment("")),
                !e.getElementsByTagName("*").length
            }
            )),
            b.getElementsByClassName = ye.test(n.getElementsByClassName) && i((function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                e.firstChild.className = "i",
                2 === e.getElementsByClassName("i").length
            }
            )),
            b.getById = i((function(e) {
                return j.appendChild(e).id = F,
                !n.getElementsByName || !n.getElementsByName(F).length
            }
            )),
            b.getById ? (x.find.ID = function(e, t) {
                if (typeof t.getElementById !== B && A) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }
            ,
            x.filter.ID = function(e) {
                var t = e.replace(be, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete x.find.ID,
            x.filter.ID = function(e) {
                var t = e.replace(be, xe);
                return function(e) {
                    var n = typeof e.getAttributeNode !== B && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            x.find.TAG = b.getElementsByTagName ? function(e, t) {
                if (typeof t.getElementsByTagName !== B)
                    return t.getElementsByTagName(e)
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            x.find.CLASS = b.getElementsByClassName && function(e, t) {
                if (typeof t.getElementsByClassName !== B && A)
                    return t.getElementsByClassName(e)
            }
            ,
            P = [],
            L = [],
            (b.qsa = ye.test(n.querySelectorAll)) && (i((function(e) {
                e.innerHTML = "<select msallowclip=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowclip^='']").length && L.push("[*^$]=" + re + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || L.push("\\[" + re + "*(?:value|" + ne + ")"),
                e.querySelectorAll(":checked").length || L.push(":checked")
            }
            )),
            i((function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && L.push("name" + re + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                L.push(",.*:")
            }
            ))),
            (b.matchesSelector = ye.test(H = j.matches || j.webkitMatchesSelector || j.mozMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && i((function(e) {
                b.disconnectedMatch = H.call(e, "div"),
                H.call(e, "[s!='']:x"),
                P.push("!=", se)
            }
            )),
            L = L.length && new RegExp(L.join("|")),
            P = P.length && new RegExp(P.join("|")),
            t = ye.test(j.compareDocumentPosition),
            R = t || ye.test(j.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            $ = t ? function(e, t) {
                if (e === t)
                    return O = !0,
                    0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !b.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === W && R(W, e) ? -1 : t === n || t.ownerDocument === W && R(W, t) ? 1 : N ? te.call(N, e) - te.call(N, t) : 0 : 4 & r ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return O = !0,
                    0;
                var r, i = 0, o = e.parentNode, s = t.parentNode, u = [e], l = [t];
                if (!o || !s)
                    return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : N ? te.call(N, e) - te.call(N, t) : 0;
                if (o === s)
                    return a(e, t);
                for (r = e; r = r.parentNode; )
                    u.unshift(r);
                for (r = t; r = r.parentNode; )
                    l.unshift(r);
                for (; u[i] === l[i]; )
                    i++;
                return i ? a(u[i], l[i]) : u[i] === W ? -1 : l[i] === W ? 1 : 0
            }
            ,
            n) : Y
        }
        ,
        t.matches = function(e, n) {
            return t(e, null, null, n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== Y && E(e),
            n = n.replace(fe, "='$1']"),
            b.matchesSelector && A && (!P || !P.test(n)) && (!L || !L.test(n)))
                try {
                    var r = H.call(e, n);
                    if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (e) {}
            return t(n, Y, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== Y && E(e),
            R(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== Y && E(e);
            var n = x.attrHandle[t.toLowerCase()]
              , r = n && Z.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !A) : void 0;
            return void 0 !== r ? r : b.attributes || !A ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (O = !b.detectDuplicates,
            N = !b.sortStable && e.slice(0),
            e.sort($),
            O) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return N = null,
            e
        }
        ,
        k = t.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += k(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += k(t);
            return n
        }
        ,
        x = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(be, xe),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(be, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = q[e + " "];
                    return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && q(e, (function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== B && e.getAttribute("class") || "")
                    }
                    ))
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "",
                        "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, u) {
                        var l, c, f, d, h, p, m = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !u && !s;
                        if (g) {
                            if (o) {
                                for (; m; ) {
                                    for (f = t; f = f[m]; )
                                        if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType)
                                            return !1;
                                    p = m = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [a ? g.firstChild : g.lastChild],
                            a && v) {
                                for (h = (l = (c = g[F] || (g[F] = {}))[e] || [])[0] === I && l[1],
                                d = l[0] === I && l[2],
                                f = h && g.childNodes[h]; f = ++h && f && f[m] || (d = h = 0) || p.pop(); )
                                    if (1 === f.nodeType && ++d && f === t) {
                                        c[e] = [I, h, d];
                                        break
                                    }
                            } else if (v && (l = (t[F] || (t[F] = {}))[e]) && l[0] === I)
                                d = l[1];
                            else
                                for (; (f = ++h && f && f[m] || (d = h = 0) || p.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++d || (v && ((f[F] || (f[F] = {}))[e] = [I, d]),
                                f !== t)); )
                                    ;
                            return (d -= i) === r || d % r == 0 && d / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[F] ? o(n) : o.length > 1 ? (i = [e, e, "", n],
                    x.setFilters.hasOwnProperty(e.toLowerCase()) ? r((function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--; )
                            e[r = te.call(e, i[a])] = !(t[r] = i[a])
                    }
                    )) : function(e) {
                        return o(e, 0, i)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: r((function(e) {
                    var t = []
                      , n = []
                      , i = D(e.replace(ue, "$1"));
                    return i[F] ? r((function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--; )
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }
                    )) : function(e, r, o) {
                        return t[0] = e,
                        i(t, null, o, n),
                        !n.pop()
                    }
                }
                )),
                has: r((function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }
                )),
                contains: r((function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                    }
                }
                )),
                lang: r((function(e) {
                    return he.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(be, xe).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = A ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }
                )),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === j
                },
                focus: function(e) {
                    return e === Y.activeElement && (!Y.hasFocus || Y.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return ge.test(e.nodeName)
                },
                input: function(e) {
                    return me.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l((function() {
                    return [0]
                }
                )),
                last: l((function(e, t) {
                    return [t - 1]
                }
                )),
                eq: l((function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }
                )),
                even: l((function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }
                )),
                odd: l((function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }
                )),
                lt: l((function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }
                )),
                gt: l((function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                }
                ))
            }
        },
        x.pseudos.nth = x.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            x.pseudos[_] = s(_);
        for (_ in {
            submit: !0,
            reset: !0
        })
            x.pseudos[_] = u(_);
        return f.prototype = x.filters = x.pseudos,
        x.setFilters = new f,
        T = t.tokenize = function(e, n) {
            var r, i, o, a, s, u, l, c = G[e + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (s = e,
            u = [],
            l = x.preFilter; s; ) {
                for (a in r && !(i = le.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                u.push(o = [])),
                r = !1,
                (i = ce.exec(s)) && (r = i.shift(),
                o.push({
                    value: r,
                    type: i[0].replace(ue, " ")
                }),
                s = s.slice(r.length)),
                x.filter)
                    !(i = pe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(),
                    o.push({
                        value: r,
                        type: a,
                        matches: i
                    }),
                    s = s.slice(r.length));
                if (!r)
                    break
            }
            return n ? s.length : s ? t.error(e) : G(e, u).slice(0)
        }
        ,
        D = t.compile = function(e, t) {
            var n, r = [], i = [], o = V[e + " "];
            if (!o) {
                for (t || (t = T(e)),
                n = t.length; n--; )
                    (o = v(t[n]))[F] ? r.push(o) : i.push(o);
                (o = V(e, w(i, r))).selector = e
            }
            return o
        }
        ,
        M = t.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, f = !r && T(e = l.selector || e);
            if (n = n || [],
            1 === f.length) {
                if ((o = f[0] = f[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && b.getById && 9 === t.nodeType && A && x.relative[o[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(be, xe), t) || [])[0]))
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i],
                !x.relative[s = a.type]); )
                    if ((u = x.find[s]) && (r = u(a.matches[0].replace(be, xe), we.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        !(e = r.length && d(o)))
                            return K.apply(n, r),
                            n;
                        break
                    }
            }
            return (l || D(e, f))(r, t, !A, n, we.test(e) && c(t.parentNode) || t),
            n
        }
        ,
        b.sortStable = F.split("").sort($).join("") === F,
        b.detectDuplicates = !!O,
        E(),
        b.sortDetached = i((function(e) {
            return 1 & e.compareDocumentPosition(Y.createElement("div"))
        }
        )),
        i((function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }
        )) || o("type|href|height|width", (function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }
        )),
        b.attributes && i((function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }
        )) || o("value", (function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }
        )),
        i((function(e) {
            return null == e.getAttribute("disabled")
        }
        )) || o(ne, (function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        )),
        t
    }(e);
    K.find = ie,
    K.expr = ie.selectors,
    K.expr[":"] = K.expr.pseudos,
    K.unique = ie.uniqueSort,
    K.text = ie.getText,
    K.isXMLDoc = ie.isXML,
    K.contains = ie.contains;
    var oe = K.expr.match.needsContext
      , ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , se = /^.[^:#\[\.,]*$/;
    K.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? K.find.matchesSelector(r, e) ? [r] : [] : K.find.matches(e, K.grep(t, (function(e) {
            return 1 === e.nodeType
        }
        )))
    }
    ,
    K.fn.extend({
        find: function(e) {
            var t, n = this.length, r = [], i = this;
            if ("string" != typeof e)
                return this.pushStack(K(e).filter((function() {
                    for (t = 0; t < n; t++)
                        if (K.contains(i[t], this))
                            return !0
                }
                )));
            for (t = 0; t < n; t++)
                K.find(e, i[t], r);
            return (r = this.pushStack(n > 1 ? K.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e,
            r
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && oe.test(e) ? K(e) : e || [], !1).length
        }
    });
    var ue, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (K.fn.init = function(e, t) {
        var n, r;
        if (!e)
            return this;
        if ("string" == typeof e) {
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : le.exec(e)) || !n[1] && t)
                return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof K ? t[0] : t,
                K.merge(this, K.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)),
                ae.test(n[1]) && K.isPlainObject(t))
                    for (n in t)
                        K.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return (r = J.getElementById(n[2])) && r.parentNode && (this.length = 1,
            this[0] = r),
            this.context = J,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : K.isFunction(e) ? void 0 !== ue.ready ? ue.ready(e) : e(K) : (void 0 !== e.selector && (this.selector = e.selector,
        this.context = e.context),
        K.makeArray(e, this))
    }
    ).prototype = K.fn,
    ue = K(J);
    var ce = /^(?:parents|prev(?:Until|All))/
      , fe = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    K.extend({
        dir: function(e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (i && K(e).is(n))
                        break;
                    r.push(e)
                }
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }),
    K.fn.extend({
        has: function(e) {
            var t = K(e, this)
              , n = t.length;
            return this.filter((function() {
                for (var e = 0; e < n; e++)
                    if (K.contains(this, t[e]))
                        return !0
            }
            ))
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = oe.test(e) || "string" != typeof e ? K(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && K.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? K.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? $.call(K(e), this[0]) : $.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(K.unique(K.merge(this.get(), K(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    K.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return K.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return K.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return K.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return K.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return K.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return K.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return K.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return K.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || K.merge([], e.childNodes)
        }
    }, (function(e, t) {
        K.fn[e] = function(n, r) {
            var i = K.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = K.filter(r, i)),
            this.length > 1 && (fe[e] || K.unique(i),
            ce.test(e) && i.reverse()),
            this.pushStack(i)
        }
    }
    ));
    var de, he = /\S+/g, pe = {};
    K.Callbacks = function(e) {
        e = "string" == typeof e ? pe[e] || o(e) : K.extend({}, e);
        var t, n, r, i, a, s, u = [], l = !e.once && [], c = function(o) {
            for (t = e.memory && o,
            n = !0,
            s = i || 0,
            i = 0,
            a = u.length,
            r = !0; u && s < a; s++)
                if (!1 === u[s].apply(o[0], o[1]) && e.stopOnFalse) {
                    t = !1;
                    break
                }
            r = !1,
            u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
        }, f = {
            add: function() {
                if (u) {
                    var n = u.length;
                    !function t(n) {
                        K.each(n, (function(n, r) {
                            var i = K.type(r);
                            "function" === i ? e.unique && f.has(r) || u.push(r) : r && r.length && "string" !== i && t(r)
                        }
                        ))
                    }(arguments),
                    r ? a = u.length : t && (i = n,
                    c(t))
                }
                return this
            },
            remove: function() {
                return u && K.each(arguments, (function(e, t) {
                    for (var n; (n = K.inArray(t, u, n)) > -1; )
                        u.splice(n, 1),
                        r && (n <= a && a--,
                        n <= s && s--)
                }
                )),
                this
            },
            has: function(e) {
                return e ? K.inArray(e, u) > -1 : !(!u || !u.length)
            },
            empty: function() {
                return u = [],
                a = 0,
                this
            },
            disable: function() {
                return u = l = t = void 0,
                this
            },
            disabled: function() {
                return !u
            },
            lock: function() {
                return l = void 0,
                t || f.disable(),
                this
            },
            locked: function() {
                return !l
            },
            fireWith: function(e, t) {
                return !u || n && !l || (t = [e, (t = t || []).slice ? t.slice() : t],
                r ? l.push(t) : c(t)),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!n
            }
        };
        return f
    }
    ,
    K.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", K.Callbacks("once memory"), "resolved"], ["reject", "fail", K.Callbacks("once memory"), "rejected"], ["notify", "progress", K.Callbacks("memory")]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return K.Deferred((function(n) {
                        K.each(t, (function(t, o) {
                            var a = K.isFunction(e[t]) && e[t];
                            i[o[1]]((function() {
                                var e = a && a.apply(this, arguments);
                                e && K.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                            }
                            ))
                        }
                        )),
                        e = null
                    }
                    )).promise()
                },
                promise: function(e) {
                    return null != e ? K.extend(e, r) : r
                }
            }
              , i = {};
            return r.pipe = r.then,
            K.each(t, (function(e, o) {
                var a = o[2]
                  , s = o[3];
                r[o[1]] = a.add,
                s && a.add((function() {
                    n = s
                }
                ), t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments),
                    this
                }
                ,
                i[o[0] + "With"] = a.fireWith
            }
            )),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t, n, r, i = 0, o = q.call(arguments), a = o.length, s = 1 !== a || e && K.isFunction(e.promise) ? a : 0, u = 1 === s ? e : K.Deferred(), l = function(e, n, r) {
                return function(i) {
                    n[e] = this,
                    r[e] = arguments.length > 1 ? q.call(arguments) : i,
                    r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                }
            };
            if (a > 1)
                for (t = new Array(a),
                n = new Array(a),
                r = new Array(a); i < a; i++)
                    o[i] && K.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, o),
            u.promise()
        }
    }),
    K.fn.ready = function(e) {
        return K.ready.promise().done(e),
        this
    }
    ,
    K.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? K.readyWait++ : K.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --K.readyWait : K.isReady) || (K.isReady = !0,
            !0 !== e && --K.readyWait > 0 || (de.resolveWith(J, [K]),
            K.fn.triggerHandler && (K(J).triggerHandler("ready"),
            K(J).off("ready"))))
        }
    }),
    K.ready.promise = function(t) {
        return de || (de = K.Deferred(),
        "complete" === J.readyState ? setTimeout(K.ready) : (J.addEventListener("DOMContentLoaded", a, !1),
        e.addEventListener("load", a, !1))),
        de.promise(t)
    }
    ,
    K.ready.promise();
    var me = K.access = function(e, t, n, r, i, o, a) {
        var s = 0
          , u = e.length
          , l = null == n;
        if ("object" === K.type(n))
            for (s in i = !0,
            n)
                K.access(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        K.isFunction(r) || (a = !0),
        l && (a ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(K(e), n)
        }
        )),
        t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
    ;
    K.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    ,
    s.uid = 1,
    s.accepts = K.acceptData,
    s.prototype = {
        key: function(e) {
            if (!s.accepts(e))
                return 0;
            var t = {}
              , n = e[this.expando];
            if (!n) {
                n = s.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    },
                    Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n,
                    K.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}),
            n
        },
        set: function(e, t, n) {
            var r, i = this.key(e), o = this.cache[i];
            if ("string" == typeof t)
                o[t] = n;
            else if (K.isEmptyObject(o))
                K.extend(this.cache[i], t);
            else
                for (r in t)
                    o[r] = t[r];
            return o
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, K.camelCase(t)) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = this.key(e), a = this.cache[o];
            if (void 0 === t)
                this.cache[o] = {};
            else {
                K.isArray(t) ? r = t.concat(t.map(K.camelCase)) : (i = K.camelCase(t),
                r = t in a ? [t, i] : (r = i)in a ? [r] : r.match(he) || []),
                n = r.length;
                for (; n--; )
                    delete a[r[n]]
            }
        },
        hasData: function(e) {
            return !K.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ge = new s
      , ye = new s
      , ve = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , we = /([A-Z])/g;
    K.extend({
        hasData: function(e) {
            return ye.hasData(e) || ge.hasData(e)
        },
        data: function(e, t, n) {
            return ye.access(e, t, n)
        },
        removeData: function(e, t) {
            ye.remove(e, t)
        },
        _data: function(e, t, n) {
            return ge.access(e, t, n)
        },
        _removeData: function(e, t) {
            ge.remove(e, t)
        }
    }),
    K.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = ye.get(o),
                1 === o.nodeType && !ge.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = K.camelCase(r.slice(5)),
                        u(o, r, i[r]));
                    ge.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each((function() {
                ye.set(this, e)
            }
            )) : me(this, (function(t) {
                var n, r = K.camelCase(e);
                if (o && void 0 === t)
                    return void 0 !== (n = ye.get(o, e)) || void 0 !== (n = ye.get(o, r)) || void 0 !== (n = u(o, r, void 0)) ? n : void 0;
                this.each((function() {
                    var n = ye.get(this, r);
                    ye.set(this, r, t),
                    -1 !== e.indexOf("-") && void 0 !== n && ye.set(this, e, t)
                }
                ))
            }
            ), null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each((function() {
                ye.remove(this, e)
            }
            ))
        }
    }),
    K.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = ge.get(e, t),
                n && (!r || K.isArray(n) ? r = ge.access(e, t, K.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = K.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = K._queueHooks(e, t)
              , a = function() {
                K.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ge.get(e, n) || ge.access(e, n, {
                empty: K.Callbacks("once memory").add((function() {
                    ge.remove(e, [t + "queue", n])
                }
                ))
            })
        }
    }),
    K.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? K.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                var n = K.queue(this, e, t);
                K._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && K.dequeue(this, e)
            }
            ))
        },
        dequeue: function(e) {
            return this.each((function() {
                K.dequeue(this, e)
            }
            ))
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = K.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (n = ge.get(o[a], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var _e, be, xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ke = ["Top", "Right", "Bottom", "Left"], Se = function(e, t) {
        return e = t || e,
        "none" === K.css(e, "display") || !K.contains(e.ownerDocument, e)
    }, Te = /^(?:checkbox|radio)$/i;
    _e = J.createDocumentFragment().appendChild(J.createElement("div")),
    (be = J.createElement("input")).setAttribute("type", "radio"),
    be.setAttribute("checked", "checked"),
    be.setAttribute("name", "t"),
    _e.appendChild(be),
    X.checkClone = _e.cloneNode(!0).cloneNode(!0).lastChild.checked,
    _e.innerHTML = "<textarea>x</textarea>",
    X.noCloneChecked = !!_e.cloneNode(!0).lastChild.defaultValue;
    var De = "undefined";
    X.focusinBubbles = "onfocusin"in e;
    var Me = /^key/
      , Ce = /^(?:mouse|pointer|contextmenu)|click/
      , Ne = /^(?:focusinfocus|focusoutblur)$/
      , Oe = /^([^.]*)(?:\.(.+)|)$/;
    K.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, h, p, m, g = ge.get(e);
            if (g)
                for (n.handler && (n = (o = n).handler,
                i = o.selector),
                n.guid || (n.guid = K.guid++),
                (u = g.events) || (u = g.events = {}),
                (a = g.handle) || (a = g.handle = function(t) {
                    return typeof K !== De && K.event.triggered !== t.type ? K.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                l = (t = (t || "").match(he) || [""]).length; l--; )
                    h = m = (s = Oe.exec(t[l]) || [])[1],
                    p = (s[2] || "").split(".").sort(),
                    h && (f = K.event.special[h] || {},
                    h = (i ? f.delegateType : f.bindType) || h,
                    f = K.event.special[h] || {},
                    c = K.extend({
                        type: h,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && K.expr.match.needsContext.test(i),
                        namespace: p.join(".")
                    }, o),
                    (d = u[h]) || ((d = u[h] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, r, p, a) || e.addEventListener && e.addEventListener(h, a, !1)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                    K.event.global[h] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, h, p, m, g = ge.hasData(e) && ge.get(e);
            if (g && (u = g.events)) {
                for (l = (t = (t || "").match(he) || [""]).length; l--; )
                    if (h = m = (s = Oe.exec(t[l]) || [])[1],
                    p = (s[2] || "").split(".").sort(),
                    h) {
                        for (f = K.event.special[h] || {},
                        d = u[h = (r ? f.delegateType : f.bindType) || h] || [],
                        s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = d.length; o--; )
                            c = d[o],
                            !i && m !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1),
                            c.selector && d.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, g.handle) || K.removeEvent(e, h, g.handle),
                        delete u[h])
                    } else
                        for (h in u)
                            K.event.remove(e, h + t[l], n, r, !0);
                K.isEmptyObject(u) && (delete g.handle,
                ge.remove(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, a, s, u, l, c, f, d = [r || J], h = Z.call(t, "type") ? t.type : t, p = Z.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = r = r || J,
            3 !== r.nodeType && 8 !== r.nodeType && !Ne.test(h + K.event.triggered) && (h.indexOf(".") >= 0 && (p = h.split("."),
            h = p.shift(),
            p.sort()),
            l = h.indexOf(":") < 0 && "on" + h,
            (t = t[K.expando] ? t : new K.Event(h,"object" == typeof t && t)).isTrigger = i ? 2 : 3,
            t.namespace = p.join("."),
            t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = r),
            n = null == n ? [t] : K.makeArray(n, [t]),
            f = K.event.special[h] || {},
            i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!i && !f.noBubble && !K.isWindow(r)) {
                    for (u = f.delegateType || h,
                    Ne.test(u + h) || (a = a.parentNode); a; a = a.parentNode)
                        d.push(a),
                        s = a;
                    s === (r.ownerDocument || J) && d.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0; (a = d[o++]) && !t.isPropagationStopped(); )
                    t.type = o > 1 ? u : f.bindType || h,
                    (c = (ge.get(a, "events") || {})[t.type] && ge.get(a, "handle")) && c.apply(a, n),
                    (c = l && a[l]) && c.apply && K.acceptData(a) && (t.result = c.apply(a, n),
                    !1 === t.result && t.preventDefault());
                return t.type = h,
                i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), n) || !K.acceptData(r) || l && K.isFunction(r[h]) && !K.isWindow(r) && ((s = r[l]) && (r[l] = null),
                K.event.triggered = h,
                r[h](),
                K.event.triggered = void 0,
                s && (r[l] = s)),
                t.result
            }
        },
        dispatch: function(e) {
            e = K.event.fix(e);
            var t, n, r, i, o, a = [], s = q.call(arguments), u = (ge.get(this, "events") || {})[e.type] || [], l = K.event.special[e.type] || {};
            if (s[0] = e,
            e.delegateTarget = this,
            !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                for (a = K.event.handlers.call(this, e, u),
                t = 0; (i = a[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                        e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o,
                        e.data = o.data,
                        void 0 !== (r = ((K.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (e.result = r) && (e.preventDefault(),
                        e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [], s = t.delegateCount, u = e.target;
            if (s && u.nodeType && (!e.button || "click" !== e.type))
                for (; u !== this; u = u.parentNode || this)
                    if (!0 !== u.disabled || "click" !== e.type) {
                        for (r = [],
                        n = 0; n < s; n++)
                            void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? K(i, this).index(u) >= 0 : K.find(i, this, null, [u]).length),
                            r[i] && r.push(o);
                        r.length && a.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }),
            a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || J).documentElement,
                i = n.body,
                e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0),
                e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[K.expando])
                return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Ce.test(i) ? this.mouseHooks : Me.test(i) ? this.keyHooks : {}),
            r = a.props ? this.props.concat(a.props) : this.props,
            e = new K.Event(o),
            t = r.length; t--; )
                e[n = r[t]] = o[n];
            return e.target || (e.target = J),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            a.filter ? a.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === f() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && K.nodeName(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return K.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = K.extend(new K.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? K.event.trigger(i, null, t) : K.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    K.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    ,
    K.Event = function(e, t) {
        if (!(this instanceof K.Event))
            return new K.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? l : c) : this.type = e,
        t && K.extend(this, t),
        this.timeStamp = e && e.timeStamp || K.now(),
        this[K.expando] = !0
    }
    ,
    K.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = l,
            e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = l,
            e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = l,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    K.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, (function(e, t) {
        K.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || K.contains(r, i)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }
    )),
    X.focusinBubbles || K.each({
        focus: "focusin",
        blur: "focusout"
    }, (function(e, t) {
        var n = function(e) {
            K.event.simulate(t, e.target, K.event.fix(e), !0)
        };
        K.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , i = ge.access(r, t);
                i || r.addEventListener(e, n, !0),
                ge.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , i = ge.access(r, t) - 1;
                i ? ge.access(r, t, i) : (r.removeEventListener(e, n, !0),
                ge.remove(r, t))
            }
        }
    }
    )),
    K.fn.extend({
        on: function(e, t, n, r, i) {
            var o, a;
            if ("object" == typeof e) {
                for (a in "string" != typeof t && (n = n || t,
                t = void 0),
                e)
                    this.on(a, t, n, e[a], i);
                return this
            }
            if (null == n && null == r ? (r = t,
            n = t = void 0) : null == r && ("string" == typeof t ? (r = n,
            n = void 0) : (r = n,
            n = t,
            t = void 0)),
            !1 === r)
                r = c;
            else if (!r)
                return this;
            return 1 === i && (o = r,
            r = function(e) {
                return K().off(e),
                o.apply(this, arguments)
            }
            ,
            r.guid = o.guid || (o.guid = K.guid++)),
            this.each((function() {
                K.event.add(this, e, r, n, t)
            }
            ))
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                K(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = c),
            this.each((function() {
                K.event.remove(this, e, n, t)
            }
            ))
        },
        trigger: function(e, t) {
            return this.each((function() {
                K.event.trigger(e, t, this)
            }
            ))
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return K.event.trigger(e, t, n, !0)
        }
    });
    var Ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , Ye = /<([\w:]+)/
      , je = /<|&#?\w+;/
      , Ae = /<(?:script|style|link)/i
      , Le = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Pe = /^$|\/(?:java|ecma)script/i
      , He = /^true\/(.*)/
      , Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , Fe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Fe.optgroup = Fe.option,
    Fe.tbody = Fe.tfoot = Fe.colgroup = Fe.caption = Fe.thead,
    Fe.th = Fe.td,
    K.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = K.contains(e.ownerDocument, e);
            if (!(X.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || K.isXMLDoc(e)))
                for (a = y(s),
                r = 0,
                i = (o = y(e)).length; r < i; r++)
                    v(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || y(e),
                    a = a || y(s),
                    r = 0,
                    i = o.length; r < i; r++)
                        g(o[r], a[r]);
                else
                    g(e, s);
            return (a = y(s, "script")).length > 0 && m(a, !u && y(e, "script")),
            s
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, a, s, u, l, c = t.createDocumentFragment(), f = [], d = 0, h = e.length; d < h; d++)
                if ((i = e[d]) || 0 === i)
                    if ("object" === K.type(i))
                        K.merge(f, i.nodeType ? [i] : i);
                    else if (je.test(i)) {
                        for (o = o || c.appendChild(t.createElement("div")),
                        a = (Ye.exec(i) || ["", ""])[1].toLowerCase(),
                        s = Fe[a] || Fe._default,
                        o.innerHTML = s[1] + i.replace(Ee, "<$1></$2>") + s[2],
                        l = s[0]; l--; )
                            o = o.lastChild;
                        K.merge(f, o.childNodes),
                        (o = c.firstChild).textContent = ""
                    } else
                        f.push(t.createTextNode(i));
            for (c.textContent = "",
            d = 0; i = f[d++]; )
                if ((!r || -1 === K.inArray(i, r)) && (u = K.contains(i.ownerDocument, i),
                o = y(c.appendChild(i), "script"),
                u && m(o),
                n))
                    for (l = 0; i = o[l++]; )
                        Pe.test(i.type || "") && n.push(i);
            return c
        },
        cleanData: function(e) {
            for (var t, n, r, i, o = K.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                if (K.acceptData(n) && (i = n[ge.expando]) && (t = ge.cache[i])) {
                    if (t.events)
                        for (r in t.events)
                            o[r] ? K.event.remove(n, r) : K.removeEvent(n, r, t.handle);
                    ge.cache[i] && delete ge.cache[i]
                }
                delete ye.cache[n[ye.expando]]
            }
        }
    }),
    K.fn.extend({
        text: function(e) {
            return me(this, (function(e) {
                return void 0 === e ? K.text(this) : this.empty().each((function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                }
                ))
            }
            ), null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, (function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || d(this, e).appendChild(e)
            }
            ))
        },
        prepend: function() {
            return this.domManip(arguments, (function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = d(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            }
            ))
        },
        before: function() {
            return this.domManip(arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            }
            ))
        },
        after: function() {
            return this.domManip(arguments, (function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            }
            ))
        },
        remove: function(e, t) {
            for (var n, r = e ? K.filter(e, this) : this, i = 0; null != (n = r[i]); i++)
                t || 1 !== n.nodeType || K.cleanData(y(n)),
                n.parentNode && (t && K.contains(n.ownerDocument, n) && m(y(n, "script")),
                n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (K.cleanData(y(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map((function() {
                return K.clone(this, e, t)
            }
            ))
        },
        html: function(e) {
            return me(this, (function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !Fe[(Ye.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ee, "<$1></$2>");
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (K.cleanData(y(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }
            ), null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, (function(t) {
                e = this.parentNode,
                K.cleanData(y(this)),
                e && e.replaceChild(t, this)
            }
            )),
            e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = G.apply([], e);
            var n, r, i, o, a, s, u = 0, l = this.length, c = this, f = l - 1, d = e[0], m = K.isFunction(d);
            if (m || l > 1 && "string" == typeof d && !X.checkClone && Le.test(d))
                return this.each((function(n) {
                    var r = c.eq(n);
                    m && (e[0] = d.call(this, n, r.html())),
                    r.domManip(e, t)
                }
                ));
            if (l && (r = (n = K.buildFragment(e, this[0].ownerDocument, !1, this)).firstChild,
            1 === n.childNodes.length && (n = r),
            r)) {
                for (o = (i = K.map(y(n, "script"), h)).length; u < l; u++)
                    a = n,
                    u !== f && (a = K.clone(a, !0, !0),
                    o && K.merge(i, y(a, "script"))),
                    t.call(this[u], a, u);
                if (o)
                    for (s = i[i.length - 1].ownerDocument,
                    K.map(i, p),
                    u = 0; u < o; u++)
                        a = i[u],
                        Pe.test(a.type || "") && !ge.access(a, "globalEval") && K.contains(s, a) && (a.src ? K._evalUrl && K._evalUrl(a.src) : K.globalEval(a.textContent.replace(Re, "")))
            }
            return this
        }
    }),
    K.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, (function(e, t) {
        K.fn[e] = function(e) {
            for (var n, r = [], i = K(e), o = i.length - 1, a = 0; a <= o; a++)
                n = a === o ? this : this.clone(!0),
                K(i[a])[t](n),
                V.apply(r, n.get());
            return this.pushStack(r)
        }
    }
    ));
    var We, Ie = {}, Ue = /^margin/, qe = new RegExp("^(" + xe + ")(?!px)[a-z%]+$","i"), Ge = function(e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    };
    !function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
            a.innerHTML = "",
            i.appendChild(o);
            var t = e.getComputedStyle(a, null);
            n = "1%" !== t.top,
            r = "4px" === t.width,
            i.removeChild(o)
        }
        var n, r, i = J.documentElement, o = J.createElement("div"), a = J.createElement("div");
        a.style && (a.style.backgroundClip = "content-box",
        a.cloneNode(!0).style.backgroundClip = "",
        X.clearCloneStyle = "content-box" === a.style.backgroundClip,
        o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",
        o.appendChild(a),
        e.getComputedStyle && K.extend(X, {
            pixelPosition: function() {
                return t(),
                n
            },
            boxSizingReliable: function() {
                return null == r && t(),
                r
            },
            reliableMarginRight: function() {
                var t, n = a.appendChild(J.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                n.style.marginRight = n.style.width = "0",
                a.style.width = "1px",
                i.appendChild(o),
                t = !parseFloat(e.getComputedStyle(n, null).marginRight),
                i.removeChild(o),
                t
            }
        }))
    }(),
    K.swap = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        for (o in i = n.apply(e, r || []),
        t)
            e.style[o] = a[o];
        return i
    }
    ;
    var Ve = /^(none|table(?!-c[ea]).+)/
      , $e = new RegExp("^(" + xe + ")(.*)$","i")
      , Be = new RegExp("^([+-])=(" + xe + ")","i")
      , ze = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ze = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Xe = ["Webkit", "O", "Moz", "ms"];
    K.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = b(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = K.camelCase(t), u = e.style;
                if (t = K.cssProps[s] || (K.cssProps[s] = k(u, s)),
                a = K.cssHooks[t] || K.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                "string" === (o = typeof n) && (i = Be.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(K.css(e, t)),
                o = "number"),
                null != n && n == n && ("number" !== o || K.cssNumber[s] || (n += "px"),
                X.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = K.camelCase(t);
            return t = K.cssProps[s] || (K.cssProps[s] = k(e.style, s)),
            (a = K.cssHooks[t] || K.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = b(e, t, r)),
            "normal" === i && t in Ze && (i = Ze[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || K.isNumeric(o) ? o || 0 : i) : i
        }
    }),
    K.each(["height", "width"], (function(e, t) {
        K.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return Ve.test(K.css(e, "display")) && 0 === e.offsetWidth ? K.swap(e, ze, (function() {
                        return D(e, t, r)
                    }
                    )) : D(e, t, r)
            },
            set: function(e, n, r) {
                var i = r && Ge(e);
                return S(e, n, r ? T(e, t, r, "border-box" === K.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }
    )),
    K.cssHooks.marginRight = x(X.reliableMarginRight, (function(e, t) {
        if (t)
            return K.swap(e, {
                display: "inline-block"
            }, b, [e, "marginRight"])
    }
    )),
    K.each({
        margin: "",
        padding: "",
        border: "Width"
    }, (function(e, t) {
        K.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[e + ke[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        Ue.test(e) || (K.cssHooks[e + t].set = S)
    }
    )),
    K.fn.extend({
        css: function(e, t) {
            return me(this, (function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (K.isArray(t)) {
                    for (r = Ge(e),
                    i = t.length; a < i; a++)
                        o[t[a]] = K.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? K.style(e, t, n) : K.css(e, t)
            }
            ), e, t, arguments.length > 1)
        },
        show: function() {
            return M(this, !0)
        },
        hide: function() {
            return M(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                Se(this) ? K(this).show() : K(this).hide()
            }
            ))
        }
    }),
    K.Tween = C,
    C.prototype = {
        constructor: C,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (K.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = C.propHooks[this.prop];
            return e && e.get ? e.get(this) : C.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = C.propHooks[this.prop];
            return this.options.duration ? this.pos = t = K.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : C.propHooks._default.set(this),
            this
        }
    },
    C.prototype.init.prototype = C.prototype,
    C.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = K.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },
            set: function(e) {
                K.fx.step[e.prop] ? K.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[K.cssProps[e.prop]] || K.cssHooks[e.prop]) ? K.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    K.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    K.fx = C.prototype.init,
    K.fx.step = {};
    var Je, Qe, Ke = /^(?:toggle|show|hide)$/, et = new RegExp("^(?:([+-])=|)(" + xe + ")([a-z%]*)$","i"), tt = /queueHooks$/, nt = [Y], rt = {
        "*": [function(e, t) {
            var n = this.createTween(e, t)
              , r = n.cur()
              , i = et.exec(t)
              , o = i && i[3] || (K.cssNumber[e] ? "" : "px")
              , a = (K.cssNumber[e] || "px" !== o && +r) && et.exec(K.css(n.elem, e))
              , s = 1
              , u = 20;
            if (a && a[3] !== o) {
                o = o || a[3],
                i = i || [],
                a = +r || 1;
                do {
                    a /= s = s || ".5",
                    K.style(n.elem, e, a + o)
                } while (s !== (s = n.cur() / r) && 1 !== s && --u)
            }
            return i && (a = n.start = +a || +r || 0,
            n.unit = o,
            n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]),
            n
        }
        ]
    };
    K.Animation = K.extend(A, {
        tweener: function(e, t) {
            K.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                rt[n] = rt[n] || [],
                rt[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? nt.unshift(e) : nt.push(e)
        }
    }),
    K.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? K.extend({}, e) : {
            complete: n || !n && t || K.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !K.isFunction(t) && t
        };
        return r.duration = K.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in K.fx.speeds ? K.fx.speeds[r.duration] : K.fx.speeds._default,
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            K.isFunction(r.old) && r.old.call(this),
            r.queue && K.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    K.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Se).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = K.isEmptyObject(e)
              , o = K.speed(t, n, r)
              , a = function() {
                var t = A(this, K.extend({}, e), o);
                (i || ge.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each((function() {
                var t = !0
                  , i = null != e && e + "queueHooks"
                  , o = K.timers
                  , a = ge.get(this);
                if (i)
                    a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a)
                        a[i] && a[i].stop && tt.test(i) && r(a[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                    t = !1,
                    o.splice(i, 1));
                !t && n || K.dequeue(this, e)
            }
            ))
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each((function() {
                var t, n = ge.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = K.timers, a = r ? r.length : 0;
                for (n.finish = !0,
                K.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; t < a; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            }
            ))
        }
    }),
    K.each(["toggle", "show", "hide"], (function(e, t) {
        var n = K.fn[t];
        K.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, r, i)
        }
    }
    )),
    K.each({
        slideDown: O("show"),
        slideUp: O("hide"),
        slideToggle: O("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, (function(e, t) {
        K.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }
    )),
    K.timers = [],
    K.fx.tick = function() {
        var e, t = 0, n = K.timers;
        for (Je = K.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || K.fx.stop(),
        Je = void 0
    }
    ,
    K.fx.timer = function(e) {
        K.timers.push(e),
        e() ? K.fx.start() : K.timers.pop()
    }
    ,
    K.fx.interval = 13,
    K.fx.start = function() {
        Qe || (Qe = setInterval(K.fx.tick, K.fx.interval))
    }
    ,
    K.fx.stop = function() {
        clearInterval(Qe),
        Qe = null
    }
    ,
    K.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    K.fn.delay = function(e, t) {
        return e = K.fx && K.fx.speeds[e] || e,
        t = t || "fx",
        this.queue(t, (function(t, n) {
            var r = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(r)
            }
        }
        ))
    }
    ,
    function() {
        var e = J.createElement("input")
          , t = J.createElement("select")
          , n = t.appendChild(J.createElement("option"));
        e.type = "checkbox",
        X.checkOn = "" !== e.value,
        X.optSelected = n.selected,
        t.disabled = !0,
        X.optDisabled = !n.disabled,
        (e = J.createElement("input")).value = "t",
        e.type = "radio",
        X.radioValue = "t" === e.value
    }();
    var it, ot, at = K.expr.attrHandle;
    K.fn.extend({
        attr: function(e, t) {
            return me(this, K.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each((function() {
                K.removeAttr(this, e)
            }
            ))
        }
    }),
    K.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o)
                return typeof e.getAttribute === De ? K.prop(e, t, n) : (1 === o && K.isXMLDoc(e) || (t = t.toLowerCase(),
                r = K.attrHooks[t] || (K.expr.match.bool.test(t) ? ot : it)),
                void 0 === n ? r && "get"in r && null !== (i = r.get(e, t)) ? i : null == (i = K.find.attr(e, t)) ? void 0 : i : null !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : void K.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(he);
            if (o && 1 === e.nodeType)
                for (; n = o[i++]; )
                    r = K.propFix[n] || n,
                    K.expr.match.bool.test(n) && (e[r] = !1),
                    e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!X.radioValue && "radio" === t && K.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        }
    }),
    ot = {
        set: function(e, t, n) {
            return !1 === t ? K.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    K.each(K.expr.match.bool.source.match(/\w+/g), (function(e, t) {
        var n = at[t.toLowerCase()] || K.find.attr;
        at[t.toLowerCase()] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = at[a],
            at[a] = i,
            i = null != n(e, t, r) ? a : null,
            at[a] = o),
            i
        }
    }
    ));
    var st = /^(?:input|select|textarea|button)$/i;
    K.fn.extend({
        prop: function(e, t) {
            return me(this, K.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each((function() {
                delete this[K.propFix[e] || e]
            }
            ))
        }
    }),
    K.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o)
                return (1 !== o || !K.isXMLDoc(e)) && (t = K.propFix[t] || t,
                i = K.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }),
    X.optSelected || (K.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        }
    }),
    K.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
        K.propFix[this.toLowerCase()] = this
    }
    ));
    var ut = /[\t\r\n\f]/g;
    K.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s = "string" == typeof e && e, u = 0, l = this.length;
            if (K.isFunction(e))
                return this.each((function(t) {
                    K(this).addClass(e.call(this, t, this.className))
                }
                ));
            if (s)
                for (t = (e || "").match(he) || []; u < l; u++)
                    if (r = 1 === (n = this[u]).nodeType && (n.className ? (" " + n.className + " ").replace(ut, " ") : " ")) {
                        for (o = 0; i = t[o++]; )
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = K.trim(r),
                        n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s = 0 === arguments.length || "string" == typeof e && e, u = 0, l = this.length;
            if (K.isFunction(e))
                return this.each((function(t) {
                    K(this).removeClass(e.call(this, t, this.className))
                }
                ));
            if (s)
                for (t = (e || "").match(he) || []; u < l; u++)
                    if (r = 1 === (n = this[u]).nodeType && (n.className ? (" " + n.className + " ").replace(ut, " ") : "")) {
                        for (o = 0; i = t[o++]; )
                            for (; r.indexOf(" " + i + " ") >= 0; )
                                r = r.replace(" " + i + " ", " ");
                        a = e ? K.trim(r) : "",
                        n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : K.isFunction(e) ? this.each((function(n) {
                K(this).toggleClass(e.call(this, n, this.className, t), t)
            }
            )) : this.each((function() {
                if ("string" === n)
                    for (var t, r = 0, i = K(this), o = e.match(he) || []; t = o[r++]; )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    n !== De && "boolean" !== n || (this.className && ge.set(this, "__className__", this.className),
                    this.className = this.className || !1 === e ? "" : ge.get(this, "__className__") || "")
            }
            ))
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ut, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        }
    });
    var lt = /\r/g;
    K.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = K.isFunction(e),
            this.each((function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, K(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : K.isArray(i) && (i = K.map(i, (function(e) {
                    return null == e ? "" : e + ""
                }
                ))),
                (t = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            }
            ))) : i ? (t = K.valHooks[i.type] || K.valHooks[i.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(lt, "") : null == n ? "" : n : void 0
        }
    }),
    K.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = K.find.attr(e, "value");
                    return null != t ? t : K.trim(K.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++)
                        if (((n = r[u]).selected || u === i) && (X.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !K.nodeName(n.parentNode, "optgroup"))) {
                            if (t = K(n).val(),
                            o)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = K.makeArray(t), a = i.length; a--; )
                        ((r = i[a]).selected = K.inArray(r.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    K.each(["radio", "checkbox"], (function() {
        K.valHooks[this] = {
            set: function(e, t) {
                if (K.isArray(t))
                    return e.checked = K.inArray(K(e).val(), t) >= 0
            }
        },
        X.checkOn || (K.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }
    )),
    K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), (function(e, t) {
        K.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }
    )),
    K.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var ct = K.now()
      , ft = /\?/;
    K.parseJSON = function(e) {
        return JSON.parse(e + "")
    }
    ,
    K.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || K.error("Invalid XML: " + e),
        t
    }
    ;
    var dt, ht, pt = /#.*$/, mt = /([?&])_=[^&]*/, gt = /^(.*?):[ \t]*([^\r\n]*)$/gm, yt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, vt = /^(?:GET|HEAD)$/, wt = /^\/\//, _t = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, bt = {}, xt = {}, kt = "*/".concat("*");
    try {
        ht = location.href
    } catch (e) {
        (ht = J.createElement("a")).href = "",
        ht = ht.href
    }
    dt = _t.exec(ht.toLowerCase()) || [],
    K.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ht,
            type: "GET",
            isLocal: yt.test(dt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": kt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": K.parseJSON,
                "text xml": K.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? H(H(e, K.ajaxSettings), t) : H(K.ajaxSettings, e)
        },
        ajaxPrefilter: L(bt),
        ajaxTransport: L(xt),
        ajax: function(e, t) {
            function n(e, t, n, a) {
                var u, c, y, v, _, x = t;
                2 !== w && (w = 2,
                s && clearTimeout(s),
                r = void 0,
                o = a || "",
                b.readyState = e > 0 ? 4 : 0,
                u = e >= 200 && e < 300 || 304 === e,
                n && (v = R(f, b, n)),
                v = F(f, v, b, u),
                u ? (f.ifModified && ((_ = b.getResponseHeader("Last-Modified")) && (K.lastModified[i] = _),
                (_ = b.getResponseHeader("etag")) && (K.etag[i] = _)),
                204 === e || "HEAD" === f.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = v.state,
                c = v.data,
                u = !(y = v.error))) : (y = x,
                !e && x || (x = "error",
                e < 0 && (e = 0))),
                b.status = e,
                b.statusText = (t || x) + "",
                u ? p.resolveWith(d, [c, x, b]) : p.rejectWith(d, [b, x, y]),
                b.statusCode(g),
                g = void 0,
                l && h.trigger(u ? "ajaxSuccess" : "ajaxError", [b, f, u ? c : y]),
                m.fireWith(d, [b, x]),
                l && (h.trigger("ajaxComplete", [b, f]),
                --K.active || K.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var r, i, o, a, s, u, l, c, f = K.ajaxSetup({}, t), d = f.context || f, h = f.context && (d.nodeType || d.jquery) ? K(d) : K.event, p = K.Deferred(), m = K.Callbacks("once memory"), g = f.statusCode || {}, y = {}, v = {}, w = 0, _ = "canceled", b = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === w) {
                        if (!a)
                            for (a = {}; t = gt.exec(o); )
                                a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === w ? o : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return w || (e = v[n] = v[n] || e,
                    y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return w || (f.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (w < 2)
                            for (t in e)
                                g[t] = [g[t], e[t]];
                        else
                            b.always(e[b.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || _;
                    return r && r.abort(t),
                    n(0, t),
                    this
                }
            };
            if (p.promise(b).complete = m.add,
            b.success = b.done,
            b.error = b.fail,
            f.url = ((e || f.url || ht) + "").replace(pt, "").replace(wt, dt[1] + "//"),
            f.type = t.method || t.type || f.method || f.type,
            f.dataTypes = K.trim(f.dataType || "*").toLowerCase().match(he) || [""],
            null == f.crossDomain && (u = _t.exec(f.url.toLowerCase()),
            f.crossDomain = !(!u || u[1] === dt[1] && u[2] === dt[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (dt[3] || ("http:" === dt[1] ? "80" : "443")))),
            f.data && f.processData && "string" != typeof f.data && (f.data = K.param(f.data, f.traditional)),
            P(bt, f, t, b),
            2 === w)
                return b;
            for (c in (l = f.global) && 0 == K.active++ && K.event.trigger("ajaxStart"),
            f.type = f.type.toUpperCase(),
            f.hasContent = !vt.test(f.type),
            i = f.url,
            f.hasContent || (f.data && (i = f.url += (ft.test(i) ? "&" : "?") + f.data,
            delete f.data),
            !1 === f.cache && (f.url = mt.test(i) ? i.replace(mt, "$1_=" + ct++) : i + (ft.test(i) ? "&" : "?") + "_=" + ct++)),
            f.ifModified && (K.lastModified[i] && b.setRequestHeader("If-Modified-Since", K.lastModified[i]),
            K.etag[i] && b.setRequestHeader("If-None-Match", K.etag[i])),
            (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && b.setRequestHeader("Content-Type", f.contentType),
            b.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + kt + "; q=0.01" : "") : f.accepts["*"]),
            f.headers)
                b.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (!1 === f.beforeSend.call(d, b, f) || 2 === w))
                return b.abort();
            for (c in _ = "abort",
            {
                success: 1,
                error: 1,
                complete: 1
            })
                b[c](f[c]);
            if (r = P(xt, f, t, b)) {
                b.readyState = 1,
                l && h.trigger("ajaxSend", [b, f]),
                f.async && f.timeout > 0 && (s = setTimeout((function() {
                    b.abort("timeout")
                }
                ), f.timeout));
                try {
                    w = 1,
                    r.send(y, n)
                } catch (e) {
                    if (!(w < 2))
                        throw e;
                    n(-1, e)
                }
            } else
                n(-1, "No Transport");
            return b
        },
        getJSON: function(e, t, n) {
            return K.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return K.get(e, void 0, t, "script")
        }
    }),
    K.each(["get", "post"], (function(e, t) {
        K[t] = function(e, n, r, i) {
            return K.isFunction(n) && (i = i || r,
            r = n,
            n = void 0),
            K.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }
    )),
    K.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
        K.fn[t] = function(e) {
            return this.on(t, e)
        }
    }
    )),
    K._evalUrl = function(e) {
        return K.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    K.fn.extend({
        wrapAll: function(e) {
            var t;
            return K.isFunction(e) ? this.each((function(t) {
                K(this).wrapAll(e.call(this, t))
            }
            )) : (this[0] && (t = K(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map((function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }
            )).append(this)),
            this)
        },
        wrapInner: function(e) {
            return K.isFunction(e) ? this.each((function(t) {
                K(this).wrapInner(e.call(this, t))
            }
            )) : this.each((function() {
                var t = K(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            }
            ))
        },
        wrap: function(e) {
            var t = K.isFunction(e);
            return this.each((function(n) {
                K(this).wrapAll(t ? e.call(this, n) : e)
            }
            ))
        },
        unwrap: function() {
            return this.parent().each((function() {
                K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
            }
            )).end()
        }
    }),
    K.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }
    ,
    K.expr.filters.visible = function(e) {
        return !K.expr.filters.hidden(e)
    }
    ;
    var St = /%20/g
      , Tt = /\[\]$/
      , Dt = /\r?\n/g
      , Mt = /^(?:submit|button|image|reset|file)$/i
      , Ct = /^(?:input|select|textarea|keygen)/i;
    K.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            t = K.isFunction(t) ? t() : null == t ? "" : t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = K.ajaxSettings && K.ajaxSettings.traditional),
        K.isArray(e) || e.jquery && !K.isPlainObject(e))
            K.each(e, (function() {
                i(this.name, this.value)
            }
            ));
        else
            for (n in e)
                W(n, e[n], t, i);
        return r.join("&").replace(St, "+")
    }
    ,
    K.fn.extend({
        serialize: function() {
            return K.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map((function() {
                var e = K.prop(this, "elements");
                return e ? K.makeArray(e) : this
            }
            )).filter((function() {
                var e = this.type;
                return this.name && !K(this).is(":disabled") && Ct.test(this.nodeName) && !Mt.test(e) && (this.checked || !Te.test(e))
            }
            )).map((function(e, t) {
                var n = K(this).val();
                return null == n ? null : K.isArray(n) ? K.map(n, (function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Dt, "\r\n")
                    }
                }
                )) : {
                    name: t.name,
                    value: n.replace(Dt, "\r\n")
                }
            }
            )).get()
        }
    }),
    K.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Nt = 0
      , Ot = {}
      , Et = {
        0: 200,
        1223: 204
    }
      , Yt = K.ajaxSettings.xhr();
    e.ActiveXObject && K(e).on("unload", (function() {
        for (var e in Ot)
            Ot[e]()
    }
    )),
    X.cors = !!Yt && "withCredentials"in Yt,
    X.ajax = Yt = !!Yt,
    K.ajaxTransport((function(e) {
        var t;
        if (X.cors || Yt && !e.crossDomain)
            return {
                send: function(n, r) {
                    var i, o = e.xhr(), a = ++Nt;
                    if (o.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                        for (i in e.xhrFields)
                            o[i] = e.xhrFields[i];
                    for (i in e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
                    e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"),
                    n)
                        o.setRequestHeader(i, n[i]);
                    t = function(e) {
                        return function() {
                            t && (delete Ot[a],
                            t = o.onload = o.onerror = null,
                            "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Et[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                                text: o.responseText
                            } : void 0, o.getAllResponseHeaders()))
                        }
                    }
                    ,
                    o.onload = t(),
                    o.onerror = t("error"),
                    t = Ot[a] = t("abort");
                    try {
                        o.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t)
                            throw e
                    }
                },
                abort: function() {
                    t && t()
                }
            }
    }
    )),
    K.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return K.globalEval(e),
                e
            }
        }
    }),
    K.ajaxPrefilter("script", (function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }
    )),
    K.ajaxTransport("script", (function(e) {
        var t, n;
        if (e.crossDomain)
            return {
                send: function(r, i) {
                    t = K("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && i("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    J.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
    }
    ));
    var jt = []
      , At = /(=)\?(?=&|$)|\?\?/;
    K.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = jt.pop() || K.expando + "_" + ct++;
            return this[e] = !0,
            e
        }
    }),
    K.ajaxPrefilter("json jsonp", (function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (At.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && At.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return i = t.jsonpCallback = K.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(At, "$1" + i) : !1 !== t.jsonp && (t.url += (ft.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
            t.converters["script json"] = function() {
                return a || K.error(i + " was not called"),
                a[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = e[i],
            e[i] = function() {
                a = arguments
            }
            ,
            r.always((function() {
                e[i] = o,
                t[i] && (t.jsonpCallback = n.jsonpCallback,
                jt.push(i)),
                a && K.isFunction(o) && o(a[0]),
                a = o = void 0
            }
            )),
            "script"
    }
    )),
    K.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || J;
        var r = ae.exec(e)
          , i = !n && [];
        return r ? [t.createElement(r[1])] : (r = K.buildFragment([e], t, i),
        i && i.length && K(i).remove(),
        K.merge([], r.childNodes))
    }
    ;
    var Lt = K.fn.load;
    K.fn.load = function(e, t, n) {
        if ("string" != typeof e && Lt)
            return Lt.apply(this, arguments);
        var r, i, o, a = this, s = e.indexOf(" ");
        return s >= 0 && (r = K.trim(e.slice(s)),
        e = e.slice(0, s)),
        K.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        a.length > 0 && K.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done((function(e) {
            o = arguments,
            a.html(r ? K("<div>").append(K.parseHTML(e)).find(r) : e)
        }
        )).complete(n && function(e, t) {
            a.each(n, o || [e.responseText, t, e])
        }
        ),
        this
    }
    ,
    K.expr.filters.animated = function(e) {
        return K.grep(K.timers, (function(t) {
            return e === t.elem
        }
        )).length
    }
    ;
    var Pt = e.document.documentElement;
    K.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = K.css(e, "position"), c = K(e), f = {};
            "static" === l && (e.style.position = "relative"),
            s = c.offset(),
            o = K.css(e, "top"),
            u = K.css(e, "left"),
            ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top,
            i = r.left) : (a = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            K.isFunction(t) && (t = t.call(e, n, s)),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + i),
            "using"in t ? t.using.call(e, f) : c.css(f)
        }
    },
    K.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each((function(t) {
                    K.offset.setOffset(this, e, t)
                }
                ));
            var t, n, r = this[0], i = {
                top: 0,
                left: 0
            }, o = r && r.ownerDocument;
            return o ? (t = o.documentElement,
            K.contains(t, r) ? (typeof r.getBoundingClientRect !== De && (i = r.getBoundingClientRect()),
            n = I(o),
            {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === K.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                K.nodeName(e[0], "html") || (r = e.offset()),
                r.top += K.css(e[0], "borderTopWidth", !0),
                r.left += K.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - r.top - K.css(n, "marginTop", !0),
                    left: t.left - r.left - K.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map((function() {
                for (var e = this.offsetParent || Pt; e && !K.nodeName(e, "html") && "static" === K.css(e, "position"); )
                    e = e.offsetParent;
                return e || Pt
            }
            ))
        }
    }),
    K.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, (function(t, n) {
        var r = "pageYOffset" === n;
        K.fn[t] = function(i) {
            return me(this, (function(t, i, o) {
                var a = I(t);
                if (void 0 === o)
                    return a ? a[n] : t[i];
                a ? a.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o
            }
            ), t, i, arguments.length, null)
        }
    }
    )),
    K.each(["top", "left"], (function(e, t) {
        K.cssHooks[t] = x(X.pixelPosition, (function(e, n) {
            if (n)
                return n = b(e, t),
                qe.test(n) ? K(e).position()[t] + "px" : n
        }
        ))
    }
    )),
    K.each({
        Height: "height",
        Width: "width"
    }, (function(e, t) {
        K.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, (function(n, r) {
            K.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r)
                  , a = n || (!0 === r || !0 === i ? "margin" : "border");
                return me(this, (function(t, n, r) {
                    var i;
                    return K.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? K.css(t, n, a) : K.style(t, n, r, a)
                }
                ), t, o ? r : void 0, o, null)
            }
        }
        ))
    }
    )),
    K.fn.size = function() {
        return this.length
    }
    ,
    K.fn.andSelf = K.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], (function() {
        return K
    }
    ));
    var Ht = e.jQuery
      , Rt = e.$;
    return K.noConflict = function(t) {
        return e.$ === K && (e.$ = Rt),
        t && e.jQuery === K && (e.jQuery = Ht),
        K
    }
    ,
    typeof t === De && (e.jQuery = e.$ = K),
    K
}
)),
jQuery.ajaxPrefilter((function(e) {
    e.crossDomain && (e.contents.script = !1)
}
)),
function(e, t) {
    e.viewloader = t({}, e.jQuery || e.Zepto || e.$)
}(this, (function(e, t) {
    "use strict";
    const n = function(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    };
    return e.execute = function(e, r) {
        (r ? r.find("[data-view]") : t("[data-view]")).each((function(r, i) {
            const o = t(i)
              , a = n(o.data("view"));
            a && e[a] && new e[a](o,i)
        }
        ))
    }
    ,
    e
}
)),
window.Market = {
    DOMUtils: {},
    Helpers: {},
    SpecialEvents: {},
    State: {},
    Validations: {},
    GoogleAnalytics: {}
},
window.Views = {},
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}((function(e) {
    function t(e) {
        return s.raw ? e : encodeURIComponent(e)
    }
    function n(e) {
        return s.raw ? e : decodeURIComponent(e)
    }
    function r(e) {
        return t(s.json ? JSON.stringify(e) : String(e))
    }
    function i(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            e = decodeURIComponent(e.replace(a, " "))
        } catch (e) {
            return
        }
        try {
            return s.json ? JSON.parse(e) : e
        } catch (e) {}
    }
    function o(t, n) {
        var r = s.raw ? t : i(t);
        return e.isFunction(n) ? n(r) : r
    }
    var a = /\+/g
      , s = e.cookie = function(i, a, u) {
        if (void 0 !== a && !e.isFunction(a)) {
            if ("number" == typeof (u = e.extend({}, s.defaults, u)).expires) {
                var l = u.expires
                  , c = u.expires = new Date;
                c.setDate(c.getDate() + l)
            }
            return document.cookie = [t(i), "=", r(a), u.expires ? "; expires=" + u.expires.toUTCString() : "", u.path ? "; path=" + u.path : "", u.domain ? "; domain=" + u.domain : "", u.secure ? "; secure" : ""].join("")
        }
        for (var f = i ? void 0 : {}, d = document.cookie ? document.cookie.split("; ") : [], h = 0, p = d.length; h < p; h++) {
            var m = d[h].split("=")
              , g = n(m.shift())
              , y = m.join("=");
            if (i && i === g) {
                f = o(y, a);
                break
            }
            i || void 0 === (y = o(y)) || (f[g] = y)
        }
        return f
    }
    ;
    s.defaults = {},
    e.removeCookie = function(t, n) {
        return void 0 !== e.cookie(t) && (e.cookie(t, "", e.extend({}, n, {
            expires: -1
        })),
        !0)
    }
}
)),
Market.Helpers.CookieConsent = {
    given: function(e) {
        if ("undefined" != typeof Cookiebot && Cookiebot.consent)
            return Cookiebot.consent[e];
        const t = $.cookie("CookieConsent");
        if (!t)
            return console.log("could not read CCC"),
            !1;
        if ("-1" === t)
            return console.log("CC outside of targeted area"),
            !0;
        try {
            const n = JSON.parse(t.replace(/%2c/g, ",").replace(/'/g, '"').replace(/([{[,])\s*([a-zA-Z0-9_]+?):/g, '$1"$2":'));
            return n && !!n[e]
        } catch (e) {
            return console.log("could not parse CCC"),
            !1
        }
    },
    cookieAvailable: function() {
        return !!$.cookie("CookieConsent")
    },
    addListener: function(e, t) {
        window.addEventListener("CookiebotOnAccept", (function() {
            Market.Helpers.CookieConsent.given(e) && t()
        }
        ), !1)
    }
},
Views.AffiliatesTracker = class {
    constructor(e) {
        const t = e.data("cookiebot-enabled")
          , n = (Market.Helpers.CookieConsent.given,
        Market.Helpers.CookieConsent.cookieAvailable())
          , r = this.removeAffiliateCookies
          , i = this.registerReferral.bind(this);
        this.setupReferralListener(t, i, r),
        n && t || i()
    }
    setupReferralListener(e, t, n) {
        const r = Market.Helpers.CookieConsent.given;
        e && window.addEventListener("CookiebotOnAccept", (function() {
            if (r("marketing")) {
                $.cookie("click_id") || t()
            } else
                n()
        }
        ), !1)
    }
    removeAffiliateCookies() {
        const e = "/consociate/recant";
        $.ajax({
            method: "GET",
            url: e,
            dataType: "JSON",
            timeout: 5e3,
            xhrFields: {
                withCredentials: !0
            }
        }).then((function() {
            Market.Helpers.GoogleAnalytics.sendEvent("event", "affiliate cookie removal", "success")
        }
        ), (function(t, n, r) {
            Market.Helpers.GoogleAnalytics.sendEvent("event", "affiliate cookie removal error", `${t.status} | ${n} | ${r}`, {
                label: e
            })
        }
        ))
    }
    registerReferral() {
        const e = this._currentLocation()
          , t = new URL(e);
        t.pathname = "/consociate/indite",
        t.search && !t.search.includes("redirect_back") && (t.searchParams.append("url", e),
        t.searchParams.append("referrer", document.referrer)),
        $.ajax({
            method: "GET",
            url: t.href,
            dataType: "JSON",
            timeout: 5e3,
            xhrFields: {
                withCredentials: !0
            }
        }).then((function(e) {
            e && e.redirect && (window.location.href = e.redirect_url)
        }
        ), (function(e, n, r) {
            Market.Helpers.GoogleAnalytics.sendEvent("event", "affiliate cookie", `${e.status} | ${n} | ${r}`, {
                label: t
            })
        }
        ))
    }
    _currentLocation() {
        return window.location.href
    }
}
,
Market.Helpers.GaLsUtils = {
    getClientId: function() {
        var e = new URL(document.location.href).searchParams.get("_ga");
        return e ? e.match(/\d*\.\d*$/)[0] : this.retrieveClientId()
    },
    retrieveClientId: function() {
        return localStorage.getItem(this.clientIdLocalStorageKey())
    },
    storeClientId: function(e) {
        if (e)
            return localStorage.setItem(this.clientIdLocalStorageKey(), e)
    },
    removeClientId: function() {
        if (this.clientIdLocalStorageKey())
            return localStorage.removeItem(this.clientIdLocalStorageKey())
    },
    clientIdLocalStorageKey: function() {
        return "ga:clientId"
    },
    clientIdValid: function(e) {
        if (null === e)
            return !0;
        var t = 10
          , n = /^[0-9]+\.[0-9]+$/g;
        return e.split("").length > t && n.test(e)
    },
    localStorageAvailable: function() {
        var e = "t";
        try {
            return localStorage.setItem(e, e),
            localStorage.removeItem(e),
            !0
        } catch (e) {
            return !1
        }
    },
    trackingCookieSet: function() {
        return !!document.cookie.match(/_ga=/)
    },
    linkerParamPresent: function() {
        return !!window.location.search.match(/_ga=/)
    },
    clientIdNotPresent: function() {
        return !(this.trackingCookieSet() || this.linkerParamPresent())
    }
},
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("underscore", t) : (e = "undefined" != typeof globalThis ? globalThis : e || self,
    function() {
        var n = e._
          , r = e._ = t();
        r.noConflict = function() {
            return e._ = n,
            r
        }
    }())
}(this, (function() {
    function e(e, t) {
        return t = null == t ? e.length - 1 : +t,
        function() {
            for (var n = Math.max(arguments.length - t, 0), r = Array(n), i = 0; i < n; i++)
                r[i] = arguments[i + t];
            switch (t) {
            case 0:
                return e.call(this, r);
            case 1:
                return e.call(this, arguments[0], r);
            case 2:
                return e.call(this, arguments[0], arguments[1], r)
            }
            var o = Array(t + 1);
            for (i = 0; i < t; i++)
                o[i] = arguments[i];
            return o[t] = r,
            e.apply(this, o)
        }
    }
    function t(e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e
    }
    function n(e) {
        return null === e
    }
    function r(e) {
        return void 0 === e
    }
    function i(e) {
        return !0 === e || !1 === e || "[object Boolean]" === ut.call(e)
    }
    function o(e) {
        return !(!e || 1 !== e.nodeType)
    }
    function a(e) {
        var t = "[object " + e + "]";
        return function(e) {
            return ut.call(e) === t
        }
    }
    function s(e) {
        return null != e && Ot(e.getInt8) && Mt(e.buffer)
    }
    function u(e, t) {
        return null != e && lt.call(e, t)
    }
    function l(e) {
        return !Dt(e) && yt(e) && !isNaN(parseFloat(e))
    }
    function c(e) {
        return xt(e) && gt(e)
    }
    function f(e) {
        return function() {
            return e
        }
    }
    function d(e) {
        return function(t) {
            var n = e(t);
            return "number" == typeof n && n >= 0 && n <= _t
        }
    }
    function h(e) {
        return function(t) {
            return null == t ? void 0 : t[e]
        }
    }
    function p(e) {
        return mt ? mt(e) && !Lt(e) : Wt(e) && It.test(ut.call(e))
    }
    function m(e) {
        for (var t = {}, n = e.length, r = 0; r < n; ++r)
            t[e[r]] = !0;
        return {
            contains: function(e) {
                return !0 === t[e]
            },
            push: function(n) {
                return t[n] = !0,
                e.push(n)
            }
        }
    }
    function g(e, t) {
        t = m(t);
        var n = wt.length
          , r = e.constructor
          , i = Ot(r) && r.prototype || it
          , o = "constructor";
        for (u(e, o) && !t.contains(o) && t.push(o); n--; )
            (o = wt[n])in e && e[o] !== i[o] && !t.contains(o) && t.push(o)
    }
    function y(e) {
        if (!t(e))
            return [];
        if (ht)
            return ht(e);
        var n = [];
        for (var r in e)
            u(e, r) && n.push(r);
        return vt && g(e, n),
        n
    }
    function v(e) {
        if (null == e)
            return !0;
        var t = qt(e);
        return "number" == typeof t && (Pt(e) || bt(e) || Rt(e)) ? 0 === t : 0 === qt(y(e))
    }
    function w(e, t) {
        var n = y(t)
          , r = n.length;
        if (null == e)
            return !r;
        for (var i = Object(e), o = 0; o < r; o++) {
            var a = n[o];
            if (t[a] !== i[a] || !(a in i))
                return !1
        }
        return !0
    }
    function _(e) {
        return e instanceof _ ? e : this instanceof _ ? void (this._wrapped = e) : new _(e)
    }
    function b(e) {
        return new Uint8Array(e.buffer || e,e.byteOffset || 0,Ft(e))
    }
    function x(e, t, n, r) {
        if (e === t)
            return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t)
            return !1;
        if (e != e)
            return t != t;
        var i = typeof e;
        return ("function" === i || "object" === i || "object" == typeof t) && k(e, t, n, r)
    }
    function k(e, t, n, r) {
        e instanceof _ && (e = e._wrapped),
        t instanceof _ && (t = t._wrapped);
        var i = ut.call(e);
        if (i !== ut.call(t))
            return !1;
        if (Yt && "[object Object]" == i && Lt(e)) {
            if (!Lt(t))
                return !1;
            i = Gt
        }
        switch (i) {
        case "[object RegExp]":
        case "[object String]":
            return "" + e == "" + t;
        case "[object Number]":
            return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
        case "[object Date]":
        case "[object Boolean]":
            return +e == +t;
        case "[object Symbol]":
            return ot.valueOf.call(e) === ot.valueOf.call(t);
        case "[object ArrayBuffer]":
        case Gt:
            return k(b(e), b(t), n, r)
        }
        var o = "[object Array]" === i;
        if (!o && Ut(e)) {
            if (Ft(e) !== Ft(t))
                return !1;
            if (e.buffer === t.buffer && e.byteOffset === t.byteOffset)
                return !0;
            o = !0
        }
        if (!o) {
            if ("object" != typeof e || "object" != typeof t)
                return !1;
            var a = e.constructor
              , s = t.constructor;
            if (a !== s && !(Ot(a) && a instanceof a && Ot(s) && s instanceof s) && "constructor"in e && "constructor"in t)
                return !1
        }
        r = r || [];
        for (var l = (n = n || []).length; l--; )
            if (n[l] === e)
                return r[l] === t;
        if (n.push(e),
        r.push(t),
        o) {
            if ((l = e.length) !== t.length)
                return !1;
            for (; l--; )
                if (!x(e[l], t[l], n, r))
                    return !1
        } else {
            var c, f = y(e);
            if (l = f.length,
            y(t).length !== l)
                return !1;
            for (; l--; )
                if (!u(t, c = f[l]) || !x(e[c], t[c], n, r))
                    return !1
        }
        return n.pop(),
        r.pop(),
        !0
    }
    function S(e, t) {
        return x(e, t)
    }
    function T(e) {
        if (!t(e))
            return [];
        var n = [];
        for (var r in e)
            n.push(r);
        return vt && g(e, n),
        n
    }
    function D(e) {
        var t = qt(e);
        return function(n) {
            if (null == n)
                return !1;
            var r = T(n);
            if (qt(r))
                return !1;
            for (var i = 0; i < t; i++)
                if (!Ot(n[e[i]]))
                    return !1;
            return e !== Xt || !Ot(n[Vt])
        }
    }
    function M(e) {
        for (var t = y(e), n = t.length, r = Array(n), i = 0; i < n; i++)
            r[i] = e[t[i]];
        return r
    }
    function C(e) {
        for (var t = y(e), n = t.length, r = Array(n), i = 0; i < n; i++)
            r[i] = [t[i], e[t[i]]];
        return r
    }
    function N(e) {
        for (var t = {}, n = y(e), r = 0, i = n.length; r < i; r++)
            t[e[n[r]]] = n[r];
        return t
    }
    function O(e) {
        var t = [];
        for (var n in e)
            Ot(e[n]) && t.push(n);
        return t.sort()
    }
    function E(e, t) {
        return function(n) {
            var r = arguments.length;
            if (t && (n = Object(n)),
            r < 2 || null == n)
                return n;
            for (var i = 1; i < r; i++)
                for (var o = arguments[i], a = e(o), s = a.length, u = 0; u < s; u++) {
                    var l = a[u];
                    t && void 0 !== n[l] || (n[l] = o[l])
                }
            return n
        }
    }
    function Y() {
        return function() {}
    }
    function j(e) {
        if (!t(e))
            return {};
        if (pt)
            return pt(e);
        var n = Y();
        n.prototype = e;
        var r = new n;
        return n.prototype = null,
        r
    }
    function A(e, t) {
        var n = j(e);
        return t && rn(n, t),
        n
    }
    function L(e) {
        return t(e) ? Pt(e) ? e.slice() : nn({}, e) : e
    }
    function P(e, t) {
        return t(e),
        e
    }
    function H(e) {
        return Pt(e) ? e : [e]
    }
    function R(e) {
        return _.toPath(e)
    }
    function F(e, t) {
        for (var n = t.length, r = 0; r < n; r++) {
            if (null == e)
                return;
            e = e[t[r]]
        }
        return n ? e : void 0
    }
    function W(e, t, n) {
        var i = F(e, R(t));
        return r(i) ? n : i
    }
    function I(e, t) {
        for (var n = (t = R(t)).length, r = 0; r < n; r++) {
            var i = t[r];
            if (!u(e, i))
                return !1;
            e = e[i]
        }
        return !!n
    }
    function U(e) {
        return e
    }
    function q(e) {
        return e = rn({}, e),
        function(t) {
            return w(t, e)
        }
    }
    function G(e) {
        return e = R(e),
        function(t) {
            return F(t, e)
        }
    }
    function V(e, t, n) {
        if (void 0 === t)
            return e;
        switch (null == n ? 3 : n) {
        case 1:
            return function(n) {
                return e.call(t, n)
            }
            ;
        case 3:
            return function(n, r, i) {
                return e.call(t, n, r, i)
            }
            ;
        case 4:
            return function(n, r, i, o) {
                return e.call(t, n, r, i, o)
            }
        }
        return function() {
            return e.apply(t, arguments)
        }
    }
    function $(e, n, r) {
        return null == e ? U : Ot(e) ? V(e, n, r) : t(e) && !Pt(e) ? q(e) : G(e)
    }
    function B(e, t) {
        return $(e, t, 1 / 0)
    }
    function z(e, t, n) {
        return _.iteratee !== B ? _.iteratee(e, t) : $(e, t, n)
    }
    function Z(e, t, n) {
        t = z(t, n);
        for (var r = y(e), i = r.length, o = {}, a = 0; a < i; a++) {
            var s = r[a];
            o[s] = t(e[s], s, e)
        }
        return o
    }
    function X() {}
    function J(e) {
        return null == e ? X : function(t) {
            return W(e, t)
        }
    }
    function Q(e, t, n) {
        var r = Array(Math.max(0, e));
        t = V(t, n, 1);
        for (var i = 0; i < e; i++)
            r[i] = t(i);
        return r
    }
    function K(e, t) {
        return null == t && (t = e,
        e = 0),
        e + Math.floor(Math.random() * (t - e + 1))
    }
    function ee(e) {
        var t = function(t) {
            return e[t]
        }
          , n = "(?:" + y(e).join("|") + ")"
          , r = RegExp(n)
          , i = RegExp(n, "g");
        return function(e) {
            return e = null == e ? "" : "" + e,
            r.test(e) ? e.replace(i, t) : e
        }
    }
    function te(e) {
        return "\\" + dn[e]
    }
    function ne(e, t, n) {
        !t && n && (t = n),
        t = on({}, t, _.templateSettings);
        var r = RegExp([(t.escape || fn).source, (t.interpolate || fn).source, (t.evaluate || fn).source].join("|") + "|$", "g")
          , i = 0
          , o = "__p+='";
        e.replace(r, (function(t, n, r, a, s) {
            return o += e.slice(i, s).replace(hn, te),
            i = s + t.length,
            n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"),
            t
        }
        )),
        o += "';\n";
        var a, s = t.variable;
        if (s) {
            if (!pn.test(s))
                throw new Error("variable is not a bare identifier: " + s)
        } else
            o = "with(obj||{}){\n" + o + "}\n",
            s = "obj";
        o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            a = new Function(s,"_",o)
        } catch (e) {
            throw e.source = o,
            e
        }
        var u = function(e) {
            return a.call(this, e, _)
        };
        return u.source = "function(" + s + "){\n" + o + "}",
        u
    }
    function re(e, t, n) {
        var r = (t = R(t)).length;
        if (!r)
            return Ot(n) ? n.call(e) : n;
        for (var i = 0; i < r; i++) {
            var o = null == e ? void 0 : e[t[i]];
            void 0 === o && (o = n,
            i = r),
            e = Ot(o) ? o.call(e) : o
        }
        return e
    }
    function ie(e) {
        var t = ++mn + "";
        return e ? e + t : t
    }
    function oe(e) {
        var t = _(e);
        return t._chain = !0,
        t
    }
    function ae(e, n, r, i, o) {
        if (!(i instanceof n))
            return e.apply(r, o);
        var a = j(e.prototype)
          , s = e.apply(a, o);
        return t(s) ? s : a
    }
    function se(e, t, n, r) {
        if (r = r || [],
        t || 0 === t) {
            if (t <= 0)
                return r.concat(e)
        } else
            t = 1 / 0;
        for (var i = r.length, o = 0, a = qt(e); o < a; o++) {
            var s = e[o];
            if (vn(s) && (Pt(s) || Rt(s)))
                if (t > 1)
                    se(s, t - 1, n, r),
                    i = r.length;
                else
                    for (var u = 0, l = s.length; u < l; )
                        r[i++] = s[u++];
            else
                n || (r[i++] = s)
        }
        return r
    }
    function ue(e, t) {
        var n = function(r) {
            var i = n.cache
              , o = "" + (t ? t.apply(this, arguments) : r);
            return u(i, o) || (i[o] = e.apply(this, arguments)),
            i[o]
        };
        return n.cache = {},
        n
    }
    function le(e, t, n) {
        var r, i, o, a, s = 0;
        n || (n = {});
        var u = function() {
            s = !1 === n.leading ? 0 : an(),
            r = null,
            a = e.apply(i, o),
            r || (i = o = null)
        }
          , l = function() {
            var l = an();
            s || !1 !== n.leading || (s = l);
            var c = t - (l - s);
            return i = this,
            o = arguments,
            c <= 0 || c > t ? (r && (clearTimeout(r),
            r = null),
            s = l,
            a = e.apply(i, o),
            r || (i = o = null)) : r || !1 === n.trailing || (r = setTimeout(u, c)),
            a
        };
        return l.cancel = function() {
            clearTimeout(r),
            s = 0,
            r = i = o = null
        }
        ,
        l
    }
    function ce(t, n, r) {
        var i, o, a, s, u, l = function() {
            var e = an() - o;
            n > e ? i = setTimeout(l, n - e) : (i = null,
            r || (s = t.apply(u, a)),
            i || (a = u = null))
        }, c = e((function(e) {
            return u = this,
            a = e,
            o = an(),
            i || (i = setTimeout(l, n),
            r && (s = t.apply(u, a))),
            s
        }
        ));
        return c.cancel = function() {
            clearTimeout(i),
            i = a = u = null
        }
        ,
        c
    }
    function fe(e, t) {
        return gn(t, e)
    }
    function de(e) {
        return function() {
            return !e.apply(this, arguments)
        }
    }
    function he() {
        var e = arguments
          , t = e.length - 1;
        return function() {
            for (var n = t, r = e[t].apply(this, arguments); n--; )
                r = e[n].call(this, r);
            return r
        }
    }
    function pe(e, t) {
        return function() {
            if (--e < 1)
                return t.apply(this, arguments)
        }
    }
    function me(e, t) {
        var n;
        return function() {
            return --e > 0 && (n = t.apply(this, arguments)),
            e <= 1 && (t = null),
            n
        }
    }
    function ge(e, t, n) {
        t = z(t, n);
        for (var r, i = y(e), o = 0, a = i.length; o < a; o++)
            if (t(e[r = i[o]], r, e))
                return r
    }
    function ye(e) {
        return function(t, n, r) {
            n = z(n, r);
            for (var i = qt(t), o = e > 0 ? 0 : i - 1; o >= 0 && o < i; o += e)
                if (n(t[o], o, t))
                    return o;
            return -1
        }
    }
    function ve(e, t, n, r) {
        for (var i = (n = z(n, r, 1))(t), o = 0, a = qt(e); o < a; ) {
            var s = Math.floor((o + a) / 2);
            n(e[s]) < i ? o = s + 1 : a = s
        }
        return o
    }
    function we(e, t, n) {
        return function(r, i, o) {
            var a = 0
              , s = qt(r);
            if ("number" == typeof o)
                e > 0 ? a = o >= 0 ? o : Math.max(o + s, a) : s = o >= 0 ? Math.min(o + 1, s) : o + s + 1;
            else if (n && o && s)
                return r[o = n(r, i)] === i ? o : -1;
            if (i != i)
                return (o = t(st.call(r, a, s), c)) >= 0 ? o + a : -1;
            for (o = e > 0 ? a : s - 1; o >= 0 && o < s; o += e)
                if (r[o] === i)
                    return o;
            return -1
        }
    }
    function _e(e, t, n) {
        var r = (vn(e) ? kn : ge)(e, t, n);
        if (void 0 !== r && -1 !== r)
            return e[r]
    }
    function be(e, t) {
        return _e(e, q(t))
    }
    function xe(e, t, n) {
        var r, i;
        if (t = V(t, n),
        vn(e))
            for (r = 0,
            i = e.length; r < i; r++)
                t(e[r], r, e);
        else {
            var o = y(e);
            for (r = 0,
            i = o.length; r < i; r++)
                t(e[o[r]], o[r], e)
        }
        return e
    }
    function ke(e, t, n) {
        t = z(t, n);
        for (var r = !vn(e) && y(e), i = (r || e).length, o = Array(i), a = 0; a < i; a++) {
            var s = r ? r[a] : a;
            o[a] = t(e[s], s, e)
        }
        return o
    }
    function Se(e) {
        var t = function(t, n, r, i) {
            var o = !vn(t) && y(t)
              , a = (o || t).length
              , s = e > 0 ? 0 : a - 1;
            for (i || (r = t[o ? o[s] : s],
            s += e); s >= 0 && s < a; s += e) {
                var u = o ? o[s] : s;
                r = n(r, t[u], u, t)
            }
            return r
        };
        return function(e, n, r, i) {
            var o = arguments.length >= 3;
            return t(e, V(n, i, 4), r, o)
        }
    }
    function Te(e, t, n) {
        var r = [];
        return t = z(t, n),
        xe(e, (function(e, n, i) {
            t(e, n, i) && r.push(e)
        }
        )),
        r
    }
    function De(e, t, n) {
        return Te(e, de(z(t)), n)
    }
    function Me(e, t, n) {
        t = z(t, n);
        for (var r = !vn(e) && y(e), i = (r || e).length, o = 0; o < i; o++) {
            var a = r ? r[o] : o;
            if (!t(e[a], a, e))
                return !1
        }
        return !0
    }
    function Ce(e, t, n) {
        t = z(t, n);
        for (var r = !vn(e) && y(e), i = (r || e).length, o = 0; o < i; o++) {
            var a = r ? r[o] : o;
            if (t(e[a], a, e))
                return !0
        }
        return !1
    }
    function Ne(e, t, n, r) {
        return vn(e) || (e = M(e)),
        ("number" != typeof n || r) && (n = 0),
        Tn(e, t, n) >= 0
    }
    function Oe(e, t) {
        return ke(e, G(t))
    }
    function Ee(e, t) {
        return Te(e, q(t))
    }
    function Ye(e, t, n) {
        var r, i, o = -1 / 0, a = -1 / 0;
        if (null == t || "number" == typeof t && "object" != typeof e[0] && null != e)
            for (var s = 0, u = (e = vn(e) ? e : M(e)).length; s < u; s++)
                null != (r = e[s]) && r > o && (o = r);
        else
            t = z(t, n),
            xe(e, (function(e, n, r) {
                ((i = t(e, n, r)) > a || i === -1 / 0 && o === -1 / 0) && (o = e,
                a = i)
            }
            ));
        return o
    }
    function je(e, t, n) {
        var r, i, o = 1 / 0, a = 1 / 0;
        if (null == t || "number" == typeof t && "object" != typeof e[0] && null != e)
            for (var s = 0, u = (e = vn(e) ? e : M(e)).length; s < u; s++)
                null != (r = e[s]) && r < o && (o = r);
        else
            t = z(t, n),
            xe(e, (function(e, n, r) {
                ((i = t(e, n, r)) < a || i === 1 / 0 && o === 1 / 0) && (o = e,
                a = i)
            }
            ));
        return o
    }
    function Ae(e) {
        return e ? Pt(e) ? st.call(e) : bt(e) ? e.match(On) : vn(e) ? ke(e, U) : M(e) : []
    }
    function Le(e, t, n) {
        if (null == t || n)
            return vn(e) || (e = M(e)),
            e[K(e.length - 1)];
        var r = Ae(e)
          , i = qt(r);
        t = Math.max(Math.min(t, i), 0);
        for (var o = i - 1, a = 0; a < t; a++) {
            var s = K(a, o)
              , u = r[a];
            r[a] = r[s],
            r[s] = u
        }
        return r.slice(0, t)
    }
    function Pe(e) {
        return Le(e, 1 / 0)
    }
    function He(e, t, n) {
        var r = 0;
        return t = z(t, n),
        Oe(ke(e, (function(e, n, i) {
            return {
                value: e,
                index: r++,
                criteria: t(e, n, i)
            }
        }
        )).sort((function(e, t) {
            var n = e.criteria
              , r = t.criteria;
            if (n !== r) {
                if (n > r || void 0 === n)
                    return 1;
                if (n < r || void 0 === r)
                    return -1
            }
            return e.index - t.index
        }
        )), "value")
    }
    function Re(e, t) {
        return function(n, r, i) {
            var o = t ? [[], []] : {};
            return r = z(r, i),
            xe(n, (function(t, i) {
                var a = r(t, i, n);
                e(o, t, a)
            }
            )),
            o
        }
    }
    function Fe(e) {
        return null == e ? 0 : vn(e) ? e.length : y(e).length
    }
    function We(e, t, n) {
        return t in n
    }
    function Ie(e, t, n) {
        return st.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
    }
    function Ue(e, t, n) {
        return null == e || e.length < 1 ? null == t || n ? void 0 : [] : null == t || n ? e[0] : Ie(e, e.length - t)
    }
    function qe(e, t, n) {
        return st.call(e, null == t || n ? 1 : t)
    }
    function Ge(e, t, n) {
        return null == e || e.length < 1 ? null == t || n ? void 0 : [] : null == t || n ? e[e.length - 1] : qe(e, Math.max(0, e.length - t))
    }
    function Ve(e) {
        return Te(e, Boolean)
    }
    function $e(e, t) {
        return se(e, t, !1)
    }
    function Be(e, t, n, r) {
        i(t) || (r = n,
        n = t,
        t = !1),
        null != n && (n = z(n, r));
        for (var o = [], a = [], s = 0, u = qt(e); s < u; s++) {
            var l = e[s]
              , c = n ? n(l, s, e) : l;
            t && !n ? (s && a === c || o.push(l),
            a = c) : n ? Ne(a, c) || (a.push(c),
            o.push(l)) : Ne(o, l) || o.push(l)
        }
        return o
    }
    function ze(e) {
        for (var t = [], n = arguments.length, r = 0, i = qt(e); r < i; r++) {
            var o = e[r];
            if (!Ne(t, o)) {
                var a;
                for (a = 1; a < n && Ne(arguments[a], o); a++)
                    ;
                a === n && t.push(o)
            }
        }
        return t
    }
    function Ze(e) {
        for (var t = e && Ye(e, qt).length || 0, n = Array(t), r = 0; r < t; r++)
            n[r] = Oe(e, r);
        return n
    }
    function Xe(e, t) {
        for (var n = {}, r = 0, i = qt(e); r < i; r++)
            t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n
    }
    function Je(e, t, n) {
        null == t && (t = e || 0,
        e = 0),
        n || (n = t < e ? -1 : 1);
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; o < r; o++,
        e += n)
            i[o] = e;
        return i
    }
    function Qe(e, t) {
        if (null == t || t < 1)
            return [];
        for (var n = [], r = 0, i = e.length; r < i; )
            n.push(st.call(e, r, r += t));
        return n
    }
    function Ke(e, t) {
        return e._chain ? _(t).chain() : t
    }
    function et(e) {
        return xe(O(e), (function(t) {
            var n = _[t] = e[t];
            _.prototype[t] = function() {
                var e = [this._wrapped];
                return at.apply(e, arguments),
                Ke(this, n.apply(_, e))
            }
        }
        )),
        _
    }
    var tt = "1.13.6"
      , nt = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global || Function("return this")() || {}
      , rt = Array.prototype
      , it = Object.prototype
      , ot = "undefined" != typeof Symbol ? Symbol.prototype : null
      , at = rt.push
      , st = rt.slice
      , ut = it.toString
      , lt = it.hasOwnProperty
      , ct = "undefined" != typeof ArrayBuffer
      , ft = "undefined" != typeof DataView
      , dt = Array.isArray
      , ht = Object.keys
      , pt = Object.create
      , mt = ct && ArrayBuffer.isView
      , gt = isNaN
      , yt = isFinite
      , vt = !{
        toString: null
    }.propertyIsEnumerable("toString")
      , wt = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"]
      , _t = Math.pow(2, 53) - 1
      , bt = a("String")
      , xt = a("Number")
      , kt = a("Date")
      , St = a("RegExp")
      , Tt = a("Error")
      , Dt = a("Symbol")
      , Mt = a("ArrayBuffer")
      , Ct = a("Function")
      , Nt = nt.document && nt.document.childNodes;
    "function" != typeof /./ && "object" != typeof Int8Array && "function" != typeof Nt && (Ct = function(e) {
        return "function" == typeof e || !1
    }
    );
    var Ot = Ct
      , Et = a("Object")
      , Yt = ft && Et(new DataView(new ArrayBuffer(8)))
      , jt = "undefined" != typeof Map && Et(new Map)
      , At = a("DataView")
      , Lt = Yt ? s : At
      , Pt = dt || a("Array")
      , Ht = a("Arguments");
    !function() {
        Ht(arguments) || (Ht = function(e) {
            return u(e, "callee")
        }
        )
    }();
    var Rt = Ht
      , Ft = h("byteLength")
      , Wt = d(Ft)
      , It = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/
      , Ut = ct ? p : f(!1)
      , qt = h("length");
    _.VERSION = tt,
    _.prototype.value = function() {
        return this._wrapped
    }
    ,
    _.prototype.valueOf = _.prototype.toJSON = _.prototype.value,
    _.prototype.toString = function() {
        return String(this._wrapped)
    }
    ;
    var Gt = "[object DataView]"
      , Vt = "forEach"
      , $t = "has"
      , Bt = ["clear", "delete"]
      , zt = ["get", $t, "set"]
      , Zt = Bt.concat(Vt, zt)
      , Xt = Bt.concat(zt)
      , Jt = ["add"].concat(Bt, Vt, $t)
      , Qt = jt ? D(Zt) : a("Map")
      , Kt = jt ? D(Xt) : a("WeakMap")
      , en = jt ? D(Jt) : a("Set")
      , tn = a("WeakSet")
      , nn = E(T)
      , rn = E(y)
      , on = E(T, !0);
    _.toPath = H,
    _.iteratee = B;
    var an = Date.now || function() {
        return (new Date).getTime()
    }
      , sn = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }
      , un = ee(sn)
      , ln = ee(N(sn))
      , cn = _.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    }
      , fn = /(.)^/
      , dn = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }
      , hn = /\\|'|\r|\n|\u2028|\u2029/g
      , pn = /^\s*(\w|\$)+\s*$/
      , mn = 0
      , gn = e((function(e, t) {
        var n = gn.placeholder
          , r = function() {
            for (var i = 0, o = t.length, a = Array(o), s = 0; s < o; s++)
                a[s] = t[s] === n ? arguments[i++] : t[s];
            for (; i < arguments.length; )
                a.push(arguments[i++]);
            return ae(e, r, this, this, a)
        };
        return r
    }
    ));
    gn.placeholder = _;
    var yn = e((function(t, n, r) {
        if (!Ot(t))
            throw new TypeError("Bind must be called on a function");
        var i = e((function(e) {
            return ae(t, i, n, this, r.concat(e))
        }
        ));
        return i
    }
    ))
      , vn = d(qt)
      , wn = e((function(e, t) {
        var n = (t = se(t, !1, !1)).length;
        if (n < 1)
            throw new Error("bindAll must be passed function names");
        for (; n--; ) {
            var r = t[n];
            e[r] = yn(e[r], e)
        }
        return e
    }
    ))
      , _n = e((function(e, t, n) {
        return setTimeout((function() {
            return e.apply(null, n)
        }
        ), t)
    }
    ))
      , bn = gn(_n, _, 1)
      , xn = gn(me, 2)
      , kn = ye(1)
      , Sn = ye(-1)
      , Tn = we(1, kn, ve)
      , Dn = we(-1, Sn)
      , Mn = Se(1)
      , Cn = Se(-1)
      , Nn = e((function(e, t, n) {
        var r, i;
        return Ot(t) ? i = t : (t = R(t),
        r = t.slice(0, -1),
        t = t[t.length - 1]),
        ke(e, (function(e) {
            var o = i;
            if (!o) {
                if (r && r.length && (e = F(e, r)),
                null == e)
                    return;
                o = e[t]
            }
            return null == o ? o : o.apply(e, n)
        }
        ))
    }
    ))
      , On = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g
      , En = Re((function(e, t, n) {
        u(e, n) ? e[n].push(t) : e[n] = [t]
    }
    ))
      , Yn = Re((function(e, t, n) {
        e[n] = t
    }
    ))
      , jn = Re((function(e, t, n) {
        u(e, n) ? e[n]++ : e[n] = 1
    }
    ))
      , An = Re((function(e, t, n) {
        e[n ? 0 : 1].push(t)
    }
    ), !0)
      , Ln = e((function(e, t) {
        var n = {}
          , r = t[0];
        if (null == e)
            return n;
        Ot(r) ? (t.length > 1 && (r = V(r, t[1])),
        t = T(e)) : (r = We,
        t = se(t, !1, !1),
        e = Object(e));
        for (var i = 0, o = t.length; i < o; i++) {
            var a = t[i]
              , s = e[a];
            r(s, a, e) && (n[a] = s)
        }
        return n
    }
    ))
      , Pn = e((function(e, t) {
        var n, r = t[0];
        return Ot(r) ? (r = de(r),
        t.length > 1 && (n = t[1])) : (t = ke(se(t, !1, !1), String),
        r = function(e, n) {
            return !Ne(t, n)
        }
        ),
        Ln(e, r, n)
    }
    ))
      , Hn = e((function(e, t) {
        return t = se(t, !0, !0),
        Te(e, (function(e) {
            return !Ne(t, e)
        }
        ))
    }
    ))
      , Rn = e((function(e, t) {
        return Hn(e, t)
    }
    ))
      , Fn = e((function(e) {
        return Be(se(e, !0, !0))
    }
    ))
      , Wn = e(Ze);
    xe(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], (function(e) {
        var t = rt[e];
        _.prototype[e] = function() {
            var n = this._wrapped;
            return null != n && (t.apply(n, arguments),
            "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0]),
            Ke(this, n)
        }
    }
    )),
    xe(["concat", "join", "slice"], (function(e) {
        var t = rt[e];
        _.prototype[e] = function() {
            var e = this._wrapped;
            return null != e && (e = t.apply(e, arguments)),
            Ke(this, e)
        }
    }
    ));
    var In = et({
        __proto__: null,
        VERSION: tt,
        restArguments: e,
        isObject: t,
        isNull: n,
        isUndefined: r,
        isBoolean: i,
        isElement: o,
        isString: bt,
        isNumber: xt,
        isDate: kt,
        isRegExp: St,
        isError: Tt,
        isSymbol: Dt,
        isArrayBuffer: Mt,
        isDataView: Lt,
        isArray: Pt,
        isFunction: Ot,
        isArguments: Rt,
        isFinite: l,
        isNaN: c,
        isTypedArray: Ut,
        isEmpty: v,
        isMatch: w,
        isEqual: S,
        isMap: Qt,
        isWeakMap: Kt,
        isSet: en,
        isWeakSet: tn,
        keys: y,
        allKeys: T,
        values: M,
        pairs: C,
        invert: N,
        functions: O,
        methods: O,
        extend: nn,
        extendOwn: rn,
        assign: rn,
        defaults: on,
        create: A,
        clone: L,
        tap: P,
        get: W,
        has: I,
        mapObject: Z,
        identity: U,
        constant: f,
        noop: X,
        toPath: H,
        property: G,
        propertyOf: J,
        matcher: q,
        matches: q,
        times: Q,
        random: K,
        now: an,
        escape: un,
        unescape: ln,
        templateSettings: cn,
        template: ne,
        result: re,
        uniqueId: ie,
        chain: oe,
        iteratee: B,
        partial: gn,
        bind: yn,
        bindAll: wn,
        memoize: ue,
        delay: _n,
        defer: bn,
        throttle: le,
        debounce: ce,
        wrap: fe,
        negate: de,
        compose: he,
        after: pe,
        before: me,
        once: xn,
        findKey: ge,
        findIndex: kn,
        findLastIndex: Sn,
        sortedIndex: ve,
        indexOf: Tn,
        lastIndexOf: Dn,
        find: _e,
        detect: _e,
        findWhere: be,
        each: xe,
        forEach: xe,
        map: ke,
        collect: ke,
        reduce: Mn,
        foldl: Mn,
        inject: Mn,
        reduceRight: Cn,
        foldr: Cn,
        filter: Te,
        select: Te,
        reject: De,
        every: Me,
        all: Me,
        some: Ce,
        any: Ce,
        contains: Ne,
        includes: Ne,
        include: Ne,
        invoke: Nn,
        pluck: Oe,
        where: Ee,
        max: Ye,
        min: je,
        shuffle: Pe,
        sample: Le,
        sortBy: He,
        groupBy: En,
        indexBy: Yn,
        countBy: jn,
        partition: An,
        toArray: Ae,
        size: Fe,
        pick: Ln,
        omit: Pn,
        first: Ue,
        head: Ue,
        take: Ue,
        initial: Ie,
        last: Ge,
        rest: qe,
        tail: qe,
        drop: qe,
        compact: Ve,
        flatten: $e,
        without: Rn,
        uniq: Be,
        unique: Be,
        union: Fn,
        intersection: ze,
        difference: Hn,
        unzip: Ze,
        transpose: Ze,
        zip: Wn,
        object: Xe,
        range: Je,
        chunk: Qe,
        mixin: et,
        default: _
    });
    return In._ = In,
    In
}
)),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, (function() {
    "use strict";
    function e() {
        return ti.apply(null, arguments)
    }
    function t(e) {
        ti = e
    }
    function n(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
    }
    function r(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e)
    }
    function i(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function o(e) {
        if (Object.getOwnPropertyNames)
            return 0 === Object.getOwnPropertyNames(e).length;
        var t;
        for (t in e)
            if (i(e, t))
                return !1;
        return !0
    }
    function a(e) {
        return void 0 === e
    }
    function s(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
    }
    function u(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }
    function l(e, t) {
        var n, r = [], i = e.length;
        for (n = 0; n < i; ++n)
            r.push(t(e[n], n));
        return r
    }
    function c(e, t) {
        for (var n in t)
            i(t, n) && (e[n] = t[n]);
        return i(t, "toString") && (e.toString = t.toString),
        i(t, "valueOf") && (e.valueOf = t.valueOf),
        e
    }
    function f(e, t, n, r) {
        return Dt(e, t, n, r, !0).utc()
    }
    function d() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }
    }
    function h(e) {
        return null == e._pf && (e._pf = d()),
        e._pf
    }
    function p(e) {
        if (null == e._isValid) {
            var t = h(e)
              , n = ni.call(t.parsedDateParts, (function(e) {
                return null != e
            }
            ))
              , r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
            if (e._strict && (r = r && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour),
            null != Object.isFrozen && Object.isFrozen(e))
                return r;
            e._isValid = r
        }
        return e._isValid
    }
    function m(e) {
        var t = f(NaN);
        return null != e ? c(h(t), e) : h(t).userInvalidated = !0,
        t
    }
    function g(e, t) {
        var n, r, i, o = ii.length;
        if (a(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
        a(t._i) || (e._i = t._i),
        a(t._f) || (e._f = t._f),
        a(t._l) || (e._l = t._l),
        a(t._strict) || (e._strict = t._strict),
        a(t._tzm) || (e._tzm = t._tzm),
        a(t._isUTC) || (e._isUTC = t._isUTC),
        a(t._offset) || (e._offset = t._offset),
        a(t._pf) || (e._pf = h(t)),
        a(t._locale) || (e._locale = t._locale),
        o > 0)
            for (n = 0; n < o; n++)
                a(i = t[r = ii[n]]) || (e[r] = i);
        return e
    }
    function y(t) {
        g(this, t),
        this._d = new Date(null != t._d ? t._d.getTime() : NaN),
        this.isValid() || (this._d = new Date(NaN)),
        !1 === oi && (oi = !0,
        e.updateOffset(this),
        oi = !1)
    }
    function v(e) {
        return e instanceof y || null != e && null != e._isAMomentObject
    }
    function w(t) {
        !1 === e.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
    }
    function _(t, n) {
        var r = !0;
        return c((function() {
            if (null != e.deprecationHandler && e.deprecationHandler(null, t),
            r) {
                var o, a, s, u = [], l = arguments.length;
                for (a = 0; a < l; a++) {
                    if (o = "",
                    "object" == typeof arguments[a]) {
                        for (s in o += "\n[" + a + "] ",
                        arguments[0])
                            i(arguments[0], s) && (o += s + ": " + arguments[0][s] + ", ");
                        o = o.slice(0, -2)
                    } else
                        o = arguments[a];
                    u.push(o)
                }
                w(t + "\nArguments: " + Array.prototype.slice.call(u).join("") + "\n" + (new Error).stack),
                r = !1
            }
            return n.apply(this, arguments)
        }
        ), n)
    }
    function b(t, n) {
        null != e.deprecationHandler && e.deprecationHandler(t, n),
        ai[t] || (w(n),
        ai[t] = !0)
    }
    function x(e) {
        return "undefined" != typeof Function && e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
    }
    function k(e) {
        var t, n;
        for (n in e)
            i(e, n) && (x(t = e[n]) ? this[n] = t : this["_" + n] = t);
        this._config = e,
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }
    function S(e, t) {
        var n, o = c({}, e);
        for (n in t)
            i(t, n) && (r(e[n]) && r(t[n]) ? (o[n] = {},
            c(o[n], e[n]),
            c(o[n], t[n])) : null != t[n] ? o[n] = t[n] : delete o[n]);
        for (n in e)
            i(e, n) && !i(t, n) && r(e[n]) && (o[n] = c({}, o[n]));
        return o
    }
    function T(e) {
        null != e && this.set(e)
    }
    function D(e, t, n) {
        var r = this._calendar[e] || this._calendar.sameElse;
        return x(r) ? r.call(t, n) : r
    }
    function M(e, t, n) {
        var r = "" + Math.abs(e)
          , i = t - r.length;
        return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r
    }
    function C(e, t, n, r) {
        var i = r;
        "string" == typeof r && (i = function() {
            return this[r]()
        }
        ),
        e && (di[e] = i),
        t && (di[t[0]] = function() {
            return M(i.apply(this, arguments), t[1], t[2])
        }
        ),
        n && (di[n] = function() {
            return this.localeData().ordinal(i.apply(this, arguments), e)
        }
        )
    }
    function N(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }
    function O(e) {
        var t, n, r = e.match(li);
        for (t = 0,
        n = r.length; t < n; t++)
            di[r[t]] ? r[t] = di[r[t]] : r[t] = N(r[t]);
        return function(t) {
            var i, o = "";
            for (i = 0; i < n; i++)
                o += x(r[i]) ? r[i].call(t, e) : r[i];
            return o
        }
    }
    function E(e, t) {
        return e.isValid() ? (t = Y(t, e.localeData()),
        fi[t] = fi[t] || O(t),
        fi[t](e)) : e.localeData().invalidDate()
    }
    function Y(e, t) {
        function n(e) {
            return t.longDateFormat(e) || e
        }
        var r = 5;
        for (ci.lastIndex = 0; r >= 0 && ci.test(e); )
            e = e.replace(ci, n),
            ci.lastIndex = 0,
            r -= 1;
        return e
    }
    function j(e) {
        var t = this._longDateFormat[e]
          , n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t : (this._longDateFormat[e] = n.match(li).map((function(e) {
            return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e
        }
        )).join(""),
        this._longDateFormat[e])
    }
    function A() {
        return this._invalidDate
    }
    function L(e) {
        return this._ordinal.replace("%d", e)
    }
    function P(e, t, n, r) {
        var i = this._relativeTime[n];
        return x(i) ? i(e, t, n, r) : i.replace(/%d/i, e)
    }
    function H(e, t) {
        var n = this._relativeTime[e > 0 ? "future" : "past"];
        return x(n) ? n(t) : n.replace(/%s/i, t)
    }
    function R(e, t) {
        var n = e.toLowerCase();
        vi[n] = vi[n + "s"] = vi[t] = e
    }
    function F(e) {
        return "string" == typeof e ? vi[e] || vi[e.toLowerCase()] : void 0
    }
    function W(e) {
        var t, n, r = {};
        for (n in e)
            i(e, n) && (t = F(n)) && (r[t] = e[n]);
        return r
    }
    function I(e, t) {
        wi[e] = t
    }
    function U(e) {
        var t, n = [];
        for (t in e)
            i(e, t) && n.push({
                unit: t,
                priority: wi[t]
            });
        return n.sort((function(e, t) {
            return e.priority - t.priority
        }
        )),
        n
    }
    function q(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }
    function G(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
    }
    function V(e) {
        var t = +e
          , n = 0;
        return 0 !== t && isFinite(t) && (n = G(t)),
        n
    }
    function $(t, n) {
        return function(r) {
            return null != r ? (z(this, t, r),
            e.updateOffset(this, n),
            this) : B(this, t)
        }
    }
    function B(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
    }
    function z(e, t, n) {
        e.isValid() && !isNaN(n) && ("FullYear" === t && q(e.year()) && 1 === e.month() && 29 === e.date() ? (n = V(n),
        e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), oe(n, e.month()))) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
    }
    function Z(e) {
        return x(this[e = F(e)]) ? this[e]() : this
    }
    function X(e, t) {
        if ("object" == typeof e) {
            var n, r = U(e = W(e)), i = r.length;
            for (n = 0; n < i; n++)
                this[r[n].unit](e[r[n].unit])
        } else if (x(this[e = F(e)]))
            return this[e](t);
        return this
    }
    function J(e, t, n) {
        si[e] = x(t) ? t : function(e) {
            return e && n ? n : t
        }
    }
    function Q(e, t) {
        return i(si, e) ? si[e](t._strict, t._locale) : new RegExp(K(e))
    }
    function K(e) {
        return ee(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (function(e, t, n, r, i) {
            return t || n || r || i
        }
        )))
    }
    function ee(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function te(e, t) {
        var n, r, i = t;
        for ("string" == typeof e && (e = [e]),
        s(t) && (i = function(e, n) {
            n[t] = V(e)
        }
        ),
        r = e.length,
        n = 0; n < r; n++)
            Ri[e[n]] = i
    }
    function ne(e, t) {
        te(e, (function(e, n, r, i) {
            r._w = r._w || {},
            t(e, r._w, r, i)
        }
        ))
    }
    function re(e, t, n) {
        null != t && i(Ri, e) && Ri[e](t, n._a, n, e)
    }
    function ie(e, t) {
        return (e % t + t) % t
    }
    function oe(e, t) {
        if (isNaN(e) || isNaN(t))
            return NaN;
        var n = ie(t, 12);
        return e += (t - n) / 12,
        1 === n ? q(e) ? 29 : 28 : 31 - n % 7 % 2
    }
    function ae(e, t) {
        return e ? n(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Xi).test(t) ? "format" : "standalone"][e.month()] : n(this._months) ? this._months : this._months.standalone
    }
    function se(e, t) {
        return e ? n(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Xi.test(t) ? "format" : "standalone"][e.month()] : n(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }
    function ue(e, t, n) {
        var r, i, o, a = e.toLocaleLowerCase();
        if (!this._monthsParse)
            for (this._monthsParse = [],
            this._longMonthsParse = [],
            this._shortMonthsParse = [],
            r = 0; r < 12; ++r)
                o = f([2e3, r]),
                this._shortMonthsParse[r] = this.monthsShort(o, "").toLocaleLowerCase(),
                this._longMonthsParse[r] = this.months(o, "").toLocaleLowerCase();
        return n ? "MMM" === t ? -1 !== (i = Hi.call(this._shortMonthsParse, a)) ? i : null : -1 !== (i = Hi.call(this._longMonthsParse, a)) ? i : null : "MMM" === t ? -1 !== (i = Hi.call(this._shortMonthsParse, a)) || -1 !== (i = Hi.call(this._longMonthsParse, a)) ? i : null : -1 !== (i = Hi.call(this._longMonthsParse, a)) || -1 !== (i = Hi.call(this._shortMonthsParse, a)) ? i : null
    }
    function le(e, t, n) {
        var r, i, o;
        if (this._monthsParseExact)
            return ue.call(this, e, t, n);
        for (this._monthsParse || (this._monthsParse = [],
        this._longMonthsParse = [],
        this._shortMonthsParse = []),
        r = 0; r < 12; r++) {
            if (i = f([2e3, r]),
            n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$","i"),
            this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$","i")),
            n || this._monthsParse[r] || (o = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""),
            this._monthsParse[r] = new RegExp(o.replace(".", ""),"i")),
            n && "MMMM" === t && this._longMonthsParse[r].test(e))
                return r;
            if (n && "MMM" === t && this._shortMonthsParse[r].test(e))
                return r;
            if (!n && this._monthsParse[r].test(e))
                return r
        }
    }
    function ce(e, t) {
        var n;
        if (!e.isValid())
            return e;
        if ("string" == typeof t)
            if (/^\d+$/.test(t))
                t = V(t);
            else if (!s(t = e.localeData().monthsParse(t)))
                return e;
        return n = Math.min(e.date(), oe(e.year(), t)),
        e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
        e
    }
    function fe(t) {
        return null != t ? (ce(this, t),
        e.updateOffset(this, !0),
        this) : B(this, "Month")
    }
    function de() {
        return oe(this.year(), this.month())
    }
    function he(e) {
        return this._monthsParseExact ? (i(this, "_monthsRegex") || me.call(this),
        e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (i(this, "_monthsShortRegex") || (this._monthsShortRegex = Ji),
        this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }
    function pe(e) {
        return this._monthsParseExact ? (i(this, "_monthsRegex") || me.call(this),
        e ? this._monthsStrictRegex : this._monthsRegex) : (i(this, "_monthsRegex") || (this._monthsRegex = Qi),
        this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
    }
    function me() {
        function e(e, t) {
            return t.length - e.length
        }
        var t, n, r = [], i = [], o = [];
        for (t = 0; t < 12; t++)
            n = f([2e3, t]),
            r.push(this.monthsShort(n, "")),
            i.push(this.months(n, "")),
            o.push(this.months(n, "")),
            o.push(this.monthsShort(n, ""));
        for (r.sort(e),
        i.sort(e),
        o.sort(e),
        t = 0; t < 12; t++)
            r[t] = ee(r[t]),
            i[t] = ee(i[t]);
        for (t = 0; t < 24; t++)
            o[t] = ee(o[t]);
        this._monthsRegex = new RegExp("^(" + o.join("|") + ")","i"),
        this._monthsShortRegex = this._monthsRegex,
        this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")","i"),
        this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")","i")
    }
    function ge(e) {
        return q(e) ? 366 : 365
    }
    function ye() {
        return q(this.year())
    }
    function ve(e, t, n, r, i, o, a) {
        var s;
        return e < 100 && e >= 0 ? (s = new Date(e + 400,t,n,r,i,o,a),
        isFinite(s.getFullYear()) && s.setFullYear(e)) : s = new Date(e,t,n,r,i,o,a),
        s
    }
    function we(e) {
        var t, n;
        return e < 100 && e >= 0 ? ((n = Array.prototype.slice.call(arguments))[0] = e + 400,
        t = new Date(Date.UTC.apply(null, n)),
        isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)),
        t
    }
    function _e(e, t, n) {
        var r = 7 + t - n;
        return -((7 + we(e, 0, r).getUTCDay() - t) % 7) + r - 1
    }
    function be(e, t, n, r, i) {
        var o, a, s = 1 + 7 * (t - 1) + (7 + n - r) % 7 + _e(e, r, i);
        return s <= 0 ? a = ge(o = e - 1) + s : s > ge(e) ? (o = e + 1,
        a = s - ge(e)) : (o = e,
        a = s),
        {
            year: o,
            dayOfYear: a
        }
    }
    function xe(e, t, n) {
        var r, i, o = _e(e.year(), t, n), a = Math.floor((e.dayOfYear() - o - 1) / 7) + 1;
        return a < 1 ? r = a + ke(i = e.year() - 1, t, n) : a > ke(e.year(), t, n) ? (r = a - ke(e.year(), t, n),
        i = e.year() + 1) : (i = e.year(),
        r = a),
        {
            week: r,
            year: i
        }
    }
    function ke(e, t, n) {
        var r = _e(e, t, n)
          , i = _e(e + 1, t, n);
        return (ge(e) - r + i) / 7
    }
    function Se(e) {
        return xe(e, this._week.dow, this._week.doy).week
    }
    function Te() {
        return this._week.dow
    }
    function De() {
        return this._week.doy
    }
    function Me(e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d")
    }
    function Ce(e) {
        var t = xe(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d")
    }
    function Ne(e, t) {
        return "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10)
    }
    function Oe(e, t) {
        return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
    }
    function Ee(e, t) {
        return e.slice(t, 7).concat(e.slice(0, t))
    }
    function Ye(e, t) {
        var r = n(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
        return !0 === e ? Ee(r, this._week.dow) : e ? r[e.day()] : r
    }
    function je(e) {
        return !0 === e ? Ee(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
    }
    function Ae(e) {
        return !0 === e ? Ee(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
    }
    function Le(e, t, n) {
        var r, i, o, a = e.toLocaleLowerCase();
        if (!this._weekdaysParse)
            for (this._weekdaysParse = [],
            this._shortWeekdaysParse = [],
            this._minWeekdaysParse = [],
            r = 0; r < 7; ++r)
                o = f([2e3, 1]).day(r),
                this._minWeekdaysParse[r] = this.weekdaysMin(o, "").toLocaleLowerCase(),
                this._shortWeekdaysParse[r] = this.weekdaysShort(o, "").toLocaleLowerCase(),
                this._weekdaysParse[r] = this.weekdays(o, "").toLocaleLowerCase();
        return n ? "dddd" === t ? -1 !== (i = Hi.call(this._weekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = Hi.call(this._shortWeekdaysParse, a)) ? i : null : -1 !== (i = Hi.call(this._minWeekdaysParse, a)) ? i : null : "dddd" === t ? -1 !== (i = Hi.call(this._weekdaysParse, a)) || -1 !== (i = Hi.call(this._shortWeekdaysParse, a)) || -1 !== (i = Hi.call(this._minWeekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = Hi.call(this._shortWeekdaysParse, a)) || -1 !== (i = Hi.call(this._weekdaysParse, a)) || -1 !== (i = Hi.call(this._minWeekdaysParse, a)) ? i : null : -1 !== (i = Hi.call(this._minWeekdaysParse, a)) || -1 !== (i = Hi.call(this._weekdaysParse, a)) || -1 !== (i = Hi.call(this._shortWeekdaysParse, a)) ? i : null
    }
    function Pe(e, t, n) {
        var r, i, o;
        if (this._weekdaysParseExact)
            return Le.call(this, e, t, n);
        for (this._weekdaysParse || (this._weekdaysParse = [],
        this._minWeekdaysParse = [],
        this._shortWeekdaysParse = [],
        this._fullWeekdaysParse = []),
        r = 0; r < 7; r++) {
            if (i = f([2e3, 1]).day(r),
            n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$","i"),
            this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$","i"),
            this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$","i")),
            this._weekdaysParse[r] || (o = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""),
            this._weekdaysParse[r] = new RegExp(o.replace(".", ""),"i")),
            n && "dddd" === t && this._fullWeekdaysParse[r].test(e))
                return r;
            if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e))
                return r;
            if (n && "dd" === t && this._minWeekdaysParse[r].test(e))
                return r;
            if (!n && this._weekdaysParse[r].test(e))
                return r
        }
    }
    function He(e) {
        if (!this.isValid())
            return null != e ? this : NaN;
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (e = Ne(e, this.localeData()),
        this.add(e - t, "d")) : t
    }
    function Re(e) {
        if (!this.isValid())
            return null != e ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d")
    }
    function Fe(e) {
        if (!this.isValid())
            return null != e ? this : NaN;
        if (null != e) {
            var t = Oe(e, this.localeData());
            return this.day(this.day() % 7 ? t : t - 7)
        }
        return this.day() || 7
    }
    function We(e) {
        return this._weekdaysParseExact ? (i(this, "_weekdaysRegex") || qe.call(this),
        e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (i(this, "_weekdaysRegex") || (this._weekdaysRegex = io),
        this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }
    function Ie(e) {
        return this._weekdaysParseExact ? (i(this, "_weekdaysRegex") || qe.call(this),
        e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (i(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = oo),
        this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }
    function Ue(e) {
        return this._weekdaysParseExact ? (i(this, "_weekdaysRegex") || qe.call(this),
        e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (i(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = ao),
        this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }
    function qe() {
        function e(e, t) {
            return t.length - e.length
        }
        var t, n, r, i, o, a = [], s = [], u = [], l = [];
        for (t = 0; t < 7; t++)
            n = f([2e3, 1]).day(t),
            r = ee(this.weekdaysMin(n, "")),
            i = ee(this.weekdaysShort(n, "")),
            o = ee(this.weekdays(n, "")),
            a.push(r),
            s.push(i),
            u.push(o),
            l.push(r),
            l.push(i),
            l.push(o);
        a.sort(e),
        s.sort(e),
        u.sort(e),
        l.sort(e),
        this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")","i"),
        this._weekdaysShortRegex = this._weekdaysRegex,
        this._weekdaysMinRegex = this._weekdaysRegex,
        this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")","i"),
        this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")","i"),
        this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")","i")
    }
    function Ge() {
        return this.hours() % 12 || 12
    }
    function Ve() {
        return this.hours() || 24
    }
    function $e(e, t) {
        C(e, 0, 0, (function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        }
        ))
    }
    function Be(e, t) {
        return t._meridiemParse
    }
    function ze(e) {
        return "p" === (e + "").toLowerCase().charAt(0)
    }
    function Ze(e, t, n) {
        return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
    }
    function Xe(e, t) {
        var n, r = Math.min(e.length, t.length);
        for (n = 0; n < r; n += 1)
            if (e[n] !== t[n])
                return n;
        return r
    }
    function Je(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }
    function Qe(e) {
        for (var t, n, r, i, o = 0; o < e.length; ) {
            for (t = (i = Je(e[o]).split("-")).length,
            n = (n = Je(e[o + 1])) ? n.split("-") : null; t > 0; ) {
                if (r = et(i.slice(0, t).join("-")))
                    return r;
                if (n && n.length >= t && Xe(i, n) >= t - 1)
                    break;
                t--
            }
            o++
        }
        return so
    }
    function Ke(e) {
        return null != e.match("^[^/\\\\]*$")
    }
    function et(e) {
        var t = null;
        if (void 0 === fo[e] && "undefined" != typeof module && module && module.exports && Ke(e))
            try {
                t = so._abbr,
                require("./locale/" + e),
                tt(t)
            } catch (t) {
                fo[e] = null
            }
        return fo[e]
    }
    function tt(e, t) {
        var n;
        return e && ((n = a(t) ? it(e) : nt(e, t)) ? so = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")),
        so._abbr
    }
    function nt(e, t) {
        if (null !== t) {
            var n, r = co;
            if (t.abbr = e,
            null != fo[e])
                b("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
                r = fo[e]._config;
            else if (null != t.parentLocale)
                if (null != fo[t.parentLocale])
                    r = fo[t.parentLocale]._config;
                else {
                    if (null == (n = et(t.parentLocale)))
                        return ho[t.parentLocale] || (ho[t.parentLocale] = []),
                        ho[t.parentLocale].push({
                            name: e,
                            config: t
                        }),
                        null;
                    r = n._config
                }
            return fo[e] = new T(S(r, t)),
            ho[e] && ho[e].forEach((function(e) {
                nt(e.name, e.config)
            }
            )),
            tt(e),
            fo[e]
        }
        return delete fo[e],
        null
    }
    function rt(e, t) {
        if (null != t) {
            var n, r, i = co;
            null != fo[e] && null != fo[e].parentLocale ? fo[e].set(S(fo[e]._config, t)) : (null != (r = et(e)) && (i = r._config),
            t = S(i, t),
            null == r && (t.abbr = e),
            (n = new T(t)).parentLocale = fo[e],
            fo[e] = n),
            tt(e)
        } else
            null != fo[e] && (null != fo[e].parentLocale ? (fo[e] = fo[e].parentLocale,
            e === tt() && tt(e)) : null != fo[e] && delete fo[e]);
        return fo[e]
    }
    function it(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr),
        !e)
            return so;
        if (!n(e)) {
            if (t = et(e))
                return t;
            e = [e]
        }
        return Qe(e)
    }
    function ot() {
        return ri(fo)
    }
    function at(e) {
        var t, n = e._a;
        return n && -2 === h(e).overflow && (t = n[Wi] < 0 || n[Wi] > 11 ? Wi : n[Ii] < 1 || n[Ii] > oe(n[Fi], n[Wi]) ? Ii : n[Ui] < 0 || n[Ui] > 24 || 24 === n[Ui] && (0 !== n[qi] || 0 !== n[Gi] || 0 !== n[Vi]) ? Ui : n[qi] < 0 || n[qi] > 59 ? qi : n[Gi] < 0 || n[Gi] > 59 ? Gi : n[Vi] < 0 || n[Vi] > 999 ? Vi : -1,
        h(e)._overflowDayOfYear && (t < Fi || t > Ii) && (t = Ii),
        h(e)._overflowWeeks && -1 === t && (t = $i),
        h(e)._overflowWeekday && -1 === t && (t = Bi),
        h(e).overflow = t),
        e
    }
    function st(e) {
        var t, n, r, i, o, a, s = e._i, u = po.exec(s) || mo.exec(s), l = yo.length, c = vo.length;
        if (u) {
            for (h(e).iso = !0,
            t = 0,
            n = l; t < n; t++)
                if (yo[t][1].exec(u[1])) {
                    i = yo[t][0],
                    r = !1 !== yo[t][2];
                    break
                }
            if (null == i)
                return void (e._isValid = !1);
            if (u[3]) {
                for (t = 0,
                n = c; t < n; t++)
                    if (vo[t][1].exec(u[3])) {
                        o = (u[2] || " ") + vo[t][0];
                        break
                    }
                if (null == o)
                    return void (e._isValid = !1)
            }
            if (!r && null != o)
                return void (e._isValid = !1);
            if (u[4]) {
                if (!go.exec(u[4]))
                    return void (e._isValid = !1);
                a = "Z"
            }
            e._f = i + (o || "") + (a || ""),
            wt(e)
        } else
            e._isValid = !1
    }
    function ut(e, t, n, r, i, o) {
        var a = [lt(e), Zi.indexOf(t), parseInt(n, 10), parseInt(r, 10), parseInt(i, 10)];
        return o && a.push(parseInt(o, 10)),
        a
    }
    function lt(e) {
        var t = parseInt(e, 10);
        return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
    }
    function ct(e) {
        return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    }
    function ft(e, t, n) {
        if (e && no.indexOf(e) !== new Date(t[0],t[1],t[2]).getDay())
            return h(n).weekdayMismatch = !0,
            n._isValid = !1,
            !1;
        return !0
    }
    function dt(e, t, n) {
        if (e)
            return bo[e];
        if (t)
            return 0;
        var r = parseInt(n, 10)
          , i = r % 100;
        return 60 * ((r - i) / 100) + i
    }
    function ht(e) {
        var t, n = _o.exec(ct(e._i));
        if (n) {
            if (t = ut(n[4], n[3], n[2], n[5], n[6], n[7]),
            !ft(n[1], t, e))
                return;
            e._a = t,
            e._tzm = dt(n[8], n[9], n[10]),
            e._d = we.apply(null, e._a),
            e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            h(e).rfc2822 = !0
        } else
            e._isValid = !1
    }
    function pt(t) {
        var n = wo.exec(t._i);
        null === n ? (st(t),
        !1 === t._isValid && (delete t._isValid,
        ht(t),
        !1 === t._isValid && (delete t._isValid,
        t._strict ? t._isValid = !1 : e.createFromInputFallback(t)))) : t._d = new Date(+n[1])
    }
    function mt(e, t, n) {
        return null != e ? e : null != t ? t : n
    }
    function gt(t) {
        var n = new Date(e.now());
        return t._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
    }
    function yt(e) {
        var t, n, r, i, o, a = [];
        if (!e._d) {
            for (r = gt(e),
            e._w && null == e._a[Ii] && null == e._a[Wi] && vt(e),
            null != e._dayOfYear && (o = mt(e._a[Fi], r[Fi]),
            (e._dayOfYear > ge(o) || 0 === e._dayOfYear) && (h(e)._overflowDayOfYear = !0),
            n = we(o, 0, e._dayOfYear),
            e._a[Wi] = n.getUTCMonth(),
            e._a[Ii] = n.getUTCDate()),
            t = 0; t < 3 && null == e._a[t]; ++t)
                e._a[t] = a[t] = r[t];
            for (; t < 7; t++)
                e._a[t] = a[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[Ui] && 0 === e._a[qi] && 0 === e._a[Gi] && 0 === e._a[Vi] && (e._nextDay = !0,
            e._a[Ui] = 0),
            e._d = (e._useUTC ? we : ve).apply(null, a),
            i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(),
            null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            e._nextDay && (e._a[Ui] = 24),
            e._w && void 0 !== e._w.d && e._w.d !== i && (h(e).weekdayMismatch = !0)
        }
    }
    function vt(e) {
        var t, n, r, i, o, a, s, u, l;
        null != (t = e._w).GG || null != t.W || null != t.E ? (o = 1,
        a = 4,
        n = mt(t.GG, e._a[Fi], xe(Mt(), 1, 4).year),
        r = mt(t.W, 1),
        ((i = mt(t.E, 1)) < 1 || i > 7) && (u = !0)) : (o = e._locale._week.dow,
        a = e._locale._week.doy,
        l = xe(Mt(), o, a),
        n = mt(t.gg, e._a[Fi], l.year),
        r = mt(t.w, l.week),
        null != t.d ? ((i = t.d) < 0 || i > 6) && (u = !0) : null != t.e ? (i = t.e + o,
        (t.e < 0 || t.e > 6) && (u = !0)) : i = o),
        r < 1 || r > ke(n, o, a) ? h(e)._overflowWeeks = !0 : null != u ? h(e)._overflowWeekday = !0 : (s = be(n, r, i, o, a),
        e._a[Fi] = s.year,
        e._dayOfYear = s.dayOfYear)
    }
    function wt(t) {
        if (t._f !== e.ISO_8601)
            if (t._f !== e.RFC_2822) {
                t._a = [],
                h(t).empty = !0;
                var n, r, i, o, a, s, u, l = "" + t._i, c = l.length, f = 0;
                for (u = (i = Y(t._f, t._locale).match(li) || []).length,
                n = 0; n < u; n++)
                    o = i[n],
                    (r = (l.match(Q(o, t)) || [])[0]) && ((a = l.substr(0, l.indexOf(r))).length > 0 && h(t).unusedInput.push(a),
                    l = l.slice(l.indexOf(r) + r.length),
                    f += r.length),
                    di[o] ? (r ? h(t).empty = !1 : h(t).unusedTokens.push(o),
                    re(o, r, t)) : t._strict && !r && h(t).unusedTokens.push(o);
                h(t).charsLeftOver = c - f,
                l.length > 0 && h(t).unusedInput.push(l),
                t._a[Ui] <= 12 && !0 === h(t).bigHour && t._a[Ui] > 0 && (h(t).bigHour = void 0),
                h(t).parsedDateParts = t._a.slice(0),
                h(t).meridiem = t._meridiem,
                t._a[Ui] = _t(t._locale, t._a[Ui], t._meridiem),
                null !== (s = h(t).era) && (t._a[Fi] = t._locale.erasConvertYear(s, t._a[Fi])),
                yt(t),
                at(t)
            } else
                ht(t);
        else
            st(t)
    }
    function _t(e, t, n) {
        var r;
        return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((r = e.isPM(n)) && t < 12 && (t += 12),
        r || 12 !== t || (t = 0),
        t) : t
    }
    function bt(e) {
        var t, n, r, i, o, a, s = !1, u = e._f.length;
        if (0 === u)
            return h(e).invalidFormat = !0,
            void (e._d = new Date(NaN));
        for (i = 0; i < u; i++)
            o = 0,
            a = !1,
            t = g({}, e),
            null != e._useUTC && (t._useUTC = e._useUTC),
            t._f = e._f[i],
            wt(t),
            p(t) && (a = !0),
            o += h(t).charsLeftOver,
            o += 10 * h(t).unusedTokens.length,
            h(t).score = o,
            s ? o < r && (r = o,
            n = t) : (null == r || o < r || a) && (r = o,
            n = t,
            a && (s = !0));
        c(e, n || t)
    }
    function xt(e) {
        if (!e._d) {
            var t = W(e._i)
              , n = void 0 === t.day ? t.date : t.day;
            e._a = l([t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond], (function(e) {
                return e && parseInt(e, 10)
            }
            )),
            yt(e)
        }
    }
    function kt(e) {
        var t = new y(at(St(e)));
        return t._nextDay && (t.add(1, "d"),
        t._nextDay = void 0),
        t
    }
    function St(e) {
        var t = e._i
          , r = e._f;
        return e._locale = e._locale || it(e._l),
        null === t || void 0 === r && "" === t ? m({
            nullInput: !0
        }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
        v(t) ? new y(at(t)) : (u(t) ? e._d = t : n(r) ? bt(e) : r ? wt(e) : Tt(e),
        p(e) || (e._d = null),
        e))
    }
    function Tt(t) {
        var i = t._i;
        a(i) ? t._d = new Date(e.now()) : u(i) ? t._d = new Date(i.valueOf()) : "string" == typeof i ? pt(t) : n(i) ? (t._a = l(i.slice(0), (function(e) {
            return parseInt(e, 10)
        }
        )),
        yt(t)) : r(i) ? xt(t) : s(i) ? t._d = new Date(i) : e.createFromInputFallback(t)
    }
    function Dt(e, t, i, a, s) {
        var u = {};
        return !0 !== t && !1 !== t || (a = t,
        t = void 0),
        !0 !== i && !1 !== i || (a = i,
        i = void 0),
        (r(e) && o(e) || n(e) && 0 === e.length) && (e = void 0),
        u._isAMomentObject = !0,
        u._useUTC = u._isUTC = s,
        u._l = i,
        u._i = e,
        u._f = t,
        u._strict = a,
        kt(u)
    }
    function Mt(e, t, n, r) {
        return Dt(e, t, n, r, !1)
    }
    function Ct(e, t) {
        var r, i;
        if (1 === t.length && n(t[0]) && (t = t[0]),
        !t.length)
            return Mt();
        for (r = t[0],
        i = 1; i < t.length; ++i)
            t[i].isValid() && !t[i][e](r) || (r = t[i]);
        return r
    }
    function Nt() {
        return Ct("isBefore", [].slice.call(arguments, 0))
    }
    function Ot() {
        return Ct("isAfter", [].slice.call(arguments, 0))
    }
    function Et(e) {
        var t, n, r = !1, o = To.length;
        for (t in e)
            if (i(e, t) && (-1 === Hi.call(To, t) || null != e[t] && isNaN(e[t])))
                return !1;
        for (n = 0; n < o; ++n)
            if (e[To[n]]) {
                if (r)
                    return !1;
                parseFloat(e[To[n]]) !== V(e[To[n]]) && (r = !0)
            }
        return !0
    }
    function Yt() {
        return this._isValid
    }
    function jt() {
        return Kt(NaN)
    }
    function At(e) {
        var t = W(e)
          , n = t.year || 0
          , r = t.quarter || 0
          , i = t.month || 0
          , o = t.week || t.isoWeek || 0
          , a = t.day || 0
          , s = t.hour || 0
          , u = t.minute || 0
          , l = t.second || 0
          , c = t.millisecond || 0;
        this._isValid = Et(t),
        this._milliseconds = +c + 1e3 * l + 6e4 * u + 1e3 * s * 60 * 60,
        this._days = +a + 7 * o,
        this._months = +i + 3 * r + 12 * n,
        this._data = {},
        this._locale = it(),
        this._bubble()
    }
    function Lt(e) {
        return e instanceof At
    }
    function Pt(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
    }
    function Ht(e, t, n) {
        var r, i = Math.min(e.length, t.length), o = Math.abs(e.length - t.length), a = 0;
        for (r = 0; r < i; r++)
            (n && e[r] !== t[r] || !n && V(e[r]) !== V(t[r])) && a++;
        return a + o
    }
    function Rt(e, t) {
        C(e, 0, 0, (function() {
            var e = this.utcOffset()
              , n = "+";
            return e < 0 && (e = -e,
            n = "-"),
            n + M(~~(e / 60), 2) + t + M(~~e % 60, 2)
        }
        ))
    }
    function Ft(e, t) {
        var n, r, i = (t || "").match(e);
        return null === i ? null : 0 === (r = 60 * (n = ((i[i.length - 1] || []) + "").match(Do) || ["-", 0, 0])[1] + V(n[2])) ? 0 : "+" === n[0] ? r : -r
    }
    function Wt(t, n) {
        var r, i;
        return n._isUTC ? (r = n.clone(),
        i = (v(t) || u(t) ? t.valueOf() : Mt(t).valueOf()) - r.valueOf(),
        r._d.setTime(r._d.valueOf() + i),
        e.updateOffset(r, !1),
        r) : Mt(t).local()
    }
    function It(e) {
        return -Math.round(e._d.getTimezoneOffset())
    }
    function Ut(t, n, r) {
        var i, o = this._offset || 0;
        if (!this.isValid())
            return null != t ? this : NaN;
        if (null != t) {
            if ("string" == typeof t) {
                if (null === (t = Ft(Ai, t)))
                    return this
            } else
                Math.abs(t) < 16 && !r && (t *= 60);
            return !this._isUTC && n && (i = It(this)),
            this._offset = t,
            this._isUTC = !0,
            null != i && this.add(i, "m"),
            o !== t && (!n || this._changeInProgress ? on(this, Kt(t - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
            e.updateOffset(this, !0),
            this._changeInProgress = null)),
            this
        }
        return this._isUTC ? o : It(this)
    }
    function qt(e, t) {
        return null != e ? ("string" != typeof e && (e = -e),
        this.utcOffset(e, t),
        this) : -this.utcOffset()
    }
    function Gt(e) {
        return this.utcOffset(0, e)
    }
    function Vt(e) {
        return this._isUTC && (this.utcOffset(0, e),
        this._isUTC = !1,
        e && this.subtract(It(this), "m")),
        this
    }
    function $t() {
        if (null != this._tzm)
            this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
            var e = Ft(ji, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
        }
        return this
    }
    function Bt(e) {
        return !!this.isValid() && (e = e ? Mt(e).utcOffset() : 0,
        (this.utcOffset() - e) % 60 == 0)
    }
    function zt() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }
    function Zt() {
        if (!a(this._isDSTShifted))
            return this._isDSTShifted;
        var e, t = {};
        return g(t, this),
        (t = St(t))._a ? (e = t._isUTC ? f(t._a) : Mt(t._a),
        this._isDSTShifted = this.isValid() && Ht(t._a, e.toArray()) > 0) : this._isDSTShifted = !1,
        this._isDSTShifted
    }
    function Xt() {
        return !!this.isValid() && !this._isUTC
    }
    function Jt() {
        return !!this.isValid() && this._isUTC
    }
    function Qt() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset)
    }
    function Kt(e, t) {
        var n, r, o, a = e, u = null;
        return Lt(e) ? a = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : s(e) || !isNaN(+e) ? (a = {},
        t ? a[t] = +e : a.milliseconds = +e) : (u = Mo.exec(e)) ? (n = "-" === u[1] ? -1 : 1,
        a = {
            y: 0,
            d: V(u[Ii]) * n,
            h: V(u[Ui]) * n,
            m: V(u[qi]) * n,
            s: V(u[Gi]) * n,
            ms: V(Pt(1e3 * u[Vi])) * n
        }) : (u = Co.exec(e)) ? (n = "-" === u[1] ? -1 : 1,
        a = {
            y: en(u[2], n),
            M: en(u[3], n),
            w: en(u[4], n),
            d: en(u[5], n),
            h: en(u[6], n),
            m: en(u[7], n),
            s: en(u[8], n)
        }) : null == a ? a = {} : "object" == typeof a && ("from"in a || "to"in a) && (o = nn(Mt(a.from), Mt(a.to)),
        (a = {}).ms = o.milliseconds,
        a.M = o.months),
        r = new At(a),
        Lt(e) && i(e, "_locale") && (r._locale = e._locale),
        Lt(e) && i(e, "_isValid") && (r._isValid = e._isValid),
        r
    }
    function en(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t
    }
    function tn(e, t) {
        var n = {};
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()),
        e.clone().add(n.months, "M").isAfter(t) && --n.months,
        n.milliseconds = +t - +e.clone().add(n.months, "M"),
        n
    }
    function nn(e, t) {
        var n;
        return e.isValid() && t.isValid() ? (t = Wt(t, e),
        e.isBefore(t) ? n = tn(e, t) : ((n = tn(t, e)).milliseconds = -n.milliseconds,
        n.months = -n.months),
        n) : {
            milliseconds: 0,
            months: 0
        }
    }
    function rn(e, t) {
        return function(n, r) {
            var i;
            return null === r || isNaN(+r) || (b(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
            i = n,
            n = r,
            r = i),
            on(this, Kt(n, r), e),
            this
        }
    }
    function on(t, n, r, i) {
        var o = n._milliseconds
          , a = Pt(n._days)
          , s = Pt(n._months);
        t.isValid() && (i = null == i || i,
        s && ce(t, B(t, "Month") + s * r),
        a && z(t, "Date", B(t, "Date") + a * r),
        o && t._d.setTime(t._d.valueOf() + o * r),
        i && e.updateOffset(t, a || s))
    }
    function an(e) {
        return "string" == typeof e || e instanceof String
    }
    function sn(e) {
        return v(e) || u(e) || an(e) || s(e) || ln(e) || un(e) || null == e
    }
    function un(e) {
        var t, n, a = r(e) && !o(e), s = !1, u = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"], l = u.length;
        for (t = 0; t < l; t += 1)
            n = u[t],
            s = s || i(e, n);
        return a && s
    }
    function ln(e) {
        var t = n(e)
          , r = !1;
        return t && (r = 0 === e.filter((function(t) {
            return !s(t) && an(e)
        }
        )).length),
        t && r
    }
    function cn(e) {
        var t, n, a = r(e) && !o(e), s = !1, u = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
        for (t = 0; t < u.length; t += 1)
            n = u[t],
            s = s || i(e, n);
        return a && s
    }
    function fn(e, t) {
        var n = e.diff(t, "days", !0);
        return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
    }
    function dn(t, n) {
        1 === arguments.length && (arguments[0] ? sn(arguments[0]) ? (t = arguments[0],
        n = void 0) : cn(arguments[0]) && (n = arguments[0],
        t = void 0) : (t = void 0,
        n = void 0));
        var r = t || Mt()
          , i = Wt(r, this).startOf("day")
          , o = e.calendarFormat(this, i) || "sameElse"
          , a = n && (x(n[o]) ? n[o].call(this, r) : n[o]);
        return this.format(a || this.localeData().calendar(o, this, Mt(r)))
    }
    function hn() {
        return new y(this)
    }
    function pn(e, t) {
        var n = v(e) ? e : Mt(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = F(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
    }
    function mn(e, t) {
        var n = v(e) ? e : Mt(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = F(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
    }
    function gn(e, t, n, r) {
        var i = v(e) ? e : Mt(e)
          , o = v(t) ? t : Mt(t);
        return !!(this.isValid() && i.isValid() && o.isValid()) && (("(" === (r = r || "()")[0] ? this.isAfter(i, n) : !this.isBefore(i, n)) && (")" === r[1] ? this.isBefore(o, n) : !this.isAfter(o, n)))
    }
    function yn(e, t) {
        var n, r = v(e) ? e : Mt(e);
        return !(!this.isValid() || !r.isValid()) && ("millisecond" === (t = F(t) || "millisecond") ? this.valueOf() === r.valueOf() : (n = r.valueOf(),
        this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
    }
    function vn(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
    }
    function wn(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
    }
    function _n(e, t, n) {
        var r, i, o;
        if (!this.isValid())
            return NaN;
        if (!(r = Wt(e, this)).isValid())
            return NaN;
        switch (i = 6e4 * (r.utcOffset() - this.utcOffset()),
        t = F(t)) {
        case "year":
            o = bn(this, r) / 12;
            break;
        case "month":
            o = bn(this, r);
            break;
        case "quarter":
            o = bn(this, r) / 3;
            break;
        case "second":
            o = (this - r) / 1e3;
            break;
        case "minute":
            o = (this - r) / 6e4;
            break;
        case "hour":
            o = (this - r) / 36e5;
            break;
        case "day":
            o = (this - r - i) / 864e5;
            break;
        case "week":
            o = (this - r - i) / 6048e5;
            break;
        default:
            o = this - r
        }
        return n ? o : G(o)
    }
    function bn(e, t) {
        if (e.date() < t.date())
            return -bn(t, e);
        var n = 12 * (t.year() - e.year()) + (t.month() - e.month())
          , r = e.clone().add(n, "months");
        return -(n + (t - r < 0 ? (t - r) / (r - e.clone().add(n - 1, "months")) : (t - r) / (e.clone().add(n + 1, "months") - r))) || 0
    }
    function xn() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }
    function kn(e) {
        if (!this.isValid())
            return null;
        var t = !0 !== e
          , n = t ? this.clone().utc() : this;
        return n.year() < 0 || n.year() > 9999 ? E(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : x(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", E(n, "Z")) : E(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }
    function Sn() {
        if (!this.isValid())
            return "moment.invalid(/* " + this._i + " */)";
        var e, t, n, r, i = "moment", o = "";
        return this.isLocal() || (i = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone",
        o = "Z"),
        e = "[" + i + '("]',
        t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
        n = "-MM-DD[T]HH:mm:ss.SSS",
        r = o + '[")]',
        this.format(e + t + n + r)
    }
    function Tn(t) {
        t || (t = this.isUtc() ? e.defaultFormatUtc : e.defaultFormat);
        var n = E(this, t);
        return this.localeData().postformat(n)
    }
    function Dn(e, t) {
        return this.isValid() && (v(e) && e.isValid() || Mt(e).isValid()) ? Kt({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
    function Mn(e) {
        return this.from(Mt(), e)
    }
    function Cn(e, t) {
        return this.isValid() && (v(e) && e.isValid() || Mt(e).isValid()) ? Kt({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
    function Nn(e) {
        return this.to(Mt(), e)
    }
    function On(e) {
        var t;
        return void 0 === e ? this._locale._abbr : (null != (t = it(e)) && (this._locale = t),
        this)
    }
    function En() {
        return this._locale
    }
    function Yn(e, t) {
        return (e % t + t) % t
    }
    function jn(e, t, n) {
        return e < 100 && e >= 0 ? new Date(e + 400,t,n) - Lo : new Date(e,t,n).valueOf()
    }
    function An(e, t, n) {
        return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - Lo : Date.UTC(e, t, n)
    }
    function Ln(t) {
        var n, r;
        if (void 0 === (t = F(t)) || "millisecond" === t || !this.isValid())
            return this;
        switch (r = this._isUTC ? An : jn,
        t) {
        case "year":
            n = r(this.year(), 0, 1);
            break;
        case "quarter":
            n = r(this.year(), this.month() - this.month() % 3, 1);
            break;
        case "month":
            n = r(this.year(), this.month(), 1);
            break;
        case "week":
            n = r(this.year(), this.month(), this.date() - this.weekday());
            break;
        case "isoWeek":
            n = r(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
            break;
        case "day":
        case "date":
            n = r(this.year(), this.month(), this.date());
            break;
        case "hour":
            n = this._d.valueOf(),
            n -= Yn(n + (this._isUTC ? 0 : this.utcOffset() * jo), Ao);
            break;
        case "minute":
            n = this._d.valueOf(),
            n -= Yn(n, jo);
            break;
        case "second":
            n = this._d.valueOf(),
            n -= Yn(n, Yo)
        }
        return this._d.setTime(n),
        e.updateOffset(this, !0),
        this
    }
    function Pn(t) {
        var n, r;
        if (void 0 === (t = F(t)) || "millisecond" === t || !this.isValid())
            return this;
        switch (r = this._isUTC ? An : jn,
        t) {
        case "year":
            n = r(this.year() + 1, 0, 1) - 1;
            break;
        case "quarter":
            n = r(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
            break;
        case "month":
            n = r(this.year(), this.month() + 1, 1) - 1;
            break;
        case "week":
            n = r(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
            break;
        case "isoWeek":
            n = r(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
            break;
        case "day":
        case "date":
            n = r(this.year(), this.month(), this.date() + 1) - 1;
            break;
        case "hour":
            n = this._d.valueOf(),
            n += Ao - Yn(n + (this._isUTC ? 0 : this.utcOffset() * jo), Ao) - 1;
            break;
        case "minute":
            n = this._d.valueOf(),
            n += jo - Yn(n, jo) - 1;
            break;
        case "second":
            n = this._d.valueOf(),
            n += Yo - Yn(n, Yo) - 1
        }
        return this._d.setTime(n),
        e.updateOffset(this, !0),
        this
    }
    function Hn() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }
    function Rn() {
        return Math.floor(this.valueOf() / 1e3)
    }
    function Fn() {
        return new Date(this.valueOf())
    }
    function Wn() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
    }
    function In() {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        }
    }
    function Un() {
        return this.isValid() ? this.toISOString() : null
    }
    function qn() {
        return p(this)
    }
    function Gn() {
        return c({}, h(this))
    }
    function Vn() {
        return h(this).overflow
    }
    function $n() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }
    function Bn() {
        var t, n, r, i = this._eras || it("en")._eras;
        for (t = 0,
        n = i.length; t < n; ++t) {
            if ("string" == typeof i[t].since)
                r = e(i[t].since).startOf("day"),
                i[t].since = r.valueOf();
            switch (typeof i[t].until) {
            case "undefined":
                i[t].until = 1 / 0;
                break;
            case "string":
                r = e(i[t].until).startOf("day").valueOf(),
                i[t].until = r.valueOf()
            }
        }
        return i
    }
    function zn(e, t, n) {
        var r, i, o, a, s, u = this.eras();
        for (e = e.toUpperCase(),
        r = 0,
        i = u.length; r < i; ++r)
            if (o = u[r].name.toUpperCase(),
            a = u[r].abbr.toUpperCase(),
            s = u[r].narrow.toUpperCase(),
            n)
                switch (t) {
                case "N":
                case "NN":
                case "NNN":
                    if (a === e)
                        return u[r];
                    break;
                case "NNNN":
                    if (o === e)
                        return u[r];
                    break;
                case "NNNNN":
                    if (s === e)
                        return u[r]
                }
            else if ([o, a, s].indexOf(e) >= 0)
                return u[r]
    }
    function Zn(t, n) {
        var r = t.since <= t.until ? 1 : -1;
        return void 0 === n ? e(t.since).year() : e(t.since).year() + (n - t.offset) * r
    }
    function Xn() {
        var e, t, n, r = this.localeData().eras();
        for (e = 0,
        t = r.length; e < t; ++e) {
            if (n = this.clone().startOf("day").valueOf(),
            r[e].since <= n && n <= r[e].until)
                return r[e].name;
            if (r[e].until <= n && n <= r[e].since)
                return r[e].name
        }
        return ""
    }
    function Jn() {
        var e, t, n, r = this.localeData().eras();
        for (e = 0,
        t = r.length; e < t; ++e) {
            if (n = this.clone().startOf("day").valueOf(),
            r[e].since <= n && n <= r[e].until)
                return r[e].narrow;
            if (r[e].until <= n && n <= r[e].since)
                return r[e].narrow
        }
        return ""
    }
    function Qn() {
        var e, t, n, r = this.localeData().eras();
        for (e = 0,
        t = r.length; e < t; ++e) {
            if (n = this.clone().startOf("day").valueOf(),
            r[e].since <= n && n <= r[e].until)
                return r[e].abbr;
            if (r[e].until <= n && n <= r[e].since)
                return r[e].abbr
        }
        return ""
    }
    function Kn() {
        var t, n, r, i, o = this.localeData().eras();
        for (t = 0,
        n = o.length; t < n; ++t)
            if (r = o[t].since <= o[t].until ? 1 : -1,
            i = this.clone().startOf("day").valueOf(),
            o[t].since <= i && i <= o[t].until || o[t].until <= i && i <= o[t].since)
                return (this.year() - e(o[t].since).year()) * r + o[t].offset;
        return this.year()
    }
    function er(e) {
        return i(this, "_erasNameRegex") || sr.call(this),
        e ? this._erasNameRegex : this._erasRegex
    }
    function tr(e) {
        return i(this, "_erasAbbrRegex") || sr.call(this),
        e ? this._erasAbbrRegex : this._erasRegex
    }
    function nr(e) {
        return i(this, "_erasNarrowRegex") || sr.call(this),
        e ? this._erasNarrowRegex : this._erasRegex
    }
    function rr(e, t) {
        return t.erasAbbrRegex(e)
    }
    function ir(e, t) {
        return t.erasNameRegex(e)
    }
    function or(e, t) {
        return t.erasNarrowRegex(e)
    }
    function ar(e, t) {
        return t._eraYearOrdinalRegex || Ei
    }
    function sr() {
        var e, t, n = [], r = [], i = [], o = [], a = this.eras();
        for (e = 0,
        t = a.length; e < t; ++e)
            r.push(ee(a[e].name)),
            n.push(ee(a[e].abbr)),
            i.push(ee(a[e].narrow)),
            o.push(ee(a[e].name)),
            o.push(ee(a[e].abbr)),
            o.push(ee(a[e].narrow));
        this._erasRegex = new RegExp("^(" + o.join("|") + ")","i"),
        this._erasNameRegex = new RegExp("^(" + r.join("|") + ")","i"),
        this._erasAbbrRegex = new RegExp("^(" + n.join("|") + ")","i"),
        this._erasNarrowRegex = new RegExp("^(" + i.join("|") + ")","i")
    }
    function ur(e, t) {
        C(0, [e, e.length], 0, t)
    }
    function lr(e) {
        return mr.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }
    function cr(e) {
        return mr.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    }
    function fr() {
        return ke(this.year(), 1, 4)
    }
    function dr() {
        return ke(this.isoWeekYear(), 1, 4)
    }
    function hr() {
        var e = this.localeData()._week;
        return ke(this.year(), e.dow, e.doy)
    }
    function pr() {
        var e = this.localeData()._week;
        return ke(this.weekYear(), e.dow, e.doy)
    }
    function mr(e, t, n, r, i) {
        var o;
        return null == e ? xe(this, r, i).year : (t > (o = ke(e, r, i)) && (t = o),
        gr.call(this, e, t, n, r, i))
    }
    function gr(e, t, n, r, i) {
        var o = be(e, t, n, r, i)
          , a = we(o.year, 0, o.dayOfYear);
        return this.year(a.getUTCFullYear()),
        this.month(a.getUTCMonth()),
        this.date(a.getUTCDate()),
        this
    }
    function yr(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
    }
    function vr(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d")
    }
    function wr(e, t) {
        t[Vi] = V(1e3 * ("0." + e))
    }
    function _r() {
        return this._isUTC ? "UTC" : ""
    }
    function br() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }
    function xr(e) {
        return Mt(1e3 * e)
    }
    function kr() {
        return Mt.apply(null, arguments).parseZone()
    }
    function Sr(e) {
        return e
    }
    function Tr(e, t, n, r) {
        var i = it()
          , o = f().set(r, t);
        return i[n](o, e)
    }
    function Dr(e, t, n) {
        if (s(e) && (t = e,
        e = void 0),
        e = e || "",
        null != t)
            return Tr(e, t, n, "month");
        var r, i = [];
        for (r = 0; r < 12; r++)
            i[r] = Tr(e, r, n, "month");
        return i
    }
    function Mr(e, t, n, r) {
        "boolean" == typeof e ? (s(t) && (n = t,
        t = void 0),
        t = t || "") : (n = t = e,
        e = !1,
        s(t) && (n = t,
        t = void 0),
        t = t || "");
        var i, o = it(), a = e ? o._week.dow : 0, u = [];
        if (null != n)
            return Tr(t, (n + a) % 7, r, "day");
        for (i = 0; i < 7; i++)
            u[i] = Tr(t, (i + a) % 7, r, "day");
        return u
    }
    function Cr(e, t) {
        return Dr(e, t, "months")
    }
    function Nr(e, t) {
        return Dr(e, t, "monthsShort")
    }
    function Or(e, t, n) {
        return Mr(e, t, n, "weekdays")
    }
    function Er(e, t, n) {
        return Mr(e, t, n, "weekdaysShort")
    }
    function Yr(e, t, n) {
        return Mr(e, t, n, "weekdaysMin")
    }
    function jr() {
        var e = this._data;
        return this._milliseconds = qo(this._milliseconds),
        this._days = qo(this._days),
        this._months = qo(this._months),
        e.milliseconds = qo(e.milliseconds),
        e.seconds = qo(e.seconds),
        e.minutes = qo(e.minutes),
        e.hours = qo(e.hours),
        e.months = qo(e.months),
        e.years = qo(e.years),
        this
    }
    function Ar(e, t, n, r) {
        var i = Kt(t, n);
        return e._milliseconds += r * i._milliseconds,
        e._days += r * i._days,
        e._months += r * i._months,
        e._bubble()
    }
    function Lr(e, t) {
        return Ar(this, e, t, 1)
    }
    function Pr(e, t) {
        return Ar(this, e, t, -1)
    }
    function Hr(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
    }
    function Rr() {
        var e, t, n, r, i, o = this._milliseconds, a = this._days, s = this._months, u = this._data;
        return o >= 0 && a >= 0 && s >= 0 || o <= 0 && a <= 0 && s <= 0 || (o += 864e5 * Hr(Wr(s) + a),
        a = 0,
        s = 0),
        u.milliseconds = o % 1e3,
        e = G(o / 1e3),
        u.seconds = e % 60,
        t = G(e / 60),
        u.minutes = t % 60,
        n = G(t / 60),
        u.hours = n % 24,
        a += G(n / 24),
        s += i = G(Fr(a)),
        a -= Hr(Wr(i)),
        r = G(s / 12),
        s %= 12,
        u.days = a,
        u.months = s,
        u.years = r,
        this
    }
    function Fr(e) {
        return 4800 * e / 146097
    }
    function Wr(e) {
        return 146097 * e / 4800
    }
    function Ir(e) {
        if (!this.isValid())
            return NaN;
        var t, n, r = this._milliseconds;
        if ("month" === (e = F(e)) || "quarter" === e || "year" === e)
            switch (t = this._days + r / 864e5,
            n = this._months + Fr(t),
            e) {
            case "month":
                return n;
            case "quarter":
                return n / 3;
            case "year":
                return n / 12
            }
        else
            switch (t = this._days + Math.round(Wr(this._months)),
            e) {
            case "week":
                return t / 7 + r / 6048e5;
            case "day":
                return t + r / 864e5;
            case "hour":
                return 24 * t + r / 36e5;
            case "minute":
                return 1440 * t + r / 6e4;
            case "second":
                return 86400 * t + r / 1e3;
            case "millisecond":
                return Math.floor(864e5 * t) + r;
            default:
                throw new Error("Unknown unit " + e)
            }
    }
    function Ur() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * V(this._months / 12) : NaN
    }
    function qr(e) {
        return function() {
            return this.as(e)
        }
    }
    function Gr() {
        return Kt(this)
    }
    function Vr(e) {
        return e = F(e),
        this.isValid() ? this[e + "s"]() : NaN
    }
    function $r(e) {
        return function() {
            return this.isValid() ? this._data[e] : NaN
        }
    }
    function Br() {
        return G(this.days() / 7)
    }
    function zr(e, t, n, r, i) {
        return i.relativeTime(t || 1, !!n, e, r)
    }
    function Zr(e, t, n, r) {
        var i = Kt(e).abs()
          , o = aa(i.as("s"))
          , a = aa(i.as("m"))
          , s = aa(i.as("h"))
          , u = aa(i.as("d"))
          , l = aa(i.as("M"))
          , c = aa(i.as("w"))
          , f = aa(i.as("y"))
          , d = o <= n.ss && ["s", o] || o < n.s && ["ss", o] || a <= 1 && ["m"] || a < n.m && ["mm", a] || s <= 1 && ["h"] || s < n.h && ["hh", s] || u <= 1 && ["d"] || u < n.d && ["dd", u];
        return null != n.w && (d = d || c <= 1 && ["w"] || c < n.w && ["ww", c]),
        (d = d || l <= 1 && ["M"] || l < n.M && ["MM", l] || f <= 1 && ["y"] || ["yy", f])[2] = t,
        d[3] = +e > 0,
        d[4] = r,
        zr.apply(null, d)
    }
    function Xr(e) {
        return void 0 === e ? aa : "function" == typeof e && (aa = e,
        !0)
    }
    function Jr(e, t) {
        return void 0 !== sa[e] && (void 0 === t ? sa[e] : (sa[e] = t,
        "s" === e && (sa.ss = t - 1),
        !0))
    }
    function Qr(e, t) {
        if (!this.isValid())
            return this.localeData().invalidDate();
        var n, r, i = !1, o = sa;
        return "object" == typeof e && (t = e,
        e = !1),
        "boolean" == typeof e && (i = e),
        "object" == typeof t && (o = Object.assign({}, sa, t),
        null != t.s && null == t.ss && (o.ss = t.s - 1)),
        r = Zr(this, !i, o, n = this.localeData()),
        i && (r = n.pastFuture(+this, r)),
        n.postformat(r)
    }
    function Kr(e) {
        return (e > 0) - (e < 0) || +e
    }
    function ei() {
        if (!this.isValid())
            return this.localeData().invalidDate();
        var e, t, n, r, i, o, a, s, u = ua(this._milliseconds) / 1e3, l = ua(this._days), c = ua(this._months), f = this.asSeconds();
        return f ? (e = G(u / 60),
        t = G(e / 60),
        u %= 60,
        e %= 60,
        n = G(c / 12),
        c %= 12,
        r = u ? u.toFixed(3).replace(/\.?0+$/, "") : "",
        i = f < 0 ? "-" : "",
        o = Kr(this._months) !== Kr(f) ? "-" : "",
        a = Kr(this._days) !== Kr(f) ? "-" : "",
        s = Kr(this._milliseconds) !== Kr(f) ? "-" : "",
        i + "P" + (n ? o + n + "Y" : "") + (c ? o + c + "M" : "") + (l ? a + l + "D" : "") + (t || e || u ? "T" : "") + (t ? s + t + "H" : "") + (e ? s + e + "M" : "") + (u ? s + r + "S" : "")) : "P0D"
    }
    var ti, ni;
    ni = Array.prototype.some ? Array.prototype.some : function(e) {
        var t, n = Object(this), r = n.length >>> 0;
        for (t = 0; t < r; t++)
            if (t in n && e.call(this, n[t], t, n))
                return !0;
        return !1
    }
    ;
    var ri, ii = e.momentProperties = [], oi = !1, ai = {};
    e.suppressDeprecationWarnings = !1,
    e.deprecationHandler = null,
    ri = Object.keys ? Object.keys : function(e) {
        var t, n = [];
        for (t in e)
            i(e, t) && n.push(t);
        return n
    }
    ;
    var si, ui = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    }, li = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, ci = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, fi = {}, di = {}, hi = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    }, pi = "Invalid date", mi = "%d", gi = /\d{1,2}/, yi = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        w: "a week",
        ww: "%d weeks",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    }, vi = {}, wi = {}, _i = /\d/, bi = /\d\d/, xi = /\d{3}/, ki = /\d{4}/, Si = /[+-]?\d{6}/, Ti = /\d\d?/, Di = /\d\d\d\d?/, Mi = /\d\d\d\d\d\d?/, Ci = /\d{1,3}/, Ni = /\d{1,4}/, Oi = /[+-]?\d{1,6}/, Ei = /\d+/, Yi = /[+-]?\d+/, ji = /Z|[+-]\d\d:?\d\d/gi, Ai = /Z|[+-]\d\d(?::?\d\d)?/gi, Li = /[+-]?\d+(\.\d{1,3})?/, Pi = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
    si = {};
    var Hi, Ri = {}, Fi = 0, Wi = 1, Ii = 2, Ui = 3, qi = 4, Gi = 5, Vi = 6, $i = 7, Bi = 8;
    Hi = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
        var t;
        for (t = 0; t < this.length; ++t)
            if (this[t] === e)
                return t;
        return -1
    }
    ,
    C("M", ["MM", 2], "Mo", (function() {
        return this.month() + 1
    }
    )),
    C("MMM", 0, 0, (function(e) {
        return this.localeData().monthsShort(this, e)
    }
    )),
    C("MMMM", 0, 0, (function(e) {
        return this.localeData().months(this, e)
    }
    )),
    R("month", "M"),
    I("month", 8),
    J("M", Ti),
    J("MM", Ti, bi),
    J("MMM", (function(e, t) {
        return t.monthsShortRegex(e)
    }
    )),
    J("MMMM", (function(e, t) {
        return t.monthsRegex(e)
    }
    )),
    te(["M", "MM"], (function(e, t) {
        t[Wi] = V(e) - 1
    }
    )),
    te(["MMM", "MMMM"], (function(e, t, n, r) {
        var i = n._locale.monthsParse(e, r, n._strict);
        null != i ? t[Wi] = i : h(n).invalidMonth = e
    }
    ));
    var zi = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
      , Zi = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
      , Xi = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
      , Ji = Pi
      , Qi = Pi;
    C("Y", 0, 0, (function() {
        var e = this.year();
        return e <= 9999 ? M(e, 4) : "+" + e
    }
    )),
    C(0, ["YY", 2], 0, (function() {
        return this.year() % 100
    }
    )),
    C(0, ["YYYY", 4], 0, "year"),
    C(0, ["YYYYY", 5], 0, "year"),
    C(0, ["YYYYYY", 6, !0], 0, "year"),
    R("year", "y"),
    I("year", 1),
    J("Y", Yi),
    J("YY", Ti, bi),
    J("YYYY", Ni, ki),
    J("YYYYY", Oi, Si),
    J("YYYYYY", Oi, Si),
    te(["YYYYY", "YYYYYY"], Fi),
    te("YYYY", (function(t, n) {
        n[Fi] = 2 === t.length ? e.parseTwoDigitYear(t) : V(t)
    }
    )),
    te("YY", (function(t, n) {
        n[Fi] = e.parseTwoDigitYear(t)
    }
    )),
    te("Y", (function(e, t) {
        t[Fi] = parseInt(e, 10)
    }
    )),
    e.parseTwoDigitYear = function(e) {
        return V(e) + (V(e) > 68 ? 1900 : 2e3)
    }
    ;
    var Ki = $("FullYear", !0);
    C("w", ["ww", 2], "wo", "week"),
    C("W", ["WW", 2], "Wo", "isoWeek"),
    R("week", "w"),
    R("isoWeek", "W"),
    I("week", 5),
    I("isoWeek", 5),
    J("w", Ti),
    J("ww", Ti, bi),
    J("W", Ti),
    J("WW", Ti, bi),
    ne(["w", "ww", "W", "WW"], (function(e, t, n, r) {
        t[r.substr(0, 1)] = V(e)
    }
    ));
    var eo = {
        dow: 0,
        doy: 6
    };
    C("d", 0, "do", "day"),
    C("dd", 0, 0, (function(e) {
        return this.localeData().weekdaysMin(this, e)
    }
    )),
    C("ddd", 0, 0, (function(e) {
        return this.localeData().weekdaysShort(this, e)
    }
    )),
    C("dddd", 0, 0, (function(e) {
        return this.localeData().weekdays(this, e)
    }
    )),
    C("e", 0, 0, "weekday"),
    C("E", 0, 0, "isoWeekday"),
    R("day", "d"),
    R("weekday", "e"),
    R("isoWeekday", "E"),
    I("day", 11),
    I("weekday", 11),
    I("isoWeekday", 11),
    J("d", Ti),
    J("e", Ti),
    J("E", Ti),
    J("dd", (function(e, t) {
        return t.weekdaysMinRegex(e)
    }
    )),
    J("ddd", (function(e, t) {
        return t.weekdaysShortRegex(e)
    }
    )),
    J("dddd", (function(e, t) {
        return t.weekdaysRegex(e)
    }
    )),
    ne(["dd", "ddd", "dddd"], (function(e, t, n, r) {
        var i = n._locale.weekdaysParse(e, r, n._strict);
        null != i ? t.d = i : h(n).invalidWeekday = e
    }
    )),
    ne(["d", "e", "E"], (function(e, t, n, r) {
        t[r] = V(e)
    }
    ));
    var to = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
      , no = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
      , ro = "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
      , io = Pi
      , oo = Pi
      , ao = Pi;
    C("H", ["HH", 2], 0, "hour"),
    C("h", ["hh", 2], 0, Ge),
    C("k", ["kk", 2], 0, Ve),
    C("hmm", 0, 0, (function() {
        return "" + Ge.apply(this) + M(this.minutes(), 2)
    }
    )),
    C("hmmss", 0, 0, (function() {
        return "" + Ge.apply(this) + M(this.minutes(), 2) + M(this.seconds(), 2)
    }
    )),
    C("Hmm", 0, 0, (function() {
        return "" + this.hours() + M(this.minutes(), 2)
    }
    )),
    C("Hmmss", 0, 0, (function() {
        return "" + this.hours() + M(this.minutes(), 2) + M(this.seconds(), 2)
    }
    )),
    $e("a", !0),
    $e("A", !1),
    R("hour", "h"),
    I("hour", 13),
    J("a", Be),
    J("A", Be),
    J("H", Ti),
    J("h", Ti),
    J("k", Ti),
    J("HH", Ti, bi),
    J("hh", Ti, bi),
    J("kk", Ti, bi),
    J("hmm", Di),
    J("hmmss", Mi),
    J("Hmm", Di),
    J("Hmmss", Mi),
    te(["H", "HH"], Ui),
    te(["k", "kk"], (function(e, t) {
        var n = V(e);
        t[Ui] = 24 === n ? 0 : n
    }
    )),
    te(["a", "A"], (function(e, t, n) {
        n._isPm = n._locale.isPM(e),
        n._meridiem = e
    }
    )),
    te(["h", "hh"], (function(e, t, n) {
        t[Ui] = V(e),
        h(n).bigHour = !0
    }
    )),
    te("hmm", (function(e, t, n) {
        var r = e.length - 2;
        t[Ui] = V(e.substr(0, r)),
        t[qi] = V(e.substr(r)),
        h(n).bigHour = !0
    }
    )),
    te("hmmss", (function(e, t, n) {
        var r = e.length - 4
          , i = e.length - 2;
        t[Ui] = V(e.substr(0, r)),
        t[qi] = V(e.substr(r, 2)),
        t[Gi] = V(e.substr(i)),
        h(n).bigHour = !0
    }
    )),
    te("Hmm", (function(e, t) {
        var n = e.length - 2;
        t[Ui] = V(e.substr(0, n)),
        t[qi] = V(e.substr(n))
    }
    )),
    te("Hmmss", (function(e, t) {
        var n = e.length - 4
          , r = e.length - 2;
        t[Ui] = V(e.substr(0, n)),
        t[qi] = V(e.substr(n, 2)),
        t[Gi] = V(e.substr(r))
    }
    ));
    var so, uo = /[ap]\.?m?\.?/i, lo = $("Hours", !0), co = {
        calendar: ui,
        longDateFormat: hi,
        invalidDate: pi,
        ordinal: mi,
        dayOfMonthOrdinalParse: gi,
        relativeTime: yi,
        months: zi,
        monthsShort: Zi,
        week: eo,
        weekdays: to,
        weekdaysMin: ro,
        weekdaysShort: no,
        meridiemParse: uo
    }, fo = {}, ho = {}, po = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, mo = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, go = /Z|[+-]\d\d(?::?\d\d)?/, yo = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, !1], ["YYYY", /\d{4}/, !1]], vo = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], wo = /^\/?Date\((-?\d+)/i, _o = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, bo = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };
    e.createFromInputFallback = _("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", (function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }
    )),
    e.ISO_8601 = function() {}
    ,
    e.RFC_2822 = function() {}
    ;
    var xo = _("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
        var e = Mt.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this : e : m()
    }
    ))
      , ko = _("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", (function() {
        var e = Mt.apply(null, arguments);
        return this.isValid() && e.isValid() ? e > this ? this : e : m()
    }
    ))
      , So = function() {
        return Date.now ? Date.now() : +new Date
    }
      , To = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    Rt("Z", ":"),
    Rt("ZZ", ""),
    J("Z", Ai),
    J("ZZ", Ai),
    te(["Z", "ZZ"], (function(e, t, n) {
        n._useUTC = !0,
        n._tzm = Ft(Ai, e)
    }
    ));
    var Do = /([\+\-]|\d\d)/gi;
    e.updateOffset = function() {}
    ;
    var Mo = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/
      , Co = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    Kt.fn = At.prototype,
    Kt.invalid = jt;
    var No = rn(1, "add")
      , Oo = rn(-1, "subtract");
    e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
    e.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Eo = _("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", (function(e) {
        return void 0 === e ? this.localeData() : this.locale(e)
    }
    ))
      , Yo = 1e3
      , jo = 60 * Yo
      , Ao = 60 * jo
      , Lo = 3506328 * Ao;
    C("N", 0, 0, "eraAbbr"),
    C("NN", 0, 0, "eraAbbr"),
    C("NNN", 0, 0, "eraAbbr"),
    C("NNNN", 0, 0, "eraName"),
    C("NNNNN", 0, 0, "eraNarrow"),
    C("y", ["y", 1], "yo", "eraYear"),
    C("y", ["yy", 2], 0, "eraYear"),
    C("y", ["yyy", 3], 0, "eraYear"),
    C("y", ["yyyy", 4], 0, "eraYear"),
    J("N", rr),
    J("NN", rr),
    J("NNN", rr),
    J("NNNN", ir),
    J("NNNNN", or),
    te(["N", "NN", "NNN", "NNNN", "NNNNN"], (function(e, t, n, r) {
        var i = n._locale.erasParse(e, r, n._strict);
        i ? h(n).era = i : h(n).invalidEra = e
    }
    )),
    J("y", Ei),
    J("yy", Ei),
    J("yyy", Ei),
    J("yyyy", Ei),
    J("yo", ar),
    te(["y", "yy", "yyy", "yyyy"], Fi),
    te(["yo"], (function(e, t, n) {
        var r;
        n._locale._eraYearOrdinalRegex && (r = e.match(n._locale._eraYearOrdinalRegex)),
        n._locale.eraYearOrdinalParse ? t[Fi] = n._locale.eraYearOrdinalParse(e, r) : t[Fi] = parseInt(e, 10)
    }
    )),
    C(0, ["gg", 2], 0, (function() {
        return this.weekYear() % 100
    }
    )),
    C(0, ["GG", 2], 0, (function() {
        return this.isoWeekYear() % 100
    }
    )),
    ur("gggg", "weekYear"),
    ur("ggggg", "weekYear"),
    ur("GGGG", "isoWeekYear"),
    ur("GGGGG", "isoWeekYear"),
    R("weekYear", "gg"),
    R("isoWeekYear", "GG"),
    I("weekYear", 1),
    I("isoWeekYear", 1),
    J("G", Yi),
    J("g", Yi),
    J("GG", Ti, bi),
    J("gg", Ti, bi),
    J("GGGG", Ni, ki),
    J("gggg", Ni, ki),
    J("GGGGG", Oi, Si),
    J("ggggg", Oi, Si),
    ne(["gggg", "ggggg", "GGGG", "GGGGG"], (function(e, t, n, r) {
        t[r.substr(0, 2)] = V(e)
    }
    )),
    ne(["gg", "GG"], (function(t, n, r, i) {
        n[i] = e.parseTwoDigitYear(t)
    }
    )),
    C("Q", 0, "Qo", "quarter"),
    R("quarter", "Q"),
    I("quarter", 7),
    J("Q", _i),
    te("Q", (function(e, t) {
        t[Wi] = 3 * (V(e) - 1)
    }
    )),
    C("D", ["DD", 2], "Do", "date"),
    R("date", "D"),
    I("date", 9),
    J("D", Ti),
    J("DD", Ti, bi),
    J("Do", (function(e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
    }
    )),
    te(["D", "DD"], Ii),
    te("Do", (function(e, t) {
        t[Ii] = V(e.match(Ti)[0])
    }
    ));
    var Po = $("Date", !0);
    C("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    R("dayOfYear", "DDD"),
    I("dayOfYear", 4),
    J("DDD", Ci),
    J("DDDD", xi),
    te(["DDD", "DDDD"], (function(e, t, n) {
        n._dayOfYear = V(e)
    }
    )),
    C("m", ["mm", 2], 0, "minute"),
    R("minute", "m"),
    I("minute", 14),
    J("m", Ti),
    J("mm", Ti, bi),
    te(["m", "mm"], qi);
    var Ho = $("Minutes", !1);
    C("s", ["ss", 2], 0, "second"),
    R("second", "s"),
    I("second", 15),
    J("s", Ti),
    J("ss", Ti, bi),
    te(["s", "ss"], Gi);
    var Ro, Fo, Wo = $("Seconds", !1);
    for (C("S", 0, 0, (function() {
        return ~~(this.millisecond() / 100)
    }
    )),
    C(0, ["SS", 2], 0, (function() {
        return ~~(this.millisecond() / 10)
    }
    )),
    C(0, ["SSS", 3], 0, "millisecond"),
    C(0, ["SSSS", 4], 0, (function() {
        return 10 * this.millisecond()
    }
    )),
    C(0, ["SSSSS", 5], 0, (function() {
        return 100 * this.millisecond()
    }
    )),
    C(0, ["SSSSSS", 6], 0, (function() {
        return 1e3 * this.millisecond()
    }
    )),
    C(0, ["SSSSSSS", 7], 0, (function() {
        return 1e4 * this.millisecond()
    }
    )),
    C(0, ["SSSSSSSS", 8], 0, (function() {
        return 1e5 * this.millisecond()
    }
    )),
    C(0, ["SSSSSSSSS", 9], 0, (function() {
        return 1e6 * this.millisecond()
    }
    )),
    R("millisecond", "ms"),
    I("millisecond", 16),
    J("S", Ci, _i),
    J("SS", Ci, bi),
    J("SSS", Ci, xi),
    Ro = "SSSS"; Ro.length <= 9; Ro += "S")
        J(Ro, Ei);
    for (Ro = "S"; Ro.length <= 9; Ro += "S")
        te(Ro, wr);
    Fo = $("Milliseconds", !1),
    C("z", 0, 0, "zoneAbbr"),
    C("zz", 0, 0, "zoneName");
    var Io = y.prototype;
    Io.add = No,
    Io.calendar = dn,
    Io.clone = hn,
    Io.diff = _n,
    Io.endOf = Pn,
    Io.format = Tn,
    Io.from = Dn,
    Io.fromNow = Mn,
    Io.to = Cn,
    Io.toNow = Nn,
    Io.get = Z,
    Io.invalidAt = Vn,
    Io.isAfter = pn,
    Io.isBefore = mn,
    Io.isBetween = gn,
    Io.isSame = yn,
    Io.isSameOrAfter = vn,
    Io.isSameOrBefore = wn,
    Io.isValid = qn,
    Io.lang = Eo,
    Io.locale = On,
    Io.localeData = En,
    Io.max = ko,
    Io.min = xo,
    Io.parsingFlags = Gn,
    Io.set = X,
    Io.startOf = Ln,
    Io.subtract = Oo,
    Io.toArray = Wn,
    Io.toObject = In,
    Io.toDate = Fn,
    Io.toISOString = kn,
    Io.inspect = Sn,
    "undefined" != typeof Symbol && null != Symbol.for && (Io[Symbol.for("nodejs.util.inspect.custom")] = function() {
        return "Moment<" + this.format() + ">"
    }
    ),
    Io.toJSON = Un,
    Io.toString = xn,
    Io.unix = Rn,
    Io.valueOf = Hn,
    Io.creationData = $n,
    Io.eraName = Xn,
    Io.eraNarrow = Jn,
    Io.eraAbbr = Qn,
    Io.eraYear = Kn,
    Io.year = Ki,
    Io.isLeapYear = ye,
    Io.weekYear = lr,
    Io.isoWeekYear = cr,
    Io.quarter = Io.quarters = yr,
    Io.month = fe,
    Io.daysInMonth = de,
    Io.week = Io.weeks = Me,
    Io.isoWeek = Io.isoWeeks = Ce,
    Io.weeksInYear = hr,
    Io.weeksInWeekYear = pr,
    Io.isoWeeksInYear = fr,
    Io.isoWeeksInISOWeekYear = dr,
    Io.date = Po,
    Io.day = Io.days = He,
    Io.weekday = Re,
    Io.isoWeekday = Fe,
    Io.dayOfYear = vr,
    Io.hour = Io.hours = lo,
    Io.minute = Io.minutes = Ho,
    Io.second = Io.seconds = Wo,
    Io.millisecond = Io.milliseconds = Fo,
    Io.utcOffset = Ut,
    Io.utc = Gt,
    Io.local = Vt,
    Io.parseZone = $t,
    Io.hasAlignedHourOffset = Bt,
    Io.isDST = zt,
    Io.isLocal = Xt,
    Io.isUtcOffset = Jt,
    Io.isUtc = Qt,
    Io.isUTC = Qt,
    Io.zoneAbbr = _r,
    Io.zoneName = br,
    Io.dates = _("dates accessor is deprecated. Use date instead.", Po),
    Io.months = _("months accessor is deprecated. Use month instead", fe),
    Io.years = _("years accessor is deprecated. Use year instead", Ki),
    Io.zone = _("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", qt),
    Io.isDSTShifted = _("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Zt);
    var Uo = T.prototype;
    Uo.calendar = D,
    Uo.longDateFormat = j,
    Uo.invalidDate = A,
    Uo.ordinal = L,
    Uo.preparse = Sr,
    Uo.postformat = Sr,
    Uo.relativeTime = P,
    Uo.pastFuture = H,
    Uo.set = k,
    Uo.eras = Bn,
    Uo.erasParse = zn,
    Uo.erasConvertYear = Zn,
    Uo.erasAbbrRegex = tr,
    Uo.erasNameRegex = er,
    Uo.erasNarrowRegex = nr,
    Uo.months = ae,
    Uo.monthsShort = se,
    Uo.monthsParse = le,
    Uo.monthsRegex = pe,
    Uo.monthsShortRegex = he,
    Uo.week = Se,
    Uo.firstDayOfYear = De,
    Uo.firstDayOfWeek = Te,
    Uo.weekdays = Ye,
    Uo.weekdaysMin = Ae,
    Uo.weekdaysShort = je,
    Uo.weekdaysParse = Pe,
    Uo.weekdaysRegex = We,
    Uo.weekdaysShortRegex = Ie,
    Uo.weekdaysMinRegex = Ue,
    Uo.isPM = ze,
    Uo.meridiem = Ze,
    tt("en", {
        eras: [{
            since: "0001-01-01",
            until: 1 / 0,
            offset: 1,
            name: "Anno Domini",
            narrow: "AD",
            abbr: "AD"
        }, {
            since: "0000-12-31",
            until: -1 / 0,
            offset: 1,
            name: "Before Christ",
            narrow: "BC",
            abbr: "BC"
        }],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var t = e % 10;
            return e + (1 === V(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        }
    }),
    e.lang = _("moment.lang is deprecated. Use moment.locale instead.", tt),
    e.langData = _("moment.langData is deprecated. Use moment.localeData instead.", it);
    var qo = Math.abs
      , Go = qr("ms")
      , Vo = qr("s")
      , $o = qr("m")
      , Bo = qr("h")
      , zo = qr("d")
      , Zo = qr("w")
      , Xo = qr("M")
      , Jo = qr("Q")
      , Qo = qr("y")
      , Ko = $r("milliseconds")
      , ea = $r("seconds")
      , ta = $r("minutes")
      , na = $r("hours")
      , ra = $r("days")
      , ia = $r("months")
      , oa = $r("years")
      , aa = Math.round
      , sa = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        w: null,
        M: 11
    }
      , ua = Math.abs
      , la = At.prototype;
    return la.isValid = Yt,
    la.abs = jr,
    la.add = Lr,
    la.subtract = Pr,
    la.as = Ir,
    la.asMilliseconds = Go,
    la.asSeconds = Vo,
    la.asMinutes = $o,
    la.asHours = Bo,
    la.asDays = zo,
    la.asWeeks = Zo,
    la.asMonths = Xo,
    la.asQuarters = Jo,
    la.asYears = Qo,
    la.valueOf = Ur,
    la._bubble = Rr,
    la.clone = Gr,
    la.get = Vr,
    la.milliseconds = Ko,
    la.seconds = ea,
    la.minutes = ta,
    la.hours = na,
    la.days = ra,
    la.weeks = Br,
    la.months = ia,
    la.years = oa,
    la.humanize = Qr,
    la.toISOString = ei,
    la.toString = ei,
    la.toJSON = ei,
    la.locale = On,
    la.localeData = En,
    la.toIsoString = _("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", ei),
    la.lang = Eo,
    C("X", 0, 0, "unix"),
    C("x", 0, 0, "valueOf"),
    J("x", Yi),
    J("X", Li),
    te("X", (function(e, t, n) {
        n._d = new Date(1e3 * parseFloat(e))
    }
    )),
    te("x", (function(e, t, n) {
        n._d = new Date(V(e))
    }
    )),
    e.version = "2.29.4",
    t(Mt),
    e.fn = Io,
    e.min = Nt,
    e.max = Ot,
    e.now = So,
    e.utc = f,
    e.unix = xr,
    e.months = Cr,
    e.isDate = u,
    e.locale = tt,
    e.invalid = m,
    e.duration = Kt,
    e.isMoment = v,
    e.weekdays = Or,
    e.parseZone = kr,
    e.localeData = it,
    e.isDuration = Lt,
    e.monthsShort = Nr,
    e.weekdaysMin = Yr,
    e.defineLocale = nt,
    e.updateLocale = rt,
    e.locales = ot,
    e.weekdaysShort = Er,
    e.normalizeUnits = F,
    e.relativeTimeRounding = Xr,
    e.relativeTimeThreshold = Jr,
    e.calendarFormat = fn,
    e.prototype = Io,
    e.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
    },
    e
}
)),
window.ga && window.ga((function(e) {
    try {
        const t = e.get("clientId");
        t && window.ga("set", "dimension18", t)
    } catch (e) {}
}
)),
Market.Helpers.GoogleAnalytics = {
    sendViewItemListEvent(e) {
        const t = e.payloadGA4Objects
          , n = e.payloadGA3Objects;
        "production" !== window.gaEnvironment && t.forEach((e=>{
            window.GtmMeasurements.sendAnalyticsEvent({
                eventName: "view_item_list",
                eventType: "user",
                ecommerce: e.ecommerce,
                searchTerm: e.search_term,
                searchResults: e.search_results,
                itemListId: e.item_list_id
            })
        }
        )),
        n.length > 0 && (Market.Helpers.GoogleAnalytics.addImpressions(n),
        Market.Helpers.GoogleAnalytics.sendEvent("event", "Ecommerce", "view", {
            label: "Product impression",
            nonInteraction: !0
        }))
    },
    logPageView(e) {
        e || (e = {});
        const {page: t, title: n} = e;
        if (window.ga && window._envGaTrackerNames) {
            const e = _.omit({
                hitType: "pageview",
                page: t || this.relativePath(),
                title: n || null
            }, (e=>_.isNull(e)));
            window._envGaTrackerNames.forEach((t=>window.ga(t + ".send", e)))
        }
    },
    sendEvent(e, t, n, r) {
        r || (r = {});
        const {label: i, value: o, hitCallback: a, nonInteraction: s, dimension11: u} = r;
        if (window.ga && window._envGaTrackerNames) {
            const r = _.omit({
                hitType: e,
                eventCategory: t,
                eventAction: n,
                eventLabel: i || null,
                eventValue: o || null,
                hitCallback: a || null,
                nonInteraction: s || null,
                dimension11: u || null
            }, (e=>_.isNull(e)));
            window._envGaTrackerNames.forEach((e=>window.ga(e + ".send", r)))
        }
    },
    addProducts(e) {
        window.ga && window._envGaTrackerNames && window._envGaTrackerNames.forEach((t=>{
            Array.from(e.productsArray).forEach((e=>{
                window.ga(t + ".ec:addProduct", e)
            }
            ))
        }
        ))
    },
    addImpressions(e) {
        window.ga && window._envGaTrackerNames && window._envGaTrackerNames.forEach((t=>{
            Array.from(e).forEach((e=>{
                Array.from(e.productsArray).forEach((e=>{
                    window.ga(t + ".ec:addImpression", e)
                }
                ))
            }
            ))
        }
        ))
    },
    addPromo(e) {
        window.ga && window._envGaTrackerNames && window._envGaTrackerNames.forEach((t=>window.ga(t + ".ec:addPromo", e)))
    },
    set(e, t) {
        window.ga && window._envGaTrackerNames && window._envGaTrackerNames.forEach((n=>window.ga(n + ".set", e, t)))
    },
    setAction(e, t) {
        window.ga && window._envGaTrackerNames && window._envGaTrackerNames.forEach((n=>{
            t ? window.ga(n + ".ec:setAction", e, t) : window.ga(n + ".ec:setAction", e)
        }
        ))
    },
    storeGaClientId() {
        window.ga && window.ga((function(e) {
            $.cookie("__ga_client_id", e.get("clientId"), {
                path: "/",
                expires: 60
            })
        }
        ))
    },
    relativePath: ()=>document.location.pathname + document.location.search,
    isEventStale(e) {
        e = moment.unix(e);
        const t = moment(new Date).utc();
        return moment.duration(e.diff(t)).asMinutes() > 10
    },
    getLinker: ()=>window.ga.getByName("m").get("linkerParam")
},
Views.CtaHeader = class {
    constructor(e) {
        this.itemId = e.data().itemId,
        e.find(".header-envato_market").on("click", this.handleLogo.bind(this)),
        e.find(".header-buy-now").on("click", this.handleBuyNow.bind(this)),
        e.on("click", ".js-track-on-click", (e=>{
            this.target = $(e.currentTarget),
            this.experimentId = this.target.data().experimentId,
            this.gaVariantId = this.target.data().gaVariantId,
            Market.Helpers.GoogleAnalytics.sendEvent("event", "experiment", "click", {
                label: this.experimentId,
                value: this.gaVariantId,
                nonInteraction: !0
            })
        }
        )),
        $((()=>this.handleOnLoad()))
    }
    handleOnLoad() {
        Market.Helpers.GoogleAnalytics.sendEvent("event", "preview banner", "impression", {
            label: this.itemId.toString(),
            nonInteraction: !0
        })
    }
    handleLogo(e) {
        Market.Helpers.GoogleAnalytics.sendEvent("event", "preview banner", "click;button", {
            label: "envatomarket"
        })
    }
    handleBuyNow(e) {
        const t = $(event.target).text().toLowerCase();
        Market.Helpers.GoogleAnalytics.sendEvent("event", "preview banner", "click;button", {
            label: t
        })
    }
}
,
Views.FullScreenPreview = class {
    constructor(e) {
        this.$el = e,
        e.load(this.fixResponsivenessForMobileSafari.bind(this))
    }
    fixResponsivenessForMobileSafari() {
        this.hasMobileSafariIFrameBug() && this.addHackyFix()
    }
    hasMobileSafariIFrameBug() {
        return this.$el.width() !== $("body").width()
    }
    addHackyFix() {
        this.$el.attr("scrolling", "no").addClass("-ios-fix")
    }
}
,
window.addEventListener("CookiebotOnDialogDisplay", (function(e) {
    const t = e.srcElement.CookieConsentDialog.DOM;
    new MutationObserver((function(e) {
        e.forEach((function() {
            t.style.transform.match(t.style.top) || (t.style.setProperty("transform", "translateY(" + t.style.top + ")"),
            t.style.setProperty("opacity", "1", "important"))
        }
        ))
    }
    )).observe(t, {
        attributes: !0,
        attributeFilter: ["style"]
    })
}
));
