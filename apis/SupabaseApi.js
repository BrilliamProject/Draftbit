import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import { handleResponse, isOkStatus } from '../utils/handleRestApiResponse';
import usePrevious from '../utils/usePrevious';
import {
  encodeQueryParam,
  renderParam,
  renderQueryString,
} from '../utils/encodeQueryParam';
import * as GlobalVariables from '../config/GlobalVariableContext';

const cleanHeaders = headers =>
  Object.fromEntries(Object.entries(headers).filter(kv => kv[1] != null));

export const authclientLoginGET = async (
  Constants,
  { email, password },
  handlers = {}
) => {
  const paramsDict = {};
  paramsDict['select'] = '"*"';
  paramsDict['email'] = email !== undefined ? `eq.${renderParam(email)}` : '';
  paramsDict['password'] =
    password !== undefined ? `eq.${renderParam(password)}` : '';
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/create_client${renderQueryString(
    paramsDict
  )}`;
  const options = {
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useAuthclientLoginGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['supabaseAuthclientLoginGET', args],
    () => authclientLoginGET(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['supabaseAuthclientLoginGETS']),
    }
  );
};

export const FetchAuthclientLoginGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  email,
  password,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useAuthclientLoginGET(
    { email, password },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchAuthclientLogin: refetch });
};

export const getProfessionsGET = async (Constants, _args, handlers = {}) => {
  const paramsDict = {};
  paramsDict['select'] = 'profession';
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/create_professional${renderQueryString(
    paramsDict
  )}`;
  const options = {
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useGetProfessionsGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['Get Professions', args],
    () => getProfessionsGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchGetProfessionsGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useGetProfessionsGET(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchGetProfessions: refetch });
};

export const registerClientPOST = async (
  Constants,
  { country, email, fname, pass, sname },
  handlers = {}
) => {
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/create_client`;
  const options = {
    body: JSON.stringify({
      firstname: fname,
      surname: sname,
      email: email,
      password: pass,
      country: country,
    }),
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
    method: 'POST',
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useRegisterClientPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      registerClientPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('registerclient', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('registerclient');
        queryClient.invalidateQueries('registerclients');
      },
    }
  );
};

export const FetchRegisterClientPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  country,
  email,
  fname,
  pass,
  sname,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useRegisterClientPOST(
    { country, email, fname, pass, sname },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchRegisterClient: refetch });
};

export const aboutProfGET = async (Constants, _args, handlers = {}) => {
  const paramsDict = {};
  paramsDict['select'] = 'Biography';
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/professionalprofile${renderQueryString(
    paramsDict
  )}`;
  const options = {
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useAboutProfGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['aboutprof', args],
    () => aboutProfGET(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['aboutprofs']),
    }
  );
};

export const FetchAboutProfGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useAboutProfGET(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchAboutProf: refetch });
};

export const authProfloginGET = async (
  Constants,
  { email, password },
  handlers = {}
) => {
  const paramsDict = {};
  paramsDict['select'] = '*';
  paramsDict['email'] = email !== undefined ? `eq.${renderParam(email)}` : '';
  paramsDict['password'] =
    password !== undefined ? `eq.${renderParam(password)}` : '';
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/professionalprofile${renderQueryString(
    paramsDict
  )}`;
  const options = {
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useAuthProfloginGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['supabaseAuthProfloginGET', args],
    () => authProfloginGET(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['supabaseAuthProfloginGETS']),
    }
  );
};

export const FetchAuthProfloginGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  email,
  password,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useAuthProfloginGET(
    { email, password },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchAuthProflogin: refetch });
};

export const clientDataGET = async (Constants, _args, handlers = {}) => {
  const paramsDict = {};
  paramsDict['select'] = '"*"';
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/create_client${renderQueryString(
    paramsDict
  )}`;
  const options = {
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useClientDataGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['clientData', args],
    () => clientDataGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchClientDataGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useClientDataGET(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchClientData: refetch });
};

export const clientDataOneGET = async (Constants, { id }, handlers = {}) => {
  const paramsDict = {};
  if (id !== undefined) {
    paramsDict['id'] = `eq.${renderParam(id)}`;
  }
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/create_client${renderQueryString(
    paramsDict
  )}`;
  const options = {
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useClientDataOneGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['clientDatum', args],
    () => clientDataOneGET(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['clientData']),
    }
  );
};

export const FetchClientDataOneGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useClientDataOneGET(
    { id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchClientDataOne: refetch });
};

export const clientProfileGET = async (Constants, _args, handlers = {}) => {
  const paramsDict = {};
  paramsDict['select'] = '"*"';
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/client${renderQueryString(
    paramsDict
  )}`;
  const options = {
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useClientProfileGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['reviews', args],
    () => clientProfileGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchClientProfileGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useClientProfileGET(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchClientProfile: refetch });
};

