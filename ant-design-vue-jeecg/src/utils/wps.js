var e = function() {
  return (e = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) for (var a in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
    return e
  }).apply(this, arguments)
}

function t(e, t, n, r) {
  return new (n || (n = Promise))(function(a, i) {
    function o(e) {
      try {
        c(r.next(e))
      } catch (e) {
        i(e)
      }
    }

    function s(e) {
      try {
        c(r.throw(e))
      } catch (e) {
        i(e)
      }
    }

    function c(e) {
      var t
      e.done ? a(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
        e(t)
      })).then(o, s)
    }

    c((r = r.apply(e, t || [])).next())
  })
}

function n(e, t) {
  var n, r, a, i, o = {
    label: 0, sent: function() {
      if (1 & a[0]) throw a[1]
      return a[1]
    }, trys: [], ops: []
  }
  return i = {
    next: s(0),
    throw: s(1),
    return: s(2)
  }, 'function' == typeof Symbol && (i[Symbol.iterator] = function() {
    return this
  }), i

  function s(i) {
    return function(s) {
      return function(i) {
        if (n) throw new TypeError('Generator is already executing.')
        for (; o;) try {
          if (n = 1, r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, i[1])).done) return a
          switch (r = 0, a && (i = [2 & i[0], a.value]), i[0]) {
            case 0:
            case 1:
              a = i
              break
            case 4:
              return o.label++, { value: i[1], done: !1 }
            case 5:
              o.label++, r = i[1], i = [0]
              continue
            case 7:
              i = o.ops.pop(), o.trys.pop()
              continue
            default:
              if (!(a = (a = o.trys).length > 0 && a[a.length - 1]) && (6 === i[0] || 2 === i[0])) {
                o = 0
                continue
              }
              if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                o.label = i[1]
                break
              }
              if (6 === i[0] && o.label < a[1]) {
                o.label = a[1], a = i
                break
              }
              if (a && o.label < a[2]) {
                o.label = a[2], o.ops.push(i)
                break
              }
              a[2] && o.ops.pop(), o.trys.pop()
              continue
          }
          i = t.call(e, o)
        } catch (e) {
          i = [6, e], r = 0
        } finally {
          n = a = 0
        }
        if (5 & i[0]) throw i[1]
        return { value: i[0] ? i[1] : void 0, done: !0 }
      }([i, s])
    }
  }
}

var r, a, i, o, s = function() {
  function e() {
  }

  return e.add = function(t) {
    e.HANDLE_LIST.push(t), window.addEventListener('message', t, !1)
  }, e.remove = function(t) {
    var n = e.HANDLE_LIST.indexOf(t)
    n >= 0 && e.HANDLE_LIST.splice(n, 1), window.removeEventListener('message', t, !1)
  }, e.empty = function() {
    for (; e.HANDLE_LIST.length;) window.removeEventListener('message', e.HANDLE_LIST.shift(), !1)
  }, e.parse = function(e) {
    return 'object' == typeof e ? e : e ? JSON.parse(e) : e
  }, e.HANDLE_LIST = [], e
}()

function c(e) {
  return '[object Function]' === {}.toString.call(e)
}

!function(e) {
  e.unknown = 'unknown', e.spreadsheet = 's', e.writer = 'w', e.presentation = 'p', e.pdf = 'f'
}(r || (r = {})), function(e) {
  e.wps = 'w', e.et = 's', e.presentation = 'p', e.pdf = 'f'
}(a || (a = {})), function(e) {
  e.nomal = 'nomal', e.simple = 'simple'
}(i || (i = {})), function(e) {
  e[e.requestFullscreen = 1] = 'requestFullscreen', e[e.exitFullscreen = 0] = 'exitFullscreen'
}(o || (o = {}))
var u, l, p = (u = 0, function() {
  return u += 1
}), d = function(e, t, n) {
  void 0 === n && (n = !0)
  var r = t
  if (!l) {
    var a = function(e) {
      l.style.cssText += 'height: ' + e.clientHeight + 'px; width: ' + e.clientWidth + 'px'
    }.bind(null, r);
    (l = document.createElement('iframe')).classList.add('web-office-iframe')
    var i = {
      id: 'office-iframe',
      src: e,
      scrolling: 'no',
      frameborder: '0',
      allowfullscreen: 'allowfullscreen',
      webkitallowfullscreen: 'true',
      mozallowfullscreen: 'true'
    }
    for (var o in r ? (i.style = 'width: ' + r.clientWidth + 'px; height: ' + r.clientHeight + 'px;', n && window.addEventListener('resize', a)) : ((r = document.createElement('div')).classList.add('web-office-default-container'), function(e) {
      var t = document.createElement('style')
      document.head.appendChild(t)
      var n = t.sheet
      n.insertRule(e, n.cssRules.length)
    }('.web-office-default-container {position: absolute; padding: 0;  margin: 0; width: 100vw; height: 100vh; left: 0; top: 0;}'), document.body.appendChild(r), i.style = 'width: 100vw; height: 100vh;'), i) l.setAttribute(o, i[o])
    r.appendChild(l), l.destroy = function() {
      l.parentNode.removeChild(l), l = null, window.removeEventListener('resize', a)
    }
  }
  return l
}
var f = function(e) {
  d().contentWindow.postMessage(JSON.stringify(e), '*')
}

