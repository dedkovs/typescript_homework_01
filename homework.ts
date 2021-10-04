// EX 1 -----------------------------------

interface Entity {
  readonly id?: string;
  readonly name?: string;
  readonly age?: number;
  readonly ethnicity?: string;
}

// Given following interface do the following operations:
// Remove - 1. readonly, 2. optional type and 3. id property & ethnicity property
// do this as 3 separate mutation types
// create a mapper function that maps response type of all keys to boolean

// expected:
// type newType = A<B<C<D<Type>>>>
/*
  {
    name: boolean;
    age: boolean;
  }
 */

type D<T> = { -readonly [P in keyof T]: T[P] };

type C<T> = {
  [P in keyof T]-?: T[P];
};

type B<T> = {
  [P in keyof T as Exclude<P, 'id' | 'ethnicity'>]: T[P];
};

type A<T> = {
  [P in keyof T]: boolean;
};

type newType = A<B<C<D<Entity>>>>;

// EX 2 ------------------------------------------------
/*
/*HW
1. Create an interface Id that has property id of type number
2. Create an interface Name that has property name of type string
3. Create a new type IdOrName and pass in a generic type
* If passed in type extends Id, IdOrName - will be of type number
* Else If passed in type extends Name, IdOrName - will be of type string
* Else passed in type extends Anything Else, IdOrName - will be of type {age: boolean}
 */

interface Id {
  id: number;
}

interface Name {
  name: string;
}

type IdOrName<T extends Id | Name | any> = T extends Id
  ? number
  : T extends Name
  ? string
  : { age: boolean };

// EX 3 ------------------------------------------------
/*
 Write a detailed explanation with images / steps / words how ex 5 withLet function works and why did we get the expected result
 */

// EX 4 (optional) ------------------------------
// Write a class decorator, method decorator and parameter decorator functions for any Class the logic inside each decorator is up to you e.g.:
/*
@ClassDecorator
class SomeClass {

  @MethodDecorator
  someMethod(@ParameterDecorator someParameter: any) {
    console.log('this is our message');
  }
}
 */