export const fetchGET = async (Constants, _args, handlers = {}) => {
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/auth/v1/user`;
  const options = {
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
      authorization: Constants['AUTHORIZATION_HEADER'],
    }),
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useFetchGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['supabaseFetchGET', args],
    () => fetchGET(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['supabaseFetchGETS']),
    }
  );
};

export const FetchFetchGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useFetchGET({}, { refetchInterval, handlers: { onData, ...handlers } });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchFetch: refetch });
};

export const fetchnameGET = async (Constants, _args, handlers = {}) => {
  const paramsDict = {};
  paramsDict['select'] = 'firstname';
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/create_client${renderQueryString(
    paramsDict
  )}`;
  const options = {
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useFetchnameGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['fetchname', args],
    () => fetchnameGET(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['fetchnames']),
    }
  );
};

export const FetchFetchnameGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useFetchnameGET(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchFetchname: refetch });
};

export const findClientbynamesGET = async (
  Constants,
  { name },
  handlers = {}
) => {
  const paramsDict = {};
  paramsDict['firstname'] = name !== undefined ? `eq.${renderParam(name)}` : '';
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/create_client${renderQueryString(
    paramsDict
  )}`;
  const options = {
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useFindClientbynamesGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['findClientbyname', args],
    () => findClientbynamesGET(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['findClientbynames']),
    }
  );
};

export const FetchFindClientbynamesGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  name,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useFindClientbynamesGET(
    { name },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchFindClientbynames: refetch });
};

export const findclientGET = async (Constants, { id }, handlers = {}) => {
  const paramsDict = {};
  paramsDict['select'] = '"*"';
  paramsDict['id'] = id !== undefined ? `eq.${renderParam(id)}` : '';
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/create_client${renderQueryString(
    paramsDict
  )}`;
  const options = {
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useFindclientGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['findclient', args],
    () => findclientGET(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['findclients']),
    }
  );
};

export const FetchFindclientGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useFindclientGET(
    { id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchFindclient: refetch });
};

export const findprofessionalGET = async (Constants, { id }, handlers = {}) => {
  const paramsDict = {};
  paramsDict['select'] = '*';
  paramsDict['id'] = id !== undefined ? `eq.${renderParam(id)}` : '';
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/create_professional${renderQueryString(
    paramsDict
  )}`;
  const options = {
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useFindprofessionalGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['findprofessional ', args],
    () => findprofessionalGET(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['findprofessional s']),
    }
  );
};

export const FetchFindprofessionalGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useFindprofessionalGET(
    { id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchFindprofessional: refetch });
};

export const findprofessionalbynameGET = async (
  Constants,
  { name },
  handlers = {}
) => {
  const paramsDict = {};
  paramsDict['firstname'] = name !== undefined ? `eq.${renderParam(name)}` : '';
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/professionalprofile${renderQueryString(
    paramsDict
  )}`;
  const options = {
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useFindprofessionalbynameGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['findprofessionalbyname', args],
    () => findprofessionalbynameGET(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () =>
        queryClient.invalidateQueries(['findprofessionalbynames']),
    }
  );
};

export const FetchFindprofessionalbynameGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  name,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useFindprofessionalbynameGET(
    { name },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchFindprofessionalbyname: refetch,
  });
};

export const findproffessionalGET = async (
  Constants,
  { id },
  handlers = {}
) => {
  const paramsDict = {};
  paramsDict['select'] = '*';
  paramsDict['id'] = id !== undefined ? `eq.${renderParam(id)}` : '';
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/create_professional${renderQueryString(
    paramsDict
  )}`;
  const options = {
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useFindproffessionalGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['findprofessional', args],
    () => findproffessionalGET(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['findprofessionals']),
    }
  );
};

export const FetchFindproffessionalGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useFindproffessionalGET(
    { id },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchFindproffessional: refetch });
};

export const gadgetdescriptionGET = async (Constants, _args, handlers = {}) => {
  const paramsDict = {};
  paramsDict['select'] = 'gadgets_description';
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/professionalprofile${renderQueryString(
    paramsDict
  )}`;
  const options = {
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useGadgetdescriptionGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['gadget_description', args],
    () => gadgetdescriptionGET(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['gadget_descriptions']),
    }
  );
};

export const FetchGadgetdescriptionGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useGadgetdescriptionGET(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchGadgetdescription: refetch });
};

export const getCountryGET = async (Constants, _args, handlers = {}) => {
  const paramsDict = {};
  paramsDict['select'] = 'country';
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/create_professional${renderQueryString(
    paramsDict
  )}`;
  const options = {
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useGetCountryGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['getcountries', args],
    () => getCountryGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchGetCountryGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useGetCountryGET(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchGetCountry: refetch });
};

export const getOneclientProfileGET = async (
  Constants,
  { name },
  handlers = {}
) => {
  const paramsDict = {};
  paramsDict['firstname'] = name !== undefined ? `eq.${renderParam(name)}` : '';
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/create_client${renderQueryString(
    paramsDict
  )}`;
  const options = {
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useGetOneclientProfileGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['getclient', args],
    () => getOneclientProfileGET(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['getclients']),
    }
  );
};

export const FetchGetOneclientProfileGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  name,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useGetOneclientProfileGET(
    { name },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchGetOneclientProfile: refetch,
  });
};

export const getchatsGET = async (Constants, _args, handlers = {}) => {
  const paramsDict = {};
  paramsDict['select'] = '"*"';
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/chat${renderQueryString(
    paramsDict
  )}`;
  const options = {
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useGetchatsGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['getchat', args],
    () => getchatsGET(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['getchats']),
    }
  );
};

export const FetchGetchatsGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useGetchatsGET(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchGetchats: refetch });
};

export const getpriceGET = async (Constants, _args, handlers = {}) => {
  const paramsDict = {};
  paramsDict['select'] = 'rate';
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/professionalprofile${renderQueryString(
    paramsDict
  )}`;
  const options = {
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useGetpriceGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['getPrices', args],
    () => getpriceGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchGetpriceGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useGetpriceGET(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchGetprice: refetch });
};

export const loginPOST = async (
  Constants,
  { loginEmail, loginPassword },
  handlers = {}
) => {
  const paramsDict = {};
  paramsDict['grant_type'] = 'password';
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/auth/v1/token${renderQueryString(
    paramsDict
  )}`;
  const options = {
    body: JSON.stringify({ email: loginEmail, password: loginPassword }),
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
    method: 'POST',
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useLoginPOST = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['supabaseLoginPOST', args],
    () => loginPOST(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['supabaseLoginPOSTS']),
    }
  );
};

export const FetchLoginPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  loginEmail,
  loginPassword,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useLoginPOST(
    { loginEmail, loginPassword },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchLogin: refetch });
};

export const profesionalCardGET = async (Constants, _args, handlers = {}) => {
  const paramsDict = {};
  paramsDict['select'] = '"*"';
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/professionalprofile${renderQueryString(
    paramsDict
  )}`;
  const options = {
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useProfesionalCardGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['professional_cards', args],
    () => profesionalCardGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchProfesionalCardGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useProfesionalCardGET(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchProfesionalCard: refetch });
};

export const professionalpriceGET = async (Constants, _args, handlers = {}) => {
  const paramsDict = {};
  paramsDict['select'] = '"rate"';
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/professionalprofile${renderQueryString(
    paramsDict
  )}`;
  const options = {
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useProfessionalpriceGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['profprices', args],
    () => professionalpriceGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchProfessionalpriceGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useProfessionalpriceGET(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchProfessionalprice: refetch });
};

export const professionalprofileGET = async (
  Constants,
  _args,
  handlers = {}
) => {
  const paramsDict = {};
  paramsDict['select'] = '"*"';
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/professionalprofile${renderQueryString(
    paramsDict
  )}`;
  const options = {
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useProfessionalprofileGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['professionalprofiles', args],
    () => professionalprofileGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchProfessionalprofileGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useProfessionalprofileGET(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchProfessionalprofile: refetch,
  });
};

