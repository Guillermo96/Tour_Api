import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface _SERVICE {
  'buildNFT' : ActorMethod<[], string>,
  'getDate' : ActorMethod<[], string>,
  'getMessage' : ActorMethod<[], string>,
  'getPrice' : ActorMethod<[], string>,
  'getReservation' : ActorMethod<[], string>,
  'setDate' : ActorMethod<[string], string>,
  'setMessage' : ActorMethod<[string], undefined>,
  'setPrice' : ActorMethod<[string], string>,
  'setReservation' : ActorMethod<[string], string>,
}