function v(e, t, n) {
  return new Promise(function(r) {
    var a = p(), i = function(e) {
      var t = s.parse(e.data)
      t.eventName === n && t.msgId === a && (r(t.data), s.remove(i))
    }
    s.add(i), f({ data: e, msgId: a, eventName: t })
  })
}

var b = function(e) {
  return v(e, 'wps.jssdk.api', 'wps.api.reply')
}, h = function(e) {
  return v(e, 'api.basic', 'api.basic.reply')
}, m = { idMap: {} }

function w(e) {
  return t(this, void 0, void 0, function() {
    var t, r, a, i, o, c, u, l, p, d
    return n(this, function(n) {
      switch (n.label) {
        case 0:
          return t = s.parse(e.data), r = t.eventName, a = t.callbackId, i = t.data, a ? (o = m.idMap[a]) ? (c = o.split(':'), u = c[0], l = c[1], 'api.callback' === r && m[u] && m[u][l] ? [4, (d = m[u][l]).callback.apply(d, i.args)] : [3, 2]) : [3, 2] : [3, 2]
        case 1:
          p = n.sent(), f({ result: p, callbackId: a, eventName: 'api.callback.reply' }), n.label = 2
        case 2:
          return [2]
      }
    })
  })
}

var g = function(e) {
  return t(void 0, void 0, void 0, function() {
    function t() {
      return Object.keys(m.idMap).find(function(e) {
        return m.idMap[e] === a + ':' + r
      })
    }

    var r, a, i, o, c, u, l, p, d
    return n(this, function(n) {
      switch (n.label) {
        case 0:
          return r = e.prop, a = e.parentObjId, [4, k([i = e.value])]
        case 1:
          return o = n.sent(), c = o[0], u = o[1], e.value = c[0], l = Object.keys(u)[0], p = m[a], null === i && p && p[r] && ((d = t()) && delete m.idMap[d], delete p[r], Object.keys(p).length || delete m[a], Object.keys(m.idMap).length || s.remove(w)), l && (Object.keys(m.idMap).length || s.add(w), m[a] || (m[a] = {}), m[a][r] = {
            callbackId: l,
            callback: u[l]
          }, (d = t()) && delete m.idMap[d], m.idMap[l] = a + ':' + r), [2]
      }
    })
  })
}, y = function(r, a, i, o) {
  return t(void 0, void 0, void 0, function() {
    var c, u, l, d, v, b, h, m
    return n(this, function(w) {
      switch (w.label) {
        case 0:
          return c = p(), d = new Promise(function(e, t) {
            u = e, l = t
          }), v = {}, a.args ? [4, k(a.args)] : [3, 2]
        case 1:
          b = w.sent(), h = b[0], m = b[1], a.args = h, v = m, w.label = 2
        case 2:
          return 'api.setter' !== r ? [3, 4] : [4, g(a)]
        case 3:
          w.sent(), w.label = 4
        case 4:
          return function(t) {
            var n = t[0], r = t[1]
            'function' == typeof (n = e({}, n)).data && (n.data = n.data())
            r(), f(n)
          }([{ eventName: r, data: a, msgId: c }, function() {
            var e = this, a = function(p) {
              return t(e, void 0, void 0, function() {
                var e, t, d
                return n(this, function(n) {
                  switch (n.label) {
                    case 0:
                      return 'api.callback' === (e = s.parse(p.data)).eventName && e.callbackId && v[e.callbackId] ? [4, v[e.callbackId].apply(v, e.data.args)] : [3, 2]
                    case 1:
                      t = n.sent(), f({
                        result: t,
                        eventName: 'api.callback.reply',
                        callbackId: e.callbackId
                      }), n.label = 2
                    case 2:
                      return e.eventName === r + '.reply' && e.msgId === c && (e.error ? ((d = new Error('')).stack = e.error + '\n' + i, o && o(), l(d)) : u(e.result), s.remove(a)), [2]
                  }
                })
              })
            }
            return s.add(a), d
          }]), [2, d]
      }
    })
  })
}

