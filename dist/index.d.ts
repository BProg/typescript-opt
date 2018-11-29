export declare type NumberOpt = Opt<number>;
export declare type StringOpt = Opt<string>;
export declare type ObjectOpt = Opt<Object>;
export declare type SymbolOpt = Opt<Symbol>;
export declare type BooleanOpt = Opt<boolean>;
export declare class Opt<T> {
    private val?;
    constructor(val?: T);
    ifSome(doThis: (val: T) => void): Opt<T>;
    ifNone(doThis: () => void): Opt<T>;
    map<U>(toThis: (val: T) => U): Opt<U>;
    isSome(): boolean;
    isNone(): boolean;
    isEqual(toThis: Opt<T>): boolean;
    isNotEqual(): boolean;
    bool(): boolean;
    value(): T | undefined | null;
    valueOr(defVal: T): T;
    optValueOr(defValue: T): Opt<T>;
}
