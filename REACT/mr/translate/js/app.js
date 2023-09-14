var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var secretMsgSection = document.querySelector('.section-secret-msg');
document.querySelector('form').addEventListener('submit', function (e) {
    var input = document.querySelector('#secret-msg');
    var msg = input.value;
    hideElement(secretMsgSection);
    var codedMsg = encryptMsg(msg);
    var secretURL = generateURL(codedMsg);
    var shareMsgSection = document.querySelector('.section-share-msg');
    showElement(shareMsgSection);
    var shareInput = document.querySelector('#share-msg');
    shareInput.value = secretURL;
    shareInput.select();
    e.preventDefault();
});
var copyContent = function (eleID) { return __awaiter(_this, void 0, void 0, function () {
    var input;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                input = document.getElementById(eleID);
                return [4 /*yield*/, navigator.clipboard.writeText(input.value)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var hideElement = function (ele) {
    ele.classList.add('hide');
};
var showElement = function (ele) {
    ele.classList.remove('hide');
};
var encryptMsg = function (msg) {
    return btoa(msg);
};
var decryptMsg = function (msg) {
    return atob(msg);
};
var generateURL = function (encryptedMsg) {
    // let url = baseURL + encryptedMsg;
    var url = "".concat(window.location.origin, "#").concat(encryptedMsg);
    return url;
};
var init = function () {
    var hash = window.location.hash;
    console.log(hash);
    if (hash) {
        var decryptedMsg = decryptMsg(hash.replace('#', ''));
        var displayMsgSection = document.querySelector('.section-display-msg');
        showElement(displayMsgSection);
        hideElement(secretMsgSection);
        var output = document.querySelector('.display-msg-text');
        output.innerText = decryptedMsg;
    }
    var reloadBtn = document.querySelector('.reload-btn');
    reloadBtn.addEventListener('click', function (e) {
        window.location.hash = '';
        window.location.href = window.location.origin;
        window.location.reload();
    });
};
init();
//# sourceMappingURL=app.js.map