function k(e) {
  return t(this, void 0, void 0, function() {
    var t, r, a, i, o, s, c, u, l, d, f
    return n(this, function(n) {
      switch (n.label) {
        case 0:
          t = {}, r = [], a = e.slice(0), n.label = 1
        case 1:
          return a.length ? (i = void 0, [4, a.shift()]) : [3, 13]
        case 2:
          return (o = n.sent()) && o.done ? [4, o.done()] : [3, 4]
        case 3:
          n.sent(), n.label = 4
        case 4:
          if (!function(e) {
            if (!e) return !1
            for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t)
            return Object.getPrototypeOf(e) === t
          }(i)) return [3, 11]
          for (c in i = {}, s = [], o) s.push(c)
          u = 0, n.label = 5
        case 5:
          return u < s.length ? (l = s[u], d = o[l], /^[A-Z]/.test(l) ? d && d.done ? [4, d.done()] : [3, 7] : [3, 8]) : [3, 10]
        case 6:
          n.sent(), n.label = 7
        case 7:
          d && d.objId ? d = { objId: d.objId } : 'function' == typeof d && (f = p(), t[f] = d, d = { callbackId: f }), n.label = 8
        case 8:
          i[l] = d, n.label = 9
        case 9:
          return u++, [3, 5]
        case 10:
          return [3, 12]
        case 11:
          o && o.objId ? i = { objId: o.objId } : 'function' == typeof o && void 0 === o.objId ? (f = p(), t[f] = o, i = { callbackId: f }) : i = o, n.label = 12
        case 12:
          return r.push(i), [3, 1]
        case 13:
          return [2, [r, t]]
      }
    })
  })
}

var j = function(t, n) {
  void 0 === n && (n = !0)
  var r = e({}, t), a = r.headers, o = void 0 === a ? {} : a, s = r.subscriptions, c = void 0 === s ? {} : s,
    u = r.mode, l = void 0 === u ? i.nomal : u, p = r.commonOptions, d = o.backBtn, f = void 0 === d ? {} : d,
    v = o.shareBtn, b = void 0 === v ? {} : v, h = o.otherMenuBtn, m = void 0 === h ? {} : h, w = function(e, t) {
      e.subscribe && 'function' == typeof e.subscribe && (e.callback = t, c[t] = e.subscribe, n && delete e.subscribe)
    }
  if (w(f, 'wpsconfig_back_btn'), w(b, 'wpsconfig_share_btn'), w(m, 'wpsconfig_other_menu_btn'), m.items && Array.isArray(m.items)) {
    var g = []
    m.items.forEach(function(e, t) {
      switch (void 0 === e && (e = {}), e.type) {
        case'export_img':
          e.type = 1, e.callback = 'export_img'
          break
        case'export_pdf':
          e.type = 1, e.callback = 'export_pdf'
          break
        case'save_version':
          e.type = 1, e.callback = 'save_version'
          break
        case'about_wps':
          e.type = 1, e.callback = 'about_wps'
          break
        case'split_line':
          e.type = 2
          break
        case'custom':
          e.type = 3, w(e, 'wpsconfig_other_menu_btn_' + t), g.push(e)
      }
    }), g.length && (_ || C) && (m.items = g)
  }
  r.url = r.url || r.wpsUrl
  var y = []
  if ((l === i.simple || p && !1 === p.isShowTopArea) && y.push('simple', 'hidecmb'), r.debug && y.push('debugger'), r.url && y.length && (r.url = r.url + (r.url.indexOf('?') >= 0 ? '&' : '?') + y.join('&')), p && (p.isParentFullscreen || p.isBrowserViewFullscreen) && document.addEventListener('fullscreenchange', S), r.wordOptions && (r.wpsOptions = r.wordOptions), r.excelOptions && (r.etOptions = r.excelOptions), r.pptOptions && (r.wppOptions = r.pptOptions), 'object' == typeof c.print) {
    var k = 'wpsconfig_print'
    'function' == typeof c.print.subscribe && (c[k] = c.print.subscribe, r.print = { callback: k }, void 0 !== c.print.custom && (r.print.custom = c.print.custom)), delete c.print
  }
  'function' == typeof c.exportPdf && (c[k = 'wpsconfig_export_pdf'] = c.exportPdf, r.exportPdf = { callback: k }, delete c.exportPdf)
  return r.commandBars && O(r.commandBars, !1), e(e({}, r), { subscriptions: c })
}, I = function(e) {
  void 0 === e && (e = '')
  var t = ''
  if (!t && e) {
    var n = e.toLowerCase();
    -1 !== n.indexOf('/office/s/') && (t = r.spreadsheet), -1 !== n.indexOf('/office/w/') && (t = r.writer), -1 !== n.indexOf('/office/p/') && (t = r.presentation), -1 !== n.indexOf('/office/f/') && (t = r.pdf)
  }
  if (!t) {
    var i = e.match(/[\?&]type=([a-z]+)/) || []
    t = a[i[1]] || ''
  }
  return t
}