export const professionalprofile2GET = async (
  Constants,
  _args,
  handlers = {}
) => {
  const paramsDict = {};
  paramsDict['select'] = '"*"';
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/professionalprofile${renderQueryString(
    paramsDict
  )}`;
  const options = {
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useProfessionalprofile2GET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['professionalprofile', args],
    () => professionalprofile2GET(Constants, args, handlers),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['professionalprofiles']),
    }
  );
};

export const FetchProfessionalprofile2GET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useProfessionalprofile2GET(
    {},
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchProfessionalprofile2: refetch,
  });
};

export const showClientsGET = async (Constants, { select }, handlers = {}) => {
  const paramsDict = {};
  paramsDict['select'] = select !== undefined ? renderParam(select) : '';
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/create_client${renderQueryString(
    paramsDict
  )}`;
  const options = {
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useShowClientsGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['clients', args],
    () => showClientsGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchShowClientsGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  select,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useShowClientsGET(
    { select },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchShowClients: refetch });
};

export const showProfessionalGET = async (
  Constants,
  { select },
  handlers = {}
) => {
  const paramsDict = {};
  if (select !== undefined) {
    paramsDict['select'] = renderParam(select);
  }
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/create_professional${renderQueryString(
    paramsDict
  )}`;
  const options = {
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useShowProfessionalGET = (
  args = {},
  { refetchInterval, handlers = {} } = {}
) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['showprofessionals', args],
    () => showProfessionalGET(Constants, args, handlers),
    {
      refetchInterval,
    }
  );
};

export const FetchShowProfessionalGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  select,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    refetch,
  } = useShowProfessionalGET(
    { select },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchShowProfessional: refetch });
};

export const signupPOST = async (
  Constants,
  { signupEmail, signupPassword },
  handlers = {}
) => {
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/auth/v1/signup`;
  const options = {
    body: JSON.stringify({ email: signupEmail, password: signupPassword }),
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
    method: 'POST',
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useSignupPOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => signupPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('get user', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('get user');
        queryClient.invalidateQueries('get users');
      },
    }
  );
};

export const FetchSignupPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  signupEmail,
  signupPassword,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useSignupPOST(
    { signupEmail, signupPassword },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchSignup: refetch });
};

export const signupProfessionalsPOST = async (
  Constants,
  { country, email, fname, pass, profession, sname },
  handlers = {}
) => {
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/create_professional`;
  const options = {
    body: JSON.stringify({
      firstname: fname,
      surname: sname,
      email: email,
      password: pass,
      country: country,
      profession: profession,
    }),
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
    method: 'POST',
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useSignupProfessionalsPOST = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      signupProfessionalsPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('profreg', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('profreg');
        queryClient.invalidateQueries('profregs');
      },
    }
  );
};

export const FetchSignupProfessionalsPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  country,
  email,
  fname,
  pass,
  profession,
  sname,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useSignupProfessionalsPOST(
    { country, email, fname, pass, profession, sname },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({
    loading,
    data,
    error,
    refetchSignupProfessionals: refetch,
  });
};

export const signupuserPOST = async (
  Constants,
  { country, email, firstname, password, surname },
  handlers = {}
) => {
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/auth/v1/signup`;
  const options = {
    body: JSON.stringify({
      email: email,
      password: password,
      data: { firstname: firstname, surname: surname, country: country },
    }),
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      apikey: Constants['API_KEY_HEADER'],
    }),
    method: 'POST',
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useSignupuserPOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => signupuserPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('get user', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('get user');
        queryClient.invalidateQueries('get users');
      },
    }
  );
};

export const FetchSignupuserPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  country,
  email,
  firstname,
  password,
  surname,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useSignupuserPOST(
    { country, email, firstname, password, surname },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchSignupuser: refetch });
};

