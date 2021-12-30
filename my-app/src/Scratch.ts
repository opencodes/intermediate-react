/* eslint-disable */
import type {TimerComponentProps,a} from './components/TimerComponent'
type Foo<T extends any[]> = [boolean, ...T, boolean];
type Address = [number, string, string, number];

function printAddress(...address: Address) {

}
printAddress(12, 'Ravoos Temple Bells', 'Munnekolala', 560037)

// Recursive Type
type JSONValue = | string | number | JSONValue[] | {
    [k: string]: JSONValue
}

const val: JSONValue = {
    name: 'mike',
    address: {
        street: ''
    }
}

// 
//"top-left" | "top-right" | "bottom-left" | "bottom-right"
type CornerProps = `${'top' | 'bottom'}-${'left' | 'right'}`;

//"onHover" | "onClick" | "onChange" | "onSubmit"
type CornerWithCapitalized = `${'on'}${Capitalize<'hover' | 'click' | 'change' | 'submit'>}`;

// "TOP-LEFT" | "TOP-RIGHT" | "BOTTOM-LEFT" | "BOTTOM-RIGHT"
type CornerWithUppercase = `${Uppercase<'top' | 'bottom'>}-${Uppercase<'left' | 'right'>}`;
/**
 * Uppercase<StringType>
 * Lowercase<StringType>
 * Capitalize<StringType>
 * Uncapitalize<StringType>
 */
// ## any vs unknown
// unknown typecheck required later


export default {

}