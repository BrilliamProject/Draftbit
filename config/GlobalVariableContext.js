import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DeviceVariables = {
  accessToken:
    'eyJhbGciOiJIUzI1NiIsImtpZCI6IkJJdVRMd2FaYU9xOFVmSUIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyc3Bjc25rcG5zam5pdHN6dXhnLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiIyYjcwMTIyZC03ZDQ4LTRjZGYtYmNkYi1hZjE4ZjliNTliMzYiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI0MTc3MTQ4LCJpYXQiOjE3MjQxNzM1NDgsImVtYWlsIjoic29tZUBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7ImVtYWlsIjoic29tZUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwic3ViIjoiMmI3MDEyMmQtN2Q0OC00Y2RmLWJjZGItYWYxOGY5YjU5YjM2In0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoicGFzc3dvcmQiLCJ0aW1lc3RhbXAiOjE3MjQxNzM1NDh9XSwic2Vzc2lvbl9pZCI6IjA1Y2JjZTQ4LTgzYWYtNDE2YS04OTE5LTNmMTA0MDlkNGNhYSIsImlzX2Fub255bW91cyI6ZmFsc2V9.6hyXCLOjvX-mA5ZotEfpr_wvmf22p-vr0T3MLCc1AeA',
  accountPage: true,
  isEditMode: true,
  Language: 'some Language',
  refreshToken: 'fmqaQCJ2cyOYPlF535ps9w',
  setEditMode: true,
  showActionSheet: false,
  __env__: 'Development',
};
export const AppVariables = {
  API_KEY_HEADER:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlyc3Bjc25rcG5zam5pdHN6dXhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM4MzQ3NjcsImV4cCI6MjAzOTQxMDc2N30.HW6O6WwUOh0A0iu84izo0FP36r0cZOMwVECLIHZEADE',
  AUTH_HEADER: '',
  authId: '',
  AUTHORIZATION_HEADER:
    'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6IkJJdVRMd2FaYU9xOFVmSUIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2lyc3Bjc25rcG5zam5pdHN6dXhnLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiJmNjk5NDYwZi1jODYyLTRmN2YtODdmNi1jMWNmZGUzNzczODMiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI0ODI2MTcxLCJpYXQiOjE3MjQ4MjI1NzEsImVtYWlsIjoicm9tZUBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7ImNvdW50cnkiOiJNZXhpY28iLCJlbWFpbCI6InJvbWVAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoiUm9tZSBTdHJlZXQiLCJwaG9uZV92ZXJpZmllZCI6ZmFsc2UsInN1YiI6ImY2OTk0NjBmLWM4NjItNGY3Zi04N2Y2LWMxY2ZkZTM3NzM4MyJ9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsImFhbCI6ImFhbDEiLCJhbXIiOlt7Im1ldGhvZCI6InBhc3N3b3JkIiwidGltZXN0YW1wIjoxNzI0ODIyNTcxfV0sInNlc3Npb25faWQiOiIwMTU3YTA1ZS03YjRhLTRiOWItOTY1Ny00NWM3ZWMzZThhNzgiLCJpc19hbm9ueW1vdXMiOmZhbHNlfQ.JbFV0U5FhCFyhPiRcTZ7c5fTtBOcgXe9Q3cyF_1pYa4',
  authUser: '',
  chatdoc: true,
  clientProfile: '',
  ERROR_MESSAGE: '',
  findProfessional: 'Amina',
  listOfCountries: '',
  rate: '$23/hour',
  UserLoginRecord: '',
};
const GlobalVariableContext = React.createContext();
const GlobalVariableUpdater = React.createContext();
const keySuffix = '';

// Attempt to parse a string as JSON. If the parse fails, return the string as-is.
// This is necessary to account for variables which are already present in local
// storage, but were not stored in JSON syntax (e.g. 'hello' instead of '"hello"').
function tryParseJson(str) {
  try {
    return JSON.parse(str);
  } catch {
    return str;
  }
}

