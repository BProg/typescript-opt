"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Opt = /** @class */ (function () {
    function Opt(val) {
        this.val = val;
    }
    Opt.prototype.ifSome = function (doThis) {
        if (this.val !== null && this.val !== undefined) {
            doThis(this.val);
        }
        return this;
    };
    Opt.prototype.ifNone = function (doThis) {
        if (this.val === undefined || this.val === null) {
            doThis();
        }
        return this;
    };
    Opt.prototype.map = function (toThis) {
        if (this.val !== null && this.val !== undefined) {
            return new Opt(toThis(this.val));
        }
        return new Opt();
    };
    Opt.prototype.isSome = function () {
        return this.val !== null && this.val !== undefined;
    };
    Opt.prototype.isNone = function () {
        return !this.isSome();
    };
    Opt.prototype.isEqual = function (toThis) {
        throw new Error("unimplemented");
    };
    Opt.prototype.isNotEqual = function () {
        throw new Error("unimplemented");
    };
    Opt.prototype.bool = function () {
        if (this.val !== null && this.val !== undefined) {
            return true;
        }
        return false;
    };
    Opt.prototype.value = function () {
        return this.val;
    };
    Opt.prototype.valueOr = function (defVal) {
        if (this.val !== null && this.val !== undefined) {
            return this.val;
        }
        return defVal;
    };
    Opt.prototype.optValueOr = function (defValue) {
        if (this.val !== null && this.val !== undefined) {
            return this;
        }
        return new Opt(defValue);
    };
    return Opt;
}());
exports.Opt = Opt;