function O(e, t) {
  void 0 === t && (t = !0)
  var n = e.map(function(e) {
    var t = e.attributes
    if (!Array.isArray(t)) {
      var n = []
      for (var r in t) if (t.hasOwnProperty(r)) {
        var a = { name: r, value: t[r] }
        n.push(a)
      }
      e.attributes = n
    }
    return e
  })
  return t && f({ data: n, eventName: 'setCommandBars' }), n
}

var x = window.navigator.userAgent.toLowerCase(), _ = /Android|webOS|iPhone|iPod|BlackBerry|iPad/i.test(x),
  C = function() {
    try {
      return -1 !== window._parent.location.search.indexOf('from=wxminiprogram')
    } catch (e) {
      return !1
    }
  }()

function S() {
  var e = { status: o.requestFullscreen }
  document.fullscreenElement ? e.status = o.requestFullscreen : e.status = o.exitFullscreen, f({
    data: e,
    eventName: 'fullscreenchange'
  })
}

var E = 0, T = new Set

function N(e) {
  return E += 1, !e && function(e) {
    T.forEach(function(t) {
      return t(e)
    })
  }(E), E
}

function P(a, i) {
  var o, c = this, u = i.Events, l = i.Enum, p = i.Props, d = p[0], v = p[1], b = { objId: E }
  switch (function t(n, r, a) {
    var i = r.slice(0)
    var o = function() {
      var r = i.shift()
      !r.alias && ~L.indexOf(r.prop) && i.push(e(e({}, r), { alias: r.prop + 'Async' })), Object.defineProperty(n, r.alias || r.prop, {
        get: function() {
          var i = this, o = 1 === r.cache, s = o && this['__' + r.prop + 'CacheValue']
          if (!s) {
            var c = new Error(''), u = c.stack.split('\n').slice(2).join('\n'), l = N(o), p = function() {
              for (var t, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o]
              void 0 !== r.caller ? function t(n, r, a) {
                var i = r.slice(0)
                var o = function() {
                  var r = i.shift()
                  !r.alias && ~L.indexOf(r.prop) && i.push(e(e({}, r), { alias: r.prop + 'Async' })), Object.defineProperty(n, r.alias || r.prop, {
                    get: function() {
                      var e = this, i = 1 === r.cache, o = i && this['__' + r.prop + 'CacheValue']
                      if (!o) {
                        var s = new Error(''), c = s.stack.split('\n').slice(2).join('\n'), u = N(i), l = function() {
                          for (var e, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o]
                          void 0 !== r.caller ? t(e = { objId: N() }, a[r.caller], a) : e = {}
                          return A(l, e, 'api.caller', {
                            obj: l,
                            args: i,
                            parentObjId: n.objId,
                            objId: e.objId,
                            prop: r.prop
                          }, c), e
                        }
                        return l.objId = -1, void 0 !== r.getter && (l.objId = u, t(l, a[r.getter], a)), A(n, l, 'api.getter', {
                          parentObjId: n.objId,
                          objId: l.objId,
                          prop: r.prop
                        }, c, function() {
                          delete e['__' + r.prop + 'CacheValue']
                        }), i && (this['__' + r.prop + 'CacheValue'] = l), l
                      }
                      return o
                    }, set: function(e) {
                      var t = new Error(''), a = t.stack.split('\n').slice(2).join('\n')
                      return A(n, {}, 'api.setter', { value: e, parentObjId: n.objId, objId: -1, prop: r.prop }, a)
                    }
                  })
                }
                for (; i.length;) o()
              }(t = { objId: N() }, a[r.caller], a) : t = {}
              return A(p, t, 'api.caller', {
                obj: p,
                args: i,
                parentObjId: n.objId,
                objId: t.objId,
                prop: r.prop
              }, u), t
            }
            return p.objId = -1, void 0 !== r.getter && (p.objId = l, t(p, a[r.getter], a)), A(n, p, 'api.getter', {
              parentObjId: n.objId,
              objId: p.objId,
              prop: r.prop
            }, u, function() {
              delete i['__' + r.prop + 'CacheValue']
            }), o && (this['__' + r.prop + 'CacheValue'] = p), p
          }
          return s
        }, set: function(e) {
          var t = new Error(''), a = t.stack.split('\n').slice(2).join('\n')
          return A(n, {}, 'api.setter', { value: e, parentObjId: n.objId, objId: -1, prop: r.prop }, a)
        }
      })
    }
    for (; i.length;) o()
  }(b, d, v), b.Events = u, b.Enum = l, a.Enum = b.Enum, a.Events = b.Events, a.Props = p, I(a.url)) {
    case r.writer:
      a.WordApplication = a.WpsApplication = function() {
        return b
      }
      break
    case r.spreadsheet:
      a.ExcelApplication = a.EtApplication = function() {
        return b
      }
      break
    case r.presentation:
      a.PPTApplication = a.WppApplication = function() {
        return b
      }
      break
    case r.pdf:
      a.PDFApplication = function() {
        return b
      }
  }
  a.Application = b, a.Free = function(e) {
    return y('api.free', { objId: e }, '')
  }, a.Stack = b.Stack = (o = function(e) {
    a && a.Free(e)
  }, function() {
    var e = [], t = function(t) {
      e.push(t)
    }
    return T.add(t), {
      End: function() {
        o(e), T.delete(t)
      }
    }
  })
  var h = {}
  s.add(function(e) {
    return t(c, void 0, void 0, function() {
      var t, r, a, i, o
      return n(this, function(n) {
        switch (n.label) {
          case 0:
            return 'api.event' === (t = s.parse(e.data)).eventName && t.data ? (r = t.data, a = r.eventName, i = r.data, (o = h[a]) ? [4, o(i)] : [3, 2]) : [3, 2]
          case 1:
            n.sent(), n.label = 2
          case 2:
            return [2]
        }
      })
    })
  }), b.Sub = {}
  var m = function(e) {
    var t = u[e]
    Object.defineProperty(b.Sub, t, {
      set: function(e) {
        h[t] = e, f({ eventName: 'api.event.register', data: { eventName: t, register: !!e, objId: E += 1 } })
      }
    })
  }
  for (var w in u) m(w)
}