export const submitDataPOST = async (
  Constants,
  {
    Institute,
    StartDate,
    bioinput,
    comStartDate,
    comendDate,
    company,
    countryValue,
    endDate,
    fullAnmeValue,
    id,
  },
  handlers = {}
) => {
  const paramsDict = {};
  if (id !== undefined) {
    paramsDict['id'] = `eq.${renderParam(id)}`;
  }
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/professionalprofile${renderQueryString(
    paramsDict
  )}`;
  const options = {
    body: JSON.stringify({
      firstname: fullAnmeValue,
      surname: fullAnmeValue,
      country: countryValue,
      institute: Institute,
      Biography: bioinput,
      startedWork: comStartDate,
      endedWork: comendDate,
      startDate: StartDate,
      endDate: endDate,
      company: company,
    }),
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      Prefer: 'return=representation',
      apikey: Constants['API_KEY_HEADER'],
    }),
    method: 'POST',
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useSubmitDataPOST = (initialArgs = {}, { handlers = {} } = {}) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args => submitDataPOST(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('submitData', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('submitDatum');
        queryClient.invalidateQueries('submitData');
      },
    }
  );
};

export const FetchSubmitDataPOST = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  Institute,
  StartDate,
  bioinput,
  comStartDate,
  comendDate,
  company,
  countryValue,
  endDate,
  fullAnmeValue,
  id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = useSubmitDataPOST(
    {
      Institute,
      StartDate,
      bioinput,
      comStartDate,
      comendDate,
      company,
      countryValue,
      endDate,
      fullAnmeValue,
      id,
    },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  return children({ loading, data, error, refetchSubmitData: refetch });
};

export const updateClientDataPATCH = async (
  Constants,
  {
    Clientmale,
    clientAddress,
    clientCountryValue,
    clientDob,
    clientEmail,
    clientFirstName,
    clientPassword,
    clientPhoneNumber,
    clientSurname,
    clientfemale,
    id,
  },
  handlers = {}
) => {
  const paramsDict = {};
  if (id !== undefined) {
    paramsDict['id'] = `eq.${renderParam(id)}`;
  }
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/create_client${renderQueryString(
    paramsDict
  )}`;
  const options = {
    body: JSON.stringify({
      firstname: clientFirstName,
      surname: clientSurname,
      country: clientCountryValue,
      password: clientPassword,
      email: clientEmail,
      dob: clientDob,
      address: clientAddress,
      male: Clientmale,
      phoneNumber: clientPhoneNumber,
      female: clientfemale,
    }),
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      Prefer: 'return=representation',
      apikey: Constants['API_KEY_HEADER'],
    }),
    method: 'PATCH',
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useUpdateClientDataPATCH = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      updateClientDataPATCH(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('updateData', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('updateDatum');
        queryClient.invalidateQueries('updateData');
      },
    }
  );
};

export const updateClientNumPATCH = async (
  Constants,
  { clientPhoneNumber, id },
  handlers = {}
) => {
  const paramsDict = {};
  if (id !== undefined) {
    paramsDict['id'] = `eq.${renderParam(id)}`;
  }
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/create_client${renderQueryString(
    paramsDict
  )}`;
  const options = {
    body: JSON.stringify({ phoneNumber: clientPhoneNumber }),
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      Prefer: 'return=representation',
      apikey: Constants['API_KEY_HEADER'],
    }),
    method: 'PATCH',
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useUpdateClientNumPATCH = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      updateClientNumPATCH(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('updateData', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('updateDatum');
        queryClient.invalidateQueries('updateData');
      },
    }
  );
};

export const updateProfessionalDataPATCH = async (
  Constants,
  {
    EndDate,
    Institute,
    bioinput,
    comStartDate,
    comendDate,
    company,
    countryValue,
    firstname,
    id,
    profPassword,
    profdDob,
    profemail,
    proffemale,
    profmale,
    startDate,
    surname,
  },
  handlers = {}
) => {
  const paramsDict = {};
  if (id !== undefined) {
    paramsDict['id'] = `eq.${renderParam(id)}`;
  }
  const url = `https://irspcsnkpnsjnitszuxg.supabase.co/rest/v1/professionalprofile${renderQueryString(
    paramsDict
  )}`;
  const options = {
    body: JSON.stringify({
      firstname: firstname,
      surname: surname,
      country: countryValue,
      institute: Institute,
      company: company,
      Biography: bioinput,
      startDate: startDate,
      endDate: EndDate,
      startedWork: comStartDate,
      endedDate: comendDate,
      password: profPassword,
      email: profemail,
      dob: profdDob,
      male: profmale,
      female: proffemale,
    }),
    headers: cleanHeaders({
      Accept: 'application/json',
      'Content-type': 'application/json',
      Prefer: 'return=representation',
      apikey: Constants['API_KEY_HEADER'],
    }),
    method: 'PATCH',
  };
  const res = await fetch(url, options);
  return handleResponse(res, handlers);
};

export const useUpdateProfessionalDataPATCH = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    args =>
      updateProfessionalDataPATCH(
        Constants,
        { ...initialArgs, ...args },
        handlers
      ),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('updateData', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('updateDatum');
        queryClient.invalidateQueries('updateData');
      },
    }
  );
};
