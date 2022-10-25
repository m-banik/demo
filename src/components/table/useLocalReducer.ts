import { useReducer, Reducer } from 'react';
import { produce } from 'immer';
import { CandidateInterface } from '@Common/types';

type StateType = {
  rows: CandidateInterface[];
};

enum ActionsTypesEnum {
  SET_ROWS = 'SET_ROWS'
}

export const actions = {
  setRows: (rows: CandidateInterface[]) =>
    ({
      type: ActionsTypesEnum.SET_ROWS,
      rows
    } as const)
};

type ActionType = ReturnType<typeof actions[keyof typeof actions]>;

type LocalReducerType = Reducer<StateType, ActionType>;

const localReducer: LocalReducerType = (state, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ActionsTypesEnum.SET_ROWS:
        draft.rows = action.rows;
        break;
      default:
        break;
    }
  });

type UseLocalReducerType = () => {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};

export const useLocalReducer: UseLocalReducerType = () => {
  const initialState: StateType = {
    rows: []
  };

  const [state, dispatch] = useReducer<LocalReducerType>(
    localReducer,
    initialState
  );

  return {
    state,
    dispatch
  };
};
