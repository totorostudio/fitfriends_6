import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../../state';
import { APIRoute } from '../../../const';

export const subscribeCoachAction = createAsyncThunk<void, { coachId: String }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/subscribeCoach',
  async ({ coachId }, { extra: api, rejectWithValue }) => {
    try {
      await api.post(`${APIRoute.Subscribe}/${coachId}`);
    } catch (error) {
      return rejectWithValue('An error occurred while subscribing');
    }
  }
);