var L = ['ExportAsFixedFormat', 'GetOperatorsInfo', 'ImportDataIntoFields', 'ReplaceText', 'ReplaceBookmark', 'GetBookmarkText', 'GetComments']

function F(t, n, r) {
  var a = n.slice(0)
  var i = function() {
    var n = a.shift()
    if (!n.alias && ~L.indexOf(n.prop)) {
      a.push(e(e({}, n), { alias: n.prop + 'Async' }))
    }
    Object.defineProperty(t, n.alias || n.prop, {
      get: function() {
        var e = this
        var a = n.cache === 1
        var i = a && this['__' + n.prop + 'CacheValue']
        if (!i) {
          var o = new Error('')
          var s = o.stack.split('\n').slice(2).join('\n')
          var c = N(a)
          var u = function() {
            for (var e = [], a = 0, i; a < arguments.length; a++) {
              e[a] = arguments[a]
            }
            if (n.caller !== undefined) {
              i = { objId: N() }
              F(i, r[n.caller], r)
            } else {
              i = {}
            }
            return A(l, i, 'api.caller', { obj: l, args: e, parentObjId: t.objId, objId: i.objId, prop: n.prop }, s), i
          }
          var l = u
          l.objId = -1
          if (n.getter !== undefined) {
            l.objId = c
            F(l, r[n.getter], r)
          }
          A(t, l, 'api.getter', { parentObjId: t.objId, objId: l.objId, prop: n.prop }, s, function() {
            delete e['__' + n.prop + 'CacheValue']
          })
          if (a) {
            this['__' + n.prop + 'CacheValue'] = l
          }
          return l
        }
        return i
      }, set: function(e) {
        var r = new Error('')
        var a = r.stack.split('\n').slice(2).join('\n')
        return A(t, {}, 'api.setter', { value: e, parentObjId: t.objId, objId: -1, prop: n.prop }, a)
      }
    })
  }
  while (a.length) {
    i()
  }
}

