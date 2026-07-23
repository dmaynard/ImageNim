(function() {
  const E = document.createElement("link").relList;
  if (E && E.supports && E.supports("modulepreload")) return;
  for (const N of document.querySelectorAll('link[rel="modulepreload"]')) o(N);
  new MutationObserver((N) => {
    for (const q of N) if (q.type === "childList") for (const V of q.addedNodes) V.tagName === "LINK" && V.rel === "modulepreload" && o(V);
  }).observe(document, { childList: true, subtree: true });
  function A(N) {
    const q = {};
    return N.integrity && (q.integrity = N.integrity), N.referrerPolicy && (q.referrerPolicy = N.referrerPolicy), N.crossOrigin === "use-credentials" ? q.credentials = "include" : N.crossOrigin === "anonymous" ? q.credentials = "omit" : q.credentials = "same-origin", q;
  }
  function o(N) {
    if (N.ep) return;
    N.ep = true;
    const q = A(N);
    fetch(N.href, q);
  }
})();
function Bd(v) {
  return v && v.__esModule && Object.prototype.hasOwnProperty.call(v, "default") ? v.default : v;
}
var hf = { exports: {} }, Ru = {};
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Td;
function ny() {
  if (Td) return Ru;
  Td = 1;
  var v = Symbol.for("react.transitional.element"), E = Symbol.for("react.fragment");
  function A(o, N, q) {
    var V = null;
    if (q !== void 0 && (V = "" + q), N.key !== void 0 && (V = "" + N.key), "key" in N) {
      q = {};
      for (var P in N) P !== "key" && (q[P] = N[P]);
    } else q = N;
    return N = q.ref, { $$typeof: v, type: o, key: V, ref: N !== void 0 ? N : null, props: q };
  }
  return Ru.Fragment = E, Ru.jsx = A, Ru.jsxs = A, Ru;
}
var Ed;
function iy() {
  return Ed || (Ed = 1, hf.exports = ny()), hf.exports;
}
var T = iy(), _f = { exports: {} }, Z = {};
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ad;
function cy() {
  if (Ad) return Z;
  Ad = 1;
  var v = Symbol.for("react.transitional.element"), E = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), q = Symbol.for("react.consumer"), V = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), z = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), B = Symbol.iterator;
  function Rl(m) {
    return m === null || typeof m != "object" ? null : (m = B && m[B] || m["@@iterator"], typeof m == "function" ? m : null);
  }
  var rl = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Hl = Object.assign, gl = {};
  function Sl(m, G, O) {
    this.props = m, this.context = G, this.refs = gl, this.updater = O || rl;
  }
  Sl.prototype.isReactComponent = {}, Sl.prototype.setState = function(m, G) {
    if (typeof m != "object" && typeof m != "function" && m != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, m, G, "setState");
  }, Sl.prototype.forceUpdate = function(m) {
    this.updater.enqueueForceUpdate(this, m, "forceUpdate");
  };
  function Ql() {
  }
  Ql.prototype = Sl.prototype;
  function Gl(m, G, O) {
    this.props = m, this.context = G, this.refs = gl, this.updater = O || rl;
  }
  var Al = Gl.prototype = new Ql();
  Al.constructor = Gl, Hl(Al, Sl.prototype), Al.isPureReactComponent = true;
  var Pl = Array.isArray;
  function Bl() {
  }
  var W = { H: null, A: null, T: null, S: null }, Zl = Object.prototype.hasOwnProperty;
  function mt(m, G, O) {
    var D = O.ref;
    return { $$typeof: v, type: m, key: G, ref: D !== void 0 ? D : null, props: O };
  }
  function Bt(m, G) {
    return mt(m.type, G, m.props);
  }
  function ot(m) {
    return typeof m == "object" && m !== null && m.$$typeof === v;
  }
  function xl(m) {
    var G = { "=": "=0", ":": "=2" };
    return "$" + m.replace(/[=:]/g, function(O) {
      return G[O];
    });
  }
  var xt = /\/+/g;
  function zt(m, G) {
    return typeof m == "object" && m !== null && m.key != null ? xl("" + m.key) : G.toString(36);
  }
  function dt(m) {
    switch (m.status) {
      case "fulfilled":
        return m.value;
      case "rejected":
        throw m.reason;
      default:
        switch (typeof m.status == "string" ? m.then(Bl, Bl) : (m.status = "pending", m.then(function(G) {
          m.status === "pending" && (m.status = "fulfilled", m.value = G);
        }, function(G) {
          m.status === "pending" && (m.status = "rejected", m.reason = G);
        })), m.status) {
          case "fulfilled":
            return m.value;
          case "rejected":
            throw m.reason;
        }
    }
    throw m;
  }
  function _(m, G, O, D, Q) {
    var X = typeof m;
    (X === "undefined" || X === "boolean") && (m = null);
    var al = false;
    if (m === null) al = true;
    else switch (X) {
      case "bigint":
      case "string":
      case "number":
        al = true;
        break;
      case "object":
        switch (m.$$typeof) {
          case v:
          case E:
            al = true;
            break;
          case J:
            return al = m._init, _(al(m._payload), G, O, D, Q);
        }
    }
    if (al) return Q = Q(m), al = D === "" ? "." + zt(m, 0) : D, Pl(Q) ? (O = "", al != null && (O = al.replace(xt, "$&/") + "/"), _(Q, G, O, "", function(Ra) {
      return Ra;
    })) : Q != null && (ot(Q) && (Q = Bt(Q, O + (Q.key == null || m && m.key === Q.key ? "" : ("" + Q.key).replace(xt, "$&/") + "/") + al)), G.push(Q)), 1;
    al = 0;
    var Vl = D === "" ? "." : D + ":";
    if (Pl(m)) for (var vl = 0; vl < m.length; vl++) D = m[vl], X = Vl + zt(D, vl), al += _(D, G, O, X, Q);
    else if (vl = Rl(m), typeof vl == "function") for (m = vl.call(m), vl = 0; !(D = m.next()).done; ) D = D.value, X = Vl + zt(D, vl++), al += _(D, G, O, X, Q);
    else if (X === "object") {
      if (typeof m.then == "function") return _(dt(m), G, O, D, Q);
      throw G = String(m), Error("Objects are not valid as a React child (found: " + (G === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : G) + "). If you meant to render a collection of children, use an array instead.");
    }
    return al;
  }
  function p(m, G, O) {
    if (m == null) return m;
    var D = [], Q = 0;
    return _(m, D, "", "", function(X) {
      return G.call(O, X, Q++);
    }), D;
  }
  function x(m) {
    if (m._status === -1) {
      var G = m._result;
      G = G(), G.then(function(O) {
        (m._status === 0 || m._status === -1) && (m._status = 1, m._result = O);
      }, function(O) {
        (m._status === 0 || m._status === -1) && (m._status = 2, m._result = O);
      }), m._status === -1 && (m._status = 0, m._result = G);
    }
    if (m._status === 1) return m._result.default;
    throw m._result;
  }
  var nl = typeof reportError == "function" ? reportError : function(m) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var G = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof m == "object" && m !== null && typeof m.message == "string" ? String(m.message) : String(m), error: m });
      if (!window.dispatchEvent(G)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", m);
      return;
    }
    console.error(m);
  }, tl = { map: p, forEach: function(m, G, O) {
    p(m, function() {
      G.apply(this, arguments);
    }, O);
  }, count: function(m) {
    var G = 0;
    return p(m, function() {
      G++;
    }), G;
  }, toArray: function(m) {
    return p(m, function(G) {
      return G;
    }) || [];
  }, only: function(m) {
    if (!ot(m)) throw Error("React.Children.only expected to receive a single React element child.");
    return m;
  } };
  return Z.Activity = H, Z.Children = tl, Z.Component = Sl, Z.Fragment = A, Z.Profiler = N, Z.PureComponent = Gl, Z.StrictMode = o, Z.Suspense = U, Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, Z.__COMPILER_RUNTIME = { __proto__: null, c: function(m) {
    return W.H.useMemoCache(m);
  } }, Z.cache = function(m) {
    return function() {
      return m.apply(null, arguments);
    };
  }, Z.cacheSignal = function() {
    return null;
  }, Z.cloneElement = function(m, G, O) {
    if (m == null) throw Error("The argument must be a React element, but you passed " + m + ".");
    var D = Hl({}, m.props), Q = m.key;
    if (G != null) for (X in G.key !== void 0 && (Q = "" + G.key), G) !Zl.call(G, X) || X === "key" || X === "__self" || X === "__source" || X === "ref" && G.ref === void 0 || (D[X] = G[X]);
    var X = arguments.length - 2;
    if (X === 1) D.children = O;
    else if (1 < X) {
      for (var al = Array(X), Vl = 0; Vl < X; Vl++) al[Vl] = arguments[Vl + 2];
      D.children = al;
    }
    return mt(m.type, Q, D);
  }, Z.createContext = function(m) {
    return m = { $$typeof: V, _currentValue: m, _currentValue2: m, _threadCount: 0, Provider: null, Consumer: null }, m.Provider = m, m.Consumer = { $$typeof: q, _context: m }, m;
  }, Z.createElement = function(m, G, O) {
    var D, Q = {}, X = null;
    if (G != null) for (D in G.key !== void 0 && (X = "" + G.key), G) Zl.call(G, D) && D !== "key" && D !== "__self" && D !== "__source" && (Q[D] = G[D]);
    var al = arguments.length - 2;
    if (al === 1) Q.children = O;
    else if (1 < al) {
      for (var Vl = Array(al), vl = 0; vl < al; vl++) Vl[vl] = arguments[vl + 2];
      Q.children = Vl;
    }
    if (m && m.defaultProps) for (D in al = m.defaultProps, al) Q[D] === void 0 && (Q[D] = al[D]);
    return mt(m, X, Q);
  }, Z.createRef = function() {
    return { current: null };
  }, Z.forwardRef = function(m) {
    return { $$typeof: P, render: m };
  }, Z.isValidElement = ot, Z.lazy = function(m) {
    return { $$typeof: J, _payload: { _status: -1, _result: m }, _init: x };
  }, Z.memo = function(m, G) {
    return { $$typeof: z, type: m, compare: G === void 0 ? null : G };
  }, Z.startTransition = function(m) {
    var G = W.T, O = {};
    W.T = O;
    try {
      var D = m(), Q = W.S;
      Q !== null && Q(O, D), typeof D == "object" && D !== null && typeof D.then == "function" && D.then(Bl, nl);
    } catch (X) {
      nl(X);
    } finally {
      G !== null && O.types !== null && (G.types = O.types), W.T = G;
    }
  }, Z.unstable_useCacheRefresh = function() {
    return W.H.useCacheRefresh();
  }, Z.use = function(m) {
    return W.H.use(m);
  }, Z.useActionState = function(m, G, O) {
    return W.H.useActionState(m, G, O);
  }, Z.useCallback = function(m, G) {
    return W.H.useCallback(m, G);
  }, Z.useContext = function(m) {
    return W.H.useContext(m);
  }, Z.useDebugValue = function() {
  }, Z.useDeferredValue = function(m, G) {
    return W.H.useDeferredValue(m, G);
  }, Z.useEffect = function(m, G) {
    return W.H.useEffect(m, G);
  }, Z.useEffectEvent = function(m) {
    return W.H.useEffectEvent(m);
  }, Z.useId = function() {
    return W.H.useId();
  }, Z.useImperativeHandle = function(m, G, O) {
    return W.H.useImperativeHandle(m, G, O);
  }, Z.useInsertionEffect = function(m, G) {
    return W.H.useInsertionEffect(m, G);
  }, Z.useLayoutEffect = function(m, G) {
    return W.H.useLayoutEffect(m, G);
  }, Z.useMemo = function(m, G) {
    return W.H.useMemo(m, G);
  }, Z.useOptimistic = function(m, G) {
    return W.H.useOptimistic(m, G);
  }, Z.useReducer = function(m, G, O) {
    return W.H.useReducer(m, G, O);
  }, Z.useRef = function(m) {
    return W.H.useRef(m);
  }, Z.useState = function(m) {
    return W.H.useState(m);
  }, Z.useSyncExternalStore = function(m, G, O) {
    return W.H.useSyncExternalStore(m, G, O);
  }, Z.useTransition = function() {
    return W.H.useTransition();
  }, Z.version = "19.2.8", Z;
}
var pd;
function Ef() {
  return pd || (pd = 1, _f.exports = cy()), _f.exports;
}
var cl = Ef();
const fy = Bd(cl);
var Sf = { exports: {} }, Hu = {}, bf = { exports: {} }, Mf = {};
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Od;
function sy() {
  return Od || (Od = 1, (function(v) {
    function E(_, p) {
      var x = _.length;
      _.push(p);
      l: for (; 0 < x; ) {
        var nl = x - 1 >>> 1, tl = _[nl];
        if (0 < N(tl, p)) _[nl] = p, _[x] = tl, x = nl;
        else break l;
      }
    }
    function A(_) {
      return _.length === 0 ? null : _[0];
    }
    function o(_) {
      if (_.length === 0) return null;
      var p = _[0], x = _.pop();
      if (x !== p) {
        _[0] = x;
        l: for (var nl = 0, tl = _.length, m = tl >>> 1; nl < m; ) {
          var G = 2 * (nl + 1) - 1, O = _[G], D = G + 1, Q = _[D];
          if (0 > N(O, x)) D < tl && 0 > N(Q, O) ? (_[nl] = Q, _[D] = x, nl = D) : (_[nl] = O, _[G] = x, nl = G);
          else if (D < tl && 0 > N(Q, x)) _[nl] = Q, _[D] = x, nl = D;
          else break l;
        }
      }
      return p;
    }
    function N(_, p) {
      var x = _.sortIndex - p.sortIndex;
      return x !== 0 ? x : _.id - p.id;
    }
    if (v.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var q = performance;
      v.unstable_now = function() {
        return q.now();
      };
    } else {
      var V = Date, P = V.now();
      v.unstable_now = function() {
        return V.now() - P;
      };
    }
    var U = [], z = [], J = 1, H = null, B = 3, Rl = false, rl = false, Hl = false, gl = false, Sl = typeof setTimeout == "function" ? setTimeout : null, Ql = typeof clearTimeout == "function" ? clearTimeout : null, Gl = typeof setImmediate < "u" ? setImmediate : null;
    function Al(_) {
      for (var p = A(z); p !== null; ) {
        if (p.callback === null) o(z);
        else if (p.startTime <= _) o(z), p.sortIndex = p.expirationTime, E(U, p);
        else break;
        p = A(z);
      }
    }
    function Pl(_) {
      if (Hl = false, Al(_), !rl) if (A(U) !== null) rl = true, Bl || (Bl = true, xl());
      else {
        var p = A(z);
        p !== null && dt(Pl, p.startTime - _);
      }
    }
    var Bl = false, W = -1, Zl = 5, mt = -1;
    function Bt() {
      return gl ? true : !(v.unstable_now() - mt < Zl);
    }
    function ot() {
      if (gl = false, Bl) {
        var _ = v.unstable_now();
        mt = _;
        var p = true;
        try {
          l: {
            rl = false, Hl && (Hl = false, Ql(W), W = -1), Rl = true;
            var x = B;
            try {
              t: {
                for (Al(_), H = A(U); H !== null && !(H.expirationTime > _ && Bt()); ) {
                  var nl = H.callback;
                  if (typeof nl == "function") {
                    H.callback = null, B = H.priorityLevel;
                    var tl = nl(H.expirationTime <= _);
                    if (_ = v.unstable_now(), typeof tl == "function") {
                      H.callback = tl, Al(_), p = true;
                      break t;
                    }
                    H === A(U) && o(U), Al(_);
                  } else o(U);
                  H = A(U);
                }
                if (H !== null) p = true;
                else {
                  var m = A(z);
                  m !== null && dt(Pl, m.startTime - _), p = false;
                }
              }
              break l;
            } finally {
              H = null, B = x, Rl = false;
            }
            p = void 0;
          }
        } finally {
          p ? xl() : Bl = false;
        }
      }
    }
    var xl;
    if (typeof Gl == "function") xl = function() {
      Gl(ot);
    };
    else if (typeof MessageChannel < "u") {
      var xt = new MessageChannel(), zt = xt.port2;
      xt.port1.onmessage = ot, xl = function() {
        zt.postMessage(null);
      };
    } else xl = function() {
      Sl(ot, 0);
    };
    function dt(_, p) {
      W = Sl(function() {
        _(v.unstable_now());
      }, p);
    }
    v.unstable_IdlePriority = 5, v.unstable_ImmediatePriority = 1, v.unstable_LowPriority = 4, v.unstable_NormalPriority = 3, v.unstable_Profiling = null, v.unstable_UserBlockingPriority = 2, v.unstable_cancelCallback = function(_) {
      _.callback = null;
    }, v.unstable_forceFrameRate = function(_) {
      0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Zl = 0 < _ ? Math.floor(1e3 / _) : 5;
    }, v.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, v.unstable_next = function(_) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var p = 3;
          break;
        default:
          p = B;
      }
      var x = B;
      B = p;
      try {
        return _();
      } finally {
        B = x;
      }
    }, v.unstable_requestPaint = function() {
      gl = true;
    }, v.unstable_runWithPriority = function(_, p) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var x = B;
      B = _;
      try {
        return p();
      } finally {
        B = x;
      }
    }, v.unstable_scheduleCallback = function(_, p, x) {
      var nl = v.unstable_now();
      switch (typeof x == "object" && x !== null ? (x = x.delay, x = typeof x == "number" && 0 < x ? nl + x : nl) : x = nl, _) {
        case 1:
          var tl = -1;
          break;
        case 2:
          tl = 250;
          break;
        case 5:
          tl = 1073741823;
          break;
        case 4:
          tl = 1e4;
          break;
        default:
          tl = 5e3;
      }
      return tl = x + tl, _ = { id: J++, callback: p, priorityLevel: _, startTime: x, expirationTime: tl, sortIndex: -1 }, x > nl ? (_.sortIndex = x, E(z, _), A(U) === null && _ === A(z) && (Hl ? (Ql(W), W = -1) : Hl = true, dt(Pl, x - nl))) : (_.sortIndex = tl, E(U, _), rl || Rl || (rl = true, Bl || (Bl = true, xl()))), _;
    }, v.unstable_shouldYield = Bt, v.unstable_wrapCallback = function(_) {
      var p = B;
      return function() {
        var x = B;
        B = p;
        try {
          return _.apply(this, arguments);
        } finally {
          B = x;
        }
      };
    };
  })(Mf)), Mf;
}
var Dd;
function my() {
  return Dd || (Dd = 1, bf.exports = sy()), bf.exports;
}
var zf = { exports: {} }, kl = {};
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Nd;
function oy() {
  if (Nd) return kl;
  Nd = 1;
  var v = Ef();
  function E(U) {
    var z = "https://react.dev/errors/" + U;
    if (1 < arguments.length) {
      z += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var J = 2; J < arguments.length; J++) z += "&args[]=" + encodeURIComponent(arguments[J]);
    }
    return "Minified React error #" + U + "; visit " + z + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function A() {
  }
  var o = { d: { f: A, r: function() {
    throw Error(E(522));
  }, D: A, C: A, L: A, m: A, X: A, S: A, M: A }, p: 0, findDOMNode: null }, N = Symbol.for("react.portal");
  function q(U, z, J) {
    var H = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: N, key: H == null ? null : "" + H, children: U, containerInfo: z, implementation: J };
  }
  var V = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function P(U, z) {
    if (U === "font") return "";
    if (typeof z == "string") return z === "use-credentials" ? z : "";
  }
  return kl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, kl.createPortal = function(U, z) {
    var J = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!z || z.nodeType !== 1 && z.nodeType !== 9 && z.nodeType !== 11) throw Error(E(299));
    return q(U, z, null, J);
  }, kl.flushSync = function(U) {
    var z = V.T, J = o.p;
    try {
      if (V.T = null, o.p = 2, U) return U();
    } finally {
      V.T = z, o.p = J, o.d.f();
    }
  }, kl.preconnect = function(U, z) {
    typeof U == "string" && (z ? (z = z.crossOrigin, z = typeof z == "string" ? z === "use-credentials" ? z : "" : void 0) : z = null, o.d.C(U, z));
  }, kl.prefetchDNS = function(U) {
    typeof U == "string" && o.d.D(U);
  }, kl.preinit = function(U, z) {
    if (typeof U == "string" && z && typeof z.as == "string") {
      var J = z.as, H = P(J, z.crossOrigin), B = typeof z.integrity == "string" ? z.integrity : void 0, Rl = typeof z.fetchPriority == "string" ? z.fetchPriority : void 0;
      J === "style" ? o.d.S(U, typeof z.precedence == "string" ? z.precedence : void 0, { crossOrigin: H, integrity: B, fetchPriority: Rl }) : J === "script" && o.d.X(U, { crossOrigin: H, integrity: B, fetchPriority: Rl, nonce: typeof z.nonce == "string" ? z.nonce : void 0 });
    }
  }, kl.preinitModule = function(U, z) {
    if (typeof U == "string") if (typeof z == "object" && z !== null) {
      if (z.as == null || z.as === "script") {
        var J = P(z.as, z.crossOrigin);
        o.d.M(U, { crossOrigin: J, integrity: typeof z.integrity == "string" ? z.integrity : void 0, nonce: typeof z.nonce == "string" ? z.nonce : void 0 });
      }
    } else z == null && o.d.M(U);
  }, kl.preload = function(U, z) {
    if (typeof U == "string" && typeof z == "object" && z !== null && typeof z.as == "string") {
      var J = z.as, H = P(J, z.crossOrigin);
      o.d.L(U, J, { crossOrigin: H, integrity: typeof z.integrity == "string" ? z.integrity : void 0, nonce: typeof z.nonce == "string" ? z.nonce : void 0, type: typeof z.type == "string" ? z.type : void 0, fetchPriority: typeof z.fetchPriority == "string" ? z.fetchPriority : void 0, referrerPolicy: typeof z.referrerPolicy == "string" ? z.referrerPolicy : void 0, imageSrcSet: typeof z.imageSrcSet == "string" ? z.imageSrcSet : void 0, imageSizes: typeof z.imageSizes == "string" ? z.imageSizes : void 0, media: typeof z.media == "string" ? z.media : void 0 });
    }
  }, kl.preloadModule = function(U, z) {
    if (typeof U == "string") if (z) {
      var J = P(z.as, z.crossOrigin);
      o.d.m(U, { as: typeof z.as == "string" && z.as !== "script" ? z.as : void 0, crossOrigin: J, integrity: typeof z.integrity == "string" ? z.integrity : void 0 });
    } else o.d.m(U);
  }, kl.requestFormReset = function(U) {
    o.d.r(U);
  }, kl.unstable_batchedUpdates = function(U, z) {
    return U(z);
  }, kl.useFormState = function(U, z, J) {
    return V.H.useFormState(U, z, J);
  }, kl.useFormStatus = function() {
    return V.H.useHostTransitionStatus();
  }, kl.version = "19.2.8", kl;
}
var Ud;
function dy() {
  if (Ud) return zf.exports;
  Ud = 1;
  function v() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
    } catch (E) {
      console.error(E);
    }
  }
  return v(), zf.exports = oy(), zf.exports;
}
/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Cd;
function ry() {
  if (Cd) return Hu;
  Cd = 1;
  var v = my(), E = Ef(), A = dy();
  function o(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++) t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function N(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function q(l) {
    var t = l, a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (a = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function V(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function P(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function U(l) {
    if (q(l) !== l) throw Error(o(188));
  }
  function z(l) {
    var t = l.alternate;
    if (!t) {
      if (t = q(l), t === null) throw Error(o(188));
      return t !== l ? null : l;
    }
    for (var a = l, e = t; ; ) {
      var u = a.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (e = u.return, e !== null) {
          a = e;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === a) return U(u), l;
          if (n === e) return U(u), t;
          n = n.sibling;
        }
        throw Error(o(188));
      }
      if (a.return !== e.return) a = u, e = n;
      else {
        for (var i = false, c = u.child; c; ) {
          if (c === a) {
            i = true, a = u, e = n;
            break;
          }
          if (c === e) {
            i = true, e = u, a = n;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === a) {
              i = true, a = n, e = u;
              break;
            }
            if (c === e) {
              i = true, e = n, a = u;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(o(189));
        }
      }
      if (a.alternate !== e) throw Error(o(190));
    }
    if (a.tag !== 3) throw Error(o(188));
    return a.stateNode.current === a ? l : t;
  }
  function J(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = J(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var H = Object.assign, B = Symbol.for("react.element"), Rl = Symbol.for("react.transitional.element"), rl = Symbol.for("react.portal"), Hl = Symbol.for("react.fragment"), gl = Symbol.for("react.strict_mode"), Sl = Symbol.for("react.profiler"), Ql = Symbol.for("react.consumer"), Gl = Symbol.for("react.context"), Al = Symbol.for("react.forward_ref"), Pl = Symbol.for("react.suspense"), Bl = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), Zl = Symbol.for("react.lazy"), mt = Symbol.for("react.activity"), Bt = Symbol.for("react.memo_cache_sentinel"), ot = Symbol.iterator;
  function xl(l) {
    return l === null || typeof l != "object" ? null : (l = ot && l[ot] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var xt = Symbol.for("react.client.reference");
  function zt(l) {
    if (l == null) return null;
    if (typeof l == "function") return l.$$typeof === xt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Hl:
        return "Fragment";
      case Sl:
        return "Profiler";
      case gl:
        return "StrictMode";
      case Pl:
        return "Suspense";
      case Bl:
        return "SuspenseList";
      case mt:
        return "Activity";
    }
    if (typeof l == "object") switch (l.$$typeof) {
      case rl:
        return "Portal";
      case Gl:
        return l.displayName || "Context";
      case Ql:
        return (l._context.displayName || "Context") + ".Consumer";
      case Al:
        var t = l.render;
        return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
      case W:
        return t = l.displayName || null, t !== null ? t : zt(l.type) || "Memo";
      case Zl:
        t = l._payload, l = l._init;
        try {
          return zt(l(t));
        } catch {
        }
    }
    return null;
  }
  var dt = Array.isArray, _ = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, p = A.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, x = { pending: false, data: null, method: null, action: null }, nl = [], tl = -1;
  function m(l) {
    return { current: l };
  }
  function G(l) {
    0 > tl || (l.current = nl[tl], nl[tl] = null, tl--);
  }
  function O(l, t) {
    tl++, nl[tl] = l.current, l.current = t;
  }
  var D = m(null), Q = m(null), X = m(null), al = m(null);
  function Vl(l, t) {
    switch (O(X, t), O(Q, l), O(D, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? wo(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI) t = wo(t), l = Wo(t, l);
        else switch (l) {
          case "svg":
            l = 1;
            break;
          case "math":
            l = 2;
            break;
          default:
            l = 0;
        }
    }
    G(D), O(D, l);
  }
  function vl() {
    G(D), G(Q), G(X);
  }
  function Ra(l) {
    l.memoizedState !== null && O(al, l);
    var t = D.current, a = Wo(t, l.type);
    t !== a && (O(Q, l), O(D, a));
  }
  function ka(l) {
    Q.current === l && (G(D), G(Q)), al.current === l && (G(al), Du._currentValue = x);
  }
  var Pa, Bu;
  function w(l) {
    if (Pa === void 0) try {
      throw Error();
    } catch (a) {
      var t = a.stack.trim().match(/\n( *(at )?)/);
      Pa = t && t[1] || "", Bu = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
    }
    return `
` + Pa + l + Bu;
  }
  var pl = false;
  function Gt(l, t) {
    if (!l || pl) return "";
    pl = true;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var e = { DetermineComponentFrameRoot: function() {
        try {
          if (t) {
            var M = function() {
              throw Error();
            };
            if (Object.defineProperty(M.prototype, "props", { set: function() {
              throw Error();
            } }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(M, []);
              } catch (h) {
                var g = h;
              }
              Reflect.construct(l, [], M);
            } else {
              try {
                M.call();
              } catch (h) {
                g = h;
              }
              l.call(M.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (h) {
              g = h;
            }
            (M = l()) && typeof M.catch == "function" && M.catch(function() {
            });
          }
        } catch (h) {
          if (h && g && typeof h.stack == "string") return [h.stack, g.stack];
        }
        return [null, null];
      } };
      e.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot, "name");
      u && u.configurable && Object.defineProperty(e.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
      var n = e.DetermineComponentFrameRoot(), i = n[0], c = n[1];
      if (i && c) {
        var f = i.split(`
`), y = c.split(`
`);
        for (u = e = 0; e < f.length && !f[e].includes("DetermineComponentFrameRoot"); ) e++;
        for (; u < y.length && !y[u].includes("DetermineComponentFrameRoot"); ) u++;
        if (e === f.length || u === y.length) for (e = f.length - 1, u = y.length - 1; 1 <= e && 0 <= u && f[e] !== y[u]; ) u--;
        for (; 1 <= e && 0 <= u; e--, u--) if (f[e] !== y[u]) {
          if (e !== 1 || u !== 1) do
            if (e--, u--, 0 > u || f[e] !== y[u]) {
              var S = `
` + f[e].replace(" at new ", " at ");
              return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)), S;
            }
          while (1 <= e && 0 <= u);
          break;
        }
      }
    } finally {
      pl = false, Error.prepareStackTrace = a;
    }
    return (a = l ? l.displayName || l.name : "") ? w(a) : "";
  }
  function jl(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return w(l.type);
      case 16:
        return w("Lazy");
      case 13:
        return l.child !== t && t !== null ? w("Suspense Fallback") : w("Suspense");
      case 19:
        return w("SuspenseList");
      case 0:
      case 15:
        return Gt(l.type, false);
      case 11:
        return Gt(l.type.render, false);
      case 1:
        return Gt(l.type, true);
      case 31:
        return w("Activity");
      default:
        return "";
    }
  }
  function lt(l) {
    try {
      var t = "", a = null;
      do
        t += jl(l, a), a = l, l = l.return;
      while (l);
      return t;
    } catch (e) {
      return `
Error generating stack: ` + e.message + `
` + e.stack;
    }
  }
  var Il = Object.prototype.hasOwnProperty, Fl = v.unstable_scheduleCallback, Yt = v.unstable_cancelCallback, Ye = v.unstable_shouldYield, Je = v.unstable_requestPaint, Ol = v.unstable_now, ei = v.unstable_getCurrentPriorityLevel, at = v.unstable_ImmediatePriority, le = v.unstable_UserBlockingPriority, xu = v.unstable_NormalPriority, Jd = v.unstable_LowPriority, Af = v.unstable_IdlePriority, Xd = v.log, Qd = v.unstable_setDisableYieldValue, Xe = null, rt = null;
  function fa(l) {
    if (typeof Xd == "function" && Qd(l), rt && typeof rt.setStrictMode == "function") try {
      rt.setStrictMode(Xe, l);
    } catch {
    }
  }
  var yt = Math.clz32 ? Math.clz32 : Ld, Zd = Math.log, Vd = Math.LN2;
  function Ld(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Zd(l) / Vd | 0) | 0;
  }
  var Yu = 256, Ju = 262144, Xu = 4194304;
  function Ha(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Qu(l, t, a) {
    var e = l.pendingLanes;
    if (e === 0) return 0;
    var u = 0, n = l.suspendedLanes, i = l.pingedLanes;
    l = l.warmLanes;
    var c = e & 134217727;
    return c !== 0 ? (e = c & ~n, e !== 0 ? u = Ha(e) : (i &= c, i !== 0 ? u = Ha(i) : a || (a = c & ~l, a !== 0 && (u = Ha(a))))) : (c = e & ~n, c !== 0 ? u = Ha(c) : i !== 0 ? u = Ha(i) : a || (a = e & ~l, a !== 0 && (u = Ha(a)))), u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u, a = t & -t, n >= a || n === 32 && (a & 4194048) !== 0) ? t : u;
  }
  function Qe(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Kd(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function pf() {
    var l = Xu;
    return Xu <<= 1, (Xu & 62914560) === 0 && (Xu = 4194304), l;
  }
  function ui(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Ze(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function wd(l, t, a, e, u, n) {
    var i = l.pendingLanes;
    l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
    var c = l.entanglements, f = l.expirationTimes, y = l.hiddenUpdates;
    for (a = i & ~a; 0 < a; ) {
      var S = 31 - yt(a), M = 1 << S;
      c[S] = 0, f[S] = -1;
      var g = y[S];
      if (g !== null) for (y[S] = null, S = 0; S < g.length; S++) {
        var h = g[S];
        h !== null && (h.lane &= -536870913);
      }
      a &= ~M;
    }
    e !== 0 && Of(l, e, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t));
  }
  function Of(l, t, a) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var e = 31 - yt(t);
    l.entangledLanes |= t, l.entanglements[e] = l.entanglements[e] | 1073741824 | a & 261930;
  }
  function Df(l, t) {
    var a = l.entangledLanes |= t;
    for (l = l.entanglements; a; ) {
      var e = 31 - yt(a), u = 1 << e;
      u & t | l[e] & t && (l[e] |= t), a &= ~u;
    }
  }
  function Nf(l, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : ni(a), (a & (l.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function ni(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function ii(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Uf() {
    var l = p.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : hd(l.type));
  }
  function Cf(l, t) {
    var a = p.p;
    try {
      return p.p = l, t();
    } finally {
      p.p = a;
    }
  }
  var sa = Math.random().toString(36).slice(2), Ll = "__reactFiber$" + sa, et = "__reactProps$" + sa, te = "__reactContainer$" + sa, ci = "__reactEvents$" + sa, Wd = "__reactListeners$" + sa, $d = "__reactHandles$" + sa, Rf = "__reactResources$" + sa, Ve = "__reactMarker$" + sa;
  function fi(l) {
    delete l[Ll], delete l[et], delete l[ci], delete l[Wd], delete l[$d];
  }
  function ae(l) {
    var t = l[Ll];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if (t = a[te] || a[Ll]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null) for (l = td(l); l !== null; ) {
          if (a = l[Ll]) return a;
          l = td(l);
        }
        return t;
      }
      l = a, a = l.parentNode;
    }
    return null;
  }
  function ee(l) {
    if (l = l[Ll] || l[te]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return l;
    }
    return null;
  }
  function Le(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(o(33));
  }
  function ue(l) {
    var t = l[Rf];
    return t || (t = l[Rf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Yl(l) {
    l[Ve] = true;
  }
  var Hf = /* @__PURE__ */ new Set(), jf = {};
  function ja(l, t) {
    ne(l, t), ne(l + "Capture", t);
  }
  function ne(l, t) {
    for (jf[l] = t, l = 0; l < t.length; l++) Hf.add(t[l]);
  }
  var Id = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), qf = {}, Bf = {};
  function Fd(l) {
    return Il.call(Bf, l) ? true : Il.call(qf, l) ? false : Id.test(l) ? Bf[l] = true : (qf[l] = true, false);
  }
  function Zu(l, t, a) {
    if (Fd(t)) if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
          l.removeAttribute(t);
          return;
        case "boolean":
          var e = t.toLowerCase().slice(0, 5);
          if (e !== "data-" && e !== "aria-") {
            l.removeAttribute(t);
            return;
          }
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Vu(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Vt(l, t, a, e) {
    if (e === null) l.removeAttribute(a);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + e);
    }
  }
  function Tt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function xf(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function kd(l, t, a) {
    var e = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (!l.hasOwnProperty(t) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
      var u = e.get, n = e.set;
      return Object.defineProperty(l, t, { configurable: true, get: function() {
        return u.call(this);
      }, set: function(i) {
        a = "" + i, n.call(this, i);
      } }), Object.defineProperty(l, t, { enumerable: e.enumerable }), { getValue: function() {
        return a;
      }, setValue: function(i) {
        a = "" + i;
      }, stopTracking: function() {
        l._valueTracker = null, delete l[t];
      } };
    }
  }
  function si(l) {
    if (!l._valueTracker) {
      var t = xf(l) ? "checked" : "value";
      l._valueTracker = kd(l, t, "" + l[t]);
    }
  }
  function Yf(l) {
    if (!l) return false;
    var t = l._valueTracker;
    if (!t) return true;
    var a = t.getValue(), e = "";
    return l && (e = xf(l) ? l.checked ? "true" : "false" : l.value), l = e, l !== a ? (t.setValue(l), true) : false;
  }
  function Lu(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Pd = /[\n"\\]/g;
  function Et(l) {
    return l.replace(Pd, function(t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function mi(l, t, a, e, u, n, i, c) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + Tt(t)) : l.value !== "" + Tt(t) && (l.value = "" + Tt(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? oi(l, i, Tt(t)) : a != null ? oi(l, i, Tt(a)) : e != null && l.removeAttribute("value"), u == null && n != null && (l.defaultChecked = !!n), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + Tt(c) : l.removeAttribute("name");
  }
  function Jf(l, t, a, e, u, n, i, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        si(l);
        return;
      }
      a = a != null ? "" + Tt(a) : "", t = t != null ? "" + Tt(t) : a, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    e = e ?? u, e = typeof e != "function" && typeof e != "symbol" && !!e, l.checked = c ? l.checked : !!e, l.defaultChecked = !!e, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), si(l);
  }
  function oi(l, t, a) {
    t === "number" && Lu(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a);
  }
  function ie(l, t, a, e) {
    if (l = l.options, t) {
      t = {};
      for (var u = 0; u < a.length; u++) t["$" + a[u]] = true;
      for (a = 0; a < l.length; a++) u = t.hasOwnProperty("$" + l[a].value), l[a].selected !== u && (l[a].selected = u), u && e && (l[a].defaultSelected = true);
    } else {
      for (a = "" + Tt(a), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === a) {
          l[u].selected = true, e && (l[u].defaultSelected = true);
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = true);
    }
  }
  function Xf(l, t, a) {
    if (t != null && (t = "" + Tt(t), t !== l.value && (l.value = t), a == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + Tt(a) : "";
  }
  function Qf(l, t, a, e) {
    if (t == null) {
      if (e != null) {
        if (a != null) throw Error(o(92));
        if (dt(e)) {
          if (1 < e.length) throw Error(o(93));
          e = e[0];
        }
        a = e;
      }
      a == null && (a = ""), t = a;
    }
    a = Tt(t), l.defaultValue = a, e = l.textContent, e === a && e !== "" && e !== null && (l.value = e), si(l);
  }
  function ce(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var lr = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Zf(l, t, a) {
    var e = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? e ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : e ? l.setProperty(t, a) : typeof a != "number" || a === 0 || lr.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px";
  }
  function Vf(l, t, a) {
    if (t != null && typeof t != "object") throw Error(o(62));
    if (l = l.style, a != null) {
      for (var e in a) !a.hasOwnProperty(e) || t != null && t.hasOwnProperty(e) || (e.indexOf("--") === 0 ? l.setProperty(e, "") : e === "float" ? l.cssFloat = "" : l[e] = "");
      for (var u in t) e = t[u], t.hasOwnProperty(u) && a[u] !== e && Zf(l, u, e);
    } else for (var n in t) t.hasOwnProperty(n) && Zf(l, n, t[n]);
  }
  function di(l) {
    if (l.indexOf("-") === -1) return false;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return false;
      default:
        return true;
    }
  }
  var tr = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), ar = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ku(l) {
    return ar.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Lt() {
  }
  var ri = null;
  function yi(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var fe = null, se = null;
  function Lf(l) {
    var t = ee(l);
    if (t && (l = t.stateNode)) {
      var a = l[et] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (mi(l, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), t = a.name, a.type === "radio" && t != null) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll('input[name="' + Et("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++) {
              var e = a[t];
              if (e !== l && e.form === l.form) {
                var u = e[et] || null;
                if (!u) throw Error(o(90));
                mi(e, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name);
              }
            }
            for (t = 0; t < a.length; t++) e = a[t], e.form === l.form && Yf(e);
          }
          break l;
        case "textarea":
          Xf(l, a.value, a.defaultValue);
          break l;
        case "select":
          t = a.value, t != null && ie(l, !!a.multiple, t, false);
      }
    }
  }
  var vi = false;
  function Kf(l, t, a) {
    if (vi) return l(t, a);
    vi = true;
    try {
      var e = l(t);
      return e;
    } finally {
      if (vi = false, (fe !== null || se !== null) && (Hn(), fe && (t = fe, l = se, se = fe = null, Lf(t), l))) for (t = 0; t < l.length; t++) Lf(l[t]);
    }
  }
  function Ke(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var e = a[et] || null;
    if (e === null) return null;
    a = e[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (e = !e.disabled) || (l = l.type, e = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !e;
        break l;
      default:
        l = false;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(o(231, t, typeof a));
    return a;
  }
  var Kt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), gi = false;
  if (Kt) try {
    var we = {};
    Object.defineProperty(we, "passive", { get: function() {
      gi = true;
    } }), window.addEventListener("test", we, we), window.removeEventListener("test", we, we);
  } catch {
    gi = false;
  }
  var ma = null, hi = null, wu = null;
  function wf() {
    if (wu) return wu;
    var l, t = hi, a = t.length, e, u = "value" in ma ? ma.value : ma.textContent, n = u.length;
    for (l = 0; l < a && t[l] === u[l]; l++) ;
    var i = a - l;
    for (e = 1; e <= i && t[a - e] === u[n - e]; e++) ;
    return wu = u.slice(l, 1 < e ? 1 - e : void 0);
  }
  function Wu(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function $u() {
    return true;
  }
  function Wf() {
    return false;
  }
  function ut(l) {
    function t(a, e, u, n, i) {
      this._reactName = a, this._targetInst = u, this.type = e, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var c in l) l.hasOwnProperty(c) && (a = l[c], this[c] = a ? a(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === false) ? $u : Wf, this.isPropagationStopped = Wf, this;
    }
    return H(t.prototype, { preventDefault: function() {
      this.defaultPrevented = true;
      var a = this.nativeEvent;
      a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = false), this.isDefaultPrevented = $u);
    }, stopPropagation: function() {
      var a = this.nativeEvent;
      a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = true), this.isPropagationStopped = $u);
    }, persist: function() {
    }, isPersistent: $u }), t;
  }
  var qa = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(l) {
    return l.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Iu = ut(qa), We = H({}, qa, { view: 0, detail: 0 }), er = ut(We), _i, Si, $e, Fu = H({}, We, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Mi, button: 0, buttons: 0, relatedTarget: function(l) {
    return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
  }, movementX: function(l) {
    return "movementX" in l ? l.movementX : (l !== $e && ($e && l.type === "mousemove" ? (_i = l.screenX - $e.screenX, Si = l.screenY - $e.screenY) : Si = _i = 0, $e = l), _i);
  }, movementY: function(l) {
    return "movementY" in l ? l.movementY : Si;
  } }), $f = ut(Fu), ur = H({}, Fu, { dataTransfer: 0 }), nr = ut(ur), ir = H({}, We, { relatedTarget: 0 }), bi = ut(ir), cr = H({}, qa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), fr = ut(cr), sr = H({}, qa, { clipboardData: function(l) {
    return "clipboardData" in l ? l.clipboardData : window.clipboardData;
  } }), mr = ut(sr), or = H({}, qa, { data: 0 }), If = ut(or), dr = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, rr = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, yr = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function vr(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = yr[l]) ? !!t[l] : false;
  }
  function Mi() {
    return vr;
  }
  var gr = H({}, We, { key: function(l) {
    if (l.key) {
      var t = dr[l.key] || l.key;
      if (t !== "Unidentified") return t;
    }
    return l.type === "keypress" ? (l = Wu(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? rr[l.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Mi, charCode: function(l) {
    return l.type === "keypress" ? Wu(l) : 0;
  }, keyCode: function(l) {
    return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
  }, which: function(l) {
    return l.type === "keypress" ? Wu(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
  } }), hr = ut(gr), _r = H({}, Fu, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ff = ut(_r), Sr = H({}, We, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Mi }), br = ut(Sr), Mr = H({}, qa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), zr = ut(Mr), Gr = H({}, Fu, { deltaX: function(l) {
    return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
  }, deltaY: function(l) {
    return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 }), Tr = ut(Gr), Er = H({}, qa, { newState: 0, oldState: 0 }), Ar = ut(Er), pr = [9, 13, 27, 32], zi = Kt && "CompositionEvent" in window, Ie = null;
  Kt && "documentMode" in document && (Ie = document.documentMode);
  var Or = Kt && "TextEvent" in window && !Ie, kf = Kt && (!zi || Ie && 8 < Ie && 11 >= Ie), Pf = " ", ls = false;
  function ts(l, t) {
    switch (l) {
      case "keyup":
        return pr.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function as(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var me = false;
  function Dr(l, t) {
    switch (l) {
      case "compositionend":
        return as(t);
      case "keypress":
        return t.which !== 32 ? null : (ls = true, Pf);
      case "textInput":
        return l = t.data, l === Pf && ls ? null : l;
      default:
        return null;
    }
  }
  function Nr(l, t) {
    if (me) return l === "compositionend" || !zi && ts(l, t) ? (l = wf(), wu = hi = ma = null, me = false, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return kf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ur = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
  function es(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Ur[l.type] : t === "textarea";
  }
  function us(l, t, a, e) {
    fe ? se ? se.push(e) : se = [e] : fe = e, t = Xn(t, "onChange"), 0 < t.length && (a = new Iu("onChange", "change", null, a, e), l.push({ event: a, listeners: t }));
  }
  var Fe = null, ke = null;
  function Cr(l) {
    Xo(l, 0);
  }
  function ku(l) {
    var t = Le(l);
    if (Yf(t)) return l;
  }
  function ns(l, t) {
    if (l === "change") return t;
  }
  var is = false;
  if (Kt) {
    var Gi;
    if (Kt) {
      var Ti = "oninput" in document;
      if (!Ti) {
        var cs = document.createElement("div");
        cs.setAttribute("oninput", "return;"), Ti = typeof cs.oninput == "function";
      }
      Gi = Ti;
    } else Gi = false;
    is = Gi && (!document.documentMode || 9 < document.documentMode);
  }
  function fs() {
    Fe && (Fe.detachEvent("onpropertychange", ss), ke = Fe = null);
  }
  function ss(l) {
    if (l.propertyName === "value" && ku(ke)) {
      var t = [];
      us(t, ke, l, yi(l)), Kf(Cr, t);
    }
  }
  function Rr(l, t, a) {
    l === "focusin" ? (fs(), Fe = t, ke = a, Fe.attachEvent("onpropertychange", ss)) : l === "focusout" && fs();
  }
  function Hr(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown") return ku(ke);
  }
  function jr(l, t) {
    if (l === "click") return ku(t);
  }
  function qr(l, t) {
    if (l === "input" || l === "change") return ku(t);
  }
  function Br(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var vt = typeof Object.is == "function" ? Object.is : Br;
  function Pe(l, t) {
    if (vt(l, t)) return true;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null) return false;
    var a = Object.keys(l), e = Object.keys(t);
    if (a.length !== e.length) return false;
    for (e = 0; e < a.length; e++) {
      var u = a[e];
      if (!Il.call(t, u) || !vt(l[u], t[u])) return false;
    }
    return true;
  }
  function ms(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function os(l, t) {
    var a = ms(l);
    l = 0;
    for (var e; a; ) {
      if (a.nodeType === 3) {
        if (e = l + a.textContent.length, l <= t && e >= t) return { node: a, offset: t - l };
        l = e;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = ms(a);
    }
  }
  function ds(l, t) {
    return l && t ? l === t ? true : l && l.nodeType === 3 ? false : t && t.nodeType === 3 ? ds(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : false : false;
  }
  function rs(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Lu(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = false;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Lu(l.document);
    }
    return t;
  }
  function Ei(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var xr = Kt && "documentMode" in document && 11 >= document.documentMode, oe = null, Ai = null, lu = null, pi = false;
  function ys(l, t, a) {
    var e = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    pi || oe == null || oe !== Lu(e) || (e = oe, "selectionStart" in e && Ei(e) ? e = { start: e.selectionStart, end: e.selectionEnd } : (e = (e.ownerDocument && e.ownerDocument.defaultView || window).getSelection(), e = { anchorNode: e.anchorNode, anchorOffset: e.anchorOffset, focusNode: e.focusNode, focusOffset: e.focusOffset }), lu && Pe(lu, e) || (lu = e, e = Xn(Ai, "onSelect"), 0 < e.length && (t = new Iu("onSelect", "select", null, t, a), l.push({ event: t, listeners: e }), t.target = oe)));
  }
  function Ba(l, t) {
    var a = {};
    return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a;
  }
  var de = { animationend: Ba("Animation", "AnimationEnd"), animationiteration: Ba("Animation", "AnimationIteration"), animationstart: Ba("Animation", "AnimationStart"), transitionrun: Ba("Transition", "TransitionRun"), transitionstart: Ba("Transition", "TransitionStart"), transitioncancel: Ba("Transition", "TransitionCancel"), transitionend: Ba("Transition", "TransitionEnd") }, Oi = {}, vs = {};
  Kt && (vs = document.createElement("div").style, "AnimationEvent" in window || (delete de.animationend.animation, delete de.animationiteration.animation, delete de.animationstart.animation), "TransitionEvent" in window || delete de.transitionend.transition);
  function xa(l) {
    if (Oi[l]) return Oi[l];
    if (!de[l]) return l;
    var t = de[l], a;
    for (a in t) if (t.hasOwnProperty(a) && a in vs) return Oi[l] = t[a];
    return l;
  }
  var gs = xa("animationend"), hs = xa("animationiteration"), _s = xa("animationstart"), Yr = xa("transitionrun"), Jr = xa("transitionstart"), Xr = xa("transitioncancel"), Ss = xa("transitionend"), bs = /* @__PURE__ */ new Map(), Di = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  Di.push("scrollEnd");
  function Ht(l, t) {
    bs.set(l, t), ja(t, [l]);
  }
  var Pu = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l), error: l });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, At = [], re = 0, Ni = 0;
  function ln() {
    for (var l = re, t = Ni = re = 0; t < l; ) {
      var a = At[t];
      At[t++] = null;
      var e = At[t];
      At[t++] = null;
      var u = At[t];
      At[t++] = null;
      var n = At[t];
      if (At[t++] = null, e !== null && u !== null) {
        var i = e.pending;
        i === null ? u.next = u : (u.next = i.next, i.next = u), e.pending = u;
      }
      n !== 0 && Ms(a, u, n);
    }
  }
  function tn(l, t, a, e) {
    At[re++] = l, At[re++] = t, At[re++] = a, At[re++] = e, Ni |= e, l.lanes |= e, l = l.alternate, l !== null && (l.lanes |= e);
  }
  function Ui(l, t, a, e) {
    return tn(l, t, a, e), an(l);
  }
  function Ya(l, t) {
    return tn(l, null, null, t), an(l);
  }
  function Ms(l, t, a) {
    l.lanes |= a;
    var e = l.alternate;
    e !== null && (e.lanes |= a);
    for (var u = false, n = l.return; n !== null; ) n.childLanes |= a, e = n.alternate, e !== null && (e.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (u = true)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, u && t !== null && (u = 31 - yt(a), l = n.hiddenUpdates, e = l[u], e === null ? l[u] = [t] : e.push(t), t.lane = a | 536870912), n) : null;
  }
  function an(l) {
    if (50 < zu) throw zu = 0, Jc = null, Error(o(185));
    for (var t = l.return; t !== null; ) l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ye = {};
  function Qr(l, t, a, e) {
    this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = e, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function gt(l, t, a, e) {
    return new Qr(l, t, a, e);
  }
  function Ci(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function wt(l, t) {
    var a = l.alternate;
    return a === null ? (a = gt(l.tag, t, l.key, l.mode), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 65011712, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
  }
  function zs(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), l;
  }
  function en(l, t, a, e, u, n) {
    var i = 0;
    if (e = l, typeof l == "function") Ci(l) && (i = 1);
    else if (typeof l == "string") i = w0(l, a, D.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else l: switch (l) {
      case mt:
        return l = gt(31, a, t, u), l.elementType = mt, l.lanes = n, l;
      case Hl:
        return Ja(a.children, u, n, t);
      case gl:
        i = 8, u |= 24;
        break;
      case Sl:
        return l = gt(12, a, t, u | 2), l.elementType = Sl, l.lanes = n, l;
      case Pl:
        return l = gt(13, a, t, u), l.elementType = Pl, l.lanes = n, l;
      case Bl:
        return l = gt(19, a, t, u), l.elementType = Bl, l.lanes = n, l;
      default:
        if (typeof l == "object" && l !== null) switch (l.$$typeof) {
          case Gl:
            i = 10;
            break l;
          case Ql:
            i = 9;
            break l;
          case Al:
            i = 11;
            break l;
          case W:
            i = 14;
            break l;
          case Zl:
            i = 16, e = null;
            break l;
        }
        i = 29, a = Error(o(130, l === null ? "null" : typeof l, "")), e = null;
    }
    return t = gt(i, a, t, u), t.elementType = l, t.type = e, t.lanes = n, t;
  }
  function Ja(l, t, a, e) {
    return l = gt(7, l, e, t), l.lanes = a, l;
  }
  function Ri(l, t, a) {
    return l = gt(6, l, null, t), l.lanes = a, l;
  }
  function Gs(l) {
    var t = gt(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Hi(l, t, a) {
    return t = gt(4, l.children !== null ? l.children : [], l.key, t), t.lanes = a, t.stateNode = { containerInfo: l.containerInfo, pendingChildren: null, implementation: l.implementation }, t;
  }
  var Ts = /* @__PURE__ */ new WeakMap();
  function pt(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = Ts.get(l);
      return a !== void 0 ? a : (t = { value: l, source: t, stack: lt(t) }, Ts.set(l, t), t);
    }
    return { value: l, source: t, stack: lt(t) };
  }
  var ve = [], ge = 0, un = null, tu = 0, Ot = [], Dt = 0, oa = null, Jt = 1, Xt = "";
  function Wt(l, t) {
    ve[ge++] = tu, ve[ge++] = un, un = l, tu = t;
  }
  function Es(l, t, a) {
    Ot[Dt++] = Jt, Ot[Dt++] = Xt, Ot[Dt++] = oa, oa = l;
    var e = Jt;
    l = Xt;
    var u = 32 - yt(e) - 1;
    e &= ~(1 << u), a += 1;
    var n = 32 - yt(t) + u;
    if (30 < n) {
      var i = u - u % 5;
      n = (e & (1 << i) - 1).toString(32), e >>= i, u -= i, Jt = 1 << 32 - yt(t) + u | a << u | e, Xt = n + l;
    } else Jt = 1 << n | a << u | e, Xt = l;
  }
  function ji(l) {
    l.return !== null && (Wt(l, 1), Es(l, 1, 0));
  }
  function qi(l) {
    for (; l === un; ) un = ve[--ge], ve[ge] = null, tu = ve[--ge], ve[ge] = null;
    for (; l === oa; ) oa = Ot[--Dt], Ot[Dt] = null, Xt = Ot[--Dt], Ot[Dt] = null, Jt = Ot[--Dt], Ot[Dt] = null;
  }
  function As(l, t) {
    Ot[Dt++] = Jt, Ot[Dt++] = Xt, Ot[Dt++] = oa, Jt = t.id, Xt = t.overflow, oa = l;
  }
  var Kl = null, hl = null, ll = false, da = null, Nt = false, Bi = Error(o(519));
  function ra(l) {
    var t = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
    throw au(pt(t, l)), Bi;
  }
  function ps(l) {
    var t = l.stateNode, a = l.type, e = l.memoizedProps;
    switch (t[Ll] = l, t[et] = e, a) {
      case "dialog":
        I("cancel", t), I("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        I("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Tu.length; a++) I(Tu[a], t);
        break;
      case "source":
        I("error", t);
        break;
      case "img":
      case "image":
      case "link":
        I("error", t), I("load", t);
        break;
      case "details":
        I("toggle", t);
        break;
      case "input":
        I("invalid", t), Jf(t, e.value, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name, true);
        break;
      case "select":
        I("invalid", t);
        break;
      case "textarea":
        I("invalid", t), Qf(t, e.value, e.defaultValue, e.children);
    }
    a = e.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || e.suppressHydrationWarning === true || Lo(t.textContent, a) ? (e.popover != null && (I("beforetoggle", t), I("toggle", t)), e.onScroll != null && I("scroll", t), e.onScrollEnd != null && I("scrollend", t), e.onClick != null && (t.onclick = Lt), t = true) : t = false, t || ra(l, true);
  }
  function Os(l) {
    for (Kl = l.return; Kl; ) switch (Kl.tag) {
      case 5:
      case 31:
      case 13:
        Nt = false;
        return;
      case 27:
      case 3:
        Nt = true;
        return;
      default:
        Kl = Kl.return;
    }
  }
  function he(l) {
    if (l !== Kl) return false;
    if (!ll) return Os(l), ll = true, false;
    var t = l.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || tf(l.type, l.memoizedProps)), a = !a), a && hl && ra(l), Os(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      hl = ld(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      hl = ld(l);
    } else t === 27 ? (t = hl, pa(l.type) ? (l = cf, cf = null, hl = l) : hl = t) : hl = Kl ? Ct(l.stateNode.nextSibling) : null;
    return true;
  }
  function Xa() {
    hl = Kl = null, ll = false;
  }
  function xi() {
    var l = da;
    return l !== null && (ft === null ? ft = l : ft.push.apply(ft, l), da = null), l;
  }
  function au(l) {
    da === null ? da = [l] : da.push(l);
  }
  var Yi = m(null), Qa = null, $t = null;
  function ya(l, t, a) {
    O(Yi, t._currentValue), t._currentValue = a;
  }
  function It(l) {
    l._currentValue = Yi.current, G(Yi);
  }
  function Ji(l, t, a) {
    for (; l !== null; ) {
      var e = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, e !== null && (e.childLanes |= t)) : e !== null && (e.childLanes & t) !== t && (e.childLanes |= t), l === a) break;
      l = l.return;
    }
  }
  function Xi(l, t, a, e) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = u;
          for (var f = 0; f < t.length; f++) if (c.context === t[f]) {
            n.lanes |= a, c = n.alternate, c !== null && (c.lanes |= a), Ji(n.return, a, l), e || (i = null);
            break l;
          }
          n = c.next;
        }
      } else if (u.tag === 18) {
        if (i = u.return, i === null) throw Error(o(341));
        i.lanes |= a, n = i.alternate, n !== null && (n.lanes |= a), Ji(i, a, l), i = null;
      } else i = u.child;
      if (i !== null) i.return = u;
      else for (i = u; i !== null; ) {
        if (i === l) {
          i = null;
          break;
        }
        if (u = i.sibling, u !== null) {
          u.return = i.return, i = u;
          break;
        }
        i = i.return;
      }
      u = i;
    }
  }
  function _e(l, t, a, e) {
    l = null;
    for (var u = t, n = false; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = true;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(o(387));
        if (i = i.memoizedProps, i !== null) {
          var c = u.type;
          vt(u.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (u === al.current) {
        if (i = u.alternate, i === null) throw Error(o(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(Du) : l = [Du]);
      }
      u = u.return;
    }
    l !== null && Xi(t, l, a, e), t.flags |= 262144;
  }
  function nn(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!vt(l.context._currentValue, l.memoizedValue)) return true;
      l = l.next;
    }
    return false;
  }
  function Za(l) {
    Qa = l, $t = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function wl(l) {
    return Ds(Qa, l);
  }
  function cn(l, t) {
    return Qa === null && Za(l), Ds(l, t);
  }
  function Ds(l, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, $t === null) {
      if (l === null) throw Error(o(308));
      $t = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else $t = $t.next = t;
    return a;
  }
  var Zr = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = { aborted: false, addEventListener: function(a, e) {
      l.push(e);
    } };
    this.abort = function() {
      t.aborted = true, l.forEach(function(a) {
        return a();
      });
    };
  }, Vr = v.unstable_scheduleCallback, Lr = v.unstable_NormalPriority, Dl = { $$typeof: Gl, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
  function Qi() {
    return { controller: new Zr(), data: /* @__PURE__ */ new Map(), refCount: 0 };
  }
  function eu(l) {
    l.refCount--, l.refCount === 0 && Vr(Lr, function() {
      l.controller.abort();
    });
  }
  var uu = null, Zi = 0, Se = 0, be = null;
  function Kr(l, t) {
    if (uu === null) {
      var a = uu = [];
      Zi = 0, Se = Kc(), be = { status: "pending", value: void 0, then: function(e) {
        a.push(e);
      } };
    }
    return Zi++, t.then(Ns, Ns), t;
  }
  function Ns() {
    if (--Zi === 0 && uu !== null) {
      be !== null && (be.status = "fulfilled");
      var l = uu;
      uu = null, Se = 0, be = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function wr(l, t) {
    var a = [], e = { status: "pending", value: null, reason: null, then: function(u) {
      a.push(u);
    } };
    return l.then(function() {
      e.status = "fulfilled", e.value = t;
      for (var u = 0; u < a.length; u++) (0, a[u])(t);
    }, function(u) {
      for (e.status = "rejected", e.reason = u, u = 0; u < a.length; u++) (0, a[u])(void 0);
    }), e;
  }
  var Us = _.S;
  _.S = function(l, t) {
    vo = Ol(), typeof t == "object" && t !== null && typeof t.then == "function" && Kr(l, t), Us !== null && Us(l, t);
  };
  var Va = m(null);
  function Vi() {
    var l = Va.current;
    return l !== null ? l : yl.pooledCache;
  }
  function fn(l, t) {
    t === null ? O(Va, Va.current) : O(Va, t.pool);
  }
  function Cs() {
    var l = Vi();
    return l === null ? null : { parent: Dl._currentValue, pool: l };
  }
  var Me = Error(o(460)), Li = Error(o(474)), sn = Error(o(542)), mn = { then: function() {
  } };
  function Rs(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Hs(l, t, a) {
    switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(Lt, Lt), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, qs(l), l;
      default:
        if (typeof t.status == "string") t.then(Lt, Lt);
        else {
          if (l = yl, l !== null && 100 < l.shellSuspendCounter) throw Error(o(482));
          l = t, l.status = "pending", l.then(function(e) {
            if (t.status === "pending") {
              var u = t;
              u.status = "fulfilled", u.value = e;
            }
          }, function(e) {
            if (t.status === "pending") {
              var u = t;
              u.status = "rejected", u.reason = e;
            }
          });
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, qs(l), l;
        }
        throw Ka = t, Me;
    }
  }
  function La(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Ka = a, Me) : a;
    }
  }
  var Ka = null;
  function js() {
    if (Ka === null) throw Error(o(459));
    var l = Ka;
    return Ka = null, l;
  }
  function qs(l) {
    if (l === Me || l === sn) throw Error(o(483));
  }
  var ze = null, nu = 0;
  function on(l) {
    var t = nu;
    return nu += 1, ze === null && (ze = []), Hs(ze, l, t);
  }
  function iu(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function dn(l, t) {
    throw t.$$typeof === B ? Error(o(525)) : (l = Object.prototype.toString.call(t), Error(o(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)));
  }
  function Bs(l) {
    function t(d, s) {
      if (l) {
        var r = d.deletions;
        r === null ? (d.deletions = [s], d.flags |= 16) : r.push(s);
      }
    }
    function a(d, s) {
      if (!l) return null;
      for (; s !== null; ) t(d, s), s = s.sibling;
      return null;
    }
    function e(d) {
      for (var s = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? s.set(d.key, d) : s.set(d.index, d), d = d.sibling;
      return s;
    }
    function u(d, s) {
      return d = wt(d, s), d.index = 0, d.sibling = null, d;
    }
    function n(d, s, r) {
      return d.index = r, l ? (r = d.alternate, r !== null ? (r = r.index, r < s ? (d.flags |= 67108866, s) : r) : (d.flags |= 67108866, s)) : (d.flags |= 1048576, s);
    }
    function i(d) {
      return l && d.alternate === null && (d.flags |= 67108866), d;
    }
    function c(d, s, r, b) {
      return s === null || s.tag !== 6 ? (s = Ri(r, d.mode, b), s.return = d, s) : (s = u(s, r), s.return = d, s);
    }
    function f(d, s, r, b) {
      var j = r.type;
      return j === Hl ? S(d, s, r.props.children, b, r.key) : s !== null && (s.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Zl && La(j) === s.type) ? (s = u(s, r.props), iu(s, r), s.return = d, s) : (s = en(r.type, r.key, r.props, null, d.mode, b), iu(s, r), s.return = d, s);
    }
    function y(d, s, r, b) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== r.containerInfo || s.stateNode.implementation !== r.implementation ? (s = Hi(r, d.mode, b), s.return = d, s) : (s = u(s, r.children || []), s.return = d, s);
    }
    function S(d, s, r, b, j) {
      return s === null || s.tag !== 7 ? (s = Ja(r, d.mode, b, j), s.return = d, s) : (s = u(s, r), s.return = d, s);
    }
    function M(d, s, r) {
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint") return s = Ri("" + s, d.mode, r), s.return = d, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Rl:
            return r = en(s.type, s.key, s.props, null, d.mode, r), iu(r, s), r.return = d, r;
          case rl:
            return s = Hi(s, d.mode, r), s.return = d, s;
          case Zl:
            return s = La(s), M(d, s, r);
        }
        if (dt(s) || xl(s)) return s = Ja(s, d.mode, r, null), s.return = d, s;
        if (typeof s.then == "function") return M(d, on(s), r);
        if (s.$$typeof === Gl) return M(d, cn(d, s), r);
        dn(d, s);
      }
      return null;
    }
    function g(d, s, r, b) {
      var j = s !== null ? s.key : null;
      if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return j !== null ? null : c(d, s, "" + r, b);
      if (typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case Rl:
            return r.key === j ? f(d, s, r, b) : null;
          case rl:
            return r.key === j ? y(d, s, r, b) : null;
          case Zl:
            return r = La(r), g(d, s, r, b);
        }
        if (dt(r) || xl(r)) return j !== null ? null : S(d, s, r, b, null);
        if (typeof r.then == "function") return g(d, s, on(r), b);
        if (r.$$typeof === Gl) return g(d, s, cn(d, r), b);
        dn(d, r);
      }
      return null;
    }
    function h(d, s, r, b, j) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint") return d = d.get(r) || null, c(s, d, "" + b, j);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case Rl:
            return d = d.get(b.key === null ? r : b.key) || null, f(s, d, b, j);
          case rl:
            return d = d.get(b.key === null ? r : b.key) || null, y(s, d, b, j);
          case Zl:
            return b = La(b), h(d, s, r, b, j);
        }
        if (dt(b) || xl(b)) return d = d.get(r) || null, S(s, d, b, j, null);
        if (typeof b.then == "function") return h(d, s, r, on(b), j);
        if (b.$$typeof === Gl) return h(d, s, r, cn(s, b), j);
        dn(s, b);
      }
      return null;
    }
    function C(d, s, r, b) {
      for (var j = null, el = null, R = s, K = s = 0, k = null; R !== null && K < r.length; K++) {
        R.index > K ? (k = R, R = null) : k = R.sibling;
        var ul = g(d, R, r[K], b);
        if (ul === null) {
          R === null && (R = k);
          break;
        }
        l && R && ul.alternate === null && t(d, R), s = n(ul, s, K), el === null ? j = ul : el.sibling = ul, el = ul, R = k;
      }
      if (K === r.length) return a(d, R), ll && Wt(d, K), j;
      if (R === null) {
        for (; K < r.length; K++) R = M(d, r[K], b), R !== null && (s = n(R, s, K), el === null ? j = R : el.sibling = R, el = R);
        return ll && Wt(d, K), j;
      }
      for (R = e(R); K < r.length; K++) k = h(R, d, K, r[K], b), k !== null && (l && k.alternate !== null && R.delete(k.key === null ? K : k.key), s = n(k, s, K), el === null ? j = k : el.sibling = k, el = k);
      return l && R.forEach(function(Ca) {
        return t(d, Ca);
      }), ll && Wt(d, K), j;
    }
    function Y(d, s, r, b) {
      if (r == null) throw Error(o(151));
      for (var j = null, el = null, R = s, K = s = 0, k = null, ul = r.next(); R !== null && !ul.done; K++, ul = r.next()) {
        R.index > K ? (k = R, R = null) : k = R.sibling;
        var Ca = g(d, R, ul.value, b);
        if (Ca === null) {
          R === null && (R = k);
          break;
        }
        l && R && Ca.alternate === null && t(d, R), s = n(Ca, s, K), el === null ? j = Ca : el.sibling = Ca, el = Ca, R = k;
      }
      if (ul.done) return a(d, R), ll && Wt(d, K), j;
      if (R === null) {
        for (; !ul.done; K++, ul = r.next()) ul = M(d, ul.value, b), ul !== null && (s = n(ul, s, K), el === null ? j = ul : el.sibling = ul, el = ul);
        return ll && Wt(d, K), j;
      }
      for (R = e(R); !ul.done; K++, ul = r.next()) ul = h(R, d, K, ul.value, b), ul !== null && (l && ul.alternate !== null && R.delete(ul.key === null ? K : ul.key), s = n(ul, s, K), el === null ? j = ul : el.sibling = ul, el = ul);
      return l && R.forEach(function(uy) {
        return t(d, uy);
      }), ll && Wt(d, K), j;
    }
    function dl(d, s, r, b) {
      if (typeof r == "object" && r !== null && r.type === Hl && r.key === null && (r = r.props.children), typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case Rl:
            l: {
              for (var j = r.key; s !== null; ) {
                if (s.key === j) {
                  if (j = r.type, j === Hl) {
                    if (s.tag === 7) {
                      a(d, s.sibling), b = u(s, r.props.children), b.return = d, d = b;
                      break l;
                    }
                  } else if (s.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Zl && La(j) === s.type) {
                    a(d, s.sibling), b = u(s, r.props), iu(b, r), b.return = d, d = b;
                    break l;
                  }
                  a(d, s);
                  break;
                } else t(d, s);
                s = s.sibling;
              }
              r.type === Hl ? (b = Ja(r.props.children, d.mode, b, r.key), b.return = d, d = b) : (b = en(r.type, r.key, r.props, null, d.mode, b), iu(b, r), b.return = d, d = b);
            }
            return i(d);
          case rl:
            l: {
              for (j = r.key; s !== null; ) {
                if (s.key === j) if (s.tag === 4 && s.stateNode.containerInfo === r.containerInfo && s.stateNode.implementation === r.implementation) {
                  a(d, s.sibling), b = u(s, r.children || []), b.return = d, d = b;
                  break l;
                } else {
                  a(d, s);
                  break;
                }
                else t(d, s);
                s = s.sibling;
              }
              b = Hi(r, d.mode, b), b.return = d, d = b;
            }
            return i(d);
          case Zl:
            return r = La(r), dl(d, s, r, b);
        }
        if (dt(r)) return C(d, s, r, b);
        if (xl(r)) {
          if (j = xl(r), typeof j != "function") throw Error(o(150));
          return r = j.call(r), Y(d, s, r, b);
        }
        if (typeof r.then == "function") return dl(d, s, on(r), b);
        if (r.$$typeof === Gl) return dl(d, s, cn(d, r), b);
        dn(d, r);
      }
      return typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint" ? (r = "" + r, s !== null && s.tag === 6 ? (a(d, s.sibling), b = u(s, r), b.return = d, d = b) : (a(d, s), b = Ri(r, d.mode, b), b.return = d, d = b), i(d)) : a(d, s);
    }
    return function(d, s, r, b) {
      try {
        nu = 0;
        var j = dl(d, s, r, b);
        return ze = null, j;
      } catch (R) {
        if (R === Me || R === sn) throw R;
        var el = gt(29, R, null, d.mode);
        return el.lanes = b, el.return = d, el;
      } finally {
      }
    };
  }
  var wa = Bs(true), xs = Bs(false), va = false;
  function Ki(l) {
    l.updateQueue = { baseState: l.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
  }
  function wi(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = { baseState: l.baseState, firstBaseUpdate: l.firstBaseUpdate, lastBaseUpdate: l.lastBaseUpdate, shared: l.shared, callbacks: null });
  }
  function ga(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ha(l, t, a) {
    var e = l.updateQueue;
    if (e === null) return null;
    if (e = e.shared, (il & 2) !== 0) {
      var u = e.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), e.pending = t, t = an(l), Ms(l, null, a), t;
    }
    return tn(l, e, t, a), an(l);
  }
  function cu(l, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var e = t.lanes;
      e &= l.pendingLanes, a |= e, t.lanes = a, Df(l, a);
    }
  }
  function Wi(l, t) {
    var a = l.updateQueue, e = l.alternate;
    if (e !== null && (e = e.updateQueue, a === e)) {
      var u = null, n = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var i = { lane: a.lane, tag: a.tag, payload: a.payload, callback: null, next: null };
          n === null ? u = n = i : n = n.next = i, a = a.next;
        } while (a !== null);
        n === null ? u = n = t : n = n.next = t;
      } else u = n = t;
      a = { baseState: e.baseState, firstBaseUpdate: u, lastBaseUpdate: n, shared: e.shared, callbacks: e.callbacks }, l.updateQueue = a;
      return;
    }
    l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = t : l.next = t, a.lastBaseUpdate = t;
  }
  var $i = false;
  function fu() {
    if ($i) {
      var l = be;
      if (l !== null) throw l;
    }
  }
  function su(l, t, a, e) {
    $i = false;
    var u = l.updateQueue;
    va = false;
    var n = u.firstBaseUpdate, i = u.lastBaseUpdate, c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var f = c, y = f.next;
      f.next = null, i === null ? n = y : i.next = y, i = f;
      var S = l.alternate;
      S !== null && (S = S.updateQueue, c = S.lastBaseUpdate, c !== i && (c === null ? S.firstBaseUpdate = y : c.next = y, S.lastBaseUpdate = f));
    }
    if (n !== null) {
      var M = u.baseState;
      i = 0, S = y = f = null, c = n;
      do {
        var g = c.lane & -536870913, h = g !== c.lane;
        if (h ? (F & g) === g : (e & g) === g) {
          g !== 0 && g === Se && ($i = true), S !== null && (S = S.next = { lane: 0, tag: c.tag, payload: c.payload, callback: null, next: null });
          l: {
            var C = l, Y = c;
            g = t;
            var dl = a;
            switch (Y.tag) {
              case 1:
                if (C = Y.payload, typeof C == "function") {
                  M = C.call(dl, M, g);
                  break l;
                }
                M = C;
                break l;
              case 3:
                C.flags = C.flags & -65537 | 128;
              case 0:
                if (C = Y.payload, g = typeof C == "function" ? C.call(dl, M, g) : C, g == null) break l;
                M = H({}, M, g);
                break l;
              case 2:
                va = true;
            }
          }
          g = c.callback, g !== null && (l.flags |= 64, h && (l.flags |= 8192), h = u.callbacks, h === null ? u.callbacks = [g] : h.push(g));
        } else h = { lane: g, tag: c.tag, payload: c.payload, callback: c.callback, next: null }, S === null ? (y = S = h, f = M) : S = S.next = h, i |= g;
        if (c = c.next, c === null) {
          if (c = u.shared.pending, c === null) break;
          h = c, c = h.next, h.next = null, u.lastBaseUpdate = h, u.shared.pending = null;
        }
      } while (true);
      S === null && (f = M), u.baseState = f, u.firstBaseUpdate = y, u.lastBaseUpdate = S, n === null && (u.shared.lanes = 0), za |= i, l.lanes = i, l.memoizedState = M;
    }
  }
  function Ys(l, t) {
    if (typeof l != "function") throw Error(o(191, l));
    l.call(t);
  }
  function Js(l, t) {
    var a = l.callbacks;
    if (a !== null) for (l.callbacks = null, l = 0; l < a.length; l++) Ys(a[l], t);
  }
  var Ge = m(null), rn = m(0);
  function Xs(l, t) {
    l = na, O(rn, l), O(Ge, t), na = l | t.baseLanes;
  }
  function Ii() {
    O(rn, na), O(Ge, Ge.current);
  }
  function Fi() {
    na = rn.current, G(Ge), G(rn);
  }
  var ht = m(null), Ut = null;
  function _a(l) {
    var t = l.alternate;
    O(Tl, Tl.current & 1), O(ht, l), Ut === null && (t === null || Ge.current !== null || t.memoizedState !== null) && (Ut = l);
  }
  function ki(l) {
    O(Tl, Tl.current), O(ht, l), Ut === null && (Ut = l);
  }
  function Qs(l) {
    l.tag === 22 ? (O(Tl, Tl.current), O(ht, l), Ut === null && (Ut = l)) : Sa();
  }
  function Sa() {
    O(Tl, Tl.current), O(ht, ht.current);
  }
  function _t(l) {
    G(ht), Ut === l && (Ut = null), G(Tl);
  }
  var Tl = m(0);
  function yn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || uf(a) || nf(a))) return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Ft = 0, L = null, ml = null, Nl = null, vn = false, Te = false, Wa = false, gn = 0, mu = 0, Ee = null, Wr = 0;
  function Ml() {
    throw Error(o(321));
  }
  function Pi(l, t) {
    if (t === null) return false;
    for (var a = 0; a < t.length && a < l.length; a++) if (!vt(l[a], t[a])) return false;
    return true;
  }
  function lc(l, t, a, e, u, n) {
    return Ft = n, L = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, _.H = l === null || l.memoizedState === null ? Em : vc, Wa = false, n = a(e, u), Wa = false, Te && (n = Vs(t, a, e, u)), Zs(l), n;
  }
  function Zs(l) {
    _.H = ru;
    var t = ml !== null && ml.next !== null;
    if (Ft = 0, Nl = ml = L = null, vn = false, mu = 0, Ee = null, t) throw Error(o(300));
    l === null || Ul || (l = l.dependencies, l !== null && nn(l) && (Ul = true));
  }
  function Vs(l, t, a, e) {
    L = l;
    var u = 0;
    do {
      if (Te && (Ee = null), mu = 0, Te = false, 25 <= u) throw Error(o(301));
      if (u += 1, Nl = ml = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      _.H = Am, n = t(a, e);
    } while (Te);
    return n;
  }
  function $r() {
    var l = _.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? ou(t) : t, l = l.useState()[0], (ml !== null ? ml.memoizedState : null) !== l && (L.flags |= 1024), t;
  }
  function tc() {
    var l = gn !== 0;
    return gn = 0, l;
  }
  function ac(l, t, a) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a;
  }
  function ec(l) {
    if (vn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      vn = false;
    }
    Ft = 0, Nl = ml = L = null, Te = false, mu = gn = 0, Ee = null;
  }
  function tt() {
    var l = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Nl === null ? L.memoizedState = Nl = l : Nl = Nl.next = l, Nl;
  }
  function El() {
    if (ml === null) {
      var l = L.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ml.next;
    var t = Nl === null ? L.memoizedState : Nl.next;
    if (t !== null) Nl = t, ml = l;
    else {
      if (l === null) throw L.alternate === null ? Error(o(467)) : Error(o(310));
      ml = l, l = { memoizedState: ml.memoizedState, baseState: ml.baseState, baseQueue: ml.baseQueue, queue: ml.queue, next: null }, Nl === null ? L.memoizedState = Nl = l : Nl = Nl.next = l;
    }
    return Nl;
  }
  function hn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ou(l) {
    var t = mu;
    return mu += 1, Ee === null && (Ee = []), l = Hs(Ee, l, t), t = L, (Nl === null ? t.memoizedState : Nl.next) === null && (t = t.alternate, _.H = t === null || t.memoizedState === null ? Em : vc), l;
  }
  function _n(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return ou(l);
      if (l.$$typeof === Gl) return wl(l);
    }
    throw Error(o(438, String(l)));
  }
  function uc(l) {
    var t = null, a = L.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var e = L.alternate;
      e !== null && (e = e.updateQueue, e !== null && (e = e.memoCache, e != null && (t = { data: e.data.map(function(u) {
        return u.slice();
      }), index: 0 })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = hn(), L.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0) for (a = t.data[t.index] = Array(l), e = 0; e < l; e++) a[e] = Bt;
    return t.index++, a;
  }
  function kt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function Sn(l) {
    var t = El();
    return nc(t, ml, l);
  }
  function nc(l, t, a) {
    var e = l.queue;
    if (e === null) throw Error(o(311));
    e.lastRenderedReducer = a;
    var u = l.baseQueue, n = e.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        u.next = n.next, n.next = i;
      }
      t.baseQueue = u = n, e.pending = null;
    }
    if (n = l.baseState, u === null) l.memoizedState = n;
    else {
      t = u.next;
      var c = i = null, f = null, y = t, S = false;
      do {
        var M = y.lane & -536870913;
        if (M !== y.lane ? (F & M) === M : (Ft & M) === M) {
          var g = y.revertLane;
          if (g === 0) f !== null && (f = f.next = { lane: 0, revertLane: 0, gesture: null, action: y.action, hasEagerState: y.hasEagerState, eagerState: y.eagerState, next: null }), M === Se && (S = true);
          else if ((Ft & g) === g) {
            y = y.next, g === Se && (S = true);
            continue;
          } else M = { lane: 0, revertLane: y.revertLane, gesture: null, action: y.action, hasEagerState: y.hasEagerState, eagerState: y.eagerState, next: null }, f === null ? (c = f = M, i = n) : f = f.next = M, L.lanes |= g, za |= g;
          M = y.action, Wa && a(n, M), n = y.hasEagerState ? y.eagerState : a(n, M);
        } else g = { lane: M, revertLane: y.revertLane, gesture: y.gesture, action: y.action, hasEagerState: y.hasEagerState, eagerState: y.eagerState, next: null }, f === null ? (c = f = g, i = n) : f = f.next = g, L.lanes |= M, za |= M;
        y = y.next;
      } while (y !== null && y !== t);
      if (f === null ? i = n : f.next = c, !vt(n, l.memoizedState) && (Ul = true, S && (a = be, a !== null))) throw a;
      l.memoizedState = n, l.baseState = i, l.baseQueue = f, e.lastRenderedState = n;
    }
    return u === null && (e.lanes = 0), [l.memoizedState, e.dispatch];
  }
  function ic(l) {
    var t = El(), a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = l;
    var e = a.dispatch, u = a.pending, n = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var i = u = u.next;
      do
        n = l(n, i.action), i = i.next;
      while (i !== u);
      vt(n, t.memoizedState) || (Ul = true), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n;
    }
    return [n, e];
  }
  function Ls(l, t, a) {
    var e = L, u = El(), n = ll;
    if (n) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = t();
    var i = !vt((ml || u).memoizedState, a);
    if (i && (u.memoizedState = a, Ul = true), u = u.queue, sc(Ws.bind(null, e, u, l), [l]), u.getSnapshot !== t || i || Nl !== null && Nl.memoizedState.tag & 1) {
      if (e.flags |= 2048, Ae(9, { destroy: void 0 }, ws.bind(null, e, u, a, t), null), yl === null) throw Error(o(349));
      n || (Ft & 127) !== 0 || Ks(e, t, a);
    }
    return a;
  }
  function Ks(l, t, a) {
    l.flags |= 16384, l = { getSnapshot: t, value: a }, t = L.updateQueue, t === null ? (t = hn(), L.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l));
  }
  function ws(l, t, a, e) {
    t.value = a, t.getSnapshot = e, $s(t) && Is(l);
  }
  function Ws(l, t, a) {
    return a(function() {
      $s(t) && Is(l);
    });
  }
  function $s(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !vt(l, a);
    } catch {
      return true;
    }
  }
  function Is(l) {
    var t = Ya(l, 2);
    t !== null && st(t, l, 2);
  }
  function cc(l) {
    var t = tt();
    if (typeof l == "function") {
      var a = l;
      if (l = a(), Wa) {
        fa(true);
        try {
          a();
        } finally {
          fa(false);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: kt, lastRenderedState: l }, t;
  }
  function Fs(l, t, a, e) {
    return l.baseState = a, nc(l, ml, typeof e == "function" ? e : kt);
  }
  function Ir(l, t, a, e, u) {
    if (zn(l)) throw Error(o(485));
    if (l = t.action, l !== null) {
      var n = { payload: u, action: l, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(i) {
        n.listeners.push(i);
      } };
      _.T !== null ? a(true) : n.isTransition = false, e(n), a = t.pending, a === null ? (n.next = t.pending = n, ks(t, n)) : (n.next = a.next, t.pending = a.next = n);
    }
  }
  function ks(l, t) {
    var a = t.action, e = t.payload, u = l.state;
    if (t.isTransition) {
      var n = _.T, i = {};
      _.T = i;
      try {
        var c = a(u, e), f = _.S;
        f !== null && f(i, c), Ps(l, t, c);
      } catch (y) {
        fc(l, t, y);
      } finally {
        n !== null && i.types !== null && (n.types = i.types), _.T = n;
      }
    } else try {
      n = a(u, e), Ps(l, t, n);
    } catch (y) {
      fc(l, t, y);
    }
  }
  function Ps(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(e) {
      lm(l, t, e);
    }, function(e) {
      return fc(l, t, e);
    }) : lm(l, t, a);
  }
  function lm(l, t, a) {
    t.status = "fulfilled", t.value = a, tm(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, ks(l, a)));
  }
  function fc(l, t, a) {
    var e = l.pending;
    if (l.pending = null, e !== null) {
      e = e.next;
      do
        t.status = "rejected", t.reason = a, tm(t), t = t.next;
      while (t !== e);
    }
    l.action = null;
  }
  function tm(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function am(l, t) {
    return t;
  }
  function em(l, t) {
    if (ll) {
      var a = yl.formState;
      if (a !== null) {
        l: {
          var e = L;
          if (ll) {
            if (hl) {
              t: {
                for (var u = hl, n = Nt; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (u = Ct(u.nextSibling), u === null) {
                    u = null;
                    break t;
                  }
                }
                n = u.data, u = n === "F!" || n === "F" ? u : null;
              }
              if (u) {
                hl = Ct(u.nextSibling), e = u.data === "F!";
                break l;
              }
            }
            ra(e);
          }
          e = false;
        }
        e && (t = a[0]);
      }
    }
    return a = tt(), a.memoizedState = a.baseState = t, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: am, lastRenderedState: t }, a.queue = e, a = zm.bind(null, L, e), e.dispatch = a, e = cc(false), n = yc.bind(null, L, false, e.queue), e = tt(), u = { state: t, dispatch: null, action: l, pending: null }, e.queue = u, a = Ir.bind(null, L, u, n, a), u.dispatch = a, e.memoizedState = l, [t, a, false];
  }
  function um(l) {
    var t = El();
    return nm(t, ml, l);
  }
  function nm(l, t, a) {
    if (t = nc(l, t, am)[0], l = Sn(kt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
      var e = ou(t);
    } catch (i) {
      throw i === Me ? sn : i;
    }
    else e = t;
    t = El();
    var u = t.queue, n = u.dispatch;
    return a !== t.memoizedState && (L.flags |= 2048, Ae(9, { destroy: void 0 }, Fr.bind(null, u, a), null)), [e, n, l];
  }
  function Fr(l, t) {
    l.action = t;
  }
  function im(l) {
    var t = El(), a = ml;
    if (a !== null) return nm(t, a, l);
    El(), t = t.memoizedState, a = El();
    var e = a.queue.dispatch;
    return a.memoizedState = l, [t, e, false];
  }
  function Ae(l, t, a, e) {
    return l = { tag: l, create: a, deps: e, inst: t, next: null }, t = L.updateQueue, t === null && (t = hn(), L.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (e = a.next, a.next = l, l.next = e, t.lastEffect = l), l;
  }
  function cm() {
    return El().memoizedState;
  }
  function bn(l, t, a, e) {
    var u = tt();
    L.flags |= l, u.memoizedState = Ae(1 | t, { destroy: void 0 }, a, e === void 0 ? null : e);
  }
  function Mn(l, t, a, e) {
    var u = El();
    e = e === void 0 ? null : e;
    var n = u.memoizedState.inst;
    ml !== null && e !== null && Pi(e, ml.memoizedState.deps) ? u.memoizedState = Ae(t, n, a, e) : (L.flags |= l, u.memoizedState = Ae(1 | t, n, a, e));
  }
  function fm(l, t) {
    bn(8390656, 8, l, t);
  }
  function sc(l, t) {
    Mn(2048, 8, l, t);
  }
  function kr(l) {
    L.flags |= 4;
    var t = L.updateQueue;
    if (t === null) t = hn(), L.updateQueue = t, t.events = [l];
    else {
      var a = t.events;
      a === null ? t.events = [l] : a.push(l);
    }
  }
  function sm(l) {
    var t = El().memoizedState;
    return kr({ ref: t, nextImpl: l }), function() {
      if ((il & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function mm(l, t) {
    return Mn(4, 2, l, t);
  }
  function om(l, t) {
    return Mn(4, 4, l, t);
  }
  function dm(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null) return l = l(), t.current = l, function() {
      t.current = null;
    };
  }
  function rm(l, t, a) {
    a = a != null ? a.concat([l]) : null, Mn(4, 4, dm.bind(null, t, l), a);
  }
  function mc() {
  }
  function ym(l, t) {
    var a = El();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    return t !== null && Pi(t, e[1]) ? e[0] : (a.memoizedState = [l, t], l);
  }
  function vm(l, t) {
    var a = El();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    if (t !== null && Pi(t, e[1])) return e[0];
    if (e = l(), Wa) {
      fa(true);
      try {
        l();
      } finally {
        fa(false);
      }
    }
    return a.memoizedState = [e, t], e;
  }
  function oc(l, t, a) {
    return a === void 0 || (Ft & 1073741824) !== 0 && (F & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = a, l = ho(), L.lanes |= l, za |= l, a);
  }
  function gm(l, t, a, e) {
    return vt(a, t) ? a : Ge.current !== null ? (l = oc(l, a, e), vt(l, t) || (Ul = true), l) : (Ft & 42) === 0 || (Ft & 1073741824) !== 0 && (F & 261930) === 0 ? (Ul = true, l.memoizedState = a) : (l = ho(), L.lanes |= l, za |= l, t);
  }
  function hm(l, t, a, e, u) {
    var n = p.p;
    p.p = n !== 0 && 8 > n ? n : 8;
    var i = _.T, c = {};
    _.T = c, yc(l, false, t, a);
    try {
      var f = u(), y = _.S;
      if (y !== null && y(c, f), f !== null && typeof f == "object" && typeof f.then == "function") {
        var S = wr(f, e);
        du(l, t, S, Mt(l));
      } else du(l, t, e, Mt(l));
    } catch (M) {
      du(l, t, { then: function() {
      }, status: "rejected", reason: M }, Mt());
    } finally {
      p.p = n, i !== null && c.types !== null && (i.types = c.types), _.T = i;
    }
  }
  function Pr() {
  }
  function dc(l, t, a, e) {
    if (l.tag !== 5) throw Error(o(476));
    var u = _m(l).queue;
    hm(l, u, t, x, a === null ? Pr : function() {
      return Sm(l), a(e);
    });
  }
  function _m(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = { memoizedState: x, baseState: x, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: kt, lastRenderedState: x }, next: null };
    var a = {};
    return t.next = { memoizedState: a, baseState: a, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: kt, lastRenderedState: a }, next: null }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function Sm(l) {
    var t = _m(l);
    t.next === null && (t = l.alternate.memoizedState), du(l, t.next.queue, {}, Mt());
  }
  function rc() {
    return wl(Du);
  }
  function bm() {
    return El().memoizedState;
  }
  function Mm() {
    return El().memoizedState;
  }
  function l0(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Mt();
          l = ga(a);
          var e = ha(t, l, a);
          e !== null && (st(e, t, a), cu(e, t, a)), t = { cache: Qi() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function t0(l, t, a) {
    var e = Mt();
    a = { lane: e, revertLane: 0, gesture: null, action: a, hasEagerState: false, eagerState: null, next: null }, zn(l) ? Gm(t, a) : (a = Ui(l, t, a, e), a !== null && (st(a, l, e), Tm(a, t, e)));
  }
  function zm(l, t, a) {
    var e = Mt();
    du(l, t, a, e);
  }
  function du(l, t, a, e) {
    var u = { lane: e, revertLane: 0, gesture: null, action: a, hasEagerState: false, eagerState: null, next: null };
    if (zn(l)) Gm(t, u);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null)) try {
        var i = t.lastRenderedState, c = n(i, a);
        if (u.hasEagerState = true, u.eagerState = c, vt(c, i)) return tn(l, t, u, 0), yl === null && ln(), false;
      } catch {
      } finally {
      }
      if (a = Ui(l, t, u, e), a !== null) return st(a, l, e), Tm(a, t, e), true;
    }
    return false;
  }
  function yc(l, t, a, e) {
    if (e = { lane: 2, revertLane: Kc(), gesture: null, action: e, hasEagerState: false, eagerState: null, next: null }, zn(l)) {
      if (t) throw Error(o(479));
    } else t = Ui(l, a, e, 2), t !== null && st(t, l, 2);
  }
  function zn(l) {
    var t = l.alternate;
    return l === L || t !== null && t === L;
  }
  function Gm(l, t) {
    Te = vn = true;
    var a = l.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
  }
  function Tm(l, t, a) {
    if ((a & 4194048) !== 0) {
      var e = t.lanes;
      e &= l.pendingLanes, a |= e, t.lanes = a, Df(l, a);
    }
  }
  var ru = { readContext: wl, use: _n, useCallback: Ml, useContext: Ml, useEffect: Ml, useImperativeHandle: Ml, useLayoutEffect: Ml, useInsertionEffect: Ml, useMemo: Ml, useReducer: Ml, useRef: Ml, useState: Ml, useDebugValue: Ml, useDeferredValue: Ml, useTransition: Ml, useSyncExternalStore: Ml, useId: Ml, useHostTransitionStatus: Ml, useFormState: Ml, useActionState: Ml, useOptimistic: Ml, useMemoCache: Ml, useCacheRefresh: Ml };
  ru.useEffectEvent = Ml;
  var Em = { readContext: wl, use: _n, useCallback: function(l, t) {
    return tt().memoizedState = [l, t === void 0 ? null : t], l;
  }, useContext: wl, useEffect: fm, useImperativeHandle: function(l, t, a) {
    a = a != null ? a.concat([l]) : null, bn(4194308, 4, dm.bind(null, t, l), a);
  }, useLayoutEffect: function(l, t) {
    return bn(4194308, 4, l, t);
  }, useInsertionEffect: function(l, t) {
    bn(4, 2, l, t);
  }, useMemo: function(l, t) {
    var a = tt();
    t = t === void 0 ? null : t;
    var e = l();
    if (Wa) {
      fa(true);
      try {
        l();
      } finally {
        fa(false);
      }
    }
    return a.memoizedState = [e, t], e;
  }, useReducer: function(l, t, a) {
    var e = tt();
    if (a !== void 0) {
      var u = a(t);
      if (Wa) {
        fa(true);
        try {
          a(t);
        } finally {
          fa(false);
        }
      }
    } else u = t;
    return e.memoizedState = e.baseState = u, l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: l, lastRenderedState: u }, e.queue = l, l = l.dispatch = t0.bind(null, L, l), [e.memoizedState, l];
  }, useRef: function(l) {
    var t = tt();
    return l = { current: l }, t.memoizedState = l;
  }, useState: function(l) {
    l = cc(l);
    var t = l.queue, a = zm.bind(null, L, t);
    return t.dispatch = a, [l.memoizedState, a];
  }, useDebugValue: mc, useDeferredValue: function(l, t) {
    var a = tt();
    return oc(a, l, t);
  }, useTransition: function() {
    var l = cc(false);
    return l = hm.bind(null, L, l.queue, true, false), tt().memoizedState = l, [false, l];
  }, useSyncExternalStore: function(l, t, a) {
    var e = L, u = tt();
    if (ll) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else {
      if (a = t(), yl === null) throw Error(o(349));
      (F & 127) !== 0 || Ks(e, t, a);
    }
    u.memoizedState = a;
    var n = { value: a, getSnapshot: t };
    return u.queue = n, fm(Ws.bind(null, e, n, l), [l]), e.flags |= 2048, Ae(9, { destroy: void 0 }, ws.bind(null, e, n, a, t), null), a;
  }, useId: function() {
    var l = tt(), t = yl.identifierPrefix;
    if (ll) {
      var a = Xt, e = Jt;
      a = (e & ~(1 << 32 - yt(e) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = gn++, 0 < a && (t += "H" + a.toString(32)), t += "_";
    } else a = Wr++, t = "_" + t + "r_" + a.toString(32) + "_";
    return l.memoizedState = t;
  }, useHostTransitionStatus: rc, useFormState: em, useActionState: em, useOptimistic: function(l) {
    var t = tt();
    t.memoizedState = t.baseState = l;
    var a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
    return t.queue = a, t = yc.bind(null, L, true, a), a.dispatch = t, [l, t];
  }, useMemoCache: uc, useCacheRefresh: function() {
    return tt().memoizedState = l0.bind(null, L);
  }, useEffectEvent: function(l) {
    var t = tt(), a = { impl: l };
    return t.memoizedState = a, function() {
      if ((il & 2) !== 0) throw Error(o(440));
      return a.impl.apply(void 0, arguments);
    };
  } }, vc = { readContext: wl, use: _n, useCallback: ym, useContext: wl, useEffect: sc, useImperativeHandle: rm, useInsertionEffect: mm, useLayoutEffect: om, useMemo: vm, useReducer: Sn, useRef: cm, useState: function() {
    return Sn(kt);
  }, useDebugValue: mc, useDeferredValue: function(l, t) {
    var a = El();
    return gm(a, ml.memoizedState, l, t);
  }, useTransition: function() {
    var l = Sn(kt)[0], t = El().memoizedState;
    return [typeof l == "boolean" ? l : ou(l), t];
  }, useSyncExternalStore: Ls, useId: bm, useHostTransitionStatus: rc, useFormState: um, useActionState: um, useOptimistic: function(l, t) {
    var a = El();
    return Fs(a, ml, l, t);
  }, useMemoCache: uc, useCacheRefresh: Mm };
  vc.useEffectEvent = sm;
  var Am = { readContext: wl, use: _n, useCallback: ym, useContext: wl, useEffect: sc, useImperativeHandle: rm, useInsertionEffect: mm, useLayoutEffect: om, useMemo: vm, useReducer: ic, useRef: cm, useState: function() {
    return ic(kt);
  }, useDebugValue: mc, useDeferredValue: function(l, t) {
    var a = El();
    return ml === null ? oc(a, l, t) : gm(a, ml.memoizedState, l, t);
  }, useTransition: function() {
    var l = ic(kt)[0], t = El().memoizedState;
    return [typeof l == "boolean" ? l : ou(l), t];
  }, useSyncExternalStore: Ls, useId: bm, useHostTransitionStatus: rc, useFormState: im, useActionState: im, useOptimistic: function(l, t) {
    var a = El();
    return ml !== null ? Fs(a, ml, l, t) : (a.baseState = l, [l, a.queue.dispatch]);
  }, useMemoCache: uc, useCacheRefresh: Mm };
  Am.useEffectEvent = sm;
  function gc(l, t, a, e) {
    t = l.memoizedState, a = a(e, t), a = a == null ? t : H({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var hc = { enqueueSetState: function(l, t, a) {
    l = l._reactInternals;
    var e = Mt(), u = ga(e);
    u.payload = t, a != null && (u.callback = a), t = ha(l, u, e), t !== null && (st(t, l, e), cu(t, l, e));
  }, enqueueReplaceState: function(l, t, a) {
    l = l._reactInternals;
    var e = Mt(), u = ga(e);
    u.tag = 1, u.payload = t, a != null && (u.callback = a), t = ha(l, u, e), t !== null && (st(t, l, e), cu(t, l, e));
  }, enqueueForceUpdate: function(l, t) {
    l = l._reactInternals;
    var a = Mt(), e = ga(a);
    e.tag = 2, t != null && (e.callback = t), t = ha(l, e, a), t !== null && (st(t, l, a), cu(t, l, a));
  } };
  function pm(l, t, a, e, u, n, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(e, n, i) : t.prototype && t.prototype.isPureReactComponent ? !Pe(a, e) || !Pe(u, n) : true;
  }
  function Om(l, t, a, e) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, e), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, e), t.state !== l && hc.enqueueReplaceState(t, t.state, null);
  }
  function $a(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var e in t) e !== "ref" && (a[e] = t[e]);
    }
    if (l = l.defaultProps) {
      a === t && (a = H({}, a));
      for (var u in l) a[u] === void 0 && (a[u] = l[u]);
    }
    return a;
  }
  function Dm(l) {
    Pu(l);
  }
  function Nm(l) {
    console.error(l);
  }
  function Um(l) {
    Pu(l);
  }
  function Gn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function Cm(l, t, a) {
    try {
      var e = l.onCaughtError;
      e(a.value, { componentStack: a.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function _c(l, t, a) {
    return a = ga(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Gn(l, t);
    }, a;
  }
  function Rm(l) {
    return l = ga(l), l.tag = 3, l;
  }
  function Hm(l, t, a, e) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = e.value;
      l.payload = function() {
        return u(n);
      }, l.callback = function() {
        Cm(t, a, e);
      };
    }
    var i = a.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
      Cm(t, a, e), typeof u != "function" && (Ga === null ? Ga = /* @__PURE__ */ new Set([this]) : Ga.add(this));
      var c = e.stack;
      this.componentDidCatch(e.value, { componentStack: c !== null ? c : "" });
    });
  }
  function a0(l, t, a, e, u) {
    if (a.flags |= 32768, e !== null && typeof e == "object" && typeof e.then == "function") {
      if (t = a.alternate, t !== null && _e(t, a, u, true), a = ht.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
            return Ut === null ? jn() : a.alternate === null && zl === 0 && (zl = 3), a.flags &= -257, a.flags |= 65536, a.lanes = u, e === mn ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([e]) : t.add(e), Zc(l, e, u)), false;
          case 22:
            return a.flags |= 65536, e === mn ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([e]) }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([e]) : a.add(e)), Zc(l, e, u)), false;
        }
        throw Error(o(435, a.tag));
      }
      return Zc(l, e, u), jn(), false;
    }
    if (ll) return t = ht.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, e !== Bi && (l = Error(o(422), { cause: e }), au(pt(l, a)))) : (e !== Bi && (t = Error(o(423), { cause: e }), au(pt(t, a))), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, e = pt(e, a), u = _c(l.stateNode, e, u), Wi(l, u), zl !== 4 && (zl = 2)), false;
    var n = Error(o(520), { cause: e });
    if (n = pt(n, a), Mu === null ? Mu = [n] : Mu.push(n), zl !== 4 && (zl = 2), t === null) return true;
    e = pt(e, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, l = u & -u, a.lanes |= l, l = _c(a.stateNode, e, l), Wi(a, l), false;
        case 1:
          if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (Ga === null || !Ga.has(n)))) return a.flags |= 65536, u &= -u, a.lanes |= u, u = Rm(u), Hm(u, l, a, e), Wi(a, u), false;
      }
      a = a.return;
    } while (a !== null);
    return false;
  }
  var Sc = Error(o(461)), Ul = false;
  function Wl(l, t, a, e) {
    t.child = l === null ? xs(t, null, a, e) : wa(t, l.child, a, e);
  }
  function jm(l, t, a, e, u) {
    a = a.render;
    var n = t.ref;
    if ("ref" in e) {
      var i = {};
      for (var c in e) c !== "ref" && (i[c] = e[c]);
    } else i = e;
    return Za(t), e = lc(l, t, a, i, n, u), c = tc(), l !== null && !Ul ? (ac(l, t, u), Pt(l, t, u)) : (ll && c && ji(t), t.flags |= 1, Wl(l, t, e, u), t.child);
  }
  function qm(l, t, a, e, u) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" && !Ci(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, Bm(l, t, n, e, u)) : (l = en(a.type, null, e, t, t.mode, u), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !pc(l, u)) {
      var i = n.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Pe, a(i, e) && l.ref === t.ref) return Pt(l, t, u);
    }
    return t.flags |= 1, l = wt(n, e), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Bm(l, t, a, e, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Pe(n, e) && l.ref === t.ref) if (Ul = false, t.pendingProps = e = n, pc(l, u)) (l.flags & 131072) !== 0 && (Ul = true);
      else return t.lanes = l.lanes, Pt(l, t, u);
    }
    return bc(l, t, a, e, u);
  }
  function xm(l, t, a, e) {
    var u = e.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), e.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | a : a, l !== null) {
          for (e = t.child = l.child, u = 0; e !== null; ) u = u | e.lanes | e.childLanes, e = e.sibling;
          e = u & ~n;
        } else e = 0, t.child = null;
        return Ym(l, t, n, a, e);
      }
      if ((a & 536870912) !== 0) t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && fn(t, n !== null ? n.cachePool : null), n !== null ? Xs(t, n) : Ii(), Qs(t);
      else return e = t.lanes = 536870912, Ym(l, t, n !== null ? n.baseLanes | a : a, a, e);
    } else n !== null ? (fn(t, n.cachePool), Xs(t, n), Sa(), t.memoizedState = null) : (l !== null && fn(t, null), Ii(), Sa());
    return Wl(l, t, u, a), t.child;
  }
  function yu(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), t.sibling;
  }
  function Ym(l, t, a, e, u) {
    var n = Vi();
    return n = n === null ? null : { parent: Dl._currentValue, pool: n }, t.memoizedState = { baseLanes: a, cachePool: n }, l !== null && fn(t, null), Ii(), Qs(t), l !== null && _e(l, t, e, true), t.childLanes = u, null;
  }
  function Tn(l, t) {
    return t = An({ mode: t.mode, children: t.children }, l.mode), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Jm(l, t, a) {
    return wa(t, l.child, null, a), l = Tn(t, t.pendingProps), l.flags |= 2, _t(t), t.memoizedState = null, l;
  }
  function e0(l, t, a) {
    var e = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (ll) {
        if (e.mode === "hidden") return l = Tn(t, e), t.lanes = 536870912, yu(null, l);
        if (ki(t), (l = hl) ? (l = Po(l, Nt), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = { dehydrated: l, treeContext: oa !== null ? { id: Jt, overflow: Xt } : null, retryLane: 536870912, hydrationErrors: null }, a = Gs(l), a.return = t, t.child = a, Kl = t, hl = null)) : l = null, l === null) throw ra(t);
        return t.lanes = 536870912, null;
      }
      return Tn(t, e);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if (ki(t), u) if (t.flags & 256) t.flags &= -257, t = Jm(l, t, a);
      else if (t.memoizedState !== null) t.child = l.child, t.flags |= 128, t = null;
      else throw Error(o(558));
      else if (Ul || _e(l, t, a, false), u = (a & l.childLanes) !== 0, Ul || u) {
        if (e = yl, e !== null && (i = Nf(e, a), i !== 0 && i !== n.retryLane)) throw n.retryLane = i, Ya(l, i), st(e, l, i), Sc;
        jn(), t = Jm(l, t, a);
      } else l = n.treeContext, hl = Ct(i.nextSibling), Kl = t, ll = true, da = null, Nt = false, l !== null && As(t, l), t = Tn(t, e), t.flags |= 4096;
      return t;
    }
    return l = wt(l.child, { mode: e.mode, children: e.children }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function En(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(o(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function bc(l, t, a, e, u) {
    return Za(t), a = lc(l, t, a, e, void 0, u), e = tc(), l !== null && !Ul ? (ac(l, t, u), Pt(l, t, u)) : (ll && e && ji(t), t.flags |= 1, Wl(l, t, a, u), t.child);
  }
  function Xm(l, t, a, e, u, n) {
    return Za(t), t.updateQueue = null, a = Vs(t, e, a, u), Zs(l), e = tc(), l !== null && !Ul ? (ac(l, t, n), Pt(l, t, n)) : (ll && e && ji(t), t.flags |= 1, Wl(l, t, a, n), t.child);
  }
  function Qm(l, t, a, e, u) {
    if (Za(t), t.stateNode === null) {
      var n = ye, i = a.contextType;
      typeof i == "object" && i !== null && (n = wl(i)), n = new a(e, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = hc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = e, n.state = t.memoizedState, n.refs = {}, Ki(t), i = a.contextType, n.context = typeof i == "object" && i !== null ? wl(i) : ye, n.state = t.memoizedState, i = a.getDerivedStateFromProps, typeof i == "function" && (gc(t, a, i, e), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && hc.enqueueReplaceState(n, n.state, null), su(t, e, n, u), fu(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), e = true;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, f = $a(a, c);
      n.props = f;
      var y = n.context, S = a.contextType;
      i = ye, typeof S == "object" && S !== null && (i = wl(S));
      var M = a.getDerivedStateFromProps;
      S = typeof M == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || y !== i) && Om(t, n, e, i), va = false;
      var g = t.memoizedState;
      n.state = g, su(t, e, n, u), fu(), y = t.memoizedState, c || g !== y || va ? (typeof M == "function" && (gc(t, a, M, e), y = t.memoizedState), (f = va || pm(t, a, f, e, g, y, i)) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = e, t.memoizedState = y), n.props = e, n.state = y, n.context = i, e = f) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), e = false);
    } else {
      n = t.stateNode, wi(l, t), i = t.memoizedProps, S = $a(a, i), n.props = S, M = t.pendingProps, g = n.context, y = a.contextType, f = ye, typeof y == "object" && y !== null && (f = wl(y)), c = a.getDerivedStateFromProps, (y = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== M || g !== f) && Om(t, n, e, f), va = false, g = t.memoizedState, n.state = g, su(t, e, n, u), fu();
      var h = t.memoizedState;
      i !== M || g !== h || va || l !== null && l.dependencies !== null && nn(l.dependencies) ? (typeof c == "function" && (gc(t, a, c, e), h = t.memoizedState), (S = va || pm(t, a, S, e, g, h, f) || l !== null && l.dependencies !== null && nn(l.dependencies)) ? (y || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(e, h, f), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(e, h, f)), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 1024), t.memoizedProps = e, t.memoizedState = h), n.props = e, n.state = h, n.context = f, e = S) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && g === l.memoizedState || (t.flags |= 1024), e = false);
    }
    return n = e, En(l, t), e = (t.flags & 128) !== 0, n || e ? (n = t.stateNode, a = e && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && e ? (t.child = wa(t, l.child, null, u), t.child = wa(t, null, a, u)) : Wl(l, t, a, u), t.memoizedState = n.state, l = t.child) : l = Pt(l, t, u), l;
  }
  function Zm(l, t, a, e) {
    return Xa(), t.flags |= 256, Wl(l, t, a, e), t.child;
  }
  var Mc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
  function zc(l) {
    return { baseLanes: l, cachePool: Cs() };
  }
  function Gc(l, t, a) {
    return l = l !== null ? l.childLanes & ~a : 0, t && (l |= bt), l;
  }
  function Vm(l, t, a) {
    var e = t.pendingProps, u = false, n = (t.flags & 128) !== 0, i;
    if ((i = n) || (i = l !== null && l.memoizedState === null ? false : (Tl.current & 2) !== 0), i && (u = true, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (ll) {
        if (u ? _a(t) : Sa(), (l = hl) ? (l = Po(l, Nt), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = { dehydrated: l, treeContext: oa !== null ? { id: Jt, overflow: Xt } : null, retryLane: 536870912, hydrationErrors: null }, a = Gs(l), a.return = t, t.child = a, Kl = t, hl = null)) : l = null, l === null) throw ra(t);
        return nf(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = e.children;
      return e = e.fallback, u ? (Sa(), u = t.mode, c = An({ mode: "hidden", children: c }, u), e = Ja(e, u, a, null), c.return = t, e.return = t, c.sibling = e, t.child = c, e = t.child, e.memoizedState = zc(a), e.childLanes = Gc(l, i, a), t.memoizedState = Mc, yu(null, e)) : (_a(t), Tc(t, c));
    }
    var f = l.memoizedState;
    if (f !== null && (c = f.dehydrated, c !== null)) {
      if (n) t.flags & 256 ? (_a(t), t.flags &= -257, t = Ec(l, t, a)) : t.memoizedState !== null ? (Sa(), t.child = l.child, t.flags |= 128, t = null) : (Sa(), c = e.fallback, u = t.mode, e = An({ mode: "visible", children: e.children }, u), c = Ja(c, u, a, null), c.flags |= 2, e.return = t, c.return = t, e.sibling = c, t.child = e, wa(t, l.child, null, a), e = t.child, e.memoizedState = zc(a), e.childLanes = Gc(l, i, a), t.memoizedState = Mc, t = yu(null, e));
      else if (_a(t), nf(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var y = i.dgst;
        i = y, e = Error(o(419)), e.stack = "", e.digest = i, au({ value: e, source: null, stack: null }), t = Ec(l, t, a);
      } else if (Ul || _e(l, t, a, false), i = (a & l.childLanes) !== 0, Ul || i) {
        if (i = yl, i !== null && (e = Nf(i, a), e !== 0 && e !== f.retryLane)) throw f.retryLane = e, Ya(l, e), st(i, l, e), Sc;
        uf(c) || jn(), t = Ec(l, t, a);
      } else uf(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = f.treeContext, hl = Ct(c.nextSibling), Kl = t, ll = true, da = null, Nt = false, l !== null && As(t, l), t = Tc(t, e.children), t.flags |= 4096);
      return t;
    }
    return u ? (Sa(), c = e.fallback, u = t.mode, f = l.child, y = f.sibling, e = wt(f, { mode: "hidden", children: e.children }), e.subtreeFlags = f.subtreeFlags & 65011712, y !== null ? c = wt(y, c) : (c = Ja(c, u, a, null), c.flags |= 2), c.return = t, e.return = t, e.sibling = c, t.child = e, yu(null, e), e = t.child, c = l.child.memoizedState, c === null ? c = zc(a) : (u = c.cachePool, u !== null ? (f = Dl._currentValue, u = u.parent !== f ? { parent: f, pool: f } : u) : u = Cs(), c = { baseLanes: c.baseLanes | a, cachePool: u }), e.memoizedState = c, e.childLanes = Gc(l, i, a), t.memoizedState = Mc, yu(l.child, e)) : (_a(t), a = l.child, l = a.sibling, a = wt(a, { mode: "visible", children: e.children }), a.return = t, a.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = a, t.memoizedState = null, a);
  }
  function Tc(l, t) {
    return t = An({ mode: "visible", children: t }, l.mode), t.return = l, l.child = t;
  }
  function An(l, t) {
    return l = gt(22, l, null, t), l.lanes = 0, l;
  }
  function Ec(l, t, a) {
    return wa(t, l.child, null, a), l = Tc(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l;
  }
  function Lm(l, t, a) {
    l.lanes |= t;
    var e = l.alternate;
    e !== null && (e.lanes |= t), Ji(l.return, t, a);
  }
  function Ac(l, t, a, e, u, n) {
    var i = l.memoizedState;
    i === null ? l.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: e, tail: a, tailMode: u, treeForkCount: n } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = e, i.tail = a, i.tailMode = u, i.treeForkCount = n);
  }
  function Km(l, t, a) {
    var e = t.pendingProps, u = e.revealOrder, n = e.tail;
    e = e.children;
    var i = Tl.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, O(Tl, i), Wl(l, t, e, a), e = ll ? tu : 0, !c && l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null; ) {
      if (l.tag === 13) l.memoizedState !== null && Lm(l, a, t);
      else if (l.tag === 19) Lm(l, a, t);
      else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === t) break l;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) break l;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    switch (u) {
      case "forwards":
        for (a = t.child, u = null; a !== null; ) l = a.alternate, l !== null && yn(l) === null && (u = a), a = a.sibling;
        a = u, a === null ? (u = t.child, t.child = null) : (u = a.sibling, a.sibling = null), Ac(t, false, u, a, n, e);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, u = t.child, t.child = null; u !== null; ) {
          if (l = u.alternate, l !== null && yn(l) === null) {
            t.child = u;
            break;
          }
          l = u.sibling, u.sibling = a, a = u, u = l;
        }
        Ac(t, true, a, null, n, e);
        break;
      case "together":
        Ac(t, false, null, null, void 0, e);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Pt(l, t, a) {
    if (l !== null && (t.dependencies = l.dependencies), za |= t.lanes, (a & t.childLanes) === 0) if (l !== null) {
      if (_e(l, t, a, false), (a & t.childLanes) === 0) return null;
    } else return null;
    if (l !== null && t.child !== l.child) throw Error(o(153));
    if (t.child !== null) {
      for (l = t.child, a = wt(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; ) l = l.sibling, a = a.sibling = wt(l, l.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function pc(l, t) {
    return (l.lanes & t) !== 0 ? true : (l = l.dependencies, !!(l !== null && nn(l)));
  }
  function u0(l, t, a) {
    switch (t.tag) {
      case 3:
        Vl(t, t.stateNode.containerInfo), ya(t, Dl, l.memoizedState.cache), Xa();
        break;
      case 27:
      case 5:
        Ra(t);
        break;
      case 4:
        Vl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ya(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return t.flags |= 128, ki(t), null;
        break;
      case 13:
        var e = t.memoizedState;
        if (e !== null) return e.dehydrated !== null ? (_a(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Vm(l, t, a) : (_a(t), l = Pt(l, t, a), l !== null ? l.sibling : null);
        _a(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (e = (a & t.childLanes) !== 0, e || (_e(l, t, a, false), e = (a & t.childLanes) !== 0), u) {
          if (e) return Km(l, t, a);
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), O(Tl, Tl.current), e) break;
        return null;
      case 22:
        return t.lanes = 0, xm(l, t, a, t.pendingProps);
      case 24:
        ya(t, Dl, l.memoizedState.cache);
    }
    return Pt(l, t, a);
  }
  function wm(l, t, a) {
    if (l !== null) if (l.memoizedProps !== t.pendingProps) Ul = true;
    else {
      if (!pc(l, a) && (t.flags & 128) === 0) return Ul = false, u0(l, t, a);
      Ul = (l.flags & 131072) !== 0;
    }
    else Ul = false, ll && (t.flags & 1048576) !== 0 && Es(t, tu, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var e = t.pendingProps;
          if (l = La(t.elementType), t.type = l, typeof l == "function") Ci(l) ? (e = $a(l, e), t.tag = 1, t = Qm(null, t, l, e, a)) : (t.tag = 0, t = bc(null, t, l, e, a));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === Al) {
                t.tag = 11, t = jm(null, t, l, e, a);
                break l;
              } else if (u === W) {
                t.tag = 14, t = qm(null, t, l, e, a);
                break l;
              }
            }
            throw t = zt(l) || l, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return bc(l, t, t.type, t.pendingProps, a);
      case 1:
        return e = t.type, u = $a(e, t.pendingProps), Qm(l, t, e, u, a);
      case 3:
        l: {
          if (Vl(t, t.stateNode.containerInfo), l === null) throw Error(o(387));
          e = t.pendingProps;
          var n = t.memoizedState;
          u = n.element, wi(l, t), su(t, e, null, a);
          var i = t.memoizedState;
          if (e = i.cache, ya(t, Dl, e), e !== n.cache && Xi(t, [Dl], a, true), fu(), e = i.element, n.isDehydrated) if (n = { element: e, isDehydrated: false, cache: i.cache }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
            t = Zm(l, t, e, a);
            break l;
          } else if (e !== u) {
            u = pt(Error(o(424)), t), au(u), t = Zm(l, t, e, a);
            break l;
          } else {
            switch (l = t.stateNode.containerInfo, l.nodeType) {
              case 9:
                l = l.body;
                break;
              default:
                l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
            }
            for (hl = Ct(l.firstChild), Kl = t, ll = true, da = null, Nt = true, a = xs(t, null, e, a), t.child = a; a; ) a.flags = a.flags & -3 | 4096, a = a.sibling;
          }
          else {
            if (Xa(), e === u) {
              t = Pt(l, t, a);
              break l;
            }
            Wl(l, t, e, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return En(l, t), l === null ? (a = nd(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : ll || (a = t.type, l = t.pendingProps, e = Qn(X.current).createElement(a), e[Ll] = t, e[et] = l, $l(e, a, l), Yl(e), t.stateNode = e) : t.memoizedState = nd(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
      case 27:
        return Ra(t), l === null && ll && (e = t.stateNode = ad(t.type, t.pendingProps, X.current), Kl = t, Nt = true, u = hl, pa(t.type) ? (cf = u, hl = Ct(e.firstChild)) : hl = u), Wl(l, t, t.pendingProps.children, a), En(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && ll && ((u = e = hl) && (e = H0(e, t.type, t.pendingProps, Nt), e !== null ? (t.stateNode = e, Kl = t, hl = Ct(e.firstChild), Nt = false, u = true) : u = false), u || ra(t)), Ra(t), u = t.type, n = t.pendingProps, i = l !== null ? l.memoizedProps : null, e = n.children, tf(u, n) ? e = null : i !== null && tf(u, i) && (t.flags |= 32), t.memoizedState !== null && (u = lc(l, t, $r, null, null, a), Du._currentValue = u), En(l, t), Wl(l, t, e, a), t.child;
      case 6:
        return l === null && ll && ((l = a = hl) && (a = j0(a, t.pendingProps, Nt), a !== null ? (t.stateNode = a, Kl = t, hl = null, l = true) : l = false), l || ra(t)), null;
      case 13:
        return Vm(l, t, a);
      case 4:
        return Vl(t, t.stateNode.containerInfo), e = t.pendingProps, l === null ? t.child = wa(t, null, e, a) : Wl(l, t, e, a), t.child;
      case 11:
        return jm(l, t, t.type, t.pendingProps, a);
      case 7:
        return Wl(l, t, t.pendingProps, a), t.child;
      case 8:
        return Wl(l, t, t.pendingProps.children, a), t.child;
      case 12:
        return Wl(l, t, t.pendingProps.children, a), t.child;
      case 10:
        return e = t.pendingProps, ya(t, t.type, e.value), Wl(l, t, e.children, a), t.child;
      case 9:
        return u = t.type._context, e = t.pendingProps.children, Za(t), u = wl(u), e = e(u), t.flags |= 1, Wl(l, t, e, a), t.child;
      case 14:
        return qm(l, t, t.type, t.pendingProps, a);
      case 15:
        return Bm(l, t, t.type, t.pendingProps, a);
      case 19:
        return Km(l, t, a);
      case 31:
        return e0(l, t, a);
      case 22:
        return xm(l, t, a, t.pendingProps);
      case 24:
        return Za(t), e = wl(Dl), l === null ? (u = Vi(), u === null && (u = yl, n = Qi(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= a), u = n), t.memoizedState = { parent: e, cache: u }, Ki(t), ya(t, Dl, u)) : ((l.lanes & a) !== 0 && (wi(l, t), su(t, null, null, a), fu()), u = l.memoizedState, n = t.memoizedState, u.parent !== e ? (u = { parent: e, cache: e }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), ya(t, Dl, e)) : (e = n.cache, ya(t, Dl, e), e !== u.cache && Xi(t, [Dl], a, true))), Wl(l, t, t.pendingProps.children, a), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function la(l) {
    l.flags |= 4;
  }
  function Oc(l, t, a, e, u) {
    if ((t = (l.mode & 32) !== 0) && (t = false), t) {
      if (l.flags |= 16777216, (u & 335544128) === u) if (l.stateNode.complete) l.flags |= 8192;
      else if (Mo()) l.flags |= 8192;
      else throw Ka = mn, Li;
    } else l.flags &= -16777217;
  }
  function Wm(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
    else if (l.flags |= 16777216, !md(t)) if (Mo()) l.flags |= 8192;
    else throw Ka = mn, Li;
  }
  function pn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? pf() : 536870912, l.lanes |= t, Ne |= t);
  }
  function vu(l, t) {
    if (!ll) switch (l.tailMode) {
      case "hidden":
        t = l.tail;
        for (var a = null; t !== null; ) t.alternate !== null && (a = t), t = t.sibling;
        a === null ? l.tail = null : a.sibling = null;
        break;
      case "collapsed":
        a = l.tail;
        for (var e = null; a !== null; ) a.alternate !== null && (e = a), a = a.sibling;
        e === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : e.sibling = null;
    }
  }
  function _l(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, a = 0, e = 0;
    if (t) for (var u = l.child; u !== null; ) a |= u.lanes | u.childLanes, e |= u.subtreeFlags & 65011712, e |= u.flags & 65011712, u.return = l, u = u.sibling;
    else for (u = l.child; u !== null; ) a |= u.lanes | u.childLanes, e |= u.subtreeFlags, e |= u.flags, u.return = l, u = u.sibling;
    return l.subtreeFlags |= e, l.childLanes = a, t;
  }
  function n0(l, t, a) {
    var e = t.pendingProps;
    switch (qi(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return _l(t), null;
      case 1:
        return _l(t), null;
      case 3:
        return a = t.stateNode, e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), It(Dl), vl(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (he(t) ? la(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, xi())), _l(t), null;
      case 26:
        var u = t.type, n = t.memoizedState;
        return l === null ? (la(t), n !== null ? (_l(t), Wm(t, n)) : (_l(t), Oc(t, u, null, e, a))) : n ? n !== l.memoizedState ? (la(t), _l(t), Wm(t, n)) : (_l(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== e && la(t), _l(t), Oc(t, u, l, e, a)), null;
      case 27:
        if (ka(t), a = X.current, u = t.type, l !== null && t.stateNode != null) l.memoizedProps !== e && la(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(o(166));
            return _l(t), null;
          }
          l = D.current, he(t) ? ps(t) : (l = ad(u, e, a), t.stateNode = l, la(t));
        }
        return _l(t), null;
      case 5:
        if (ka(t), u = t.type, l !== null && t.stateNode != null) l.memoizedProps !== e && la(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(o(166));
            return _l(t), null;
          }
          if (n = D.current, he(t)) ps(t);
          else {
            var i = Qn(X.current);
            switch (n) {
              case 1:
                n = i.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    n = i.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                    break;
                  case "script":
                    n = i.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild);
                    break;
                  case "select":
                    n = typeof e.is == "string" ? i.createElement("select", { is: e.is }) : i.createElement("select"), e.multiple ? n.multiple = true : e.size && (n.size = e.size);
                    break;
                  default:
                    n = typeof e.is == "string" ? i.createElement(u, { is: e.is }) : i.createElement(u);
                }
            }
            n[Ll] = t, n[et] = e;
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break l;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            t.stateNode = n;
            l: switch ($l(n, u, e), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!e.autoFocus;
                break l;
              case "img":
                e = true;
                break l;
              default:
                e = false;
            }
            e && la(t);
          }
        }
        return _l(t), Oc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== e && la(t);
        else {
          if (typeof e != "string" && t.stateNode === null) throw Error(o(166));
          if (l = X.current, he(t)) {
            if (l = t.stateNode, a = t.memoizedProps, e = null, u = Kl, u !== null) switch (u.tag) {
              case 27:
              case 5:
                e = u.memoizedProps;
            }
            l[Ll] = t, l = !!(l.nodeValue === a || e !== null && e.suppressHydrationWarning === true || Lo(l.nodeValue, a)), l || ra(t, true);
          } else l = Qn(l).createTextNode(e), l[Ll] = t, t.stateNode = l;
        }
        return _l(t), null;
      case 31:
        if (a = t.memoizedState, l === null || l.memoizedState !== null) {
          if (e = he(t), a !== null) {
            if (l === null) {
              if (!e) throw Error(o(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(557));
              l[Ll] = t;
            } else Xa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            _l(t), l = false;
          } else a = xi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a), l = true;
          if (!l) return t.flags & 256 ? (_t(t), t) : (_t(t), null);
          if ((t.flags & 128) !== 0) throw Error(o(558));
        }
        return _l(t), null;
      case 13:
        if (e = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (u = he(t), e !== null && e.dehydrated !== null) {
            if (l === null) {
              if (!u) throw Error(o(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[Ll] = t;
            } else Xa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            _l(t), u = false;
          } else u = xi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = true;
          if (!u) return t.flags & 256 ? (_t(t), t) : (_t(t), null);
        }
        return _t(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = e !== null, l = l !== null && l.memoizedState !== null, a && (e = t.child, u = null, e.alternate !== null && e.alternate.memoizedState !== null && e.alternate.memoizedState.cachePool !== null && (u = e.alternate.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== u && (e.flags |= 2048)), a !== l && a && (t.child.flags |= 8192), pn(t, t.updateQueue), _l(t), null);
      case 4:
        return vl(), l === null && Ic(t.stateNode.containerInfo), _l(t), null;
      case 10:
        return It(t.type), _l(t), null;
      case 19:
        if (G(Tl), e = t.memoizedState, e === null) return _l(t), null;
        if (u = (t.flags & 128) !== 0, n = e.rendering, n === null) if (u) vu(e, false);
        else {
          if (zl !== 0 || l !== null && (l.flags & 128) !== 0) for (l = t.child; l !== null; ) {
            if (n = yn(l), n !== null) {
              for (t.flags |= 128, vu(e, false), l = n.updateQueue, t.updateQueue = l, pn(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; ) zs(a, l), a = a.sibling;
              return O(Tl, Tl.current & 1 | 2), ll && Wt(t, e.treeForkCount), t.child;
            }
            l = l.sibling;
          }
          e.tail !== null && Ol() > Cn && (t.flags |= 128, u = true, vu(e, false), t.lanes = 4194304);
        }
        else {
          if (!u) if (l = yn(n), l !== null) {
            if (t.flags |= 128, u = true, l = l.updateQueue, t.updateQueue = l, pn(t, l), vu(e, true), e.tail === null && e.tailMode === "hidden" && !n.alternate && !ll) return _l(t), null;
          } else 2 * Ol() - e.renderingStartTime > Cn && a !== 536870912 && (t.flags |= 128, u = true, vu(e, false), t.lanes = 4194304);
          e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
        }
        return e.tail !== null ? (l = e.tail, e.rendering = l, e.tail = l.sibling, e.renderingStartTime = Ol(), l.sibling = null, a = Tl.current, O(Tl, u ? a & 1 | 2 : a & 1), ll && Wt(t, e.treeForkCount), l) : (_l(t), null);
      case 22:
      case 23:
        return _t(t), Fi(), e = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== e && (t.flags |= 8192) : e && (t.flags |= 8192), e ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (_l(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _l(t), a = t.updateQueue, a !== null && pn(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (t.flags |= 2048), l !== null && G(Va), null;
      case 24:
        return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), It(Dl), _l(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function i0(l, t) {
    switch (qi(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return It(Dl), vl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return ka(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (_t(t), t.alternate === null) throw Error(o(340));
          Xa();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (_t(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          Xa();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return G(Tl), null;
      case 4:
        return vl(), null;
      case 10:
        return It(t.type), null;
      case 22:
      case 23:
        return _t(t), Fi(), l !== null && G(Va), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return It(Dl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function $m(l, t) {
    switch (qi(t), t.tag) {
      case 3:
        It(Dl), vl();
        break;
      case 26:
      case 27:
      case 5:
        ka(t);
        break;
      case 4:
        vl();
        break;
      case 31:
        t.memoizedState !== null && _t(t);
        break;
      case 13:
        _t(t);
        break;
      case 19:
        G(Tl);
        break;
      case 10:
        It(t.type);
        break;
      case 22:
      case 23:
        _t(t), Fi(), l !== null && G(Va);
        break;
      case 24:
        It(Dl);
    }
  }
  function gu(l, t) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var u = e.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            e = void 0;
            var n = a.create, i = a.inst;
            e = n(), i.destroy = e;
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (c) {
      sl(t, t.return, c);
    }
  }
  function ba(l, t, a) {
    try {
      var e = t.updateQueue, u = e !== null ? e.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            var i = e.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, u = t;
              var f = a, y = c;
              try {
                y();
              } catch (S) {
                sl(u, f, S);
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (S) {
      sl(t, t.return, S);
    }
  }
  function Im(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Js(t, a);
      } catch (e) {
        sl(l, l.return, e);
      }
    }
  }
  function Fm(l, t, a) {
    a.props = $a(l.type, l.memoizedProps), a.state = l.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (e) {
      sl(l, t, e);
    }
  }
  function hu(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var e = l.stateNode;
            break;
          case 30:
            e = l.stateNode;
            break;
          default:
            e = l.stateNode;
        }
        typeof a == "function" ? l.refCleanup = a(e) : a.current = e;
      }
    } catch (u) {
      sl(l, t, u);
    }
  }
  function Qt(l, t) {
    var a = l.ref, e = l.refCleanup;
    if (a !== null) if (typeof e == "function") try {
      e();
    } catch (u) {
      sl(l, t, u);
    } finally {
      l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
    }
    else if (typeof a == "function") try {
      a(null);
    } catch (u) {
      sl(l, t, u);
    }
    else a.current = null;
  }
  function km(l) {
    var t = l.type, a = l.memoizedProps, e = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break l;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    } catch (u) {
      sl(l, l.return, u);
    }
  }
  function Dc(l, t, a) {
    try {
      var e = l.stateNode;
      O0(e, l.type, a, t), e[et] = t;
    } catch (u) {
      sl(l, l.return, u);
    }
  }
  function Pm(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && pa(l.type) || l.tag === 4;
  }
  function Nc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Pm(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && pa(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Uc(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6) l = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Lt));
    else if (e !== 4 && (e === 27 && pa(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null)) for (Uc(l, t, a), l = l.sibling; l !== null; ) Uc(l, t, a), l = l.sibling;
  }
  function On(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6) l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (e !== 4 && (e === 27 && pa(l.type) && (a = l.stateNode), l = l.child, l !== null)) for (On(l, t, a), l = l.sibling; l !== null; ) On(l, t, a), l = l.sibling;
  }
  function lo(l) {
    var t = l.stateNode, a = l.memoizedProps;
    try {
      for (var e = l.type, u = t.attributes; u.length; ) t.removeAttributeNode(u[0]);
      $l(t, e, a), t[Ll] = l, t[et] = a;
    } catch (n) {
      sl(l, l.return, n);
    }
  }
  var ta = false, Cl = false, Cc = false, to = typeof WeakSet == "function" ? WeakSet : Set, Jl = null;
  function c0(l, t) {
    if (l = l.containerInfo, Pc = $n, l = rs(l), Ei(l)) {
      if ("selectionStart" in l) var a = { start: l.selectionStart, end: l.selectionEnd };
      else l: {
        a = (a = l.ownerDocument) && a.defaultView || window;
        var e = a.getSelection && a.getSelection();
        if (e && e.rangeCount !== 0) {
          a = e.anchorNode;
          var u = e.anchorOffset, n = e.focusNode;
          e = e.focusOffset;
          try {
            a.nodeType, n.nodeType;
          } catch {
            a = null;
            break l;
          }
          var i = 0, c = -1, f = -1, y = 0, S = 0, M = l, g = null;
          t: for (; ; ) {
            for (var h; M !== a || u !== 0 && M.nodeType !== 3 || (c = i + u), M !== n || e !== 0 && M.nodeType !== 3 || (f = i + e), M.nodeType === 3 && (i += M.nodeValue.length), (h = M.firstChild) !== null; ) g = M, M = h;
            for (; ; ) {
              if (M === l) break t;
              if (g === a && ++y === u && (c = i), g === n && ++S === e && (f = i), (h = M.nextSibling) !== null) break;
              M = g, g = M.parentNode;
            }
            M = h;
          }
          a = c === -1 || f === -1 ? null : { start: c, end: f };
        } else a = null;
      }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (lf = { focusedElem: l, selectionRange: a }, $n = false, Jl = t; Jl !== null; ) if (t = Jl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null) l.return = t, Jl = l;
    else for (; Jl !== null; ) {
      switch (t = Jl, n = t.alternate, l = t.flags, t.tag) {
        case 0:
          if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null)) for (a = 0; a < l.length; a++) u = l[a], u.ref.impl = u.nextImpl;
          break;
        case 11:
        case 15:
          break;
        case 1:
          if ((l & 1024) !== 0 && n !== null) {
            l = void 0, a = t, u = n.memoizedProps, n = n.memoizedState, e = a.stateNode;
            try {
              var C = $a(a.type, u);
              l = e.getSnapshotBeforeUpdate(C, n), e.__reactInternalSnapshotBeforeUpdate = l;
            } catch (Y) {
              sl(a, a.return, Y);
            }
          }
          break;
        case 3:
          if ((l & 1024) !== 0) {
            if (l = t.stateNode.containerInfo, a = l.nodeType, a === 9) ef(l);
            else if (a === 1) switch (l.nodeName) {
              case "HEAD":
              case "HTML":
              case "BODY":
                ef(l);
                break;
              default:
                l.textContent = "";
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        default:
          if ((l & 1024) !== 0) throw Error(o(163));
      }
      if (l = t.sibling, l !== null) {
        l.return = t.return, Jl = l;
        break;
      }
      Jl = t.return;
    }
  }
  function ao(l, t, a) {
    var e = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        ea(l, a), e & 4 && gu(5, a);
        break;
      case 1:
        if (ea(l, a), e & 4) if (l = a.stateNode, t === null) try {
          l.componentDidMount();
        } catch (i) {
          sl(a, a.return, i);
        }
        else {
          var u = $a(a.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
          } catch (i) {
            sl(a, a.return, i);
          }
        }
        e & 64 && Im(a), e & 512 && hu(a, a.return);
        break;
      case 3:
        if (ea(l, a), e & 64 && (l = a.updateQueue, l !== null)) {
          if (t = null, a.child !== null) switch (a.child.tag) {
            case 27:
            case 5:
              t = a.child.stateNode;
              break;
            case 1:
              t = a.child.stateNode;
          }
          try {
            Js(l, t);
          } catch (i) {
            sl(a, a.return, i);
          }
        }
        break;
      case 27:
        t === null && e & 4 && lo(a);
      case 26:
      case 5:
        ea(l, a), t === null && e & 4 && km(a), e & 512 && hu(a, a.return);
        break;
      case 12:
        ea(l, a);
        break;
      case 31:
        ea(l, a), e & 4 && no(l, a);
        break;
      case 13:
        ea(l, a), e & 4 && io(l, a), e & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = g0.bind(null, a), q0(l, a))));
        break;
      case 22:
        if (e = a.memoizedState !== null || ta, !e) {
          t = t !== null && t.memoizedState !== null || Cl, u = ta;
          var n = Cl;
          ta = e, (Cl = t) && !n ? ua(l, a, (a.subtreeFlags & 8772) !== 0) : ea(l, a), ta = u, Cl = n;
        }
        break;
      case 30:
        break;
      default:
        ea(l, a);
    }
  }
  function eo(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, eo(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && fi(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var bl = null, nt = false;
  function aa(l, t, a) {
    for (a = a.child; a !== null; ) uo(l, t, a), a = a.sibling;
  }
  function uo(l, t, a) {
    if (rt && typeof rt.onCommitFiberUnmount == "function") try {
      rt.onCommitFiberUnmount(Xe, a);
    } catch {
    }
    switch (a.tag) {
      case 26:
        Cl || Qt(a, t), aa(l, t, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Cl || Qt(a, t);
        var e = bl, u = nt;
        pa(a.type) && (bl = a.stateNode, nt = false), aa(l, t, a), Au(a.stateNode), bl = e, nt = u;
        break;
      case 5:
        Cl || Qt(a, t);
      case 6:
        if (e = bl, u = nt, bl = null, aa(l, t, a), bl = e, nt = u, bl !== null) if (nt) try {
          (bl.nodeType === 9 ? bl.body : bl.nodeName === "HTML" ? bl.ownerDocument.body : bl).removeChild(a.stateNode);
        } catch (n) {
          sl(a, t, n);
        }
        else try {
          bl.removeChild(a.stateNode);
        } catch (n) {
          sl(a, t, n);
        }
        break;
      case 18:
        bl !== null && (nt ? (l = bl, Fo(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, a.stateNode), xe(l)) : Fo(bl, a.stateNode));
        break;
      case 4:
        e = bl, u = nt, bl = a.stateNode.containerInfo, nt = true, aa(l, t, a), bl = e, nt = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ba(2, a, t), Cl || ba(4, a, t), aa(l, t, a);
        break;
      case 1:
        Cl || (Qt(a, t), e = a.stateNode, typeof e.componentWillUnmount == "function" && Fm(a, t, e)), aa(l, t, a);
        break;
      case 21:
        aa(l, t, a);
        break;
      case 22:
        Cl = (e = Cl) || a.memoizedState !== null, aa(l, t, a), Cl = e;
        break;
      default:
        aa(l, t, a);
    }
  }
  function no(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        xe(l);
      } catch (a) {
        sl(t, t.return, a);
      }
    }
  }
  function io(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
      xe(l);
    } catch (a) {
      sl(t, t.return, a);
    }
  }
  function f0(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new to()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new to()), t;
      default:
        throw Error(o(435, l.tag));
    }
  }
  function Dn(l, t) {
    var a = f0(l);
    t.forEach(function(e) {
      if (!a.has(e)) {
        a.add(e);
        var u = h0.bind(null, l, e);
        e.then(u, u);
      }
    });
  }
  function it(l, t) {
    var a = t.deletions;
    if (a !== null) for (var e = 0; e < a.length; e++) {
      var u = a[e], n = l, i = t, c = i;
      l: for (; c !== null; ) {
        switch (c.tag) {
          case 27:
            if (pa(c.type)) {
              bl = c.stateNode, nt = false;
              break l;
            }
            break;
          case 5:
            bl = c.stateNode, nt = false;
            break l;
          case 3:
          case 4:
            bl = c.stateNode.containerInfo, nt = true;
            break l;
        }
        c = c.return;
      }
      if (bl === null) throw Error(o(160));
      uo(n, i, u), bl = null, nt = false, n = u.alternate, n !== null && (n.return = null), u.return = null;
    }
    if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) co(t, l), t = t.sibling;
  }
  var jt = null;
  function co(l, t) {
    var a = l.alternate, e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        it(t, l), ct(l), e & 4 && (ba(3, l, l.return), gu(3, l), ba(5, l, l.return));
        break;
      case 1:
        it(t, l), ct(l), e & 512 && (Cl || a === null || Qt(a, a.return)), e & 64 && ta && (l = l.updateQueue, l !== null && (e = l.callbacks, e !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? e : a.concat(e))));
        break;
      case 26:
        var u = jt;
        if (it(t, l), ct(l), e & 512 && (Cl || a === null || Qt(a, a.return)), e & 4) {
          var n = a !== null ? a.memoizedState : null;
          if (e = l.memoizedState, a === null) if (e === null) if (l.stateNode === null) {
            l: {
              e = l.type, a = l.memoizedProps, u = u.ownerDocument || u;
              t: switch (e) {
                case "title":
                  n = u.getElementsByTagName("title")[0], (!n || n[Ve] || n[Ll] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(e), u.head.insertBefore(n, u.querySelector("head > title"))), $l(n, e, a), n[Ll] = l, Yl(n), e = n;
                  break l;
                case "link":
                  var i = fd("link", "href", u).get(e + (a.href || ""));
                  if (i) {
                    for (var c = 0; c < i.length; c++) if (n = i[c], n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                      i.splice(c, 1);
                      break t;
                    }
                  }
                  n = u.createElement(e), $l(n, e, a), u.head.appendChild(n);
                  break;
                case "meta":
                  if (i = fd("meta", "content", u).get(e + (a.content || ""))) {
                    for (c = 0; c < i.length; c++) if (n = i[c], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                      i.splice(c, 1);
                      break t;
                    }
                  }
                  n = u.createElement(e), $l(n, e, a), u.head.appendChild(n);
                  break;
                default:
                  throw Error(o(468, e));
              }
              n[Ll] = l, Yl(n), e = n;
            }
            l.stateNode = e;
          } else sd(u, l.type, l.stateNode);
          else l.stateNode = cd(u, e, l.memoizedProps);
          else n !== e ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, e === null ? sd(u, l.type, l.stateNode) : cd(u, e, l.memoizedProps)) : e === null && l.stateNode !== null && Dc(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        it(t, l), ct(l), e & 512 && (Cl || a === null || Qt(a, a.return)), a !== null && e & 4 && Dc(l, l.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (it(t, l), ct(l), e & 512 && (Cl || a === null || Qt(a, a.return)), l.flags & 32) {
          u = l.stateNode;
          try {
            ce(u, "");
          } catch (C) {
            sl(l, l.return, C);
          }
        }
        e & 4 && l.stateNode != null && (u = l.memoizedProps, Dc(l, u, a !== null ? a.memoizedProps : u)), e & 1024 && (Cc = true);
        break;
      case 6:
        if (it(t, l), ct(l), e & 4) {
          if (l.stateNode === null) throw Error(o(162));
          e = l.memoizedProps, a = l.stateNode;
          try {
            a.nodeValue = e;
          } catch (C) {
            sl(l, l.return, C);
          }
        }
        break;
      case 3:
        if (Ln = null, u = jt, jt = Zn(t.containerInfo), it(t, l), jt = u, ct(l), e & 4 && a !== null && a.memoizedState.isDehydrated) try {
          xe(t.containerInfo);
        } catch (C) {
          sl(l, l.return, C);
        }
        Cc && (Cc = false, fo(l));
        break;
      case 4:
        e = jt, jt = Zn(l.stateNode.containerInfo), it(t, l), ct(l), jt = e;
        break;
      case 12:
        it(t, l), ct(l);
        break;
      case 31:
        it(t, l), ct(l), e & 4 && (e = l.updateQueue, e !== null && (l.updateQueue = null, Dn(l, e)));
        break;
      case 13:
        it(t, l), ct(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Un = Ol()), e & 4 && (e = l.updateQueue, e !== null && (l.updateQueue = null, Dn(l, e)));
        break;
      case 22:
        u = l.memoizedState !== null;
        var f = a !== null && a.memoizedState !== null, y = ta, S = Cl;
        if (ta = y || u, Cl = S || f, it(t, l), Cl = S, ta = y, ct(l), e & 8192) l: for (t = l.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (a === null || f || ta || Cl || Ia(l)), a = null, t = l; ; ) {
          if (t.tag === 5 || t.tag === 26) {
            if (a === null) {
              f = a = t;
              try {
                if (n = f.stateNode, u) i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                else {
                  c = f.stateNode;
                  var M = f.memoizedProps.style, g = M != null && M.hasOwnProperty("display") ? M.display : null;
                  c.style.display = g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                }
              } catch (C) {
                sl(f, f.return, C);
              }
            }
          } else if (t.tag === 6) {
            if (a === null) {
              f = t;
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (C) {
                sl(f, f.return, C);
              }
            }
          } else if (t.tag === 18) {
            if (a === null) {
              f = t;
              try {
                var h = f.stateNode;
                u ? ko(h, true) : ko(f.stateNode, false);
              } catch (C) {
                sl(f, f.return, C);
              }
            }
          } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === l) break l;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l) break l;
            a === t && (a = null), t = t.return;
          }
          a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
        }
        e & 4 && (e = l.updateQueue, e !== null && (a = e.retryQueue, a !== null && (e.retryQueue = null, Dn(l, a))));
        break;
      case 19:
        it(t, l), ct(l), e & 4 && (e = l.updateQueue, e !== null && (l.updateQueue = null, Dn(l, e)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        it(t, l), ct(l);
    }
  }
  function ct(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, e = l.return; e !== null; ) {
          if (Pm(e)) {
            a = e;
            break;
          }
          e = e.return;
        }
        if (a == null) throw Error(o(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode, n = Nc(l);
            On(l, n, u);
            break;
          case 5:
            var i = a.stateNode;
            a.flags & 32 && (ce(i, ""), a.flags &= -33);
            var c = Nc(l);
            On(l, c, i);
            break;
          case 3:
          case 4:
            var f = a.stateNode.containerInfo, y = Nc(l);
            Uc(l, y, f);
            break;
          default:
            throw Error(o(161));
        }
      } catch (S) {
        sl(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function fo(l) {
    if (l.subtreeFlags & 1024) for (l = l.child; l !== null; ) {
      var t = l;
      fo(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
    }
  }
  function ea(l, t) {
    if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) ao(l, t.alternate, t), t = t.sibling;
  }
  function Ia(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ba(4, t, t.return), Ia(t);
          break;
        case 1:
          Qt(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && Fm(t, t.return, a), Ia(t);
          break;
        case 27:
          Au(t.stateNode);
        case 26:
        case 5:
          Qt(t, t.return), Ia(t);
          break;
        case 22:
          t.memoizedState === null && Ia(t);
          break;
        case 30:
          Ia(t);
          break;
        default:
          Ia(t);
      }
      l = l.sibling;
    }
  }
  function ua(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var e = t.alternate, u = l, n = t, i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ua(u, n, a), gu(4, n);
          break;
        case 1:
          if (ua(u, n, a), e = n, u = e.stateNode, typeof u.componentDidMount == "function") try {
            u.componentDidMount();
          } catch (y) {
            sl(e, e.return, y);
          }
          if (e = n, u = e.updateQueue, u !== null) {
            var c = e.stateNode;
            try {
              var f = u.shared.hiddenCallbacks;
              if (f !== null) for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++) Ys(f[u], c);
            } catch (y) {
              sl(e, e.return, y);
            }
          }
          a && i & 64 && Im(n), hu(n, n.return);
          break;
        case 27:
          lo(n);
        case 26:
        case 5:
          ua(u, n, a), a && e === null && i & 4 && km(n), hu(n, n.return);
          break;
        case 12:
          ua(u, n, a);
          break;
        case 31:
          ua(u, n, a), a && i & 4 && no(u, n);
          break;
        case 13:
          ua(u, n, a), a && i & 4 && io(u, n);
          break;
        case 22:
          n.memoizedState === null && ua(u, n, a), hu(n, n.return);
          break;
        case 30:
          break;
        default:
          ua(u, n, a);
      }
      t = t.sibling;
    }
  }
  function Rc(l, t) {
    var a = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && eu(a));
  }
  function Hc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && eu(l));
  }
  function qt(l, t, a, e) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) so(l, t, a, e), t = t.sibling;
  }
  function so(l, t, a, e) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        qt(l, t, a, e), u & 2048 && gu(9, t);
        break;
      case 1:
        qt(l, t, a, e);
        break;
      case 3:
        qt(l, t, a, e), u & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && eu(l)));
        break;
      case 12:
        if (u & 2048) {
          qt(l, t, a, e), l = t.stateNode;
          try {
            var n = t.memoizedProps, i = n.id, c = n.onPostCommit;
            typeof c == "function" && c(i, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0);
          } catch (f) {
            sl(t, t.return, f);
          }
        } else qt(l, t, a, e);
        break;
      case 31:
        qt(l, t, a, e);
        break;
      case 13:
        qt(l, t, a, e);
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, i = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? qt(l, t, a, e) : _u(l, t) : n._visibility & 2 ? qt(l, t, a, e) : (n._visibility |= 2, pe(l, t, a, e, (t.subtreeFlags & 10256) !== 0 || false)), u & 2048 && Rc(i, t);
        break;
      case 24:
        qt(l, t, a, e), u & 2048 && Hc(t.alternate, t);
        break;
      default:
        qt(l, t, a, e);
    }
  }
  function pe(l, t, a, e, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
      var n = l, i = t, c = a, f = e, y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          pe(n, i, c, f, u), gu(8, i);
          break;
        case 23:
          break;
        case 22:
          var S = i.stateNode;
          i.memoizedState !== null ? S._visibility & 2 ? pe(n, i, c, f, u) : _u(n, i) : (S._visibility |= 2, pe(n, i, c, f, u)), u && y & 2048 && Rc(i.alternate, i);
          break;
        case 24:
          pe(n, i, c, f, u), u && y & 2048 && Hc(i.alternate, i);
          break;
        default:
          pe(n, i, c, f, u);
      }
      t = t.sibling;
    }
  }
  function _u(l, t) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
      var a = l, e = t, u = e.flags;
      switch (e.tag) {
        case 22:
          _u(a, e), u & 2048 && Rc(e.alternate, e);
          break;
        case 24:
          _u(a, e), u & 2048 && Hc(e.alternate, e);
          break;
        default:
          _u(a, e);
      }
      t = t.sibling;
    }
  }
  var Su = 8192;
  function Oe(l, t, a) {
    if (l.subtreeFlags & Su) for (l = l.child; l !== null; ) mo(l, t, a), l = l.sibling;
  }
  function mo(l, t, a) {
    switch (l.tag) {
      case 26:
        Oe(l, t, a), l.flags & Su && l.memoizedState !== null && W0(a, jt, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        Oe(l, t, a);
        break;
      case 3:
      case 4:
        var e = jt;
        jt = Zn(l.stateNode.containerInfo), Oe(l, t, a), jt = e;
        break;
      case 22:
        l.memoizedState === null && (e = l.alternate, e !== null && e.memoizedState !== null ? (e = Su, Su = 16777216, Oe(l, t, a), Su = e) : Oe(l, t, a));
        break;
      default:
        Oe(l, t, a);
    }
  }
  function oo(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function bu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null) for (var a = 0; a < t.length; a++) {
        var e = t[a];
        Jl = e, yo(e, l);
      }
      oo(l);
    }
    if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) ro(l), l = l.sibling;
  }
  function ro(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        bu(l), l.flags & 2048 && ba(9, l, l.return);
        break;
      case 3:
        bu(l);
        break;
      case 12:
        bu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, Nn(l)) : bu(l);
        break;
      default:
        bu(l);
    }
  }
  function Nn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null) for (var a = 0; a < t.length; a++) {
        var e = t[a];
        Jl = e, yo(e, l);
      }
      oo(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          ba(8, t, t.return), Nn(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, Nn(t));
          break;
        default:
          Nn(t);
      }
      l = l.sibling;
    }
  }
  function yo(l, t) {
    for (; Jl !== null; ) {
      var a = Jl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ba(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var e = a.memoizedState.cachePool.pool;
            e != null && e.refCount++;
          }
          break;
        case 24:
          eu(a.memoizedState.cache);
      }
      if (e = a.child, e !== null) e.return = a, Jl = e;
      else l: for (a = l; Jl !== null; ) {
        e = Jl;
        var u = e.sibling, n = e.return;
        if (eo(e), e === a) {
          Jl = null;
          break l;
        }
        if (u !== null) {
          u.return = n, Jl = u;
          break l;
        }
        Jl = n;
      }
    }
  }
  var s0 = { getCacheForType: function(l) {
    var t = wl(Dl), a = t.data.get(l);
    return a === void 0 && (a = l(), t.data.set(l, a)), a;
  }, cacheSignal: function() {
    return wl(Dl).controller.signal;
  } }, m0 = typeof WeakMap == "function" ? WeakMap : Map, il = 0, yl = null, $ = null, F = 0, fl = 0, St = null, Ma = false, De = false, jc = false, na = 0, zl = 0, za = 0, Fa = 0, qc = 0, bt = 0, Ne = 0, Mu = null, ft = null, Bc = false, Un = 0, vo = 0, Cn = 1 / 0, Rn = null, Ga = null, ql = 0, Ta = null, Ue = null, ia = 0, xc = 0, Yc = null, go = null, zu = 0, Jc = null;
  function Mt() {
    return (il & 2) !== 0 && F !== 0 ? F & -F : _.T !== null ? Kc() : Uf();
  }
  function ho() {
    if (bt === 0) if ((F & 536870912) === 0 || ll) {
      var l = Ju;
      Ju <<= 1, (Ju & 3932160) === 0 && (Ju = 262144), bt = l;
    } else bt = 536870912;
    return l = ht.current, l !== null && (l.flags |= 32), bt;
  }
  function st(l, t, a) {
    (l === yl && (fl === 2 || fl === 9) || l.cancelPendingCommit !== null) && (Ce(l, 0), Ea(l, F, bt, false)), Ze(l, a), ((il & 2) === 0 || l !== yl) && (l === yl && ((il & 2) === 0 && (Fa |= a), zl === 4 && Ea(l, F, bt, false)), Zt(l));
  }
  function _o(l, t, a) {
    if ((il & 6) !== 0) throw Error(o(327));
    var e = !a && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Qe(l, t), u = e ? r0(l, t) : Qc(l, t, true), n = e;
    do {
      if (u === 0) {
        De && !e && Ea(l, t, 0, false);
        break;
      } else {
        if (a = l.current.alternate, n && !o0(a)) {
          u = Qc(l, t, false), n = false;
          continue;
        }
        if (u === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n) var i = 0;
          else i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              u = Mu;
              var f = c.current.memoizedState.isDehydrated;
              if (f && (Ce(c, i).flags |= 256), i = Qc(c, i, false), i !== 2) {
                if (jc && !f) {
                  c.errorRecoveryDisabledLanes |= n, Fa |= n, u = 4;
                  break l;
                }
                n = ft, ft = u, n !== null && (ft === null ? ft = n : ft.push.apply(ft, n));
              }
              u = i;
            }
            if (n = false, u !== 2) continue;
          }
        }
        if (u === 1) {
          Ce(l, 0), Ea(l, t, 0, true);
          break;
        }
        l: {
          switch (e = l, n = u, n) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ea(e, t, bt, !Ma);
              break l;
            case 2:
              ft = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (u = Un + 300 - Ol(), 10 < u)) {
            if (Ea(e, t, bt, !Ma), Qu(e, 0, true) !== 0) break l;
            ia = t, e.timeoutHandle = $o(So.bind(null, e, a, ft, Rn, Bc, t, bt, Fa, Ne, Ma, n, "Throttled", -0, 0), u);
            break l;
          }
          So(e, a, ft, Rn, Bc, t, bt, Fa, Ne, Ma, n, null, -0, 0);
        }
      }
      break;
    } while (true);
    Zt(l);
  }
  function So(l, t, a, e, u, n, i, c, f, y, S, M, g, h) {
    if (l.timeoutHandle = -1, M = t.subtreeFlags, M & 8192 || (M & 16785408) === 16785408) {
      M = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: Lt }, mo(t, n, M);
      var C = (n & 62914560) === n ? Un - Ol() : (n & 4194048) === n ? vo - Ol() : 0;
      if (C = $0(M, C), C !== null) {
        ia = n, l.cancelPendingCommit = C(po.bind(null, l, t, n, a, e, u, i, c, f, S, M, null, g, h)), Ea(l, n, i, !y);
        return;
      }
    }
    po(l, t, n, a, e, u, i, c, f);
  }
  function o0(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null))) for (var e = 0; e < a.length; e++) {
        var u = a[e], n = u.getSnapshot;
        u = u.value;
        try {
          if (!vt(n(), u)) return false;
        } catch {
          return false;
        }
      }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null) a.return = t, t = a;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return true;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return true;
  }
  function Ea(l, t, a, e) {
    t &= ~qc, t &= ~Fa, l.suspendedLanes |= t, l.pingedLanes &= ~t, e && (l.warmLanes |= t), e = l.expirationTimes;
    for (var u = t; 0 < u; ) {
      var n = 31 - yt(u), i = 1 << n;
      e[n] = -1, u &= ~i;
    }
    a !== 0 && Of(l, a, t);
  }
  function Hn() {
    return (il & 6) === 0 ? (Gu(0), false) : true;
  }
  function Xc() {
    if ($ !== null) {
      if (fl === 0) var l = $.return;
      else l = $, $t = Qa = null, ec(l), ze = null, nu = 0, l = $;
      for (; l !== null; ) $m(l.alternate, l), l = l.return;
      $ = null;
    }
  }
  function Ce(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && (l.timeoutHandle = -1, U0(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), ia = 0, Xc(), yl = l, $ = a = wt(l.current, null), F = t, fl = 0, St = null, Ma = false, De = Qe(l, t), jc = false, Ne = bt = qc = Fa = za = zl = 0, ft = Mu = null, Bc = false, (t & 8) !== 0 && (t |= t & 32);
    var e = l.entangledLanes;
    if (e !== 0) for (l = l.entanglements, e &= t; 0 < e; ) {
      var u = 31 - yt(e), n = 1 << u;
      t |= l[u], e &= ~n;
    }
    return na = t, ln(), a;
  }
  function bo(l, t) {
    L = null, _.H = ru, t === Me || t === sn ? (t = js(), fl = 3) : t === Li ? (t = js(), fl = 4) : fl = t === Sc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, St = t, $ === null && (zl = 1, Gn(l, pt(t, l.current)));
  }
  function Mo() {
    var l = ht.current;
    return l === null ? true : (F & 4194048) === F ? Ut === null : (F & 62914560) === F || (F & 536870912) !== 0 ? l === Ut : false;
  }
  function zo() {
    var l = _.H;
    return _.H = ru, l === null ? ru : l;
  }
  function Go() {
    var l = _.A;
    return _.A = s0, l;
  }
  function jn() {
    zl = 4, Ma || (F & 4194048) !== F && ht.current !== null || (De = true), (za & 134217727) === 0 && (Fa & 134217727) === 0 || yl === null || Ea(yl, F, bt, false);
  }
  function Qc(l, t, a) {
    var e = il;
    il |= 2;
    var u = zo(), n = Go();
    (yl !== l || F !== t) && (Rn = null, Ce(l, t)), t = false;
    var i = zl;
    l: do
      try {
        if (fl !== 0 && $ !== null) {
          var c = $, f = St;
          switch (fl) {
            case 8:
              Xc(), i = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              ht.current === null && (t = true);
              var y = fl;
              if (fl = 0, St = null, Re(l, c, f, y), a && De) {
                i = 0;
                break l;
              }
              break;
            default:
              y = fl, fl = 0, St = null, Re(l, c, f, y);
          }
        }
        d0(), i = zl;
        break;
      } catch (S) {
        bo(l, S);
      }
    while (true);
    return t && l.shellSuspendCounter++, $t = Qa = null, il = e, _.H = u, _.A = n, $ === null && (yl = null, F = 0, ln()), i;
  }
  function d0() {
    for (; $ !== null; ) To($);
  }
  function r0(l, t) {
    var a = il;
    il |= 2;
    var e = zo(), u = Go();
    yl !== l || F !== t ? (Rn = null, Cn = Ol() + 500, Ce(l, t)) : De = Qe(l, t);
    l: do
      try {
        if (fl !== 0 && $ !== null) {
          t = $;
          var n = St;
          t: switch (fl) {
            case 1:
              fl = 0, St = null, Re(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (Rs(n)) {
                fl = 0, St = null, Eo(t);
                break;
              }
              t = function() {
                fl !== 2 && fl !== 9 || yl !== l || (fl = 7), Zt(l);
              }, n.then(t, t);
              break l;
            case 3:
              fl = 7;
              break l;
            case 4:
              fl = 5;
              break l;
            case 7:
              Rs(n) ? (fl = 0, St = null, Eo(t)) : (fl = 0, St = null, Re(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch ($.tag) {
                case 26:
                  i = $.memoizedState;
                case 5:
                case 27:
                  var c = $;
                  if (i ? md(i) : c.stateNode.complete) {
                    fl = 0, St = null;
                    var f = c.sibling;
                    if (f !== null) $ = f;
                    else {
                      var y = c.return;
                      y !== null ? ($ = y, qn(y)) : $ = null;
                    }
                    break t;
                  }
              }
              fl = 0, St = null, Re(l, t, n, 5);
              break;
            case 6:
              fl = 0, St = null, Re(l, t, n, 6);
              break;
            case 8:
              Xc(), zl = 6;
              break l;
            default:
              throw Error(o(462));
          }
        }
        y0();
        break;
      } catch (S) {
        bo(l, S);
      }
    while (true);
    return $t = Qa = null, _.H = e, _.A = u, il = a, $ !== null ? 0 : (yl = null, F = 0, ln(), zl);
  }
  function y0() {
    for (; $ !== null && !Ye(); ) To($);
  }
  function To(l) {
    var t = wm(l.alternate, l, na);
    l.memoizedProps = l.pendingProps, t === null ? qn(l) : $ = t;
  }
  function Eo(l) {
    var t = l, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Xm(a, t, t.pendingProps, t.type, void 0, F);
        break;
      case 11:
        t = Xm(a, t, t.pendingProps, t.type.render, t.ref, F);
        break;
      case 5:
        ec(t);
      default:
        $m(a, t), t = $ = zs(t, na), t = wm(a, t, na);
    }
    l.memoizedProps = l.pendingProps, t === null ? qn(l) : $ = t;
  }
  function Re(l, t, a, e) {
    $t = Qa = null, ec(t), ze = null, nu = 0;
    var u = t.return;
    try {
      if (a0(l, u, t, a, F)) {
        zl = 1, Gn(l, pt(a, l.current)), $ = null;
        return;
      }
    } catch (n) {
      if (u !== null) throw $ = u, n;
      zl = 1, Gn(l, pt(a, l.current)), $ = null;
      return;
    }
    t.flags & 32768 ? (ll || e === 1 ? l = true : De || (F & 536870912) !== 0 ? l = false : (Ma = l = true, (e === 2 || e === 9 || e === 3 || e === 6) && (e = ht.current, e !== null && e.tag === 13 && (e.flags |= 16384))), Ao(t, l)) : qn(t);
  }
  function qn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Ao(t, Ma);
        return;
      }
      l = t.return;
      var a = n0(t.alternate, t, na);
      if (a !== null) {
        $ = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        $ = t;
        return;
      }
      $ = t = l;
    } while (t !== null);
    zl === 0 && (zl = 5);
  }
  function Ao(l, t) {
    do {
      var a = i0(l.alternate, l);
      if (a !== null) {
        a.flags &= 32767, $ = a;
        return;
      }
      if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
        $ = l;
        return;
      }
      $ = l = a;
    } while (l !== null);
    zl = 6, $ = null;
  }
  function po(l, t, a, e, u, n, i, c, f) {
    l.cancelPendingCommit = null;
    do
      Bn();
    while (ql !== 0);
    if ((il & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === l.current) throw Error(o(177));
      if (n = t.lanes | t.childLanes, n |= Ni, wd(l, a, n, i, c, f), l === yl && ($ = yl = null, F = 0), Ue = t, Ta = l, ia = a, xc = n, Yc = u, go = e, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, _0(xu, function() {
        return Co(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), e = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || e) {
        e = _.T, _.T = null, u = p.p, p.p = 2, i = il, il |= 4;
        try {
          c0(l, t, a);
        } finally {
          il = i, p.p = u, _.T = e;
        }
      }
      ql = 1, Oo(), Do(), No();
    }
  }
  function Oo() {
    if (ql === 1) {
      ql = 0;
      var l = Ta, t = Ue, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = _.T, _.T = null;
        var e = p.p;
        p.p = 2;
        var u = il;
        il |= 4;
        try {
          co(t, l);
          var n = lf, i = rs(l.containerInfo), c = n.focusedElem, f = n.selectionRange;
          if (i !== c && c && c.ownerDocument && ds(c.ownerDocument.documentElement, c)) {
            if (f !== null && Ei(c)) {
              var y = f.start, S = f.end;
              if (S === void 0 && (S = y), "selectionStart" in c) c.selectionStart = y, c.selectionEnd = Math.min(S, c.value.length);
              else {
                var M = c.ownerDocument || document, g = M && M.defaultView || window;
                if (g.getSelection) {
                  var h = g.getSelection(), C = c.textContent.length, Y = Math.min(f.start, C), dl = f.end === void 0 ? Y : Math.min(f.end, C);
                  !h.extend && Y > dl && (i = dl, dl = Y, Y = i);
                  var d = os(c, Y), s = os(c, dl);
                  if (d && s && (h.rangeCount !== 1 || h.anchorNode !== d.node || h.anchorOffset !== d.offset || h.focusNode !== s.node || h.focusOffset !== s.offset)) {
                    var r = M.createRange();
                    r.setStart(d.node, d.offset), h.removeAllRanges(), Y > dl ? (h.addRange(r), h.extend(s.node, s.offset)) : (r.setEnd(s.node, s.offset), h.addRange(r));
                  }
                }
              }
            }
            for (M = [], h = c; h = h.parentNode; ) h.nodeType === 1 && M.push({ element: h, left: h.scrollLeft, top: h.scrollTop });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < M.length; c++) {
              var b = M[c];
              b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
            }
          }
          $n = !!Pc, lf = Pc = null;
        } finally {
          il = u, p.p = e, _.T = a;
        }
      }
      l.current = t, ql = 2;
    }
  }
  function Do() {
    if (ql === 2) {
      ql = 0;
      var l = Ta, t = Ue, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = _.T, _.T = null;
        var e = p.p;
        p.p = 2;
        var u = il;
        il |= 4;
        try {
          ao(l, t.alternate, t);
        } finally {
          il = u, p.p = e, _.T = a;
        }
      }
      ql = 3;
    }
  }
  function No() {
    if (ql === 4 || ql === 3) {
      ql = 0, Je();
      var l = Ta, t = Ue, a = ia, e = go;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ql = 5 : (ql = 0, Ue = Ta = null, Uo(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (u === 0 && (Ga = null), ii(a), t = t.stateNode, rt && typeof rt.onCommitFiberRoot == "function") try {
        rt.onCommitFiberRoot(Xe, t, void 0, (t.current.flags & 128) === 128);
      } catch {
      }
      if (e !== null) {
        t = _.T, u = p.p, p.p = 2, _.T = null;
        try {
          for (var n = l.onRecoverableError, i = 0; i < e.length; i++) {
            var c = e[i];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          _.T = t, p.p = u;
        }
      }
      (ia & 3) !== 0 && Bn(), Zt(l), u = l.pendingLanes, (a & 261930) !== 0 && (u & 42) !== 0 ? l === Jc ? zu++ : (zu = 0, Jc = l) : zu = 0, Gu(0);
    }
  }
  function Uo(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, eu(t)));
  }
  function Bn() {
    return Oo(), Do(), No(), Co();
  }
  function Co() {
    if (ql !== 5) return false;
    var l = Ta, t = xc;
    xc = 0;
    var a = ii(ia), e = _.T, u = p.p;
    try {
      p.p = 32 > a ? 32 : a, _.T = null, a = Yc, Yc = null;
      var n = Ta, i = ia;
      if (ql = 0, Ue = Ta = null, ia = 0, (il & 6) !== 0) throw Error(o(331));
      var c = il;
      if (il |= 4, ro(n.current), so(n, n.current, i, a), il = c, Gu(0, false), rt && typeof rt.onPostCommitFiberRoot == "function") try {
        rt.onPostCommitFiberRoot(Xe, n);
      } catch {
      }
      return true;
    } finally {
      p.p = u, _.T = e, Uo(l, t);
    }
  }
  function Ro(l, t, a) {
    t = pt(a, t), t = _c(l.stateNode, t, 2), l = ha(l, t, 2), l !== null && (Ze(l, 2), Zt(l));
  }
  function sl(l, t, a) {
    if (l.tag === 3) Ro(l, l, a);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Ro(t, l, a);
        break;
      } else if (t.tag === 1) {
        var e = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof e.componentDidCatch == "function" && (Ga === null || !Ga.has(e))) {
          l = pt(a, l), a = Rm(2), e = ha(t, a, 2), e !== null && (Hm(a, e, t, l), Ze(e, 2), Zt(e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Zc(l, t, a) {
    var e = l.pingCache;
    if (e === null) {
      e = l.pingCache = new m0();
      var u = /* @__PURE__ */ new Set();
      e.set(t, u);
    } else u = e.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), e.set(t, u));
    u.has(a) || (jc = true, u.add(a), l = v0.bind(null, l, t, a), t.then(l, l));
  }
  function v0(l, t, a) {
    var e = l.pingCache;
    e !== null && e.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, yl === l && (F & a) === a && (zl === 4 || zl === 3 && (F & 62914560) === F && 300 > Ol() - Un ? (il & 2) === 0 && Ce(l, 0) : qc |= a, Ne === F && (Ne = 0)), Zt(l);
  }
  function Ho(l, t) {
    t === 0 && (t = pf()), l = Ya(l, t), l !== null && (Ze(l, t), Zt(l));
  }
  function g0(l) {
    var t = l.memoizedState, a = 0;
    t !== null && (a = t.retryLane), Ho(l, a);
  }
  function h0(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var e = l.stateNode, u = l.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        e = l.stateNode;
        break;
      case 22:
        e = l.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    e !== null && e.delete(t), Ho(l, a);
  }
  function _0(l, t) {
    return Fl(l, t);
  }
  var xn = null, He = null, Vc = false, Yn = false, Lc = false, Aa = 0;
  function Zt(l) {
    l !== He && l.next === null && (He === null ? xn = He = l : He = He.next = l), Yn = true, Vc || (Vc = true, b0());
  }
  function Gu(l, t) {
    if (!Lc && Yn) {
      Lc = true;
      do
        for (var a = false, e = xn; e !== null; ) {
          if (l !== 0) {
            var u = e.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = e.suspendedLanes, c = e.pingedLanes;
              n = (1 << 31 - yt(42 | l) + 1) - 1, n &= u & ~(i & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (a = true, xo(e, n));
          } else n = F, n = Qu(e, e === yl ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), (n & 3) === 0 || Qe(e, n) || (a = true, xo(e, n));
          e = e.next;
        }
      while (a);
      Lc = false;
    }
  }
  function S0() {
    jo();
  }
  function jo() {
    Yn = Vc = false;
    var l = 0;
    Aa !== 0 && N0() && (l = Aa);
    for (var t = Ol(), a = null, e = xn; e !== null; ) {
      var u = e.next, n = qo(e, t);
      n === 0 ? (e.next = null, a === null ? xn = u : a.next = u, u === null && (He = a)) : (a = e, (l !== 0 || (n & 3) !== 0) && (Yn = true)), e = u;
    }
    ql !== 0 && ql !== 5 || Gu(l), Aa !== 0 && (Aa = 0);
  }
  function qo(l, t) {
    for (var a = l.suspendedLanes, e = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - yt(n), c = 1 << i, f = u[i];
      f === -1 ? ((c & a) === 0 || (c & e) !== 0) && (u[i] = Kd(c, t)) : f <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = yl, a = F, a = Qu(l, l === t ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), e = l.callbackNode, a === 0 || l === t && (fl === 2 || fl === 9) || l.cancelPendingCommit !== null) return e !== null && e !== null && Yt(e), l.callbackNode = null, l.callbackPriority = 0;
    if ((a & 3) === 0 || Qe(l, a)) {
      if (t = a & -a, t === l.callbackPriority) return t;
      switch (e !== null && Yt(e), ii(a)) {
        case 2:
        case 8:
          a = le;
          break;
        case 32:
          a = xu;
          break;
        case 268435456:
          a = Af;
          break;
        default:
          a = xu;
      }
      return e = Bo.bind(null, l), a = Fl(a, e), l.callbackPriority = t, l.callbackNode = a, t;
    }
    return e !== null && e !== null && Yt(e), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Bo(l, t) {
    if (ql !== 0 && ql !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
    var a = l.callbackNode;
    if (Bn() && l.callbackNode !== a) return null;
    var e = F;
    return e = Qu(l, l === yl ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), e === 0 ? null : (_o(l, e, t), qo(l, Ol()), l.callbackNode != null && l.callbackNode === a ? Bo.bind(null, l) : null);
  }
  function xo(l, t) {
    if (Bn()) return null;
    _o(l, t, true);
  }
  function b0() {
    C0(function() {
      (il & 6) !== 0 ? Fl(at, S0) : jo();
    });
  }
  function Kc() {
    if (Aa === 0) {
      var l = Se;
      l === 0 && (l = Yu, Yu <<= 1, (Yu & 261888) === 0 && (Yu = 256)), Aa = l;
    }
    return Aa;
  }
  function Yo(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Ku("" + l);
  }
  function Jo(l, t) {
    var a = t.ownerDocument.createElement("input");
    return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l;
  }
  function M0(l, t, a, e, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var n = Yo((u[et] || null).action), i = e.submitter;
      i && (t = (t = i[et] || null) ? Yo(t.formAction) : i.getAttribute("formAction"), t !== null && (n = t, i = null));
      var c = new Iu("action", "action", null, e, u);
      l.push({ event: c, listeners: [{ instance: null, listener: function() {
        if (e.defaultPrevented) {
          if (Aa !== 0) {
            var f = i ? Jo(u, i) : new FormData(u);
            dc(a, { pending: true, data: f, method: u.method, action: n }, null, f);
          }
        } else typeof n == "function" && (c.preventDefault(), f = i ? Jo(u, i) : new FormData(u), dc(a, { pending: true, data: f, method: u.method, action: n }, n, f));
      }, currentTarget: u }] });
    }
  }
  for (var wc = 0; wc < Di.length; wc++) {
    var Wc = Di[wc], z0 = Wc.toLowerCase(), G0 = Wc[0].toUpperCase() + Wc.slice(1);
    Ht(z0, "on" + G0);
  }
  Ht(gs, "onAnimationEnd"), Ht(hs, "onAnimationIteration"), Ht(_s, "onAnimationStart"), Ht("dblclick", "onDoubleClick"), Ht("focusin", "onFocus"), Ht("focusout", "onBlur"), Ht(Yr, "onTransitionRun"), Ht(Jr, "onTransitionStart"), Ht(Xr, "onTransitionCancel"), Ht(Ss, "onTransitionEnd"), ne("onMouseEnter", ["mouseout", "mouseover"]), ne("onMouseLeave", ["mouseout", "mouseover"]), ne("onPointerEnter", ["pointerout", "pointerover"]), ne("onPointerLeave", ["pointerout", "pointerover"]), ja("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ja("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ja("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ja("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ja("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ja("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Tu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), T0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Tu));
  function Xo(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var e = l[a], u = e.event;
      e = e.listeners;
      l: {
        var n = void 0;
        if (t) for (var i = e.length - 1; 0 <= i; i--) {
          var c = e[i], f = c.instance, y = c.currentTarget;
          if (c = c.listener, f !== n && u.isPropagationStopped()) break l;
          n = c, u.currentTarget = y;
          try {
            n(u);
          } catch (S) {
            Pu(S);
          }
          u.currentTarget = null, n = f;
        }
        else for (i = 0; i < e.length; i++) {
          if (c = e[i], f = c.instance, y = c.currentTarget, c = c.listener, f !== n && u.isPropagationStopped()) break l;
          n = c, u.currentTarget = y;
          try {
            n(u);
          } catch (S) {
            Pu(S);
          }
          u.currentTarget = null, n = f;
        }
      }
    }
  }
  function I(l, t) {
    var a = t[ci];
    a === void 0 && (a = t[ci] = /* @__PURE__ */ new Set());
    var e = l + "__bubble";
    a.has(e) || (Qo(t, l, 2, false), a.add(e));
  }
  function $c(l, t, a) {
    var e = 0;
    t && (e |= 4), Qo(a, l, e, t);
  }
  var Jn = "_reactListening" + Math.random().toString(36).slice(2);
  function Ic(l) {
    if (!l[Jn]) {
      l[Jn] = true, Hf.forEach(function(a) {
        a !== "selectionchange" && (T0.has(a) || $c(a, false, l), $c(a, true, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Jn] || (t[Jn] = true, $c("selectionchange", false, t));
    }
  }
  function Qo(l, t, a, e) {
    switch (hd(t)) {
      case 2:
        var u = k0;
        break;
      case 8:
        u = P0;
        break;
      default:
        u = df;
    }
    a = u.bind(null, t, a, l), u = void 0, !gi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = true), e ? u !== void 0 ? l.addEventListener(t, a, { capture: true, passive: u }) : l.addEventListener(t, a, true) : u !== void 0 ? l.addEventListener(t, a, { passive: u }) : l.addEventListener(t, a, false);
  }
  function Fc(l, t, a, e, u) {
    var n = e;
    if ((t & 1) === 0 && (t & 2) === 0 && e !== null) l: for (; ; ) {
      if (e === null) return;
      var i = e.tag;
      if (i === 3 || i === 4) {
        var c = e.stateNode.containerInfo;
        if (c === u) break;
        if (i === 4) for (i = e.return; i !== null; ) {
          var f = i.tag;
          if ((f === 3 || f === 4) && i.stateNode.containerInfo === u) return;
          i = i.return;
        }
        for (; c !== null; ) {
          if (i = ae(c), i === null) return;
          if (f = i.tag, f === 5 || f === 6 || f === 26 || f === 27) {
            e = n = i;
            continue l;
          }
          c = c.parentNode;
        }
      }
      e = e.return;
    }
    Kf(function() {
      var y = n, S = yi(a), M = [];
      l: {
        var g = bs.get(l);
        if (g !== void 0) {
          var h = Iu, C = l;
          switch (l) {
            case "keypress":
              if (Wu(a) === 0) break l;
            case "keydown":
            case "keyup":
              h = hr;
              break;
            case "focusin":
              C = "focus", h = bi;
              break;
            case "focusout":
              C = "blur", h = bi;
              break;
            case "beforeblur":
            case "afterblur":
              h = bi;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              h = $f;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              h = nr;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              h = br;
              break;
            case gs:
            case hs:
            case _s:
              h = fr;
              break;
            case Ss:
              h = zr;
              break;
            case "scroll":
            case "scrollend":
              h = er;
              break;
            case "wheel":
              h = Tr;
              break;
            case "copy":
            case "cut":
            case "paste":
              h = mr;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              h = Ff;
              break;
            case "toggle":
            case "beforetoggle":
              h = Ar;
          }
          var Y = (t & 4) !== 0, dl = !Y && (l === "scroll" || l === "scrollend"), d = Y ? g !== null ? g + "Capture" : null : g;
          Y = [];
          for (var s = y, r; s !== null; ) {
            var b = s;
            if (r = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || r === null || d === null || (b = Ke(s, d), b != null && Y.push(Eu(s, b, r))), dl) break;
            s = s.return;
          }
          0 < Y.length && (g = new h(g, C, null, a, S), M.push({ event: g, listeners: Y }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (g = l === "mouseover" || l === "pointerover", h = l === "mouseout" || l === "pointerout", g && a !== ri && (C = a.relatedTarget || a.fromElement) && (ae(C) || C[te])) break l;
          if ((h || g) && (g = S.window === S ? S : (g = S.ownerDocument) ? g.defaultView || g.parentWindow : window, h ? (C = a.relatedTarget || a.toElement, h = y, C = C ? ae(C) : null, C !== null && (dl = q(C), Y = C.tag, C !== dl || Y !== 5 && Y !== 27 && Y !== 6) && (C = null)) : (h = null, C = y), h !== C)) {
            if (Y = $f, b = "onMouseLeave", d = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (Y = Ff, b = "onPointerLeave", d = "onPointerEnter", s = "pointer"), dl = h == null ? g : Le(h), r = C == null ? g : Le(C), g = new Y(b, s + "leave", h, a, S), g.target = dl, g.relatedTarget = r, b = null, ae(S) === y && (Y = new Y(d, s + "enter", C, a, S), Y.target = r, Y.relatedTarget = dl, b = Y), dl = b, h && C) t: {
              for (Y = E0, d = h, s = C, r = 0, b = d; b; b = Y(b)) r++;
              b = 0;
              for (var j = s; j; j = Y(j)) b++;
              for (; 0 < r - b; ) d = Y(d), r--;
              for (; 0 < b - r; ) s = Y(s), b--;
              for (; r--; ) {
                if (d === s || s !== null && d === s.alternate) {
                  Y = d;
                  break t;
                }
                d = Y(d), s = Y(s);
              }
              Y = null;
            }
            else Y = null;
            h !== null && Zo(M, g, h, Y, false), C !== null && dl !== null && Zo(M, dl, C, Y, true);
          }
        }
        l: {
          if (g = y ? Le(y) : window, h = g.nodeName && g.nodeName.toLowerCase(), h === "select" || h === "input" && g.type === "file") var el = ns;
          else if (es(g)) if (is) el = qr;
          else {
            el = Hr;
            var R = Rr;
          }
          else h = g.nodeName, !h || h.toLowerCase() !== "input" || g.type !== "checkbox" && g.type !== "radio" ? y && di(y.elementType) && (el = ns) : el = jr;
          if (el && (el = el(l, y))) {
            us(M, el, a, S);
            break l;
          }
          R && R(l, g, y), l === "focusout" && y && g.type === "number" && y.memoizedProps.value != null && oi(g, "number", g.value);
        }
        switch (R = y ? Le(y) : window, l) {
          case "focusin":
            (es(R) || R.contentEditable === "true") && (oe = R, Ai = y, lu = null);
            break;
          case "focusout":
            lu = Ai = oe = null;
            break;
          case "mousedown":
            pi = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            pi = false, ys(M, a, S);
            break;
          case "selectionchange":
            if (xr) break;
          case "keydown":
          case "keyup":
            ys(M, a, S);
        }
        var K;
        if (zi) l: {
          switch (l) {
            case "compositionstart":
              var k = "onCompositionStart";
              break l;
            case "compositionend":
              k = "onCompositionEnd";
              break l;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break l;
          }
          k = void 0;
        }
        else me ? ts(l, a) && (k = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (k = "onCompositionStart");
        k && (kf && a.locale !== "ko" && (me || k !== "onCompositionStart" ? k === "onCompositionEnd" && me && (K = wf()) : (ma = S, hi = "value" in ma ? ma.value : ma.textContent, me = true)), R = Xn(y, k), 0 < R.length && (k = new If(k, l, null, a, S), M.push({ event: k, listeners: R }), K ? k.data = K : (K = as(a), K !== null && (k.data = K)))), (K = Or ? Dr(l, a) : Nr(l, a)) && (k = Xn(y, "onBeforeInput"), 0 < k.length && (R = new If("onBeforeInput", "beforeinput", null, a, S), M.push({ event: R, listeners: k }), R.data = K)), M0(M, l, y, a, S);
      }
      Xo(M, t);
    });
  }
  function Eu(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function Xn(l, t) {
    for (var a = t + "Capture", e = []; l !== null; ) {
      var u = l, n = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = Ke(l, a), u != null && e.unshift(Eu(l, u, n)), u = Ke(l, t), u != null && e.push(Eu(l, u, n))), l.tag === 3) return e;
      l = l.return;
    }
    return [];
  }
  function E0(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Zo(l, t, a, e, u) {
    for (var n = t._reactName, i = []; a !== null && a !== e; ) {
      var c = a, f = c.alternate, y = c.stateNode;
      if (c = c.tag, f !== null && f === e) break;
      c !== 5 && c !== 26 && c !== 27 || y === null || (f = y, u ? (y = Ke(a, n), y != null && i.unshift(Eu(a, y, f))) : u || (y = Ke(a, n), y != null && i.push(Eu(a, y, f)))), a = a.return;
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var A0 = /\r\n?/g, p0 = /\u0000|\uFFFD/g;
  function Vo(l) {
    return (typeof l == "string" ? l : "" + l).replace(A0, `
`).replace(p0, "");
  }
  function Lo(l, t) {
    return t = Vo(t), Vo(l) === t;
  }
  function ol(l, t, a, e, u, n) {
    switch (a) {
      case "children":
        typeof e == "string" ? t === "body" || t === "textarea" && e === "" || ce(l, e) : (typeof e == "number" || typeof e == "bigint") && t !== "body" && ce(l, "" + e);
        break;
      case "className":
        Vu(l, "class", e);
        break;
      case "tabIndex":
        Vu(l, "tabindex", e);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Vu(l, a, e);
        break;
      case "style":
        Vf(l, e, n);
        break;
      case "data":
        if (t !== "object") {
          Vu(l, "data", e);
          break;
        }
      case "src":
      case "href":
        if (e === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (e == null || typeof e == "function" || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        e = Ku("" + e), l.setAttribute(a, e);
        break;
      case "action":
      case "formAction":
        if (typeof e == "function") {
          l.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        } else typeof n == "function" && (a === "formAction" ? (t !== "input" && ol(l, t, "name", u.name, u, null), ol(l, t, "formEncType", u.formEncType, u, null), ol(l, t, "formMethod", u.formMethod, u, null), ol(l, t, "formTarget", u.formTarget, u, null)) : (ol(l, t, "encType", u.encType, u, null), ol(l, t, "method", u.method, u, null), ol(l, t, "target", u.target, u, null)));
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        e = Ku("" + e), l.setAttribute(a, e);
        break;
      case "onClick":
        e != null && (l.onclick = Lt);
        break;
      case "onScroll":
        e != null && I("scroll", l);
        break;
      case "onScrollEnd":
        e != null && I("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(o(61));
          if (a = e.__html, a != null) {
            if (u.children != null) throw Error(o(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "muted":
        l.muted = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (e == null || typeof e == "function" || typeof e == "boolean" || typeof e == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        a = Ku("" + e), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        e != null && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, "" + e) : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        e && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        e === true ? l.setAttribute(a, "") : e !== false && e != null && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, e) : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        e != null && typeof e != "function" && typeof e != "symbol" && !isNaN(e) && 1 <= e ? l.setAttribute(a, e) : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e) ? l.removeAttribute(a) : l.setAttribute(a, e);
        break;
      case "popover":
        I("beforetoggle", l), I("toggle", l), Zu(l, "popover", e);
        break;
      case "xlinkActuate":
        Vt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", e);
        break;
      case "xlinkArcrole":
        Vt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", e);
        break;
      case "xlinkRole":
        Vt(l, "http://www.w3.org/1999/xlink", "xlink:role", e);
        break;
      case "xlinkShow":
        Vt(l, "http://www.w3.org/1999/xlink", "xlink:show", e);
        break;
      case "xlinkTitle":
        Vt(l, "http://www.w3.org/1999/xlink", "xlink:title", e);
        break;
      case "xlinkType":
        Vt(l, "http://www.w3.org/1999/xlink", "xlink:type", e);
        break;
      case "xmlBase":
        Vt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", e);
        break;
      case "xmlLang":
        Vt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", e);
        break;
      case "xmlSpace":
        Vt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", e);
        break;
      case "is":
        Zu(l, "is", e);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = tr.get(a) || a, Zu(l, a, e));
    }
  }
  function kc(l, t, a, e, u, n) {
    switch (a) {
      case "style":
        Vf(l, e, n);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(o(61));
          if (a = e.__html, a != null) {
            if (u.children != null) throw Error(o(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof e == "string" ? ce(l, e) : (typeof e == "number" || typeof e == "bigint") && ce(l, "" + e);
        break;
      case "onScroll":
        e != null && I("scroll", l);
        break;
      case "onScrollEnd":
        e != null && I("scrollend", l);
        break;
      case "onClick":
        e != null && (l.onclick = Lt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!jf.hasOwnProperty(a)) l: {
          if (a[0] === "o" && a[1] === "n" && (u = a.endsWith("Capture"), t = a.slice(2, u ? a.length - 7 : void 0), n = l[et] || null, n = n != null ? n[a] : null, typeof n == "function" && l.removeEventListener(t, n, u), typeof e == "function")) {
            typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, e, u);
            break l;
          }
          a in l ? l[a] = e : e === true ? l.setAttribute(a, "") : Zu(l, a, e);
        }
    }
  }
  function $l(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        I("error", l), I("load", l);
        var e = false, u = false, n;
        for (n in a) if (a.hasOwnProperty(n)) {
          var i = a[n];
          if (i != null) switch (n) {
            case "src":
              e = true;
              break;
            case "srcSet":
              u = true;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(o(137, t));
            default:
              ol(l, t, n, i, a, null);
          }
        }
        u && ol(l, t, "srcSet", a.srcSet, a, null), e && ol(l, t, "src", a.src, a, null);
        return;
      case "input":
        I("invalid", l);
        var c = n = i = u = null, f = null, y = null;
        for (e in a) if (a.hasOwnProperty(e)) {
          var S = a[e];
          if (S != null) switch (e) {
            case "name":
              u = S;
              break;
            case "type":
              i = S;
              break;
            case "checked":
              f = S;
              break;
            case "defaultChecked":
              y = S;
              break;
            case "value":
              n = S;
              break;
            case "defaultValue":
              c = S;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (S != null) throw Error(o(137, t));
              break;
            default:
              ol(l, t, e, S, a, null);
          }
        }
        Jf(l, n, c, f, y, i, u, false);
        return;
      case "select":
        I("invalid", l), e = i = n = null;
        for (u in a) if (a.hasOwnProperty(u) && (c = a[u], c != null)) switch (u) {
          case "value":
            n = c;
            break;
          case "defaultValue":
            i = c;
            break;
          case "multiple":
            e = c;
          default:
            ol(l, t, u, c, a, null);
        }
        t = n, a = i, l.multiple = !!e, t != null ? ie(l, !!e, t, false) : a != null && ie(l, !!e, a, true);
        return;
      case "textarea":
        I("invalid", l), n = u = e = null;
        for (i in a) if (a.hasOwnProperty(i) && (c = a[i], c != null)) switch (i) {
          case "value":
            e = c;
            break;
          case "defaultValue":
            u = c;
            break;
          case "children":
            n = c;
            break;
          case "dangerouslySetInnerHTML":
            if (c != null) throw Error(o(91));
            break;
          default:
            ol(l, t, i, c, a, null);
        }
        Qf(l, e, u, n);
        return;
      case "option":
        for (f in a) if (a.hasOwnProperty(f) && (e = a[f], e != null)) switch (f) {
          case "selected":
            l.selected = e && typeof e != "function" && typeof e != "symbol";
            break;
          default:
            ol(l, t, f, e, a, null);
        }
        return;
      case "dialog":
        I("beforetoggle", l), I("toggle", l), I("cancel", l), I("close", l);
        break;
      case "iframe":
      case "object":
        I("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < Tu.length; e++) I(Tu[e], l);
        break;
      case "image":
        I("error", l), I("load", l);
        break;
      case "details":
        I("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        I("error", l), I("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in a) if (a.hasOwnProperty(y) && (e = a[y], e != null)) switch (y) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(o(137, t));
          default:
            ol(l, t, y, e, a, null);
        }
        return;
      default:
        if (di(t)) {
          for (S in a) a.hasOwnProperty(S) && (e = a[S], e !== void 0 && kc(l, t, S, e, a, void 0));
          return;
        }
    }
    for (c in a) a.hasOwnProperty(c) && (e = a[c], e != null && ol(l, t, c, e, a, null));
  }
  function O0(l, t, a, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, n = null, i = null, c = null, f = null, y = null, S = null;
        for (h in a) {
          var M = a[h];
          if (a.hasOwnProperty(h) && M != null) switch (h) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              f = M;
            default:
              e.hasOwnProperty(h) || ol(l, t, h, null, e, M);
          }
        }
        for (var g in e) {
          var h = e[g];
          if (M = a[g], e.hasOwnProperty(g) && (h != null || M != null)) switch (g) {
            case "type":
              n = h;
              break;
            case "name":
              u = h;
              break;
            case "checked":
              y = h;
              break;
            case "defaultChecked":
              S = h;
              break;
            case "value":
              i = h;
              break;
            case "defaultValue":
              c = h;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (h != null) throw Error(o(137, t));
              break;
            default:
              h !== M && ol(l, t, g, h, e, M);
          }
        }
        mi(l, i, c, f, y, S, n, u);
        return;
      case "select":
        h = i = c = g = null;
        for (n in a) if (f = a[n], a.hasOwnProperty(n) && f != null) switch (n) {
          case "value":
            break;
          case "multiple":
            h = f;
          default:
            e.hasOwnProperty(n) || ol(l, t, n, null, e, f);
        }
        for (u in e) if (n = e[u], f = a[u], e.hasOwnProperty(u) && (n != null || f != null)) switch (u) {
          case "value":
            g = n;
            break;
          case "defaultValue":
            c = n;
            break;
          case "multiple":
            i = n;
          default:
            n !== f && ol(l, t, u, n, e, f);
        }
        t = c, a = i, e = h, g != null ? ie(l, !!a, g, false) : !!e != !!a && (t != null ? ie(l, !!a, t, true) : ie(l, !!a, a ? [] : "", false));
        return;
      case "textarea":
        h = g = null;
        for (c in a) if (u = a[c], a.hasOwnProperty(c) && u != null && !e.hasOwnProperty(c)) switch (c) {
          case "value":
            break;
          case "children":
            break;
          default:
            ol(l, t, c, null, e, u);
        }
        for (i in e) if (u = e[i], n = a[i], e.hasOwnProperty(i) && (u != null || n != null)) switch (i) {
          case "value":
            g = u;
            break;
          case "defaultValue":
            h = u;
            break;
          case "children":
            break;
          case "dangerouslySetInnerHTML":
            if (u != null) throw Error(o(91));
            break;
          default:
            u !== n && ol(l, t, i, u, e, n);
        }
        Xf(l, g, h);
        return;
      case "option":
        for (var C in a) if (g = a[C], a.hasOwnProperty(C) && g != null && !e.hasOwnProperty(C)) switch (C) {
          case "selected":
            l.selected = false;
            break;
          default:
            ol(l, t, C, null, e, g);
        }
        for (f in e) if (g = e[f], h = a[f], e.hasOwnProperty(f) && g !== h && (g != null || h != null)) switch (f) {
          case "selected":
            l.selected = g && typeof g != "function" && typeof g != "symbol";
            break;
          default:
            ol(l, t, f, g, e, h);
        }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Y in a) g = a[Y], a.hasOwnProperty(Y) && g != null && !e.hasOwnProperty(Y) && ol(l, t, Y, null, e, g);
        for (y in e) if (g = e[y], h = a[y], e.hasOwnProperty(y) && g !== h && (g != null || h != null)) switch (y) {
          case "children":
          case "dangerouslySetInnerHTML":
            if (g != null) throw Error(o(137, t));
            break;
          default:
            ol(l, t, y, g, e, h);
        }
        return;
      default:
        if (di(t)) {
          for (var dl in a) g = a[dl], a.hasOwnProperty(dl) && g !== void 0 && !e.hasOwnProperty(dl) && kc(l, t, dl, void 0, e, g);
          for (S in e) g = e[S], h = a[S], !e.hasOwnProperty(S) || g === h || g === void 0 && h === void 0 || kc(l, t, S, g, e, h);
          return;
        }
    }
    for (var d in a) g = a[d], a.hasOwnProperty(d) && g != null && !e.hasOwnProperty(d) && ol(l, t, d, null, e, g);
    for (M in e) g = e[M], h = a[M], !e.hasOwnProperty(M) || g === h || g == null && h == null || ol(l, t, M, g, e, h);
  }
  function Ko(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return true;
      default:
        return false;
    }
  }
  function D0() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, a = performance.getEntriesByType("resource"), e = 0; e < a.length; e++) {
        var u = a[e], n = u.transferSize, i = u.initiatorType, c = u.duration;
        if (n && c && Ko(i)) {
          for (i = 0, c = u.responseEnd, e += 1; e < a.length; e++) {
            var f = a[e], y = f.startTime;
            if (y > c) break;
            var S = f.transferSize, M = f.initiatorType;
            S && Ko(M) && (f = f.responseEnd, i += S * (f < c ? 1 : (c - y) / (f - y)));
          }
          if (--e, t += 8 * (n + i) / (u.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Pc = null, lf = null;
  function Qn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function wo(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Wo(l, t) {
    if (l === 0) switch (t) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function tf(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var af = null;
  function N0() {
    var l = window.event;
    return l && l.type === "popstate" ? l === af ? false : (af = l, true) : (af = null, false);
  }
  var $o = typeof setTimeout == "function" ? setTimeout : void 0, U0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Io = typeof Promise == "function" ? Promise : void 0, C0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Io < "u" ? function(l) {
    return Io.resolve(null).then(l).catch(R0);
  } : $o;
  function R0(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function pa(l) {
    return l === "head";
  }
  function Fo(l, t) {
    var a = t, e = 0;
    do {
      var u = a.nextSibling;
      if (l.removeChild(a), u && u.nodeType === 8) if (a = u.data, a === "/$" || a === "/&") {
        if (e === 0) {
          l.removeChild(u), xe(t);
          return;
        }
        e--;
      } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") e++;
      else if (a === "html") Au(l.ownerDocument.documentElement);
      else if (a === "head") {
        a = l.ownerDocument.head, Au(a);
        for (var n = a.firstChild; n; ) {
          var i = n.nextSibling, c = n.nodeName;
          n[Ve] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || a.removeChild(n), n = i;
        }
      } else a === "body" && Au(l.ownerDocument.body);
      a = u;
    } while (a);
    xe(t);
  }
  function ko(l, t) {
    var a = l;
    l = 0;
    do {
      var e = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), e && e.nodeType === 8) if (a = e.data, a === "/$") {
        if (l === 0) break;
        l--;
      } else a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || l++;
      a = e;
    } while (a);
  }
  function ef(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ef(a), fi(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function H0(l, t, a, e) {
    for (; l.nodeType === 1; ) {
      var u = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (e) {
        if (!l[Ve]) switch (t) {
          case "meta":
            if (!l.hasAttribute("itemprop")) break;
            return l;
          case "link":
            if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence")) break;
            if (n !== u.rel || l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || l.getAttribute("title") !== (u.title == null ? null : u.title)) break;
            return l;
          case "style":
            if (l.hasAttribute("data-precedence")) break;
            return l;
          case "script":
            if (n = l.getAttribute("src"), (n !== (u.src == null ? null : u.src) || l.getAttribute("type") !== (u.type == null ? null : u.type) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop")) break;
            return l;
          default:
            return l;
        }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (l = Ct(l.nextSibling), l === null) break;
    }
    return null;
  }
  function j0(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = Ct(l.nextSibling), l === null)) return null;
    return l;
  }
  function Po(l, t) {
    for (; l.nodeType !== 8; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Ct(l.nextSibling), l === null)) return null;
    return l;
  }
  function uf(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function nf(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function q0(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading") t();
    else {
      var e = function() {
        t(), a.removeEventListener("DOMContentLoaded", e);
      };
      a.addEventListener("DOMContentLoaded", e), l._reactRetry = e;
    }
  }
  function Ct(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var cf = null;
  function ld(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return Ct(l.nextSibling);
          t--;
        } else a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function td(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else a !== "/$" && a !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function ad(l, t, a) {
    switch (t = Qn(a), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(o(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(o(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(o(454));
        return l;
      default:
        throw Error(o(451));
    }
  }
  function Au(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    fi(l);
  }
  var Rt = /* @__PURE__ */ new Map(), ed = /* @__PURE__ */ new Set();
  function Zn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var ca = p.d;
  p.d = { f: B0, r: x0, D: Y0, C: J0, L: X0, m: Q0, X: V0, S: Z0, M: L0 };
  function B0() {
    var l = ca.f(), t = Hn();
    return l || t;
  }
  function x0(l) {
    var t = ee(l);
    t !== null && t.tag === 5 && t.type === "form" ? Sm(t) : ca.r(l);
  }
  var je = typeof document > "u" ? null : document;
  function ud(l, t, a) {
    var e = je;
    if (e && typeof t == "string" && t) {
      var u = Et(t);
      u = 'link[rel="' + l + '"][href="' + u + '"]', typeof a == "string" && (u += '[crossorigin="' + a + '"]'), ed.has(u) || (ed.add(u), l = { rel: l, crossOrigin: a, href: t }, e.querySelector(u) === null && (t = e.createElement("link"), $l(t, "link", l), Yl(t), e.head.appendChild(t)));
    }
  }
  function Y0(l) {
    ca.D(l), ud("dns-prefetch", l, null);
  }
  function J0(l, t) {
    ca.C(l, t), ud("preconnect", l, t);
  }
  function X0(l, t, a) {
    ca.L(l, t, a);
    var e = je;
    if (e && l && t) {
      var u = 'link[rel="preload"][as="' + Et(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (u += '[imagesrcset="' + Et(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (u += '[imagesizes="' + Et(a.imageSizes) + '"]')) : u += '[href="' + Et(l) + '"]';
      var n = u;
      switch (t) {
        case "style":
          n = qe(l);
          break;
        case "script":
          n = Be(l);
      }
      Rt.has(n) || (l = H({ rel: "preload", href: t === "image" && a && a.imageSrcSet ? void 0 : l, as: t }, a), Rt.set(n, l), e.querySelector(u) !== null || t === "style" && e.querySelector(pu(n)) || t === "script" && e.querySelector(Ou(n)) || (t = e.createElement("link"), $l(t, "link", l), Yl(t), e.head.appendChild(t)));
    }
  }
  function Q0(l, t) {
    ca.m(l, t);
    var a = je;
    if (a && l) {
      var e = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + Et(e) + '"][href="' + Et(l) + '"]', n = u;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Be(l);
      }
      if (!Rt.has(n) && (l = H({ rel: "modulepreload", href: l }, t), Rt.set(n, l), a.querySelector(u) === null)) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Ou(n))) return;
        }
        e = a.createElement("link"), $l(e, "link", l), Yl(e), a.head.appendChild(e);
      }
    }
  }
  function Z0(l, t, a) {
    ca.S(l, t, a);
    var e = je;
    if (e && l) {
      var u = ue(e).hoistableStyles, n = qe(l);
      t = t || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = e.querySelector(pu(n))) c.loading = 5;
        else {
          l = H({ rel: "stylesheet", href: l, "data-precedence": t }, a), (a = Rt.get(n)) && ff(l, a);
          var f = i = e.createElement("link");
          Yl(f), $l(f, "link", l), f._p = new Promise(function(y, S) {
            f.onload = y, f.onerror = S;
          }), f.addEventListener("load", function() {
            c.loading |= 1;
          }), f.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Vn(i, t, e);
        }
        i = { type: "stylesheet", instance: i, count: 1, state: c }, u.set(n, i);
      }
    }
  }
  function V0(l, t) {
    ca.X(l, t);
    var a = je;
    if (a && l) {
      var e = ue(a).hoistableScripts, u = Be(l), n = e.get(u);
      n || (n = a.querySelector(Ou(u)), n || (l = H({ src: l, async: true }, t), (t = Rt.get(u)) && sf(l, t), n = a.createElement("script"), Yl(n), $l(n, "link", l), a.head.appendChild(n)), n = { type: "script", instance: n, count: 1, state: null }, e.set(u, n));
    }
  }
  function L0(l, t) {
    ca.M(l, t);
    var a = je;
    if (a && l) {
      var e = ue(a).hoistableScripts, u = Be(l), n = e.get(u);
      n || (n = a.querySelector(Ou(u)), n || (l = H({ src: l, async: true, type: "module" }, t), (t = Rt.get(u)) && sf(l, t), n = a.createElement("script"), Yl(n), $l(n, "link", l), a.head.appendChild(n)), n = { type: "script", instance: n, count: 1, state: null }, e.set(u, n));
    }
  }
  function nd(l, t, a, e) {
    var u = (u = X.current) ? Zn(u) : null;
    if (!u) throw Error(o(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (t = qe(a.href), a = ue(u).hoistableStyles, e = a.get(t), e || (e = { type: "style", instance: null, count: 0, state: null }, a.set(t, e)), e) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          l = qe(a.href);
          var n = ue(u).hoistableStyles, i = n.get(l);
          if (i || (u = u.ownerDocument || u, i = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, n.set(l, i), (n = u.querySelector(pu(l))) && !n._p && (i.instance = n, i.state.loading = 5), Rt.has(l) || (a = { rel: "preload", as: "style", href: a.href, crossOrigin: a.crossOrigin, integrity: a.integrity, media: a.media, hrefLang: a.hrefLang, referrerPolicy: a.referrerPolicy }, Rt.set(l, a), n || K0(u, l, a, i.state))), t && e === null) throw Error(o(528, ""));
          return i;
        }
        if (t && e !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Be(a), a = ue(u).hoistableScripts, e = a.get(t), e || (e = { type: "script", instance: null, count: 0, state: null }, a.set(t, e)), e) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, l));
    }
  }
  function qe(l) {
    return 'href="' + Et(l) + '"';
  }
  function pu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function id(l) {
    return H({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function K0(l, t, a, e) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? e.loading = 1 : (t = l.createElement("link"), e.preload = t, t.addEventListener("load", function() {
      return e.loading |= 1;
    }), t.addEventListener("error", function() {
      return e.loading |= 2;
    }), $l(t, "link", a), Yl(t), l.head.appendChild(t));
  }
  function Be(l) {
    return '[src="' + Et(l) + '"]';
  }
  function Ou(l) {
    return "script[async]" + l;
  }
  function cd(l, t, a) {
    if (t.count++, t.instance === null) switch (t.type) {
      case "style":
        var e = l.querySelector('style[data-href~="' + Et(a.href) + '"]');
        if (e) return t.instance = e, Yl(e), e;
        var u = H({}, a, { "data-href": a.href, "data-precedence": a.precedence, href: null, precedence: null });
        return e = (l.ownerDocument || l).createElement("style"), Yl(e), $l(e, "style", u), Vn(e, a.precedence, l), t.instance = e;
      case "stylesheet":
        u = qe(a.href);
        var n = l.querySelector(pu(u));
        if (n) return t.state.loading |= 4, t.instance = n, Yl(n), n;
        e = id(a), (u = Rt.get(u)) && ff(e, u), n = (l.ownerDocument || l).createElement("link"), Yl(n);
        var i = n;
        return i._p = new Promise(function(c, f) {
          i.onload = c, i.onerror = f;
        }), $l(n, "link", e), t.state.loading |= 4, Vn(n, a.precedence, l), t.instance = n;
      case "script":
        return n = Be(a.src), (u = l.querySelector(Ou(n))) ? (t.instance = u, Yl(u), u) : (e = a, (u = Rt.get(n)) && (e = H({}, a), sf(e, u)), l = l.ownerDocument || l, u = l.createElement("script"), Yl(u), $l(u, "link", e), l.head.appendChild(u), t.instance = u);
      case "void":
        return null;
      default:
        throw Error(o(443, t.type));
    }
    else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (e = t.instance, t.state.loading |= 4, Vn(e, a.precedence, l));
    return t.instance;
  }
  function Vn(l, t, a) {
    for (var e = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = e.length ? e[e.length - 1] : null, n = u, i = 0; i < e.length; i++) {
      var c = e[i];
      if (c.dataset.precedence === t) n = c;
      else if (n !== u) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
  }
  function ff(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function sf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Ln = null;
  function fd(l, t, a) {
    if (Ln === null) {
      var e = /* @__PURE__ */ new Map(), u = Ln = /* @__PURE__ */ new Map();
      u.set(a, e);
    } else u = Ln, e = u.get(a), e || (e = /* @__PURE__ */ new Map(), u.set(a, e));
    if (e.has(l)) return e;
    for (e.set(l, null), a = a.getElementsByTagName(l), u = 0; u < a.length; u++) {
      var n = a[u];
      if (!(n[Ve] || n[Ll] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var c = e.get(i);
        c ? c.push(n) : e.set(i, [n]);
      }
    }
    return e;
  }
  function sd(l, t, a) {
    l = l.ownerDocument || l, l.head.insertBefore(a, t === "title" ? l.querySelector("head > title") : null);
  }
  function w0(l, t, a) {
    if (a === 1 || t.itemProp != null) return false;
    switch (l) {
      case "meta":
      case "title":
        return true;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
        return true;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return true;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return true;
    }
    return false;
  }
  function md(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function W0(l, t, a, e) {
    if (a.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== false) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var u = qe(e.href), n = t.querySelector(pu(u));
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Kn.bind(l), t.then(l, l)), a.state.loading |= 4, a.instance = n, Yl(n);
          return;
        }
        n = t.ownerDocument || t, e = id(e), (u = Rt.get(u)) && ff(e, u), n = n.createElement("link"), Yl(n);
        var i = n;
        i._p = new Promise(function(c, f) {
          i.onload = c, i.onerror = f;
        }), $l(n, "link", e), a.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (l.count++, a = Kn.bind(l), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var mf = 0;
  function $0(l, t) {
    return l.stylesheets && l.count === 0 && Wn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(a) {
      var e = setTimeout(function() {
        if (l.stylesheets && Wn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && mf === 0 && (mf = 62500 * D0());
      var u = setTimeout(function() {
        if (l.waitingForImages = false, l.count === 0 && (l.stylesheets && Wn(l, l.stylesheets), l.unsuspend)) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, (l.imgBytes > mf ? 50 : 800) + t);
      return l.unsuspend = a, function() {
        l.unsuspend = null, clearTimeout(e), clearTimeout(u);
      };
    } : null;
  }
  function Kn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Wn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var wn = null;
  function Wn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, wn = /* @__PURE__ */ new Map(), t.forEach(I0, l), wn = null, Kn.call(l));
  }
  function I0(l, t) {
    if (!(t.state.loading & 4)) {
      var a = wn.get(l);
      if (a) var e = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), wn.set(l, a);
        for (var u = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < u.length; n++) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (a.set(i.dataset.precedence, i), e = i);
        }
        e && a.set(null, e);
      }
      u = t.instance, i = u.getAttribute("data-precedence"), n = a.get(i) || e, n === e && a.set(null, u), a.set(i, u), this.count++, e = Kn.bind(this), u.addEventListener("load", e), u.addEventListener("error", e), n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(u, l.firstChild)), t.state.loading |= 4;
    }
  }
  var Du = { $$typeof: Gl, Provider: null, Consumer: null, _currentValue: x, _currentValue2: x, _threadCount: 0 };
  function F0(l, t, a, e, u, n, i, c, f) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ui(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ui(0), this.hiddenUpdates = ui(null), this.identifierPrefix = e, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function od(l, t, a, e, u, n, i, c, f, y, S, M) {
    return l = new F0(l, t, a, i, f, y, S, M, c), t = 1, n === true && (t |= 24), n = gt(3, null, null, t), l.current = n, n.stateNode = l, t = Qi(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = { element: e, isDehydrated: a, cache: t }, Ki(n), l;
  }
  function dd(l) {
    return l ? (l = ye, l) : ye;
  }
  function rd(l, t, a, e, u, n) {
    u = dd(u), e.context === null ? e.context = u : e.pendingContext = u, e = ga(t), e.payload = { element: a }, n = n === void 0 ? null : n, n !== null && (e.callback = n), a = ha(l, e, t), a !== null && (st(a, l, t), cu(a, l, t));
  }
  function yd(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function of(l, t) {
    yd(l, t), (l = l.alternate) && yd(l, t);
  }
  function vd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Ya(l, 67108864);
      t !== null && st(t, l, 67108864), of(l, 67108864);
    }
  }
  function gd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Mt();
      t = ni(t);
      var a = Ya(l, t);
      a !== null && st(a, l, t), of(l, t);
    }
  }
  var $n = true;
  function k0(l, t, a, e) {
    var u = _.T;
    _.T = null;
    var n = p.p;
    try {
      p.p = 2, df(l, t, a, e);
    } finally {
      p.p = n, _.T = u;
    }
  }
  function P0(l, t, a, e) {
    var u = _.T;
    _.T = null;
    var n = p.p;
    try {
      p.p = 8, df(l, t, a, e);
    } finally {
      p.p = n, _.T = u;
    }
  }
  function df(l, t, a, e) {
    if ($n) {
      var u = rf(e);
      if (u === null) Fc(l, t, e, In, a), _d(l, e);
      else if (ty(u, l, t, a, e)) e.stopPropagation();
      else if (_d(l, e), t & 4 && -1 < ly.indexOf(l)) {
        for (; u !== null; ) {
          var n = ee(u);
          if (n !== null) switch (n.tag) {
            case 3:
              if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                var i = Ha(n.pendingLanes);
                if (i !== 0) {
                  var c = n;
                  for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                    var f = 1 << 31 - yt(i);
                    c.entanglements[1] |= f, i &= ~f;
                  }
                  Zt(n), (il & 6) === 0 && (Cn = Ol() + 500, Gu(0));
                }
              }
              break;
            case 31:
            case 13:
              c = Ya(n, 2), c !== null && st(c, n, 2), Hn(), of(n, 2);
          }
          if (n = rf(e), n === null && Fc(l, t, e, In, a), n === u) break;
          u = n;
        }
        u !== null && e.stopPropagation();
      } else Fc(l, t, e, null, a);
    }
  }
  function rf(l) {
    return l = yi(l), yf(l);
  }
  var In = null;
  function yf(l) {
    if (In = null, l = ae(l), l !== null) {
      var t = q(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (l = V(t), l !== null) return l;
          l = null;
        } else if (a === 31) {
          if (l = P(t), l !== null) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return In = l, null;
  }
  function hd(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ei()) {
          case at:
            return 2;
          case le:
            return 8;
          case xu:
          case Jd:
            return 32;
          case Af:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var vf = false, Oa = null, Da = null, Na = null, Nu = /* @__PURE__ */ new Map(), Uu = /* @__PURE__ */ new Map(), Ua = [], ly = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function _d(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Oa = null;
        break;
      case "dragenter":
      case "dragleave":
        Da = null;
        break;
      case "mouseover":
      case "mouseout":
        Na = null;
        break;
      case "pointerover":
      case "pointerout":
        Nu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Uu.delete(t.pointerId);
    }
  }
  function Cu(l, t, a, e, u, n) {
    return l === null || l.nativeEvent !== n ? (l = { blockedOn: t, domEventName: a, eventSystemFlags: e, nativeEvent: n, targetContainers: [u] }, t !== null && (t = ee(t), t !== null && vd(t)), l) : (l.eventSystemFlags |= e, t = l.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), l);
  }
  function ty(l, t, a, e, u) {
    switch (t) {
      case "focusin":
        return Oa = Cu(Oa, l, t, a, e, u), true;
      case "dragenter":
        return Da = Cu(Da, l, t, a, e, u), true;
      case "mouseover":
        return Na = Cu(Na, l, t, a, e, u), true;
      case "pointerover":
        var n = u.pointerId;
        return Nu.set(n, Cu(Nu.get(n) || null, l, t, a, e, u)), true;
      case "gotpointercapture":
        return n = u.pointerId, Uu.set(n, Cu(Uu.get(n) || null, l, t, a, e, u)), true;
    }
    return false;
  }
  function Sd(l) {
    var t = ae(l.target);
    if (t !== null) {
      var a = q(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = V(a), t !== null) {
            l.blockedOn = t, Cf(l.priority, function() {
              gd(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = P(a), t !== null) {
            l.blockedOn = t, Cf(l.priority, function() {
              gd(a);
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Fn(l) {
    if (l.blockedOn !== null) return false;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = rf(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var e = new a.constructor(a.type, a);
        ri = e, a.target.dispatchEvent(e), ri = null;
      } else return t = ee(a), t !== null && vd(t), l.blockedOn = a, false;
      t.shift();
    }
    return true;
  }
  function bd(l, t, a) {
    Fn(l) && a.delete(t);
  }
  function ay() {
    vf = false, Oa !== null && Fn(Oa) && (Oa = null), Da !== null && Fn(Da) && (Da = null), Na !== null && Fn(Na) && (Na = null), Nu.forEach(bd), Uu.forEach(bd);
  }
  function kn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, vf || (vf = true, v.unstable_scheduleCallback(v.unstable_NormalPriority, ay)));
  }
  var Pn = null;
  function Md(l) {
    Pn !== l && (Pn = l, v.unstable_scheduleCallback(v.unstable_NormalPriority, function() {
      Pn === l && (Pn = null);
      for (var t = 0; t < l.length; t += 3) {
        var a = l[t], e = l[t + 1], u = l[t + 2];
        if (typeof e != "function") {
          if (yf(e || a) === null) continue;
          break;
        }
        var n = ee(a);
        n !== null && (l.splice(t, 3), t -= 3, dc(n, { pending: true, data: u, method: a.method, action: e }, e, u));
      }
    }));
  }
  function xe(l) {
    function t(f) {
      return kn(f, l);
    }
    Oa !== null && kn(Oa, l), Da !== null && kn(Da, l), Na !== null && kn(Na, l), Nu.forEach(t), Uu.forEach(t);
    for (var a = 0; a < Ua.length; a++) {
      var e = Ua[a];
      e.blockedOn === l && (e.blockedOn = null);
    }
    for (; 0 < Ua.length && (a = Ua[0], a.blockedOn === null); ) Sd(a), a.blockedOn === null && Ua.shift();
    if (a = (l.ownerDocument || l).$$reactFormReplay, a != null) for (e = 0; e < a.length; e += 3) {
      var u = a[e], n = a[e + 1], i = u[et] || null;
      if (typeof n == "function") i || Md(a);
      else if (i) {
        var c = null;
        if (n && n.hasAttribute("formAction")) {
          if (u = n, i = n[et] || null) c = i.formAction;
          else if (yf(u) !== null) continue;
        } else c = i.action;
        typeof c == "function" ? a[e + 1] = c : (a.splice(e, 3), e -= 3), Md(a);
      }
    }
  }
  function zd() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({ handler: function() {
        return new Promise(function(i) {
          return u = i;
        });
      }, focusReset: "manual", scroll: "manual" });
    }
    function t() {
      u !== null && (u(), u = null), e || setTimeout(a, 20);
    }
    function a() {
      if (!e && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, { state: n.getState(), info: "react-transition", history: "replace" });
      }
    }
    if (typeof navigation == "object") {
      var e = false, u = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        e = true, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), u !== null && (u(), u = null);
      };
    }
  }
  function gf(l) {
    this._internalRoot = l;
  }
  li.prototype.render = gf.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var a = t.current, e = Mt();
    rd(a, e, l, t, null, null);
  }, li.prototype.unmount = gf.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      rd(l.current, 2, null, l, null, null), Hn(), t[te] = null;
    }
  };
  function li(l) {
    this._internalRoot = l;
  }
  li.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Uf();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < Ua.length && t !== 0 && t < Ua[a].priority; a++) ;
      Ua.splice(a, 0, l), a === 0 && Sd(l);
    }
  };
  var Gd = E.version;
  if (Gd !== "19.2.8") throw Error(o(527, Gd, "19.2.8"));
  p.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0) throw typeof l.render == "function" ? Error(o(188)) : (l = Object.keys(l).join(","), Error(o(268, l)));
    return l = z(t), l = l !== null ? J(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var ey = { bundleType: 0, version: "19.2.8", rendererPackageName: "react-dom", currentDispatcherRef: _, reconcilerVersion: "19.2.8" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ti.isDisabled && ti.supportsFiber) try {
      Xe = ti.inject(ey), rt = ti;
    } catch {
    }
  }
  return Hu.createRoot = function(l, t) {
    if (!N(l)) throw Error(o(299));
    var a = false, e = "", u = Dm, n = Nm, i = Um;
    return t != null && (t.unstable_strictMode === true && (a = true), t.identifierPrefix !== void 0 && (e = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = od(l, 1, false, null, null, a, e, null, u, n, i, zd), l[te] = t.current, Ic(l), new gf(t);
  }, Hu.hydrateRoot = function(l, t, a) {
    if (!N(l)) throw Error(o(299));
    var e = false, u = "", n = Dm, i = Nm, c = Um, f = null;
    return a != null && (a.unstable_strictMode === true && (e = true), a.identifierPrefix !== void 0 && (u = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (i = a.onCaughtError), a.onRecoverableError !== void 0 && (c = a.onRecoverableError), a.formState !== void 0 && (f = a.formState)), t = od(l, 1, true, t, a ?? null, e, u, f, n, i, c, zd), t.context = dd(null), a = t.current, e = Mt(), e = ni(e), u = ga(e), u.callback = null, ha(a, u, e), a = e, t.current.lanes = a, Ze(t, a), Zt(t), l[te] = t.current, Ic(l), new li(t);
  }, Hu.version = "19.2.8", Hu;
}
var Rd;
function yy() {
  if (Rd) return Sf.exports;
  Rd = 1;
  function v() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v);
    } catch (E) {
      console.error(E);
    }
  }
  return v(), Sf.exports = ry(), Sf.exports;
}
var vy = yy();
const gy = Bd(vy), hy = ({ gameMode: v, hintMode: E, currentTurn: A, categories: o, selectedCategoryId: N, onNewGame: q, onReplay: V, onGameModeChange: P, onHintToggle: U, onCategoryChange: z, onCustomImagesUpload: J }) => {
  const H = (B) => {
    B.target.files && B.target.files.length > 0 && J(B.target.files);
  };
  return T.jsxs("div", { className: "controls-toolbar", id: "controls-toolbar", children: [T.jsxs("div", { className: "button-group", children: [T.jsx("button", { className: "btn btn-primary", onClick: q, id: "btn-new-game", children: "\u{1F3AE} New Game" }), T.jsx("button", { className: "btn", onClick: V, id: "btn-replay", children: "\u{1F504} Replay Game" }), T.jsxs("select", { className: "select-input", value: v, onChange: (B) => P(B.target.value), id: "select-difficulty", children: [T.jsx("option", { value: "EASY", children: "1 Player (Solitaire): Clear Center" }), T.jsx("option", { value: "HARD", children: "2 Players (Versus): Match Assigned Target" })] }), T.jsxs("button", { className: `btn btn-toggle ${E ? "active" : ""}`, onClick: U, id: "btn-hints-toggle", children: ["\u{1F4A1} Hints: ", E ? "ON" : "OFF"] }), v === "HARD" && A && T.jsxs("div", { className: "turn-badge", id: "player-turn-indicator", children: ["\u{1F449} Turn: ", T.jsx("strong", { style: { color: A === "Player 1" ? "#00f2fe" : "#ff007f" }, children: A })] })] }), T.jsxs("div", { className: "button-group", children: [T.jsx("select", { className: "select-input", value: N, onChange: (B) => z(B.target.value), id: "select-category", children: o.map((B) => T.jsxs("option", { value: B.id, children: ["\u{1F4C1} ", B.name] }, B.id)) }), T.jsxs("label", { className: "btn", htmlFor: "custom-image-upload", id: "label-upload", children: ["\u{1F4C1} Upload Custom Images", T.jsx("input", { id: "custom-image-upload", type: "file", multiple: true, accept: "image/*", style: { display: "none" }, onChange: H })] })] })] });
}, _y = ({ index: v, image: E, isIncluded: A, isHinted: o, playerTargetLabel: N, isWinningTarget: q, winningPlayer: V, isDimmed: P, onClick: U }) => {
  const z = ["picture-card", A ? "included" : "", o && A ? "hinted" : "", N === "P1 Target" ? "p1-target" : "", N === "P2 Target" ? "p2-target" : "", q ? `winning-target ${V === "Player 2" ? "win-p2" : "win-p1"}` : "", P ? "dimmed-card" : ""].filter(Boolean).join(" ");
  return T.jsxs("div", { className: z, onClick: U, id: `picture-card-${v}`, title: `Image #${v + 1}: ${E.name}`, children: [T.jsxs("div", { className: "card-badge", children: ["#", v + 1] }), N && T.jsx("div", { className: `card-player-target ${N === "P1 Target" ? "p1" : "p2"}`, children: N }), q && T.jsx("div", { className: "winning-match-badge", children: "MATCHED TARGET!" }), T.jsx("img", { src: E.url, alt: E.name, loading: "eager" }), T.jsx("div", { className: "card-status-indicator" })] });
}, Sy = ({ targetBuffer: v, width: E, height: A, isVictory: o, winningPlayer: N }) => {
  const q = cl.useRef(null);
  cl.useEffect(() => {
    const P = q.current;
    if (!P || !v) return;
    const U = P.getContext("2d");
    if (!U) return;
    const z = new Uint8ClampedArray(v), J = new ImageData(z, E, A);
    U.putImageData(J, 0, 0);
  }, [v, E, A]);
  const V = ["target-card", o ? `winning-canvas ${N === "Player 2" ? "win-p2" : "win-p1"}` : ""].filter(Boolean).join(" ");
  return T.jsx("div", { className: V, id: "target-canvas-card", children: T.jsx("canvas", { ref: q, width: E, height: A, id: "target-canvas-element" }) });
}, by = ({ outerImages: v, toggledMask: E, hintMode: A, gameMode: o, player1TargetIndex: N, player2TargetIndex: q, currentTurn: V, targetBuffer: P, canvasWidth: U, canvasHeight: z, winningCardIndex: J, winningPlayer: H, isVictoryPause: B, onTileClick: Rl }) => {
  const rl = (gl) => {
    if (gl === 4) return T.jsx(Sy, { targetBuffer: P, width: U, height: z, gameMode: o, isVictory: B, winningPlayer: H }, "target-center-canvas");
    const Sl = gl < 4 ? gl : gl - 1, Ql = v[Sl];
    if (!Ql) return T.jsx("div", { className: "picture-card" }, `empty-${gl}`);
    const Gl = (E & 1 << Sl) !== 0;
    let Al = null;
    o === "HARD" && (Sl === N ? Al = "P1 Target" : Sl === q && (Al = "P2 Target"));
    const Pl = B && J === Sl, Bl = B && !Pl;
    return T.jsx(_y, { index: Sl, image: Ql, isIncluded: Gl, isHinted: A && !B, playerTargetLabel: Al, isWinningTarget: Pl, winningPlayer: H, isDimmed: Bl, onClick: () => Rl(Sl) }, `pic-${Sl}`);
  }, Hl = ["grid-wrapper", B ? "victory-active" : "", o === "HARD" ? V === "Player 1" ? "turn-p1-active" : "turn-p2-active" : ""].filter(Boolean).join(" ");
  return T.jsx("div", { className: Hl, children: T.jsx("div", { className: "game-grid", id: "main-game-grid", children: [0, 1, 2, 3, 4, 5, 6, 7, 8].map((gl) => rl(gl)) }) });
}, My = ({ stats: v, onNextGame: E, onReplay: A }) => {
  var _a;
  console.log("\u{1F6A8} [ImageNim] WinModal mounted / rendering with stats:", v);
  const o = !!v.winner, N = !o && v.moves === v.perfectScore;
  return T.jsx("div", { className: "modal-overlay", id: "win-modal-overlay", children: T.jsxs("div", { className: "modal-content", id: "win-modal-content", children: [T.jsx("div", { className: "modal-trophy", children: "\u{1F3C6}" }), T.jsx("h2", { className: "modal-title", children: o ? `${(_a = v.winner) == null ? void 0 : _a.toUpperCase()} WINS!` : N ? "PERFECT SCORE!" : "PUZZLE SOLVED!" }), T.jsx("p", { style: { color: "var(--text-muted)" }, children: o ? `Congratulations! ${v.winner} matched their target image in ${v.moves} total moves!` : N ? `Congratulations! You solved the puzzle in the optimal ${v.perfectScore} moves!` : `Great job! You solved it in ${v.moves} moves.` }), T.jsxs("div", { className: "modal-stats-grid", children: [T.jsxs("div", { className: "modal-stat-box", children: [T.jsx("div", { className: "stat-label", children: "Total Moves" }), T.jsx("div", { className: "modal-stat-val", children: v.moves })] }), T.jsxs("div", { className: "modal-stat-box", children: [T.jsx("div", { className: "stat-label", children: "Mode" }), T.jsx("div", { className: "modal-stat-val", style: { color: "var(--accent-cyan)", fontSize: "1.2rem" }, children: o ? "2 Players" : "1 Player" })] })] }), T.jsxs("div", { className: "button-group", style: { width: "100%", justifyContent: "center" }, children: [T.jsx("button", { className: "btn btn-primary", onClick: E, id: "modal-btn-next", children: "\u{1F3AE} Next Game" }), T.jsx("button", { className: "btn", onClick: A, id: "modal-btn-replay", children: "\u{1F504} Replay Same Game" })] })] }) });
}, zy = ({ winner: v, winningCardIndex: E, onSkip: A, autoCloseMs: o = 3500 }) => {
  const [N, q] = cl.useState(Math.ceil(o / 1e3)), [V, P] = cl.useState(false);
  cl.useEffect(() => {
    const B = setInterval(() => {
      q((rl) => rl > 1 ? rl - 1 : 1);
    }, 1e3), Rl = setTimeout(() => {
      P(true);
    }, 600);
    return () => {
      clearInterval(B), clearTimeout(Rl);
    };
  }, []);
  const U = (B) => {
    B.stopPropagation(), V && A();
  }, z = v === "Player 1", J = v === "Player 2", H = E !== void 0 ? E + 1 : void 0;
  return T.jsxs("div", { className: `victory-banner-container ${z ? "p1-win" : J ? "p2-win" : "solo-win"}`, onClick: U, children: [T.jsxs("div", { className: "victory-banner-content", children: [T.jsx("div", { className: "victory-trophy-badge", children: "\u{1F3C6}" }), T.jsxs("div", { className: "victory-text-group", children: [T.jsxs("div", { className: "victory-title-row", children: [T.jsx("span", { className: "victory-player-tag", children: v ? `${v.toUpperCase()} WINS!` : "VICTORY!" }), T.jsx("span", { className: "victory-sparkle", children: "\u2728" })] }), T.jsx("p", { className: "victory-explanation", children: v ? H !== void 0 ? T.jsxs(T.Fragment, { children: ["Matched ", T.jsxs("strong", { children: [v, "'s Target Card (#", H, ")"] }), "! The central XOR output perfectly matches the target image."] }) : T.jsxs(T.Fragment, { children: [T.jsx("strong", { children: v }), " cleared the canvas and completed the winning combination!"] }) : "All XOR layers resolved! The central canvas is cleared." })] }), T.jsxs("button", { className: "victory-skip-btn", onClick: U, children: [T.jsx("span", { children: "Summary" }), T.jsxs("span", { className: "victory-timer-tag", children: ["(", N, "s) \u2794"] })] })] }), T.jsx("div", { className: "victory-progress-bar", style: { animationDuration: `${o}ms` } })] });
}, Gy = ({ currentTurn: v, p1TargetNum: E, p2TargetNum: A }) => {
  const o = v === "Player 1";
  return T.jsxs("div", { className: `turn-banner-container ${o ? "p1-turn" : "p2-turn"}`, id: "turn-banner", children: [T.jsxs("div", { className: "turn-banner-left", children: [T.jsx("span", { className: "turn-mode-tag", children: "\u2694\uFE0F 2-PLAYER VERSUS" }), T.jsxs("span", { className: "turn-subtext", children: ["P1 Target: ", T.jsxs("strong", { children: ["#", E] }), " | P2 Target: ", T.jsxs("strong", { children: ["#", A] })] })] }), T.jsx("div", { className: "turn-banner-center", children: T.jsxs("div", { className: `turn-pill ${o ? "p1" : "p2"}`, children: [T.jsx("span", { className: "turn-arrow", children: "\u{1F449}" }), T.jsxs("span", { className: "turn-player-name", children: [v.toUpperCase(), "'S TURN"] })] }) })] });
};
function Ty(v) {
  var E = ai(v, Xl.__wbindgen_malloc), A = qu;
  Xl.clear_canvas(E, A, v);
}
function Ey(v) {
  return Xl.count_set_bits(v) >>> 0;
}
function Ay(v, E, A, o) {
  return Xl.generate_initial_puzzle_mask(v, E, A, o) >>> 0;
}
function Hd(v) {
  const E = ai(v, Xl.__wbindgen_malloc), A = qu;
  return Xl.is_canvas_black(E, A) !== 0;
}
function py(v, E, A) {
  const o = Xl.select_random_subset(v, E, A);
  var N = xd(o[0], o[1]).slice();
  return Xl.__wbindgen_free(o[0], o[1] * 1, 1), N;
}
function jd(v, E) {
  var A = ai(v, Xl.__wbindgen_malloc), o = qu;
  const N = ai(E, Xl.__wbindgen_malloc), q = qu;
  Xl.xor_buffers(A, o, v, N, q);
}
function Oy() {
  return { __proto__: null, "./imagenim_crate_bg.js": { __proto__: null, __wbg___wbindgen_copy_to_typed_array_4db0cbe2cc60dbee: function(E, A, o) {
    new Uint8Array(o.buffer, o.byteOffset, o.byteLength).set(xd(E, A));
  }, __wbindgen_init_externref_table: function() {
    const E = Xl.__wbindgen_externrefs, A = E.grow(4);
    E.set(0, void 0), E.set(A + 0, void 0), E.set(A + 1, null), E.set(A + 2, true), E.set(A + 3, false);
  } } };
}
function xd(v, E) {
  return v = v >>> 0, Yd().subarray(v / 1, v / 1 + E);
}
let ju = null;
function Yd() {
  return (ju === null || ju.byteLength === 0) && (ju = new Uint8Array(Xl.memory.buffer)), ju;
}
function ai(v, E) {
  const A = E(v.length * 1, 1) >>> 0;
  return Yd().set(v, A / 1), qu = v.length, A;
}
let qu = 0, Xl;
function Dy(v, E) {
  return Xl = v.exports, ju = null, Xl.__wbindgen_start(), Xl;
}
async function Ny(v, E) {
  if (typeof Response == "function" && v instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming == "function") try {
      return await WebAssembly.instantiateStreaming(v, E);
    } catch (N) {
      if (v.ok && A(v.type) && v.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", N);
      else throw N;
    }
    const o = await v.arrayBuffer();
    return await WebAssembly.instantiate(o, E);
  } else {
    const o = await WebAssembly.instantiate(v, E);
    return o instanceof WebAssembly.Instance ? { instance: o, module: v } : o;
  }
  function A(o) {
    switch (o) {
      case "basic":
      case "cors":
      case "default":
        return true;
    }
    return false;
  }
}
async function Uy(v) {
  if (Xl !== void 0) return Xl;
  v !== void 0 && (Object.getPrototypeOf(v) === Object.prototype ? { module_or_path: v } = v : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), v === void 0 && (v = new URL("/assets/imagenim_crate_bg-ByQ68JOO.wasm", import.meta.url));
  const E = Oy();
  (typeof v == "string" || typeof Request == "function" && v instanceof Request || typeof URL == "function" && v instanceof URL) && (v = fetch(v));
  const { instance: A, module: o } = await Ny(await v, E);
  return Dy(A);
}
let qd = false;
async function Cy() {
  qd || (await Uy(), qd = true);
}
async function Ry(v, E, A) {
  return new Promise((o, N) => {
    const q = new Image();
    q.crossOrigin = "anonymous", q.onload = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          try {
            const V = document.createElement("canvas");
            V.width = E, V.height = A;
            const P = V.getContext("2d", { willReadFrequently: true });
            if (!P) {
              N(new Error("Failed to get 2d canvas context"));
              return;
            }
            P.fillStyle = "#000000", P.fillRect(0, 0, E, A), P.drawImage(q, 0, 0, E, A);
            const U = P.getImageData(0, 0, E, A), z = new Uint8Array(U.data);
            o({ url: v, width: E, height: A, buffer: z });
          } catch (V) {
            N(V);
          }
        });
      });
    }, q.onerror = (V) => N(V), q.src = v;
  });
}
const Hy = [{ id: "bryce", name: "Bryce Canyon", description: "Classic Bryce Canyon rock formations", images: [{ id: "bryce-1", name: "IMG_4690", url: "/images/bryce/IMG_4690.JPG" }, { id: "bryce-2", name: "IMG_4732", url: "/images/bryce/IMG_4732.JPG" }, { id: "bryce-3", name: "IMG_4744", url: "/images/bryce/IMG_4744.JPG" }, { id: "bryce-4", name: "IMG_4775B", url: "/images/bryce/IMG_4775B.JPG" }, { id: "bryce-5", name: "IMG_4778", url: "/images/bryce/IMG_4778.JPG" }, { id: "bryce-6", name: "IMG_4780", url: "/images/bryce/IMG_4780.JPG" }, { id: "bryce-7", name: "IMG_4792", url: "/images/bryce/IMG_4792.JPG" }, { id: "bryce-8", name: "IMG_4795", url: "/images/bryce/IMG_4795.JPG" }, { id: "bryce-9", name: "IMG_4806", url: "/images/bryce/IMG_4806.JPG" }, { id: "bryce-10", name: "IMG_4808", url: "/images/bryce/IMG_4808.JPG" }, { id: "bryce-11", name: "IMG_4813", url: "/images/bryce/IMG_4813.JPG" }, { id: "bryce-12", name: "IMG_4818", url: "/images/bryce/IMG_4818.JPG" }, { id: "bryce-13", name: "IMG_4826", url: "/images/bryce/IMG_4826.JPG" }, { id: "bryce-14", name: "IMG_4830", url: "/images/bryce/IMG_4830.JPG" }, { id: "bryce-15", name: "IMG_4836", url: "/images/bryce/IMG_4836.JPG" }, { id: "bryce-16", name: "IMG_4837", url: "/images/bryce/IMG_4837.JPG" }, { id: "bryce-17", name: "IMG_4853", url: "/images/bryce/IMG_4853.JPG" }, { id: "bryce-18", name: "IMG_4871", url: "/images/bryce/IMG_4871.JPG" }, { id: "bryce-19", name: "IMG_4876", url: "/images/bryce/IMG_4876.JPG" }, { id: "bryce-20", name: "IMG_4881", url: "/images/bryce/IMG_4881.JPG" }] }, { id: "flowers", name: "Flowers & Flora", description: "Vibrant botanical floral photography", images: [{ id: "flowers-1", name: "IMG_2500", url: "/images/flowers/IMG_2500.JPG" }, { id: "flowers-2", name: "IMG_2501", url: "/images/flowers/IMG_2501.JPG" }, { id: "flowers-3", name: "IMG_2510", url: "/images/flowers/IMG_2510.JPG" }, { id: "flowers-4", name: "IMG_2512", url: "/images/flowers/IMG_2512.JPG" }, { id: "flowers-5", name: "IMG_3406", url: "/images/flowers/IMG_3406.JPG" }, { id: "flowers-6", name: "IMG_3407", url: "/images/flowers/IMG_3407.JPG" }, { id: "flowers-7", name: "IMG_3408", url: "/images/flowers/IMG_3408.JPG" }, { id: "flowers-8", name: "IMG_3431", url: "/images/flowers/IMG_3431.JPG" }, { id: "flowers-9", name: "IMG_3436", url: "/images/flowers/IMG_3436.JPG" }, { id: "flowers-10", name: "IMG_3444", url: "/images/flowers/IMG_3444.JPG" }, { id: "flowers-11", name: "IMG_3445", url: "/images/flowers/IMG_3445.JPG" }, { id: "flowers-12", name: "IMG_3453", url: "/images/flowers/IMG_3453.JPG" }, { id: "flowers-13", name: "IMG_3454", url: "/images/flowers/IMG_3454.JPG" }, { id: "flowers-14", name: "IMG_3455", url: "/images/flowers/IMG_3455.JPG" }, { id: "flowers-15", name: "IMG_3471", url: "/images/flowers/IMG_3471.JPG" }, { id: "flowers-16", name: "IMG_3778", url: "/images/flowers/IMG_3778.JPG" }, { id: "flowers-17", name: "IMG_3782", url: "/images/flowers/IMG_3782.JPG" }, { id: "flowers-18", name: "IMG_3783", url: "/images/flowers/IMG_3783.JPG" }, { id: "flowers-19", name: "IMG_3791", url: "/images/flowers/IMG_3791.JPG" }, { id: "flowers-20", name: "IMG_3796", url: "/images/flowers/IMG_3796.JPG" }, { id: "flowers-21", name: "IMG_4163", url: "/images/flowers/IMG_4163.JPG" }, { id: "flowers-22", name: "IMG_4486", url: "/images/flowers/IMG_4486.JPG" }, { id: "flowers-23", name: "IMG_4487", url: "/images/flowers/IMG_4487.JPG" }, { id: "flowers-24", name: "IMG_4488", url: "/images/flowers/IMG_4488.JPG" }, { id: "flowers-25", name: "IMG_4491", url: "/images/flowers/IMG_4491.JPG" }, { id: "flowers-26", name: "IMG_4550", url: "/images/flowers/IMG_4550.JPG" }, { id: "flowers-27", name: "IMG_4552", url: "/images/flowers/IMG_4552.JPG" }, { id: "flowers-28", name: "IMG_4553", url: "/images/flowers/IMG_4553.JPG" }, { id: "flowers-29", name: "IMG_4659", url: "/images/flowers/IMG_4659.JPG" }, { id: "flowers-30", name: "IMG_4935", url: "/images/flowers/IMG_4935.JPG" }, { id: "flowers-31", name: "IMG_4940", url: "/images/flowers/IMG_4940.JPG" }, { id: "flowers-32", name: "IMG_4965", url: "/images/flowers/IMG_4965.JPG" }, { id: "flowers-33", name: "IMG_4967", url: "/images/flowers/IMG_4967.JPG" }, { id: "flowers-34", name: "IMG_4969", url: "/images/flowers/IMG_4969.JPG" }] }, { id: "sunsets", name: "Sunsets & Skies", description: "Golden hour sunset landscapes", images: [{ id: "sunsets-1", name: "IMG_0228", url: "/images/sunsets/IMG_0228.JPG" }, { id: "sunsets-2", name: "IMG_0230", url: "/images/sunsets/IMG_0230.JPG" }, { id: "sunsets-3", name: "IMG_0273", url: "/images/sunsets/IMG_0273.JPG" }, { id: "sunsets-4", name: "IMG_0284", url: "/images/sunsets/IMG_0284.JPG" }, { id: "sunsets-5", name: "IMG_0536", url: "/images/sunsets/IMG_0536.JPG" }, { id: "sunsets-6", name: "IMG_0637", url: "/images/sunsets/IMG_0637.JPG" }, { id: "sunsets-7", name: "IMG_0662", url: "/images/sunsets/IMG_0662.JPG" }, { id: "sunsets-8", name: "IMG_0665", url: "/images/sunsets/IMG_0665.JPG" }, { id: "sunsets-9", name: "IMG_0670", url: "/images/sunsets/IMG_0670.JPG" }, { id: "sunsets-10", name: "IMG_0703", url: "/images/sunsets/IMG_0703.JPG" }, { id: "sunsets-11", name: "IMG_0712", url: "/images/sunsets/IMG_0712.JPG" }, { id: "sunsets-12", name: "IMG_0713", url: "/images/sunsets/IMG_0713.JPG" }, { id: "sunsets-13", name: "IMG_0715", url: "/images/sunsets/IMG_0715.JPG" }, { id: "sunsets-14", name: "IMG_1118", url: "/images/sunsets/IMG_1118.JPG" }, { id: "sunsets-15", name: "IMG_1119", url: "/images/sunsets/IMG_1119.JPG" }, { id: "sunsets-16", name: "IMG_1120", url: "/images/sunsets/IMG_1120.JPG" }, { id: "sunsets-17", name: "IMG_1122", url: "/images/sunsets/IMG_1122.JPG" }, { id: "sunsets-18", name: "IMG_1126", url: "/images/sunsets/IMG_1126.JPG" }, { id: "sunsets-19", name: "IMG_1445", url: "/images/sunsets/IMG_1445.JPG" }, { id: "sunsets-20", name: "IMG_1446", url: "/images/sunsets/IMG_1446.JPG" }, { id: "sunsets-21", name: "IMG_1447", url: "/images/sunsets/IMG_1447.JPG" }, { id: "sunsets-22", name: "IMG_1455", url: "/images/sunsets/IMG_1455.JPG" }, { id: "sunsets-23", name: "IMG_1967", url: "/images/sunsets/IMG_1967.JPG" }, { id: "sunsets-24", name: "IMG_2299", url: "/images/sunsets/IMG_2299.JPG" }, { id: "sunsets-25", name: "IMG_2318", url: "/images/sunsets/IMG_2318.JPG" }, { id: "sunsets-26", name: "IMG_2331", url: "/images/sunsets/IMG_2331.JPG" }, { id: "sunsets-27", name: "IMG_2342", url: "/images/sunsets/IMG_2342.JPG" }, { id: "sunsets-28", name: "IMG_2358", url: "/images/sunsets/IMG_2358.JPG" }, { id: "sunsets-29", name: "IMG_2366", url: "/images/sunsets/IMG_2366.JPG" }, { id: "sunsets-30", name: "IMG_4911", url: "/images/sunsets/IMG_4911.JPG" }, { id: "sunsets-31", name: "STB_0676", url: "/images/sunsets/STB_0676.JPG" }, { id: "sunsets-32", name: "STD_0678", url: "/images/sunsets/STD_0678.JPG" }, { id: "sunsets-33", name: "STH_0682", url: "/images/sunsets/STH_0682.JPG" }] }, { id: "zion", name: "Zion National Park", description: "Majestic red rock canyons of Zion", images: [{ id: "zion-1", name: "IMG_4300", url: "/images/zion/IMG_4300.JPG" }, { id: "zion-2", name: "IMG_4301", url: "/images/zion/IMG_4301.JPG" }, { id: "zion-3", name: "IMG_4307", url: "/images/zion/IMG_4307.JPG" }, { id: "zion-4", name: "IMG_4312", url: "/images/zion/IMG_4312.JPG" }, { id: "zion-5", name: "IMG_4314", url: "/images/zion/IMG_4314.JPG" }, { id: "zion-6", name: "IMG_4315", url: "/images/zion/IMG_4315.JPG" }, { id: "zion-7", name: "IMG_4318", url: "/images/zion/IMG_4318.JPG" }, { id: "zion-8", name: "IMG_4339", url: "/images/zion/IMG_4339.JPG" }, { id: "zion-9", name: "IMG_4349", url: "/images/zion/IMG_4349.JPG" }, { id: "zion-10", name: "IMG_4355", url: "/images/zion/IMG_4355.JPG" }, { id: "zion-11", name: "IMG_4362", url: "/images/zion/IMG_4362.JPG" }, { id: "zion-12", name: "IMG_4371", url: "/images/zion/IMG_4371.JPG" }, { id: "zion-13", name: "IMG_4375", url: "/images/zion/IMG_4375.JPG" }, { id: "zion-14", name: "IMG_4376", url: "/images/zion/IMG_4376.JPG" }, { id: "zion-15", name: "IMG_4377", url: "/images/zion/IMG_4377.JPG" }, { id: "zion-16", name: "IMG_4406", url: "/images/zion/IMG_4406.JPG" }, { id: "zion-17", name: "IMG_4407", url: "/images/zion/IMG_4407.JPG" }, { id: "zion-18", name: "IMG_4408", url: "/images/zion/IMG_4408.JPG" }, { id: "zion-19", name: "IMG_4417", url: "/images/zion/IMG_4417.JPG" }, { id: "zion-20", name: "IMG_4473", url: "/images/zion/IMG_4473.JPG" }, { id: "zion-21", name: "STA_4385", url: "/images/zion/STA_4385.JPG" }, { id: "zion-22", name: "STB_4386", url: "/images/zion/STB_4386.JPG" }, { id: "zion-23", name: "STC_4387", url: "/images/zion/STC_4387.JPG" }] }, { id: "astronomy", name: "Astronomy & Cosmos", description: "Deep space nebulae and galaxies", images: [{ id: "astronomy-1", name: "aurora_borealis_7", url: "/images/astronomy/aurora_borealis_7.svg" }, { id: "astronomy-2", name: "black_hole_8", url: "/images/astronomy/black_hole_8.svg" }, { id: "astronomy-3", name: "cosmic_nebula_1", url: "/images/astronomy/cosmic_nebula_1.svg" }, { id: "astronomy-4", name: "deep_space_4", url: "/images/astronomy/deep_space_4.svg" }, { id: "astronomy-5", name: "hidden_pulsar_10", url: "/images/astronomy/hidden_pulsar_10.svg" }, { id: "astronomy-6", name: "hidden_quasar_9", url: "/images/astronomy/hidden_quasar_9.svg" }, { id: "astronomy-7", name: "ring_planet_6", url: "/images/astronomy/ring_planet_6.svg" }, { id: "astronomy-8", name: "solar_flare_3", url: "/images/astronomy/solar_flare_3.svg" }, { id: "astronomy-9", name: "starlight_galaxy_2", url: "/images/astronomy/starlight_galaxy_2.svg" }, { id: "astronomy-10", name: "supernova_5", url: "/images/astronomy/supernova_5.svg" }] }, { id: "geometry", name: "Neon Geometry", description: "Cyberpunk geometric structures", images: [{ id: "geometry-1", name: "crystal_poly_8", url: "/images/geometry/crystal_poly_8.svg" }, { id: "geometry-2", name: "cyber_triangle_3", url: "/images/geometry/cyber_triangle_3.svg" }, { id: "geometry-3", name: "fractal_mesh_7", url: "/images/geometry/fractal_mesh_7.svg" }, { id: "geometry-4", name: "golden_spiral_4", url: "/images/geometry/golden_spiral_4.svg" }, { id: "geometry-5", name: "hex_lattice_2", url: "/images/geometry/hex_lattice_2.svg" }, { id: "geometry-6", name: "hidden_dodeca_10", url: "/images/geometry/hidden_dodeca_10.svg" }, { id: "geometry-7", name: "hidden_torus_9", url: "/images/geometry/hidden_torus_9.svg" }, { id: "geometry-8", name: "hypercube_6", url: "/images/geometry/hypercube_6.svg" }, { id: "geometry-9", name: "isogrid_5", url: "/images/geometry/isogrid_5.svg" }, { id: "geometry-10", name: "neon_cube_1", url: "/images/geometry/neon_cube_1.svg" }] }, { id: "abstract", name: "Abstract Fluid", description: "Vibrant color flows and wave art", images: [{ id: "abstract-1", name: "cyberpunk_glow_6", url: "/images/abstract/cyberpunk_glow_6.svg" }, { id: "abstract-2", name: "emerald_dust_7", url: "/images/abstract/emerald_dust_7.svg" }, { id: "abstract-3", name: "hidden_quantum_10", url: "/images/abstract/hidden_quantum_10.svg" }, { id: "abstract-4", name: "hidden_vortex_9", url: "/images/abstract/hidden_vortex_9.svg" }, { id: "abstract-5", name: "liquid_flow_1", url: "/images/abstract/liquid_flow_1.svg" }, { id: "abstract-6", name: "ocean_depths_5", url: "/images/abstract/ocean_depths_5.svg" }, { id: "abstract-7", name: "sunfire_plasma_8", url: "/images/abstract/sunfire_plasma_8.svg" }, { id: "abstract-8", name: "sunset_lava_4", url: "/images/abstract/sunset_lava_4.svg" }, { id: "abstract-9", name: "velvet_waves_3", url: "/images/abstract/velvet_waves_3.svg" }, { id: "abstract-10", name: "vibrant_prism_2", url: "/images/abstract/vibrant_prism_2.svg" }] }], Gf = 300, Tf = 225, jy = () => {
  const [v, E] = cl.useState(false), [A, o] = cl.useState(true), [N, q] = cl.useState(Hy), [V, P] = cl.useState("bryce"), [U, z] = cl.useState([]), [J, H] = cl.useState([]), [B, Rl] = cl.useState("EASY"), [rl, Hl] = cl.useState(0), [gl, Sl] = cl.useState(1), [Ql, Gl] = cl.useState("Player 1"), [Al, Pl] = cl.useState(false), [Bl, W] = cl.useState(0), [Zl, mt] = cl.useState(0), [Bt, ot] = cl.useState(null), [xl, xt] = cl.useState(0), [zt, dt] = cl.useState(0), [_, p] = cl.useState(false), [x, nl] = cl.useState(void 0), [tl, m] = cl.useState(false), [G, O] = cl.useState(void 0), D = cl.useRef(null);
  cl.useEffect(() => {
    Cy().then(() => {
      E(true);
    });
  }, []), cl.useEffect(() => () => {
    D.current && clearTimeout(D.current);
  }, []);
  const Q = (w) => {
    const pl = w.images.length, Gt = BigInt(Math.floor(Date.now() + Math.random() * 1e6)), jl = py(8, pl, Gt), lt = [], Il = [];
    for (let Fl = 0; Fl < pl; Fl++) jl[Fl] === 1 && lt.length < 8 ? lt.push(w.images[Fl]) : Il.push(w.images[Fl]);
    for (; lt.length < 8 && Il.length > 0; ) lt.push(Il.pop());
    return lt;
  }, X = cl.useCallback(async (w, pl, Gt) => {
    if (!v) return;
    o(true), D.current && (clearTimeout(D.current), D.current = null), m(false), O(void 0);
    const jl = pl || V, lt = N.find((at) => at.id === jl) || N[0];
    let Il = J;
    if (w === void 0 || J.length < 8) {
      const at = Q(lt);
      z(at);
      try {
        Il = await Promise.all(at.map((le) => Ry(le.url, Gf, Tf))), H(Il);
      } catch (le) {
        console.error("Failed loading image category buffers:", le), o(false);
        return;
      }
    }
    let Fl = rl, Yt = gl;
    w === void 0 && (Fl = Math.floor(Math.random() * 8), Yt = (Fl + 1 + Math.floor(Math.random() * 7)) % 8, Hl(Fl), Sl(Yt), Gl("Player 1"));
    const Ye = Gf * Tf * 4, Je = new Uint8Array(Ye);
    Ty(Je);
    let Ol = 0;
    if (w !== void 0) Ol = w;
    else {
      const at = BigInt(Math.floor(Date.now() + Math.random() * 1e6));
      Ol = Ay(8, 3, 6, at);
    }
    W(Ol), mt(Ol), xt(0), p(false), nl(void 0);
    const ei = Ey(Ol);
    dt(ei);
    for (let at = 0; at < 8; at++) (Ol & 1 << at) !== 0 && jd(Je, Il[at].buffer);
    ot(Je), o(false);
  }, [v, V, N, B, J, U, rl, gl]);
  cl.useEffect(() => {
    v && J.length === 0 && X();
  }, [v]);
  const al = (w) => {
    P(w), X(void 0, w);
  }, Vl = (w) => {
    Rl(w), X(void 0, void 0, w);
  }, vl = (w, pl) => {
    console.log("\u{1F3C6} [ImageNim] triggerVictorySequence called! winPlayer:", w, "matchedCardIdx:", pl), m(true), nl(w), O(pl), D.current && clearTimeout(D.current), D.current = setTimeout(() => {
      console.log("\u23F1\uFE0F [ImageNim] 3.5s Victory pause timer completed. Showing WinModal!"), m(false), p(true);
    }, 3500);
  }, Ra = () => {
    console.log("\u23E9 [ImageNim] handleSkipVictoryPause called (user skipped pause)!"), D.current && (clearTimeout(D.current), D.current = null), m(false), p(true);
  }, ka = (w) => {
    if (console.log("\u{1F5B1}\uFE0F [ImageNim] Tile clicked:", w, "isWon:", _, "isVictoryPause:", tl, "gameMode:", B), _ || tl || !Bt || w < 0 || w >= J.length) return;
    const pl = new Uint8Array(Bt), Gt = J[w];
    jd(pl, Gt.buffer), ot(pl);
    const jl = Zl ^ 1 << w;
    mt(jl);
    const lt = xl + 1;
    if (xt(lt), B === "EASY") (jl === 0 || Hd(pl)) && (console.log("\u{1F389} [ImageNim] 1P Win condition met!"), vl(void 0, void 0));
    else {
      const Il = 1 << rl, Fl = 1 << gl, Yt = Ql, Ye = Ql === "Player 1" ? "Player 2" : "Player 1";
      console.log("\u{1F3AE} [ImageNim] 2P Move:", { newToggledMask: jl, p1Mask: Il, p2Mask: Fl, playerWhoMoved: Yt, p1Idx: rl, p2Idx: gl }), jl === Il ? (console.log("\u{1F389} [ImageNim] 2P Win condition met: Player 1 matched target!"), vl("Player 1", rl)) : jl === Fl ? (console.log("\u{1F389} [ImageNim] 2P Win condition met: Player 2 matched target!"), vl("Player 2", gl)) : jl === 0 || Hd(pl) ? (console.log("\u{1F389} [ImageNim] 2P Win condition met: Canvas cleared by", Yt), vl(Yt, void 0)) : Gl(Ye);
    }
  }, Pa = () => {
    X(Bl);
  }, Bu = async (w) => {
    if (w.length < 8) {
      alert("Please select at least 8 image files to create a custom category!");
      return;
    }
    const pl = [];
    for (let jl = 0; jl < w.length; jl++) {
      const lt = w[jl], Il = URL.createObjectURL(lt);
      pl.push({ id: `custom-${jl}`, name: lt.name.replace(/\.[^/.]+$/, ""), url: Il });
    }
    const Gt = { id: `custom-${Date.now()}`, name: `Custom Set (${pl[0].name}...)`, description: "User uploaded custom image set", images: pl };
    q((jl) => [Gt, ...jl]), P(Gt.id), X(void 0, Gt.id);
  };
  return T.jsxs("div", { className: "app-container", children: [T.jsxs("header", { className: "app-header", children: [T.jsxs("div", { className: "brand-title", children: [T.jsx("div", { className: "brand-logo", children: "N" }), T.jsxs("div", { children: [T.jsx("h1", { className: "brand-name", children: "ImageNim" }), T.jsx("p", { className: "brand-subtitle", children: "Visual Pixel XOR Puzzle Game" })] })] }), T.jsxs("div", { className: "stats-bar", children: [T.jsxs("div", { className: "stat-item", children: [T.jsx("span", { className: "stat-label", children: "Moves" }), T.jsx("span", { className: "stat-value", children: xl })] }), T.jsxs("div", { className: "stat-item", children: [T.jsx("span", { className: "stat-label", children: "Optimal" }), T.jsx("span", { className: "stat-value", style: { color: "var(--accent-pink)" }, children: zt })] })] })] }), T.jsx(hy, { gameMode: B, hintMode: Al, currentTurn: Ql, categories: N.map((w) => ({ id: w.id, name: w.name })), selectedCategoryId: V, onNewGame: () => X(), onReplay: Pa, onGameModeChange: Vl, onHintToggle: () => Pl(!Al), onCategoryChange: al, onCustomImagesUpload: Bu }), tl && T.jsx(zy, { winner: x, winningCardIndex: G, onSkip: Ra, autoCloseMs: 3500 }), B === "HARD" && !tl && T.jsx(Gy, { currentTurn: Ql, p1TargetNum: rl + 1, p2TargetNum: gl + 1 }), A ? T.jsx("div", { className: "grid-wrapper", style: { padding: "4rem", color: "var(--accent-cyan)" }, children: T.jsx("h3", { children: "Loading WASM Engine & Image Data..." }) }) : T.jsx(by, { outerImages: U, toggledMask: Zl, hintMode: Al, gameMode: B, player1TargetIndex: rl, player2TargetIndex: gl, currentTurn: Ql, targetBuffer: Bt, canvasWidth: Gf, canvasHeight: Tf, winningCardIndex: G, winningPlayer: x, isVictoryPause: tl, onTileClick: ka }), _ && T.jsx(My, { stats: { moves: xl, perfectScore: zt, startTime: 0, won: true, winner: x }, onNextGame: () => X(), onReplay: Pa })] });
};
gy.createRoot(document.getElementById("root")).render(T.jsx(fy.StrictMode, { children: T.jsx(jy, {}) }));