class GlobalVariable {
  /**
   *  Filters an object of key-value pairs for those that should be
   *  persisted to storage, and persists them.
   *
   *  @param values Record<string, string>
   */
  static async syncToLocalStorage(values) {
    const update = Object.entries(values)
      .filter(([key]) => key in DeviceVariables)
      .map(([key, value]) => [key + keySuffix, JSON.stringify(value)]);

    if (update.length > 0) {
      await AsyncStorage.multiSet(update);
    }

    return update;
  }

  static async loadLocalStorage() {
    const keys = Object.keys(DeviceVariables);
    const entries = await AsyncStorage.multiGet(
      keySuffix ? keys.map(k => k + keySuffix) : keys
    );

    // If values isn't set, use the default. These will be written back to
    // storage on the next render.
    const withDefaults = entries.map(([key_, value]) => {
      // Keys only have the suffix appended in storage; strip the key
      // after they are retrieved
      const key = keySuffix ? key_.replace(keySuffix, '') : key_;
      return [key, value ? tryParseJson(value) : DeviceVariables[key]];
    });

    return Object.fromEntries(withDefaults);
  }
}

class State {
  static defaultValues = {
    ...AppVariables,
    ...DeviceVariables,
  };

  static reducer(state, { type, payload }) {
    switch (type) {
      case 'RESET':
        return { values: State.defaultValues, __loaded: true };
      case 'LOAD_FROM_ASYNC_STORAGE':
        return { values: { ...state.values, ...payload }, __loaded: true };
      case 'UPDATE':
        return state.__loaded
          ? {
              ...state,
              values: {
                ...state.values,
                [payload.key]: payload.value,
              },
            }
          : state;
      default:
        return state;
    }
  }

  static initialState = {
    __loaded: false,
    values: State.defaultValues,
  };
}

export function GlobalVariableProvider({ children }) {
  const [state, dispatch] = React.useReducer(State.reducer, State.initialState);

  React.useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  // This effect runs on mount to overwrite the default value of any
  // key that has a local value.
  React.useEffect(() => {
    async function initialStorageLoader() {
      try {
        const payload = await GlobalVariable.loadLocalStorage();
        if (
          payload?.__env__ &&
          DeviceVariables.__env__ &&
          payload.__env__ !== DeviceVariables.__env__
        ) {
          console.log(
            `Publication Environment changed from ${payload.__env__} to ${DeviceVariables.__env__}. Refreshing variables`
          );
          dispatch({
            type: 'LOAD_FROM_ASYNC_STORAGE',
            payload: DeviceVariables,
          });
        } else {
          dispatch({ type: 'LOAD_FROM_ASYNC_STORAGE', payload });
        }
      } catch (err) {
        console.error(err);
      }
    }
    initialStorageLoader();
  }, []);

  // This effect runs on every state update after the initial load. Gives us
  // best of both worlds: React state updates sync, but current state made
  // durable next async tick.
  React.useEffect(() => {
    async function syncToAsyncStorage() {
      try {
        await GlobalVariable.syncToLocalStorage(state.values);
      } catch (err) {
        console.error(err);
      }
    }
    if (state.__loaded) {
      syncToAsyncStorage();
    }
  }, [state]);

  const onLayoutRootView = React.useCallback(async () => {
    if (state.__loaded) {
      await SplashScreen.hideAsync();
    }
  }, [state.__loaded]);

  // We won't want an app to read a default state when there might be one
  // incoming from storage.
  if (!state.__loaded) {
    return null;
  }

  return (
    <GlobalVariableUpdater.Provider
      value={dispatch}
      onLayout={onLayoutRootView}
    >
      <GlobalVariableContext.Provider value={state.values}>
        {children}
      </GlobalVariableContext.Provider>
    </GlobalVariableUpdater.Provider>
  );
}

// Hooks
export function useSetValue() {
  const dispatch = React.useContext(GlobalVariableUpdater);
  return ({ key, value }) => {
    dispatch({ type: 'UPDATE', payload: { key, value } });
    return value;
  };
}

export function useValues() {
  return React.useContext(GlobalVariableContext);
}