function A(e, t, n, r, a, i) {
  var o, s = (e.done ? e.done() : Promise.resolve()).then(function() {
    return o || (o = y(n, r, a, i)), o
  })
  t.done = function() {
    return s
  }, t.then = function(e, n) {
    return r.objId >= 0 ? (t.then = null, t.catch = null, e(t)) : s.then(e, n)
  }, t.catch = function(e) {
    return s.catch(e)
  }, t.Destroy = function() {
    return y('api.free', { objId: t.objId }, '')
  }
}

var D = null, B = {
  fileOpen: 'fileOpen',
  tabSwitch: 'tabSwitch',
  fileSaved: 'fileSaved',
  fileStatus: 'fileStatus',
  fullscreenChange: 'fullscreenChange',
  error: 'error',
  stage: 'stage'
}, H = {
  getToken: 'api.getToken',
  onToast: 'event.toast',
  onHyperLinkOpen: 'event.hyperLinkOpen',
  getClipboardData: 'api.getClipboardData'
}

function R(r, a, i, o, c, u, l) {
  var p = this
  void 0 === i && (i = {})
  s.add(function(d) {
    return t(p, void 0, void 0, function() {
      var t, p, v, b, h, m, w, g, y, k, j, I, O, x, _, C, S, E
      return n(this, function(n) {
        switch (n.label) {
          case 0:
            return t = s.parse(d.data), p = t.eventName, v = void 0 === p ? '' : p, b = t.data, h = void 0 === b ? null : b, m = t.url, w = void 0 === m ? null : m, -1 !== ['wps.jssdk.api'].indexOf(v) ? [2] : 'ready' !== v ? [3, 1] : (f({
              eventName: 'setConfig',
              data: e(e({}, i), { version: r.version })
            }), r.tokenData && r.setToken(e(e({}, r.tokenData), { hasRefreshTokenConfig: !!i.refreshToken })), c.apiReadySended && f({ eventName: 'api.ready' }), r.iframeReady = !0, [3, 17])
          case 1:
            return 'error' !== v ? [3, 2] : (a.emit(B.error, h), [3, 17])
          case 2:
            return 'open.result' !== v ? [3, 3] : (a.emit(B.fileOpen, h), [3, 17])
          case 3:
            return 'file.saved' !== v ? [3, 4] : (a.emit(B.fileStatus, h), a.emit(B.fileSaved, h), [3, 17])
          case 4:
            return 'tab.switch' !== v ? [3, 5] : (a.emit(B.tabSwitch, h), [3, 17])
          case 5:
            return 'api.scroll' !== v ? [3, 6] : (window.scrollTo(h.x, h.y), [3, 17])
          case 6:
            if (v !== H.getToken) return [3, 11]
            g = { token: !1 }, n.label = 7
          case 7:
            return n.trys.push([7, 9, , 10]), [4, c.refreshToken()]
          case 8:
            return g = n.sent(), [3, 10]
          case 9:
            return y = n.sent(), console.error('refreshToken: ' + (y || 'fail to get')), [3, 10]
          case 10:
            return f({ eventName: H.getToken + '.reply', data: g }), [3, 17]
          case 11:
            if (v !== H.getClipboardData) return [3, 16]
            k = { text: '', html: '' }, n.label = 12
          case 12:
            return n.trys.push([12, 14, , 15]), [4, c.getClipboardData()]
          case 13:
            return k = n.sent(), [3, 15]
          case 14:
            return j = n.sent(), console.error('getClipboardData: ' + (j || 'fail to get')), [3, 15]
          case 15:
            return f({ eventName: H.getClipboardData + '.reply', data: k }), [3, 17]
          case 16:
            v === H.onToast ? c.onToast(h) : v === H.onHyperLinkOpen ? c.onHyperLinkOpen(h) : 'stage' === v ? a.emit(B.stage, h) : 'event.callback' === v ? (I = h.eventName, O = h.data, x = I, 'fullScreenChange' === I && (x = B.fullscreenChange), ((null === (S = i.commonOptions) || void 0 === S ? void 0 : S.isBrowserViewFullscreen) || (null === (E = i.commonOptions) || void 0 === E ? void 0 : E.isParentFullscreen)) && 'fullscreenchange' === x ? (_ = O.status, C = O.isDispatchEvent, i.commonOptions.isBrowserViewFullscreen ? function(e, t, n, r) {
              0 === e ? t.style = 'position: static; width: ' + n.width + '; height: ' + n.height : 1 === e && (t.style = 'position: absolute; width: 100%; height: 100%'), r && function(e) {
                ['fullscreen', 'fullscreenElement'].forEach(function(t) {
                  Object.defineProperty(document, t, {
                    get: function() {
                      return !!e.status
                    }, configurable: !0
                  })
                })
                var t = new CustomEvent('fullscreenchange')
                document.dispatchEvent(t)
              }({ status: e })
            }(_, u, l, C) : i.commonOptions.isParentFullscreen && function(e, t) {
              if (0 === e) {
                var n = document,
                  r = n.exitFullscreen || n.mozCancelFullScreen || n.msExitFullscreen || n.webkitCancelFullScreen || n.webkitExitFullscreen
                r.call(document)
              } else if (1 === e) {
                var a = t.requestFullscreen || t.mozRequestFullScreen || t.msRequestFullscreen || t.webkitRequestFullscreen
                a.call(t)
              }
            }(_, u), a.emit(x, O)) : a.emit(x, O)) : 'api.ready' === v && P(r, h), n.label = 17
          case 17:
            return 'function' == typeof o[v] && o[v](r, w || h), [2]
        }
      })
    })
  })
}

