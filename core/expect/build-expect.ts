import { MixedMatcher } from "../matchers";
import { IExpect } from "./expect.i";
import { fail } from "./fail";

export declare type MatcherConstructor = new (actualValue: any) => MixedMatcher;
export declare type MatcherFunction = (actualValue: any) => MixedMatcher;

export function buildExpect<ExpectType extends IExpect>(matcherFunction: MatcherFunction): ExpectType;
export function buildExpect<ExpectType extends IExpect>(matcherConstructor: MatcherConstructor): ExpectType;
export function buildExpect<ExpectType extends IExpect>(expectFunction: MatcherFunction
                                                                      | MatcherConstructor): ExpectType {
    const EXPECT = ((actualValue: any) => new (expectFunction as any)(actualValue)) as ExpectType;
    EXPECT.fail = fail;
    return EXPECT;
}
