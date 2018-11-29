export type NumberOpt = Opt<number>
export type StringOpt = Opt<string>
export type ObjectOpt = Opt<Object>
export type SymbolOpt = Opt<Symbol>
export type BooleanOpt = Opt<boolean>

export class Opt<T> {
    constructor(private val?: T) { }

    public ifSome(doThis: (val:T) => void): Opt<T> {
        if (this.val !== null && this.val !== undefined) {
            doThis(this.val);
        }
        return this;
    }

    public ifNone(doThis: () => void): Opt<T> {
        if (this.val === undefined || this.val === null) {
            doThis();
        }
        return this;
    }

    public map<U>(toThis: (val: T) => U): Opt<U> {
        if (this.val !== null && this.val !== undefined) {
            return new Opt(toThis(this.val));
        }
        return new Opt<U>();
    }

    public isSome(): boolean {
        return this.val !== null && this.val !== undefined;
    }

    public isNone(): boolean {
        return !this.isSome();
    }

    public isEqual(toThis: Opt<T>): boolean {
        throw new Error("unimplemented");
    }

    public isNotEqual(): boolean {
        throw new Error("unimplemented");
    }

    public bool(): boolean {
        if (this.val !== null && this.val !== undefined) {
            return true;
        }
        return false;
    }

    public value(): T | undefined | null {
        return this.val;
    }

    public valueOr(defVal: T): T {
        if (this.val !== null && this.val !== undefined) {
            return this.val;
        }
        return defVal;
    }

    public optValueOr(defValue: T): Opt<T> {
        if (this.val !== null && this.val !== undefined) {
            return this;
        }
        return new Opt(defValue);
    }
}
