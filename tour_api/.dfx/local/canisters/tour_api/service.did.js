export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'buildNFT' : IDL.Func([], [IDL.Text], ['query']),
    'getDate' : IDL.Func([], [IDL.Text], ['query']),
    'getMessage' : IDL.Func([], [IDL.Text], ['query']),
    'getPrice' : IDL.Func([], [IDL.Text], ['query']),
    'getReservation' : IDL.Func([], [IDL.Text], ['query']),
    'setDate' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'setMessage' : IDL.Func([IDL.Text], [], []),
    'setPrice' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
    'setReservation' : IDL.Func([IDL.Text], [IDL.Text], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