function V(e) {
  return new Promise(function(t) {
    var n = function(r) {
      s.parse(r.data).eventName === e && (t(), s.remove(n))
    }
    s.add(n)
  })
}

function M(e) {
  void 0 === e && (e = {}), D && D.destroy()
  try {
    var r = j(e), a = r.subscriptions, i = void 0 === a ? {} : a, o = r.mount, u = void 0 === o ? null : o, l = r.url,
      p = r.refreshToken, v = r.onToast, m = r.onHyperLinkOpen, w = r.getClipboardData, g = d(l, u), y = V('ready'),
      k = V('open.result'), I = V('api.ready'),
      x = u ? { width: u.clientWidth + 'px', height: u.clientHeight + 'px' } : { width: '100vw', height: '100vh' }
    delete r.mount, l && delete r.url, delete r.subscriptions
    var _ = (S = S || Object.create(null), {
      on: function(e, t) {
        (S[e] || (S[e] = [])).push(t)
      }, off: function(e, t) {
        S[e] && S[e].splice(S[e].indexOf(t) >>> 0, 1)
      }, emit: function(e, t) {
        (S[e] || []).slice().map(function(e) {
          e(t)
        }), (S['*'] || []).slice().map(function(n) {
          n(e, t)
        })
      }
    }), C = { apiReadySended: !1 }
    return D = {
      url: l,
      iframe: g,
      version: '1.1.8',
      iframeReady: !1,
      tokenData: null,
      commandBars: null,
      tabs: {
        getTabs: function() {
          return t(this, void 0, void 0, function() {
            return n(this, function(e) {
              switch (e.label) {
                case 0:
                  return [4, y]
                case 1:
                  return e.sent(), [2, h({ api: 'tab.getTabs' })]
              }
            })
          })
        }, switchTab: function(e) {
          return t(this, void 0, void 0, function() {
            return n(this, function(t) {
              switch (t.label) {
                case 0:
                  return [4, y]
                case 1:
                  return t.sent(), [2, h({ api: 'tab.switchTab', args: { tabKey: e } })]
              }
            })
          })
        }
      },
      setCooperUserColor: function(e) {
        return t(this, void 0, void 0, function() {
          return n(this, function(t) {
            switch (t.label) {
              case 0:
                return [4, y]
              case 1:
                return t.sent(), [2, h({ api: 'setCooperUserColor', args: e })]
            }
          })
        })
      },
      setToken: function(e) {
        return t(this, void 0, void 0, function() {
          return n(this, function(t) {
            switch (t.label) {
              case 0:
                return [4, y]
              case 1:
                return t.sent(), D.tokenData = e, f({ eventName: 'setToken', data: e }), [2]
            }
          })
        })
      },
      ready: function() {
        return t(this, void 0, void 0, function() {
          return n(this, function(e) {
            switch (e.label) {
              case 0:
                return C.apiReadySended ? [3, 2] : [4, k]
              case 1:
                e.sent(), C.apiReadySended = !0, f({ eventName: 'api.ready' }), e.label = 2
              case 2:
                return [4, I]
              case 3:
                return e.sent(), [2, new Promise(function(e) {
                  return setTimeout(function() {
                    return e(null == D ? void 0 : D.Application)
                  }, 0)
                })]
            }
          })
        })
      },
      destroy: function() {
        g.destroy(), s.empty(), D = null, T = new Set, E = 0
      },
      save: function() {
        return t(this, void 0, void 0, function() {
          return n(this, function(e) {
            switch (e.label) {
              case 0:
                return [4, y]
              case 1:
                return e.sent(), [2, b({ api: 'save' })]
            }
          })
        })
      },
      setCommandBars: function(e) {
        return t(this, void 0, void 0, function() {
          return n(this, function(t) {
            switch (t.label) {
              case 0:
                return [4, y]
              case 1:
                return t.sent(), O(e), [2]
            }
          })
        })
      },
      updateConfig: function(e) {
        return void 0 === e && (e = {}), t(this, void 0, void 0, function() {
          return n(this, function(t) {
            switch (t.label) {
              case 0:
                return [4, y]
              case 1:
                return t.sent(), e.commandBars ? (console.warn('Deprecated: `updateConfig()` 方法即将废弃，请使用`setCommandBars()`代替`updateConfig()`更新`commandBars`配置。'), [4, O(e.commandBars)]) : [3, 3]
              case 2:
                t.sent(), t.label = 3
              case 3:
                return [2]
            }
          })
        })
      },
      executeCommandBar: function(e) {
        return t(this, void 0, void 0, function() {
          return n(this, function(t) {
            switch (t.label) {
              case 0:
                return [4, y]
              case 1:
                return t.sent(), O([{ cmbId: e, attributes: [{ name: 'click', value: !0 }] }]), [2]
            }
          })
        })
      },
      on: function(e, r) {
        return t(this, void 0, void 0, function() {
          var t
          return n(this, function(n) {
            switch (n.label) {
              case 0:
                return [4, y]
              case 1:
                return n.sent(), t = e, e === B.fileSaved && console.warn('fileSaved事件监听即将弃用， 推荐使用fileStatus进行文件状态的监听'), e === B.fullscreenChange && (t = 'fullscreenchange'), W(g, t, 'on'), _.on(e, r), [2]
            }
          })
        })
      },
      off: function(e, r) {
        return t(this, void 0, void 0, function() {
          return n(this, function(t) {
            switch (t.label) {
              case 0:
                return [4, y]
              case 1:
                return t.sent(), W(g, e, 'off'), _.off(e, r), [2]
            }
          })
        })
      }
    }, function(e, t, n, r, a, i) {
      t && c(t) && (a.refreshToken = t, e.refreshToken = { eventName: H.getToken })
      i && c(i) && (a.getClipboardData = i, e.getClipboardData = { eventName: H.getClipboardData })
      n && c(n) && (a.onToast = n, e.onToast = { eventName: H.onToast })
      r && c(r) && (a.onHyperLinkOpen = r, e.onHyperLinkOpen = { eventName: H.onHyperLinkOpen })
    }(r, p, v, m, C, w), R(D, _, r, i, C, g, x), D
  } catch (e) {
    console.error(e)
  }
  var S
}

function W(e, t, n) {
  var r = t
  if (!['error', 'fileOpen'].includes(r)) {
    'fileSaved' === r && (r = 'fileStatus')
    var a = { eventName: 'basic.event', data: { eventName: r, action: n } }
    e.contentWindow.postMessage(JSON.stringify(a), '*')
  }
}

console.log('WebOfficeSDK JS-SDK V1.1.8')
var q = Object.freeze({ __proto__: null, listener: R, config: M })
window.WPS = q
var z = M
export default { config: M }
export { z as config }
